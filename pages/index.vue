<template lang="">
  <Title>Overview</Title>
  <div>
    <div class="w-full bg-green-50 rounded-2xl p-5 min-h-[82vh]">
      <div v-if="!user">
        <div
          class="flex w-full h-full justify-center items-center font-semibold min-h-[78vh]"
        >
          Please log in to see all the features
        </div>
      </div>
      <div v-if="pending">Loading...</div>
      <div v-if="user">
        <div class="flex justify-center">
          <img
            class="h-28 w-28 rounded-3xl"
            :src="user.identities[0].identity_data.avatar_url"
            alt="User Photo"
          />
        </div>
        <div
          class="mt-5 text-center w-full font-semibold text-lg"
          style="font-family: math"
        >
          Welcome {{ user.identities[0].identity_data.full_name }}
        </div>
        <div class="p-5 font-medium">
          <span class="text-lg"> In this website you will find :</span>
          <ol class="list-disc ps-40 max-w-[1200px]">
            <li class="bg-emerald-200 rounded-xl px-4 py-2 mb-2">
              Authentication and Authorization
            </li>
            <li class="bg-blue-200 rounded-xl px-4 py-2 mb-2">
              In the Users menu :
              <ol class="list-disc ps-10 text-zinc-950 text-sm">
                <li>Pagination without changing page</li>
                <li>Fully custom made modals</li>
                <li>Custom Notification toasts</li>
                <li>
                  Its a live hosted table you can add, delete or edit any table
                  data there
                </li>
              </ol>
            </li>
            <li class="bg-teal-200 rounded-xl px-4 py-2 mb-2">
              In profile Menu a short description of my self
            </li>
            <li class="bg-sky-200 rounded-xl px-4 py-2 mb-2">
              Log out menu for Logging out
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    // middleware: "index-redirect",
    layout: "custom",
  });
  const client = useSupabaseClient();
  // const user = useSupabaseUser();
  // const userFetch = async () => {
  const {
    data: { user },
    pending,
  } = await client.auth.getUser();
  // };
  // await userFetch();
</script>
