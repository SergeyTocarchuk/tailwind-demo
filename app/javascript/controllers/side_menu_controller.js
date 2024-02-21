import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  
  static targets = ['sideMenu'];

  toggle() {
    this.sideMenuTarget.classList.toggle('hide');
  }
}
