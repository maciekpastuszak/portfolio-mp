import React from 'react';
import { data } from '../../constants/constants';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acheivements</SectionTitle>
    <Boxes>
        {data.map((card, index) => (
          <Box key={index}>
            
          </Box>
        ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
