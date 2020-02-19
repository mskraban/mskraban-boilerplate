# 💊 Boilerplate on steroids 💊

This is upgraded and customised boilerplate for Front End developers.

## Install
Just install yarn via command bellow to get all of included dependencies.
 1. `yarn install`

## What's under the hood

Boilerplate uses Yarn packet manager for custom dependencies.

 - Complete seo template
 - Favicons
 - Htacess
 - robots.txt
 - humans.txt
 
**Included yarn dependencies:**
 
 - bootstrap: "4.4.1",
 - jquery: "3.4.1",
 - popper.js: "1.16.0,
 - modernizir.js: "3.8.0",
 - wow.js: "1.2.2",
 - animate.css: "3.7.2"

## PhpStorm SCSS filewatcher

In order to compile SCSS to CSS, you net to configure filewatcher properly. To do this, use next two lines:
**Arguments:**
 `--no-cache --update $FileName$:../../public/assets/css/$FileNameWithoutExtension$.css --style compressed`
**Output paths to refresh:** `../../public/assets/css/$FileNameWithoutExtension$.css:../../public/assets/css/$FileNameWithoutExtension$.css.map`
