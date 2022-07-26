import React from "react";

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { GroupProducts } from "../../components/GroupProducts";

export function Grupo() {
  return (
    <>
      <Header />
      <GroupProducts />
      <Footer />
    </>
  )
}