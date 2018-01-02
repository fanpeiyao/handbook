let config= {};
config.modules = {};
config.modules.framework = {
  name:'前端框架',
  id:'framework',
  children:[
    {
      name:'Juicy',
      color:'Red',
      to:'/framework/Juicy',
      explain:'Juicy框架--独立应用的前端开发框架',
      detail:'Juicy框架是前端团队构建的用来进行s3独立页面应用的开发工作的一个框架，Juicy集成了工银聚团队开发必须的s3.js。',
    },
    {
      name:'S3',
      color:'pink',
      to:'/framework/S3',
      explain:'S3--独立应用的前端开发框架',
      detail:'S3，Juicy集成了工银聚团队开发必须的s3.js。',
    }
  ]
};

config.modules.plugins = {
  name:'控件库',
  id:'plugins',
  children:[
    {
      name:'111',
      color:'Red',
      to:'/Plugins/111',
      explain:'Juicy框架--22',
      detail:'，Juicy集成了工银聚团队开发必须的s3.js。',
    },
    {
      name:'333',
      color:'22',
      to:'/Plugins/22',
      explain:'S3--',
      detail:'S223.js。',
    }
  ]
};

config.modules.resource = {
  name:'PPT模板',
  id:'resource',
  children:[
    {
      name:'简洁',
      detail:'伦敦风格简洁',
      link:"",
      id:'1'
    },
    {
      name:'扁平',
      detail:'适合培训行业年终总结汇报简约扁平化ppt模板',
      id:'2'
    }
  ]
};
config.modules.about = {
  name:'关于',
  id:'About'
};
