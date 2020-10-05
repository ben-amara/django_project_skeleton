jQuery(document).ready(function($){$(window).one('scroll',function(){loadHomeBgImage();if(!jQuery('#calculate').hasClass('ico_loaded')){jQuery('#calculate').addClass('ico_loaded');loadIconSprite();}
if(!jQuery('#calculate').hasClass('comment_js_loaded')){jQuery('#calculate').addClass('comment_js_loaded');loadCommentBox();}
if(jQuery(window).width()<767){loadAdd2Any();}
loadSlickSlider();if(location.search.indexOf("print=true")>=0)loadNonCriticalCSS();});if(jQuery(window).scrollTop()>500&&!jQuery('#calculate').hasClass('comment_js_loaded')){jQuery('#calculate').addClass('comment_js_loaded');loadCommentBox();}
if(jQuery(window).width()>767&&!jQuery('#calculate').hasClass('ico_loaded')){jQuery('#calculate').addClass('ico_loaded');loadIconSprite();}
if(jQuery(window).width()>767){loadAdd2Any();}
if($('.helloBar').length){$('.helloBar .close').on('click',function(){$('.helloBar').slideUp();document.cookie='closedHelloBar=true;path=/';});$(window).on('scroll',function(){var top_pos=$('.section-articles p:eq(1)').position().top;if($(this).scrollTop()>=top_pos&&document.cookie.indexOf('closedHelloBar')<=0){$('.helloBar').slideDown();}});}
function loadNonCriticalCSS(){$('link').attr('media','all');}
function loadAdd2Any(){var add2any_js=['/wp-content/themes/wiht/js/addtoany.js'];downloadJSAtOnload(add2any_js);}
function loadHomeBgImage(){if($(window).width()<768&&!$('.section.section--intro').hasClass('bg-loaded')){$('.section.section--intro').addClass('bg-loaded');}}
function loadIconSprite(){var icons=jQuery("i[class*='ico-']");if(icons.length){jQuery.each(icons,function(index,obj){jQuery(obj).addClass('ico-loaded');});}
var left_arrow=jQuery('.arrow-left-blue');var right_arrow=jQuery('.arrow-right-blue');if(left_arrow.length)
left_arrow.addClass('ico-loaded');if(right_arrow.length)
right_arrow.addClass('ico-loaded');}
function loadCommentBox(){if(jQuery('#commentform').length){var recaptch_js=['https://www.google.com/recaptcha/api.js?onload=anr_onloadCallback&render=explicit','/wp-includes/js/comment-reply.min.js'];downloadJSAtOnload(recaptch_js);}}
function loadSlickSlider(){if(jQuery(window).width()<1024&&(jQuery('.slider--testimonials').length||jQuery('.testimonial-slider').length)){var first_url='/wp-content/themes/wiht/vendor/slick.min.js';setJsDownloadEvent(first_url,[function(){var $slider=jQuery('.slider--testimonials');if(jQuery(window).width()<1024&&$slider.length){var $slides=$slider.find('.slider__slides');var $pagination=jQuery('.slider__pagination');$slides.slick({dots:true,slidesToShow:2,slidesToScroll:2,arrows:false,appendDots:$pagination,responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1,variableWidth:true}}]})}
if(jQuery(window).width()<1024&&jQuery('.testimonial-slider').length){jQuery('.testimonial-slider').slick({arrows:false,dots:true,infinite:false,slidesToShow:2,slidesToScroll:3,centerMode:true,focusOnSelect:true,variableWidth:true,responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:0}},{breakpoint:401,settings:{slidesToShow:1,slidesToScroll:0,centerMode:true,centerPadding:'20px 0px 20px',variableWidth:true,adaptiveHeight:true}},{breakpoint:374,settings:{slidesToShow:1,slidesToScroll:0,centerMode:true,centerPadding:'10px 0px 10px',variableWidth:true,adaptiveHeight:true}}]});};}]);}}
function msieversion(){var ua=window.navigator.userAgent;var msie=ua.indexOf("MSIE ");if(msie>0||!!navigator.userAgent.match(/Trident.*rv\:11\./)){var ie=document.createElement("link");ie.rel="stylesheet";ie.href="/wp-content/themes/wiht/assets/css/ie.css";document.head.insertBefore(ie,document.head.childNodes[document.head.childNodes.length-1].nextSibling);setTimeout(function(){var elem=jQuery('picture');jQuery.each(elem,function(key,value){var img=jQuery(value).find('img');var srcset=img.attr('data-srcset');console.log(srcset);if(typeof srcset!='undefined'){var path_arr=srcset.split(" ");console.log(path_arr[0]);img.attr('src',path_arr[0]);}});},3000);}
else{}
return false;}
msieversion();});