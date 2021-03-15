<template>

<section class="roster-grid grid card shadow rounded w-full overflow-scroll"
    :style="{ '--total-columns': remainingDays + 2 + 5,  }">

    <!-- Print header rows -->
    <aside class="roster-grid_header row-span-4 col-span-2 flex items-center justify-center bg-gray-50 border-b border-gray-300"
        style="top: 0; z-index: 1;"
        :style="{ '--left-sticky-columns': 0, }">
        Rota
    </aside>
    <aside class="roster-grid_header row-span-4 col-span-5 flex items-center bg-gray-50 border-b border-r border-gray-300"
        style="top: 0; z-index: 1;"
        :style="{ '--left-sticky-columns': 2 }">
        Employee Name
    </aside>

    <template v-for="(month,i) in months">
        <div class="roster-grid_month bg-gray-50 border-b border-r border-gray-300"
            :style="{ '--top-sticky-columns': 0, 'grid-column': `span ${month.count} / span ${month.count} ` }"
            :key="'month' + i">
            <span class="sticky" :style="{ '--left-sticky-columns': 2 + 5 }">{{month.name}}</span>
        </div>
    </template>

    <template v-for="(week,i) in weeks">
        <div class="roster-grid_week bg-gray-50 border-r border-gray-300 space-x-3"
            :style="{ '--top-sticky-columns': 1, 'grid-column': `span ${week.weekDays.length} / span ${week.weekDays.length} ` }"
            :key="'week' + i">
            <span>{{week.name}}</span>
            <span>*</span>
            <span>{{head(week.weekDays).date.format('DD/MM')}} - {{last(week.weekDays).date.format('DD/MM')}}</span>
        </div>
    </template>

    <template v-for="(week,i) in weeks">
        <template v-for="(day,j) in week.weekDays">
        <div class="roster-grid_cell roster-grid_day bg-gray-50" 
            :key="'week' + i + 'day' + j"
            :style="{ '--top-sticky-columns': 2 }"
            :class="{'border-r border-gray-300': j == week.weekDays.length - 1}">
            {{day.name}}
        </div>
        </template>
    </template>
    
    <template v-for="(week,i) in weeks">
        <template v-for="(day,j) in week.weekDays">
        <div class="roster-grid_cell roster-grid_date bg-gray-50 border-b border-gray-300" :key="'week' + i + 'date' + j"
            :style="{ '--top-sticky-columns': 3 }"
            :class="{'border-r border-gray-300': j == week.weekDays.length - 1}">
            {{day.date.format('DD')}}
        </div>
        </template>
    </template>

    <!-- /\ Print header rows -->

    <!-- Print content rows -->
    <template v-for="(emp,k) in employees">
        <aside class="roster-grid_header roster-grid_row col-span-2 flex items-center justify-center bg-gray-50"
            :style="{ '--left-sticky-columns': 0 }"
            :key="'emp' + k + 'rota'">
            {{emp.rota}}
        </aside>

        <aside class="roster-grid_header roster-grid_row col-span-5 flex items-center bg-gray-50 border-r border-gray-300"
            :style="{ '--left-sticky-columns': 2 }"
            :key="'emp' + k + 'name'">
            {{emp.name}}
        </aside>

        <template v-for="(week,i) in weeks">
            <template v-for="(day,j) in week.weekDays">
                <div class="roster-grid_cell roster-grid_row" 
                    :key="'emp' + k + 'week' + i + 'cell' + j"
                    :class="{'border-r border-gray-300': j == week.weekDays.length - 1}">
                    a
                </div>
            </template>
        </template>
    </template>
    <!-- /\ Print content rows -->
</section>

</template>

<script>
import { head, last, groupBy } from "lodash";
import dayjs from "dayjs";
import dayOfYear from 'dayjs/plugin/dayOfYear'
dayjs.extend(dayOfYear)

const WeekDays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']

class RosterWeekDay {
  constructor(name, date) {
    this.name = name
    this.date = date
  }
}

class RosterWeek {
  constructor(name, weekDays) {
    this.name = name
    this.weekDays = weekDays
  }
}

import emps from "~/assets/employees.json";

export default {
  data() {
    return {
      weeks: [],
      months: [],
      totalWeeks: 0,
      remainingDays: 0,
      
      employees: emps,
    }
  },
  methods: {
    head, last
  },
  mounted() {
    let currentDayInYear = dayjs().dayOfYear() - 1
    this.remainingDays = 365 - currentDayInYear
    let oodWeek = this.remainingDays % 7
    this.totalWeeks = Math.floor(this.remainingDays / 7 + (oodWeek == 0 ? 0 : 1))

    let currentDayInYearCount = currentDayInYear
    let firstDateInYear = dayjs().startOf('year')

    for (let i = 1; i <= this.totalWeeks; i++) {
      let totalDays = 7
      if(i == this.totalWeeks && oodWeek != 0) {
        totalDays = oodWeek
      }
      let obj = new RosterWeek(`Week ${i}`, WeekDays.slice(0, totalDays)
        .map( x => new RosterWeekDay( x, firstDateInYear.add(currentDayInYearCount++, 'day')) ) )
      this.weeks.push(obj)
    }

    let allMonths = this.weeks.flatMap(x => x.weekDays).map(x => x.date.format('MMMM'))
    let allMonthsGroupBy = groupBy(allMonths)
    this.months = [...new Set(allMonths)].map( x => ({name: x, count: allMonthsGroupBy[x].length}) )

    // console.log(this.weeks, oodWeek, this.remainingDays, this.totalWeeks, this.months, allMonths, allMonthsGroupBy);
  }
}
</script>

<style lang="scss">
.roster-grid {
  --total-columns: 0;

  grid-template-columns: repeat(var(--total-columns), theme("height.12"));
  grid-auto-rows: theme("height.12");
  will-change: transform;

  & {
    
    position: relative;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    z-index: -1;
  }

  &_cell {
    width: theme("width.12");
  }

  &_month, &_week, &_day, &_date {
    --top-sticky-columns: 0;

    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;

    top: calc(theme("width.12") * var(--top-sticky-columns));
  }

  &_cell, &_month, &_week, &_day, &_date{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &_month {
    .sticky {
      --left-sticky-columns: 0;

      position: -webkit-sticky;
      position: -moz-sticky;
      position: -ms-sticky;
      position: -o-sticky;

      left: calc(theme("width.12") * var(--left-sticky-columns));
    }
  }

  &_week {
    white-space: nowrap;
  }

  &_header {
    --left-sticky-columns: 0;

    position: sticky;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: -o-sticky;

    left: calc(theme("width.12") * var(--left-sticky-columns));
  }
}
</style>
