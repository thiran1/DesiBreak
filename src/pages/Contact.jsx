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
    <div className="bg-cream">
      {/* Header */}
      <section className="bg-forest-green text-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto text-cream/90">
            Have questions or feedback? We'd love to hear from you. Reach out to our team!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-mustard text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-forest-green p-3 rounded-lg text-cream">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-forest-green mb-3">{info.title}</h3>
                  <div className="space-y-1 mb-3">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-muted-brown/80 text-sm">{detail}</p>
                    ))}
                  </div>
                  <p className="text-mustard font-bold text-xs">{info.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-forest-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-3xl font-bold text-forest-green mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-muted-brown font-bold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted-brown/20 rounded-lg focus:outline-none focus:border-forest-green"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-muted-brown font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted-brown/20 rounded-lg focus:outline-none focus:border-forest-green"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-muted-brown font-bold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-muted-brown/20 rounded-lg focus:outline-none focus:border-forest-green"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-muted-brown font-bold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-muted-brown/20 rounded-lg focus:outline-none focus:border-forest-green resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-forest-green text-cream py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Send Message
                </button>

                {submitted && (
                  <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center font-semibold">
                    ✓ Thank you! Your message has been sent successfully.
                  </div>
                )}
              </form>
            </div>

            {/* Info Section */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-3xl font-bold text-forest-green mb-6">Why Contact Us?</h2>
              
              <div className="space-y-6">
                <div className="border-l-4 border-mustard pl-4">
                  <h3 className="font-bold text-forest-green mb-2">📧 Customer Support</h3>
                  <p className="text-muted-brown/80 text-sm">
                    Have questions about our products or orders? Our support team is here to help.
                  </p>
                </div>

                <div className="border-l-4 border-mustard pl-4">
                  <h3 className="font-bold text-forest-green mb-2">🤝 Partnership Inquiries</h3>
                  <p className="text-muted-brown/80 text-sm">
                    Interested in collaborating or partnering with DesiBreak? Let's talk!
                  </p>
                </div>

                <div className="border-l-4 border-mustard pl-4">
                  <h3 className="font-bold text-forest-green mb-2">🏪 Franchise Information</h3>
                  <p className="text-muted-brown/80 text-sm">
                    Want to become a DesiBreak franchisee? Reach out to our franchise team.
                  </p>
                </div>

                <div className="border-l-4 border-mustard pl-4">
                  <h3 className="font-bold text-forest-green mb-2">💬 Feedback & Suggestions</h3>
                  <p className="text-muted-brown/80 text-sm">
                    We value your feedback. Help us improve our products and services.
                  </p>
                </div>

                <div className="bg-mustard/10 p-4 rounded-lg border-l-4 border-mustard mt-6">
                  <p className="text-muted-brown font-semibold text-sm">
                    ⏱️ We typically respond within 24 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-12 bg-forest-green text-cream text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold mb-6">Follow Us on Social Media</h2>
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
                className="flex items-center gap-2 hover:text-mustard transition-colors"
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
