import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import QuestionPage from './components/QuestionPage'
import './index.css'
import reportWebVitals from './reportWebVitals'
import { aprile_questions } from './13_04/13_aprile_questions'
import { giugno_questions } from './23_06/23_giugno_questions'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/23giugno"
          element={
            <QuestionPage questions={giugno_questions} title="23 Giugno" />
          }
        />
        <Route
          path="/13aprile"
          element={
            <QuestionPage questions={aprile_questions} title="13 Aprile" />
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
