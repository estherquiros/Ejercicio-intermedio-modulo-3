import { useState } from "react";
import "../styles/App.scss";
import Header from "./layoud/Header";
import ImageList from "./layoud/Listing/ImageList";
import Form from "./layoud/Listing/Form";
import Footer from "./layoud/Footer";

const initialImages = [
  {
    id: 1,
    url: "https://i.pinimg.com/564x/00/40/57/004057972908c0494ec9a1191092546a.jpg",
    title: "Flores rosas",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/564x/81/02/fa/8102fa887aa0e43f5db67aa2576b42fc.jpg",
    title: "Flores blancas",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/564x/d4/68/11/d468118796ccecbd619dce1c6ec54da8.jpg",
    title: "Flores amarillas",
  },
];

function App() {
  //Datos de la app
  const [images] = useState(initialImages);

  const [filterText, setFilterText] = useState("");

  // Funciones manejadoras de eventos

  const filteredImages = images.filter((eachImage) =>
    eachImage.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase())
  );

  return (
    <div>
      <Header />
      <main className="main">
        <Form setFilterText={setFilterText} />
        <ImageList images={filteredImages} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
