import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DoctorloginComponent } from './doctorlogin/doctorlogin.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { GuestlayoutComponent } from './layouts/guestlayout/guestlayout.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { UserlayoutComponent } from './layouts/userlayout/userlayout.component';
import { userguardGuard } from './guards/userguard.guard';
import { ProfileComponent } from './userpages/profile/profile.component';
import { BookappointmentsComponent } from './userpages/bookappointments/bookappointments.component';
import { AppointmentstatusComponent } from './userpages/appointmentstatus/appointmentstatus.component';
import { PrescriptionComponent } from './userpages/prescription/prescription.component';
import { FeedbackformComponent } from './userpages/feedbackform/feedbackform.component';
import { AdminlayoutComponent } from './layouts/adminlayout/adminlayout.component';
import { AdmindashboardComponent } from './adminpages/admindashboard/admindashboard.component';
import { ViewappointmentComponent } from './adminpages/viewappointments/viewappointment.component';
import { ManagemedicineComponent } from './adminpages/managemedicine/managemedicine.component';
import { PrescribeComponent } from './adminpages/prescribe/prescribe.component';
import { ManagefeedbackComponent } from './adminpages/managefeedback/managefeedback.component';
import { WriteprescriptionComponent } from './adminpages/writeprescription/writeprescription.component';

export const routes: Routes = [

    {
        path:'',
        component:GuestlayoutComponent,
        children:[
            {path:'',component:HomeComponent},
            {path:'register',component:RegisterComponent},
            {path:'login',component:LoginComponent},
            {path:'dlogin',component:DoctorloginComponent},
            {path:'services',component:OurservicesComponent},
            {path:'feedback',component:FeedbackComponent},
        ]
    },
    {
        path:'user',
        component:UserlayoutComponent,
        canActivate:[userguardGuard],
        data:{'role':'USER'},

        children:[
            {path:'profile',component:ProfileComponent},
            {path:'bookappointment',component:BookappointmentsComponent},
            {path:'appointmentstatus',component:AppointmentstatusComponent},
            {path:'prescription',component:PrescriptionComponent},
            {path:'feedback',component:FeedbackformComponent},
        ]

    },
    {
        path:'admin',
        component:AdminlayoutComponent,
        canActivate:[userguardGuard],
        data:{'role':'ADMIN'},

        children:[
            {path:'admindashboard',component:AdmindashboardComponent},
            {path:'viewappointment',component:ViewappointmentComponent},
            {path:'managemedicine',component:ManagemedicineComponent},
            {path:'prescribe',component:PrescribeComponent},
            {path:'managefeedback',component:ManagefeedbackComponent},
            {path:'writepre/:aid/:name/:gender/:age',component:WriteprescriptionComponent},
        ]
        
    },
    {path:'**',component:GuestlayoutComponent}
];
