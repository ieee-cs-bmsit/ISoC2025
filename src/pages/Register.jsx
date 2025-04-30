import { useEffect } from 'react';

function RegisterRedirect() {
  useEffect(() => {
    window.location.href = '/register.html';
  }, []);

  return <p>Redirecting...</p>;
}
