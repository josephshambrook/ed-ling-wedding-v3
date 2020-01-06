import React from 'react';

const FAQs = ({ content }) => (
  <section className="container">
    {content.map(({ q, a }) => (
      <div className="card mb-4" key={q}>
        <div className="card-header">
          <h4 className="mb-0">{q}</h4>
        </div>

        <div className="card-body" dangerouslySetInnerHTML={{__html: a}} />
      </div>
    ))}

  </section>
);

export default FAQs;
