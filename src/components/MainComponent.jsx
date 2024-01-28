import MySidebar from './MySidebar'
import React from 'react'
import Barch from './MyBarChart'
import Footer from './Footer';
import WMap from './Map-Files/W-Map';

//  Main section 
const MainComp = () => {

  return (
    <>
      <div className="Main-wrap">
        <MySidebar />
        <div className="WMap-style">
          <WMap /> 
        </div>
        <Barch />
      </div>
      <Footer />
    </>
  );
}

export default MainComp
