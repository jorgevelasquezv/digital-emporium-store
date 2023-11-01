import React from 'react'
import { NavBar } from '../organisms/NavBar/NavBar'
import { Footer } from '../organisms/Footer/Footer'

export const CommonTemplate = ({children}) => {
  return (
      <>
          <NavBar />
          {children}
          <Footer />
      </>
  )
}