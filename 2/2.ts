// pages/posts/[slug].tsx

import { useRouter } from 'next/router';

const posts = {
  'post-1': {
    title: 'Meu Primeiro Post',
    content: 'Este é o conteúdo do meu primeiro post.',
  },
  'post-2': {
    title: 'Meu Segundo Post',
    content: 'Aqui está o conteúdo do meu segundo post.',
  },
};

const Post = () => {
  const router = useRouter();
  const { slug } = router.query;

  const post = posts[slug as keyof typeof posts];

  if (!post) {
    return <p>Post não encontrado.</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
