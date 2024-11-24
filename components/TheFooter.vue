<template>
  <footer>
    <div class="footer">
      <div class="container">
        <div class="grid grid-cols-12">
          <!-- Left Column -->
          <div class="col-span-7">
            <div class="grid grid-cols-12">
              <div class="col-span-4" v-for="(section, index) in footerSections" :key="index">
                <div class="footer-widget" data-collapsible>
                  <div class="flex flex-row items-center" data-collapsible-header>
                    <strong>{{ section.title }}</strong>
                    <img src="https://ibolak.com/assets/icons/arrow-left-simple.svg" alt="Arrow left icon"
                      class="mobile-only" />
                  </div>
                  <ul data-collapsible-body>
                    <li v-for="(link, idx) in section.links" :key="idx">
                      <a :href="link.url" :title="link.title" target="_self" class="dots-vertical">
                        <span class="dots-vertical-dots"></span>
                        <span class="dots-vertical-dots"></span>
                        <span class="dots-vertical-dots"></span>
                        {{ link.text }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <!-- Right Column -->
          <div class="col-span-5">
            <div class="footer-widget">
              <strong>{{ storeInfo.title }}</strong>
              <p>
                <b>آدرس فروشگاه:</b>
                {{ storeInfo.address }}
              </p>
              <div class="grid grid-cols-12">
                <div class="col-span-12">
                  <p>
                    <b>آدرس ایمیل: </b>
                    <a :href="'mailto:' + storeInfo.email" :title="'ارسال ایمیل به ' + storeInfo.title"
                      target="_self">{{ storeInfo.email }}</a>
                  </p>
                  <p>
                    <b>شماره‌های تماس: </b>
                    <a dir="ltr" :href="'tel:' + storeInfo.phone" target="_self">
                      {{ storeInfo.phone }}
                    </a>
                  </p>
                </div>
                <div class="col-span-12 pt-2">
                  <!-- <a :href="storeInfo.trustSealLink" target="_blank" referrerpolicy="origin">
                    <img :src="storeInfo.trustSealLink" alt="نماد اعتماد الکترونیکی" style="cursor: pointer" />
                  </a>
                  <img referrerpolicy="origin" :src="storeInfo.samandehiLogoLink" alt="logo-samandehi"
                    style="cursor: pointer" @click="openSamandehiLogo" /> -->
                </div>
              </div>
            </div>
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
.footer {
  padding: 2rem 0;
  background-color: #f8f8f8;
}

.footer-widget {
  margin-bottom: 1.5rem;
}

.copyright {
  background-color: rgba(245, 245, 245, 1);
  padding: 1rem 0;
  text-align: center;
}

.dots-vertical-dots {
  display: inline-block;
  margin-right: 0.25rem;
}

.dots-vertical {
  display: flex;
  align-items: center;
}
</style>
