import { Link } from 'react-router-dom'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ]

  const footerLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Explore Drinks', path: '/explore' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <footer className="bg-forest-green text-cream mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-xl font-bold mb-4 flex items-center space-x-2">
              <span>🥤</span>
              <span>DesiBreak</span>
            </h3>
            <p className="text-cream/80 text-sm">
              Authentic South Asian beverages bringing tradition to modern taste.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Quick Links</h4>
            <nav className="space-y-2 flex flex-col">
              {footerLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-cream/80 hover:text-mustard transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Phone size={18} />
                <a href="tel:+1234567890" className="text-cream/80 hover:text-mustard transition-colors">
                  +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} />
                <a href="mailto:info@desibreak.com" className="text-cream/80 hover:text-mustard transition-colors">
                  info@desibreak.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-cream/80">123 Desi Street, Heritage City, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-cream/80 hover:text-mustard transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/20 pt-8">
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-cream/80">
            <p>&copy; {currentYear} DesiBreak. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-mustard transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-mustard transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
