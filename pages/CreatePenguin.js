import React, { useState } from 'react';
import { supabase } from '../client';
import './CreatePost.css';

const CreatePenguin = () => {
    const [post, setPost] = useState({ name: '', color: '', job: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const createPost = async (event) => {
        event.preventDefault();
        try {
            await supabase
                .from('ClubPenguin')
                .insert({ name: post.name, color: post.color, job: post.job })
                .select();

            // Redirect to homepage after successful post creation
            window.location = "/";
        } catch (error) {
            console.error('Error creating post:', error.message);
        }
    };

    return (
        <div className="create-penguin-container">
            <form onSubmit={createPost}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={handleChange} />

                <label htmlFor="color">Color</label>
                <div className="radio-group">
                    <div>
                        <input type="radio" id="color1" name="color" value="Blue" onChange={handleChange} />
                        <label htmlFor="color1">Blue</label>
                    </div>
                    <div>
                        <input type="radio" id="color2" name="color" value="Purple" onChange={handleChange} />
                        <label htmlFor="color2">Purple</label>
                    </div>
                    <div>
                        <input type="radio" id="color3" name="color" value="Pink" onChange={handleChange} />
                        <label htmlFor="color3">Pink</label>
                    </div>
                    <div>
                        <input type="radio" id="color4" name="color" value="Green" onChange={handleChange} />
                        <label htmlFor="color4">Green</label>
                    </div>
                    <div>
                        <input type="radio" id="color5" name="color" value="Red" onChange={handleChange} />
                        <label htmlFor="color5">Red</label>
                    </div>
                    <div>
                        <input type="radio" id="color6" name="color" value="Black" onChange={handleChange} />
                        <label htmlFor="color6">Black</label>
                    </div>
                </div>

                <label htmlFor="job">Job</label>
                <div className="radio-group">
                    <div>
                        <input type="radio" id="job1" name="job" value="Software Engineer" onChange={handleChange} />
                        <label htmlFor="job1">Software Engineer</label>
                    </div>
                    <div>
                        <input type="radio" id="job2" name="job" value="Cook" onChange={handleChange} />
                        <label htmlFor="job2">Cook</label>
                    </div>
                    <div>
                        <input type="radio" id="job3" name="job" value="Artist" onChange={handleChange} />
                        <label htmlFor="job3">Artist</label>
                    </div>
                    <div>
                        <input type="radio" id="job4" name="job" value="Doctor" onChange={handleChange} />
                        <label htmlFor="job4">Doctor</label>
                    </div>
                    <div>
                        <input type="radio" id="job5" name="job" value="Entrepenuer" onChange={handleChange} />
                        <label htmlFor="job5">Entrepenuer</label>
                    </div>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default CreatePenguin;
