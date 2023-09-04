import React from 'react'
import fotocarnet from '../../images/fotocarnet.jpeg';
import './Profile.css'
function Profile() {
  return (
    <div>
   <img src={fotocarnet} alt="Carnet Photo" className="profile-image" />
    </div>
  )
}

export default Profile;