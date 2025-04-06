import Header from "@/components/header"
import About from "@/components/about"
import Portfolio from "@/components/portfolio"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      <Header />
      <main>
        <About />
        <hr className="my-8" />
        <Portfolio />
        <hr className="my-8" />
        <Contact />
      </main>
      <footer className="mt-8 text-center">
        <p>© Pete Thinkful. All rights reserved.</p>
      </footer>
    </div>
  )
}

