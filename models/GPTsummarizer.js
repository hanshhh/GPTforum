import {Schema, model, models} from 'mongoose';

const URLTrackSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    web_url: {
        type: String,
        required: [true, 'Enter the target Web url.'],

    }
})

const URLTrack = models.URLTrack || model('URLTrack', URLTrackSchema);
export default URLTrack;