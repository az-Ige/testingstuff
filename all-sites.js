// ==UserScript==
// @name        All sites
// @namespace   Violentmonkey Scripts
// @match       https://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 4/1/2023, 6:38:13 PM
// ==/UserScript==

const s = localStorage.getItem(window.location.href);
var times = 0;
if (s) times = JSON.parse(s);

times++;
localStorage.setItem(window.location.href, `${times}`);

window.addEventListener("load", () => {
  document.body.style.cssText = `
    box-sizing:border-box;
    border: ${times}px solid green;
  `;
});
