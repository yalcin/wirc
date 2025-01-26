import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="conversation"
export default class extends Controller {
  connect() {
    // console.log("Stimulus controller connect");
    console.debug("scrollToBottom");
    this.scrollToBottom();
    // Use a MutationObserver to detect DOM changes
    this.observer = new MutationObserver(() => this.scrollToBottom());
    this.observer.observe(this.element, { childList: true });
    // this.element.scrollTo('0', this.element.scrollHeight);
  }
  scrollToBottom() {
    console.log("scrollToBottom");
    this.element.scrollTo('0', this.element.scrollHeight);
  }

  update() {
    scrollToBottom();
  }
}
