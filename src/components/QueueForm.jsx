import React from 'react';
import { FaUserPlus } from 'react-icons/fa';

function QueueForm({ onSubmit }) {
  const [name, setName] = React.useState('');
  const [service, setService] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !service) {
      alert('Please fill in all fields');
      return;
    }

    onSubmit({ name, service, status: 'waiting', id: Date.now() });
    setName('');
    setService('');
  };

  return (
    <form
      action="#"
      className="max-w-md mx-auto bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="flex gap-3 items-center w-full">
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300 cursor-pointer"
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-700 text-gray-300 rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex gap-3 items-center w-full mt-4">
        <label
          htmlFor="queue"
          className="block text-sm font-medium text-gray-300 cursor-pointer"
        >
          Service:
        </label>
        <select
          id="queue"
          name="queue"
          className="bg-gray-700 text-gray-300 rounded-2xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select a service</option>
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
        </select>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        <FaUserPlus className="mr-2" />
        Add to Queue
      </button>
    </form>
  );
}

export default QueueForm;
