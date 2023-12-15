<template>
  <footer>
    <div class="bg-white py-10">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 gap-6">
          <div
            class="col-span-5 w-full flex items-end justify-center text-[#445A74]"
          >
            هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
          </div>
          <div class="col-span-2 w-full">
            <h4 class="text-xl font-bold">دسترسی آسان</h4>
            <ul class="mt-5">
              <li
                v-for="item of easyAccess"
                :key="item"
                class="my-4 cursor-pointer text-[#30445B]"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="col-span-2 w-full">
            <h4 class="text-xl font-bold">راهنمای سایت</h4>
            <ul class="mt-5">
              <li
                v-for="item of siteHelp"
                :key="item"
                class="my-4 cursor-pointer text-[#30445B]"
              >
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="col-span-2 w-full">
            <h4 class="text-xl font-bold">شبکه‌های اجتماعی</h4>
            <ul class="mt-5">
              <li
                v-for="item of socialMedia"
                :key="item"
                class="my-4 cursor-pointer flex align-center text-[#30445B]"
              >
                <img
                  :src="item.image"
                  width="25px"
                  class="ml-3"
                  :alt="`${item.text}`"
                />
                {{ item.text }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-[#F8F9FC] py-10">
      <div class="text-center text-[#445A74] text-lg">
        تمامی حقوق مادی و معنوی این وبسایت متعلق به می‌باشد و هر <br />
        گونه کپی برداری پیگرد قانونی دارد.
      </div>
      <div class="flex items-center justify-center mt-5">
        <img
          v-for="(icon, index) in socialMediaIcon"
          :key="index"
          width="25px"
          class="mx-2"
          :src="icon"
          alt="social media icons"
        />
      </div>
    </div>
  </footer>
</template>

<script setup>
import instagramPic from "@/assets/images/social_media/instagram.svg";
import telegramPic from "@/assets/images/social_media/telegram.svg";
import linkedinPic from "@/assets/images/social_media/linkedin.svg";
import linkedinPicFooter from "@/assets/images/footer/linkedin.svg";
import instagramPicFooter from "@/assets/images/footer/instagram.svg";
import telegramPicFooter from "@/assets/images/footer/telegram.svg";
import twitterPicFooter from "@/assets/images/footer/twitter.svg";
import youtubePicFooter from "@/assets/images/footer/youtube.svg";

const easyAccess = ["درباره ما", "بلاگ", "تماس با ما", "خدمات پس از فروش"];
const siteHelp = ["قوانین و مقررات", "دریافت مشاوره", "انتقادات و پیشنهادات"];
const socialMedia = [
  {
    text: "تلگرام",
    image: telegramPic,
  },
  {
    text: "اینستاگرام",
    image: instagramPic,
  },
  {
    text: "لینکدین",
    image: linkedinPic,
  },
];
const socialMediaIcon = [
  telegramPicFooter,
  instagramPicFooter,
  twitterPicFooter,
  youtubePicFooter,
  linkedinPicFooter,
];
</script>
