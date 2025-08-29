import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CardIcon from './CardIcon'
import FavoriteButton from './FavoriteButton'
import SignIn from './SignIn'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Header = () => {
  return (
    <header className='bg-white py-5'>
      <Container className='flex items-center justify-between text-lightColor'>
        {/* Logo */}
        <div className='w-auto md:w-1/3 flex items-center justify-start gap-2.5 md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>

        {/* NavButton */}
        <HeaderMenu />

        {/* NavAdmin */}
        <div className='w-auto md:w-1/3 flex items-center justify-end gap-5'>
          <SearchBar />
          <CardIcon />
          <FavoriteButton />

          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignIn />
            </SignedOut>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
