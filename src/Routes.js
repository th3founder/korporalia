import { Route } from "react-router-dom";
import React from 'react'
import PortadaView from "./views/PortadaView";

export default function Routes() {

  return (
    <Route exact path="/" element={PortadaView}/>
  )
}
