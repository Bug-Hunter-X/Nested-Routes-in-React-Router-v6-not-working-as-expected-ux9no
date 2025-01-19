```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/parent/*" element={<ParentRoutes />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function ParentRoutes(){
    return(
        <Routes>
            <Route path=":childId" element={<ChildRoutes/>}/ >
        </Routes>
    );
}

function ChildRoutes(){
    let {childId} = useParams();
    return(
        <div>Child Route {childId}</div>
    );
}

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About</div>;
}
export default App;
```