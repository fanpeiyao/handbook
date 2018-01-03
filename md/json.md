## JSON

通过**JSON**来完成前后台的数据转换,JSON封装后提供两个接口JSON.stringify和JSON.parse，JSON.stringify(data)用于把一个对象解析成字符串；JSON.parse(data)用于把一个字符串解析成对象，单引号写在{}外，每个属性名都必须用双引号，否则会抛出异常；

### 函数定义

```javascript
date.toJSON()   		//把日期解析为Y-M-MT*:*:*Z格式
num.toJSON()   			//返回valueOf()
string.toJSON()   		//返回valueOf()
boolean.toJSON()   		//返回valueOf()
JSON.stringify(a)   	//把对象解析成字符串
JSON.parse(a)   		//把字符串解析成对象
```

### 使用方法

```js
//date.toJSON
var date = new Date(1510621267683);
console.log(date.toJSON()) 			//2017-11-14T01:01:07.683Z

//JSON.stringify
var a ={'name':'xiaoming','age':'18'};
console.log(JSON.stringify(a))		//'{"name":"xiaoming","age":"18"}'

//JSON.parse
var a ={'name':'xiaoming','age':'18'};
console.log(JSON.parse(a))			//{"name":"xiaoming","age":"18"}
```



