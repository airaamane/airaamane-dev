<script lang="ts">
  import { bookingUrl } from '$lib/site';
</script>

<section id="contact" class="contact-section">
  <div class="section-wrap contact-inner">
    <div>
      <p class="eyebrow">LET’S PLAN YOUR WORKSHOP</p>
      <h2>What would your<br />team like to build?</h2>
      <p>
        Bring your team’s goals, experience level and a workflow you want to improve. We’ll shape the right
        session together.
      </p>
    </div>
    <div class="booking-block">
      <span class="booking-kicker">YOUR TEAM. A CLEAR NEXT STEP.</span>{#if bookingUrl}<a
          class="button button-dark booking-button"
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-describedby="booking-status">Book a discovery call <span aria-hidden="true">↗</span></a
        >{:else}<button
          class="button button-dark booking-button"
          type="button"
          disabled
          aria-describedby="booking-status">Book a discovery call <span aria-hidden="true">↗</span></button
        >{/if}
      <p id="booking-status">
        {bookingUrl ? 'Choose a time that works for you.' : 'Online booking coming soon.'}
      </p>
      <p class="booking-note">We’ll discuss your team, goals and workshop fit.</p>
    </div>
  </div>
</section>
