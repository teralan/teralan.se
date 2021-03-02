import fetch from "node-fetch"
import { dev } from "$app/env"

export const get: ServerRoute<SiteContent> = async (req) => {
  const url = process.env.API_URL ?? "http://localhost:1337"
  const content = await fetchSiteContent(url)
  return {
    status: 200,
    headers: { "Content-Type": "application/json" },
    body: content,
  }
}

async function fetchSiteContent(apiUrl: string): Promise<SiteContent> {
  const raw = await fetch(`${apiUrl}/teralan-se`)
  const data = await raw.json()

  const rawContacts = await fetch(`${apiUrl}/socials`)
  const contacts = (await rawContacts.json()).Contacts

  const getImgUrl = (url: string) =>
    url === undefined ? "" : dev ? `${apiUrl}${url}` : url

  return {
    homePage: {
      intro: { title: data.index_intro.Title, paragraph: data.index_intro.Paragraph },
      joinButtonText: data.join_member_button_text,
      eventsButtonText: data.see_events_nutton_text,
      logo: getImgUrl(data.logo.url),
      background: getImgUrl(data.index_background.url),
    },
    eventsPage: {
      intro: { title: data.events_intro.Title, paragraph: data.events_intro.Paragraph },
      emptyFallback: {
        title: data.no_events_found_text.Title,
        paragraph: data.no_events_found_text.Paragraph,
      },
    },
    aboutUsPage: {
      intro: { title: data.about_intro.Title, paragraph: data.about_intro.Paragraph },
      boardMembers: data.board_members.map((x: Record<string, any>) => ({
        name: x.Name,
        role: x.Role.Description,
        picture: getImgUrl(x.Picture?.url),
      })),
    },
    memberPage: {
      intro: {
        title: data.membership_intro.Title,
        paragraph: data.membership_intro.Paragraph,
      },
    },
    contactLinks: contacts.map((x: Record<string, any>) => ({
      text: x.Text,
      href: x.Href,
    })),
  }
}
