<template>
  <Title>Sign up</Title>
  <div class="flex items-center min-h-screen">
    <form
      class="mx-auto my-5 h-full max-w-screen-xl w-4/5 items-center justify-cente p-5 lg:px-16 my-0 lg:w-2/3"
    >
      <div class="">
        <div class="pb-5">
          <h2 class="text-2xl font-semibold text-gray-900 text-center">
            Welcome
          </h2>

          <div
            class="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 md:gap-y-8 sm:grid-cols-6"
          >
            <!-- First Name -->
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-base font-medium leading-6 text-gray-900"
                >First name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                />
              </div>
            </div>
            <!-- Last Name -->
            <div class="sm:col-span-3">
              <label
                for="first-name"
                class="block text-base font-medium leading-6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="last-name"
                  id="lasat-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                />
              </div>
            </div>
            <!-- Email -->
            <div class="sm:col-span-3">
              <label
                for="email"
                class="block text-base font-medium leading-6 text-gray-900"
                >Email</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                />
              </div>
            </div>
            <!-- Phone -->
            <div class="sm:col-span-3">
              <label
                for="phone"
                class="block text-base font-medium leading-6 text-gray-900"
                >Phone</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  class="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                />
              </div>
            </div>
            <!-- Password -->
            <div class="sm:col-span-3">
              <label
                for="password"
                class="block text-base font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autocomplete="new-password"
                  class="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                />
              </div>
            </div>
            <!-- User Name -->
            <div class="sm:col-span-3">
              <label
                for="user-name"
                class="block text-base font-medium leading-6 text-gray-900"
                >Username</label
              >
              <div class="mt-2">
                <input
                  type="text"
                  name="user-name"
                  id="user-name"
                  autocomplete="username"
                  class="block w-full rounded-md px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
                />
              </div>
            </div>
            <!-- submit button -->
            <div class="sm:col-span-6">
              <div class="mt-2 flex items-center justify-center gap-x-6">
                <button
                  type="submit"
                  class="rounded-md bg-indigo-600 px-3 py-2 px-4 text-base font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
