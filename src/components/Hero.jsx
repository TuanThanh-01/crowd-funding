import { setGlobalState, useGlobalState } from '../store';
const Hero = () => {
  const [stats] = useGlobalState('stats');

  return (
    <div className='text-center bg-white text-gray-800 py-24 px-6'>
      <h1
        className='text-5xl md:text-6xl xl:text-7xl font-bold
      tracking-tight mb-12'
      >
        <span className='capitalize'>Bring creative projects to life on</span>
        <br />
        <span className='text-[#576CBC] text-5xl'>Crowd-Funding-PTIT.</span>
      </h1>
      <div className='flex justify-center items-center space-x-2'>
        <button
          type='button'
          className='inline-block px-6 py-2.5 bg-[#146C94]
        text-white font-medium text-xs leading-tight uppercase
        rounded-full shadow-md hover:bg-[#62CDFF]'
          onClick={() => setGlobalState('createModal', 'scale-100')}
        >
          Add Project
        </button>

        <button
          type='button'
          className='inline-block px-6 py-2.5 border border-[#FF6969]
        font-medium text-xs leading-tight uppercase text-[#5F264A]
        rounded-full shadow-md bg-transparent hover:bg-[#A84448]
        hover:text-white'
        >
          Donate Projects
        </button>
      </div>

      <div className='flex justify-center items-center mt-10'>
        <div
          className='flex flex-col justify-center items-center
          h-20 border shadow-md w-full'
        >
          <span
            className='text-lg font-bold text-green-900
            leading-5'
          >
            {stats?.totalProjects || 0}
          </span>
          <span>Projects</span>
        </div>
        <div
          className='flex flex-col justify-center items-center
          h-20 border shadow-md w-full'
        >
          <span
            className='text-lg font-bold text-green-900
            leading-5'
          >
            {stats?.totalBacking || 0}
          </span>
          <span>Backings</span>
        </div>
        <div
          className='flex flex-col justify-center items-center
          h-20 border shadow-md w-full'
        >
          <span
            className='text-lg font-bold text-green-900
            leading-5'
          >
            {stats?.totalDonations || 0} ETH
          </span>
          <span>Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
