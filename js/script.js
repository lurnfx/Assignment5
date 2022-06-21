$(function () { //Same as document.addEventListener("DOMContentLoaded"...

  //Same as document.querySelector("#Navbar-toggler").addEventListener("blur",...
  $("#Navbar-toggler").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 968) {
      $("#navmenu").collapse("hide");
    }
  });
});


(function (global) {

// Convenience function for inserting innerHTML for 'select'
var insertHtml = function (selector, html) {
  var targetElem = document.querySelector(selector);
  targetElem.innerHTML = html;
};

// Show loading icon inside element identified by 'selector'.
var showLoading = function (selector) {
  var html = "<div class='text-center'>";
  html += "<img src='G:\bhushan\Assignment5\Image\loding.gif'></div>";
  insertHtml(selector, html);
};

// Return substitute of '{{propName}}'
// with propValue in given 'string'
var insertProperty = function (string, propName, propValue) {
  var propToReplace = "{{" + propName + "}}";
  string = string
    .replace(new RegExp(propToReplace, "g"), propValue);
  return string;
};

// Remove the class 'active' from home and switch to Menu button
var switchMenuToActive = function () {
  // Remove 'active' from home button
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;

  // Add 'active' to menu button if not already there
  classes = document.querySelector("#NavbIteamMenu").className;
  if (classes.indexOf("active") === -1) {
    classes += " active";
    document.querySelector("#NavbIteamMenu").className = classes;
  };
};
}) (window);
