/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Pidgin',
    title: 'Pidgin',
    text:
      'Comprehensive Pidgin english tutoring',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Igbo',
    title: 'Igbo',
    text:
      'Comprehensive Igbo tutoring',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Yoruba',
    title: 'Yoruba',
    text:
      'Paid subscriptions allow us to continue helping learners around the world.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Hausa',
    title: 'Hausa',
    text:
      'We believe it’s important for everyone to have access to tutors – especially when it comes to digital learning',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature'}}>
      <Container>
        <SectionHeader
          slogan ="Quality Tutoring"
          title ="Amazing Tutors"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
