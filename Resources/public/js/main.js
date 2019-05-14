PNotify.prototype.options.styling = "bootstrap3";
PNotify.prototype.options.styling = "fontawesome";

$win = $(window);
var wpos, space;
$footer = $('#form-bloque-botones');
function h() {
    var ipos = parseInt($footer.offset().top);
    wpos = $win.scrollTop();
    space = $win.height() - $footer.height() * 4;

    if (wpos + space < (ipos - 250)) {
        $footer.addClass('fixed_footer');
    } else {
        $footer.removeClass('fixed_footer');
    }
}

$('body').on('click', '.help-block a', function(event) {
    event.preventDefault();
    /* Act on the event */
    var url = $(this).attr('href');
    window.open(url , '_blank');
});

$('body').loadingIndicator();
var loader = $('body').data("loadingIndicator");

$.ajaxSetup({
    beforeSend: function(){
        loader.show();
    },
    complete: function(){
        loader.hide();
        load_zoom_img();
    }
});

function loadContent(href, param){
    param = typeof param !== 'undefined' ? param : false;

    $('#main-content')
    .find("#guts")
    .fadeOut(200, function() {
        $('#main-content').hide().load(href + '?ajax=true', param, function() {
            $('#main-content').fadeIn(200);

            $('.sidebar a').parent().removeClass('active');
            if ($('.sidebar a').parent().parent().hasClass('treeview-menu')) {
                $('.sidebar a').parent().parent().parent().removeClass('active');
            }
            var path = href.split('/'),
                last = path[path.length-1];
            if ( $.isNumeric(last) || last == 'new' ) {
                path[path.length-1] = '';
            }
            var activate = $('.sidebar a[href="'+path.join('/')+'"]');
            activate.parent().addClass('active');
            if (activate.parent().parent().hasClass('treeview-menu')) {
                activate.parent().parent().parent().addClass('active');
            }
        });
    });
}


function getConfirm(confirmMessage,callback){
    confirmMessage = confirmMessage || '';

    $('#confirmbox').modal({show:true,
                            backdrop:false,
                            keyboard: false,
    });

    $('#confirmFalse').click(function(){
        $('#confirmbox').modal('hide');
        if (callback) callback(false);

    });
    $('#confirmTrue').click(function(){
        $('#confirmbox').modal('hide');
        if (callback) callback(true);
    });
}

function update_collection_order() {
    $('ul.collection').each(function(idx) {
        var bloque = $(this).attr('id');
        $('#'+bloque+' > li.media').each(function(idx) {
            actual = $(this).attr('id').replace('campo-', '');
            var separar = actual.split('_'),
            numero_actual = separar[separar.length-1];
            separar[separar.length-1] = idx;
            var nuevo = separar.join('_');

            $(this).find('[id*="'+actual+'"]').each(function(){
                var interno = $(this).attr('id');
                $(this).attr('id', interno.replace(actual, nuevo));
            });
            $(this).find('[data-return*="'+actual+'"]').each(function(){
                var interno = $(this).attr('data-return');
                $(this).attr('data-return', interno.replace(actual, nuevo));
            });
            $(this).find('[for*="'+actual+'"]').each(function(){
                var interno = $(this).attr('for');
                $(this).attr('for', interno.replace(actual, nuevo));
            });
            $(this).find('[name*="['+numero_actual+']"]').each(function(){
                var interno = $(this).attr('name');
                $(this).attr('name', interno.replace('['+numero_actual+']', '['+idx+']'));
            });
            $(this).attr('id', 'campo-'+nuevo);
        });
    });
}

function id_existe_collection(name, id){
    var idname_1 = '#t_' + name + '_' + id;
    var idname_2 = '#' + name + '_' + id;
    if( $(idname_1).length == 0 && $(idname_2).length == 0 ) {
        return id;
    } else {
        return id_existe_collection(name, (parseInt(id)+1));
    }
}

function load_sortable() {
    $('.collection').each(function(index, el) {
        var contentid = $(this).attr('id');
        var list = document.getElementById(contentid);
        Sortable.create(list); // That's all.

        // var dataid = $(this).data('id');
        // var container = document.getElementById(dataid);
        // var sort = Sortable.create(container, {
        //     animation: 150, // ms, animation speed moving items when sorting, `0` — without animation
        //     handle: '.mover-'+dataid, // Restricts sort start click/touch to the specified element
        //     draggable: ".tile", // Specifies which items inside the element should be sortable
        //     onUpdate: function (evt/**Event*/){
        //         var item = evt.item; // the current dragged HTMLElement
        //     }
        // });

        // $('.listado-group-'+dataid).sortable({
        //     group: 'no-drop',
        //     handle: '.mover-'+dataid,
        //     onDragStart: function ($item, container, _super) {
        //         // Duplicate items of the no drop area
        //         if(!container.options.drop)
        //         $item.clone().insertAfter($item);
        //         _super($item, container);
        //         // var id_textarea = ui.item.find("textarea").attr("id");
        //         // if (CKEDITOR.instances[id_textarea]) {
        //         //     CKEDITOR.instances[id_textarea].destroy();
        //         //     delete CKEDITOR.instances[id_textarea];
        //         // }
        //     },
        //     afterMove: function ($placeholder, container, $closestItemOrContainer)
        //     {
        //         // var old_html = ui.item.html();
        //         // ui.item.html(old_html);
        //     }
        // });
    });

    // $('.second-group').sortable({
    //     group: 'no-drop',
    //     handle: '.mover'
    // });
}

function destroy_sortable() {
    $(".collection").sortable("destroy");
    $(".collection li").removeClass('ui-state-default');
}

Dropzone.autoDiscover = false;

var myDropzone = new Dropzone("form#my-awesome-dropzone", { url: url_upload});

if ( CKEDITOR.env.ie && CKEDITOR.env.version < 9 )
    CKEDITOR.tools.enableHtml5Elements( document );

/* Original */
/*CKEDITOR.config.toolbar = [
    { name: 'document', items: [ 'Source', '-', 'NewPage', 'Preview', '-', 'Templates' ] }, // Defines toolbar group with name (used to create voice label) and items in 3 subgroups.
    [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],          // Defines toolbar group without name.
    '/',                                                                                    // Line break - next group will be placed in new line.
    { name: 'basicstyles', items : [ 'Bold','Italic','-','Subscript','Superscript','-','RemoveFormat' ] },
    { name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ], items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    { name: 'links', items: [ 'Link', 'Unlink' ] },
    { name: 'insert', items: [ 'Table', 'Youtube' ] }
];*/

/* Reducido */
CKEDITOR.config.toolbar = [
    [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],          // Defines toolbar group without name.
    '/',                                                                                    // Line break - next group will be placed in new line.
    { name: 'basicstyles', items : [ 'Bold','Italic','-','Subscript','Superscript','-','RemoveFormat' ] },
    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
    { name: 'links', items: [ 'Link', 'Unlink' ] }
];

$(document).on('click', '.media-right .eliminar', function(){
    $(this).parent().parent().remove();
    formHasChanged = true;
});

$(document).on('change', '.box .form-group input, .box .form-group select, .box .form-group textarea', function (e) {
    unsaved = true;
});

$(document).on('click', '#main-content .collection-add', function(e) {
    e.preventDefault();
    var id_actual = $(this).parent().attr('id');
        total = $('#field-'+id_actual+' > li.media').length,
        newWidget = $(this).parent().attr('data-prototype');
    newWidget = newWidget.replace(/__opt_prot__/g, total);

    var newLi = $('<li class="media"></li>').attr('id','campo-'+id_actual+'_'+total)
        .append($('<div class="media-body"></div>').html(newWidget))
        .append($('<div class="media-right">'+
                    '<button class="close eliminar" type="button"><i class="fa fa-trash-o"></i></button>'+
                    '<button class="close mover" type="button"><i class="fa fa-arrows"></i></button>'+
                '</div>'));
    newLi.appendTo('#field-'+id_actual);
    unsaved = true;
});

$(document).on('click', '#main-content .media .trash', function() {
    var retornar = $(this).attr('data-id');
    $('#'+retornar).attr('value', '');
    $('#t_'+retornar).find('.fancybox, .trash, .nombre-img').addClass('hide');
    formHasChanged = true;
});

function CKupdate(){
    for ( instance in CKEDITOR.instances )
        CKEDITOR.instances[instance].updateElement();
}
window.addEventListener('popstate', function(){
    loadContent('');
});
$(document).ready(function () {
    load_sortable();
    loader.hide();
    load_zoom_img();
    $(document).on('submit', '#form-zero',function() {
        return false;
    });
    $(document).on('submit', '.modalnoajax form',function() {
        return false;
    });
    $(document).on('click', '#FORM_DELETE button[type="submit"]', function(event) {
        unsaved = false;
        if(Modernizr.history){
            var form_data = $('#FORM_DELETE form').serializeArray();
            form_data.push( {'name':$(this).attr('name')});
            loadContent($('#FORM_DELETE form').attr('action'), form_data);
        }
        $('#FORM_DELETE').modal('hide');
    });
    $(document).on('click', '#form-bloque-botones button[type="submit"]', function() {
        update_collection_order();
        CKupdate();
        unsaved = false;
        if(Modernizr.history){
            var form_data = $('#form-zero').serializeArray();
            form_data.push( {'name':$(this).attr('name')});
            loadContent($('#form-zero').attr('action'), form_data);
        }
    });

    window.onbeforeunload = function (e) {
        if (unsaved) {
            var message = msg_warning_form_no_saved.replace('<br>','\n'), e = e || window.event;
            if (e) {
                e.returnValue = message;
            }
            return message;
        }
    }

    // filebrowser
    $(document).on('click', '.open-filebrowser', function(e) {
        e.preventDefault();
        var retornar = $(this).attr('data-return');
        $('table#filemanager').attr('data-retornar', retornar);
        var ruta = $('#'+retornar).val().replace('uploads','').split('/');
        ruta.splice(-1,1);
        ruta = ruta.join('/');
        browse(ruta);
    });

    // block change password
    var link_cp = $('#FOSChangePasswordButton'),
        link_cp_href = link_cp.attr('href'),
        modal_cp = $('#FOSChangePassword');
    link_cp.click(function(e) {
        e.preventDefault();
        modal_cp.find('.modal-content').load(link_cp_href, function() {
            modal_cp.modal('show');
        });
    });
    modal_cp.on('submit', 'form', function(e) {
        e.preventDefault()
        var form_data = modal_cp.find('form').serializeArray();
        modal_cp.find('.modal-content').load(link_cp_href, form_data, function(response, status, xhr) {
            if (response == 'correcto') {
                modal_cp.modal('hide');
                new PNotify({
                    text: 'Contraseña actualizada',
                    type: 'success',
                    icon: false
                });
            }
        });
        return false;
    });
    if(Modernizr.history){
        $(document).on('click', '.control-ajax a',function() {
            var _link = $(this).attr("href");

            if ($(this).hasClass('no-ajax')) {
                return true;
            }
            if ( _link != '#' ) {
                if (unsaved) {
                    getConfirm(msg_warning_form_no_saved, function(result) {
                        if ( result ) {
                            history.pushState(null, null, _link);
                            loadContent(_link, false);
                            unsaved = false;
                        }
                    });
                }else{
                    history.pushState(null, null, _link);
                    loadContent(_link, false);
                }
                return false;
            }
            return true;
        });
    }
});
