define("vendor/ane/fis-conf",function(){"use strict";fis.hook("commonjs",{extList:[".js",".ts"]}),fis.set("project.ignore",["node_modules/**","output/**",".git/**","fis-conf.js","README.md","karma.conf.js","package.json","LICENSE"]),fis.set("baseurl",""),fis.unhook("components"),fis.hook("node_modules",{ignoreDevDependencies:!1,shimBuffer:!1,shimProcess:!1,shutup:!0}),fis.match("**",{release:!1,useHash:!1}).match("**.ts",{preprocessor:fis.plugin("js-require-css"),parser:fis.plugin("typescript",{jsx:1,showNotices:!1,sourceMap:!1,target:0,allowSyntheticDefaultImports:!0}),rExt:".js"}).match("{**.scss,*.html:scss}",{parser:fis.plugin("node-sass",{}),rExt:".css"}).match("/node_modules/**/*.{ts,js}",{isMod:!0,release:"/$0"}).match("/components/**/*.{ts,js}",{isMod:!0,release:"/$0"}).match("/*.ts",{isMod:!0,release:"/$0"}).match("/components/**/*.html",{postprocessor:fis.plugin("component-view",{})}).match("/components/**/*.scss",{release:"/$0"}).match("/{node_modules,components}/**/*.{css,scss,eot,svg,ttf,woff,woff2,map}",{release:"/$0"}).match("/styles/**.{css,scss,eot,svg,ttf,woff,woff2,map}",{release:"/$0"}).match("{ane.js,vendor.js,app.js,app.css}",{release:"/$0"}).match("{**.js.map,**.css.map}",{release:"/$0"}).match("/components/**/test/*.html",{postprocessor:void 0,release:"/$0"}).match("/components/ms-input/test/*.html",{postprocessor:fis.plugin("component-view",{}),release:"/$0"}).match("/tests/**",{release:"/$0"}).match("/tests/index.js",{isMod:!0}).match("::package",{packager:fis.plugin("deps-pack",{useSourceMap:!0}),postpackager:fis.plugin("loader",{resourceType:"commonJs",useInlineMap:!0,obtainStyle:!1})})});