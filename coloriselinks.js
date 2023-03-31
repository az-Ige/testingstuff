// ==UserScript==
// @name        colorise links so you dont open them
// @namespace   Violentmonkey Scripts
// @match       https://bac.simplu.info/*
// @grant       none
// @version     1.0
// @author      -
// @description 3/31/2023, 1:43:43 PM
// ==/UserScript==

var ColoriseLinks = () => {
  document.body.querySelectorAll("a").forEach((l) => {
    if (
      localStorage.getItem(l.href.replace("er.html", "er") + "-checked") ==
      "true"
    ) {
      l.style.cssText = "color: purple; font-size:1.5rem";
    }
  });
};

window.addEventListener("focus", () => {
  ColoriseLinks();
});

window.addEventListener("load", () => {
  ColoriseLinks();
});
