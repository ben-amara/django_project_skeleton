(function($,window,document,undefined){var $win=$(window);var $doc=$(document);$doc.ready(function(){$nav=$('.nav');$nav.find('.nav__dropdown').parent().addClass('has-dd');if($win.width()<767){var $dd=$nav.find('.has-dd');$dd.children('.nav__dropdown').hide();$dd.click(function(e){if(!$(this).hasClass('active')){e.preventDefault();}
$(this).addClass('active');$(this).children('.nav__dropdown').slideDown();});}
if($win.width()<767){var $hamburger=$('.hamburger');var activeClass='is-open';var $htmlBody=$('html, body');$hamburger.click(function(e){e.preventDefault();$(this).toggleClass(activeClass)
$nav.toggleClass(activeClass)
$htmlBody.toggleClass('lock-screen');})}
var $elements=$('[data-append-to]');$elements.each(function(){var self=$(this);var $clone=self.clone();var parentClassname=self.data('append-to');var $newParent=$(parentClassname);$clone.addClass('js-cloned-element').removeAttr('data-append-to');$clone.appendTo($newParent);})});})(jQuery,window,document);