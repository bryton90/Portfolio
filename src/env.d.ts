namespace NodeJS {
  interface ProcessEnv {
    // Site Information
    readonly NEXT_PUBLIC_SITE_URL: string
    readonly NEXT_PUBLIC_SITE_NAME: string

    // Analytics
    readonly NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?: string
    readonly NEXT_PUBLIC_FACEBOOK_PIXEL_ID?: string

    // API
    readonly NEXT_PUBLIC_API_BASE_URL?: string

    // Social Media
    readonly NEXT_PUBLIC_GITHUB_URL?: string
    readonly NEXT_PUBLIC_LINKEDIN_URL?: string
    readonly NEXT_PUBLIC_TWITTER_URL?: string

    // Contact
    readonly NEXT_PUBLIC_EMAIL?: string

    // Feature Flags
    readonly NEXT_PUBLIC_ENABLE_BLOG?: 'true' | 'false'
    readonly NEXT_PUBLIC_ENABLE_PROJECTS?: 'true' | 'false'
  }
}
