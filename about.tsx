import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="mt-8">
      <h2 className="text-3xl font-bold text-center mb-6">Hi! I&apos;m Pete Thinkful</h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Pete Thinkful"
            width={300}
            height={300}
            className="rounded-full"
          />
        </div>
        <div className="md:w-2/3">
          <p className="mb-4">I&apos;m an artist living in Denver, Colorado.</p>
          <p className="mb-2">As an artist, I&apos;m interested in:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Producing abstract art</li>
            <li>Creating street graffiti art</li>
            <li>Connecting with like-minded artists</li>
          </ul>
          <p>
            Please feel free to take a look at my website and feel free to{" "}
            <a href="#contact" className="text-blue-600 hover:underline">
              contact me
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Pete&apos;s Background</h3>
        <p className="mb-4">
          After graduating college, I became an art teacher and worked with beginners and professionals. I love art and
          my works have been featured in major art galleries across the globe.
        </p>
        <p>
          If you&apos;re looking to hire an artist or if you&apos;re an artist looking for a collaborator for your next
          project, please reach out! I&apos;m so excited to work with other artists to create new art.
        </p>
      </div>
    </section>
  )
}

