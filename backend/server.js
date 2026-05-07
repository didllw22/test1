import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

let tasks = [
  { id: 'task-1', text: '프리미엄 체크리스트 UI 검토', done: false },
  { id: 'task-2', text: '서비스형 앱 느낌으로 스타일 조정', done: true },
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Premium checklist backend is running.' });
});

app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/api/tasks', (req, res) => {
  const { text } = req.body;
  if (!text || typeof text !== 'string') {
    return res.status(400).json({ error: '유효한 text가 필요합니다.' });
  }

  const newTask = {
    id: `task-${Date.now()}`,
    text: text.trim(),
    done: false,
  };
  tasks.unshift(newTask);
  res.status(201).json(newTask);
});

app.patch('/api/tasks/:id/toggle', (req, res) => {
  const { id } = req.params;
  const task = tasks.find((item) => item.id === id);
  if (!task) {
    return res.status(404).json({ error: '작업을 찾을 수 없습니다.' });
  }
  task.done = !task.done;
  res.json(task);
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = tasks.length;
  tasks = tasks.filter((item) => item.id !== id);
  if (tasks.length === initialLength) {
    return res.status(404).json({ error: '삭제할 작업을 찾을 수 없습니다.' });
  }
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
