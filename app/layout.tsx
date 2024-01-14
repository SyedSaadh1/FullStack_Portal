import "./tailwind.css"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body className="bg-slate-300">{children}</body>
      </html>
    )
  }