## 事件管理

event方法中封装了一些在平时开发中会经常使用到事件的方法，并且解决了一些浏览器兼容性问题；扩展了一些IE8不支持的方法等。

| 方法                | 功能                                       |
| ----------------- | ---------------------------------------- |
| init()            | 初始化事件绑定,通过检测元素的属性来完成绑定事件                 |
| addTypes()        | 增添没有提供的事件类型，已提供例如：'click','blur','focus'... |
| addHandler()      | 满足浏览器兼容性的事件绑定函数                          |
| removeHandler()   | 事件解除绑定，考虑浏览器兼容性                          |
| getEvent()        | 兼容性获取事件对象                                |
| getTarget()       | 获取当前事件的节点                                |
| stopPropagation() | 阻止冒泡                                     |
| preventDefault()  | 阻止浏览器事件                                  |

1.init

例子：

```js
<input type = "text"  mouseover="helloworld(e)" >
var helloworld = function(e){
   console.log(e);
};
S3.event.init(); //---调用执行
```

2.addTypes

为处理事件类型添加没有提供的事件类型；

已提供的类型有：['blur','focus','click','dbclick','mouseover','mousedown','mouseup','mousemove','mouseout','mouseenter','mouseleave','change','load','unload','resize','scroll','select','submit','keydown','keypress','keyup','error'];

例子：

```js
S3.event.addTypes(str); 
```

3.addHandler

例子：

```js
var bind = document.getElementById("bind");
var bindEvent = function(){
  	console.log('已绑定事件')
};
S3.event.addHandler(bind,"click",bindEvent);		//---调用执行
```

4.removeHandler

例子：

```js
var bind = document.getElementById("bind");
var remove = document.getElementById("remove");
var bindEvent = function(){
  	console.log('已绑定事件')
};
var removeEvent = function(){
  	S3.event.removeHandler(bind,"click",bindEvent);
  	alert("再点击前面的绑定试试");
};
S3.event.addHandler(bind,"click",bindEvent);		//---调用执行绑定事件
S3.event.addHandler(remove,'click',removeEvent);	//---调用执行删除事件
```

5.getEvent

例子：

```js
var bind = document.getElementById("bind");
var bindEvent = function(){
  	var evt = S3.event.getEvent();     
  	console.log(evt)
};
S3.event.addHandler(bind,"click",bindEvent);		//---调用执行
```

6.getTarget

例子：

```js
var bind = document.getElementById("bind");
var bindEvent = function(){
  	var target = S3.event.getTarget(evt);   
  	console.log(target)
};
S3.event.addHandler(bind,"click",bindEvent);		//---调用执行
```

7.stopPropagation

例子：

```js
var bind = document.getElementById("bind");
var bindEvent = function(){
  	S3.event.stopPropagation(event)
};
S3.event.addHandler(bind,"click",bindEvent);		//---调用执行
```

8.preventDefault

例子：

```js
var bind = document.getElementById("bind");
var bindEvent = function(){
  	S3.event.preventDefault(event)
};
S3.event.addHandler(bind,"click",bindEvent);		//---调用执行
```



