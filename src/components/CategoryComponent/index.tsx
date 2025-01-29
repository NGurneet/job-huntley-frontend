// CategoryComponent.tsx

import React from 'react';
import styles from './categoryComponent.module.css';

interface CategoryProps {
  logo: string;
  title: string;
  jobsCount: number;
}

const CategoryComponent: React.FC<CategoryProps> = ({ logo, title, jobsCount }) => {
  return (
    <div className={styles.category}>
      <img src={logo} alt={`${title} logo`} className={styles.logo} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.jobsCount}>{jobsCount} Jobs Available</p>
    </div>
  );
};

export default CategoryComponent;
