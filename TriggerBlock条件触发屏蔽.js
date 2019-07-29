// TriggerBlock用于自定义的某个触发词被击中时隐藏页面中的所有图片
 var triggers = [
     'shit',
     'fuck',
     '卧槽',
 ];

 function regexForWordList(words) {
   return new RegExp('(' + words.join('|') + ')', 'gi');
 }

 function unique(list) {
   var result = [];
   $.each(list, function(i, e) {
     if ($.inArray(e, result) == -1) result.push(e);
   });
   return result;
 }

 (function () {
     // 如果发现任何敏感词，则不加载图片
     var content = $('body') .text();
     var matches = content.match(regexForWordList(triggers));
     console.log(matches);
     if (matches.length > 0) {
 	// 触发一个字符串，隐藏所有图片
 	$('img').hide();
 	alert('发现一个敏感词: ' + unique(matches) + '\n已经屏蔽了所有图片. \n');
         }
 }) ();