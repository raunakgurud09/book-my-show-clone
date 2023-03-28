import DarkBG from '@/components/core/Layouts/DarkBG';
import LightBG from '@/components/core/Layouts/LightBG';
import Title from '@/components/core/Layouts/Title';
import FillBtn from '@/components/ui/Buttons/FillBtn';
import Image from 'next/image';
import cx from 'classnames';
import image from '../../../public/images/John-wick.jpg';

function index() {
  const stats = 'fasnodfi';
  const bgImageUrl = 'https://i.ytimg.com/vi/qEVUtrk8_B4/maxresdefault.jpg';
  return (
    <>
      <DarkBG>
        <div
          className={cx(
            'relative flex h-[480px] w-full justify-between  bg-cover bg-right bg-no-repeat  text-white',
            `bg-[url('https://i.ytimg.com/vi/qEVUtrk8_B4/maxresdefault.jpg')]`
          )}
          // style={{backgroundImage: `url(${bgImageUrl})`}}
        >
          <div className='h-[480px] w-full bg-gradient-to-r from-stone-900/100 via-stone-900/80 to-stone-900/30'>
            <div className='flex h-full justify-between py-6'>
              <div className='flex h-full space-x-10'>
                <div className='h-full '>
                  <div className='h-full rounded-xl'>
                    <Image
                      src={image}
                      alt='poster'
                      className='fill h-full w-72 rounded-md object-cover'
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
      <LightBG>
        <div className='flex w-full flex-col'>
          <Title title='About the movie'>
            <div className='w-2/3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptatem autem, illo necessitatibus adipisci qui
              eveniet. Consequatur nam, sint necessitatibus nesciunt architecto
              quo doloremque voluptatem eius! Atque, omnis. Hic, atque.
            </div>
          </Title>
          <Title title='Cast'>
            <div>sjfld</div>
          </Title>
          <Title title='You might also like'>
            <div>sjfld</div>
          </Title>
        </div>
      </LightBG>
    </>
  );
}

export default index;
