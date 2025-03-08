import React from 'react';
import styles from './header.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <button>
                <Image 
                  src="/profilePic.jpg" // Corrected the src path
                  height={100} // Adjusted the height
                  width={100} // Adjusted the width
                  alt='Profile picture of Kirstine Bjørn'
                />
              </button>
            </Link>
          </li>
          <li><Link href="/cv">CV</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

