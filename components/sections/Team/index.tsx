import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';
import Image from 'next/image';

import Member from './Member';
import { TeamWrapper, ItemWrapper } from './index.styled';
import { fadeContainer, fadeItem } from '../../utility/framer';
import conference from '/public/images/makingmakeup.jpg';

const Team = () => {
  const { t } = useTranslation('common');
  const css = {
    height: '100%',
    width: 'auto',
  };

  return (
    <motion.section
      id='team'
      variants={fadeContainer}
      initial='hidden'
      whileInView='visible'
      exit='hidden'
      viewport={{ once: true }}
    >
      <motion.h1 variants={fadeItem}>{t('section.team')}</motion.h1>
      <TeamWrapper>
        {t('team', { returnObjects: true }).map((team, index) => (
          <Member
            name={team.name}
            title={team.title}
            description={team.description}
            image={team.image}
            variants={fadeItem}
            key={index}
          />
        ))}
      </TeamWrapper>
      <motion.h2 style={{ marginTop: '1rem' }}>
        {t('section.gallery')}
      </motion.h2>
      <ItemWrapper variants={fadeItem}>
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
