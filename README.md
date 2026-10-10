# Medical College Attendance System

🏥 An AI-powered, intelligent attendance tracking system for medical colleges with fully automated timetable parsing, real-time synchronization, and beautiful dashboards.

## Features

### 🤖 Full AI Automation
- **AI Timetable Parsing**: Upload any timetable format (image, PDF, handwritten, screenshot, Excel) - AI automatically understands and processes it
- **AI Schedule Understanding**: AI intelligently extracts class times, venues, instructors, departments, and subject codes
- **AI Attendance Marking**: AI-powered facial recognition, biometric, and RFID integration
- **AI Analytics**: Predictive attendance patterns, anomaly detection, and automated alerts
- **AI Conversation**: Chat with AI to query attendance, generate reports, get insights
- **Auto Synchronization**: AI automatically syncs timetables to student dashboards
- **Smart Notifications**: AI sends context-aware alerts to students and faculty
- **Auto-Attendance Processing**: AI processes attendance uploads and calculates percentages automatically

### 📊 Student Dashboard
- Real-time attendance percentage display (auto-calculated)
- Personalized AI-generated timetable view
- AI-powered attendance insights and trends
- Alert system for low attendance (AI-triggered)
- Course-wise attendance breakdown with predictions
- Query attendance using natural language

### 👨‍🏫 Department Dashboard
- **1-Click Upload**: Simply upload timetable (any format) - AI handles everything
- **Batch Attendance Upload**: Upload student attendance - AI validates and processes
- **AI Quality Check**: Automatic verification and anomaly detection
- **Automated Reports**: AI generates class-wise, department-wise reports
- **Predictive Analytics**: AI forecasts attendance trends and identifies at-risk students

### 🎨 User Experience
- Modern, polished, premium UI design
- Real-time live updates
- Mobile-responsive design
- Dark/Light theme with system detection
- Smooth animations and transitions
- Glassmorphism & gradient effects
- Accessibility-first design

## Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Beautiful styling
- **Framer Motion** - Premium animations
- **Recharts** - Interactive data visualizations
- **React Query** - Real-time state management
- **Zustand** - Lightweight state management

### Backend
- **Node.js + Express** - Scalable server
- **PostgreSQL** - Reliable database
- **TypeScript** - Type safety
- **JWT** - Secure authentication
- **WebSocket** - Real-time updates

### AI & ML Services (Python)
- **LangChain** - AI orchestration and chains
- **GPT-4/Claude** - General intelligence, NLP, understanding
- **Gemini Vision** - Multimodal image understanding
- **pytesseract/EasyOCR** - Fallback OCR
- **spaCy** - NLP for entity extraction
- **TensorFlow/PyTorch** - Deep learning models
- **face_recognition** - Facial recognition for attendance
- **pandas** - Data processing

### DevOps & Deployment
- **Docker** - Containerization
- **Docker Compose** - Multi-service orchestration
- **GitHub Actions** - CI/CD pipelines
- **AWS/GCP** - Cloud deployment

## How Full AI Automation Works

### 1. Timetable Upload Flow
```
Department Uploads File (any format)
        ↓
AI Vision Model processes image/PDF
        ↓
AI LLM understands structure & context
        ↓
AI extracts: Classes, Times, Venues, Instructors, Students
        ↓
AI validates data quality
        ↓
Auto-synced to Student Dashboards
        ↓
Students see live timetables instantly
```

### 2. Attendance Upload Flow
```
Department uploads attendance file/list
        ↓
AI processes and validates entries
        ↓
AI detects anomalies (students marked twice, etc)
        ↓
AI auto-calculates attendance percentages
        ↓
AI generates individual student reports
        ↓
Students receive instant updates
```

### 3. Real-time Features
- **Automatic Syncing**: AI continuously monitors and updates data
- **Smart Notifications**: AI sends alerts when attendance drops below threshold
- **Predictive Warnings**: AI warns students about attendance 2 weeks in advance
- **Auto-Reports**: AI generates weekly/monthly reports automatically

## Quick Start

### Prerequisites
- Node.js 18+
- Python 3.9+
- PostgreSQL 13+
- Docker & Docker Compose
- API Keys: OpenAI/Claude, Google Gemini, AWS/GCP

### Installation

```bash
# Clone repository
git clone https://github.com/aaffrid2-crypto/medical-college-attendance-system.git
cd medical-college-attendance-system

# Install dependencies
npm install
cd ai-services && pip install -r requirements.txt

# Setup environment variables
cp .env.example .env
# Edit .env with your AI API keys

# Start with Docker
docker-compose up -d

# Run database migrations
npm run db:migrate

# Start development
npm run dev
```

Access:
- Frontend: http://localhost:3000
- Backend API: http://localhost:3001
- AI Service: http://localhost:5000

## Project Structure

```
.
├── frontend/                       # React + TypeScript UI
│   ├── src/
│   │   ├── components/
│   │   │   ├── Dashboard/
│   │   │   ├── Timetable/
│   │   │   ├── Attendance/
│   │   │   ├── Reports/
│   │   │   └── Common/
│   │   ├── pages/
│   │   ├── hooks/
│   │   ├── services/              # API client
│   │   ├── store/                 # Zustand stores
│   │   ├── types/
│   │   └── styles/
│   └── package.json
│
├── backend/                        # Node.js Express API
│   ├── src/
│   │   ├── api/
│   │   │   ├── timetable/
│   │   │   ├── attendance/
│   │   │   ├── students/
│   │   │   ├── reports/
│   │   │   └── ai/
│   │   ├── services/
│   │   │   ├── timetableService.ts
│   │   │   ├── attendanceService.ts
│   │   │   └── aiService.ts
│   │   ├── models/                # Database models
│   │   ├── middleware/
│   │   ├── database/
│   │   │   └── migrations/
│   │   └── config/
│   └── package.json
│
├── ai-services/                    # Python AI Engine
│   ├── services/
│   │   ├── timetable_parser.py     # Main AI parser
│   │   ├── attendance_processor.py # Attendance AI
│   │   ├── nlp_engine.py           # NLP & conversation
│   │   ├── vision_processor.py     # Vision AI
│   │   └── analytics.py            # Predictive analytics
│   ├── models/
│   ├── utils/
│   ├── app.py                      # Flask server
│   └── requirements.txt
│
├── docker-compose.yml
├── .env.example
└── README.md
```

## Key AI Components

### Timetable Parser AI
- Understands any timetable format
- Extracts structured data automatically
- Handles handwritten, printed, digital formats
- Validates and cross-references with student records

### Attendance Processor AI
- Processes batch uploads
- Calculates percentages automatically
- Detects errors and anomalies
- Generates insights

### NLP Engine
- Conversational interface
- Natural language queries
- Automated report generation
- Context understanding

### Analytics AI
- Predictive modeling
- Trend analysis
- Anomaly detection
- Risk assessment

## API Documentation

See [API_DOCS.md](./docs/API_DOCS.md)

## Contributing

Contributions welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md)

## License

MIT License - See LICENSE file

## Support

For issues and questions, create a GitHub issue.
