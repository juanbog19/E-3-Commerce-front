/* eslint-disable no-irregular-whitespace */
import Card from "./Card";


const Cards = () => {

    const celphones = [    //img = va un Array de Url xq  tiene varios perfiles de celular de frete y de costados etc
        {id: 1, marca: "LG", modelo:20, img:"https://i5.walmartimages.com/asr/58e60fc7-4cb5-4614-b429-71ef84abdca7.fe632c1d9d4dd994b214456807d3105d.jpeg", price:130},
        {id: 2, marca: "Xiamoi", modelo:20, img:"https://promart.vteximg.com.br/arquivos/ids/564309-1000-1000/image-a17969df02b54880b56ce5e871b3e4dd.jpg?v=637388265739730000", price:120},
        {id: 3, marca: "Motorola", modelo:20, img:"https://th.bing.com/th/id/OIP.gEeXCt2ch4YuDY-Rl5ePiQHaHa?pid=ImgDet&rs=1", price:110},
        {id: 4, marca: "Samsung", modelo:13 , img:"https://th.bing.com/th/id/R.b9b7d8d10efa4ea1dac3701c75ae7fa0?rik=zzJ%2f5Yfvqcfs%2bg&riu=http%3a%2f%2fwww.wired.com%2fwp-content%2fuploads%2f2015%2f08%2fsamsung-story1.jpg&ehk=h7gfKa6tDguTqhVu715IAkgSgv0t%2bW8LYw97%2fIHOA7o%3d&risl=&pid=ImgRaw&r=0", price:780},
        // eslint-disable-next-line no-irregular-whitespace
        {id: 4, marca: "iPhone", modelo:13 , img:"https://th.bing.com/th/id/OIP.YQs0gSDQv4dvxEszxD6MVAHaGH?pid=ImgDet&rs=1", price:780},
    ]

    return (
    <div>
        {celphones && celphones.map((celphone, index)=>
            <Card
            key={index}
            celphone={celphone}
            />
        )}
    </div>
  )
};

export default Cards;