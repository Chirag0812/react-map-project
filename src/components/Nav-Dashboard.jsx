import React from 'react';
import Sidedesign from './Sidedesign';
import BubblesGraph from './BubblesGraph';
const Dashboard = () => {

  return (
    
       <div className="content-wrapper dashboard-wrapper">
      <div className="container-wrapper">
      <Sidedesign/>
      <BubblesGraph/>
    </div></div>
  )
}

export default Dashboard
