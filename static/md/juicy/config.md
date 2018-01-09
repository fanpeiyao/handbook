##框架配置

###框架适用情况
Juicy框架支持两种项目类型：独立应用和特色应用。两者的区别是独立应用不过转发器，直接作为内嵌页面展示在门户或者s3的项目中；而特色应用经过转发器，只用来展示在S3项目中。

独立应用配置

```php
<?php
    define('_ENABLE_LOCALDEBUG',true);
    define('_CUSTIDMODE','010');
?>
```
特色转发配置
```php
<?php
    define('_ENABLE_LOCALDEBUG',false);
    define('_CUSTIDMODE','000');
?>
```
对于特色转发的项目，请务必注意在本地调试时，必须使用`s3core1dev.gongyinju.com/你的项目`作为调试地址，并将你本地的apache端口置为8080

###基础配置

    在S3Config.php中，一些配置默认写在其中，分别是`S3Params`、`getContextPath`、`getSubmitUrl`、`getJumpUrl`、`getUploadUrl`。这几个配置分别是用来实现获取参数，获取应用号，获取前后端调用的请求地址和跳转的地址。
```javascript
var getContextPath = function(){
	return '<?php echo _CUSTID?>';
};
var getSubmitURL = function(){
	return '/<?php echo _CUSTID?>/common/ajax.php';
};
var getJumpUrl = function(page){
	var url = '/<?php echo _CUSTID?>/app/desktop/JUMPURL.php'+'<?php if(_ENABLE_LOCALDEBUG){echo '?sessionid='.$tempSessionid;}?>';
	return url.replace('JUMPURL.php',page);
};
var getUploadURL = function(){
    return "/<?php echo _CUSTID?>/common/handler.php";
};
```
###  获取参数
其中`S3Params`用来获取前一个页面提交过来的参数:
```js
var S3Params = (function(){
	var getobj = JSON.parse('<?php echo "{\"\":\"\""; foreach($_GET as $key=>$val){echo ",\"".addslashes(addslashes(htmlspecialchars($key)))."\":\"".addslashes(addslashes(htmlspecialchars($val)))."\"";} echo "}";?>');
	var postobj = JSON.parse('<?php echo "{\"\":\"\""; foreach($_POST as $key=>$val){echo ",\"".addslashes(addslashes(htmlspecialchars($key)))."\":\"".addslashes(addslashes(htmlspecialchars($val)))."\"";} echo "}";?>');

	var params = {
		getobj:getobj,
		postobj:postobj,//提供全量参数，用于给tpl文件传值。
		getData:function(key){
			return getobj[key]||postobj[key];
		}
	};
	return params;
})();
```
通过调用`S3Params.getData(key)`来获得前一个页面传递的参数。
```js
	//假设前一个页面传递了userName过来，通过下面代码获取
	var userName = S3Params.getData('userName');
```
###  获取应用编号和请求地址
完成一次前后台数据调用请求，至少需要配置的函数包括2个：`getContextPath`和`getSubmitUrl`。其中`getContextPath`需要返回当前项目的名称，而`getSubmitUrl`需要返回每次向后台请求参数时的请求地址。

例如：
```js
//S3Config.php中的配置代码

//返回当前项目应用号
var getContextPath = function(postfix){
	return "s3Core";
};
//返回后台的请求地址
var getSubmitUrl = function(){
	//如果是过转发器的项目，请使用类似下面的相对路径地址，转发器会自动补全
	return '/s3Core/common/ajax.php';
};
```

### 跳转地址
对于一些过分行特色转发器的特色应用，通常还需要指定页面跳转的地址，这里需要通过如下的代码来执行:
```js
//S3Config.php中的的配置代码

var getJumpUrl = function(page){
	var url = '/s3Core/app/desktop/JUMPURL.php';
	return url.replace('JUMPURL.php',page);
}
```
上述代码中，使用一个指定的url地址，转发器会对这个地址自动解析并加上转发器自己的前缀，后面通过特殊的replace语句，来将跳转地址改动为本地某个地址，此时，就可以通过s3.js的jump函数来进行页面跳转了。
```js
//某个js的代码
s3.jump(getJumpUrl('home.php'),{id:"001010022"});
```
