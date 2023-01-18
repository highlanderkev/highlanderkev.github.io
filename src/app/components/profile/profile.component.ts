import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '@app/services';
import { IProfile } from '@app/models';

@Component({
  selector: 'app-profile',
  template: `
  <div *ngIf="profile | async; let profile; else loading" class="profile profile-container">
    <div class="profile-pic">
      <img src="{{profile?.pictureUrl}}" alt="{{profile?.name}}">
    </div>
    <div class="profile-name-title">
      <h3>{{profile?.name}}</h3>
      <h5>{{profile?.title}}</h5>
    </div>
  </div>
  <ng-template #loading>
    <app-loading></app-loading>
  </ng-template>
  `,
  styleUrls: ['./profile.component.scss']
})
export class AppProfileComponent implements OnInit {
  profile?: Observable<IProfile>;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
