import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      content: `Lorem ipsum dolor 1`,
      thumbnail: "https://picsum.photos/200/300?q=1",
      title: "El Salvador becoming a ",
      id: 1,
    },
    {
      content: `Lorem ipsum 2`,
      thumbnail: "https://picsum.photos/200/300?q=2",
      title: "El Salvador becoming a ",
      id: 2,
    },
    {
      content: `Lorem ipsum 3`,
      thumbnail: "https://picsum.photos/200/300?q=3",
      title: "El Salvador becoming a ",
      id: 3,
    },
    {
      content: `Lorem ipsum 2`,
      thumbnail: "https://picsum.photos/200/300?q=2",
      title: "El Salvador becoming a ",
      id: 4,
    },
  ];

  return (
    <div className="post-container">
      {posts.map((post, index) => {
        return <Post key={index} post={post} />;
      })}
    </div>
  );
}
