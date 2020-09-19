import React from 'react';
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import WebIcon from "@material-ui/icons/Web";
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SchoolIcon from '@material-ui/icons/School';
import { Avatar, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from '../js/StateProvider';
import ApartmentIcon from '@material-ui/icons/Apartment';

function Header() {

    const [{user},dispatch]=useStateValue();
    
    const red_tec = () => {
        var a = document.createElement('a');
        a.target='_blank';
        a.href='http://alumnostec.itesm.mx/';
        a.click();
    };

    return <div className = "header">
            <div className = "header__left" >
                <img src = "https://scontent.faqp2-3.fna.fbcdn.net/v/t1.15752-9/119516377_694918081108477_7111465269959870221_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=wglo-Lt9RsYAX-pNMHn&_nc_ht=scontent.faqp2-3.fna&oh=7e1ff7f427ffa0b64f0c410318005297&oe=5F8604B7" alt = "" />
            </div>
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search SAITC" type="text" />
            </div>
            <div className = "header__center" >
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <WebIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <BusinessCenterIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SchoolIcon fontSize="large" />
                </div>
            </div>
            <div className = "header__right" >
                <div className="header__info">
                    <IconButton onClick={red_tec}>
                        <h4>MiTec</h4>
                        <ApartmentIcon />
                    </IconButton>
                    <IconButton>
                        <ForumIcon />
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon />
                    </IconButton>
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </div>
            </div>
    </div>
    
}

export default Header