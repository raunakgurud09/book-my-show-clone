import React from 'react';
import Section from './Section';
import LightBG from '../core/Layouts/LightBG';
import { outEventdata as data } from '@/data/outEventdata';

function OutdoorEvents() {
  return (
    <LightBG>
      <Section text='Outdoor Events' data={data} />
    </LightBG>
  );
}

export default OutdoorEvents;
