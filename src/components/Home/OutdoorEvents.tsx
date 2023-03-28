import React from 'react';
import DarkBG from '../core/Layouts/DarkBG';
import Section from './Section';
import { OutdoorEvents as data } from '@/data/OutDoorEvents';
import LightBG from '../core/Layouts/LightBG';

function OutdoorEvents() {
  return (
    <LightBG>
      <Section text='Shows Near You' data={data} />
    </LightBG>
  );
}

export default OutdoorEvents;
