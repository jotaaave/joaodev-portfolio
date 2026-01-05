'use client'

import { motion } from 'framer-motion'
import { ReactElement } from 'react'

export default function NavbarAppearMobile({ children }: { children: ReactElement }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            {children}
        </motion.div>
    )
}