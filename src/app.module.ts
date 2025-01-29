
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app/app.component";
import { InvestmentResultsComponent } from "./app/investment-results/investment-results.component";
import { HeaderComponent } from "./app/header/header.component";
import { UserInputModule } from "./app/user-input/user-input.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InvestmentResultsComponent,
  ],
  imports: [BrowserModule, UserInputModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
