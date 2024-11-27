import React, { useEffect, useState } from 'react'
import NewsItem from "./NewsItem"
import axios from 'axios';

import MaterialTable from "material-table"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from "../assets/h.jpeg"
import { Grid } from "@material-ui/core";
import { Grid2 } from "@mui/material";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { AppBar, Box, Toolbar, IconButton, } from "@mui/material";
import CardActionArea from '@mui/material/CardActionArea';
export default function NewsBoard() {
  const navigate = useNavigate()
  const [articles, setArticles] = useState([])
  console.log(articles, "<>?<>?<>?")
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null);     // 




  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            country: 'us',
            apiKey: '505ac3c68def4e87a94f9922857bde77',
          },
        });
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };
    fetchNews();
  }, []);


  return (
    <div  >
      <h2 className='text-center ' style={{ background: "#ced6e0" }}>Latest<span className='badge bg-danger'>News</span></h2>
      <div style={{ height: "100vh", display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 15 }}>

        {articles?.map((article, index) => (
          
           <div style={{ gap: 10 }} >
                            {article.urlToImage ?(

            <Card elevation={3} sx={{ maxWidth: 325, boxShadow: "2px -10px 21px 2px  grey", aspectRatio: 2 / 2.5,padding:2 }}>
              {/* <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10 }} ><DeleteForeverIcon style={{ color: 'red', width: 25, height: 25, cursor: 'pointer' }} /></div> */}
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  aspectRatio="3/3"
                  src={article.urlToImage}


                />
             
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {article.author}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {article.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="medium" color="primary" variant="contained" style={{ textTransform: 'none', background: 'marine', color: "#000" }} onClick={() => navigate('/home/info')} >
                  View More...
                </Button>
                <Button size="medium" color="primary" variant="contained" style={{ textTransform: 'none', background: 'marine', color: "#000" }} onClick={() => navigate('/home/update')} >
                  Update
                </Button>
              </CardActions>
            </Card>
               ):<div></div>}
          </div>


     )
        )}

      </div>
    </div>
  )
}
