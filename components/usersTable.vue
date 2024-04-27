<template>
  <!-- modal -->
  <transition>
    <theModal v-if="modal" @modalSkip="handleModalSkip">
      <!-- Model for adding user -->
      <div class="" v-if="addModal">
        <form
          class="space-y-4 p-5 md:min-w-[280px] md:p-8 md:pb-5 bg-gray-100 rounded-2xl"
          action="#"
        >
          <div>
            <input
              type="text"
              name="text"
              id="text"
              class="sm:p-2 bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 pl-2"
              placeholder="Name"
              v-model="adduser.name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="Profession"
              placeholder="Profession"
              class="sm:p-2 bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 pl-2"
              v-model="adduser.title"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="sm:p-2 bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 pl-2"
              v-model="adduser.email"
              required
            />
          </div>
          <div class="w-full flex justify-end">
            <UButton
              @click="handleModalSkip"
              class="active:scale-95 me-4"
              color="blue"
              variant="outline"
              >Cancel</UButton
            >
            <UButton
              class="active:scale-95 px-4"
              color="green"
              variant="outline"
              @click="handleAdduser"
              >Add</UButton
            >
          </div>
        </form>
      </div>
      <!-- Model for editing user -->
      <div class="" v-if="editModal">
        <form
          class="space-y-4 p-5 md:min-w-[280px] md:p-8 md:pb-5 bg-gray-100 rounded-2xl"
          action="#"
        >
          <div>
            <input
              type="text"
              name="text"
              id="text"
              class="sm:p-2 bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 pl-2"
              placeholder="Name"
              v-model="updateUser.name"
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="Profession"
              placeholder="Profession"
              class="sm:p-2 bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 pl-2"
              v-model="updateUser.title"
              required
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="sm:p-2 bg-gray-50 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1 pl-2"
              v-model="updateUser.email"
              required
            />
          </div>
          <div class="w-full flex justify-end">
            <UButton
              @click="handleModalSkip"
              class="active:scale-95 me-4"
              color="indigo"
              variant="outline"
              >Cancel</UButton
            >
            <UButton
              class="active:scale-95"
              color="green"
              variant="outline"
              @click="handleUpdateModal"
              >Update</UButton
            >
          </div>
        </form>
      </div>
      <!-- Model for deleting user -->
      <div class="" v-if="deleteModal">
        <div class="py-5 px-10">
          <div class="flex justify-center w-full">
            <UIcon
              class="text-3xl text-red-500"
              name="i-heroicons-exclamation-circle"
            />
          </div>
          <div class="text-base text-center tracking-wide font-semibold">
            Are you sure...?
          </div>
          <div class="w-full flex justify-center mt-4">
            <UButton
              @click="handleModalSkip"
              class="active:scale-95 me-5"
              color="blue"
              variant="outline"
              >Cancel</UButton
            >
            <UButton
              class="active:scale-95 px-5"
              color="red"
              variant="outline"
              @click="handleDeleteuser"
              >Yes</UButton
            >
          </div>
        </div>
      </div>
    </theModal>
  </transition>
  <!--/ modal /-->
  <div class="text-center mb-4">
    <span class="font-semibold">Note :</span> This is a server side pagination
    demo! <span class="text-gray-500">( Did not make it responsive )</span>
  </div>

  <!-- toast -->
  <div class="absolute right-5 md:right-10">
    <div class="flex-column">
      <transition name="list">
        <theToast v-if="dangerToast">
          <div
            class="bg-red-400 px-4 py-2 rounded-lg text-white font-medium mb-3 font-mono"
          >
            Deleted Successfully
          </div>
        </theToast>
      </transition>
      <transition name="list">
        <theToast v-if="successToast">
          <div
            class="bg-emerald-400 px-4 py-2 rounded-lg text-white font-medium mb-3 font-mono"
          >
            {{ successToastMssg }}
          </div>
        </theToast>
      </transition>
    </div>
  </div>
  <!-- --------------------- -->

  <div class="flex flex-col select-none">
    <div class="-m-1.5 overflow-x-auto overflow-y-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="border rounded-lg shadow">
          <!-- table -->
          <div class="" v-if="loadingState">
            <table id="user-table" class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                  >
                    Profession
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 flex justify-center text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    <UButton
                      @click="handleAddModal"
                      variant="outline"
                      color="sky"
                      size="2xs"
                      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none active:scale-95"
                    >
                      Add new
                    </UButton>
                  </th>
                </tr>
              </thead>
            </table>
            <UTable
              loading
              :loading-state="{
                icon: 'i-heroicons-arrow-path-20-solid',
                label: 'Loading...',
              }"
              :progress="{ color: 'primary', animation: 'carousel' }"
              :columns="[{ key: 'id', label: '' }]"
              class="w-full"
            />
          </div>
          <div class="" v-else>
            <table id="user-table" class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-100">
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                  >
                    Profession
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 text-start text-base font-medium text-gray-500 uppercase"
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 flex justify-center text-end text-xs font-medium text-gray-500 uppercase"
                  >
                    <UButton
                      @click="handleAddModal"
                      variant="outline"
                      color="sky"
                      size="2xs"
                      class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none active:scale-95"
                    >
                      Add new
                    </UButton>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <transition-group>
                  <tr
                    v-for="user in users"
                    :key="user.id"
                    class="odd:bg-white even:bg-slate-100 cursor-pointer hover:bg-gray-200 select-none"
                  >
                    <td
                      class="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-800"
                    >
                      {{ user.name }}
                    </td>
                    <td
                      class="px-6 py-3 whitespace-nowrap text-sm text-gray-800"
                    >
                      {{ user.title }}
                    </td>
                    <td
                      class="px-6 py-3 whitespace-nowrap text-sm text-gray-800"
                    >
                      {{ user.email }}
                    </td>
                    <td
                      class="px-6 py-3 whitespace-nowrap text-end text-sm font-medium flex justify-center"
                    >
                      <UButton
                        @click="handleDeleteModal(user)"
                        icon="i-heroicons-trash"
                        color="red"
                        variant="outline"
                        size="2xs"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none me-4 active:scale-95"
                      >
                      </UButton>
                      <UButton
                        @click="handelEditModal(user)"
                        icon="i-heroicons-pencil-square"
                        variant="outline"
                        size="2xs"
                        class="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none active:scale-95"
                      >
                      </UButton>
                    </td>
                  </tr>
                </transition-group>
              </tbody>
            </table>
            <!-- =========================== -->
            <!-- pagination -->

            <div
              class="pagination w-full flex justify-between ps-5 pt-3 pe-5 pb-3"
            >
              <div class="pt-2">
                <p class="text-sm text-gray-800">
                  Showing
                  <span class="font-medium">{{
                    parseInt((page - 1) * 8) || 1
                  }}</span>
                  to
                  <span
                    class="font-medium"
                    v-if="(page - 1) * 8 + 8 <= result"
                    >{{ (page - 1) * 8 + 8 }}</span
                  >
                  <span class="font-medium" v-else>{{ result }}</span>

                  of
                  <span class="font-medium">{{ result }}</span>
                  results
                </p>
              </div>
              <UPagination
                v-model="page"
                :page-count="8"
                :total="result"
                @click="handlePage"
              />
            </div>
          </div>
          <!-- ===================== -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const userStore = useUserStore();
  const modal = ref(false);
  const addModal = ref(false);
  const editModal = ref(false);
  const deleteModal = ref(false);
  const adduser = ref([{ name: ref(""), title: ref(""), email: ref("") }]);
  const updateUser = ref([{ name: ref(""), title: ref(""), email: ref("") }]);
  const users = ref([]);
  const deleteId = ref("");
  const updateId = ref("");
  const result = ref("");
  const page = ref(1);
  const loadingState = ref(false);
  const dangerToast = ref(false);
  const successToast = ref(false);
  const successToastMssg = ref("");
  // methods================

  const handleModalSkip = () => {
    modal.value = false;
    addModal.value = false;
    editModal.value = false;
    deleteModal.value = false;
  };
  const handleAddModal = () => {
    editModal.value = false;
    deleteModal.value = false;
    modal.value = true;
    addModal.value = true;
  };
  // add user method
  const handleAdduser = async () => {
    try {
      const response = await $fetch(`/api/adduser`, {
        method: "POST",
        body: {
          name: adduser.value.name,
          email: adduser.value.email,
          title: adduser.value.title,
        },
      });
      await fetchUserAgain();
      page.value = 1;
      modal.value = false;
      successToastMssg.value = "Added Successfully";
      successToast.value = true;
      setTimeout(() => {
        successToast.value = false;
        successToastMssg.value = "";
      }, 2000);
      await handlePage();
      adduser.value = [{ name: "", title: "", email: "" }];
    } catch (error) {
      console.log("unable to add user", error);
      modal.value = false;
    }
  };
  //=================================

  // delete user methods
  const handleDeleteModal = (user) => {
    deleteId.value = user.id;
    addModal.value = false;
    editModal.value = false;
    modal.value = true;
    deleteModal.value = true;
  };

  const handleDeleteuser = async () => {
    modal.value = false;
    try {
      const response = await $fetch(`/api/deleteuser`, {
        method: "POST",
        body: {
          id: deleteId.value,
        },
      });
      const index = users.value.findIndex((user) => user.id === deleteId.value);
      if (index !== -1) {
        await fetchUserAgain();
        dangerToast.value = true;
        setTimeout(() => {
          dangerToast.value = false;
        }, 2000);
        await handlePage();
      } else {
        console.log("User not found in the users array.");
      }
    } catch (error) {
      console.log("unable to delete user", error);
    }
  };
  // =======================================
  // edite user methods
  const handelEditModal = (user) => {
    updateId.value = user.id;
    updateUser.value.name = user.name;
    updateUser.value.email = user.email;
    updateUser.value.title = user.title;
    addModal.value = false;
    deleteModal.value = false;
    modal.value = true;
    editModal.value = true;
  };
  const handleUpdateModal = async () => {
    try {
      const response = await $fetch(`/api/editeuser`, {
        method: "POST",
        body: {
          id: updateId.value,
          name: updateUser.value.name,
          email: updateUser.value.email,
          title: updateUser.value.title,
        },
      });
      if (response) {
        const index = users.value.findIndex(
          (user) => user.id === updateId.value
        );
        successToastMssg.value = "Updated Successfully";
        successToast.value = true;
        setTimeout(() => {
          successToast.value = false;
          successToastMssg.value = "";
        }, 2000);
        if (index !== -1) {
          users.value[index].name = updateUser.value.name;
          users.value[index].email = updateUser.value.email;
          users.value[index].title = updateUser.value.title;
        }
        updateUser.value = { name: "", title: "", email: "" };
        modal.value = false;
      } else {
        console.log("Update failed");
      }
    } catch (error) {
      console.log("Unable to update user", error);
    }
  };
  // =======================================

  //table data fetching

  const { data, pending, refresh } = await useFetch(`/api/users`, {
    query: {
      skip: (page.value - 1) * 8,
    },
  });
  users.value = data.value.users;
  result.value = data.value.count;

  const handlePage = async () => {
    loadingState.value = true;
    const data = await $fetch(
      `/api/users?skip=${parseInt((page.value - 1) * 8)}`,
      {
        pick: ["users"],
      }
    );
    users.value = data.users;
    loadingState.value = false;
  };

  const fetchUserAgain = async () => {
    const data = await $fetch(`/api/users`, {
      pick: ["count"],
    });
    result.value = data.count;
  };

  // =======================================
</script>

<style scoped>
  .v-enter-active,
  .v-leave-active {
    transition: Opacity 0.5s ease-in-out;
  }

  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }
</style>
