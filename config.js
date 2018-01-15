var config= {};
config.modules = {};
config.modules.framework = {
  name:'前端框架',
  id:'framework',
  children:[
    {
      name:'Juicy',
      image:'./static/image/Juicy.png',
      explain:'Juicy框架--独立应用的前端开发框架',
      detail:'Juicy框架是前端团队构建的用来进行s3独立页面应用的开发工作的一个框架，Juicy集成了工银聚团队开发必须的s3.js。',
      md:['./static/md/juicy/juicy.md','./static/md/juicy/config.md','./static/md/juicy/regulation.md','./static/md/juicy/version.md']
    },
    {
      name:'S3',
      image:'./static/image/s3js.png',
      explain:'前端框架中的核心模块',
      detail:'s3.js（或S3.js)提供了处理浏览器兼容性、前后台调用、页面跳转、数据处理、页面缓存、事件管理等方面的功能。',
      md:['./static/md/s3/s3.md']
    },{
      name:'Materializecss',
      image:'./static/image/material.png',
      explain:'Material Design',
      detail:'由Google创建和设计，Material Design是一种设计语言，结合成功设计的经典原理以及创新和技术。',
      link:'./static/Materializecss',
    },{
      name:'Bootstrap',
      image:'./static/image/bootstrap.png',
      explain:'Bootstrap',
      detail:'Bootstrap是全球最受欢迎的前端组件库，用于开发响应式布局、移动设备优先的WEB项目',
      // md:['./static/md/jump.md']
    },{
      name:'FNUI',
      image:'./static/image/fnui.png',
      explain:'现代浏览器框架',
      link:'./static/FNUI',
      detail:'蜂鸟UI(以下称FNUI) 针对框架过重、加载过多、 模板引擎过于复杂等因素，重新构造的新版现代浏览器框架。',
    },
  ]
};

config.modules.plugins = {
  name:'控件库',
  id:'plugins',
  children:[
    {
      name:'artTemplate',
      image:'',
      explain:'模板引擎',
      md:['./static/md/artTemplate/arttemplate.md'],
      detail:'art-template是一个简约、超快的模板引擎。它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。在线速度测试。',
    },{
      name:'Datatables',
      image:'',
      explain:'表格插件',
      md:['./static/md/Datatables/datatables.md'],
      detail:'Datatables是一款jquery表格插件。是一个高度灵活的工具，可以将任何HTML表格添加高级的交互功能。',
    },{
      name:'Swiper',
      image:'',
      explain:'触摸滑动插件',
      md:['./static/md/swiper/swiper.md'],
      detail:'Swiper是纯javascript打造的滑动特效插件，面向手机、平板电脑等移动终端，使用简单、稳定、功能强大，是架构移动终端网站的重要选择。',
    },
    // {
    //   name:'',
    //   image:'',
    //   explain:'',
    //   detail:'',
    // },
  ]
};

config.modules.resource = {
  name:'PPT模板',
  id:'resource',
  children:[
    {
      name:'简洁',
      image:'./static/image/ppt1.png',
      detail:'伦敦风格简洁',
      id:'1',
      unit:'aa'
    },
    {
      name:'扁平',
      image:'./static/image/ppt2.png',
      detail:'适合培训行业年终总结汇报简约扁平化ppt模板',
      id:'2'
    },
    {
      name:'中国风',
      image:'./static/image/ppt3.png',
      detail:'中国风',
      id:'3'
    },
    {
      name:'商务',
      image:'./static/image/ppt4.png',
      detail:'适合培训行业年终总结汇报简约扁平化ppt模板',
      id:'4'
    },{
      name:'工银聚',
      image:'./static/image/ppt5.png',
      detail:'工银聚模板',
      id:'5'
    },
    {
      name:'大气',
      image:'./static/image/ppt6.png',
      detail:'大气简洁商务ppt模板',
      id:'6'
    },
    {
      name:'简约',
      image:'./static/image/ppt8.png',
      detail:'简约图表ppt模板',
      id:'8'
    },
    {
      name:'清爽',
      image:'./static/image/ppt9.png',
      detail:'多彩简洁清爽总结汇报',
      id:'9'
    },
    {
      name:'商务计划',
      image:'./static/image/ppt10.png',
      detail:'超实用明亮百搭商务计划书模板',
      id:'10'
    },{
      name:'企业',
      image:'./static/image/ppt11.png',
      detail:'高端大气企业介绍ppt模板',
      id:'11'
    },
  ]
};
config.about = {
  name:'关于',
  id:'About',
  msg: "前端资源仓库",
  logo:'./static/image/logo.png',
  icon:'./static/image/back.png',
  version:'v0.0.2',
  detail:'前端资源仓库集成了工银聚团队开发必须的开发框架及文档介绍...',
  footer:'© 2017 交互设计线',
  header:'WELCOME',
  backTxt:'返回首页',
  backHref:'ui.gyj.com',
};
