import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  result = '';

  ngAfterViewInit(): void {
    this.loadCaptcha();
  }

  async onSubmit(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const captcha = form.querySelector(
      'textarea[name="h-captcha-response"]'
    ) as HTMLTextAreaElement;

    if (!captcha || !captcha.value) {
      this.result = 'Please fill out captcha field';
      return;
    }

    this.result = 'Sending...';

    const formData = new FormData(form);

    // 🔑 Web3Forms access key
    formData.append('access_key', '--- enter your access key here ---');

    // Mock response (same as your React code)
    const res = {
      success: true,
      message: 'Message sent successfully',
    };

    if (res.success) {
      this.result = res.message;
      form.reset();
    } else {
      this.result = res.message;
    }
  }

  private loadCaptcha() {
    const captchaDivs = document.querySelectorAll('[data-captcha="true"]');

    if (!captchaDivs.length) return;

    captchaDivs.forEach((item: any) => {
      if (!item.dataset.sitekey) {
        item.dataset.sitekey =
          '50b2fe65-b00b-4b9e-ad62-3ba471098be2';
      }
    });

    const script = document.createElement('script');
    script.src =
      'https://js.hcaptcha.com/1/api.js?recaptchacompat=off';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }
}

