import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ASL';

  constructor(  
    public translate: TranslateService) {  
    translate.addLangs(['en_US', 'pt_BR']);  
    if (localStorage.getItem('locale')) {  
      const browserLang = localStorage.getItem('locale');  
      translate.use(browserLang.match(/en_US|pt_BR/) ? browserLang : 'en_US');  
    } else {  
      let userLang = navigator.language ;
      userLang = userLang.replace("-", "_");
      (userLang == "pt_PT ")? "pt_BR" : userLang;
      localStorage.setItem('locale', 'en_US');  
      translate.setDefaultLang(userLang);  
    }  
  }  
  changeLang(language: string) {  
    
    localStorage.setItem('locale', language);  
    this.translate.use(language);  
  }  

  ngOnInit() {

  }
}