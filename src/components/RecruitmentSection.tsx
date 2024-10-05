// components/RecruitmentSection.tsx
import React from 'react';

const RecruitmentSection = () => {
  return (
    <section id="recruitment" className="recruitment-section">
      <div className="recruitment-container">
        <h2>Recruitment</h2>
        <div className="recruitment-grid">
          <div className="recruitment-item">
            <h3>Job Placement Assistance</h3>
            <p>We specialize in helping individuals residing in Japan find suitable job opportunities. Our team works closely with employers to match candidates with positions that align with their skills and career goals.</p>
          </div>
          <div className="recruitment-item">
            <h3>Support for Nepali Graduates</h3>
            <p>We are dedicated to assisting Nepali individuals holding a bachelor’s degree who aspire to work in Japan. Our services include job placement, visa application guidance, and cultural orientation to help them transition smoothly.</p>
          </div>
          <div className="recruitment-item">
            <h3>Personalized Career Counseling</h3>
            <p>Our experienced counselors offer personalized career advice and support, helping candidates understand the job market, refine their resumes, and prepare for interviews to increase their chances of success.</p>
          </div>
          <div className="recruitment-item">
            <h3>Employer Partnerships</h3>
            <p>We have established strong partnerships with a wide range of employers across various industries in Japan. This network allows us to provide our candidates with exclusive job opportunities and a better chance of finding the right fit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
