<template>
    <section class="timeline" :class="{ rtl: isRtl }">
      <h2 class="timeline-title">{{ $t("timeline[0].text") }}</h2>
      <div class="timeline-container">
        <div
          v-for="(phase, index) in timeline"
          :key="index"
          class="timeline-item"
          :class="{ left: index % 2 === 0 && !isRtl, right: index % 2 !== 0 && !isRtl, rtlLeft: index % 2 === 0 && isRtl, rtlRight: index % 2 !== 0 && isRtl }"
        >
          <div class="timeline-content">
            <h3 class="phase-title">{{ phase.title }}</h3>
            <p class="phase-date">{{ phase.date }}</p>
            <ul class="phase-content">
              <li v-for="(milestone, idx) in phase.milestones" :key="idx">
                {{ milestone }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
</template>
  
<script>
export default {
  name: "TimelineComponent",
  data() {
    return {
      timeline: [],
    };
  },
  computed: {
    isRtl() {
      return this.$i18n.locale === "ar"; // Dynamically detect if the language is Arabic
    },
  },
  mounted() {
    this.updateTimeline(); // Initialize timeline based on the current locale
  },
  watch: {
    $i18n: {
      handler() {
        this.updateTimeline(); // Update timeline dynamically on language change
      },
      immediate: true,
    },
  },
  methods: {
    updateTimeline() {
      this.timeline = [
        {
          title: this.$t("timeline[1].text"),
          date: this.$t("timeline[2].text"),
          milestones: [
            this.$t("timeline[3].text"),
            this.$t("timeline[4].text"),
            this.$t("timeline[5].text"),
            this.$t("timeline[6].text"),
          ],
        },
        {
          title: this.$t("timeline[7].text"),
          date: this.$t("timeline[8].text"),
          milestones: [
            this.$t("timeline[9].text"),
            this.$t("timeline[10].text"),
            this.$t("timeline[11].text"),
          ],
        },
        {
          title: this.$t("timeline[12].text"),
          date: this.$t("timeline[13].text"),
          milestones: [
            this.$t("timeline[14].text"),
            this.$t("timeline[15].text"),
          ],
        },
        {
          title: this.$t("timeline[16].text"),
          date: this.$t("timeline[17].text"),
          milestones: [
            this.$t("timeline[18].text"),
            this.$t("timeline[19].text"),
            this.$t("timeline[20].text"),
          ],
        },
      ];
    },
  },
};
</script>

<style scoped>
/* Base Styles for the Timeline */
.timeline {
  padding: 50px 20px;
  background-color: black; /* Black background for the section */
  position: relative;
}

.timeline-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  color: gold; /* Golden color for the title */
  margin-bottom: 30px;
}

/* Timeline Container */
.timeline-container {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  gap: 30px;
}

/* Timeline Item */
.timeline-item {
  position: relative;
  width: 50%;
  padding: 20px;
  border-radius: 8px;
  background-color: #2c2c2c; /* Dark silver background for timeline items */
  color: white; /* White text for readability */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  z-index: 1;
  border-left: 5px solid gold; /* Gold border for emphasis */
}

.timeline-item.left {
  align-self: flex-start;
}

.timeline-item.right {
  align-self: flex-end;
}

.timeline-item.rtlLeft {
  align-self: flex-end;
  text-align: right;
  border-right: 5px solid gold;
  border-left: none;
}

.timeline-item.rtlRight {
  align-self: flex-start;
  text-align: right;
  border-right: 5px solid gold;
  border-left: none;
}

.timeline-item:before {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: gold; /* Gold dots connecting the timeline */
  z-index: 2;
  border: 2px solid silver; /* Silver border for the dots */
}

.timeline-item.left:before {
  right: -20px;
}

.timeline-item.right:before {
  left: -25px;
}

/* Timeline Content */
.timeline-content {
  text-align: left;
}

.phase-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: gold; /* Gold color for phase titles */
}

.phase-date {
  font-size: 1.2rem;
  font-style: italic;
  margin-bottom: 15px;
  color: silver; /* Silver for phase dates */
}

.phase-milestones {
  list-style: disc;
  padding-left: 20px;
  font-size: 1rem;
  color: white; /* White text for milestone details */
}

/* Line Between Timeline Items */
.timeline-container:before {
  content: "";
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: silver; /* Silver connecting line */
  transform: translateX(-50%);
  z-index: 0;
}

/* Hover Effect for Items */
.timeline-item:hover {
  background-color: gold; /* Gold background on hover */
  color: black; /* Black text for contrast */
  transition: background-color 0.3s ease, color 0.3s ease;
  border-left: 5px solid #888787;
}

.timeline-item:hover .phase-title {
  color: black; /* Black title color on hover */
}

.timeline-item:hover .phase-date {
  color: #888787; /* Ensure phase date remains visible */
}

.timeline-item:hover .phase-milestones {
  color: black; /* Ensure milestones remain visible */
}

/* Responsive Design */
@media (max-width: 768px) {
    .timeline-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .timeline-item {
        background-color: #2c2c2c;
        color: white;
        border-radius: 10px;
        padding: 6px 14px 6px 6px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        position: relative;
        text-align: left;
        overflow: hidden;
        width: 370px;
        height: 195px;
  }

  .timeline-item:before {
    display: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 5px;
    background: gold; /* Gold vertical line on the left */
  }

  .timeline-title {
    text-align: center;
    font-size: 1.3rem;
    font-weight: bold;
    color: gold;
    margin-bottom: 30px;
  }

  .phase-title {
    font-size: 1.0rem;
    font-weight: bold;
    color: gold;
    margin-bottom: 10px;
  }

  .phase-date {
    font-size: 0.9rem;
    font-style: italic;
    color: silver;
    margin-bottom: 10px;
  }

  .phase-milestones {
    list-style: none;
    padding: 0;
    margin: 0;
    color: white;
    counter-reset: step-counter;
    text-align: justify;
  }

  .phase-milestones li {
    font-size: 0.8rem;
    margin-bottom: 10px;
    position: relative;
    padding-left: 30px; /* Space for the counter */
    text-align: justify;
  }

  .phase-milestones li:before {
    content: counter(step-counter);
    counter-increment: step-counter;
    position: absolute;
    left: 0;
    top: 0;
    background-color: gold;
    color: black;
    font-size: 1rem;
    font-weight: bold;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .timeline-content {
    font-size: 0.9rem;
    text-align: justify;
  }
}
</style>
