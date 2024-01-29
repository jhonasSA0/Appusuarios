import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditProfile from './src/pages/admin/editprofile/EditProfile';
import AdminList from './src/pages/admin/adminlist/AdminList';
import CategoryStudent from './src/pages/direc/categorystudent/CategoryStudent';
import StudentOption from './src/pages/direc/studentoption/StudentOption';
import MiniList from './src/pages/direc/minilist/MiniList';
import MiniReport from './src/pages/direc/minireport/MiniReport';
import Welcome from './src/pages/welcome/Welcome';
import RoutesAdmin from './src/routes/admin/RoutesAdmin';
import ProfileUser from './src/pages/admin/profileuser/ProfileUser';
export default function App() {
  return (
      //<Welcome/>
      //<Login/>
      //<Profile/>
      //<EstudentCategory/>
      //<StudentRegister/>
      //<StudentList/>
      //<EditProfile/>
      //<AdminList/>
      //<CategoryStudent/>
      //<StudentOption/>
      //<MiniList/>
      //<MiniReport/>
      //<Welcome/>
      <RoutesAdmin/>
      //<ProfileUser/>
  );
}
