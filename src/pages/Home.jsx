
import React from "react";

const Home = () => {
  return (
    <>
    
      <div className="home-page bg-light min-vh-100">
        {/* Hero Section */}
        <header className="hero-section text-light py-5">
          <div className="container py-5">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4 mb-lg-0">
                <p className="text-success fw-semibold text-uppercase small mb-2">
                  Clean • Smart • Sustainable
                </p>
                <h1 className="display-5 fw-bold mb-3 home-hero-title">
                  Powering the Future with{" "}
                  <span className="">Renewable Energy</span>
                </h1>
                <p className="lead text-light-50 mb-4">
                  Explore solar, wind, hydro, biomass, and geothermal solutions
                  in one interactive dashboard. Track benefits, potential
                  savings, and environmental impact.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <a
                    href="#energies"
                    className="btn btn-lg btn-success shadow home-cta-main"
                  >
                    Explore Energies
                  </a>
                  <a
                    href="#quote"
                    className="btn btn-lg btn-outline-light home-cta-secondary"
                  >
                    Get Free Energy Audit
                  </a>
                </div>
              </div>
              <div className="col-lg-5 text-center">
                <div className="home-hero-orbit">
                  <div className="home-hero-orbit-ring home-hero-orbit-ring-1" />
                  <div className="home-hero-orbit-ring home-hero-orbit-ring-2" />
                  <div className="home-hero-orbit-core">
                    <span className="home-hero-core-text">100% Green</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Energy Types Cards */}
        <section id="energies" className="container py-5">
          <div className="text-center text-success mb-4">
            <h2 className="fw-bold  ">Energy Sources</h2>
            <p className="mb-0">
              Learn the key facts, advantages, and ideal use cases for each
              energy type.
            </p>
          </div>

          <div className="row g-4">
            {/* Solar */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100  text-black border-0 shadow home-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6kIWgvRaKC16WuWJBnJQjun7jIzlfRObV_A&s"
                  className="card-img-top energy-img"
                  alt="Solar panels"
                />
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center gap-2">
                    ☀️ Solar Energy
                  </h5>
                  <p className="card-text small">
                    Uses sunlight via solar panels to generate clean electricity
                    for homes, offices, and industries.
                  </p>
                  <ul className="small mb-3 text-white-75">
                    <li>Best for rooftops and open fields.</li>
                    <li>Low operating cost after installation.</li>
                    <li>Great for sunny regions.</li>
                  </ul>
                  <button className="btn btn-sm btn-outline-success rounded-pill">
                    View Solar Details
                  </button>
                </div>
              </div>
            </div>

            {/* Wind */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100  text-black border-0 shadow home-card">
                <img
                  src="https://earth.org/wp-content/uploads/2022/06/Untitled-1024-%C3%97-683px-13-1200x675.jpg"
                  className="card-img-top energy-img"
                  alt="Wind turbines"
                />
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center gap-2">
                    🌬️ Wind Energy
                  </h5>
                  <p className="card-text small">
                    Converts wind movement into electricity using turbines
                    onshore or offshore.
                  </p>
                  <ul className="small mb-3 text-white-75">
                    <li>Ideal for coastal and open plain regions.</li>
                    <li>Scalable from small to large farms.</li>
                    <li>Highly sustainable with low emissions.</li>
                  </ul>
                  <button className="btn btn-sm btn-outline-success rounded-pill">
                    View Wind Details
                  </button>
                </div>
              </div>
            </div>

            {/* Hydro */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100  text-black border-0 shadow home-card">
                <img
                  src="https://kyyekxqg.cdn.imgeng.in/wp-content/uploads/hydro-power-infographic.png"
                  className="card-img-top energy-img"
                  alt="Hydro power plant"
                />
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center gap-2">
                    💧 Hydro Energy
                  </h5>
                  <p className="card-text small">
                    Uses flowing water from rivers or dams to rotate turbines
                    and produce power.
                  </p>
                  <ul className="small mb-3 text-white-75">
                    <li>Reliable base-load energy source.</li>
                    <li>Supports water management and storage.</li>
                    <li>Higher initial infrastructure cost.</li>
                  </ul>
                  <button className="btn btn-sm btn-outline-success rounded-pill">
                    View Hydro Details
                  </button>
                </div>
              </div>
            </div>

            {/* Biomass */}
            <div className="col-md-6 col-lg-6">
              <div className="card h-100  text-black border-0 shadow home-card">
                <img
                  src="https://www.mdpi.com/energies/energies-16-01783/article_deploy/html/images/energies-16-01783-g001.png"
                  className="card-img-top energy-img"
                  alt="Biomass plant"
                />
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center gap-2">
                    🌱 Biomass Energy
                  </h5>
                  <p className="card-text small">
                    Generates energy from organic materials like crop waste and
                    wood pellets.
                  </p>
                  <ul className="small mb-3 text-white-75">
                    <li>Good for rural and agricultural areas.</li>
                    <li>Helps in waste management.</li>
                    <li>Requires continuous fuel supply.</li>
                  </ul>
                  <button className="btn btn-sm btn-outline-success rounded-pill">
                    View Biomass Details
                  </button>
                </div>
              </div>
            </div>

            {/* Geothermal */}
            <div className="col-md-6 col-lg-6">
              <div className="card h-100  text-black border-0 shadow home-card">
                <img
                  src="https://media.gettyimages.com/id/1297017733/photo/modern-powerplant-producing-heat.jpg?s=612x612&w=gi&k=20&c=846hitTjtONa_3V2DVkbOUDb7mRpb9zbb1gvAoLSNZo="
                  className="card-img-top energy-img"
                  alt="Geothermal plant"
                />
                <div className="card-body">
                  <h5 className="card-title d-flex align-items-center gap-2">
                    🌋 Geothermal Energy
                  </h5>
                  <p className="card-text small">
                    Uses heat from beneath the earth&apos;s surface for
                    electricity and heating.
                  </p>
                  <ul className="small mb-3 text-white-75">
                    <li>Very stable and continuous supply.</li>
                    <li>Low emissions and small land footprint.</li>
                    <li>Location-specific resource availability.</li>
                  </ul>
                  <button className="btn btn-sm btn-outline-success rounded-pill">
                    View Geothermal Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quote / Contact Form */}
        <section id="quote" className="home-form-section py-5 bg-white">
          <div className="container">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6 ">
                <h3 className="fw-bold text-white mb-3">Get Your Free Energy Plan</h3>
                <p className=" text-white mb-4">
                  Share a few details and get a customized suggestion on the
                  best combination of solar, wind, and other renewables for your
                  home or business.
                </p>
                <ul className="text-white small">
                  <li>Estimate yearly savings and CO₂ reduction.</li>
                  <li>Choose preferred energy mix and budget.</li>
                  <li>Get a simple action plan by email.</li>
                </ul>
              </div>

              <div className="col-lg-6">
                <div className="card border-0 shadow-lg home-form-card">
                  <div className="card-body">
                    <h5 className="card-title mb-3">Energy Audit Form</h5>
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Location / City</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your city or region"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Monthly Electricity Usage (approx kWh)
                        </label>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="e.g., 450"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">
                          Preferred Energy Types
                        </label>
                        <select className="form-select">
                          <option>Solar + Wind</option>
                          <option>Only Solar</option>
                          <option>Only Wind</option>
                          <option>Mixed (Solar, Wind, Hydro)</option>
                          <option>Not sure - suggest for me</option>
                        </select>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Additional Notes</label>
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="Tell us about your roof, land, or any constraints..."
                        />
                      </div>
                      <button type="submit" className="btn btn-success w-100">
                        Generate My Energy Plan
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
