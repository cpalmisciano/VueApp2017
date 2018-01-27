window.site = (function () {
    'use strict';

    let rooturl = '';
    let addListeners = function () {

    };

    let _init = function () {
        addListeners();
    };

    return {
        setRootUrl: function (value) { rooturl = value; },
        getRootUrl: function () { return rooturl; },
        init: _init
    }
}());