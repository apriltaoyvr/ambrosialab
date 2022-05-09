import { CircleFlag } from 'react-circle-flags';
import { useRouter } from 'next/router';

const Flags = () => {
  const router = useRouter();

  if (router.locale === 'en') {
    return <CircleFlag countryCode='us' height='30' />;
  } else {
    return <CircleFlag countryCode='it' height='30' />;
  }
};

export default Flags;
