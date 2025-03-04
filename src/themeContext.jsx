import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => { // ✅ Fixed "children" usage
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme"); // ✅ Fixed key
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode((prev) => {
            const newDarkMode = !prev;
            console.log("Previous dark mode" + prev);
            localStorage.setItem("theme", newDarkMode ? "dark" : "light"); // ✅ Corrected key
            console.log("Local storage theme set to:", newDarkMode ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newDarkMode); // ✅ Fix toggle logic
            console.log("Dark mode is :" + newDarkMode ? "enabled" : "disabled");
            return newDarkMode;
        });
    };

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};
