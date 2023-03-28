import DarkBG from '@/components/core/Layouts/DarkBG';
import LightBG from '@/components/core/Layouts/LightBG';
import Title from '@/components/core/Layouts/Title';
import FillBtn from '@/components/ui/Buttons/FillBtn';
import Image from 'next/image';
import cx from 'classnames';
import { Movies } from '@/data/Movies';
import OutBtn from '@/components/ui/Buttons/OutBtn';
import { ShareIcon } from '@/components/Icons';

function index({ name, imageUrl, time, previewText, about }) {
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
                      width={288}
                      height={500}
                      src={imageUrl}
                      alt='poster'
                      className='fill h-full w-72 rounded-md object-cover'
                    />
                  </div>
                </div>
                <div>
                  <div className='flex h-full flex-col justify-center space-y-6'>
                    <h3 className='text-3xl font-bold'>{name}</h3>
                    <div>
                      <div>
                        {time} • {previewText} • UA
                      </div>
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
              <div className='text-3xl text-white'>
                {/* <OutBtn text='share' icon={<ShareIcon />} cns='' /> */}
                {/* <ShareIcon /> */}
              </div>
            </div>
          </div>
        </div>
      </DarkBG>
      <LightBG>
        <div className='flex w-full flex-col'>
          <Title title='About the movie'>
            <div className='w-2/3'>{about}</div>
          </Title>
          <Title title='Cast'>
            <div>info</div>
          </Title>
          <Title title='You might also like'>
            <div>render more related content</div>
          </Title>
        </div>
      </LightBG>
    </>
  );
}

export default index;

export async function getServerSideProps(context) {
  const { MovieId } = context.params;

  try {
    const movie = Movies.find((movie) => {
      if (movie._id == MovieId) {
        return movie;
      }
    });
    return {
      props: movie, // will be passed to the page component as props
    };
  } catch (error) {
    return {
      props: Movies[0], // will be passed to the page component as props
    };
  }
}
