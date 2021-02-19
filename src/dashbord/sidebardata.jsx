import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';


export const sidebardata = [
   
    {
        title:"Certificate",
        icon:<CardMembershipIcon />,
        link:"/certificate"
    },
    {
        title:"Gallery",
        icon:<ImageIcon />,
        link:"/gallery"
    },
    {
        title:"Donate",
        icon:<CardGiftcardIcon />,
        link:"/donate"
    },
    {
        title:"Volunteer",
        icon:<ThumbsUpDownIcon />,
        link:"/volunteer"
    },
    {
        title:"FAQ",
        icon:<LiveHelpIcon />,
        link:"/faq"
    },
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/profile"
    },
    
]