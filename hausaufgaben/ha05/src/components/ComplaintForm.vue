<template>
  <!-- TODO: implement me -->
  
  <form @submit.prevent="submit">
    <div>
      <h2>Complaint form</h2>
      <p>Flight got canceled? Luggage lost? Get a refund!</p>
      <hr/>
    </div>

    <div>
      <div>
        <div>
          <p>Flight number</p>
          <input :class="[flightNumberValid(flightNumber) ? 'is-valid' : 'is-invalid']" type="text" id="flight-number" v-model="flightNumber"/>
        </div>
        <div>
          <p>Email adress</p>
          <input :class="[emailAddressValid(emailAddress) ? 'is-valid' : 'is-invalid']" type="text" id="email-address" v-model="emailAddress"/>
        </div>
      </div>

      <div>
        <div>
          <p>Date of flight</p>
          <input :class="[dateValid(flightDate) ? 'is-valid' : 'is-invalid']" type="text" id="flight-date" v-model="flightDate"/>
        </div>
        <div>
          <p>Time of flight</p>
          <input :class="[timeValid(flightTime) ? 'is-valid' : 'is-invalid']" type="text" id="flight-time" v-model="flightTime"/>
        </div>
      </div>

      <div>
          <p>IBAN</p>
          <input :class="[ibanValid(bankIban) ? 'is-valid' : 'is-invalid']" type="text" id="bank-iban" v-model="bankIban"/>
      </div>
    </div>
    
    <button type="submit">Submit complaint</button>
  </form>
</template>

<script>

export default {
  name: 'ComplaintForm',
  data() {
    return {
      formSubmitted: false,
      flightNumber: '',
      emailAddress: '',
      flightDate: '',
      flightTime: '',
      bankIban: ''
    };
  },
  methods: {
    flightNumberValid(value) {
      // TODO: implement me
      const re = /^(([A-Z][A-Z0-9])|[0-9][A-Z])( |)\d{1,4}$/;
      const match = value.match(re);
      return Boolean(match);
    },
    emailAddressValid(value) {
      const re = /^[a-zA-Z0-9]+([a-zA-Z0-9.]+)*@(tu-berlin.de|campus.tu-berlin.de|mailbox.tu-berlin.de)$/;
      const match = value.match(re);
      return Boolean(match);
    },
    dateValid(value) {
      const re = /^[0-9]{0,3}[1-9]-((0[1-9])|(1[012]?)|[1-9])-(([12][1-9]?)|(3[01]?)|(0[1-9]))$/;
      const match = value.match(re);
      return Boolean(match);
    },
    timeValid(value) {
      const re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
      const match = value.match(re);
      return Boolean(match);
    },
    ibanValid(value) {
      const re = /^DE\d{2}(\s?\d{4}){4}(\s?\d{2})$/;
      const match = value.match(re);

      if (match) {
        value = value.replace(/\s/g, '');
        const num = Number(value.slice(2, 4));
        const rest = value.slice(4)
        
        let result = 0;
        for (let number in rest) {
          result += Number(rest[number]);
        }
        
        if (result % 100 === num) {
          return true;
        }
      }

      return false;
    },
    submit() {
      this.formSubmitted = true;
    }
  }
}
</script>

<style scoped>
#main-card {
  background-color: rgba(255, 255, 255, 0.9);
}
</style>