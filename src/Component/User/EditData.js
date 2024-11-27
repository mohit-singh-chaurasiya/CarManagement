import React, { useState } from 'react'
import { Avatar, Button, Grid2, Input, MenuItem, Select, TextField } from '@mui/material'
import list from "../../Component/assets/list.png"
import { Grid } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
export default function EditData() {


    const [title, setTitle] = useState('')
    const [color, setColor] = useState('')
    const [fuel, setFuel] = useState('')
    const [picture, setPicture] = useState('')
    const [company, setCompany] = useState('')
// console.log("DDASDA",displayTitle)
    var navigate = useNavigate()

//************[  Without DataBase Single data Store in LocalStorage  ]***** */
    const handleSubmit = async () => {

        localStorage.setItem('title', title)
        localStorage.setItem('color', color)
        localStorage.setItem('fuel', fuel)
        localStorage.setItem('company', company)
        // localStorage.setItem('picture', picture)

        navigate('/home/data')

    };


    return (
        <div style={{ display: 'flex ', justifyContent: 'center', alignItems: 'center', background: 'transparent', height: '100vh' }}>
            <div style={{ opacity: 10, width: 500, padding: 8, lineHeight: 2, background: '5px blur', boxShadow: "2px 10px 12px 12px  grey", borderRadius: 10 }}>
                <Grid2 xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} >
                    <Grid2 xs={6}>
                        <div style={{ fontSize: 40, fontWeight: "bolder", fontFamily: "-moz-initial", textTransform: 'underline', color: '#30336b' }}>Add Data</div>

                    </Grid2>
                    <Grid2 xs={6}>
                        <img src={list} style={{ width: 30, height: 30, cursor: 'pointer' }} onClick={() => navigate('/home/list')} />
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
                        label=" company"
                        fullWidth
                        margin="normal"
                        required

                        id="company"

                        name="company"
                        value={company}
                        // autoComplete="email"
                        autoFocus
                        onChange={(e) => setCompany(e.target.value)} />

                    {/* <Grid2 xs={12} style={{ display: 'flex', alignItems: 'center' }} >
                        <Grid2 xs={6}>
                            <Input type='file' value={picture} />
                        </Grid2>
                        <Grid2 xs={6} style={{ width: '80%', display: 'flex', justifyContent: 'center' }} fullWidth >
                            <Avatar onChange={(e) => setPicture(e.target.value)} />
                        </Grid2>
                    </Grid2> */}
                    <Grid2 xs={12}>
                        <Button onClick={handleSubmit} variant='contained' fullWidth>Submit</Button>
                        <p>Show manual fill Data here...</p>
                    </Grid2>
                </Grid2>


            </div>
        </div>
    )
}
