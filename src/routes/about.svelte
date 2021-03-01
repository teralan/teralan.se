<script>
import { fly } from "svelte/transition"
import { aboutus } from "$stores/site"
import Background from "$components/background.svelte"
import PersonCard from "$components/person-card.svelte"
import Page from "$components/layout/page.svelte"

const formatMembers = (members: BoardMember[]) => {
  const result: BoardMember[] = []
  let i = 0
  for (const member of members) {
    if (i % 2 === 1) {
      result.push([members[i - 1], member])
    }
    i++
  }
  return result
}
</script>

<svelte:head>
  <title>{`${$aboutus.intro.title} - 🧑🏻‍🤝‍🧑🏽`}</title>
</svelte:head>

<Page
  title={$aboutus.intro.title}
  description={$aboutus.intro.paragraph}
  divider={"👈(ﾟヮﾟ👈)"}>
  <div class="cards">
    {#each formatMembers($aboutus.boardMembers) as item, i}
      <div
        class="column space-y-2 md:space-y-4"
        in:fly={{ delay: i * 250, duration: 1000, y: 200 }}>
        {#each item as it}
          <PersonCard
            data={{
              title: it?.name,
              description: it?.role,
              image: it?.picture,
            }} />
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
.column {
  @apply flex flex-col;
}
.cards .column:nth-child(2) {
  @apply mt-6 md:mt-12;
}
.cards .column:nth-child(3) {
  @apply mt-12 md:mt-24;
}
</style>
