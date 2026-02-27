# I-VOTE - Online Voting Application

A modern, secure, and user-friendly online voting platform built with React, Node.js, and MongoDB.

## Features

- 🗳️ **Create & Manage Polls**: Easily create multiple-choice polls
- 🔒 **Secure Voting**: User authentication and vote validation
- 📊 **Live Results**: Real-time vote counting and result visualization
- 📱 **Responsive Design**: Works on desktop, tablet, and mobile
- ⏱️ **Time-Limited Polls**: Set expiration dates for polls
- 👥 **User Profiles**: Track voting history and created polls

## Tech Stack

### Frontend
- React.js with Hooks
- Tailwind CSS for styling
- Axios for API requests
- Chart.js for result visualization

### Backend
- Node.js with Express.js
- JWT for authentication
- MongoDB for data persistence
- Socket.io for real-time updates

### Development Tools
- Git for version control
- Docker for containerization
- Jest for testing

## Project Structure

```
I-VOTE-/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable React components
│   │   ├── pages/           # Page components
│   │   ├── services/        # API service layer
│   │   ├── hooks/           # Custom React hooks
│   │   └── App.js
│   └── package.json
├── backend/                  # Node.js/Express server
│   ├── src/
│   │   ├── models/          # MongoDB schemas
│   │   ├── routes/          # API routes
│   │   ├── controllers/      # Route handlers
│   │   ├── middleware/      # Authentication & validation
│   │   ├── utils/           # Helper functions
│   │   └── server.js
│   └── package.json
├── docker-compose.yml        # Docker setup
├── .gitignore
└── LICENSE
```

## Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/Junju-png/I-VOTE-.git
cd I-VOTE-
```

2. **Backend Setup**
```bash
cd backend
npm install
cp .env.example .env
npm start
```

3. **Frontend Setup**
```bash
cd frontend
npm install
npm start
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Polls
- `GET /api/polls` - Get all polls
- `POST /api/polls` - Create new poll
- `GET /api/polls/:id` - Get poll details
- `PUT /api/polls/:id` - Update poll
- `DELETE /api/polls/:id` - Delete poll

### Voting
- `POST /api/polls/:id/vote` - Submit a vote
- `GET /api/polls/:id/results` - Get poll results

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, email support@ivote.com or open an issue on GitHub.

---

Made with ❤️ by the I-VOTE team