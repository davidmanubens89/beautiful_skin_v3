import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import SkinAssessment from './pages/SkinAssessment';
import { DailyRoutine } from './pages/DailyRoutine';
import { Learn } from './pages/Learn';
import { Store } from './pages/Store';
import { TrackProgress } from './pages/TrackProgress';
import { Community } from './pages/Community';
import { SkinAssessmentProvider } from './contexts/SkinAssessmentContext';

function App() {
  return (
    <SkinAssessmentProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skin-assessment" element={<SkinAssessment />} />
            <Route path="/daily-routine" element={<DailyRoutine />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/store" element={<Store />} />
            <Route path="/track-progress" element={<TrackProgress />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </Layout>
      </Router>
    </SkinAssessmentProvider>
  );
}

export default App;