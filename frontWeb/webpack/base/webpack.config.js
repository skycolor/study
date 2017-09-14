module.exports = {
  entry:  __dirname + "/dev/app.js",			//已多次提及的唯一入口文件
  output: {
    path: __dirname + "/build",		//打包后的文件存放的地方
    filename: "app.js"		//打包后输出文件的文件名
  }
}
