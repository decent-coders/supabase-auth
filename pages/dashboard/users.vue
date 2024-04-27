<template lang="">
  <Title>Users</Title>
  <Suspense>
    <!-- component with nested async dependencies -->
    <usersTable></usersTable>

    <!-- loading state via #fallback slot -->
    <template #fallback>
      <div class="flex flex-col select-none">
        <div class="-m-1.5 overflow-x-auto overflow-y-auto">
          <div class="p-1.5 min-w-full inline-block align-middle">
            <div class="border rounded-lg shadow">
              <table
                id="user-table"
                class="min-w-full divide-y divide-gray-200"
              >
                <thead class="bg-gray-200">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                    >
                      <USkeleton
                        class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                    >
                      <USkeleton
                        class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                    >
                      <USkeleton
                        class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 flex justify-center text-end text-xs font-medium text-gray-500 uppercase"
                    >
                      <USkeleton
                        class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                  <tr
                    v-for="(item, index) in 8"
                    :key="index"
                    class="odd:bg-white even:bg-gray-200 cursor-pointer select-none text-center"
                  >
                    <td
                      class="whitespace-nowrap text-sm font-medium text-gray-800 text-center"
                    >
                      <USkeleton
                        class="ms-3 px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </td>
                    <td
                      class="px-6 py-3 whitespace-nowrap text-sm text-gray-800"
                    >
                      <USkeleton
                        class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </td>
                    <td
                      class="px-6 py-3 whitespace-nowrap text-sm text-gray-800"
                    >
                      <USkeleton
                        class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </td>
                    <td
                      class="px-6 py-3 whitespace-nowrap text-end text-sm font-medium flex justify-center"
                    >
                      <USkeleton
                        class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- =========================== -->
            </div>
          </div>
        </div>
      </div>
    </template>
  </Suspense>
</template>
<script setup>
  definePageMeta({
    layout: "custom",
    middleware: "auth",
  });
</script>
<style lang=""></style>
