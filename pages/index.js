import Head from 'next/head'
import filterTest from './filterTest';
import Search from "./Search";
// import "./styles.css";




export default function Home({courses}) {
  
  const allCourses = courses.courses;
  console.log(allCourses);
  
  const style = {
    // color: 'white',
    fontSize: 18,
    // backgroundColor: "#13b944",
    textAlign: "center"
  };
  return (
    
    <div className = "header-text" style = {style}>
      <Head>
        <title>Course Tracker </title>
        <link rel = "icon" href = "https://staffasia.org/wp-content/uploads/2020/01/favicon.ico" />
      </Head>
      
      <h1>Welcome to Course Tracker!</h1> 
      <filterTest></filterTest>
      <Search></Search>
      
      {allCourses.map(course => <h4 key={course.course_id}>{course.title}</h4>)} 
      
       
    </div>
  )
}


export const getStaticProps = async () =>{
  const res = await fetch(`https://oneeducation.org.uk/wp-json/staffasia/v1/data-from-reed`)
  const courses = await res.json()

  return {
    props:{
      courses
    }
  }
}