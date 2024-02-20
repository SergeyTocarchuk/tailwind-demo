import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  
  static targets = ['sideMenu'];
  
  // connect() {

  // }

  toggle() {
    this.sideMenuTarget.classList.toggle('side-menu');
  }
}
