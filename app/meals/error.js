"use client";

export default function Error({ error }) {
  return (
    <main className="error">
      <h1>An error occurrerd!</h1>
      <p>Failed to fetch meal, please try again later</p>
    </main>
  );
}
