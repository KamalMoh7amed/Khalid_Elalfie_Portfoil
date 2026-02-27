'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Briefcase, Send, CheckCircle, Linkedin } from 'lucide-react'

export function ContactEnhanced() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setSubmitted(false), 3000)
    }, 1500)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const contactMethods = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+965 5053 1121',
      href: 'tel:+96550531121',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@interiordesign.com',
      href: 'mailto:hello@interiordesign.com',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with me',
      href: 'https://www.linkedin.com/in/khalidelalfie/',
    },
    {
      icon: Briefcase,
      label: 'Behance',
      value: 'View Portfolio',
      href: 'https://www.behance.net/KhalidElAlfie',
    },
  ]

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-20 px-4 sm:px-6 lg:px-8"
      aria-label="Contact us for your project"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4 text-balance">
            Let's Create <span className="text-accent">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Get in touch to discuss your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            className="lg:col-span-1 space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  variants={itemVariants}
                  className="group p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-accent/20 hover:border-accent/50 hover:bg-white/70 dark:hover:bg-white/10 transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{method.label}</h3>
                      <p className="text-muted-foreground text-sm">{method.value}</p>
                    </div>
                  </div>
                </motion.a>
              )
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                >
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              {/* Subject Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors backdrop-blur-sm"
                  placeholder="Project subject"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-white/5 border border-accent/20 rounded-lg focus:outline-none focus:border-accent transition-colors backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading || submitted}
                className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: submitted ? 1 : 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {loading ? (
                  <>
                    <motion.div
                      className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                    Sending...
                  </>
                ) : submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
