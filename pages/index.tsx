import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [routine, setRoutine] = useState({});
  const [day, setDay] = useState("Monday");

  useEffect(() => {
    const fakeData = {
      Monday: ["Hello!", "How are you?", "Nice to meet you!"],
      Tuesday: ["I’m from Korea.", "What’s your name?"],
      Wednesday: ["It’s sunny today.", "I love music."],
      Thursday: ["I’m learning English!", "Let’s practice."],
      Friday: ["Good job!", "You did well this week!"]
    };
  
    setRoutine(fakeData);
  }, []);
  

  const todayLines = routine[day] || [];

  return (
    <>
      <Head>
        <title>Nexa 영어 루틴</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
      </Head>

      <div className="p-4 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">🧠 Nexa 영어 루틴 – {day}</h1>

        <div className="flex gap-2 mb-4">
          {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((d) => (
            <button
              key={d}
              className={`px-3 py-1 rounded-full border ${
                day === d ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setDay(d)}
            >
              {d.slice(0, 3)}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {todayLines.map((line: any, i: number) => (
            <div
              key={i}
              className="p-4 border rounded-lg shadow-sm flex flex-col gap-1 bg-white"
            >
              <div><strong>EN:</strong> {line.enA}</div>
              <div><strong>KR:</strong> {line.krA}</div>
              <div><strong>💬 연습:</strong> {line.responseEn}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
