'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, ChevronUp } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-xAgIFk0AxIdH5YlMYm992pJGVs9FQe.png',
      href: 'https://www.linkedin.com/in/khalidelalfie/',
      label: 'LinkedIn'
    },
    {
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/whatsapp-f0UgGwGvKf1FXCfWf2GxllD8k1O1zc.png',
      href: 'https://wa.me/96550531121',
      label: 'WhatsApp'
    },
    {
      icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/behance-0W7mRHqXkj6HcvmOvijVEWgUctlxUc.png',
      href: 'https://www.behance.net/KhalidElAlfie',
      label: 'Behance'
    }
  ]

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold font-display text-foreground mb-2">
              Interior Design
            </h3>
            <p className="text-foreground/70 text-sm">
              Creating timeless spaces with contemporary elegance.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/70">
              {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-foreground/70">
              <a href="mailto:khalid.k.elalfie@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                khalid.k.elalfie@gmail.com
              </a>
              <a href="tel:+965505311121" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                +965 50 53 1121
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} khalidelalfie Interior Design Portfolio. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg bg-muted hover:bg-accent/20 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Scroll to Top */}
        <motion.div
          className="flex justify-center mt-8 pt-8 border-t border-border"
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <a
            href="#hero"
            className="flex flex-col items-center gap-2 text-primary hover:text-primary/70 transition-colors"
            aria-label="Scroll to top"
          >
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ChevronUp className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </footer>
  )
}
