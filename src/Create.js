import { useState } from "react";
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState("mario");
  const [isPending,setIsPending]=useState(false);
  const navigate=useNavigate ();

  const handleSubmit=(e)=>{
    e.preventDefault();
    const blog={title,body,author};

    setIsPending(true);

    fetch('https://my-blogposts-api.herokuapp.com/blogs',{
        method:'POST',
        headers:{"content-Type":"application/json"},
        body:JSON.stringify(blog)
    })
    .then(()=>{
        console.log('new blog added');
        setIsPending(false);
        navigate('/');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title :</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Blog Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Adding Blog</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
