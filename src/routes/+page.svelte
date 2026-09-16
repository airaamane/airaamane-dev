<script lang="ts">
  import Seo from '$lib/components/Seo.svelte';
  import Contact from '$lib/components/Contact.svelte';
  import { afterNavigate } from '$app/navigation';
  let businessAgendaOpen = $state(false);
  function revealLinkedAgenda() {
    if (window.location.hash === '#business-agenda') businessAgendaOpen = true;
  }
  afterNavigate(revealLinkedAgenda);
</script>

<svelte:window onhashchange={revealLinkedAgenda} />
<Seo
  title="Claude Code &amp; Agent SDK Training | Abdellah Iraamane"
  description="Live, hands-on Claude Code and Agent SDK workshops for engineering teams. Delivered remotely or on-site across Europe by Abdellah Iraamane."
  path="/"
  service="Claude Code and Claude Agent SDK company training"
/>

<section class="hero brand-hero section-wrap">
  <div class="hero-copy">
    <p class="eyebrow"><span class="short-line"></span> PRIVATE WORKSHOPS FOR ENGINEERING &amp; AI TEAMS</p>
    <h1>Claude training.<br />For teams that<br /><em>want to build.</em></h1>
    <p class="hero-description">
      Live, hands-on Claude Code and Agent SDK workshops for engineering teams, delivered remotely or on-site
      across Europe.
    </p>
    <p class="hero-support">
      Leave with working code, reusable workflows and a clear way to review AI-generated work.
    </p>
    <div class="hero-actions">
      <a class="button button-dark" href="#contact"
        >Discuss your team’s workshop <span aria-hidden="true">↗</span></a
      ><a class="text-link" href="/claude-code-training/#agenda"
        >View a sample agenda <span aria-hidden="true">↗</span></a
      >
    </div>
    <p class="hero-footnote">
      Also available: <a href="#business-training">Claude training for business teams</a>.
    </p>
  </div>
  <aside class="hero-profile" aria-label="Meet your instructor">
    <div class="hero-photo">
      <img
        src="/instructor-portrait-warm.png"
        alt="Abdellah Iraamane"
        width="1402"
        height="1122"
        fetchpriority="high"
      />
    </div>
    <div class="profile-details">
      <p class="eyebrow">YOUR INSTRUCTOR</p>
      <h2 translate="no">Abdellah Iraamane</h2>
      <p>Udacity course instructor</p>
      <a
        href="https://www.udacity.com/course/agentic-engineering-with-claude-agent-sdk--cd14715"
        target="_blank"
        rel="noopener noreferrer">View the course curriculum <span aria-hidden="true">↗</span></a
      >
    </div>
  </aside>
</section>
<div class="proof-strip">
  <div class="section-wrap">
    <span>A look inside the workshops</span><a href="#sample-lab"
      >Explore a sample lab <span aria-hidden="true">↗</span></a
    ><a
      href="https://github.com/udacity/cd14715-claude-code-classroom"
      target="_blank"
      rel="noopener noreferrer">Public course exercises <span aria-hidden="true">↗</span></a
    >
  </div>
</div>
<section id="workshops" class="section-wrap section-space">
  <div class="section-heading-row">
    <div>
      <p class="eyebrow">01 / CHOOSE YOUR WORKSHOP</p>
      <h2 class="section-title">A focused session.<br />A concrete takeaway.</h2>
    </div>
    <p class="section-intro">
      Start with the work your team wants to do. Each session combines guided instruction, a practical lab and
      time to inspect the result.
    </p>
  </div>
  <div class="workshop-grid">
    <article class="workshop-card featured">
      <div class="card-meta"><span>FOR ENGINEERING TEAMS</span><span>01</span></div>
      <div class="card-symbol" aria-hidden="true">⌘</div>
      <h3>Claude Code.<br />From task to review.</h3>
      <p class="card-description">
        Help your developers build a shared approach to AI-assisted engineering, grounded in a real
        development task.
      </p>
      <ul class="check-list">
        <li>Configure project context and reusable skills</li>
        <li>Implement a change, test it and review the diff</li>
        <li>Turn the process into a shared team playbook</li>
      </ul>
      <div class="card-result">
        <span>LEAVE WITH</span>
        <p>A worked code change, project-context files and a review checklist.</p>
      </div>
      <div class="card-format">Sample format: 1 day · live workshop</div>
      <a href="/claude-code-training/" class="card-link"
        >View workshop &amp; agenda <span aria-hidden="true">↗</span></a
      >
    </article>
    <article class="workshop-card">
      <div class="card-meta"><span>FOR DEVELOPERS & AI TEAMS</span><span>02</span></div>
      <div class="card-symbol" aria-hidden="true">&lt;/&gt;</div>
      <h3>Claude Agent SDK.<br />From idea to agent.</h3>
      <p class="card-description">
        Build a focused agent around a business workflow, with explicit tools, structured output and
        evaluation cases.
      </p>
      <ul class="check-list">
        <li>Connect a custom tool or MCP server</li>
        <li>Set permissions and validate structured output</li>
        <li>Evaluate behaviour with representative cases</li>
      </ul>
      <div class="card-result">
        <span>LEAVE WITH</span>
        <p>An agent prototype, an output schema and a small evaluation set.</p>
      </div>
      <div class="card-format">Sample format: 1 day · live workshop</div>
      <a href="/claude-agent-sdk-training/" class="card-link"
        >View workshop &amp; agenda <span aria-hidden="true">↗</span></a
      >
    </article>
    <article id="business-training" class="workshop-card">
      <div class="card-meta"><span>FOR BUSINESS TEAMS</span><span>03</span></div>
      <div class="card-symbol" aria-hidden="true">↗</div>
      <h3>Claude for teams.<br />From task to workflow.</h3>
      <p class="card-description">
        Turn a recurring document or research task into a reusable workflow your colleagues can understand and
        review.
      </p>
      <ul class="check-list">
        <li>Define useful context and clear instructions</li>
        <li>Work through a document task with sample data</li>
        <li>Check the result against source material</li>
      </ul>
      <div class="card-result">
        <span>LEAVE WITH</span>
        <p>A reusable prompt, a worked example and a human-review checklist.</p>
      </div>
      <div class="card-format">Sample format: half-day · no coding required</div>
      <a href="#business-agenda" onclick={() => (businessAgendaOpen = true)} class="card-link"
        >View the sample agenda <span aria-hidden="true">↗</span></a
      >
    </article>
  </div>
  <p class="planning-note">
    Sample formats are starting points. Duration, participant count, delivery and pricing are agreed in your
    proposal.
  </p>
  <details bind:open={businessAgendaOpen} id="business-agenda" class="business-agenda">
    <summary>Inside the business-team workshop <span aria-hidden="true">+</span></summary>
    <div class="business-agenda-content">
      <p>
        <strong>Suggested group:</strong> 6–12 participants. <strong>Prerequisites:</strong> no coding; suitable
        Claude access and sample documents agreed in advance.
      </p>
      <ol>
        <li>
          <strong>Choose the task.</strong> Define the audience, source material and what a useful result should
          contain.
        </li>
        <li>
          <strong>Build the workflow.</strong> Create clear instructions and work through a document summary, comparison
          or first draft.
        </li>
        <li>
          <strong>Check the result.</strong> Trace claims to the source and identify omissions or unsupported conclusions.
        </li>
        <li>
          <strong>Make it reusable.</strong> Package the prompt, example and checklist so a colleague can repeat
          the task.
        </li>
      </ol>
      <a class="text-link" href="#contact">Discuss this workshop <span aria-hidden="true">↗</span></a>
    </div>
  </details>
</section>
<section id="instructor" class="instructor-story">
  <div class="section-wrap section-space story-grid">
    <div>
      <p class="eyebrow">02 / HOW I TEACH</p>
      <h2 class="section-title">
        Build it.<br />Check it.<br /><span class="orange-text">Make it repeatable.</span>
      </h2>
      <p class="story-signature">
        Abdellah Iraamane<br /><span>Claude trainer &amp; Udacity instructor</span>
      </p>
    </div>
    <div class="story-copy">
      <p class="story-lead">
        A workflow is useful when your team can explain it, check its output and use it again.
      </p>
      <p>
        That is the approach I bring to company training: choose a narrow problem, work through it together,
        then inspect where the result needs improvement. Your team practises the decisions as well as the
        tools.
      </p>
      <p>
        My Udacity course covers agentic engineering with Claude Code and the Claude Agent SDK. You can
        explore the published curriculum and public exercises before we discuss your own team’s goals.
      </p>
      <div class="evidence-links">
        <a
          href="https://www.udacity.com/course/agentic-engineering-with-claude-agent-sdk--cd14715"
          target="_blank"
          rel="noopener noreferrer"
          ><span>ON UDACITY</span><strong>Agentic Engineering<br />with Claude Agent SDK</strong><em
            >View the curriculum <span aria-hidden="true">↗</span></em
          ></a
        ><a
          href="https://github.com/udacity/cd14715-claude-code-classroom"
          target="_blank"
          rel="noopener noreferrer"
          ><span>PUBLIC TEACHING MATERIAL</span><strong>Inspect the course<br />exercises on GitHub</strong
          ><em>Explore the repository <span aria-hidden="true">↗</span></em></a
        >
      </div>
    </div>
  </div>
</section>
<section id="sample-lab" class="section-wrap section-space">
  <div class="section-heading-row">
    <div>
      <p class="eyebrow">03 / AN EXAMPLE LAB</p>
      <h2 class="section-title">See what your team<br />could work through.</h2>
    </div>
    <p class="section-intro">
      An illustrative Agent SDK exercise: turn a support ticket into a structured recommendation that a person
      can review.
    </p>
  </div>
  <div class="lab-layout">
    <div class="lab-steps">
      <article>
        <span>01 / INPUT</span>
        <h3>A ticket and a help collection.</h3>
        <p>
          Start with synthetic customer text and a small set of reference articles. Agree on the fields a
          useful result needs.
        </p>
      </article>
      <article>
        <span>02 / BUILD</span>
        <h3>A tool-connected agent.</h3>
        <p>
          Connect a lookup tool, set its access boundaries, and ask the agent to return a response that
          matches a schema.
        </p>
      </article>
      <article>
        <span>03 / EVALUATE</span>
        <h3>A result your team can check.</h3>
        <p>
          Test clear, incomplete and ambiguous tickets. Review the evidence and flag the cases that need a
          person.
        </p>
      </article>
    </div>
    <div class="sample-output">
      <div class="sample-output-heading"><span>ILLUSTRATIVE OUTPUT</span><span>triage.json</span></div>
      <pre aria-label="Illustrative structured triage output"><code
          >&#123;
  <span class="code-key">"category"</span>: <span class="code-value">"account_access"</span>,
  <span class="code-key">"summary"</span>: <span class="code-value">"Password reset link expired"</span>,
  <span class="code-key">"reference"</span>: <span class="code-value">"help/reset-password"</span>,
  <span class="code-key">"next_step"</span>: <span class="code-value">"Review the suggested reply"</span>,
  <span class="code-key">"human_review_required"</span>: <span class="code-value">true</span>
&#125;</code
        ></pre>
      <p>
        What you leave with: a prototype, an output schema, evaluation cases and notes on what still needs
        work.
      </p>
      <a href="/claude-agent-sdk-training/#agenda"
        >See the Agent SDK agenda <span aria-hidden="true">↗</span></a
      >
    </div>
  </div>
</section>
<section id="consulting" class="consulting-section">
  <div class="section-wrap section-space consulting-grid">
    <div>
      <p class="eyebrow">04 / CLAUDE CONSULTING</p>
      <h2 class="section-title">A clear plan for<br />your next workflow.</h2>
      <p class="section-intro">
        For teams with a use case to assess or an agent prototype that needs a second pair of eyes.
      </p>
      <a class="button button-dark" href="#contact"
        >Discuss a consulting scope <span aria-hidden="true">↗</span></a
      >
    </div>
    <article class="consulting-offer">
      <p class="eyebrow">WORKFLOW &amp; ARCHITECTURE REVIEW</p>
      <h3>From open questions<br />to agreed next steps.</h3>
      <p>
        We review one target workflow, your current approach and the constraints that matter to your team.
      </p>
      <ul class="check-list">
        <li>A written assessment of the use case and its assumptions</li>
        <li>A proposed workflow and tool-access map</li>
        <li>Evaluation criteria and key failure cases to test</li>
        <li>A prioritised implementation plan</li>
      </ul>
      <p class="consulting-scope">
        Scope, access, timing and fee are agreed before work starts. Implementation support can be scoped
        separately.
      </p>
    </article>
  </div>
</section>
<section id="approach" class="approach-section">
  <div class="section-wrap section-space">
    <div class="section-heading-row">
      <div>
        <p class="eyebrow">05 / FROM FIRST CONVERSATION TO WORKSHOP</p>
        <h2 class="section-title">Plan around the team.<br />Teach through the work.</h2>
      </div>
    </div>
    <div class="process-grid">
      <article>
        <span class="process-number">01 / SCOPE</span>
        <h3>Agree on the outcome.</h3>
        <p>
          We discuss your audience, experience and use case, then agree on the format, preparation,
          deliverables and fee.
        </p>
      </article>
      <article>
        <span class="process-number">02 / PRACTISE</span>
        <h3>Work through the lab.</h3>
        <p>
          Short demonstrations lead into hands-on work. We inspect the results, discuss decisions and leave
          space for questions.
        </p>
      </article>
      <article>
        <span class="process-number">03 / CONTINUE</span>
        <h3>Keep the useful work.</h3>
        <p>
          Your team takes away the material developed in the session and agreed next steps. Any follow-up
          support has its own scope.
        </p>
      </article>
    </div>
  </div>
</section>
<section id="faq" class="faq-section section-wrap section-space">
  <div>
    <p class="eyebrow">06 / PLANNING YOUR SESSION</p>
    <h2 class="section-title">The details<br />before you book.</h2>
  </div>
  <div class="faq-list">
    <details>
      <summary>Which workshop should we choose?<span aria-hidden="true">+</span></summary>
      <p>
        Choose Claude Code if your team wants a shared approach to AI-assisted development. Choose the Agent
        SDK workshop if you want to build applications that use tools and act on a workflow. Claude for
        business teams focuses on recurring document and knowledge-work tasks.
      </p>
    </details>
    <details>
      <summary
        >How long is a workshop, and how many people can attend?<span aria-hidden="true">+</span></summary
      >
      <p>
        The technical workshop pages show sample one-day agendas for groups of 6–12. The business-team sample
        is a half-day session. These are planning starting points: duration, group size, delivery format and
        breaks are agreed around your goals.
      </p>
    </details>
    <details>
      <summary>Can we use our own code or business workflow?<span aria-hidden="true">+</span></summary>
      <p>
        Yes, the scope can be shaped around your use case. We agree on access, company policies and suitable
        material first. A training repository or sample data can be used when your own material is unsuitable.
      </p>
    </details>
    <details>
      <summary>What does training cost?<span aria-hidden="true">+</span></summary>
      <p>
        You receive a proposal based on workshop scope, participant count, preparation and delivery. It sets
        out the fee, materials, any required software or API access, and any separately scoped follow-up work
        before you commit.
      </p>
    </details>
    <details>
      <summary>What is included after the session?<span aria-hidden="true">+</span></summary>
      <p>
        You keep the prompts, code, checklists or workflow notes developed in your workshop, together with
        agreed next steps. Ongoing implementation support or additional sessions are scoped separately.
      </p>
    </details>
    <details>
      <summary>Is this an official Anthropic or Udacity workshop?<span aria-hidden="true">+</span></summary>
      <p>
        These are independent workshops delivered by Abdellah Iraamane. My Udacity course is a separate
        offering and is linked so you can inspect my teaching topics. These company workshops are not offered
        by or endorsed by Anthropic or Udacity.
      </p>
    </details>
  </div>
</section>
<Contact />
