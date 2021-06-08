import React from 'react';
import ReactDOM from 'react-dom';
//import './index8.css';
/*import Heading from "./Heading";
import Para from "./Para";
import List from "./List";
import './index10.css';
import App1 from './App1';
import App2 from "./App2";
import myfav, {favpro,myname,mynames} from "./App3";
import * as bsdka from "./App3";
import {add,sub , div ,mult} from "./App4";
import Calc from "./Calc";
import Card from "./Card";
import Sdata from "./Sdata";
import App5 from "./App5";
import App6 from "./App6";
import App7 from "./App7";
import App8 from "./App8";
import App9 from "./App9";
import App10 from "./App10";
import App11 from "./App11";
import App12 from "./App12";
import App13 from "./App13";
import App14 from "./App14";
import App15 from "./App15";
import App16 from "./App16";
import Clock from 'react-digital-clock';
import Countdown from 'react-countdown';*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/*import App17 from './App17';
import App18 from './App18';
import App19 from './App19';
import App20 from './App20';
import App21 from './App21';
import App22 from './App22';
import App23 from './App23';
import App24 from './App24';
import App25 from './App25';
import App26 from './App26';
import App27 from './App27';*/
import App28 from './App28';
import {BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import reactDom from 'react-dom';




ReactDOM.render(
  // [
  //   <h1> Ha Bhai Ha </h1>,
  //   <p>THIK HAI BHAI CHILL</p>
  // ],

  // *******OR WE CAN DO IN THIS WAY********

  // <React.Fragment>
  //   <h1>React is nice</h1>
  //   <p>YES ITS TRUE</p>
  //   <h2>I know bro</h2>
  // </React.Fragment>,
    <>
      <h1>React is nice</h1>
      <p>YES ITS TRUE</p>
      <h2>I know bro</h2>
    </> , 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);


 //*****Challenge 1******//
//   ReactDOM.render(
//    <>
//        <h1>Hritik's Netflix Pick</h1>
//        <p>List of Best 5 Series.</p>
//        <ol type="1">
//            <li>Dark</li>
//            <li>Extra curricular</li>
//            <li>My Holo Love</li>
//            <li>My first-2 love</li>
//            <li>Mr Robot</li>
//        </ol>
//    </>,
//    document.getElementById('root')
//  );-->


//$$$$$$$$$ JS "Expresion" in JSX
/*const Fname = "Hritik";
ReactDOM.render(
  <>
  <h1> My name is {Fname}</h1>
  <p>My favorite number is {6+6}</p>
  <p>My favorite number is {Math.random()}</p>
  </>,
  document.getElementById("root")
);*/

//$$$$$$$$$ ES6 Template Literals in JSX
/*const Fname = "Hritik";
const Lname = "Tembhe";


ReactDOM.render(
  <>
  <h1>{`My name is ${Fname} ${Lname}`}</h1>
  <h1> My name is {Fname +" "+ Lname}</h1>
  <h1> My name is {Fname} {Lname}</h1>
  <p>My favorite number is {8+6}</p>
  <p>My favorite number is {Math.random()}</p>
  </>,
  document.getElementById("root")
);*/


//**********Challenge 2 ********//
/*const fName = "Hritik";
const CurrDate = new Date().toLocaleDateString();
const CurrTime = new Date().toLocaleTimeString();

ReactDOM.render(
  <>
  <h1>{`Hello , My name is ${fName}`}</h1>
  <p>{`Todays date is ${CurrDate}`}</p>
  <p>{`Current Time is ${CurrTime}`}</p>
  </>,
  document.getElementById("root")
);*/


//$$$$$$$$$ JSX Attributes,CSS Styling
//<img /> = self closing tag
const name = "Hritik";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.bing.com/search?q=lorem+ipsum&form=EDGTCT&qs=EP&cvid=218f8cd4faf84db9a340c917ce192141&refig=89010aebc9db45c8d1a076f8e44f9780&cc=US&setlang=en-US&elv=AQj93OAhDTi*HzTv1paQdnh5rKFRRify2HQJWk36L8IEBRl2FwfhkpDyP7sDVUA1QDYT2VcbnWZMSfYaV5D*NLcZ8z%21AI23WPLAT6jcefOZu";

/*ReactDOM.render(
  <>
  <h1 contentEditable="true" className="heading">{`Hello , My name is ${name}`}</h1>
  <div className="img_div">
  <img src={img1} alt="RandomImage"/>
  <img src={img2} alt="RandomImage"/>
  <a href={links} target="_bsdk">
  <img src={img3} alt="RandomImage"/>
  </a>
  </div>
  </>,
  document.getElementById("root")
);*/

//$$$$$$$$$$$ Inline styling $$$$$$$$$//
//Kebab-case -> camelCase
/*const heading = {
  color: 'rgb(255, 194, 82)',
  textAlign: 'center',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  textShadow: '0px 2px 4px rgb(65, 61, 116)',
  margin: '50px 0px',
  fontFamily: '"Josefin Sans", sansSerif',
}
const imag ={
  display: 'flex',
  justifyContent: 'center'
}

ReactDOM.render(
  <>
  <h1 contentEditable="true" style={heading}>{`Hello , My name is ${name}`}</h1>
  <div className="img_div">
  <img src={img1} alt="RandomImage"/>
  <img src={img2} alt="RandomImage"/>
  <a href={links} target="_bsdk">
  <img src={img3} alt="RandomImage"/>
  </a>
  </div>
  </>,
  document.getElementById("root")
)*/

//*@@@@@@@@*MINI PROJECT 1*@@@@@@*//

/*const Heading = {
  textAlign : 'center',
  padding : '15px',
  color : '#f263eb',
  backgroundColor :'#feffab',
  border : 'auto',
  borderRadius : '16px'
}
let currDat = new Date(2020,5,5,22).getHours();
let greeting = '';
const CSSStyle = { };
if(currDat>=1 && currDat<12)
{
  greeting="Good Morning";
  CSSStyle.color = "green";
}
else if(currDat>=12 && currDat<19)
{
  greeting="Good Afternoon";
  CSSStyle.color = "orange";
}
else
{
  greeting="Good Night";
  CSSStyle.color = "Black";
}
ReactDOM.render(
  <>
  <div>
  <h1 style={Heading}>Hello Sir, <span style={CSSStyle}>{greeting}</span></h1>
  </div>
  </>,
  document.getElementById("root")
);*/


//$$$$$$$ React Components $$$$$$$//
/*ReactDOM.render(
  <>
   <Heading></Heading>
   <Heading/>
   <Para/>
   <List/>
  </>,
  document.getElementById("root")
);*/


//$$$$$$$ App React Component $$$$$$$//
/*ReactDOM.render(
  <>
   <App1/>
  </>,
  document.getElementById("root")
);*/



//**********Challenge 3 ********//
/*const Heading = {
  textAlign : 'center',
  padding : '15px',
  color : '#f263eb',
  backgroundColor :'#feffab',
  border : 'auto',
  borderRadius : '16px'
}

ReactDOM.render(
  <App1/>,
  document.getElementById("root")
);*/


//$$$$$$$ React Components $$$$$$$//
/*ReactDOM.render(
  <>
   <Heading></Heading>
   <Heading/>
   <Para/>
   <List/>
  </>,
  document.getElementById("root")
);


//**********Challenge 4 ********/
/*ReactDOM.render(<App2/>,
  document.getElementById("root")
);*/



//$$$$$$$ Import and Export $$$$$$$//
/*ReactDOM.render(
  <>
  <ol>
    <li>CHILL</li>
    <li>{myfav}</li>
    <li>{favpro}</li>
    <li>{myname()}</li>
    <li>{mynames()}</li>
  </ol>
  </>,
  document.getElementById("root")
)//*****OR*****/
/*ReactDOM.render(
  <>
  <ol>
    <li>CHILL</li>
    <li> {bsdka.default}</li>
    <li> {bsdka.favpro}</li>
    <li> {bsdka.myname()}</li>
    <li> {bsdka.mynames()}</li>
  </ol>
  </>,
  document.getElementById("root")
)*/


//**********Challenge 5 ********/
/*ReactDOM.render(
  <Calc/>,
  document.getElementById("root")
);*/


//$$$$$$$ Props in ReactJs $$$$$$$//


/*ReactDOM.render(
  <>
   <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
  <Card 
    imgsrc={Sdata[0].imgsrc}
    title={Sdata[0].title} 
    sname = {Sdata[0].sname} 
    link ={Sdata[0].link} 
  />

  <Card 
    imgsrc={Sdata[1].imgsrc}
    title={Sdata[1].title}
    sname ={Sdata[1].sname}
    link = {Sdata[1].link}
  />
  <Card 
    imgsrc={Sdata[2].imgsrc}
    title={Sdata[2].title} 
    sname = {Sdata[2].sname}
    link = {Sdata[2].link}
  />
  <Card 
    imgsrc={Sdata[3].imgsrc}
    title={Sdata[3].title} 
    sname ={Sdata[3].sname} 
    link ={Sdata[3].link}  
  />
  <Card 
    imgsrc={Sdata[4].imgsrc}
    title={Sdata[4].title} 
    sname ={Sdata[4].sname} 
    link ={Sdata[4].link} 
  />
  </>,
  document.getElementById("root") 
);*/


//$$$$$$$ Maps Method in JSX $$$$$$$//

/*function ncard(val){
   return(
    <Card 
    imgsrc={val.imgsrc}
    title={val.title} 
    sname = {val.sname} 
    link ={val.link} 
  />
  )
}

ReactDOM.render(
  <>
   <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
  
  {Sdata.map(ncard)}
  </>,
  document.getElementById("root") 
);*/


//$$$$$$$ FAT Arrow function method in ES6 $$$$$$$//
/*ReactDOM.render(
  <>
   <h1 className="heading_style">List of Top 5 Netflix Series in 2020</h1>
  
  {Sdata.map((val) => {
    return(
      <Card 
    key = {val.id}  
    imgsrc={val.imgsrc}
    title={val.title} 
    sname = {val.sname} 
    link ={val.link} 
  />
  );
  })}
  </>,
  document.getElementById("root") 
);*/

//$$$$$$$ Using App component $$$$$$//

/*ReactDOM.render(
  <App5/>,
  document.getElementById("root")
);*/


//$$$$$$$ Using If/ else statement $$$$$$//

/*ReactDOM.render(
  <App6/>,
  document.getElementById("root")
);*/

/******** Slot machine game*******/
/*ReactDOM.render(
  <App7/>,
  document.getElementById("root")
);*/

//$$$$$$ HOOKS in ReactJs $$$$$$//
/*ReactDOM.render(
  <App8/>,
  document.getElementById("root")
);*/


//**********Challenge 6 ********//
/*ReactDOM.render(
  <App9/>,
  document.getElementById("root")
);*/


//*********Digital Clock ********//
/*ReactDOM.render(
  <App10/>,
  document.getElementById("root")
);*/


//$$$$$$$$$ Events in Js $$$$$$$$$$//
/*ReactDOM.render(
  <App11/>,
  document.getElementById("root")
);*/


//$$$$$$$$$ Forms in ReactJs $$$$$$$$$$//
/*ReactDOM.render(
  <App12/>,
  document.getElementById("root")
);*/


//$$$$$$$$ Handling complex Multiple Input Forms $$$$$$$$$//
/*ReactDOM.render(
  <App13/>,
  document.getElementById("root")
);*/


//$$$$$$$$ Spread operator InReactJs $$$$$$$$$//
/*ReactDOM.render(
  <App13/>,
  document.getElementById("root")
);
/*CASE 1
const fullname = ['Hritik','Tembhe'];
const biodata = [1 , ...fullname , 26 , 'male'];
console.log(fullname);
console.log(biodata);

/*CASE 2 concatination
var shootingGames =['Call of Duty','Far Cry','Residential Evil'];
var racingGames = ['Meed for speed' , 'Gran Turisomo','Burnout' ];
var games = [...shootingGames,...racingGames]
console.log(games);

/*CASE 3 array destructuring
var [first,...remaining] = shootingGames;
console.log(first);
console.log(remaining);*/

/*CASE 4 Adding Object
const fullname = {
  fname: 'Hritik',
  lname: 'Tembhe',
}

const biodata = {
  id : 1,
  ...fullname,
  age : 26,
  gender : 'Male',
}
console.log(biodata);*/

/*ReactDOM.render(
  <App14/>,
  document.getElementById("root")
)*/


/********** Project TO-DO List *********/

/*ReactDOM.render(
  <App15/>,
  document.getElementById("root")
)*/


//**********Challenge 8 ********//
/*ReactDOM.render(
  <App16/>,
  document.getElementById("root")
)*/


//$$$$$$$ NODE PACKAGE MANAGER(NPM) $$$$$$//
/*ReactDOM.render(
  <>
  <Clock/>
  <Countdown
    date={Date.now() + 10000}
    intervalDelay={0}
    precision={3}
    renderer={props => <div>{props.total}</div>}
  />
  </>,
  document.getElementById("root")
)*/


//$$$$$$$ Bootstrap in ReactJs $$$$$$//
/*ReactDOM.render(
  <React.Fragment>
    <h1 className='text-danger text-capitalize mt-5 text-center'>Welcome to my Chennal</h1>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://unsplash.com/photos/vCYfdVhIZ2Y" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://unsplash.com/photos/ZepBo_-MdWw" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://unsplash.com/photos/X9Za3VjKIgc" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <button className="btn btn-success" >Click ME</button>

    <div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>  
  </React.Fragment>,
  document.getElementById("root")
) */


/*ReactDOM.render(
  <React.Fragment>
    <App17/>
  </React.Fragment>,
  document.getElementById("root")
)*/


//******** PROJECT ********//
/*ReactDOM.render(
  <>
  <App18/>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$ React Context API $$$$$$$//
/*ReactDOM.render(
  <>
  <App19/>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$ useEffect in React $$$$$$$//
/*ReactDOM.render(
  <>
  <App20/>
  </>,
  document.getElementById('root')
);*/


//**********Challenge 8 Changing the title value of website********//
/*ReactDOM.render(
  <>
  <App21/>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$$ API Call to get Pokemon JSON Data from using Axions $$$$$$$$//
/*ReactDOM.render(
  <>
  <App22/>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$$ React Router $$$$$$$$//
/*ReactDOM.render(
  <>
  <BrowserRouter>
   <App23/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$$ React NavBar $$$$$$$$//
/*ReactDOM.render(
  <>
  <BrowserRouter>
   <App24/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$$ React Route Render Method $$$$$$$$//
//%%%%%%%% Difference between route component and route render %%%%%%%%%//
/*ReactDOM.render(
  <>
  <BrowserRouter>
   <App25/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$$ Live image search filter $$$$$$$$//
/*ReactDOM.render(
  <>
  <BrowserRouter>
   <App26/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);*/


//$$$$$$$$ Use of BootStrap 5 $$$$$$$$//
/*ReactDOM.render(
  <>
  <App27/>
  </>,
  document.getElementById('root')
);*/



/********Project Website *******/
ReactDOM.render(
  <>
  <BrowserRouter>
  <App28/>
  </BrowserRouter>
  </>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


//****Use of pure Javascript ****/
// var h1 = document.createElement('h1');
// h1.innerHTML = "Hi bro ha";
// document.getElementById('root').appendChild(h1);