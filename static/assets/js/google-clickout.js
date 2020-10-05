window.btbCreateCookie=function(name,value,days){if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));var expires="; expires="+date.toGMTString();}
else var expires="";document.cookie=name+"="+value+expires+"; path=/";}
window.btbReadCookie=function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
window.btbEraseCookie=function(name){btbCreateCookie(name,"",-1);}
window.btbCheckCookie=function(name){return btbReadCookie(name)!=null;}
if(document.location.href.toLowerCase().indexOf('btbtest=true')!=-1){btbCreateCookie('btbTest',true);}
if(document.location.href.toLowerCase().indexOf('btbtest=false')!=-1){btbEraseCookie('btbTest');}
window.btbTestTracking={};btbTestTracking.running={};btbTestTracking.completed={};btbTestTracking.classifyLink=function(lnk){try{var linkEl=$(lnk)[0];if(typeof(linkEl)=="undefined"){return "unknown";}
var linktype="unknown";if(document.location.href.indexOf('/hosting-reviews/')!=-1&&document.location.pathname!="/hosting-reviews/"){linktype="reviewpage-other";if(linkEl.closest('.host-cta')!=null){console.log(linkEl.className);if(linkEl.className.indexOf('btn')!=-1){linktype="reviewpage-cta-button";}
else if(linkEl.className.indexOf('domain-link')!=-1){linktype="reviewpage-cta-domainlink";}
else if(linkEl.closest('.article__logo')!=null){linktype="reviewpage-cta-logo";}
else{linktype="reviewpage-cta";}}else if(linkEl.closest('.review')!=null){linktype="reviewpage-reviewlink";}else if(linkEl.closest('#top-plans, #other-plans')!=null){linktype="reviewpage-plans";}else if(linkEl.closest('#alternatives')!=null){linktype="reviewpage-plans";}}
if(document.location.pathname=="/hosting-reviews/"){linktype="hostingreviews-other";if(linkEl.className.indexOf('domain-link')!=-1){linktype="hostingreviews-domainlink";}
else if(linkEl.className.indexOf('wp-block-button__link')!=-1){linktype="hostingreviews-image";}
else if($('img',linkEl).length>0){linktype="hostingreviews-image";}
else if(linkEl.className.indexOf('btn')!=-1){linktype="hostingreviews-cta";}}
if(document.location.href.indexOf('/compare/')!=-1){linktype="comparisonpage-other";if(linkEl.closest('.best-host-cta')!=null){if(linkEl.className.indexOf('btn')!=-1){linktype="comparisonpage-cta-button";}
else if(linkEl.className.indexOf('domain-link')!=-1){linktype="comparisonpage-cta-domainlink";}
else if(linkEl.closest('.article__logo')!=null){linktype="comparisonpage-cta-logo";}
else{linktype="comparisonpage-cta";}}if(linkEl.closest('.table-hostings, .wht-table001-main-wrapper')!=null){if(linkEl.className.indexOf('btn')!=-1){linktype="comparisonpage-table-button";}
else if(linkEl.className.indexOf('domain-link')!=-1){linktype="comparisonpage-table-domainlink";}
else if(linkEl.closest('.table__img')!=null){linktype="comparisonpage-table-logo";}
else{linktype="comparisonpage-table";}}}
if(document.location.href.indexOf('/hosting-coupons/')!=-1&&document.location.pathname!="/hosting-coupons/"){linktype="couponpage-other";if(linkEl.closest('.coupon-cta')!=null){if(linkEl.className.indexOf('btn-discount')!=-1){linktype="couponpage-cta-discountlink";}
else if(linkEl.className.indexOf('btn')!=-1){linktype="couponpage-cta-button";}
else{linktype="couponpage-cta";}}if(linkEl.closest('.table-hostings')!=null){if(linkEl.className.indexOf('btn')!=-1){linktype="comparisonpage-table-button";}
else if(linkEl.className.indexOf('domain-link')!=-1){linktype="comparisonpage-table-domainlink";}
else if(linkEl.closest('.table__img')!=null){linktype="comparisonpage-table-logo";}
else{linktype="comparisonpage-table";}}}
if(document.location.pathname=="/hosting-coupons/"){linktype="couponindex-other";if(linkEl.className.indexOf('btn-discount')!=-1){linktype="couponpage-discountlink";}
else if(linkEl.className.indexOf('btn')!=-1){linktype="couponpage-cta";}}
if(document.location.pathname=="/"){linktype="homepage";if(linkEl.closest('#lookup-results')!=null){linktype="homepage-lookupcta";}}
if(linkEl.closest('#exit-alternatives')!=null){linktype="exit-alternatives";}
if(document.location.pathname=="/hosting-coupons/"){linktype="couponindex-other";if(linkEl.className.indexOf('btn-discount')!=-1){linktype="couponpage-discountlink";}
else if(linkEl.className.indexOf('btn')!=-1){linktype="couponpage-cta";}}
return linktype;}catch(err){btbTestTracking.report('Classification error for:\
  			'+linkEl+'\
  			'+err.message);return 'unknown';}}
btbTestTracking.trackLink=function(node){if(node.href){console.log('Link',node.href);try{var url=new URL(node.href);var allTests=Object.keys(btbTestTracking.running);btbVars='';for(var i=0;i<allTests.length;i++){console.log(allTests[i],btbTestTracking.running[allTests[i]]);btbVars+=allTests[i]+"-"+btbTestTracking.running[allTests[i]]+"_";}
url.searchParams.set('t',btbVars);node.href=url;console.log('Updated: ',node.href);node.onmousedown=function(){if(btbTestTracking&&typeof(btbTestTracking.trackOutBoundLink=="function")){btbTestTracking.trackOutboundLink(this)}};}catch(err){if(document.location.href.indexOf('/tools')==-1&&document.location.href.indexOf('/resources')==-1&&document.location.href.indexOf('/blog')==-1){}}}}
btbTestTracking.trackOutboundLink=function(lnk){try{var url=lnk.href;var host="unknown";url=url.toLowerCase();var reg=/^.*\/go\/([A-Za-z\-0-9]*)\/.*$/;var regRes=url.match(reg);if(regRes!==null){host=regRes[1];}
window._conv_q=window._conv_q||[];_conv_q.push(["triggerConversion","100219731"]);if(host=="siteground"){_conv_q.push(["triggerConversion","100219730"]);}
console.log('tracked - convert');var linktype="unknown";linktype=btbTestTracking.classifyLink(lnk);console.log('tracking',host,url,linktype);}
catch(err){btbTestTracking.report(err.message);}
var coType='Clickout';if(host=="whois"){coType="Whois Search";}
ga('gtag_UA_215843_23.send','event',{eventCategory:coType,eventAction:host,eventLabel:linktype,transport:'beacon'});}
btbTestTracking.observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){for(var i=0;i<mutation.addedNodes.length;i++){if(mutation.addedNodes[i].nodeName=="A"){if(mutation.addedNodes[i].href&&mutation.addedNodes[i].href.indexOf('/go/')!=-1&&mutation.addedNodes[i].href.indexOf('/go/whois/')==-1){btbTestTracking.trackLink(mutation.addedNodes[i]);}}
if(mutation.addedNodes[i].nodeType==1){var aElements=mutation.addedNodes[i].getElementsByTagName('a');for(var j=0;j<aElements.length;j++){if(aElements[j].href&&aElements[j].href.indexOf('/go/')!=-1&&aElements[j].href.indexOf('/go/whois/')==-1){btbTestTracking.trackLink(aElements[j]);}}}}});});btbTestTracking.getDiag=function(){btbDiag='';var allTests=Object.keys(btbTestTracking.running);btbVars='';for(var i=0;i<allTests.length;i++){btbVars+=allTests[i]+"-"+btbTestTracking.running[allTests[i]]+"|";}
btbDiag+=btbVars+'\
	';btbDiag+='btbtest\ '+btbCheckCookie('btbTest')+'\
	';btbDiag+=document.location.href+'\
	';btbDiag+=window.navigator.userAgent+'\
	';var w=Math.max(document.documentElement.clientWidth,window.innerWidth||0);var h=Math.max(document.documentElement.clientHeight,window.innerHeight||0);btbDiag+=w+"x"+h+'\
	';return btbDiag;}
btbTestTracking.report=function(msg){var template_params={'client':'WIHT','message':msg,'diag':btbTestTracking.getDiag(),};console.log('Error Reported',msg);}
btbTestTracking.initialise=function(){console.log('======== BTB-DIAG ========');console.log(btbTestTracking.getDiag());console.log('==========================');var allTests=Object.keys(btbTestTracking.running);var testArr=[];for(var i=0;i<allTests.length;i++){testArr.push(allTests[i]+"-"+btbTestTracking.running[allTests[i]]);}
window.hj=window.hj||function(){(hj.q=hj.q||[]).push(arguments)};hj('tagRecording',testArr);var links=document.getElementsByTagName('a');for(var i=0;i<links.length;i++){if(links[i].href&&links[i].href.indexOf('/go/')>-1){btbTestTracking.trackLink(links[i]);}}
if(btbTestTracking&&typeof(btbTestTracking.observer=="function")){btbTestTracking.observer.observe(document.body,{childList:true,subtree:true});}
var ce=document.createElement('script');ce.setAttribute('src','//script.crazyegg.com/pages/scripts/0073/3573.js');ce.setAttribute('async','async');document.body.appendChild(ce);function reEvaluateOnHashChange(){if(!window.prevHash)window.prevHash=window.location.hash;if(window.waitForHashChange)clearInterval(window.waitForHashChange);window.waitForHashChange=window.setInterval(function(){if(window.location.hash!=window.prevHash){window.prevHash=window.location.hash;console.log('clicked',window.location.href);_conv_q=_conv_q||[];_conv_q.push(["run","true"]);}},100);}
if(window.location.pathname==="/"){$(document).on('click','.site-lookup .search__btn',function(event){console.log("ReEvaluating One");reEvaluateOnHashChange();});$(document).on('keyup','.site-lookup .search__field',function(event){console.log("ReEvaluating Two");if(event.keyCode===13){console.log("ReEvaluating Three");reEvaluateOnHashChange();}});}}
if(document.readyState==="complete"||(document.readyState!=="loading"&&!document.documentElement.doScroll)){btbTestTracking.initialise();}else{document.addEventListener("DOMContentLoaded",btbTestTracking.initialise);}