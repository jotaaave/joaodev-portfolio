import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export default function DarkLightModeButton() {
    const { theme, setTheme } = useTheme()

    const switchTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return (
        <div>
            {theme === 'dark' && <FaSun onClick={() => switchTheme()} className="cursor-pointer text-(--sun)"/>}
            {theme === 'light' && <FaMoon onClick={() => switchTheme()} className="cursor-pointer text-(--moon)"/>}
        </div>
    )
}