import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function CV() {
    return (
        <div>
            <h1>Contact</h1>
            <div>
                <a href="https://www.linkedin.com/in/kirstine-bj%C3%B8rn-5559ab225/" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#0a66c2' }}>
                    <FaLinkedin style={{ marginRight: '8px' }} />
                    LinkedIn
                </a>
            </div>
            <div>
                <a href="mailto:your-email@example.com" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                    <FaEnvelope style={{ marginRight: '8px' }} />
                    your-email@example.com
                </a>
            </div>
        </div>
    );
}