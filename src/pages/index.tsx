import Error from '@/components/Error';

const Home = ({ working }) => {
  working = true;
  return (
    <>
      {working ? (
        <div className=''>
          <div className=''>Working</div>
        </div>
      ) : (
        <Error message='Looks like server is down' />
      )}
    </>
  );
};

export default Home;
