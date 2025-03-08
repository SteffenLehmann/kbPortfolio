import React from 'react'
import styles from './footer.module.css'


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <span>© 2025 Kirstine Bjørn. All rights reserved.</span>
        <span>Built with Next.js & TypeScript by Steffen Lehmann</span>
      </div>
    </footer>
  )
}