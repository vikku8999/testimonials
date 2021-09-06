import {useEffect,useState} from "react";
import Slider from "react-slick";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";
import { Avatar } from "@material-ui/core";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";



const PreviousBtn = (props) => {
  console.log(props);
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIos style={{ color: "gray", fontSize: "45px"  }} />
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIos style={{ color: "gray", fontSize: "45px" }} />
    </div>
  );
};
const Testimonial = () => {

  const [dataArray,setDataArray] = useState([])  

  useEffect(async() => {
    const response = await fetch("https://testimonialapi.toolcarton.com/api");
    var data = await response.json();
    setDataArray(data);
  }, []);

  return (
    <div
      className="testimonial"
      style={{ display: "flex", justifyContent: "center", marginTop: 60 , marginBottom: 60 }}
    >
      <div className="boxx" style={{ height: "30%" , width: "80%", textAlign: "center" }}>
        <h1 style={{ marginBottom: 60 }}>TESTIMONIALS</h1>
        <Slider prevArrow={<PreviousBtn />} nextArrow={<NextBtn />} dots>
        {dataArray?.map((noteItem, index) => {
        return (
          <Card
            id={noteItem.id}
            name={noteItem.name}
            avatar={noteItem.avatar}
            designation={noteItem.designation}
            message={noteItem.message}
            lorem={noteItem.lorem}
            rating={noteItem.rating}
            audio={noteItem.audio}
            location={noteItem.location}
          />
        );
      })}
        </Slider>
      </div>
    </div>
  );
};

const Card = (user) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "gray",
      }}
    >
      <Avatar
        imgProps={{ style: { borderRadius: "50%" } }}
        src={user.avatar}
        style={{
          width: 120,
          height: 120,
          border: "1px solid lightgray",
          padding: 7,
          marginBottom: 20,
        }}
      />
      <p>
        {user.message}
      </p>
      <p>{user.lorem}</p>
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Rating name="read-only" value={user.rating} readOnly />
      </Box>
      <p style={{ fontStyle: "italic", marginTop: 25 }}>
        <span style={{ fontWeight: 500, color: "green" }}>{user.name}</span> ,
        <span>{user.designation}</span>
      </p>
      <p>{user.location}</p>
      <audio controls>
        <source src={user.audio} type="audio/mp3"/>
      </audio>
    </div>
  );
};

export default Testimonial;
