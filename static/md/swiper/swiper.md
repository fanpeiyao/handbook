# Swiper

Swiper 是一个免费强大的移动端触摸滑动插件。

它是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端，使用简单、稳定、功能强大，是架构移动终端网站的重要选择。

## 特色功能

1. 图片懒加载
2. 完整的导航控制
3. 支持流行的视差效果
4. 不依赖框架，保证了轻量和运行速度
5. 良好的兼容性

## 使用方法

1.加载插件

```html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="dist/css/swiper.min.css">
</head>
<body>
	
	<script src="dist/js/swiper.min.js"></script>
</body>
</html>
```

2.HTML内容

```html
<style>
.swiper-container {
    width: 600px;
    height: 300px;
    height: 300px;
    line-height: 300px;
    text-align: center;
} 
</style>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
```

3.初始化Swiper：最好是挨着</body>标签

```js
<script>        
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // 如果需要滚动条
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })        
</script>
```

5.完成。恭喜你，现在你的Swiper应该已经能正常切换了。

# 安装

## 获取和载入

下载：Swiper复制到你的项目中，并在你的需要开发的文件中引用。如果使用swiper的页面比较多，那么可以将下面的语句放到header.php。

```html
<link rel="stylesheet" href="dist/css/swiper.min.css">
<script src="dist/js/swiper.min.js"></script>
```

# demo

点击下载