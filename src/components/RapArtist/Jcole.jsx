import React, { useContext, useState } from "react";
import Rap4 from '../Album-Covers/Rap-Albums/4.webp'
import Born from '../Album-Covers/Rap-Albums/Bornsinner.jpg'
import Forest from '../Album-Covers/Rap-Albums/foresthill.webp'
import Kod from '../Album-Covers/Rap-Albums/KOD.webp'
import Tos from '../Album-Covers/Rap-Albums/tos.webp'
import '../Album-Covers/Rap-Albums/MC.css'
import { MusicData } from "../../App";
import Button from "react-bootstrap/esm/Button";
const Jcole = () => {
const musicinfo = useContext(MusicData)
const [record, setRecord] = useState()
  return (
    <div>
      <h1>Jcole</h1>
      <p>Summary</p>
      In 2013, rapper J. Cole released his second studio album, Born Sinner, and backed it with his What Dreams May Come tour. Like 2011's Cole World: The Sideline Story, his debut album, Born Sinner hit No. 1 on the U.S. album chart. Cole, whose full name is Jermaine Cole, first got wide recognition for his 2007 mixtape The Come Up, which caught the ear of Jay-Z and eventually led to Cole's signing by Roc Nation. Cole -- who was born on an Army base in Germany but was raised in North Carolina -- has since released a string of hit singles including "Work Out," "Power Trip," and "Nobody's Perfect." He built his loyal fan base by releasing a string of sought-after mixtapes and EPs, and also by being one of relatively few hip hop artists who tour regularly. All of the stage time has made Cole a confident performer who makes putting on a good show a priority, which keeps fans buying tickets again and again
      <h3>DISCOGRAPHY</h3>

      <p>Info:{musicinfo}</p>
      <p>Record:{record}</p>
      <div className="container">

      <div>
        
      <h5 className="title">The Off-Season</h5>
      <Button />
      
      <p>Price</p>
      </div>
      <img className="tos" src={Tos} alt="" />



</div>
      <h5>KOD</h5>
      <img className="od" src={Kod} alt="" />
      <h5>4 Your Eyez Only</h5>
      <img className = "eyez"src={Rap4} alt="" />
      <h5>Forest hills drive</h5>
      <img className ="hill" src={Forest} alt="" />
      
      
      
      <h5>Born Sinner</h5>
      <p>Info:</p>
      <p>Title:</p>
      <img className="sin" src={Born} alt="" />
    </div>
  );
};

export default Jcole;
