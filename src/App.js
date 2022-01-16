import makos from './makos.jpg';
import logos from './logos.jpg';
import boltos from './boltos.jpg';
import mesagos from './mesagos.jpg';
import crownos from './crownos.png';
import bagos from './bagos.png';
import videos from './videos.jpg';
import './App.css';

function App() {
  return (
    <body class="h-full">
      <nav class="h-20 bg-white w-full flex flex-row justify-around items-center">
        <img src={logos} class=" w-12 h-8" alt="logo" />
        <div class="flex flex-row justify-between items-center w-1/5">
          <p class=" text-red-800">Home</p>
          <p>Features</p>
          <p>Pricing</p>
          <p>Testimontial</p>
        </div>
        <div class="text-red-900 w-36 flex items-center justify-center border-rose-800 border-solid border-2 h-10 rounded-full">Get Started</div>
      </nav>
      <main class=" bg-white w-full h-auto">
        <div class="flex flex-col justify-center items-center mt-28">
          <h1 class=" text-6xl w-3/12 flex items-center justify-center h-64 font-bold">Top Quality Digital Products To Explore</h1>
          <p class=" text-lg w-3/12 flex self-center place-self-center mt-8 h-32 ">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio. Nullam sapien sem, ornare ac, nonummy non, lobortis a enim. Excepteur sint occaecat cupidatat non proident</p>
          <div class=" text-sm w-28 bg-red-600 h-14 rounded-full flex items-center justify-center font-bold text-white mb-4">EXPLORE</div>
        </div>
        <div class=" bg-white flex items-center justify-center">
          <img src={makos} class=" w-2/5 h-auto" alt="logo" />
        </div>
        <div class=" bg-white h-64 w-full flex flex-col justify-center items-center">
          <h1 class=" text-red-600 font-bold">WHATS THE FUNCTION</h1>
          <p class="text-4xl font-bold">Meet the feature of product</p>
        </div>
        <div class="bg-white h-96 flex flex-row justify-around items-center">
          <div>
            <img src={boltos} class="  w-24 h-20 rounded-full" alt="logo" />
            <h1 class=" font-bold">Fast Performence</h1>
            <p class=" w-40 h-28">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div>
            <img src={bagos} class="  w-24 h-20 rounded-full" alt="logo" />
            <h1 class=" font-bold">PartnerShip Deal</h1>
            <p class=" w-40 h-28">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div>
            <img src={crownos} class="  w-24 h-20 rounded-full" alt="logo" />
            <h1 class=" font-bold">Pro Subcription</h1>
            <p class=" w-40 h-28">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
          <div>
            <img src={mesagos} class=" w-24 h-20 rounded-full" alt="logo" />
            <h1 class=" font-bold">Customer Support</h1>
            <p class=" w-40 h-28">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
          </div>
        </div>
        <div class="flex flex-row justify-evenly items-center mb-48">
          <img src={videos} class="" alt="logo" />
          <div class=" bg-white flex flex-col h-80 w-96">
            <h1 class="text-red-700 font-bold">Our Services</h1>
            <h2 class="text-3xl">Lorem ipsum dolor sit amet fsfs fawef egr</h2>
            <div class="flex flex-row justify-start items-start  mt-4">
              <img src={crownos} class=" w-24 h-20 rounded-full mr-3" alt="logo" />
              <div class="flex flex-col justify-start items-start">
                <h1 class="font-bold">Smart Features</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita</p>
              </div>
            </div>
            <div class="flex flex-row justify-start items-start mt-4">
              <img src={mesagos} class=" w-48 h-20 rounded-full mr-6" alt="logo" />
              <div class="flex flex-col justify-start items-start">
                <h1 class="font-bold">Secure Contents</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita</p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-evenly items-center mb-44">
          <h1 class="text-red-700">Quality Features</h1>
          <h2 class="font-bold text-4xl mt-4 mb-7">Amazing Useful Features</h2>
          <div class="flex flex-row justify-evenly items-center ml-16">
            <div class=" w-96">
              <div class="flex flex-row justify-start items-start  mt-4">
                <img src={boltos} class=" w-24 h-20 rounded-full mr-6" alt="logo" />
                <div class="flex flex-col justify-start items-start">
                  <h1 class="font-bold">Fast Performence</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita</p>
                </div>
              </div>
              <div class="flex flex-row justify-start items-start  mt-4">
                <img src={crownos} class=" w-24 h-20 rounded-full mr-3" alt="logo" />
                <div class="flex flex-col justify-start items-start">
                  <h1 class="font-bold">PartnerShip Deals</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita</p>
                </div>
              </div>

            </div>
            <div class=" w-96 ml-44">
              <div class="flex flex-row justify-start items-start  mt-4">
                <img src={bagos} class=" w-24 h-20 rounded-full mr-6" alt="logo" />
                <div class="flex flex-col justify-start items-start">
                  <h1 class="font-bold">Pro Subcription</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita</p>
                </div>
              </div>
              <div class="flex flex-row justify-start items-start  mt-4">
                <img src={mesagos} class=" w-24 h-20 rounded-full mr-6" alt="logo" />
                <div class="flex flex-col justify-start items-start">
                  <h1 class="font-bold">Customer Support</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Et harum quidem rerum facilis est et expedita</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </main>
    </body >


  );
}

export default App;
