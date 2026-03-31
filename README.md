# 🤖 AI Site Builder

A full-stack AI-powered website builder where users can generate, preview, edit, and deploy live website code using natural language prompts — powered by OpenAI GPT.

---

## 🚀 Features

- **AI Code Generation** — Describe your website in plain English and GPT generates clean, production-ready HTML/CSS/JS instantly
- **Live Preview** — See your generated website render in real-time directly in the browser
- **In-Browser Code Editor** — Edit the AI-generated code manually and watch changes reflect live
- **One-Click Deploy** — Deploy your generated site directly from the platform
- **JWT Authentication** — Secure user login and session management with role-based access control
- **Credit-Based Billing** — Stripe-integrated billing system with usage limits and payment management across user tiers
- **Project Management** — Save, revisit, and manage multiple website projects with full revision history
- **Reusable Components** — Modular backend built with Node.js, Express, and Prisma for scalability

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, HTML, CSS, JavaScript |
| Backend | Node.js, Express.js |
| Database | PostgreSQL (via Prisma ORM) |
| AI | OpenAI GPT API |
| Auth | JWT (JSON Web Tokens) |
| Payments | Stripe API |
| Version Control | Git, GitHub |

---

## ⚙️ Setup & Installation

### Prerequisites
Make sure you have the following installed:
- Node.js (v18+)
- PostgreSQL
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/ai-site-builder.git
cd ai-site-builder
```

### 2. Install Dependencies

**Backend:**
```bash
cd server
npm install
```

**Frontend:**
```bash
cd client
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the `/server` directory:

```env
# Server
PORT=5000

# Database
DATABASE_URL=postgresql://username:password@localhost:5432/aisitebuilder

# JWT
JWT_SECRET=your_jwt_secret_key

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 4. Setup Database
```bash
cd server
npx prisma migrate dev
npx prisma generate
```

### 5. Run the Application

**Start Backend:**
```bash
cd server
npm run dev
```

**Start Frontend:**
```bash
cd client
npm start
```

The app will be running at `http://localhost:3000`

---

## 📁 Project Structure

```
ai-site-builder/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route-level pages
│   │   └── App.js
├── server/                 # Node.js backend
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth & validation
│   ├── prisma/             # DB schema & migrations
│   └── index.js
└── README.md
```

---

## 🔐 Environment Variables Summary

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string |
| `JWT_SECRET` | Secret key for JWT token signing |
| `OPENAI_API_KEY` | OpenAI API key for GPT access |
| `STRIPE_SECRET_KEY` | Stripe secret key for payments |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook signing secret |

---

## 👨‍💻 Author

**Abhinav Mishra**
- LinkedIn: [linkedin.com/in/abhinav-mishra-00806b230](https://linkedin.com/in/abhinav-mishra-00806b230)

---


