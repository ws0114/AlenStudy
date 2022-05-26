const path = require('path');

module.exports = {
    entry:'./mock.js',//导入文件
    output: {
        path: path.resolve(__dirname, 'dist'),//输出打包文件所在文件夹的绝对路径
        filename: 'bundle.js',//导出文件
    },
    mode:'development',//运行模式

     resolve: {
        extensions: [".js", ".json", ".css", "jsx"],
        modules: [path.resolve(__dirname, "./node_modules"), "node_modules"]//在node_modules寻找第三方moduel
    }
};
