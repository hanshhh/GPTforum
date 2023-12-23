import {Schema, model, models} from 'mongoose';

const BlogSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        required: [true, "Blog title is required."]
    },
    content: {
        type: String,
        required: [true, "Content is required."],
    },
    tag: {
        type: String,
        required: [true, 'Tag is required.'],

    }
})

const Blog = models.Blog || model('Blog', BlogSchema);
export default Blog;