import PropTypes from 'prop-types';

const Datas = [{
  id: 1, image : 'datascience/data1.webp', name: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
  head:"By Isha Sharma", date:"23 Aug 2024", time:"6 Min Read"
},{
  id:2, image: 'datascience/data2.webp', name: "Data Science Scope",
  head:"Jaishree tromer", date:"16 April 2024", time:"5 Min Read"
},
{
  id:2, image: 'datascience/data3.webp', name: "Roles and Responsibilities of Data Science",
  head:"Tusha vinocha", date:"23 Aug 2024", time:"4 Min Read"
},
{
  id:2, image: 'datascience/data4.webp', name: "Data Scientist in india",
  head:"By Isha Sharma", date:"23 Oct2024", time:"4 Min Read"
},
{
  id:2, image: 'datascience/data5.webp', name: "How long would take to learn Data Science",
  head:"Tushar vinocha", date:"13 Aug 2024", time:"6 Min Read"
},
{
  id:2, image: 'datascience/data6.webp', name: "AI vs ML vs DataScience",
  head:"Srinithi Shankar", date:"10 Dec 2024", time:"5Min Read"
},
{
  id:2, image: 'datascience/data7.webp', name: "Top 10 Best Data Science course for Beginners",
  head:"Tushar vinocha", date:"18 Nov 2024", time:"4 Min Read"
},
{
  id:2, image: 'datascience/data8.webp', name: "Top Product Based companies for data scientist",
  head:"By Isha Sharma", date:"11 Feb 2024", time:"3Min Read"
},
{
  id:2, image: 'datascience/data9.webp', name: "Everything about Data Science",
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


const Datascience= () => {
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


export default Datascience;