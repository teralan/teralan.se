<script>
export let color: "blue" | "orange" = "blue"
</script>

<span class={`btn ${color}`}> <slot /> </span>

<style scoped>
.btn {
  cursor: pointer;
  width: fit-content;

  @apply inline-flex items-center justify-center transition-all duration-150
           border font-semibold py-3 px-3 bg-opacity-100;
}
.btn.blue {
  @apply bg-blue-800 border-blue-600;
}
.btn.orange {
  @apply bg-yellow-600 border-yellow-400;
}
.btn:hover {
  @apply bg-opacity-60;
}
</style>
