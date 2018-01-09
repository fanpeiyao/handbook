##页面开发规范

### HTML5规范
Juicy框架中，所有的页面都遵循HTML5开发规范（IE9+），这就意味着一些高级的标签都是可以使用的，例如nav、section等。

不管移动端还是桌面，任意一个页面的结构都必须包含以下的语句。确保HTML结构无误，并且不会引起浏览器版本异常。如果使用公共的header.php文件，你可以看到header.php中已经为你写好了下面的结构，你只要将文件引用到你的php中，直接从body开始开发即可
```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
    <meta name="renderer" content="webkit">

     <!--ios -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="apple-touch-fullscreen" content="yes" />
    <meta name="format-detection" content="telephone=no,email=no" />

	<title>特色应用</title>

	<!-- 公共 css开始加载 -->
	<!-- 主题CSS 加载  动态加载请忽略 -->
	<!-- 公共js  -->
</head>
<body>
	<!-- 某个页面的css  -->


	<!--  某个页面的js  -->
</body>
</html>
```

### 页面风格
Juicy的移动和桌面都提供了两种风格，bootstrap和materializecss([开发手册](http://ui.gyj.com/materialize/))。这些都可以通过在header.php中引用不同的文件就可以实现风格切换，我们在例子中分别使用了`_material.php`的文件名来表示使用material design风格的例子。
当你使用bootstrap的时候，需要在header.php中引入bootstrap相关css和js，而注掉material相关的css和js。
```html
    <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../vendor/bootstrap/css/open-iconic-bootstrap.css">


    <!-- material -->
	<!--<link rel="stylesheet" href="../vendor/materialize/css/materialize.min.css">-->

    <script src="../vendor/jquery/jquery-3.2.1.min.js"></script>

    <script src="../vendor/bootstrap/js/popper.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>

    <!-- material -->
    <!-- <script src="../vendor/materialize/js/materialize.min.js"></script>-->
```
如果使用material design，就需要引用materialize的css和js并注释掉bootstrap的资源
```html
<!--
    <link rel="stylesheet" href="../vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="../vendor/bootstrap/css/open-iconic-bootstrap.css">
    -->


    <!-- material -->
	<link rel="stylesheet" href="../vendor/materialize/css/materialize.min.css">

    <script src="../vendor/jquery/jquery-3.2.1.min.js"></script>
<!--
    <script src="../vendor/bootstrap/js/popper.min.js"></script>
    <script src="../vendor/bootstrap/js/bootstrap.min.js"></script>
    -->
    <!-- material -->
     <script src="../vendor/materialize/js/materialize.min.js"></script>
```

## 样式规范
分行特色业务的页面风格建议与工银聚版本风格一致，使客户在使用平台的时候，不会因为风格变化过于明显而感觉到跳转的差异。页面切换应使客户感觉在同一个平台进行。

### 独立页面样式

在开发你自己的页面时，你需要引用每个页面的独立样式，独立样式放在css文件夹下，你需要为每一个或者几个页面创建一个.css文件。
你的独立页面css文件应该在<body>标签之后引用，确保页面加载时就有样式。

```html
<body>
	<!-- 你的样式加载在这里 -->
	<link rel="stylesheet" href="css/app.css">
```

如果你的插件包含样式，也应该在这个位置引用。

### 特色主题样式

主题样式表主要规定了有关主题颜色的一些样式的 class名和对应的作用。并且使用特殊的skin-的命名空间区别于应用的样式。
在开发静态页面或者自行开发html的时候，如果需要让主题生效，需要将主题类名class事先在需要实现的位置写好。

| Class                                | 描述                             |
| ------------------------------------ | ------------------------------ |
| `.skin-back`                         | 将这个 class 添加到容器，设置容器背景颜色与主题色相同 |
| `.skin-back-dark`                    | 设置边框颜色为主题色                     |
| `.skin-back-deep`                    | 设置容器背景颜色比主题色深                  |
| `.skin-back-ligther`                 | 设置容器背景颜色比主题色亮（配色建议）            |
| `.skin-border `                      | 设置边框颜色为主题色                     |
| `.skin-border-ligther`               | 设置容器边框颜色比主题色亮（配色建议）            |
| `.skin-color`                        | 设置字体颜色为主题色                     |
| `.skin-color-ligther`                | 设置容字体颜色比主题色亮（配色建议）             |
| `.skin-wave:before,.skin-wave:after` | 设置容器伪类背景颜色（背景颜色为主题色）           |

#### 加载特色主题样式

##### 主题不变的项目

对于普通应用，主体颜色静态资源的方式如下：

```html
<!-- 引用样式文件css-->
<link rel="stylesheet"  href="xxx/themes/***.css">
```

##### 主题随父应用而改变

对于特色应用，本身特色应用拥有自己的样式表，当父应用又指定样式的时候，特色应用的色调应该与父应用保持一致。所以需要加载父应用的主题
通过调用后台配置或者获取当前转发器传递的参数来获得父应用的当前主题样式表，动态加载css的方式将样式表加载到文档中。如果你的特色页面时嵌入在别的应用中，你需要动态引用别的应用的主题。那么你需要在header.php中加入下面的代码

```js
<script>
	//假设你通过某种方法获得了父应用的主题样式表的连接，命名为themeLink
	var themeLink = 'xxxx';

	$('<link>').attr(
		{
          rel:"stylesheet",
          type:"text/css",
           href:themeLink
  		}
  	).appendTo('head');
</script>
```

##### 动态主题

例如：特色应用某个按钮的本身背景色为红色，但是该特色应用在某个蓝色的s3项目打开的时候，希望背景色变为蓝色，则需要在该按钮的class中添加skin-back类，这样当跳转后动态加载主题样式表，就能实现效果。

```css
.red{
	background-color:red;  /*默认背景为红色*/
}
.width150{
	width: 150px;
	height: 150px;
}
```

```html
<!-- 当蓝色主题样式表没有加载时，背景为默认的红色；当蓝色主题样式表加载后，背景为蓝色-->
<button class="red width150 skin-back"></button>
```

#### 使用示例

##### 示例 1：使用主题背景

![](images\back.png)

```html
<div class="skin-back-deep width250">
  <div class="skin-back-dark width200">
    <div class="skin-back width150">
      <div class="skin-back-ligther width100"></div>
    </div>
  </div>
</div>
```

```css
.width100{
	width: 100px;
	height: 100px;
}
.width150{
	width: 150px;
	height: 150px;
}
.width200{
	width: 200px;
	height: 200px;
}
.width250{
	width: 250px;
	height: 250px;
}
```

##### 示例 2：使用主题边框

​												![](images\border.png)



```html
<div class="skin-border width150 border">
  <div class="skin-border-ligther  width100 border"></div>
</div>
```

```css
.border{
	border-style: solid;
	border-width: 1px;
}
.width100{
	width: 100px;
	height: 100px;
	margin: auto;
}
.width150{
	width: 150px;
	height: 150px;
	display: flex;
}
```



##### 示例 3：使用主题字体颜色

![](images\color.png)

```html
<div class="skin-color">blue blue blue blue blue blue blue </div>
<div class="skin-color-ligther">ligther_blue ligther_blue ligther_blue ligther_blue </div>
```

##### 示例 4：使用主题伪类背景颜色

![](images\伪类.png)

```html
<div class="skin-wave demoDiv"></div>
```

```css
.demoDiv{
	width: 50px;
	height: 50px;
}
.demoDiv:after{
	content: '';
	display: block;
	width: 100px;
	height: 100px;
}
```

## js规范

#### 插件引用
除了公共的js，所有的js都应该在页面的</body>之前加载。Juicy提供了很多插件，都放在vendor文件夹下，当某个页面需要使用某种插件时，你需要手动把该插件引用到你的目录中，比如，在某个页面中需要datatables插件。

```html
<!-- 引用datatables插件  -->
<script src = '../vendor/jquery/jquery.datatables.min.js'></script>
</body>
<html>
```
如果该插件只是在部分页面中使用，请不要将js引用到header.php中，否则会影响性能。

#### js开发
js文件目录下有一个service.js文件，该文件主要用来进行与后台的交互，例子中声明了一个UserService对象，用new函数可以实例化该对象，并使用里面的接口。你可以声明自己的对象，如ProductService等。
你的页面逻辑应该写在你自己创建的js文件中，如例子中的main.js。所有页面的逻辑都应该在页面加载完成后才开始，因此需要写在页面加载完成后。
如下：
```js
//某个你的页面中的js

//必须下载这个里面
$(function(){

  	//这里才是你的页面逻辑开始的地方，请不要超过后面的括号

});
```
### 图标库

#### 使用方法

##### 添加 Class

在 HTML 上添加添加 `iconfont icon-{图标名称}`  class。

<i class="iconfont icon-gerenzhongxin"></i>

```html
<i class="iconfont icon-gerenzhongxin"></i>
```



| <i class="iconfont icon-zanwushuju"></i><br>icon-zanwushuju | <i class="iconfont icon-gengduo"></i> <br>icon-gengduo | <i class="iconfont icon-guanbi1"><br></i>icon-guanbi1 | <i class="iconfont icon-queding"></i><br>icon-queding | <i class="iconfont icon-gouwuche"></i><br>icon-gouwuche | <i class="iconfont icon-yifukuan"></i><br>icon-yifukuan |
| :--------------------------------------: | :--------------------------------------: | :--------------------------------------: | :--------------------------------------: | :--------------------------------------: | :--------------------------------------: |
| <i class="iconfont icon-gerenzhongxin"></i><br>icon-gerenzhongxin | <i class="iconfont icon-liebiao"></i><br>icon-liebiao | <i class="iconfont icon-xiangqing2"></i><br>icon-xiangqing2 | <i class="iconfont icon-del"></i><br>icon-del | <i class="iconfont icon-fanhui"></i><br>icon-fanhui | <i class="iconfont icon-guanbi"></i><br>icon-guanbi |
| <i class="iconfont icon-mima"></i><br>icon-mima | <i class="iconfont icon-guanbi2"></i><br>icon-guanbi2 | <i class="iconfont icon-yonghuming"></i><br>icon-yonghuming | <i class="iconfont icon-yifukuan1"></i><br>icon-yifukuan1 | <i class="iconfont icon-tuangou"></i><br>icon-tuangou | <i class="iconfont icon-fenlei"></i><br>icon-fenlei |
| <i class="iconfont icon-shoucang"></i><br>icon-shoucang | <i class="iconfont icon-chanpin"></i><br>icon-chanpin | <i class="iconfont icon-icon021"></i><br>icon-icon021 | <i class="iconfont icon-110"></i><br>icon-110 | <i class="iconfont icon-payment1"></i><br>icon-payment1 | <i class="iconfont icon-Trash"></i><br>icon-Trash |
| <i class="iconfont icon-sync"></i><br>icon-sync | <i class="iconfont icon-tuoyuan1kaobei"></i><br>icon-tuoyuan1kaobei | <i class="iconfont icon-guanxi"></i><br>icon-guanxi | <i class="iconfont icon-12"></i><br>icon-12 | <i class="iconfont icon-wodedingdan"></i><br>icon-wodedingdan | <i class="iconfont icon-icon17"></i><br>icon-icon17 |
| <i class="iconfont icon-daohuofangshi"></i><br>icon-daohuofangshi | <i class="iconfont icon-licai"></i><br>icon-licai | <i class="iconfont icon-bianji"></i><br>icon-bianji | <i class="iconfont icon-yanjing"></i><br>icon-yanjing | <i class="iconfont icon-7beizhu"></i><br>icon-7beizhu | <i class="iconfont icon-shuaxin"></i><br>icon-shuaxin |
| <i class="iconfont icon-xiugaimima"></i><br>icon-xiugaimima | <i class="iconfont icon-mima1"></i><br>icon-mima1 | <i class="iconfont icon-tuichu"></i><br>icon-tuichu | <i class="iconfont icon-yanzhengma"></i><br>icon-yanzhengma | <i class="iconfont icon-riqi1"></i><br>icon-riqi1 | <i class="iconfont icon-queren"></i><br>icon-queren |
| <i class="iconfont icon-kechengtese"></i><br>icon-kechengtese | <i class="iconfont icon-fill1fill2"></i><br>icon-fill1fill2 | <i class="iconfont icon-jinhuodan"></i><br>icon-jinhuodan | <i class="iconfont icon-jiaoyi"></i><br>icon-jiaoyi | <i class="iconfont icon-tuangou1"></i><br>icon-tuangou1 | <i class="iconfont icon-duigou"></i><br>icon-duigou |
| <i class="iconfont icon-wode"></i><br>icon-wode | <i class="iconfont icon-wode1"></i><br>icon-wode1 | <i class="iconfont icon-iconduizhangdan"></i><br>icon-iconduizhangdan | <i class="iconfont icon-guanxiqunshixin"></i><br>icon-guanxiqunshixin | <i class="iconfont icon-shenpi"></i><br>icon-shenpi | <i class="iconfont icon-location"></i><br>icon-location |
| <i class="iconfont icon-fukuandan"></i><br>icon-fukuandan | <i class="iconfont icon-fenlei2"></i><br>icon-fenlei2 | <i class="iconfont icon-daoru"></i><br>icon-daoru | <i class="iconfont icon-gonggao1"></i><br>icon-gonggao1 | <i class="iconfont icon-yuanquan"></i><br>icon-yuanquan | <i class="iconfont icon-faxian"></i><br>icon-faxian |
| <i class="iconfont icon-xiangqing"></i><br>icon-xiangqing | <i class="iconfont icon-chanpintese"></i><br>icon-chanpintese | <i class="iconfont icon-danjuhao"></i><br>icon-danjuhao | <i class="iconfont icon-lajitong"></i><br>icon-lajitong | <i class="iconfont icon-102"></i><br>icon-102 | <i class="iconfont icon-101"></i><br>icon-101 |
| <i class="iconfont icon-gou"></i><br>icon-gou | <i class="iconfont icon-shaixuan"></i><br>icon-shaixuan | <i class="iconfont icon-tesezhuanqu"></i><br>icon-tesezhuanqu | <i class="iconfont icon-duizhangdan"></i><br>icon-duizhangdan | <i class="iconfont icon-fapiao"></i><br>icon-fapiao | <i class="iconfont icon-tese"></i><br>icon-tese |
| <i class="iconfont icon-daikuan"></i><br>icon-daikuan | <i class="iconfont icon-gonggao"></i><br>icon-gonggao | <i class="iconfont icon-gongsi"></i><br>icon-gongsi | <i class="iconfont icon-zhanghuxinxi"></i><br>icon-zhanghuxinxi | <i class="iconfont icon-dingdanxinxi"></i><br>icon-dingdanxinxi | <i class="iconfont icon-qiehuan"></i><br>icon-qiehuan |
| <i class="iconfont icon-payment"></i><br>icon-payment | <i class="iconfont icon-jingdiantese"></i><br>icon-jingdiantese | <i class="iconfont icon-shouhuodizhi"></i><br>icon-shouhuodizhi | <i class="iconfont icon-changpai"></i><br>icon-changpai | <i class="iconfont icon-riqi"></i><br>icon-riqi | <i class="iconfont icon-chaxun"></i><br>icon-chaxun |
| <i class="iconfont icon-shouye_shouye"></i><br>icon-shouye_shouye | <i class="iconfont icon-gongsi1"></i><br>icon-gongsi1 | <i class="iconfont icon-gerenxinxi"></i><br>icon-gerenxinxi | <i class="iconfont icon-weibiaoti--"></i><br>icon-weibiaoti-- | <i class="iconfont icon-cha"></i><br>icon-cha | <i class="iconfont icon-qiehuan1"></i><br>icon-qiehuan1 |
| <i class="iconfont icon-xinzeng"></i><br>icon-xinzeng | <i class="iconfont icon-bill-sent"></i><br>icon-bill-sent | <i class="iconfont icon-sou"></i><br>icon-sou | <i class="iconfont icon-gonggao15"></i><br>icon-gonggao15 | <i class="iconfont icon-gou"></i><br>icon-gou | <i class="iconfont icon-chaxun1"></i><br>icon-chaxun1 |
| <i class="iconfont icon-yifukuan2"></i><br>icon-yifukuan2 | <i class="iconfont icon-import"></i><br>icon-import | <i class="iconfont icon-caigou"></i><br>icon-caigou | <i class="iconfont icon-shenhe"></i><br>icon-shenhe | <i class="iconfont icon-fenlei1"></i><br>icon-fenlei1 | <i class="iconfont icon-export"></i><br>icon-export |
| <i class="iconfont icon-guanliyuan"></i><br>icon-guanliyuan | <i class="iconfont icon-duizhangdan1"></i><br>icon-duizhangdan1 | <i class="iconfont icon-btn_pljj"></i><br>icon-btn_pljj | <i class="iconfont icon-xinzeng"></i><br>icon-xinzeng | <i class="iconfont icon-yonghuguanli"></i><br>icon-yonghuguanli | <i class="iconfont icon-rongzi"></i><br>icon-rongzi |
| <i class="iconfont icon-rongzi1"></i><br>icon-rongzi1 | <i class="iconfont icon-plus-circle"></i><br>icon-plus-circle | <i class="iconfont icon-dizhiguanli"></i><br>icon-dizhiguanli | <i class="iconfont icon-bianji"></i><br>icon-bianji | <i class="iconfont icon-7beizhu"></i><br>icon-7beizhu | <i class="iconfont icon-shuaxin"></i><br>icon-shuaxin |
| <i class="iconfont icon-shoucang"></i><br>icon-shoucang | <i class="iconfont icon-chanpin"></i><br>icon-chanpin | <i class="iconfont icon-icon021"></i><br>icon-icon021 | <i class="iconfont icon-110"></i><br>icon-110 | <i class="iconfont icon-payment1"></i><br>icon-payment1 | <i class="iconfont icon-Trash"></i><br>icon-Trash |
| <i class="iconfont icon-licai"></i><br>icon-licai | <i class="iconfont icon-yanjing"></i><br>icon-yanjing | <i class="iconfont icon-guanxi"></i><br>icon-guanxi | <i class="iconfont icon-icon_daoru"></i><br>icon-icon_daoru | <i class="iconfont icon-wodedingdan"></i><br>icon-wodedingdan | <i class="iconfont icon-icon17"></i><br>icon-icon17 |
| <i class="iconfont icon-shouye-copy-copy-copy"></i><br>icon-shouye-copy-copy-copy | <i class="iconfont icon-yidatong_yidongduan_kehuguanxi"></i><br>icon-yidatong_yidongduan_kehuguanxi | <i class="iconfont icon-qianyuefukuan"></i><br>icon-qianyuefukuan | <i class="iconfont icon-yonghuguanli-copy"></i><br>icon-yonghuguanli-copy | <i class="iconfont icon-zhanghuguanli"></i><br>icon-zhanghuguanli | <i class="iconfont icon-shopping_bag"></i><br>icon-shopping_bag |
| <i class="iconfont icon-shezhichenggong"></i><br>icon-shezhichenggong | <i class="iconfont icon-bohuizhongxinshenqing"></i><br>icon-bohuizhongxinshenqing | <i class="iconfont icon-icon-plus-arrowup"></i><br>icon-icon-plus-arrowup | <i class="iconfont icon-huiyuantequancaigoujifen1"></i><br>icon-huiyuantequancaigoujifen1 | <i class="iconfont icon-ananzuiconv265"></i><br>icon-ananzuiconv265 | <i class="iconfont icon-gonggaoguanli"></i><br>icon-gonggaoguanli |
| <i class="iconfont icon-huiyuantequancaigoujifen"></i><br>icon-huiyuantequancaigoujifen | <i class="iconfont icon-xiaomeijiweifukuandingdan"></i><br>icon-xiaomeijiweifukuandingdan |                                          |                                          |                                          |                                          |
