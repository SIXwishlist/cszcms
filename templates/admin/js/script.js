function ChkAllDelete(){$(".CheckBoxDelete").attr("checked","checked")}function ChkHideShow(e){$("#"+e).toggle(200)}function getPathLvl1(e){var t,l=location.pathname,s=l.replace(e,""),i=s.search("/");if(i>=0){var a=s.split("/");t=location.protocol+"//"+location.host+"/"+a[1]}else t=location.protocol+"//"+location.host;return t.replace("admin","")}$(".keypress-number").keypress(function(e){return 8!=e.which&&0!=e.which&&(e.which<48||e.which>57)?!1:void 0}),$(function(){var e=$(".form-datepicker").datepicker({dateFormat:"yy-mm-dd",numberOfMonths:1,changeMonth:!0,changeYear:!0,onSelect:function(t){var l="start_date"==this.id?"minDate":"maxDate",s=$(this).data("datepicker"),i=$.datepicker.parseDate(s.settings.dateFormat||$.datepicker._defaults.dateFormat,t,s.settings);e.not(this).datepicker("option",l,i)}})}),$(function(){$(".ui-sortable").sortable({cursor:"move",placeholder:"ui-state-highlight"}),$("#sel-chkbox-all").change(function(){$(".selall-chkbox").prop("checked",$(this).prop("checked"))})}),$(function(){var e=getPathLvl1("templates/admin/js/script.js");tinymce.init({selector:".body-tinymce",height:"500px",content_css:[e+"/assets/css/bootstrap.min.css",e+"/templates/admin/css/dashboard.css",e+"/templates/admin/css/styles.css",e+"/assets/font-awesome/css/font-awesome.min.css"],convert_urls:!1,extended_valid_elements:"*[*]",valid_elements:"*[*]",plugins:"advlist autolink link image lists charmap print preview hr anchor pagebreak searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking table contextmenu directionality emoticons paste textcolor glyphicons b_button jumbotron row_cols boots_panels boot_alert form_insert",toolbar1:"insertfile undo redo | styleselect fontselect fontsizeselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage",toolbar2:"forecolor backcolor emoticons | glyphicons b_button jumbotron row_cols boots_panels boot_alert form_insert",style_formats:[{title:"Text",items:[{title:"Muted text",inline:"span",classes:"text-muted"},{title:"Primary text",inline:"span",classes:"text-primary"},{title:"Success text",inline:"span",classes:"text-success"},{title:"Info text",inline:"span",classes:"text-info"},{title:"Warning text",inline:"span",classes:"text-warning"},{title:"Danger text",inline:"span",classes:"text-danger"},{title:"Badges",inline:"span",classes:"badge"}]},{title:"Label",items:[{title:"Default Label",inline:"span",classes:"label label-default"},{title:"Primary Label",inline:"span",classes:"label label-primary"},{title:"Success Label",inline:"span",classes:"label label-success"},{title:"Info Label",inline:"span",classes:"label label-info"},{title:"Warning Label",inline:"span",classes:"label label-warning"},{title:"Danger Label",inline:"span",classes:"label label-danger"}]},{title:"Headers",items:[{title:"h1",block:"h1"},{title:"h2",block:"h2"},{title:"h3",block:"h3"},{title:"h4",block:"h4"},{title:"h5",block:"h5"},{title:"h6",block:"h6"}]},{title:"Blocks",items:[{title:"p",block:"p"},{title:"div",block:"div"},{title:"pre",block:"pre"}]},{title:"Containers",items:[{title:"section",block:"section",wrapper:!0,merge_siblings:!1},{title:"article",block:"article",wrapper:!0,merge_siblings:!1},{title:"blockquote",block:"blockquote",wrapper:!0},{title:"hgroup",block:"hgroup",wrapper:!0},{title:"aside",block:"aside",wrapper:!0},{title:"figure",block:"figure",wrapper:!0}]}]})}),$(function(){$(document).on("click",".btn-fields-add",function(e){e.preventDefault();var t=$(".addfields"),l=$(this).parents(".entry:first"),s=$(l.clone()).appendTo(t);s.find("input").val(""),t.find(".entry:not(:last) .btn-fields-add").removeClass("btn-fields-add").addClass("btn-fields-remove").removeClass("btn-success").addClass("btn-danger").html('<span class="glyphicon glyphicon-minus"></span>')}).on("click",".btn-fields-remove",function(e){return $(this).parents(".entry:first").remove(),e.preventDefault(),!1})});