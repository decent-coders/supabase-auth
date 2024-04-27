<template lang="">
  <Title>Decent Coders</Title>
  <div>
    <div class="bg-white">
      <div class="flex justify-center h-screen">
        <div
          class="hidden bg-cover lg:block lg:w-2/3"
          style="
            background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80);
          "
        >
          <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 class="text-2xl font-bold text-white sm:text-3xl">
                Decent Coders
              </h2>

              <p class="max-w-xl mt-3 text-gray-300">
                This is an demo website. It contains log in with some social
                media and email, Registration with email, Authentication and
                authorization. Once logged in theres more features...
              </p>
            </div>
          </div>
        </div>

        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div class="flex-1">
            <div class="text-center">
              <p
                class="mt-3 text-gray-500 :text-gray-300 text-2xl font-semibold mb-2"
                style="letter-spacing: 1px"
              >
                Welcome
              </p>
            </div>

            <div class="mt-8">
              <form>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm text-gray-600 :text-gray-200"
                    >Email Address</label
                  >
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="example@example.com"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg :placeholder-gray-600 :bg-gray-900 :text-gray-300 :border-gray-700 focus:border-blue-400 :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label
                      for="password"
                      class="text-sm text-gray-600 :text-gray-200"
                      >Password</label
                    >
                    <a
                      href="#"
                      class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
                      >Forgot password?</a
                    >
                  </div>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Your Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg :placeholder-gray-600 :bg-gray-900 :text-gray-300 :border-gray-700 focus:border-blue-400 :focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div class="mt-6">
                  <button
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Log in
                  </button>
                </div>
              </form>
              <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b :border-gray-600 lg:w-1/5"></span>

                <div class="text-xs text-center text-gray-500 uppercase">
                  or continue with
                </div>

                <span class="w-1/5 border-b :border-gray-400 lg:w-1/5"></span>
              </div>

              <div class="flex items-center justify-center mt-6 mx-2">
                <!-- google login -->
                <UTooltip
                  text="Log in with Google"
                  :popper="{ placement: 'top' }"
                >
                  <button
                    @click="login('google')"
                    class="flex me-4 items-center justify-center text-gray-600 transition-colors duration-300 transform border rounded-full hover:bg-gray-50 :hover:bg-gray-600"
                  >
                    <div class="px-2 py-2">
                      <svg class="w-6 h-6" viewBox="0 0 40 40">
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#FFC107"
                        />
                        <path
                          d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                          fill="#FF3D00"
                        />
                        <path
                          d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                          fill="#4CAF50"
                        />
                        <path
                          d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                          fill="#1976D2"
                        />
                      </svg>
                    </div>
                  </button>
                </UTooltip>
                <!-- facebook login  -->
                <UTooltip
                  text="Log in with Facebook"
                  :popper="{ placement: 'top' }"
                >
                  <button
                    @click="login('facebook')"
                    class="me-4 flex items-center justify-center text-gray-600 transition-colors duration-300 transform border rounded-full hover:bg-gray-50 :hover:bg-gray-600"
                  >
                    <div class="px-1 py-1">
                      <svg
                        class="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1"
                          x1="9.993"
                          x2="40.615"
                          y1="9.993"
                          y2="40.615"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#2aa4f4"></stop>
                          <stop offset="1" stop-color="#007ad9"></stop>
                        </linearGradient>
                        <path
                          fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)"
                          d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </UTooltip>
                <!-- twitter login -->
                <UTooltip
                  text="Log in with Twitter"
                  :popper="{ placement: 'top' }"
                >
                  <button
                    @click="login('twitter')"
                    class="me-4 flex items-center justify-center text-gray-600 transition-colors duration-300 transform border rounded-full hover:bg-gray-50 :hover:bg-gray-600"
                  >
                    <div class="p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        class="h-6 w-6"
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
                            d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z"
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
                    </div>
                  </button>
                </UTooltip>
                <!-- github login -->
                <UTooltip
                  text="Log in with Github"
                  :popper="{ placement: 'top' }"
                >
                  <button
                    @click="login('github')"
                    class="me-4 flex items-center justify-center text-gray-600 transition-colors duration-300 transform border rounded-full hover:bg-gray-50 :hover:bg-gray-600"
                  >
                    <div class="px-2 py-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        class="h-6 w-6"
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
                            d="M 5.46 63.31 c 0 0 3.998 1.875 6.773 8.925 c 0 0 3.581 10.887 20.55 7.197 c 0.017 3.237 0.046 6.354 0.064 8.571 C 32.857 89.112 33.758 90 34.867 90 h 26.238 c 1.11 0 2.012 -0.89 2.019 -2 c 0.02 -3.124 0.056 -8.131 0.056 -13.951 c 0 -5.691 -1.949 -9.403 -4.137 -11.296 c 13.583 -1.51 27.853 -6.668 27.853 -30.097 c 0 -6.659 -2.366 -12.101 -6.278 -16.373 c 0.633 -1.537 2.722 -7.741 -0.599 -16.143 c 0 0 -5.115 -1.638 -16.757 6.253 c -4.875 -1.352 -10.097 -2.029 -15.281 -2.053 C 42.798 4.365 37.58 5.043 32.714 6.394 C 21.058 -1.497 15.936 0.141 15.936 0.141 c -3.312 8.402 -1.224 14.606 -0.591 16.143 c -3.902 4.272 -6.286 9.713 -6.286 16.373 c 0 23.372 14.243 28.603 27.792 30.145 c -1.745 1.523 -3.325 4.215 -3.873 8.157 c -3.481 1.559 -12.311 4.254 -17.751 -5.07 c 0 0 -3.226 -5.856 -9.35 -6.287 C 5.877 59.602 -0.075 59.524 5.46 63.31 z"
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
                    </div>
                  </button>
                </UTooltip>
              </div>
              <p class="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <NuxtLink
                  to="/signup"
                  class="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >Sign up</NuxtLink
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const login = async (prov) => {
    const { data, error } = await client.auth.signInWithOAuth({
      provider: prov,
      redirectTo: window.location.origin,
    });
    if (error) console.log(error);
  };
  // watchEffect(() => {
  //   if (user.value) {
  //     return navigateTo("/dashboard/overview");
  //   }
  // });
</script>
