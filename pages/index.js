import Head from 'next/head'


export default function Home() {
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
      </Head>
      <h1>Welcome to Course Tracker!</h1>      
    </div>
  )
}
