<script>
import { fade } from "svelte/transition"
import Divider from "$components/layout/divider.svelte"

export let title: string = "Title"
export let description: string = "Description"
export let divider: string = undefined
export let intro: boolean = true
</script>

<svelte:head>
  <meta name="description" content={description} />
</svelte:head>

<div class="page">
  {#if intro}
    <div class="intro">
      <h1>{title}</h1>
      <Divider text={divider} />
      <p>
        {description}
      </p>
    </div>
  {/if}
  <slot />
</div>

<style scoped>
.page {
  @apply flex flex-col items-center justify-center;
  @apply mt-4 md:mt-16 px-4 mx-auto;
  @apply text-white;
}
.page .intro {
  @apply flex flex-col items-center justify-center;
  @apply text-center;
}
.page .intro h1 {
  @apply text-3xl md:text-5xl;
  @apply font-bold;
}
.page .intro p {
  @apply max-w-lg;
  @apply text-base md:text-lg;
  @apply text-gray-400;
}
</style>
