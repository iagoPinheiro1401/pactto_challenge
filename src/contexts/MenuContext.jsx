import { createContext, useState } from "react"

const MenuContext = createContext()

export function MenuProvider({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export default MenuContext