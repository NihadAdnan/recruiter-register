import { Component } from '@angular/core';

@Component({
  selector: 'app-captcha',
  standalone: true,
  imports: [],
  templateUrl: './captcha.component.html',
  styleUrl: './captcha.component.scss'
})
export class CaptchaComponent {
  captchaSrc: string = 'bdjobs_captcha.asp';

  refreshCaptcha() {
    this.captchaSrc = `bdjobs_captcha.asp?rand=${Math.random()}`;
  }
}
