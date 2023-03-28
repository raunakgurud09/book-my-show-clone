import DarkBG from '@/components/core/Layouts/DarkBG';
import LightBG from '@/components/core/Layouts/LightBG';
import Title from '@/components/core/Layouts/Title';
import Error from '@/components/Error';
import Advertisement from '@/components/Home/Advertisment';
import Banner from '@/components/Home/Banner';
import LiveEvents from '@/components/Home/LiveEvents';
import Section from '@/components/Home/Section';
import LiveEventsCard from '@/components/ui/Cards/LiveEventsCard';

const Home = ({ working }) => {
  working = true;
  return (
    <>
      {working ? (
        // <div className='m-auto flex h-full max-w-[1500px] items-center justify-between px-10'>
        //   <div className='flex w-full flex-col bg-yellow-800'>
        <>
          <LightBG>
            <Banner />
          </LightBG>
          <LightBG>
            <Section text='Recommended Movies' />
          </LightBG>
          <LightBG>
            <Advertisement />
          </LightBG>
          <LightBG>
            <Section text='Shows Near You' />
          </LightBG>
          <LiveEvents />
          <DarkBG>
            <Section text='Shows Near You' />
          </DarkBG>
          {/* <LightBG></LightBG> */}
          <LightBG>
            <Section text='Shows Near You' />
          </LightBG>
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
