import { Avatar, Box, Button, ButtonGroup, Fab, IconButton, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled/';

import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';
import Image from '@mui/icons-material/Image';
import VideoCameraBack from '@mui/icons-material/VideoCameraBack';
import PersonAdd from '@mui/icons-material/PersonAdd';
import DateRange from '@mui/icons-material/DateRange';

const StyleModal = styled(Modal)({
  display:"flex",
  justifyContent:'center',
  alignItems:'center',
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems:'center',
  gap:"8px",
})

const MoreOption = styled(Box)({
  display:"flex",
  gap:"12px",
  marginBottom:"15px",
})

function Add() {
  const [open, setOpen] = useState(false)
  return (
    <>
        <Tooltip 
        title="Add" 
        onClick={e=>setOpen(true)}
        sx={{
            position:'fixed', 
            bottom:'20px', 
            left: { xs: "calc(50% - 25px)", md:30}}}> 
        <Fab color="primary" aria-label="add">
            <AddIcon />
        </Fab>
        

        </Tooltip>
        <StyleModal
          open={open}
          onClose={e=>{setOpen(false);console.log(open)}}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box 
            width={400} 
            height={280} 
            bgcolor="background.default" 
            color="text.primary" 
            p={3} 
            borderRadius={3}>
            <Typography id="modal-modal-title" variant="h6" component="h2" textAlign="center">
              Create Your Post
            </Typography>
            <UserBox>
              <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/7536592/pexels-photo-7536592.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
              <Typography variant="h6" component="h2" fontWeight={300}>
                Shayan Affandi
              </Typography>
            </UserBox>
            <TextField
            sx={{
              margin:'15px 0'
            }}
            multiline
            rows={3}
            fullWidth={true}
            label="What's in you mind?" 
            variant="filled" 
            color="primary" 
            focused />
            <MoreOption>
              <SentimentVerySatisfied color='primary'/>
              <Image color='secondary'/>
              <VideoCameraBack color='success'/>
              <PersonAdd color='error'/>
            </MoreOption>
            <ButtonGroup
              fullWidth 
              variant="contained" 
              aria-label="outlined primary button group">
              <Button>Post</Button>
              <Button
              sx={{
                width:'20%'
              }}><DateRange/></Button>
            </ButtonGroup>
          </Box>
        </StyleModal>
    </>
  )
}

export default Add