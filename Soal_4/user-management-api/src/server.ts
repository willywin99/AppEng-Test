import express, { Request, Response } from 'express';
import axios from 'axios';
import cors from 'cors'; // Enable Cross-Origin Resource Sharing

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Use CORS middleware
app.use(express.json());

function manipulateUserData(userData: any) {
  const { name, location, email, dob, phone, cell, picture } = userData;
  return {
    name: `${name.title} ${name.first} ${name.last}`,
    location: `${location.street.number}, ${location.street.name}, ${location.city}, ${location.state}, ${location.country}`,
    email: email,
    age: dob.age,
    phone: phone,
    cell: cell,
    picture: [picture.large, picture.medium, picture.thumbnail],
  };
}


app.get('/api/users', async (req: Request, res: Response) => {
  const results = parseInt(req.query.results as string) || 10;
  const page = parseInt(req.query.page as string) || 1;

  try {
    const response = await axios.get(`https://randomuser.me/api?results=${results}&page=${page}`);
    const manipulatedUsers = response.data.results.map(manipulateUserData);
    // console.log(manipulatedUsers);

    const totalUsers = 5000; // Replace with the actual total count from your data source
    
    // res.json(manipulatedUsers);
    res.json({ users: manipulatedUsers, total: totalUsers }); // Send back users and total
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});