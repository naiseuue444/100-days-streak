"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Loader from "@/components/Loader"
import Countdown from "@/components/Countdown"
import DaysTogether from "@/components/DaysTogether"
import PhotoGallery from "@/components/PhotoGallery"
import Message from "@/components/Message"
import FloatingElements from "@/components/FloatingElements"
import TapToReveal from "@/components/TapToReveal"
import MusicPlayer from "@/components/MusicPlayer"

// Change this to your 100-day streak target date
const ANNIVERSARY_DATE = "2025-08-02T12:00:00"
// Change this to your Snapchat streak start date
const TOGETHER_DATE = "2026-01-18T12:00:00"

export default function Home() {
  const mediaBasePath = process.env.NEXT_PUBLIC_BASE_PATH || ""
  const [loading, setLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)
  const [showTapToReveal, setShowTapToReveal] = useState(false)
  const [playSong, setPlaySong] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    // Check if the streak milestone date has passed
    const now = new Date()
    const anniversary = new Date(ANNIVERSARY_DATE)
    if (now >= anniversary) {
      setShowContent(true)
      setShowTapToReveal(true)
    }
  }, [])

  const handleCountdownComplete = () => {
    setShowContent(true)
    setShowTapToReveal(true)
  }

  const handleReveal = () => {
    setShowTapToReveal(false)
    setShowContent(true)

    // Start music after a delay
    setTimeout(() => {
      setPlaySong(true)
    }, 1000)
  }

  // Add your photos here
  const photos = [
    { src: `${mediaBasePath}/image1.jpg`, alt: "😁" },
    { src: `${mediaBasePath}/image2.jpg`, alt: "my princess" },
    { src: `${mediaBasePath}/image3.jpg`, alt: "snap memory" } ,
    { src: `${mediaBasePath}/image4.jpg`, alt: "hehe" },
    { src: `${mediaBasePath}/image5.jpg`, alt: "Lol" },
    { src: `${mediaBasePath}/image6.jpg`, alt: "Moments" },
    { src: `${mediaBasePath}/image7.jpg`, alt: "Ofc My Moon and her Moon photos 🤌" },
  ]

  // Change this message according to you
  const message = `Dear little mouse,

The Last 100 days with you has been one of the most real and unforgettable parts of my life It wasn't always easy there were moments of confusion tears and overthinking... but every single part of it mattered a lot for me

Through all the ups and downs what stayed constant was how I felt about you And in the end what truly makes me happy is that I could express my love to you not completely but ya You know how much you mean to me and honestly that's what matters the most

Maybe things weren't perfect maybe we had our share of emotional moments but still... it was beautiful in its own way Because it was us

I'll always cherish what we had every smile every tear every memory You'll always have a special place in my heart no matter what

Maybe the days ahead will be kinder to us softer and filled with more reasons to smile than to cry In Sha Allah and I hope we grow through everything we've felt so far and find a kind of happiness that stays No matter how this journey has been I know one thing clearly I love You and I'll keep holding onto that as we move forward

With all my heart,
Me`

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-pink-100 via-purple-50 to-blue-100">
      <FloatingElements />

      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : !showContent ? (
          <motion.div
            key="countdown-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center justify-center min-h-screen p-4 relative"
          >
            <motion.div
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div
                className="absolute bottom-1/4 left-1/4 w-20 h-20 text-5xl animate-bounce"
                style={{ animationDelay: "1.5s" }}
              >
                💝
              </div>
            </motion.div>

            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: 0.2,
              }}
              className="text-center mb-12 relative"
            >
              <div className="absolute -top-16 -left-16 w-32 h-32 text-5xl animate-float">🌸</div>
              <div className="absolute -bottom-28 -right-14 w-32 h-32 text-5xl animate-float-delay">🌺</div>

              <h1 className="text-4xl md:text-5xl py-1.5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-4 animate-gradient">
                100-Day Snapchat Streak Incoming!
              </h1>
              <p className="text-xl text-purple-700 font-medium">Countdown to the 100 streak milestone 🔥</p>
            </motion.div>

            <Countdown targetDate={ANNIVERSARY_DATE} onComplete={handleCountdownComplete} />
          </motion.div>
        ) : showTapToReveal ? (
          <TapToReveal key="tap-to-reveal" onReveal={handleReveal} />
        ) : (
          <>
            <MusicPlayer playSong={playSong} />
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="container mx-auto px-4 py-8"
            >
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  delay: 0.3,
                }}
                className="text-center mb-12 relative"
              >
                <div className="absolute -top-2 -left-5 md:-left-10 text-5xl md:text-6xl animate-float">🎉</div>
                <div className="absolute -bottom-10 -right-5 md:-bottom-14 md:-right-10 text-5xl md:text-6xl animate-float-delay">
                  🎊
                </div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 mb-3 animate-gradient">
                  100 Days... and You
                </h1>
                <p className="text-xl text-purple-700 font-medium">And I wouldn't mind more 100s 1000s like this...</p>
              </motion.div>

              <DaysTogether startDate={TOGETHER_DATE} animationDuration={3} />

              <PhotoGallery photos={photos} />

              <Message message={message} />

              <motion.footer
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="text-center mt-16 mb-8 text-pink-600"
              >
                <p className="text-lg font-medium">Made with love by naise only for mahek khan</p>
              </motion.footer>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
