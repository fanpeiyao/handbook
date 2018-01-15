<style>
  #layout > header{
    width: auto;
  }
  #sidebar {
    max-width:90px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
    overflow-y: auto;
    background: #fff;
    z-index: 100;
    padding: 18px;
    border: 1px solid #ddd;
    border-top: none;
    border-bottom: none;
    -webkit-transition: all 250ms cubic-bezier(0.75, 0, 0.175, 1);
    -moz-transition: all 250ms cubic-bezier(0.75, 0, 0.175, 1);
    -o-transition: all 250ms cubic-bezier(0.75, 0, 0.175, 1);
    transition: all 250ms cubic-bezier(0.75, 0, 0.175, 1);
  }
  #sidebar #custom-toc-container{
    opacity: 0;
  }
  #sidebar:hover {
    max-width:300px;
  }
  #sidebar:hover #custom-toc-container{
    opacity: 1;
  }
  #sidebar h1 {
    font-size: 16px;
    width: 20px;
    margin-top: 10px;
    transform:rotate(90deg);
    -ms-transform:rotate(90deg);    /* IE 9 */
    -moz-transform:rotate(90deg);   /* Firefox */
    -webkit-transform:rotate(90deg); /* Safari 和 Chrome */
    -o-transform:rotate(90deg);     /* Opera */
    display: block;
  }

  #sidebar:hover .directories {
    display: none;
  }
  .directories{
    display: block;
    position: absolute;
    top: 50%;
    left: 40%;
    margin-top: -50px;
  }
  .directories img{
    width: 20px;
    display: block;
  }

  #test-editormd-view{
    padding-left: 100px;
    padding-right: 0;
    margin: 0;
  }
  #mask{
    position: fixed;
    z-index: 98;
    width: 100%;
    height: 100%;
    background: rgba(247, 247, 245,.5);
    opacity: 0;
    -webkit-transition: all 500ms cubic-bezier(0.75, 0, 0.175, 1);
    -moz-transition: all 500ms cubic-bezier(0.75, 0, 0.175, 1);
    -o-transition: all 500ms cubic-bezier(0.75, 0, 0.175, 1);
    transition: all 500ms cubic-bezier(0.75, 0, 0.175, 1);
  }

  .markdown-body a {
    color: #333;
    -webkit-transition: all 100ms ease-in;
    -moz-transition: all 100ms ease-in;
    -o-transition: all 100ms ease-in;
    transition: all 100ms ease-in;
    text-decoration: none;
  }
  .markdown-body ol, .markdown-body ul {
    padding-left: 1.5em;
  }
  .markdown-body ol, .markdown-body ul.markdown-toc-list {
    padding-left:0;
  }
  ul:not(.browser-default) > li {
    list-style-type: none;
    margin-top: 18px;
  }
  .markdown-toc-list .toc-level-1{
    font-weight: 600;
  }

  .markdown-toc-list>li:first-child{
    margin-top: 0;
  }
  .markdown-toc-list a:hover {
    padding-left:.4em;
    background:rgb(45,131,206);
    color: #fff;
    text-decoration: none;

  }
  /*.markdown-toc-list li:hover {*/
    /*padding-left:.4em;*/
    /*background:#2d83ce;*/
    /*color: #fff;*/

  /*}*/

</style>
<template>
  <div id="layout">
    <!---->
    <div id="sidebar" @mouseover="show" @mouseout="hide">
      <!--<h1>Directories</h1>-->
      <div class="directories">
        <img src="./../../static/image/menu.png" alt="">
        <h1>DIRECTORIES</h1>
      </div>
      <div class="markdown-body editormd-preview-container" id="custom-toc-container"></div>
    </div>
    <div id="mask" ref="mask"></div>
    <div id="test-editormd-view" ></div>
  </div>
</template>
<script>
  import './../../static/assets/css/index.css'
  export default {
    data(){
      return {
        testEditormdView:'',
        markdown:'',
        handbook:''
      }
    },
    methods: {
      parseMd:function(handbook,str){
        let resource = handbook.shift(),that = this;
        $.get(resource,function (result) {
          str = str + result;
          if (handbook.length > 0){
            that.parseMd(handbook,str);
          }else{
            that.testEditormdView = editormd.markdownToHTML("test-editormd-view", {
              markdown        : str ,
              htmlDecode      : "style,script,iframe",
              tocm            : true,    // Using [TOCM]
              tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
              emoji           : true,
              taskList        : true,
              tex             : true,  // 默认不解析
              flowChart       : true,  // 默认不解析
              sequenceDiagram : true,  // 默认不解析
            });
          }
        })
      },
      show:function () {
        this.$refs.mask.style.opacity='1';

      },
      hide:function () {
        this.$refs.mask.style.opacity='0';

      }
    },
    activated(){
      if(this.$route.params.md.length != 0)
        sessionStorage.setItem(this.$route.path,this.$route.params.md);
      this.$route.params.md.length == 0 ? this.$route.params.md = sessionStorage.getItem(this.$route.path).split(',') : this.$route.params.md;
      this.parseMd(this.$route.params.md,this.markdown);
    },
    deactivated(){
      $('#test-editormd-view').html('');
      $('#custom-toc-container').html('');
    }
  }
</script>
