import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-proof',
  templateUrl: './view-proof.component.html',
  styleUrl: './view-proof.component.scss'
})
export class ViewProofComponent {

  constructor(
    private dialogRef: MatDialogRef<ViewProofComponent>, 
    private router: Router
  ) {}

  closePopup() {
    this.dialogRef.close(); 
    this.router.navigate(['/admin/attendance']);
  }

}
