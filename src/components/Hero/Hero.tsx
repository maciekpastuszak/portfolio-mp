import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
 <Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>
      The purpose of JavaScript Mastery is to  help aspiring and estabilishment developers to take their development skills to a higher level
    </SectionText>
    <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
  </LeftSection>
  </Section>
);

export default Hero;