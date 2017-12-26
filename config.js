
let config = {
  modules:[
    {name:'前端框架',to:'/Framework',children:[
      {
        name:'Juicy',
        class:'Red',
        to:'/Framework/Juicy',
        image:'../../assets/img/Juicy.png',
        // image:"require('./src/assets/img/Juicy.png')",
        explain:'Juicy框架--独立应用的前端开发框架',
        detail:'Juicy框架是前端团队构建的用来进行s3独立页面应用的开发工作的一个框架，Juicy集成了工银聚团队开发必须的s3.js。',
      },
      {
        name:'S3',
        class:'pink',
        to:'/Framework/S3',
        image:'../../assets/img/S3.png',
        // image:"require('./src/assets/img/S3.png')",

        explain:'S3--独立应用的前端开发框架',
        detail:'S3，Juicy集成了工银聚团队开发必须的s3.js。',
      }
    ]},
    {name:'控件库',to:'/Plugins'},
    {name:'PPT模板',to:'/ppt'},
    {name:'关于',to:'/About'},
  ]
};


