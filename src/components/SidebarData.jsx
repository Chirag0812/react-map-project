import React from 'react'

const DataComp = (props) => {
  const {bgc,title,numb,icon}=props;
  
  return (
    <div className="iconData">
      <div className="myicon" style={{backgroundColor:`${bgc}`}}>
        <div>
          {icon}
        </div>
      </div>
      <div className="usericondata">
        <p className="heading"> {title}</p>
        <p className="numb">{numb}</p>
      </div>
    </div>
  );
};

export default DataComp;
