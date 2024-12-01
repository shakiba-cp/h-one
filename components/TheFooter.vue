<template>
  <footer>
    <div class="container">
      <div class="grid grid-cols-12">
        <!-- Left Column -->
        <div class="col-span-7 sm:col-span-12">
          <div class="flex gap-24 sm:gap-4 sm:flex-wrap sm:justify-between">
            <div class="col-span-4" v-for="(section, index) in footerSections" :key="index">
              <div class="footer-widget">
                <div class="flex flex-row items-center">
                  <strong>{{ section.title }}</strong>
                </div>
                <ul>
                  <li v-for="(link, idx) in section.links" :key="idx">
                    <nuxt-link :to="link.url" :title="link.title">
                      {{ link.text }}
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!-- Right Column -->
        <div class="col-span-5 sm:col-span-12">
          <div class="footer-widget flex flex-col gap-3">
            <p class="font-bold text-h5">{{ storeInfo.title }}</p>
            <p>
              <b>آدرس فروشگاه:</b>
              {{ storeInfo.address }}
            </p>
            <p>
              <b>آدرس ایمیل: </b>
              <a :href="'mailto:' + storeInfo.email" :title="'ارسال ایمیل به ' + storeInfo.title" target="_self">{{
                storeInfo.email }}</a>
            </p>
            <p>
              <b>شماره‌های تماس: </b>
              <a dir="ltr" :href="'tel:' + storeInfo.phone" target="_self">
                {{ storeInfo.phone }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="container">
        <p class="m-0">
          کلیه حقوق متعلق به سایت آی‌بولک می‌باشد. | طراحی و توسعه:
          <a target="_blank" href="https://tookan.tech">توکان تک</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
// Import data from DATABASE.json
import footerData from "@/assets/DATABASE.json";

// Sections data
const footerSections = ref(footerData.footer.footerSections);

// Store info
const storeInfo = ref(footerData.footer.storeInfo);

// Helper for opening Samandehi logo in a new popup
const openSamandehiLogo = () => {
  window.open(
    "https://logo.samandehi.ir/Verify.aspx?id=211878&p=uiwkrfthrfthmcsijyoemcsi",
    "Popup",
    "toolbar=no, scrollbars=no, location=no, statusbar=no, menubar=no, resizable=0, width=450, height=630, top=30"
  );
};
</script>

<style scoped>
footer {
  @apply border-t border-borderColor mt-12;
  padding-top: 2.5rem;
}

.footer-widget ul {
  list-style: none;
  padding: 0;
  padding-right: 1rem;
}

.footer-widget li {
  margin: 0.5rem 0;
  padding: 0.5rem 0;
}

.footer-widget>strong {
  font-size: 1.1rem;
  font-weight: 700;
  display: block;
  margin-bottom: 1rem;
}

.copyright {
  background: rgba(245, 245, 245, 1);
  padding: 1rem 0;
  margin-top: 2rem;
}
</style>
