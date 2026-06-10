import React from 'react';
import QueueForm from './components/QueueForm';
import QueueDisplay from './components/QueueDisplay';

function App() {
  const [activeTab, setActiveTab] = React.useState('form');
  const [queueData, setQueueData] = React.useState([]);

  const addToQueue = (data) => {
    setQueueData((prev) => [...prev, data]);
  };

  const updateQueueStatus = (id, newStatus) => {
    setQueueData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item,
      ),
    );
  };

  const handleRemove = (id) => {
    setQueueData((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20">
      <nav className="text-center">
        <h1 className="text-white text-3xl font-bold underline mb-10">
          Queue Management System
        </h1>
        <div className="mt-4 mx-auto flex justify-between max-w-md text-lg">
          <button
            className={`hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeTab === 'form' ? ' bg-blue-700' : 'bg-blue-500'}`}
            onClick={() => setActiveTab('form')}
          >
            Queue Form
          </button>
          <button
            className={`hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${activeTab === 'display' ? ' bg-green-700' : 'bg-green-500'}`}
            onClick={() => setActiveTab('display')}
          >
            Queue Display
          </button>
        </div>
      </nav>

      {activeTab === 'form' ? (
        <div className="mt-8">
          <QueueForm onSubmit={addToQueue} />
        </div>
      ) : (
        <div className="mt-8">
          <QueueDisplay
            queueData={queueData}
            onStatusChange={updateQueueStatus}
            onRemove={handleRemove}
          />
        </div>
      )}
    </div>
  );
}

export default App;
