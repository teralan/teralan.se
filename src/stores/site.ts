import { writable } from "svelte/store"

export const homePage = writable<HomePage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
  joinButtonText: "joinButtonText",
  eventsButtonText: "eventsButtonText",
  logo: "logo",
  background: "background",
})

export const eventsPage = writable<EventsPage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
  emptyFallback: {
    title: "title",
    paragraph: "paragraph",
  },
})

export const aboutUsPage = writable<AboutUsPage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
  boardMembers: [],
})

export const memberPage = writable<memberPage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
})

export const contactLinks = writable<ContactLink[]>([])
