import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { AddAnnouncementComponent } from '../dialogs/add-announcement/add-announcement.component';

import { PopupService } from '../../../../services/popup/popup.service';
import { EditAnnouncementComponent } from '../dialogs/edit-announcement/edit-announcement.component';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrl: './announcements.component.scss'
})
export class AnnouncementsComponent {

  constructor (
    private dialog: MatDialog
  
  ) {}

  openDialog() {
    if (this.dialog) {
      this.dialog.open(AddAnnouncementComponent);
    } else {
      console.error('Dialog is not initialized');
    }
  }

  editAnnouncement() {
    if (this.dialog) {
      this.dialog.open(EditAnnouncementComponent);
    } else {
      console.error('Dialog is not initialized');
    }
  }
}


