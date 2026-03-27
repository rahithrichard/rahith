import { AfterViewInit, Component } from '@angular/core';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  serverTimestamp,
  setDoc,
  doc
} from 'firebase/firestore';
import { firebaseConfig } from '../../fireBase/firebase.config';

declare var hcaptcha: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {
  captchaId: any;
  result = '';
  private db = getFirestore(initializeApp(firebaseConfig));

  constructor() {}

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

    const submission = {
      name: formData.get('name') as string,
      email: (formData.get('email') as string).toLowerCase().trim(),
      message: formData.get('message') as string,
    };

    try {
      // ✅ Encode email for document ID
      const safeEmail = submission.email
        .replace(/\./g, '_')
        .replace(/@/g, '_');

      // ✅ Save to Firebase (no duplicate check needed)
      await this.promiseWithTimeout(
        setDoc(doc(this.db, 'contacts', safeEmail), {
          ...submission,
          createdAt: serverTimestamp(),
        }),
        15000
      );

      this.result = 'Message sent successfully!';
      form.reset();

      if (typeof hcaptcha !== 'undefined' && this.captchaId !== undefined) {
        hcaptcha.reset(this.captchaId);
      }

    } catch (error: any) {

      console.error('Error saving to Firebase:', error);

      // 🔥 Handle duplicate (permission denied from rule)
      if (error?.code === 'permission-denied') {
        this.result = 'This email is already submitted!';
        return;
      }

      // 🔄 Offline fallback
      const saved = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');

      const exists = saved.some((item: any) => item.email === submission.email);

      if (exists) {
        this.result = 'This email is already submitted (offline)';
        return;
      }

      saved.push(submission);
      localStorage.setItem('contactSubmissions', JSON.stringify(saved));

      this.result = 'Saved locally (offline mode)';
      form.reset();

      if (typeof hcaptcha !== 'undefined' && this.captchaId !== undefined) {
        hcaptcha.reset(this.captchaId);
      }
    }
  }

  private promiseWithTimeout<T>(promise: Promise<T>, timeoutMs = 15000): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timeout = window.setTimeout(() => {
        reject(new Error('Request timed out'));
      }, timeoutMs);

      promise
        .then((value) => {
          clearTimeout(timeout);
          resolve(value);
        })
        .catch((err) => {
          clearTimeout(timeout);
          reject(err);
        });
    });
  }

  private loadCaptcha() {
    const captchaDiv = document.querySelector('[data-captcha="true"]') as HTMLElement;

    if (!captchaDiv) return;

    const script = document.createElement('script');
    script.src = 'https://js.hcaptcha.com/1/api.js?recaptchacompat=off';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      this.captchaId = hcaptcha.render(captchaDiv, {
        sitekey: '50b2fe65-b00b-4b9e-ad62-3ba471098be2',
      });
    };

    document.body.appendChild(script);
  }
}