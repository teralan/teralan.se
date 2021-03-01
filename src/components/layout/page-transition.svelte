<script>
import { fly } from "svelte/transition"
export let refresh = ""
</script>

{#key refresh}
  <div in:fly={{ y: 20, duration: 1000 }}>
    <slot />
  </div>
{/key}
