import React from 'react';
import { categories } from '../data/categories';
import { courses } from '../data/courses';
import '../styles.css';

function FeaturedCourses() {
  return (
    <div className="featured-section">
      <div className="container">
        <h2 className="section-title">A broad selection of courses</h2>
        <p className="section-subtitle">
          Choose from over 220,000 online video courses with new additions published every month
        </p>
        
        <div className="categories-tabs">
          {categories.slice(0, 8).map((cat, idx) => (
            <button 
              key={idx}
              className={idx === 0 ? 'category-tab active' : 'category-tab'}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="featured-box">
          <h3 className="featured-title">Expand your career opportunities with Python</h3>
          <p className="featured-description">
            Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. You'll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...
          </p>
          <button className="explore-btn">Explore Python</button>

          <div className="courses-grid">
            {courses.slice(0, 5).map(course => (
              <div key={course.id} className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-content">
                  <h4 className="course-title">{course.title}</h4>
                  <p className="course-instructor">{course.instructor}</p>
                  <div className="course-rating">
                    <span className="rating-number">{course.rating}</span>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="star" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="reviews-count">({course.reviews.toLocaleString()})</span>
                  </div>
                  <div className="course-price">
                    <span className="price">{course.price}</span>
                    <span className="original-price">{course.originalPrice}</span>
                  </div>
                  {course.bestseller && (
                    <span className="bestseller-badge">Bestseller</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCourses;