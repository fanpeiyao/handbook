<template>
  <footer class="page-footer" style="padding: 0" id="footer">
    <div class="footer-copyright">
      <div class="container">
        {{about.footer}}
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        about:config.about,
      }
    }
  }
</script>
