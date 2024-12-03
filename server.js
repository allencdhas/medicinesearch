const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Sample medicines data (you should move this to a database in production)
const sampleMedicines = [
  {
    name: "Paracetamol",
    composition: "Acetaminophen 500mg",
    usage: "Pain relief and fever reduction",
    dosage: "1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours."
  },
  // ... rest of your medicines data ...
];

// Search endpoint
app.get('/api/medicines/search', (req, res) => {
  const { term } = req.query;
  
  if (!term) {
    return res.json(sampleMedicines);
  }

  const filteredMedicines = sampleMedicines.filter(medicine =>
    medicine.name.toLowerCase().includes(term.toLowerCase())
  );
  
  res.json(filteredMedicines);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});