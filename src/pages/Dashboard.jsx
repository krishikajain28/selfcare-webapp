import React, { useState } from "react";
import Pet from "../components/Pet";

export default function Dashboard() {
  // local demo pet state (frontend-first: no backend required)
  const [pet, setPet] = useState({
    name: "Pip",
    skinEmoji: "🐰",
    happiness: 62,
    coins: 42,
  });

  function handleMoodLog() {
    // simple client-side update to simulate coin reward + pet happiness
    setPet((prev) => {
      const newCoins = prev.coins + 5;
      const newHappiness = Math.min(100, prev.happiness + 8);
      return { ...prev, coins: newCoins, happiness: newHappiness };
    });
  }

  function handleHabit(name) {
    setPet((prev) => {
      const newCoins = prev.coins + 2;
      const newHappiness = Math.min(100, prev.happiness + 2);
      return { ...prev, coins: newCoins, happiness: newHappiness };
    });
  }

  function completeGoal() {
    setPet((prev) => {
      const newCoins = prev.coins + 20;
      const newHappiness = Math.min(100, prev.happiness + 20);
      return { ...prev, coins: newCoins, happiness: newHappiness };
    });
  }

  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      <section className="md:col-span-1 bg-white rounded-2xl p-6 shadow">
        <Pet pet={pet} />
        <div className="mt-4 text-center">
          <div className="text-sm text-gray-500">Coins</div>
          <div className="text-2xl font-semibold">{pet.coins}</div>
        </div>
      </section>

      <section className="md:col-span-2 bg-white rounded-2xl p-6 shadow space-y-4">
        <h2 className="text-lg font-medium">Quick actions</h2>
        <div className="flex gap-3 flex-wrap">
          <button
            onClick={handleMoodLog}
            className="px-4 py-2 rounded-lg bg-pink-500 text-white hover:bg-pink-600"
          >
            Log Mood (+5)
          </button>
          <button
            onClick={() => handleHabit("water")}
            className="px-4 py-2 rounded-lg bg-emerald-500 text-white hover:bg-emerald-600"
          >
            Drink Water (+2)
          </button>
          <button
            onClick={() => handleHabit("exercise")}
            className="px-4 py-2 rounded-lg bg-sky-500 text-white hover:bg-sky-600"
          >
            Exercise (+2)
          </button>
          <button
            onClick={completeGoal}
            className="px-4 py-2 rounded-lg bg-violet-500 text-white hover:bg-violet-600"
          >
            Complete Goal (+20)
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-sm text-gray-600">Pet status</h3>
          <div className="mt-2">
            <div className="text-sm">Happiness: {pet.happiness}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2 overflow-hidden">
              <div
                className="h-3 bg-amber-400"
                style={{ width: `${pet.happiness}%` }}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 text-gray-500 text-sm">
          This is a frontend-only demo state. Later we will replace these
          handlers with API calls to your backend.
        </div>
      </section>
    </div>
  );
}
