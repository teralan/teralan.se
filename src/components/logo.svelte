<script>
export let image: string = ""
</script>

<span class="mx-auto logo">
  <img src={image} alt="logo" height="auto" />
</span>

<style scoped>
.logo {
  width: 100%;
  @apply inline-flex flex-col justify-center items-center;
  @apply border-none border-0;
}

:global(img) {
  width: 100%;
  @apply border-none border-0;
}
.logo span {
  @apply text-4xl tracking-wide;
}
</style>
