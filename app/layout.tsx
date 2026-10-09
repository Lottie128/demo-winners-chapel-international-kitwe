import './globals.css'
import { siteConfig } from '@/lib/site.config'
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const themeStyles = {
    '--primary': siteConfig.theme.colors.primary, '--secondary': siteConfig.theme.colors.secondary,
    '--accent': siteConfig.theme.colors.accent, '--background': siteConfig.theme.colors.background,
    '--surface': siteConfig.theme.colors.surface, '--foreground': siteConfig.theme.colors.foreground,
    '--muted': siteConfig.theme.colors.muted, '--border': siteConfig.theme.colors.border,
  } as React.CSSProperties;
  return <html lang="en"><body className="antialiased" style={themeStyles}>{children}</body></html>
}
