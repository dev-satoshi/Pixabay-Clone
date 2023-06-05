import { useRef, useState } from 'react'
import './css/App.css'
import ImageGallery from './component/ImageGallery'


function App() {

  const [ fetchData, setFetchData ] = useState([]);
  const ref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    // APIURL
    const endpointURL = `https://pixabay.com/api/?key=37034299-8f22dd2e0bff86e6bfed89e11&q=${ref.current.value}&image_type=photo`;
    // APIを叩く(データフェッチング)
    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFetchData(data.hits);
      })
  }

  return (
    <div className='container'>
      <h2>Pixabay Clone</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='画像を探す' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  )
}

export default App
