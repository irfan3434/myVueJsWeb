<template>
  <header>
    <div class="container">
      <!-- Brand Logo/Name -->
      <div class="brand">
        <router-link to="/" class="logo">{{ $t('header.brand') }}</router-link>
      </div>

      <!-- Hamburger Menu for Mobile View -->
      <div class="menu-icon" @click="toggleMenu">
        <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
        <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
        <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
      </div>

      <!-- Navigation Links -->
      <nav :class="{ open: isMenuOpen }" style="display: flex; align-items: center; gap: 60px;">
        <ul class="nav-links">
          <li><router-link to="/" @click="closeMenu">{{ $t('header.home') }}</router-link></li>
          <li><router-link to="/about" @click="closeMenu">{{ $t('header.about') }}</router-link></li>
          <li><router-link to="/contact" @click="closeMenu">{{ $t('header.contact') }}</router-link></li>
        </ul>
        <div class="language-switcher">
          <button
            :class="{ active: $i18n.locale === 'en' }"
            @click="switchLanguage('en')"
          >
            EN
          </button>
          <button
            :class="{ active: $i18n.locale === 'ar' }"
            @click="switchLanguage('ar')"
          >
            AR
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    switchLanguage(lang) {
      this.$i18n.locale = lang; // Change language dynamically
      const newDirection = lang === 'ar' ? 'rtl' : 'ltr'; // Determine direction
      document.documentElement.setAttribute('dir', newDirection); // Apply direction
    },
  },
};
</script>

<style scoped>
/* Base Header Styling */
header {
  position: absolute;
  background: #00000059;
  color: white;
  padding: 15px 0;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
  top: 0;
  z-index: 1000;
  width: 100%;
  display: flex;
  justify-content: space-between
}

/* Flexbox Container */
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%; /* Full width */
  padding: 0 20px;
  box-sizing: border-box;
}

/* Brand Styling */
.brand .logo {
  font-size: 1.8rem;
  font-weight: bold;
  color: gold;
  text-decoration: none;
}

/* Navigation Styling */
.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
  align-items: center;
}

.nav-links li {
  font-size: 1.1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.nav-links a:hover {
  color: gold;
  text-shadow: 0 0 2px gold;
}


/* Hamburger Menu for Mobile */
.menu-icon {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
}

.menu-icon .bar {
  width: 20px;
  height: 3px;
  background-color: white;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.menu-icon .bar.open {
  background-color: gold;
}

.menu-icon .bar:nth-child(1).open {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon .bar:nth-child(2).open {
  opacity: 0;
}

.menu-icon .bar:nth-child(3).open {
  transform: translateY(-8px) rotate(-45deg);
}

/* Language Switcher Styling */
.language-switcher {
  display: flex;
  gap: 10px;
}

.language-switcher button {
  background-color: transparent;
  border: 1px solid gold;
  color: gold;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
  transition: 0.3s ease;
}

.language-switcher button:hover {
  background-color: gold;
  color: black;
}


.language-switcher button.active {
  background-color: gold;
  color: black;
  border: 1px solid black;
  box-shadow: 0 0 1px gold;
  cursor: default; /* Indicate that this button is already selected */
}

/* Responsive Design for Mobile View */
@media (max-width: 768px) {
  .menu-icon {
    display: flex;
    gap:3px;
  }

  .brand .logo {
  font-size: 1.0rem;
  font-weight: bold;
  color: gold;
  text-decoration: none;
}

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%; /* Full width on mobile */
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    overflow: hidden;
    height: 0;
    transition: height 0.3s ease;
    flex-direction: column;
    align-items: center;
  }

  nav.open {
    height: auto; /* Dynamic height based on content */
    padding: 45px 0;
  }

  .nav-links {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .nav-links a {
    font-size: 1.2rem;
  }
}
</style>
