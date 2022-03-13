import { BlogInfo, Copyright, FooterContainer, SocialIcon, SocialIconWrap } from './Footer.style'
import metadata from '../data/metadata'

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIconWrap>
        {metadata.social.github && (
          <a href={metadata.social.github} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/github.svg" alt="github" />
          </a>
        )}
        {metadata.social.instagram && (
          <a href={metadata.social.instagram} target="_blank" rel="noreferrer">
            <SocialIcon src="/social/instagram.svg" alt="instagram" />
          </a>
        )}
      </SocialIconWrap>
      <Copyright>
        Copyright © {new Date().getFullYear()} {metadata.author}
      </Copyright>
      <BlogInfo href={metadata.repo} rel="noreferrer">
        miryang.dev
      </BlogInfo>
    </FooterContainer>
  )
}

export default Footer
