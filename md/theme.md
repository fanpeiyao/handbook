## 特色开发规范

​	分行特色业务的页面风格建议与工银聚版本风格一致，使客户在使用平台的时候，不会因为风格变化过于明显而感觉到跳转的差异。页面切换应使客户感觉在同一个平台进行。

### 样式表静态资源引用

​	引用主体颜色静态资源的方式如下：

```html
<!-- css-->
<link rel="stylesheet"  href="gyj.icbc.com.cn/你的项目名/styles/themes/***.css">
```

### 基本概念

​	一些常用样式的 class，直接在 HTML中引用。

- #### 背景颜色

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

### 基本示例

#### 	示例 1：使用背景类名

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

#### 示例 2：使用边框类名

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



#### 示例 3：使用字体颜色类名

![](images\color.png)

```html
<div class="skin-color">blue blue blue blue blue blue blue </div>
<div class="skin-color-ligther">ligther_blue ligther_blue ligther_blue ligther_blue </div>
```

#### 示例 4：伪类背景颜色类名																							![](..\images\伪类.png)
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
