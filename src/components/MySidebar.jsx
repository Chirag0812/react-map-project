import React from 'react'
import { BiTrendingUp, BiCrown, BiBarChartAlt2 } from "react-icons/bi";
import UserData from "./SidebarUserData";
import DataComp from "./SidebarData";

// Sidebar data

const MySidebar = () => {
    return (
        <div className="sidebar">
            <div className="mydiv">
                <p className="detail">
                    All Users <span>DETAILS</span>
                </p>
                <p className="totaluser">2,431,340</p>
            </div>

            {/* DataComp components */}
            <div className="DataComp">
                <DataComp
                    title="Total Earning" c
                    bgc="#8676FF"
                    numb="540,549"
                    icon={
                        <BiTrendingUp size="25" color="white"
                            style={{ border: "2px solid white", borderRadius: "50%" }}
                        />
                    }
                />
                <DataComp
                    title="Sales"
                    bgc="#66C8FF"
                    numb="1,205,677"
                    icon={<BiCrown size="25" color="white" />} />

                <DataComp
                    title="Purchase"
                    bgc="#FF9066"
                    numb="48,430,039"
                    icon={<BiBarChartAlt2 size="25" color="white" />} />
            </div>

            {/* Active and newusers -- UserData components*/}
            <div className="percent-circle">
                <UserData num="92,980" color="blue" user="Active Users" percentage="27%" />
                <UserData num="22,652" color="green" user="New Users" percentage="67%" />
            </div>

        </div>
    );
};

export default MySidebar;
