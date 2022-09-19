import { useParams } from "react-router-dom";
import useFetch from './useFetch';
import { useNavigate } from "react-router-dom";
const BlogDetails=()=>{

    const {id} = useParams()
    const {data:blog,error,isPending}=useFetch('https://my-blogposts-api.herokuapp.com/blogs/'+id);
    const navigate=useNavigate();
    const handleDelete=()=>{
        fetch('https://my-blogposts-api.herokuapp.com/blogs/'+blog.id,{
            method:'DELETE'
        }).then(()=>{
            navigate('/');
        })
    }

    return (
        <div className="blog-details">
            {isPending && <div>Loading Blog..</div>}
            {error && <div>{error}</div>}
            {!error &&! isPending && blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <hr></hr>
                    <div>{blog.body}</div>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;