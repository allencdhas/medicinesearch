const { MongoClient } = require('mongodb');
require('dotenv').config();

const sampleMedicines = [
    {
      name: "Paracetamol",
      composition: "Acetaminophen 500mg",
      usage: "Pain relief and fever reduction",
      dosage: "1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours."
    },
    {
      name: "Amoxicillin",
      composition: "Amoxicillin trihydrate 500mg",
      usage: "Treatment of bacterial infections",
      dosage: "1 capsule three times daily for 7-10 days or as prescribed by physician"
    },
    {
      name: "Omeprazole",
      composition: "Omeprazole 20mg",
      usage: "Treatment of acid reflux and ulcers",
      dosage: "One capsule daily before breakfast"
    },
    {
      name: "Metformin",
      composition: "Metformin hydrochloride 500mg",
      usage: "Management of type 2 diabetes",
      dosage: "Start with 500mg twice daily with meals, may increase as directed by physician"
    },
    {
      name: "Lisinopril",
      composition: "Lisinopril 10mg",
      usage: "Treatment of high blood pressure and heart failure",
      dosage: "Take one tablet daily at the same time each day"
    }
  ];

async function seedDatabase() {
  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);
    const database = client.db('medicine_db');
    const medicines = database.collection('medicines');

    // Clear existing data
    await medicines.deleteMany({});

    // Insert sample data
    const result = await medicines.insertMany(sampleMedicines);
    console.log(`${result.insertedCount} medicines added to database`);

    await client.close();
  } catch (error) {
    console.error('Error seeding database:', error);
  }
}

seedDatabase();