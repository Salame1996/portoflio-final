import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Project from '../components/card/Project'
import Projecttext from '../components/projectsText/Projecttext'

function Projects() {
  return (
    <div>
        <Navigation />
        <Projecttext />
        <br/>
        <br/>
        <Project  />
    
    </div>
  )
}

export default Projects