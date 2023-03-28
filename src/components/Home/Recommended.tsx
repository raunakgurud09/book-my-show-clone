import React from 'react';
import LightBG from '../core/Layouts/LightBG';
import Section from './Section';
import { Movies } from '@/data/Movies';

function Recommended() {
  return (
    <LightBG>
      <Section text='Recommended Movies' data={Movies} />
    </LightBG>
  );
}

export default Recommended;
