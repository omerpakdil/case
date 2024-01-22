import mongoose from "mongoose";

const { Schema } = mongoose;

const countrySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    region: {
        type: String
    },
});

const Country = mongoose.model("Country", countrySchema);

export default Country;
