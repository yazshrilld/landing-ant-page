import React from 'react';
import Header from './../../components/Header';
import Main from './../../components/Main';
import Hero from './../../assets/bgimage.png';
import Footer from './../../components/Footer';


const LandingPageLayout = ({
  heading,
  ...otherProps
}) => {
  return (
    <div className="min-h-full bg-gray-100 font-body">
      <div className="h-screen flex flex-col	">
        <div className="h-full bg-cover bg-center bg-fixed bg-no-repeat" style={{ backgroundImage: `url(${Hero})`, color: '#ffffff' }}>
          <Header />
          
          <Main />


          <div className="z-0 absolute -top-0 -left-0 h-full w-full bg-gray-200 opacity-10" />
        </div>
      </div>

      <div className=" w-full max-w-7xl mx-auto">{otherProps.children}
      </div>
      <Footer />
    </div>
  );
};

LandingPageLayout.defaultProps = {
  heading: '',
};

export default LandingPageLayout;
