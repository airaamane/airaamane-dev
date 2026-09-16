<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import Contact from '$lib/components/Contact.svelte';
</script>

<Seo
  title="Claude Agent SDK training for developers | Abdellah Iraamane"
  description="Hands-on Claude Agent SDK training with Udacity instructor Abdellah Iraamane. Custom tools, structured outputs, permissions and agent evaluation."
  path="/claude-agent-sdk-training/"
  service="Claude Agent SDK training for developers"
/>
<section class="section-wrap detail-hero">
  <a class="back-link" href="/#workshops">← All workshops</a>
  <div class="detail-hero-grid">
    <div>
      <p class="eyebrow">FROM WORKFLOW TO AGENT</p>
      <h1>Claude Agent SDK<br />training for<br /><em>builders.</em></h1>
      <p class="hero-description">
        Learn to build a tool-connected agent around a concrete workflow, validate its output and evaluate
        whether it does the job.
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
  <div><span>PREREQUISITES</span><strong>Basic TypeScript and AI fundamentals</strong></div>
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
      download="claude-agent-sdk-training-sample-agenda.txt">Download the agenda (.txt) ↓</a
    >
  </div>
  <ol class="agenda-list">
    <li>
      <span class="agenda-number">01</span>
      <div>
        <h3>Scope one useful workflow</h3>
        <p>
          Map inputs, decisions, tools and the point where a person should review the result. Define success
          before building.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">02</span>
      <div>
        <h3>Build the first agent</h3>
        <p>
          Use the Claude Agent SDK to run a narrow task. Inspect the interaction between instructions, tools
          and the agent loop.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">03</span>
      <div>
        <h3>Connect tools deliberately</h3>
        <p>
          Add a custom tool and discuss where MCP fits. Limit access to the capabilities the workflow needs.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">04</span>
      <div>
        <h3>Make outputs checkable</h3>
        <p>
          Define a structured response and validate it. Handle missing information and cases that need human
          review.
        </p>
      </div>
    </li>
    <li>
      <span class="agenda-number">05</span>
      <div>
        <h3>Evaluate and plan the next iteration</h3>
        <p>
          Test representative examples, inspect failure cases and identify what needs to change before broader
          use.
        </p>
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
      <li><span aria-hidden="true">✓</span>A scoped agent prototype built during the session</li>
      <li><span aria-hidden="true">✓</span>A custom tool or integration and its permission boundaries</li>
      <li><span aria-hidden="true">✓</span>A structured output schema with validation</li>
      <li><span aria-hidden="true">✓</span>Evaluation cases and a list of limitations to address</li>
    </ul>
  </div>
</section>
<section class="section-wrap section-space workshop-example">
  <p class="eyebrow">AN ILLUSTRATIVE WORKSHOP LAB</p>
  <h2 class="section-title">A support-triage agent you can inspect.</h2>
  <p class="section-intro">
    In this illustrative lab, an agent reads a synthetic support ticket, looks up a relevant help article and
    returns a structured triage recommendation for a person to review.
  </p>
  <div class="example-flow">
    <div>
      <span>INPUT</span>
      <p>Synthetic ticket + a small help collection</p>
    </div>
    <div>
      <span>WORK THROUGH</span>
      <p>Read → retrieve → classify → validate</p>
    </div>
    <div>
      <span>TAKE AWAY</span>
      <p>Structured recommendation + human review</p>
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
      Participants should know basic TypeScript and AI fundamentals. We confirm the environment, Claude API
      access, setup steps and any company restrictions in advance. Exercises use sample data; access and usage
      costs are clarified in the proposal.
    </p>
    <p>
      There is no assumed access to your company systems. We agree on suitable tools and material during
      planning.
    </p>
  </div>
</section>
<Contact />
