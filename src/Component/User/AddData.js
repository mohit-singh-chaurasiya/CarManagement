import React, { useState } from 'react'
import { Avatar, Button, Grid2, Input, MenuItem, Select, TextField } from '@mui/material'
import list from "../../Component/assets/list.png"
import { Grid } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
export default function AddData() {

    const [tag, setTag] = useState("")
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [color,setColor]=useState('')
    const [fuel,setFuel]=useState('')
    const [mode,setMode]=useState('')
    const [picture, setPicture] = useState('')

    var navigate=useNavigate()


    const handleSubmit = () => {
        
         
    }


    return (
        <div style={{ display: 'flex ', justifyContent: 'center', alignItems: 'center', background: 'transparent', height: '100vh' }}>
            <div style={{ opacity: 10, width: 500, padding: 8, lineHeight: 2, background: '5px blur' , boxShadow: "2px -10px 2px 2px  grey" ,borderRadius:10 }}>
               <Grid2 xs={12} style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
                <Grid2 xs={6}>
                <div style={{fontSize:40,fontWeight:"bolder",fontFamily:"-moz-initial",textTransform:'underline',color:'#30336b'}}>Add Data</div>

                </Grid2>
                <Grid2 xs={6}>
                   <img src={list} style={{width:30,height:30,cursor:'pointer'}} onClick={()=>navigate('/home/list')}  />
                </Grid2>
               </Grid2>

                <Grid2 xs={12}>
                    <TextField label=" title" fullWidth margin="normal"
                    required
                    id="title"
                    name="email"
                    value={title}
                    autoComplete="title"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)} />
                    <TextField
                        label=" description"
                        fullWidth
                        margin="normal"
                        required

                        id="description"

                        name="description"
                        value={description}
                        // autoComplete="email"
                        autoFocus
                        onChange={(e) => setDescription(e.target.value)} />
                    <TextField
                        label=" tag"
                        fullWidth
                        margin="normal"
                        required

                        id="tag"

                        name="tag"
                        value={tag}
                        // autoComplete="email"
                        autoFocus
                        onChange={(e) => setTag(e.target.value)} />
                    <TextField
                        label=" color"
                        fullWidth
                        margin="normal"
                        required

                        id="color"

                        name="color"
                        value={color}
                        // autoComplete="email"
                        autoFocus
                        onChange={(e) => setColor(e.target.value)} />
                    <TextField
                        label=" fuel"
                        fullWidth
                        margin="normal"
                        required

                        id="fuel"

                        name="fuel"
                        value={fuel}
                        // autoComplete="email"
                        autoFocus
                        onChange={(e) => setFuel(e.target.value)} />
                       
                    <TextField
                        label=" mode"
                        fullWidth
                        margin="normal"
                        required

                        id="mode"

                        name="mode"
                        value={mode}
                        // autoComplete="email"
                        autoFocus
                        onChange={(e) => setMode(e.target.value)} />
                       

                    <Grid2 xs={12} style={{ display: 'flex', alignItems: 'center' }} >
                        <Grid2 xs={6}>
                            <Input type='file' value={picture} />
                        </Grid2>
                        <Grid2 xs={6} style={{width:'80%',display:'flex',justifyContent:'center'}} fullWidth >
                            <Avatar onChange={(e) => setPicture(e.target.value)} />
                        </Grid2>
                    </Grid2>
                    <Grid2 xs={12}>
                        <Button onClick={handleSubmit} variant='contained'  fullWidth>Submit</Button>
                    </Grid2>
                </Grid2>


            </div>
        </div>
    )
}
