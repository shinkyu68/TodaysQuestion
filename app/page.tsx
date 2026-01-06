'use client';
import { useState } from 'react';

export default function Home() {
  // 開いている穴埋め番号を記録するセット
  const [openIds, setOpenIds] = useState<number[]>([]);

  // クリックしたIDの表示・非表示を切り替える関数
  const toggleAnswer = (id: number) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(i => i !== id)); // すでにあれば消す
    } else {
      setOpenIds([...openIds, id]); // なければ追加する
    }
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
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* ヘッダー */}
        <div className="bg-blue-600 p-6 text-white text-center">
          <span className="text-xs font-bold bg-white/20 px-3 py-1 rounded-full uppercase">
            {quizData.category}
          </span>
          <h1 className="text-xl font-bold mt-2">{quizData.title}</h1>
        </div>

        {/* 問題文 */}
        <div className="p-6">
          <div className="bg-gray-50 rounded-xl p-5 leading-relaxed text-gray-800 text-lg shadow-inner">
            {quizData.textChunks.map((chunk, index) => (
              chunk.type === "text" ? (
                <span key={index}>{chunk.content}</span>
              ) : (
                <button
                  key={index}
                  onClick={() => toggleAnswer(chunk.id!)}
                  className={`mx-1 inline-flex items-center justify-center min-w-[4rem] px-2 py-0.5 rounded-md font-bold transition-all ${
                    openIds.includes(chunk.id!) 
                    ? "bg-red-100 text-red-600 border border-red-200" 
                    : "bg-red-500 text-white shadow-sm active:scale-95"
                  }`}
                >
                  {openIds.includes(chunk.id!) ? chunk.answer : `(${chunk.id})`}
                </button>
              )
            ))}
          </div>

          <button 
            onClick={() => setOpenIds([])}
            className="mt-6 w-full py-3 bg-gray-200 text-gray-600 rounded-xl font-bold hover:bg-gray-300 transition"
          >
            すべて隠す
          </button>
        </div>
      </div>
    </main>
  );
}
