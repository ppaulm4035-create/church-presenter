export const metadata = {
  title: 'Church Presenter',
  description: 'Worship Presentation App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
