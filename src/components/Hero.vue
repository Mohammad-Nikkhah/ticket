<template>
  <div>
    <img :src="heroImage" class="w-100" alt="Hero Image">
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch, ref } from 'vue';

export default {
  setup() {
    const route = useRoute();
    const heroImage = ref('	https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-824e4df4.webp');

    watch(() => route.path, (newPath) => {
      switch (newPath) {
        case '/':
          heroImage.value = '	https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-824e4df4.webp';
          break;
        case '/airline':
          heroImage.value = 'https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-e1fa22fb.webp';
          break;
        case '/tour':
             heroImage.value = 'https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-f039b6c5.webp';
          break;
        case '/hotel':
          heroImage.value = '	https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-8e1d56d8.webp';
        break;
        case '/airlinein':
          heroImage.value = 'https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-b5a880ed.webp';
        break;
        case '/train':
          heroImage.value = 'https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-f5969150.webp';
        break;
        default:
          heroImage.value = '	https://cdn.alibaba.ir/h2/desktop/assets/images/hero/hero-824e4df4.webp';
      }
    });

    return {
      heroImage,
    };
  },
};
</script>
