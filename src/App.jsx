import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-sky-50 text-gray-900">
      <header className="flex items-center justify-between px-6 py-4 border-b bg-white/60 backdrop-blur-sm">
        <h1 className="text-2xl font-semibold">Self-Care Pet</h1>
        <nav className="space-x-4">
          <Link to="/" className="text-sm text-gray-600 hover:text-gray-800">
            Dashboard
          </Link>
        </nav>
      </header>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  );
}
