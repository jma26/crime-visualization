<template>
  <div id="header">
    <nav class="navbar navbar-expand-lg navbar-dark header__nav">
      <router-link class="header__nav-brand" tag="a" to="/crime-indexes/city-crimes">
        <img class="header__nav-brand-logo" src="../assets/seacrime-logo.png" alt="SeaCrime" />
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/crime-indexes/city-crimes">State Comparison</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Crime Indexes
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/crime-indexes/burglary">
                Burglary
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/arson">
                Arson
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/burglary">
                Burglary
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/larceny">
                Larceny
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/motor-vehicle-theft">
                Motor Vehicle Theft
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/homicide">
                Homicide
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/robbery">
                Robbery
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/aggravated-assault">
                Aggravated Assault
              </router-link>
              <router-link class="dropdown-item" to="/crime-indexes/rape">
                Rape
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style lang="scss">
@import '../assets/scss/_bits.scss';
@import '../assets/scss/header.scss';
</style>
