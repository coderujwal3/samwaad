import React from "react";
import { X, Users, Award, Star, UserCheck } from "lucide-react";

const EventDetailsModal = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden transform transition-all border border-gray-100 dark:border-slate-700">
        {/* Header */}
        <div className="relative h-32 bg-gradient-to-r from-blue-600 to-purple-600 p-8">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-1">{event.title}</h2>
            <p className="text-blue-100 flex items-center gap-2">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              {event.date} • {event.category || "Competitions"}
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="p-8 max-h-[70vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Winners Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-bold text-lg mb-2">
                  <Award className="w-5 h-5" />
                  <h3>Winners</h3>
                </div>
                <div className="space-y-3">
                  {(event.details?.winners || event.winners)?.map((winner, idx) => (
                    <div key={idx} className="bg-purple-50 dark:bg-slate-700/50 p-3 rounded-xl border border-purple-100 dark:border-purple-900/30">
                      <p className="font-semibold text-gray-800 dark:text-gray-200">{winner.position}</p>
                      <p className="text-purple-600 dark:text-purple-400 text-sm">{winner.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Judges Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-lg mb-2">
                  <UserCheck className="w-5 h-5" />
                  <h3>Judges</h3>
                </div>
                <div className="space-y-3">
                  {(event.details?.judges || event.judges)?.map((judge, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-2">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                        {judge.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800 dark:text-gray-200">{judge.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{judge.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Participants Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-bold text-lg mb-4">
                <Users className="w-5 h-5" />
                <h3>Participants</h3>
              </div>
              <div className="space-y-6">
                {((event.details?.participants || event.participants)?.[0]?.category) ? (
                  (event.details?.participants || event.participants).map((group, idx) => (
                    <div key={idx} className="space-y-3">
                      <h4 className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        {group.category}
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {group.names.map((name, nIdx) => (
                          <div key={nIdx} className="bg-gray-50 dark:bg-slate-700/30 px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-slate-700 font-medium">
                            {name}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {(event.details?.participants || event.participants)?.map((participant, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-slate-700/30 px-4 py-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-slate-700">
                        {participant}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-700 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Thank you to everyone who made this event a success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsModal;
