import { fetchPosts } from "@/features/posts/postSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


const PostView = () => {
     const {isLoading, posts, error} = useSelector((state)=> state.posts)

const dispatch = useDispatch()

     useEffect(()=>{
          dispatch(fetchPosts())
     },[dispatch])

     return (
          <div>
               <h1 className="text-center py-6 text-4xl">My Posts</h1>
               {
                    isLoading && <h3>Loading...</h3>
               }
               {error && <h3>{error}</h3>}
               {
                    posts && posts.map(post =>{
                        return <article
                        key={post.id}
                        className="max-w-96 mx-auto border rounded-lg p-4 m-6 bg-blue-100"
                        >

                              <h1 className="text-3xl font-bold py-4">Title: {post.title}</h1>
                              <p>Body: {post.body}</p>

                        </article> 
                    })
               }
          </div>
     );
};

export default PostView;