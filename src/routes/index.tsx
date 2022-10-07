import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LogIn from '../pages/log-in'
import SignUp from '../pages/sign-up'
import ForgotPassword from '../pages/forgot-password'
import ResetPassword from '../pages/reset-password'
import Protected from './protected'
import RperList from '../pages/rper-list'
import Profile from '../pages/profile'
import Dashboard from '../pages/dashboard'
import Summary from '../pages/dashboard/summary'
import Team from '../pages/dashboard/team'
import SecondaryData from '../pages/dashboard/secondary-data'
import ContactCollectivity from '../pages/dashboard/contact-collectivity'
import InterviewGuide from '../pages/dashboard/interview-guide'
import FocusGroupGuide from '../pages/dashboard/focus-group-guide'
import ThemesFramework from '../pages/dashboard/themes-framework'
import TasksAndCalendar from '../pages/dashboard/tasks-and-calendar'
import CollectivityRegistration from '../pages/dashboard/collectivity-registration'
import Presentation from '../pages/dashboard/presentation'
import HistoricalMapping from '../pages/dashboard/historical-mapping'
import TransectWalk from '../pages/dashboard/transect-walk'
import VennDiagram from '../pages/dashboard/venn-diagram'
import SeasonalCalendar from '../pages/dashboard/seasonal-calendar'
import DailyRoutines from '../pages/dashboard/daily-routines'
import InputAndOutput from '../pages/dashboard/input-and-output'
import InterviewFocusGroup from '../pages/dashboard/interview-focus-group'
import RealityAndObjMatrix from '../pages/dashboard/reality-and-obj-matrix'
import ElectionOfPriorities from '../pages/dashboard/election-of-priorities'
import ExtraInformation from '../pages/dashboard/extra-information'
import FinalConsiderations from '../pages/dashboard/final-considerations'
import Acknoledgment from '../pages/dashboard/acknoledgment'
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
          <Route element={<Dashboard />}>
            <Route path="/dashboard/summary/:id" element={<Summary />} />
            <Route path="/dashboard/team/:id" element={<Team />} />
            <Route
              path="/dashboard/secondary-data/:id"
              element={<SecondaryData />}
            />
            <Route
              path="/dashboard/contact-collectivity/:id"
              element={<ContactCollectivity />}
            />
            <Route
              path="/dashboard/interview-guide/:id"
              element={<InterviewGuide />}
            />
            <Route
              path="/dashboard/focus-group-guide/:id"
              element={<FocusGroupGuide />}
            />
            <Route
              path="/dashboard/themes-framework/:id"
              element={<ThemesFramework />}
            />
            <Route
              path="/dashboard/tasks-and-calendar/:id"
              element={<TasksAndCalendar />}
            />
            <Route
              path="/dashboard/collectivity-registration/:id"
              element={<CollectivityRegistration />}
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
              path="/dashboard/venn-diagram/:id"
              element={<VennDiagram />}
            />
            <Route
              path="/dashboard/seasonal-calendar/:id"
              element={<SeasonalCalendar />}
            />
            <Route
              path="/dashboard/daily-routines/:id"
              element={<DailyRoutines />}
            />
            <Route
              path="/dashboard/input-and-output/:id"
              element={<InputAndOutput />}
            />
            <Route
              path="/dashboard/interview-focus-group/:id"
              element={<InterviewFocusGroup />}
            />
            <Route
              path="/dashboard/reality-and-obj-matrix/:id"
              element={<RealityAndObjMatrix />}
            />
            <Route
              path="/dashboard/election-of-priorities/:id"
              element={<ElectionOfPriorities />}
            />
            <Route
              path="/dashboard/extra-information/:id"
              element={<ExtraInformation />}
            />
            <Route
              path="/dashboard/final-considerations/:id"
              element={<FinalConsiderations />}
            />
            <Route
              path="/dashboard/acknoledgment/:id"
              element={<Acknoledgment />}
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
