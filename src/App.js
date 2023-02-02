import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {


  const [linea1, setLinea1]= useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    setLinea1(evento.target.value)
  }
  const onChangeLinea2 = function (evento) {
    setLinea2(evento.target.value)
  }
  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img    = canvas.toDataURL("image/png");

      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }


  return (
    <div className="App">

    <select onChange={onChangeImagen}>
    <option value="#">----------</option>
      <option value="meme1">meme-1</option>
      <option value="meme2">meme-2</option>
      <option value="meme3">meme-3</option>
      <option value="meme4">meme-4</option>
      <option value="meme5">meme-5</option>
      <option value="meme6">meme-6</option>
      <option value="meme7">meme-7</option>
    </select>
    <br />
    <br />
    <input onChange={onChangeLinea1} type="text" placeholder='linea 1 '/>
    <br />
    <input onChange={onChangeLinea2} type="text" placeholder='linea 2' />
    <br />
    <br />
    <button onClick={onClickExportar}>Exportar</button>

    <div className="meme" id="meme">
      <span>{linea1}</span> <br />
      <span>{linea2}</span>
      <img src={"/img/"+ imagen +".jpg"} />

    </div>

    </div>
  );
}

export default App;
