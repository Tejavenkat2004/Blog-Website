
// import ReceiveMsg from "./ReceiveMsg"; // Import ReceiveMsg component if not already

const About = () => {
  // Inline styles
  const styles = {
    
    contactUs: {
      fontFamily: 'Arial, sans-serif',
      backgroundColor: 'rgba(228, 213, 186, 0.19)',
      padding: '20px',
      maxWidth: '600px',
      margin: '0 auto',
      marginTop: '150px',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(7, 2, 2, 0.841)',
      
    },
    profileBox: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    profileImg: {
      borderRadius: '50%',
      width: '100px',
      height: '100px',
      objectFit: 'cover',
      border: '2px solid #00020311',
    },
    info: {
      flex: 1,
    
    },
    heading: {
      marginBottom: '10px',
      fontSize: '24px',
      color: '#333',
    },
    paragraph: {
      margin: '5px 0',
      fontSize: '16px',
      color: 'black',
    },
    link: {
      color: '#d61111',
      textDecoration: 'none',
    },
    linkHover: {
      textDecoration: 'underline',
    },
    icon: {
      marginRight: '8px',
      color: '#05090c',
    },
    socialLinks: {
      marginTop: '15px',
      color: '#05090c',
    },
    socialLink: {
      marginRight: '15px',
      fontSize: '24px',
      color: '#020304',
      textDecoration: 'none',
    },
    socialLinkHover: {
      color: '#0056b3',
    },
    copyright: {
      textAlign: 'center',
      marginTop: '20px',
      fontSize: '14px',
      color: '#260425',
    },
  };

  return (
    <div style={styles.maindiv}>
      <div style={styles.contactUs}>
        <div style={styles.profileBox}>
          <img
            style={styles.profileImg}
            src="https://www.orionexpresslogistics.com/wp-content/uploads/2022/08/Man-formal-icon.jpg"
            alt="Profile Picture"
          />
          <div style={styles.info}>
            <h2 style={styles.heading}>
              <span style={styles.icon}>
                <i className="fas fa-user"></i>
              </span>
              Name: User
            </h2>
            <p style={styles.paragraph}>
              <span style={styles.icon}>
                <i className="fas fa-envelope"></i>
              </span>
              Email: <a href="" style={styles.link}>name@gmail.com</a>
            </p>
            <p style={styles.paragraph}>
              <span style={styles.icon}>
                <i className="fas fa-phone"></i>
              </span>
              Contact Us: <a href="tel:9875641230" style={styles.link}>9875641230</a>
            </p>
            <p style={styles.paragraph}>
              <span style={styles.icon}>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              Location: Hyderabad, Telangana
            </p>
            <div style={styles.socialLinks}>
              <a href="" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <i className="fab fa-telegram"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <i className="fab fa-youtube"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <i className="fab fa-github"></i>
              </a>
              <a href="" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>    
        </div>
        <div style={styles.copyright}>&copy; 2024 All rights reserved by User</div>
      </div> 
      
    </div>
  );
};

export default About;
