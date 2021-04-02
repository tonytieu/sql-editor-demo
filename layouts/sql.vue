<template>
  <section class="flex flex-col h-screen">

    <article class="flex-1 flex">
      <aside class="sidebar flex">
        <nav class="sidebar_mini w-12 text-white h-full flex flex-col justify-between" style="">
          <div class="flex flex-col space-y-3">
            <el-tooltip class="item" effect="dark" content="Connections" placement="right">
              <button class="h-12 active">
                <i class="fal fa-server text-xl"></i>
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Search" placement="right">
              <button class="h-12 ">
                <i class="fal fa-search text-xl"></i>
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Notebooks" placement="right">
              <button class="h-12 ">
                <i class="fal fa-book text-xl"></i>
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Explorer" placement="right">
              <button class="h-12 ">
                <i class="fal fa-file text-xl"></i>
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Source Control" placement="right">
              <button class="h-12 ">
                <i class="fal fa-code-branch text-xl"></i>
              </button>
            </el-tooltip>
          </div>

          <div class="flex flex-col space-y-3">
            <el-tooltip class="item" effect="dark" content="Accounts" placement="right">
              <button class="h-12 ">
                <i class="fal fa-user-circle text-xl"></i>
              </button>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="Settings" placement="right">
              <button class="h-12 ">
                <i class="fal fa-cog text-xl"></i>
              </button>
            </el-tooltip>
          </div>
        </nav>
        <div class="sidebar_content w-60 bg-gray-100 text-sm">
          <h3 class="px-7 py-1 upper ">Connections</h3>
          <div class="bg-gray-200 px-2 flex justify-between">
            <h4 class=" upper font-semibold"><i class="fal fa-chevron-down mr-1"></i> Servers</h4>
            <el-tooltip class="item" effect="dark" content="New Connection" placement="bottom">
              <button><i class="fal fa-plus"></i></button>
            </el-tooltip>
          </div>
          <div class="px-2">
            <h4 class="truncate">
              <span class="inline-block relative">
                <!-- <img class="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=MNSSSKHwFb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""> -->
                <i class="fal fa-server mr-1"></i> 
                <span class="absolute bottom-0 right-0 block h-1.5 w-1.5 rounded-full ring-2 ring-white bg-green-300"></span>
              </span>

              tcp:pilgrimabc.windows.net,1433
            </h4>
          </div>
        </div>
      </aside>

      <main class="flex-1 bg-gray-50">
        <Nuxt />
      </main>
    </article>

    <footer class="flex items-center justify-between text-xs text-white px-3" style="">
      <aside class="space-x-1">
        <el-tooltip class="item" effect="dark" content="master" placement="top">
          <button><i class="fal fa-code-branch"></i> master</button>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Sync your changes" placement="top">
          <button><i class="fal fa-sync"></i></button>
        </el-tooltip>
      </aside>
      <aside class="space-x-1">
        <el-tooltip class="item" effect="dark" content="Active Connection" placement="top">
          <span>tcp:pilgrimabc.windows.net,1433</span>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="Notifications" placement="top">
          <button><i class="fal fa-bell"></i></button>
        </el-tooltip>
      </aside>
    </footer>
    
  </section>
</template>

<script>
import { Tooltip } from "element-ui";
export default {
  components: {
    [Tooltip.name]: Tooltip
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
.sidebar {
  &_mini {
    background-color: rgba(33, 33, 33, 1);

    button {
      opacity: .5;
      border-left: 2px solid transparent;
      &:hover, &.active {
        transition: all .2s;
        opacity: 1;
        border-color: white;
      }
    }
  }
}
footer {
  background-color: rgba(98, 31, 115, 1);
  button {
    transition: all .2s;
    padding: theme("padding.1");
    &:hover {
      background-color: rgba(255,255,255,.4);
    }
  }
}
main {
  width: calc(100vw - theme('width.12') - theme('width.60'));
}
</style>