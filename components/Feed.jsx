'use client';
import {useState, useEffect} from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({data, handleTagClick}) => {
    return (
        <div className="mt-16 prompt_layout">
            {data.map((post) => (
                <PromptCard 
                    key={post._id} post={post} handleTagClick={handleTagClick}/>
            ))}

        </div>
    )
}

function Feed() {
    const [searchText, setSearchText] = useState("");
    const [posts, setPosts] = useState([]);
    const handleSearchChange = (e) => {
        setSearchText(e.target.value)

    }

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/prompt/?s=${searchText}`);
            if (response.ok) {

            
                const data = await response.json();
                setPosts(data)
                console.log(data)
            } else {
                console.log(response)
            }
        }
        fetchPosts();
    }, [searchText])
    return (
        <section className="feed">
            <form className="relative w-full flex-center">
                <input type="text" placeholder="Search for topics.." 
                value={searchText}
                onChange={handleSearchChange}
                required
                className="search_input peer"
                />
            </form>
            <PromptCardList data={posts} handleTagClick={()=>{}}/>
        </section>
    )
}

export default Feed;
