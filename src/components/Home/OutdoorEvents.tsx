import React from 'react';
import Section from './Section';
import LightBG from '../core/Layouts/LightBG';
import { outEventdata as data } from '@/data/outEventdata';

function OutdoorEvents() {
  return (
    <LightBG>
      <Section text='Shows Near You' data={data} />
    </LightBG>
  );
}

export default OutdoorEvents;
