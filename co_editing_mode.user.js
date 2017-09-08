// ==UserScript==
// @name         Qiita:Team Extension (Co-editing mode)
// @namespace    https://github.com/yasslab/
// @version      0.2
// @description  Automatically select co-editing mode
// @author       nalabjp
// @match        https://yasslab.qiita.com/drafts/*
// @grant        none
// ==/UserScript==


(function() {
    'use strict';

    let dropdownToggle = document.querySelector('a.editorSubmit_dropdownToggle');
    if (dropdownToggle === null) return;
    dropdownToggle.click();

    let element = document.querySelector('a.editorSubmit_dropdownItem[data-state="coediting_post"]');
    if (element === null) return;
    element.click();
})();
