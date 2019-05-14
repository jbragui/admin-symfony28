/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
function _init(){"use strict"
$.AdminLTE.layout={activate:function(){var e=this
e.fix(),e.fixSidebar(),$(window,".wrapper").resize(function(){e.fix(),e.fixSidebar()})},fix:function(){var e=$(".main-header").outerHeight()+$(".main-footer").outerHeight(),t=$(window).height(),n=$(".sidebar").height()
if($("body").hasClass("fixed"))$(".content-wrapper, .right-side").css("min-height",t-$(".main-footer").outerHeight())
else{var i
t>=n?($(".content-wrapper, .right-side").css("min-height",t-e),i=t-e):($(".content-wrapper, .right-side").css("min-height",n),i=n)
var o=$($.AdminLTE.options.controlSidebarOptions.selector)
"undefined"!=typeof o&&o.height()>i&&$(".content-wrapper, .right-side").css("min-height",o.height())}},fixSidebar:function(){return $("body").hasClass("fixed")?("undefined"==typeof $.fn.slimScroll&&window.console&&window.console.error("Error: the fixed layout requires the slimscroll plugin!"),void($.AdminLTE.options.sidebarSlimScroll&&"undefined"!=typeof $.fn.slimScroll&&($(".sidebar").slimScroll({destroy:!0}).height("auto"),$(".sidebar").slimscroll({height:$(window).height()-$(".main-header").height()+"px",color:"rgba(0,0,0,0.2)",size:"3px"})))):void("undefined"!=typeof $.fn.slimScroll&&$(".sidebar").slimScroll({destroy:!0}).height("auto"))}},$.AdminLTE.pushMenu={activate:function(e){var t=$.AdminLTE.options.screenSizes
$(e).on("click",function(e){e.preventDefault(),$(window).width()>t.sm-1?$("body").hasClass("sidebar-collapse")?$("body").removeClass("sidebar-collapse").trigger("expanded.pushMenu"):$("body").addClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").hasClass("sidebar-open")?$("body").removeClass("sidebar-open").removeClass("sidebar-collapse").trigger("collapsed.pushMenu"):$("body").addClass("sidebar-open").trigger("expanded.pushMenu")}),$(".content-wrapper").click(function(){$(window).width()<=t.sm-1&&$("body").hasClass("sidebar-open")&&$("body").removeClass("sidebar-open")}),($.AdminLTE.options.sidebarExpandOnHover||$("body").hasClass("fixed")&&$("body").hasClass("sidebar-mini"))&&this.expandOnHover()},expandOnHover:function(){var e=this,t=$.AdminLTE.options.screenSizes.sm-1
$(".main-sidebar").hover(function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-collapse")&&$(window).width()>t&&e.expand()},function(){$("body").hasClass("sidebar-mini")&&$("body").hasClass("sidebar-expanded-on-hover")&&$(window).width()>t&&e.collapse()})},expand:function(){$("body").removeClass("sidebar-collapse").addClass("sidebar-expanded-on-hover")},collapse:function(){$("body").hasClass("sidebar-expanded-on-hover")&&$("body").removeClass("sidebar-expanded-on-hover").addClass("sidebar-collapse")}},$.AdminLTE.tree=function(e){var t=this,n=$.AdminLTE.options.animationSpeed
$(document).on("click",e+" li a",function(e){var i=$(this),o=i.next()
if(o.is(".treeview-menu")&&o.is(":visible"))o.slideUp(n,function(){o.removeClass("menu-open")}),o.parent("li").removeClass("active")
else if(o.is(".treeview-menu")&&!o.is(":visible")){var r=i.parents("ul").first(),s=r.find("ul:visible").slideUp(n)
s.removeClass("menu-open")
var a=i.parent("li")
o.slideDown(n,function(){o.addClass("menu-open"),r.find("li.active").removeClass("active"),a.addClass("active"),t.layout.fix()})}o.is(".treeview-menu")&&e.preventDefault()})},$.AdminLTE.controlSidebar={activate:function(){var e=this,t=$.AdminLTE.options.controlSidebarOptions,n=$(t.selector),i=$(t.toggleBtnSelector)
i.on("click",function(i){i.preventDefault(),n.hasClass("control-sidebar-open")||$("body").hasClass("control-sidebar-open")?e.close(n,t.slide):e.open(n,t.slide)})
var o=$(".control-sidebar-bg")
e._fix(o),$("body").hasClass("fixed")?e._fixForFixed(n):$(".content-wrapper, .right-side").height()<n.height()&&e._fixForContent(n)},open:function(e,t){t?e.addClass("control-sidebar-open"):$("body").addClass("control-sidebar-open")},close:function(e,t){t?e.removeClass("control-sidebar-open"):$("body").removeClass("control-sidebar-open")},_fix:function(e){var t=this
$("body").hasClass("layout-boxed")?(e.css("position","absolute"),e.height($(".wrapper").height()),$(window).resize(function(){t._fix(e)})):e.css({position:"fixed",height:"auto"})},_fixForFixed:function(e){e.css({position:"fixed","max-height":"100%",overflow:"auto","padding-bottom":"50px"})},_fixForContent:function(e){$(".content-wrapper, .right-side").css("min-height",e.height())}},$.AdminLTE.boxWidget={selectors:$.AdminLTE.options.boxWidgetOptions.boxWidgetSelectors,icons:$.AdminLTE.options.boxWidgetOptions.boxWidgetIcons,animationSpeed:$.AdminLTE.options.animationSpeed,activate:function(e){var t=this
e||(e=document),$(e).on("click",t.selectors.collapse,function(e){e.preventDefault(),t.collapse($(this))}),$(e).on("click",t.selectors.remove,function(e){e.preventDefault(),t.remove($(this))})},collapse:function(e){var t=this,n=e.parents(".box").first(),i=n.find("> .box-body, > .box-footer, > form  >.box-body, > form > .box-footer")
n.hasClass("collapsed-box")?(e.children(":first").removeClass(t.icons.open).addClass(t.icons.collapse),i.slideDown(t.animationSpeed,function(){n.removeClass("collapsed-box")})):(e.children(":first").removeClass(t.icons.collapse).addClass(t.icons.open),i.slideUp(t.animationSpeed,function(){n.addClass("collapsed-box")}))},remove:function(e){var t=e.parents(".box").first()
t.slideUp(this.animationSpeed)}}}function add_msg(e,t,n){t="undefined"!=typeof t?t:"Info",n="undefined"!=typeof n?n:"info",new PNotify({text:"<strong>Galer&iacute;a:</strong> "+e,type:n,icon:!1})}function load_zoom_img(){$.magnificPopup.instance.popupsCache={},$(".fancybox").magnificPopup({type:"image",removalDelay:500,callbacks:{beforeOpen:function(){this.st.image.markup=this.st.image.markup.replace("mfp-figure","mfp-figure mfp-with-anim"),this.st.mainClass="mfp-move-horizontal"}},closeOnContentClick:!0,midClick:!0})}function set_breadcrumb(){$("ol#breadcrumb").html('<li><a href="">Inicio</a></li>')
for(var e=PATH.split("/"),t="",n="",i=1;i<e.length;i++)i!=e.length-1?(n+=0==i?e[i]:"/"+e[i],t+='<li><a href="'+n+'">'+e[i]+"</a></li>"):t+='<li class="active">'+e[i]+"</li>"
$("ol#breadcrumb").append(t),$("ol#breadcrumb a").click(function(e){e.preventDefault(),browse($(e.target).attr("href"))})}function browse(e){e="undefined"!=typeof e?e:"",$.ajax({url:pathListFilemanager,data:{data:e},cache:!1,dataType:"json",type:"POST",success:function(t){t.status?show_content(e,t.files):add_msg(t.msg,"PHP","error")},error:function(e,t){add_msg(t,"AJAX","error")},complete:function(){loader.hide(),load_zoom_img(),$("#gallerybrowser").modal("show")}})}function show_content(e,t){PATH=e,set_breadcrumb(),$("table#filemanager").empty()
for(var n=0;n<t.length;n++){var i=t[n]
if(i.folder)i.icon="carpeta",i.name=$("<a />").attr("href",i.link).text(i.name).click(function(e){e.preventDefault(),browse($(this).attr("href"))})
else{var o=i.name.substr(i.name.lastIndexOf(".")+1)
"pdf"==i.thumb?i.icon=$('<i class="fa fa-file-pdf-o"></i>'):"doc"==i.thumb||"docx"==i.thumb?i.icon=$('<i class="fa fa-file-word-o"></i>'):"xls"==i.thumb||"xlsx"==i.thumb?i.icon=$('<i class="fa fa-file-excel-o"></i>'):"ppt"==i.thumb||"pptx"==i.thumb?i.icon=$('<i class="fa fa-file-powerpoint-o"></i>'):"gif"!=o&&"png"!=o&&"jpg"!=o&&"jpeg"!=o||(i.icon=$('<a class="fancybox"/>').attr("href",asset_url+i.link).append($('<img src="'+asset_url+i.thumb+'" />'))),i.name=$("<a />").attr("href",i.link).text(i.name).click(function(e){e.preventDefault()
var t=$(this).attr("href"),n=$("table#filemanager").attr("data-retornar"),i=$(this).text(),o=i.substr(i.lastIndexOf(".")+1)
$("#"+n).attr("value",t),$("#t_"+n).find(".fancybox").attr("href",asset_url+t),$("#t_"+n).find(".nombre-img").text(t.substr(8)),$("#t_"+n).find(".trash, .nombre-img").removeClass("hide"),"gif"==o||"png"==o||"jpg"==o||"jpeg"==o?$("#t_"+n).find(".fancybox").removeClass("hide"):$("#t_"+n).find(".fancybox").addClass("hide"),$("#gallerybrowser").modal("hide"),unsaved=!0})}i.remove=$('<a class="btn btn-default btn-xs" />').attr("href",i.link).html('<i class="fa fa-trash"></i>').click(function(e){e.preventDefault(),$("div#remove input#remove-path").val($(this).attr("href")),$("div#remove").modal("show")}),$("table#filemanager").append($("<tr />").append($('<td class="text-center" />').append(i.icon),$("<td />").append(i.name).append(""==i.medidas?"":'<p class="help-block">'+i.medidas+"</p>"),$('<td class="hidden-xs"/>').text(i.size),$('<td class="hidden-xs"/>').text(i.date),$('<td style="text-align:right">').append(i.remove)))}}function progress_bar(e){var t=e.position||e.loaded,n=e.totalSize||e.total,i=Math.floor(t/n*1e3)/10
$("div#progress > div.bar").css("width",i+"%").text(i+" %")}function h(){var e=parseInt($footer.offset().top)
wpos=$win.scrollTop(),space=$win.height()-4*$footer.height(),wpos+space<e-250?$footer.addClass("fixed_footer"):$footer.removeClass("fixed_footer")}function loadContent(e,t){t="undefined"!=typeof t&&t,$("#main-content").find("#guts").fadeOut(200,function(){$("#main-content").hide().load(e+"?ajax=true",t,function(){$("#main-content").fadeIn(200),$(".sidebar a").parent().removeClass("active"),$(".sidebar a").parent().parent().hasClass("treeview-menu")&&$(".sidebar a").parent().parent().parent().removeClass("active")
var t=e.split("/"),n=t[t.length-1];($.isNumeric(n)||"new"==n)&&(t[t.length-1]="")
var i=$('.sidebar a[href="'+t.join("/")+'"]')
i.parent().addClass("active"),i.parent().parent().hasClass("treeview-menu")&&i.parent().parent().parent().addClass("active")})})}function getConfirm(e,t){e=e||"",$("#confirmbox").modal({show:!0,backdrop:!1,keyboard:!1}),$("#confirmFalse").click(function(){$("#confirmbox").modal("hide"),t&&t(!1)}),$("#confirmTrue").click(function(){$("#confirmbox").modal("hide"),t&&t(!0)})}function update_collection_order(){$("ul.collection").each(function(e){var t=$(this).attr("id")
$("#"+t+" > li.media").each(function(e){actual=$(this).attr("id").replace("campo-","")
var t=actual.split("_"),n=t[t.length-1]
t[t.length-1]=e
var i=t.join("_")
$(this).find('[id*="'+actual+'"]').each(function(){var e=$(this).attr("id")
$(this).attr("id",e.replace(actual,i))}),$(this).find('[data-return*="'+actual+'"]').each(function(){var e=$(this).attr("data-return")
$(this).attr("data-return",e.replace(actual,i))}),$(this).find('[for*="'+actual+'"]').each(function(){var e=$(this).attr("for")
$(this).attr("for",e.replace(actual,i))}),$(this).find('[name*="['+n+']"]').each(function(){var t=$(this).attr("name")
$(this).attr("name",t.replace("["+n+"]","["+e+"]"))}),$(this).attr("id","campo-"+i)})})}function id_existe_collection(e,t){var n="#t_"+e+"_"+t,i="#"+e+"_"+t
return 0==$(n).length&&0==$(i).length?t:id_existe_collection(e,parseInt(t)+1)}function load_sortable(){$(".collection").each(function(e,t){var n=$(this).attr("id"),i=document.getElementById(n)
Sortable.create(i)})}function destroy_sortable(){$(".collection").sortable("destroy"),$(".collection li").removeClass("ui-state-default")}function CKupdate(){for(instance in CKEDITOR.instances)CKEDITOR.instances[instance].updateElement()}if(!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=Z.type(e)
return"function"!==n&&!Z.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}function i(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,i){return!!t.call(e,i,e)!==n})
if(t.nodeType)return Z.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(ae.test(t))return Z.filter(t,e,n)
t=Z.filter(t,e)}return Z.grep(e,function(e){return X.call(t,e)>=0!==n})}function o(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function r(e){var t=he[e]={}
return Z.each(e.match(fe)||[],function(e,n){t[n]=!0}),t}function s(){G.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function l(e,t,n){var i
if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(we,"-$1").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:be.test(n)?Z.parseJSON(n):n)}catch(e){}ye.set(e,t,n)}else n=void 0
return n}function c(){return!0}function u(){return!1}function d(){try{return G.activeElement}catch(e){}}function p(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function f(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=je.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,i=e.length;i>n;n++)ve.set(e[n],"globalEval",!t||ve.get(t[n],"globalEval"))}function g(e,t){var n,i,o,r,s,a,l,c
if(1===t.nodeType){if(ve.hasData(e)&&(r=ve.access(e),s=ve.set(t,r),c=r.events)){delete s.handle,s.events={}
for(o in c)for(n=0,i=c[o].length;i>n;n++)Z.event.add(t,o,c[o][n])}ye.hasData(e)&&(a=ye.access(e),l=Z.extend({},a),ye.set(t,l))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Se.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function b(t,n){var i,o=Z(n.createElement(t)).appendTo(n.body),r=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(o[0]))?i.display:Z.css(o[0],"display")
return o.detach(),r}function w(e){var t=G,n=Me[e]
return n||(n=b(e,t),"none"!==n&&n||(He=(He||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=He[0].contentDocument,t.write(),t.close(),n=b(e,t),He.detach()),Me[e]=n),n}function x(e,t,n){var i,o,r,s,a=e.style
return n=n||We(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),Be.test(s)&&ze.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function C(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function T(e,t){if(t in e)return t
for(var n=t[0].toUpperCase()+t.slice(1),i=t,o=Ve.length;o--;)if(t=Ve[o]+n,t in e)return t
return i}function S(e,t,n){var i=Ue.exec(t)
return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function D(e,t,n,i,o){for(var r=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>r;r+=2)"margin"===n&&(s+=Z.css(e,n+Ce[r],!0,o)),i?("content"===n&&(s-=Z.css(e,"padding"+Ce[r],!0,o)),"margin"!==n&&(s-=Z.css(e,"border"+Ce[r]+"Width",!0,o))):(s+=Z.css(e,"padding"+Ce[r],!0,o),"padding"!==n&&(s+=Z.css(e,"border"+Ce[r]+"Width",!0,o)))
return s}function _(e,t,n){var i=!0,o="width"===t?e.offsetWidth:e.offsetHeight,r=We(e),s="border-box"===Z.css(e,"boxSizing",!1,r)
if(0>=o||null==o){if(o=x(e,t,r),(0>o||null==o)&&(o=e.style[t]),Be.test(o))return o
i=s&&(Y.boxSizingReliable()||o===e.style[t]),o=parseFloat(o)||0}return o+D(e,t,n||(s?"border":"content"),i,r)+"px"}function k(e,t){for(var n,i,o,r=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(r[s]=ve.get(i,"olddisplay"),n=i.style.display,t?(r[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Te(i)&&(r[s]=ve.access(i,"olddisplay",w(i.nodeName)))):(o=Te(i),"none"===n&&o||ve.set(i,"olddisplay",o?n:Z.css(i,"display"))))
for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?r[s]||"":"none"))
return e}function E(e,t,n,i,o){return new E.prototype.init(e,t,n,i,o)}function A(){return setTimeout(function(){Ye=void 0}),Ye=Z.now()}function I(e,t){var n,i=0,o={height:e}
for(t=t?1:0;4>i;i+=2-t)n=Ce[i],o["margin"+n]=o["padding"+n]=e
return t&&(o.opacity=o.width=e),o}function $(e,t,n){for(var i,o=(nt[t]||[]).concat(nt["*"]),r=0,s=o.length;s>r;r++)if(i=o[r].call(n,t,e))return i}function F(e,t,n){var i,o,r,s,a,l,c,u,d=this,p={},f=e.style,h=e.nodeType&&Te(e),m=ve.get(e,"fxshow")
n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,l=a.empty.fire,a.empty.fire=function(){a.unqueued||l()}),a.unqueued++,d.always(function(){d.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[f.overflow,f.overflowX,f.overflowY],c=Z.css(e,"display"),u="none"===c?ve.get(e,"olddisplay")||w(e.nodeName):c,"inline"===u&&"none"===Z.css(e,"float")&&(f.display="inline-block")),n.overflow&&(f.overflow="hidden",d.always(function(){f.overflow=n.overflow[0],f.overflowX=n.overflow[1],f.overflowY=n.overflow[2]}))
for(i in t)if(o=t[i],Ke.exec(o)){if(delete t[i],r=r||"toggle"===o,o===(h?"hide":"show")){if("show"!==o||!m||void 0===m[i])continue
h=!0}p[i]=m&&m[i]||Z.style(e,i)}else c=void 0
if(Z.isEmptyObject(p))"inline"===("none"===c?w(e.nodeName):c)&&(f.display=c)
else{m?"hidden"in m&&(h=m.hidden):m=ve.access(e,"fxshow",{}),r&&(m.hidden=!h),h?Z(e).show():d.done(function(){Z(e).hide()}),d.done(function(){var t
ve.remove(e,"fxshow")
for(t in p)Z.style(e,t,p[t])})
for(i in p)s=$(h?m[i]:0,i,d),i in m||(m[i]=s.start,h&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))}}function N(e,t){var n,i,o,r,s
for(n in e)if(i=Z.camelCase(n),o=t[i],r=e[n],Z.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),s=Z.cssHooks[i],s&&"expand"in s){r=s.expand(r),delete e[i]
for(n in r)n in e||(e[n]=r[n],t[n]=o)}else t[i]=o}function L(e,t,n){var i,o,r=0,s=tt.length,a=Z.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1
for(var t=Ye||A(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,r=1-i,s=0,l=c.tweens.length;l>s;s++)c.tweens[s].run(r)
return a.notifyWith(e,[c,r,n]),1>r&&l?n:(a.resolveWith(e,[c]),!1)},c=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Ye||A(),duration:n.duration,tweens:[],createTween:function(t,n){var i=Z.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing)
return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0
if(o)return this
for(o=!0;i>n;n++)c.tweens[n].run(1)
return t?a.resolveWith(e,[c,t]):a.rejectWith(e,[c,t]),this}}),u=c.props
for(N(u,c.opts.specialEasing);s>r;r++)if(i=tt[r].call(c,e,u,c.opts))return i
return Z.map(u,$,c),Z.isFunction(c.opts.start)&&c.opts.start.call(e,c),Z.fx.timer(Z.extend(l,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var i,o=0,r=t.toLowerCase().match(fe)||[]
if(Z.isFunction(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function j(e,t,n,i){function o(a){var l
return r[a]=!0,Z.each(e[a]||[],function(e,a){var c=a(t,n,i)
return"string"!=typeof c||s||r[c]?s?!(l=c):void 0:(t.dataTypes.unshift(c),o(c),!1)}),l}var r={},s=e===bt
return o(t.dataTypes[0])||!r["*"]&&o("*")}function O(e,t){var n,i,o=Z.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n])
return i&&Z.extend(!0,e,i),e}function R(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"))
if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o)
break}if(l[0]in n)r=l[0]
else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o
break}s||(s=o)}r=r||s}return r?(r!==l[0]&&l.unshift(r),n[r]):void 0}function H(e,t,n,i){var o,r,s,a,l,c={},u=e.dataTypes.slice()
if(u[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s]
for(r=u.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=u.shift())if("*"===r)r=l
else if("*"!==l&&l!==r){if(s=c[l+" "+r]||c["* "+r],!s)for(o in c)if(a=o.split(" "),a[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[o]:c[o]!==!0&&(r=a[0],u.unshift(a[1]))
break}if(s!==!0)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}function M(e,t,n,i){var o
if(Z.isArray(t))Z.each(t,function(t,o){n||St.test(e)?i(e,o):M(e+"["+("object"==typeof o?t:"")+"]",o,n,i)})
else if(n||"object"!==Z.type(t))i(e,t)
else for(o in t)M(e+"["+o+"]",t[o],n,i)}function z(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var B=[],W=B.slice,q=B.concat,U=B.push,X=B.indexOf,Q={},J=Q.toString,V=Q.hasOwnProperty,Y={},G=e.document,K="2.1.4",Z=function(e,t){return new Z.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,ie=function(e,t){return t.toUpperCase()}
Z.fn=Z.prototype={jquery:K,constructor:Z,selector:"",length:0,toArray:function(){return W.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:W.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(W.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0)
return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:U,sort:B.sort,splice:B.splice},Z.extend=Z.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1
for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===l&&(s=this,a--);l>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(c&&i&&(Z.isPlainObject(i)||(o=Z.isArray(i)))?(o?(o=!1,r=n&&Z.isArray(n)?n:[]):r=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(c,r,i)):void 0!==i&&(s[t]=i))
return s},Z.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"===Z.type(e)&&!e.nodeType&&!Z.isWindow(e)&&!(e.constructor&&!V.call(e.constructor.prototype,"isPrototypeOf"))},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Q[J.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=G.createElement("script"),t.text=e,G.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,ie)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var o,r=0,s=e.length,a=n(e)
if(i){if(a)for(;s>r&&(o=t.apply(e[r],i),o!==!1);r++);else for(r in e)if(o=t.apply(e[r],i),o===!1)break}else if(a)for(;s>r&&(o=t.call(e[r],r,e[r]),o!==!1);r++);else for(r in e)if(o=t.call(e[r],r,e[r]),o===!1)break
return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var i=t||[]
return null!=e&&(n(Object(e))?Z.merge(i,"string"==typeof e?[e]:e):U.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:X.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;n>i;i++)e[o++]=t[i]
return e.length=o,e},grep:function(e,t,n){for(var i,o=[],r=0,s=e.length,a=!n;s>r;r++)i=!t(e[r],r),i!==a&&o.push(e[r])
return o},map:function(e,t,i){var o,r=0,s=e.length,a=n(e),l=[]
if(a)for(;s>r;r++)o=t(e[r],r,i),null!=o&&l.push(o)
else for(r in e)o=t(e[r],r,i),null!=o&&l.push(o)
return q.apply([],l)},guid:1,proxy:function(e,t){var n,i,o
return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(i=W.call(arguments,2),o=function(){return e.apply(t||this,i.concat(W.call(arguments)))},o.guid=e.guid=e.guid||Z.guid++,o):void 0},now:Date.now,support:Y}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Q["[object "+t+"]"]=t.toLowerCase()})
var oe=function(e){function t(e,t,n,i){var o,r,s,a,l,c,d,f,h,m
if((t?t.ownerDocument||t:M)!==F&&$(t),t=t||F,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n
if(!i&&L){if(11!==a&&(o=ye.exec(e)))if(s=o[1]){if(9===a){if(r=t.getElementById(s),!r||!r.parentNode)return n
if(r.id===s)return n.push(r),n}else if(t.ownerDocument&&(r=t.ownerDocument.getElementById(s))&&R(t,r)&&r.id===s)return n.push(r),n}else{if(o[2])return K.apply(n,t.getElementsByTagName(e)),n
if((s=o[3])&&x.getElementsByClassName)return K.apply(n,t.getElementsByClassName(s)),n}if(x.qsa&&(!P||!P.test(e))){if(f=d=H,h=t,m=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(c=D(e),(d=t.getAttribute("id"))?f=d.replace(we,"\\$&"):t.setAttribute("id",f),f="[id='"+f+"'] ",l=c.length;l--;)c[l]=f+p(c[l])
h=be.test(e)&&u(t.parentNode)||t,m=c.join(",")}if(m)try{return K.apply(n,h.querySelectorAll(m)),n}catch(e){}finally{d||t.removeAttribute("id")}}}return k(e.replace(le,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[]
return e}function i(e){return e[H]=!0,e}function o(e){var t=F.createElement("div")
try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=e.length;i--;)C.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||Q)-(~e.sourceIndex||Q)
if(i)return i
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase()
return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function u(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function d(){}function p(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value
return i}function f(e,t,n){var i=t.dir,o=n&&"parentNode"===i,r=B++
return t.first?function(t,n,r){for(;t=t[i];)if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,s){var a,l,c=[z,r]
if(s){for(;t=t[i];)if((1===t.nodeType||o)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||o){if(l=t[H]||(t[H]={}),(a=l[i])&&a[0]===z&&a[1]===r)return c[2]=a[2]
if(l[i]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1
return!0}:e[0]}function m(e,n,i){for(var o=0,r=n.length;r>o;o++)t(e,n[o],i)
return i}function g(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;l>a;a++)(r=e[a])&&(!n||n(r,i,o))&&(s.push(r),c&&t.push(a))
return s}function v(e,t,n,o,r,s){return o&&!o[H]&&(o=v(o)),r&&!r[H]&&(r=v(r,s)),i(function(i,s,a,l){var c,u,d,p=[],f=[],h=s.length,v=i||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?v:g(v,p,e,a,l),b=n?r||(i?e:h||o)?[]:s:y
if(n&&n(y,b,a,l),o)for(c=g(b,f),o(c,[],a,l),u=c.length;u--;)(d=c[u])&&(b[f[u]]=!(y[f[u]]=d))
if(i){if(r||e){if(r){for(c=[],u=b.length;u--;)(d=b[u])&&c.push(y[u]=d)
r(null,b=[],c,l)}for(u=b.length;u--;)(d=b[u])&&(c=r?ee(i,d):p[u])>-1&&(i[c]=!(s[c]=d))}}else b=g(b===s?b.splice(h,b.length):b),r?r(null,s,b,l):K.apply(s,b)})}function y(e){for(var t,n,i,o=e.length,r=C.relative[e[0].type],s=r||C.relative[" "],a=r?1:0,l=f(function(e){return e===t},s,!0),c=f(function(e){return ee(t,e)>-1},s,!0),u=[function(e,n,i){var o=!r&&(i||n!==E)||((t=n).nodeType?l(e,n,i):c(e,n,i))
return t=null,o}];o>a;a++)if(n=C.relative[e[a].type])u=[f(h(u),n)]
else{if(n=C.filter[e[a].type].apply(null,e[a].matches),n[H]){for(i=++a;o>i&&!C.relative[e[i].type];i++);return v(a>1&&h(u),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(le,"$1"),n,i>a&&y(e.slice(a,i)),o>i&&y(e=e.slice(i)),o>i&&p(e))}u.push(n)}return h(u)}function b(e,n){var o=n.length>0,r=e.length>0,s=function(i,s,a,l,c){var u,d,p,f=0,h="0",m=i&&[],v=[],y=E,b=i||r&&C.find.TAG("*",c),w=z+=null==y?1:Math.random()||.1,x=b.length
for(c&&(E=s!==F&&s);h!==x&&null!=(u=b[h]);h++){if(r&&u){for(d=0;p=e[d++];)if(p(u,s,a)){l.push(u)
break}c&&(z=w)}o&&((u=!p&&u)&&f--,i&&m.push(u))}if(f+=h,o&&h!==f){for(d=0;p=n[d++];)p(m,v,s,a)
if(i){if(f>0)for(;h--;)m[h]||v[h]||(v[h]=Y.call(l))
v=g(v)}K.apply(l,v),c&&!i&&v.length>0&&f+n.length>1&&t.uniqueSort(l)}return c&&(z=w,E=y),m}
return o?i(s):s}var w,x,C,T,S,D,_,k,E,A,I,$,F,N,L,P,j,O,R,H="sizzle"+1*new Date,M=e.document,z=0,B=0,W=n(),q=n(),U=n(),X=function(e,t){return e===t&&(I=!0),0},Q=1<<31,J={}.hasOwnProperty,V=[],Y=V.pop,G=V.push,K=V.push,Z=V.slice,ee=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n
return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",oe=ie.replace("w","w#"),re="\\["+ne+"*("+ie+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+oe+"))|)"+ne+"*\\]",se=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+re+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),le=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ce=new RegExp("^"+ne+"*,"+ne+"*"),ue=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),de=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=new RegExp(se),fe=new RegExp("^"+oe+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie.replace("w","w*")+")"),ATTR:new RegExp("^"+re),PSEUDO:new RegExp("^"+se),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,we=/'|\\/g,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Ce=function(e,t,n){var i="0x"+t-65536
return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Te=function(){$()}
try{K.apply(V=Z.call(M.childNodes),M.childNodes),V[M.childNodes.length].nodeType}catch(e){K={apply:V.length?function(e,t){G.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}x=t.support={},S=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},$=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:M
return i!==F&&9===i.nodeType&&i.documentElement?(F=i,N=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),L=!S(i),x.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=o(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=ve.test(i.getElementsByClassName),x.getById=o(function(e){return N.appendChild(e).id=H,!i.getElementsByName||!i.getElementsByName(H).length}),x.getById?(C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&L){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xe,Ce)
return function(e){return e.getAttribute("id")===t}}):(delete C.find.ID,C.filter.ID=function(e){var t=e.replace(xe,Ce)
return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),C.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e)
if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n)
return i}return r},C.find.CLASS=x.getElementsByClassName&&function(e,t){return L?t.getElementsByClassName(e):void 0},j=[],P=[],(x.qsa=ve.test(i.querySelectorAll))&&(o(function(e){N.appendChild(e).innerHTML="<a id='"+H+"'></a><select id='"+H+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+H+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+H+"+*").length||P.push(".#.+[+~]")}),o(function(e){var t=i.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(x.matchesSelector=ve.test(O=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&o(function(e){x.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),j.push("!=",se)}),P=P.length&&new RegExp(P.join("|")),j=j.length&&new RegExp(j.join("|")),t=ve.test(N.compareDocumentPosition),R=t||ve.test(N.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode
return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},X=t?function(e,t){if(e===t)return I=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===M&&R(M,e)?-1:t===i||t.ownerDocument===M&&R(M,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return I=!0,0
var n,o=0,r=e.parentNode,a=t.parentNode,l=[e],c=[t]
if(!r||!a)return e===i?-1:t===i?1:r?-1:a?1:A?ee(A,e)-ee(A,t):0
if(r===a)return s(e,t)
for(n=e;n=n.parentNode;)l.unshift(n)
for(n=t;n=n.parentNode;)c.unshift(n)
for(;l[o]===c[o];)o++
return o?s(l[o],c[o]):l[o]===M?-1:c[o]===M?1:0},i):F},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==F&&$(e),n=n.replace(de,"='$1']"),!(!x.matchesSelector||!L||j&&j.test(n)||P&&P.test(n)))try{var i=O.call(e,n)
if(i||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){}return t(n,F,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==F&&$(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==F&&$(e)
var n=C.attrHandle[t.toLowerCase()],i=n&&J.call(C.attrHandle,t.toLowerCase())?n(e,t,!L):void 0
return void 0!==i?i:x.attributes||!L?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0
if(I=!x.detectDuplicates,A=!x.sortStable&&e.slice(0),e.sort(X),I){for(;t=e[o++];)t===e[o]&&(i=n.push(o))
for(;i--;)e.splice(n[i],1)}return A=null,e},T=t.getText=function(e){var t,n="",i=0,o=e.nodeType
if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=T(t)
return n},C=t.selectors={cacheLength:50,createPseudo:i,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,Ce),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,Ce),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=D(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,Ce).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "]
return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e)
return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&r.indexOf(i)>-1:"$="===n?i&&r.slice(-i.length)===i:"~="===n?(" "+r.replace(ae," ")+" ").indexOf(i)>-1:"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var c,u,d,p,f,h,m=r!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a
if(g){if(r){for(;m;){for(d=t;d=d[m];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(u=g[H]||(g[H]={}),c=u[e]||[],f=c[0]===z&&c[1],p=c[0]===z&&c[2],d=f&&g.childNodes[f];d=++f&&d&&d[m]||(p=f=0)||h.pop();)if(1===d.nodeType&&++p&&d===t){u[e]=[z,f,p]
break}}else if(y&&(c=(t[H]||(t[H]={}))[e])&&c[0]===z)p=c[1]
else for(;(d=++f&&d&&d[m]||(p=f=0)||h.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++p||(y&&((d[H]||(d[H]={}))[e]=[z,p]),d!==t)););return p-=o,p===i||p%i===0&&p/i>=0}}},PSEUDO:function(e,n){var o,r=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return r[H]?r(n):r.length>1?(o=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),s=o.length;s--;)i=ee(e,o[s]),e[i]=!(t[i]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=_(e.replace(le,"$1"))
return o[H]?i(function(e,t,n,i){for(var r,s=o(e,null,i,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(xe,Ce),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:i(function(e){return fe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,Ce).toLowerCase(),function(t){var n
do if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===N},focus:function(e){return e===F.activeElement&&(!F.hasFocus||F.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return me.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n)
return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n)
return e}),lt:c(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i)
return e}),gt:c(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i)
return e})}},C.pseudos.nth=C.pseudos.eq
for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=a(w)
for(w in{submit:!0,reset:!0})C.pseudos[w]=l(w)
return d.prototype=C.filters=C.pseudos,C.setFilters=new d,D=t.tokenize=function(e,n){var i,o,r,s,a,l,c,u=q[e+" "]
if(u)return n?0:u.slice(0)
for(a=e,l=[],c=C.preFilter;a;){(!i||(o=ce.exec(a)))&&(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=ue.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(le," ")}),a=a.slice(i.length))
for(s in C.filter)!(o=he[s].exec(a))||c[s]&&!(o=c[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length))
if(!i)break}return n?a.length:a?t.error(e):q(e,l).slice(0)},_=t.compile=function(e,t){var n,i=[],o=[],r=U[e+" "]
if(!r){for(t||(t=D(e)),n=t.length;n--;)r=y(t[n]),r[H]?i.push(r):o.push(r)
r=U(e,b(o,i)),r.selector=e}return r},k=t.select=function(e,t,n,i){var o,r,s,a,l,c="function"==typeof e&&e,d=!i&&D(e=c.selector||e)
if(n=n||[],1===d.length){if(r=d[0]=d[0].slice(0),r.length>2&&"ID"===(s=r[0]).type&&x.getById&&9===t.nodeType&&L&&C.relative[r[1].type]){if(t=(C.find.ID(s.matches[0].replace(xe,Ce),t)||[])[0],!t)return n
c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=he.needsContext.test(e)?0:r.length;o--&&(s=r[o],!C.relative[a=s.type]);)if((l=C.find[a])&&(i=l(s.matches[0].replace(xe,Ce),be.test(r[0].type)&&u(t.parentNode)||t))){if(r.splice(o,1),e=i.length&&p(r),!e)return K.apply(n,i),n
break}}return(c||_(e,d))(i,t,!L,n,be.test(e)&&u(t.parentNode)||t),n},x.sortStable=H.split("").sort(X).join("")===H,x.detectDuplicates=!!I,$(),x.sortDetached=o(function(e){return 1&e.compareDocumentPosition(F.createElement("div"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(te,function(e,t,n){var i
return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e)
Z.find=oe,Z.expr=oe.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=oe.uniqueSort,Z.text=oe.getText,Z.isXMLDoc=oe.isXML,Z.contains=oe.contains
var re=Z.expr.match.needsContext,se=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ae=/^.[^:#\[\.,]*$/
Z.filter=function(e,t,n){var i=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?Z.find.matchesSelector(i,e)?[i]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,i=[],o=this
if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(o[t],this))return!0}))
for(t=0;n>t;t++)Z.find(e,o[t],i)
return i=this.pushStack(n>1?Z.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&re.test(e)?Z(e):e||[],!1).length}})
var le,ce=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ue=Z.fn.init=function(e,t){var n,i
if(!e)return this
if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ce.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||le).find(e):this.constructor(t).find(e)
if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:G,!0)),se.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n])
return this}return i=G.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=G,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof le.ready?le.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))}
ue.prototype=Z.fn,le=Z(G)
var de=/^(?:parents|prev(?:Until|All))/,pe={children:!0,contents:!0,next:!0,prev:!0}
Z.extend({dir:function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&Z(e).is(n))break
i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length
return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,o=this.length,r=[],s=re.test(e)||"string"!=typeof e?Z(e,t||this.context):0;o>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){r.push(n)
break}return this.pushStack(r.length>1?Z.unique(r):r)},index:function(e){return e?"string"==typeof e?X.call(Z(e),this[0]):X.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,i){var o=Z.map(this,t,n)
return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=Z.filter(i,o)),this.length>1&&(pe[e]||Z.unique(o),de.test(e)&&o.reverse()),this.pushStack(o)}})
var fe=/\S+/g,he={}
Z.Callbacks=function(e){e="string"==typeof e?he[e]||r(e):Z.extend({},e)
var t,n,i,o,s,a,l=[],c=!e.once&&[],u=function(r){for(t=e.memory&&r,n=!0,a=o||0,o=0,s=l.length,i=!0;l&&s>a;a++)if(l[a].apply(r[0],r[1])===!1&&e.stopOnFalse){t=!1
break}i=!1,l&&(c?c.length&&u(c.shift()):t?l=[]:d.disable())},d={add:function(){if(l){var n=l.length
!function t(n){Z.each(n,function(n,i){var o=Z.type(i)
"function"===o?e.unique&&d.has(i)||l.push(i):i&&i.length&&"string"!==o&&t(i)})}(arguments),i?s=l.length:t&&(o=n,u(t))}return this},remove:function(){return l&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,l,n))>-1;)l.splice(n,1),i&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],s=0,this},disable:function(){return l=c=t=void 0,this},disabled:function(){return!l},lock:function(){return c=void 0,t||d.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!l||n&&!c||(t=t||[],t=[e,t.slice?t.slice():t],i?c.push(t):u(t)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!n}}
return d},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",i={state:function(){return n},always:function(){return o.done(arguments).fail(arguments),this},then:function(){var e=arguments
return Z.Deferred(function(n){Z.each(t,function(t,r){var s=Z.isFunction(e[t])&&e[t]
o[r[1]](function(){var e=s&&s.apply(this,arguments)
e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[r[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,i):i}},o={}
return i.pipe=i.then,Z.each(t,function(e,r){var s=r[2],a=r[3]
i[r[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),o[r[0]]=function(){return o[r[0]+"With"](this===o?i:this,arguments),this},o[r[0]+"With"]=s.fireWith}),i.promise(o),e&&e.call(o,o),o},when:function(e){var t,n,i,o=0,r=W.call(arguments),s=r.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,l=1===a?e:Z.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?W.call(arguments):o,i===t?l.notifyWith(n,i):--a||l.resolveWith(n,i)}}
if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>o;o++)r[o]&&Z.isFunction(r[o].promise)?r[o].promise().done(c(o,i,r)).fail(l.reject).progress(c(o,n,t)):--a
return a||l.resolveWith(i,r),l.promise()}})
var me
Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(me.resolveWith(G,[Z]),Z.fn.triggerHandler&&(Z(G).triggerHandler("ready"),Z(G).off("ready"))))}}),Z.ready.promise=function(t){return me||(me=Z.Deferred(),"complete"===G.readyState?setTimeout(Z.ready):(G.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),me.promise(t)},Z.ready.promise()
var ge=Z.access=function(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n
if("object"===Z.type(n)){o=!0
for(a in n)Z.access(e,t,a,n[a],!0,r,s)}else if(void 0!==i&&(o=!0,Z.isFunction(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(Z(e),n)})),t))for(;l>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)))
return o?e:c?t.call(e):l?t(e[0],n):r}
Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0
var t={},n=e[this.expando]
if(!n){n=a.uid++
try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(i){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var i,o=this.key(e),r=this.cache[o]
if("string"==typeof t)r[t]=n
else if(Z.isEmptyObject(r))Z.extend(this.cache[o],t)
else for(i in t)r[i]=t[i]
return r},get:function(e,t){var n=this.cache[this.key(e)]
return void 0===t?n:n[t]},access:function(e,t,n){var i
return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i,o,r=this.key(e),s=this.cache[r]
if(void 0===t)this.cache[r]={}
else{Z.isArray(t)?i=t.concat(t.map(Z.camelCase)):(o=Z.camelCase(t),t in s?i=[t,o]:(i=o,i=i in s?[i]:i.match(fe)||[])),n=i.length
for(;n--;)delete s[i[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}}
var ve=new a,ye=new a,be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,we=/([A-Z])/g
Z.extend({hasData:function(e){return ye.hasData(e)||ve.hasData(e)},data:function(e,t,n){return ye.access(e,t,n)},removeData:function(e,t){ye.remove(e,t)},_data:function(e,t,n){return ve.access(e,t,n)},_removeData:function(e,t){ve.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes
if(void 0===e){if(this.length&&(o=ye.get(r),1===r.nodeType&&!ve.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=Z.camelCase(i.slice(5)),l(r,i,o[i])))
ve.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){ye.set(this,e)}):ge(this,function(t){var n,i=Z.camelCase(e)
if(r&&void 0===t){if(n=ye.get(r,e),void 0!==n)return n
if(n=ye.get(r,i),void 0!==n)return n
if(n=l(r,i,void 0),void 0!==n)return n}else this.each(function(){var n=ye.get(this,i)
ye.set(this,i,t),-1!==e.indexOf("-")&&void 0!==n&&ye.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ye.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var i
return e?(t=(t||"fx")+"queue",i=ve.get(e,t),n&&(!i||Z.isArray(n)?i=ve.access(e,t,Z.makeArray(n)):i.push(n)),i||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=Z.queue(e,t),i=n.length,o=n.shift(),r=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)}
"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,s,r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ve.get(e,n)||ve.access(e,n,{empty:Z.Callbacks("once memory").add(function(){ve.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t)
Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=Z.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=ve.get(r[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a))
return a(),o.promise(t)}})
var xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ce=["Top","Right","Bottom","Left"],Te=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},Se=/^(?:checkbox|radio)$/i
!function(){var e=G.createDocumentFragment(),t=e.appendChild(G.createElement("div")),n=G.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Y.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}()
var De="undefined"
Y.focusinBubbles="onfocusin"in e
var _e=/^key/,ke=/^(?:mouse|pointer|contextmenu)|click/,Ee=/^(?:focusinfocus|focusoutblur)$/,Ae=/^([^.]*)(?:\.(.+)|)$/
Z.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,c,u,d,p,f,h,m,g=ve.get(e)
if(g)for(n.handler&&(r=n,n=r.handler,o=r.selector),n.guid||(n.guid=Z.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return typeof Z!==De&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(fe)||[""],c=t.length;c--;)a=Ae.exec(t[c])||[],f=m=a[1],h=(a[2]||"").split(".").sort(),f&&(d=Z.event.special[f]||{},f=(o?d.delegateType:d.bindType)||f,d=Z.event.special[f]||{},u=Z.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&Z.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||(p=l[f]=[],p.delegateCount=0,d.setup&&d.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(f,s,!1)),d.add&&(d.add.call(e,u),u.handler.guid||(u.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,u):p.push(u),Z.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,c,u,d,p,f,h,m,g=ve.hasData(e)&&ve.get(e)
if(g&&(l=g.events)){for(t=(t||"").match(fe)||[""],c=t.length;c--;)if(a=Ae.exec(t[c])||[],f=m=a[1],h=(a[2]||"").split(".").sort(),f){for(d=Z.event.special[f]||{},f=(i?d.delegateType:d.bindType)||f,p=l[f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)u=p[r],!o&&m!==u.origType||n&&n.guid!==u.guid||a&&!a.test(u.namespace)||i&&i!==u.selector&&("**"!==i||!u.selector)||(p.splice(r,1),u.selector&&p.delegateCount--,d.remove&&d.remove.call(e,u))
s&&!p.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||Z.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)Z.event.remove(e,f+t[c],n,i,!0)
Z.isEmptyObject(l)&&(delete g.handle,ve.remove(e,"events"))}},trigger:function(t,n,i,o){var r,s,a,l,c,u,d,p=[i||G],f=V.call(t,"type")?t.type:t,h=V.call(t,"namespace")?t.namespace.split("."):[]
if(s=a=i=i||G,3!==i.nodeType&&8!==i.nodeType&&!Ee.test(f+Z.event.triggered)&&(f.indexOf(".")>=0&&(h=f.split("."),f=h.shift(),h.sort()),c=f.indexOf(":")<0&&"on"+f,t=t[Z.expando]?t:new Z.Event(f,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:Z.makeArray(n,[t]),d=Z.event.special[f]||{},o||!d.trigger||d.trigger.apply(i,n)!==!1)){if(!o&&!d.noBubble&&!Z.isWindow(i)){for(l=d.delegateType||f,Ee.test(l+f)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s
a===(i.ownerDocument||G)&&p.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=p[r++])&&!t.isPropagationStopped();)t.type=r>1?l:d.bindType||f,u=(ve.get(s,"events")||{})[t.type]&&ve.get(s,"handle"),u&&u.apply(s,n),u=c&&s[c],u&&u.apply&&Z.acceptData(s)&&(t.result=u.apply(s,n),t.result===!1&&t.preventDefault())
return t.type=f,o||t.isDefaultPrevented()||d._default&&d._default.apply(p.pop(),n)!==!1||!Z.acceptData(i)||c&&Z.isFunction(i[f])&&!Z.isWindow(i)&&(a=i[c],a&&(i[c]=null),Z.event.triggered=f,i[f](),Z.event.triggered=void 0,a&&(i[c]=a)),t.result}},dispatch:function(e){e=Z.event.fix(e)
var t,n,i,o,r,s=[],a=W.call(arguments),l=(ve.get(this,"events")||{})[e.type]||[],c=Z.event.special[e.type]||{}
if(a[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,l),t=0;(o=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,i=((Z.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()))
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,o,r,s=[],a=t.delegateCount,l=e.target
if(a&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!==this;l=l.parentNode||this)if(l.disabled!==!0||"click"!==e.type){for(i=[],n=0;a>n;n++)r=t[n],o=r.selector+" ",void 0===i[o]&&(i[o]=r.needsContext?Z(o,this).index(l)>=0:Z.find(o,this,null,[l]).length),i[o]&&i.push(r)
i.length&&s.push({elem:l,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,o,r=t.button
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||G,i=n.documentElement,o=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||o&&o.scrollLeft||0)-(i&&i.clientLeft||o&&o.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||o&&o.scrollTop||0)-(i&&i.clientTop||o&&o.clientTop||0)),e.which||void 0===r||(e.which=1&r?1:2&r?3:4&r?2:0),e}},fix:function(e){if(e[Z.expando])return e
var t,n,i,o=e.type,r=e,s=this.fixHooks[o]
for(s||(this.fixHooks[o]=s=ke.test(o)?this.mouseHooks:_e.test(o)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new Z.Event(r),t=i.length;t--;)n=i[t],e[n]=r[n]
return e.target||(e.target=G),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==d()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===d()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var o=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
i?Z.event.trigger(o,null,t):Z.event.dispatch.call(t,o),o.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?c:u):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:u,isPropagationStopped:u,isImmediatePropagationStopped:u,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=c,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=c,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=c,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,o=e.relatedTarget,r=e.handleObj
return(!o||o!==i&&!Z.contains(i,o))&&(e.type=r.origType,n=r.handler.apply(this,arguments),e.type=t),n}}}),Y.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)}
Z.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=ve.access(i,t)
o||i.addEventListener(e,n,!0),ve.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=ve.access(i,t)-1
o?ve.access(i,t,o):(i.removeEventListener(e,n,!0),ve.remove(i,t))}}}),Z.fn.extend({on:function(e,t,n,i,o){var r,s
if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0)
for(s in e)this.on(s,t,n,e[s],o)
return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=u
else if(!i)return this
return 1===o&&(r=i,i=function(e){return Z().off(e),r.apply(this,arguments)},i.guid=r.guid||(r.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,o
if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,Z(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this
if("object"==typeof e){for(o in e)this.off(o,t,e[o])
return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=u),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
return n?Z.event.trigger(e,t,n,!0):void 0}})
var Ie=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,$e=/<([\w:]+)/,Fe=/<|&#?\w+;/,Ne=/<(?:script|style|link)/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^$|\/(?:java|ecma)script/i,je=/^true\/(.*)/,Oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Re={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Re.optgroup=Re.option,Re.tbody=Re.tfoot=Re.colgroup=Re.caption=Re.thead,Re.th=Re.td,Z.extend({clone:function(e,t,n){var i,o,r,s,a=e.cloneNode(!0),l=Z.contains(e.ownerDocument,e)
if(!(Y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=v(a),r=v(e),i=0,o=r.length;o>i;i++)y(r[i],s[i])
if(t)if(n)for(r=r||v(e),s=s||v(a),i=0,o=r.length;o>i;i++)g(r[i],s[i])
else g(e,a)
return s=v(a,"script"),s.length>0&&m(s,!l&&v(e,"script")),a},buildFragment:function(e,t,n,i){for(var o,r,s,a,l,c,u=t.createDocumentFragment(),d=[],p=0,f=e.length;f>p;p++)if(o=e[p],o||0===o)if("object"===Z.type(o))Z.merge(d,o.nodeType?[o]:o)
else if(Fe.test(o)){for(r=r||u.appendChild(t.createElement("div")),s=($e.exec(o)||["",""])[1].toLowerCase(),a=Re[s]||Re._default,r.innerHTML=a[1]+o.replace(Ie,"<$1></$2>")+a[2],c=a[0];c--;)r=r.lastChild
Z.merge(d,r.childNodes),r=u.firstChild,r.textContent=""}else d.push(t.createTextNode(o))
for(u.textContent="",p=0;o=d[p++];)if((!i||-1===Z.inArray(o,i))&&(l=Z.contains(o.ownerDocument,o),r=v(u.appendChild(o),"script"),l&&m(r),n))for(c=0;o=r[c++];)Pe.test(o.type||"")&&n.push(o)
return u},cleanData:function(e){for(var t,n,i,o,r=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(o=n[ve.expando],o&&(t=ve.cache[o]))){if(t.events)for(i in t.events)r[i]?Z.event.remove(n,i):Z.removeEvent(n,i,t.handle)
ve.cache[o]&&delete ve.cache[o]}delete ye.cache[n[ye.expando]]}}}),Z.fn.extend({text:function(e){return ge(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,i=e?Z.filter(e,this):this,o=0;null!=(n=i[o]);o++)t||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(v(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return ge(this,function(e){var t=this[0]||{},n=0,i=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Ne.test(e)&&!Re[($e.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(Ie,"<$1></$2>")
try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(v(t,!1)),t.innerHTML=e)
t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=q.apply([],e)
var n,i,o,r,s,a,l=0,c=this.length,u=this,d=c-1,p=e[0],m=Z.isFunction(p)
if(m||c>1&&"string"==typeof p&&!Y.checkClone&&Le.test(p))return this.each(function(n){var i=u.eq(n)
m&&(e[0]=p.call(this,n,i.html())),i.domManip(e,t)})
if(c&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(o=Z.map(v(n,"script"),f),r=o.length;c>l;l++)s=n,l!==d&&(s=Z.clone(s,!0,!0),r&&Z.merge(o,v(s,"script"))),t.call(this[l],s,l)
if(r)for(a=o[o.length-1].ownerDocument,Z.map(o,h),l=0;r>l;l++)s=o[l],Pe.test(s.type||"")&&!ve.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(Oe,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,i=[],o=Z(e),r=o.length-1,s=0;r>=s;s++)n=s===r?this:this.clone(!0),Z(o[s])[t](n),U.apply(i,n.get())
return this.pushStack(i)}})
var He,Me={},ze=/^margin/,Be=new RegExp("^("+xe+")(?!px)[a-z%]+$","i"),We=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)}
!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",o.appendChild(r)
var t=e.getComputedStyle(s,null)
n="1%"!==t.top,i="4px"===t.width,o.removeChild(r)}var n,i,o=G.documentElement,r=G.createElement("div"),s=G.createElement("div")
s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===s.style.backgroundClip,r.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",r.appendChild(s),e.getComputedStyle&&Z.extend(Y,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==i&&t(),i},reliableMarginRight:function(){var t,n=s.appendChild(G.createElement("div"))
return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",o.appendChild(r),t=!parseFloat(e.getComputedStyle(n,null).marginRight),o.removeChild(r),s.removeChild(n),t}}))}(),Z.swap=function(e,t,n,i){var o,r,s={}
for(r in t)s[r]=e.style[r],e.style[r]=t[r]
o=n.apply(e,i||[])
for(r in t)e.style[r]=s[r]
return o}
var qe=/^(none|table(?!-c[ea]).+)/,Ue=new RegExp("^("+xe+")(.*)$","i"),Xe=new RegExp("^([+-])=("+xe+")","i"),Qe={position:"absolute",visibility:"hidden",display:"block"},Je={letterSpacing:"0",fontWeight:"400"},Ve=["Webkit","O","Moz","ms"]
Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=Z.camelCase(t),l=e.style
return t=Z.cssProps[a]||(Z.cssProps[a]=T(l,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:l[t]:(r=typeof n,"string"===r&&(o=Xe.exec(n))&&(n=(o[1]+1)*o[2]+parseFloat(Z.css(e,t)),r="number"),void(null!=n&&n===n&&("number"!==r||Z.cssNumber[a]||(n+="px"),Y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l[t]=n))))}},css:function(e,t,n,i){var o,r,s,a=Z.camelCase(t)
return t=Z.cssProps[a]||(Z.cssProps[a]=T(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=x(e,t,i)),"normal"===o&&t in Je&&(o=Je[t]),""===n||n?(r=parseFloat(o),n===!0||Z.isNumeric(r)?r||0:o):o}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,i){return n?qe.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Qe,function(){return _(e,t,i)}):_(e,t,i):void 0},set:function(e,n,i){var o=i&&We(e)
return S(e,n,i?D(e,t,i,"border-box"===Z.css(e,"boxSizing",!1,o),o):0)}}}),Z.cssHooks.marginRight=C(Y.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},x,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];4>i;i++)o[e+Ce[i]+t]=r[i]||r[i-2]||r[0]
return o}},ze.test(e)||(Z.cssHooks[e+t].set=S)}),Z.fn.extend({css:function(e,t){return ge(this,function(e,t,n){var i,o,r={},s=0
if(Z.isArray(t)){for(i=We(e),o=t.length;o>s;s++)r[t[s]]=Z.css(e,t[s],!1,i)
return r}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return k(this,!0)},hide:function(){return k(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Te(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=E,E.prototype={constructor:E,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(Z.cssNumber[n]?"":"px")},cur:function(){var e=E.propHooks[this.prop]
return e&&e.get?e.get(this):E.propHooks._default.get(this)},run:function(e){var t,n=E.propHooks[this.prop]
return this.options.duration?this.pos=t=Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(e){var t
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=E.prototype.init,Z.fx.step={}
var Ye,Ge,Ke=/^(?:toggle|show|hide)$/,Ze=new RegExp("^(?:([+-])=|)("+xe+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[F],nt={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),o=Ze.exec(t),r=o&&o[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==r&&+i)&&Ze.exec(Z.css(n.elem,e)),a=1,l=20
if(s&&s[3]!==r){r=r||s[3],o=o||[],s=+i||1
do a=a||".5",s/=a,Z.style(n.elem,e,s+r)
while(a!==(a=n.cur()/i)&&1!==a&&--l)}return o&&(s=n.start=+s||+i||0,n.unit=r,n.end=o[1]?s+(o[1]+1)*o[2]:+o[2]),n}]}
Z.Animation=Z.extend(L,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ")
for(var n,i=0,o=e.length;o>i;i++)n=e[i],nt[n]=nt[n]||[],nt[n].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),Z.speed=function(e,t,n){var i=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t}
return i.duration=Z.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in Z.fx.speeds?Z.fx.speeds[i.duration]:Z.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){Z.isFunction(i.old)&&i.old.call(this),i.queue&&Z.dequeue(this,i.queue)},i},Z.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Te).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=Z.isEmptyObject(e),r=Z.speed(t,n,i),s=function(){var t=L(this,Z.extend({},e),r);(o||ve.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,o||r.queue===!1?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=Z.timers,s=ve.get(this)
if(o)s[o]&&s[o].stop&&i(s[o])
else for(o in s)s[o]&&s[o].stop&&et.test(o)&&i(s[o])
for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ve.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=Z.timers,s=i?i.length:0
for(n.finish=!0,Z.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1))
for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this)
delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t]
Z.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(I(t,!0),e,i,o)}}),Z.each({slideDown:I("show"),slideUp:I("hide"),slideToggle:I("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers
for(Ye=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1)
n.length||Z.fx.stop(),Ye=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Ge||(Ge=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Ge),Ge=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var i=setTimeout(t,e)
n.stop=function(){clearTimeout(i)}})},function(){var e=G.createElement("input"),t=G.createElement("select"),n=t.appendChild(G.createElement("option"))
e.type="checkbox",Y.checkOn=""!==e.value,Y.optSelected=n.selected,t.disabled=!0,Y.optDisabled=!n.disabled,e=G.createElement("input"),e.value="t",e.type="radio",Y.radioValue="t"===e.value}()
var it,ot,rt=Z.expr.attrHandle
Z.fn.extend({attr:function(e,t){return ge(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var i,o,r=e.nodeType
if(e&&3!==r&&8!==r&&2!==r)return typeof e.getAttribute===De?Z.prop(e,t,n):(1===r&&Z.isXMLDoc(e)||(t=t.toLowerCase(),i=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?ot:it)),void 0===n?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=Z.find.attr(e,t),null==o?void 0:o):null!==n?i&&"set"in i&&void 0!==(o=i.set(e,n,t))?o:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t))},removeAttr:function(e,t){var n,i,o=0,r=t&&t.match(fe)
if(r&&1===e.nodeType)for(;n=r[o++];)i=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Y.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),ot={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=rt[t]||Z.find.attr
rt[t]=function(e,t,i){var o,r
return i||(r=rt[t],rt[t]=o,o=null!=n(e,t,i)?t.toLowerCase():null,rt[t]=r),o}})
var st=/^(?:input|select|textarea|button)$/i
Z.fn.extend({prop:function(e,t){return ge(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var i,o,r,s=e.nodeType
if(e&&3!==s&&8!==s&&2!==s)return r=1!==s||!Z.isXMLDoc(e),r&&(t=Z.propFix[t]||t,o=Z.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||st.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Y.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this})
var at=/[\t\r\n\f]/g
Z.fn.extend({addClass:function(e){var t,n,i,o,r,s,a="string"==typeof e&&e,l=0,c=this.length
if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))})
if(a)for(t=(e||"").match(fe)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):" ")){for(r=0;o=t[r++];)i.indexOf(" "+o+" ")<0&&(i+=o+" ")
s=Z.trim(i),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,i,o,r,s,a=0===arguments.length||"string"==typeof e&&e,l=0,c=this.length
if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))})
if(a)for(t=(e||"").match(fe)||[];c>l;l++)if(n=this[l],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(at," "):"")){for(r=0;o=t[r++];)for(;i.indexOf(" "+o+" ")>=0;)i=i.replace(" "+o+" "," ")
s=e?Z.trim(i):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,i=0,o=Z(this),r=e.match(fe)||[];t=r[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t)
else(n===De||"boolean"===n)&&(this.className&&ve.set(this,"__className__",this.className),this.className=this.className||e===!1?"":ve.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(at," ").indexOf(t)>=0)return!0
return!1}})
var lt=/\r/g
Z.fn.extend({val:function(e){var t,n,i,o=this[0]
return arguments.length?(i=Z.isFunction(e),this.each(function(n){var o
1===this.nodeType&&(o=i?e.call(this,n,Z(this).val()):e,null==o?o="":"number"==typeof o?o+="":Z.isArray(o)&&(o=Z.map(o,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=Z.valHooks[o.type]||Z.valHooks[o.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:(n=o.value,"string"==typeof n?n.replace(lt,""):null==n?"":n)):void 0}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value")
return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type||0>o,s=r?null:[],a=r?o+1:i.length,l=0>o?a:r?o:0;a>l;l++)if(n=i[l],!(!n.selected&&l!==o||(Y.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),r)return t
s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=Z.makeArray(t),s=o.length;s--;)i=o[s],(i.selected=Z.inArray(i.value,r)>=0)&&(n=!0)
return n||(e.selectedIndex=-1),r}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},Y.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}})
var ct=Z.now(),ut=/\?/
Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(e){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t}
var dt=/#.*$/,pt=/([?&])_=[^&]*/,ft=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mt=/^(?:GET|HEAD)$/,gt=/^\/\//,vt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,yt={},bt={},wt="*/".concat("*"),xt=e.location.href,Ct=vt.exec(xt.toLowerCase())||[]
Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:xt,type:"GET",isLocal:ht.test(Ct[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?O(O(e,Z.ajaxSettings),t):O(Z.ajaxSettings,e)},ajaxPrefilter:P(yt),ajaxTransport:P(bt),ajax:function(e,t){function n(e,t,n,s){var l,u,v,y,w,C=t
2!==b&&(b=2,a&&clearTimeout(a),i=void 0,r=s||"",x.readyState=e>0?4:0,l=e>=200&&300>e||304===e,n&&(y=R(d,x,n)),y=H(d,y,x,l),l?(d.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(Z.lastModified[o]=w),w=x.getResponseHeader("etag"),w&&(Z.etag[o]=w)),204===e||"HEAD"===d.type?C="nocontent":304===e?C="notmodified":(C=y.state,u=y.data,v=y.error,l=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),x.status=e,x.statusText=(t||C)+"",l?h.resolveWith(p,[u,C,x]):h.rejectWith(p,[x,C,v]),x.statusCode(g),g=void 0,c&&f.trigger(l?"ajaxSuccess":"ajaxError",[x,d,l?u:v]),m.fireWith(p,[x,C]),c&&(f.trigger("ajaxComplete",[x,d]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{}
var i,o,r,s,a,l,c,u,d=Z.ajaxSetup({},t),p=d.context||d,f=d.context&&(p.nodeType||p.jquery)?Z(p):Z.event,h=Z.Deferred(),m=Z.Callbacks("once memory"),g=d.statusCode||{},v={},y={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t
if(2===b){if(!s)for(s={};t=ft.exec(r);)s[t[1].toLowerCase()]=t[2]
t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?r:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t
if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]]
else x.always(e[x.status])
return this},abort:function(e){var t=e||w
return i&&i.abort(t),n(0,t),this}}
if(h.promise(x).complete=m.add,x.success=x.done,x.error=x.fail,d.url=((e||d.url||xt)+"").replace(dt,"").replace(gt,Ct[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=Z.trim(d.dataType||"*").toLowerCase().match(fe)||[""],null==d.crossDomain&&(l=vt.exec(d.url.toLowerCase()),d.crossDomain=!(!l||l[1]===Ct[1]&&l[2]===Ct[2]&&(l[3]||("http:"===l[1]?"80":"443"))===(Ct[3]||("http:"===Ct[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=Z.param(d.data,d.traditional)),j(yt,d,t,x),2===b)return x
c=Z.event&&d.global,c&&0===Z.active++&&Z.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!mt.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(ut.test(o)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=pt.test(o)?o.replace(pt,"$1_="+ct++):o+(ut.test(o)?"&":"?")+"_="+ct++)),d.ifModified&&(Z.lastModified[o]&&x.setRequestHeader("If-Modified-Since",Z.lastModified[o]),Z.etag[o]&&x.setRequestHeader("If-None-Match",Z.etag[o])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&x.setRequestHeader("Content-Type",d.contentType),x.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+wt+"; q=0.01":""):d.accepts["*"])
for(u in d.headers)x.setRequestHeader(u,d.headers[u])
if(d.beforeSend&&(d.beforeSend.call(p,x,d)===!1||2===b))return x.abort()
w="abort"
for(u in{success:1,error:1,complete:1})x[u](d[u])
if(i=j(bt,d,t,x)){x.readyState=1,c&&f.trigger("ajaxSend",[x,d]),d.async&&d.timeout>0&&(a=setTimeout(function(){x.abort("timeout")},d.timeout))
try{b=1,i.send(v,n)}catch(e){if(!(2>b))throw e
n(-1,e)}}else n(-1,"No Transport")
return x},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,i,o){return Z.isFunction(n)&&(o=o||i,i=n,n=void 0),Z.ajax({url:e,type:t,dataType:o,data:n,success:i})}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},Z.fn.extend({wrapAll:function(e){var t
return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e)
return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)}
var Tt=/%20/g,St=/\[\]$/,Dt=/\r?\n/g,_t=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i
Z.param=function(e,t){var n,i=[],o=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){o(this.name,this.value)})
else for(n in e)M(n,e[n],t,o)
return i.join("&").replace(Tt,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements")
return e?Z.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!Z(this).is(":disabled")&&kt.test(this.nodeName)&&!_t.test(e)&&(this.checked||!Se.test(e))}).map(function(e,t){var n=Z(this).val()
return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var Et=0,At={},It={0:200,1223:204},$t=Z.ajaxSettings.xhr()
e.attachEvent&&e.attachEvent("onunload",function(){for(var e in At)At[e]()}),Y.cors=!!$t&&"withCredentials"in $t,Y.ajax=$t=!!$t,Z.ajaxTransport(function(e){var t
return Y.cors||$t&&!e.crossDomain?{send:function(n,i){var o,r=e.xhr(),s=++Et
if(r.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(o in e.xhrFields)r[o]=e.xhrFields[o]
e.mimeType&&r.overrideMimeType&&r.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest")
for(o in n)r.setRequestHeader(o,n[o])
t=function(e){return function(){t&&(delete At[s],t=r.onload=r.onerror=null,"abort"===e?r.abort():"error"===e?i(r.status,r.statusText):i(It[r.status]||r.status,r.statusText,"string"==typeof r.responseText?{text:r.responseText}:void 0,r.getAllResponseHeaders()))}},r.onload=t(),r.onerror=t("error"),t=At[s]=t("abort")
try{r.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(i,o){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),G.head.appendChild(t[0])},abort:function(){n&&n()}}}})
var Ft=[],Nt=/(=)\?(?=&|$)|\?\?/
Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ft.pop()||Z.expando+"_"+ct++
return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=t.jsonp!==!1&&(Nt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Nt.test(t.data)&&"data")
return a||"jsonp"===t.dataTypes[0]?(o=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Nt,"$1"+o):t.jsonp!==!1&&(t.url+=(ut.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||Z.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Ft.push(o)),s&&Z.isFunction(r)&&r(s[0]),s=r=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||G
var i=se.exec(e),o=!n&&[]
return i?[t.createElement(i[1])]:(i=Z.buildFragment([e],t,o),o&&o.length&&Z(o).remove(),Z.merge([],i.childNodes))}
var Lt=Z.fn.load
Z.fn.load=function(e,t,n){if("string"!=typeof e&&Lt)return Lt.apply(this,arguments)
var i,o,r,s=this,a=e.indexOf(" ")
return a>=0&&(i=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),s.length>0&&Z.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?Z("<div>").append(Z.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){s.each(n,r||[e.responseText,t,e])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length}
var Pt=e.document.documentElement
Z.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,c,u=Z.css(e,"position"),d=Z(e),p={}
"static"===u&&(e.style.position="relative"),a=d.offset(),r=Z.css(e,"top"),l=Z.css(e,"left"),c=("absolute"===u||"fixed"===u)&&(r+l).indexOf("auto")>-1,c?(i=d.position(),s=i.top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):d.css(p)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)})
var t,n,i=this[0],o={top:0,left:0},r=i&&i.ownerDocument
return r?(t=r.documentElement,Z.contains(t,i)?(typeof i.getBoundingClientRect!==De&&(o=i.getBoundingClientRect()),n=z(r),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o):void 0},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0}
return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(i=e.offset()),i.top+=Z.css(e[0],"borderTopWidth",!0),i.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-Z.css(n,"marginTop",!0),left:t.left-i.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Pt;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent
return e||Pt})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n
Z.fn[t]=function(o){return ge(this,function(t,o,r){var s=z(t)
return void 0===r?s?s[n]:t[o]:void(s?s.scrollTo(i?e.pageXOffset:r,i?r:e.pageYOffset):t[o]=r)},t,o,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=C(Y.pixelPosition,function(e,n){return n?(n=x(e,t),Be.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){Z.fn[i]=function(i,o){var r=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border")
return ge(this,function(t,n,i){var o
return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?Z.css(t,n,s):Z.style(t,n,i,s)},t,r?i:void 0,r,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z})
var jt=e.jQuery,Ot=e.$
return Z.noConflict=function(t){return e.$===Z&&(e.$=Ot),t&&e.jQuery===Z&&(e.jQuery=jt),Z},typeof t===De&&(e.jQuery=e.$=Z),Z}),window.Modernizr=function(e,t,n){function i(e){h.cssText=e}function o(e,t){return typeof e===t}var r,s,a,l="2.6.2",c={},u=!0,d=t.documentElement,p="modernizr",f=t.createElement(p),h=f.style,m=({}.toString,{}),g=[],v=g.slice,y={}.hasOwnProperty
a=o(y,"undefined")||o(y.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return y.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this
if("function"!=typeof t)throw new TypeError
var n=v.call(arguments,1),i=function(){if(this instanceof i){var o=function(){}
o.prototype=t.prototype
var r=new o,s=t.apply(r,n.concat(v.call(arguments)))
return Object(s)===s?s:r}return t.apply(e,n.concat(v.call(arguments)))}
return i}),m.history=function(){return!!e.history&&!!history.pushState}
for(var b in m)a(m,b)&&(s=b.toLowerCase(),c[s]=m[b](),g.push((c[s]?"":"no-")+s))
return c.addTest=function(e,t){if("object"==typeof e)for(var i in e)a(e,i)&&c.addTest(i,e[i])
else{if(e=e.toLowerCase(),c[e]!==n)return c
t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(d.className+=" "+(t?"":"no-")+e),c[e]=t}return c},i(""),f=r=null,function(e,t){function n(e,t){var n=e.createElement("p"),i=e.getElementsByTagName("head")[0]||e.documentElement
return n.innerHTML="x<style>"+t+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var e=v.elements
return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[h]]
return t||(t={},m++,e[h]=m,g[m]=t),t}function r(e,n,i){if(n||(n=t),u)return n.createElement(e)
i||(i=o(n))
var r
return r=i.cache[e]?i.cache[e].cloneNode():f.test(e)?(i.cache[e]=i.createElem(e)).cloneNode():i.createElem(e),r.canHaveChildren&&!p.test(e)?i.frag.appendChild(r):r}function s(e,n){if(e||(e=t),u)return e.createDocumentFragment()
n=n||o(e)
for(var r=n.frag.cloneNode(),s=0,a=i(),l=a.length;s<l;s++)r.createElement(a[s])
return r}function a(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?r(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function l(e){e||(e=t)
var i=o(e)
return v.shivCSS&&!c&&!i.hasCSS&&(i.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||a(e,i),e}var c,u,d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",m=0,g={}
!function(){try{var e=t.createElement("a")
e.innerHTML="<xyz></xyz>",c="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a")
var e=t.createDocumentFragment()
return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(e){c=!0,u=!0}}()
var v={elements:d.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:d.shivCSS!==!1,supportsUnknownElements:u,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:s}
e.html5=v,l(t)}(this,t),c._version=l,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+g.join(" "):""),c}(this,this.document),function(e,t,n){function i(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function r(){}function s(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function a(){var e=v.shift()
y=1,e?e.t?h(function(){("c"==e.t?p.injectCss:p.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),a()):y=0}function l(e,n,i,o,r,l,c){function u(t){if(!f&&s(d.readyState)&&(b.r=f=1,!y&&a(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&h(function(){x.removeChild(d)},50)
for(var i in _[n])_[n].hasOwnProperty(i)&&_[n][i].onload()}}var c=c||p.errorTimeout,d=t.createElement(e),f=0,g=0,b={t:i,s:n,e:r,a:l,x:c}
1===_[n]&&(g=1,_[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===_[n]?(x.insertBefore(d,w?null:m),h(u,c)):_[n].push(d))}function c(e,t,n,i,r){return y=0,t=t||"j",o(e)?l("c"==t?T:C,e,t,this.i++,n,i,r):(v.splice(this.i++,0,e),1==v.length&&a()),this}function u(){var e=p
return e.loader={load:c,i:0},e}var d,p,f=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in f.style,w=b&&!!t.createRange().compareNode,x=w?f:m.parentNode,f=e.opera&&"[object Opera]"==g.call(e.opera),f=!!t.attachEvent&&!f,C=b?"object":f?"script":"img",T=f?"script":C,S=Array.isArray||function(e){return"[object Array]"==g.call(e)},D=[],_={},k={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}}
p=function(e){function t(e){var t,n,i,e=e.split("!"),o=D.length,r=e.pop(),s=e.length,r={url:r,origUrl:r,prefixes:e}
for(n=0;n<s;n++)i=e[n].split("="),(t=k[i.shift()])&&(r=t(r,i))
for(n=0;n<o;n++)r=D[n](r)
return r}function s(e,o,r,s,a){var l=t(e),c=l.autoCallback
l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=i(o)?o:o[e]||o[s]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,r,s,a):(_[l.url]?l.noexec=!0:_[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(o)||i(c))&&r.load(function(){u(),o&&o(l.origUrl,a,s),c&&c(l.origUrl,a,s),_[l.url]=2})))}function a(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments)
p.apply(this,e),f()}),s(e,d,t,0,c)
else if(Object(e)===e)for(l in a=function(){var t,n=0
for(t in e)e.hasOwnProperty(t)&&n++
return n}(),e)e.hasOwnProperty(l)&&(!n&&!--a&&(i(d)?d=function(){var e=[].slice.call(arguments)
p.apply(this,e),f()}:d[l]=function(e){return function(){var t=[].slice.call(arguments)
e&&e.apply(this,t),f()}}(p[l])),s(e[l],d,t,l,c))}else!n&&f()}var a,l,c=!!e.test,u=e.load||e.both,d=e.callback||r,p=d,f=e.complete||r
n(c?e.yep:e.nope,!!u),u&&n(u)}var l,c,d=this.yepnope.loader
if(o(e))s(e,0,d,0)
else if(S(e))for(l=0;l<e.length;l++)c=e[l],o(c)?s(c,0,d,0):S(c)?p(c):Object(c)===c&&a(c,d)
else Object(e)===e&&a(e,d)},p.addPrefix=function(e,t){k[e]=t},p.addFilter=function(e){D.push(e)},p.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=a,e.yepnope.injectJs=function(e,n,i,o,l,c){var u,d,f=t.createElement("script"),o=o||p.errorTimeout
f.src=e
for(d in i)f.setAttribute(d,i[d])
n=c?a:n||r,f.onreadystatechange=f.onload=function(){!u&&s(f.readyState)&&(u=1,n(),f.onload=f.onreadystatechange=null)},h(function(){u||(u=1,n(1))},o),l?f.onload():m.parentNode.insertBefore(f,m)},e.yepnope.injectCss=function(e,n,i,o,s,l){var c,o=t.createElement("link"),n=l?a:n||r
o.href=e,o.rel="stylesheet",o.type="text/css"
for(c in i)o.setAttribute(c,i[c])
s||(m.parentNode.insertBefore(o,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){var e,t,n,i,o,r,s,a,l=[].slice,c={}.hasOwnProperty,u=function(e,t){function n(){this.constructor=e}for(var i in t)c.call(t,i)&&(e[i]=t[i])
return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e}
s=function(){},t=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,n,i,o,r
if(i=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],this._callbacks=this._callbacks||{},n=this._callbacks[i])for(o=0,r=n.length;o<r;o++)t=n[o],t.apply(this,e)
return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var n,i,o,r,s
if(!this._callbacks||0===arguments.length)return this._callbacks={},this
if(i=this._callbacks[e],!i)return this
if(1===arguments.length)return delete this._callbacks[e],this
for(o=r=0,s=i.length;r<s;o=++r)if(n=i[o],n===t){i.splice(o,1)
break}return this},e}(),e=function(e){function n(e,t){var o,r,s
if(this.element=e,this.version=n.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.")
if(this.element.dropzone)throw new Error("Dropzone already attached.")
if(n.instances.push(this),this.element.dropzone=this,o=null!=(s=n.optionsForElement(this.element))?s:{},this.options=i({},this.defaultOptions,o,null!=t?t:{}),this.options.forceFallback||!n.isBrowserSupported())return this.options.fallback.call(this)
if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.")
if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.")
this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(r=this.getExistingFallback())&&r.parentNode&&r.parentNode.removeChild(r),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=n.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=n.getElements(this.options.clickable,"clickable")),this.init()}var i,o
return u(n,e),n.prototype.Emitter=t,n.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],n.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,filesizeBase:1e3,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,capture:null,dictDefaultMessage:msg_dropzone,dictFallbackMessage:"Su navegador no soporta arrastrar y soltar la carga de archivos.",dictFallbackText:"Por favor, utilice el formulario de reserva de abajo para subir tus archivos, como en los viejos tiempos.",dictFileTooBig:"El archivo es demasiado grande ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"No puedes subir archivos de este tipo.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancelar carga",dictCancelUploadConfirmation:"¿Seguro que desea cancelar esta subida?",dictRemoveFile:"Remover archivo",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"No puedes subir más archivos.",accept:function(e,t){return t()},init:function(){return s},forceFallback:!1,fallback:function(){var e,t,i,o,r,s
for(this.element.className=""+this.element.className+" dz-browser-not-supported",s=this.element.getElementsByTagName("div"),o=0,r=s.length;o<r;o++)e=s[o],/(^| )dz-message($| )/.test(e.className)&&(t=e,e.className="dz-message")
return t||(t=n.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),i=t.getElementsByTagName("span")[0],i&&(i.textContent=this.options.dictFallbackMessage),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,n,i
return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},n=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=n*t.optHeight:null==t.optHeight&&(t.optHeight=1/n*t.optWidth),i=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):n>i?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*i):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/i),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(e){return this.element.classList.remove("dz-drag-hover")},dragstart:s,dragend:function(e){return this.element.classList.remove("dz-drag-hover")},dragenter:function(e){return this.element.classList.add("dz-drag-hover")},dragover:function(e){return this.element.classList.add("dz-drag-hover")},dragleave:function(e){return this.element.classList.remove("dz-drag-hover")},paste:s,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t,i,o,r,s,a,l,c,u,d,p,f,h
if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=n.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),d=e.previewElement.querySelectorAll("[data-dz-name]"),r=0,l=d.length;r<l;r++)t=d[r],t.textContent=e.name
for(p=e.previewElement.querySelectorAll("[data-dz-size]"),s=0,c=p.length;s<c;s++)t=p[s],t.innerHTML=this.filesize(e.size)
for(this.options.addRemoveLinks&&(e._removeLink=n.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),i=function(t){return function(i){return i.preventDefault(),i.stopPropagation(),e.status===n.UPLOADING?n.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?n.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)}}(this),f=e.previewElement.querySelectorAll("[data-dz-remove]"),h=[],a=0,u=f.length;a<u;a++)o=f[a],h.push(o.addEventListener("click",i))
return h}},removedfile:function(e){var t
return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var n,i,o,r
if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),r=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),i=0,o=r.length;i<o;i++)n=r[i],n.alt=e.name,n.src=t
return setTimeout(function(t){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var n,i,o,r,s
if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),r=e.previewElement.querySelectorAll("[data-dz-errormessage]"),s=[],i=0,o=r.length;i<o;i++)n=r[i],s.push(n.textContent=t)
return s}},errormultiple:s,processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:s,uploadprogress:function(e,t,n){var i,o,r,s,a
if(e.previewElement){for(s=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),a=[],o=0,r=s.length;o<r;o++)i=s[o],"PROGRESS"===i.nodeName?a.push(i.value=t):a.push(i.style.width=""+t+"%")
return a}},totaluploadprogress:s,sending:s,sendingmultiple:s,success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:s,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:s,complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:s,maxfilesexceeded:s,maxfilesreached:s,queuecomplete:s,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},i=function(){var e,t,n,i,o,r,s
for(i=arguments[0],n=2<=arguments.length?l.call(arguments,1):[],r=0,s=n.length;r<s;r++){t=n[r]
for(e in t)o=t[e],i[e]=o}return i},n.prototype.getAcceptedFiles=function(){var e,t,n,i,o
for(i=this.files,o=[],t=0,n=i.length;t<n;t++)e=i[t],e.accepted&&o.push(e)
return o},n.prototype.getRejectedFiles=function(){var e,t,n,i,o
for(i=this.files,o=[],t=0,n=i.length;t<n;t++)e=i[t],e.accepted||o.push(e)
return o},n.prototype.getFilesWithStatus=function(e){var t,n,i,o,r
for(o=this.files,r=[],n=0,i=o.length;n<i;n++)t=o[n],t.status===e&&r.push(t)
return r},n.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(n.QUEUED)},n.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(n.UPLOADING)},n.prototype.getActiveFiles=function(){var e,t,i,o,r
for(o=this.files,r=[],t=0,i=o.length;t<i;t++)e=o[t],e.status!==n.UPLOADING&&e.status!==n.QUEUED||r.push(e)
return r},n.prototype.init=function(){var e,t,i,o,r,s,a
for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(n.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(i=function(e){return function(){return e.hiddenFileInput&&document.body.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.body.appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,n,o,r
if(n=e.hiddenFileInput.files,n.length)for(o=0,r=n.length;o<r;o++)t=n[o],e.addFile(t)
return i()})}}(this))(),this.URL=null!=(s=window.URL)?s:window.webkitURL,a=this.events,o=0,r=a.length;o<r;o++)e=a[o],this.on(e,this.options[e])
return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(t){if(0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)}}(this)),t=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(n){return t(n),e.emit("dragenter",n)}}(this),dragover:function(e){return function(n){var i
try{i=n.dataTransfer.effectAllowed}catch(e){}return n.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",t(n),e.emit("dragover",n)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(n){return t(n),e.drop(n)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(t){return e.listeners.push({element:t,events:{click:function(i){if(t!==e.element||i.target===e.element||n.elementInside(i.target,e.element.querySelector(".dz-message")))return e.hiddenFileInput.click()}}})}}(this)),this.enable(),this.options.init.call(this)},n.prototype.destroy=function(){var e
return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,n.instances.splice(n.instances.indexOf(this),1)},n.prototype.updateTotalUploadProgress=function(){var e,t,n,i,o,r,s,a
if(i=0,n=0,e=this.getActiveFiles(),e.length){for(a=this.getActiveFiles(),r=0,s=a.length;r<s;r++)t=a[r],i+=t.upload.bytesSent,n+=t.upload.total
o=100*i/n}else o=100
return this.emit("totaluploadprogress",o,n,i)},n.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},n.prototype.getFallbackForm=function(){var e,t,i,o
return(e=this.getExistingFallback())?e:(i='<div class="dz-fallback">',this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=n.createElement(i),"FORM"!==this.element.tagName?(o=n.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),o.appendChild(t)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=o?o:t)},n.prototype.getExistingFallback=function(){var e,t,n,i,o,r
for(t=function(e){var t,n,i
for(n=0,i=e.length;n<i;n++)if(t=e[n],/(^| )fallback($| )/.test(t.className))return t},r=["div","form"],i=0,o=r.length;i<o;i++)if(n=r[i],e=t(this.element.getElementsByTagName(n)))return e},n.prototype.setupEventListeners=function(){var e,t,n,i,o,r,s
for(r=this.listeners,s=[],i=0,o=r.length;i<o;i++)e=r[i],s.push(function(){var i,o
i=e.events,o=[]
for(t in i)n=i[t],o.push(e.element.addEventListener(t,n,!1))
return o}())
return s},n.prototype.removeEventListeners=function(){var e,t,n,i,o,r,s
for(r=this.listeners,s=[],i=0,o=r.length;i<o;i++)e=r[i],s.push(function(){var i,o
i=e.events,o=[]
for(t in i)n=i[t],o.push(e.element.removeEventListener(t,n,!1))
return o}())
return s},n.prototype.disable=function(){var e,t,n,i,o
for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),i=this.files,o=[],t=0,n=i.length;t<n;t++)e=i[t],o.push(this.cancelUpload(e))
return o},n.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},n.prototype.filesize=function(e){var t,n,i,o,r,s,a,l
for(s=["TB","GB","MB","KB","b"],i=o=null,n=a=0,l=s.length;a<l;n=++a)if(r=s[n],t=Math.pow(this.options.filesizeBase,4-n)/10,e>=t){i=e/Math.pow(this.options.filesizeBase,4-n),o=r
break}return i=Math.round(10*i)/10,"<strong>"+i+"</strong> "+o},n.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},n.prototype.drop=function(e){var t,n
e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,t.length&&(n=e.dataTransfer.items,n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)))},n.prototype.paste=function(e){var t,n
if(null!=(null!=e&&null!=(n=e.clipboardData)?n.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},n.prototype.handleFiles=function(e){var t,n,i,o
for(o=[],n=0,i=e.length;n<i;n++)t=e[n],o.push(this.addFile(t))
return o},n.prototype._addFilesFromItems=function(e){var t,n,i,o,r
for(r=[],i=0,o=e.length;i<o;i++)n=e[i],null!=n.webkitGetAsEntry&&(t=n.webkitGetAsEntry())?t.isFile?r.push(this.addFile(n.getAsFile())):t.isDirectory?r.push(this._addFilesFromDirectory(t,t.name)):r.push(void 0):null!=n.getAsFile&&(null==n.kind||"file"===n.kind)?r.push(this.addFile(n.getAsFile())):r.push(void 0)
return r},n.prototype._addFilesFromDirectory=function(e,t){var n,i
return n=e.createReader(),i=function(e){return function(n){var i,o,r
for(o=0,r=n.length;o<r;o++)i=n[o],i.isFile?i.file(function(n){if(!e.options.ignoreHiddenFiles||"."!==n.name.substring(0,1))return n.fullPath=""+t+"/"+n.name,e.addFile(n)}):i.isDirectory&&e._addFilesFromDirectory(i,""+t+"/"+i.name)}}(this),n.readEntries(i,function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0})},n.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):n.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},n.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=n.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(n){return n?(e.accepted=!1,t._errorProcessing([e],n)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},n.prototype.enqueueFiles=function(e){var t,n,i
for(n=0,i=e.length;n<i;n++)t=e[n],this.enqueueFile(t)
return null},n.prototype.enqueueFile=function(e){if(e.status!==n.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.")
if(e.status=n.QUEUED,this.options.autoProcessQueue)return setTimeout(function(e){return function(){return e.processQueue()}}(this),0)},n.prototype._thumbnailQueue=[],n.prototype._processingThumbnail=!1,n.prototype._enqueueThumbnail=function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)},n.prototype._processThumbnailQueue=function(){if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(e){return function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}}(this))},n.prototype.removeFile=function(e){if(e.status===n.UPLOADING&&this.cancelUpload(e),this.files=a(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")},n.prototype.removeAllFiles=function(e){var t,i,o,r
for(null==e&&(e=!1),r=this.files.slice(),i=0,o=r.length;i<o;i++)t=r[i],(t.status!==n.UPLOADING||e)&&this.removeFile(t)
return null},n.prototype.createThumbnail=function(e,t){var n
return n=new FileReader,n.onload=function(i){return function(){return"image/svg+xml"===e.type?(i.emit("thumbnail",e,n.result),void(null!=t&&t())):i.createThumbnailFromUrl(e,n.result,t)}}(this),n.readAsDataURL(e)},n.prototype.createThumbnailFromUrl=function(e,t,n){var i
return i=document.createElement("img"),i.onload=function(t){return function(){var o,s,a,l,c,u,d,p
if(e.width=i.width,e.height=i.height,a=t.options.resize.call(t,e),null==a.trgWidth&&(a.trgWidth=a.optWidth),null==a.trgHeight&&(a.trgHeight=a.optHeight),o=document.createElement("canvas"),s=o.getContext("2d"),o.width=a.trgWidth,o.height=a.trgHeight,r(s,i,null!=(c=a.srcX)?c:0,null!=(u=a.srcY)?u:0,a.srcWidth,a.srcHeight,null!=(d=a.trgX)?d:0,null!=(p=a.trgY)?p:0,a.trgWidth,a.trgHeight),l=o.toDataURL("image/png"),t.emit("thumbnail",e,l),null!=n)return n()}}(this),null!=n&&(i.onerror=n),i.src=t},n.prototype.processQueue=function(){var e,t,n,i
if(t=this.options.parallelUploads,n=this.getUploadingFiles().length,e=n,!(n>=t)&&(i=this.getQueuedFiles(),i.length>0)){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,t-n))
for(;e<t;){if(!i.length)return
this.processFile(i.shift()),e++}}},n.prototype.processFile=function(e){return this.processFiles([e])},n.prototype.processFiles=function(e){var t,i,o
for(i=0,o=e.length;i<o;i++)t=e[i],t.processing=!0,t.status=n.UPLOADING,this.emit("processing",t)
return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},n.prototype._getFilesWithXhr=function(e){var t,n
return n=function(){var n,i,o,r
for(o=this.files,r=[],n=0,i=o.length;n<i;n++)t=o[n],t.xhr===e&&r.push(t)
return r}.call(this)},n.prototype.cancelUpload=function(e){var t,i,o,r,s,a,l
if(e.status===n.UPLOADING){for(i=this._getFilesWithXhr(e.xhr),o=0,s=i.length;o<s;o++)t=i[o],t.status=n.CANCELED
for(e.xhr.abort(),r=0,a=i.length;r<a;r++)t=i[r],this.emit("canceled",t)
this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(l=e.status)!==n.ADDED&&l!==n.QUEUED||(e.status=n.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]))
if(this.options.autoProcessQueue)return this.processQueue()},o=function(){var e,t
return t=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},n.prototype.uploadFile=function(e){return this.uploadFiles([e])},n.prototype.uploadFiles=function(e){var t,r,s,a,l,c,u,d,p,f,h,m,g,v,y,b,w,x,C,T,S,D,_,k,E,A,I,$,F,N,L,P,j,O
for(C=new XMLHttpRequest,T=0,k=e.length;T<k;T++)t=e[T],t.xhr=C
m=o(this.options.method,e),w=o(this.options.url,e),C.open(m,w,!0),C.withCredentials=!!this.options.withCredentials,y=null,s=function(n){return function(){var i,o,r
for(r=[],i=0,o=e.length;i<o;i++)t=e[i],r.push(n._errorProcessing(e,y||n.options.dictResponseError.replace("{{statusCode}}",C.status),C))
return r}}(this),b=function(n){return function(i){var o,r,s,a,l,c,u,d,p
if(null!=i)for(r=100*i.loaded/i.total,s=0,c=e.length;s<c;s++)t=e[s],t.upload={progress:r,total:i.total,bytesSent:i.loaded}
else{for(o=!0,r=100,a=0,u=e.length;a<u;a++)t=e[a],100===t.upload.progress&&t.upload.bytesSent===t.upload.total||(o=!1),t.upload.progress=r,t.upload.bytesSent=t.upload.total
if(o)return}for(p=[],l=0,d=e.length;l<d;l++)t=e[l],p.push(n.emit("uploadprogress",t,r,t.upload.bytesSent))
return p}}(this),C.onload=function(t){return function(i){var o
if(e[0].status!==n.CANCELED&&4===C.readyState){if(y=C.responseText,C.getResponseHeader("content-type")&&~C.getResponseHeader("content-type").indexOf("application/json"))try{y=JSON.parse(y)}catch(e){i=e,y="Invalid JSON response from server."}return b(),200<=(o=C.status)&&o<300?t._finished(e,y,i):s()}}}(this),C.onerror=function(t){return function(){if(e[0].status!==n.CANCELED)return s()}}(this),v=null!=(F=C.upload)?F:C,v.onprogress=b,c={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&i(c,this.options.headers)
for(a in c)l=c[a],C.setRequestHeader(a,l)
if(r=new FormData,this.options.params){N=this.options.params
for(h in N)x=N[h],r.append(h,x)}for(S=0,E=e.length;S<E;S++)t=e[S],this.emit("sending",t,C,r)
if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,C,r),"FORM"===this.element.tagName)for(L=this.element.querySelectorAll("input, textarea, select, button"),D=0,A=L.length;D<A;D++)if(d=L[D],p=d.getAttribute("name"),f=d.getAttribute("type"),"SELECT"===d.tagName&&d.hasAttribute("multiple"))for(P=d.options,_=0,I=P.length;_<I;_++)g=P[_],g.selected&&r.append(p,g.value)
else(!f||"checkbox"!==(j=f.toLowerCase())&&"radio"!==j||d.checked)&&r.append(p,d.value)
for(u=$=0,O=e.length-1;0<=O?$<=O:$>=O;u=0<=O?++$:--$)r.append(this._getParamName(u),e[u],e[u].name)
return C.send(r)},n.prototype._finished=function(e,t,i){var o,r,s
for(r=0,s=e.length;r<s;r++)o=e[r],o.status=n.SUCCESS,this.emit("success",o,t,i),this.emit("complete",o)
if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},n.prototype._errorProcessing=function(e,t,i){var o,r,s
for(r=0,s=e.length;r<s;r++)o=e[r],o.status=n.ERROR,this.emit("error",o,t,i),this.emit("complete",o)
if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},n}(t),e.version="4.0.1",e.options={},e.optionsForElement=function(t){return t.getAttribute("id")?e.options[n(t.getAttribute("id"))]:void 0},e.instances=[],e.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.")
return e.dropzone},e.autoDiscover=!0,e.discover=function(){var t,n,i,o,r,s
for(document.querySelectorAll?i=document.querySelectorAll(".dropzone"):(i=[],t=function(e){var t,n,o,r
for(r=[],n=0,o=e.length;n<o;n++)t=e[n],/(^| )dropzone($| )/.test(t.className)?r.push(i.push(t)):r.push(void 0)
return r},t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))),s=[],o=0,r=i.length;o<r;o++)n=i[o],e.optionsForElement(n)!==!1?s.push(new e(n)):s.push(void 0)
return s},e.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],e.isBrowserSupported=function(){var t,n,i,o,r
if(t=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(r=e.blacklistedBrowsers,i=0,o=r.length;i<o;i++)n=r[i],n.test(navigator.userAgent)&&(t=!1)
else t=!1
else t=!1
return t},a=function(e,t){var n,i,o,r
for(r=[],i=0,o=e.length;i<o;i++)n=e[i],n!==t&&r.push(n)
return r},n=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},e.createElement=function(e){var t
return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},e.elementInside=function(e,t){if(e===t)return!0
for(;e=e.parentNode;)if(e===t)return!0
return!1},e.getElement=function(e,t){var n
if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.")
return n},e.getElements=function(e,t){var n,i,o,r,s,a,l,c
if(e instanceof Array){o=[]
try{for(r=0,a=e.length;r<a;r++)i=e[r],o.push(this.getElement(i,t))}catch(e){n=e,o=null}}else if("string"==typeof e)for(o=[],c=document.querySelectorAll(e),s=0,l=c.length;s<l;s++)i=c[s],o.push(i)
else null!=e.nodeType&&(o=[e])
if(null==o||!o.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.")
return o},e.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},e.isValidFile=function(e,t){var n,i,o,r,s
if(!t)return!0
for(t=t.split(","),i=e.type,n=i.replace(/\/.*$/,""),r=0,s=t.length;r<s;r++)if(o=t[r],o=o.trim(),"."===o.charAt(0)){if(e.name.toLowerCase().indexOf(o.toLowerCase(),e.name.length-o.length)!==-1)return!0}else if(/\/\*$/.test(o)){if(n===o.replace(/\/.*$/,""))return!0}else if(i===o)return!0
return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(t){return this.each(function(){return new e(this,t)})}),"undefined"!=typeof module&&null!==module?module.exports=e:window.Dropzone=e,e.ADDED="added",e.QUEUED="queued",e.ACCEPTED=e.QUEUED,e.UPLOADING="uploading",e.PROCESSING=e.UPLOADING,e.CANCELED="canceled",e.ERROR="error",e.SUCCESS="success",o=function(e){var t,n,i,o,r,s,a,l,c,u
for(a=e.naturalWidth,s=e.naturalHeight,n=document.createElement("canvas"),n.width=1,n.height=s,i=n.getContext("2d"),i.drawImage(e,0,0),o=i.getImageData(0,0,1,s).data,u=0,r=s,l=s;l>u;)t=o[4*(l-1)+3],0===t?r=l:u=l,l=r+u>>1
return c=l/s,0===c?1:c},r=function(e,t,n,i,r,s,a,l,c,u){var d
return d=o(t),e.drawImage(t,n,i,r,s,a,l,c,u/d)},i=function(e,t){var n,i,o,r,s,a,l,c,u
if(o=!1,u=!0,i=e.document,c=i.documentElement,n=i.addEventListener?"addEventListener":"attachEvent",l=i.addEventListener?"removeEventListener":"detachEvent",a=i.addEventListener?"":"on",r=function(n){if("readystatechange"!==n.type||"complete"===i.readyState)return("load"===n.type?e:i)[l](a+n.type,r,!1),!o&&(o=!0)?t.call(e,n.type||n):void 0},s=function(){var e
try{c.doScroll("left")}catch(t){return e=t,void setTimeout(s,50)}return r("poll")},"complete"!==i.readyState){if(i.createEventObject&&c.doScroll){try{u=!e.frameElement}catch(e){}u&&s()}return i[n](a+"DOMContentLoaded",r,!1),i[n](a+"readystatechange",r,!1),e[n](a+"load",r,!1)}},e._autoDiscoverFunction=function(){if(e.autoDiscover)return e.discover()},i(window,e._autoDiscoverFunction)}.call(this),function(e,t,n){var i=function(i){function o(e){var t,n,r={}
i.each(e,function(i){(t=i.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(t[1]+" ")&&(n=i.replace(t[0],t[2].toLowerCase()),r[n]=i,"o"===t[1]&&o(e[i]))}),e._hungarianMap=r}function r(e,t,s){e._hungarianMap||o(e)
var a
i.each(t,function(o){a=e._hungarianMap[o],a===n||!s&&t[a]!==n||("o"===a.charAt(0)?(t[a]||(t[a]={}),i.extend(!0,t[a],t[o]),r(e[a],t[a],s)):t[a]=t[o])})}function s(e){var t=qe.defaults.oLanguage,n=e.sZeroRecords
!e.sEmptyTable&&n&&"No data available in table"===t.sEmptyTable&&Ne(e,e,"sZeroRecords","sEmptyTable"),!e.sLoadingRecords&&n&&"Loading..."===t.sLoadingRecords&&Ne(e,e,"sZeroRecords","sLoadingRecords"),e.sInfoThousands&&(e.sThousands=e.sInfoThousands),(e=e.sDecimal)&&Be(e)}function a(e){if(pt(e,"ordering","bSort"),pt(e,"orderMulti","bSortMulti"),pt(e,"orderClasses","bSortClasses"),pt(e,"orderCellsTop","bSortCellsTop"),pt(e,"order","aaSorting"),pt(e,"orderFixed","aaSortingFixed"),pt(e,"paging","bPaginate"),pt(e,"pagingType","sPaginationType"),pt(e,"pageLength","iDisplayLength"),pt(e,"searching","bFilter"),"boolean"==typeof e.sScrollX&&(e.sScrollX=e.sScrollX?"100%":""),e=e.aoSearchCols)for(var t=0,n=e.length;t<n;t++)e[t]&&r(qe.models.oSearch,e[t])}function l(e){pt(e,"orderable","bSortable"),pt(e,"orderData","aDataSort"),pt(e,"orderSequence","asSorting"),pt(e,"orderDataType","sortDataType")
var t=e.aDataSort
t&&!i.isArray(t)&&(e.aDataSort=[t])}function c(e){if(!qe.__browser){var t={}
qe.__browser=t
var n=i("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(i("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(i("<div/>").css({width:"100%",height:10}))).appendTo("body"),o=n.children(),r=o.children()
t.barWidth=o[0].offsetWidth-o[0].clientWidth,t.bScrollOversize=100===r[0].offsetWidth&&100!==o[0].clientWidth,t.bScrollbarLeft=1!==Math.round(r.offset().left),t.bBounding=!!n[0].getBoundingClientRect().width,n.remove()}i.extend(e.oBrowser,qe.__browser),e.oScroll.iBarWidth=qe.__browser.barWidth}function u(e,t,i,o,r,s){var a,l=!1
for(i!==n&&(a=i,l=!0);o!==r;)e.hasOwnProperty(o)&&(a=l?t(a,e[o],o,e):e[o],l=!0,o+=s)
return a}function d(e,n){var o=qe.defaults.column,r=e.aoColumns.length,o=i.extend({},qe.models.oColumn,o,{nTh:n?n:t.createElement("th"),sTitle:o.sTitle?o.sTitle:n?n.innerHTML:"",aDataSort:o.aDataSort?o.aDataSort:[r],mData:o.mData?o.mData:r,idx:r})
e.aoColumns.push(o),o=e.aoPreSearchCols,o[r]=i.extend({},qe.models.oSearch,o[r]),p(e,r,i(n).data())}function p(e,t,o){var t=e.aoColumns[t],s=e.oClasses,a=i(t.nTh)
if(!t.sWidthOrig){t.sWidthOrig=a.attr("width")||null
var c=(a.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/)
c&&(t.sWidthOrig=c[1])}o!==n&&null!==o&&(l(o),r(qe.defaults.column,o),o.mDataProp!==n&&!o.mData&&(o.mData=o.mDataProp),o.sType&&(t._sManualType=o.sType),o.className&&!o.sClass&&(o.sClass=o.className),i.extend(t,o),Ne(t,o,"sWidth","sWidthOrig"),o.iDataSort!==n&&(t.aDataSort=[o.iDataSort]),Ne(t,o,"aDataSort"))
var u=t.mData,d=D(u),p=t.mRender?D(t.mRender):null,o=function(e){return"string"==typeof e&&-1!==e.indexOf("@")}
t._bAttrSrc=i.isPlainObject(u)&&(o(u.sort)||o(u.type)||o(u.filter)),t.fnGetData=function(e,t,i){var o=d(e,t,n,i)
return p&&t?p(o,t,e,i):o},t.fnSetData=function(e,t,n){return _(u)(e,t,n)},"number"!=typeof u&&(e._rowReadObject=!0),e.oFeatures.bSort||(t.bSortable=!1,a.addClass(s.sSortableNone)),e=-1!==i.inArray("asc",t.asSorting),o=-1!==i.inArray("desc",t.asSorting),t.bSortable&&(e||o)?e&&!o?(t.sSortingClass=s.sSortableAsc,t.sSortingClassJUI=s.sSortJUIAscAllowed):!e&&o?(t.sSortingClass=s.sSortableDesc,t.sSortingClassJUI=s.sSortJUIDescAllowed):(t.sSortingClass=s.sSortable,t.sSortingClassJUI=s.sSortJUI):(t.sSortingClass=s.sSortableNone,t.sSortingClassJUI="")}function f(e){if(!1!==e.oFeatures.bAutoWidth){var t=e.aoColumns
ge(e)
for(var n=0,i=t.length;n<i;n++)t[n].nTh.style.width=t[n].sWidth}t=e.oScroll,(""!==t.sY||""!==t.sX)&&he(e),Oe(e,null,"column-sizing",[e])}function h(e,t){var n=v(e,"bVisible")
return"number"==typeof n[t]?n[t]:null}function m(e,t){var n=v(e,"bVisible"),n=i.inArray(t,n)
return-1!==n?n:null}function g(e){return v(e,"bVisible").length}function v(e,t){var n=[]
return i.map(e.aoColumns,function(e,i){e[t]&&n.push(i)}),n}function y(e){var t,i,o,r,s,a,l,c,u,d=e.aoColumns,p=e.aoData,f=qe.ext.type.detect
for(t=0,i=d.length;t<i;t++)if(l=d[t],u=[],!l.sType&&l._sManualType)l.sType=l._sManualType
else if(!l.sType){for(o=0,r=f.length;o<r;o++){for(s=0,a=p.length;s<a&&(u[s]===n&&(u[s]=C(e,s,t,"type")),c=f[o](u[s],e),c||o===f.length-1)&&"html"!==c;s++);if(c){l.sType=c
break}}l.sType||(l.sType="string")}}function b(e,t,o,r){var s,a,l,c,u,p,f=e.aoColumns
if(t)for(s=t.length-1;0<=s;s--){p=t[s]
var h=p.targets!==n?p.targets:p.aTargets
for(i.isArray(h)||(h=[h]),a=0,l=h.length;a<l;a++)if("number"==typeof h[a]&&0<=h[a]){for(;f.length<=h[a];)d(e)
r(h[a],p)}else if("number"==typeof h[a]&&0>h[a])r(f.length+h[a],p)
else if("string"==typeof h[a])for(c=0,u=f.length;c<u;c++)("_all"==h[a]||i(f[c].nTh).hasClass(h[a]))&&r(c,p)}if(o)for(s=0,e=o.length;s<e;s++)r(s,o[s])}function w(e,t,o,r){var s=e.aoData.length,a=i.extend(!0,{},qe.models.oRow,{src:o?"dom":"data",idx:s})
a._aData=t,e.aoData.push(a)
for(var l=e.aoColumns,c=0,u=l.length;c<u;c++)l[c].sType=null
return e.aiDisplayMaster.push(s),t=e.rowIdFn(t),t!==n&&(e.aIds[t]=a),(o||!e.oFeatures.bDeferRender)&&F(e,s,o,r),s}function x(e,t){var n
return t instanceof i||(t=i(t)),t.map(function(t,i){return n=$(e,i),w(e,n.data,i,n.cells)})}function C(e,t,i,o){var r=e.iDraw,s=e.aoColumns[i],a=e.aoData[t]._aData,l=s.sDefaultContent,i=s.fnGetData(a,o,{settings:e,row:t,col:i})
if(i===n)return e.iDrawError!=r&&null===l&&(Fe(e,0,"Requested unknown parameter "+("function"==typeof s.mData?"{function}":"'"+s.mData+"'")+" for row "+t,4),e.iDrawError=r),l
if(i!==a&&null!==i||null===l){if("function"==typeof i)return i.call(a)}else i=l
return null===i&&"display"==o?"":i}function T(e,t,n,i){e.aoColumns[n].fnSetData(e.aoData[t]._aData,i,{settings:e,row:t,col:n})}function S(e){return i.map(e.match(/(\\.|[^\.])+/g)||[""],function(e){return e.replace(/\\./g,".")})}function D(e){if(i.isPlainObject(e)){var t={}
return i.each(e,function(e,n){n&&(t[e]=D(n))}),function(e,i,o,r){var s=t[i]||t._
return s!==n?s(e,i,o,r):e}}if(null===e)return function(e){return e}
if("function"==typeof e)return function(t,n,i,o){return e(t,n,i,o)}
if("string"==typeof e&&(-1!==e.indexOf(".")||-1!==e.indexOf("[")||-1!==e.indexOf("("))){var o=function(e,t,r){var s,a
if(""!==r){a=S(r)
for(var l=0,c=a.length;l<c;l++){if(r=a[l].match(ft),s=a[l].match(ht),r){if(a[l]=a[l].replace(ft,""),""!==a[l]&&(e=e[a[l]]),s=[],a.splice(0,l+1),a=a.join("."),i.isArray(e))for(l=0,c=e.length;l<c;l++)s.push(o(e[l],t,a))
e=r[0].substring(1,r[0].length-1),e=""===e?s:s.join(e)
break}if(s)a[l]=a[l].replace(ht,""),e=e[a[l]]()
else{if(null===e||e[a[l]]===n)return n
e=e[a[l]]}}}return e}
return function(t,n){return o(t,n,e)}}return function(t){return t[e]}}function _(e){if(i.isPlainObject(e))return _(e._)
if(null===e)return function(){}
if("function"==typeof e)return function(t,n,i){e(t,"set",n,i)}
if("string"==typeof e&&(-1!==e.indexOf(".")||-1!==e.indexOf("[")||-1!==e.indexOf("("))){var t=function(e,o,r){var s,r=S(r)
s=r[r.length-1]
for(var a,l,c=0,u=r.length-1;c<u;c++){if(a=r[c].match(ft),l=r[c].match(ht),a){if(r[c]=r[c].replace(ft,""),e[r[c]]=[],s=r.slice(),s.splice(0,c+1),a=s.join("."),i.isArray(o))for(l=0,u=o.length;l<u;l++)s={},t(s,o[l],a),e[r[c]].push(s)
else e[r[c]]=o
return}l&&(r[c]=r[c].replace(ht,""),e=e[r[c]](o)),null!==e[r[c]]&&e[r[c]]!==n||(e[r[c]]={}),e=e[r[c]]}s.match(ht)?e[s.replace(ht,"")](o):e[s.replace(ft,"")]=o}
return function(n,i){return t(n,i,e)}}return function(t,n){t[e]=n}}function k(e){return at(e.aoData,"_aData")}function E(e){e.aoData.length=0,e.aiDisplayMaster.length=0,e.aiDisplay.length=0,e.aIds={}}function A(e,t,i){for(var o=-1,r=0,s=e.length;r<s;r++)e[r]==t?o=r:e[r]>t&&e[r]--;-1!=o&&i===n&&e.splice(o,1)}function I(e,t,i,o){var r,s=e.aoData[t],a=function(n,i){for(;n.childNodes.length;)n.removeChild(n.firstChild)
n.innerHTML=C(e,t,i,"display")}
if("dom"!==i&&(i&&"auto"!==i||"dom"!==s.src)){var l=s.anCells
if(l)if(o!==n)a(l[o],o)
else for(i=0,r=l.length;i<r;i++)a(l[i],i)}else s._aData=$(e,s,o,o===n?n:s._aData).data
if(s._aSortData=null,s._aFilterData=null,a=e.aoColumns,o!==n)a[o].sType=null
else{for(i=0,r=a.length;i<r;i++)a[i].sType=null
N(e,s)}}function $(e,t,o,r){var s,a,l,c=[],u=t.firstChild,d=0,p=e.aoColumns,f=e._rowReadObject,r=r!==n?r:f?{}:[],h=function(e,t){if("string"==typeof e){var n=e.indexOf("@");-1!==n&&(n=e.substring(n+1),_(e)(r,t.getAttribute(n)))}},m=function(e){o!==n&&o!==d||(a=p[d],l=i.trim(e.innerHTML),a&&a._bAttrSrc?(_(a.mData._)(r,l),h(a.mData.sort,e),h(a.mData.type,e),h(a.mData.filter,e)):f?(a._setter||(a._setter=_(a.mData)),a._setter(r,l)):r[d]=l),d++}
if(u)for(;u;)s=u.nodeName.toUpperCase(),"TD"!=s&&"TH"!=s||(m(u),c.push(u)),u=u.nextSibling
else{c=t.anCells,s=0
for(var g=c.length;s<g;s++)m(c[s])}return(t=u?t:t.nTr)&&(t=t.getAttribute("id"))&&_(e.rowId)(r,t),{data:r,cells:c}}function F(e,n,i,o){var r,s,a,l,c,u=e.aoData[n],d=u._aData,p=[]
if(null===u.nTr){for(r=i||t.createElement("tr"),u.nTr=r,u.anCells=p,r._DT_RowIndex=n,N(e,u),l=0,c=e.aoColumns.length;l<c;l++)a=e.aoColumns[l],s=i?o[l]:t.createElement(a.sCellType),p.push(s),i&&!a.mRender&&a.mData===l||(s.innerHTML=C(e,n,l,"display")),a.sClass&&(s.className+=" "+a.sClass),a.bVisible&&!i?r.appendChild(s):!a.bVisible&&i&&s.parentNode.removeChild(s),a.fnCreatedCell&&a.fnCreatedCell.call(e.oInstance,s,C(e,n,l),d,n,l)
Oe(e,"aoRowCreatedCallback",null,[r,d,n])}u.nTr.setAttribute("role","row")}function N(e,t){var n=t.nTr,o=t._aData
if(n){var r=e.rowIdFn(o)
r&&(n.id=r),o.DT_RowClass&&(r=o.DT_RowClass.split(" "),t.__rowc=t.__rowc?dt(t.__rowc.concat(r)):r,i(n).removeClass(t.__rowc.join(" ")).addClass(o.DT_RowClass)),o.DT_RowAttr&&i(n).attr(o.DT_RowAttr),o.DT_RowData&&i(n).data(o.DT_RowData)}}function L(e){var t,n,o,r,s,a=e.nTHead,l=e.nTFoot,c=0===i("th, td",a).length,u=e.oClasses,d=e.aoColumns
for(c&&(r=i("<tr/>").appendTo(a)),t=0,n=d.length;t<n;t++)s=d[t],o=i(s.nTh).addClass(s.sClass),c&&o.appendTo(r),e.oFeatures.bSort&&(o.addClass(s.sSortingClass),!1!==s.bSortable&&(o.attr("tabindex",e.iTabIndex).attr("aria-controls",e.sTableId),_e(e,s.nTh,t))),s.sTitle!=o[0].innerHTML&&o.html(s.sTitle),He(e,"header")(e,o,s,u)
if(c&&H(e.aoHeader,a),i(a).find(">tr").attr("role","row"),i(a).find(">tr>th, >tr>td").addClass(u.sHeaderTH),i(l).find(">tr>th, >tr>td").addClass(u.sFooterTH),null!==l)for(e=e.aoFooter[0],t=0,n=e.length;t<n;t++)s=d[t],s.nTf=e[t].cell,s.sClass&&i(s.nTf).addClass(s.sClass)}function P(e,t,o){var r,s,a,l,c=[],u=[],d=e.aoColumns.length
if(t){for(o===n&&(o=!1),r=0,s=t.length;r<s;r++){for(c[r]=t[r].slice(),c[r].nTr=t[r].nTr,a=d-1;0<=a;a--)!e.aoColumns[a].bVisible&&!o&&c[r].splice(a,1)
u.push([])}for(r=0,s=c.length;r<s;r++){if(e=c[r].nTr)for(;a=e.firstChild;)e.removeChild(a)
for(a=0,t=c[r].length;a<t;a++)if(l=d=1,u[r][a]===n){for(e.appendChild(c[r][a].cell),u[r][a]=1;c[r+d]!==n&&c[r][a].cell==c[r+d][a].cell;)u[r+d][a]=1,d++
for(;c[r][a+l]!==n&&c[r][a].cell==c[r][a+l].cell;){for(o=0;o<d;o++)u[r+o][a+l]=1
l++}i(c[r][a].cell).attr("rowspan",d).attr("colspan",l)}}}}function j(e){var t=Oe(e,"aoPreDrawCallback","preDraw",[e])
if(-1!==i.inArray(!1,t))pe(e,!1)
else{var t=[],o=0,r=e.asStripeClasses,s=r.length,a=e.oLanguage,l=e.iInitDisplayStart,c="ssp"==Me(e),u=e.aiDisplay
e.bDrawing=!0,l!==n&&-1!==l&&(e._iDisplayStart=c?l:l>=e.fnRecordsDisplay()?0:l,e.iInitDisplayStart=-1)
var l=e._iDisplayStart,d=e.fnDisplayEnd()
if(e.bDeferLoading)e.bDeferLoading=!1,e.iDraw++,pe(e,!1)
else if(c){if(!e.bDestroying&&!B(e))return}else e.iDraw++
if(0!==u.length)for(a=c?e.aoData.length:d,c=c?0:l;c<a;c++){var p=u[c],f=e.aoData[p]
if(null===f.nTr&&F(e,p),p=f.nTr,0!==s){var h=r[o%s]
f._sRowStripe!=h&&(i(p).removeClass(f._sRowStripe).addClass(h),f._sRowStripe=h)}Oe(e,"aoRowCallback",null,[p,f._aData,o,c]),t.push(p),o++}else o=a.sZeroRecords,1==e.iDraw&&"ajax"==Me(e)?o=a.sLoadingRecords:a.sEmptyTable&&0===e.fnRecordsTotal()&&(o=a.sEmptyTable),t[0]=i("<tr/>",{class:s?r[0]:""}).append(i("<td />",{valign:"top",colSpan:g(e),class:e.oClasses.sRowEmpty}).html(o))[0]
Oe(e,"aoHeaderCallback","header",[i(e.nTHead).children("tr")[0],k(e),l,d,u]),Oe(e,"aoFooterCallback","footer",[i(e.nTFoot).children("tr")[0],k(e),l,d,u]),r=i(e.nTBody),r.children().detach(),r.append(i(t)),Oe(e,"aoDrawCallback","draw",[e]),e.bSorted=!1,e.bFiltered=!1,e.bDrawing=!1}}function O(e,t){var n=e.oFeatures,i=n.bFilter
n.bSort&&Te(e),i?Q(e,e.oPreviousSearch):e.aiDisplay=e.aiDisplayMaster.slice(),!0!==t&&(e._iDisplayStart=0),e._drawHold=t,j(e),e._drawHold=!1}function R(e){var t=e.oClasses,n=i(e.nTable),n=i("<div/>").insertBefore(n),o=e.oFeatures,r=i("<div/>",{id:e.sTableId+"_wrapper",class:t.sWrapper+(e.nTFoot?"":" "+t.sNoFooter)})
e.nHolding=n[0],e.nTableWrapper=r[0],e.nTableReinsertBefore=e.nTable.nextSibling
for(var s,a,l,c,u,d,p=e.sDom.split(""),f=0;f<p.length;f++){if(s=null,a=p[f],"<"==a){if(l=i("<div/>")[0],c=p[f+1],"'"==c||'"'==c){for(u="",d=2;p[f+d]!=c;)u+=p[f+d],d++
"H"==u?u=t.sJUIHeader:"F"==u&&(u=t.sJUIFooter),-1!=u.indexOf(".")?(c=u.split("."),l.id=c[0].substr(1,c[0].length-1),l.className=c[1]):"#"==u.charAt(0)?l.id=u.substr(1,u.length-1):l.className=u,f+=d}r.append(l),r=i(l)}else if(">"==a)r=r.parent()
else if("l"==a&&o.bPaginate&&o.bLengthChange)s=le(e)
else if("f"==a&&o.bFilter)s=X(e)
else if("r"==a&&o.bProcessing)s=de(e)
else if("t"==a)s=fe(e)
else if("i"==a&&o.bInfo)s=ne(e)
else if("p"==a&&o.bPaginate)s=ce(e)
else if(0!==qe.ext.feature.length)for(l=qe.ext.feature,d=0,c=l.length;d<c;d++)if(a==l[d].cFeature){s=l[d].fnInit(e)
break}s&&(l=e.aanFeatures,l[a]||(l[a]=[]),l[a].push(s),r.append(s))}n.replaceWith(r),e.nHolding=null}function H(e,t){var n,o,r,s,a,l,c,u,d,p,f=i(t).children("tr")
for(e.splice(0,e.length),r=0,l=f.length;r<l;r++)e.push([])
for(r=0,l=f.length;r<l;r++)for(n=f[r],o=n.firstChild;o;){if("TD"==o.nodeName.toUpperCase()||"TH"==o.nodeName.toUpperCase()){for(u=1*o.getAttribute("colspan"),d=1*o.getAttribute("rowspan"),u=u&&0!==u&&1!==u?u:1,d=d&&0!==d&&1!==d?d:1,s=0,a=e[r];a[s];)s++
for(c=s,p=1===u,a=0;a<u;a++)for(s=0;s<d;s++)e[r+s][c+a]={cell:o,unique:p},e[r+s].nTr=n}o=o.nextSibling}}function M(e,t,n){var i=[]
n||(n=e.aoHeader,t&&(n=[],H(n,t)))
for(var t=0,o=n.length;t<o;t++)for(var r=0,s=n[t].length;r<s;r++)!n[t][r].unique||i[r]&&e.bSortCellsTop||(i[r]=n[t][r].cell)
return i}function z(e,t,n){if(Oe(e,"aoServerParams","serverParams",[t]),t&&i.isArray(t)){var o={},r=/(.*?)\[\]$/
i.each(t,function(e,t){var n=t.name.match(r)
n?(n=n[0],o[n]||(o[n]=[]),o[n].push(t.value)):o[t.name]=t.value}),t=o}var s,a=e.ajax,l=e.oInstance,c=function(t){Oe(e,null,"xhr",[e,t,e.jqXHR]),n(t)}
if(i.isPlainObject(a)&&a.data){s=a.data
var u=i.isFunction(s)?s(t,e):s,t=i.isFunction(s)&&u?u:i.extend(!0,t,u)
delete a.data}u={data:t,success:function(t){var n=t.error||t.sError
n&&Fe(e,0,n),e.json=t,c(t)},dataType:"json",cache:!1,type:e.sServerMethod,error:function(t,n){var o=Oe(e,null,"xhr",[e,null,e.jqXHR]);-1===i.inArray(!0,o)&&("parsererror"==n?Fe(e,0,"Invalid JSON response",1):4===t.readyState&&Fe(e,0,"Ajax error",7)),pe(e,!1)}},e.oAjaxData=t,Oe(e,null,"preXhr",[e,t]),e.fnServerData?e.fnServerData.call(l,e.sAjaxSource,i.map(t,function(e,t){return{name:t,value:e}}),c,e):e.sAjaxSource||"string"==typeof a?e.jqXHR=i.ajax(i.extend(u,{url:a||e.sAjaxSource})):i.isFunction(a)?e.jqXHR=a.call(l,t,c,e):(e.jqXHR=i.ajax(i.extend(u,a)),a.data=s)}function B(e){return!e.bAjaxDataGet||(e.iDraw++,pe(e,!0),z(e,W(e),function(t){q(e,t)}),!1)}function W(e){var t,n,o,r,s=e.aoColumns,a=s.length,l=e.oFeatures,c=e.oPreviousSearch,u=e.aoPreSearchCols,d=[],p=Ce(e)
t=e._iDisplayStart,n=!1!==l.bPaginate?e._iDisplayLength:-1
var f=function(e,t){d.push({name:e,value:t})}
f("sEcho",e.iDraw),f("iColumns",a),f("sColumns",at(s,"sName").join(",")),f("iDisplayStart",t),f("iDisplayLength",n)
var h={draw:e.iDraw,columns:[],order:[],start:t,length:n,search:{value:c.sSearch,regex:c.bRegex}}
for(t=0;t<a;t++)o=s[t],r=u[t],n="function"==typeof o.mData?"function":o.mData,h.columns.push({data:n,name:o.sName,searchable:o.bSearchable,orderable:o.bSortable,search:{value:r.sSearch,regex:r.bRegex}}),f("mDataProp_"+t,n),l.bFilter&&(f("sSearch_"+t,r.sSearch),f("bRegex_"+t,r.bRegex),f("bSearchable_"+t,o.bSearchable)),l.bSort&&f("bSortable_"+t,o.bSortable)
return l.bFilter&&(f("sSearch",c.sSearch),f("bRegex",c.bRegex)),l.bSort&&(i.each(p,function(e,t){h.order.push({column:t.col,dir:t.dir}),f("iSortCol_"+e,t.col),f("sSortDir_"+e,t.dir)}),f("iSortingCols",p.length)),s=qe.ext.legacy.ajax,null===s?e.sAjaxSource?d:h:s?d:h}function q(e,t){var i=U(e,t),o=t.sEcho!==n?t.sEcho:t.draw,r=t.iTotalRecords!==n?t.iTotalRecords:t.recordsTotal,s=t.iTotalDisplayRecords!==n?t.iTotalDisplayRecords:t.recordsFiltered
if(o){if(1*o<e.iDraw)return
e.iDraw=1*o}for(E(e),e._iRecordsTotal=parseInt(r,10),e._iRecordsDisplay=parseInt(s,10),o=0,r=i.length;o<r;o++)w(e,i[o])
e.aiDisplay=e.aiDisplayMaster.slice(),e.bAjaxDataGet=!1,j(e),e._bInitComplete||se(e,t),e.bAjaxDataGet=!0,pe(e,!1)}function U(e,t){var o=i.isPlainObject(e.ajax)&&e.ajax.dataSrc!==n?e.ajax.dataSrc:e.sAjaxDataProp
return"data"===o?t.aaData||t[o]:""!==o?D(o)(t):t}function X(e){var n=e.oClasses,o=e.sTableId,r=e.oLanguage,s=e.oPreviousSearch,a=e.aanFeatures,l='<input type="search" class="'+n.sFilterInput+'"/>',c=r.sSearch,c=c.match(/_INPUT_/)?c.replace("_INPUT_",l):c+l,n=i("<div/>",{id:a.f?null:o+"_filter",class:n.sFilter}).append(i("<label/>").append(c)),a=function(){var t=this.value?this.value:""
t!=s.sSearch&&(Q(e,{sSearch:t,bRegex:s.bRegex,bSmart:s.bSmart,bCaseInsensitive:s.bCaseInsensitive}),e._iDisplayStart=0,j(e))},l=null!==e.searchDelay?e.searchDelay:"ssp"===Me(e)?400:0,u=i("input",n).val(s.sSearch).attr("placeholder",r.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",l?ve(a,l):a).bind("keypress.DT",function(e){if(13==e.keyCode)return!1}).attr("aria-controls",o)
return i(e.nTable).on("search.dt.DT",function(n,i){if(e===i)try{u[0]!==t.activeElement&&u.val(s.sSearch)}catch(e){}}),n[0]}function Q(e,t,i){var o=e.oPreviousSearch,r=e.aoPreSearchCols,s=function(e){o.sSearch=e.sSearch,o.bRegex=e.bRegex,o.bSmart=e.bSmart,o.bCaseInsensitive=e.bCaseInsensitive}
if(y(e),"ssp"!=Me(e)){for(Y(e,t.sSearch,i,t.bEscapeRegex!==n?!t.bEscapeRegex:t.bRegex,t.bSmart,t.bCaseInsensitive),s(t),t=0;t<r.length;t++)V(e,r[t].sSearch,t,r[t].bEscapeRegex!==n?!r[t].bEscapeRegex:r[t].bRegex,r[t].bSmart,r[t].bCaseInsensitive)
J(e)}else s(t)
e.bFiltered=!0,Oe(e,null,"search",[e])}function J(e){for(var t,n,o=qe.ext.search,r=e.aiDisplay,s=0,a=o.length;s<a;s++){for(var l=[],c=0,u=r.length;c<u;c++)n=r[c],t=e.aoData[n],o[s](e,t._aFilterData,n,t._aData,c)&&l.push(n)
r.length=0,i.merge(r,l)}}function V(e,t,n,i,o,r){if(""!==t)for(var s=e.aiDisplay,i=G(t,i,o,r),o=s.length-1;0<=o;o--)t=e.aoData[s[o]]._aFilterData[n],i.test(t)||s.splice(o,1)}function Y(e,t,n,i,o,r){var s,i=G(t,i,o,r),o=e.oPreviousSearch.sSearch,r=e.aiDisplayMaster
if(0!==qe.ext.search.length&&(n=!0),s=Z(e),0>=t.length)e.aiDisplay=r.slice()
else for((s||n||o.length>t.length||0!==t.indexOf(o)||e.bSorted)&&(e.aiDisplay=r.slice()),t=e.aiDisplay,n=t.length-1;0<=n;n--)i.test(e.aoData[t[n]]._sFilterRow)||t.splice(n,1)}function G(e,t,n,o){return e=t?e:K(e),n&&(e="^(?=.*?"+i.map(e.match(/"[^"]+"|[^ ]+/g)||[""],function(e){if('"'===e.charAt(0))var t=e.match(/^"(.*)"$/),e=t?t[1]:e
return e.replace('"',"")}).join(")(?=.*?")+").*$"),RegExp(e,o?"i":"")}function K(e){return e.replace(et,"\\$1")}function Z(e){var t,n,i,o,r,s,a,l,c=e.aoColumns,u=qe.ext.type.search
for(t=!1,n=0,o=e.aoData.length;n<o;n++)if(l=e.aoData[n],!l._aFilterData){for(s=[],i=0,r=c.length;i<r;i++)t=c[i],t.bSearchable?(a=C(e,n,i,"filter"),u[t.sType]&&(a=u[t.sType](a)),null===a&&(a=""),"string"!=typeof a&&a.toString&&(a=a.toString())):a="",a.indexOf&&-1!==a.indexOf("&")&&(mt.innerHTML=a,a=gt?mt.textContent:mt.innerText),a.replace&&(a=a.replace(/[\r\n]/g,"")),s.push(a)
l._aFilterData=s,l._sFilterRow=s.join("  "),t=!0}return t}function ee(e){return{search:e.sSearch,smart:e.bSmart,regex:e.bRegex,caseInsensitive:e.bCaseInsensitive}}function te(e){return{sSearch:e.search,bSmart:e.smart,bRegex:e.regex,bCaseInsensitive:e.caseInsensitive}}function ne(e){var t=e.sTableId,n=e.aanFeatures.i,o=i("<div/>",{class:e.oClasses.sInfo,id:n?null:t+"_info"})
return n||(e.aoDrawCallback.push({fn:ie,sName:"information"}),o.attr("role","status").attr("aria-live","polite"),i(e.nTable).attr("aria-describedby",t+"_info")),o[0]}function ie(e){var t=e.aanFeatures.i
if(0!==t.length){var n=e.oLanguage,o=e._iDisplayStart+1,r=e.fnDisplayEnd(),s=e.fnRecordsTotal(),a=e.fnRecordsDisplay(),l=a?n.sInfo:n.sInfoEmpty
a!==s&&(l+=" "+n.sInfoFiltered),l+=n.sInfoPostFix,l=oe(e,l),n=n.fnInfoCallback,null!==n&&(l=n.call(e.oInstance,e,o,r,s,a,l)),i(t).html(l)}}function oe(e,t){var n=e.fnFormatNumber,i=e._iDisplayStart+1,o=e._iDisplayLength,r=e.fnRecordsDisplay(),s=-1===o
return t.replace(/_START_/g,n.call(e,i)).replace(/_END_/g,n.call(e,e.fnDisplayEnd())).replace(/_MAX_/g,n.call(e,e.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(e,r)).replace(/_PAGE_/g,n.call(e,s?1:Math.ceil(i/o))).replace(/_PAGES_/g,n.call(e,s?1:Math.ceil(r/o)))}function re(e){var t,n,i,o=e.iInitDisplayStart,r=e.aoColumns
n=e.oFeatures
var s=e.bDeferLoading
if(e.bInitialised){for(R(e),L(e),P(e,e.aoHeader),P(e,e.aoFooter),pe(e,!0),n.bAutoWidth&&ge(e),t=0,n=r.length;t<n;t++)i=r[t],i.sWidth&&(i.nTh.style.width=xe(i.sWidth))
Oe(e,null,"preInit",[e]),O(e),r=Me(e),("ssp"!=r||s)&&("ajax"==r?z(e,[],function(n){var i=U(e,n)
for(t=0;t<i.length;t++)w(e,i[t])
e.iInitDisplayStart=o,O(e),pe(e,!1),se(e,n)},e):(pe(e,!1),se(e)))}else setTimeout(function(){re(e)},200)}function se(e,t){e._bInitComplete=!0,(t||e.oInit.aaData)&&f(e),Oe(e,"aoInitComplete","init",[e,t])}function ae(e,t){var n=parseInt(t,10)
e._iDisplayLength=n,Re(e),Oe(e,null,"length",[e,n])}function le(e){for(var t=e.oClasses,n=e.sTableId,o=e.aLengthMenu,r=i.isArray(o[0]),s=r?o[0]:o,o=r?o[1]:o,r=i("<select/>",{name:n+"_length","aria-controls":n,class:t.sLengthSelect}),a=0,l=s.length;a<l;a++)r[0][a]=new Option(o[a],s[a])
var c=i("<div><label/></div>").addClass(t.sLength)
return e.aanFeatures.l||(c[0].id=n+"_length"),c.children().append(e.oLanguage.sLengthMenu.replace("_MENU_",r[0].outerHTML)),i("select",c).val(e._iDisplayLength).bind("change.DT",function(){ae(e,i(this).val()),j(e)}),i(e.nTable).bind("length.dt.DT",function(t,n,o){e===n&&i("select",c).val(o)}),c[0]}function ce(e){var t=e.sPaginationType,n=qe.ext.pager[t],o="function"==typeof n,r=function(e){j(e)},t=i("<div/>").addClass(e.oClasses.sPaging+t)[0],s=e.aanFeatures
return o||n.fnInit(e,t,r),s.p||(t.id=e.sTableId+"_paginate",e.aoDrawCallback.push({fn:function(e){if(o){var t,i=e._iDisplayStart,a=e._iDisplayLength,l=e.fnRecordsDisplay(),c=-1===a,i=c?0:Math.ceil(i/a),a=c?1:Math.ceil(l/a),l=n(i,a),c=0
for(t=s.p.length;c<t;c++)He(e,"pageButton")(e,s.p[c],c,l,i,a)}else n.fnUpdate(e,r)},sName:"pagination"})),t}function ue(e,t,n){var i=e._iDisplayStart,o=e._iDisplayLength,r=e.fnRecordsDisplay()
return 0===r||-1===o?i=0:"number"==typeof t?(i=t*o,i>r&&(i=0)):"first"==t?i=0:"previous"==t?(i=0<=o?i-o:0,0>i&&(i=0)):"next"==t?i+o<r&&(i+=o):"last"==t?i=Math.floor((r-1)/o)*o:Fe(e,0,"Unknown paging action: "+t,5),t=e._iDisplayStart!==i,e._iDisplayStart=i,t&&(Oe(e,null,"page",[e]),n&&j(e)),t}function de(e){return i("<div/>",{id:e.aanFeatures.r?null:e.sTableId+"_processing",class:e.oClasses.sProcessing}).html(e.oLanguage.sProcessing).insertBefore(e.nTable)[0]}function pe(e,t){e.oFeatures.bProcessing&&i(e.aanFeatures.r).css("display",t?"block":"none"),Oe(e,null,"processing",[e,t])}function fe(e){var t=i(e.nTable)
t.attr("role","grid")
var n=e.oScroll
if(""===n.sX&&""===n.sY)return e.nTable
var o=n.sX,r=n.sY,s=e.oClasses,a=t.children("caption"),l=a.length?a[0]._captionSide:null,c=i(t[0].cloneNode(!1)),u=i(t[0].cloneNode(!1)),d=t.children("tfoot")
n.sX&&"100%"===t.attr("width")&&t.removeAttr("width"),d.length||(d=null),c=i("<div/>",{class:s.sScrollWrapper}).append(i("<div/>",{class:s.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:o?o?xe(o):null:"100%"}).append(i("<div/>",{class:s.sScrollHeadInner}).css({"box-sizing":"content-box",width:n.sXInner||"100%"}).append(c.removeAttr("id").css("margin-left",0).append("top"===l?a:null).append(t.children("thead"))))).append(i("<div/>",{class:s.sScrollBody}).css({position:"relative",overflow:"auto",width:o?xe(o):null}).append(t)),d&&c.append(i("<div/>",{class:s.sScrollFoot}).css({overflow:"hidden",border:0,width:o?o?xe(o):null:"100%"}).append(i("<div/>",{class:s.sScrollFootInner}).append(u.removeAttr("id").css("margin-left",0).append("bottom"===l?a:null).append(t.children("tfoot")))))
var t=c.children(),p=t[0],s=t[1],f=d?t[2]:null
return o&&i(s).on("scroll.DT",function(){var e=this.scrollLeft
p.scrollLeft=e,d&&(f.scrollLeft=e)}),i(s).css(r&&n.bCollapse?"max-height":"height",r),e.nScrollHead=p,e.nScrollBody=s,e.nScrollFoot=f,e.aoDrawCallback.push({fn:he,sName:"scrolling"}),c[0]}function he(e){var t,n,o,r,s,a=e.oScroll,l=a.sX,c=a.sXInner,u=a.sY,a=a.iBarWidth,d=i(e.nScrollHead),p=d[0].style,f=d.children("div"),m=f[0].style,g=f.children("table"),f=e.nScrollBody,v=i(f),y=f.style,b=i(e.nScrollFoot).children("div"),w=b.children("table"),x=i(e.nTHead),C=i(e.nTable),T=C[0],S=T.style,D=e.nTFoot?i(e.nTFoot):null,_=e.oBrowser,k=_.bScrollOversize,E=[],A=[],I=[],$=function(e){e=e.style,e.paddingTop="0",e.paddingBottom="0",e.borderTopWidth="0",e.borderBottomWidth="0",e.height=0}
C.children("thead, tfoot").remove(),r=x.clone().prependTo(C),x=x.find("tr"),n=r.find("tr"),r.find("th, td").removeAttr("tabindex"),D&&(o=D.clone().prependTo(C),t=D.find("tr"),o=o.find("tr")),l||(y.width="100%",d[0].style.width="100%"),i.each(M(e,r),function(t,n){s=h(e,t),n.style.width=e.aoColumns[s].sWidth}),D&&me(function(e){e.style.width=""},o),d=C.outerWidth(),""===l?(S.width="100%",k&&(C.find("tbody").height()>f.offsetHeight||"scroll"==v.css("overflow-y"))&&(S.width=xe(C.outerWidth()-a)),d=C.outerWidth()):""!==c&&(S.width=xe(c),d=C.outerWidth()),me($,n),me(function(e){I.push(e.innerHTML),E.push(xe(i(e).css("width")))},n),me(function(e,t){e.style.width=E[t]},x),i(n).height(0),D&&(me($,o),me(function(e){A.push(xe(i(e).css("width")))},o),me(function(e,t){e.style.width=A[t]},t),i(o).height(0)),me(function(e,t){e.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+I[t]+"</div>",e.style.width=E[t]},n),D&&me(function(e,t){e.innerHTML="",e.style.width=A[t]},o),C.outerWidth()<d?(t=f.scrollHeight>f.offsetHeight||"scroll"==v.css("overflow-y")?d+a:d,k&&(f.scrollHeight>f.offsetHeight||"scroll"==v.css("overflow-y"))&&(S.width=xe(t-a)),(""===l||""!==c)&&Fe(e,1,"Possible column misalignment",6)):t="100%",y.width=xe(t),p.width=xe(t),D&&(e.nScrollFoot.style.width=xe(t)),!u&&k&&(y.height=xe(T.offsetHeight+a)),l=C.outerWidth(),g[0].style.width=xe(l),m.width=xe(l),c=C.height()>f.clientHeight||"scroll"==v.css("overflow-y"),u="padding"+(_.bScrollbarLeft?"Left":"Right"),m[u]=c?a+"px":"0px",D&&(w[0].style.width=xe(l),b[0].style.width=xe(l),b[0].style[u]=c?a+"px":"0px"),v.scroll(),!e.bSorted&&!e.bFiltered||e._drawHold||(f.scrollTop=0)}function me(e,t,n){for(var i,o,r=0,s=0,a=t.length;s<a;){for(i=t[s].firstChild,o=n?n[s].firstChild:null;i;)1===i.nodeType&&(n?e(i,o,r):e(i,r),r++),i=i.nextSibling,o=n?o.nextSibling:null
s++}}function ge(t){var n,o,r,s=t.nTable,a=t.aoColumns,l=t.oScroll,c=l.sY,u=l.sX,d=l.sXInner,p=a.length,m=v(t,"bVisible"),y=i("th",t.nTHead),b=s.getAttribute("width"),w=s.parentNode,x=!1
for(r=t.oBrowser,l=r.bScrollOversize,(n=s.style.width)&&-1!==n.indexOf("%")&&(b=n),n=0;n<m.length;n++)o=a[m[n]],null!==o.sWidth&&(o.sWidth=ye(o.sWidthOrig,w),x=!0)
if(l||!x&&!u&&!c&&p==g(t)&&p==y.length)for(n=0;n<p;n++)(m=h(t,n))&&(a[m].sWidth=xe(y.eq(n).width()))
else{p=i(s).clone().css("visibility","hidden").removeAttr("id"),p.find("tbody tr").remove()
var C=i("<tr/>").appendTo(p.find("tbody"))
for(p.find("thead, tfoot").remove(),p.append(i(t.nTHead).clone()).append(i(t.nTFoot).clone()),p.find("tfoot th, tfoot td").css("width",""),y=M(t,p.find("thead")[0]),n=0;n<m.length;n++)o=a[m[n]],y[n].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?xe(o.sWidthOrig):""
if(t.aoData.length)for(n=0;n<m.length;n++)x=m[n],o=a[x],i(be(t,x)).clone(!1).append(o.sContentPadding).appendTo(C)
if(x=i("<div/>").css(u||c?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(p).appendTo(w),u&&d?p.width(d):u?(p.css("width","auto"),p.width()<w.clientWidth&&p.width(w.clientWidth)):c?p.width(w.clientWidth):b&&p.width(b),u){for(n=d=0;n<m.length;n++)o=a[m[n]],c=r.bBounding?y[n].getBoundingClientRect().width:i(y[n]).outerWidth(),d+=null===o.sWidthOrig?c:parseInt(o.sWidth,10)+c-i(y[n]).width()
p.width(xe(d)),s.style.width=xe(d)}for(n=0;n<m.length;n++)o=a[m[n]],(r=i(y[n]).width())&&(o.sWidth=xe(r))
s.style.width=xe(p.css("width")),x.remove()}b&&(s.style.width=xe(b)),!b&&!u||t._reszEvt||(s=function(){i(e).bind("resize.DT-"+t.sInstance,ve(function(){f(t)}))},l?setTimeout(s,1e3):s(),t._reszEvt=!0)}function ve(e,t){var i,o,r=t!==n?t:200
return function(){var t=this,s=+new Date,a=arguments
i&&s<i+r?(clearTimeout(o),o=setTimeout(function(){i=n,e.apply(t,a)},r)):(i=s,e.apply(t,a))}}function ye(e,n){if(!e)return 0
var o=i("<div/>").css("width",xe(e)).appendTo(n||t.body),r=o[0].offsetWidth
return o.remove(),r}function be(e,t){var n=we(e,t)
if(0>n)return null
var o=e.aoData[n]
return o.nTr?o.anCells[t]:i("<td/>").html(C(e,n,t,"display"))[0]}function we(e,t){for(var n,i=-1,o=-1,r=0,s=e.aoData.length;r<s;r++)n=C(e,r,t,"display")+"",n=n.replace(vt,""),n.length>i&&(i=n.length,o=r)
return o}function xe(e){return null===e?"0px":"number"==typeof e?0>e?"0px":e+"px":e.match(/\d$/)?e+"px":e}function Ce(e){var t,o,r,s,a,l,c=[],u=e.aoColumns
t=e.aaSortingFixed,o=i.isPlainObject(t)
var d=[]
for(r=function(e){e.length&&!i.isArray(e[0])?d.push(e):i.merge(d,e)},i.isArray(t)&&r(t),o&&t.pre&&r(t.pre),r(e.aaSorting),o&&t.post&&r(t.post),e=0;e<d.length;e++)for(l=d[e][0],r=u[l].aDataSort,t=0,o=r.length;t<o;t++)s=r[t],a=u[s].sType||"string",d[e]._idx===n&&(d[e]._idx=i.inArray(d[e][1],u[s].asSorting)),c.push({src:l,col:s,dir:d[e][1],index:d[e]._idx,type:a,formatter:qe.ext.type.order[a+"-pre"]})
return c}function Te(e){var t,n,i,o,r=[],s=qe.ext.type.order,a=e.aoData,l=0,c=e.aiDisplayMaster
for(y(e),o=Ce(e),t=0,n=o.length;t<n;t++)i=o[t],i.formatter&&l++,Ee(e,i.col)
if("ssp"!=Me(e)&&0!==o.length){for(t=0,n=c.length;t<n;t++)r[c[t]]=t
l===o.length?c.sort(function(e,t){var n,i,s,l,c=o.length,u=a[e]._aSortData,d=a[t]._aSortData
for(s=0;s<c;s++)if(l=o[s],n=u[l.col],i=d[l.col],n=n<i?-1:n>i?1:0,0!==n)return"asc"===l.dir?n:-n
return n=r[e],i=r[t],n<i?-1:n>i?1:0}):c.sort(function(e,t){var n,i,l,c,u=o.length,d=a[e]._aSortData,p=a[t]._aSortData
for(l=0;l<u;l++)if(c=o[l],n=d[c.col],i=p[c.col],c=s[c.type+"-"+c.dir]||s["string-"+c.dir],n=c(n,i),0!==n)return n
return n=r[e],i=r[t],n<i?-1:n>i?1:0})}e.bSorted=!0}function Se(e){for(var t,n,i=e.aoColumns,o=Ce(e),e=e.oLanguage.oAria,r=0,s=i.length;r<s;r++){n=i[r]
var a=n.asSorting
t=n.sTitle.replace(/<.*?>/g,"")
var l=n.nTh
l.removeAttribute("aria-sort"),n.bSortable&&(0<o.length&&o[0].col==r?(l.setAttribute("aria-sort","asc"==o[0].dir?"ascending":"descending"),n=a[o[0].index+1]||a[0]):n=a[0],t+="asc"===n?e.sSortAscending:e.sSortDescending),l.setAttribute("aria-label",t)}}function De(e,t,o,r){var s=e.aaSorting,a=e.aoColumns[t].asSorting,l=function(e,t){var o=e._idx
return o===n&&(o=i.inArray(e[1],a)),o+1<a.length?o+1:t?null:0}
"number"==typeof s[0]&&(s=e.aaSorting=[s]),o&&e.oFeatures.bSortMulti?(o=i.inArray(t,at(s,"0")),-1!==o?(t=l(s[o],!0),null===t&&1===s.length&&(t=0),null===t?s.splice(o,1):(s[o][1]=a[t],s[o]._idx=t)):(s.push([t,a[0],0]),s[s.length-1]._idx=0)):s.length&&s[0][0]==t?(t=l(s[0]),s.length=1,s[0][1]=a[t],s[0]._idx=t):(s.length=0,s.push([t,a[0]]),s[0]._idx=0),O(e),"function"==typeof r&&r(e)}function _e(e,t,n,i){var o=e.aoColumns[n]
Pe(t,{},function(t){!1!==o.bSortable&&(e.oFeatures.bProcessing?(pe(e,!0),setTimeout(function(){De(e,n,t.shiftKey,i),"ssp"!==Me(e)&&pe(e,!1)},0)):De(e,n,t.shiftKey,i))})}function ke(e){var t,n,o=e.aLastSort,r=e.oClasses.sSortColumn,s=Ce(e),a=e.oFeatures
if(a.bSort&&a.bSortClasses){for(a=0,t=o.length;a<t;a++)n=o[a].src,i(at(e.aoData,"anCells",n)).removeClass(r+(2>a?a+1:3))
for(a=0,t=s.length;a<t;a++)n=s[a].src,i(at(e.aoData,"anCells",n)).addClass(r+(2>a?a+1:3))}e.aLastSort=s}function Ee(e,t){var n,i=e.aoColumns[t],o=qe.ext.order[i.sSortDataType]
o&&(n=o.call(e.oInstance,e,t,m(e,t)))
for(var r,s=qe.ext.type.order[i.sType+"-pre"],a=0,l=e.aoData.length;a<l;a++)i=e.aoData[a],i._aSortData||(i._aSortData=[]),(!i._aSortData[t]||o)&&(r=o?n[a]:C(e,a,t,"sort"),i._aSortData[t]=s?s(r):r)}function Ae(e){if(e.oFeatures.bStateSave&&!e.bDestroying){var t={time:+new Date,start:e._iDisplayStart,length:e._iDisplayLength,order:i.extend(!0,[],e.aaSorting),search:ee(e.oPreviousSearch),columns:i.map(e.aoColumns,function(t,n){return{visible:t.bVisible,search:ee(e.aoPreSearchCols[n])}})}
Oe(e,"aoStateSaveParams","stateSaveParams",[e,t]),e.oSavedState=t,e.fnStateSaveCallback.call(e.oInstance,e,t)}}function Ie(e){var t,o,r=e.aoColumns
if(e.oFeatures.bStateSave){var s=e.fnStateLoadCallback.call(e.oInstance,e)
if(s&&s.time&&(t=Oe(e,"aoStateLoadParams","stateLoadParams",[e,s]),-1===i.inArray(!1,t)&&(t=e.iStateDuration,!(0<t&&s.time<+new Date-1e3*t)&&r.length===s.columns.length))){for(e.oLoadedState=i.extend(!0,{},s),s.start!==n&&(e._iDisplayStart=s.start,e.iInitDisplayStart=s.start),s.length!==n&&(e._iDisplayLength=s.length),s.order!==n&&(e.aaSorting=[],i.each(s.order,function(t,n){e.aaSorting.push(n[0]>=r.length?[0,n[1]]:n)})),s.search!==n&&i.extend(e.oPreviousSearch,te(s.search)),t=0,o=s.columns.length;t<o;t++){var a=s.columns[t]
a.visible!==n&&(r[t].bVisible=a.visible),a.search!==n&&i.extend(e.aoPreSearchCols[t],te(a.search))}Oe(e,"aoStateLoaded","stateLoaded",[e,s])}}}function $e(e){var t=qe.settings,e=i.inArray(e,at(t,"nTable"))
return-1!==e?t[e]:null}function Fe(t,n,i,o){if(i="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+i,o&&(i+=". For more information about this error, please see http://datatables.net/tn/"+o),n)e.console&&console.log&&console.log(i)
else if(n=qe.ext,n=n.sErrMode||n.errMode,t&&Oe(t,null,"error",[t,o,i]),"alert"==n)alert(i)
else{if("throw"==n)throw Error(i)
"function"==typeof n&&n(t,o,i)}}function Ne(e,t,o,r){i.isArray(o)?i.each(o,function(n,o){i.isArray(o)?Ne(e,t,o[0],o[1]):Ne(e,t,o)}):(r===n&&(r=o),t[o]!==n&&(e[r]=t[o]))}function Le(e,t,n){var o,r
for(r in t)t.hasOwnProperty(r)&&(o=t[r],i.isPlainObject(o)?(i.isPlainObject(e[r])||(e[r]={}),i.extend(!0,e[r],o)):e[r]=n&&"data"!==r&&"aaData"!==r&&i.isArray(o)?o.slice():o)
return e}function Pe(e,t,n){i(e).bind("click.DT",t,function(t){e.blur(),n(t)}).bind("keypress.DT",t,function(e){13===e.which&&(e.preventDefault(),n(e))}).bind("selectstart.DT",function(){return!1})}function je(e,t,n,i){n&&e[t].push({fn:n,sName:i})}function Oe(e,t,n,o){var r=[]
return t&&(r=i.map(e[t].slice().reverse(),function(t){return t.fn.apply(e.oInstance,o)})),null!==n&&(t=i.Event(n+".dt"),i(e.nTable).trigger(t,o),r.push(t.result)),r}function Re(e){var t=e._iDisplayStart,n=e.fnDisplayEnd(),i=e._iDisplayLength
t>=n&&(t=n-i),t-=t%i,(-1===i||0>t)&&(t=0),e._iDisplayStart=t}function He(e,t){var n=e.renderer,o=qe.ext.renderer[t]
return i.isPlainObject(n)&&n[t]?o[n[t]]||o._:"string"==typeof n?o[n]||o._:o._}function Me(e){return e.oFeatures.bServerSide?"ssp":e.ajax||e.sAjaxSource?"ajax":"dom"}function ze(e,t){var n=[],n=Lt.numbers_length,i=Math.floor(n/2)
return t<=n?n=ct(0,t):e<=i?(n=ct(0,n-2),n.push("ellipsis"),n.push(t-1)):(e>=t-1-i?n=ct(t-(n-2),t):(n=ct(e-i+2,e+i-1),n.push("ellipsis"),n.push(t-1)),n.splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n}function Be(e){i.each({num:function(t){return Pt(t,e)},"num-fmt":function(t){return Pt(t,e,tt)},"html-num":function(t){return Pt(t,e,Ge)},"html-num-fmt":function(t){return Pt(t,e,Ge,tt)}},function(t,n){Ue.type.order[t+e+"-pre"]=n,t.match(/^html\-/)&&(Ue.type.search[t+e]=Ue.type.search.html)})}function We(e){return function(){var t=[$e(this[qe.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments))
return qe.ext.internal[e].apply(this,t)}}var qe,Ue,Xe,Qe,Je,Ve={},Ye=/[\r\n]/g,Ge=/<.*?>/g,Ke=/^[\w\+\-]/,Ze=/[\w\+\-]$/,et=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),tt=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,nt=function(e){return!e||!0===e||"-"===e},it=function(e){var t=parseInt(e,10)
return!isNaN(t)&&isFinite(e)?t:null},ot=function(e,t){return Ve[t]||(Ve[t]=RegExp(K(t),"g")),"string"==typeof e&&"."!==t?e.replace(/\./g,"").replace(Ve[t],"."):e},rt=function(e,t,n){var i="string"==typeof e
return!!nt(e)||(t&&i&&(e=ot(e,t)),n&&i&&(e=e.replace(tt,"")),!isNaN(parseFloat(e))&&isFinite(e))},st=function(e,t,n){return!!nt(e)||(nt(e)||"string"==typeof e?!!rt(e.replace(Ge,""),t,n)||null:null)},at=function(e,t,i){var o=[],r=0,s=e.length
if(i!==n)for(;r<s;r++)e[r]&&e[r][t]&&o.push(e[r][t][i])
else for(;r<s;r++)e[r]&&o.push(e[r][t])
return o},lt=function(e,t,i,o){var r=[],s=0,a=t.length
if(o!==n)for(;s<a;s++)e[t[s]][i]&&r.push(e[t[s]][i][o])
else for(;s<a;s++)r.push(e[t[s]][i])
return r},ct=function(e,t){var i,o=[]
t===n?(t=0,i=e):(i=t,t=e)
for(var r=t;r<i;r++)o.push(r)
return o},ut=function(e){for(var t=[],n=0,i=e.length;n<i;n++)e[n]&&t.push(e[n])
return t},dt=function(e){var t,n,i,o=[],r=e.length,s=0
n=0
e:for(;n<r;n++){for(t=e[n],i=0;i<s;i++)if(o[i]===t)continue e
o.push(t),s++}return o},pt=function(e,t,i){e[t]!==n&&(e[i]=e[t])},ft=/\[.*?\]$/,ht=/\(\)$/,mt=i("<div>")[0],gt=mt.textContent!==n,vt=/<.*?>/g
qe=function(e){this.$=function(e,t){return this.api(!0).$(e,t)},this._=function(e,t){return this.api(!0).rows(e,t).data()},this.api=function(e){return new Xe(e?$e(this[Ue.iApiIndex]):this)},this.fnAddData=function(e,t){var o=this.api(!0),r=i.isArray(e)&&(i.isArray(e[0])||i.isPlainObject(e[0]))?o.rows.add(e):o.row.add(e)
return(t===n||t)&&o.draw(),r.flatten().toArray()},this.fnAdjustColumnSizing=function(e){var t=this.api(!0).columns.adjust(),i=t.settings()[0],o=i.oScroll
e===n||e?t.draw(!1):(""!==o.sX||""!==o.sY)&&he(i)},this.fnClearTable=function(e){var t=this.api(!0).clear();(e===n||e)&&t.draw()},this.fnClose=function(e){this.api(!0).row(e).child.hide()},this.fnDeleteRow=function(e,t,i){var o=this.api(!0),e=o.rows(e),r=e.settings()[0],s=r.aoData[e[0][0]]
return e.remove(),t&&t.call(this,r,s),(i===n||i)&&o.draw(),s},this.fnDestroy=function(e){this.api(!0).destroy(e)},this.fnDraw=function(e){this.api(!0).draw(e)},this.fnFilter=function(e,t,i,o,r,s){r=this.api(!0),null===t||t===n?r.search(e,i,o,s):r.column(t).search(e,i,o,s),r.draw()},this.fnGetData=function(e,t){var i=this.api(!0)
if(e!==n){var o=e.nodeName?e.nodeName.toLowerCase():""
return t!==n||"td"==o||"th"==o?i.cell(e,t).data():i.row(e).data()||null}return i.data().toArray()},this.fnGetNodes=function(e){var t=this.api(!0)
return e!==n?t.row(e).node():t.rows().nodes().flatten().toArray()},this.fnGetPosition=function(e){var t=this.api(!0),n=e.nodeName.toUpperCase()
return"TR"==n?t.row(e).index():"TD"==n||"TH"==n?(e=t.cell(e).index(),[e.row,e.columnVisible,e.column]):null},this.fnIsOpen=function(e){return this.api(!0).row(e).child.isShown()},this.fnOpen=function(e,t,n){return this.api(!0).row(e).child(t,n).show().child()[0]},this.fnPageChange=function(e,t){var i=this.api(!0).page(e);(t===n||t)&&i.draw(!1)},this.fnSetColumnVis=function(e,t,i){e=this.api(!0).column(e).visible(t),(i===n||i)&&e.columns.adjust().draw()},this.fnSettings=function(){return $e(this[Ue.iApiIndex])},this.fnSort=function(e){this.api(!0).order(e).draw()},this.fnSortListener=function(e,t,n){this.api(!0).order.listener(e,t,n)},this.fnUpdate=function(e,t,i,o,r){var s=this.api(!0)
return i===n||null===i?s.row(t).data(e):s.cell(t,i).data(e),(r===n||r)&&s.columns.adjust(),(o===n||o)&&s.draw(),0},this.fnVersionCheck=Ue.fnVersionCheck
var t=this,o=e===n,u=this.length
o&&(e={}),this.oApi=this.internal=Ue.internal
for(var f in qe.ext.internal)f&&(this[f]=We(f))
return this.each(function(){var f,h={},h=1<u?Le(h,e,!0):e,m=0,g=this.getAttribute("id"),v=!1,y=qe.defaults,C=i(this)
if("table"!=this.nodeName.toLowerCase())Fe(null,0,"Non-table node initialisation ("+this.nodeName+")",2)
else{a(y),l(y.column),r(y,y,!0),r(y.column,y.column,!0),r(y,i.extend(h,C.data()))
var T=qe.settings,m=0
for(f=T.length;m<f;m++){var S=T[m]
if(S.nTable==this||S.nTHead.parentNode==this||S.nTFoot&&S.nTFoot.parentNode==this){if(m=h.bRetrieve!==n?h.bRetrieve:y.bRetrieve,o||m)return S.oInstance
if(h.bDestroy!==n?h.bDestroy:y.bDestroy){S.oInstance.fnDestroy()
break}return void Fe(S,0,"Cannot reinitialise DataTable",3)}if(S.sTableId==this.id){T.splice(m,1)
break}}null!==g&&""!==g||(this.id=g="DataTables_Table_"+qe.ext._unique++)
var _=i.extend(!0,{},qe.models.oSettings,{sDestroyWidth:C[0].style.width,sInstance:g,sTableId:g})
_.nTable=this,_.oApi=t.internal,_.oInit=h,T.push(_),_.oInstance=1===t.length?t:C.dataTable(),a(h),h.oLanguage&&s(h.oLanguage),h.aLengthMenu&&!h.iDisplayLength&&(h.iDisplayLength=i.isArray(h.aLengthMenu[0])?h.aLengthMenu[0][0]:h.aLengthMenu[0]),h=Le(i.extend(!0,{},y),h),Ne(_.oFeatures,h,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" ")),Ne(_,h,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]),Ne(_.oScroll,h,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),Ne(_.oLanguage,h,"fnInfoCallback"),je(_,"aoDrawCallback",h.fnDrawCallback,"user"),je(_,"aoServerParams",h.fnServerParams,"user"),je(_,"aoStateSaveParams",h.fnStateSaveParams,"user"),je(_,"aoStateLoadParams",h.fnStateLoadParams,"user"),je(_,"aoStateLoaded",h.fnStateLoaded,"user"),je(_,"aoRowCallback",h.fnRowCallback,"user"),je(_,"aoRowCreatedCallback",h.fnCreatedRow,"user"),je(_,"aoHeaderCallback",h.fnHeaderCallback,"user"),je(_,"aoFooterCallback",h.fnFooterCallback,"user"),je(_,"aoInitComplete",h.fnInitComplete,"user"),je(_,"aoPreDrawCallback",h.fnPreDrawCallback,"user"),_.rowIdFn=D(h.rowId),c(_),g=_.oClasses,h.bJQueryUI?(i.extend(g,qe.ext.oJUIClasses,h.oClasses),h.sDom===y.sDom&&"lfrtip"===y.sDom&&(_.sDom='<"H"lfr>t<"F"ip>'),_.renderer?i.isPlainObject(_.renderer)&&!_.renderer.header&&(_.renderer.header="jqueryui"):_.renderer="jqueryui"):i.extend(g,qe.ext.classes,h.oClasses),C.addClass(g.sTable),_.iInitDisplayStart===n&&(_.iInitDisplayStart=h.iDisplayStart,_._iDisplayStart=h.iDisplayStart),null!==h.iDeferLoading&&(_.bDeferLoading=!0,m=i.isArray(h.iDeferLoading),_._iRecordsDisplay=m?h.iDeferLoading[0]:h.iDeferLoading,_._iRecordsTotal=m?h.iDeferLoading[1]:h.iDeferLoading)
var k=_.oLanguage
i.extend(!0,k,h.oLanguage),""!==k.sUrl&&(i.ajax({dataType:"json",url:k.sUrl,success:function(e){s(e),r(y.oLanguage,e),i.extend(!0,k,e),re(_)},error:function(){re(_)}}),v=!0),null===h.asStripeClasses&&(_.asStripeClasses=[g.sStripeOdd,g.sStripeEven])
var m=_.asStripeClasses,E=C.children("tbody").find("tr").eq(0)
if(-1!==i.inArray(!0,i.map(m,function(e){return E.hasClass(e)}))&&(i("tbody tr",this).removeClass(m.join(" ")),_.asDestroyStripes=m.slice()),T=[],m=this.getElementsByTagName("thead"),0!==m.length&&(H(_.aoHeader,m[0]),T=M(_)),null===h.aoColumns)for(S=[],m=0,f=T.length;m<f;m++)S.push(null)
else S=h.aoColumns
for(m=0,f=S.length;m<f;m++)d(_,T?T[m]:null)
if(b(_,h.aoColumnDefs,S,function(e,t){p(_,e,t)}),E.length){var A=function(e,t){return null!==e.getAttribute("data-"+t)?t:null}
i(E[0]).children("th, td").each(function(e,t){var i=_.aoColumns[e]
if(i.mData===e){var o=A(t,"sort")||A(t,"order"),r=A(t,"filter")||A(t,"search")
null===o&&null===r||(i.mData={_:e+".display",sort:null!==o?e+".@data-"+o:n,type:null!==o?e+".@data-"+o:n,filter:null!==r?e+".@data-"+r:n},p(_,e))}})}var I=_.oFeatures
if(h.bStateSave&&(I.bStateSave=!0,Ie(_,h),je(_,"aoDrawCallback",Ae,"state_save")),h.aaSorting===n)for(T=_.aaSorting,m=0,f=T.length;m<f;m++)T[m][1]=_.aoColumns[m].asSorting[0]
if(ke(_),I.bSort&&je(_,"aoDrawCallback",function(){if(_.bSorted){var e=Ce(_),t={}
i.each(e,function(e,n){t[n.src]=n.dir}),Oe(_,null,"order",[_,e,t]),Se(_)}}),je(_,"aoDrawCallback",function(){(_.bSorted||"ssp"===Me(_)||I.bDeferRender)&&ke(_)},"sc"),m=C.children("caption").each(function(){this._captionSide=C.css("caption-side")}),f=C.children("thead"),0===f.length&&(f=i("<thead/>").appendTo(this)),_.nTHead=f[0],f=C.children("tbody"),0===f.length&&(f=i("<tbody/>").appendTo(this)),_.nTBody=f[0],f=C.children("tfoot"),0===f.length&&0<m.length&&(""!==_.oScroll.sX||""!==_.oScroll.sY)&&(f=i("<tfoot/>").appendTo(this)),0===f.length||0===f.children().length?C.addClass(g.sNoFooter):0<f.length&&(_.nTFoot=f[0],H(_.aoFooter,_.nTFoot)),h.aaData)for(m=0;m<h.aaData.length;m++)w(_,h.aaData[m])
else(_.bDeferLoading||"dom"==Me(_))&&x(_,i(_.nTBody).children("tr"))
_.aiDisplay=_.aiDisplayMaster.slice(),_.bInitialised=!0,!1===v&&re(_)}}),t=null,this}
var yt=[],bt=Array.prototype,wt=function(e){var t,n,o=qe.settings,r=i.map(o,function(e){return e.nTable})
return e?e.nTable&&e.oApi?[e]:e.nodeName&&"table"===e.nodeName.toLowerCase()?(t=i.inArray(e,r),-1!==t?[o[t]]:null):e&&"function"==typeof e.settings?e.settings().toArray():("string"==typeof e?n=i(e):e instanceof i&&(n=e),n?n.map(function(){return t=i.inArray(this,r),-1!==t?o[t]:null}).toArray():void 0):[]}
Xe=function(e,t){if(!(this instanceof Xe))return new Xe(e,t)
var n=[],o=function(e){(e=wt(e))&&(n=n.concat(e))}
if(i.isArray(e))for(var r=0,s=e.length;r<s;r++)o(e[r])
else o(e)
this.context=dt(n),t&&i.merge(this,t),this.selector={rows:null,cols:null,opts:null},Xe.extend(this,this,yt)},qe.Api=Xe,i.extend(Xe.prototype,{any:function(){return 0!==this.count()},concat:bt.concat,context:[],count:function(){return this.flatten().length},each:function(e){for(var t=0,n=this.length;t<n;t++)e.call(this,this[t],t,this)
return this},eq:function(e){var t=this.context
return t.length>e?new Xe(t[e],this[e]):null},filter:function(e){var t=[]
if(bt.filter)t=bt.filter.call(this,e,this)
else for(var n=0,i=this.length;n<i;n++)e.call(this,this[n],n,this)&&t.push(this[n])
return new Xe(this.context,t)},flatten:function(){var e=[]
return new Xe(this.context,e.concat.apply(e,this.toArray()))},join:bt.join,indexOf:bt.indexOf||function(e,t){for(var n=t||0,i=this.length;n<i;n++)if(this[n]===e)return n
return-1},iterator:function(e,t,i,o){var r,s,a,l,c,u,d,p=[],f=this.context,h=this.selector
for("string"==typeof e&&(o=i,i=t,t=e,e=!1),s=0,a=f.length;s<a;s++){var m=new Xe(f[s])
if("table"===t)r=i.call(m,f[s],s),r!==n&&p.push(r)
else if("columns"===t||"rows"===t)r=i.call(m,f[s],this[s],s),r!==n&&p.push(r)
else if("column"===t||"column-rows"===t||"row"===t||"cell"===t)for(d=this[s],"column-rows"===t&&(u=Dt(f[s],h.opts)),l=0,c=d.length;l<c;l++)r=d[l],r="cell"===t?i.call(m,f[s],r.row,r.column,s,l):i.call(m,f[s],r,s,l,u),r!==n&&p.push(r)}return p.length||o?(e=new Xe(f,e?p.concat.apply([],p):p),t=e.selector,t.rows=h.rows,t.cols=h.cols,t.opts=h.opts,e):this},lastIndexOf:bt.lastIndexOf||function(e,t){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(e){var t=[]
if(bt.map)t=bt.map.call(this,e,this)
else for(var n=0,i=this.length;n<i;n++)t.push(e.call(this,this[n],n))
return new Xe(this.context,t)},pluck:function(e){return this.map(function(t){return t[e]})},pop:bt.pop,push:bt.push,reduce:bt.reduce||function(e,t){return u(this,e,t,0,this.length,1)},reduceRight:bt.reduceRight||function(e,t){return u(this,e,t,this.length-1,-1,-1)},reverse:bt.reverse,selector:null,shift:bt.shift,sort:bt.sort,splice:bt.splice,toArray:function(){return bt.slice.call(this)},to$:function(){return i(this)},toJQuery:function(){return i(this)},unique:function(){return new Xe(this.context,dt(this))},unshift:bt.unshift}),Xe.extend=function(e,t,n){if(n.length&&t&&(t instanceof Xe||t.__dt_wrapper)){var o,r,s,a=function(e,t,n){return function(){var i=t.apply(e,arguments)
return Xe.extend(i,i,n.methodExt),i}}
for(o=0,r=n.length;o<r;o++)s=n[o],t[s.name]="function"==typeof s.val?a(e,s.val,s):i.isPlainObject(s.val)?{}:s.val,t[s.name].__dt_wrapper=!0,Xe.extend(e,t[s.name],s.propExt)}},Xe.register=Qe=function(e,t){if(i.isArray(e))for(var n=0,o=e.length;n<o;n++)Xe.register(e[n],t)
else for(var r,s,a=e.split("."),l=yt,n=0,o=a.length;n<o;n++){r=(s=-1!==a[n].indexOf("()"))?a[n].replace("()",""):a[n]
var c
e:{c=0
for(var u=l.length;c<u;c++)if(l[c].name===r){c=l[c]
break e}c=null}c||(c={name:r,val:{},methodExt:[],propExt:[]},l.push(c)),n===o-1?c.val=t:l=s?c.methodExt:c.propExt}},Xe.registerPlural=Je=function(e,t,o){Xe.register(e,o),Xe.register(t,function(){var e=o.apply(this,arguments)
return e===this?this:e instanceof Xe?e.length?i.isArray(e[0])?new Xe(e.context,e[0]):e[0]:n:e})},Qe("tables()",function(e){var t
if(e){t=Xe
var n=this.context
if("number"==typeof e)e=[n[e]]
else var o=i.map(n,function(e){return e.nTable}),e=i(o).filter(e).map(function(){var e=i.inArray(this,o)
return n[e]}).toArray()
t=new t(e)}else t=this
return t}),Qe("table()",function(e){var e=this.tables(e),t=e.context
return t.length?new Xe(t[0]):e}),Je("tables().nodes()","table().node()",function(){return this.iterator("table",function(e){return e.nTable},1)}),Je("tables().body()","table().body()",function(){return this.iterator("table",function(e){return e.nTBody},1)}),Je("tables().header()","table().header()",function(){return this.iterator("table",function(e){return e.nTHead},1)}),Je("tables().footer()","table().footer()",function(){return this.iterator("table",function(e){return e.nTFoot},1)}),Je("tables().containers()","table().container()",function(){return this.iterator("table",function(e){return e.nTableWrapper},1)}),Qe("draw()",function(e){return this.iterator("table",function(t){"page"===e?j(t):("string"==typeof e&&(e="full-hold"!==e),O(t,!1===e))})}),Qe("page()",function(e){return e===n?this.page.info().page:this.iterator("table",function(t){ue(t,e)})}),Qe("page.info()",function(){if(0===this.context.length)return n
var e=this.context[0],t=e._iDisplayStart,i=e._iDisplayLength,o=e.fnRecordsDisplay(),r=-1===i
return{page:r?0:Math.floor(t/i),pages:r?1:Math.ceil(o/i),start:t,end:e.fnDisplayEnd(),length:i,recordsTotal:e.fnRecordsTotal(),recordsDisplay:o,serverSide:"ssp"===Me(e)}}),Qe("page.len()",function(e){return e===n?0!==this.context.length?this.context[0]._iDisplayLength:n:this.iterator("table",function(t){ae(t,e)})})
var xt=function(e,t,n){if(n){var i=new Xe(e)
i.one("draw",function(){n(i.ajax.json())})}if("ssp"==Me(e))O(e,t)
else{pe(e,!0)
var o=e.jqXHR
o&&4!==o.readyState&&o.abort(),z(e,[],function(n){E(e)
for(var n=U(e,n),i=0,o=n.length;i<o;i++)w(e,n[i])
O(e,t),pe(e,!1)})}}
Qe("ajax.json()",function(){var e=this.context
if(0<e.length)return e[0].json}),Qe("ajax.params()",function(){var e=this.context
if(0<e.length)return e[0].oAjaxData}),Qe("ajax.reload()",function(e,t){return this.iterator("table",function(n){xt(n,!1===t,e)})}),Qe("ajax.url()",function(e){var t=this.context
return e===n?0===t.length?n:(t=t[0],t.ajax?i.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource):this.iterator("table",function(t){i.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e})}),Qe("ajax.url().load()",function(e,t){return this.iterator("table",function(n){xt(n,!1===t,e)})})
var Ct=function(e,t,o,r,s){var a,l,c,u,d,p,f=[]
for(c=typeof t,t&&"string"!==c&&"function"!==c&&t.length!==n||(t=[t]),c=0,u=t.length;c<u;c++)for(l=t[c]&&t[c].split?t[c].split(","):[t[c]],d=0,p=l.length;d<p;d++)(a=o("string"==typeof l[d]?i.trim(l[d]):l[d]))&&a.length&&(f=f.concat(a))
if(e=Ue.selector[e],e.length)for(c=0,u=e.length;c<u;c++)f=e[c](r,s,f)
return dt(f)},Tt=function(e){return e||(e={}),e.filter&&e.search===n&&(e.search=e.filter),i.extend({search:"none",order:"current",page:"all"},e)},St=function(e){for(var t=0,n=e.length;t<n;t++)if(0<e[t].length)return e[0]=e[t],e[0].length=1,e.length=1,e.context=[e.context[t]],e
return e.length=0,e},Dt=function(e,t){var n,o,r,s=[],a=e.aiDisplay
n=e.aiDisplayMaster
var l=t.search
if(o=t.order,r=t.page,"ssp"==Me(e))return"removed"===l?[]:ct(0,n.length)
if("current"==r)for(n=e._iDisplayStart,o=e.fnDisplayEnd();n<o;n++)s.push(a[n])
else if("current"==o||"applied"==o)s="none"==l?n.slice():"applied"==l?a.slice():i.map(n,function(e){return-1===i.inArray(e,a)?e:null})
else if("index"==o||"original"==o)for(n=0,o=e.aoData.length;n<o;n++)"none"==l?s.push(n):(r=i.inArray(n,a),(-1===r&&"removed"==l||0<=r&&"applied"==l)&&s.push(n))
return s}
Qe("rows()",function(e,t){e===n?e="":i.isPlainObject(e)&&(t=e,e="")
var t=Tt(t),o=this.iterator("table",function(o){var r=t
return Ct("row",e,function(e){var t=it(e)
if(null!==t&&!r)return[t]
var s=Dt(o,r)
return null!==t&&i.inArray(t,s)!==-1?[t]:e?"function"==typeof e?i.map(s,function(t){var n=o.aoData[t]
return e(t,n._aData,n.nTr)?t:null}):(t=ut(lt(o.aoData,s,"nTr")),e.nodeName&&i.inArray(e,t)!==-1?[e._DT_RowIndex]:"string"==typeof e&&"#"===e.charAt(0)&&(s=o.aIds[e.replace(/^#/,"")],s!==n)?[s.idx]:i(t).filter(e).map(function(){return this._DT_RowIndex}).toArray()):s},o,r)},1)
return o.selector.rows=e,o.selector.opts=t,o}),Qe("rows().nodes()",function(){return this.iterator("row",function(e,t){return e.aoData[t].nTr||n},1)}),Qe("rows().data()",function(){return this.iterator(!0,"rows",function(e,t){return lt(e.aoData,t,"_aData")},1)}),Je("rows().cache()","row().cache()",function(e){return this.iterator("row",function(t,n){var i=t.aoData[n]
return"search"===e?i._aFilterData:i._aSortData},1)}),Je("rows().invalidate()","row().invalidate()",function(e){return this.iterator("row",function(t,n){I(t,n,e)})}),Je("rows().indexes()","row().index()",function(){return this.iterator("row",function(e,t){return t},1)}),Je("rows().ids()","row().id()",function(e){for(var t=[],n=this.context,i=0,o=n.length;i<o;i++)for(var r=0,s=this[i].length;r<s;r++){var a=n[i].rowIdFn(n[i].aoData[this[i][r]]._aData)
t.push((!0===e?"#":"")+a)}return new Xe(n,t)}),Je("rows().remove()","row().remove()",function(){var e=this
return this.iterator("row",function(t,i,o){var r=t.aoData,s=r[i]
r.splice(i,1)
for(var a=0,l=r.length;a<l;a++)null!==r[a].nTr&&(r[a].nTr._DT_RowIndex=a)
A(t.aiDisplayMaster,i),A(t.aiDisplay,i),A(e[o],i,!1),Re(t),i=t.rowIdFn(s._aData),i!==n&&delete t.aIds[i]}),this.iterator("table",function(e){for(var t=0,n=e.aoData.length;t<n;t++)e.aoData[t].idx=t}),this}),Qe("rows.add()",function(e){var t=this.iterator("table",function(t){var n,i,o,r=[]
for(i=0,o=e.length;i<o;i++)n=e[i],n.nodeName&&"TR"===n.nodeName.toUpperCase()?r.push(x(t,n)[0]):r.push(w(t,n))
return r},1),n=this.rows(-1)
return n.pop(),i.merge(n,t),n}),Qe("row()",function(e,t){return St(this.rows(e,t))}),Qe("row().data()",function(e){var t=this.context
return e===n?t.length&&this.length?t[0].aoData[this[0]]._aData:n:(t[0].aoData[this[0]]._aData=e,I(t[0],this[0],"data"),this)}),Qe("row().node()",function(){var e=this.context
return e.length&&this.length?e[0].aoData[this[0]].nTr||null:null}),Qe("row.add()",function(e){e instanceof i&&e.length&&(e=e[0])
var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?x(t,e)[0]:w(t,e)})
return this.row(t[0])})
var _t=function(e,t){var i=e.context
i.length&&(i=i[0].aoData[t!==n?t:e[0]])&&i._details&&(i._details.remove(),i._detailsShow=n,i._details=n)},kt=function(e,t){var n=e.context
if(n.length&&e.length){var i=n[0].aoData[e[0]]
if(i._details){(i._detailsShow=t)?i._details.insertAfter(i.nTr):i._details.detach()
var o=n[0],r=new Xe(o),s=o.aoData
r.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details"),0<at(s,"_details").length&&(r.on("draw.dt.DT_details",function(e,t){o===t&&r.rows({page:"current"}).eq(0).each(function(e){e=s[e],e._detailsShow&&e._details.insertAfter(e.nTr)})}),r.on("column-visibility.dt.DT_details",function(e,t){if(o===t)for(var n,i=g(t),r=0,a=s.length;r<a;r++)n=s[r],n._details&&n._details.children("td[colspan]").attr("colspan",i)}),r.on("destroy.dt.DT_details",function(e,t){if(o===t)for(var n=0,i=s.length;n<i;n++)s[n]._details&&_t(r,n)}))}}}
Qe("row().child()",function(e,t){var o=this.context
if(e===n)return o.length&&this.length?o[0].aoData[this[0]]._details:n
if(!0===e)this.child.show()
else if(!1===e)_t(this)
else if(o.length&&this.length){var r=o[0],o=o[0].aoData[this[0]],s=[],a=function(e,t){if(i.isArray(e)||e instanceof i)for(var n=0,o=e.length;n<o;n++)a(e[n],t)
else e.nodeName&&"tr"===e.nodeName.toLowerCase()?s.push(e):(n=i("<tr><td/></tr>").addClass(t),i("td",n).addClass(t).html(e)[0].colSpan=g(r),s.push(n[0]))}
a(e,t),o._details&&o._details.remove(),o._details=i(s),o._detailsShow&&o._details.insertAfter(o.nTr)}return this}),Qe(["row().child.show()","row().child().show()"],function(){return kt(this,!0),this}),Qe(["row().child.hide()","row().child().hide()"],function(){return kt(this,!1),this}),Qe(["row().child.remove()","row().child().remove()"],function(){return _t(this),this}),Qe("row().child.isShown()",function(){var e=this.context
return!(!e.length||!this.length)&&(e[0].aoData[this[0]]._detailsShow||!1)})
var Et=/^(.+):(name|visIdx|visible)$/,At=function(e,t,n,i,o){for(var n=[],i=0,r=o.length;i<r;i++)n.push(C(e,o[i],t))
return n}
Qe("columns()",function(e,t){e===n?e="":i.isPlainObject(e)&&(t=e,e="")
var t=Tt(t),o=this.iterator("table",function(n){var o=e,r=t,s=n.aoColumns,a=at(s,"sName"),l=at(s,"nTh")
return Ct("column",o,function(e){var t=it(e)
if(""===e)return ct(s.length)
if(null!==t)return[t>=0?t:s.length+t]
if("function"==typeof e){var o=Dt(n,r)
return i.map(s,function(t,i){return e(i,At(n,i,0,0,o),l[i])?i:null})}var c="string"==typeof e?e.match(Et):""
if(!c)return i(l).filter(e).map(function(){return i.inArray(this,l)}).toArray()
switch(c[2]){case"visIdx":case"visible":if(t=parseInt(c[1],10),t<0){var u=i.map(s,function(e,t){return e.bVisible?t:null})
return[u[u.length+t]]}return[h(n,t)]
case"name":return i.map(a,function(e,t){return e===c[1]?t:null})}},n,r)},1)
return o.selector.cols=e,o.selector.opts=t,o}),Je("columns().header()","column().header()",function(){return this.iterator("column",function(e,t){return e.aoColumns[t].nTh},1)}),Je("columns().footer()","column().footer()",function(){return this.iterator("column",function(e,t){return e.aoColumns[t].nTf},1)}),Je("columns().data()","column().data()",function(){return this.iterator("column-rows",At,1)}),Je("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(e,t){return e.aoColumns[t].mData},1)}),Je("columns().cache()","column().cache()",function(e){return this.iterator("column-rows",function(t,n,i,o,r){return lt(t.aoData,r,"search"===e?"_aFilterData":"_aSortData",n)},1)}),Je("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(e,t,n,i,o){return lt(e.aoData,o,"anCells",t)},1)}),Je("columns().visible()","column().visible()",function(e,t){return this.iterator("column",function(o,r){if(e===n)return o.aoColumns[r].bVisible
var s,a,l,c=o.aoColumns,u=c[r],d=o.aoData
if(e!==n&&u.bVisible!==e){if(e){var p=i.inArray(!0,at(c,"bVisible"),r+1)
for(s=0,a=d.length;s<a;s++)l=d[s].nTr,c=d[s].anCells,l&&l.insertBefore(c[r],c[p]||null)}else i(at(o.aoData,"anCells",r)).detach()
u.bVisible=e,P(o,o.aoHeader),P(o,o.aoFooter),(t===n||t)&&(f(o),(o.oScroll.sX||o.oScroll.sY)&&he(o)),Oe(o,null,"column-visibility",[o,r,e]),Ae(o)}})}),Je("columns().indexes()","column().index()",function(e){return this.iterator("column",function(t,n){return"visible"===e?m(t,n):n},1)}),Qe("columns.adjust()",function(){return this.iterator("table",function(e){f(e)},1)}),Qe("column.index()",function(e,t){if(0!==this.context.length){var n=this.context[0]
if("fromVisible"===e||"toData"===e)return h(n,t)
if("fromData"===e||"toVisible"===e)return m(n,t)}}),Qe("column()",function(e,t){return St(this.columns(e,t))}),Qe("cells()",function(e,t,o){if(i.isPlainObject(e)&&(e.row===n?(o=e,e=null):(o=t,t=null)),i.isPlainObject(t)&&(o=t,t=null),null===t||t===n)return this.iterator("table",function(t){var r,s,a,l,c,u,d,p=e,f=Tt(o),h=t.aoData,m=Dt(t,f),g=ut(lt(h,m,"anCells")),v=i([].concat.apply([],g)),y=t.aoColumns.length
return Ct("cell",p,function(e){var o="function"==typeof e
if(null===e||e===n||o){for(s=[],a=0,l=m.length;a<l;a++)for(r=m[a],c=0;c<y;c++)u={row:r,column:c},o?(d=h[r],e(u,C(t,r,c),d.anCells?d.anCells[c]:null)&&s.push(u)):s.push(u)
return s}return i.isPlainObject(e)?[e]:v.filter(e).map(function(e,t){if(t.parentNode)r=t.parentNode._DT_RowIndex
else for(e=0,l=h.length;e<l;e++)if(i.inArray(t,h[e].anCells)!==-1){r=e
break}return{row:r,column:i.inArray(t,h[r].anCells)}}).toArray()},t,f)})
var r,s,a,l,c,u=this.columns(t,o),d=this.rows(e,o),p=this.iterator("table",function(e,t){for(r=[],s=0,a=d[t].length;s<a;s++)for(l=0,c=u[t].length;l<c;l++)r.push({row:d[t][s],column:u[t][l]})
return r},1)
return i.extend(p.selector,{cols:t,rows:e,opts:o}),p}),Je("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(e,t,i){return(e=e.aoData[t].anCells)?e[i]:n},1)}),Qe("cells().data()",function(){return this.iterator("cell",function(e,t,n){return C(e,t,n)},1)}),Je("cells().cache()","cell().cache()",function(e){return e="search"===e?"_aFilterData":"_aSortData",this.iterator("cell",function(t,n,i){return t.aoData[n][e][i]},1)}),Je("cells().render()","cell().render()",function(e){return this.iterator("cell",function(t,n,i){return C(t,n,i,e)},1)}),Je("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(e,t,n){return{row:t,column:n,columnVisible:m(e,n)}},1)}),Je("cells().invalidate()","cell().invalidate()",function(e){return this.iterator("cell",function(t,n,i){I(t,n,e,i)})}),Qe("cell()",function(e,t,n){return St(this.cells(e,t,n))}),Qe("cell().data()",function(e){var t=this.context,i=this[0]
return e===n?t.length&&i.length?C(t[0],i[0].row,i[0].column):n:(T(t[0],i[0].row,i[0].column,e),I(t[0],i[0].row,"data",i[0].column),this)}),Qe("order()",function(e,t){var o=this.context
return e===n?0!==o.length?o[0].aaSorting:n:("number"==typeof e?e=[[e,t]]:i.isArray(e[0])||(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice()}))}),Qe("order.listener()",function(e,t,n){return this.iterator("table",function(i){_e(i,e,t,n)})}),Qe(["columns().order()","column().order()"],function(e){var t=this
return this.iterator("table",function(n,o){var r=[]
i.each(t[o],function(t,n){r.push([n,e])}),n.aaSorting=r})}),Qe("search()",function(e,t,o,r){var s=this.context
return e===n?0!==s.length?s[0].oPreviousSearch.sSearch:n:this.iterator("table",function(n){n.oFeatures.bFilter&&Q(n,i.extend({},n.oPreviousSearch,{sSearch:e+"",bRegex:null!==t&&t,bSmart:null===o||o,bCaseInsensitive:null===r||r}),1)})}),Je("columns().search()","column().search()",function(e,t,o,r){return this.iterator("column",function(s,a){var l=s.aoPreSearchCols
return e===n?l[a].sSearch:void(s.oFeatures.bFilter&&(i.extend(l[a],{sSearch:e+"",bRegex:null!==t&&t,bSmart:null===o||o,bCaseInsensitive:null===r||r}),Q(s,s.oPreviousSearch,1)))})}),Qe("state()",function(){return this.context.length?this.context[0].oSavedState:null}),Qe("state.clear()",function(){return this.iterator("table",function(e){e.fnStateSaveCallback.call(e.oInstance,e,{})})}),Qe("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),Qe("state.save()",function(){return this.iterator("table",function(e){Ae(e)})}),qe.versionCheck=qe.fnVersionCheck=function(e){for(var t,n,i=qe.version.split("."),e=e.split("."),o=0,r=e.length;o<r;o++)if(t=parseInt(i[o],10)||0,n=parseInt(e[o],10)||0,t!==n)return t>n
return!0},qe.isDataTable=qe.fnIsDataTable=function(e){var t=i(e).get(0),n=!1
return i.each(qe.settings,function(e,o){var r=o.nScrollHead?i("table",o.nScrollHead)[0]:null,s=o.nScrollFoot?i("table",o.nScrollFoot)[0]:null
o.nTable!==t&&r!==t&&s!==t||(n=!0)}),n},qe.tables=qe.fnTables=function(e){var t=!1
i.isPlainObject(e)&&(t=e.api,e=e.visible)
var n=i.map(qe.settings,function(t){if(!e||e&&i(t.nTable).is(":visible"))return t.nTable})
return t?new Xe(n):n},qe.util={throttle:ve,escapeRegex:K},qe.camelToHungarian=r,Qe("$()",function(e,t){var n=this.rows(t).nodes(),n=i(n)
return i([].concat(n.filter(e).toArray(),n.find(e).toArray()))}),i.each(["on","one","off"],function(e,t){Qe(t+"()",function(){var e=Array.prototype.slice.call(arguments)
e[0].match(/\.dt\b/)||(e[0]+=".dt")
var n=i(this.tables().nodes())
return n[t].apply(n,e),this})}),Qe("clear()",function(){return this.iterator("table",function(e){E(e)})}),Qe("settings()",function(){return new Xe(this.context,this.context)}),Qe("init()",function(){var e=this.context
return e.length?e[0].oInit:null}),Qe("data()",function(){return this.iterator("table",function(e){return at(e.aoData,"_aData")}).flatten()}),Qe("destroy()",function(t){return t=t||!1,this.iterator("table",function(n){var o,r=n.nTableWrapper.parentNode,s=n.oClasses,a=n.nTable,l=n.nTBody,c=n.nTHead,u=n.nTFoot,d=i(a),l=i(l),p=i(n.nTableWrapper),f=i.map(n.aoData,function(e){return e.nTr})
n.bDestroying=!0,Oe(n,"aoDestroyCallback","destroy",[n]),t||new Xe(n).columns().visible(!0),p.unbind(".DT").find(":not(tbody *)").unbind(".DT"),i(e).unbind(".DT-"+n.sInstance),a!=c.parentNode&&(d.children("thead").detach(),d.append(c)),u&&a!=u.parentNode&&(d.children("tfoot").detach(),d.append(u)),n.aaSorting=[],n.aaSortingFixed=[],ke(n),i(f).removeClass(n.asStripeClasses.join(" ")),i("th, td",c).removeClass(s.sSortable+" "+s.sSortableAsc+" "+s.sSortableDesc+" "+s.sSortableNone),n.bJUI&&(i("th span."+s.sSortIcon+", td span."+s.sSortIcon,c).detach(),i("th, td",c).each(function(){var e=i("div."+s.sSortJUIWrapper,this)
i(this).append(e.contents()),e.detach()})),l.children().detach(),l.append(f),c=t?"remove":"detach",d[c](),p[c](),!t&&r&&(r.insertBefore(a,n.nTableReinsertBefore),d.css("width",n.sDestroyWidth).removeClass(s.sTable),(o=n.asDestroyStripes.length)&&l.children().each(function(e){i(this).addClass(n.asDestroyStripes[e%o])})),r=i.inArray(n,qe.settings),-1!==r&&qe.settings.splice(r,1)})}),i.each(["column","row","cell"],function(e,t){Qe(t+"s().every()",function(e){return this.iterator(t,function(i,o,r,s,a){e.call(new Xe(i)[t](o,"cell"===t?r:n),o,r,s,a)})})}),Qe("i18n()",function(e,t,o){var r=this.context[0],e=D(e)(r.oLanguage)
return e===n&&(e=t),o!==n&&i.isPlainObject(e)&&(e=e[o]!==n?e[o]:e._),e.replace("%d",o)}),qe.version="1.10.9",qe.settings=[],qe.models={},qe.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0},qe.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},qe.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},qe.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(e){try{return JSON.parse((-1===e.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+e.sInstance+"_"+location.pathname))}catch(e){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(e,t){try{(-1===e.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+e.sInstance+"_"+location.pathname,JSON.stringify(t))}catch(e){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"Processing...",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:i.extend({},qe.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},o(qe.defaults),qe.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},o(qe.defaults.column),qe.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:n,oAjaxData:n,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==Me(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==Me(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var e=this._iDisplayLength,t=this._iDisplayStart,n=t+e,i=this.aiDisplay.length,o=this.oFeatures,r=o.bPaginate
return o.bServerSide?!1===r||-1===e?t+i:Math.min(t+e,this._iRecordsDisplay):!r||n>i||-1===e?i:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},qe.ext=Ue={buttons:{},classes:{},errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:qe.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:qe.version},i.extend(Ue,{afnFiltering:Ue.search,aTypes:Ue.type.detect,ofnSearch:Ue.type.search,oSort:Ue.type.order,afnSortData:Ue.order,aoFeatures:Ue.feature,oApi:Ue.internal,oStdClasses:Ue.classes,oPagination:Ue.pager}),i.extend(qe.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""})
var It="",It="",$t=It+"ui-state-default",Ft=It+"css_right ui-icon ui-icon-",Nt=It+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix"
i.extend(qe.ext.oJUIClasses,qe.ext.classes,{sPageButton:"fg-button ui-button "+$t,sPageButtonActive:"ui-state-disabled",sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:$t+" sorting_asc",sSortDesc:$t+" sorting_desc",sSortable:$t+" sorting",sSortableAsc:$t+" sorting_asc_disabled",sSortableDesc:$t+" sorting_desc_disabled",sSortableNone:$t+" sorting_disabled",sSortJUIAsc:Ft+"triangle-1-n",sSortJUIDesc:Ft+"triangle-1-s",sSortJUI:Ft+"carat-2-n-s",sSortJUIAscAllowed:Ft+"carat-1-n",sSortJUIDescAllowed:Ft+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+$t,sScrollFoot:"dataTables_scrollFoot "+$t,sHeaderTH:$t,sFooterTH:$t,sJUIHeader:Nt+" ui-corner-tl ui-corner-tr",sJUIFooter:Nt+" ui-corner-bl ui-corner-br"})
var Lt=qe.ext.pager
i.extend(Lt,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(e,t){return[ze(e,t)]},simple_numbers:function(e,t){return["previous",ze(e,t),"next"]},full_numbers:function(e,t){return["first","previous",ze(e,t),"next","last"]},_numbers:ze,numbers_length:7}),i.extend(!0,qe.ext.renderer,{pageButton:{_:function(e,n,o,r,s,a){var l,c,u,d=e.oClasses,p=e.oLanguage.oPaginate,f=0,h=function(t,n){var r,u,m,g,v=function(t){ue(e,t.data.action,!0)}
for(r=0,u=n.length;r<u;r++)if(g=n[r],i.isArray(g))m=i("<"+(g.DT_el||"div")+"/>").appendTo(t),h(m,g)
else{switch(l=null,c="",g){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>')
break
case"first":l=p.sFirst,c=g+(s>0?"":" "+d.sPageButtonDisabled)
break
case"previous":l=p.sPrevious,c=g+(s>0?"":" "+d.sPageButtonDisabled)
break
case"next":l=p.sNext,c=g+(s<a-1?"":" "+d.sPageButtonDisabled)
break
case"last":l=p.sLast,c=g+(s<a-1?"":" "+d.sPageButtonDisabled)
break
default:l=g+1,c=s===g?d.sPageButtonActive:""}null!==l&&(m=i("<a>",{class:d.sPageButton+" "+c,"aria-controls":e.sTableId,"data-dt-idx":f,tabindex:e.iTabIndex,id:0===o&&"string"==typeof g?e.sTableId+"_"+g:null}).html(l).appendTo(t),Pe(m,{action:g},v),f++)}}
try{u=i(n).find(t.activeElement).data("dt-idx")}catch(e){}h(i(n).empty(),r),u&&i(n).find("[data-dt-idx="+u+"]").focus()}}}),i.extend(qe.ext.type.detect,[function(e,t){var n=t.oLanguage.sDecimal
return rt(e,n)?"num"+n:null},function(e){if(e&&!(e instanceof Date)&&(!Ke.test(e)||!Ze.test(e)))return null
var t=Date.parse(e)
return null!==t&&!isNaN(t)||nt(e)?"date":null},function(e,t){var n=t.oLanguage.sDecimal
return rt(e,n,!0)?"num-fmt"+n:null},function(e,t){var n=t.oLanguage.sDecimal
return st(e,n)?"html-num"+n:null},function(e,t){var n=t.oLanguage.sDecimal
return st(e,n,!0)?"html-num-fmt"+n:null},function(e){return nt(e)||"string"==typeof e&&-1!==e.indexOf("<")?"html":null}]),i.extend(qe.ext.type.search,{html:function(e){return nt(e)?e:"string"==typeof e?e.replace(Ye," ").replace(Ge,""):""},string:function(e){return nt(e)?e:"string"==typeof e?e.replace(Ye," "):e}})
var Pt=function(e,t,n,i){return 0===e||e&&"-"!==e?(t&&(e=ot(e,t)),e.replace&&(n&&(e=e.replace(n,"")),i&&(e=e.replace(i,""))),1*e):-(1/0)}
return i.extend(Ue.type.order,{"date-pre":function(e){return Date.parse(e)||0},"html-pre":function(e){return nt(e)?"":e.replace?e.replace(/<.*?>/g,"").toLowerCase():e+""},"string-pre":function(e){return nt(e)?"":"string"==typeof e?e.toLowerCase():e.toString?e.toString():""},"string-asc":function(e,t){return e<t?-1:e>t?1:0},"string-desc":function(e,t){return e<t?1:e>t?-1:0}}),Be(""),i.extend(!0,qe.ext.renderer,{header:{_:function(e,t,n,o){i(e.nTable).on("order.dt.DT",function(i,r,s,a){e===r&&(i=n.idx,t.removeClass(n.sSortingClass+" "+o.sSortAsc+" "+o.sSortDesc).addClass("asc"==a[i]?o.sSortAsc:"desc"==a[i]?o.sSortDesc:n.sSortingClass))})},jqueryui:function(e,t,n,o){i("<div/>").addClass(o.sSortJUIWrapper).append(t.contents()).append(i("<span/>").addClass(o.sSortIcon+" "+n.sSortingClassJUI)).appendTo(t),i(e.nTable).on("order.dt.DT",function(i,r,s,a){e===r&&(i=n.idx,t.removeClass(o.sSortAsc+" "+o.sSortDesc).addClass("asc"==a[i]?o.sSortAsc:"desc"==a[i]?o.sSortDesc:n.sSortingClass),t.find("span."+o.sSortIcon).removeClass(o.sSortJUIAsc+" "+o.sSortJUIDesc+" "+o.sSortJUI+" "+o.sSortJUIAscAllowed+" "+o.sSortJUIDescAllowed).addClass("asc"==a[i]?o.sSortJUIAsc:"desc"==a[i]?o.sSortJUIDesc:n.sSortingClassJUI))})}}}),qe.render={number:function(e,t,n,i,o){return{display:function(r){if("number"!=typeof r&&"string"!=typeof r)return r
var s=0>r?"-":"",r=Math.abs(parseFloat(r)),a=parseInt(r,10),r=n?t+(r-a).toFixed(n).substring(2):""
return s+(i||"")+a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,e)+r+(o||"")}}}},i.extend(qe.ext.internal,{_fnExternApiFunc:We,_fnBuildAjax:z,_fnAjaxUpdate:B,_fnAjaxParameters:W,_fnAjaxUpdateDraw:q,_fnAjaxDataSrc:U,_fnAddColumn:d,_fnColumnOptions:p,_fnAdjustColumnSizing:f,_fnVisibleToColumnIndex:h,_fnColumnIndexToVisible:m,_fnVisbleColumns:g,_fnGetColumns:v,_fnColumnTypes:y,_fnApplyColumnDefs:b,_fnHungarianMap:o,_fnCamelToHungarian:r,_fnLanguageCompat:s,_fnBrowserDetect:c,_fnAddData:w,_fnAddTr:x,_fnNodeToDataIndex:function(e,t){return t._DT_RowIndex!==n?t._DT_RowIndex:null},_fnNodeToColumnIndex:function(e,t,n){return i.inArray(n,e.aoData[t].anCells)},_fnGetCellData:C,_fnSetCellData:T,_fnSplitObjNotation:S,_fnGetObjectDataFn:D,_fnSetObjectDataFn:_,_fnGetDataMaster:k,_fnClearTable:E,_fnDeleteIndex:A,_fnInvalidate:I,_fnGetRowElements:$,_fnCreateTr:F,_fnBuildHead:L,_fnDrawHead:P,_fnDraw:j,_fnReDraw:O,_fnAddOptionsHtml:R,_fnDetectHeader:H,_fnGetUniqueThs:M,_fnFeatureHtmlFilter:X,_fnFilterComplete:Q,_fnFilterCustom:J,_fnFilterColumn:V,_fnFilter:Y,_fnFilterCreateSearch:G,_fnEscapeRegex:K,_fnFilterData:Z,_fnFeatureHtmlInfo:ne,_fnUpdateInfo:ie,_fnInfoMacros:oe,_fnInitialise:re,_fnInitComplete:se,_fnLengthChange:ae,_fnFeatureHtmlLength:le,_fnFeatureHtmlPaginate:ce,_fnPageChange:ue,_fnFeatureHtmlProcessing:de,_fnProcessingDisplay:pe,_fnFeatureHtmlTable:fe,_fnScrollDraw:he,_fnApplyToChildren:me,_fnCalculateColumnWidths:ge,_fnThrottle:ve,_fnConvertToWidth:ye,_fnGetWidestNode:be,_fnGetMaxLenString:we,_fnStringToCss:xe,_fnSortFlatten:Ce,_fnSort:Te,_fnSortAria:Se,_fnSortListener:De,_fnSortAttachListener:_e,_fnSortingClasses:ke,_fnSortData:Ee,_fnSaveState:Ae,_fnLoadState:Ie,_fnSettingsFromNode:$e,_fnLog:Fe,_fnMap:Ne,_fnBindAction:Pe,_fnCallbackReg:je,_fnCallbackFire:Oe,_fnLengthOverflow:Re,_fnRenderer:He,_fnDataSource:Me,_fnRowAttributes:N,_fnCalculateEnd:function(){}}),i.fn.dataTable=qe,i.fn.dataTableSettings=qe.settings,i.fn.dataTableExt=qe.ext,i.fn.DataTable=function(e){return i(this).dataTable(e).api()},i.each(qe,function(e,t){i.fn.DataTable[e]=t}),i.fn.dataTable}
"function"==typeof define&&define.amd?define("datatables",["jquery"],i):"object"==typeof exports?module.exports=i(require("jquery")):jQuery&&!jQuery.fn.dataTable&&i(jQuery)}(window,document),function(e,t,n,i){function o(t,n){this.element=t,this.$wrapper=null,this.options=e.extend({},s,n),this._defaults=s,this._name=r,this.init()}var r="loadingIndicator",s={useImage:!0,showOnInit:!0,loadingImage:asset_url+"bundles/corezero/img/gears.svg",loadingClass:"loader",wrapperClass:"loading-indicator-wrapper"}
o.prototype={init:function(){this.addLoader(),this.options.showOnInit?this.show():this.hide()},addLoader:function(){var t=this.createDOM()
this.$wrapper=t,e(this.element).append(t)},createDOM:function(){var t=e('<div class="'+this.options.wrapperClass+'"></div>'),n=e('<span class="loading-indicator-helper"></span>'),i=e(this.options.useImage?'<img src="'+this.options.loadingImage+'" />':'<div class="'+this.options.loadingClass+'"></div>')
return t.append(n),t.append(i),t},show:function(){e(this.$wrapper).removeClass("loader-hidden").addClass("loader-visible")},hide:function(){e(this.$wrapper).removeClass("loader-visible").addClass("loader-hidden")}},e.fn[r]=function(t){return this.each(function(){e.data(this,r)||e.data(this,r,new o(this,t))})}}(jQuery,window,document),"undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery")
if(+function(e){"use strict"
var t=e.fn.jquery.split(" ")[0].split(".")
if(t[0]<2&&t[1]<9||1==t[0]&&9==t[1]&&t[2]<1||t[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var n=e(this),o=n.data("bs.alert")
o||n.data("bs.alert",o=new i(this)),"string"==typeof t&&o[t].call(n)})}var n='[data-dismiss="alert"]',i=function(t){e(t).on("click",n,this.close)}
i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.close=function(t){function n(){s.detach().trigger("closed.bs.alert").remove()}var o=e(this),r=o.attr("data-target")
r||(r=o.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""))
var s=e(r)
t&&t.preventDefault(),s.length||(s=o.closest(".alert")),s.trigger(t=e.Event("close.bs.alert")),t.isDefaultPrevented()||(s.removeClass("in"),e.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",n).emulateTransitionEnd(i.TRANSITION_DURATION):n())}
var o=e.fn.alert
e.fn.alert=t,e.fn.alert.Constructor=i,e.fn.alert.noConflict=function(){return e.fn.alert=o,this},e(document).on("click.bs.alert.data-api",n,i.prototype.close)}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.button"),r="object"==typeof t&&t
o||i.data("bs.button",o=new n(this,r)),"toggle"==t?o.toggle():t&&o.setState(t)})}var n=function(t,i){this.$element=e(t),this.options=e.extend({},n.DEFAULTS,i),this.isLoading=!1}
n.VERSION="3.3.6",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var n="disabled",i=this.$element,o=i.is("input")?"val":"html",r=i.data()
t+="Text",null==r.resetText&&i.data("resetText",i[o]()),setTimeout(e.proxy(function(){i[o](null==r[t]?this.options[t]:r[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(n).attr(n,n)):this.isLoading&&(this.isLoading=!1,i.removeClass(n).removeAttr(n))},this),0)},n.prototype.toggle=function(){var e=!0,t=this.$element.closest('[data-toggle="buttons"]')
if(t.length){var n=this.$element.find("input")
"radio"==n.prop("type")?(n.prop("checked")&&(e=!1),t.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==n.prop("type")&&(n.prop("checked")!==this.$element.hasClass("active")&&(e=!1),this.$element.toggleClass("active")),n.prop("checked",this.$element.hasClass("active")),e&&n.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")}
var i=e.fn.button
e.fn.button=t,e.fn.button.Constructor=n,e.fn.button.noConflict=function(){return e.fn.button=i,this},e(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(n){var i=e(n.target)
i.hasClass("btn")||(i=i.closest(".btn")),t.call(i,"toggle"),e(n.target).is('input[type="radio"]')||e(n.target).is('input[type="checkbox"]')||n.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){e(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.carousel"),r=e.extend({},n.DEFAULTS,i.data(),"object"==typeof t&&t),s="string"==typeof t?t:r.slide
o||i.data("bs.carousel",o=new n(this,r)),"number"==typeof t?o.to(t):s?o[s]():r.interval&&o.pause().cycle()})}var n=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",e.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",e.proxy(this.pause,this)).on("mouseleave.bs.carousel",e.proxy(this.cycle,this))}
n.VERSION="3.3.6",n.TRANSITION_DURATION=600,n.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},n.prototype.keydown=function(e){if(!/input|textarea/i.test(e.target.tagName)){switch(e.which){case 37:this.prev()
break
case 39:this.next()
break
default:return}e.preventDefault()}},n.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},n.prototype.getItemIndex=function(e){return this.$items=e.parent().children(".item"),this.$items.index(e||this.$active)},n.prototype.getItemForDirection=function(e,t){var n=this.getItemIndex(t),i="prev"==e&&0===n||"next"==e&&n==this.$items.length-1
if(i&&!this.options.wrap)return t
var o="prev"==e?-1:1,r=(n+o)%this.$items.length
return this.$items.eq(r)},n.prototype.to=function(e){var t=this,n=this.getItemIndex(this.$active=this.$element.find(".item.active"))
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){t.to(e)}):n==e?this.pause().cycle():this.slide(e>n?"next":"prev",this.$items.eq(e))},n.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},n.prototype.next=function(){return this.sliding?void 0:this.slide("next")},n.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},n.prototype.slide=function(t,i){var o=this.$element.find(".item.active"),r=i||this.getItemForDirection(t,o),s=this.interval,a="next"==t?"left":"right",l=this
if(r.hasClass("active"))return this.sliding=!1
var c=r[0],u=e.Event("slide.bs.carousel",{relatedTarget:c,direction:a})
if(this.$element.trigger(u),!u.isDefaultPrevented()){if(this.sliding=!0,s&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active")
var d=e(this.$indicators.children()[this.getItemIndex(r)])
d&&d.addClass("active")}var p=e.Event("slid.bs.carousel",{relatedTarget:c,direction:a})
return e.support.transition&&this.$element.hasClass("slide")?(r.addClass(t),r[0].offsetWidth,o.addClass(a),r.addClass(a),o.one("bsTransitionEnd",function(){r.removeClass([t,a].join(" ")).addClass("active"),o.removeClass(["active",a].join(" ")),l.sliding=!1,setTimeout(function(){l.$element.trigger(p)},0)}).emulateTransitionEnd(n.TRANSITION_DURATION)):(o.removeClass("active"),r.addClass("active"),this.sliding=!1,this.$element.trigger(p)),s&&this.cycle(),this}}
var i=e.fn.carousel
e.fn.carousel=t,e.fn.carousel.Constructor=n,e.fn.carousel.noConflict=function(){return e.fn.carousel=i,this}
var o=function(n){var i,o=e(this),r=e(o.attr("data-target")||(i=o.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,""))
if(r.hasClass("carousel")){var s=e.extend({},r.data(),o.data()),a=o.attr("data-slide-to")
a&&(s.interval=!1),t.call(r,s),a&&r.data("bs.carousel").to(a),n.preventDefault()}}
e(document).on("click.bs.carousel.data-api","[data-slide]",o).on("click.bs.carousel.data-api","[data-slide-to]",o),e(window).on("load",function(){e('[data-ride="carousel"]').each(function(){var n=e(this)
t.call(n,n.data())})})}(jQuery),+function(e){"use strict"
function t(t){var n=t.attr("data-target")
n||(n=t.attr("href"),n=n&&/#[A-Za-z]/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,""))
var i=n&&e(n)
return i&&i.length?i:t.parent()}function n(n){n&&3===n.which||(e(o).remove(),e(r).each(function(){var i=e(this),o=t(i),r={relatedTarget:this}
o.hasClass("open")&&(n&&"click"==n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(o[0],n.target)||(o.trigger(n=e.Event("hide.bs.dropdown",r)),n.isDefaultPrevented()||(i.attr("aria-expanded","false"),o.removeClass("open").trigger(e.Event("hidden.bs.dropdown",r)))))}))}function i(t){return this.each(function(){var n=e(this),i=n.data("bs.dropdown")
i||n.data("bs.dropdown",i=new s(this)),"string"==typeof t&&i[t].call(n)})}var o=".dropdown-backdrop",r='[data-toggle="dropdown"]',s=function(t){e(t).on("click.bs.dropdown",this.toggle)}
s.VERSION="3.3.6",s.prototype.toggle=function(i){var o=e(this)
if(!o.is(".disabled, :disabled")){var r=t(o),s=r.hasClass("open")
if(n(),!s){"ontouchstart"in document.documentElement&&!r.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",n)
var a={relatedTarget:this}
if(r.trigger(i=e.Event("show.bs.dropdown",a)),i.isDefaultPrevented())return
o.trigger("focus").attr("aria-expanded","true"),r.toggleClass("open").trigger(e.Event("shown.bs.dropdown",a))}return!1}},s.prototype.keydown=function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)){var i=e(this)
if(n.preventDefault(),n.stopPropagation(),!i.is(".disabled, :disabled")){var o=t(i),s=o.hasClass("open")
if(!s&&27!=n.which||s&&27==n.which)return 27==n.which&&o.find(r).trigger("focus"),i.trigger("click")
var a=" li:not(.disabled):visible a",l=o.find(".dropdown-menu"+a)
if(l.length){var c=l.index(n.target)
38==n.which&&c>0&&c--,40==n.which&&c<l.length-1&&c++,~c||(c=0),l.eq(c).trigger("focus")}}}}
var a=e.fn.dropdown
e.fn.dropdown=i,e.fn.dropdown.Constructor=s,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.bs.dropdown.data-api",n).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",r,s.prototype.toggle).on("keydown.bs.dropdown.data-api",r,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery),+function(e){"use strict"
function t(t,i){return this.each(function(){var o=e(this),r=o.data("bs.modal"),s=e.extend({},n.DEFAULTS,o.data(),"object"==typeof t&&t)
r||o.data("bs.modal",r=new n(this,s)),"string"==typeof t?r[t](i):s.show&&r.show(i)})}var n=function(t,n){this.options=n,this.$body=e(document.body),this.$element=e(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,e.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}
n.VERSION="3.3.6",n.TRANSITION_DURATION=300,n.BACKDROP_TRANSITION_DURATION=150,n.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},n.prototype.toggle=function(e){return this.isShown?this.hide():this.show(e)},n.prototype.show=function(t){var i=this,o=e.Event("show.bs.modal",{relatedTarget:t})
this.$element.trigger(o),this.isShown||o.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',e.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){i.$element.one("mouseup.dismiss.bs.modal",function(t){e(t.target).is(i.$element)&&(i.ignoreBackdropClick=!0)})}),this.backdrop(function(){var o=e.support.transition&&i.$element.hasClass("fade")
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.adjustDialog(),o&&i.$element[0].offsetWidth,i.$element.addClass("in"),i.enforceFocus()
var r=e.Event("shown.bs.modal",{relatedTarget:t})
o?i.$dialog.one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(r)}).emulateTransitionEnd(n.TRANSITION_DURATION):i.$element.trigger("focus").trigger(r)}))},n.prototype.hide=function(t){t&&t.preventDefault(),t=e.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),e(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),e.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",e.proxy(this.hideModal,this)).emulateTransitionEnd(n.TRANSITION_DURATION):this.hideModal())},n.prototype.enforceFocus=function(){e(document).off("focusin.bs.modal").on("focusin.bs.modal",e.proxy(function(e){this.$element[0]===e.target||this.$element.has(e.target).length||this.$element.trigger("focus")},this))},n.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",e.proxy(function(e){27==e.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},n.prototype.resize=function(){this.isShown?e(window).on("resize.bs.modal",e.proxy(this.handleUpdate,this)):e(window).off("resize.bs.modal")},n.prototype.hideModal=function(){var e=this
this.$element.hide(),this.backdrop(function(){e.$body.removeClass("modal-open"),e.resetAdjustments(),e.resetScrollbar(),e.$element.trigger("hidden.bs.modal")})},n.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},n.prototype.backdrop=function(t){var i=this,o=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var r=e.support.transition&&o
if(this.$backdrop=e(document.createElement("div")).addClass("modal-backdrop "+o).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",e.proxy(function(e){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(e.target===e.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),r&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return
r?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
var s=function(){i.removeBackdrop(),t&&t()}
e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",s).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION):s()}else t&&t()},n.prototype.handleUpdate=function(){this.adjustDialog()},n.prototype.adjustDialog=function(){var e=this.$element[0].scrollHeight>document.documentElement.clientHeight
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&e?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!e?this.scrollbarWidth:""})},n.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},n.prototype.checkScrollbar=function(){var e=window.innerWidth
if(!e){var t=document.documentElement.getBoundingClientRect()
e=t.right-Math.abs(t.left)}this.bodyIsOverflowing=document.body.clientWidth<e,this.scrollbarWidth=this.measureScrollbar()},n.prototype.setScrollbar=function(){var e=parseInt(this.$body.css("padding-right")||0,10)
this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",e+this.scrollbarWidth)},n.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},n.prototype.measureScrollbar=function(){var e=document.createElement("div")
e.className="modal-scrollbar-measure",this.$body.append(e)
var t=e.offsetWidth-e.clientWidth
return this.$body[0].removeChild(e),t}
var i=e.fn.modal
e.fn.modal=t,e.fn.modal.Constructor=n,e.fn.modal.noConflict=function(){return e.fn.modal=i,this},e(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(n){var i=e(this),o=i.attr("href"),r=e(i.attr("data-target")||o&&o.replace(/.*(?=#[^\s]+$)/,"")),s=r.data("bs.modal")?"toggle":e.extend({remote:!/#/.test(o)&&o},r.data(),i.data())
i.is("a")&&n.preventDefault(),r.one("show.bs.modal",function(e){e.isDefaultPrevented()||r.one("hidden.bs.modal",function(){i.is(":visible")&&i.trigger("focus")})}),t.call(r,s,this)})}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.tooltip"),r="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.tooltip",o=new n(this,r)),"string"==typeof t&&o[t]())})}var n=function(e,t){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",e,t)}
n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},n.prototype.init=function(t,n,i){if(this.enabled=!0,this.type=t,this.$element=e(n),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&e(e.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!")
for(var o=this.options.trigger.split(" "),r=o.length;r--;){var s=o[r]
if("click"==s)this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this))
else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",l="hover"==s?"mouseleave":"focusout"
this.$element.on(a+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,e.proxy(this.leave,this))}}this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.getOptions=function(t){return t=e.extend({},this.getDefaults(),this.$element.data(),t),t.delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t},n.prototype.getDelegateOptions=function(){var t={},n=this.getDefaults()
return this._options&&e.each(this._options,function(e,i){n[e]!=i&&(t[e]=i)}),t},n.prototype.enter=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type)
return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusin"==t.type?"focus":"hover"]=!0),n.tip().hasClass("in")||"in"==n.hoverState?void(n.hoverState="in"):(clearTimeout(n.timeout),n.hoverState="in",n.options.delay&&n.options.delay.show?void(n.timeout=setTimeout(function(){"in"==n.hoverState&&n.show()},n.options.delay.show)):n.show())},n.prototype.isInStateTrue=function(){for(var e in this.inState)if(this.inState[e])return!0
return!1},n.prototype.leave=function(t){var n=t instanceof this.constructor?t:e(t.currentTarget).data("bs."+this.type)
return n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n)),t instanceof e.Event&&(n.inState["focusout"==t.type?"focus":"hover"]=!1),n.isInStateTrue()?void 0:(clearTimeout(n.timeout),n.hoverState="out",n.options.delay&&n.options.delay.hide?void(n.timeout=setTimeout(function(){"out"==n.hoverState&&n.hide()},n.options.delay.hide)):n.hide())},n.prototype.show=function(){var t=e.Event("show.bs."+this.type)
if(this.hasContent()&&this.enabled){this.$element.trigger(t)
var i=e.contains(this.$element[0].ownerDocument.documentElement,this.$element[0])
if(t.isDefaultPrevented()||!i)return
var o=this,r=this.tip(),s=this.getUID(this.type)
this.setContent(),r.attr("id",s),this.$element.attr("aria-describedby",s),this.options.animation&&r.addClass("fade")
var a="function"==typeof this.options.placement?this.options.placement.call(this,r[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,c=l.test(a)
c&&(a=a.replace(l,"")||"top"),r.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?r.appendTo(this.options.container):r.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type)
var u=this.getPosition(),d=r[0].offsetWidth,p=r[0].offsetHeight
if(c){var f=a,h=this.getPosition(this.$viewport)
a="bottom"==a&&u.bottom+p>h.bottom?"top":"top"==a&&u.top-p<h.top?"bottom":"right"==a&&u.right+d>h.width?"left":"left"==a&&u.left-d<h.left?"right":a,r.removeClass(f).addClass(a)}var m=this.getCalculatedOffset(a,u,d,p)
this.applyPlacement(m,a)
var g=function(){var e=o.hoverState
o.$element.trigger("shown.bs."+o.type),o.hoverState=null,"out"==e&&o.leave(o)}
e.support.transition&&this.$tip.hasClass("fade")?r.one("bsTransitionEnd",g).emulateTransitionEnd(n.TRANSITION_DURATION):g()}},n.prototype.applyPlacement=function(t,n){var i=this.tip(),o=i[0].offsetWidth,r=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10)
isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,e.offset.setOffset(i[0],e.extend({using:function(e){i.css({top:Math.round(e.top),left:Math.round(e.left)})}},t),0),i.addClass("in")
var l=i[0].offsetWidth,c=i[0].offsetHeight
"top"==n&&c!=r&&(t.top=t.top+r-c)
var u=this.getViewportAdjustedDelta(n,t,l,c)
u.left?t.left+=u.left:t.top+=u.top
var d=/top|bottom/.test(n),p=d?2*u.left-o+l:2*u.top-r+c,f=d?"offsetWidth":"offsetHeight"
i.offset(t),this.replaceArrow(p,i[0][f],d)},n.prototype.replaceArrow=function(e,t,n){this.arrow().css(n?"left":"top",50*(1-e/t)+"%").css(n?"top":"left","")},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle()
e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},n.prototype.hide=function(t){function i(){"in"!=o.hoverState&&r.detach(),o.$element.removeAttr("aria-describedby").trigger("hidden.bs."+o.type),t&&t()}var o=this,r=e(this.$tip),s=e.Event("hide.bs."+this.type)
return this.$element.trigger(s),s.isDefaultPrevented()?void 0:(r.removeClass("in"),e.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",i).emulateTransitionEnd(n.TRANSITION_DURATION):i(),this.hoverState=null,this)},n.prototype.fixTitle=function(){var e=this.$element;(e.attr("title")||"string"!=typeof e.attr("data-original-title"))&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},n.prototype.hasContent=function(){return this.getTitle()},n.prototype.getPosition=function(t){t=t||this.$element
var n=t[0],i="BODY"==n.tagName,o=n.getBoundingClientRect()
null==o.width&&(o=e.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}))
var r=i?{top:0,left:0}:t.offset(),s={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},a=i?{width:e(window).width(),height:e(window).height()}:null
return e.extend({},o,s,a,r)},n.prototype.getCalculatedOffset=function(e,t,n,i){return"bottom"==e?{top:t.top+t.height,left:t.left+t.width/2-n/2}:"top"==e?{top:t.top-i,left:t.left+t.width/2-n/2}:"left"==e?{top:t.top+t.height/2-i/2,left:t.left-n}:{top:t.top+t.height/2-i/2,left:t.left+t.width}},n.prototype.getViewportAdjustedDelta=function(e,t,n,i){var o={top:0,left:0}
if(!this.$viewport)return o
var r=this.options.viewport&&this.options.viewport.padding||0,s=this.getPosition(this.$viewport)
if(/right|left/.test(e)){var a=t.top-r-s.scroll,l=t.top+r-s.scroll+i
a<s.top?o.top=s.top-a:l>s.top+s.height&&(o.top=s.top+s.height-l)}else{var c=t.left-r,u=t.left+r+n
c<s.left?o.left=s.left-c:u>s.right&&(o.left=s.left+s.width-u)}return o},n.prototype.getTitle=function(){var e,t=this.$element,n=this.options
return e=t.attr("data-original-title")||("function"==typeof n.title?n.title.call(t[0]):n.title)},n.prototype.getUID=function(e){do e+=~~(1e6*Math.random())
while(document.getElementById(e))
return e},n.prototype.tip=function(){if(!this.$tip&&(this.$tip=e(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!")
return this.$tip},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},n.prototype.enable=function(){this.enabled=!0},n.prototype.disable=function(){this.enabled=!1},n.prototype.toggleEnabled=function(){this.enabled=!this.enabled},n.prototype.toggle=function(t){var n=this
t&&(n=e(t.currentTarget).data("bs."+this.type),n||(n=new this.constructor(t.currentTarget,this.getDelegateOptions()),e(t.currentTarget).data("bs."+this.type,n))),t?(n.inState.click=!n.inState.click,n.isInStateTrue()?n.enter(n):n.leave(n)):n.tip().hasClass("in")?n.leave(n):n.enter(n)},n.prototype.destroy=function(){var e=this
clearTimeout(this.timeout),this.hide(function(){e.$element.off("."+e.type).removeData("bs."+e.type),e.$tip&&e.$tip.detach(),e.$tip=null,e.$arrow=null,e.$viewport=null})}
var i=e.fn.tooltip
e.fn.tooltip=t,e.fn.tooltip.Constructor=n,e.fn.tooltip.noConflict=function(){return e.fn.tooltip=i,this}}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.popover"),r="object"==typeof t&&t;(o||!/destroy|hide/.test(t))&&(o||i.data("bs.popover",o=new n(this,r)),"string"==typeof t&&o[t]())})}var n=function(e,t){this.init("popover",e,t)}
if(!e.fn.tooltip)throw new Error("Popover requires tooltip.js")
n.VERSION="3.3.6",n.DEFAULTS=e.extend({},e.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),n.prototype=e.extend({},e.fn.tooltip.Constructor.prototype),n.prototype.constructor=n,n.prototype.getDefaults=function(){return n.DEFAULTS},n.prototype.setContent=function(){var e=this.tip(),t=this.getTitle(),n=this.getContent()
e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof n?"html":"append":"text"](n),e.removeClass("fade top bottom left right in"),e.find(".popover-title").html()||e.find(".popover-title").hide()},n.prototype.hasContent=function(){return this.getTitle()||this.getContent()},n.prototype.getContent=function(){var e=this.$element,t=this.options
return e.attr("data-content")||("function"==typeof t.content?t.content.call(e[0]):t.content)},n.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")}
var i=e.fn.popover
e.fn.popover=t,e.fn.popover.Constructor=n,e.fn.popover.noConflict=function(){return e.fn.popover=i,this}}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.tab")
o||i.data("bs.tab",o=new n(this)),"string"==typeof t&&o[t]()})}var n=function(t){this.element=e(t)}
n.VERSION="3.3.6",n.TRANSITION_DURATION=150,n.prototype.show=function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),i=t.data("target")
if(i||(i=t.attr("href"),i=i&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=n.find(".active:last a"),r=e.Event("hide.bs.tab",{relatedTarget:t[0]}),s=e.Event("show.bs.tab",{relatedTarget:o[0]})
if(o.trigger(r),t.trigger(s),!s.isDefaultPrevented()&&!r.isDefaultPrevented()){var a=e(i)
this.activate(t.closest("li"),n),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},n.prototype.activate=function(t,i,o){function r(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),a?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),o&&o()}var s=i.find("> .active"),a=o&&e.support.transition&&(s.length&&s.hasClass("fade")||!!i.find("> .fade").length)
s.length&&a?s.one("bsTransitionEnd",r).emulateTransitionEnd(n.TRANSITION_DURATION):r(),s.removeClass("in")}
var i=e.fn.tab
e.fn.tab=t,e.fn.tab.Constructor=n,e.fn.tab.noConflict=function(){return e.fn.tab=i,this}
var o=function(n){n.preventDefault(),t.call(e(this),"show")}
e(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',o).on("click.bs.tab.data-api",'[data-toggle="pill"]',o)}(jQuery),+function(e){"use strict"
function t(t){return this.each(function(){var i=e(this),o=i.data("bs.affix"),r="object"==typeof t&&t
o||i.data("bs.affix",o=new n(this,r)),"string"==typeof t&&o[t]()})}var n=function(t,i){this.options=e.extend({},n.DEFAULTS,i),this.$target=e(this.options.target).on("scroll.bs.affix.data-api",e.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",e.proxy(this.checkPositionWithEventLoop,this)),this.$element=e(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()}
n.VERSION="3.3.6",n.RESET="affix affix-top affix-bottom",n.DEFAULTS={offset:0,target:window},n.prototype.getState=function(e,t,n,i){var o=this.$target.scrollTop(),r=this.$element.offset(),s=this.$target.height()
if(null!=n&&"top"==this.affixed)return n>o&&"top"
if("bottom"==this.affixed)return null!=n?!(o+this.unpin<=r.top)&&"bottom":!(e-i>=o+s)&&"bottom"
var a=null==this.affixed,l=a?o:r.top,c=a?s:t
return null!=n&&n>=o?"top":null!=i&&l+c>=e-i&&"bottom"},n.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset
this.$element.removeClass(n.RESET).addClass("affix")
var e=this.$target.scrollTop(),t=this.$element.offset()
return this.pinnedOffset=t.top-e},n.prototype.checkPositionWithEventLoop=function(){setTimeout(e.proxy(this.checkPosition,this),1)},n.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),i=this.options.offset,o=i.top,r=i.bottom,s=Math.max(e(document).height(),e(document.body).height())
"object"!=typeof i&&(r=o=i),"function"==typeof o&&(o=i.top(this.$element)),"function"==typeof r&&(r=i.bottom(this.$element))
var a=this.getState(s,t,o,r)
if(this.affixed!=a){null!=this.unpin&&this.$element.css("top","")
var l="affix"+(a?"-"+a:""),c=e.Event(l+".bs.affix")
if(this.$element.trigger(c),c.isDefaultPrevented())return
this.affixed=a,this.unpin="bottom"==a?this.getPinnedOffset():null,this.$element.removeClass(n.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==a&&this.$element.offset({top:s-t-r})}}
var i=e.fn.affix
e.fn.affix=t,e.fn.affix.Constructor=n,e.fn.affix.noConflict=function(){return e.fn.affix=i,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var n=e(this),i=n.data()
i.offset=i.offset||{},null!=i.offsetBottom&&(i.offset.bottom=i.offsetBottom),null!=i.offsetTop&&(i.offset.top=i.offsetTop),t.call(n,i)})})}(jQuery),+function(e){"use strict"
function t(t){var n,i=t.attr("data-target")||(n=t.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,"")
return e(i)}function n(t){return this.each(function(){var n=e(this),o=n.data("bs.collapse"),r=e.extend({},i.DEFAULTS,n.data(),"object"==typeof t&&t)
!o&&r.toggle&&/show|hide/.test(t)&&(r.toggle=!1),o||n.data("bs.collapse",o=new i(this,r)),"string"==typeof t&&o[t]()})}var i=function(t,n){this.$element=e(t),this.options=e.extend({},i.DEFAULTS,n),this.$trigger=e('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()}
i.VERSION="3.3.6",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0},i.prototype.dimension=function(){var e=this.$element.hasClass("width")
return e?"width":"height"},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,o=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing")
if(!(o&&o.length&&(t=o.data("bs.collapse"),t&&t.transitioning))){var r=e.Event("show.bs.collapse")
if(this.$element.trigger(r),!r.isDefaultPrevented()){o&&o.length&&(n.call(o,"hide"),t||o.data("bs.collapse",null))
var s=this.dimension()
this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1
var a=function(){this.$element.removeClass("collapsing").addClass("collapse in")[s](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")}
if(!e.support.transition)return a.call(this)
var l=e.camelCase(["scroll",s].join("-"))
this.$element.one("bsTransitionEnd",e.proxy(a,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[s](this.$element[0][l])}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=e.Event("hide.bs.collapse")
if(this.$element.trigger(t),!t.isDefaultPrevented()){var n=this.dimension()
this.$element[n](this.$element[n]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1
var o=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")}
return e.support.transition?void this.$element[n](0).one("bsTransitionEnd",e.proxy(o,this)).emulateTransitionEnd(i.TRANSITION_DURATION):o.call(this)}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},i.prototype.getParent=function(){return e(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(e.proxy(function(n,i){var o=e(i)
this.addAriaAndCollapsedClass(t(o),o)},this)).end()},i.prototype.addAriaAndCollapsedClass=function(e,t){var n=e.hasClass("in")
e.attr("aria-expanded",n),t.toggleClass("collapsed",!n).attr("aria-expanded",n)}
var o=e.fn.collapse
e.fn.collapse=n,e.fn.collapse.Constructor=i,e.fn.collapse.noConflict=function(){return e.fn.collapse=o,this},e(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(i){var o=e(this)
o.attr("data-target")||i.preventDefault()
var r=t(o),s=r.data("bs.collapse"),a=s?"toggle":o.data()
n.call(r,a)})}(jQuery),+function(e){"use strict"
function t(n,i){this.$body=e(document.body),this.$scrollElement=e(e(n).is(document.body)?window:n),this.options=e.extend({},t.DEFAULTS,i),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",e.proxy(this.process,this)),this.refresh(),this.process()}function n(n){return this.each(function(){var i=e(this),o=i.data("bs.scrollspy"),r="object"==typeof n&&n
o||i.data("bs.scrollspy",o=new t(this,r)),"string"==typeof n&&o[n]()})}t.VERSION="3.3.6",t.DEFAULTS={offset:10},t.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},t.prototype.refresh=function(){var t=this,n="offset",i=0
this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),e.isWindow(this.$scrollElement[0])||(n="position",i=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=e(this),o=t.data("target")||t.attr("href"),r=/^#./.test(o)&&e(o)
return r&&r.length&&r.is(":visible")&&[[r[n]().top+i,o]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},t.prototype.process=function(){var e,t=this.$scrollElement.scrollTop()+this.options.offset,n=this.getScrollHeight(),i=this.options.offset+n-this.$scrollElement.height(),o=this.offsets,r=this.targets,s=this.activeTarget
if(this.scrollHeight!=n&&this.refresh(),t>=i)return s!=(e=r[r.length-1])&&this.activate(e)
if(s&&t<o[0])return this.activeTarget=null,this.clear()
for(e=o.length;e--;)s!=r[e]&&t>=o[e]&&(void 0===o[e+1]||t<o[e+1])&&this.activate(r[e])},t.prototype.activate=function(t){this.activeTarget=t,this.clear()
var n=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=e(n).parents("li").addClass("active")
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},t.prototype.clear=function(){e(this.selector).parentsUntil(this.options.target,".active").removeClass("active")}
var i=e.fn.scrollspy
e.fn.scrollspy=n,e.fn.scrollspy.Constructor=t,e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=i,this},e(window).on("load.bs.scrollspy.data-api",function(){e('[data-spy="scroll"]').each(function(){var t=e(this)
n.call(t,t.data())})})}(jQuery),+function(e){"use strict"
function t(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"}
for(var n in t)if(void 0!==e.style[n])return{end:t[n]}
return!1}e.fn.emulateTransitionEnd=function(t){var n=!1,i=this
e(this).one("bsTransitionEnd",function(){n=!0})
var o=function(){n||e(i).trigger(e.support.transition.end)}
return setTimeout(o,t),this},e(function(){e.support.transition=t(),e.support.transition&&(e.event.special.bsTransitionEnd={bindType:e.support.transition.end,delegateType:e.support.transition.end,handle:function(t){return e(t.target).is(this)?t.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),function(e,t){var n=function(e,n){e.extend(!0,n.defaults,{dom:"<'row'<'col-sm-6'l><'col-sm-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-5'i><'col-sm-7'p>>",renderer:"bootstrap"}),e.extend(n.ext.classes,{sWrapper:"dataTables_wrapper form-inline dt-bootstrap",sFilterInput:"form-control input-sm",sLengthSelect:"form-control input-sm"}),n.ext.renderer.pageButton.bootstrap=function(i,o,r,s,a,l){var c,u,d,p=new n.Api(i),f=i.oClasses,h=i.oLanguage.oPaginate,m=0,g=function(t,n){var o,s,d,v,y=function(t){t.preventDefault(),e(t.currentTarget).hasClass("disabled")||p.page(t.data.action).draw("page")}
for(o=0,s=n.length;o<s;o++)if(v=n[o],e.isArray(v))g(t,v)
else{switch(u=c="",v){case"ellipsis":c="&hellip;",u="disabled"
break
case"first":c=h.sFirst,u=v+(0<a?"":" disabled")
break
case"previous":c=h.sPrevious,u=v+(0<a?"":" disabled")
break
case"next":c=h.sNext,u=v+(a<l-1?"":" disabled")
break
case"last":c=h.sLast,u=v+(a<l-1?"":" disabled")
break
default:c=v+1,u=a===v?"active":""}c&&(d=e("<li>",{class:f.sPageButton+" "+u,id:0===r&&"string"==typeof v?i.sTableId+"_"+v:null}).append(e("<a>",{href:"#","aria-controls":i.sTableId,"data-dt-idx":m,tabindex:i.iTabIndex}).html(c)).appendTo(t),i.oApi._fnBindAction(d,{action:v},y),m++)}}
try{d=e(o).find(t.activeElement).data("dt-idx")}catch(e){}g(e(o).empty().html('<ul class="pagination"/>').children("ul"),s),d&&e(o).find("[data-dt-idx="+d+"]").focus()},n.TableTools&&(e.extend(!0,n.TableTools.classes,{container:"DTTT btn-group",buttons:{normal:"btn btn-default",disabled:"disabled"},collection:{container:"DTTT_dropdown dropdown-menu",buttons:{normal:"",disabled:"disabled"}},print:{info:"DTTT_print_info"},select:{row:"active"}}),e.extend(!0,n.TableTools.DEFAULTS.oTags,{collection:{container:"ul",button:"li",liner:"a"}}))}
"function"==typeof define&&define.amd?define(["jquery","datatables"],n):"object"==typeof exports?n(require("jquery"),require("datatables")):jQuery&&n(jQuery,jQuery.fn.dataTable)}(window,document),!function(e){"use strict"
"function"==typeof define&&define.amd?define(e):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=e():"undefined"!=typeof Package?Sortable=e():window.Sortable=e()}(function(){"use strict"
function e(e,t){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e)
this.el=e,this.options=t=b({},t),e[B]=this
var n={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,animation:0,setData:function(e,t){e.setData("Text",t.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0}}
for(var i in n)!(i in t)&&(t[i]=n[i])
te(t)
for(var o in this)"_"===o.charAt(0)&&"function"==typeof this[o]&&(this[o]=this[o].bind(this))
this.nativeDraggable=!t.forceFallback&&J,r(e,"mousedown",this._onTapStart),r(e,"touchstart",this._onTapStart),r(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(r(e,"dragover",this),r(e,"dragenter",this)),Z.push(this._onDragOver),t.store&&this.sort(t.store.get(this))}function t(e){S&&S.state!==e&&(l(S,"display",e?"none":""),!e&&S.state&&D.insertBefore(S,x),S.state=e)}function n(e,t,n){if(e){n=n||q
do if(">*"===t&&e.parentNode===n||v(e,t))return e
while(e=i(e))}return null}function i(e){var t=e.host
return t&&t.nodeType?t:e.parentNode}function o(e){e.dataTransfer&&(e.dataTransfer.dropEffect="move"),e.preventDefault()}function r(e,t,n){e.addEventListener(t,n,!1)}function s(e,t,n){e.removeEventListener(t,n,!1)}function a(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t)
else{var i=(" "+e.className+" ").replace(z," ").replace(" "+t+" "," ")
e.className=(i+(n?" "+t:"")).replace(z," ")}}function l(e,t,n){var i=e&&e.style
if(i){if(void 0===n)return q.defaultView&&q.defaultView.getComputedStyle?n=q.defaultView.getComputedStyle(e,""):e.currentStyle&&(n=e.currentStyle),void 0===t?n:n[t]
t in i||(t="-webkit-"+t),i[t]=n+("string"==typeof n?"":"px")}}function c(e,t,n){if(e){var i=e.getElementsByTagName(t),o=0,r=i.length
if(n)for(;o<r;o++)n(i[o],o)
return i}return[]}function u(e,t,n,i,o,r,s){e=e||t[B]
var a=q.createEvent("Event"),l=e.options,c="on"+n.charAt(0).toUpperCase()+n.substr(1)
a.initEvent(n,!0,!0),a.to=t,a.from=o||t,a.item=i||t,a.clone=S,a.oldIndex=r,a.newIndex=s,t.dispatchEvent(a),l[c]&&l[c].call(e,a)}function d(e,t,n,i,o,r,s){var a,l,c=e[B],u=c.options.onMove
return a=q.createEvent("Event"),a.initEvent("move",!0,!0),a.to=t,a.from=e,a.dragged=n,a.draggedRect=i,a.related=o||t,a.relatedRect=r||t.getBoundingClientRect(),e.dispatchEvent(a),u&&(l=u.call(c,a,s)),l}function p(e){e.draggable=!1}function f(){Y=!1}function h(e,t){var n=e.lastElementChild,i=n.getBoundingClientRect()
return(t.clientY-(i.top+i.height)>5||t.clientX-(i.right+i.width)>5)&&n}function m(e){for(var t=e.tagName+e.className+e.src+e.href+e.textContent,n=t.length,i=0;n--;)i+=t.charCodeAt(n)
return i.toString(36)}function g(e,t){var n=0
if(!e||!e.parentNode)return-1
for(;e&&(e=e.previousElementSibling);)"TEMPLATE"===e.nodeName.toUpperCase()||">*"!==t&&!v(e,t)||n++
return n}function v(e,t){if(e){t=t.split(".")
var n=t.shift().toUpperCase(),i=new RegExp("\\s("+t.join("|")+")(?=\\s)","g")
return!(""!==n&&e.nodeName.toUpperCase()!=n||t.length&&((" "+e.className+" ").match(i)||[]).length!=t.length)}return!1}function y(e,t){var n,i
return function(){void 0===n&&(n=arguments,i=this,setTimeout(function(){1===n.length?e.call(i,n[0]):e.apply(i,n),n=void 0},t))}}function b(e,t){if(e&&t)for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return e}function w(e){return X?X(e).clone(!0)[0]:Q&&Q.dom?Q.dom(e).cloneNode(!0):e.cloneNode(!0)}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")}
var x,C,T,S,D,_,k,E,A,I,$,F,N,L,P,j,O,R,H,M={},z=/\s+/g,B="Sortable"+(new Date).getTime(),W=window,q=W.document,U=W.parseInt,X=W.jQuery||W.Zepto,Q=W.Polymer,J=!!("draggable"in q.createElement("div")),V=function(e){return!navigator.userAgent.match(/Trident.*rv[ :]?11\./)&&(e=q.createElement("x"),e.style.cssText="pointer-events:auto","auto"===e.style.pointerEvents)}(),Y=!1,G=Math.abs,K=Math.min,Z=([].slice,[]),ee=y(function(e,t,n){if(n&&t.scroll){var i,o,r,s,a,l,c=t.scrollSensitivity,u=t.scrollSpeed,d=e.clientX,p=e.clientY,f=window.innerWidth,h=window.innerHeight
if(E!==n&&(k=t.scroll,E=n,A=t.scrollFn,k===!0)){k=n
do if(k.offsetWidth<k.scrollWidth||k.offsetHeight<k.scrollHeight)break
while(k=k.parentNode)}k&&(i=k,o=k.getBoundingClientRect(),r=(G(o.right-d)<=c)-(G(o.left-d)<=c),s=(G(o.bottom-p)<=c)-(G(o.top-p)<=c)),r||s||(r=(f-d<=c)-(d<=c),s=(h-p<=c)-(p<=c),(r||s)&&(i=W)),M.vx===r&&M.vy===s&&M.el===i||(M.el=i,M.vx=r,M.vy=s,clearInterval(M.pid),i&&(M.pid=setInterval(function(){return l=s?s*u:0,a=r?r*u:0,"function"==typeof A?A.call(_this,a,l,e):void(i===W?W.scrollTo(W.pageXOffset+a,W.pageYOffset+l):(i.scrollTop+=l,i.scrollLeft+=a))},24)))}},30),te=function(e){function t(e,t){return void 0!==e&&e!==!0||(e=n.name),"function"==typeof e?e:function(n,i){var o=i.options.group.name
return t?e:e&&(e.join?e.indexOf(o)>-1:o==e)}}var n={},i=e.group
i&&"object"==typeof i||(i={name:i}),n.name=i.name,n.checkPull=t(i.pull,!0),n.checkPut=t(i.put),e.group=n}
return e.prototype={constructor:e,_onTapStart:function(e){var t,i=this,o=this.el,r=this.options,s=e.type,a=e.touches&&e.touches[0],l=(a||e).target,c=e.target.shadowRoot&&e.path[0]||l,d=r.filter
if(!x&&!("mousedown"===s&&0!==e.button||r.disabled)&&(!r.handle||n(c,r.handle,o))&&(l=n(l,r.draggable,o))){if(t=g(l,r.draggable),"function"==typeof d){if(d.call(this,e,l,this))return u(i,c,"filter",l,o,t),void e.preventDefault()}else if(d&&(d=d.split(",").some(function(e){if(e=n(c,e.trim(),o))return u(i,e,"filter",l,o,t),!0})))return void e.preventDefault()
this._prepareDragStart(e,a,l,t)}},_prepareDragStart:function(e,t,n,i){var o,s=this,l=s.el,d=s.options,f=l.ownerDocument
n&&!x&&n.parentNode===l&&(O=e,D=l,x=n,C=x.parentNode,_=x.nextSibling,P=d.group,N=i,this._lastX=(t||e).clientX,this._lastY=(t||e).clientY,x.style["will-change"]="transform",o=function(){s._disableDelayedDrag(),x.draggable=s.nativeDraggable,a(x,d.chosenClass,!0),s._triggerDragStart(e,t),u(s,D,"choose",x,D,N)},d.ignore.split(",").forEach(function(e){c(x,e.trim(),p)}),r(f,"mouseup",s._onDrop),r(f,"touchend",s._onDrop),r(f,"touchcancel",s._onDrop),r(f,"pointercancel",s._onDrop),d.delay?(r(f,"mouseup",s._disableDelayedDrag),r(f,"touchend",s._disableDelayedDrag),r(f,"touchcancel",s._disableDelayedDrag),r(f,"mousemove",s._disableDelayedDrag),r(f,"touchmove",s._disableDelayedDrag),r(f,"pointermove",s._disableDelayedDrag),s._dragStartTimer=setTimeout(o,d.delay)):o())},_disableDelayedDrag:function(){var e=this.el.ownerDocument
clearTimeout(this._dragStartTimer),s(e,"mouseup",this._disableDelayedDrag),s(e,"touchend",this._disableDelayedDrag),s(e,"touchcancel",this._disableDelayedDrag),s(e,"mousemove",this._disableDelayedDrag),s(e,"touchmove",this._disableDelayedDrag),s(e,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(e,t){t=t||("touch"==e.pointerType?e:null),t?(O={target:x,clientX:t.clientX,clientY:t.clientY},this._onDragStart(O,"touch")):this.nativeDraggable?(r(x,"dragend",this),r(D,"dragstart",this._onDragStart)):this._onDragStart(O,!0)
try{q.selection?setTimeout(function(){q.selection.empty()}):window.getSelection().removeAllRanges()}catch(e){}},_dragStarted:function(){if(D&&x){var t=this.options
a(x,t.ghostClass,!0),a(x,t.dragClass,!1),e.active=this,u(this,D,"start",x,D,N)}},_emulateDragOver:function(){if(R){if(this._lastX===R.clientX&&this._lastY===R.clientY)return
this._lastX=R.clientX,this._lastY=R.clientY,V||l(T,"display","none")
var e=q.elementFromPoint(R.clientX,R.clientY),t=e,n=Z.length
if(t)do{if(t[B]){for(;n--;)Z[n]({clientX:R.clientX,clientY:R.clientY,target:e,rootEl:t})
break}e=t}while(t=t.parentNode)
V||l(T,"display","")}},_onTouchMove:function(t){if(O){var n=this.options,i=n.fallbackTolerance,o=n.fallbackOffset,r=t.touches?t.touches[0]:t,s=r.clientX-O.clientX+o.x,a=r.clientY-O.clientY+o.y,c=t.touches?"translate3d("+s+"px,"+a+"px,0)":"translate("+s+"px,"+a+"px)"
if(!e.active){if(i&&K(G(r.clientX-this._lastX),G(r.clientY-this._lastY))<i)return
this._dragStarted()}this._appendGhost(),H=!0,R=r,l(T,"webkitTransform",c),l(T,"mozTransform",c),l(T,"msTransform",c),l(T,"transform",c),t.preventDefault()}},_appendGhost:function(){if(!T){var e,t=x.getBoundingClientRect(),n=l(x),i=this.options
T=x.cloneNode(!0),a(T,i.ghostClass,!1),a(T,i.fallbackClass,!0),a(T,i.dragClass,!0),l(T,"top",t.top-U(n.marginTop,10)),l(T,"left",t.left-U(n.marginLeft,10)),l(T,"width",t.width),l(T,"height",t.height),l(T,"opacity","0.8"),l(T,"position","fixed"),l(T,"zIndex","100000"),l(T,"pointerEvents","none"),i.fallbackOnBody&&q.body.appendChild(T)||D.appendChild(T),e=T.getBoundingClientRect(),l(T,"width",2*t.width-e.width),l(T,"height",2*t.height-e.height)}},_onDragStart:function(e,t){var n=e.dataTransfer,i=this.options
this._offUpEvents(),"clone"==P.checkPull(this,this,x,e)&&(S=w(x),l(S,"display","none"),D.insertBefore(S,x),u(this,D,"clone",x)),a(x,i.dragClass,!0),t?("touch"===t?(r(q,"touchmove",this._onTouchMove),r(q,"touchend",this._onDrop),r(q,"touchcancel",this._onDrop),r(q,"pointermove",this._onTouchMove),r(q,"pointerup",this._onDrop)):(r(q,"mousemove",this._onTouchMove),r(q,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,50)):(n&&(n.effectAllowed="move",i.setData&&i.setData.call(this,n,x)),r(q,"drop",this),setTimeout(this._dragStarted,0))},_onDragOver:function(i){var o,r,s,a,c=this.el,u=this.options,p=u.group,m=e.active,g=P===p,v=u.sort
if(void 0!==i.preventDefault&&(i.preventDefault(),!u.dragoverBubble&&i.stopPropagation()),H=!0,P&&!u.disabled&&(g?v||(a=!D.contains(x)):j===this||P.checkPull(this,m,x,i)&&p.checkPut(this,m,x,i))&&(void 0===i.rootEl||i.rootEl===this.el)){if(ee(i,u,this.el),Y)return
if(o=n(i.target,u.draggable,c),r=x.getBoundingClientRect(),j=this,a)return t(!0),C=D,void(S||_?D.insertBefore(x,S||_):v||D.appendChild(x))
if(0===c.children.length||c.children[0]===T||c===i.target&&(o=h(c,i))){if(o){if(o.animated)return
s=o.getBoundingClientRect()}t(g),d(D,c,x,r,o,s,i)!==!1&&(x.contains(c)||(c.appendChild(x),C=c),this._animate(r,x),o&&this._animate(s,o))}else if(o&&!o.animated&&o!==x&&void 0!==o.parentNode[B]){I!==o&&(I=o,$=l(o),F=l(o.parentNode)),s=o.getBoundingClientRect()
var y,b=s.right-s.left,w=s.bottom-s.top,k=/left|right|inline/.test($.cssFloat+$.display)||"flex"==F.display&&0===F["flex-direction"].indexOf("row"),E=o.offsetWidth>x.offsetWidth,A=o.offsetHeight>x.offsetHeight,N=(k?(i.clientX-s.left)/b:(i.clientY-s.top)/w)>.5,L=o.nextElementSibling,O=d(D,c,x,r,o,s,i)
if(O!==!1){if(Y=!0,setTimeout(f,30),t(g),1===O||O===-1)y=1===O
else if(k){var R=x.offsetTop,M=o.offsetTop
y=R===M?o.previousElementSibling===x&&!E||N&&E:o.previousElementSibling===x||x.previousElementSibling===o?(i.clientY-s.top)/w>.5:M>R}else y=L!==x&&!A||N&&A
x.contains(c)||(y&&!L?c.appendChild(x):o.parentNode.insertBefore(x,y?L:o)),C=x.parentNode,this._animate(r,x),this._animate(s,o)}}}},_animate:function(e,t){var n=this.options.animation
if(n){var i=t.getBoundingClientRect()
l(t,"transition","none"),l(t,"transform","translate3d("+(e.left-i.left)+"px,"+(e.top-i.top)+"px,0)"),t.offsetWidth,l(t,"transition","all "+n+"ms"),l(t,"transform","translate3d(0,0,0)"),clearTimeout(t.animated),t.animated=setTimeout(function(){l(t,"transition",""),l(t,"transform",""),t.animated=!1},n)}},_offUpEvents:function(){var e=this.el.ownerDocument
s(q,"touchmove",this._onTouchMove),s(q,"pointermove",this._onTouchMove),s(e,"mouseup",this._onDrop),s(e,"touchend",this._onDrop),s(e,"pointerup",this._onDrop),s(e,"touchcancel",this._onDrop)},_onDrop:function(t){var n=this.el,i=this.options
clearInterval(this._loopId),clearInterval(M.pid),clearTimeout(this._dragStartTimer),s(q,"mousemove",this._onTouchMove),this.nativeDraggable&&(s(q,"drop",this),s(n,"dragstart",this._onDragStart)),this._offUpEvents(),t&&(H&&(t.preventDefault(),!i.dropBubble&&t.stopPropagation()),T&&T.parentNode.removeChild(T),x&&(this.nativeDraggable&&s(x,"dragend",this),p(x),x.style["will-change"]="",a(x,this.options.ghostClass,!1),a(x,this.options.chosenClass,!1),D!==C?(L=g(x,i.draggable),L>=0&&(u(null,C,"add",x,D,N,L),u(this,D,"remove",x,D,N,L),u(null,C,"sort",x,D,N,L),u(this,D,"sort",x,D,N,L))):(S&&S.parentNode.removeChild(S),x.nextSibling!==_&&(L=g(x,i.draggable),L>=0&&(u(this,D,"update",x,D,N,L),u(this,D,"sort",x,D,N,L)))),e.active&&(null!=L&&L!==-1||(L=N),u(this,D,"end",x,D,N,L),this.save()))),this._nulling()},_nulling:function(){D=x=C=T=_=S=k=E=O=R=H=L=I=$=j=P=e.active=null},handleEvent:function(e){var t=e.type
"dragover"===t||"dragenter"===t?x&&(this._onDragOver(e),o(e)):"drop"!==t&&"dragend"!==t||this._onDrop(e)},toArray:function(){for(var e,t=[],i=this.el.children,o=0,r=i.length,s=this.options;o<r;o++)e=i[o],n(e,s.draggable,this.el)&&t.push(e.getAttribute(s.dataIdAttr)||m(e))
return t},sort:function(e){var t={},i=this.el
this.toArray().forEach(function(e,o){var r=i.children[o]
n(r,this.options.draggable,i)&&(t[e]=r)},this),e.forEach(function(e){t[e]&&(i.removeChild(t[e]),i.appendChild(t[e]))})},save:function(){var e=this.options.store
e&&e.set(this)},closest:function(e,t){return n(e,t||this.options.draggable,this.el)},option:function(e,t){var n=this.options
return void 0===t?n[e]:(n[e]=t,void("group"===e&&te(n)))},destroy:function(){var e=this.el
e[B]=null,s(e,"mousedown",this._onTapStart),s(e,"touchstart",this._onTapStart),s(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(s(e,"dragover",this),s(e,"dragenter",this)),Array.prototype.forEach.call(e.querySelectorAll("[draggable]"),function(e){e.removeAttribute("draggable")}),Z.splice(Z.indexOf(this._onDragOver),1),this._onDrop(),this.el=e=null}},e.utils={on:r,off:s,css:l,find:c,is:function(e,t){return!!n(e,t,e)},extend:b,throttle:y,closest:n,toggleClass:a,clone:w,index:g},e.create=function(t,n){return new e(t,n)},e.version="1.5.0-rc1",e}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery||window.Zepto)}(function(e){var t,n,i,o,r,s,a="Close",l="BeforeClose",c="AfterClose",u="BeforeAppend",d="MarkupParse",p="Open",f="Change",h="mfp",m="."+h,g="mfp-ready",v="mfp-removing",y="mfp-prevent-close",b=function(){},w=!!window.jQuery,x=e(window),C=function(e,n){t.ev.on(h+e+m,n)},T=function(t,n,i,o){var r=document.createElement("div")
return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},S=function(n,i){t.ev.triggerHandler(h+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},D=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new b,t.init(),e.magnificPopup.instance=t)},k=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"]
if(void 0!==e.transition)return!0
for(;t.length;)if(t.pop()+"Transition"in e)return!0
return!1}
b.prototype={constructor:b,init:function(){var n=navigator.appVersion
t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=k(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o
if(n.isObj===!1){t.items=n.items.toArray(),t.index=0
var s,a=n.items
for(o=0;o<a.length;o++)if(s=a[o],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=o
break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0
if(t.isOpen)return void t.updateItemHTML()
t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=T("bg").on("click"+m,function(){t.close()}),t.wrap=T("wrap").attr("tabindex",-1).on("click"+m,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=T("container",t.wrap)),t.contentContainer=T("content"),t.st.preloader&&(t.preloader=T("preloader",t.container,t.st.tLoading))
var l=e.magnificPopup.modules
for(o=0;o<l.length;o++){var c=l[o]
c=c.charAt(0).toUpperCase()+c.slice(1),t["init"+c].call(t)}S("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(C(d,function(e,t,n,i){n.close_replaceWith=D(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(D())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:x.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup"+m,function(e){27===e.keyCode&&t.close()}),x.on("resize"+m,function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r)
var u=t.wH=x.height(),f={}
if(t.fixedContentPos&&t._hasScrollBar(u)){var h=t._getScrollbarSize()
h&&(f.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):f.overflow="hidden")
var v=t.st.mainClass
return t.isIE7&&(v+=" mfp-ie7"),v&&t._addClassToMFP(v),t.updateItemHTML(),S("BuildControls"),e("html").css(f),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(g),t._setFocus()):t.bgOverlay.addClass(g),i.on("focusin"+m,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),S(p),n},close:function(){t.isOpen&&(S(l),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(v),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){S(a)
var n=v+" "+g+" "
if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""}
t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup"+m+" focusin"+m),t.ev.off(m),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,S(c)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n
t.wrap.css("height",i),t.wH=i}else t.wH=e||x.height()
t.fixedContentPos||t.wrap.css("height",t.wH),S("Resize")},updateItemHTML:function(){var n=t.items[t.index]
t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index))
var i=n.type
if(S("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=!!t.st[i]&&t.st[i].markup
S("FirstMarkupParse",r),r?t.currTemplate[i]=e(r):t.currTemplate[i]=!0}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder")
var s=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i])
t.appendContent(s,i),n.preloaded=!0,S(f,n),o=n.type,t.container.prepend(t.contentContainer),S("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(D()):t.content=e:t.content="",S(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n]
if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,s=0;s<r.length;s++)if(o.el.hasClass("mfp-"+r[s])){i=r[s]
break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,S("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)}
n||(n={})
var o="click.magnificPopup"
n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick
if(r||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var s=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn
if(s)if(e.isFunction(s)){if(!s.call(t))return!0}else if(x.width()<s)return!0
n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading)
var o={status:e,text:i}
S("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick
if(i&&o)return!0
if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0
if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0
return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||x.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,i){var o
i.data&&(n=e.extend(i.data,n)),S(d,[t,n,i]),e.each(n,function(n,i){if(void 0===i||i===!1)return!0
if(o=n.split("_"),o.length>1){var r=t.find(m+"-"+o[0])
if(r.length>0){var s=o[1]
"replaceWith"===s?r[0]!==i[0]&&r.replaceWith(i):"img"===s?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(m+"-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div")
e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:b.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){_()
var i=e(this)
if("string"==typeof n)if("open"===n){var o,r=w?i.data("magnificPopup"):i[0].magnificPopup,s=parseInt(arguments[1],10)||0
r.items?o=r.items[s]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(s)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1))
else n=e.extend(!0,{},n),w?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n)
return i}
var E,A,I,$="inline",F=function(){I&&(A.after(I.addClass(E)).detach(),I=null)}
e.magnificPopup.registerModule($,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push($),C(a+"."+$,function(){F()})},getInline:function(n,i){if(F(),n.src){var o=t.st.inline,r=e(n.src)
if(r.length){var s=r[0].parentNode
s&&s.tagName&&(A||(E=o.hiddenClass,A=T(E),E="mfp-"+E),I=r.after(A).detach().removeClass(E)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>")
return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}})
var N,L="ajax",P=function(){N&&e(document.body).removeClass(N)},j=function(){P(),t.req&&t.req.abort()}
e.magnificPopup.registerModule(L,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(L),N=t.st.ajax.cursor,C(a+"."+L,j),C("BeforeChange."+L,j)},getAjax:function(n){N&&e(document.body).addClass(N),t.updateStatus("loading")
var i=e.extend({url:n.src,success:function(i,o,r){var s={data:i,xhr:r}
S("ParseAjax",s),t.appendContent(e(s.data),L),n.finished=!0,P(),t._setFocus(),setTimeout(function(){t.wrap.addClass(g)},16),t.updateStatus("ready"),S("AjaxContentAdded")},error:function(){P(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings)
return t.req=e.ajax(i),""}}})
var O,R=function(n){if(n.data&&void 0!==n.data.title)return n.data.title
var i=t.st.image.titleSrc
if(i){if(e.isFunction(i))return i.call(t,n)
if(n.el)return n.el.attr(i)||""}return""}
e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image"
t.types.push("image"),C(p+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),C(a+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),x.off("resize"+m)}),C("Resize"+i,t.resizeImage),t.isLowIE&&C("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem
if(e&&e.img&&t.st.image.verticalFit){var n=0
t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,O&&clearInterval(O),e.isCheckingImgSize=!1,S("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){O&&clearInterval(O),O=setInterval(function(){return i.naturalWidth>0?void t._onImageHasSize(e):(n>200&&clearInterval(O),n++,void(3===n?o(10):40===n?o(50):100===n&&o(500)))},r)}
o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,S("ImageLoadComplete")):(o++,o<200?setTimeout(r,100):s()))},s=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",a.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},a=t.st.image,l=i.find(".mfp-img")
if(l.length){var c=document.createElement("img")
c.className="mfp-img",n.el&&n.el.find("img").length&&(c.alt=n.el.find("img").attr("alt")),n.img=e(c).on("load.mfploader",r).on("error.mfploader",s),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:R(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(O&&clearInterval(O),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",a.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}})
var H,M=function(){return void 0===H&&(H=void 0!==document.createElement("p").style.MozTransform),H}
e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom"
if(n.enabled&&t.supportsTransition){var o,r,s=n.duration,c=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition"
return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},u=function(){t.content.css("visibility","visible")}
C("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return void u()
r=c(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){u(),setTimeout(function(){r.remove(),e=r=null,S("ZoomAnimationEnded")},16)},s)},16)}}),C(l+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=s,!e){if(e=t._getItemToZoom(),!e)return
r=c(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),C(a+i,function(){t._allowZoom()&&(u(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i
i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)
var o=i.offset(),r=parseInt(i.css("padding-top"),10),s=parseInt(i.css("padding-bottom"),10)
o.top-=e(window).scrollTop()-r
var a={width:i.width(),height:(w?i.innerHeight():i[0].offsetHeight)-s-r}
return M()?a["-moz-transform"]=a.transform="translate("+o.left+"px,"+o.top+"px)":(a.left=o.left,a.top=o.top),a}}})
var z="iframe",B="//about:blank",W=function(e){if(t.currTemplate[z]){var n=t.currTemplate[z].find("iframe")
n.length&&(e||(n[0].src=B),t.isIE8&&n.css("display",e?"block":"none"))}}
e.magnificPopup.registerModule(z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(z),C("BeforeChange",function(e,t,n){t!==n&&(t===z?W():n===z&&W(!0))}),C(a+"."+z,function(){W()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe
e.each(r.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1})
var s={}
return r.srcAction&&(s[r.srcAction]=o),t._parseMarkup(i,s,n),t.updateStatus("ready"),i}}})
var q=function(e){var n=t.items.length
return e>n-1?e-n:e<0?n+e:e},U=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)}
e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery"
return t.direction=!0,!(!n||!n.enabled)&&(r+=" mfp-gallery",C(p+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),C("UpdateStatus"+o,function(e,n){n.text&&(n.text=U(n.text,t.currItem.index,t.items.length))}),C(d+o,function(e,i,o,r){var s=t.items.length
o.counter=s>1?U(n.tCounter,r.index,s):""}),C("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y)
o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),C(f+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),void C(a+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null}))},next:function(){t.direction=!0,t.index=q(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=q(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length)
for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e)
for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=q(n),!t.items[n].preloaded){var i=t.items[n]
i.parsed||(i=t.parseEl(n)),S("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,S("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}})
var X="retina"
e.magnificPopup.registerModule(X,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio
n=isNaN(n)?n():n,n>1&&(C("ImageHasSize."+X,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),C("ElementParse."+X,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),_()}),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery")):"function"==typeof define&&define.amd?define("pnotify",["jquery"],e):e(jQuery)}(function(e){var t,n,i={dir1:"down",dir2:"left",push:"bottom",spacing1:25,spacing2:25,context:e("body")},o=e(window),r=function(){n=e("body"),PNotify.prototype.options.stack.context=n,o=e(window),o.bind("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){PNotify.positionAll(!0)},10)})}
return PNotify=function(e){this.parseOptions(e),this.init()},e.extend(PNotify.prototype,{version:"2.1.0",options:{title:!1,title_escape:!1,text:!1,text_escape:!1,styling:"brighttheme",addclass:"",cornerclass:"",auto_display:!0,width:"300px",min_height:"16px",type:"notice",icon:!0,opacity:1,animation:"fade",animate_speed:"slow",position_animate_speed:500,shadow:!0,hide:!0,delay:8e3,mouse_reset:!0,remove:!0,insert_brs:!0,destroy:!0,stack:i},modules:{},runModules:function(e,t){var n,i
for(i in this.modules)n="object"==typeof t&&i in t?t[i]:t,"function"==typeof this.modules[i][e]&&this.modules[i][e](this,"object"==typeof this.options[i]?this.options[i]:{},n)},state:"initializing",timer:null,styles:null,elem:null,container:null,title_container:null,text_container:null,animating:!1,timerHide:!1,init:function(){var t=this
return this.modules={},e.extend(!0,this.modules,PNotify.prototype.modules),this.styles="object"==typeof this.options.styling?this.options.styling:PNotify.styling[this.options.styling],this.elem=e("<div />",{class:"ui-pnotify "+this.options.addclass,css:{display:"none"},"aria-live":"assertive",mouseenter:function(e){if(t.options.mouse_reset&&"out"===t.animating){if(!t.timerHide)return
t.cancelRemove()}t.options.hide&&t.options.mouse_reset&&t.cancelRemove()},mouseleave:function(e){t.options.hide&&t.options.mouse_reset&&"out"!==t.animating&&t.queueRemove(),PNotify.positionAll()}}),this.container=e("<div />",{class:this.styles.container+" ui-pnotify-container "+("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),role:"alert"}).appendTo(this.elem),""!==this.options.cornerclass&&this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass),this.options.shadow&&this.container.addClass("ui-pnotify-shadow"),!1!==this.options.icon&&e("<div />",{class:"ui-pnotify-icon"}).append(e("<span />",{class:!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container),this.title_container=e("<h4 />",{class:"ui-pnotify-title"}).appendTo(this.container),!1===this.options.title?this.title_container.hide():this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),this.text_container=e("<div />",{class:"ui-pnotify-text"}).appendTo(this.container),!1===this.options.text?this.text_container.hide():this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),"string"==typeof this.options.width&&this.elem.css("width",this.options.width),"string"==typeof this.options.min_height&&this.container.css("min-height",this.options.min_height),PNotify.notices="top"===this.options.stack.push?e.merge([this],PNotify.notices):e.merge(PNotify.notices,[this]),"top"===this.options.stack.push&&this.queuePosition(!1,1),this.options.stack.animation=!1,this.runModules("init"),this.options.auto_display&&this.open(),this},update:function(t){var n=this.options
return this.parseOptions(n,t),this.options.cornerclass!==n.cornerclass&&this.container.removeClass("ui-corner-all "+n.cornerclass).addClass(this.options.cornerclass),this.options.shadow!==n.shadow&&(this.options.shadow?this.container.addClass("ui-pnotify-shadow"):this.container.removeClass("ui-pnotify-shadow")),!1===this.options.addclass?this.elem.removeClass(n.addclass):this.options.addclass!==n.addclass&&this.elem.removeClass(n.addclass).addClass(this.options.addclass),!1===this.options.title?this.title_container.slideUp("fast"):this.options.title!==n.title&&(this.options.title_escape?this.title_container.text(this.options.title):this.title_container.html(this.options.title),!1===n.title&&this.title_container.slideDown(200)),!1===this.options.text?this.text_container.slideUp("fast"):this.options.text!==n.text&&(this.options.text_escape?this.text_container.text(this.options.text):this.text_container.html(this.options.insert_brs?String(this.options.text).replace(/\n/g,"<br />"):this.options.text),!1===n.text&&this.text_container.slideDown(200)),this.options.type!==n.type&&this.container.removeClass(this.styles.error+" "+this.styles.notice+" "+this.styles.success+" "+this.styles.info).addClass("error"===this.options.type?this.styles.error:"info"===this.options.type?this.styles.info:"success"===this.options.type?this.styles.success:this.styles.notice),(this.options.icon!==n.icon||!0===this.options.icon&&this.options.type!==n.type)&&(this.container.find("div.ui-pnotify-icon").remove(),!1!==this.options.icon&&e("<div />",{class:"ui-pnotify-icon"}).append(e("<span />",{class:!0===this.options.icon?"error"===this.options.type?this.styles.error_icon:"info"===this.options.type?this.styles.info_icon:"success"===this.options.type?this.styles.success_icon:this.styles.notice_icon:this.options.icon})).prependTo(this.container)),this.options.width!==n.width&&this.elem.animate({width:this.options.width}),this.options.min_height!==n.min_height&&this.container.animate({minHeight:this.options.min_height}),this.options.opacity!==n.opacity&&this.elem.fadeTo(this.options.animate_speed,this.options.opacity),this.options.hide?n.hide||this.queueRemove():this.cancelRemove(),this.queuePosition(!0),this.runModules("update",n),this},open:function(){this.state="opening",this.runModules("beforeOpen")
var e=this
return this.elem.parent().length||this.elem.appendTo(this.options.stack.context?this.options.stack.context:n),"top"!==this.options.stack.push&&this.position(!0),"fade"===this.options.animation||"fade"===this.options.animation.effect_in?this.elem.show().fadeTo(0,0).hide():1!==this.options.opacity&&this.elem.show().fadeTo(0,this.options.opacity).hide(),this.animateIn(function(){e.queuePosition(!0),e.options.hide&&e.queueRemove(),e.state="open",e.runModules("afterOpen")}),this},remove:function(t){this.state="closing",this.timerHide=!!t,this.runModules("beforeClose")
var n=this
return this.timer&&(window.clearTimeout(this.timer),this.timer=null),this.animateOut(function(){if(n.state="closed",n.runModules("afterClose"),n.queuePosition(!0),n.options.remove&&n.elem.detach(),n.runModules("beforeDestroy"),n.options.destroy&&null!==PNotify.notices){var t=e.inArray(n,PNotify.notices);-1!==t&&PNotify.notices.splice(t,1)}n.runModules("afterDestroy")}),this},get:function(){return this.elem},parseOptions:function(t,n){this.options=e.extend(!0,{},PNotify.prototype.options),this.options.stack=PNotify.prototype.options.stack
for(var i,o=[t,n],r=0;r<o.length&&(i=o[r],"undefined"!=typeof i);r++)if("object"!=typeof i)this.options.text=i
else for(var s in i)this.modules[s]?e.extend(!0,this.options[s],i[s]):this.options[s]=i[s]},animateIn:function(e){this.animating="in"
var t
t="undefined"!=typeof this.options.animation.effect_in?this.options.animation.effect_in:this.options.animation,"none"===t?(this.elem.show(),e()):"show"===t?this.elem.show(this.options.animate_speed,e):"fade"===t?this.elem.show().fadeTo(this.options.animate_speed,this.options.opacity,e):"slide"===t?this.elem.slideDown(this.options.animate_speed,e):"function"==typeof t?t("in",e,this.elem):this.elem.show(t,"object"==typeof this.options.animation.options_in?this.options.animation.options_in:{},this.options.animate_speed,e),this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"}),"slide"!==t&&this.elem.css("overflow","visible"),this.container.css("overflow","hidden")},animateOut:function(e){this.animating="out"
var t
t="undefined"!=typeof this.options.animation.effect_out?this.options.animation.effect_out:this.options.animation,"none"===t?(this.elem.hide(),e()):"show"===t?this.elem.hide(this.options.animate_speed,e):"fade"===t?this.elem.fadeOut(this.options.animate_speed,e):"slide"===t?this.elem.slideUp(this.options.animate_speed,e):"function"==typeof t?t("out",e,this.elem):this.elem.hide(t,"object"==typeof this.options.animation.options_out?this.options.animation.options_out:{},this.options.animate_speed,e),this.elem.parent().hasClass("ui-effects-wrapper")&&this.elem.parent().css({position:"fixed",overflow:"visible"}),"slide"!==t&&this.elem.css("overflow","visible"),this.container.css("overflow","hidden")},position:function(e){var t=this.options.stack,i=this.elem
if(i.parent().hasClass("ui-effects-wrapper")&&(i=this.elem.css({left:"0",top:"0",right:"0",bottom:"0"}).parent()),"undefined"==typeof t.context&&(t.context=n),t){"number"!=typeof t.nextpos1&&(t.nextpos1=t.firstpos1),"number"!=typeof t.nextpos2&&(t.nextpos2=t.firstpos2),"number"!=typeof t.addpos2&&(t.addpos2=0)
var r="none"===i.css("display")
if(!r||e){var s,a,l={}
switch(t.dir1){case"down":a="top"
break
case"up":a="bottom"
break
case"left":a="right"
break
case"right":a="left"}e=parseInt(i.css(a).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(e)&&(e=0),"undefined"!=typeof t.firstpos1||r||(t.firstpos1=e,t.nextpos1=t.firstpos1)
var c
switch(t.dir2){case"down":c="top"
break
case"up":c="bottom"
break
case"left":c="right"
break
case"right":c="left"}if(s=parseInt(i.css(c).replace(/(?:\..*|[^0-9.])/g,"")),isNaN(s)&&(s=0),"undefined"!=typeof t.firstpos2||r||(t.firstpos2=s,t.nextpos2=t.firstpos2),("down"===t.dir1&&t.nextpos1+i.height()>(t.context.is(n)?o.height():t.context.prop("scrollHeight"))||"up"===t.dir1&&t.nextpos1+i.height()>(t.context.is(n)?o.height():t.context.prop("scrollHeight"))||"left"===t.dir1&&t.nextpos1+i.width()>(t.context.is(n)?o.width():t.context.prop("scrollWidth"))||"right"===t.dir1&&t.nextpos1+i.width()>(t.context.is(n)?o.width():t.context.prop("scrollWidth")))&&(t.nextpos1=t.firstpos1,t.nextpos2+=t.addpos2+("undefined"==typeof t.spacing2?25:t.spacing2),t.addpos2=0),t.animation&&t.nextpos2<s)switch(t.dir2){case"down":l.top=t.nextpos2+"px"
break
case"up":l.bottom=t.nextpos2+"px"
break
case"left":l.right=t.nextpos2+"px"
break
case"right":l.left=t.nextpos2+"px"}else"number"==typeof t.nextpos2&&i.css(c,t.nextpos2+"px")
switch(t.dir2){case"down":case"up":i.outerHeight(!0)>t.addpos2&&(t.addpos2=i.height())
break
case"left":case"right":i.outerWidth(!0)>t.addpos2&&(t.addpos2=i.width())}if("number"==typeof t.nextpos1)if(t.animation&&(e>t.nextpos1||l.top||l.bottom||l.right||l.left))switch(t.dir1){case"down":l.top=t.nextpos1+"px"
break
case"up":l.bottom=t.nextpos1+"px"
break
case"left":l.right=t.nextpos1+"px"
break
case"right":l.left=t.nextpos1+"px"}else i.css(a,t.nextpos1+"px")
switch((l.top||l.bottom||l.right||l.left)&&i.animate(l,{duration:this.options.position_animate_speed,queue:!1}),t.dir1){case"down":case"up":t.nextpos1+=i.height()+("undefined"==typeof t.spacing1?25:t.spacing1)
break
case"left":case"right":t.nextpos1+=i.width()+("undefined"==typeof t.spacing1?25:t.spacing1)}}return this}},queuePosition:function(e,n){return t&&clearTimeout(t),n||(n=10),t=setTimeout(function(){PNotify.positionAll(e)},n),this},cancelRemove:function(){return this.timer&&window.clearTimeout(this.timer),"closing"===this.state&&(this.elem.stop(!0),this.state="open",this.animating="in",this.elem.css("height","auto").animate({width:this.options.width,opacity:this.options.opacity},"fast")),this},queueRemove:function(){var e=this
return this.cancelRemove(),this.timer=window.setTimeout(function(){e.remove(!0)},isNaN(this.options.delay)?0:this.options.delay),this}}),e.extend(PNotify,{notices:[],removeAll:function(){e.each(PNotify.notices,function(){this.remove&&this.remove(!1)})},positionAll:function(n){if(t&&clearTimeout(t),t=null,PNotify.notices&&PNotify.notices.length)e.each(PNotify.notices,function(){var e=this.options.stack
e&&(e.nextpos1=e.firstpos1,e.nextpos2=e.firstpos2,e.addpos2=0,e.animation=n)}),e.each(PNotify.notices,function(){this.position()})
else{var i=PNotify.prototype.options.stack
i&&(delete i.nextpos1,delete i.nextpos2)}},styling:{brighttheme:{container:"brighttheme",notice:"brighttheme-notice",notice_icon:"brighttheme-icon-notice",info:"brighttheme-info",info_icon:"brighttheme-icon-info",success:"brighttheme-success",success_icon:"brighttheme-icon-success",error:"brighttheme-error",error_icon:"brighttheme-icon-error"},jqueryui:{container:"ui-widget ui-widget-content ui-corner-all",notice:"ui-state-highlight",notice_icon:"ui-icon ui-icon-info",info:"",info_icon:"ui-icon ui-icon-info",success:"ui-state-default",success_icon:"ui-icon ui-icon-circle-check",error:"ui-state-error",error_icon:"ui-icon ui-icon-alert"},bootstrap2:{container:"alert",notice:"",notice_icon:"icon-exclamation-sign",info:"alert-info",info_icon:"icon-info-sign",success:"alert-success",success_icon:"icon-ok-sign",error:"alert-error",error_icon:"icon-warning-sign"},bootstrap3:{container:"alert",notice:"alert-warning",notice_icon:"glyphicon glyphicon-exclamation-sign",info:"alert-info",info_icon:"glyphicon glyphicon-info-sign",success:"alert-success",success_icon:"glyphicon glyphicon-ok-sign",error:"alert-danger",error_icon:"glyphicon glyphicon-warning-sign"}}}),PNotify.styling.fontawesome=e.extend({},PNotify.styling.bootstrap3),e.extend(PNotify.styling.fontawesome,{notice_icon:"fa fa-exclamation-circle",info_icon:"fa fa-info",success_icon:"fa fa-check",error_icon:"fa fa-warning"}),document.body?r():e(r),PNotify}),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("pnotify")):"function"==typeof define&&define.amd?define("pnotify.buttons",["jquery","pnotify"],e):e(jQuery,PNotify)}(function(e,t){t.prototype.options.buttons={closer:!0,closer_hover:!0,sticker:!0,sticker_hover:!0,show_on_nonblock:!1,labels:{close:"Close",stick:"Stick"}},t.prototype.modules.buttons={myOptions:null,closer:null,sticker:null,init:function(t,n){var i=this
this.myOptions=n,t.elem.on({mouseenter:function(e){!i.myOptions.sticker||t.options.nonblock&&t.options.nonblock.nonblock&&!i.myOptions.show_on_nonblock||i.sticker.trigger("pnotify_icon").css("visibility","visible"),!i.myOptions.closer||t.options.nonblock&&t.options.nonblock.nonblock&&!i.myOptions.show_on_nonblock||i.closer.css("visibility","visible")},mouseleave:function(e){i.myOptions.sticker_hover&&i.sticker.css("visibility","hidden"),i.myOptions.closer_hover&&i.closer.css("visibility","hidden")}}),this.sticker=e("<div />",{class:"ui-pnotify-sticker",css:{cursor:"pointer",visibility:n.sticker_hover?"hidden":"visible"},click:function(){t.options.hide=!t.options.hide,t.options.hide?t.queueRemove():t.cancelRemove(),e(this).trigger("pnotify_icon")}}).bind("pnotify_icon",function(){e(this).children().removeClass(t.styles.pin_up+" "+t.styles.pin_down).addClass(t.options.hide?t.styles.pin_up:t.styles.pin_down)}).append(e("<span />",{class:t.styles.pin_up,title:n.labels.stick})).prependTo(t.container),(!n.sticker||t.options.nonblock&&t.options.nonblock.nonblock&&!n.show_on_nonblock)&&this.sticker.css("display","none"),this.closer=e("<div />",{class:"ui-pnotify-closer",css:{cursor:"pointer",visibility:n.closer_hover?"hidden":"visible"},click:function(){t.remove(!1),i.sticker.css("visibility","hidden"),i.closer.css("visibility","hidden")}}).append(e("<span />",{class:t.styles.closer,title:n.labels.close})).prependTo(t.container),(!n.closer||t.options.nonblock&&t.options.nonblock.nonblock&&!n.show_on_nonblock)&&this.closer.css("display","none")},update:function(e,t){this.myOptions=t,!t.closer||e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock?this.closer.css("display","none"):t.closer&&this.closer.css("display","block"),!t.sticker||e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock?this.sticker.css("display","none"):t.sticker&&this.sticker.css("display","block"),this.sticker.trigger("pnotify_icon"),t.sticker_hover?this.sticker.css("visibility","hidden"):e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock||this.sticker.css("visibility","visible"),t.closer_hover?this.closer.css("visibility","hidden"):e.options.nonblock&&e.options.nonblock.nonblock&&!t.show_on_nonblock||this.closer.css("visibility","visible")}},e.extend(t.styling.brighttheme,{closer:"brighttheme-icon-closer",pin_up:"brighttheme-icon-sticker",pin_down:"brighttheme-icon-sticker brighttheme-icon-stuck"}),e.extend(t.styling.jqueryui,{closer:"ui-icon ui-icon-close",pin_up:"ui-icon ui-icon-pin-w",pin_down:"ui-icon ui-icon-pin-s"}),e.extend(t.styling.bootstrap2,{closer:"icon-remove",pin_up:"icon-pause",pin_down:"icon-play"}),e.extend(t.styling.bootstrap3,{closer:"glyphicon glyphicon-remove",pin_up:"glyphicon glyphicon-pause",pin_down:"glyphicon glyphicon-play"}),e.extend(t.styling.fontawesome,{closer:"fa fa-times",pin_up:"fa fa-pause",pin_down:"fa fa-play"})}),function(e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("jquery"),require("pnotify")):"function"==typeof define&&define.amd?define("pnotify.desktop",["jquery","pnotify"],e):e(jQuery,PNotify)}(function(e,t){var n,i=function(e,t){return(i="Notification"in window?function(e,t){return new Notification(e,t)}:"mozNotification"in navigator?function(e,t){return navigator.mozNotification.createNotification(e,t.body,t.icon).show()}:"webkitNotifications"in window?function(e,t){return window.webkitNotifications.createNotification(t.icon,e,t.body)}:function(e,t){return null})(e,t)}
t.prototype.options.desktop={desktop:!1,fallback:!0,icon:null,tag:null},t.prototype.modules.desktop={tag:null,icon:null,genNotice:function(e,t){this.icon=null===t.icon?"http://sciactive.com/pnotify/includes/desktop/"+e.options.type+".png":!1===t.icon?null:t.icon,null!==this.tag&&null===t.tag||(this.tag=null===t.tag?"PNotify-"+Math.round(1e6*Math.random()):t.tag),e.desktop=i(e.options.title,{icon:this.icon,body:e.options.text,tag:this.tag}),!("close"in e.desktop)&&"cancel"in e.desktop&&(e.desktop.close=function(){e.desktop.cancel()}),e.desktop.onclick=function(){e.elem.trigger("click")},e.desktop.onclose=function(){"closing"!==e.state&&"closed"!==e.state&&e.remove()}},init:function(e,i){i.desktop&&(n=t.desktop.checkPermission(),0!==n?i.fallback||(e.options.auto_display=!1):this.genNotice(e,i))},update:function(e,t,i){0!==n&&t.fallback||!t.desktop||this.genNotice(e,t)},beforeOpen:function(e,t){0!==n&&t.fallback||!t.desktop||e.elem.css({left:"-10000px",display:"none"})},afterOpen:function(e,t){0!==n&&t.fallback||!t.desktop||(e.elem.css({left:"-10000px",display:"none"}),"show"in e.desktop&&e.desktop.show())},beforeClose:function(e,t){0!==n&&t.fallback||!t.desktop||e.elem.css({left:"-10000px",display:"none"})},afterClose:function(e,t){0!==n&&t.fallback||!t.desktop||(e.elem.css({left:"-10000px",display:"none"}),"close"in e.desktop&&e.desktop.close())}},t.desktop={permission:function(){"undefined"!=typeof Notification&&"requestPermission"in Notification?Notification.requestPermission():"webkitNotifications"in window&&window.webkitNotifications.requestPermission()},checkPermission:function(){return"undefined"!=typeof Notification&&"permission"in Notification?"granted"===Notification.permission?0:1:"webkitNotifications"in window&&0==window.webkitNotifications.checkPermission()?0:1}},n=t.desktop.checkPermission()}),"undefined"==typeof jQuery)throw new Error("AdminLTE requires jQuery")
$.AdminLTE={},$.AdminLTE.options={navbarMenuSlimscroll:!0,navbarMenuSlimscrollWidth:"3px",navbarMenuHeight:"200px",animationSpeed:500,sidebarToggleSelector:"[data-toggle='offcanvas']",sidebarPushMenu:!0,sidebarSlimScroll:!0,sidebarExpandOnHover:!1,enableBoxRefresh:!0,enableBSToppltip:!0,BSTooltipSelector:"[data-toggle='tooltip']",enableFastclick:!0,enableControlSidebar:!0,controlSidebarOptions:{toggleBtnSelector:"[data-toggle='control-sidebar']",selector:".control-sidebar",slide:!0},enableBoxWidget:!0,boxWidgetOptions:{boxWidgetIcons:{collapse:"fa-minus",open:"fa-plus",remove:"fa-times"},boxWidgetSelectors:{remove:'[data-widget="remove"]',collapse:'[data-widget="collapse"]'}},directChat:{enable:!0,contactToggleSelector:'[data-widget="chat-pane-toggle"]'},colors:{lightBlue:"#3c8dbc",red:"#f56954",green:"#00a65a",aqua:"#00c0ef",yellow:"#f39c12",blue:"#0073b7",navy:"#001F3F",teal:"#39CCCC",olive:"#3D9970",lime:"#01FF70",orange:"#FF851B",fuchsia:"#F012BE",purple:"#8E24AA",maroon:"#D81B60",black:"#222222",gray:"#d2d6de"},screenSizes:{xs:480,sm:768,md:992,lg:1200}},$(function(){"use strict"
$("body").removeClass("hold-transition"),"undefined"!=typeof AdminLTEOptions&&$.extend(!0,$.AdminLTE.options,AdminLTEOptions)
var e=$.AdminLTE.options
_init(),$.AdminLTE.layout.activate(),$.AdminLTE.tree(".sidebar"),e.enableControlSidebar&&$.AdminLTE.controlSidebar.activate(),e.navbarMenuSlimscroll&&"undefined"!=typeof $.fn.slimscroll&&$(".navbar .menu").slimscroll({height:e.navbarMenuHeight,alwaysVisible:!1,size:e.navbarMenuSlimscrollWidth}).css("width","100%"),e.sidebarPushMenu&&$.AdminLTE.pushMenu.activate(e.sidebarToggleSelector),e.enableBSToppltip&&$("body").tooltip({selector:e.BSTooltipSelector}),e.enableBoxWidget&&$.AdminLTE.boxWidget.activate(),e.enableFastclick&&"undefined"!=typeof FastClick&&FastClick.attach(document.body),e.directChat.enable&&$(document).on("click",e.directChat.contactToggleSelector,function(){var e=$(this).parents(".direct-chat").first()
e.toggleClass("direct-chat-contacts-open")}),$('.btn-group[data-toggle="btn-toggle"]').each(function(){var e=$(this)
$(this).find(".btn").on("click",function(t){e.find(".btn.active").removeClass("active"),$(this).addClass("active"),t.preventDefault()})})}),function(e){"use strict"
e.fn.boxRefresh=function(t){function n(e){e.append(r),o.onLoadStart.call(e)}function i(e){e.find(r).remove(),o.onLoadDone.call(e)}var o=e.extend({trigger:".refresh-btn",source:"",onLoadStart:function(e){return e},onLoadDone:function(e){return e}},t),r=e('<div class="overlay"><div class="fa fa-refresh fa-spin"></div></div>')
return this.each(function(){if(""===o.source)return void(window.console&&window.console.log("Please specify a source first - boxRefresh()"))
var t=e(this),r=t.find(o.trigger).first()
r.on("click",function(e){e.preventDefault(),n(t),t.find(".box-body").load(o.source,function(){i(t)})})})}}(jQuery),function(e){"use strict"
e.fn.activateBox=function(){e.AdminLTE.boxWidget.activate(this)}}(jQuery),function(e){"use strict"
e.fn.todolist=function(t){var n=e.extend({onCheck:function(e){return e},onUncheck:function(e){return e}},t)
return this.each(function(){"undefined"!=typeof e.fn.iCheck?(e("input",this).on("ifChecked",function(){var t=e(this).parents("li").first()
t.toggleClass("done"),n.onCheck.call(t)}),e("input",this).on("ifUnchecked",function(){var t=e(this).parents("li").first()
t.toggleClass("done"),n.onUncheck.call(t)})):e("input",this).on("change",function(){var t=e(this).parents("li").first()
t.toggleClass("done"),e("input",t).is(":checked")?n.onCheck.call(t):n.onUncheck.call(t)})})}}(jQuery),$("div#new form").submit(function(e){return $("div#new").modal("hide"),$.ajax({url:pathCreateFolderFilemanager,data:{data:$("div#new input#new-path").attr("data-base")+$("div#new input#new-path").val()},cache:!1,dataType:"json",type:"POST",success:function(e){add_msg(e.msg,"PHP",e.status?"success":"error"),browse(PATH)},error:function(e,t){add_msg(t,"AJAX","error")}}),!1}),$("div#remove a.submit").click(function(e){$.ajax({url:pathDeleteFilemanager,data:{data:$("div#remove input#remove-path").val()},cache:!1,dataType:"json",type:"POST",success:function(e){add_msg(e.msg,"PHP",e.status?"success":"error"),browse(PATH)},error:function(e,t){add_msg(t,"AJAX","error")}})}),$("div#upload").on("hidden.bs.modal",function(e){myDropzone.removeAllFiles(),browse(PATH),$("body").hasClass("modal-open")||$("body").addClass("modal-open")}),$("div#tools a#upload-button").click(function(e){e.preventDefault(),$("div#upload input#upload-path").val(""==PATH?"":PATH+"/"),$("div#upload").modal("show")}),$("div#tools a#new-folder-button").click(function(e){e.preventDefault(),$("div#new input#new-type").val("folder"),$("div#new input#new-path").attr("data-base",""==PATH?"":PATH+"/"),$("div#new").modal("show")}),$("div#new").on("shown.bs.modal",function(e){$("#new-path").focus()}),$("div#new").on("hidden.bs.modal",function(e){$("div#new input#new-path").val(""),$("div#new input#new-path").attr("data-base","")}),$("div#tools a#refresh-button").click(function(e){browse(PATH)}),PNotify.prototype.options.styling="bootstrap3",PNotify.prototype.options.styling="fontawesome",$win=$(window)
var wpos,space
$footer=$("#form-bloque-botones"),$("body").on("click",".help-block a",function(e){e.preventDefault()
var t=$(this).attr("href")
window.open(t,"_blank")}),$("body").loadingIndicator()
var loader=$("body").data("loadingIndicator")
$.ajaxSetup({beforeSend:function(){loader.show()},complete:function(){loader.hide(),load_zoom_img()}}),Dropzone.autoDiscover=!1
var myDropzone=new Dropzone("form#my-awesome-dropzone",{url:url_upload})
CKEDITOR.env.ie&&CKEDITOR.env.version<9&&CKEDITOR.tools.enableHtml5Elements(document),CKEDITOR.config.toolbar=[{name:"document",items:["Source","-","NewPage","Preview","-","Templates"]},["Cut","Copy","Paste","PasteText","PasteFromWord","-","Undo","Redo"],"/",{name:"basicstyles",items:["Bold","Italic","-","Subscript","Superscript","-","RemoveFormat"]},{name:"paragraph",groups:["list","indent","blocks","align","bidi"],items:["NumberedList","BulletedList","-","Outdent","Indent","-","JustifyLeft","JustifyCenter","JustifyRight","JustifyBlock"]},{name:"links",items:["Link","Unlink"]},{name:"insert",items:["Table","Youtube"]}],$(document).on("click",".media-right .eliminar",function(){$(this).parent().parent().remove(),formHasChanged=!0}),$(document).on("change",".box .form-group input, .box .form-group select, .box .form-group textarea",function(e){unsaved=!0}),$(document).on("click","#main-content .collection-add",function(e){e.preventDefault()
var t=$(this).parent().attr("id")
total=$("#field-"+t+" > li.media").length,newWidget=$(this).parent().attr("data-prototype"),newWidget=newWidget.replace(/__opt_prot__/g,total)
var n=$('<li class="media"></li>').attr("id","campo-"+t+"_"+total).append($('<div class="media-body"></div>').html(newWidget)).append($('<div class="media-right"><button class="close eliminar" type="button"><i class="fa fa-trash-o"></i></button><button class="close mover" type="button"><i class="fa fa-arrows"></i></button></div>'))
n.appendTo("#field-"+t),unsaved=!0}),$(document).on("click","#main-content .media .trash",function(){var e=$(this).attr("data-id")
$("#"+e).attr("value",""),$("#t_"+e).find(".fancybox, .trash, .nombre-img").addClass("hide"),formHasChanged=!0}),window.addEventListener("popstate",function(){loadContent("")}),$(document).ready(function(){load_sortable(),loader.hide(),load_zoom_img(),$(document).on("submit","#form-zero",function(){return!1}),$(document).on("submit",".modalnoajax form",function(){return!1}),$(document).on("click",'#FORM_DELETE button[type="submit"]',function(e){if(unsaved=!1,Modernizr.history){var t=$("#FORM_DELETE form").serializeArray()
t.push({name:$(this).attr("name")}),loadContent($("#FORM_DELETE form").attr("action"),t)}$("#FORM_DELETE").modal("hide")}),$(document).on("click",'#form-bloque-botones button[type="submit"]',function(){if(update_collection_order(),CKupdate(),unsaved=!1,Modernizr.history){var e=$("#form-zero").serializeArray()
e.push({name:$(this).attr("name")}),loadContent($("#form-zero").attr("action"),e)}}),window.onbeforeunload=function(e){if(unsaved){var t=msg_warning_form_no_saved.replace("<br>","\n"),e=e||window.event
return e&&(e.returnValue=t),t}},$(document).on("click",".open-filebrowser",function(e){e.preventDefault()
var t=$(this).attr("data-return")
$("table#filemanager").attr("data-retornar",t)
var n=$("#"+t).val().replace("uploads","").split("/")
n.splice(-1,1),n=n.join("/"),browse(n)})
var e=$("#FOSChangePasswordButton"),t=e.attr("href"),n=$("#FOSChangePassword")
e.click(function(e){e.preventDefault(),n.find(".modal-content").load(t,function(){n.modal("show")})}),n.on("submit","form",function(e){e.preventDefault()
var i=n.find("form").serializeArray()
return n.find(".modal-content").load(t,i,function(e,t,i){"correcto"==e&&(n.modal("hide"),new PNotify({text:"Contraseña actualizada",type:"success",icon:!1}))}),!1}),Modernizr.history&&$(document).on("click",".control-ajax a",function(){var e=$(this).attr("href")
return!!$(this).hasClass("no-ajax")||("#"==e||(unsaved?getConfirm(msg_warning_form_no_saved,function(t){t&&(history.pushState(null,null,e),loadContent(e,!1),unsaved=!1)}):(history.pushState(null,null,e),loadContent(e,!1)),!1))})})
