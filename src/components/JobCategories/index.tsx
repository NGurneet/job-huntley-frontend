import React from 'react';
import CategoryComponent from '../CategoryComponent';
import designLogo from '../../assets/designlogo.png';
import humanResourcelogo from '../../assets/humanResourcelogo.png';
import marketingLogo from '../../assets/marketinglogo.png';
import businessLogo from '../../assets/businesslogo.png';
import salesLogo from '../../assets/saleslogo.png';
import financeLogo from '../../assets/financelogo.png';
import technologyLogo from '../../assets/technologylogo.png';
import engineeringLogo from '../../assets/engineeringlogo.png';
import styles from './JobCategories.module.css';

const JobCategories: React.FC = () => {
  return (
    <div className={styles.jobCategories}> {/* Use styles.jobCategories for the container */}
      <CategoryComponent logo={designLogo} title="Design" jobsCount={15} />
      <CategoryComponent logo={salesLogo} title="Sales" jobsCount={25} />
      <CategoryComponent logo={marketingLogo} title="Marketing" jobsCount={10} />
      <CategoryComponent logo={financeLogo} title="Finance" jobsCount={7} />
      <CategoryComponent logo={technologyLogo} title="Technology" jobsCount={12} />
      <CategoryComponent logo={engineeringLogo} title="Engineering" jobsCount={5} />
      <CategoryComponent logo={businessLogo} title="Business" jobsCount={8} />
      <CategoryComponent logo={humanResourcelogo} title="Human Resources" jobsCount={20} />
    </div>
  );
};

export default JobCategories;
