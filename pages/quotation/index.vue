<template>
  <Header>
    <template slot="header-left"> Quotation List </template>
    <template slot="header-right">
      <router-link
        to="/quotation/new"
        type="button"
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <i class="fal fa-file-invoice -ml-1 mr-2"></i>
        New quotation
      </router-link>
    </template>

    <div class="bg-white shadow divide-y divide-gray-300">
      <section
        class="flex flex-row justify-start items-center divide-x divide-gray-300"
      >
        <aside class="flex">
          <el-dropdown>
            <button
              type="button"
              class="flex justify-center items-center text-center px-4 py-2 text-sm hover:bg-gray-100 flex-shrink-0"
            >
              <svg
                class="flex-shrink-0 h-3.5 w-3.5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Export</span>
              <i class="el-icon-arrow-down el-icon--right"></i>
            </button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item class="px-10">PDF</el-dropdown-item>
                <el-dropdown-item class="px-10">Excel</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </aside>
      </section>
    </div>
    <br />
    <article class="invoice-header bg-white rounded shadow">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th
              class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Date
            </th>
            <th
              class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              To
            </th>
            <th
              class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Subject
            </th>
            <th
              class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Amount
            </th>
            <th
              class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200" x-max="1">
          <tr v-for="item in quotationList" class="bg-white hover:bg-gray-50">
            <td
              class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500"
            >
              <time datetime="2020-07-11">{{
                formatDateTime(item.createdOn)
              }}</time>
            </td>
            <td
              class="px-6 py-4 text-left whitespace-nowrap text-sm text-gray-900"
            >
              {{ item.to }}
            </td>
            <td
              class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900 truncate"
            >
              {{ item.subject }}
            </td>
            <td
              class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
            >
              <span class="text-gray-900 font-medium">{{ formatNumber(item.amount) }} </span>
              $S
            </td>
            <td
              class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block"
            >
              <span
                class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize"
                :class="{
                  'bg-green-100 text-green-800': item.status == 'Successful',
                  'bg-yellow-100 text-yellow-800': item.status == 'Pending',
                  'bg-red-100 text-red-800': item.status == 'Failed',
                }"
              >
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </article>
  </Header>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
import Header from "~/components/Header.vue";
import { Dropdown, DropdownItem, DropdownMenu } from "element-ui";
export default {
  components: {
    Header,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  data() {
    return {
      quotationList: [],
    };
  },
  methods: {
    // getColorForStatus(status) {
    //   let color = "gray";
    //   switch (status) {
    //     case "Successful":
    //       color = "green";
    //       break;
    //     case "Pending":
    //       color = "yellow";
    //       break;
    //     case "Failed":
    //       color = "red";
    //       break;
    //   }
    //   return color;
    // },
    formatDateTime(d) {
      return dayjs(d).format("MMMM DD, YYYY HH:mm");
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-IN').format(number)
    },
  },
  async mounted() {
    let resp1 = await axios.get("/quotation-past-list.json");
    this.quotationList = resp1.data;
  },
};
</script>