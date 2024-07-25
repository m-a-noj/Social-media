import { useContext, useRef } from "react";
import { Postlist } from "../store/contentData";

function CreateContent() {
  const { addPost } = useContext(Postlist); // Assuming Postlist context provides addPost function

  const PostTitlel = useRef();
  const postContentl = useRef();
  const noOfReactionl = useRef();
  const hastagl = useRef();
  const useridl = useRef();

  const handleOnClick = (e) => {
    e.preventDefault();


    const postTitle = PostTitlel.current.value;
    const postContent = postContentl.current.value;
    const noOfReaction = noOfReactionl.current.value;
    const hashtag = hastagl.current.value.split(" ");
    const userId = useridl.current.value
   
     addPost(postTitle,postContent,noOfReaction,hashtag,userId);

    
  
    PostTitlel.current.value = "";
    postContentl.current.value = "";
    noOfReactionl.current.value = "";
    hastagl.current.value = "";
    useridl.current.value = "";
  };

  return (
    <form style={{ margin: "40px", width: "50%" }} onSubmit={handleOnClick}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input type="text" ref={PostTitlel} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="posttitle" className="form-label">
          Post Content
        </label>
        <textarea rows={4} ref={postContentl} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reactions
        </label>
        <input type="text" ref={noOfReactionl} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          User ID (space-separated)
        </label>
        <input type="text" ref={useridl} className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="hashtag" className="form-label">
          Hashtag
        </label>
        <input type="text" ref={hastagl} className="form-control" />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}

export default CreateContent;
