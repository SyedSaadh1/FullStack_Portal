import PageHeader from "@/ui/layout/PageHeader"
import FluentUIProvider from "./FluentUIProvider"
import NextAuthProvider from "./NextAuthProvider"
import "./tailwind.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="theme-day bg">
        <FluentUIProvider>
          <NextAuthProvider>
            <main className="bg">
              <PageHeader />
              {children}
            </main>
          </NextAuthProvider>
        </FluentUIProvider>
      </body>
    </html>
  )
}