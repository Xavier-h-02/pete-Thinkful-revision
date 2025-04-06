import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p className="mb-4">I&apos;d love to hear from you! Please feel free to contact or follow me:</p>
      <ul className="list-disc list-inside">
        <li>
          <Link href="#" className="text-blue-600 hover:underline">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="#" className="text-blue-600 hover:underline">
            Instagram
          </Link>
        </li>
        <li>
          <Link href="#" className="text-blue-600 hover:underline">
            Pinterest
          </Link>
        </li>
      </ul>
    </section>
  )
}

