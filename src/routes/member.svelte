<script>
import { member } from "$stores/site"
import Page from "$components/layout/page.svelte"
import Background from "$components/background.svelte"
import Button from "$components/button.svelte"
</script>

<svelte:head>
  <title>{`${$member.intro.title} - 📋`}</title>
</svelte:head>

<Page title={$member.intro.title} description="" divider="(＾Ｕ＾)ノ">
  <span class="text-2xl text-red-600 text-center">
    {$member.intro.paragraph}
  </span>
  <a href="/" class="my-8">
    <Button color="blue">
      <span>⬅</span>
      <span class="pl-2 pr-4"> Tillbaka </span>
    </Button>
  </a>
</Page>
