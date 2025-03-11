// Google Analytics
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set' | 'js',
      targetId: string | Date,
      config?: Record<string, any> | undefined
    ) => void
    dataLayer: Array<Record<string, any>>
  }
}

export {}
