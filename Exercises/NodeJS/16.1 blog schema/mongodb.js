const blogsCollection = {
  _id: "...",
  title: "...",
  postTime: "...",
  numberOfLikes: "...",
  comments: "[ commentId ,  commentId , commentId]",
  authorOfPost: "...",
  postContent: "...",

};

const commentsCollection = {
  _id: "...",
  blogId: "...", // Reference to blogs
  postTime: "...",
  comment: "...",
  authorOfComment: "...",
  numberOfLikes: "...",
};

