'use client'

import { motion } from "framer-motion"
import { ReactElement } from "react"

export default function RevealAbilityUp({ children }: { children: ReactElement }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1]}}
            className="w-30 h-30 mb-10 border-2 text-(--label-one) rounded-lg border-[#573FB7] hover:shadow-[0_0_20px_#573FB7] hover:scale-110 transition-all duration-300"
        >
            <h1>{children}</h1>
        </motion.div>
    )
}