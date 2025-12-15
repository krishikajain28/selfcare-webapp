import React from "react";

export default function Pet({ pet }) {
  if (!pet) {
    return (
      <div className="text-center py-8">
        <div className="text-6xl">🐣</div>
        <p className="text-sm text-gray-500 mt-2">No pet yet</p>
      </div>
    );
  }

  const mood =
    pet.happiness >= 71
      ? "ecstatic"
      : pet.happiness >= 31
      ? "neutral"
      : "sleepy";
  const moodText =
    mood === "ecstatic" ? "Ecstatic" : mood === "neutral" ? "Happy" : "Sleepy";

  return (
    <div className="text-center">
      <div className="text-6xl">{pet.skinEmoji}</div>
      <h3 className="mt-2 text-xl font-medium">{pet.name}</h3>
      <p className="text-sm text-gray-500">{moodText}</p>
    </div>
  );
}
