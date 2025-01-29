import React from 'react';
import styles from './JobPostingSection.module.css'; // Import CSS for styling
import jobPostSectionImg from '../../assets/jobPostSectionImg.png'; // Import image

const JobPostingSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Left Content */}
        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Start posting <br /> jobs today
          </h1>
          <p className={styles.subText}>Start posting jobs for only $10</p>
          <button className={styles.signUpButton} aria-label="Sign up for free">
            Sign Up for Free
          </button>
        </div>

        {/* Right Image */}
        <div className={styles.imageContainer}>
          <img 
            src={jobPostSectionImg} 
            alt="Job Posting" 
            className={styles.image} 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default JobPostingSection;
