import React from 'react';

function LandingPage({ user, setPage }) {
    
    function changePage() {
      setPage('login');
    };

  return (
    <div className="landing-page">
      <section className="section" id="section1">
        <div className="section-content">
          <h1>Welcome to ProduceMe</h1>
          <p className="p-landingpage">"At <strong>ProduceMe</strong>, our mission is to celebrate and elevate the vibrant local arts scene by providing a platform where emerging artists can thrive. We are committed to empowering local talent, fostering creativity, and connecting communities through the transformative power of art.

          We believe that every artist deserves a spotlight, and we aim to be the catalyst for their journey to recognition. Our platform serves as a bridge between these gifted individuals and their audience, creating a space where their talents can shine.

          We are dedicated to:</p>

          <p className="p-landingpage">Showcasing Local Talent: We are passionate about promoting the incredible diversity of talent within our community. Through our platform, we curate, feature, and highlight the work of local artists in various forms, including visual arts, music, dance, literature, and more.</p>

          <p className="p-landingpage">Providing Exposure: We are committed to offering artists the visibility they deserve. We help them gain exposure to a wider audience, facilitating connections with art enthusiasts, collectors, and collaborators.</p>

          <p className="p-landingpage">Supporting Artistic Growth: We foster an environment that nurtures artistic growth and experimentation. Through resources, guidance, and opportunities, we assist artists in honing their craft and reaching their full potential.</p>

          <p className="p-landingpage">Amplifying Local Stories: We aim to amplify the stories, experiences, and voices of our local artists. By sharing their narratives, we create a richer tapestry of culture and inspiration.</p>



          <p>At <strong>ProduceMe</strong>, we envision a world where the arts are celebrated, where local artists are treasured gems, and where creative expression thrives. We invite you to join us on this inspiring journey of discovery, appreciation, and empowerment."</p>
        {!user ? <button href="#section2" className="btn" id="btn-1" onClick={changePage}>Get Connected</button> : <></>}
        </div>
      </section>
      <section className="section" id="section2">
        <div className="section-content">
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2023 ProduceMe</p>
      </footer>
    </div>
  );
}

export default LandingPage;