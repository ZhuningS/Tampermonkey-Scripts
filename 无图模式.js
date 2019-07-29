//全部无图、图片替换
(function () {
    'use strict';
    setInterval(function () {
        //图片地址
        var src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEX///+nxBvIAAAAEklEQVR4XgXAgQgAAAAAoP2pjwACAAF0O1JHAAAAAElFTkSuQmCC';

        //图片替换
        var imgList = document.querySelectorAll("img");
        for (var i = 0; i < imgList.length; i++) {
            imgList[i].setAttribute("src", src);
            imgList[i].style.width="50px";
        }

        //背景图片替换 - div
        var divList = document.querySelectorAll("div");
        for (var j = 0; j < divList.length; j++) {
            divList[j].style.backgroundImage = "none";
            divList[j].style.backgroundRepeat="repeat";
        }
    }, 100);




})();