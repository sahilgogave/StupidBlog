import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const{data:blogs,isPending,error}=useFetch("https://my-blogposts-api.herokuapp.com/blogs")
    
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...Please wait</div>}
      {!error && !isPending && blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='mario')} title="Marios Blogs!"/> */}
    </div>
  );
};

export default Home;
