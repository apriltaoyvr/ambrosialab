import { CircleFlag } from 'react-circle-flags';
import { useRouter } from 'next/router';

const Flags = () => {
  const router = useRouter();

  if (router.locale === 'en') {
    return <CircleFlag countryCode='us' height='35' />;
  } else {
    return <CircleFlag countryCode='it' height='35' />;
  }
};

export default Flags;
