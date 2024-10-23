// NotFound.tsx

import React from 'react';

interface NotFoundProps {
  message?: string; // Make it optional if you don't always want to provide a message
}

const NotFound: React.FC<NotFoundProps> = ({ message }) => {
  return (
    <div className="not-found">
      <h1>Product Not Found</h1>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NotFound;
