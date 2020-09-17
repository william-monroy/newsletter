import React from 'react';
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from "@material-ui/icons/Chat";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SchoolIcon from '@material-ui/icons/School';
import { ExpandMoreOutlined } from "@material-ui/icons";
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{user},dispatch]=useStateValue();

    return <div className="sidebar">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow 
            Icon={HomeIcon}
            title="Inicio"
        />
        <SidebarRow Icon={WebIcon} title="Noticias" />

        <SidebarRow Icon={BusinessCenterIcon} title="Convocatorias de Trabajo" />
        <SidebarRow Icon={ChatIcon} title="Discord" />
        <SidebarRow Icon={SupervisedUserCircleIcon} title="Casas" />
        <SidebarRow Icon={SchoolIcon} title="Cursos" />
        <SidebarRow Icon={ExpandMoreOutlined} title="Mas..." />
    </div>
}

export default Sidebar
