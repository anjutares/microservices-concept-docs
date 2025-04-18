import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={styles.quantumGrid}></div>
      <div className={styles.quantumNetwork}></div>
      <div className={styles.quantumParticles}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--md"
            to="/docs/product/introduction">
            Ver Documentación
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/product/roadmap">
            Roadmap
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProductShowcase() {
  return (
    <div className={styles.productShowcase}>
      <div className="container">
        <div className="row">
          <div className="col col--6">
            <div className={styles.productImage}>
              <img 
                src="/img/quantum1.jpg" 
                alt="Quantum Computer" 
              />
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.productDescription}>
              <h2>Q-Control Nova</h2>
              <p>
                Nuestro módulo de 3 U integra electrónica cryo-CMOS, enlaces ópticos de silicio 
                y aceleración in-memory para el control y corrección de errores de hasta 
                256 qubits superconductores o de spin por unidad.
              </p>
              <ul>
                <li>Reduce el cableado en un 95%</li>
                <li>Disminuye el consumo energético en un 80%</li>
                <li>Baja la latencia de corrección a menos de 1 µs</li>
              </ul>
              <Link
                className="button button--primary button--md"
                to="/docs/product/introduction">
                Conocer más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      title: 'Telemetría y Sincronización',
      description: 'Comunicación a través de fibras ópticas de silicio de 1,6 Tb/s, eliminando cientos de cables coaxiales.',
      image: '/img/quantum2.jpg',
    },
    {
      title: 'Criogenia Avanzada',
      description: 'Electrónica que opera a 4K, permitiendo un control preciso de los qubits directamente en el entorno criogénico.',
      image: '/img/quantum3.jpg',
    },
    {
      title: 'Corrección de Errores Cuánticos',
      description: 'Procesado de síndromes in-situ con latencia inferior a 1 µs, multiplicando por 10 la fidelidad lógica.',
      image: '/img/quantum4.jpg',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <h2 className={styles.featuresTitle}>Características Principales</h2>
        <div className="row">
          {features.map((feature, idx) => (
            <div className="col col--4" key={idx}>
              <div className={styles.featureCard}>
                <div className={styles.featureImageContainer}>
                  <img src={feature.image} alt={feature.title} className={styles.featureImage} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <h2>¿Listo para escalar sus sistemas cuánticos?</h2>
        <p>Q-Control Nova sienta las bases para sistemas de más de un millón de qubits.</p>
        <div className={styles.ctaButtons}>
          <Link
            className="button button--primary button--lg margin-right--md"
            to="/docs/services/overview">
            Explorar Microservicios
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/docs/frontend/overview">
            Ver Frontend
          </Link>
        </div>
      </div>
    </section>
  );
}

function DisclaimerSection() {
  return (
    <section className={styles.disclaimerSection}>
      <div className="container">
        <h2>Disclaimer</h2>
        <p>
          Este proyecto es completamente ficticio y ha sido creado por Juan F. como prueba de concepto.
          Si deseas conocer más sobre este u otros proyectos o contactar con el autor, visita{' '}
          <a href="https://juanferrando.es" target="_blank" rel="noopener noreferrer">
            juanferrando.es
          </a>
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <Head>
        <title>CryoNova Labs - Q-Control Nova</title>
        <meta name="description" content="Sistema de control cuántico Q-Control Nova por CryoNova Labs. Reduce cableado, consumo energético y latencia para sistemas cuánticos escalables." />
      </Head>
      <HomepageHeader />
      <main>
        <ProductShowcase />
        <FeaturesSection />
        <CtaSection />
        <DisclaimerSection />
      </main>
    </Layout>
  );
} 