<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Link
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Another Link
          </a>
        </li>
      </ul>
      <div class="copyright"><i class="fa fa-copyright"></i> {{ year }}, made with <i class="tim-icons icon-heart-2"></i>
       for a better web.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
