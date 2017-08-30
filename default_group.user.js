// ==UserScript==
// @name         Qiita Team Extension
// @namespace    https://github.com/yasslab/qiita-team-extension
// @version      0.1
// @description  Automatically select a group to publish
// @author       nalabjp
// @match        https://yasslab.qiita.com/drafts/new
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const DEFAULT_OPTION_VALUE = 'debug';
    let selector_path = '#new_draft_item > div.editorFooter > div.editorFooter_visibilitySelector.form-inline.pull-right > select';
    let element = document.querySelector(selector_path);
    if (element === null) return;
    element.value = DEFAULT_OPTION_VALUE;
})();
