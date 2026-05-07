import { useMemo, useState } from 'react';
import { Plus, Sparkles, CheckCircle2, Trash2 } from 'lucide-react';
import TaskCard from './components/TaskCard.jsx';
import EmptyState from './components/EmptyState.jsx';

const initialTasks = [];

export default function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [input, setInput] = useState('');

  const completedCount = useMemo(
    () => tasks.filter((task) => task.done).length,
    [tasks],
  );

  const handleAddTask = (event) => {
    event.preventDefault();
    const trimmedValue = input.trim();
    if (!trimmedValue) return;

    setTasks((prev) => [
      {
        id: crypto.randomUUID(),
        text: trimmedValue,
        done: false,
      },
      ...prev,
    ]);
    setInput('');
  };

  const handleToggle = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.35),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_20%),linear-gradient(180deg,_#020617,_#071028)] text-slate-100">
      <div className="relative isolate px-6 py-10 lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle,_rgba(96,165,250,0.22),_transparent_25%),radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.2),_transparent_22%)] blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <header className="mb-10 flex flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-glass backdrop-blur-xl">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <p className="inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 shadow-sm shadow-sky-500/10">
                  <Sparkles className="h-4 w-4" /> Premium Checklist
                </p>
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  일상의 중요한 일을 스타일리시하게 관리하세요.
                </h1>
                <p className="max-w-2xl text-slate-300 sm:text-lg">
                  유려한 인터페이스로 체크리스트를 경험해 보세요.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5 text-right shadow-xl shadow-slate-950/20 ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">완료된 작업</p>
                <p className="mt-2 text-4xl font-semibold text-white">{completedCount}</p>
                <p className="mt-1 text-sm text-slate-400">총 {tasks.length}개의 항목 중</p>
              </div>
            </div>

            <form
              onSubmit={handleAddTask}
              className="grid gap-4 rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/30 sm:grid-cols-[1fr_auto]"
            >
              <label className="sr-only" htmlFor="task-input">
                Add task
              </label>
              <div className="relative">
                <input
                  id="task-input"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="새로운 할 일을 입력하세요..."
                  className="w-full rounded-3xl border border-slate-800/80 bg-slate-950/90 px-5 py-4 text-lg text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/30"
                />
                <span className="pointer-events-none absolute inset-y-0 right-4 top-1/2 hidden -translate-y-1/2 text-slate-500 sm:block">
                  Enter로 바로 추가
                </span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-3xl bg-gradient-to-r from-sky-500 via-blue-500 to-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-sky-500/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/30 focus:outline-none focus:ring-2 focus:ring-sky-300"
              >
                <Plus className="h-5 w-5" /> 추가하기
              </button>
            </form>
          </header>

          <main className="space-y-6">
            <section className="space-y-4 rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-white">체크리스트</h2>
                  <p className="text-sm text-slate-400">
                    완료된 항목은 자동으로 상태가 업데이트됩니다.
                  </p>
                </div>
                <span className="inline-flex items-center rounded-full bg-slate-950/70 px-4 py-2 text-sm text-slate-300 ring-1 ring-white/10">
                  {tasks.length}개의 항목 표시
                </span>
              </div>

              {tasks.length > 0 ? (
                <div className="grid gap-4 lg:grid-cols-2">
                  {tasks.map((task) => (
                    <TaskCard
                      key={task.id}
                      task={task}
                      onToggle={() => handleToggle(task.id)}
                      onDelete={() => handleDelete(task.id)}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
