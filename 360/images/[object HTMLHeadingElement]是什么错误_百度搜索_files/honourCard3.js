(function(){A.uicss("honourCard3/honourCard3.css");var a=function(j,e){var b=$(j);if(!e.compName||!e.vLevel||!e.centerPageUrl){return}var d='<div class="opui-honourCard3"><div><h3 class="opui-honourCard3-title">#{name}</h3></div><div class="opui-honourCard3-cont"><div class="opui-honourCard3-icon opui-honourCard3-icon-#{level}"></div><div class="opui-honourCard3-info opui-honourCard3-info-#{level}"><div class="opui-honourCard3-abs">#{abs} | <a href="#{url}" target="_blank">\u67e5\u770b\u4f01\u4e1a\u6863\u6848</a></div>#{info}</div></div></div>';var g=["\u5df2\u83b7\u5b9e\u540d\u8ba4\u8bc1\uff0c\u5f00\u59cb\u79ef\u7d2f\u4fe1\u8a89","\u57fa\u7840\u4fe1\u8a89\u79ef\u7d2f\uff0c\u53ef\u63a5\u6d3d\u5546\u8c08","\u4f18\u826f\u4fe1\u8a89\u79ef\u7d2f\uff0c\u503c\u5f97\u4fe1\u4efb"];var h='<p class="opui-honourCard3-rz"><span>[\u4fe1\u8a89\u8ba4\u8bc1]</span> \u5b9e\u540d\u8ba4\u8bc1';if(e.unfixedInfo&&e.unfixedInfo.rzItems&&e.unfixedInfo.rzItems.length>0){for(var f=0,c=e.unfixedInfo.rzItems.length;f<c&&f<2;f++){h+="-"+e.unfixedInfo.rzItems[f]}}h+="</p>";if(e.unfixedInfo&&e.unfixedInfo.bzItems&&e.unfixedInfo.bzItems.length>0){h+='<p class="opui-honourCard3-bz"><span>[\u5546\u5bb6\u627f\u8bfa]</span> ';for(var f=0,c=e.unfixedInfo.bzItems.length;f<c&&f<3;f++){h+=(f==0?"":"-")+e.unfixedInfo.bzItems[f]}h+="</p>"}else{h+='<p class="opui-honourCard3-bz-none"><span>[\u5546\u5bb6\u627f\u8bfa]</span> \u6682\u672a\u53c2\u4e0e\u6b64\u4fdd\u969c\u8ba1\u5212</p>'}b.html($.format(d,{name:e.compName,level:e.vLevel,url:e.centerPageUrl,abs:g[e.vLevel-1],info:h}))};A.ui.honourCard3=function(c,b){return a(c,b)}})();