import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Member from './Member';
import { TeamWrapper, ItemWrapper } from './index.styled';
import conference from '/public/images/makingmakeup.jpg';

const Team = () => {
  const { t } = useTranslation('common');
  const css = {
    height: '100%',
    maxHeight: '100%',
    width: 'auto',
  };

  return (
    <motion.section id='team'>
      <motion.h1>{t('section.team')}</motion.h1>
      <TeamWrapper>
        {t('team', { returnObjects: true }).map((team) => (
          <Member
            name={team.name}
            title={team.title}
            description={team.description}
            image={team.image}
            key={team.name}
          />
        ))}
      </TeamWrapper>
      <motion.h2 style={{ marginTop: '1rem' }}>
        {t('section.gallery')}
      </motion.h2>
      <ItemWrapper>
        <Image
          src={conference}
          alt='{t("gallery.makingCosmetics")}'
          placeholder='blur'
          style={css}
          sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw'
          draggable='false'
        ></Image>
        <motion.h5>{t('gallery.makingCosmetics')}</motion.h5>
      </ItemWrapper>
    </motion.section>
  );
};

export default Team;
