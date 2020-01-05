import React from 'react';

const FAQs = ({ content }) => (
  <section className="container">
    {content.map(({ q, a }) => (
      <div class="card mb-4">
        <div class="card-header">
          <h4 class="mb-0">{q}</h4>
        </div>

        <div class="card-body" dangerouslySetInnerHTML={{__html: a}} />
      </div>
    ))}

  </section>
);

export default FAQs;
