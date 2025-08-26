import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CardIcon from './CardIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'

const Header = () => {
  return (
    <header className='bg-white py-5 border-b border-b-black/20'>
        <Container className='flex items-center justify-between '>
            {/* Logo */}
            <Logo/>
            {/* NavButton */}
            <HeaderMenu/>
            {/* NavAdmin */}
            <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
              <SearchBar/>
              <CardIcon/>
              <FavoriteButton/>
              <SignIn/>
            </div>
        </Container>
    </header>
  )
}

export default Header