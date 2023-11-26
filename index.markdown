---
layout: default
title: Your Portfolio Title
---

<style>
.book-cover {
    width: 60%;
    margin: 20px auto;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.5);
    border: 1px solid #ccc;
    background: linear-gradient(to right, #74EBD5 0%, #9FACE6 100%);
    border-radius: 5px;
    padding: 40px;
    text-align: center;
}

.book-cover .book-content {
    padding: 1em;
    border: 1px solid #ddd;
    background: white;
    margin: 10px;
    box-shadow: inset 0 0 10px rgba(0,0,0,0.1);
    border-radius: 3px;
    background-color: #7d0000;
    background-image: url("data:image/svg+xml,%3Csvg width='42' height='44' viewBox='0 0 42 44' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='Page-1' fill='none' fill-rule='evenodd'%3E%3Cg id='brick-wall' fill='%23434343' fill-opacity='0.4'%3E%3Cpath d='M0 0h42v44H0V0zm1 1h40v20H1V1zM0 23h20v20H0V23zm22 0h20v20H22V23z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

.book-cover h2 {
    margin: 0;
    color: var(--color-primary);
}

.book-cover p {
    color: var(--color-text);
}
</style>

<header style="background: #34495e; color: #ecf0f1; padding: 100px 0; text-align: center;">
  <h1>MY LIFE BEGINS BEING A DEVELOPER</h1>
  <p>Here's a cool tagline to catch attention</p>
  <a href="#contact" style="background: #3498db; color: white; padding: 10px 20px; display: inline-block; text-decoration: none; margin-top: 20px;">Let's Chat</a>
</header>

<section class="book-cover">
  <div class="book-content">
    <h2>Welcome to My Portfolio</h2>
    <p>Explore my work and journey as a developer.</p>
    <!-- You can add more content here -->
  </div>
</section>

<section style="padding: 60px 0;">
  <h2 style="text-align: center; color: #333;">LATEST WORK</h2>
  <!-- Project cards go here -->
</section>

<main style="padding: 40px 0; background: #ecf0f1;">
  <!-- Additional content -->
</main>

<footer style="background: #2c3e50; color: white; padding: 20px 0; text-align: center;">
  <p>&copy; {{ 'now' | date: "%Y" }} Your Name</p>
</footer>
