import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'

const features = [
  'Custom spatial planning and furniture arrangement',
  'Curated material selection with sustainable options',
  'Lighting design for ambiance and functionality',
  'Color psychology consultation and palette development',
  'Project management from concept to completion',
  'Post-completion styling and finishing touches',
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
      aria-label="About our design philosophy"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative h-96 lg:h-full min-h-[500px] order-2 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1574909857469-e3a6f2980e65?w=600&h=600&fit=crop"
                alt="Interior design workspace"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl tracking-wider uppercase text-foreground font-montserrat font-black">
                  About <span className="text-primary">Me</span>
                </h3>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-5xl font-bold font-montserrat leading-tight text-balance">
                Luxury Interior Design
              </h2>
            </div>

            <p className="text-lg text-foreground/70 leading-relaxed">
              With over a decade of experience in interior design, we specialize in
              creating timeless spaces that seamlessly blend functionality with aesthetic
              excellence. Our philosophy centers on understanding your unique needs and
              translating them into cohesive, beautiful environments.
            </p>

            <p className="text-lg text-foreground/70 leading-relaxed">
              We believe that exceptional design is not about following trends—it's about
              creating spaces that tell your story and enhance your quality of life. Every
              project is approached with meticulous attention to detail and a commitment
              to surpassing expectations.
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div className="text-center">
                <p className="text-3xl font-bold font-display text-primary">150+</p>
                <p className="text-sm text-foreground/60">Projects Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold font-display text-primary">95%</p>
                <p className="text-sm text-foreground/60">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold font-display text-primary">12+</p>
                <p className="text-sm text-foreground/60">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
