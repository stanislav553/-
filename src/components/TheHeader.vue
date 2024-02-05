<script setup></script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <h1 class="header__logo">
          <RouterLink :to="{ name: 'home' }"> НВП Болид </RouterLink>
        </h1>
        <nav class="header__navigator">
          <ul class="header__menu">
            <li class="header__item">
              <RouterLink :to="{ name: 'home' }" exact-active-class="active"> Сенсоры </RouterLink>
            </li>
            <li class="header__item">
              <RouterLink :to="{ name: 'addSensor' }" exact-active-class="active"> Создать новый сенсор </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.header {
  height: 70px;
  margin-bottom: 50px;
  color: #fff;
  background-color: #3e4040;
  &__logo {
    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }

  &__menu {
    font-size: 20px;

    display: flex;
    gap: 70px;
    @media (max-width: 576px) {
      font-size: 14px;
      gap: 10px;
    }
  }

  &__item {
    white-space: nowrap;
  }
}
.active {
  color: red;
}
</style>
