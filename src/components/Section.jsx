import React from "react";

const Section = ({ title, children, ...props }) => {
     //...props lo estamos usando para agrupar datos en un objeto
      //en  <section {...props}>  lo usamos para extender datos sobre algun otro elemento
  return (
    <>
   
      <section {...props}> 
        <h2>{title}</h2>
        {children}
      </section>
    </>
  );
};

export default Section;
