export default function Post(props) {
  const post = props.post;
  const id = post.id;

  return (
    <div>
      <img height={200} width={400} src={post.thumbnail} alt="" />
      <h2>
        {id}. {post.title}
      </h2>

      {/* {id % 2 === 0 ? (
          <p className={"green"}>{post.content}</p>
        ) : (
          <p className={"yellow"}>{post.content}</p>
        )} */}

      {id % 2 === 0 && <p className={"green"}>{post.content}</p>}
      {id % 2 === 1 && <p className={"yellow"}>{post.content}</p>}

      {/* <p className={id % 2 === 0 ? "green" : "yellow"}>{post.content}</p> */}
    </div>
  );
}
