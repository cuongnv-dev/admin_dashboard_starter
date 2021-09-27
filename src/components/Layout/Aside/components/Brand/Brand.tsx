import { MenuAlt2Icon, MenuAlt3Icon } from '@heroicons/react/solid';
import { useThemeContext } from 'store';
import logo from '../../../../../assets/images/logo.png';
import { BrandContainer, Logo } from './styles';

export const Brand = () => {
  const { viewFull, setViewFull } = useThemeContext();

  if (!viewFull)
    return (
      <div className="h-16 text-gray-500 dark:text-second-dark  flex justify-center ">
        <button onClick={() => setViewFull(!viewFull)}>
          <MenuAlt2Icon className="w-7 " />
        </button>
      </div>
    );

  return (
    <BrandContainer>
      <div className="h-full ">
        <Logo src={logo} alt="brand-logo" />
      </div>
      <button onClick={() => setViewFull(!viewFull)}>
        <MenuAlt3Icon className="w-7" />
      </button>
    </BrandContainer>
  );
};
