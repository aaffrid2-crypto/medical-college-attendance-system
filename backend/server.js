const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

const students = [
  { id: 1, name: 'Aarohi Verma', department: 'MBBS', year: 'Year 2', rollNo: 'MBBS-202', attendance: 92 },
  { id: 2, name: 'Riya Nair', department: 'MBBS', year: 'Year 2', rollNo: 'MBBS-214', attendance: 88 },
  { id: 3, name: 'Kabir Shah', department: 'Dental', year: 'Year 3', rollNo: 'DENT-118', attendance: 76 },
  { id: 4, name: 'Nadia Hassan', department: 'Nursing', year: 'Year 1', rollNo: 'NUR-210', attendance: 95 },
  { id: 5, name: 'Tariq Khan', department: 'MBBS', year: 'Year 4', rollNo: 'MBBS-095', attendance: 70 },
  { id: 6, name: 'Sneha Patel', department: 'Physiotherapy', year: 'Year 2', rollNo: 'PHY-160', attendance: 90 }
];

let timetable = [
  {
    id: 1,
    course: 'Anatomy',
    day: 'Monday',
    time: '08:00 - 09:30',
    room: 'Lecture Hall A1',
    faculty: 'Dr. Mehta',
    department: 'MBBS'
  },
  {
    id: 2,
    course: 'Physiology',
    day: 'Tuesday',
    time: '09:00 - 10:30',
    room: 'Lab 2',
    faculty: 'Dr. Shah',
    department: 'MBBS'
  },
  {
    id: 3,
    course: 'Pathology',
    day: 'Wednesday',
    time: '10:00 - 11:30',
    room: 'Room 45',
    faculty: 'Dr. Iqbal',
    department: 'MBBS'
  },
  {
    id: 4,
    course: 'Dental Clinical',
    day: 'Thursday',
    time: '11:00 - 12:30',
    room: 'Clinic Block',
    faculty: 'Dr. Fernandes',
    department: 'Dental'
  },
  {
    id: 5,
    course: 'Fundamentals of Nursing',
    day: 'Friday',
    time: '09:00 - 10:30',
    room: 'Nursing Lab',
    faculty: 'Dr. Singh',
    department: 'Nursing'
  }
];

const tone = {
  good: 'Strong',
  alert: 'Needs attention',
  warning: 'Risk level'
};

const getDashboard = () => {
  const totalStudents = students.length;
  const averageAttendance = Math.round(
    students.reduce((sum, student) => sum + student.attendance, 0) / totalStudents
  );

  const lowAttendance = students.filter((student) => student.attendance < 80).length;

  return {
    stats: {
      totalStudents,
      departments: [...new Set(students.map((student) => student.department))].length,
      averageAttendance,
      lowAttendance,
      timetableCount: timetable.length
    },
    insights: [
      { title: 'AI Sync Status', value: 'Live', tone: tone.good, description: 'Timetables are auto-linked to student dashboards.' },
      { title: 'Attendance Trend', value: '+4.8%', tone: tone.good, description: 'Attendance has improved this week over the previous one.' },
      { title: 'Risk Alert', value: '3 Students', tone: tone.warning, description: 'Low-attendance students are flagged for review.' },
      { title: 'Faculty Coverage', value: '89%', tone: tone.good, description: 'Department schedules are fully assigned.' }
    ]
  };
};

app.get('/api/dashboard', (req, res) => {
  res.json(getDashboard());
});

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.get('/api/timetable', (req, res) => {
  res.json(timetable);
});

app.get('/api/attendance', (req, res) => {
  const rows = students.map((student) => ({
    id: student.id,
    name: student.name,
    department: student.department,
    rollNo: student.rollNo,
    percentage: student.attendance,
    status: student.attendance >= 85 ? 'Present' : student.attendance >= 75 ? 'Watchlist' : 'At Risk',
    trend: student.attendance >= 85 ? 'Up' : 'Down'
  }));

  res.json(rows);
});

app.get('/api/ai-summary', (req, res) => {
  res.json({
    summary: [
      'AI identified 5 timetable entries and mapped them to the correct departments.',
      'Attendance is trending upward for MBBS students this week.',
      'Three students are flagged for attendance counseling based on threshold rules.',
      'Automated reminders can be sent to each student after 2 missed classes.'
    ]
  });
});

app.post('/api/timetable/upload', (req, res) => {
  const { department = 'MBBS', title = 'AI Parsed Timetable', entries = [] } = req.body;

  const parsedEntries = entries.length
    ? entries.map((entry, index) => ({
        id: Date.now() + index,
        course: entry.course || 'New Session',
        day: entry.day || 'Monday',
        time: entry.time || '09:00 - 10:30',
        room: entry.room || 'Automation Hall',
        faculty: entry.faculty || 'AI Scheduler',
        department
      }))
    : [
        {
          id: Date.now(),
          course: `${title} - Auto Slot`,
          day: 'Monday',
          time: '10:00 - 11:30',
          room: 'Department Lab',
          faculty: 'AI Scheduler',
          department
        }
      ];

  timetable = [...parsedEntries, ...timetable];

  res.json({
    message: 'Timetable uploaded and synchronized by AI.',
    uploaded: parsedEntries
  });
});

app.post('/api/attendance/update', (req, res) => {
  const { studentId, percentage } = req.body;

  const index = students.findIndex((student) => student.id === Number(studentId));

  if (index === -1) {
    return res.status(404).json({ message: 'Student not found' });
  }

  students[index].attendance = Number(percentage);

  res.json({
    message: 'Attendance updated successfully',
    student: students[index]
  });
});

app.get('/', (req, res) => {
  res.json({ status: 'Medical College Attendance API is running' });
});

app.listen(PORT, () => {
  console.log(`Medical attendance server running at http://localhost:${PORT}`);
});
