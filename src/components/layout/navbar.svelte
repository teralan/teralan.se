<script>
import { fade, slide } from "svelte/transition"
import Button from "@components/button.svelte"
import NavPopup from "@components/nav-popup.svelte"
import { onMount } from "svelte"

const contactLinks = [
  { text: "👍 • facebook/teralanpage", href: "https://www.facebook.com/teralanpage" },
  { text: "📞 • +46 760 18 11 77", href: "tel:+46760181177" },
  { text: "📪 • hej@teralan.se", href: "mailto:hej@teralan.se" },
]

let showMobileNav = false
let showMobileMenu = false

const mobileWidth = 767

onMount(() => {
  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
  showMobileNav = vw <= mobileWidth
  window
    .matchMedia(`(max-width: ${mobileWidth}px)`)
    .addEventListener("change", mediaQueryHandler)
})

function mediaQueryHandler(e: MediaQueryListEvent) {
  if (!e.matches) {
    showMobileNav = false
  } else {
    showMobileNav = true
  }
}

const handleMobileIconClick = () => (showMobileMenu = !showMobileMenu)

let contactPopupRoot: HTMLElement | undefined = undefined
let showContactPopup = false

function onWindowClick(e: MouseEvent) {
  if (!showMobileNav && showContactPopup && contactPopupRoot) {
    showContactPopup = contactPopupRoot!.contains(e.target as HTMLElement)
  }
}
</script>

<svelte:window on:click={onWindowClick} />

<nav>
  {#if !showMobileNav}
    <div class="desktop" in:fade={{ duration: 1000 }}>
      <ul class="list">
        <li>
          <a href="/about">om oss</a>
        </li>
        <li>
          <a href="/events">events</a>
        </li>
        <li class="relative">
          <span
            class="cursor-pointer"
            on:click={(e) => {
              e.preventDefault()
              e.stopPropagation()
              showContactPopup = !showContactPopup
            }}>kontakt</span
          >
          <div bind:this={contactPopupRoot}>
            <NavPopup items={contactLinks} visible={showContactPopup}>
              <span class="text-2xl font-bold tracking-wider capitalize">
                Frågor? <br /><span class="text-lg">Kontakta oss!</span>
              </span>
            </NavPopup>
          </div>
        </li>
      </ul>
      <a href="/membership" class="ml-auto text-xl text-white rounded-none">
        <Button color="blue">
          <span>💳</span>
          <span class="pl-2 pr-4"> Bli medlem </span>
        </Button>
      </a>
    </div>
  {:else if showMobileNav}
    <div class="mobile">
      <span on:click={handleMobileIconClick} class="icon">
        {showMobileMenu ? "❌" : "🍔"}
      </span>
      {#if showMobileMenu}
        <div class="modal" in:slide={{ duration: 1000 }}>
          <ul in:fade={{ delay: 100, duration: 1000 }}>
            <li>
              <a on:click={handleMobileIconClick} href="/about">Om oss</a>
            </li>
            <li>
              <a on:click={handleMobileIconClick} href="/events">Events</a>
            </li>
            <li>
              <a on:click={handleMobileIconClick} href="/membership">Bli medlem</a>
            </li>
          </ul>
          <div class="contact mt-4" in:fade={{ delay: 100, duration: 1000 }}>
            <ul>
              {#each contactLinks as item}
                <li>
                  <a target="_blank" href={item.href}>{item.text}</a>
                </li>
              {/each}
            </ul>
          </div>
        </div>
      {/if}
    </div>
  {/if}
</nav>

<style scoped>
nav {
  @apply flex w-screen items-center justify-center;
  @apply tracking-wide capitalize;
}

.desktop {
  @apply flex w-full px-10 py-10 max-w-7xl;
  @apply hidden md:flex;
}

.desktop ul.list {
  @apply inline-flex flex-row space-x-12 items-center my-auto;
}

.desktop ul.list li {
  @apply text-xl text-white;
}

.desktop .join_button {
  @apply px-8 py-3 text-xl tracking-wider;
  @apply bg-blue-700 border border-blue-600 text-white;
}

.mobile {
  @apply m-4 relative w-full;
}

.mobile .icon {
  z-index: 99;
  @apply w-12 h-12 flex items-center justify-center rounded-full;
  @apply bg-white border-gray-200 shadow border text-white;
  @apply absolute p-2 right-0 top-0;
}

.mobile .modal {
  @apply p-4 bg-white border-blue-600 rounded-3xl shadow-lg border-gray-200 border;
}

.mobile ul {
  @apply flex flex-col space-y-2;
  @apply text-2xl font-bold text-blue-900;
}

.mobile .contact ul {
  @apply flex flex-col space-y-2 text-base font-normal lowercase bg-blue-300 p-4 rounded-2xl;
  @apply text-blue-900;
}
.mobile .contact ul li {
  @apply transition-colors duration-150;
}
.mobile .contact ul li:hover {
  @apply text-white;
}
</style>
