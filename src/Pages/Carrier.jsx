import PropTypes from 'prop-types';

const Datas = [{
    id: 1, image : 'carrier/carrier1.webp', name: "Is CS degree required for a Full Stacl Developement Career",
    head:"By Isha Sharma", date:"23 Aug 2024", time:"6 Min Read"
  },{
    id:2, image: 'carrier/carrier2.webp', name: "Zenclass review 1, Step Full Stack Development Carrier",
    head:"Jaishree tromer", date:"16 April 2024", time:"5 Min Read"
  },
  {
    id:2, image: 'carrier/carrier3.webp', name: "Is Web development a good carrier?",
    head:"Tusha vinocha", date:"23 Aug 2024", time:"4 Min Read"
  },
  {
    id:2, image: 'carrier/carrier4.webp', name: "Is switch from non-tech to Tech is Challenging?",
    head:"By Isha Sharma", date:"23 Oct2024", time:"4 Min Read"
  },
  {
    id:2, image: 'carrier/carrier5.png', name: "Full Stack development project and ideas",
    head:"Tushar vinocha", date:"13 Aug 2024", time:"6 Min Read"
  },
  {
    id:2, image: 'carrier/carrier6.jpg', name: "Data Science Vs Soft Engineering",
    head:"Srinithi Shankar", date:"10 Dec 2024", time:"5Min Read"
  },
  {
    id:2, image: 'carrier/carrier7.jpg', name: "Carrier Opprtunities in Web development",
    head:"Tushar vinocha", date:"18 Nov 2024", time:"4 Min Read"
  },
  {
    id:2, image: 'carrier/carrier8.webp', name: "The Future scope of machine learning",
    head:"By Isha Sharma", date:"11 Feb 2024", time:"3Min Read"
  },
  {
    id:2, image: 'carrier/carrier9.webp', name: "Learning carrer in the new Era",
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
  
  
  const Carrier= () => {
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
  
  
  export default Carrier;
