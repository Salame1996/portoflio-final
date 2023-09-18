import React from 'react'
import ContactText from '../components/contactText/ContactText'
import EmailButton from '../components/emailButton/EmailButton'
import Navigation from '../components/navigation/Navigation'
import SocialMediaLinks from '../components/socialmedia/SocialMediaLinks'
import './Contact.css'

function Contact() {
  return (
    <div>
        <Navigation />
        <ContactText />
        <h3 className='email'>Email</h3>
        <p className='gmail'>Carlossalame96@gmail.com</p>
        <EmailButton />
        <h3 className='socials'>Social Media</h3>
       <SocialMediaLinks />
    </div>
  )
}

export default Contact