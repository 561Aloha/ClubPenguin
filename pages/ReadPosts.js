import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { supabase } from '../client';

const ReadPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase
                    .from('ClubPenguin')
                    .select('*');
                if (error) {
                    throw error;}
                // Set state of posts
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error.message);
            }
        };

        fetchPosts();
    }, []); 

    return (
        <div className="ReadPosts">
            {posts && posts.length > 0 ? (
                posts.map((post, index) => (
                    <Card key={post.id} id={post.id} name={post.name} color={post.color} job={post.job} />
                ))
            ) : (
                <h2>{'No Penguins Yet😞'}</h2>
            )}
        </div>
    );
};

export default ReadPosts;
