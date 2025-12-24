// // pages/About.jsx

// const About = () => {
//   return (
//     <div className="about-page py-5">
//       <div className="container">

//         {/* Mission Section */}
//         <div className="row align-items-center mb-5">
//           <div className="col-md-6">
//             <h2 className="about-title text-wind mb-3">
//               Our Mission
//             </h2>
//             <p className="about-text">
//               Our mission is to accelerate the adoption of wind energy by
//               delivering reliable, scalable, and cost-effective renewable
//               power solutions. We aim to reduce carbon emissions while meeting
//               the growing energy demands of industries and communities.
//             </p>
//           </div>

//           <div className="col-md-6 text-center">
//             <img
//               src="https://earth.org/wp-content/uploads/2022/06/Untitled-1024-%C3%97-683px-13-1200x675.jpg"
//               alt="Wind Energy"
//               className="img-fluid rounded shadow about-img"
//             />
//           </div>
//         </div>

//         {/* Why Wind Energy */}
//         <div className="row align-items-center flex-md-row-reverse mb-5">
//           <div className="col-md-6">
//             <h2 className="about-title text-wind mb-3">
//               Why Wind Energy?
//             </h2>
//             <p className="about-text">
//               Wind energy is one of the fastest-growing renewable energy
//               sources worldwide. It converts kinetic wind power into
//               electricity using turbines, offering a clean and sustainable
//               alternative to fossil fuels.
//             </p>

//             <ul className="about-list">
//               <li>Low operational and maintenance cost</li>
//               <li>Zero fuel cost and low carbon footprint</li>
//               <li>Scalable for small and large power needs</li>
//               <li>Ideal for onshore and offshore installations</li>
//             </ul>
//           </div>

//           <div className="col-md-6 text-center">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfhsh33ctaYCERyE6G3b28p7Ub2weg12dAg&s"
//               alt="Wind Turbines"
//               className="img-fluid rounded shadow about-img"
//             />
//           </div>
//         </div>

//         {/* Industry Impact */}
//         <div className="row text-center">
//           <div className="col-md-4 mb-4">
//             <div className="impact-card">
//               <h3>⚡ High Efficiency</h3>
//               <p>Modern turbines convert more wind into usable electricity.</p>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="impact-card">
//               <h3>🌍 Eco Friendly</h3>
//               <p>No greenhouse gas emissions during power generation.</p>
//             </div>
//           </div>

//           <div className="col-md-4 mb-4">
//             <div className="impact-card">
//               <h3>🏭 Industry Ready</h3>
//               <p>Reliable power source for industrial-scale operations.</p>
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default About;

// import React from "react";

// const About = () => {
//   return (
//     <div className="about-page py-5 bg-light">
//       <div className="container">
//         {/* Mission Section */}
//         <div className="row align-items-center mb-5">
//           <div className="col-md-6">
//             <h2 className="about-title text-success fw-bold mb-3 display-5">
//               Our Mission
//             </h2>
//             <p className="about-text lead">
//               Our mission is to accelerate the adoption of wind energy by
//               delivering reliable, scalable, and cost-effective renewable
//               power solutions. We aim to reduce carbon emissions while meeting
//               the growing energy demands of industries and communities.
//             </p>
//           </div>
//           <div className="col-md-6 text-center">
//             <img
//               src="https://earth.org/wp-content/uploads/2022/06/Untitled-1024-%C3%97-683px-13-1200x675.jpg"
//               alt="Wind Energy"
//               className="img-fluid rounded shadow-lg about-img"
//               style={{ maxHeight: '400px', objectFit: 'cover' }}
//             />
//           </div>
//         </div>

//         {/* Why Wind Energy */}
//         <div className="row align-items-center flex-md-row-reverse mb-5">
//           <div className="col-md-6">
//             <h2 className="about-title text-success fw-bold mb-3 display-5">
//               Why Wind Energy?
//             </h2>
//             <p className="about-text lead">
//               Wind energy is one of the fastest-growing renewable energy
//               sources worldwide. It converts kinetic wind power into
//               electricity using turbines, offering a clean and sustainable
//               alternative to fossil fuels.
//             </p>
//             <ul className="about-list list-unstyled ps-0">
//               <li className="mb-2">
//                 <i className="bi bi-check-circle-fill text-success me-2"></i>
//                 Low operational and maintenance cost
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-check-circle-fill text-success me-2"></i>
//                 Zero fuel cost and low carbon footprint
//               </li>
//               <li className="mb-2">
//                 <i className="bi bi-check-circle-fill text-success me-2"></i>
//                 Scalable for small and large power needs
//               </li>
//               <li>
//                 <i className="bi bi-check-circle-fill text-success me-2"></i>
//                 Ideal for onshore and offshore installations
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-6 text-center">
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhfhsh33ctaYCERyE6G3b28p7Ub2weg12dAg&s"
//               alt="Wind Turbines"
//               className="img-fluid rounded shadow-lg about-img"
//               style={{ maxHeight: '400px', objectFit: 'cover' }}
//             />
//           </div>
//         </div>

//         {/* Industry Impact */}
//         <div className="row text-center mb-5">
//           <div className="col-md-4 mb-4">
//             <div className="impact-card bg-white p-4 rounded-4 shadow-lg h-100 border border-success">
//               <div className="impact-icon mb-3">
//                 <i className="bi bi-lightning-charge-fill text-success fs-1"></i>
//               </div>
//               <h3 className="fw-bold text-success mb-3">⚡ High Efficiency</h3>
//               <p className="text-muted">
//                 Modern turbines convert more wind into usable electricity with
//                 cutting-edge blade designs and advanced control systems.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="impact-card bg-white p-4 rounded-4 shadow-lg h-100 border border-success">
//               <div className="impact-icon mb-3">
//                 <i className="bi bi-leaf-fill text-success fs-1"></i>
//               </div>
//               <h3 className="fw-bold text-success mb-3">🌍 Eco Friendly</h3>
//               <p className="text-muted">
//                 No greenhouse gas emissions during power generation. Wind energy
//                 reduces CO₂ by millions of tons annually.
//               </p>
//             </div>
//           </div>
//           <div className="col-md-4 mb-4">
//             <div className="impact-card bg-white p-4 rounded-4 shadow-lg h-100 border border-success">
//               <div className="impact-icon mb-3">
//                 <i className="bi bi-building-gear text-success fs-1"></i>
//               </div>
//               <h3 className="fw-bold text-success mb-3">🏭 Industry Ready</h3>
//               <p className="text-muted">
//                 Reliable power source for industrial-scale operations with 24/7
//                 grid integration capabilities.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <section className="faq-section py-5 bg-white rounded-4 shadow-lg">
//           <div className="row">
//             <div className="col-12 text-center mb-5">
//               <h2 className="display-4 fw-bold text-success mb-3">Wind Energy FAQ</h2>
//               <p className="lead text-muted">
//                 Frequently asked questions about wind energy technology and implementation
//               </p>
//             </div>
//           </div>

//           <div className="row g-4">
//             {/* FAQ Cards */}
//             <div className="col-lg-6 mb-4">
//               <div className="faq-card bg-light border-0 shadow-sm h-100 rounded-3 p-4 hover-lift">
//                 <h5 className="fw-bold text-success mb-3">
//                   <i className="bi bi-question-circle me-2"></i>
//                   How much space do wind turbines need?
//                 </h5>
//                 <p className="text-muted mb-0">
//                   Individual turbines require about 0.5-1 acre of land, but the
//                   spacing between turbines in a wind farm is much larger (5-10
//                   rotor diameters). Land between turbines can still be used for
//                   farming or grazing.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-6 mb-4">
//               <div className="faq-card bg-light border-0 shadow-sm h-100 rounded-3 p-4 hover-lift">
//                 <h5 className="fw-bold text-success mb-3">
//                   <i className="bi bi-question-circle me-2"></i>
//                   Do wind turbines kill birds?
//                 </h5>
//                 <p className="text-muted mb-0">
//                   Modern turbine designs and site selection minimize bird impact.
//                   Studies show turbines cause far fewer bird deaths than cats,
//                   buildings, or cars. Proper siting avoids migration paths.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-6 mb-4">
//               <div className="faq-card bg-light border-0 shadow-sm h-100 rounded-3 p-4 hover-lift">
//                 <h5 className="fw-bold text-success mb-3">
//                   <i className="bi bi-question-circle me-2"></i>
//                   How long do wind turbines last?
//                 </h5>
//                 <p className="text-muted mb-0">
//                   Wind turbines have a design life of 20-25 years. Many operate
//                   longer with maintenance. When decommissioned, 85-90% of
//                   materials are recyclable, leaving minimal waste.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-6 mb-4">
//               <div className="faq-card bg-light border-0 shadow-sm h-100 rounded-3 p-4 hover-lift">
//                 <h5 className="fw-bold text-success mb-3">
//                   <i className="bi bi-question-circle me-2"></i>
//                   Is wind energy reliable?
//                 </h5>
//                 <p className="text-muted mb-0">
//                   Wind is predictable with modern forecasting. Combined with
//                   energy storage and grid balancing, wind provides reliable
//                   power. Capacity factors have improved to 35-45% in optimal sites.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-6 mb-4">
//               <div className="faq-card bg-light border-0 shadow-sm h-100 rounded-3 p-4 hover-lift">
//                 <h5 className="fw-bold text-success mb-3">
//                   <i className="bi bi-question-circle me-2"></i>
//                   How much does wind energy cost?
//                 </h5>
//                 <p className="text-muted mb-0">
//                   Onshore wind is now cheaper than coal, gas, and nuclear.
//                   Levelized cost is $25-50/MWh. Offshore wind is $50-100/MWh
//                   and falling rapidly with technology improvements.
//                 </p>
//               </div>
//             </div>

//             <div className="col-lg-6 mb-4">
//               <div className="faq-card bg-light border-0 shadow-sm h-100 rounded-3 p-4 hover-lift">
//                 <h5 className="fw-bold text-success mb-3">
//                   <i className="bi bi-question-circle me-2"></i>
//                   Can I install wind turbines for my home?
//                 </h5>
//                 <p className="text-muted mb-0">
//                   Small wind turbines (1-100 kW) are available for homes and
//                   farms. Check local wind speeds (minimum 10 mph average) and
//                   zoning regulations. ROI typically 5-10 years with incentives.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default About;

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
