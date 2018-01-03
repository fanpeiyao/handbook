<style>
  #layout > header{
    width: auto;
  }

  #sidebar {
    /*width: 400px;*/
    max-width:30%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    background: #fff;
    z-index: 100;
    padding: 18px;
    border: 1px solid #ddd;
    border-top: none;
    border-bottom: none;
  }

  #sidebar:hover {
    overflow: auto;
  }

  #sidebar h1 {
    font-size: 16px;
  }

  #custom-toc-container {
    padding-left: 0;
  }

  #test-editormd-view{
    padding-left: 30%;
    padding-right: 0;
    margin: 0;
  }
</style>
<template>
  <div id="layout">
    <div id="sidebar">
      <h1>目录</h1>
      {{$route.params}}
      {{this.$route.params.md}}
      <div class="markdown-body editormd-preview-container" id="custom-toc-container"></div>
    </div>
    <div id="test-editormd-view"></div>
  </div>
</template>
<script>
  var testEditormdView,markdown='';
  var handbook = ['./md/juicy.md'];
  parseMd(handbook,markdown);
  function parseMd(handbook,str) {
    var resource = handbook.shift();
    $.get(resource,function (result) {
      str = str + result;
      if (handbook.length > 0){
        parseMd(handbook,str);
      }else{
        testEditormdView = editormd.markdownToHTML("test-editormd-view", {
          markdown        : str ,//+ "\r\n" + $("#append-test").text(),
          //htmlDecode      : true,       // 开启 HTML 标签解析，为了安全性，默认不开启
          htmlDecode      : "style,script,iframe",  // you can filter tags decode
          //toc             : false,
          tocm            : true,    // Using [TOCM]
          tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
          //gfm             : false,
          //tocDropdown     : true,
          // markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
          emoji           : true,
          taskList        : true,
          tex             : true,  // 默认不解析
          flowChart       : true,  // 默认不解析
          sequenceDiagram : true,  // 默认不解析
        });
      }
    })
  }
  export default {
//    data () {
//      return {
//        data:'',
//        ret:''
//      }
//    },
    mounted(){

    },


  }
</script>
