import DarkBG from '@/components/core/Layouts/DarkBG';
import FillBtn from '@/components/ui/Buttons/FillBtn';
import DisplayCard from '@/components/ui/Cards/DisplayCard';
import Image from 'next/image';
import image from '../../../public/images/John-wick.jpg';

function index() {
  const stats = 'fasnodfi';
  return (
    <>
      <DarkBG>
        <div className="relative flex h-[480px] w-full justify-between bg-[url('https://i.ytimg.com/vi/qEVUtrk8_B4/maxresdefault.jpg')] bg-cover bg-right bg-no-repeat  text-white">
          <div className='h-[480px] w-full bg-gradient-to-r from-stone-900/100 via-stone-900/80 to-stone-900/30'>
            <div className='flex h-full justify-between py-6'>
              <div className='flex h-full space-x-10'>
                <div className='h-full '>
                  <div className='h-full rounded-xl'>
                    <Image
                      src={image}
                      alt='poster'
                      className='fill h-full w-72 rounded-t-md object-cover'
                    />
                  </div>
                </div>
                <div>
                  <div className='flex h-full flex-col justify-center space-y-6'>
                    <h3 className='text-3xl font-bold'>John Wick</h3>
                    <div>
                      <div>2h 25m • Action , Drama , Thriller • UA</div>
                    </div>
                    <div>
                      <FillBtn
                        text='Book tickets'
                        cns='text-lg px-20 py-4 rounded-lg font-semibold'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-3xl text-white'>share</div>
            </div>
          </div>
        </div>
      </DarkBG>
      <div className='m-auto flex h-full max-w-[1500px] items-center justify-between px-10 '>
        <div>fsanovi</div>
        <div>fsanovi</div>
        <div>fsanovi</div>
        <div>fsanovi</div>
      </div>
    </>
  );
}

export default index;
