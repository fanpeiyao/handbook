## 数据接口和链接

通过ajax来完成前后台的数据接口调用,ajax封装后提供两个接口S3.ajax和S3.setURL，由于ajax操作比较频繁，接口直接封装在S3的属性中。

### ajax数据接口

| 方法       | 功能                       |
| -------- | ------------------------ |
| setURL() | 传入ajax请求地址               |
| ajax()   | 为通用的ajax调用方法，适用于所有ajax调用 |

1.setURL

例子：

```js
//对于任意请求地址
S3.setURL('http://s3core2.gongyinju.com/s3Core/~main/ajax.php');
```

2.ajax

ajax方法为通用的ajax调用方法，适用于所有ajax调用，每次调用传递5个参数：(id,  paramStr,  appid, method, async) ；id表示后台bean，paramStr表示参数对象，appid表示应用编号，method 表示请求方式，默认为'get' ，async 表示异步标识，默认为false同步

例子：

```js
//同步
S3.setURL('http://s3core2.gongyinju.com/s3Core/~main/ajax.php');
var param = {
  	"appid":"s3Core"
};
var a =S3.ajax('userAuthenBean.getPublicKey',param,'usermanage');
//异步
var param = {
  	"appid":"s3Core"
};
var promise =S3.ajax('userAuthenBean.getPublicKey',param,'usermanage',true);
promise.then(function(result){
  	console.log(result);
})
```

### 链接跳转

jump跳转主要是为了方便开发人员在处理页面的时候，能够通过调用接口实现页面跳转开发，可传入数据。每次调用传递2个参数：(url,data);

例子：

```js
//在productList页面
S3.jump("/REMOTE_MODULE/app/productDetail.php",{productNo:'productId',companyId:'compId'});
//在productDetail页面
var productId=S3Params.getData("productNo");	//S3Params一般在S3Config.php中
var compId=S3Params.getData("companyId");
console.log(compId,productId);
```