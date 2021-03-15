<template>
<section class="flex flex-col h-full">
  <nav class="flex space-x-4" aria-label="Tabs">
    <template v-for="(editor,i) in editors">
      <!-- Current: "bg-gray-100 text-gray-700", Default: "text-gray-500 hover:text-gray-700" -->
      <div v-if="editor._isActive" :key="'editor' + i " class="bg-white text-gray-700 px-3 py-2 font-medium text-sm " aria-current="page">
        <i class="fal fa-file-code"></i>
        <span>{{editor.name}}</span>
        <button @click="onTabEditorClosed(editor, i)" class="ml-3"><i class="fal fa-times"></i></button>
      </div>
      <button v-else @click="onTabEditorClicked(editor)" :key="'editor' + i " class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm ">
        <i class="fal fa-file-code"></i>
        <span>{{editor.name}}</span>
      </button>
    </template>

    <button @click="onNewQueryClicked" class="text-gray-500 hover:text-gray-700 px-3 py-2 font-medium text-sm space-x-2">
      <i class="fal fa-plus"></i>
      <span>New Query</span>
    </button>
  </nav>

  <template v-for="(editor,i) in editors">
    <QueryEditorComponent v-show="editor._isActive" :key="editor.name" />
  </template>

</section>
</template>

<script>
import QueryEditorComponent from "~/components/QueryEditor.vue";
import { QueryEditor as QueryEditorModel } from "~/models/QueryEditor";

export default {
  components: {
    QueryEditorComponent
  },
  data() {
    return {
      editors: []
    }
  },
  computed: {
  },
  methods: {
    onNewQueryClicked() {
      for(let item of this.editors) {
        item._isActive = false;
      }
      let newEditor = new QueryEditorModel();
      newEditor.name += ` ${this.editors.length}`
      this.editors.push(newEditor)
    },
    onTabEditorClicked(tab) {
      for(let item of this.editors) {
        item._isActive = false;
      }
      tab._isActive = true;
    },
    onTabEditorClosed(tab, i) {
      this.editors.splice(i, 1);
    }
  },
  mounted() {
    
  }
}
</script>

<style lang="scss">

</style>
