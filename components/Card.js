import React, { useState, useEffect } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import { supabase } from '../client';
import more from '../assets/more.png';
import black from '../assets/black.png';
import pink from '../assets/pink.png';
import red from '../assets/red.png';
import purple from '../assets/purple.png';
import blue from '../assets/blue.png';

const Card = (props) => {
  const [penguin, setPenguin] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch penguin details from Supabase
        const { data, error } = await supabase
          .from('ClubPenguin')
          .select('name, color, job')
          .eq('id', props.id)
          .single();
        
        if (error) {
          throw error;
        }

        setPenguin(data);

        let colorImage;
        switch (data.color.toLowerCase()) {
          case 'black':
            colorImage = black;
            break;
          case 'pink':
            colorImage = pink;
            break;
          case 'red':
            colorImage = red;
            break;
          case 'purple':
            colorImage = purple;
            break;
          case 'blue':
            colorImage = blue;
            break;
          default:
            colorImage = null;
        }
        setImageUrl(colorImage);
      } catch (error) {
        console.error('Error fetching penguin details:', error.message);
      }
    };
    fetchData();
  }, [props.id]);

  
  return (
    <div className="Card">
      {penguin ? (
        <div>
          <h3>{penguin.name}</h3>
          <img src={imageUrl} alt={penguin.color} /> 
          <p>Job: {penguin.job}</p>
          <Link to={`/edit/${props.id}`} className="view-more-button">
            <img className="moreButton" alt="edit button" src={more} />
            View More
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;