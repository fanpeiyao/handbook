
/*let config = {
  modules:[
    {
      name:'前端框架',
      id:'Framework',
      children:[
      {
        name:'Juicy',
        class:'Red',
        to:'/Framework/Juicy',
        explain:'Juicy框架--独立应用的前端开发框架',
        detail:'Juicy框架是前端团队构建的用来进行s3独立页面应用的开发工作的一个框架，Juicy集成了工银聚团队开发必须的s3.js。',
      },
      {
        name:'S3',
        class:'pink',
        to:'/Framework/S3',
        explain:'S3--独立应用的前端开发框架',
        detail:'S3，Juicy集成了工银聚团队开发必须的s3.js。',
      }
    ]},
    {name:'控件库',to:'/Plugins',children:[
      {
        name:'111',
        class:'Red',
        to:'/Plugins/111',
        explain:'Juicy框架--22',
        detail:'，Juicy集成了工银聚团队开发必须的s3.js。',
      },
      {
        name:'333',
        class:'22',
        to:'/Plugins/22',
        explain:'S3--',
        detail:'S223.js。',
      }
    ]},
    {name:'PPT模板',to:'/ppt',children:[
      {
        name:'简洁',
        detail:'伦敦风格简洁',
        id:'1'
      },
      {
        name:'扁平',
        detail:'适合培训行业年终总结汇报简约扁平化ppt模板',
        id:'2'
      }
    ]},
    {name:'关于',to:'/About'},
  ]
};*/

let config2= {};
config2.modules = {};
config2.modules.Framework = {
  name:'前端框架',
  id:'Framework',
  children:[
    {
      name:'Juicy',
      class:'Red',
      to:'/Framework/Juicy',
      explain:'Juicy框架--独立应用的前端开发框架',
      detail:'Juicy框架是前端团队构建的用来进行s3独立页面应用的开发工作的一个框架，Juicy集成了工银聚团队开发必须的s3.js。',
    },
    {
      name:'S3',
      class:'pink',
      to:'/Framework/S3',

      explain:'S3--独立应用的前端开发框架',
      detail:'S3，Juicy集成了工银聚团队开发必须的s3.js。',
    }
  ]
}

config2.modules.Plugins = {
  name:'控件库',
  id:'Plugins',
  children:[
    {
      name:'111',
      class:'Red',
      to:'/Plugins/111',
      explain:'Juicy框架--22',
      detail:'，Juicy集成了工银聚团队开发必须的s3.js。',
    },
    {
      name:'333',
      class:'22',
      to:'/Plugins/22',
      explain:'S3--',
      detail:'S223.js。',
    }
  ]
};
