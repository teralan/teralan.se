<script context="module">
import { dev } from "$app/env"
export const load: RouteLoad = async ({ fetch, session }) => {
  //@todo move to .env config
  const apiUrl = "http://localhost:1337"

  //@todo move to .env config
  const assetUrl = dev ? "http://localhost:1337" : "/media"

  const res = await fetch(`${apiUrl}/teralan-se`)
  const data = await res.json()

  const socials = await fetch(`${apiUrl}/socials`)
  const contacts = (await socials.json()).Contacts

  return {
    props: {
      assetUrl,
      contacts,
      data,
    },
  }
}
</script>

<script>
import Header from "$components/layout/header.svelte"
import PageTransition from "$components/layout/page-transition.svelte"
import { fade } from "svelte/transition"
import { page } from "$app/stores"

import {
  homePage,
  eventsPage,
  aboutUsPage,
  memberPage,
  contactLinks,
} from "../stores/site"

export let data: Record<string, any> = {}
export let assetUrl: string = ""
export let contacts: ContactLink[] = []

$homePage = {
  intro: { title: data.index_intro.Title, paragraph: data.index_intro.Paragraph },
  joinButtonText: data.join_member_button_text,
  eventsButtonText: data.see_events_nutton_text,
  logo: `${assetUrl}${data.logo.url}`,
  background: `${assetUrl}${data.index_background.url}`,
}

$eventsPage = {
  intro: { title: data.events_intro.Title, paragraph: data.events_intro.Paragraph },
  emptyFallback: {
    title: data.no_events_found_text.Title,
    paragraph: data.no_events_found_text.Paragraph,
  },
}

$aboutUsPage = {
  intro: { title: data.about_intro.Title, paragraph: data.about_intro.Paragraph },
  boardMembers: data.board_members.map((x) => ({
    name: x.Name,
    role: x.Role.Description,
    picture: x.Picture ? `${assetUrl}${x.Picture?.url}` : undefined,
  })),
}

$memberPage = {
  intro: {
    title: data.membership_intro.Title,
    paragraph: data.membership_intro.Paragraph,
  },
}

$contactLinks = contacts.map((x) => ({ text: x.Text, href: x.Href }))
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="app">
  <Header />
  <main>
    <PageTransition refresh={$page.path}>
      <slot />
    </PageTransition>
    {#if $page.path == "/"}
      <div
        class="bg"
        in:fade={{ duration: 1000 }}
        style={`background-image: url("${$homePage.background}")`}
      />
    {/if}
  </main>
</div>

<style>
:root {
  @apply antialiased text-gray-600;
  @apply leading-normal tracking-normal text-base break-words;
  @apply font-sans text-base lg:text-xl border-none;
}

html {
  margin-left: calc(100vw - 100%); }
}

main {
  min-height: 600px;
  @apply bg-black;
  @apply w-full py-4 md:py-16;
}

body {
  @apply flex flex-col m-0 p-0 border-none bg-black;
}

img {
  @apply m-0 p-0 border-none;
}

/* Hide scrollbar for Chrome, Safari and Opera */
:global(*::-webkit-scrollbar) {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.app {
  max-width: 100vw;
  font-family: 'DM Sans';
  @apply relative w-full overflow-hidden bg-black;
  @apply bg-transparent;
}
.bg {
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  @apply absolute top-0 w-full h-full;
}
.bg::before {
  content: "";
  position: absolute;
  background: linear-gradient(0deg, rgba(1, 1, 1, 0.9) 30%, rgba(1, 1, 1, 0.8) 100%);
  width: 100%;
  height: 100%;
  z-index: -2;
  left: 0;
  top: 0;
}
</style>
