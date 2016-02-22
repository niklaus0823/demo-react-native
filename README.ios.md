# REACT NATIVE FOR IOS
---

> 注：本文代码以IOS应用为主
> 具体踩坑流程，参考README.md

## 准备工作
* 安装最新版的XCode，建议是XCode7.1及以上版本，建议直接安装最新，否则可能出现编译问题。
* 安装HomeBlew

        ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
        
* 安装Node.js

        https://nodejs.org/download/

* 安装watchman
    
        brew install watchman
        
* 安装flow
    
        brew install flow
        
* 安装React Native CLI: 用来开发React Native的命令行工具

        npm install -g react-native
        
## 创建项目

* 进入工作目录，然后运行命令，项目名暂定为 HelloWorld

		react-native init HelloWorld

> 安装过程中，可能会出现需要安装 python 与 MSBuild 的情况，可以不用管他，有强迫症的朋友也可以按照提示进行安装，注意环境变量的配置

* 此处需要等待几分钟，等待npm的模块下载和项目创建。

* 进入`HelloWorld`文件夹运行packager
        open ios/HelloWorld.xcodeproj
       
	可以访问 http://localhost:8081/index.ios.bundle 验证打包后的脚本

> [参考](https://segmentfault.com/a/1190000003076518)
