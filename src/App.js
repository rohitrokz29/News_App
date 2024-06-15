
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { useState } from 'react';



function App() {
  
// page size is the number of articles the 
  const pageSize=9;

  //  the progress of fetching api on top
  const [progress,setProgress]=useState(0);

//api key is stored in .env file 
  const api=process.env.REACT_APP_API;

  return (
<>

<BrowserRouter>
<Navbar />

{/* Loading bar shows the loading of data on top */}
<LoadingBar progress={progress} height={3} color={'red'}/>

  {/* Routes for different types of news   */}
  <Routes>
      <Route key="gen" exact path="/" element={<News api={api} key='general' progress={setProgress} category='general' pageSize={pageSize}/>}/>
      <Route key="business" exact path="/business" element={<News api={api} key='business' progress={setProgress} category='business' pageSize={pageSize}/>}/>
      <Route key="enter" exact path="/entertainment" element={<News api={api} key='entertainment' progress={setProgress} category='entertainment' pageSize={pageSize}/>}/>
      <Route key="health" exact path="/health" element={<News api={api} key='health' progress={setProgress} category='health' pageSize={pageSize}/>}/>
      <Route key="sci" exact path="/science" element={<News api={api} key='science' progress={setProgress} category='science' pageSize={pageSize}/>}/>
      <Route key="sports" exact path="/sports" element={<News api={api} key='sports' progress={setProgress} category='sports' pageSize={pageSize}/>}/>
      <Route key="tech" exact path="/technology" element={<News api={api} key='technology' progress={setProgress} category='technology' pageSize={pageSize}/>}/>
  </Routes>
</BrowserRouter>
</>
  );
}

export default App;

