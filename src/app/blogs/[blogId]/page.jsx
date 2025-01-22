const BlogDetail = async ({ params }) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.blogId}`
  );
  const post = await res.json();

  console.log(post);
  return <div>BlogDetail</div>;
};

export default BlogDetail;
