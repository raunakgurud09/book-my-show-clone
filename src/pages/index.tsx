import DarkBG from '@/components/core/Layouts/DarkBG';
import LightBG from '@/components/core/Layouts/LightBG';
import Title from '@/components/core/Layouts/Title';
import Error from '@/components/Error';
import Advertisement from '@/components/Home/Advertisment';
import Banner from '@/components/Home/Banner';
import EventsNearYou from '@/components/Home/EventsNearYou';
import LiveEvents from '@/components/Home/LiveEvents';
import OutdoorEvents from '@/components/Home/OutdoorEvents';
import Preview from '@/components/Home/Preview';
import Recommended from '@/components/Home/Recommended';
import Section from '@/components/Home/Section';
import LiveEventsCard from '@/components/ui/Cards/LiveEventsCard';

const Home = ({ working }) => {
  working = true;
  return (
    <>
      {working ? (
        // <div className='m-auto flex h-full max-w-[1240px] items-center justify-between px-2'>
        //   <div className='flex w-full flex-col bg-yellow-800'>
        <>
          {/* <Banner /> */}
          <Recommended />
          <Advertisement />
          <LiveEvents />
          <Preview />
          <EventsNearYou />
          <OutdoorEvents />
        </>
      ) : (
        //   </div>
        // </div>
        <Error message='Looks like server is down' />
      )}
    </>
  );
};

export default Home;
