## 特色页面跳转

jump跳转主要是为了方便开发人员在处理特色页面的时候，能够通过调用接口实现页面跳转开发，可传入数据。每次调用传递2个参数：S3.jump(url,data);

### 函数定义

```js
    /**
     * jump
     * @param url      跳转地址
     * @param data     数据
     */
    S3.jump(url,data);
```

### 使用样例

例子：

```js
S3.jump("/REMOTE_MODULE/app/productDetail.php",{productNo:'productId',companyId:'compId'});
//在productDetail页面
var productId=S3Params.getData("productNo");	//S3Params一般在S3Config.php中
var compId=S3Params.getData("companyId");
console.log(compId,productId);
```

