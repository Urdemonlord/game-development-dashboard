import React, { useState } from "react";
import { CheckCircle2, Circle, CalendarDays, BookOpen, GamepadIcon } from "lucide-react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    // Fase 1: Persiapan Proposal
    { 
      date: "28 Mar 2025", 
      task: "Review pedoman proposal", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      date: "29 Mar 2025", 
      task: "Brainstorm konsep game", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      date: "30 Mar 2025", 
      task: "Kumpulkan referensi jurnal", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      date: "31 Mar 2025", 
      task: "Tulis Bab 1: Pendahuluan", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    
    // Fase 2: Pengembangan Awal Game
    { 
      date: "1 Apr 2025", 
      task: "Desain UI game (sketsa awal)", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      date: "2 Apr 2025", 
      task: "Setup proyek game di Unity", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      date: "3 Apr 2025", 
      task: "Implementasi basic movement", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      date: "4 Apr 2025", 
      task: "Tulis Bab 2: Kajian Pustaka", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    
    // Fase 3: Implementasi dan Pengujian Awal
    { 
      date: "10 Apr 2025", 
      task: "Buat sistem quest dalam game", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      date: "15 Apr 2025", 
      task: "Integrasi UI dengan gameplay", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      date: "20 Apr 2025", 
      task: "Tulis Bab 3: Metode Penelitian", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      date: "25 Apr 2025", 
      task: "Playtesting awal", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    
    // Fase 4: Penyempurnaan dan Seminar Proposal
    { 
      date: "1 Mei 2025", 
      task: "Perbaikan skripsi Bab 1-3", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      date: "5 Mei 2025", 
      task: "Finalisasi prototype game", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      date: "10 Mei 2025", 
      task: "Simulasi seminar proposal", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      date: "15 Mei 2025", 
      task: "Presentasi seminar proposal", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
  ]);

  const [filter, setFilter] = useState("Semua");

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const filteredTasks = filter === "Semua" 
    ? tasks 
    : tasks.filter(task => task.phase === filter);

  const uniquePhases = ["Semua", ...new Set(tasks.map(task => task.phase))];

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-extrabold text-gray-800 flex items-center">
            <CalendarDays className="mr-3 text-indigo-600" />
            Game Development Progress
          </h1>
          <div className="flex space-x-2">
            {uniquePhases.map((phaseOption) => (
              <button
                key={phaseOption}
                onClick={() => setFilter(phaseOption)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === phaseOption 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {phaseOption}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {filteredTasks.map((task, index) => (
              <div 
                key={index} 
                className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                  task.completed ? 'opacity-60' : ''
                }`}
              >
                <div className="flex items-center space-x-4">
                  {task.icon}
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">{task.date}</span>
                      {task.completed && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <p className={`font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                      {task.task}
                    </p>
                    <span className="text-xs text-gray-400">{task.phase}</span>
                  </div>
                </div>
                <button 
                  onClick={() => toggleTask(index)} 
                  className={`
                    flex items-center justify-center w-24 py-2 rounded-full text-sm font-medium transition-all
                    ${task.completed 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }
                  `}
                >
                  {task.completed ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Selesai
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 mr-2" />
                      Check-in
                    </>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-gray-500 text-sm">
          Total Tugas: {tasks.length} | 
          Tugas Selesai: {tasks.filter(task => task.completed).length}
        </div>
      </div>
    </div>
  );
}