// -------------------------------------------------- MESSAGE BOX
/**
* add a message to the message box. context and type can be omitted.
*/
function add_msg(msg, context, type) {
    context = typeof context !== 'undefined' ? context : 'Info';
    type = typeof type !== 'undefined' ? type : 'info';
    new PNotify({
        text: '<strong>Galer&iacute;a:</strong> ' + msg,
        type: type,
        icon: false
    });
}

function load_zoom_img(){
    $.magnificPopup.instance.popupsCache = {};
    $('.fancybox').magnificPopup({
        type: 'image',
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
            beforeOpen: function() {
                // just a hack that adds mfp-anim class to markup
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = 'mfp-move-horizontal';
            }
        },
        closeOnContentClick: true,
        midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
    });
}

// -------------------------------------------------- BROWSE
/**
* set breadcrumb according to PATH.
*/
function set_breadcrumb() {
    // clear
    $('ol#breadcrumb').html('<li><a href="">Inicio</a></li>');

    // add parts
    var parts = PATH.split('/');
    var html = '';
    var link = '';
    for (var i = 1; i < parts.length; i++) {
        if (i != parts.length - 1) {
            link += i == 0 ? parts[i] : '/' + parts[i];
            html += '<li><a href="' + link + '">' + parts[i] + '</a></li>';
        } else {
            html += '<li class="active">' + parts[i] + '</li>';
        }
    }
    $('ol#breadcrumb').append(html);

    // register click event
    $('ol#breadcrumb a').click(function (e) {
        e.preventDefault();
        browse($(e.target).attr('href'));
    });
}

/**
* do the ajax request for the new path.
*/
function browse(path) {
    path = typeof path !== 'undefined' ? path : '';
    $.ajax({
        url: pathListFilemanager,
        data: {data:path},
        cache: false,
        dataType: 'json',
        type: 'POST',
        success: function (result) {
            if (result.status)
            show_content(path, result.files);
            else
            add_msg(result.msg, 'PHP', 'error');
        },
        error: function (jqXHR, status) {
            add_msg(status, 'AJAX', 'error');
        },
        complete: function (){
            loader.hide();
            load_zoom_img();
            $('#gallerybrowser').modal('show');
        }
    });
}

/**
* ajax success callback, set path and add content to table.
*/
function show_content(path, files) {
    PATH = path;
    set_breadcrumb();

    $('table#filemanager').empty();

    for (var i = 0; i < files.length; i++) {
        var f = files[i];

        if (f.folder) {
            f.icon = 'carpeta';
            f.name = $('<a />').attr('href', f.link).text(f.name).click(function (e) {
                e.preventDefault();
                browse($(this).attr('href'));
            });
        } else {
            var extension = f.name.substr( (f.name.lastIndexOf('.') +1) );
            if (f.thumb == 'pdf') {
                f.icon = $('<i class="fa fa-file-pdf-o"></i>');
            }else if (f.thumb == 'doc' || f.thumb == 'docx') {
                f.icon = $('<i class="fa fa-file-word-o"></i>');
            }else if (f.thumb == 'xls' || f.thumb == 'xlsx') {
                f.icon = $('<i class="fa fa-file-excel-o"></i>');
            }else if (f.thumb == 'ppt' || f.thumb == 'pptx') {
                f.icon = $('<i class="fa fa-file-powerpoint-o"></i>');
            }else if ( extension == 'gif' || extension == 'png' || extension == 'jpg' || extension == 'jpeg' ) {
                f.icon = $('<a class="fancybox"/>').attr('href', asset_url+f.link).append($('<img src="'+asset_url+f.thumb+'" />'));
            }

            f.name = $('<a />').attr('href', f.link).text(f.name).click(function (e) {
                e.preventDefault();
                var imagen = $(this).attr('href'),
                    retornar = $('table#filemanager').attr('data-retornar'),
                    file = $(this).text(),
                    extension = file.substr( (file.lastIndexOf('.') +1) );
                $('#'+retornar).attr('value', imagen);
                $('#t_'+retornar).find('.fancybox').attr('href', asset_url+imagen);
                $('#t_'+retornar).find('.nombre-img').text(imagen.substr(8));
                $('#t_'+retornar).find('.trash, .nombre-img').removeClass('hide');
                if ( extension == 'gif' || extension == 'png' || extension == 'jpg' || extension == 'jpeg' ) {
                    $('#t_'+retornar).find('.fancybox').removeClass('hide');
                }else{
                    $('#t_'+retornar).find('.fancybox').addClass('hide');
                }
                $('#gallerybrowser').modal('hide');
                unsaved = true;
            });
        }

        // remove action
        f.remove = $('<a class="btn btn-default btn-xs" />').attr('href', f.link).html('<i class="fa fa-trash"></i>').click(function (e) {
            e.preventDefault();
            $('div#remove input#remove-path').val($(this).attr('href'));
            $('div#remove').modal('show');
        });

        $('table#filemanager').append(
            $('<tr />').append(
                $('<td class="text-center" />').append(f.icon),
                $('<td />').append(f.name).append((f.medidas=='')?'':'<p class="help-block">'+f.medidas+'</p>'),
                $('<td class="hidden-xs"/>').text(f.size),
                $('<td class="hidden-xs"/>').text(f.date),
                $('<td style="text-align:right">').append(f.remove)
            )
        );
    }
    // $.unblockUI();
}

// -------------------------------------------------- PROGRESS BAR
/**
* callback function for progress bar.
*/
function progress_bar(e) {
    var done = e.position || e.loaded;
    var total = e.totalSize || e.total;
    var per = (Math.floor(done / total * 1000) / 10);
    $('div#progress > div.bar').css('width', per + '%').text(per + ' %');
}

// -------------------------------------------------- MODAL SUBMIT
$('div#new form').submit(function (e) {
    $('div#new').modal('hide');
    $.ajax({
        url: pathCreateFolderFilemanager,
        data: {data:$('div#new input#new-path').attr('data-base')+$('div#new input#new-path').val()},
        cache: false,
        dataType: 'json',
        type: 'POST',
        success: function (result) {
            add_msg(result.msg, 'PHP', result.status ? 'success' : 'error');
            browse(PATH);
        },
        error: function (jqXHR, status) {
            add_msg(status, 'AJAX', 'error');
        }
    });
    return false;
});

$('div#remove a.submit').click(function (e) {
    $.ajax({
        url: pathDeleteFilemanager,
        data: {data:$('div#remove input#remove-path').val()},
        cache: false,
        dataType: 'json',
        type: 'POST',
        success: function (result) {
            add_msg(result.msg, 'PHP', result.status ? 'success' : 'error');
            browse(PATH);
        },
        error: function (jqXHR, status) {
            add_msg(status, 'AJAX', 'error');
        }
    });
});

$('div#upload').on('hidden.bs.modal', function (e) {
    myDropzone.removeAllFiles();
    browse(PATH);
    if (!$('body').hasClass('modal-open')) {
        $('body').addClass('modal-open');
    }
});

// -------------------------------------------------- TOOLBOX BUTTONS
$('div#tools a#upload-button').click(function (e) {
    e.preventDefault();
    $('div#upload input#upload-path').val((PATH == '' ? '' : (PATH + '/')));
    $('div#upload').modal('show');
});

$('div#tools a#new-folder-button').click(function (e) {
    e.preventDefault();
    $('div#new input#new-type').val('folder');
    $('div#new input#new-path').attr('data-base', PATH == '' ? '' : (PATH + '/'));
    $('div#new').modal('show');
});

$('div#new').on('shown.bs.modal', function (e) {
    $('#new-path').focus();
});
$('div#new').on('hidden.bs.modal', function (e) {
    $('div#new input#new-path').val('');
    $('div#new input#new-path').attr('data-base', '');
});

$('div#tools a#refresh-button').click(function (e) {
    browse(PATH);
});
