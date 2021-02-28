<script>
export let data: {
  title: string
  description: string
  image: string
} = { title: "Title", description: "Description", image: "assets/img/logo.webp" }
</script>

<div class="person_card">
  <img src={data.image} width="100px" />
  <span class="title">{data.title}</span>
  <span class="description">{data.description}</span>
</div>

<style>
.person_card {
  @apply flex flex-col items-center;
  @apply p-4 md:h-64 md:w-48;
  @apply bg-blue-900 border-1 border-blue-500  rounded-lg shadow-lg;
  @apply text-center;
  @apply transition-all duration-500 cursor-pointer;
}
.person_card:hover {
  z-index: 10;
  transform: scale(
    1.05
  ); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
.person_card img {
  @apply w-full;
  @apply bg-white rounded-full;
  @apply p-4 mb-4;
}
.person_card .title {
  @apply text-white font-bold xs:text-sm;
}
.person_card .description {
  @apply text-blue-300 xs:text-xs;
}
</style>
