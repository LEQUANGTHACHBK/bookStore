import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Menucomponent } from "./Components/Blocks/Menu/menu.component";
import { Slidercomponent } from "./Components/Blocks/Slider/slider.component";
import { Usercomponent } from "./Components/Blocks/Users/user.component";
import { Catelogycomponent } from "./Components/Blocks/Catego/catelogy.component";
@NgModule({
  declarations: [
    AppComponent,
    Menucomponent,
    Slidercomponent,
    Usercomponent,
    Catelogycomponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
