import Image from "next/image"

const projects = [
  {
    title: "Abstract Red",
    image: "/placeholder.svg?height=200&width=300",
    description: "Vaporware wayfarers heirloom neutra disrupt. Activated charcoal waistcoat scenester hell of.",
  },
  {
    title: "Spiral Zenny",
    image: "/placeholder.svg?height=200&width=300",
    description:
      "Sriracha portland taxidermy cronut messenger bag, vegan distillery. Vaporware kickstarter air plant mumblecore food truck.",
  },
  {
    title: "Melted Rainbow",
    image: "/placeholder.svg?height=200&width=300",
    description: "Edison bulb single-origin coffee snackwave, actually ennui locavore shabby chic forage.",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="mt-8">
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="flex flex-wrap justify-between">
        {projects.map((project, index) => (
          <div key={index} className="w-full md:w-[30%] mb-8">
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={200}
              className="mb-2"
            />
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

