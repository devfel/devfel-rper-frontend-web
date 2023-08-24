import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/log-in'
import SignUp from '../pages/sign-up'
import ForgotPassword from '../pages/forgot-password'
import ResetPassword from '../pages/reset-password'
import Protected from './protected'
import RperList from '../pages/rper-list'
import Profile from '../pages/profile'
import Summary from '../pages/dashboard/summary'
import Team from '../pages/dashboard/team'
import SecondaryData from '../pages/dashboard/secondary-data'
import HistoricalMapping from '../pages/dashboard/historical-mapping'
import TransectWalk from '../pages/dashboard/transect-walk'
import FinalConsideration from '../pages/dashboard/finalconsideration'
import Acknowledgment from '../pages/dashboard/acknowledgment'
import ThemesFramework from '../pages/dashboard/themesframework'
import OtherPreparation from '../pages/dashboard/otherpreparation'
import Interviews from '../pages/dashboard/interviews'
import Presentation from '../pages/dashboard/presentation'
import VennDiagram from '../pages/dashboard/venndiagram'
import SeasonalCalendar from '../pages/dashboard/seasonalcalendar'
import DailyRoutine from '../pages/dashboard/dailyroutine'
import InputAndOutput from '../pages/dashboard/inputandoutput'
import Construction from '../pages/dashboard/construction'
import FocusGroup from '../pages/dashboard/focusgroup'
import RealityAndObjMatrix from '../pages/dashboard/realityandobjmatrix'
import PrioritiesElection from '../pages/dashboard/prioritieselection'
import OtherFieldwork from '../pages/dashboard/otherfieldwork'
import ExtraInformation from '../pages/dashboard/extrainformation'

import GenerateFinalReport from '../pages/dashboard/generate-final-report'
import NotFoundPage from '../pages/not-found-page'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route element={<Protected />}>
          <Route path="/rper-list" element={<RperList />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/summary/:id" element={<Summary />} />
          <Route path="/dashboard/team/:id" element={<Team />} />
          <Route
            path="/dashboard/secondary-data/:id"
            element={<SecondaryData />}
          />
          <Route>
            <Route
              path="/dashboard/themesframework/:id"
              element={<ThemesFramework />}
            />
            <Route
              path="/dashboard/presentation/:id"
              element={<Presentation />}
            />
            <Route
              path="/dashboard/historical-mapping/:id"
              element={<HistoricalMapping />}
            />
            <Route
              path="/dashboard/transect-walk/:id"
              element={<TransectWalk />}
            />
            <Route
              path="/dashboard/venndiagram/:id"
              element={<VennDiagram />}
            />
            <Route
              path="/dashboard/seasonalcalendar/:id"
              element={<SeasonalCalendar />}
            />
            <Route
              path="/dashboard/dailyroutine/:id"
              element={<DailyRoutine />}
            />
            <Route
              path="/dashboard/inputandoutput/:id"
              element={<InputAndOutput />}
            />
            <Route path="/dashboard/interviews/:id" element={<Interviews />} />
            <Route path="/dashboard/focusgroup/:id" element={<FocusGroup />} />
            <Route
              path="/dashboard/realityandobjmatrix/:id"
              element={<RealityAndObjMatrix />}
            />
            <Route
              path="/dashboard/prioritieselection/:id"
              element={<PrioritiesElection />}
            />
            <Route
              path="/dashboard/extrainformation/:id"
              element={<ExtraInformation />}
            />
            <Route
              path="/dashboard/finalconsideration/:id"
              element={<FinalConsideration />}
            />
            <Route
              path="/dashboard/otherpreparation/:id"
              element={<OtherPreparation />}
            />
            <Route
              path="/dashboard/construction/:id"
              element={<Construction />}
            />
            <Route
              path="/dashboard/otherfieldwork/:id"
              element={<OtherFieldwork />}
            />
            <Route
              path="/dashboard/acknowledgment/:id"
              element={<Acknowledgment />}
            />
            <Route
              path="/dashboard/generate-final-report/:id"
              element={<GenerateFinalReport />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
