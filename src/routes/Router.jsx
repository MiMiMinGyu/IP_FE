import { Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import AcademicIntro from '../pages/academic-info/AcademicIntro';
import Calendar from '../pages/academic-info/Calendar';
import AcademicSchedule from '../pages/academic-info/AcademicSchedule';
import RequiredCourses from '../pages/academic-info/RequiredCourses';
import ApplyTips from '../pages/academic-info/ApplyTips';

import MajorOverview from '../pages/lecture-info/MajorOverview';
import Professors from '../pages/lecture-info/Professors';
import ProfessorEvaluations from '../pages/lecture-info/ProfessorEvaluations';
import PopularElectives from '../pages/lecture-info/PopularElectives';
import RecommendedElectives from '../pages/lecture-info/RecommendedElectives';
import LectureTips from '../pages/lecture-info/LectureTips';

import ClassroomNumberGuide from '../pages/campus-facilities/ClassroomNumberGuide';
import CollegeLocations from '../pages/campus-facilities/College-locations';
import ConvenienceInfo from '../pages/campus-facilities/Convenience-info';
import OfficeLocations from '../pages/campus-facilities/Office-locations';
import SmokingAreas from '../pages/campus-facilities/Smoking-areas';
import ParkingInfo from '../pages/campus-facilities/Parking-info';

import CampusCafeteriaIntro from '../pages/campus-cafeteria/CampusCafeteriaIntro';
import CampusCafeteriaMenu from '../pages/campus-cafeteria/CampusCafeteriaMenu';

import MapPage from '../pages/yeokbuk-map/MapPage';

import MyMap from '../pages/smart-map/MyMap';
import RecommendedPlaces from '../pages/smart-map/RecommendedPlaces';

import FreeBoard from '../pages/user-community/FreeBoard';
import QuestionBoard from '../pages/user-community/QuestionBoard';
import SuggestionBoard from '../pages/user-community/SuggestionBoard';
import InquiryBoard from '../pages/user-community/InquiryBoard';

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />

                <Route path="academic-info">
                    <Route index element={<Navigate to="intro" replace />} />
                    <Route path="intro" element={<AcademicIntro />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="academic-schedule" element={<AcademicSchedule />} />
                    <Route path="required-courses" element={<RequiredCourses />} />
                    <Route path="apply-tips" element={<ApplyTips />} />
                </Route>

                 <Route path="lecture-info">
                    <Route index element={<Navigate to="major-overview" replace />} />
                    <Route path="major-overview" element={<MajorOverview />} />
                    <Route path="professors" element={<Professors />} />
                    <Route path="professor-evaluations" element={<ProfessorEvaluations />} />
                    <Route path="popular-electives" element={<PopularElectives />} />
                    <Route path="recommended-electives" element={<RecommendedElectives />} />
                    <Route path="lecture-tips" element={<LectureTips />} />
                </Route>

                <Route path="campus-facilities">
                    <Route index element={<Navigate to="classroom-number-guide" replace />} />
                    <Route path="classroom-number-guide" element={<ClassroomNumberGuide />} />
                    <Route path="college-locations" element={<CollegeLocations />} />
                    <Route path="convenience-info" element={<ConvenienceInfo />} />
                    <Route path="office-locations" element={<OfficeLocations />} />
                    <Route path="smoking-areas" element={<SmokingAreas />} />
                    <Route path="parking-info" element={<ParkingInfo />} />
                </Route>

                <Route path="campus-cafeteria">
                    <Route index element={<Navigate to="campus-cafeteria-intro" replace />} />
                    <Route path="campus-cafeteria-intro" element={<CampusCafeteriaIntro />} />
                    <Route path="campus-cafeteria-menu" element={<CampusCafeteriaMenu />} />
                </Route>

                <Route path="yeokbuk-map">
                    <Route index element={<Navigate to="map-page" replace />} />
                    <Route path="map-page" element={<MapPage />} />
                </Route>

                <Route path="smart-map">
                    <Route index element={<Navigate to="my-map" replace />} />
                    <Route path="my-map" element={<MyMap />} />
                    <Route path="recommended-places" element={<RecommendedPlaces />} />
                </Route>

                <Route path="user-community">
                    <Route index element={<Navigate to="free-board" replace />} />
                    <Route path="free-board" element={<FreeBoard />} />
                    <Route path="question-board" element={<QuestionBoard />} />
                    <Route path="suggestion-board" element={<SuggestionBoard />} />
                    <Route path="inquiry-board" element={<InquiryBoard />} />
                </Route>

            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            
        </Routes>
    );
}

export default Router;