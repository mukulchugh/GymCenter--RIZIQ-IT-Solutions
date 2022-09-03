import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Home/Footer/Footer';
import Home from './Components/Home/Home';
import AboutUs from './Components/Pages/AboutUs/AboutUs';
import Blog from './Components/Pages/Blog/Blog';
import Contact from './Components/Pages/Contact/Contact';
import CrossFit from './Components/Pages/CrossFit/CrossFit';
import Fitness from './Components/Pages/Fitness/Fitness';
import Shop from './Components/Pages/Shop/Shop';
import Testimonials from './Components/Pages/Testimonials/Testimonials';
import Trainers from './Components/Pages/Trainers/Trainers';
import FigmaLogin from './Components/Pages/Shared/FigmaLogin';
import Dashboard from './Dashboard/Dashboard';
import AccountsHome from './Dashboard/AdminDashboard/Home/AccountsHome';
import AccountsProfile from './Dashboard/AdminDashboard/Profile/AccountsProfile';
import Orders from './Dashboard/AdminDashboard/Orders/Orders';
import Salary from './Dashboard/AdminDashboard/Salary/Salary';
import ManageForm from './Dashboard/AdminDashboard/ManageForm/ManageForm';
import Incomes from './Dashboard/AdminDashboard/Incomes/Incomes';
import Expense from './Dashboard/AdminDashboard/Expense/Expense';
import UsersHome from './Dashboard/UserDashboard/UsersHome/UsersHome';
import AuthUser from './hooks/AuthUser/AuthUser';

function App() {
  const {userRole} = AuthUser()
  // console.log(userRole)
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/crossFit' element={<CrossFit />} />
        <Route path='/programs' element={<Fitness />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<FigmaLogin />} />


        <Route path="dashboard" element={<Dashboard />}>
          <Route path="accounts-home" element={<AccountsHome />} />
          <Route path="accounts-profile" element={<AccountsProfile />} />
          <Route path="accounts-salary" element={<Salary />} />
          <Route path="manage-form" element={<ManageForm />} />
          <Route path="manage-orders" element={<Orders />} />
          <Route path="accounts-income" element={<Incomes />} />
          <Route path="accounts-expense" element={<Expense />} />
          <Route path="users-home" element={<UsersHome />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
