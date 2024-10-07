// components/Team.tsx
const Team = () => {
  return (
    <div id="team">
      <div className="container">
        <div className="section">
          <h3 className="section__title">Meet Our Team</h3>
          <p className="section__subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint minima modi tempora nihil voluptatem aperiam enim. Cum, quasi dolorem!</p>

          <section className="team-section">
            <div className="row justify-content-center">
              <div className="col-10">
                <div className="row">
                  <div className="col-md-4">
                    <div className="team-item">
                      <div className="team-img splash2">
                        <img src="/resource/cover.jpg" width="320px" height="320px" alt="Team Member 1" />
                      </div>
                      <div>
                        <h5>John Doe</h5>
                        <p>Lead Recruiter</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="team-item">
                      <div className="team-img splash2">
                        <img src="/resource/cover.jpg" width="320px" height="320px" alt="Team Member 1" />
                      </div>
                      <div>
                        <h5>John Doe</h5>
                        <p>Lead Recruiter</p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="team-item">
                      <div className="team-img splash2">
                        <img src="/resource/cover.jpg" width="320px" height="320px" alt="Team Member 1" />
                      </div>
                      <div>
                        <h5>John Doe</h5>
                        <p>Lead Recruiter</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Team;
