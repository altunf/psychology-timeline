import React from "react";

export const PsyCard = () => {
  return (
    <div className="card w-96 h-96 glass">
      <figure className="opacity-80 transition hover:opacity-100 cursor-pointer hover:delay-100 ">
        <img src="/img/freud.webp" alt="car!" />
      </figure>
      <div className="card-body">
        <h2 className="card-title justify-center">Lorem Ipsum</h2>
      </div>
    </div>
  );
};
