import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './EditPost.css';
import { supabase } from '../client';

const EditPenguin = ({ data }) => {
    const { id } = useParams();
    const [post, setPost] = useState({ id: null, name: '', color: '', job: '' });

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const { data: postData, error } = await supabase.from('ClubPenguin').select().eq('id', id).single();
                if (error) {
                    throw error;
                }
                setPost(postData);
            } catch (error) {
                console.error('Error fetching post:', error.message);
            }
        };

        fetchPost();
    }, [id]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const updatePost = async (event) => {
        event.preventDefault();
    
        try {
            await supabase
                .from('ClubPenguin')
                .update({ name: post.name, color: post.color, job: post.job })
                .eq('id', id);
    
            console.log('Post updated successfully');
            window.location = '/';
        } catch (error) {
            console.error('Error updating post:', error.message);
        }
    };
    
    const deletePost = async (event) => {
        event.preventDefault();
        await supabase
            .from('ClubPenguin')
            .delete()
            .eq('id', id);
        window.location = '/';
    };

    return (
        <div>
            <form onSubmit={updatePost}>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={post.name} onChange={handleChange} />
                <br />
                <br />

                <label htmlFor="color">Color</label>
                <br />
                <input type="text" id="color" name="color" value={post.color} onChange={handleChange} />
                <br />
                <br />

                <label htmlFor="job">Job</label>
                <br />
                <input type='text' id="job" name="job" value={post.job} onChange={handleChange}/>
                <br />
                <br />
                
                <input type="submit" value="Submit" onClick={updatePost}/>
                <button type="button" className="deleteButton" onClick={deletePost}>
                    Delete
                </button>
            </form>
        </div>
    );
};

export default EditPenguin;
