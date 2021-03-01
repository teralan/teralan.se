// <reference types="@sveltejs/kit" />

declare module "*.svelte" {
  export { SvelteComponent as default } from "svelte"
}

declare type RouteLoad = (params: {
  fetch: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  session: Record<string, any>
  page: {
    host: string
    path: string
    params?: Record<string, string>
    query: URLSearchParams
  }
  context: Record<string, any>
}) => Promise<{
  status?: number
  /**
   * use new Error() to generate this
   */
  error?: Error
  /**
   * only implemented for SSR for now, not client-side
   */
  redirect?: {
    to: string
    status: number
  }
  context?: Record<string, any>
  /**
   * seconds before cleared from cache
   */
  maxage?: number
  props?: Record<string, any>
} | void>

declare type ServerRoute<T extends Record<string, any> = Record<string, any>> = (
  req: {
    host: string
    path: string
    headers: Record<string, string>
    query: URLSearchParams
    body: undefined | Record<string, any>
    params: Record<string, unknown>
  },
  context?: Record<string, any>,
) => Promise<{
  status?: number
  headers?: Record<string, string>
  body?: T | Buffer | DataView
}>

declare module "*.gif" {
  const value: string
  export = value
}

declare module "*.jpg" {
  const value: string
  export = value
}

declare module "*.jpeg" {
  const value: string
  export = value
}

declare module "*.png" {
  const value: string
  export = value
}

declare module "*.svg" {
  const value: string
  export = value
}

declare module "*.webp" {
  const value: string
  export = value
}
