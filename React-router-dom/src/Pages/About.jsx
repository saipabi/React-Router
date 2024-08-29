import PropTypes from 'prop-types';

const Datas = [{
  id: 1, image : 'public/fullstack1.webp', name: "7 Unique Web Development Project",
  head:"By Isha Sharma", date:"23 Aug 2024", time:"6 Min Read"
},{
  id:2, image: 'public/fullstack2.webp', name: "Best full stack development project ideas in 2024",
  head:"Jaishree tromer", date:"16 April 2024", time:"5 Min Read"
},
{
  id:2, image: 'public/fullstack3.webp', name: "10 Best HTML and CSS project for Beginners",
  head:"Tusha vinocha", date:"23 Aug 2024", time:"4 Min Read"
},
{
  id:2, image: 'public/fullstack4.webp', name: "How long would take to be a full stack developer",
  head:"By Isha Sharma", date:"23 Oct2024", time:"4 Min Read"
},
{
  id:2, image: 'public/fullstack5.webp', name: "10 Best React Project ideas for Beginners ",
  head:"Tushar vinocha", date:"13 Aug 2024", time:"6 Min Read"
},
{
  id:2, image: 'public/fullstack6.webp', name: "10 Best Management System for Software Developer",
  head:"Srinithi Shankar", date:"10 Dec 2024", time:"5Min Read"
},
{
  id:2, image: 'public/fullstack7.jpg', name: "How does apache work",
  head:"Tushar vinocha", date:"18 Nov 2024", time:"4 Min Read"
},
{
  id:2, image: 'public/fullstack8.jpg', name: "10 full stack developer framework in 2024",
  head:"By Isha Sharma", date:"11 Feb 2024", time:"3Min Read"
},
]

const Home = (props)=> {
  return(
    <>    <div className='container'>
      <img src={props.image} alt='user' className='first-image'/>
      <div className='text-1'>     
         <p>
          {props.name}
      </p>
      <h6 className='h6'>{props.head}</h6></div>
      <div  className='span'>
      <span>{props.date}</span>
      <span>{props.time}</span></div>


    </div>
    </>

  )
}


const FullStackDevelopment = () => {
  return (
    <>
<div className='cyber-box'>
    {Datas.map((item, index)=>(
      <Home key={index} image={item.image}
      name={item.name} head={item.head} date={item.date} time={item.time}/>
    ))}
    
    {/* <Home image={'cybersecurity/cyber1.webp'} name="Top 10 High Paying Non-
      Coding Jobs in Data
      Science in 2024" head="By Isha Sharma" date="23 Aug 2024" time="6 Min Read"/> */}

</div>
    </>
    
  )
}

Home.propTypes={
  image :  PropTypes.string,
  name : PropTypes.string,
  head: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.string,

}


export default FullStackDevelopment;