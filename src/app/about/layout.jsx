import { Inter } from 'next/font/google'

export const metadata = {
  title: 'About | DSC-WeDemo',
  description: 'Trang About của Wedemo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
