// ==UserScript==
// @name         Qiita Team Extension (Co-editing mode)
// @namespace    https://github.com/yasslab/
// @version      0.1
// @description  Automatically select co-editing mode
// @author       nalabjp
// @match        https://yasslab.qiita.com/drafts/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    let element = document.querySelector('a[href="#coediting-post"]');
    if (element !== null) element.click();
})();
