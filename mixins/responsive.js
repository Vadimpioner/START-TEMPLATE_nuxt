export default {
  data() {
    return {
      width: 0,
      height: 0,
    }
  },
  methods: {
    updateResponsive() {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateResponsive);
    this.updateResponsive();
  },
}
