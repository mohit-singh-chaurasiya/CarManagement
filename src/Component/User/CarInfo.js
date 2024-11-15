import { Card } from '@mui/material';
import ReactCardSlider from 'react-card-slider-component';
export default function CarInfo(){
// a slide object contains the image link, title and function/click event for when a user clicks on a card
 
const slides = [
    {image:"https://picsum.photos/200/300"},
    {image:"https://picsum.photos/600/500"},
    {image:"https://picsum.photos/700/600"},
    {image:"https://picsum.photos/500/400"},
    {image:"https://picsum.photos/200/300"},
    {image:"https://picsum.photos/800/700"},
    {image:"https://picsum.photos/300/400"},
]
return(
    <div style={{padding:15,}} >
              <div style={{fontSize:40,fontWeight:"bolder",fontFamily:"-moz-initial",textTransform:'underline',color:'#30336b',marginBottom:15}}>Car Info</div>

<ReactCardSlider slides={slides}   />
<Card style={{marginTop:15,boxShadow:"2px solid grey",background:"5px blur",fontSize:20,fontWeight:700,fontFamily:"-moz-initial"}} elevation={3}  >
<div>sdfs</div>
<div>sdfs</div>
<div>sdfs</div>
<div>sdfs</div>
 </Card>
</div>
)
}

