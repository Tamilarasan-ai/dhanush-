'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, Download, Mail, Phone } from 'lucide-react'

const googleDrivePdfUrl = "https://docs.google.com/document/d/1kTAo0h-RxWOvVClNo7OiAVg4Qjl01Rpi/export?format=pdf"; // replace YOUR_FILE_ID with your actual file ID


interface DicebearImage {
  url: string
}

// Function to generate image URL for Dicebear avatars
const generateDicebearImage = (seed: string, style: string): string => {
  return `https://api.dicebear.com/6.x/${style}/svg?seed=${seed}`
}

export function PortfolioComponent() {
  const [heroImage, setHeroImage] = useState<DicebearImage | null>(null)
  const [experienceImages, setExperienceImages] = useState<DicebearImage[]>([])
  // Refs for each section to enable smooth scrolling
  const aboutRef = useRef<HTMLDivElement>(null)
  const experienceRef = useRef<HTMLDivElement>(null)
  const extracurricularRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Generate hero image
    setHeroImage({ url: generateDicebearImage('finance-hero', 'identicon') })

    // Generate experience images
    const experiences = ['fincell', 'protege', 'institutor']
    const images = experiences.map(exp => ({ url: generateDicebearImage(exp, 'shapes') }))
    setExperienceImages(images)
  }, [])

  // Function to scroll to a section with offset
  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 100, // Offset of 100px for spacing
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <header className="relative h-screen overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="absolute inset-0 opacity-20">
          {heroImage && (
            <div 
              style={{ backgroundImage: `url(${heroImage.url})` }}
              className="w-full h-full bg-repeat animate-pulse"
              role="img"
              aria-label="Abstract finance-themed background"
            />
          )}
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center animate-fade-in-down">
            Crafting Financial Futures
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-center animate-fade-in-up">
            Dhanush Pandiyan | Finance Professional Portfolio 2024
          </p>
          <Button 
            size="lg" 
            className="animate-bounce"
            onClick={() => scrollToSection(aboutRef)}
          >
            Explore My Journey
          </Button>
        </div>
      </header>

      <nav className="bg-primary text-primary-foreground sticky top-0 z-10">
  <div className="container mx-auto px-4 flex justify-between items-center">
    <ul className="flex space-x-4 py-4 text-sm md:text-base">
      <li><a onClick={() => scrollToSection(aboutRef)} className="cursor-pointer hover:underline">About</a></li>
      <li><a onClick={() => scrollToSection(experienceRef)} className="cursor-pointer hover:underline">Experience</a></li>
      <li><a onClick={() => scrollToSection(extracurricularRef)} className="cursor-pointer hover:underline">Extracurricular</a></li>
      <li><a onClick={() => scrollToSection(contactRef)} className="cursor-pointer hover:underline">Contact</a></li>
    </ul>

    <div className="relative">
      <a 
        href={googleDrivePdfUrl}
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-flex items-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl"
      >
        <Download className="h-4 w-4" /> {/* Always show the download icon */}
        <span className="hidden md:inline ml-1 text-sm">Download Resume</span> {/* Show text only on medium and larger screens */}
      </a>
    </div>
  </div>
</nav>


      <main className="container mx-auto px-4 py-8">
        <section id="about" className="mb-12" ref={aboutRef}>
          <Card>
            <CardHeader>
              <CardTitle>Vanakam (Namaste)</CardTitle>
              <CardDescription>I'm Dhanush Pandiyan</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Over the past few months, I've been deeply involved in various finance roles that have honed my analytical and strategic skills. From preparing comprehensive equity research reports during my internship at Protege Wealth to promoting personalized mentoring services at Institutor, I've gained a diverse set of experiences in the financial sector.
              </p>
              <p>
                I am eager to apply my diverse skill set and financial knowledge to new opportunities. My goal is to leverage my analytical and strategic thinking to drive impactful business solutions in the finance industry. I aim to contribute to innovative strategies that foster growth and sustainability in the world of finance. Let's create something amazing together!
              </p>
            </CardContent>
          </Card>
        </section>

        <section id="experience" className="mb-12" ref={experienceRef}>
          <h2 className="text-3xl font-bold mb-6">Professional Experience</h2>
          <Tabs defaultValue="fincell">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fincell">Fincell</TabsTrigger>
              <TabsTrigger value="protege">Protege Wealth</TabsTrigger>
              <TabsTrigger value="institutor">Institutor</TabsTrigger>
            </TabsList>
            <TabsContent value="fincell">
              <Card>
                <CardHeader>
                  <CardTitle>Equity Research Analyst - Fincell</CardTitle>
                  <CardDescription>DEC 2023 - PRESENT</CardDescription>
                </CardHeader>
                <CardContent>
                  {experienceImages[0] ? (
                    <img 
                      src={experienceImages[0].url} 
                      alt="Abstract representation of Fincell experience" 
                      className="w-full h-48 object-cover mb-4 rounded-md" 
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-300 mb-4 rounded-md flex items-center justify-center">
                      <p>Generating image...</p>
                    </div>
                  )}
                  <p className="mb-2">At Fincell, the finance club of St. Xavier's College, we are dedicated to promoting financial literacy and developing corporate skills such as research and presentation.</p>
                  <p className="mb-2">Within the first 20 days of 2024, I contributed to every report published by Fincell, which was our first set of reports.</p>
                  <p>In my second year, I was promoted to Auto Ancillary Sector Head, leading a team of four analysts. We conducted extensive sector analysis, following industry trends and researching companies.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="protege">
              <Card>
                <CardHeader>
                  <CardTitle>Equity Research Intern - Protege Wealth</CardTitle>
                  <CardDescription>JAN 2024 - MAR 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  {experienceImages[1] ? (
                    <img 
                      src={experienceImages[1].url} 
                      alt="Abstract representation of Protege Wealth experience" 
                      className="w-full h-48 object-cover mb-4 rounded-md" 
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-300 mb-4 rounded-md flex items-center justify-center">
                      <p>Generating image...</p>
                    </div>
                  )}
                  <p className="mb-2">During my remote internship at Protege Wealth as an Equity Research Intern, I gained hands-on experience in preparing equity research reports. I covered the luggage, chemical, and cosmetics sectors, analyzing industry trends and company competitive advantages.</p>
                  <p>I dedicated significant time to building my knowledge base and developing investment theses. My reports included company overviews, key market data, business models, financial analysis, ratio and Dupont analysis, and SWOT analysis.</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="institutor">
              <Card>
                <CardHeader>
                  <CardTitle>Business Development and Sales Intern - Institutor</CardTitle>
                  <CardDescription>APRIL 2024 - MAY 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  {experienceImages[2] ? (
                    <img 
                      src={experienceImages[2].url} 
                      alt="Abstract representation of Institutor experience" 
                      className="w-full h-48 object-cover mb-4 rounded-md" 
                    />
                  ) : (
                    <div className="w-full h-48 bg-gray-300 mb-4 rounded-md flex items-center justify-center">
                      <p>Generating image...</p>
                    </div>
                  )}
                  <p className="mb-2">During my remote internship at Institutor as a Business Development and Sales Intern, I started with no prior experience but a strong curiosity to learn. My main responsibility was to promote a finance mentor program tailored to students interested in finance.</p>
                  <p>From outreach to prospective customers to providing comprehensive insights about the program, I learned the essentials of sales and marketing. I utilized online platforms to connect with students who were eager to learn about finance.</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section id="extracurricular" className="mb-12" ref={extracurricularRef}>
          <Card>
            <CardHeader>
              <CardTitle>Extracurricular</CardTitle>
              <CardDescription>Member - Green Club</CardDescription>
            </CardHeader>
            <CardContent>
            
  <p className="mb-4">
    I am an active member of the Green Club at St. Xavier's College, where we focus on environmental sustainability initiatives. Our projects include campus clean-up drives, workshops on waste management, and raising awareness about eco-friendly practices.
  </p>
  <p className="mb-4">
    As part of the Green Club, I developed skills in organizing events, collaborating with team members, and spreading environmental awareness. My role allowed me to contribute to meaningful causes while enhancing my leadership abilities.
  </p>
  <p>
    I believe that sustainability is not just a choice but a responsibility. Through my involvement, I aim to inspire others to adopt sustainable practices and make a positive impact on our community and the environment.
  </p>
</CardContent>

          </Card>
        </section>

        <section id="contact" className="mb-12" ref={contactRef}>
          <Card>
            <CardHeader>
              <CardTitle>Team Up for Excellence in Finance</CardTitle>
              <CardDescription>Let's Collaborate!</CardDescription>
            </CardHeader>
            <CardContent>
            <p className="mb-4">
    Interested in collaborating or learning more about my work? I’d love to connect!
  </p>
  <div className="flex items-center space-x-4">
    <Button variant="outline" onClick={() => window.location.href = 'mailto:dhanushpandiyan15@gmail.com'}>
      <Mail className="mr-2" /> Email Me
    </Button>
    <Button variant="outline" onClick={() => window.location.href = 'tel:+919930543121'}>
      <Phone className="mr-2" /> Call Me
    </Button>

  </div>
            </CardContent>
          </Card>
        </section>
        
      </main>

      <footer className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Dhanush Pandiyan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
