import { FaUserMinus } from 'react-icons/fa';

function QueueDisplay({ queueData, onStatusChange, onRemove }) {
  const handleStatusChange = (id) => {
    const item = queueData.find((item) => item.id === id);
    if (!item) return;

    if (item.status === 'waiting') {
      onStatusChange(id, 'serving');
    } else if (item.status === 'serving') {
      onStatusChange(id, 'completed');
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md flex flex-col justify-center items-center">
      {queueData.length === 0 ? (
        <p className="text-gray-300">No customers in the queue.</p>
      ) : (
        <ul className="w-full">
          {queueData.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center bg-gray-700 p-4 rounded-lg mb-4"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-300">{item.name}</h2>
                <p className="text-gray-300">{item.service}</p>
                <p
                  className={`
                  ${item.status === 'waiting' && 'text-yellow-500'} 
                  ${item.status === 'serving' && 'text-green-500'} 
                  ${item.status === 'completed' && 'text-blue-500'}`}
                >
                  {item.status}
                </p>
              </div>
              <div className="flex gap-2">
                {item.status !== 'completed' && (
                  <button
                    className={` text-white font-bold py-2 px-4 rounded mr-2
                    ${item.status === 'waiting' && 'bg-yellow-500 hover:bg-yellow-700'} 
                    ${item.status === 'serving' && 'bg-green-500 hover:bg-green-700'}`}
                    onClick={() => handleStatusChange(item.id)}
                  >
                    {item.status === 'waiting' && 'Serve'}
                    {item.status === 'serving' && 'Complete'}
                  </button>
                )}
                <button
                  className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => onRemove(item.id)}
                >
                  <FaUserMinus /> Remove
                </button>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default QueueDisplay;
