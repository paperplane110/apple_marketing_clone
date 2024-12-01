"use client"

import { motion } from "motion/react"

export default function FadeDiv({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      transition={{
        ease: "easeInOut"
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      viewport={{ amount: "all" }}
    >
      {children}
    </motion.div>
  )
}