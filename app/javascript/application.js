// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "channels"

document.addEventListener("turbo:frame-load", function(eve) {
    console.log("turbo:frame-render");
})
