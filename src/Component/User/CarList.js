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
import { useState } from "react";
import CardActionArea from '@mui/material/CardActionArea';

import Swal from "sweetalert2";
export default function CarList() {
  var navigate = useNavigate()
  const [pattern, setPattern] = useState('')

  var data = [
    {
      title: "Harrier",
      description: "Tata Harrier price for the base model starts at Rs. 14.99 Lakh and the top model price goes upto Rs. 25.89 Lakh (Avg. ex-showroom). Harrier price for 25 ...",
      picture: "https://imgd.aeplcdn.com/664x374/n/cw/ec/139139/harrier-facelift-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80"
    },
    {
      title: "Volkswagen Taigun",
      description: "The Volkswagen Taigun offers a roomy interior, top-notch build, and fun driving. With a smooth ride and two petrol engines to choose from,  ",
      picture: "https://imgd.aeplcdn.com/664x374/n/cw/ec/144689/taigun-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    },
    {
      title: "Maruti Dzire",
      description: "The new Maruti Dzire is a premium compact sedan with a very modern design. It is  loaded with many comfort, safety, and feel-good features ",
      picture: "https://imgd.aeplcdn.com/370x208/n/cw/ec/170173/dzire-2024-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80"
    },
    {
      title: "Mahindra Thar Roxx",
      description: "The Thar Roxx offers a more comfortable and family-oriented option than the regular Thar, with better features and value.  ",
      picture: "https://imgd.aeplcdn.com/664x374/n/cw/ec/124839/thar-roxx-exterior-right-front-three-quarter-24.jpeg?isig=0&q=80"
    },
    {
      title: "MG Hector",
      description: "The MG Hector is a stylish and spacious SUV that offers a comfortable ride with its plush interior.  ",
      picture: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130583/hector-exterior-right-front-three-quarter-75.jpeg?isig=0&q=80"
    },
    {
      title: "Rover Range Rover Velar",
      description: "The Range Rover Velar impresses with its huge SUV build, smashing looks, and solid construction.  ",
      picture: "https://imgd.aeplcdn.com/664x374/n/cw/ec/153319/range-rover-velar-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80"
    }
  ]

  

  const handleDelete=()=>{
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!"
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success"
    //     });
    //   }
    // });
  }


  

  const showData = () => {
    return data.map((item, inde) => {
      return (<div style={{ gap: 10 }} >
        <Card elevation={3} sx={{ maxWidth: 325, boxShadow: "2px -10px 21px 2px  grey",aspectRatio:3/3.7 }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 10 }} ><DeleteForeverIcon style={{color:'red',width:25,height:25,cursor:'pointer'}} onClick={handleDelete()} /></div>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              aspectRatio="3/3"
      src={item.picture}
      

            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.description}
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
      </div>)
    })
  }

  return (
    <div   >
      <div style={{fontSize:40,fontWeight:"bolder",fontFamily:"-moz-initial",textTransform:'underline',color:'#30336b'}}>Car List</div>
       <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center',justifyContent:'center',  gap: 15, boxShadow: "5px 5px 5px 5px solid white"  }} >


        {showData()}
      </div>
    </div>)

}