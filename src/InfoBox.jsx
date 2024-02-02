import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1575214997383-a3592741c334?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://media.istockphoto.com/id/1312596921/photo/summer-noon-sun.jpg?s=2048x2048&w=is&k=20&c=nC_6bQjbz1u1tV_tWA57IM9XlVOVPWoFok987tIMa40=";
    const COLD_URL = "https://media.istockphoto.com/id/477839825/photo/cold-weather-ahead-road-warning-sign.jpg?s=2048x2048&w=is&k=20&c=S1DXm4_4zwA-yqfncOOk-qAfBWVektEr_w9WMG0VO6k=";
    const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=2048x2048&w=is&k=20&c=oCeUC-IkL0PeNBE1KwDUHBWw692n3T4T6I-usYtX_Qc=";
    
    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 70 ? RAIN_URL : info.temp > 15 ? HOT_URL :COLD_URL}  title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 70 ?  <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> :  <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
       <div>Temperature = {info.temp}&deg;C</div>
       <div>Humidity = {info.humidity}</div>
       <p>Min Temp = {info.tempMin}&deg;C</p>
       <p>Max Temp = {info.tempMax}&deg;C</p>
       <p>The weather can be described as <b> {info.weather}</b> and feels like  {info.feelslike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
        </div>
    )
}