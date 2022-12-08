import { useTheme } from '@emotion/react'
import { Box } from '@mui/system';
import React from 'react'
import 'react-pro-sidebar/dist/css/styles.css'
const sidebar = () => {
  const theme=useTheme();
  const colors=tokens(theme.palette.mode)
  const [isCollapsed,setIsCollapsed]=useState(false)
  const [selected,setSelected]=useState("Dashboard")

  return (
    <Box>
      sx={{
        "& .pro-sidebar-inner":{
          background:`${colors.primary[500]} !important`
        },
        "& .pro-icon-wrapper":{
          backgroundColor:"transparent !important"
        },
        "& .pro-inner-item":{
          color:"#868dfb !important"
        },
        "& .pro-inner-item:hover":{
          color:"#868dfb !important"
        }
      }}
    </Box>
  )
}

export default sidebar