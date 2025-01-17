import express, { Request, Response } from 'express';
import Property from '../models/Property';

// interface Property {
//   id: number;
//   name: string;
//   price: number;
//   facilities: Enumerator[];
//   location: string;
//   image: string[];
//   type: Enumerator[];
//   description: string;
//   agent: string;
//   reviews: string;
//   area: number;
//   bedrooms: number;
//   bathrooms: number;
//   ratings: Float32Array;
// }

const propertiesRouter = express.Router();

propertiesRouter.get('/', (req: Request, res: Response) => {
  try {
    const properties = Property.find();

    res.status(200).json(properties)

  } catch (error) {
    res.status(500).json({ message: error })
  }
}) 