<script>
import { fly } from "svelte/transition"
export let visible = false
export let items: ContactLink[] = []
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
  border-style: solid;
  @apply shadow-lg border-blue-500 bg-blue-800
         border rounded-xl lowercase cursor-default;
}
ul {
  @apply flex flex-col space-y-2 text-base;
  @apply text-blue-200;
}
ul li {
  @apply transition-colors duration-150 cursor-pointer;
}
ul li:hover {
  @apply text-blue-400;
}
</style>
