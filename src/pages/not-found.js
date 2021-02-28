import React, { useEffect } from 'react';

export default function Notfound() {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);

  return (
    <div>
      <h1>Not found</h1>
    </div>
  );
}
