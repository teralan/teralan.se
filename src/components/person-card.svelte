<script>
export let data: PersonCardData = {
  title: "Title",
  description: "Description",
  image: "assets/img/logo.webp",
}
</script>

<div class="person_card">
  <img src={data.image ?? "assets/img/member_fallback.svg"} />
  <span class="title">{data.title}</span>
  <span class="description">{data.description}</span>
</div>

<style>
.person_card {
  @apply flex flex-col items-center;
  @apply p-2 md:p-4 md:h-64 md:w-48;

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
  width: auto;
  @apply bg-white rounded-full shadow-lg;
  @apply p-4 mb-2 md:mb-4 md:p-4;
}
.person_card .title {
  @apply text-white font-bold text-sm md:text-base break-words;
}
.person_card .description {
  @apply text-blue-300 text-xs md:text-sm;
}
</style>
