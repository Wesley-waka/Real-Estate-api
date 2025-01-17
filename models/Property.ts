import mongoose, { Schema, model } from 'mongoose';

interface Property {
  id: number;
  name: string;
  price: number;
  facilities: string[];
  location: string;
  image: string[];
  type: string[];
  description: string;
  agent: string;
  reviews: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  ratings: number;
}

const propertySchema = new Schema({

  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  facilities: {
    type: [String], enum: ["House",
      "Townhomes",
      "Condos",
      "Duplexes",
      "Studios",
      "Villa",
      "Apartments",
      "Others",]
  },
  location: { type: String, required: true },
  image: { type: [String], required: true },
  type: {
    type: [String], enum: ["Laundry",
      "Parking",
      "Gym",
      "Wifi",
      "Pet-Friendly"]
  },
  description: { type: String, required: true },
  agent: { type: String, required: true },
  reviews: { type: String, required: true },
  area: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  ratings: { type: Number, required: true }
});

const Property = mongoose.models.Property || model('Property', propertySchema);

export default Property;