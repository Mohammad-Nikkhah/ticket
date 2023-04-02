<template>
 <div class="box-cu">
  <div class="py-3">
    <button class="btn btn-md d-inline btn-custom">
    جستوجو
    </button>
    <select class="mx-2" id="autoSizingSelect">
      <option selected>مقصد</option>
      <option value="1">تهران</option>
      <option value="2">رشت</option>
      <option value="3">مشهد</option>
    </select>
    <select class="mx-2" id="autoSizingSelect">
      <option selected>مبدا</option>
      <option value="1">رشت</option>
      <option value="2">تهران</option>
      <option value="3">مشهد</option>
    </select>

  </div>
 
 </div>
</template>

<script>
export default {
name: 'Search',

}
</script>

<style scoped>

.box-cu {
  display: grid;
}
#autoSizingSelect{
  width: 200px;
  padding: 5px 10px;
  border-radius: 8px;
  border:2px solid #bdc6cd;
}


.btn-custom {
   background-color: #fdb713;
   color:#000;
   font-weight: 500;
   padding: 7px 20px;
}
</style>
