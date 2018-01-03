## 虚拟DOM 

element.js中封装了虚拟DOM的对象工具element。该模块中声明了一个虚拟的DOM对象Element。 Element对象可以以javascript对象的方式生成类似DOM结构的虚拟树，DOM处理性能 消耗比较大，在element中先通过javascript处理生成虚拟对象Element，再渲染成DOM树的处理性能比直接操作DOM更高， 逻辑上也更加容易理解。

element模块对外有1个接口,返回一个element对象，对象含有一个属性render，render属性渲染element对象 成HTML的DOM对象。实现对象渲染为DOM对象。

####  element函数

S3.element(tagName,props,children).render();对于任意一个对象，都可以用一下的虚拟对象描述，只要定义了标签名tagName，属性props，子节点children（子节点也可以是标签列表，也可以是文本），就可以通过javascript 来描述一个DOM对象。element就是基于这个基础生成的对象，Element对象的几个重要属性就是，tagName,props,children （对应的，子节点也可以是Element，也可以使文本）。所以，只要定义了正确的obj的层级关系，就可以生成一个虚拟的DOM树， 从而渲染成页面DOM。

例子：

```javascript
var el = S3.element;  //获取S3.element虚拟DOM对象接口

//每一个标签都要调用S3.element才能生成虚拟对象树
var ul = el('ul',{id:'list'},[
  	el('li',{class:'item'},['Item 1']),   //接受Element对象  需要先封装返回一个Element
  	el('li',{class:'item'},['Item 2'])
]);   //Element {tagName: "ul", props: Object, children: Array[2], key: undefined, count: 4}

//渲染
var html = ul.render();  //  <ul id="list"><li class="item">Item 1</li><li class="item">Item 2</li></ul>

//插入到页面
document.body.appendChild(html);
```





