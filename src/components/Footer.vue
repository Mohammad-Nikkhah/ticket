<template>
  <footer class="footer">
    <Posts/>
    <Servicebox/>
     <div class="footer-top">
        <div class="row">
          <div class="col-6 d-flex justify-content-start">
                <ul class="menu">
                  <a>خدمان مشتریان</a>
                  <ul>
                    <li>مرکز پشتیبانی آنلاین</li>
                    <li>راهنمای خرید</li>
                    <li>راهنمای استرداد</li>
                    <li>پرسش و پاسخ</li>
                  </ul>
                </ul>
                <ul class="menu">
                  <a>اطلاعات تکمیلی</a>
                  <ul>
                    <li>مرکز پشتیبانی آنلاین</li>
                    <li>راهنمای خرید</li>
                    <li>راهنمای استرداد</li>
                    <li>فرصت‌های شغلی</li>
                  </ul>
                </ul>
            </div>
            <div class="col-6">
                <div class="footer-busines text-start">
                   <div class="logo-box "><img width="170px" height="30px" src="https://cdn.alibaba.ir/h2/desktop/assets/images/shawl_logotype-d8721a14.svg"></div>
                   <div class="box-tel mt-3"> 
                       <span> تلفن پشتیبانی: </span>
                       <span>۰۲۱ - ۴۳۹۰۰۰۰۰ </span>
                   </div>
                   <div class="box-address mt-2">
                      <p>دفتر پشتیبانی: اکباتان، نبش اتوبان لشگری، کوی بیمه، خیابان بیمه چهارم، بن‌بست گل‌ها، پلاک 1</p>
                   </div>
                   <ul class="namads p-0 justify-content-end p-0 d-flex"> 
                        <li class="namad"><img src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/ecunion-8b792f56.png" alt=""></li>
                        <li class="namad"><img src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/samandehi-6e2b448a.png" alt=""></li>
                        <li class="namad"><img src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/passenger-rights-48368f81.svg" alt=""></li>
                        <li class="namad"><img src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/aira-682b7c43.png" alt=""></li>
                        <li class="namad"><img src="https://cdn.alibaba.ir/h2/desktop/assets/images/footer/state-airline-f45c55b2.svg" alt=""></li>
                   </ul>
                </div>
            </div>  
        </div>
     </div>
     
  </footer>
</template>

<script>
import Servicebox from './Servicebox.vue';
import Posts from './Posts.vue'
export default {
  name: 'Footer',
  components: {
    'Servicebox': Servicebox, 
    'Posts':Posts 
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  padding: 25px 0;
}
.footer-top {
  padding-top: 25px;
}
.menu  {
   padding: 0;
}
.menu  ul {
   list-style: none;
}
.menu  ul li {
    font-size: 13px;
    text-align: start;
    padding: 0;
    padding-top: 5px;
}
.menu >a {
    color:#0a0b0c;
    font-weight:900;
    font-size: 16px;
}
.box-tel span {
  color:#2b2f33;
  font-weight: 500;
  font-size: 16px;
}
.box-address p {
  color:#2b2f33;
  font-weight: 300;
  font-size: 16px;
}
.namads {
  list-style: none;
}
.namads li{
  margin-right: 10px;
  border: 1px solid #e2e2e2;
  padding: 5px;
  border-radius: 10px;
}
.namads li img {
  width: 60px;
  height: 60px;
}
</style>
