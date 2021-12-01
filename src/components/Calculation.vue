<template>
  <h3>
    Rider count: {{ riderDirectFare.length }}
    <button @click="addRider">+</button>
    <button @click="removeRider">-</button>
  </h3>
  <h3>
    Total paid cab fare:
    <input type="number" v-model="totalPaidCabFare" />
  </h3>
  <h3 v-for="(directFare, i) in riderDirectFare" :key="i">
    Rider {{ i + 1 }}'s fare if they did not carpool:
    <input
      type="number"
      v-model="directFare.value"
    />
  </h3>
  <p>We now calculate the "fair" car fare based on how much the riders are expected to pay, comparing to other riders.</p>
  <h3 v-for="(fairFare, i) in fairRiderFare" :key="i">
    Rider {{ i + 1 }}'s fair fare: {{fairFare}}
  </h3>

</template>

<script>
const calculation = {
  data() {
    return {
      riderDirectFare: [{ value: 10 }, { value: 20 }],
      totalPaidCabFare: 25,
    }
  },
  computed: {
    totalDirectFare() {
      return this.riderDirectFare.reduce((acc, curr) => {
        return acc + curr.value
      }, 0)
    },
    fairRiderFare() {
      const fairRiderFare = this.riderDirectFare.map(
        ({ value }) => (value / this.totalDirectFare) * this.totalPaidCabFare
      )
      return fairRiderFare
    }
  },
  methods: {
    addRider() {
      this.riderDirectFare.push({ value: 30 })
    },
    removeRider() {
      if (this.riderDirectFare.length <= 2) return
      this.riderDirectFare.pop()
    }
  }
}
export default calculation
</script>