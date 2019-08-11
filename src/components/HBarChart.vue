<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  props: {
    labels: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  extends: HorizontalBar,
  data() {
    return {
      datacollection: {
        labels: this.labels,
        datasets: [
          {
            label: 'Level',
            backgroundColor: '#686de0',
            pointBackgroundColor: '#686de0',
            borderWidth: 1,
            pointBorderColor: '#686de0',
            data: this.data,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              fontColor: 'white',
            },
            gridLines: {
              display: true,
              color: 'white',
            },
          }],
          xAxes: [{
            gridLines: {
              display: false,
              color: 'white',
            },
            ticks: {
              suggestedMin: 0,
              suggestedMax: 8,
              beginAtZero: true,
              fontColor: 'white',
              callback: (value) => {
                if (value === 0) return 'Really Bad';
                if (value === 2) return 'Beginner';
                if (value === 4) return 'Almost there';
                if (value === 6) return 'Good';
                if (value === 8) return 'Really Good';
                return '';
              },
            },
          }],
        },
        legend: {
          display: false,
          labels: {
            fontColor: 'white',
          },
        },
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
  mounted() {
    this.renderChart(this.datacollection, this.options);
  },
};
</script>
