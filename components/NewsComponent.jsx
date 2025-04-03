import React from 'react';
import NewsCard from './NewsCard';

const newsData = [
  {
    title: 'Best Actor',
    // description: 'The industry is seeing a huge rise in diverse roles. Discover upcoming opportunities in Hollywood and beyond.',
    date: 'April 3, 2025',
    image: '/best-actor.jpg',
  },
  {
    title: 'Best Actress',
    // description: 'Level up your acting skills by joining the best workshops this year. Here are the top recommendations!',
    date: 'April 3, 2025',
    image: '/best-actress.jpg',
  },
  {
    title: 'Best upcoming actress',
    // description: 'Experts weigh in on what to expect in the acting world for 2025. Will digital performances become the norm?',
    date: 'April 3, 2025',
    image: '/best-upcoming.jpg',
  },
  {
    title: 'Best upcoming actress',
    // description: 'Experts weigh in on what to expect in the acting world for 2025. Will digital performances become the norm?',
    date: 'April 3, 2025',
    image: '/best-upcoming-1.jpg',
  },
];

const NewsComponent = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {newsData.map((news, index) => (
          <NewsCard key={index} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsComponent;
