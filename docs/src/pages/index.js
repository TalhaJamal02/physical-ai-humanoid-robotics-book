import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/setup/hardware"
          >
            Start Reading the Book
          </Link>
          <Link
            className="button button--primary button--lg"
            to="https://github.com/TalhaJamal02"
          >
            GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageModules() {
  return (
    <section className={styles.modulesSection}>
      <div className="container">
        <h2 className={styles.modulesTitle}>Key Modules</h2>
        <ul className={styles.modulesList}>
          <li>
            <Link to="docs/module1_foundations/intro">Physical AI Foundations</Link>
          </li>
          <li>
            <Link to="docs/module2_ros/basics">ROS 2 Development</Link>
          </li>
          <li>
            <Link to="docs/module3_simulation/concepts">Simulation (Gazebo, Unity, Isaac Sim)</Link>
          </li>
          <li>
            <Link to="docs/module4_vla/concepts">Vision-Language-Action & Agentic Control</Link>
          </li>
          <li>
            <Link to="docs/capstone/overview">Capstone Project Integration</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="A book on building and controlling intelligent humanoid robots."
    >
      <HomepageHeader />
      <main>
        <HomepageModules />
      </main>
    </Layout>
  );
}
