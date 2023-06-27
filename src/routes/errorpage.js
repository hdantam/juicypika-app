import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Sorry</h1>
      <p>This page doesn't exist, or it may be coming soon.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}