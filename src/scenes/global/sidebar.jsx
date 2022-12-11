import React, { useState } from 'react'
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import {Link} from 'react-router-dom'
import { tokens } from '../../theme';
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { HomeOutlined, MenuOutlined } from '@mui/icons-material';
// import "react-pro-sidebar/dist/css/styles.css";

const Item = ({ title, to, icon, selected, setSelected}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  return (
    <MenuItem
      active={selected === title}
      style={{
        color:colors.gray[100]
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography> 
      <Link to={to}/>
    </MenuItem>
  )
}
const Sidebars = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [selected, setSelected] = useState("Dashboard")
  
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
    }}
    >
      <Sidebar >
        {/* LOGO AND MENU ICON */}
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlined /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color:colors.gray[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant='h3' color={colors.gray[100]}>
                  ADMINIS
                </Typography>
                <IconButton onClick={()=>setIsCollapsed(!isCollapsed)}>
                  <MenuOutlined/>
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img alt='profile-user' width="100px" height="100px"
                  src='../../assets/user.png' />
                style={{cursor:"pointer",borderRadius:"50%"}}
              </Box>
              <Box textAlign="center">
                <Typography variant='h2'
                  color={colors.gray[100]}
                  fontWeight="bold"
                  sx={{m:"10px 0 0 0"}}>
                  Jakin Irisa
                </Typography>
                <Typography variant='h5' color={colors.greenAccent[500]}>
                    Vp Fancy Admin
                </Typography>
              </Box>
            </Box>
          )}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  )
}

export default Sidebars