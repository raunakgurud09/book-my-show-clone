import React from 'react';
import LightBG from '../core/Layouts/LightBG';
import Section from './Section';
import { EventsNearYou as data } from '@/data/EventsNearYou';

function EventsNearYou() {
  return (
    <LightBG>
      <Section text='Shows Near You' data={data} />
    </LightBG>
  );
}

export default EventsNearYou;
