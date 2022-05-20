import React, { useState } from 'react'
import { AppBar, styled, ThemeProvider, Toolbar, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem  } from '@mui/material'
import Groups from '@mui/icons-material/Groups';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:'space-between',
})

const Search = styled(Box)( ({ theme }) => ({
  backgroundColor: 'white',
  padding:"0 20px",
  borderRadius: theme.shape.borderRadius,
  width:"40%",
})) 

const Icons = styled(Box)( ({theme}) => ({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up('sm')] : {
    display:"flex",
  }
}))

const UserMenu = styled(Box)(({theme})=> ({
  display:"flex",
  alignItems:"center",
  gap:"5px",
  [theme.breakpoints.up('sm')] : {
    display:"none",
  }
}))

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar> 
        <Typography 
          variant='h6'
          sx={{
            display: {xs:'none', sm:'block'}
          }}>
          Shanmek Media
        </Typography>
        <Groups 
          sx={{
            display: {xs:'block', sm:'none'}
          }}/>
        <Search>
          <InputBase placeholder='Search...'/>
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar 
            onClick={e=>setOpen(true)}
            sx={{
              width:"30px",
              height:"30px",
            }}
            alt="Travis Howard" 
            src="https://images.pexels.com/photos/8453599/pexels-photo-8453599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </Icons>
          <UserMenu>
            <Avatar 
              onClick={e=>setOpen(true)}
              sx={{
                width:"30px",
                height:"30px",
              }}
              alt="Travis Howard" 
              src="https://images.pexels.com/photos/8453599/pexels-photo-8453599.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
            <Typography variant='span'>John</Typography>
          </UserMenu>
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={e=>setOpen(false)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
          >
            <MenuItem >Profile</MenuItem>
            <MenuItem >My account</MenuItem>
            <MenuItem >Logout</MenuItem>
          </Menu>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar