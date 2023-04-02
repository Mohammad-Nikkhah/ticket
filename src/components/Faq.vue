<template>
  <div class="faq container">
    <h2>پرسش و پاسخ</h2>
    <li v-for="(data, index) in datas" :key="index" :class="{ active: data.isActive }" @click="toggleActive(index)">
        <h3><i class="fa-solid fa-angle-down" style="color: #717884;"></i><svg viewBox="0 0 24 24" width="32px" height="32px" fill="currentColor" class="a-accordion__icon"><path d="M14.442 16.905c0-1.427-.177-2.564-.531-3.411-.322-.77-.931-1.612-1.827-2.525l-.734-.726c-.787-.786-1.298-1.361-1.533-1.726a3.775 3.775 0 0 1-.646-2.126c0-1.005.249-1.776.747-2.312.498-.536 1.23-.804 2.197-.804.93 0 1.676.26 2.241.782.565.522.847 1.233.847 2.133h3.921c-.028-1.905-.68-3.413-1.953-4.524C15.898.556 14.212 0 12.115 0 9.951 0 8.266.548 7.06 1.645 5.853 2.74 5.25 4.275 5.25 6.248c0 1.752.814 3.476 2.442 5.17l1.996 1.954c.709.813 1.072 1.991 1.092 3.533h3.662Zm.273 5.027c0-.642-.199-1.159-.596-1.551-.397-.393-.936-.59-1.616-.59-.69 0-1.233.204-1.63.611-.397.407-.596.917-.596 1.53 0 .584.194 1.075.582 1.472.387.397.936.596 1.644.596.709 0 1.255-.199 1.637-.596.384-.397.575-.888.575-1.472Z"></path></svg>{{ data.title }}</h3>
        <span> {{ data.desc }}</span>
    </li>
</div>
</template>

<script>
export default {
  name: 'Faq',
  data() {
    return {
      isActive: false,
      datas: [
        {isActive: false, title: "چند روز قبل از پرواز، بلیط هواپیما را بخریم؟", desc: "امکان رزرو بلیط هواپیما از ماه‌ها قبل وجود دارد. اما گاهی اوقات قیمت بلیط هواپیما در روزهای نزدیک به پرواز ارزان‌تر می‌شود. بنابراین در صورتی که شرایطتان اجازه می‌دهد، رزرو آنلاین بلیط هواپیما را به روزهای نزدیک پرواز موکول کنید. البته اگر قصد سفر در ایام پرسفر نظیر تعطیلات را دارید، باید هر چه زودتر رزرو بلیط هواپیما را انجام دهید" },
        { isActive: false, title: "رزرو آنلاین بلیط هواپیما هزینه بیشتری از خرید حضوری دارد؟", desc: "خیر؛ زمانی که از یک سایت معتبر خرید بلیط هواپیما، اقدام به خرید می‌کنید، نه تنها هزینه بیشتری پرداخت نمی‌کنید، حتی ممکن است تخفیف هم بگیرید. ضمنا با خرید آنلاین بلیط هواپیما از پشتیبانی نیز برخودار هستید." },
        {isActive: false, title: "در پرواز داخلی یا خارجی، امکان تغییر نام و نام خانوادگی در بلیط سیستمی وجود ندارد. اما در بلیط چارتر، برخی از چارترکننده‌ها این تغییر را می‌پذیرند.", desc: "خیر؛ هنگام رزرو بلیط هواپیما داخلی یا خارجی امکان انتخاب صندلی وجود ندارد. البته در زمان چک‌این انتخاب محدوده صندلی امکان‌پذیر است." },
      ],
    };
  },
  methods: {
    toggleActive(index) {
      this.datas[index].isActive = !this.datas[index].isActive;
    },
  }
};
</script>

<style scoped>
h3 {
  margin: 16px 0;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  direction: rtl;
}
.fa-angle-down {
  position:absolute;
  left: 15px;
}
h2 {
  font-size: 25px;
  color:#000000;
  text-align: right;
  font-weight: 900;
  padding: 10px 0;
  font-size: 20px;
}
h3 svg {
  background-color: #e8f9fc;
  color:#17a2b8;
  border-radius: 50%;
  padding: 10px;
}
li {
  list-style: none;
  cursor: pointer;
  background:#fff;
  border: 1px solid #0000001f;
  margin: 10px 0;
  border-radius: 10px;
  padding: 10px 5px;
  position: relative;
}

li span {
  display: none;
  transition: all .5s;
  font-size: 13px;
}
li.active span {
  display: block;
}

li.active i {
  transform: rotate(180deg);
}

</style>
