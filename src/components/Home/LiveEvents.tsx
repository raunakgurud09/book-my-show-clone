import React from 'react';
import LightBG from '../core/Layouts/LightBG';
import Title from '../core/Layouts/Title';
import LiveEventsCard from '../ui/Cards/LiveEventsCard';
import { TopLiveEvents } from '@/data/LiveEvents';

function LiveEvents() {
  return (
    <LightBG>
      <Title title='The best of live events'>
        <div className='flex space-x-10'>
          {TopLiveEvents.map((event) => (
            <LiveEventsCard key={event._id} imageUrl={event.imageUrl} />
          ))}
        </div>
      </Title>
    </LightBG>
  );
}

export default LiveEvents;
