<template>
<section>
    <header>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          <slot name="header-left"/>
        </h1>
        <aside>
            <slot name="header-right"/>
        </aside>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-8 sm:px-0">
          <slot />
        </div>
        <!-- /End replace -->
      </div>
    </main>
</section>
</template>