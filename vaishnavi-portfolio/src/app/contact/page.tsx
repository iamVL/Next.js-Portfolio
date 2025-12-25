"use client"

import React, { useState } from "react"
import { Input } from "src/@/components/ui/input"
import { Label } from "src/@/components/ui/label"
import { Textarea } from "src/@/components/ui/textarea"
import { Button } from "src/@/components/ui/button"
import { motion } from "framer-motion"

const Contact: React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      })

      if (response.ok) {
        setSubmitStatus("Message sent successfully!")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setSubmitStatus("Failed to send message. Please try again.")
      }
    } catch {
      setSubmitStatus("An error occurred. Please try again later.")
    }

    setIsSubmitting(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto mt-16 max-w-2xl p-10 bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-pink-200"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-foreground">
        Contact Me
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* NAME + EMAIL */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Label
              htmlFor="name"
              className="text-muted-foreground mb-2 block text-sm font-medium"
            >
              Name
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full bg-white border-pink-200 focus:ring-2 focus:ring-pink-300 text-foreground"
            />
          </div>

          <div className="flex-1">
            <Label
              htmlFor="email"
              className="text-muted-foreground mb-2 block text-sm font-medium"
            >
              Email
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white border-pink-200 focus:ring-2 focus:ring-pink-300 text-foreground"
            />
          </div>
        </div>

        {/* MESSAGE */}
        <div>
          <Label
            htmlFor="message"
            className="text-muted-foreground mb-2 block text-sm font-medium"
          >
            Message
          </Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-32 bg-white border-pink-200 focus:ring-2 focus:ring-pink-300 text-foreground"
          />
        </div>

        {/* SUBMIT */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-pink-500 text-white hover:bg-pink-600 font-semibold py-3 rounded-full transition-all duration-300 hover:scale-[1.02] focus:ring-2 focus:ring-pink-300"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {/* STATUS */}
      {submitStatus && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-6 text-center ${
            submitStatus.includes("successfully")
              ? "text-pink-600"
              : "text-destructive"
          }`}
        >
          {submitStatus}
        </motion.p>
      )}
    </motion.div>
  )
}

export default Contact
