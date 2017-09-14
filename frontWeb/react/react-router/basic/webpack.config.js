module.exports = {
  //entry:  __dirname + "/dev/app.js",			//已多次提及的唯一入口文件
  entry: {
        ambiguousExample : [ __dirname + "/dev/ambiguousExample.js" ,  __dirname + "/dev/app.js"] 
//      animationExample : [ __dirname + "/dev/animationExample.js" ,  __dirname + "/dev/app.js"] ,
//      authExample : [ __dirname + "/dev/authExample.js" ,  __dirname + "/dev/app.js"] ,
//      basicExample : [ __dirname + "/dev/basicExample.js" ,  __dirname + "/dev/app.js"] ,
//      customLinkExample : [ __dirname + "/dev/customLinkExample.js" ,  __dirname + "/dev/app.js"] ,
//      modalGallery : [ __dirname + "/dev/modalGallery.js" ,  __dirname + "/dev/app.js"] ,
//      noMatchExample : [ __dirname + "/dev/noMatchExample.js" ,  __dirname + "/dev/app.js"] ,
//      paramsExample : [ __dirname + "/dev/paramsExample.js" ,  __dirname + "/dev/app.js"] ,
//      preventingTransitionsExample : [ __dirname + "/dev/preventingTransitionsExample.js" ,  __dirname + "/dev/app.js"] ,
//      recursiveExample : [ __dirname + "/dev/recursiveExample.js" ,  __dirname + "/dev/app.js"] ,
//      routeConfigExample : [ __dirname + "/dev/routeConfigExample.js" ,  __dirname + "/dev/app.js"] ,
//      sidebarExample : [ __dirname + "/dev/sidebarExample.js" ,  __dirname + "/dev/app.js"] ,
//      staticRouterExample : [ __dirname + "/dev/staticRouterExample.js" ,  __dirname + "/dev/app.js"] 
    },
  output: {
    path: __dirname + "/build",		//打包后的文件存放的地方
    filename: "[name].bundle.js"		//打包后输出文件的文件名
  } ,
  module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    }
}
