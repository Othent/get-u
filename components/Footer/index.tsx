import * as Styled from './styles';
import { DMSans700, SpaceGrotesk600, SpaceGrotesk500 } from '../../utils/fonts';

const Footer = () => {
  return (
    <Styled.Container>
      <LogoSection />

      <ul>
        <p className={SpaceGrotesk600.className}>Resources</p>
        <li className={SpaceGrotesk500.className}>
          <a href="https://docs.othent.io/developers/sdk" target='_blank'>SDK's</a>
        </li>
        <li className={SpaceGrotesk500.className}>
          <a href="https://docs.othent.io" target='_blank'>Documentation</a>
        </li>
        <li className={SpaceGrotesk500.className}>
          <a href="/media-kit.zip" download>Media Kit</a>
        </li>
      </ul>

      <ul>
        <p className={SpaceGrotesk600.className}>Company</p>
        {/* <li className={SpaceGrotesk500.className}>
          <a href="https://blog.othent.io" target='_blank'>Blog</a>
        </li> */}
        <li className={SpaceGrotesk500.className}>
          <a href="mailto:hello@.othent.io">Careers</a>
        </li>
      </ul>

      <ul>
        <p className={SpaceGrotesk600.className}>Legal</p>
        <li className={SpaceGrotesk500.className}>
          <a href="https://othent.io/tos.pdf" target='_blank'>Terms of Service</a>
        </li>
        <li className={`${SpaceGrotesk500.className} no-pointer`}>All rights reserved</li>
        <li className={`${SpaceGrotesk500.className} no-pointer`}>Copyright © 2023</li>
      </ul>

      <Styled.SocialChannels>
        <p className={SpaceGrotesk600.className}>Follow us</p>
        <li className={SpaceGrotesk500.className}>
          <a href="https://discord.gg/WPPBPtKbbN" target='_blank' className='social-a'>
            <img src='/discord-gray.svg' alt='discord icon' draggable={false} />
            Discord
          </a>
        </li>
        <li className={SpaceGrotesk500.className}>
          <a href="https://github.com/othent" target='_blank' className='social-a'>
            <img src='/github-icon.svg' alt='github icon' draggable={false} />
            Github
          </a>
        </li>
        <li className={SpaceGrotesk500.className}>
          <a href="https://twitter.com/othent_io" target='_blank' className='social-a'>
            <img src='/twitter-icon.svg' alt='twitter icon' draggable={false} />
            Twitter
          </a>
        </li>
      </Styled.SocialChannels>

      <LogoSection />
    </Styled.Container>
  );
};

const LogoSection = () => (
  <Styled.CLabs>
    <a href='/' className='site-a-warp'>
      <img src='/logo.svg' alt='Othent logo' className='othent-logo' draggable={false} />
    </a>
    <div>
      <a href='https://communitylabs.com' target='_blank' className='site-a-warp'>
        <img src='/clabs-logo.svg' alt='Community Labs logo' className='clabs-logo' draggable={false} />
        <p className={`${SpaceGrotesk600.className} inc`}>
          Working with <span>Community Labs</span>
        </p>
      </a>
    </div>
  </Styled.CLabs>
);

export default Footer;
