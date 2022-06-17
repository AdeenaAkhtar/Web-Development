import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://pk.linkedin.com/in/adeenah-akhtar-380603226" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/AdeenaAkhtar" target="_blank" rel="noreferrer"><BsGithub/></a>
        <a href="https://www.instagram.com/adeenahakhtar/" target="_blank" rel="noreferrer"><BsInstagram/></a>
    </div>
  )
}
export default HeaderSocials