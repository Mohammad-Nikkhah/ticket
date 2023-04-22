<template>
  <div class="container">
    <Search/>
    <div class="box" v-for="ticket in tickets" :key="ticket.name">
      <div>
        <img :src="ticket.logo">
      </div>
      <div>
        <span class="mx-2">
            <span class="city mx-2">{{ ticket.from }} </span>
            <span class="time">{{ ticket.endTime }} </span>
        </span>
        <span class="custom-box">
           <svg class="custom" viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor" data-v-3edce143=""><path d="M17.188 16.895a1.064 1.064 0 0 1 1.281.285l.065.088 3.408 5.114.062.112c.222.47.067 1.037-.37 1.329a1.061 1.061 0 0 1-1.406-.214l-.065-.088-3.408-5.114-.061-.112a1.056 1.056 0 0 1 .37-1.329l.124-.071Zm-10.52.241c.35-.386.933-.461 1.394-.153l.1.08c.352.32.448.837.22 1.283l-.057.094-3.41 5.113-.08.1c-.348.386-.93.46-1.368.17a1.061 1.061 0 0 1-.344-1.38l.057-.094 3.41-5.113.079-.1Zm2.07 4.363 7.663.001.116.009c.521.07.914.517.914 1.047 0 .536-.402.987-.958 1.05l-.11.006-7.663-.001-.116-.009a1.056 1.056 0 0 1-.914-1.046c0-.537.403-.988.958-1.052l.11-.005Zm1.699-3.86h4.238l.143.01c.52.07.913.516.913 1.046 0 .536-.402.987-.957 1.051l-.11.005H10.4l-.117-.01a1.056 1.056 0 0 1-.913-1.046c0-.536.402-.988.957-1.051l.11-.006ZM16.799 0a4.249 4.249 0 0 1 4.25 4.249v9.347a2.55 2.55 0 0 1-2.55 2.55H6.602a2.55 2.55 0 0 1-2.55-2.55V4.25A4.249 4.249 0 0 1 8.303 0H16.8ZM8.157 10.465h-.28a1.309 1.309 0 0 0 0 2.617h.28a1.309 1.309 0 1 0 0-2.617Zm9.16 0h-.28a1.309 1.309 0 1 0 0 2.617h.28a1.309 1.309 0 0 0 0-2.617ZM15.1 2.549H10l-.099.006a.85.85 0 0 0 .1 1.694H15.1l.099-.006a.85.85 0 0 0-.1-1.694Z" fill-rule="evenodd"></path></svg>
        </span>
        <span class="mx-2">
          <span class="city mx-2">{{ ticket.to }} </span>
          <span class="time">{{ ticket.startTime }}</span>
        </span>

      </div>
     <div class="inner-box">
       <h3>{{ ticket.name }}</h3>
       <span>{{ ticket.price }}</span>
       <button class="btn btn-sm" @click="buyTicket(ticket)">خرید بلیط</button>
     </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import Search from '../components/Search.vue'
export default {
  components: {
    Search
  },
  data() {
    return {
      tickets:[]
    }
  },
  mounted(){
     axios.get('http://localhost:3000/train')
       .then(res => this.tickets =res.data )
       .catch(err => console.log(err))
  },

  methods: {
    buyTicket(ticket) {
      // Here, you can define what should happen when the "خرید بلیط" button is clicked.
      // For example, you could open a new window to a payment page, or display a modal window with a payment form.
      console.log(`Buying ticket ${ticket.name}...`);
    }
  }
}
</script>

<style scoped>
.custom-box {
   margin: 0 20px;
   position: relative;
}
.inner-box {
   border-right: 1px solid #e2e2e2;
   height: 100%;
   display: grid;
   align-items: center;
   width:100%;
   justify-content: center;
}
.custom-box:after {
    content: "";
    height: 1px;
    position: absolute;
    background: #bec6cc;
    top: 50%;
    right: 1rem;
    width: 20px;
    left: 0.5rem;
}

.time {
  font-weight: 900;
}
h3 {
  margin: 0;
  font-size: 14px;
}

svg {
  color:#bec6cc;
}

.custom:after {
  content: "";
    height: 1px;
    position: absolute;
    background: red;
    top: 50%;
    right: 0.5rem;
    left: 0.5rem;
}
.btn-sm {
  background-color: #0077db;
  color:#fff;
  font-size: 14px;
  margin-bottom: 5px;
}
.box {
  border: solid 1px #0000001f;
  box-shadow: 0 2px 5px -1px rgba(0, 0, 0, .08);
  margin: 20px 0;
  border-radius: 10px;
  display: grid;
  grid-template-columns: auto auto auto;
  direction: rtl;
  align-items: center;
  background-color: #f8fafb;
  cursor: pointer;
}
</style>
