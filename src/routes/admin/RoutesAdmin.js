import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../../pages/admin/profile/Profile';
import StudentRegister from '../../pages/admin/estudentregister/StudentRegister';
import EstudentCategory from '../../pages/admin/estudentcategory/EstudentCategory';
import AdminEdit from '../../pages/admin/adminedit/AdminEdit';
import AdminList from '../../pages/admin/adminlist/AdminList';
import AdminRegister from '../../pages/admin/adminregister/AdminRegister';
import DirectEdit from '../../pages/admin/directedit/DirectEdit';
import DirectList from '../../pages/admin/directlist/DirectList';
import DirectRegister from '../../pages/admin/directregister/DirectRegister';
import EditProfile from '../../pages/admin/editprofile/EditProfile';
import StudentList from '../../pages/admin/studentlist/StudentList';
import StudentListSpot from '../../pages/admin/studentlist/StudentListSpot';
import ProfileUser from '../../pages/admin/profileuser/ProfileUser';
import Login from '../../pages/login/Login';
import { Entypo } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const stack = createStackNavigator();
const OtherStack = createStackNavigator();

const OtherScreens = () => (
    <OtherStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
        <OtherStack.Screen name="Profile" component={Profile} />
        <OtherStack.Screen name="EstudentCategory" component={EstudentCategory} />
        <OtherStack.Screen name="StudentList" component={StudentList} />
        <OtherStack.Screen name="StudentListSpot" component={StudentListSpot} />
        <OtherStack.Screen name="StudentRegister" component={StudentRegister} />
        <OtherStack.Screen name="EditProfile" component={EditProfile} />
        <OtherStack.Screen name="AdminList" component={AdminList} />
        <OtherStack.Screen name="AdminRegister" component={AdminRegister} />
        <OtherStack.Screen name="AdminEdit" component={AdminEdit} />
        <OtherStack.Screen name="DirectList" component={DirectList} />
        <OtherStack.Screen name="DirectRegister" component={DirectRegister} />
        <OtherStack.Screen name="DirectEdit" component={DirectEdit} />
    </OtherStack.Navigator>
);




export default function RoutesAdmin() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size, focused }) => {
                    let iconName;

                    if (route.name === 'Inicio') {
                        iconName = focused ? 'home' : 'home';
                    } else if (route.name === 'Añadir estudiante') {
                        iconName = focused ? 'add-user' : 'add-user';
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'user' : 'user';
                    }

                    return <Entypo name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "#C35120",
                headerShown: false,
            })}

            >
                <Tab.Screen name='Inicio' component={OtherScreens} />
                <Tab.Screen name='Añadir estudiante' component={StudentRegister} />
                <Tab.Screen name='Perfil' component={ProfileUser} />
            </Tab.Navigator>

        </NavigationContainer >
    );
}