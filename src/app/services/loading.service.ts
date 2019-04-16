import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = false;

  constructor(public loadingController: LoadingController) { }

  // maximum 30 seconds loading block UI
  // since it is async, there can be times when 
  // retrieving data executed faster than present loading
  // so we check first if isLoading
  async present(message: string) {
    this.isLoading = true;
    return await this.loadingController.create({
      message: message,
      duration: 30000,
    }).then(a => {
      a.present().then(() => {
        if (!this.isLoading) {
          a.dismiss();
        }
      });
    });
  }

  async dismiss() {
    this.isLoading = false;
    return await this.loadingController.dismiss();
  }


}
