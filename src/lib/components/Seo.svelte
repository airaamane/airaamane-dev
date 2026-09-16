<script lang="ts">
  import { siteUrl } from '$lib/site';
  let {
    title,
    description,
    path = '/',
    service
  }: {
    title: string;
    description: string;
    path?: string;
    service: string;
  } = $props();
  const schema = $derived({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#instructor`,
        name: 'Abdellah Iraamane',
        url: `${siteUrl}/#instructor`,
        image: `${siteUrl}/instructor-portrait.png`,
        jobTitle: 'Claude Trainer and Consultant',
        sameAs: ['https://airaamane.dev']
      },
      {
        '@type': 'Service',
        name: service,
        serviceType: service,
        provider: { '@id': `${siteUrl}/#instructor` },
        url: `${siteUrl}${path}`
      }
    ]
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" href={`${siteUrl}${path}`} />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={`${siteUrl}${path}`} />
  {@html `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g, '\\u003c')}</script>`}
</svelte:head>
