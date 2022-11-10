<template>
  <div class="">
    <div class="row q-pb-md">MARKET INSIGHT BAR</div>
    <div class="row">
      <q-card bordered>
        <q-card-section class="q-px-sm q-pt-md q-pb-none">
          <div class="row">
            <div class="col text-grey-6" style="font-size: 12px">
              Sales turnover
            </div>
          </div>
        </q-card-section>
        <q-card-section class="row q-px-sm q-pt-md">
          <div class="col">
            <div class="text-black text-weight-bold" style="font-size: 20px">
              {{ dataSales.currency }} {{ dataSales.amount }}
            </div>
            <div
              :class="`${rateColor} text-weight-bold q-mt-sm`"
              style="font-size: 12px"
            >
              <q-icon
                v-if="dataSales.isPlus"
                name="arrow_upward"
                color="green"
              />
              <q-icon v-else name="arrow_downward" color="red" />
              {{ dataSales.rate }}%
              <span class="text-grey-5" style="font-size: 10px"> last periode in product sold</span>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "MarketComponent",
  setup() {
    const store = useStore();

    // COMPUTED
    const dataSales = computed(() => store.getters["dashboard/getSalesData"]);
    const rateColor = computed(() => {
      if (dataSales.value && dataSales.value.isPlus === false) {
        return "text-red";
      }
      return "text-green";
    });

    return {
      dataSales,
      rateColor,
    };
  },
};
</script>
