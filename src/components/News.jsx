import React from 'react';

const News = () => {
  const newsItems = [
    {
      title: 'Sun Tung Lok Awarded Michelin Stars',
      date: 'Since 2011',
      excerpt: 'Sun Tung Lok was awarded consecutive Michelin Stars since 2011, a testament to our commitment to quality and excellence.',
    },
    {
      title: 'New Seasonal Menu Unveiled',
      date: 'October 26, 2023',
      excerpt: 'Experience the taste of autumn with our new seasonal menu, featuring the freshest ingredients of the season.',
    },
  ];

  return (
    <section id="news" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">NEWS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{item.date}</p>
              <p className="text-gray-400">{item.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
