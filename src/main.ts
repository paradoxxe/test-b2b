import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="page">
  <!-- Page content-->
  <section class="section section-single bg-image-dark" style="background-image: url(images/bg-image-1-1920x1100.jpg)">
    <div class="section-single-inner">
      <div class="section-single-header">
        <div class="container">
          <!-- Brand--><a class="brand" href="../landing"><img class="brand-logo " src="images/logo.png" alt="" width="95" height="126"/></a>
        </div>
      </div>
      <div class="section-single-main">
        <div class="container">
          <h3>We're getting ready to launch in</h3>
          <div class="divider-small"></div>
          <div class="countdown-box">
            <div class="countdown-circle-container" data-countdown="data-countdown" data-to="2022-12-31">
              <div class="countdown-block countdown-block-days">
                <svg class="countdown-circle" x="0" y="0" width="170" height="170" viewbox="0 0 170 170" data-progress-days="">
                  <circle class="countdown-circle-bg" cx="85" cy="85" r="83"></circle>
                  <circle class="countdown-circle-fg clipped" cx="85" cy="85" r="83"></circle>
                </svg>
                <div class="countdown-wrap">
                  <div class="countdown-counter" data-counter-days="">00</div>
                  <div class="countdown-title">days</div>
                </div>
              </div>
              <div class="countdown-block countdown-block-hours">
                <svg class="countdown-circle" x="0" y="0" width="170" height="170" viewbox="0 0 170 170" data-progress-hours="">
                  <circle class="countdown-circle-bg" cx="85" cy="85" r="83"></circle>
                  <circle class="countdown-circle-fg clipped" cx="85" cy="85" r="83"></circle>
                </svg>
                <div class="countdown-wrap">
                  <div class="countdown-counter" data-counter-hours="">00</div>
                  <div class="countdown-title">hours</div>
                </div>
              </div>
              <div class="countdown-block countdown-block-minutes">
                <svg class="countdown-circle" x="0" y="0" width="170" height="170" viewbox="0 0 170 170" data-progress-minutes="">
                  <circle class="countdown-circle-bg" cx="85" cy="85" r="83"></circle>
                  <circle class="countdown-circle-fg clipped" cx="85" cy="85" r="83"></circle>
                </svg>
                <div class="countdown-wrap">
                  <div class="countdown-counter" data-counter-minutes="">00</div>
                  <div class="countdown-title">minutes</div>
                </div>
              </div>
              <div class="countdown-block countdown-block-seconds">
                <svg class="countdown-circle" x="0" y="0" width="170" height="170" viewbox="0 0 170 170" data-progress-seconds="">
                  <circle class="countdown-circle-bg" cx="85" cy="85" r="83"></circle>
                  <circle class="countdown-circle-fg clipped" cx="85" cy="85" r="83"></circle>
                </svg>
                <div class="countdown-wrap">
                  <div class="countdown-counter" data-counter-seconds="">00</div>
                  <div class="countdown-title">seconds</div>
                </div>
              </div>
            </div>
          </div>
          <p class="big">Stay tuned and subscribe to our newsletter</p>
          <div class="rd-mailform-wrap">
            <form class="rd-form rd-mailform rd-form-inline-condensed" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
              <div class="form-wrap">
                <input class="form-input" id="subscribe-form-email" type="email" name="email" data-constraints="@Email @Required">
                <label class="form-label" for="subscribe-form-email">E-mail</label>
              </div>
              <div class="form-button">
                <button class="button button-primary" type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="section-single-footer">
        <div class="container">
          <!-- Rights-->
          <p class="rights"><span>Sportland</span><span>&nbsp;&copy;&nbsp;</span><span class="copyright-year"></span><span>.&nbsp;</span><a class="link-underline" href="privacy-policy.html">Privacy Policy</a></p>
        </div>
      </div>
    </div>
  </section>

</div>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
