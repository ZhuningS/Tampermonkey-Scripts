// ==UserScript==
// @name         通用Cleaner&Consor页面内容防火墙
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  通用Cleaner&Consor页面内容防火墙。已完善名单，对网页内容进行过滤，普适性常用标题党、缺德媒体，过滤替换，误导，极端，情绪化等单词提示。而对技术类、工具类、高质量平台白名单。
// @author       skycloud
// @include      http://*
// @include      https://*
// @exclude      http://localhost*
// @exclude      https://note.youdao.com/*
// @exclude      http*://*google*
// @exclude      http*://pan.baidu*
// @exclude      http*://*search*
// @exclude      *youdao*
// @exclude      *note.*
// @exclude      *yinxiang*.*
// @exclude      *develop*
// @exclude      *://*.duokan.*
// @exclude      *://*.boots*.*
// @exclude      *://*.*learn*.*
// @exclude      *://*.*wiz.*
// @exclude      *://*.*yinxiang*.*
// @exclude      *://*.*evernote*.*
// @exclude      *://*.*ximalaya*.*
// @exclude      *://*.lrts.com*
// @exclude      *://*.*mooc*.*
// @exclude      *://*.*school*.*
// @exclude      *://*.*book*.*
// @exclude      *://*juejin*
// @exclude      *://*segmentfault*
// @exclude      *://*csdn*
// @exclude      *://*frontend*
// @exclude      *://*rss*
// @exclude      *://*java*
// @exclude      *://*script*
// @exclude      *://*python*
// @exclude      *://*tech*
// @exclude      *://*css*
// @exclude      *://*icon*
// @exclude      *://*logo*
// @exclude      *://*module*
// @exclude      *://*web*
// @exclude      *://*library*
// @exclude      *://*scholar*
// @exclude      *://*markdown*
// @exclude      *://*webpack*
// @exclude      *://*node*
// @exclude      *://*jquery*
// @exclude      *://*.*git*.*
// @exclude      *://*git*.*
// @exclude      *://*.*vue.*
// @exclude      *://doc.*.*
// @exclude      *://help.*.*
// @exclude      *://*.*cloud*.*
// @exclude      *://*.*code*.*
// @exclude      *://*code*.*
// @exclude      *://*.net*
// @exclude      *://*.org*
// @exclude      *://*.edu*
// @exclude      *://*.*.net
// @exclude      *://*.*.org
// @exclude      *://*.*.edu*
// @exclude      *://tech.*
// @exclude      *://*.tech*
// @exclude      *://*.*tech*.*
// @exclude      *://*.laravel*.*
// @exclude      *://*.yinxiang*.*
// @exclude      *://*.douban.*
// @exclude      *://*.*tool*.*
// @exclude      *://*.*doc*.*
// @exclude      *://*.work*
// @exclude      *://*.segmentfault.com*
// @exclude      *://*stackoverflow*.*
// @exclude      *://open.163.com*
// @exclude      *://study.163.com*
// @exclude      *://*.v2ex.*
// @exclude      https://www.jianshu.com/p/*
// @grant        none
// ==/UserScript==

/*轻度过滤，普适性常用标题党、缺德媒体，过滤替换，误导，极端，情绪化等单词提示*/

(function() {
    'use strict';

   

    walk(document.body);
    
    //定义walk方法，遍历

    function walk(node)
{

    var child, next;

        switch ( node.nodeType ){        //nodeType是该节点的类型，9代表Document节点，1代表Element节点，3代表text节点，8代表comment节点，11代表DocumentFragment节点(文档片段)。
    
        case 1:              //Element节点
        case 9:              //文档节点
        case 11:            //文档片段节点
            child = node.firstChild;
            while ( child )
            {
                next = child.nextSibling;  //nextSibling是子节点的下一个节点
                walk(child);
                child = next;
            }
            break;

        case 3:
            handleText(node);
            break;
    }
}
    //定义处理文本节点的方法
    function handleText(textNode){

    //定义过滤替换词库
    var words = ["啦！","震惊！","猪叫声","可怕","恐怖","狗带","惊险","吓尿"];

     var v = textNode.nodeValue;
    console.log(v);

    words.forEach(function(e) {
        v = v.replace(e, " ");
});

    textNode.nodeValue = v;
}


})();    