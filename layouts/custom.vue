<template>
  <div>
    <nav
      class="fixed top-0 z-50 w-full border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 bg-slate-200"
    >
      <div class="px-3 py-3 lg:px-5 lg:pl-3">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-start rtl:justify-end">
            <!-- menu toggler -->
            <button
              @click.prevent="handleMenuToggle"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                ></path>
              </svg>
            </button>
            <!-- --------------------- -->
            <!-- brand logo -->
            <nuxtLink to="/Dashboard/Overview" class="flex ms-2 md:me">
              <img src="/favicon.ico" class="h-8 me-3" alt="FlowBite Logo" />
              <span
                class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white"
                style="font-family: emoji"
                >Decent Coders</span
              >
            </nuxtLink>
            <!-- --------------------- -->
          </div>
          <!-- searchbar -->
          <button
            type="button"
            data-collapse-toggle="navbar-search"
            aria-controls="navbar-search"
            aria-expanded="false"
            class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
          >
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
          <div class="relative hidden md:block">
            <div
              class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
            >
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input
              type="text"
              id="search-navbar"
              class="block w-[400px] p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <!-- searchbar// -->

          <div class="flex items-center">
            <div class="flex items-center m2-3">
              <NuxtLink to="/login" v-if="!user" class="me-3">
                <UButton color="primary" variant="solid">Log in</UButton>
              </NuxtLink>
              <div>
                <!-- avatar -->
                <button
                  @click="console.log('avatar clicked')"
                  type="button"
                  class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <span class="sr-only">Open user menu</span>

                  <div v-if="user">
                    <img
                      class="w-8 h-8 rounded-full"
                      :src="user.identities[0].identity_data.avatar_url"
                      alt="/istockphoto-1495088043-612x612-removebg-preview.png"
                    />
                  </div>

                  <div v-if="!user">
                    <img
                      class="w-8 h-8 rounded-full"
                      src="/istockphoto-1495088043-612x612-removebg-preview.png"
                      alt="user photo"
                    />
                  </div>
                </button>
                <!-- --------------------- -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <!-- side bar -->
    <div
      class="fixed top-0 left-0 z-40 w-64 sm:translate-x-0 h-screen transition-transform pt-20 border-r border-gray-100 select-none bg-slate-100"
      :class="{ '-translate-x-full': toggler === false }"
    >
      <!--   -->
      <div class="h-full px-3 pb-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <!-- <li>
            <nuxtLink
              to="/"
              class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 hover:text-gray-700 group"
              exact-active-class="active text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-5 h-5"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="ms-3">Profile</span>
            </nuxtLink>
          </li> -->
          <li>
            <nuxtLink
              to="/"
              class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 hover:text-gray-700 group"
              exact-active-class="active text-gray-700"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path
                  d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"
                />
                <path
                  d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"
                />
              </svg>
              <span class="ms-3">Overview</span>
            </nuxtLink>
          </li>
          <li>
            <nuxtLink
              to="/Dashboard/Users"
              class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 hover:text-gray-700 group"
              exact-active-class="active text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M20 6v12a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2z"
                />
                <path d="M10 16h6" />
                <path d="M13 11m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M4 8h3" />
                <path d="M4 12h3" />
                <path d="M4 16h3" />
              </svg>
              <span class="ms-3">Users</span>
            </nuxtLink>
          </li>

          <li>
            <nuxtLink
              to="/Dashboard/Drugs"
              class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 hover:text-gray-700 group"
              exact-active-class="active text-gray-900"
            >
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                viewBox="0 0 256 256"
                xml:space="preserve"
              >
                <defs></defs>
                <g
                  style="
                    stroke: none;
                    stroke-width: 0;
                    stroke-dasharray: none;
                    stroke-linecap: butt;
                    stroke-linejoin: miter;
                    stroke-miterlimit: 10;
                    fill: none;
                    fill-rule: nonzero;
                    opacity: 1;
                  "
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 31.902 60.467 h -4.156 v -4.156 c 0 -0.828 -0.671 -1.5 -1.5 -1.5 s -1.5 0.672 -1.5 1.5 v 4.156 H 20.59 c -0.829 0 -1.5 0.672 -1.5 1.5 s 0.671 1.5 1.5 1.5 h 4.156 v 4.155 c 0 0.828 0.671 1.5 1.5 1.5 s 1.5 -0.672 1.5 -1.5 v -4.155 h 4.156 c 0.829 0 1.5 -0.672 1.5 -1.5 S 32.731 60.467 31.902 60.467 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: rgb(0, 0, 0);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                  <path
                    d="M 78.506 70.487 L 63.437 55.419 v -9.106 c 0 -1.36 -0.367 -2.697 -1.063 -3.865 L 51.764 24.602 c -0.419 -0.705 -0.641 -1.511 -0.641 -2.332 v -4.875 c 2.259 -0.639 3.928 -2.697 3.928 -5.158 V 5.383 C 55.051 2.415 52.637 0 49.669 0 H 21.913 c -2.968 0 -5.383 2.415 -5.383 5.383 v 6.854 c 0 2.461 1.669 4.518 3.928 5.158 v 4.875 c 0 0.273 -0.033 0.543 -0.082 0.81 c -0.005 0.024 -0.01 0.047 -0.015 0.071 c -0.1 0.509 -0.277 1.002 -0.544 1.451 L 9.207 42.447 c -0.695 1.169 -1.063 2.505 -1.063 3.865 v 37.848 c 0 3.126 2.543 5.669 5.669 5.669 h 43.955 c 2.103 0 3.938 -1.153 4.917 -2.858 C 64.867 88.982 67.641 90 70.421 90 c 2.928 0 5.856 -1.114 8.085 -3.343 c 2.16 -2.16 3.35 -5.032 3.35 -8.085 C 81.856 75.518 80.666 72.646 78.506 70.487 z M 19.531 12.237 V 5.383 C 19.531 4.069 20.6 3 21.913 3 h 27.756 c 1.314 0 2.382 1.069 2.382 2.382 v 6.854 c 0 1.314 -1.068 2.382 -2.382 2.382 H 21.913 C 20.6 14.62 19.531 13.551 19.531 12.237 z M 22.396 26.135 c 0.231 -0.388 0.411 -0.799 0.568 -1.218 h 15.319 c 0.829 0 1.5 -0.671 1.5 -1.5 c 0 -0.829 -0.671 -1.5 -1.5 -1.5 H 23.459 V 17.62 h 24.664 v 4.65 c 0 1.36 0.367 2.697 1.063 3.865 L 59.797 43.98 c 0.157 0.264 0.276 0.545 0.376 0.832 H 11.409 c 0.1 -0.287 0.22 -0.568 0.376 -0.832 L 22.396 26.135 z M 57.768 86.83 H 13.814 c -1.472 0 -2.669 -1.197 -2.669 -2.669 v -4.579 h 29.002 c 0.829 0 1.5 -0.672 1.5 -1.5 s -0.671 -1.5 -1.5 -1.5 H 11.145 V 47.813 h 49.293 v 4.916 c -4.442 -2.98 -10.527 -2.51 -14.448 1.411 c -2.16 2.159 -3.349 5.031 -3.349 8.085 c 0 3.055 1.19 5.926 3.349 8.085 l 14.392 14.393 C 60.13 85.915 59.054 86.83 57.768 86.83 z M 76.385 84.536 c -3.288 3.288 -8.639 3.286 -11.928 0 l -7.113 -7.113 l 7.293 -7.293 c 0.586 -0.586 0.586 -1.535 0 -2.121 s -1.535 -0.586 -2.121 0 l -7.293 7.293 l -7.113 -7.113 c -1.593 -1.593 -2.47 -3.711 -2.47 -5.964 c 0 -2.252 0.877 -4.37 2.47 -5.963 c 1.645 -1.644 3.804 -2.466 5.963 -2.466 s 4.319 0.822 5.963 2.466 l 16.348 16.348 c 1.593 1.593 2.471 3.711 2.471 5.963 C 78.855 80.825 77.977 82.942 76.385 84.536 z"
                    style="
                      stroke: none;
                      stroke-width: 1;
                      stroke-dasharray: none;
                      stroke-linecap: butt;
                      stroke-linejoin: miter;
                      stroke-miterlimit: 10;
                      fill: rgb(0, 0, 0);
                      fill-rule: nonzero;
                      opacity: 1;
                    "
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                </g>
              </svg>
              <span class="ms-3">Drugs</span>
            </nuxtLink>
          </li>
          <li>
            <nuxtLink
              @click="logOut"
              class="flex items-center p-2 text-gray-500 rounded-lg dark:text-white hover:bg-gray-200 hover:text-gray-700 group cursor-pointer"
              exact-active-class="active text-gray-600"
            >
              <svg
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                />
              </svg>
              <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
            </nuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <!-- --------------------- -->
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg mt-14">
        <!-- toast -->
        <div v-if="toast" class="absolute right-5 md:right-10">
          <div class="flex-column">
            <transition-group>
              <theToast v-for="(mssg, index) in toastMssg" :key="index">
                <div
                  class="bg-red-400 px-4 py-2 rounded-lg text-white font-medium mb-3 font-mono"
                >
                  {{ mssg }}
                </div>
              </theToast>
            </transition-group>
          </div>
        </div>
        <!-- --------------------- -->

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
  const client = useSupabaseClient();
  const {
    data: { user },
    pending,
  } = await client.auth.getUser();

  const toast = ref(false);
  const toastMssg = ref([]);

  const toggler = ref(false);
  const handleMenuToggle = () => {
    toggler.value = !toggler.value;
  };

  const logOut = async () => {
    if (user) {
      let { error } = await client.auth.signOut();
      if (error) {
        console.log("something went wrong");
        return;
      } else {
        return navigateTo("/login");
      }
    } else {
      toast.value = true;
      toastMssg.value.push("You are not logged in");
      setTimeout(() => {
        toastMssg.value.shift();
      }, 3000);
    }
  };
</script>

<style scoped>
  .active {
    background-color: #e5e7eb;
    font-weight: 700;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
