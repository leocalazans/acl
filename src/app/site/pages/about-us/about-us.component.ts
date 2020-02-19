import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  banner: Object[];
  panelOpenState: boolean;
  
  private currentSlide = 0;
  
  slider_active = {
    Url: './../../../../assets/images/protable/1.png'
  }
  slider_active_two ={
    Url: './../../../../assets/images/protable/1.png'
  }
  sliders = [
    { 
      Url: './../../../../assets/images/protable/1.png',
      leng: 0  
    },
    { 
      Url: './../../../../assets/images/protable/2.png',
      leng: 1  
    },
    { 
      Url: './../../../../assets/images/protable/5.png',
      leng: 2  
    },
    { 
      Url: './../../../../assets/images/protable/4.png',
      leng: 3  
    },
  ]
  
  sliders_two = [
    { 
      Url: './../../../../assets/images/foldable/Img1.png',
      leng: 0  
    },
    { 
      Url: './../../../../assets/images/foldable/Img2.png',
      leng: 1  
    },
    { 
      Url: './../../../../assets/images/foldable/Img3.png',
      leng: 2  
    },
    { 
      Url: './../../../../assets/images/foldable/Img4.png',
      leng: 3  
    },
  ]
  
  // slider_active 
  
  constructor() {
    this.banner = [
      {
        nome: 'What´s AirSoccer?',
        backgorund: './../../../../assets/images/bg__white.jpg',
        dead: 'Home',
        dead_link: '/home'
      }]
    }
    
    next(length, oalvo) {
      let i ;
      
      oalvo = parseInt(oalvo);
      var alvo;
      let slide_this = false ;
 
      if(oalvo == 2){
        this.sliders_two.forEach(function (Slider, index) {
          if (length == index) { 
            alvo = Slider.Url;
            if(oalvo == 2){
              slide_this = true;
            }else{
            }
            i = index;
            return
          }
        });
      }else{
        this.sliders.forEach(function (Slider, index) {
          if (length == index) { 
            alvo = Slider.Url;
            if(oalvo == 2){
              slide_this = true;
            }
            i = index;
            return
          }
        });
      }
      
      if (slide_this) {
        this.slider_active_two.Url = alvo;
      } else{
        this.slider_active.Url = alvo;
      }
      this.currentSlide = i;
    }
    
    ngOnInit() {
      
    }
    
    ngAfterViewInit(){
      
      let OSlier= "teste";
      let i;
      let cSlider = this.currentSlide;
      
      
      this.sliders.forEach(function (Slider, index) {
        if (cSlider+1  == index) {
          OSlier = Slider.Url;
        }
      });
      
      this.sliders_two.forEach(function (Slider, index) {
        if (cSlider+1  == index) {
          OSlier = Slider.Url;
        }
      });
      
      console.log(this.currentSlide);
      console.log(this.sliders.length);
      console.log(this.slider_active.Url);
      
      this.sliders.forEach(function (Slider, index) {
        
        console.log(Slider); // The element
        
        console.log(index); // The index in the NodeList
      });
      
    }
  }
  