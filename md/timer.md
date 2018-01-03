## 计时器

### 定时执行一次

```js
var f = function(){
  	alert("1秒后执行一次!")
}

//接受两个参数 f表示定时执行的函数，time表示多少时间后执行，若time=0，则在当前函数执行完后立即执行
s3.timer.timeout(f,1000);

//若不传时间，则默认time=0;
s3.timer.timeout(f);  //当前函数执行完后立即执行
```

### 定时循环

```js
var f = function(){
  	console.log("hello!")
}
var start = 200; //200毫秒后执行
var interval = 30000;  //每5分钟执行一次
var end = 600000; //10分钟后结束 

//按照上面的设定执行
s3.timer.interval(f,start,interval,end);

//若不传end，则永久循环不会结束
s3.timer.interval(f,start);

//若不传interval 和end，则等同于timeout函数
```

