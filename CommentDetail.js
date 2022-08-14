
function CommentDetail(props) {
    return(
        <div className="comment">  
        <a href="/" className="avatar">
          <img alt="avatar" src="https://picsum.photos/50"/>
        </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <div className="date">{props.timeAgo}</div>
        </div>
        <div className="text">
        {props.commentText}
        </div>
      </div>
    </div> 
    );        
};

export default CommentDetail;