<script>
import Background from "$components/background.svelte"
import Page from "$components/layout/page.svelte"
import Button from "$components/button.svelte"

export let status: number
export let error: Error
</script>

<Background />

<Page title={`${status}`} description={error.message}>
  <a href="/" class="my-8">
    <Button color="blue">
      <span>⬅</span>
      <span class="pl-2 pr-4"> Tillbaka </span>
    </Button>
  </a>
</Page>
