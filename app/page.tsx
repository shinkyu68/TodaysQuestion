'use client';
import { useState } from 'react';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

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
    ],
    footerInfo: "※門脈は消化管から吸収された栄養物を肝臓に運ぶ「機能血管」です。"
  };

  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* ヘッダー部分 */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
          <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase tracking-wider">
            {quizData.category}
          </span>
          <h1 className="text-2xl font-black mt-2 tracking-tighter">
            {quizData.title}
          </h1>
        </div>

        {/* 問題文エリア */}
        <div className="p-8">
          <div className="bg-slate-50 rounded-2xl p-6 leading-loose text-slate-800 text-lg shadow-inner border border-slate-100">
            {quizData.textChunks.map((chunk, index) => (
              chunk.type === "text" ? (
                <span key={index}>{chunk.content}</span>
              ) : (
                <button
                  key={index}
                  onClick={() => setShowAll(!showAll)}
                  className={`mx-1 inline-flex items-center justify-center min-w-[5rem] px-2 py-0.5 rounded-md font-bold transition-all duration-300 ${
                    showAll 
                    ? "bg-red-50 text-red-600" 
                    : "bg-red-500 text-red-500 hover:bg-red-400"
                  }`}
                >
                  {showAll ? chunk.answer : `(${chunk.id})`}
                </button>
              )
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500 italic text-center">
            {quizData.footerInfo}
          </p>
        </div>

        {/* アクションボタン */}
        <div className="px-8 pb-8">
          <button 
            onClick={() => setShowAll(!showAll)}
            className={`w-full py-4 rounded-2xl font-black text-lg transition-all active:scale-95 shadow-lg ${
              showAll 
              ? "bg-slate-200 text-slate-600" 
              : "bg-orange-500 text-white hover:bg-orange-600 shadow-orange-200"
            }`}
          >
            {showAll ? "答えを隠す" : "すべて表示"}
          </button>
        </div>
      </div>
    </main>
  );
}
