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


const courseDetails = () =>{
    return(
        <div>
            <h1>Course details Page</h1>
        </div>
    )
} 
export default courseDetails;