
import { useLoaderData } from 'react-router-dom';
import './App.css'
import Banner from './Components/Banner'
import QueriesCard from './Components/QueriesCard'
import Slider from './Components/Slider'
import OurFeatures from './Components/OurFeatures';
import OurNewsLetters from './Components/OurNewsLetters';
import OurTrastedusers from './Components/OurTrastedusers';

function App() {
  const allQueryData = useLoaderData();

  return (
    <>


      <Slider></Slider>

      <div className='container mx-auto'>
        <Banner></Banner>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
          {
            allQueryData?.slice(0, 6).map(singleData => <QueriesCard key={singleData._id} singleDataComingFromAppJsx={singleData} />)
          }
        </div>


        <OurFeatures></OurFeatures>


        <OurNewsLetters></OurNewsLetters>


        <OurTrastedusers></OurTrastedusers>



      </div>
















    </>
  )
}

export default App
