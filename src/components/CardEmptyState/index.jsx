import React from "react";

import Card from "../Card";
import "./style.scss";

const CardEmptyState = () => {
  return (
    <Card className="card-empty-state">
      <p>Nenhum resultado encontrado =(</p>
    </Card>
  );
};

export default CardEmptyState;
