import { Users, Award, Globe, Heart } from 'lucide-react'

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'We stay true to traditional recipes while embracing modern innovation.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Bringing South Asian heritage to communities around the world.'
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'We use only the finest natural ingredients in all our beverages.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Supporting local farmers and artisans in South Asia.'
    }
  ]

  const milestones = [
    { year: '2018', event: 'DesiBreak Founded in Heritage City' },
    { year: '2019', event: 'Expanded to 10 locations across the region' },
    { year: '2020', event: 'Launched online delivery and retail products' },
    { year: '2021', event: 'Opened franchise locations in major cities' },
    { year: '2022', event: 'Reached 50+ markets globally' },
    { year: '2023', event: 'Achieved sustainability certification' },
    { year: '2024', event: 'Launched premium product line' }
  ]

  const team = [
    {
      name: 'Priya Sharma',
      role: 'Founder & CEO',
      bio: 'Heritage beverage enthusiast with 15+ years in the food industry.'
    },
    {
      name: 'Arjun Patel',
      role: 'Chief Operations Officer',
      bio: 'Expert in supply chain management and sustainable practices.'
    },
    {
      name: 'Neha Gupta',
      role: 'Head of Product Development',
      bio: 'Culinary expert preserving traditional recipes with modern techniques.'
    },
    {
      name: 'Vikram Singh',
      role: 'Global Expansion Lead',
      bio: 'Experienced in international market entry and franchise development.'
    }
  ]

  return (
    <div className="bg-brand-light">
      {/* Header */}
      <section className="bg-brand-primary text-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6 text-brand-cream">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-brand-cream/90 font-light leading-relaxed">
            Desi Break was born from a passion to share the authentic flavors of South Asia with the world. What started as a humble beverage stand has grown into a global movement celebrating cultural heritage through delicious, nourishing drinks.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-brand-light p-8 rounded-xl shadow-card border border-brand-border border-l-4 border-l-brand-primary">
              <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">Our Mission</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                To preserve and celebrate South Asian culinary heritage by crafting authentic, high-quality beverages that nourish the body and soul. We believe every sip should tell a story of tradition, culture, and quality.
              </p>
            </div>
            <div className="bg-brand-light p-8 rounded-xl shadow-card border border-brand-border border-l-4 border-l-brand-secondary">
              <h2 className="font-heading text-3xl font-bold text-brand-primary mb-4">Our Vision</h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                To become the world's leading brand for authentic South Asian beverages, recognized for our commitment to quality, sustainability, and cultural preservation. We envision Desi Break in every home and café globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center text-brand-primary mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-brand-border shadow-card text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">{value.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center text-brand-primary mb-12">Our Journey</h2>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-brand-highlight transform -translate-x-1/2"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    <div className="bg-brand-light p-6 rounded-xl border border-brand-border shadow-card">
                      <h3 className="font-heading text-2xl font-bold text-brand-secondary mb-2">{milestone.year}</h3>
                      <p className="text-brand-primary/80 text-lg">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex md:w-1/2 md:pl-8 items-center justify-center">
                    <div className="w-6 h-6 bg-brand-highlight rounded-full border-4 border-brand-cream shadow-card"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      {false && (
        <section className="py-20 bg-brand-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-4xl font-bold text-center text-brand-primary mb-12">Our Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl border border-brand-border overflow-hidden shadow-card hover:shadow-hover transition-all">
                  <div className="bg-brand-primary/10 h-40 flex items-center justify-center text-5xl">
                    👤
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-brand-primary mb-1">{member.name}</h3>
                    <p className="text-brand-secondary font-bold mb-3">{member.role}</p>
                    <p className="text-stone-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats */}
      <section className="py-20 bg-brand-primary text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-brand-secondary">50+</div>
              <p className="text-brand-cream/80">Markets Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-brand-secondary">1M+</div>
              <p className="text-brand-cream/80">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-brand-secondary">100%</div>
              <p className="text-brand-cream/80">Natural Ingredients</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2 text-brand-secondary">15+</div>
              <p className="text-brand-cream/80">Drink Varieties</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
