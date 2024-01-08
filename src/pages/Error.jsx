import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>Ruh Roh!</h2>
      <p>You found a weak spot! Nothing Here!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
