import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Image from "next/image"
import profilePic from "./images/placeholder.jpg"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Example Person</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
            <p className="text-xl mb-8">I'm a passionate web developer creating amazing digital experiences.</p>
            <Button size="lg" asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src={profilePic}
                alt="Example Person"
                width={300}
                height={300}
                className="rounded-full"
              />
              <div>
                <p className="mb-4">
                Introduce yourself by adding your bio here. Share your passions, interests, and the experiences that define your journey. Let others discover what excites and inspires you!                </p>
                <p>
                  Example: When I'm not coding, you can find me hiking in the mountains or experimenting with new recipes in the kitchen. I believe in continuous learning and am always excited to take on new challenges in the ever-evolving world of web development.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((project) => (
                <Card key={project}>
                  <CardHeader>
                    <CardTitle>Project {project}</CardTitle>
                    <CardDescription>A brief description of the project</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Image
                      src={`https://img.freepik.com/free-vector/rocket-blueprint-design_1212-305.jpg`}
                      alt={`Project ${project}`}
                      width={400}
                      height={200}
                      className="rounded-md mb-4"
                    />
                    <p className="mb-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Button asChild>
                      <a href={`#project-${project}`}>View Project</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {["Skill #1", "Skill #2", "Skill #3", "Skill #4", "Skill #5", "Skill #6", "Skill #7", "Skill #8"].map((skill) => (
                <Card key={skill}>
                  <CardContent className="flex items-center justify-center h-24">
                    <span className="text-lg font-semibold">{skill}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <Card className="max-w-md mx-auto">
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <Input id="name" placeholder="Your Name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <Input id="email" type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <Textarea id="message" placeholder="Your message here..." />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 Example Person. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}