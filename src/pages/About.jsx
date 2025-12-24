import React, { useState } from "react";

const About = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How much space do wind turbines need?",
      answer: "Individual turbines need 0.5-1 acre, but wind farms space them 5-10 rotor diameters apart. Land between can still be used for farming."
    },
    {
      question: "Do wind turbines kill birds?",
      answer: "Modern designs minimize impact. Turbines cause far fewer bird deaths than cats, buildings, or cars. Proper siting avoids migration paths."
    },
    {
      question: "How long do wind turbines last?",
      answer: "20-25 years design life. Many run longer with maintenance. 85-90% recyclable when decommissioned."
    },
    {
      question: "Is wind energy reliable?",
      answer: "Yes, with modern forecasting and grid balancing. Capacity factors now 35-45% in good sites."
    },
    {
      question: "How much does it cost?",
      answer: "Onshore: $25-50/MWh (cheaper than coal/gas). Offshore: $50-100/MWh and falling fast."
    },
    {
      question: "Can I put one at my home?",
      answer: "Yes! Small turbines (1-100 kW) work for homes/farms. Need 10+ mph average wind. ROI: 5-10 years."
    }
  ];

  return (
    <div className="about-page py-5 bg-light">
      <div className="container">
        {/* Mission Section */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <h2 className="about-title text-success fw-bold mb-3 display-5">
              Our Mission
            </h2>
            <p className="about-text lead">
              Accelerating wind energy adoption with reliable, scalable, cost-effective solutions.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://earth.org/wp-content/uploads/2022/06/Untitled-1024-%C3%97-683px-13-1200x675.jpg"
              alt="Wind Energy"
              className="img-fluid rounded shadow-lg about-img"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Why Wind Energy */}
        <div className="row align-items-center flex-md-row-reverse mb-5">
          <div className="col-md-6">
            <h2 className="about-title text-success fw-bold mb-3 display-5">
              Why Wind Energy?
            </h2>
            <ul className="about-list list-unstyled ps-0">
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Low cost operation</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Zero emissions</li>
              <li className="mb-2"><i className="bi bi-check-circle-fill text-success me-2"></i>Scalable solutions</li>
              <li><i className="bi bi-check-circle-fill text-success me-2"></i>Onshore/offshore ready</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfhsh33ctaYCERyE6G3b28p7Ub2weg12dAg&s"
              alt="Wind Turbines"
              className="img-fluid rounded shadow-lg about-img"
              style={{ maxHeight: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Industry Impact Cards */}
        <div className="row text-center mb-5">
          <div className="col-md-4 mb-4">
            <div className="impact-card bg-white p-4 rounded-4 shadow h-100 border border-success">
              <i className="bi bi-lightning-charge-fill text-success fs-1 mb-3"></i>
              <h3 className="fw-bold text-success mb-3">⚡ High Efficiency</h3>
              <p className="text-muted">Advanced turbines, better energy conversion</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="impact-card bg-white p-4 rounded-4 shadow h-100 border border-success">
              <i className="bi bi-leaf-fill text-success fs-1 mb-3"></i>
              <h3 className="fw-bold text-success mb-3">🌍 Eco Friendly</h3>
              <p className="text-muted">Zero emissions during operation</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="impact-card bg-white p-4 rounded-4 shadow h-100 border border-success">
              <i className="bi bi-building-gear text-success fs-1 mb-3"></i>
              <h3 className="fw-bold text-success mb-3">🏭 Industry Ready</h3>
              <p className="text-muted">Reliable 24/7 grid power</p>
            </div>
          </div>
        </div>

        {/* Simple FAQ Section */}
        <section className="faq-section py-5 bg-white rounded-4 shadow">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-success mb-3">Frequently Asked Questions</h2>
            <p className="lead text-muted">Common questions about wind energy</p>
          </div>

          <div className="accordion" id="faqAccordion">
            {faqs.map((faq, index) => (
              <div key={index} className="accordion-item border-0 shadow-sm mb-2 rounded-3">
                <h3 className="accordion-header">
                  <button
                    className={`accordion-button ${openFaq === index ? '' : 'collapsed'} fw-bold text-success`}
                    type="button"
                    onClick={() => toggleFaq(index)}
                  >
                    <i className="bi bi-question-circle me-2"></i>
                    {faq.question}
                  </button>
                </h3>
                <div className={`accordion-collapse collapse ${openFaq === index ? 'show' : ''}`}>
                  <div className="accordion-body text-muted">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
