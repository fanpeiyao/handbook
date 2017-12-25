<template>
  <div class="col s12 m6 l4 " >
    <article class="material-card Red ">
      <h2>
        <span>{{msg}}</span>
        <strong>
          <i class="material-icons">start</i>Juicy
        </strong>
      </h2>
      <div class="mc-content">
        <div class="img-container">
          <img src="../../assets/img/Juicy.png" alt="" class="img-responsive">
        </div>
        <div class="mc-description">
          Juicy框架是前端团队构建的用来进行s3独立页面应用的开发工作的一个框架，Juicy集成了工银聚团队开发必须的s3.js。
        </div>

        <!--<router-view></router-view>-->
      </div>
      <a href="##" class="mc-btn-action menu" >
        <i class="layer"></i>
      </a>
      <div class="mc-footer">
        <!--<a href="framework/juicy" target="_blank"  class="btn-login btn  waves-effect white-text">阅读手册</a>-->
        <router-link class="waves-effect waves-teal" to="/Framework/juicy">阅读手册</router-link>

        <!--:to="{path:'/news',query:{ id:item.NewsID }}"-->

      </div>
    </article>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        msg: "我是framework 组件"
      }
    }
  }
</script>
