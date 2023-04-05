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
          <svg viewBox="0 0 24 24" width="1rem" height="1rem" fill="currentColor" data-v-3edce143=""><path d="M.601 12.008c0 .929.297 1.545 1.003 1.857.392.172.802.226 1.46.22l.362-.009 5.656-.24.26.368.326.493.42.659.87 1.41 1.573 2.626 1.678 2.855a2.204 2.204 0 0 0 1.858 1.155.9.9 0 0 0 .878-1.198l-3.018-8.582c-.008-.021-.002-.03.006-.03l6.447-.29.79 2.114.035.13c.257.593.77.862 1.287.761.61-.12 1.008-.711.889-1.322l-.005-.09.009-5.947c.05-.488-.338-1.007-.9-1.12-.546-.107-1.029.189-1.246.665l-.832 2.22-6.446-.29a.013.013 0 0 1-.011-.017l3.179-8.595a.9.9 0 0 0-.92-1.209l-.161.014c-.69.02-1.352.4-1.754 1.013L12.426 4.8l-1.21 2.02-.8 1.308-.54.86-.45.693-.238.347-.107.149-5.602-.264h-.623l-.16.007-.206.016c-1.287.127-1.889.767-1.889 2.072Z" fill-rule="evenodd"></path></svg>
        </span>
        <span class="mx-2">
          <span class="city mx-2">{{ ticket.to }} </span>
          <span class="time">{{ ticket.startTime }}</span>
        </span>

      </div>
     <div class="inner-box">
       <h3>{{ ticket.name }}</h3>
       <span>{{ ticket.price }}</span>
       <button class="btn btn-sm">خرید بلیط</button>

     </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios';
import Search from '../components/Search.vue'
export default {

  name: '',
  components: {
    Search
  },

  data() {
    return {
      tickets:[]
    }
  },
  mounted(){
     axios.get('http://localhost:3000/airline')
       .then(res => this.tickets =res.data )
       .catch(err => console.log(err))
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

.btn-sm {
  background-color: #0077db;
  color:#fff;
  font-size: 14px;
  margin-bottom: 5px;
}
.custom-box:after {
    content: "";
    height: 1px;
    position: absolute;
    background: #bec6cc;
    top: 50%;
    right: 1.rem;
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
