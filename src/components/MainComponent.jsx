import MySidebar from './MySidebar'
import React from 'react'
import  Barch  from './MyBarChart'
import Footer from './Footer';
import WorldM from './Worldmap'

//  Main section 
const MainComp = () => {
 
  return (
    <>
    <div className="Main-wrap">
      <MySidebar />
     <WorldM />
     <Barch /> 
     </div> 
     <Footer/> 
    </>
  );
}

export default MainComp
