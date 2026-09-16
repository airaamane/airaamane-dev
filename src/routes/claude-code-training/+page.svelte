<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<Seo
  title="Claude Code training for engineering teams | Abdellah Iraamane"
  description="Private Claude Code workshops for engineering teams with Udacity instructor Abdellah Iraamane. Explore the sample agenda, exercises and takeaways."
  path="/claude-code-training/"
  service="Claude Code training for engineering teams"
/>
<section class="section-wrap detail-hero">
  <a class="back-link" href="/#workshops">← All workshops</a>
  <div class="detail-hero-grid">
    <div>
      <p class="eyebrow">SHARED ENGINEERING PRACTICE</p>
      <h1>Claude Code<br />training for<br /><em>your team.</em></h1>
      <p class="hero-description">
        Give your developers a repeatable workflow for using Claude Code: set the context, implement a change,
        test it and review the result.
      </p>
      <div class="hero-actions">
        <a class="button button-dark" href="#contact"
          >Discuss this workshop <span aria-hidden="true">↗</span></a
        ><a class="text-link" href="#agenda">View the sample agenda ↓</a>
      </div>
    </div>
    <aside class="detail-proof">
      <img
        src="/instructor-portrait.png"
        alt="Abdellah Iraamane"
        width="549"
        height="581"
        fetchpriority="high"
      />
      <p class="eyebrow">YOUR INSTRUCTOR</p>
      <h2>Abdellah Iraamane</h2>
      <p>I teach <em>Agentic Engineering with Claude Agent SDK</em> on Udacity.</p>
      <a
        class="text-link"
        href="https://www.udacity.com/course/agentic-engineering-with-claude-agent-sdk--cd14715"
        target="_blank"
        rel="noopener noreferrer">Explore my course <span aria-hidden="true">↗</span></a
      >
    </aside>
  </div>
</section>
<section class="section-wrap workshop-specs" aria-label="Workshop planning guide">
  <div><span>SAMPLE FORMAT</span><strong>1 day</strong></div>
  <div><span>SUGGESTED GROUP</span><strong>6–12 participants</strong></div>
  <div><span>DELIVERY</span><strong>Live, instructor-led</strong></div>
  <div><span>PREREQUISITES</span><strong>Comfort working in a codebase</strong></div>
  <p>
    This is a sample workshop plan. We agree on the duration, group size, remote or on-site delivery, and fee
    in your proposal.
  </p>
</section>
<section id="agenda" class="section-wrap section-space agenda-section">
  <div>
    <p class="eyebrow">THE SAMPLE AGENDA</p>
    <h2 class="section-title">A day built<br />around doing.</h2>
    <p class="section-intro">
      A starting point for planning your session. We adjust the exercises and pace to your team’s experience.
    </p>
    <a
      class="text-link agenda-download"
      href="sample-agenda.txt"
      download="claude-code-training-sample-agenda.txt">Download the agenda (.txt) ↓</a
    >
  </div>
  <ol class="agenda-list">
    <li>
      <span class="agenda-number">01</span>
      <div>
        <h3>Set the context</h3>
        <p>
          Choose a small engineering task. Describe the codebase, boundaries and what a successful change
          should do.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">02</span>
      <div>
        <h3>Work through a change</h3>
        <p>
          Plan and implement a feature or refactor in a training repository. Examine the decisions Claude
          makes.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">03</span>
      <div>
        <h3>Test the behaviour</h3>
        <p>
          Write and run tests, inspect failures and check edge cases. Compare the result against the original
          requirement.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">04</span>
      <div>
        <h3>Review and refine</h3>
        <p>
          Read the diff, challenge assumptions and decide what is ready to keep. Record where human judgment
          mattered.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">05</span>
      <div>
        <h3>Make it repeatable</h3>
        <p>Capture useful instructions and skills. Assemble a playbook the team can adapt for future work.</p>
      </div>
    </li>
  </ol>
</section>
<section class="takeaways-section">
  <div class="section-wrap section-space takeaways-grid">
    <div>
      <p class="eyebrow">WHAT YOUR TEAM TAKES AWAY</p>
      <h2 class="section-title">Work you can<br />keep building on.</h2>
    </div>
    <ul class="takeaways-list">
      <li>
        <span aria-hidden="true">✓</span>Project-context notes and a reusable skill developed in the lab
      </li>
      <li><span aria-hidden="true">✓</span>A code change with tests and a human-reviewed diff</li>
      <li><span aria-hidden="true">✓</span>A checklist for reviewing AI-assisted work</li>
      <li><span aria-hidden="true">✓</span>A short team playbook with the next workflow to try</li>
    </ul>
  </div>
</section>
<section class="section-wrap section-space workshop-example">
  <p class="eyebrow">AN ILLUSTRATIVE WORKSHOP LAB</p>
  <h2 class="section-title">A reviewed change in a training repository.</h2>
  <p class="section-intro">
    The sample lab starts with a small feature request. Participants configure the project context, implement
    the change and inspect both the tests and the diff before accepting it.
  </p>
  <div class="example-flow">
    <div>
      <span>INPUT</span>
      <p>A small feature request + existing tests</p>
    </div>
    <div>
      <span>WORK THROUGH</span>
      <p>Context → implementation → tests → review</p>
    </div>
    <div>
      <span>TAKE AWAY</span>
      <p>A reviewed diff + reusable project guidance</p>
    </div>
  </div>
  <a
    class="text-link"
    href="https://github.com/udacity/cd14715-claude-code-classroom"
    target="_blank"
    rel="noopener noreferrer">Inspect the public Udacity course exercises <span aria-hidden="true">↗</span></a
  >
</section>
<section class="section-wrap preparation-section">
  <div>
    <p class="eyebrow">BEFORE THE SESSION</p>
    <h2>Arrive ready to work.</h2>
  </div>
  <div>
    <p>
      Participants should be comfortable reading code and using a terminal. We confirm the training
      repository, Claude access, setup steps and any company restrictions before the session. A sample
      repository is available when your own code is unsuitable.
    </p>
    <p>
      There is no assumed access to your company systems. We agree on suitable tools and material during
      planning.
    </p>
  </div>
</section>
<Contact />
