import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (234) 567-8900', '+1 (234) 567-8901'],
      label: 'Call us'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@desibreak.com', 'support@desibreak.com'],
      label: 'Email us'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Desi Street', 'Heritage City, ST 12345'],
      label: 'Visit us'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: ['Mon-Fri: 9 AM - 6 PM', 'Sat-Sun: 10 AM - 4 PM'],
      label: 'We\'re open'
    }
  ]

  return (
    <div className="bg-brand-light">
      {/* Header */}
      <section className="bg-brand-primary text-brand-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-5xl font-bold mb-6 text-brand-cream">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto text-brand-cream/90 font-light leading-relaxed">
            Have questions or feedback? We'd love to hear from you. Reach out to our team!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-white p-6 rounded-xl border border-brand-border shadow-card border-t-4 border-t-brand-secondary text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-brand-primary/10 p-3 rounded-xl text-brand-primary">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-brand-primary mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-stone-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <p className="text-brand-secondary font-bold text-xs">{info.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-xl border border-brand-border shadow-card">
              <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-brand-primary font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-brand-primary font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-brand-primary font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-brand-primary font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-brand-border rounded-xl focus:outline-none focus:border-brand-primary focus:ring-2 focus:ring-brand-primary/10 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-primary text-brand-cream py-4 rounded-xl font-semibold hover:bg-[#18482D] transition-all flex items-center justify-center gap-2 shadow-brand"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-brand-primary/10 text-brand-primary p-4 rounded-xl border border-brand-border text-center font-semibold">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div className="bg-white p-8 rounded-xl border border-brand-border shadow-card">
              <h2 className="font-heading text-3xl font-bold text-brand-primary mb-6">Why Contact Us?</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-brand-secondary pl-4">
                  <h3 className="font-bold text-brand-primary mb-2">📧 Customer Support</h3>
                  <p className="text-stone-600 text-sm">
                    Have questions about our products or orders? Our support team is here to help.
                  </p>
                </div>

                <div className="border-l-4 border-brand-secondary pl-4">
                  <h3 className="font-bold text-brand-primary mb-2">🤝 Partnership Inquiries</h3>
                  <p className="text-stone-600 text-sm">
                    Interested in collaborating or partnering with DesiBreak? Let's talk!
                  </p>
                </div>

                <div className="border-l-4 border-brand-secondary pl-4">
                  <h3 className="font-bold text-brand-primary mb-2">🏪 Franchise Information</h3>
                  <p className="text-stone-600 text-sm">
                    Want to become a DesiBreak franchisee? Reach out to our franchise team.
                  </p>
                </div>

                <div className="border-l-4 border-brand-secondary pl-4">
                  <h3 className="font-bold text-brand-primary mb-2">💬 Feedback & Suggestions</h3>
                  <p className="text-stone-600 text-sm">
                    We value your feedback. Help us improve our products and services.
                  </p>
                </div>

                <div className="bg-brand-secondary/10 p-4 rounded-xl border-l-4 border-brand-secondary mt-6">
                  <p className="text-brand-primary font-semibold text-sm">
                    ⏱️ We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-brand-primary text-brand-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl font-bold mb-6 text-brand-cream">Follow Us on Social Media</h2>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { name: 'Facebook', icon: '👍', url: '#' },
              { name: 'Instagram', icon: '📸', url: '#' },
              { name: 'Twitter', icon: '𝓧', url: '#' },
              { name: 'LinkedIn', icon: '💼', url: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex items-center gap-2 hover:text-brand-secondary text-brand-cream/80 transition-colors"
              >
                <span className="text-2xl">{social.icon}</span>
                <span className="font-bold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
