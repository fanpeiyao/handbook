<template>
  <div class="row" :class="{ 'ppt': $route.params.index == 2, '': $route.params.index != 2}">
    <transition-group name="list-complete" tag="p">
      <div class="col s12 m6 l4 list-complete-item" v-for="(list, key) in lists[$route.params.index].children" v-bind:key="key">
        <article class="material-card Red" :class="list.color">
          <h2>
            <span>{{list.explain}}</span>
            <strong>
              <i class="material-icons" >start</i>{{list.name}}
            </strong>
          </h2>
          <div class="mc-content">
            <div class="img-container">
              <img :src="src" class="img-responsive">
            </div>
            <div class="mc-description">{{list.detail}}</div>
          </div>
          <a class="mc-btn-action menu" @click="listClick($event)">
            <i class="layer" @click.stop></i>
          </a>
          <div class="mc-footer">
            <router-link  class="waves-effect waves-teal" :to="{path: list.to, query: { showDetail: true }}" >阅读手册</router-link>
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
        lists:config.modules,
        src:require('../assets/img/Juicy.png'),
      }
    },
    methods: {
      listClick(e){
        console.log(e.target);
      }
    },
  }
</script>
