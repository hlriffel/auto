<template>
  <div id="main">
    <div class="columns">
      <div class="column is-2">
        <section class="section">
          <side-menu></side-menu>
        </section>
      </div>
      <div class="is-divider-vertical"></div>
      <div class="column" id="content">
        <section class="section">
          <router-view></router-view>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from './side-menu/SideMenu';

export default {
  components: {
    SideMenu
  }
}
</script>

<style>

</style>
