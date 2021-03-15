import React from 'react';
import Link from 'next/link'
const course = ({courses}) => {
    const allCourses = courses.courses;
    console.log(allCourses);
    return (
        <div>
            <h1>Courses</h1>
            {/* {allCourses.slice(0,20).map(course =>  <h4 style={{color: "gray", backgroundColor: "lightblue", border:"5px solid black", padding: "10px"}}  key={course.course_id}>{course.title}</h4>)}     */}

            {allCourses.slice(0,20).map(course => (
                <Link href = {"/course/"+ course.course_id}>
                <h3 style={{color: "gray", backgroundColor: "lightblue", border:"5px solid black", padding: "10px"}}  key={course.course_id}>{course.title}</h3>
                </Link>
            )  )} 

        </div>
    );
};

export default course;

export const getStaticProps = async () =>{
    const res = await fetch(`https://oneeducation.org.uk/wp-json/staffasia/v1/data-from-reed`)
    const courses = await res.json()
  
    return {
      props:{
        courses
      }
    }
  }