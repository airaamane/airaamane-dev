<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  let menuOpen = $state(false);
  let menuButton: HTMLButtonElement;
  const homePrefix = $derived(page.url.pathname === '/' ? '' : '/');
  function closeMenu() {
    menuOpen = false;
  }
  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      menuButton?.focus();
    }
  }
  afterNavigate(closeMenu);
  onMount(() => {
    const media = window.matchMedia('(min-width: 801px)');
    const onChange = (event: MediaQueryListEvent) => {
      if (event.matches) closeMenu();
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  });
</script>

<svelte:window onkeydown={onKeydown} />
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/" aria-label="Abdellah Iraamane, home" translate="no"
      ><span class="brand-mark" aria-hidden="true">ai<span>.</span></span><span>Abdellah<br />Iraamane</span
      ></a
    >
    <nav class="desktop-nav" aria-label="Main navigation">
      <a href={`${homePrefix}#workshops`}>Workshops</a><a href={`${homePrefix}#instructor`}>About Abdellah</a
      ><a href={`${homePrefix}#consulting`}>Consulting</a>
    </nav>
    <a class="button button-small button-dark header-cta" href="#contact"
      >Discuss a workshop <span aria-hidden="true">↗</span></a
    ><button
      class="menu-toggle"
      aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={menuOpen}
      onclick={() => (menuOpen = !menuOpen)}
      bind:this={menuButton}
      aria-controls="mobile-nav"><span></span><span></span></button
    >
  </div>
  <nav id="mobile-nav" class="mobile-nav" aria-label="Mobile navigation" hidden={!menuOpen}>
    <a onclick={closeMenu} href={`${homePrefix}#workshops`}>Workshops</a><a
      onclick={closeMenu}
      href={`${homePrefix}#instructor`}>About Abdellah</a
    ><a onclick={closeMenu} href={`${homePrefix}#consulting`}>Consulting</a><a
      onclick={closeMenu}
      href="#contact">Discuss a workshop <span aria-hidden="true">↗</span></a
    >
  </nav>
</header>
