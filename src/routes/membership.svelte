<script>
import Page from "@components/layout/Page.svelte"
import Background from "@components/background.svelte"
import Button from "@components/button.svelte"
</script>

<Background />

<Page title="Bli medlem" description={""}>
  <span class="text-2xl text-gray-300 text-center">
    Förnuvarade tar vi inte emot fler medlemmar 😪
  </span>
  <a href="/" class="my-8">
    <Button color="blue">
      <span>⬅</span>
      <span class="pl-2 pr-4"> Tillbaka </span>
    </Button>
  </a>
</Page>
