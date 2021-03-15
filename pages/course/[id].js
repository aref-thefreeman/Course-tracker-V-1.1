export const getStaticPaths = async () =>{
    const res = await fetch(`https://oneeducation.org.uk/wp-json/staffasia/v1/data-from-reed`)
    const data = await res.json();
   

    const paths = data.courses.map(course => {
        return {
            params: {id: course.course_id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}


export const getStaticProps = async(context) =>{
    

    const data = await res.json();
    console.log("data", data)

    return{
        props: {
            course: data
        }
    }
}

const courseDetails = ({course}) =>{
    console.loge("course" +course)
    return(
        <div>
            <h1>Course details Page</h1>
            {course.courses.title}
        </div>
    )
} 
export default courseDetails;