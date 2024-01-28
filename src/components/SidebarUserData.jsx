import React from 'react'

const UserData = (props) => {
    const { num, color, user, percentage } = props;
    return (
        // currently active and new users 
        <div className="active">

            {/* outer div used to show outer circle */}
            <div className="outer-circle" style={{ background: `conic-gradient(${color} ${percentage},lightgray 25%)` }}>

                {/* inner div used to show % value */}
                <div style={{ color: "#383874", fontWeight: "400" }}>
                    {percentage}
                </div>

            </div>
            {/* %val data */}
            <p style={{ paddingLeft: "1rem", color: "#383874", fontWeight: "400" }}>
                <span>{num}</span>
                <br />
                <span>{user}</span>
            </p>
        </div>
    );
}

export default UserData
