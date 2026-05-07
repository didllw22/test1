import { Sparkles } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="rounded-[28px] border border-dashed border-white/10 bg-slate-950/60 p-12 text-center text-slate-300 shadow-lg shadow-slate-950/30">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-sky-500/10 text-sky-200 shadow-xl shadow-sky-500/15">
        <Sparkles className="h-10 w-10" />
      </div>
      <h3 className="mt-8 text-2xl font-semibold text-white">오늘의 첫 작업을 시작해 보세요.</h3>
      <p className="mt-3 max-w-xl mx-auto text-sm leading-7 text-slate-400">
        체크리스트가 비어있습니다. 입력창에 할 일을 추가하면 바로 프리미엄 카드 리스트가 생성됩니다.
      </p>
      <div className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900/80 px-5 py-3 text-sm text-slate-300 ring-1 ring-white/10">
        Tip: Enter 키 또는 추가 버튼으로 빠르게 입력하세요.
      </div>
    </div>
  );
}
