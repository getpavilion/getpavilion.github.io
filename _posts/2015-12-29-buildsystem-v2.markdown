---
title:  "Build system"
date:   2016-03-31 17:06:26 +0200
postid: gulp
categories: v2
---
Pavilion v1.1.0 ships with a GulpJS build system for compiling, autoprefixing and compressing Pavilion's SCSS files.
The following tasks with subtasks are defined:

<strong>Command: &nbsp;</strong> `gulp` (default task)

- Clean the `dist/` and `demo/css/` folders
- Compile SCSS to CSS
- Strip CSS comments
- Autoprefix (last two browser versions)
- Optimize and compress CSS
- Output expanded and compressed CSS

<br>

<strong>Command: &nbsp;</strong> `gulp watch`

- Run `gulp` (default task)
- Watch for changes in `scss/**/*`
- On change run `gulp`

<br>

<strong>Command: &nbsp;</strong> `gulp clean`

- Clean the `dist/` and `demo/css/` folders