<script>
import PersonIcon from "$components/icons/person-icon.svelte"
export let data: PersonCardData = {
  title: "Title",
  description: "Description",
  image: "assets/img/logo.webp",
}
</script>

<div class="person_card">
  {#if data.image}
    <img class="image_inner" src={data.image} />
  {:else}
    <span class="image_inner">
      <PersonIcon />
    </span>
  {/if}
  <span class="title">{data.title}</span>
  <span class="description">{data.description}</span>
</div>

<style>
.person_card {
  @apply flex flex-col items-center justify-center;
  @apply p-2 md:h-64 md:w-48;
  @apply text-center;
  @apply bg-blue-900 border-1 border-blue-500 rounded-lg shadow-lg;
  @apply transition-all duration-500 cursor-pointer;
  border-style: solid;
  min-height: 170px;
}
.person_card:hover {
  z-index: 10;
  transform: scale(1.05);
}
.person_card .image_inner {
  aspect-ratio: 1 / 1;
  background: white;
  height: auto;
  margin-bottom: 8px;
  @apply h-16 w-16 md:h-32 md:w-32;
  @apply p-1 mb-2 md:p-2 md:mb-4;
  @apply rounded-full shadow-lg;
}
.person_card .title {
  @apply text-white font-bold text-sm md:text-base break-words;
}
.person_card .description {
  @apply text-blue-300 text-xs md:text-sm;
}
</style>
