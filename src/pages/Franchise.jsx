import { useState } from 'react'
import { CheckCircle, DollarSign, Users, TrendingUp, MapPin, BookOpen } from 'lucide-react'

export function Franchise() {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Proven Business Model',
      description: 'Established systems and processes for consistent growth and profitability.'
    },
    {
      icon: Users,
      title: 'Comprehensive Support',
      description: 'Training, marketing, and operational support throughout your journey.'
    },
    {
      icon: BookOpen,
      title: 'Brand Recognition',
      description: 'Join a rapidly growing brand trusted by millions worldwide.'
    },
    {
      icon: DollarSign,
      title: 'Revenue Potential',
      description: 'High-margin products with multiple revenue streams.'
    }
  ]

  const requirements = [
    { label: 'Initial Investment', value: '$50,000 - $150,000' },
    { label: 'Franchise Fee', value: '$25,000' },
    { label: 'Equipment & Setup', value: '$20,000 - $50,000' },
    { label: 'Working Capital', value: '$5,000 - $25,000' },
    { label: 'Location Size', value: '500-1500 sq ft' },
    { label: 'Experience Required', value: 'Retail/F&B preferred' }
  ]

  const faqs = [
    {
      question: 'What is the franchise investment required?',
      answer: 'The initial franchise investment ranges from $50,000 to $150,000, which includes the franchise fee ($25,000), equipment setup ($20,000-$50,000), and working capital ($5,000-$25,000).'
    },
    {
      question: 'What support does DesiBreak provide?',
      answer: 'We provide comprehensive support including initial training, site selection assistance, marketing support, operational guidelines, supply chain management, and ongoing business consultation.'
    },
    {
      question: 'How long is the franchise agreement?',
      answer: 'Our standard franchise agreement is for 5 years with renewal options. We work closely with franchisees to ensure mutual success.'
    },
    {
      question: 'What is the projected ROI timeline?',
      answer: 'Most franchisees achieve ROI within 18-24 months, depending on location, market conditions, and operational efficiency.'
    },
    {
      question: 'Can I operate multiple locations?',
      answer: 'Yes! We encourage multi-unit development. Special incentives and support are available for franchisees interested in expanding to multiple locations.'
    },
    {
      question: 'What areas are available for franchising?',
      answer: 'We are actively seeking franchise partners in major metropolitan areas and emerging markets. Contact our franchise team to discuss available territories in your region.'
    }
  ]

  return (
    <div className="bg-brand-light">
      {/* Header */}
      <section className="bg-brand-primary text-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6 text-brand-cream">Join the DesiBreak Family</h1>
          <p className="text-xl max-w-3xl mx-auto text-brand-cream/90 font-light leading-relaxed">
            Become a franchise partner and bring authentic South Asian beverages to your community while building a profitable business.
          </p>
        </div>
      </section>

      {/* Why Franchise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center text-brand-primary mb-12">Why Franchise with Desi Break?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-brand-border shadow-card hover:shadow-hover transition-all">
                  <div className="flex justify-center mb-4">
                    <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3 text-center">{benefit.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed text-center">{benefit.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Investment Details */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center text-brand-primary mb-12">Investment Requirements</h2>
          <div className="bg-white rounded-xl border border-brand-border shadow-card p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {requirements.map((req, index) => (
                <div key={index} className="border-l-4 border-brand-highlight pl-6">
                  <p className="text-brand-primary/60 text-sm mb-2">{req.label}</p>
                  <p className="font-heading text-2xl font-bold text-brand-primary">{req.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 p-4 bg-brand-highlight/10 rounded-xl border-l-4 border-brand-highlight">
              <p className="text-brand-primary font-semibold text-sm">
                💡 Note: Financing options available. Speak with our franchise team to discuss payment plans and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center text-brand-primary mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Inquiry', desc: 'Share your interest and background' },
              { step: 2, title: 'Consultation', desc: 'Meet with our franchise team' },
              { step: 3, title: 'Review', desc: 'Study the franchise agreement' },
              { step: 4, title: 'Launch', desc: 'Open your Desi Break location!' }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-brand-primary text-brand-cream w-16 h-16 rounded-xl flex items-center justify-center font-heading text-2xl font-bold mx-auto mb-4 shadow-brand">
                  {item.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-brand-primary mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold text-center text-brand-primary mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl border border-brand-border shadow-card overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-brand-light/60 transition-colors"
                >
                  <span className="font-semibold text-brand-primary pr-4">{faq.question}</span>
                  <span className={`text-brand-secondary transition-transform flex-shrink-0 duration-200 ${
                    expandedFaq === index ? 'rotate-180' : ''
                  }`}>
                    ▼
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6 border-t border-brand-border">
                    <p className="text-stone-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-accent text-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6 text-brand-cream">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto text-brand-cream/90 font-light leading-relaxed">
            Join hundreds of successful franchise partners building their dreams with Desi Break.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:franchise@desibreak.com"
              className="bg-brand-cream text-brand-secondary px-8 py-4 rounded-xl font-semibold hover:bg-brand-light transition-all inline-flex items-center justify-center gap-2 shadow-brand"
            >
              <span>📧</span>
              Email Us
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-brand-cream text-brand-cream px-8 py-4 rounded-xl font-semibold hover:bg-brand-cream hover:text-brand-secondary transition-all inline-flex items-center justify-center gap-2"
            >
              <span>📱</span>
              Call Us
            </a>
          </div>
          <p className="mt-8 text-brand-cream/70 text-sm">Our franchise team is available Monday–Friday, 9 AM – 6 PM</p>
        </div>
      </section>
    </div>
  )
}
