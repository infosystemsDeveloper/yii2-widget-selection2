/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */

(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var e=jQuery.fn.select2.amd;return e.define("select2/i18n/ru",[],function(){function e(e,t,n,r){return e%10<5&&e%10>0&&e%100<5||e%100>20?e%10>1?n:t:r}return{errorLoading:function(){return"Natijalarni yuklab bo'lmadi"},inputTooLong:function(t){var n=t.input.length-t.maximum,r="Iltimos, "+n+" belgi kiring";return r+=e(n,"","a","ов"),r+=" меньше",r},inputTooShort:function(t){var n=t.minimum-t.input.length,r="Iltimos, hech bo'lmaganda yana "+n+" belgi kiriting";return r+=e(n,"","a","ов"),r},loadingMore:function(){return"Ma'lumotlar yuklanmoqda ..."},maximumSelected:function(t){var n="Siz "+t.maximum+" element tanlashingiz mumkin";return n+=e(t.maximum,"","a","ов"),n},noResults:function(){return"Hech narsa topilmadi"},searching:function(){return"Qidiruv…"}}}),{define:e.define,require:e.require}})();