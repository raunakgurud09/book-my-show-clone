import React from 'react';
import DarkBG from '../core/Layouts/DarkBG';
import Section from './Section';
import { Previews as data } from '@/data/Preview';

function Preview() {
  return (
    <DarkBG>
      <Section text='Previews' data={data} />
    </DarkBG>
  );
}

export default Preview;
