import React from 'react'
import CvImage from '../components/CvImage/CvImage'
import DownloadButton from '../components/downloadButton/DownloadButton'
import Navigation from '../components/navigation/Navigation'
import ResumeText from '../components/resumetext/ResumeText.js/ResumeText'

function Resume() {
  return (
    <div>
        <Navigation />
        <ResumeText />
        <br />
        <CvImage />
        <DownloadButton />
    </div>
  )
}

export default Resume