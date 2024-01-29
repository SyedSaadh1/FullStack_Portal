import PageHeader from "@/ui/layout/PageHeader"
import FluentUIProvider from "./FluentUIProvider"
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
          <main className="bg">
            <PageHeader />
            {children}
          </main>
        </FluentUIProvider>
      </body>
    </html>
  )
}