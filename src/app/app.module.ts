import { BrowserModule } from '@angular/platform-browser';
import { DoBootstrap, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloWorldComponent } from './hello-world.component';
import { HelloSlotComponent } from './hello-slot.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ HelloWorldComponent ],
  entryComponents: [ HelloWorldComponent ],
})
export class AppModule implements DoBootstrap {
  constructor(injector: Injector) {
    const helloWorldWebComponent = createCustomElement(HelloWorldComponent, {injector: injector});
    customElements.define('app-hello-world', helloWorldWebComponent);

    const helloSlotWebComponent = createCustomElement(HelloSlotComponent, {injector: injector});
    customElements.define('app-hello-slot', helloSlotWebComponent)
  }

  ngDoBootstrap() {}
}