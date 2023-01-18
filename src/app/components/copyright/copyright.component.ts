import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '@app/services';
import { IPersonalData } from '@app/models';

@Component({
  selector: 'app-copyright',
  template: `
  <span class="copyright">
    <small>&copy; {{ today | date: 'yyyy' }} {{ (profile | async)?.name }}</small>
  </span>
  `,
  styles: [
    `
      @media (max-device-width: 480px) {
        .copyright {
          display: none;
        }
      }
    `
  ]
})
export class AppCopyrightComponent implements OnInit {
  today = Date.now();

  profile?: Observable<IPersonalData>;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
