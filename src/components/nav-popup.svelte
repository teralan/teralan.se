<script>
import { fly } from "svelte/transition"
export let visible = false
export let items: {
  text: string
  href: string
}[] = []
</script>

{#if visible}
  <div class="popup" transition:fly={{ y: 25, duration: 1000 }}>
    <div class="px-4 py-4">
      <h3 class="mb-4 text-white">
        <slot />
      </h3>
      <ul>
        {#each items as item}
          <li>
            <a target="_blank" href={item.href}>{item.text}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
{/if}

<style scoped>
.popup {
  left: -120px;
  top: 50px;
  position: absolute;
  width: 300px;
  @apply shadow-lg border-blue-600 bg-blue-900
            border rounded-xl lowercase;
}
ul {
  @apply flex flex-col space-y-2 text-base;
  @apply text-blue-200;
}
ul li {
  @apply transition-colors duration-150;
}
ul li:hover {
  @apply text-blue-400;
}
</style>
