const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;

// middelware

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(express.json());
app.use(cors(corsOptions));



// create database
const uri = process.env.BD_URL;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const MyTechDB = client.db("MyTechDB");
    const productsCollection = MyTechDB.collection("products");

    app.get("/products",async(req,res)=>{
        
const data=[
  {
    "name": "TechVision Ultra HD 4K 55-Inch Smart Television with HDR",
    "brand_name": "TechVision",
    "price": 999.99,
    "discount_price": 799.99,
    "category": "Television",
    "description": "The TechVision Ultra HD 4K 55-Inch Smart Television with HDR offers an exceptional viewing experience with stunning clarity and vibrant colors. Featuring 4K resolution, this TV provides four times the detail of Full HD, ensuring every scene is sharp and clear. Integrated HDR technology enhances contrast and color, making bright scenes brighter and dark scenes more detailed. With built-in apps like Netflix, YouTube, and Amazon Prime, you can stream your favorite content directly from the TV. Its sleek, modern design complements any living room décor, making it perfect for family movie nights or gaming sessions.",
    "review_links": [
      {
        "review_rating": 4.5,
        "username": "JohnDoe123",
        "review_text": "The picture quality is amazing, but the sound could be improved."
      },
      {
        "review_rating": 4.0,
        "username": "JaneSmith",
        "review_text": "Great value for the price, but the remote could be more responsive."
      }
    ],
    "product_image": "https://i.ibb.co/C8t5w0W/1.webp"
  },
  {
    "name": "SoundMax Over-Ear Wireless Noise Cancelling Headphones",
    "brand_name": "SoundMax",
    "price": 299.99,
    "discount_price": 249.99,
    "category": "Audio",
    "description": "The SoundMax Over-Ear Wireless Noise Cancelling Headphones are designed for an unparalleled listening experience. These headphones feature advanced noise-cancelling technology that blocks out unwanted ambient noise, allowing you to focus on your music, podcasts, or calls without distractions. The comfortable over-ear design with soft memory foam ear cushions ensures hours of comfort. With up to 30 hours of battery life on a single charge, these wireless headphones offer the freedom to move without being tethered to your device. The superior sound quality, with deep bass and clear highs, makes your music come alive.",
    "review_links": [
      {
        "review_rating": 5.0,
        "username": "AliceB",
        "review_text": "The best noise cancelling headphones I've ever used! Perfect for traveling."
      },
      {
        "review_rating": 4.8,
        "username": "BobWhite",
        "review_text": "Excellent sound quality, but they can feel a bit heavy after long use."
      }
    ],
    "product_image": "https://i.ibb.co/NZcgjL2/2.webp"
  },
  {
    "name": "PhoneTech Smartphone X Pro with 6.5-Inch Display and 128GB Storage",
    "brand_name": "PhoneTech",
    "price": 899.99,
    "discount_price": 749.99,
    "category": "Mobile Phones",
    "description": "The PhoneTech Smartphone X Pro with 6.5-Inch Display and 128GB Storage is a flagship device that combines cutting-edge technology with a sleek design. The 6.5-inch Super AMOLED display offers an immersive viewing experience with vibrant colors and deep blacks. Powered by an octa-core processor and 8GB of RAM, this smartphone ensures smooth performance even with demanding apps. With 128GB of internal storage, you'll have plenty of space for all your photos, videos, and apps. The versatile 48MP rear camera captures stunning photos in any lighting condition, while the 20MP front camera is perfect for selfies and video calls.",
    "review_links": [
      {
        "review_rating": 4.7,
        "username": "ChrisGreen",
        "review_text": "Fantastic camera and display, but the battery life could be longer."
      },
      {
        "review_rating": 4.3,
        "username": "DanaBlack",
        "review_text": "Great phone, but it’s a bit overpriced compared to competitors."
      }
    ],
    "product_image": "https://i.ibb.co/0GCTmDB/3.jpg"
  },
  {
    "name": "GameMaster High-Performance Gaming Laptop GX with 16GB RAM and 1TB SSD",
    "brand_name": "GameMaster",
    "price": 1499.99,
    "discount_price": 1299.99,
    "category": "Laptops",
    "description": "The GameMaster High-Performance Gaming Laptop GX with 16GB RAM and 1TB SSD is built for serious gamers. Featuring a 15.6-inch Full HD display with a 144Hz refresh rate, this laptop delivers smooth and fluid visuals for fast-paced games. Powered by an Intel Core i7 processor and an NVIDIA GeForce RTX graphics card, it can handle the latest games at high settings with ease. The 16GB of RAM allows for seamless multitasking, while the 1TB SSD ensures fast load times and ample storage. The advanced cooling system keeps the hardware cool during intense gaming sessions, ensuring consistent performance.",
    "review_links": [
      {
        "review_rating": 4.9,
        "username": "EvanRed",
        "review_text": "Handles all the latest games smoothly at high settings. A beast of a machine!"
      },
      {
        "review_rating": 4.5,
        "username": "FionaBlue",
        "review_text": "Great performance, but it gets a bit warm during long gaming sessions."
      }
    ],
    "product_image": "https://i.ibb.co/Y3x3qFj/4.webp"
  },
  {
    "name": "SoundWave Bluetooth Portable Speaker with Deep Bass and 12-Hour Battery",
    "brand_name": "SoundWave",
    "price": 129.99,
    "discount_price": 99.99,
    "category": "Audio",
    "description": "The SoundWave Bluetooth Portable Speaker with Deep Bass and 12-Hour Battery is a must-have for music lovers on the go. This compact yet powerful speaker delivers rich, immersive sound with deep bass, crisp mids, and clear highs. The wireless Bluetooth connectivity allows you to stream music from your smartphone, tablet, or any other Bluetooth-enabled device. With a 12-hour rechargeable battery, you can enjoy your favorite tunes all day long. The rugged, water-resistant design makes it perfect for outdoor adventures, beach trips, or poolside parties. It also includes a built-in microphone for hands-free calls and on-board controls for easy operation.",
    "review_links": [
      {
        "review_rating": 5.0,
        "username": "SammyK",
        "review_text": "Perfect for the beach! The sound quality is amazing and the battery life is excellent."
      },
      {
        "review_rating": 4.7,
        "username": "LilyP",
        "review_text": "Great speaker, but I wish it had a bit more bass."
      }
    ],
    "product_image": "https://i.ibb.co/xGv8tXv/5.jpg"
  },
  {
    "name": "UltraClean Smart Robotic Vacuum Cleaner with Wi-Fi Connectivity",
    "brand_name": "UltraClean",
    "price": 499.99,
    "discount_price": 399.99,
    "category": "Home Appliances",
    "description": "The UltraClean Smart Robotic Vacuum Cleaner with Wi-Fi Connectivity takes the hassle out of keeping your floors spotless. This intelligent vacuum features advanced navigation technology that maps your home and cleans in an efficient, methodical pattern. With powerful suction and a multi-surface brush, it picks up dirt, dust, and pet hair from both carpets and hard floors. The Wi-Fi connectivity allows you to control the vacuum from your smartphone, schedule cleanings, and monitor its progress. It’s also compatible with voice assistants like Amazon Alexa and Google Assistant. The vacuum automatically returns to its charging dock when the battery is low and resumes cleaning once it's recharged.",
    "review_links": [
      {
        "review_rating": 4.8,
        "username": "MikeRob",
        "review_text": "I love that I can schedule cleanings from my phone. It’s a huge time-saver!"
      },
      {
        "review_rating": 4.6,
        "username": "AnnaG",
        "review_text": "Cleans well, but sometimes it gets stuck under furniture."
      }
    ],
    "product_image": "https://i.ibb.co/P9Q2PJ5/6.webp"
  },
  {
      "name": "SmartHome Wi-Fi Enabled LED Color Changing Light Bulbs",
      "brand_name": "SmartHome",
      "price": 49.99,
      "discount_price": 39.99,
      "category": "Lighting",
      "description": "The SmartHome Wi-Fi Enabled LED Color Changing Light Bulbs offer a versatile lighting solution for any room in your home. With 16 million color options and adjustable brightness, these bulbs can be customized to fit any mood or occasion. Controlled via a smartphone app or compatible with voice assistants like Alexa and Google Assistant, you can easily change colors, set schedules, and group multiple bulbs together. Energy-efficient and long-lasting, these LED bulbs not only save on your electricity bill but also provide up to 25,000 hours of lighting. Perfect for creating ambiance, accent lighting, or just everyday use.",
      "review_links": [
        {
          "review_rating": 4.8,
          "username": "LightLover",
          "review_text": "Love the color options and how easy it is to control from my phone."
        },
        {
          "review_rating": 4.6,
          "username": "TechieTom",
          "review_text": "Great for setting the mood, but the app can be a bit slow at times."
        }
      ],
      "product_image": "https://i.ibb.co/7zvM283/7.webp"
    },
    {
      "name": "CleanAir UltraQuiet Air Purifier with HEPA Filter and Ionizer",
      "brand_name": "CleanAir",
      "price": 199.99,
      "discount_price": 159.99,
      "category": "Home Appliances",
      "description": "The CleanAir UltraQuiet Air Purifier with HEPA Filter and Ionizer is an essential appliance for those seeking to improve their indoor air quality. This air purifier uses a true HEPA filter to capture 99.97% of airborne particles, including dust, pollen, and pet dander. The integrated ionizer further enhances air purification by neutralizing harmful pollutants and odors. Designed with ultra-quiet operation, it’s perfect for bedrooms, living rooms, or offices. The purifier also features three fan speeds, a sleep mode, and a timer function, giving you full control over your air quality. With its sleek, modern design, the CleanAir UltraQuiet Air Purifier blends seamlessly into any space.",
      "review_links": [
        {
          "review_rating": 4.9,
          "username": "HealthyLiving",
          "review_text": "Noticeable improvement in air quality. The sleep mode is super quiet, perfect for nighttime use."
        },
        {
          "review_rating": 4.7,
          "username": "PetOwner",
          "review_text": "Works great, especially for dealing with pet hair and odors. I wish the replacement filters were cheaper."
        }
      ],
      "product_image": "https://i.ibb.co/9sQZK46/8.jpg"
    },
    {
      "name": "GigaSound High-Resolution Wireless Over-Ear Studio Headphones",
      "brand_name": "GigaSound",
      "price": 349.99,
      "discount_price": 299.99,
      "category": "Audio",
      "description": "The GigaSound High-Resolution Wireless Over-Ear Studio Headphones are designed for audiophiles and professionals who demand the best in sound quality. Featuring high-resolution audio, these headphones deliver crisp, clear sound across all frequencies, with deep bass and detailed highs. The wireless design and long-lasting battery provide up to 40 hours of continuous listening, while the comfortable over-ear fit allows for hours of use without fatigue. With a built-in microphone and on-ear controls, you can easily take calls and manage your music without reaching for your device. These headphones are ideal for both casual listening and professional use.",
      "review_links": [
        {
          "review_rating": 5.0,
          "username": "AudioExpert",
          "review_text": "Incredible sound quality, perfect for studio work or just enjoying music at home."
        },
        {
          "review_rating": 4.8,
          "username": "MusicLover",
          "review_text": "Fantastic headphones, though they can be a bit bulky for travel."
        }
      ],
      "product_image": "https://i.ibb.co/sVBHbkH/9.webp"
    },
    {
      "name": "QuickBake 12-Function Digital Convection Oven with Touchscreen",
      "brand_name": "QuickBake",
      "price": 249.99,
      "discount_price": 199.99,
      "category": "Kitchen Appliances",
      "description": "The QuickBake 12-Function Digital Convection Oven with Touchscreen is a versatile kitchen appliance that combines the functionality of a convection oven, toaster, and air fryer in one compact unit. With 12 pre-set cooking functions, including bake, roast, broil, and dehydrate, this oven can handle a wide range of cooking tasks. The digital touchscreen interface makes it easy to select the right settings, while the large interior can accommodate a 12-inch pizza or a whole chicken. The convection technology ensures even cooking, and the included accessories, such as a baking tray and air fry basket, add to its versatility. Perfect for busy households or those looking to save space in the kitchen.",
      "review_links": [
        {
          "review_rating": 4.9,
          "username": "HomeChef",
          "review_text": "Cooks everything perfectly and the touchscreen is very intuitive. Love the air fryer function!"
        },
        {
          "review_rating": 4.7,
          "username": "BakingEnthusiast",
          "review_text": "Great oven, though it takes a bit of time to preheat."
        }
      ],
      "product_image": "https://i.ibb.co/3F4JKmz/10.webp"
    },
    {
      "name": "ProFit Multi-Function Adjustable Weight Bench for Full-Body Workouts",
      "brand_name": "ProFit",
      "price": 159.99,
      "discount_price": 129.99,
      "category": "Fitness Equipment",
      "description": "The ProFit Multi-Function Adjustable Weight Bench for Full-Body Workouts is an essential piece of equipment for any home gym. With multiple adjustable positions, including flat, incline, and decline, this bench allows you to perform a wide range of exercises, from bench presses to sit-ups. The sturdy steel frame and high-density foam padding ensure durability and comfort during even the most intense workouts. The bench is also foldable for easy storage, making it ideal for those with limited space. Whether you're a beginner or a seasoned fitness enthusiast, this weight bench is perfect for achieving your fitness goals.",
      "review_links": [
        {
          "review_rating": 4.8,
          "username": "GymRat",
          "review_text": "Solid construction and very versatile. Great for home workouts!"
        },
        {
          "review_rating": 4.6,
          "username": "FitnessFanatic",
          "review_text": "Love the adjustability, but the padding could be a bit thicker."
        }
      ],
      "product_image": "https://i.ibb.co/HCDQ4Yj/11.webp"
    },
    {
      "name": "NatureGlow Full Spectrum LED Grow Light with Adjustable Stand",
      "brand_name": "NatureGlow",
      "price": 199.99,
      "discount_price": 169.99,
      "category": "Gardening",
      "description": "The NatureGlow Full Spectrum LED Grow Light with Adjustable Stand is designed to provide optimal light for indoor plants at all stages of growth. Featuring a full spectrum of light, including red, blue, and white LEDs, this grow light promotes photosynthesis and healthy plant development. The adjustable stand allows you to position the light at the perfect height for your plants, ensuring even coverage. The energy-efficient LEDs produce little heat, reducing the risk of burning your plants and keeping your indoor garden cool. Ideal for home gardeners, this grow light is perfect for growing herbs, vegetables, and flowers indoors year-round.",
      "review_links": [
        {
          "review_rating": 4.9,
          "username": "PlantLover",
          "review_text": "My indoor plants have never looked healthier! The adjustable stand is a great feature."
        },
        {
          "review_rating": 4.7,
          "username": "GreenThumb",
          "review_text": "Works great for my herb garden, but the light could be a bit brighter."
        }
      ],
      "product_image": "https://i.ibb.co/JvWmtcM/12.jpg"
    },
]

           
      
        const products=await productsCollection.find().toArray()
        res.send(products)
    })









    console.log("connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
   
  }
}
run().catch(console.dir);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
