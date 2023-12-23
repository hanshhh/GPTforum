import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req) => {
    var search = req?.nextUrl.searchParams.get('s').toString();
    
    try {
        await connectToDB();
        // console.log(search)
        // console.log(query)
        const prompts = await Prompt.find({prompt: new RegExp(search, 'i')}).populate('creator');
        return new Response(JSON.stringify(prompts), {status: 200})
        
    } catch (error) {
        return new Response("Failed to fetch prompts", {status: 500})
        
    }
}