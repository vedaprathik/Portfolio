import { createContext} from 'react'
import './App.css'
import Homepage from './pages/Homepage.jsx'
import NotFound from './pages/404.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';

export const AppContext=createContext();
function App() {
  const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");
useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);
    const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };
  return (
    <AppContext.Provider value={{ theme, switchTheme }}>
    <BrowserRouter>
				<Routes>
					<Route path="/portfolio" element={<Homepage />} />
					<Route path="*" element={<NotFound/>} />
				</Routes>
			</BrowserRouter>
    </AppContext.Provider>
  )

}

export default App
