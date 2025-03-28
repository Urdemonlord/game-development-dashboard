import React, { useState, useEffect } from "react";
import { CheckCircle2, Circle, CalendarDays, BookOpen, GamepadIcon, Sun, Moon } from "lucide-react";

export default function Dashboard() {
  const [tasks, setTasks] = useState([
    // Fase 1: Persiapan Proposal
    { 
      id: 1,
      date: "28 Mar 2025", 
      task: "Review pedoman proposal", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      id: 2,
      date: "29 Mar 2025", 
      task: "Brainstorm konsep game", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      id: 3,
      date: "30 Mar 2025", 
      task: "Kumpulkan referensi jurnal", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      id: 4,
      date: "31 Mar 2025", 
      task: "Tulis Bab 1: Pendahuluan", 
      completed: false, 
      phase: "Persiapan Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    
    // Fase 2: Pengembangan Awal Game
    { 
      id: 5,
      date: "1 Apr 2025", 
      task: "Desain UI game (sketsa awal)", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      id: 6,
      date: "2 Apr 2025", 
      task: "Setup proyek game di Unity", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      id: 7,
      date: "3 Apr 2025", 
      task: "Implementasi basic movement", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      id: 8,
      date: "4 Apr 2025", 
      task: "Tulis Bab 2: Kajian Pustaka", 
      completed: false, 
      phase: "Pengembangan Awal Game",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    
    // Fase 3: Implementasi dan Pengujian Awal
    { 
      id: 9,
      date: "10 Apr 2025", 
      task: "Buat sistem quest dalam game", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      id: 10,
      date: "15 Apr 2025", 
      task: "Integrasi UI dengan gameplay", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      id: 11,
      date: "20 Apr 2025", 
      task: "Tulis Bab 3: Metode Penelitian", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      id: 12,
      date: "25 Apr 2025", 
      task: "Playtesting awal", 
      completed: false, 
      phase: "Implementasi dan Pengujian Awal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    
    // Fase 4: Penyempurnaan dan Seminar Proposal
    { 
      id: 13,
      date: "1 Mei 2025", 
      task: "Perbaikan skripsi Bab 1-3", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      id: 14,
      date: "5 Mei 2025", 
      task: "Finalisasi prototype game", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <GamepadIcon className="w-5 h-5 text-purple-600" />
    },
    { 
      id: 15,
      date: "10 Mei 2025", 
      task: "Simulasi seminar proposal", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
    { 
      id: 16,
      date: "15 Mei 2025", 
      task: "Presentasi seminar proposal", 
      completed: false, 
      phase: "Penyempurnaan dan Seminar Proposal",
      icon: <BookOpen className="w-5 h-5 text-blue-600" />
    },
  ]);

  const [filter, setFilter] = useState("Semua");
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme ? savedTheme === 'dark' 
        : window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const toggleTask = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const filteredTasks = filter === "Semua" 
    ? tasks 
    : tasks.filter(task => task.phase === filter);

  const uniquePhases = ["Semua", ...new Set(tasks.map(task => task.phase))];

  return (
    <div className={`min-h-screen p-8 transition-colors ${
      isDark ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-3xl font-extrabold flex items-center ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            <CalendarDays className="mr-3 text-indigo-600" />
            Game Development Progress
          </h1>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-colors ${
                isDark ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-600'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="flex space-x-2">
              {uniquePhases.map((phaseOption) => (
                <button
                  key={phaseOption}
                  onClick={() => setFilter(phaseOption)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    filter === phaseOption 
                      ? 'bg-indigo-600 text-white' 
                      : isDark 
                        ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {phaseOption}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className={`shadow-lg rounded-lg overflow-hidden ${
          isDark ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className={`divide-y ${
            isDark ? 'divide-gray-700' : 'divide-gray-200'
          }`}>
            {filteredTasks.map((task) => (
              <div 
                key={task.id} 
                className={`flex items-center justify-between p-4 transition-colors ${
                  task.completed ? 'opacity-60' : ''
                } ${
                  isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-4">
                  {task.icon}
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-500'
                      }`}>{task.date}</span>
                      {task.completed && (
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                      )}
                    </div>
                    <p className={`font-semibold ${
                      task.completed 
                        ? 'line-through text-gray-500' 
                        : isDark ? 'text-white' : 'text-gray-800'
                    }`}>
                      {task.task}
                    </p>
                    <span className={`text-xs ${
                      isDark ? 'text-gray-500' : 'text-gray-400'
                    }`}>{task.phase}</span>
                  </div>
                </div>
                <button 
                  onClick={() => toggleTask(task.id)} 
                  className={`
                    flex items-center justify-center w-24 py-2 rounded-full text-sm font-medium transition-all
                    ${task.completed 
                      ? 'bg-green-100 text-green-700 hover:bg-green-200' 
                      : isDark
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
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

        <div className={`mt-6 text-center text-sm ${
          isDark ? 'text-gray-400' : 'text-gray-500'
        }`}>
          Total Tugas: {tasks.length} | 
          Tugas Selesai: {tasks.filter(task => task.completed).length}
        </div>
      </div>
    </div>
  );
}