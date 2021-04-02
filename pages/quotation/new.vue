<template>
<section>
<Header>
  <template slot="header-left">
      Create new quotation
  </template>
  <template slot="header-right">
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
          <button
            type="button"
            class="w-24 flex items-center justify-center px-4 py-2 text-sm text-white bg-gray-600 hover:bg-gray-700 flex-shrink-1"
            @click="onNewQuotationClicked">
            <i class="fal fa-save -ml-1 mr-2"></i>
            <span>Save</span>
          </button>
        </aside>
      </section>
    </div>
      <!-- <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          @click="onNewQuotationClicked">
          <i class="fal fa-save -ml-1 mr-2"></i>
          Save
      </button> -->
  </template>
    
  <header class="invoice-header bg-white rounded shadow">
    <div class="grid divide-x divide-y divide-gray-200"
      style="grid-template-columns: 60% 40%;">

      <div class="form-group group highlight-on-hover flex items-center space-x-3 px-5 py-2">
        <label for="to" class="block font-medium text-gray-700">
          TO
        </label>
        <div class="relative flex-1"
          v-click-outside="_ => isCompanyOpen = false">
          <el-select v-model="invoice.to" filterable placeholder=""
            class="custom-input block w-full h-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent font-bold"
            popper-class="custom-input">
            <el-option class="text-gray-900 flex items-center relative"
              v-for="item in companyList"
              :key="item.company_name"
              :label="item.company_name"
              :value="item.company_name">
              <img :src="item.logo" alt="" class="flex-shrink-0 h-6 w-6">
              <span class="ml-3 block truncate" >
                {{item.company_name}}
              </span>
              <span class="check-mark absolute inset-y-0 right-0 flex items-center pr-4 text-red-600">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </el-option>
          </el-select>
          <!-- <input disabled type="text" name="to" id="to" value="The Software Practice Pte Ltd" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold"> -->
          <!-- <button @click="isCompanyOpen = !isCompanyOpen"
            class="relative form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 text-left rounded-none border-transparent font-bold">
            <span class="">
              {{invoice.to}}
            </span>
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </button>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in duration-100"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
          <ul v-if="isCompanyOpen" class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm divide-y divide-gray-100" 
            tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
            <li class="text-gray-600 select-none relative py-2 pl-3 pr-9">
              <input type="text" placeholder="Search ..." class="w-full focus:outline-none" autofocus>
            </li>
            <li class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50 transition duration-200" id="listbox-option-0" role="option"
              v-for="item in companyList"
              @click="invoice.to = item.company_name">
              <div class="flex items-center">
                <img :src="item.logo" alt="" class="flex-shrink-0 h-6 w-6">
                <span class="ml-3 block truncate"
                  :class="[item.company_name == invoice.to ? 'font-semibold' : 'font-normal']">
                  {{item.company_name}}
                </span>
              </div>
              <span class=" absolute inset-y-0 right-0 flex items-center pr-4"
                :class="[item.company_name == invoice.to ? 'text-red-600' : 'text-white']">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </li>

            <li v-if="!companyList.length" class="text-gray-900 select-none relative py-2 pl-3 pr-9">
              <div class="flex items-center">
                <span class="font-normal block truncate">
                  No records
                </span>
              </div>
            </li>
          </ul>
          </transition> -->
        </div>
      </div>

      <div class="form-group group highlight-on-hover flex items-center space-x-3 px-5 py-2">
        <label for="to" class="block font-medium text-gray-700">
          DATE
        </label>
        <div class="relative flex-1">
          <el-date-picker
            v-model="invoice.date"
            type="date"
            placeholder="Pick a day"
            format="MMMM dd, yyyy"
            class="form-input">
          </el-date-picker>
          <!-- <input type="text" name="to" id="to" value="March 13, 2021" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold"> -->
          <!-- <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <i class="fal fa-pencil opacity-50 group-hover:opacity-100 transition duration-200"></i>
          </div> -->
        </div>
      </div>

      <div class="form-group group highlight-on-hover flex items-center space-x-3 px-5 py-2"
        :disabled="!invoice.to">
        <label for="to" class="block font-medium text-gray-700">
          ATTN
        </label>
        <div class="relative flex-1 cursor-pointer"
          v-click-outside="_ => isAttnOpen = false">
          <div @click="isAttnOpen = !isAttnOpen"
            class="relative form-input flex-1 block w-full min-w-0 rounded-none border-transparent font-bold">
            <aside class="flex items-center space-x-10">
              <span v-for="(item,i) in invoice.attn"
                class="flex items-center">
                <span class="group flex-shrink-0 h-6 w-6 rounded-full bg-gray-300 hover:bg-red-600 cursor-pointer flex items-center justify-center "
                  @click="onAttnRemoved(i)">
                  <i class="fal fa-minus text-white"></i>
                </span>
                <span class="ml-3 block truncate ">
                  {{item}}
                </span>
              </span>
            </aside>
            <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <!-- Heroicon name: solid/selector -->
              <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>

          <!--
            Select popover, show/hide based on select state.

            Entering: ""
              From: ""
              To: ""
            Leaving: "transition ease-in duration-100"
              From: "opacity-100"
              To: "opacity-0"
          -->
          <ul :class="{'hidden': !isAttnOpen}" class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm divide-y divide-gray-100" 
            tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
            <!--
              Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

              Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
            -->
            <li class="text-gray-900 cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-50 transition duration-200" id="listbox-option-0" role="option"
              v-for="item in attnList"
              @click="invoice.attn.push(item.first_name)">
              <div class="flex items-center">
                <!-- <img src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixqx=MNSSSKHwFb&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="flex-shrink-0 h-6 w-6 rounded-full"> -->
                <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
                <span class="block truncate"
                  :class="[invoice.attn.includes(item.first_name) ? 'font-semibold' : 'font-normal']">
                  {{item.first_name}}
                </span>
              </div>

              <!--
                Checkmark, only display for selected option.

                Highlighted: "text-white", Not Highlighted: "text-indigo-600"
              -->
              <span class="absolute inset-y-0 right-0 flex items-center pr-4"
                :class="[invoice.attn.includes(item.first_name) ? 'text-red-600' : 'text-white']">
                <!-- Heroicon name: solid/check -->
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
            </li>

            <li v-if="!attnList.length" class="text-gray-900 select-none relative py-2 pl-3 pr-9">
              <div class="flex items-center">
                <span class="font-normal block truncate">
                  No records
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="form-group group flex items-center space-x-3 px-5 py-2">
        <label for="to" class="block font-medium text-gray-700">
          NO OF PAGES
        </label>
        <div class="relative flex-1">
          <input disabled type="text" name="to" id="to" value="2" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold">
        </div>
      </div>
 
      <div class="form-group group highlight-on-hover flex items-center space-x-3 px-5 py-2"
        :disabled="!invoice.to">
        <label for="to" class="block font-medium text-gray-700">
          TEL
        </label>
        <div class="relative flex-1 flex space-x-5 pl-3">
          <div class="flex items-center">
            <div>
              <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ">
                <i class="fal fa-building text-white"></i>
              </span>
            </div>
            <div class="ml-3">
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                Company Tel
              </p>
              <input type="text" name="to" id="to" v-model="invoice.tel.company" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold p-0">
            </div>
          </div>
          <div class="flex items-center">
            <div>
              <span class="h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ">
                <i class="fal fa-user text-white"></i>
              </span>
            </div>
            <div class="ml-3">
              <p class="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                Person Tel
              </p>
              <input type="text" name="to" id="to" v-model="invoice.tel.person" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold p-0">
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <i class="fal fa-pencil opacity-50 group-hover:opacity-100 transition duration-200"></i>
            
          </div>
        </div>
      </div>

      <div class="form-group group flex items-center space-x-3 px-5 py-2 row-span-2">
        <label for="to" class="block font-medium text-gray-700">
          OUR REF
        </label>
        <div class="relative flex-1">
          <input disabled type="text" name="to" id="to" value="2000" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold">
        </div>
      </div>

      <div class="form-group group highlight-on-hover flex items-center space-x-3 px-5 py-2"
        :disabled="!invoice.to">
        <label for="to" class="block font-medium text-gray-700">
          FAX
        </label>
        <div class="relative flex-1">
          <input type="text" name="to" id="to" v-model="invoice.tel.fax" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold">
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <i class="fal fa-pencil opacity-50 group-hover:opacity-100 transition duration-200"></i>
          </div>
        </div>
      </div>

    </div>

  </header>

  <br>

  <article class="invoice-header bg-white rounded shadow">
    <div class="grid divide-x divide-y divide-gray-200"
      style="">
      <div class="form-group group highlight-on-hover flex items-center space-x-3 px-5 py-2">
        <label for="to" class="block font-medium text-gray-700" style="width: 11.5%;">
          RE:
        </label>
        <div class="relative flex-1">
          <input type="text" name="to" id="to" v-model="invoice.subject" class="form-input flex-1 block w-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent font-bold">
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <i class="fal fa-pencil opacity-50 group-hover:opacity-100 transition duration-200"></i>
          </div>
        </div>
      </div>
    </div>
  </article>

  <br>

  <article class="invoice-table bg-white rounded shadow divide-y divide-gray-200">
    <header class="invoice-table__row divide-x divide-gray-200">
      
      <label class="invoice-table__cell block font-medium text-gray-700">
        DESIGNATION
      </label>
      <label class="invoice-table__cell block font-medium text-gray-700">
        AREA SERVED
      </label>
      <label class="invoice-table__cell block font-medium text-gray-700">
        MODEL OFFERED
      </label>
      <label class="invoice-table__cell block font-medium text-gray-700">
        TYPE
      </label>
      <label class="invoice-table__cell block font-medium text-gray-700">
        SPECIFIED CAP (KW)
      </label>
      <label class="invoice-table__cell block font-medium text-gray-700">
        OFFERED CAP (KW)
      </label>
      <label class="invoice-table__cell block font-medium text-gray-700">
        QTY
      </label>
      <label class="invoice-table__cell block font-medium text-gray-700">
        UNIT PRICE S$
      </label>
      <!-- <label class="invoice-table__cell block font-medium text-gray-700">
        NO. OF SET
      </label> -->
      <!-- <label class="invoice-table__cell block font-medium text-gray-700">
        TOTAL PRICE S$
      </label> -->
    </header>
    <template v-for="(set,i) in invoiceTable">
    <div class="invoice-table__row invoice-table__row-hightlight highlight-on-hover group divide-x divide-y divide-gray-200" :key="'set' + i">
      <div class="invoice-table__cell col-span-4 relative flex space-x-5 bg-gray-50 group-hover:bg-transparent">
        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium text-gray-800">
          NO. OF SET {{i + 1}}
        </span>
        <button type="button" @click="onNewSetRowAdded(set)"
          class="inline-flex items-center space-x-3 px-2.5 py-1.5 text-xs font-medium text-black bg-transparent hover:bg-gray-700 hover:text-white focus:outline-none transition duration-200">
          <i class="fal fa-plus"></i>
          <span>New Set Item</span>
        </button>
      </div>
      <label class="invoice-table__cell block text-gray-700 text-right bg-gray-50 group-hover:bg-transparent col-span-2"
        style="border-top-color: transparent;">
        TOTAL PRICE
      </label>
      <label class="invoice-table__cell block relative flex justify-between bg-gray-50 group-hover:bg-transparent"
        style="border-top-color: transparent;">
        <span>{{formatNumber(getSetTotalPrice(set))}}</span>
        <span>S$</span>
      </label>
      <div class="placeholder relative bg-gray-50 group-hover:bg-transparent"
        style="border-top-color: transparent; border-left-color: transparent;">
        <el-tooltip class="item" effect="dark" content="Delete Set" placement="right">
          <span class="opacity-50 group-hover:opacity-100 flex-shrink-0 h-full w-8 bg-transparent hover:bg-red-600 text-black hover:text-white cursor-pointer flex items-center justify-center absolute right-0 top-1/2 transform" 
            style="--tw-translate-x: 100%; --tw-translate-y: -50%;"
            @click="onNewSetRemoved(i)">
            <i class="fal fa-trash"></i>
          </span>
        </el-tooltip>
      </div>

      <template v-for="(row,j) in set.items">
        <!-- <div class="invoice-table__item"> -->

          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="designation" v-model="row.designation"
              class="block w-full h-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option v-for="item in distinct(masterList.map(x => x.designation))" :value="item">{{item}}</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <input type="text" name="areaServed" v-model="row.areaServed" class="form-input flex-1 block w-full h-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent bg-transparent p-0">
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <el-select v-model="row.modelCode" filterable placeholder="" @change="onItemModelChanged(row)"
              class="custom-input block w-full h-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent"
              popper-class="custom-input">
              <el-option
                v-for="item in distinct(masterList.filter(x => x.designation == row.designation).map(x => x.modelCode))"
                :key="item"
                :label="item"
                :value="item">
                <span class="block truncate" >
                  {{item}}
                </span>
                <span class="check-mark absolute inset-y-0 right-0 flex items-center pr-4 text-red-600">
                  <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </span>
              </el-option>
            </el-select>
            <!-- <select name="modelOffered" v-model="row.modelCode" @change="onItemModelChanged(row)"
              class="block w-full h-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option></option>
              <option v-for="item in distinct(masterList.filter(x => x.designation == row.designation).map(x => x.modelCode))" :value="item">{{item}}</option>
            </select> -->
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="type" v-model="row.type"
              class="block w-full h-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option></option>
              <option v-for="item in distinct(masterList.filter(x => x.modelCode == row.modelCode).map(x => x.type))" :value="item">{{item}}</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="specifiedCap" v-model="row.specifiedCap"
              class="block w-full h-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option></option>
              <option v-for="item in distinct(masterList.filter(x => x.modelCode == row.modelCode).map(x => x.capacity))" :value="item">{{item}}</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="offerredCap" v-model="row.offeredCap"
              class="block w-full h-full px-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option value=""></option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <input type="number" name="quantity" v-model="row.quantity" class="form-input flex-1 block w-full h-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent bg-transparent p-0">
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700 relative flex items-center justify-center">
            {{formatNumber(row.unitPrice)}} S$

            <el-tooltip class="item" effect="dark" content="Delete Item" placement="right">
              <span class="opacity-50 group-hover:opacity-100 flex-shrink-0 h-full w-8 bg-transparent hover:bg-red-600 text-black hover:text-white cursor-pointer flex items-center justify-center absolute right-0 top-1/2 transform" 
                style="--tw-translate-x: 100%; --tw-translate-y: -50%;"
                @click="onSetItemRemoved(set.items, j)">
                <i class="fal fa-minus"></i>
              </span>
            </el-tooltip>
          </label>
        <!-- </div> -->

        <!-- <div class="invoice-table__item"> -->

          <!-- <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="designation" class="block w-full h-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="areaServed" class="block w-full h-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="modelOffered" class="block w-full h-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="type" class="block w-full h-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="specifiedCap" class="block w-full h-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <select name="offerredCap" class="block w-full h-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 bg-transparent">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700">
            <input type="number" name="qty" value="1" class="form-input flex-1 block w-full h-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent bg-transparent p-0">
          </label>
          <label class="invoice-table__cell block font-medium text-gray-700 relative">
            100 S$

            <el-tooltip class="item" effect="dark" content="Delete Item" placement="right">
              <span class="opacity-50 group-hover:opacity-100 flex-shrink-0 h-full w-8 bg-transparent hover:bg-red-600 text-black hover:text-white cursor-pointer flex items-center justify-center absolute right-0 top-1/2 transform" style="--tw-translate-x: 100%; --tw-translate-y: -50%;"><i class="fal fa-minus"></i></span>
            </el-tooltip>
          </label> -->
        <!-- </div> -->
      </template>
        <!-- <label class="invoice-table__cell block font-medium text-gray-700 row-span-2"
          style="grid-column-start: 9; grid-row-start: 1;">
          1
        </label> -->

        <!-- <label class="invoice-table__cell block font-medium text-gray-700 row-span-2"
          style="grid-column-start: 9; grid-row-start: 2;">
          1000 S$
        </label> -->
    </div>
    </template>
    <div class="invoice-table__row invoice-table__row-hightlight invoice-table__row-hightlight__black group highlight-on-hover__black divide-x divide-y divide-gray-200"
      @click="onNewSetAdded">
      <div class="invoice-table__cell col-span-8 relative flex">
        <button type="button" class="w-full inline-flex items-center space-x-3 px-2.5 py-1.5 text-sm font-medium text-black bg-transparent focus:outline-none transition duration-200">
          <i class="fal fa-plus-circle"></i>
          <span>New Set</span>
        </button>
      </div>
    </div>
    <template v-if="invoiceTable.length > 0">
    <footer class="invoice-table__row divide-x divide-gray-200"> 
      <label class="invoice-table__cell block text-gray-700 col-span-6 text-right">
        SUB TOTAL
      </label>
      <label class="invoice-table__cell block font-bold flex justify-between">
        <span>{{formatNumber(getSubTotalPrice())}}</span>
        <span>S$</span>
      </label>
    </footer>
    <footer class="invoice-table__row invoice-table__row-hightlight highlight-on-hover divide-x divide-gray-200"> 
      <label class="invoice-table__cell block text-gray-700 col-span-6 text-right">
        DISCOUNT
      </label>
      <label class="invoice-table__cell flex">
        <input type="number" name="discount" v-model="invoice.discount" class="form-input flex-1 block w-full h-full min-w-0 focus:ring-red-500 focus:border-red-500 rounded-none border-transparent bg-transparent p-0">
        <span>%</span>
      </label>
    </footer>
    <footer class="invoice-table__row divide-x divide-gray-200"> 
      <label class="invoice-table__cell block font-semibold text-gray-700 col-span-6 text-right">
        TOTAL BEFORE GST
      </label>
      <label class="invoice-table__cell block font-bold flex justify-between">
        <span>{{ formatNumber( getSubtotalIncludingDiscount() ) }}</span>
        <span>S$</span>
      </label>
    </footer>
    <footer class="invoice-table__row divide-x divide-gray-200"> 
      <label class="invoice-table__cell block text-gray-700 col-span-6 text-right">
        GST
      </label>
      <label class="invoice-table__cell block flex justify-between">
        <span>7</span>
        <span>%</span>
      </label>
    </footer>
    <footer class="invoice-table__row divide-x divide-gray-200"> 
      <label class="invoice-table__cell block font-semibold text-gray-700 col-span-6 text-right">
        TOTAL INCLUDING GST
      </label>
      <label class="invoice-table__cell block font-bold text-red-700 flex justify-between">
        <span>{{ formatNumber( getSubtotalIncludingDiscount() * 1.07 ) }}</span>
        <span>S$</span>
      </label>
    </footer>
    </template>
  </article>
</Header>
</section>
</template>

<script>
import axios from "axios";
import { get } from "lodash";
import { DatePicker, Select, Option, Dropdown, DropdownItem, DropdownMenu } from "element-ui";

import Vue from 'vue'
import vClickOutside from 'v-click-outside' 
Vue.use(vClickOutside)

import Header from "~/components/Header";

export default {
  components: {
    [DatePicker.name]: DatePicker,
    [Select.name]: Select,
    [Option.name]: Option,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    Header
  },
  data() {
    return {
      isAttnOpen: false,
      isCompanyOpen: false,
      invoice: {
        date: new Date(),
        to: '',
        attn: [],
        tel: {
          company: '',
          person: '',
          fax: ''
        },
        subject: 'PROPOSED MITSUBISHI ELECTRIC AIR-CONDITIONING',
        discount: 0
      },
      invoiceTable: [],

      masterList: [],
      companyList: []
    }
  },
  watch: {
    "invoice.to"(newVal, oldVal) {
      let existing = this.companyList.find(x => x.company_name == this.invoice.to)
      this.invoice.tel.company = get(existing, 'company_tel', '')
      this.invoice.tel.person = get(existing, 'person_tel', '')
      this.invoice.tel.fax = get(existing, 'fax', '')
    }
  },
  computed: {
    attnList() {
      return get(this.companyList.find(x => x.company_name == this.invoice.to), 'people', [])
    }
  },
  methods: {
    onNewSetAdded() {
      let obj = {
        no: this.invoiceTable.length + 1,
        items: []
      };
      this.invoiceTable.push(obj)
    },
    onNewSetRemoved(i) {
      this.invoiceTable.splice(i, 1)
    },
    onNewSetRowAdded(set) {
      set.items.push({
        designation: '',
        areaServed: '',
        modelCode: '',
        type: '',
        specifiedCap: '',
        offeredCap: '',
        quantity: 1,
        unitPrice: ''
      })
    },
    onSetItemRemoved(items, i) {
      items.splice(i, 1)
    },
    onAttnRemoved(i) {
      this.invoice.attn.splice(i, 1)
    },
    onItemModelChanged(item) {
      if(item.modelCode) {
        let existing = this.masterList.find(x => x.modelCode == item.modelCode)
        item.type = existing.type
        item.specifiedCap = existing.capacity
        item.unitPrice = existing.unitPrice
      }
    },
    getSetTotalPrice(set) {
      return set.items.filter(x => x.quantity && x.unitPrice)
        .map(x => x.quantity * x.unitPrice)
        .reduce((total, cur) => total + cur, 0)
    },
    getSubTotalPrice() {
      return this.invoiceTable.flatMap(x => x.items).filter(x => x.quantity && x.unitPrice)
        .map(x => x.quantity * x.unitPrice)
        .reduce((total, cur) => total + cur, 0)
    },
    getSubtotalIncludingDiscount() {
      return !this.invoice.discount ? this.getSubTotalPrice() : this.getSubTotalPrice() * (1 - this.invoice.discount / 100 )
    },
    formatNumber(number) {
      return new Intl.NumberFormat('en-IN').format(number)
    },
    distinct(lst) {
      return [...new Set(lst)]
    },
    onNewQuotationClicked() {
      this.$router.push('/quotation')
    }
  },
  async mounted() {
    let resp = await axios.get('/Sheet1.csv')
    this.masterList = resp.data.split('\n').slice(1)
      .map(x => x.split(','))
      .map(x => ({
        designation: x[0],
        modelCode: x[1],
        type: x[2],
        capacity: x[3],
        unitPrice: x[4]
      }))

    let resp1 = await axios.get('/company-list.json')
    this.companyList = resp1.data
    console.log(resp1.data);
  }
}
</script>

<style lang="scss">
.invoice-header  {
  label {
    white-space: nowrap;
  }

  .form-input {
    background-color: transparent !important;

    &.el-date-editor {
      width: 100%;
      padding: 0;
      border: none;

      .el-input__inner {
        background-color: transparent;
        border-color: transparent;
        border-radius: 0;
        font-weight: bold;

        &:focus {
          border-color: theme("colors.red.500");
        }
      }
    }
  }

  .form-group:nth-child(odd) label {
    width: 20%;
  }

  .form-group:nth-child(even) label {
    width: 30%;
  }

  .form-group:nth-child(2) {
    border-top-width: 0 !important;
  }

  .form-group[disabled] {
    opacity: 0.5;
    pointer-events: none;
  }
}

.highlight-on-hover {
  transition: all .2s;
  &:hover {
    background-color: theme("colors.red.50");
  }

  &__black:hover {
    background-color: theme("colors.gray.50");
  }
}

.invoice-table {
  &__row {
    display: grid;
    grid-template-columns: 10% 15% 25% 15% 7.5% 7.5% 10% 10%;
    transition: all .2s;
    position: relative;
  }

  &__row-hightlight {
    @mixin common-hightlight {
      content: '';
      width: 5px;
      height: 100%;
      position: absolute;
      left: -5px;
      top: 0;
      transition: all .2s;
      transform: scale(0);
    };

    &::before {
      @include common-hightlight;
      background-color: theme("colors.red.600");
    }
    &__black::before {
      @include common-hightlight;
      background-color: theme("colors.gray.600");
    }

    &:hover::before {
      transform: scale(1);
    }
  }

  &__cell {
    padding: theme("padding.1");
  }

  &__row:nth-child(1) &__cell {
    font-size: theme("fontSize.sm");
    text-align: center;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__item {
    display: contents;
  }
}

.custom-input {
  padding: 0;
  &.el-select {
    .el-input {
      .el-input__inner {
        border-color: transparent;
        background-color: transparent;
        font-weight: inherit;
        font-size: theme("fontSize.base");
      }
      &.is-focus .el-input__inner {
        border-color: theme("colors.red.600");
      }
    }
  }
  &.el-select-dropdown {
    .check-mark {
      display: none;
    }
    li.selected {
      color: inherit;
      .check-mark {
        display: inline-flex;
      }
    }
  }
}

</style>
