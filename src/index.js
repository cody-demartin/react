import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
const App = lazy(() => {
  return Promise.all([
    import('./App'),
    new Promise(resolve => setTimeout(resolve, 1000))
  ]).then(([moduleExports]) => moduleExports);
});

const loadingScreen = () => {
    return(
        <div className="loading-container">
            <div className="loading-c">
                C
            </div>
            <div className="loading-d">
                D
            </div>
        </div>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={loadingScreen()}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
