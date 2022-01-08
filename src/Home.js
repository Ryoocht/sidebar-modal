import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';
import { AppContext, useGlobalContext } from './context';

const Home = () => {
    // const data = useContext(AppContext);
    // const globalData = useGlobalContext();
    // console.log(data);
    // console.log(globalData);
    const { openSidebar, openModal } = useGlobalContext();

    return(
        <main>
            <button className="sidebar-toggle" onClick={openSidebar}>
            <FaBars />
            </button>
            <button className="btn" onClick={openModal}>
                show modal
            </button>
        </main>
    );
}

export default Home