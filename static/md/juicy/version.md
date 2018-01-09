##版本和升级

### 1.1.4
#### 版本内容
1、提供了开发、测试和生产的开关配置，通过开关分别指向不同的资源仓库，项目组可以根据当前项目所处的阶段来适用不同的资源库;对于配成非调试的项目
静态的js和css资源均使用缓存
2、解决了异步ajax调用后台时因php的session锁导致无法并发的问题，现在异步调用可以并发了
3、svn的名称从s3coretest更改为Juicy；地址在http://109.6.29.153:8090/svn/gyj1/branches/zhuisp/Juicy
#### 如何升级
1、静态资源缓存的优化
在sys.config.php中增加一个$debug配置

	$debug = true;  // debug  --本地开发/测试环境        false  -- 生产环境  默认生产
更新app/mobile/header.php文件和app/desktop/header.php文件   如果你有除了标准框架还有例如datatables的依赖，请仿照其他静态资源加上
在header.php上更改生产和测试的具体资源地址（PS:当前生产地址默认是在项目内部，需要根据项目投产地址来确定，未来会统一地址）
2、 异步ajax挂起的问题更新

	请直接更新inc/Token.class.php和ajax.php两个文件

### 1.1.3
#### 版本内容
1、增加icon图标库，对于任意使用框架的独立应用/特色应用，都可以使用上述的icon。使用方法见文档
2、对于任意的特色应用，如果需要在移动端框架的功能区域配置展示特殊的图标，也可以用该图标库
#### 如何升级
1、如果你的header.php是框架标准的，未经过改动，可直接更新header.php；若你的header.php是更改过的，那么在bootstrap.css引用后加入对iconfont.css的引用
     <link rel="stylesheet" href="<?php echo $vendor_resource?>/vendor/iconfont/iconfont.css">

### 1.1.2
#### 版本内容
1、s3.js升级到1.2.8
 增加一个处理金额过大问题的函数，封装在Number原型中,只要是Number类型的对象都可以调用, 例如   3.numFormat(3)  //
3.000  参数暂时为保留的小数位数，后续再根据实际情况优化；
2、增加一个ajax超时的参数，调用时 可以在s3.ajax(id,param,appid,async,timeout)第五个参数中指明超时时间
3、增加一个刷新token的全局函数，名为refreshToken放在S3Config.php中
4、增加一个跳转父页面的全局函数，名为toParentPage  放在s3config.php中
#### 如何升级
1、将新版的getToken.php替换老的
2、将新版的S3config.php替换老的
3、toParentPage（url） 接受一个 url作为参数，如果不传入url，将跳转到默认的地址，该默认地址你需要在S3CONFIG中配置.
4、注意： toParentPage函数只有在浏览器允许子页面调用父页面的情况下才能调用成功，否则会什么也不做。


### 1.1.1
#### 版本内容
1、espresso框架按要求升级到1.7.14;
2、s3.js升级到1.2.3
#### 如何升级
1、参考espresso版本升级文档升级espresso版本
2、从svn的版本中升级s3.js
### 1.1.0

初始版本

