import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Logos from "./image/Logos.png"

import {
    
    FaArrowUp,
    FaRegBell,
    FaUser,
    FaAngleDoubleRight,
    FaBars,
    FaUserTie,
    FaUserCheck,
    FaSortAmountUpAlt,
    FaRegistered,
    FaSearchPlus,
    FaEthereum,
    FaSitemap,
    FaUserAltSlash,
    FaUserMinus,
    FaClipboard,
    FaChalkboardTeacher,
    FaAssistiveListeningSystems,
    FaBuffer,
    FaHubspot,
    FaScribd,
    FaAmericanSignLanguageInterpreting,
    FaRegCaretSquareRight,
    FaUserShield,
    FaVectorSquare,
    FaVideo,
    FaVideoSlash,

  
  } from "react-icons/fa";


  const routes = [
  
    {
      path: "/",
      name: "Dashboard",
      icon: <FaUser />,
    },
    {
      path: "/myaccount",
      name: "My Account",
      icon: <FaUser />,
    },
    {
      path: "/toperformer",
      name: "Top Performer",
      icon: <FaArrowUp />,
    },
    {
      path: "/humanresource",
      name: "Human Resource",
      icon: <FaUserTie/>,
    },
    {
      path: "/myclient",
      name: "My Client",
      icon: <FaUserCheck/>,
    },
    {
      path: "/newchart",
      name: "New Chart",
      icon: <FaSortAmountUpAlt />,
    },
    {
      path: "/unregistered",
      name: "Un Regestered",
      icon: <FaRegistered />,
    },
    {
      path: "/enquires",
      name: "Enquires",
      icon: <FaSearchPlus />,
    },
 
    {
      path: "/Activation",
      name: "Activation",
      icon: <FaEthereum/>,
    },
    {
      path: "/service",
      name: "Service",
      icon: <FaSitemap />,
    },
    {
      path: "/others",
      name: "Others",
      icon: <FaUserAltSlash />,
    },
    {
      path: "/previousclient",
      name: "Previous Client",
      icon: <FaUserMinus />,
    },
    {
      path: "/reports",
      name: "Reports",
      icon: <FaClipboard />,
    },
    {
      path: "/previousstudent",
      name: "Previous Students",
      icon: <FaChalkboardTeacher />,
    },
    {
      path: "/training",
      name: "Training",
      icon: <FaAssistiveListeningSystems />,
    },
    {
      path: "/stats",
      name: "Stats",
      icon: <FaBuffer/>,
    },
    {
      path: "/marketing",
      name: "Marketing",
      icon: <FaHubspot/>,
    },
    {
      path: "/operations",
      name: "Operations",
      icon: <FaScribd/>,
    },
    {
      path: "/renewal",
      name: "Renewal",
      icon: <FaAmericanSignLanguageInterpreting />,
    },
    {
      path: "/vediocourse",
      name: "Vedio Course",
      icon: <FaRegCaretSquareRight/>,
    },
    {
      path: "/vcnewsclient",
      name: "Vc News Client",
      icon: <FaUserShield />,
    },
    {
      path: "/vctraining",
      name: "Vc Training",
      icon: <FaVectorSquare />,
    },
    {
      path: "/vcmyclients",
      name: "Vc My Clients",
      icon: <FaVideo />,
    },
    {
      path: "/vcothers",
      name: "Vc others",
      icon: <FaVideoSlash />,
    },
    {
      path: "/notification",
      name: "Notifications",
      icon: <FaRegBell />,
    },
    {
      path: "/account",
      name: "Accounts",
      icon: <FaUser />,
    },
    {
      path: "/login",
      name: "Logout",
      icon: <FaAngleDoubleRight />,
    },
  ];
  

function Mainpart({children}) {
    const [isopen, setOpen] = useState(false);
    const toggle = () => setOpen(!isopen);

 
    
      const showAnimation = {
        hidden: {
          width: 0,
          opacity: 0,
          transition: {
            duration: 0.5,
          },
        },
        show: {
          opacity: 1,
          width: "auto",
          transition: {
            duration: 0.5,
          },
        },
      };

  return (
    <div>
      <div className="main-container">
        <motion.div
          animate={{
            width: isopen ? "200px" : "50px",
            transition: {
              duration: 0.5,
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <div className="top-section">
            <AnimatePresence>
              {isopen && (
                <div className="logos">
                  <motion.img src={Logos} style={{ width: "30px" }} />
                  <motion.h1
                    variants={showAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="logo"
                  >
                    MarksChamp
                  </motion.h1>
                </div>
              )}
             </AnimatePresence>

              <div className="bars" on onClick={toggle}>
              <FaBars />
            </div>
          </div>
        
        <section className="routes">
          {routes.map((route) => (
            <>
              <NavLink style={{color:"white",textDecoration:"none"}} to={route.path} key={route.name} className="link">
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isopen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="link_text"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            </>
          ))}
        </section>
        </motion.div>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default Mainpart;
