import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeFormComponent } from './components/dialogs/employee-form/employee-form.component';
import { PayrollFormsComponent } from './components/dialogs/payroll-forms/payroll-forms.component';

import { CommonImportsModule } from '../../modules/common-imports/common-imports.module';
import { FormsImportsModule } from '../../modules/forms-imports/forms-imports.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { PayslipComponent } from './components/payslip/payslip.component';
import { PayslipFormComponent } from './components/payslip/payslip-form/payslip-form.component';
import { PayslipHistoryComponent } from './components/payslip/payslip-history/payslip-history.component';
import { PayrollComponent } from './components/payroll/payroll.component';

import { AnnouncementsComponent } from './components/announcements/announcements.component';
import { AnnouncementFormComponent } from './components/dialogs/announcement-form/announcement-form.component';
import { AttendanceComponent } from './components/attendance/attendance.component';
import { ViewDetailsComponent } from './components/employee/view-details/view-details.component';
import { SpinnerComponent } from '../materials/spinner/spinner.component';
import { ViewProofComponent } from './components/attendance/view-proof/view-proof.component';
import { AttendanceDetailPopupComponent } from './components/attendance/attendance-detail-popup/attendance-detail-popup.component';
import { AttendanceHistoryComponent } from './components/attendance/attendance-history/attendance-history.component';
import { ImagePopupComponent } from './components/attendance/image-popup/image-popup.component';

import { ChartModule } from 'primeng/chart';
import { ConfigFormComponent } from './components/dialogs/config-form/config-form.component';
import { SettingsComponent } from './components/settings/settings.component';
import { RequestComponent } from './components/request/request.component';

@NgModule({
  declarations: [
    AdminComponent,
    AttendanceComponent,
    DashboardComponent,
    EmployeeComponent,
    PayslipComponent,
    PayslipFormComponent,
    PayslipHistoryComponent,
    PayrollComponent,

    AnnouncementsComponent,
    SpinnerComponent,

    /* Dialog imports */
    AnnouncementFormComponent,
    EmployeeFormComponent,
    PayrollFormsComponent,
    ViewDetailsComponent,
    ViewProofComponent,
    AttendanceDetailPopupComponent,
    AttendanceHistoryComponent,
    ImagePopupComponent,
    ConfigFormComponent,
    SettingsComponent,
    RequestComponent
  ],
  imports: [
    AdminRoutingModule,
    CommonImportsModule,
    FormsImportsModule,
    MatSidenavModule, 
    MatListModule, 
    ChartModule,
  ]
})
export class AdminMainModule { }
