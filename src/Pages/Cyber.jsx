import PropTypes from 'prop-types';

const Datas = [{
  id: 1, image : 'cybersecurity/cyber1.webp', name: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
  head:"By Isha Sharma", date:"23 Aug 2024", time:"6 Min Read"
},{
  id:2, image: 'cybersecurity/cyber2.webp', name: "Non-coding jobs in CyberSecurity: A comprehensive guide",
  head:"Jaishree tromer", date:"16 April 2024", time:"5 Min Read"
},
{
  id:3, image: 'cybersecurity/cyber3.gif', name: "What is the CyberSecurity, Important & Uses the growing challenges in 2024",
  head:"Tusha vinocha", date:"23 Aug 2024", time:"4 Min Read"
},
{
  id:4, image: 'cybersecurity/cyber4.webp', name: "8 different types of CyberSecurity and Threats",
  head:"By Isha Sharma", date:"23 Oct2024", time:"4 Min Read"
},
{
  id:5, image: 'cybersecurity/cyber5.webp', name: "What is Hacking Types of Hacking",
  head:"Tushar vinocha", date:"13 Aug 2024", time:"6 Min Read"
},
{
  id:6, image: 'cybersecurity/cyber6.webp', name: "The ultimate cyber security Roadmap for Beginners",
  head:"Srinithi Shankar", date:"10 Dec 2024", time:"5Min Read"
},
{
  id:7, image: 'cybersecurity/cyber7.webp', name: "Is coding required for cyber security",
  head:"Tushar vinocha", date:"18 Nov 2024", time:"4 Min Read"
},
{
  id:8, image: 'cybersecurity/cyber8.webp', name: "The cyber security surge:5 Must-Have CyberSecurity Certification",
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


const Cyber = () => {
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


export default Cyber;