// ==UserScript==
// @name         Qiita:Team Extension (Default group)
// @namespace    https://github.com/yasslab/
// @version      0.1.4
// @description  Automatically select a group to publish
// @author       nalabjp
// @match        https://yasslab.qiita.com/drafts/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    const DEFAULT_OPTION_VALUE = 'confidential';
    const FALLBACK_OPTION_VALUE = '_public';
    let selector_path = '.editor.form > div.editorFooter > div.editorFooter_visibilitySelector.form-inline.pull-right > select';
    let element = document.querySelector(selector_path);
    let event = new Event("change", { bubbles: true });
    if (element === null) return;

    if (element.value === '') {
        element.value = DEFAULT_OPTION_VALUE;
        if (element.value === '') {
            element.value = FALLBACK_OPTION_VALUE;
        }
    }
    element.dispatchEvent(event);
})();
