<template>
  <div class="navigation">
    <RouterLink to="/">home</RouterLink>
    <RouterLink to="/about">about me</RouterLink>
    <RouterLink to="/memories">memories</RouterLink>
  </div>
  <RouterView/>
</template>

<style scoped>
  .navigation {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    justify-content: center;
    align-items: center;
  }

  .navigation a {
    font-size: 1.5em;
    color: #e4cddd;
    text-decoration: none;
    font-weight: bold;
  }

  .navigation a:hover {
    color: #726ca8;
  }
</style>
