import React from 'react'
import Button from '../components/button/Button'
import Navigation from '../components/navigation/Navigation'
import Profile from '../components/Profile/Profile'
import Text from '../components/text/Text'
import Textbox from '../components/textbox/Textbox'


function Home() {
  return (
    <div>
        <Navigation/>
        <Textbox />
        <Text />
        <Profile />
        <Button />
    </div>
  )
}

export default Home