## 文件上传

s3.js提供了标准的文件上传功能，任何文件都可以通过改接口上传至指定路径，在指定路径的内部处理逻辑内我们可以通过特定方法来处理该上传的文件。

### 接口

| 接口                          | 功能                                       |
| --------------------------- | ---------------------------------------- |
| s3.checkFile(file,callback) | 接受一个文件对象和一个回调函数，返回对该文件对象的检验是否允许，是否允许通过setAllow设定，也可以使用默认；callback只有在文件时图片的时候有效，并会在callback中返回一个dataUrl的图片预览路径 |
| s3.upload(file,data,url)    | 接受一个文件对象和一个数据对象，数据对象可以为空；将文件上传到指定路径，并返回一个promise，包含上传的结果 |
| s3.setAllow(ary)            | 接受一个字符串数组，用来表明允许的文件格式；字符串应为后缀名           |

#### 文件合法性

文件合法性主要是设定允许上传的文件，并且进行文件后缀的校验。

```javascript
var ary = ["jpg","jpeg","png"];  //允许固定格式的图片上传
//只允许图片上传
s3.setAllow(ary);



//对于某个文件对象
//var file = document.getElementById('fileUpLoad')[0].files[0];
var result = s3.checkFile(file,callback);
//如果上传的是 正确的图片，则返回{ status:'000',retMsg:'校验成功'}

//同时，如果有callback的回调函数传入，则会返回一个dataUrl预览路径
function callback(dataUrl){
  	//dataUrl 是一个编译过的图片
}
```

#### 文件上传

文件上传时，通过调用s3.upload来上传。如果第三个参数url为空，s3.upload内部会自动查找文件的上传路径，该路径需要在S3Config.php中配置，在S3Config.php中需要声明getUploadURL函数

```javascript
//S3Config.php中的配置

//配置上传地址
var getUploadURL = function(){
    return "/<?php echo _CUSTID?>/common/handler.php";  //你也可以配到别的路径下
};
```

```javascript
//index.js  你的js文件中

//对于任意一个文件对象file，直接调用
var promise = s3.upload(file,data);
promise.then(function(result){
  	//result返回上传的结果
});


//如果你需要不在s3config.php中指定上传地址，则需要在调用upload的时候指定
var url = "http://你的路径/handler.php";
var promise = s3.upload(file,data,url);
promise.then(function(result){
  	//result返回上传的结果
});
```

#### 一个例子

该例子展示了如何进行文件的上传，并在后台处理

`s3config.php`

```js
//配置上传地址
var getUploadURL = function(){
    return "/<?php echo _CUSTID?>/common/handler.php";  
};
```

`index.html`

```html
<!--  一段上传文件的代码 -->
<div>
  <img src="" id="preview" type="hidden">
  <input type="file" id ="fileUpload">
  <button type="button" id="doUpload">上传</button>
  <span id="info"></span>
</div
```

`index.js`

```javascript
$(function(){
  
  
        //只允许图片上传
  		var ary = ["jpg","jpeg","png"]; 
        s3.setAllow(ary);
  
  		//如果文件发生改变 就进行验证合法性
  		$("#fileUpload").on("change",function(){
          	  
              //获取图片对象
              var fileUpLoad = $(this)[0].files[0];
          		
          
          	  //合法性校验
              var result = s3.checkFile(fileUpLoad,showPreview);
              if(result.status == "000"){
                  //如果合法，打印信息
                  $("#info").html(result.retMsg);
              }else{
                  //如果不合法，打印警告
                  $("#info").html(result.retMsg);
              }

              function showPreview(result){
                  if(result)
                      //如果有dataUrl返回，说明是图片，则展示预览
                      $("#preview").attr("src",result).show();
              }
    	});
  
  		
  		//点击文件上传按钮
  		$("#doUpload").on("click",function(){
                var fileobj = $("#fileUpload");
          		
          		//必须要先有文件
                if(fileobj[0].files.length){
                    var fileUpLoad = fileobj[0].files[0];
                  
                    //上传文件了
                    //这里指明了上传的时候需要调用的bean 和方法
                    //如果你是上传EXCEL直接解析，那么你需要在S3Config更改你上传文件的地址
                    //当然你也可以指定bean和方法，在你的bean里面处理这个excel
                    var promise = s3.upload(fileUpLoad,{
                        invokeBean : "fileBean",   //调用后台的fileBean
                        invokeMethod : "uploadFile"   //调用fileBean的uploadFile方法
                    });
                  
                  	//处理异步上传的结果
                    promise.then(function(result){
                        if(result['annexUrl']){
                            alert("上传成功了，地址是："+result.annexUrl);
                        }else{
                            alert(result.retMsg);
                        }
                    })
                }else{
                    alert("先要上传文件")
                }
		});
});
```



`FileBean.java`

```java
public Map<String, Object> uploadFile() throws Exception {
		
		logger.info("开始上传文件!");
		Map<String, Object> resultMap = new HashMap<String, Object>();
		try {
			List<FileItem> fileItems = dform.getItems();
			if(fileItems==null || fileItems.size()==0){
				String msgInfo = "上传的文件信息不存在，请重新上传！";
				logger.info(msgInfo);
				throw new BusinessException(BusinessException.ERROR_OTHER,msgInfo);
			}
			Map<String, Object> formMap = this.getFormParameter();
			logger.info("传进来的参数：" + formMap.toString());
			
			for (FileItem item : fileItems) {
				if (!item.isFormField()) {// 判断是否是文件
					String curTime = DateUtil.getDateStr(DateUtil.YYYY_MM_DD_HH_MM_SS);
					Map<String, Object> fileMap = new HashMap<String, Object>();
					fileMap.put("uploadTime", curTime);
					String fileName = item.getName();
					fileMap.put("annexName", fileName);
					// 获取文件二进制数组
					byte[] bt = item.get();
					ImageUpload imageu = new ImageUpload();
					imageu.setImageName(fileName); // 图片名称
					imageu.setImageBuff(bt); // 图片字节流
					String extName="";
					if(StringUtils.isNotBlank(fileName)){
						if(fileName.lastIndexOf(".")>-1){
							extName = fileName.substring(fileName.lastIndexOf(".")+1);
						}
					}
				    imageu.setImageExtName(extName);
					imageu.setCustomerId(dform.getCustid());
					Map<String, Object> remoteMap = new HashMap<String, Object>();
					remoteMap = (Map<String, Object>) remoteCall.remoteCall("asmc", "imageManageBean", "uploadImage", "asmc", imageu);
					if (remoteMap != null && !remoteMap.isEmpty()) {
						String groupName = Utils.getStringValue(remoteMap, "groupName");
						String annexUrl = Utils.getStringValue(remoteMap, "flieUrl");
						if(StringUtils.isBlank(annexUrl)){
							String msgInfo = "该文件不能为空,"+ "上传文件失败！";
							logger.error(msgInfo);
							throw new BusinessException(BusinessException.ERROR_OTHER, msgInfo);	
						}
						fileMap.put("groupName", groupName);
						fileMap.put("annexUrl", annexUrl);
                      	fileMap.put("status", "000");
                      	resultMap.put("retCode","200");
                      	resultMap.put("retMsg","上传成功");
						resultMap = fileMap;
					}else{
						resultMap.put("status","400");
                      	resultMap.put("retCode","400");
                      	resultMap.put("retMsg","上传失败");
					}
				}
			}
			// 给回调函数传值。
			
		} catch (Exception e) {
			Class<?> cObj = this.getClass();
			String className = cObj.getName();
			logger.error(className + "-查询出错。", e);
			if (e instanceof BusinessException) {
				throw new BusinessException(BusinessException.ERROR_OTHER, e.getMessage());
			} else {
				throw new BusinessException(BusinessException.ERROR_INFOPAGE, "系统出错" + e.getMessage());
			}
		}
		logger.info("上传文件结束!");
		return resultMap;
	}
```







