<template>
<section class="query_editor bg-white flex flex-col h-full" v-loading="isLoading">

  <div class="query_editor-toolbar text-xs space-x-2 px-3 py-1">
    <button @click="onRunClicked">
      <i class="fal fa-play text-green-600"></i>
      Run
    </button>
    <button>
      <i class="fal fa-pause text-red-600"></i>
      Cancel
    </button>
    <button>
      <i class="fal fa-link"></i>
      Connect
    </button>
    <button>
      <i class="fal fa-server"></i>
      Change Connection
    </button>
  </div>

  <div class="query_editor-content flex-1 flex flex-col">
    <div class="flex-shrink-1 flex-1">
      <prism-editor class="my-editor" v-model="code" :lineNumbers="true" :highlight="highlighter"></prism-editor>
    </div>
    
    <transition name="slide-fade" mode="out-in">
    <div v-if="isResultsShown" class="query_editor-content_results relative w-full h-1/2 bg-white">
      <el-tabs v-model="activeName">
        <el-tab-pane label="Results" name="first">
          <div class="flex">
            <aside class="flex-1 overflow-auto" style="height: calc(50vh - 88px);">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th v-for="(key,i) in Object.keys(tableData[0])" :key="'th' + i"
                      scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">
                      {{key}}
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="(row,i) in tableData" :key="'tr' + i">
                    <td v-for="(col,j) in Object.keys(row)" :key="'tr' + i + 'td' + j"
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{row[col]}}
                    </td>
                  </tr>
                </tbody>
              </table>
            </aside>
            <aside class="flex flex-col px-3">
              <el-tooltip class="item" effect="dark" content="Export as CSV" placement="left">
                <button><i class="fal fa-file-csv"></i></button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="Export as Excel" placement="left">
                <button><i class="fal fa-file-excel"></i></button>
              </el-tooltip>
              <el-tooltip class="item" effect="dark" content="Export as JSON" placement="left">
                <button><i class="fal fa-code"></i></button>
              </el-tooltip>
            </aside>
          </div>
        </el-tab-pane>
        <el-tab-pane label="Messages" name="second">
          <div class="flex text-sm p-3">
            <aside class="w-32">
              11:34:10 PM
            </aside>
            <div>
              Started executing query at Line 1
              <br>
              (122 rows affected)
              <br>
              Total execution time: 00:00:00.453
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
      <button @click="onCloseClicked" class="absolute top-0 right-0 mt-2 mr-4"><i class="fal fa-times"></i></button>
    </div>
    </transition>
  </div>

</section>
</template>

<script>
import Vue from "vue";
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
// import highlighting library (you can use any library you want just return html string)
import { highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-sql.min';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

import { Tabs, TabPane, Tooltip, Loading } from "element-ui";

Vue.use(Loading.directive)

export default {
  components: {
    PrismEditor,
    [Tabs.name]: Tabs,
    [TabPane.name]: TabPane,
    [Tooltip.name]: Tooltip,
  },
  data() {
    return {
      isLoading: false,
      isResultsShown: false,
      code: 'select * from Employees',
      activeName: 'first',
      tableData: []
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, Prism.languages.sql, "sql");
    },
    async onRunClicked() {
      this.isLoading = true;
      try {
        this.tableData = await this.$store.dispatch('queryProcessor/runQuery', this.code);
        this.isResultsShown = true;
      } catch (error) {
        console.log(error) 
      }
      this.isLoading = false;
    },
    onCloseClicked() {
      this.isResultsShown = false;
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">
.my-editor {
  background: #2d2d2d;
  color: #ccc;

  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

// optional
.prism-editor__textarea:focus {
  outline: none;
}

.query_editor {
  &-content_results {
    [role="tablist"] {
      margin-left: theme('margin.5');
    }
    .el-tabs__header {
      margin: 0;
    }
  }
}
</style>
