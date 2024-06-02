const POSTS = [
  {
    id: 1,
    user_id: 1,
    title: "Hello World",
    content: "This is a simple post",
  },
  {
    id: 2,
    user_id: 1,
    title: "Hello World 2",
    content: "This is a simple post 2",
  },
];

const all = () => {
  return POSTS;
};

module.exports = {
  all,
};
