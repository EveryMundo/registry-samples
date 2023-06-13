import { Component } from '@angular/core';
import { getPayload } from '@everymundo/registry-script';

declare global {
  interface Window {
    MODULE_CONFIG: any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  payload = getPayload();
  title = '';
  color = '';
  label = '';

  constructor() {
    const { settings, styles, i18n } = this.payload;

    // Using settings
    this.title = settings?.title || 'Error';

    // Using labels
    this.label = i18n?.labels['example-label-key'] || 'Error';

    // Using styles
    this.color = styles?.value?.colors?.primary || '#333';
  }
}
