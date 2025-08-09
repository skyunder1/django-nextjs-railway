export const metadata = {
  title: 'Next.js + Django on Railway',
  description: 'Full-stack application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}