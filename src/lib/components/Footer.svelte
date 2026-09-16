<script lang="ts">
  import { onMount } from 'svelte';
  let year = $state(new Date().getFullYear());
  onMount(() => {
    year = new Date().getFullYear();
  });
</script>

<footer class="site-footer section-wrap">
  <div class="footer-main">
    <a class="brand" href="/" aria-label="Abdellah Iraamane, home" translate="no"
      ><span class="brand-mark" aria-hidden="true">ai<span>.</span></span><span>Abdellah<br />Iraamane</span
      ></a
    >
    <p>Claude training &amp; consulting.<br />With Abdellah Iraamane.</p>
    <a class="text-link" href="https://airaamane.dev" target="_blank" rel="noopener noreferrer"
      >airaamane.dev <span aria-hidden="true">↗</span></a
    >
  </div>
  <div class="footer-bottom">
    <span>© <span id="year">{year}</span> Abdellah Iraamane</span>
    <p>These workshops are delivered independently and are not endorsed by Anthropic or Udacity.</p>
    <a href="/#faq">FAQs</a>
  </div>
</footer>
