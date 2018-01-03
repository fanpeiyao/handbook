## 数据缓存

istore用来缓存页面中数据，可以在页面间进行传递使用。isotre使用浏览器的sessionStorage,localStorage来缓存数据， sessionStorage当用户登出浏览器时，数据消失；localStorage为永久性存储；

#### sessionStorage

| 方法       | 功能                 |
| -------- | ------------------ |
| set()    | 设置sessionStorage缓存 |
| get()    | 获取sessionStorage缓存 |
| remove() | 删除sessionStorage缓存 |

1.set

set函数接受两个参数分别为key值和value值

例子：

```js
S3.istore.set('num','2333')  // set    
```

2.get

get函数接受key值获取value值

例子：

```js
S3.istore.get('num')  // '2333'    
```

3.remove

remove函数接受key值删除该存储记录

例子：

```js
S3.istore.remove('num')  // set    
```



### localStorage

| 方法            | 功能               |
| ------------- | ---------------- |
| setLocal()    | 设置localStorage缓存 |
| getLocal()    | 获取localStorage缓存 |
| removeLocal() | 删除localStorage缓存 |

localStorage的方法与sessionStorage使用方法相同



