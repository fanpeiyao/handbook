## 表单数据处理

表单管理主要是为了方便开发人员在处理表单的时候，能够通过调用接口，自动化填充表单，以及通过调用接口，自动化获取表单内容， 以及清空表单锁开发。表单管理封装在S3.forms对象中。

forms对象处理都依赖于表单中的元素都存在name属性，并将name属性作为与数据对象交互的键值；如果name属性不存在， 则无法检测到。

| 方法          | 功能                                     |
| ----------- | -------------------------------------- |
| json2form() | 将数据导入表单                                |
| form2json() | 将form表单中的数据封装成JSON对象后返回，根据表单中标签的name属性 |
| clearForm() | 清空表单                                   |

```html
<form id = "formid">
    <input type = "text" name="name">
    <input name = "hobby" type = "checkbox" value ="play">play
    <input name = "hobby" type ="checkbox" value ="sleep">sleep
    <input name = "hobby" type ="checkbox" value ="eat">eat
    <input name = "sex" type ="radio" value = "male">male
    <input name = "sex" type ="radio" value = "female">female
    <select name = "name5">
        <option value="aaaa">
          	haha
        </option>
        <option value ="bbbb">
          	hehe
        </option>
        <option value ="keke">
          	keke
        </option>
    </select>
</form>
```

1.json2form

json2form(form,data)接受两个参数form为HTML对象，data为json数据对象，通过调用后，对form元素进行一次遍历根据其name值赋值。

例子：

```js
var form = document.getElementById('formid');
var obj = {
     name:"张三",
     hobby:['play','sleep'],
     sex:'aaab',
     name5:'bbbb',
};
S3.form.json2form(form,obj);        	//将数据导入表单 接受表单对象和json格式的数据对象作为参数
```

2.form2json

form2json(form)接受一个参数form为HTML对象，  根据表单中标签的name属性将form表单中的数据封装成JSON对象后返回。

例子：

```js
console.log(S3.form.form2json(form));   //从表单导出数据   参数：表单对象
```

3.clearForm

例子：

```js
S3.form.clearForm(form);                //清空表单         参数：表单对象
```



