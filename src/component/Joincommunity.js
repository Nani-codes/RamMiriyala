import React from 'react'; // Remove useState import if not used

const JoinCommunity = ({ isVisible, onClose }) => {
  // Ensure the component is only rendered when visible
  if (!isVisible) return null;

  const pageStyles = {
    width: '1240px',
    height: '800px',
    top: '6478px',
    left: '1030px',
    gap: '0px',
    border: '2px solid #FF2121',
    opacity: '1',
    position: 'fixed',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1000',
    boxSizing: 'border-box',
  };

  const containerStyles = {
    width: '921px',
    height: '397px',
    gap: '25px',
    opacity: '1',
    boxSizing: 'border-box',
    padding: '20px',
    backgroundColor: '#000000',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '2px solid #FF2121',
    zIndex: '1',
  };

  const textStyles = {
    fontFamily: 'Manrope, sans-serif',
    fontSize: '32px',
    fontWeight: '500',
    lineHeight: '46.44px',
    letterSpacing: '0.0025em',
    textAlign: 'left',
    color: '#F1D5AE',
    margin: '0',
    marginBottom: '5px',
    whiteSpace: 'nowrap',
    width: '100%',
    boxSizing: 'border-box',
  };

  const inputContainerStyles = {
    width: '840px',
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  };

  const inputStyles = {
    width: '100%',
    height: '80px',
    padding: '10px',
    backgroundColor: '#000000',
    border: '1px solid #F1D5AE',
    borderRadius: '4px',
    color: '#F1D5AE',
    boxSizing: 'border-box',
  };

  const buttonStyles = {
    width: '267px',
    height: '81px',
    padding: '20px 40px',
    gap: '10px',
    border: '2px solid #FF2121',
    backgroundColor: '#000000',
    color: '#FF2121',
    fontSize: '16px',
    fontWeight: 'bold',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  };

  const closeButtonStyles = {
    width: '40px',
    height: '40px',
    position: 'absolute',
    top: '20px',
    right: '20px',
    padding: '6.67px',
    backgroundColor: '#FF2121',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1001',
  };

  return (
    <div style={pageStyles}>
      <button style={closeButtonStyles} onClick={onClose}>
        ×
      </button>
      <div style={containerStyles}>
        <p style={textStyles}>
          Don’t miss a detail... be the first to know what’s happening
        </p>
        <div style={inputContainerStyles}>
          <input type="text" placeholder="Name" style={inputStyles} />
          <input type="text" placeholder="WhatsApp Number" style={inputStyles} />
        </div>
        <button style={buttonStyles}>Become a Member</button>
      </div>
    </div>
  );
};

export default JoinCommunity;
