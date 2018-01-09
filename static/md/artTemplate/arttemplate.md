#简介
art-template 是一个简约、超快的模板引擎。

它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。

## 特性

1. 拥有接近 JavaScript 渲染极限的的性能
2. 调试友好：语法、运行时错误日志精确到模板所在行；支持在模板文件上打断点（Webpack Loader）
3. 支持 Express、Koa、Webpack
4. 支持模板继承与子模板
5. 浏览器版本仅 6KB 大小

## 模板

art-template 同时支持两种模板语法。标准语法可以让模板更容易读写；原始语法具有强大的逻辑处理能力。

**标准语法**

```html
{{if user}}
  <h2>{{user.name}}</h2>
{{/if}}
```

**原始语法**

```html
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

原始语法兼容 [EJS](http://ejs.co)、[Underscore](http://underscorejs.org/#template)、[LoDash](https://lodash.com/docs/#template) 模板。

## 渲染模板

```js
var template = require('art-template');
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: 'aui'
    }
});
```

## 核心方法

```js
// 基于模板名渲染模板
template(filename, data);

// 将模板源代码编译成函数
template.compile(source, options);

// 将模板源代码编译成函数并立刻执行
template.render(source, data, options);
```
#安装

## 获取和载入

下载：[lib/template-web.js](download/template-web.js)（gzip: 6kb）
复制到你的项目中，并在你的需要开发的文件中引用。如果是Juicy框架，则已经在vendor文件夹下了，你只要在使用的页面引用即可。如果使用art模版引擎的页面比较多，那么可以将下面的语句放到header.php。
```html
<script src='vendor/template.js'></script>
```

## 在浏览器中实时编译

**兼容**

IE8+（IE8 需要补丁才能运行。）

**差异**

因为浏览器不支持文件系统，所以 `template(filename, data)` 不支持传入文件路径，它内部使用 `document.getElementById(filename).innerHTML` 来获取模板，例如：

```html
<script src="lib/template-web.js"></script>
<script id="tpl-user" type="text/html">
{{if user}}
  <h2>{{user.name}}</h2>
{{/if}}
</script>
```
# 基本语法

art-template 支持标准语法与原始语法。标准语法可以让模板易读写，而原始语法拥有强大的逻辑表达能力。

标准语法支持基本模板语法以及基本 JavaScript 表达式；原始语法支持任意 JavaScript 语句，这和 EJS 一样。

## 输出

**标准语法**

```html
{{value}}
{{data.key}}
{{data['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
```

**原始语法**

```html
<%= value %>
<%= data.key %>
<%= data['key'] %>
<%= a ? b : c %>
<%= a || b %>
<%= a + b %>
```

模板一级特殊变量可以使用 `$data` 加下标的方式访问：

```html
{{$data['user list']}}
```

## 原文输出

**标准语法**

```html
{{@value}}
```

**原始语法**

```html
<%- value %>
```

> 原文输出语句不会对 `HTML` 内容进行转义处理，可能存在安全风险，请谨慎使用。

## 条件

**标准语法**

```html
{{if value}} ... {{/if}}
{{if v1}} ... {{else if v2}} ... {{/if}}
```

**原始语法**

```html
<% if (value) { %> ... <% } %>
<% if (v1) { %> ... <% } else if (v2) { %> ... <% } %>
```

## 循环

**标准语法**

```html
{{each target}}
    {{$index}} {{$value}}
{{/each}}
```

**原始语法**

```html
<% for(var i = 0; i < target.length; i++){ %>
    <%= i %> <%= target[i] %>
<% } %>
```

1. `target` 支持 `array` 与 `object` 的迭代，其默认值为 `$data`。
2. `$value` 与 `$index` 可以自定义：`{% raw %}{{each target val key}}{% endraw %}`。

## 变量

**标准语法**

```html
{{set temp = data.sub.content}}
```

**原始语法**

```html
<% var temp = data.sub.content; %> 
```

## 模板继承

**标准语法**

```html
{{extend './layout.art'}}
{{block 'head'}} ... {{/block}}
```

**原始语法**

```html
<% extend('./layout.art') %>
<% block('head', function(){ %> ... <% }) %>
```

模板继承允许你构建一个包含你站点共同元素的基本模板“骨架”。范例：

```html
<!--layout.art-->
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>{{block 'title'}}My Site{{/block}}</title>

    {{block 'head'}}
    <link rel="stylesheet" href="main.css">
    {{/block}}
</head>
<body>
    {{block 'content'}}{{/block}}
</body>
</html>
```

```html
<!--index.art-->
{{extend './layout.art'}}

{{block 'title'}}{{title}}{{/block}}

{{block 'head'}}
    <link rel="stylesheet" href="custom.css">
{{/block}}

{{block 'content'}}
<p>This is just an awesome page.</p>
{{/block}}
```

渲染 index.art 后，将自动应用布局骨架。

## 子模板

**标准语法**

```html
{{include './header.art'}}
{{include './header.art' data}}
```

**原始语法**

```html
<% include('./header.art') %>
<% include('./header.art', data) %>
```

1. `data` 数默认值为 `$data`；标准语法不支持声明 `object` 与 `array`，只支持引用变量，而原始语法不受限制。
2. art-template 内建 HTML 压缩器，请避免书写 HTML 非正常闭合的子模板，否则开启压缩后标签可能会被意外“优化。

## 过滤器

**注册过滤器**

```js
template.defaults.imports.dateFormat = function(date, format){/*[code..]*/};
template.defaults.imports.timestamp = function(value){return value * 1000};
```

过滤器函数第一个参数接受目标值。

**标准语法**

```html
{{date | timestamp | dateFormat 'yyyy-MM-dd hh:mm:ss'}}
```

`{% raw %}{{value | filter}}{% endraw %}` 过滤器语法类似管道操作符，它的上一个输出作为下一个输入。

**原始语法**

```html
<%= $imports.dateFormat($imports.timestamp(date), 'yyyy-MM-dd hh:mm:ss') %>
```

> 如果想修改 `{% raw %}{{{% endraw %}` `{% raw %}}}{% endraw %}` 与 `<%` `%>`，请参考 [解析规则](rules.html)。
# 解析规则

`template.defaults.rules`

art-template 可以自定义模板解析规则，默认配置了原始语法与标准语法。

## 修改界定符

```js
// 原始语法的界定符规则
template.defaults.rules[0].test = /<%(#?)((?:==|=#|[=-])?)[ \t]*([\w\W]*?)[ \t]*(-?)%>/;
// 标准语法的界定符规则
template.defaults.rules[1].test = /{{([@#]?)[ \t]*(\/?)([\w\W]*?)[ \t]*}}/;
```

它们是一个正则表达式，你可以只修改界定符部分。例如修改 `<%` `%>` 为 `<?` `?>`：

```js
var rule = template.defaults.rules[0];
rule.test = new RegExp(rule.test.source.replace('<%', '<\\\?').replace('%>', '\\\?>'));
```

## 添加语法

从一个简单的例子说起，让模板引擎支持 ES6 `${name}` 模板字符串的解析：

```js
template.defaults.rules.push({
    test: /\${([\w\W]*?)}/,
    use: function(match, code) {
        return {
            code: code,
            output: 'escape'
        }
    }
});
```

其中 `test` 是匹配字符串正则，`use` 是匹配后的调用函数。关于 `use` 函数：

* 参数：一个参数为匹配到的字符串，其余的参数依次接收 `test` 正则的分组匹配内容
* 返回值：必须返回一个对象，包含 `code` 与 `output` 两个字段：
    * `code` 转换后的 JavaScript 语句
    * `output` 描述 `code` 的类型，可选值：
        * `'escape'` 编码后进行输出
        * `'raw'` 输出原始内容
        * `false` 不输出任何内容

值得一提的是，语法规则对渲染速度没有影响，模板引擎编译器会帮你优化渲染性能。
编译

template.defaults.debug

art-template 内建调试器，能够捕获到语法与运行错误，并且支持自定义的语法。在 NodeJS 中调试模式会根据环境变量自动开启：process.env.NODE_ENV !== 'production'

设置 template.defaults.debug=true 后，等同于：

    {
        "cache": false,
        "minimize": false,
        "compileDebug": true
    }

更多参见 选项。
# 编译

`template.defaults.debug`

art-template 内建调试器，能够捕获到语法与运行错误，并且支持自定义的语法。在 NodeJS 中调试模式会根据环境变量自动开启：`process.env.NODE_ENV !== 'production'`

设置 `template.defaults.debug=true` 后，等同于：

```json
{
    "cache": false,
    "minimize": false,
    "compileDebug": true
}
```

更多参见 [选项](./options.html)。

#API

## template(filename, content)

根据模板名渲染模板。

* **参数**：
    * `{string} filename`
    * `{Object,string} content`
* **返回值**：
    * 如果 `content` 为 `Object`，则渲染模板并返回 `string`
    * 如果 `content` 为 `string`，则编译模板并返回 `function`

```js
var html = template('/welcome.art', {
    value: 'aui'
});
```

> 浏览器版本无法加载外部文件，`filename` 为存放模板的元素 `id`

**示例**

编译模板并缓存。

```js
// compile && cache
template('/welcome.art', 'hi, <%=value%>.');

// use
template('/welcome.art', {
    value: 'aui'
});
```

## .compile(source, options)

编译模板并返回一个渲染函数。

* **参数**：
    * `{string} source`
    * `{Object} options`
* **返回值**：`{function}`

**示例**

```js
var render = template.compile('hi, <%=value%>.');
var html = render({value: 'aui'});
```

## .render(source, data, options)

编译并返回渲染结果。

* **参数**：
    * `{string} source`
    * `{Object} options`
* **返回值**：`{string}`

**示例**

```js
var html = template.render('hi, <%=value%>.', {value: 'aui'});
```

## .defaults

模板引擎默认配置。参考 [选项](./options.html)。

* **类型**：`{Object}`

## .extension

给 NodeJS `require.extensions` 注册的模板渲染函数。 

* **类型**：`{function}`

**示例**

加载 `.ejs` 模板：

```js
var template = require('art-template');
require.extensions['.ejs'] = template.extension;

var view = require('./index.ejs');
var html = view(data); 
```

`.art` 默认被注册，可以直接使用：

```js
var template = require('art-template');
var view = require('./index.art');
var html = view(data); 
```

需要注意的是：此功能仅对 NodeJS 生效，如果要在浏览器中使用模板文件渲染功能，请使用 Webpack [art-template-loader](../webpack)。