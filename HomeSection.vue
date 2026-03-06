
<!--
  =========================================
  PART 1: THE STRUCTURE (Our HTML)
  =========================================
-->
<template>
  <!-- 
      <main> is our giant container box holding the whole page
      
        We give it a class of "hero" so we can target it in CSS
      
        A Hero Section is the large top section of a webpage.
    
  -->

  <main class="hero"> 
    <div class="content">  <!-- Content's a container for grouping and styling inner elements as a single unit. -->
      <img class="profile-photo" src ="C:\Users\PaderXiong\Desktop\CYCLE 20\portfolio\src\assets\Me.png">
      <h1>Jai Xiong</h1>
      <p>Welcome to my Web Portfolio</p>
    </div>
  </main>
</template>

<!--
  =========================================
  PART 2: THE LOGIC (We don't need any yet!)
  =========================================
-->

<script>

// This is where JavaScript goes. We leave it empty for now
// because our layout doesn't have any interactive buttons or data yet.

</script>

<!--
  =========================================
  PART 3: THE DESIGN (Our CSS)
  =========================================
-->

<style>

  /* --- GLOBAL STYLES --- */

    /* --- BODY --- */
      body { 
        /* Set a style for the whole body */
        margin: 0; /* Browsers add a tiny 8px border by default. This deletes it! */
        font-family: 'Inter', Helvetica, Arial, sans-serif; /* Clean, modern font */

        /* CENTER CONTENT */
        /* We want everything inside the body to be centered horizontally and vertically.
          Property starts with "place-" and value should be "center". */
        /* How can I center content in the middle of a container both vertically and horizontally using CSS? */

        /* YOUR ANSWER BELOW */
        place-items: center;
      }

  .hero{
    
    /* SIZING */
      height: 100vh; /* 100vh = exactly 100% of the screen's height --- vh = viewport height --- */
      width: 50vw; /* 50vw = exactly 50% of the screen's width (Half screen) --- vw = viewport width --- */
    
    /* FLEXBOX CENTERING MAGIC */
      display: flex; /* Turns on flexbox mode */
      justify-content: center; /* Centers items horizontally (left to right) */
      align-items: center; /* Centers items vertically (up and down) */

    /* BACKGROUND IMAGE STYLING */
      background-image: url("https://imgs.search.brave.com/9fk3dPZc6LvjPwmR81TsZrPzWTXQI_d5hUha1vIt5oc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE3/MTAxNjI3MzQxMzUt/OGRjMTQ4ZjUzYWJl/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE0zeDhkMlZpYzJs/MFpTVXlNR0poWTJ0/bmNtOTFibVI4Wlc1/OE1IeDhNSHg4ZkRB/PQ");
      background-size: cover; /* 'cover' stretches the image to fill the box without squishing it */
        /* BACKGROUND POSITION */
          /* Property: background-position. Value: center */
          /* How can I make a background image always stay centered in CSS? */

          /* YOUR ANSWER BELOW */

    /* DEFAULT TEXT STYLING FOR EVERYTHING INSIDE */
    
      /* TEXT ALIGN */
      /* Property: text-align. Value: center */
      /* How can I center text horizontally in CSS? */

      /* YOUR ANSWER BELOW */


    
    /* THE DARK OVERLAY (So text is readable!) */
      background-color: rgba(0,0,0,0.6); /* Make a black box that is 60% transparent */
      background-blend-mode: overlay; /* Mix the black box with the background image beneath it */
  } 


  /* --- PROFILE PHOTO --- */
    .profile-photo {
      height: 130px;
      width: 130px;
    }

  /* --- CONTENT WRAPPER --- */
  /* Groups the photo, name, and tagline into one centered column */
  
  .content {
    /* FLEXBOX */
      /* Property: display. Value: flex */
      /* How do I make a container use flexbox in CSS? */

      /* YOUR ANSWER BELOW */
  

    /* FLEX DIRECTION */
      /* Property: flex-direction. Value: column */
      /* How can I make flex items stack vertically instead of horizontally in CSS? */

      /* YOUR ANSWER BELOW */
  

    /* ALIGN ITEMS */
      /* Property: align-items. Value: center */
      /* How do I center flex items horizontally when using column direction in CSS? */

      /* YOUR ANSWER BELOW */

  }

</style>
