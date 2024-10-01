// pages/index.tsx

import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Link from 'next/link';

interface Post {
  id: string;
  title: string;
}

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      const postsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Post[];
      setPosts(postsData);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Bem-vindo ao Meu Blog!</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
