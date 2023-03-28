import React from 'react';
import Section from './Section';
import LightBG from '../core/Layouts/LightBG';
import { OutdoorEvents as data } from '@/data/OutDoorEvents';

function OutdoorEvents() {
  return (
    <LightBG>
      <Section text='Shows Near You' data={data} />
    </LightBG>
  );
}

export default OutdoorEvents;
