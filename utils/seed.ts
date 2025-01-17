const property = [
  {
    "id": 1,
    "name": "Cozy Cottage",
    "price": 150000,
    "facilities": ["House", "Wifi", "Parking"],
    "location": "Los Angeles, CA",
    "image": [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Parking", "Wifi"],
    "description": "A cozy cottage with modern amenities and a peaceful backyard.",
    "agent": "John Doe",
    "reviews": "4.5/5",
    "area": 1200,
    "bedrooms": 3,
    "bathrooms": 2,
    "ratings": 4.5
  },
  {
    "id": 2,
    "name": "Sunny Townhome",
    "price": 350000,
    "facilities": ["Townhomes", "Gym", "Pet-Friendly"],
    "location": "San Diego, CA",
    "image": [
      "https://images.unsplash.com/photo-1605146768851-eda79da39897?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Gym", "Pet-Friendly"],
    "description": "A spacious townhome with access to a private gym and pet-friendly environment.",
    "agent": "Jane Smith",
    "reviews": "4.7/5",
    "area": 1800,
    "bedrooms": 4,
    "bathrooms": 3,
    "ratings": 4.7
  },
  {
    "id": 3,
    "name": "Luxury Condo",
    "price": 500000,
    "facilities": ["Condos", "Parking", "Wifi"],
    "location": "Miami, FL",
    "image": [
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Parking", "Wifi"],
    "description": "A modern and elegant condo located in the heart of Miami.",
    "agent": "Michael Lee",
    "reviews": "4.8/5",
    "area": 1500,
    "bedrooms": 2,
    "bathrooms": 2,
    "ratings": 4.8
  },
  {
    "id": 4,
    "name": "Mountain Villa",
    "price": 750000,
    "facilities": ["Villa", "Gym", "Parking"],
    "location": "Denver, CO",
    "image": [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Gym", "Parking"],
    "description": "A luxury villa with breathtaking mountain views and top-tier amenities.",
    "agent": "Rachel Green",
    "reviews": "5/5",
    "area": 3000,
    "bedrooms": 5,
    "bathrooms": 4,
    "ratings": 5
  },
  {
    "id": 5,
    "name": "Modern Duplex",
    "price": 400000,
    "facilities": ["Duplexes", "Laundry", "Pet-Friendly"],
    "location": "Austin, TX",
    "image": [
      "https://images.unsplash.com/photo-1561753757-d8880c5a3551?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Laundry", "Pet-Friendly"],
    "description": "A beautifully designed duplex with a spacious layout and pet-friendly.",
    "agent": "Lisa Adams",
    "reviews": "4.3/5",
    "area": 1600,
    "bedrooms": 3,
    "bathrooms": 2,
    "ratings": 4.3
  },
  {
    "id": 6,
    "name": "Downtown Studio",
    "price": 200000,
    "facilities": ["Studios", "Wifi"],
    "location": "New York, NY",
    "image": [
      "https://images.unsplash.com/photo-1551241090-67de81d3541c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Wifi"],
    "description": "A stylish studio in the heart of New York City, perfect for young professionals.",
    "agent": "Tom Hanks",
    "reviews": "4.1/5",
    "area": 650,
    "bedrooms": 1,
    "bathrooms": 1,
    "ratings": 4.1
  },
  {
    "id": 7,
    "name": "Beachfront Apartments",
    "price": 600000,
    "facilities": ["Apartments", "Gym", "Wifi"],
    "location": "Honolulu, HI",
    "image": [
      "https://images.unsplash.com/photo-1697299262049-e9b5fa1e9761?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Gym", "Wifi"],
    "description": "A modern beachfront apartment complex with an ocean view gym and high-speed wifi.",
    "agent": "Monica Bellucci",
    "reviews": "4.6/5",
    "area": 1800,
    "bedrooms": 3,
    "bathrooms": 2,
    "ratings": 4.6
  },
  {
    "id": 8,
    "name": "Urban Loft",
    "price": 450000,
    "facilities": ["Apartments", "Parking"],
    "location": "Chicago, IL",
    "image": [
      "https://images.unsplash.com/photo-1719299225324-301bad5c333c?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Parking"],
    "description": "A stylish urban loft with large windows and ample parking spaces.",
    "agent": "Brad Pitt",
    "reviews": "4.2/5",
    "area": 1400,
    "bedrooms": 2,
    "bathrooms": 2,
    "ratings": 4.2
  },
  {
    "id": 9,
    "name": "Countryside Villa",
    "price": 900000,
    "facilities": ["Villa", "Pet-Friendly", "Parking"],
    "location": "Nashville, TN",
    "image": [
      "https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?q=60&w=640&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    "type": ["Pet-Friendly", "Parking"],
    "description": "A luxurious countryside villa with plenty of space for pets and vehicles.",
    "agent": "Angelina Jolie",
    "reviews": "4.9/5",
    "area": 3500,
    "bedrooms": 6,
    "bathrooms": 5
  }

]