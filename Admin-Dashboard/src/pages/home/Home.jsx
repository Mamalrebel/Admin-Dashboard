
import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widgets from '../../components/widgets/Widgets';

import "./Home.scss"

const Home = props => {
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                    <Widgets type="user"/>
                    <Widgets type="order"/>
                    <Widgets type="earning"/>
                    <Widgets type="balance"/>
                </div>
                <div className="charts">
                    <Featured />
                    <Chart aspect={2 / 1} title="user spanning last 6 month"/>
                </div>
                <div className="listContainer">
                    <div className="listTitle">Latest Transaction</div>
                    <Table />
                </div>
            </div>
        </div>
    )
}

export default Home ;