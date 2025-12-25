import React from 'react'

const Blog = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
  <div className="max-w-3xl w-full bg-white/70 backdrop-blur-xl rounded-3xl shadow-xl border border-pink-200 p-10">
    <h1 className="text-4xl font-bold text-foreground mb-4">
      Blog
    </h1>

    <p className="text-muted-foreground text-lg">
      Thoughts, learnings, and things I’m building ✨
    </p>
  </div>
</div>
  )
}

export default Blog