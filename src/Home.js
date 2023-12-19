import { useState } from 'react';
import { data } from './data';
import Buttons from "./Buttons";
import Clothes from "./Clothes";

function Home() {
    const [clothes, setClothes] = useState(data);
    
 

    return (
      <div>
        <div className='cont'>
        <h2 className='back'>Free standart shipping</h2>
        </div>
          <Buttons data={data}
          setClothes={setClothes}/>
          <Clothes items={clothes} />
      </div>
    );

}
export default Home;