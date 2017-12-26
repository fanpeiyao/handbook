<template>
  <div class="row">

    <transition-group name="list-complete" tag="p">
    <div class="col s12 m6 l4 list-complete-item" v-for="(list, key) in lists" v-bind:key="key">
      <article class="material-card Red" :class="list.color">
        <h2>
          <span>{{list.explain}}</span>
          <strong>
            <i class="material-icons">start</i>{{list.name}}
          </strong>
        </h2>
        <div class="mc-content">
          <div class="img-container">
            <!--<img :src="list.image" class="img-responsive">-->
            <img :src="src" class="img-responsive">

          </div>
          <div class="mc-description">{{list.detail}}</div>
        </div>
        <a class="mc-btn-action menu" @click="listClick($event)">
          <i class="layer" @click.stop></i>
        </a>
        <div class="mc-footer">
          <router-link class="waves-effect waves-teal" :to="{path: list.to, query: { showDetail: true }}" >阅读手册</router-link>

          <!--<router-link class="waves-effect waves-teal" :to="{path: list.to, query: { showDetail: true }}" >阅读手册</router-link>-->
        </div>
      </article>
    </div>

    </transition-group>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        lists:config.modules[0].children,
        src:require('../../assets/img/Juicy.png'),
      }
    },
    methods: {
      listClick(e){
        console.log(e);
        /*var card = $(this).parent('.material-card')
        var icon = $(this).children('i');
        icon.addClass('arrowTo');
        if(card.hasClass('mc-active')){
          card.removeClass('mc-active');
          window.setTimeout(function () {
            icon.removeClass('arrowTo').addClass('menuIcon')
          },100)
        }else {
          card.addClass('mc-active');
          window.setTimeout(function () {
            icon.removeClass('menuIcon').addClass('arrowTo')
          },100)
        }*/
      }
    },
  }
</script>
