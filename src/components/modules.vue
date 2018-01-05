<template>
  <div class="content">
    <transition name="router-fade" mode="out-in">
      <keep-alive>
        <div class="row" :class="{ 'ppt': $route.params.modules == 'resource', '': $route.params.modules != 'resource'}">
          <transition-group name="list-complete" tag="p">
            <div class="col s12 m6 l4 list-complete-item" v-for="(list, key) in lists[$route.params.modules].children" :key="key">
              <article class="material-card Red" :class="color[parseInt(Math.random()*4*key)]">
                <h2>
                  <span>{{list.explain}}</span>
                  <strong>
                    <i class="material-icons" >start</i>{{list.name}}
                  </strong>
                </h2>
                <div class="mc-content">
                  <div class="img-container">
                    <img :src="list.image" class="img-responsive">
                  </div>
                  <div class="mc-description">{{list.detail}}</div>
                </div>
                <a class="mc-btn-action menu" @click="listClick($event)">
                  <i class="layer" ></i>
                </a>
                <div class="mc-footer">
                  <router-link v-if='$route.params.modules != "resource" && list.link == undefined ' class="waves-effect white-text btn-login btn " :to="{name:'detail', params: { modules:$route.params.modules,module:list.name,md: list.md,showDetail: true}}" >阅读手册</router-link>
                  <a v-else-if='$route.params.modules != "resource" && list.link != undefined' :href="list.link"   class="waves-effect white-text btn-login btn " >阅读手册</a>
                  <a v-else :href="'./../../static/resource/'+list.id+'.ppt'"  :download="list.detail+'.ppt'" class="waves-effect white-text btn-login btn " >点击下载</a>
                </div>
              </article>
            </div>
          </transition-group>
        </div>

      </keep-alive>
    </transition>
  </div>
</template>
<script>
  export default {
    data :function(){
      return {
        lists:config.modules,
        color:null
      }
    },
    methods: {
      listClick(e){
          var el = e.currentTarget;
        var card = $(el).parent('.material-card')
        var icon = $(el).children('i');
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
        }
      }
    },
    created () {
      this.color = ['Red','Pink','Purple','Deep-Purple','Indigo','Blue','Light-Blue','Cyan','Teal']
    }
  }
</script>
