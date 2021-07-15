<template>
  <div class="body">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Commissioner:wght@400;500;700&display=swap" rel="stylesheet">
    <Header />
    <Intro />
  </div>
</template>

<script>
import Header from '@/components/Hero.vue';
import Intro from '@/components/Intro.vue';
import '../css/index.css';

export default {
  components: {
    Header,
    Intro,
  },
};
</script>

<style lang="scss">
  .body {
    --moderate-cyan: hsl(176, 50%, 47%);
    --dark-cyan: hsl(176, 72%, 28%);
    --black: hsl(0, 0%, 0%);
    --dark-gray: hsl(0, 0%, 48%);
    --white: hsl(0, 100%, 100%);
    --gray: hsl(0, 0%, 90%);

    --ff-default: 'Commissioner', sans-serif;
    --fs-base: 0.9375rem;
    --fs-h4: 1.2rem;
    --fs-h3: 1.5rem;

    --sm-spacer: 1rem;
    --bg-spacer: 2.5rem;

    --border-radius: 0.5rem;
    --text-width: 75ch;

    font-family: var(--ff-default);
    font-size: var(--fs-base);
    background-color: var(--gray);
    text-align: center;
    min-height: 100vh;
  }
</style>
