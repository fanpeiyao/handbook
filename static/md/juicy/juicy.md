# Juicy 框架

## 简介

Juicy框架是前端团队构建的用来进行s3独立页面应用的开发工作的一个框架，Juicy集成了工银聚团队开发必须的s3.js，引用了jquery、bootStrap、materializecss、swiper、iscroll、arttemplate等多方面的插件，确保项目应用在开发过程中能够快速获得自己想要的功能。Juicy以s3.js为核心，提供了bootStrap和material design两套风格，开发者可以根据自己的喜好来决定页面的风格。

Juicy分桌面和移动端，分别放在desktop和mobile文件夹下，两者的公共资源则放在vendor文件夹下。特色项目可选择自己需要开发的客户端来选择对应的文件夹。

## 资源库地址

目前s3coretese集成了Juicy前端框架，svn地址为: *http://109.6.29.153:8090/svn/gyj1/branches/zhuisp/Juicy*

## 文件结构

Juicy的基本文件结构如下：

```
WebContent
|-----inc   
|-----common                          
|		|------js //废弃 不建议使用
|		|------core/ajax/module/handler  //php中间件相关文件 PHP后台
|       |------validate.config.php  //配置重复提交的内容
|		|------sys.config.php // 项目配置文件
|		
|-----app(Juicy框架部分)
		|------vendor   //这部分在测试环境，生产环境均提供了静态资源路径,你可以按需求应用
		|		|------jquery
		|		|------bootstrap
		|		|------materialize
		|		|------s3
		|		|------swiper
		|		|------iscroll
		|		|------template
		|		|------其他插件
		|
		|------desktop/mobile 
				|-------public
				|       |----S3Config.php   //*重要  前端框架配置文件
				|       |----header.php   //头部  公共样式和js
				|       |----footer.php   //公共尾部 暂时空
				|-------js	
				|       |----*.servcie.js    //处理后台调用接口
				|       |----*.js        //与每个页面相关的js
				|
				|-------css
				|       |----*.css   //页面内部css
				|		
				|-------*.php   //独立应用页面
```
