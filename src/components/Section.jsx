import React from "react";

const Section = ({ title, children, ...props }) => {
     //...props lo estamos usando para agrupar datos en un objeto
  return (
    <>
      <section {...props}> // lo usamos para extender datos sobre algun otro elemento
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
};

export default Section;
