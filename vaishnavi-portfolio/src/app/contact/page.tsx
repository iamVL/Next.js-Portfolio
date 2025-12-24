"use client"
import React, { useState } from 'react'
import { Input } from 'src/@/components/ui/input'
import { Label } from 'src/@/components/ui/label'
import { Textarea } from 'src/@/components/ui/textarea'
import { Button } from 'src/@/components/ui/button'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace this with your actual API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitStatus('Message sent successfully!');
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setSubmitStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-10 max-w-2xl p-8 bg-gray-900/80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl border border-gray-800"
    >
      <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex space-x-4">
          <div className="flex-1">
            <Label htmlFor="name" className="text-gray-300 mb-2 block text-sm font-medium">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-gray-800/50 border-gray-700 focus:ring-2 focus:ring-gray-600 rounded-lg text-gray-200"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="email" className="text-gray-300 mb-2 block text-sm font-medium">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-gray-800/50 border-gray-700 focus:ring-2 focus:ring-gray-600 rounded-lg text-gray-200"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="message" className="text-gray-300 mb-2 block text-sm font-medium">Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-32 bg-gray-800/50 border-gray-700 focus:ring-2 focus:ring-gray-600 rounded-lg text-gray-200"
          />
        </div>
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-800 text-gray-200 font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
      {submitStatus && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 text-center ${submitStatus.includes('successfully') ? 'text-green-400' : 'text-red-400'}`}
        >
          {submitStatus}
        </motion.p>
      )}
    </motion.div>
  )
}

export default Contact
