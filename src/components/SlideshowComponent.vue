<template>
    <div class="slideshow">
      <!-- Slideshow Images -->
      <div
        v-for="(item, index) in slides"
        :key="index"
        class="slide"
        :class="{ active: index === currentIndex }"
        :style="{ backgroundImage: `url(${item.image})` }"
      ></div>
  
      <!-- Text and Button Overlay -->
      <div
        v-for="(item, index) in slides"
        :key="index"
        class="slideshow-overlay"
        :class="{ active: index === currentIndex }"
      >
        <h1 class="slideshow-title">{{ item.text }}</h1>
        <button class="slideshow-button">{{ $t('home.learnMore') }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SlideshowComponent",
    data() {
      return {
        currentIndex: 0,
        slides: [],
      };
    },
    mounted() {
      this.updateSlidesText(); // Initialize the slides with the correct translations
      if (this.slides && this.slides.length > 0) {
        this.startSlideshow();
      } else {
        console.warn("Slides array is empty or undefined");
      }
    },
    watch: {
      // Watch for changes in the language and update slides text dynamically
      "$i18n.locale": {
        immediate: true,
        handler() {
          this.updateSlidesText();
        },
      },
    },
    methods: {
      startSlideshow() {
        setInterval(() => {
          if (this.slides.length > 0) {
            this.currentIndex = (this.currentIndex + 1) % this.slides.length;
          }
        }, 3000); // 3 seconds per slide
      },
      updateSlidesText() {
        // Dynamically update the slides based on the current locale
        this.slides = [
          { image: "/Images/11.png", text: this.$t("slideshow[0].text") },
          { image: "/Images/22.png", text: this.$t("slideshow[1].text") },
          { image: "/Images/33.png", text: this.$t("slideshow[2].text") },
        ];
      },
    },
  };
  </script>
  
  
  <style scoped>
.slideshow {
  position: relative;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  overflow: hidden;
  z-index: 0; /* Ensure it's behind the header */
}

/* Slideshow Images */
.slide {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.slide.active {
  opacity: 1;
}

/* Text Overlay */
.slideshow-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  z-index: 1; /* Above the slideshow */
  opacity: 0;
  transition: opacity 1.5s ease-in-out;
}

.slideshow-overlay.active {
  opacity: 1;
}

/* Title Styling */
.slideshow-title {
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  margin-bottom: 20px;
}
  
  /* Button Styling */
  .slideshow-button {
    background-color: gold;
    color: black;
    border: none;
    padding: 15px 30px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s, transform 0.3s;
  }
  
  .slideshow-button:hover {
    background-color: #e6b800;
    transform: scale(1.05);
  }
  
  @media (max-width: 768px) {
    .slideshow {
      height: 30vh; /* Ensure full height on mobile */
      box-sizing: border-box;
    }
  
    .slideshow-overlay {
      padding: 0 10px;
      margin-top: 86px;
      box-sizing: border-box;
      width: 300px;
    }
  
    .slideshow-title {
      font-size: 1rem;
    }
  
    .slideshow-button {
      font-size: 0.8rem;
      padding: 10px 12px;
    }
  }
  </style>
  