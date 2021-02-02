import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="section">
      <h2 className="section-title">
        {cocktails.length < 1
          ? "No cocktails matched your search criteria"
          : "Cocktails"}
      </h2>
      {cocktails && (
        <div className="cocktails-center">
          {cocktails.map((item) => {
            return <Cocktail key={item.id} {...item} />;
          })}
        </div>
      )}
    </section>
  );
};

export default CocktailList;
