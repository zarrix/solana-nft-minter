import React from 'react'
import Header from '../components/Header'

type Props = {
    children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <>
        <Header />
        <main>{children}</main>
    </>
  )
}

export default Layout;