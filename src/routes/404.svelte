<script>
import Background from "@components/background.svelte"
import Page from "@components/layout/page.svelte"
import Button from "@components/button.svelte"
</script>

<Background />

<Page title="404; Not Found" description={"description"}>
  <a href="/" class="my-8">
    <Button color="blue">
      <span>⬅</span>
      <span class="pl-2 pr-4"> Tillbaka </span>
    </Button>
  </a>
</Page>
