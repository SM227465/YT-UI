import Logo from './Logo';
import Searchbar from './Searchbar';
import Signin from './Signin';

const Appbar = () => {
  return (
    <div className='flex justify-between items-center mx-5 my-2'>
      <Logo />
      <Searchbar />
      <Signin />
    </div>
  );
};

export default Appbar;
