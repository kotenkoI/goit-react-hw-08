import React from 'react'; 
import { CirclesWithBar } from 'react-loader-spinner'; 
const LoaderComponent = () => { return ( <div className="loader-container"> <CirclesWithBar visible={true} height="80" width="80" ariaLabel="circles-with-bar-loading" wrapperStyle={{}} wrapperClass="" colors={["#d2ff49", "#41ffbd"]} /> </div> ); }; 
export default LoaderComponent;
