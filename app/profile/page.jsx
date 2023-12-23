"use client"
import { useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from '@components/profile';

function MyProfile() {
    const router = useRouter();
    const { data: session } = useSession();
    const [posts, setPosts] = useState([]);
    const handleEdit = (post) => {
        router.push(`/update-prompt?id=${post._id}`)

    }
    const handleDelete = async (post) => {
        const hasConfirmed = confirm("Are you sure you want to delete this prompt");
        if (hasConfirmed) {
            try {
                const response = await fetch(`/api/prompt/${post._id.toString()}`, {
                    method: "DELETE"
                })
                if (response.ok) {
                    setPosts(posts.filter((post_item) => post_item._id!== post._id))
                }
                
            } catch (error) {
                console.log(error)
                
            }
        }

    }
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user?.id}/posts`);
            const data = await response.json();
            setPosts(data)
        }
        if (session?.user.id) {
            fetchPosts();
        }
        
    }, [])
    return (
        <Profile
            name="My"
            desc="Welcome to your personalized profile page"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}

export default MyProfile;