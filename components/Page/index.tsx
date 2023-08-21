import { motion, Variants } from 'framer-motion'
import { PropsWithChildren } from 'react'

export default function Page({ children }: PropsWithChildren<{}>) {
  return (
    <motion.main variants={variants} initial='out' animate='in'>
      {children}
    </motion.main>
  );
}

const variants: Variants = {
  out: {
    opacity: 0,
    translateY: 15,
    transition: {
      duration: 0.43,
      ease: 'easeInOut'
    }
  },
  in: {
    opacity: 1,
    translateY: 0,
    transition: {
      duration: 0.43,
      ease: 'easeInOut'
    }
  }
}
