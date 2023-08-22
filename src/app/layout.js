import { Providers } from "./providers";
import Script from "next/script";

import "@/styles/globals.css";
import theme from "@/styles/theme";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Project Tech',
  description: 'Project Tech is a 501(c)(3) non-profit that strives to eliminate technological disparity among students across the globe. Through our comprehensive suite of resources – from coding courses to interactive quizzes & videos – we aim to ignite a spark of passion for technology in all students across the globe.',
  keywords: ['Project Tech', 'Coding Education', 'Free Programming Courses', 'Free Coding Resources', 'Resources', 'EdTech', 'Digital Divide', 'Computer Science', 'JavaScript', 'Python', 'Data Science', 'Web Development', 'Interactive Learning', 'Free Coding Courses', 'Tech Community', 'Project Tech'],
  twitter: {
    cardType: 'summary_large_image',
    title: 'Project Tech',
    description: 'Project Tech is a 501(c)(3) non-profit that strives to eliminate technological disparity among students across the globe. Through our comprehensive suite of resources – from coding courses to interactive quizzes & videos – we aim to ignite a spark of passion for technology in all students across the globe.'
  },
  googleSiteVerification: 'EjKDS61ntb0xJK0JnTottBs-5do_YxjqO1vsnRoZusY',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

      </head>
      <body>
        <Providers theme={theme}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
