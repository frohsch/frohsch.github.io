import { Group, HeaderContainer, LogoImage, ThemeModeImage } from './Header.style'
import Nav from './Nav'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Header = () => {
  const [themeMode, setThemeMode] = useState<string>(document.body.dataset.theme)

  useEffect(() => {
    document.body.dataset.theme = themeMode
    window.localStorage.setItem('theme', themeMode)
  }, [themeMode])


  return (
    <HeaderContainer>
      <Nav />
    </HeaderContainer>
  )
}

export default Header