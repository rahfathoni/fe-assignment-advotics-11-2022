<template>
  <div class="height-page-v3">
    <DateForm class="q-pr-sm"/>
    <MarketForm class="q-pt-xl"/>
  </div>
</template>

<script>
import { onBeforeMount, defineAsyncComponent } from "vue";
import { useStore } from "vuex";

export default {
  name: "index",
  components: {
    DateForm: defineAsyncComponent(() => import("./container/Date")),
    MarketForm: defineAsyncComponent(() => import("./container/Market")),
  },
  setup() {
    const store = useStore();

    // MOUNTED
    onBeforeMount(async () => {
      store.commit("dashboard/reset");
      await store.dispatch("dashboard/inquiryDataSales")
    });

    return {};
  },
};
</script>

<style scoped>
.height-page-v3 {
  min-height: calc(100vh - 177px);
}
</style>
