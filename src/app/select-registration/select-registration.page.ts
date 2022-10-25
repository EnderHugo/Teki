import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-registration',
  templateUrl: './select-registration.page.html',
  styleUrls: ['./select-registration.page.scss'],
})
export class SelectRegistrationPage implements OnInit {
  @ViewChild('listenerOut', { static: true }) listenerOut: ElementRef;
  private values: string[] = ['first', 'second', 'third'];
  constructor(private router: Router) { }

  accordionGroupChange = (ev: any) => {
    const nativeEl = this.listenerOut.nativeElement;
    if (!nativeEl) {
      return;
    }
    const selectedValue = ev.detail.value;

    nativeEl.innerText = `${selectedValue === undefined ? null : ev.detail.value}`;
  };
  nextPage = () => {
    console.log(this.listenerOut.nativeElement.innerText);
    if(this.listenerOut.nativeElement.innerText === 'user')
    {
      this.router.navigate(['/register']);
    }
    else if(this.listenerOut.nativeElement.innerText === 'company')
    {
      this.router.navigate(['/register']);
    }
    else if(this.listenerOut.nativeElement.innerText === 'work')
    {
      this.router.navigate(['/register']);
    }
  };
  ngOnInit() {
  }

}
