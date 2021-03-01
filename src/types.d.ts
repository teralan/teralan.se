declare type SimpleContent = {
  title: string
  paragraph: string
}

declare type SiteContent = {
  homePage: HomePage
  eventsPage: EventsPage
  aboutUsPage: AboutUsPage
  memberPage: MemberPage
  contactLinks: ContactLink[]
}

declare type HomePage = {
  intro: SimpleContent
  joinButtonText: string
  eventsButtonText: string
  logo: string
  background: string
}

declare type EventsPage = {
  intro: SimpleContent
  emptyFallback: SimpleContent
}

declare type AboutUsPage = {
  intro: SimpleContent
  boardMembers: BoardMember[]
}

declare type MemberPage = {
  intro: SimpleContent
}

declare type PersonCardData = {
  name: string
  role: string
  picture: string
}

declare type BoardMember = PersonCardData

declare type ContactLink = {
  text: string
  href: string
}
