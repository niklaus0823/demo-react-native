# REACT NATIVE 安装与踩坑记录
---

> React Native 可以用于构建原生 APP，并提高多平台开发的开发效率，Lean once，write anywhere

> 官方文档：[http://wiki.jikexueyuan.com/project/react-native/](http://wiki.jikexueyuan.com/project/react-native/)

> 很有用的参考，并且一直在更新，点击[这里](http://bbs.reactnative.cn/topic/10/%E5%9C%A8windows%E4%B8%8B%E6%90%AD%E5%BB%BAreact-native-android%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83/2)

> 注：本文代码以安卓应用为主

## 准备工作

1. 升级你的 node.js 版本到4.0以上，这是最低的版本要求。

		node -v

2. 为了方便切换 npm 源，需要安装 nrm 模块

		npm install -g nrm

3. 安装 JDK，并将 JDK 的 bin 目录加入到系统 PATH 环境变量中。增加JAVA_HOME参数，路径到jdk根目录
	* [下载地址](http://www.oracle.com/technetwork/java/javase/downloads/index.html)

4. 安装 Android SDK，进入 SDKManager, 确保项目安装以下工具，并将 Android SDK 的 bin 目录加入到系统的 PATH 环境变量中。增加ANDROID_HOME参数，路径到android_sdk根目录
	* Tools/Android SDK Tools (24.3.3)
	* Tools/Android SDK Platform-tools (22)
	* Tools/Android SDK Build-tools (23.0.1)
	* Android 6.0 (API 23)/ SDK Platform (1)
	* Extras/Android Suppore Library (23.0.1)
    
5. 安装 React Native命令行工具

		npm install -g react-native-cli

## 创建项目

* 进入工作目录，然后运行命令，项目名暂定为 HelloWorld

		react-native init HelloWorld

> 安装过程中，可能会出现需要安装 python 与 MSBuild 的情况，可以不用管他，有强迫症的朋友也可以按照提示进行安装，注意环境变量的配置

* 此处需要等待几分钟，等待npm的模块下载和项目创建。

* 进入`HelloWorld`文件夹运行packager

		react-native start

	可以访问 http://localhost:8081/index.android.bundle?platform=android 验证打包后的脚本
	如果遇到`ERROR Watcher took too long to load`的报错，请尝试修改`node_modules/react-native/packager/react-packager/src/FileWatcher/index.js`
	的参数 `MAX_WAIT_TIME` 从25000改为更大的值（单位是毫秒）

* 保持packager开启，并运行以下命令。

		cd HelloWorld
		react-native run-android

	> 注意：这里会有一堆的坑

	> 出现 SDK location not found
		：需要将 SDK 的路径配置到环境变量 ANDROID_HOME 中

	> 出现 No connected devices!
		：需要开启 AVD 模拟器

	> 出现 com.android.ddmlib.ShellCommandUnresponsive    Exception
		: 安装 APK 超时导致的问题，请检查上文中安装SDK的环节里所有依赖是否都已装全，platform-tools是否已经设到了PATH环境变量中，运行adb devices能否看到设备。

  	> 出现 Unable to download JS bundle
  		: 抖动或者按下 Menu 键，选择 Dev Settings，输入本机的IP地址（局域网IP，非127.0.0.1，默认端口号为8081），然后按下返回，并Reload JS即可

  	> 出现 Unable to connect with remote debugger
  		: 再次运行下 react-native start 的命令，即可

* 上述报错中，由于根据Facebook的技术人员回应，上面的问题是安卓模拟器的工具问题，暂时无法修复，建议安装 Genymotion。
* 有条件的可以安装 Genymotion，可能会遇到无法登入的问题，实在不行，可以安装 BlueStacks 不过要小心他推送的广告与垃圾应用。

## 笔记

* 尝试修改 index.android.js
	* eg：将文字`Welcome to React Native!`修改为`Hello World！`，并重新 Reload JS，即可将修改刷新到应用中。

* 关于 React-Native 与 React 的区别
	1. 不使用类似 DIV 和 SECTION 等的块元素，改用 React 的 View组件，它会映射到 IOS 组件的 UIView

			<View>
				<View></View>
			</View>

	2. 所有的文本都应该封装到 Text 组件里。
	3. 没有样式表 - 你的所有的样式都是被写成 JavaScript 对象的。
	4. 不必要担心浏览器的兼容问题，ES6 harmony 是在盒子之外受到支持的，flexBox 也是一样

* Chrome调试
	1. 打开 [debugger-ui](http://localhost:8081/debugger-ui) 界面
	2. 安装 Chrome 插件：React Developer Tools
	3. 打开安卓模拟器，打开 Menu，选择 Debug JS
	4. 在代码中需要 debug 的地方使用 console.log
	5. 打开 debugger-ui, 按下 F12 进入开发者模式

> 如果显示 Status: Waiting, press ?R in simulator to reload and connect. 则重新在模拟器中 Reload JS

* React-Native的组件，具体组件的属性参考 [docs](http://reactnative.cn/docs/getting-started.html)
	* StyleSheet组件：声明样式，并封装为 Javascript 对象
		* 注：放在文件末尾声明，避免重复渲染，属性名与值和 WEB 常用相同
		* 支持样式的组件有以下几个
			* View
			* Image
			* Text
			* Flex
			* Transform
	* 以下不累述，具体参考文档。

* 导航器 Navigator 与 NavigatorIOS
	* 用于管理场景中导航，类似 H5 的 historyAPI 的作用
	* 区别在于 Navigator 兼容 iOS 与 Android，而NavigatorIOS仅支持 iOS

*  文件命名方式
	* React-Native会当前平台自动加载后缀名带有.ios.或.android.的文件
	* 举例:
		* BigButton.ios.js 与 BigButton.android.js
		* 代码中加载只需要写 import BigButton from './BigButton' 即可

* 第三方模块：[https://js.coach/](https://js.coach/)
* 已知的问题：[http://reactnative.cn/docs/known-issues.html#content](http://reactnative.cn/docs/known-issues.html#content)

> 关于第三方模块，需要注意对平台的支持，很多第三方可能仅支持IOS，虽然标注了同时支持安卓，例如:Swiper，但实际测试结构是BUG有一大堆
> 解决方案：动手能力强的直接去修改第三方的代码，或者去 github 上对问题进行提交，以期望作者进行修复。

## 代码相关

* 关于IOS与Android的差异性
	* 验证工具：https://rnplay.org/apps/fgncag

* 关于TextInput
	1. border属性相关设置，在安卓下是无法起作用的，IOS可以正常支持圆角与框的属性设置
		* 相关连接：https://github.com/facebook/react-native/issues/4619
	2. 在安卓下，默认会有下划线，使用underlineColorAndroid = "transparent"可以取消此设置

* 关于Navigator
	1. initialRoute参数，如果提供的是一个返回是 object 的方法名，会出现 Waring 级别警告，但不影响功能
	2. renderScene参数，如果提供的方法中，使用 this.setState() 会造成 APP 崩溃，即使你已经 bind(this)

