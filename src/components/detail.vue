<style>
  #layout > header{
    width: auto;
  }
  #sidebar {
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
      <div class="markdown-body editormd-preview-container" id="custom-toc-container"></div>
    </div>
    <div id="test-editormd-view"></div>
  </div>
</template>
<script>
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
        console.log(111);
        var resource = handbook.shift(),that = this;
        $.get(resource,function (result) {
          str = str + result;
          if (handbook.length > 0){
            that.parseMd(handbook,str);
          }else{
            that.testEditormdView = editormd.markdownToHTML("test-editormd-view", {
              markdown        : str ,//+ "\r\n" + $("#append-test").text(),
              htmlDecode      : "style,script,iframe",  // you can filter tags decode
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

    },
    beforeRouteEnter: function(to, from, next){
      next(vm => {
        console.log('=============beforeRouteEnter', vm.$route.params.md);
        vm.parseMd(Object.values(vm.$route.params.md),vm.markdown);
      })
    },
    created: function () {
      console.log('=============created', this.$route.params.md);
      this.parseMd(Object.values(this.$route.params.md),this.markdown);
    }
  }
</script>
