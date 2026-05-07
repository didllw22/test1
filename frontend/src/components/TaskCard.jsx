import { CheckCircle2, Circle, Trash2 } from 'lucide-react';

export default function TaskCard({ task, onToggle, onDelete }) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-slate-950/75 p-5 shadow-glass transition duration-300 hover:-translate-y-1 hover:bg-slate-900/90">
      <div className="flex items-start gap-4">
        <button
          type="button"
          onClick={onToggle}
          className={`flex h-12 w-12 items-center justify-center rounded-3xl transition duration-300 ${
            task.done
              ? 'bg-sky-500/15 text-sky-300 shadow-[0_12px_30px_rgba(59,130,246,0.18)]'
              : 'bg-slate-900/70 text-slate-400 hover:bg-slate-800/80'
          }`}
          aria-label={task.done ? '완료 취소' : '완료 처리'}
        >
          {task.done ? <CheckCircle2 className="h-6 w-6" /> : <Circle className="h-6 w-6" />}
        </button>

        <div className="flex-1">
          <div className="flex items-center justify-between gap-4">
            <p className={`text-lg font-semibold transition ${task.done ? 'text-slate-400 line-through' : 'text-white'}`}>
              {task.text}
            </p>
            <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${
              task.done ? 'bg-sky-500/15 text-sky-200' : 'bg-white/5 text-slate-300'
            }`}>
              {task.done ? '완료됨' : '미완료'}
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            {task.done
              ? '깔끔하게 마무리된 작업입니다. 다시 클릭해서 상태를 되돌릴 수 있어요.'
              : '아직 진행 중인 작업입니다. 완료 시 체크 표시가 활성화됩니다.'}
          </p>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-3">
        <button
          type="button"
          onClick={onDelete}
          className="inline-flex items-center gap-2 rounded-3xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300 transition duration-300 hover:border-sky-400/40 hover:text-white hover:shadow-lg hover:shadow-sky-500/10"
        >
          <Trash2 className="h-4 w-4" /> 삭제
        </button>
      </div>
    </article>
  );
}
