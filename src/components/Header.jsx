import React from "react";

export default function Header({ title = "Welcome to My App" }) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
