import React from 'react';
import { companies } from '../data/companies';
import '../styles.css';

function TrustedCompanies() {
  return (
    <div className="trusted-section">
      <div className="container">
        <p className="trusted-text">
          Trusted by over 15,000 companies and millions of learners around the world
        </p>
        <div className="companies-grid">
          {companies.map((company, idx) => (
            <img 
              key={idx}
              src={company.logo}
              alt={company.name}
              className="company-logo"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustedCompanies;