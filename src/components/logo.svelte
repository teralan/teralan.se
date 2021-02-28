<script>
export let image: string = ""
</script>

<span class="mx-auto logo">
  <img src={image} alt="logo" height="auto" />
  <span>teralan</span>
</span>

<style scoped>
.logo {
  width: 100%;
  @apply inline-flex flex-col justify-center items-center;
  @apply border-none;
}
.logo img {
  width: 100%;
}
.logo span {
  @apply text-4xl tracking-wide;
}
</style>
