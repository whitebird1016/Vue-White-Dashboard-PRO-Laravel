<template>
  <div class="sidebar" :data="backgroundColor">
    <div class="sidebar-wrapper" ref="sidebarScrollArea">
      <div class="logo">
        <a href="http://www.creative-tim.com" class="simple-text logo-mini">
          <img :src="logo" alt="app-logo" style="padding: 5px"/>
        </a>
        <a href="http://www.creative-tim.com" class="simple-text logo-normal">
          {{ title }}
        </a>
      </div>
      <slot></slot>
      <ul class="nav">
        <slot name="links">
          <sidebar-item
            v-for="(link, index) in sidebarLinks"
            :key="link.name + index"
            :link="link"
          >
            <sidebar-item
              v-for="(subLink, index) in link.children"
              :key="subLink.name + index"
              :link="subLink"
            >
            </sidebar-item>
          </sidebar-item>
        </slot>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sidebar',
  props: {
    title: {
      type: String,
      default: 'Creative Tim',
      description: 'Sidebar title'
    },
    shortTitle: {
      type: String,
      default: 'CT',
      description: 'Sidebar short title'
    },
    logo: {
      type: String,
      default: '/img/laravel-vue.svg',
      description: 'Sidebar app logo'
    },
    backgroundColor: {
      type: String,
      default: 'vue',
      validator: value => {
        let acceptedValues = [
          '',
          'vue',
          'blue',
          'green',
          'orange',
          'red',
          'primary'
        ];
        return acceptedValues.indexOf(value) !== -1;
      },
      description:
        'Sidebar background color (vue|blue|green|orange|red|primary)'
    },
    sidebarLinks: {
      type: Array,
      default: () => [],
      description:
        "List of sidebar links as an array if you don't want to use components for these."
    },
    autoClose: {
      type: Boolean,
      default: true,
      description:
        'Whether sidebar should autoclose on mobile when clicking an item'
    }
  },
  created() {
    this.$sidebar.toggleMinimize();
  },
  provide() {
    return {
      autoClose: this.autoClose
    };
  },
  methods: {
    minimizeSidebar() {
      if (this.$sidebar) {
        this.$sidebar.toggleMinimize();
      }
    }
  },
  beforeDestroy() {
    if (this.$sidebar.showSidebar) {
      this.$sidebar.showSidebar = true;
    }
  }
};
</script>
<style>
@media (min-width: 992px) {
  .navbar-search-form-mobile,
  .nav-mobile-menu {
    display: none;
  }
}
</style>
