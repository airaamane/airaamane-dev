import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';

// One-time conversion of the original authored HTML to compiled Svelte components.
const reference = process.argv[2];
if (!reference) throw new Error('Pass the original dist directory.');
const read = (file) => readFileSync(join(reference, file), 'utf8');
const write = (file, value) => {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, value, 'utf8');
};
const copy = (from, to) => {
  mkdirSync(dirname(to), { recursive: true });
  copyFileSync(join(reference, from), to);
};
const markup = (html) => html.replaceAll('{', '&#123;').replaceAll('}', '&#125;');
const home = read('index.html');

let header = home.match(/<header[\s\S]*?<\/header>/)[0];
header = header.replaceAll('href="#workshops"', 'href={`${homePrefix}#workshops`}')
  .replaceAll('href="#instructor"', 'href={`${homePrefix}#instructor`}')
  .replaceAll('href="#consulting"', 'href={`${homePrefix}#consulting`}')
  .replace('aria-label="Open menu" aria-expanded="false"', 'aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onclick={() => menuOpen = !menuOpen} bind:this={menuButton}')
  .replace('aria-label="Mobile navigation" hidden', 'aria-label="Mobile navigation" hidden={!menuOpen}')
  .replace(/(<nav id="mobile-nav"[\s\S]*?<\/nav>)/, (nav) => nav.replaceAll('<a ', '<a onclick={closeMenu} '));
write('src/lib/components/Header.svelte', `<script lang="ts">
  import { onMount } from 'svelte';
  import { afterNavigate } from '$app/navigation';
  import { page } from '$app/state';
  let menuOpen = $state(false);
  let menuButton: HTMLButtonElement;
  const homePrefix = $derived(page.url.pathname === '/' ? '' : '/');
  function closeMenu() { menuOpen = false; }
  function onKeydown(event: KeyboardEvent) {
    if (event.key === 'Escape' && menuOpen) {
      closeMenu();
      menuButton?.focus();
    }
  }
  afterNavigate(closeMenu);
  onMount(() => {
    const media = window.matchMedia('(min-width: 801px)');
    const onChange = (event: MediaQueryListEvent) => { if (event.matches) closeMenu(); };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  });
</script>
<svelte:window onkeydown={onKeydown} />
${header}\n`);

let footer = home.match(/<footer[\s\S]*?<\/footer>/)[0];
footer = footer.replace('<span id="year">2026</span>', '<span id="year">{year}</span>');
write('src/lib/components/Footer.svelte', `<script lang="ts">
  import { onMount } from 'svelte';
  let year = $state(new Date().getFullYear());
  onMount(() => { year = new Date().getFullYear(); });
</script>
${footer}\n`);

const contact = home.match(/<section id="contact"[\s\S]*?<\/section>/)[0];
const button = contact.match(/<button[\s\S]*?<\/button>/)[0];
const bookingLink = button.replace('<button ', '<a ').replace('type="button" disabled ', 'href={bookingUrl} target="_blank" rel="noopener noreferrer" ').replace('</button>', '</a>');
write('src/lib/components/Contact.svelte', `<script lang="ts">import { bookingUrl } from '$lib/site';</script>\n` + contact
  .replace(button, `{#if bookingUrl}${bookingLink}{:else}${button}{/if}`)
  .replace('Online booking coming soon.', `{bookingUrl ? 'Choose a time that works for you.' : 'Online booking coming soon.'}`) + '\n');

for (const path of ['', 'claude-code-training', 'claude-agent-sdk-training']) {
  const html = read(path ? `${path}/index.html` : 'index.html');
  const title = html.match(/<title>([\s\S]*?)<\/title>/)[1];
  const description = html.match(/<meta name="description" content="([^"]+)"/)[1];
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  const service = schema['@graph'][1].name;
  let main = markup(html.match(/<main id="main">([\s\S]*?)<\/main>/)[1]);
  main = main.replace(markup(contact), '<Contact />');
  let script = `  import Seo from '$lib/components/Seo.svelte';\n  import Contact from '$lib/components/Contact.svelte';\n`;
  if (!path) {
    script += `  import { afterNavigate } from '$app/navigation';
  let businessAgendaOpen = $state(false);
  function revealLinkedAgenda() {
    if (window.location.hash === '#business-agenda') businessAgendaOpen = true;
  }
  afterNavigate(revealLinkedAgenda);
`;
    main = main.replace('<details id="business-agenda"', '<details bind:open={businessAgendaOpen} id="business-agenda"')
      .replace('href="#business-agenda"', 'href="#business-agenda" onclick={() => businessAgendaOpen = true}');
  }
  write(`src/routes/${path ? path + '/' : ''}+page.svelte`, `<script lang="ts">\n${script}</script>\n${path ? '' : '<svelte:window onhashchange={revealLinkedAgenda} />\n'}<Seo title="${title}" description="${description}" path="/${path ? path + '/' : ''}" service="${service}" />\n${main}\n`);
  if (path) copy(`${path}/sample-agenda.txt`, `static/${path}/sample-agenda.txt`);
}
copy('styles.css', 'src/lib/styles.css');
copy('branding.css', 'src/lib/branding.css');
copy('instructor-portrait.png', 'static/instructor-portrait.png');
console.log('Converted all three routes, shared components, original styles, portrait, and agendas.');
