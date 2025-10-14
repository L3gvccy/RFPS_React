import React from 'react'
import { useState } from 'react'
import { Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import MainPage from './pages/main-page';
import Directions from './pages/directions'
import Feedback from './pages/feedback'

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="container my-4">
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/directions" element={<Directions />} />
                <Route path="/feedback" element={<Feedback />} />
            </Routes>
        </div>
        <Footer />
    </div>
  )
}