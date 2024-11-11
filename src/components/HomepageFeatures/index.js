import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Image: require('@site/static/img/110i.png').default, // Replace with your JPG file
    description: (
      <>
          eRob drives and demos with multi-protocol integration for diverse platforms.
      </>
    ),
  },
  {
    title: 'Out of the Box',
    Image: require('@site/static/img/eCoder45.png').default, // Replace with your JPG file
    description: (
      <>
          Provide development demos for eCoder on different platforms, out of the box.
      </>
    ),
  },
  {
    title: 'Powered by AI Platforms',
    Image: require('@site/static/img/cobot.jpg').default, // Replace with your JPG file
    description: (
      <>
          Combine AI platforms to quickly develop your robots.
      </>
    ),
  },
];

function Feature({ Image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Image} alt={title} className={styles.featureImg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}