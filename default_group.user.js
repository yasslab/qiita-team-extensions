// ==UserScript==
// @name         Qiita Team Extension (Default group)
// @namespace    https://github.com/yasslab/
// @version      0.1
// @description  Automatically select a group to publish
// @author       nalabjp
// @match        https://yasslab.qiita.com/drafts/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const DEFAULT_OPTION_VALUE = 'confidential';
    const FALLBACK_OPTION_VALUE = '_public';
    let selector_paths = [
        '#new_draft_item > div.editorFooter > div.editorFooter_visibilitySelector.form-inline.pull-right > select',          // new
        '#edit_draft_item > div.editorFooter > div.editorFooter_visibilitySelector.form-inline.pull-right > select',         // draft
        '#edit_draft_item > div.editorFooter-onUpdate > div.editorFooter_visibilitySelector.form-inline.pull-right > select' // edit
    ];
    let element = null;

    for(let path of selector_paths) {
        let e = document.querySelector(path);
        if (e !== null) {
            element = e;
            break;
        }
    }

    if (element === null) return;

    if (element.value === '') {
        element.value = DEFAULT_OPTION_VALUE;
        if (element.value === '') {
            element.value = FALLBACK_OPTION_VALUE;
        }
    }
})();
