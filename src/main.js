import Vue from 'vue'
//引入material没有成功
// import $ from 'jquery'
/*import './assets/materialize/js/materialize.js'
import './assets/materialize/css/materialize.css'*/

import router from './router-config'
import './assets/css/index.css'
import App from './App.vue'



$(function () {
  //侧边栏
  $('.top-nav').sideNav();
  //卡片
  $('.material-card >.mc-btn-action').click(function () {
    var card = $(this).parent('.material-card')
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
    }
  })
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');


