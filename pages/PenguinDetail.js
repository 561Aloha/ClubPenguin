import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import black from '../assets/black.png';
import pink from '../assets/pink.png';
import red from '../assets/red.png';
import purple from '../assets/purple.png';
import blue from '../assets/blue.png';

const PenguinDetail = ({ data }) => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const selectedPost = data.find(post => post.id === parseInt(id));
    setPost(selectedPost);
  }, [id, data]);
  

  if (!post) {
    return <div>Loading...</div>;
  }

  // Helper function to get image URL based on color
  const getImageUrl = (color) => {
    switch (color.toLowerCase()) {
      case 'black':
        return black;
      case 'pink':
        return pink;
      case 'red':
        return red;
      case 'purple':
        return purple;
      case 'blue':
        return blue;
      default:
        return null;
    }
  };

  return (
    <div className="PenguinDetail">
      <h2>{post.name}</h2>
      <img src={getImageUrl(post.color)} alt={post.color} />
      <p>Color: {post.color}</p>
      <p>Job: {post.job}</p>
      <p>Likes: {post.likes}</p>
      <p>Dislikes: {post.dislikes}</p>
    </div>
  );
};

export default PenguinDetail;
