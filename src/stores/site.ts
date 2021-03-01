import { writable } from "svelte/store"

export const home = writable<HomePage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
  joinButtonText: "joinButtonText",
  eventsButtonText: "eventsButtonText",
  logo: "logo",
  background: "background",
})

export const events = writable<EventsPage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
  emptyFallback: {
    title: "title",
    paragraph: "paragraph",
  },
})

export const aboutus = writable<AboutUsPage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
  boardMembers: [],
})

export const member = writable<MemberPage>({
  intro: {
    title: "title",
    paragraph: "paragraph",
  },
})

export const contacts = writable<ContactLink[]>([])
