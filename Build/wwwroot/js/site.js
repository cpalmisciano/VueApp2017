window.site = (function () {
    'use strict';

    let $ = jQuery.noConflict();
    let rooturl = '';

    let addListeners = function () {

        //$('div.navbar').on("mousemove", function (e) {
        //    if (e.pageY < 50) {
        //        $(this).removeClass('shrink').addClass('expand');
        //    }
        //});

        //$('div.navbar').on("touchstart", function (e) {
        //    if (e.touches[0].clientY < 50) {
        //        $(this).removeClass('shrink').addClass('expand');
        //    }
        //});

        //$('div.navbar').on("mouseleave touchend", function () {
        //    $(this).removeClass('expand').addClass('shrink');
        //});

    };

    let _init = function () {
        addListeners();

        //setTimeout(function () { $('div.navbar').addClass('shrink'); }, 3000);
        //$('div.navbar').addClass('shrink');
    };

    return {
        setRootUrl: function (value) { rooturl = value; },
        getRootUrl: function () { return rooturl; },
        init: _init
    }
}());

//auto init
//jQuery(function () { window.site.init(); });
