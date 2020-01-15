import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';  
import { AuthenticationService } from './../../shared/authentication.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent {

  // title = 'ASL';

  constructor(  
    public authenticationService: AuthenticationService,
    public translate: TranslateService) {  
    translate.addLangs(['en_US', 'pt_BR']);  
    if (localStorage.getItem('locale')) {  
      const browserLang = localStorage.getItem('locale');  
      translate.use(browserLang.match(/en_US|pt_BR/) ? browserLang : 'en_US');  
    } else {  
      let userLang = navigator.language ;
      console.log(userLang);
      userLang = userLang.replace("-", "_");
      (userLang == "pt_PT ")? "pt_BR" : userLang;
      localStorage.setItem('locale', userLang);  
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
