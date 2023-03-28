import Error from '@/components/Error';
import Banner from '@/components/Home/Banner';
import Section from '@/components/Home/Section';

const Home = ({ working }) => {
  working = true;
  return (
    <>
      {working ? (
        <div className='m-auto flex h-full max-w-[1500px] items-center justify-between px-10s'>
          <div className='flex w-full flex-col'>
            <Banner />
            <Section text='Recommended Movies' />
            <Section text='Shows Near You' />
          </div>
        </div>
      ) : (
        <Error message='Looks like server is down' />
      )}
    </>
  );
};

export default Home;
