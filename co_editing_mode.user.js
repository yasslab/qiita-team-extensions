// ==UserScript==
// @name         Qiita:Team Extension (Co-editing mode)
// @namespace    https://github.com/yasslab/
// @version      0.4
// @description  Automatically select co-editing mode
// @author       nalabjp
// @match        https://yasslab.qiita.com/drafts/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==


(function() {
    'use strict';

    let dropdownToggle = document.querySelector('a.editorSubmit_dropdownToggle');
    let coeditingPost = document.querySelector('a.editorSubmit_dropdownItem[data-state="coediting_post"]');
    if (dropdownToggle === null || coeditingPost === null) return;
    dropdownToggle.click();
    coeditingPost.click();
})();
