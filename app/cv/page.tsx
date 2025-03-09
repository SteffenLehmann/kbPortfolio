import React from 'react';
import styles from './cv.module.css';

export default function CV() {
  return (
    <div className={styles.cv}>
      <header>
        <h1 style={{textAlign: 'center'}}>Kirstine Bjørn</h1>
        <p style={{textAlign: 'center'}}>Marketing Coordinator | Sales & Marketing Intern</p>
      </header>
      <div className={styles['skills-container']}>
        <h2>Skills</h2>
        <ul>
          <li>Marketing Tools: ActiveCampaign, Webflow</li>
          <li>Design Tools: Canva, Adobe (Illustrator, Photoshop)</li>
          <li>Social Media Management: LinkedIn, Facebook, Instagram</li>
          <li>Webshop Management: Shopify</li>
          <li>Sales and Customer Service</li>
        </ul>
      </div>
      <div className={styles['experience-container']}>
        <h2>Experience</h2>
        <div className={styles['experience-box']}>
          <h3>Marketing Coordinator at Tempress A/S</h3>
          <p>Aug 2023 - Present · 1 yr 8 mos | On-site</p>
          <ul>
            <li>Overall responsibility for the company’s marketing activities, including newsletters, social media, and campaigns.</li>
            <li>Coordinate advertising efforts with an external agency.</li>
            <li>Content production: Copywriting, product photography, and graphic design.</li>
            <li>Strategic and practical planning of trade shows and events.</li>
            <li>Website updates and maintenance using Webflow and CRM management.</li>
          </ul>
        </div>
        <div className={styles['experience-box']}>
          <h3>Sales and Marketing Intern at Tempress A/S</h3>
          <p>Aug 2022 - Dec 2022 · 5 mos | Hørning, Denmark</p>
          <ul>
            <li>Implemented ActiveCampaign as a tool for both sales and marketing.</li>
            <li>Gained a strong understanding of the company and its customers through daily sales work.</li>
          </ul>
        </div>
        <div className={styles['experience-box']}>
          <h3>Sales Assistant at NewZjoos.dk</h3>
          <p>Feb 2020 - Sep 2021 · 1 yr 8 mos | Aalborg, Denmark</p>
          <ul>
            <li>Managed Shopify webshop: Product uploads, image editing, and product descriptions.</li>
            <li>Created content for Facebook and Instagram to strengthen the store’s online presence.</li>
            <li>Handled customer service, both in-store and online, and processed orders.</li>
          </ul>
        </div>
        <div className={styles['experience-box']}>
          <h3>Hjælpepige at Zjoos</h3>
          <p>Nov 2016 - Oct 2019 · 3 yrs | Aalborg, Denmark</p>
          <ul>
            <li>Assisted customers with purchases and provided guidance.</li>
            <li>Performed general tasks like cleaning and organizing the store.</li>
          </ul>
        </div>
      </div>
      <div className={styles['experience-container']}>
        <h2>Education</h2>
        <h3>Aalborg University</h3>
        <p>Master of Arts (MA), Culture, Communication, and Globalization | 2021 - 2023</p>
        <h3>Aalborg University</h3>
        <p>Bachelor's Degree, Language and International Studies, Spanish | Sep 2016 - Jun 2019</p>
      </div>
    </div>
  );
}