<template>
  <div class="nav">
    <ul class="nav__items">
      <li class="nav__items">
        <a class="nav__link" href="#project">about</a>
      </li>
      <li class="nav__items">
        <a class="nav__link" href="#project">Discover</a>
      </li>
      <li class="nav__items">
        <a class="nav__link" href="#project">get Started</a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.nav {
  @media (max-width: 60em) {
    display: none;
  }
  margin-left: auto;
  &__link {
    text-decoration: none;
    color: var(--white);
    text-transform: capitalize;
    font-size: var(--fs-h4);

    position: relative;

    &::after {
      content: "";
      height: 1px;
      background-color: currentColor;
      position: absolute;
      bottom: 0;
      left: 100%;
      right: 100%;

      transition: all 350ms ease-in;
    }

    &:hover::after {
      left: 0;
      right: 0;
    }
  }

  &__items {
    list-style: none;
    display: flex;
    column-gap: var(--sm-spacer);
  }
}
</style>
