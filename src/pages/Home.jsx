import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Heart, Globe } from 'lucide-react'

export function Home() {
  const features = [
    {
      icon: Heart,
      title: 'Authentic Flavors',
      description: 'Traditional South Asian recipes passed down through generations.'
    },
    {
      icon: Zap,
      title: 'Energy & Vitality',
      description: 'Natural ingredients that boost energy and wellness.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Bringing South Asian heritage to the world.'
    }
  ]

  return (
    <div className="bg-cream">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-64px)] bg-gradient-to-br from-forest-green to-muted-brown text-cream flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Taste the Essence of South Asia
              </h1>
              <p className="text-xl mb-8 text-cream/90 leading-relaxed">
                DesiBreak brings authentic South Asian beverages to your table. Experience traditional flavors with a modern twist.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/explore"
                  className="bg-mustard text-forest-green px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center justify-center gap-2 group"
                >
                  Explore Drinks
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-mustard text-mustard px-8 py-4 rounded-lg font-bold hover:bg-mustard hover:text-forest-green transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">🥤</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <div className="text-3xl font-bold">15+</div>
                  <p className="text-sm mt-2">Drink Varieties</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <div className="text-3xl font-bold">100%</div>
                  <p className="text-sm mt-2">Natural Ingredients</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <div className="text-3xl font-bold">50+</div>
                  <p className="text-sm mt-2">Global Markets</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg backdrop-blur">
                  <div className="text-3xl font-bold">24/7</div>
                  <p className="text-sm mt-2">Freshness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-forest-green">
            Why Choose DesiBreak?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-forest-green text-cream rounded-lg mb-4">
                    <Icon size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3 text-forest-green">
                    {feature.title}
                  </h3>
                  <p className="text-muted-brown/80 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-terracotta text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl font-bold mb-6">
            Ready to Experience DesiBreak?
          </h2>
          <p className="text-xl mb-8 text-cream/90 max-w-2xl mx-auto">
            Join thousands of customers discovering authentic South Asian beverages.
          </p>
          <Link
            to="/explore"
            className="bg-cream text-terracotta px-8 py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all inline-flex items-center gap-2 group"
          >
            Start Exploring
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  )
}
