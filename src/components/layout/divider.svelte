<script>
export let text: string = "* * *"
</script>

<span class="divider">{text}</span>

<style scoped>
.divider {
  @apply mx-auto my-4;
  @apply text-xl tracking-widest;
  @apply text-blue-400;
}
</style>
