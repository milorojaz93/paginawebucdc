<template>
  <div id="app">
    <b-navbar
      toggleable="sm"
      type="light"
      variant="light"
    >
      <b-navbar-toggle target="nav-text-collapse" />
      <b-navbar-brand href="#">
        <picture>
          <img
            src="../src/assets/logo-header.webp"
            style="width: 50px"
          >
        </picture>
        UCDC
      </b-navbar-brand>
      <b-collapse
        id="nav-text-collapse"
        is-nav
      >
        <b-navbar-nav id="nav">
          <b-nav-text class="menu">
            <router-link to="/">
              Inicio
            </router-link>
          </b-nav-text>
          <b-nav-text class="menu">
            <router-link to="/nosotros">
              Nosotros
            </router-link>
          </b-nav-text>
          <b-nav-text class="menu">
            <router-link to="/contactanos">
              Contactanos
            </router-link>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
      <b-nav-form>
        <router-link
          to="/inscribete"
          style="color:white"
          v-if="$route.name == 'Inscribete'"
        >
          <b-button
            variant="outline-success"
            id="btn-selected"
            class="btn-menu"
          >
            Inscribete
          </b-button>
        </router-link>
        <router-link
          to="/inscribete"
          v-else
        >
          <b-button
            variant="outline-success"
            class="btn-menu"
          >
            Inscribete
          </b-button>
        </router-link>
      </b-nav-form>
    </b-navbar>
    <router-view />
    <footer>
      Copyrigth 2020 - Urban City dance Company
    </footer>
  </div>
</template>

<style lang="sass">
@import "../src/styles/app.sass"
</style>
