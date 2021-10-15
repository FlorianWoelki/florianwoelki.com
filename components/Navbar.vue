<template>
  <div class="fixed flex items-center justify-between w-full px-8 py-4">
    <ul class="flex space-x-6">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="transition duration-100 ease-in-out hover:text-gray-400"
        :class="{
          'text-white': $route.path === item.link,
          'text-gray-300': $route.path !== item.link,
        }"
      >
        <nuxt-link :to="item.link.toLowerCase()" class="block">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>

    <ul class="flex space-x-6">
      <li class="text-gray-300 hover:text-gray-400">
        <a href="#" target="_blank" class="block">
          <!-- TODO: Extract to svg file -->
          <svg
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0.297001C5.37 0.297001 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.297001 12 0.297001"
            />
          </svg>
        </a>
      </li>
      <li class="text-gray-300 hover:text-gray-400">
        <a href="#" target="_blank" class="block">
          <!-- TODO: Extract to svg file -->
          <svg
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
interface NavbarItem {
  title: string;
  link: string;
}

export default defineComponent({
  setup() {
    const items: NavbarItem[] = [
      { title: 'Blog', link: '/' },
      { title: 'Resume', link: '/resume' },
      { title: 'Contact', link: '/contact' },
    ];

    return { items };
  },
});
</script>
