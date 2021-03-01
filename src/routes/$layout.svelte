<script context="module" lang="ts">
import { home, events, aboutus, member, contacts } from "$stores/site"
export const load = async ({ fetch }) => {
  const req = await fetch(`/api/site-content`)
  const content = (await req.json()) as SiteContent
  home.set(content.homePage)
  events.set(content.eventsPage)
  aboutus.set(content.aboutUsPage)
  member.set(content.memberPage)
  contacts.set(content.contactLinks)
  return {}
}
</script>

<script>
import { fade } from "svelte/transition"
import { page } from "$app/stores"
import { home as data } from "$stores/site"

import Header from "$components/layout/header.svelte"
import PageTransition from "$components/layout/page-transition.svelte"
</script>

<div class="app">
  <Header />
  <main>
    <PageTransition refresh={$page.path}>
      <slot />
    </PageTransition>
    {#if $page.path === "/"}
      <div class="bg" style={`background-image: url("${$data.background}")`} />
    {:else}
      <div class="bg" style={`background-color: black`} />
    {/if}
  </main>
</div>

<style>
:root {
  @apply antialiased text-gray-600;
  @apply leading-normal tracking-normal text-base break-words;
  @apply font-sans text-base lg:text-xl border-none;
}

:global(*::-webkit-scrollbar) {
  display: none;
}

* {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

svg,
img {
    @apply m-0 p-0 border-none;
}

html {
  margin-left: calc(100vw - 100%); }
}

body {
  @apply flex flex-col;
  margin:0!important;
  padding:0!important;
  min-height: 100vh;
}

main {
  @apply w-full py-4 md:py-16 bg-transparent;
}

.app {
  max-width: 100vw;
  font-family: 'DM Sans';
  min-height: 100vh;
  @apply relative w-full overflow-hidden;
  @apply bg-transparent;
}

.bg {
  z-index: -1;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
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
