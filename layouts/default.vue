<template>
<div class="min-h-screen bg-gray-100">
  <nav class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <router-link to="/" class="flex-shrink-0 flex items-center">
            <img class="hidden lg:block h-8 w-auto" src="/Mitsubishi_Electric_logo.svg.png" alt="Workflow">
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <div class="py-10">
    <Nuxt />
    <!-- <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Create New Quotation
        </h1>
        <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <i class="fal fa-save -ml-1 mr-2"></i>
          Save
        </button>
        <router-link to="/quotation/new" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <i class="fal fa-file-invoice -ml-1 mr-2"></i>
          New quotation
        </router-link>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="px-4 py-8 sm:px-0">
          <Nuxt />
        </div>
      </div>
    </main> -->
  </div>
</div>
  
</template>

<script>

export default {
  components: {

  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>