<script>
import { fly } from "svelte/transition"
import Background from "@components/background.svelte"
import PersonCard from "@components/person-card.svelte"
import Page from "@components/layout/page.svelte"

const description = `Bli medlem i vår förening och få tillgång till flera förmåner som billigare biljettpriser och
        exklusiva event.`
</script>

<Background />

<Page title="Om oss" {description}>
  <div class="cards">
    {#each [[1, 2], [3, 4], [5, 6]] as item, i}
      <div
        class="column space-y-2 md:space-y-4"
        in:fly={{ delay: i * 250, duration: 1000, y: 200 }}
      >
        {#each item as it}
          <PersonCard
            data={{
              title: "Frans Bergstrom",
              description: "Web developer",
              image: "assets/img/logo.webp",
            }}
          />
        {/each}
      </div>
    {/each}
  </div>
</Page>

<style scoped>
.cards {
  @apply grid grid-cols-3 gap-2 md:gap-4;
  @apply my-8 md:my-16;
}
.cards .column:nth-child(2) {
  @apply mt-6 md:mt-12;
}
.cards .column:nth-child(3) {
  @apply mt-12 md:mt-24;
}
</style>
