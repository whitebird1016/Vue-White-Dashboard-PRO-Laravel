<template>
  <nav :class="classes" class="navbar">
    <div :class="containerClasses">
      <slot name="brand"></slot>

      <div class="ml-auto nav-button-mini">
        <a
          href="https://vue-white-dashboard-pro-laravel.creative-tim.com/documentation/"
          target="_blank"
          rel="noopener"
          class="btn btn-default btn-block btn-round d-inline d-lg-none"
        >
          Documentation
        </a>
        <a
          href="https://www.creative-tim.com/product/vue-white-dashboard-pro-laravel"
          target="_blank"
          rel="noopener"
          class="btn btn-primary btn-block btn-round d-inline d-lg-none"
        >
          Buy now
        </a>
    </div> 
      <slot name="toggle-button">
        <button
          class="navbar-toggler collapsed"
          v-if="hasMenu"
          type="button"
          @click="toggleMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
          <span class="navbar-toggler-bar navbar-kebab"></span>
        </button>
      </slot>

      <CollapseTransition
        @after-leave="onTransitionEnd"
        @before-enter="onTransitionStart"
      >
        <div
          class="collapse navbar-collapse show"
          :class="menuClasses"
          v-show="show"
        >
          <slot></slot>
        </div>
      </CollapseTransition>
    </div>
  </nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';

export default {
  name: 'base-nav',
  props: {
    show: {
      type: Boolean,
      default: false,
      description:
        'Whether navbar menu is shown (valid for viewports < specified by `expand` prop)'
    },
    transparent: {
      type: Boolean,
      default: false,
      description: 'Whether navbar is transparent'
    },
    expand: {
      type: String,
      default: 'lg',
      description: 'Breakpoint where nav should expand'
    },
    menuClasses: {
      type: [String, Object, Array],
      default: '',
      description:
        'Navbar menu (items) classes. Can be used to align menu items to the right/left'
    },
    containerClasses: {
      type: [String, Object, Array],
      default: 'container-fluid',
      description:
        'Container classes. Can be used to control container classes (contains both navbar brand and menu items)'
    },
    type: {
      type: String,
      default: 'white',
      validator(value) {
        return [
          'dark',
          'success',
          'danger',
          'warning',
          'white',
          'primary',
          'info',
          'vue'
        ].includes(value);
      },
      description: 'Navbar color type'
    }
  },
  model: {
    prop: 'show',
    event: 'change'
  },
  components: {
    CollapseTransition
  },
  data() {
    return {
      transitionFinished: true
    };
  },
  computed: {
    // isAuth() {
    //   return this.$store.getters.isAuthenticated
    // },
    classes() {
      let color = `bg-${this.type}`;
      let classes = [
        { 'navbar-transparent': !this.show && this.transparent },
        { [`navbar-expand-${this.expand}`]: this.expand }
      ];
      if (this.position) {
        classes.push(`navbar-${this.position}`);
      }
      if (
        !this.transparent ||
        (this.show && !this.transitionFinished) ||
        (!this.show && !this.transitionFinished)
      ) {
        classes.push(color);
      }
      return classes;
    },
    hasMenu() {
      return this.$slots.default;
    }
  },
  methods: {
    toggleMenu() {
      this.$emit('change', !this.show);
    },
    onTransitionStart() {
      this.transitionFinished = false;
    },
    onTransitionEnd() {
      this.transitionFinished = true;
    }
  }
};
</script>
<style></style>
