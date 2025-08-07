import React, { useEffect, useState } from 'react';

const Notif = () => {
  const [notifications, setNotifications] = useState([]);

  // Load and set notifications from localStorage
  const loadNotifications = () => {
    const stored = JSON.parse(localStorage.getItem('notifications')) || [];
    setNotifications(stored);
  };

  useEffect(() => {
    loadNotifications(); // initial load

    // Listen for updates
    const updateHandler = () => {
      loadNotifications();
    };

    window.addEventListener('connections-updated', updateHandler);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener('connections-updated', updateHandler);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Live Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-slate-500">No notifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {notifications.map((notif, idx) => (
            <li
              key={idx}
              className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-500"
            >
              <div className="text-slate-800 font-medium">{notif.message}</div>
              <div className="text-xs text-slate-500 mt-1">
                {new Date(notif.timestamp).toLocaleString()}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notif;
