import React from "react";
import menuDrawer from "../../Assets/Menu Drawer.svg";
import './LeftSidePanel.css'

const LeftSidePanel = () => {
    return (
        <div className='left-side-panel-container'>
            <img src={menuDrawer} alt="menu drawer svg" width={256} height={751}/>
        </div>
    );
};

export default LeftSidePanel;
