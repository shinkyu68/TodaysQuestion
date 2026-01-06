'use client';
import { useState } from 'react';

export default function Home() {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleAnswer = (id: number) => {
    setOpenIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const quizData = {
    title: "門脈循環トレーニング",
    category: "解剖学 / 生理学",
    textChunks: [
      { type: "text", content: "通常、多くの臓器の静脈は直接（" },
      { type: "blank", id: 1, answer: "下大静脈" },
      { type: "text", content: "）へと戻りますが、胃、小腸、大腸、直腸、膵臓、脾臓、胆嚢などの（" },
      { type: "blank", id: 2, answer: "腹腔内" },
      { type: "text", content: "）臓器の静脈は、一度（" },
      { type: "blank", id: 3, answer: "門脈" },
      { type: "text", content: "）という太い血管にまとめられて（" },
      { type: "blank", id: 4, answer: "肝臓" },
      { type: "text", content: "）に流入します。" },
    ]
  };

  return (
    <main className="min-h-screen bg-[#f0f2f5] flex items-start justify-center p-4 pt-10 font-sans">
      <div className="w-full max-w-md bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border border-white">
        
        {/* ヘッダー：グラデーションとシャドウ */}
        <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-500 p-8 text-white relative">
          <div className="absolute top-4 right-6 opacity-20 text-4xl font-black">01</div>
          <p className="text-xs font-bold tracking-[0.2em] opacity-80 mb-1">{quizData.category}</p>
          <h1 className="text-2xl font-black tracking-tighter">{quizData.title}</h1>
        </div>

        {/* コンテンツ：読みやすさ重視のタイポグラフィ */}
        <div className="p-8">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white rounded-2xl p-6 leading-[2.2] text-slate-700 text-[1.15rem] border border-slate-50">
              {quizData.textChunks.map((chunk, index) => (
                chunk.type === "text" ? (
                  <span key={index}>{chunk.content}</span>
                ) : (
                  <button
                    key={index}
                    onClick={() => toggleAnswer(chunk.id!)}
                    className={`mx-1.5 inline-flex items-center justify-center min-w-[5rem] px-3 py-1 rounded-xl font-bold transition-all duration-500 shadow-sm ${
                      openIds.includes(chunk.id!) 
                      ? "bg-rose-50 text-rose-600 border-rose-200 scale-105" 
                      : "bg-rose-500 text-rose-500 hover:brightness-110 active:scale-90"
                    }`}
                  >
                    {openIds.includes(chunk.id!) ? chunk.answer : `?`}
                  </button>
                )
              ))}
            </div>
          </div>

          <div className="mt-10 space-y-3">
            <button 
              onClick={() => setOpenIds([1,2,3,4])}
              className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl active:scale-[0.98] transition-all"
            >
              すべての正解を表示
            </button>
            <button 
              onClick={() => setOpenIds([])}
              className="w-full py-3 bg-white text-slate-400 rounded-2xl font-bold text-sm hover:text-slate-600 transition-colors"
            >
              リセットして隠す
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
