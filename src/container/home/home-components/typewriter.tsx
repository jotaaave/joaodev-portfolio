'use client'
import Typewriter from "typewriter-effect"

export default function TypewriterTitle() {
    return (
        <Typewriter
            options={{ 
                strings: ['Web Developer.', 'Full-Stack.', 'Contact Me!'],
                autoStart: true,
                loop: true,
                delay: 30,
            }}
        />
    )
}