'use client';
import { useState } from 'react';

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  // 穴埋め問題のデータ
  const quizData = {
    title: "門脈循環トレーニング",
    text: "通常、多くの臓器の静脈は直接（ ① ）へと戻りますが、胃、小腸、大腸、直腸、膵臓、脾臓、胆嚢などの（ ② ）臓器の静脈は、一度（ ③ ）という太い血管にまとめられて（ ④ ）に流入します。これに対し、（ ④ ）に酸素を供給する（ ⑦ ）は肝動脈です。",
    answers: {
      1: '下大静脈',
      2: '腹腔内',
      3: '門脈',
      4: '肝臓',
      7: '栄養血管',
    }
  };

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-2xl shadow-xl">
        <h1 className="text-2xl font-bold mb-6 text-blue-800 border-b-2 pb-2">
          {quizData.title}
        </h1>
        
        <p className="text-lg leading-loose text-gray-700 mb-8">
          通常、多くの臓器の静脈は直接（ 
          <span className="font-bold text-red-600 border-b-2 border-red-300 px-2 cursor-pointer" onClick={() => setShowAll(!showAll)}>
            {showAll ? quizData.answers[1] : ' ① '}
          </span>
          ）へと戻りますが、胃、小腸、大腸、直腸、膵臓、脾臓、胆嚢などの（ 
          <span className="font-bold text-red-600 border-b-2 border-red-300 px-2 cursor-pointer" onClick={() => setShowAll(!showAll)}>
            {showAll ? quizData.answers[2] : ' ② '}
          </span>
          ）臓器の静脈は、一度（ 
          <span className="font-bold text-red-600 border-b-2 border-red-300 px-2 cursor-pointer" onClick={() => setShowAll(!showAll)}>
            {showAll ? quizData.answers[3] : ' ③ '}
          </span>
          ）という太い血管にまとめられて（ 
          <span className="font-bold text-red-600 border-b-2 border-red-300 px-2 cursor-pointer" onClick={() => setShowAll(!showAll)}>
            {showAll ? quizData.answers[4] : ' ④ '}
          </span>
          ）に流入します。
        </p>

        <button 
          onClick={() => setShowAll(!showAll)}
          className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition"
        >
          {showAll ? "答えを隠す" : "答えをすべて表示"}
        </button>
      </div>
    </main>
  );
}
