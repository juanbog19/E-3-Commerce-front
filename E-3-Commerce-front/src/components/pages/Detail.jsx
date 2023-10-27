import React from "react";

const Detail = ({ cellphone }) => {
  const { marca, modelo, img, price } = cellphone;
  const imageLink = "https://i5.walmartimages.com.mx/mg/gm/3pp/asr/630dab4b-abca-4516-80a3-0b42bea87173.8628b4e2e9ac75322b696448053b949d.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF";

  return (
    <div>
      <div>
        <p>Marca: {marca}</p>
      </div>
      <a href={imageLink} target="_blank" rel="noopener noreferrer">
        <img src={img} alt={marca} />
      </a>
      <div>
        <p>Modelo: {modelo}</p>
      </div>
      <div>
        <p>Precio: {price}</p>
      </div>
    </div>
  );
};

export default Detail;
