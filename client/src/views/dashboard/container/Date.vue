<template>
  <div class="row">
    <div
      class="col text-h4 text-weight-medium items-center"
      style="color: #707070c4"
    >
      Dashboard
    </div>
    <div class="col">
      <div class="row justify-end">
        <q-btn color="white" class="q-py-sm q-px-md" @click="expandDate">
          <!-- <q-icon color="" left size="3em" name="map" /> -->
          <q-img
            src="../../../assets/calendar(1).png"
            fit="fill"
            width="20px"
            height="20px"
            class="q-mr-md"
          />
          <div class="text-grey-6 q-mr-md" style="font-size: 12px">Period</div>
          <div class="text-grey-7 q-mr-sm" style="font-size: 14px">
            {{ dateStart }} - {{ dateEnd }}
          </div>
          <q-icon color="grey-7" name="expand_more"/>
        </q-btn>
      </div>
    </div>
  </div>
  <div v-if="dropdown.isOpen" class="row text-black justify-end">
    <q-card class="">
      <q-card-section>
        testing card
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { dateNameFormatter } from "@/formatter";

export default {
  name: "DateContainer",
  setup() {
    const store = useStore();

    const dropdown = reactive({
      isOpen: false
    });

    // COMPUTED
    const dateStart = computed(() =>
      dateNameFormatter(store.getters["dashboard/getSearchDate"].start)
    );
    const dateEnd = computed(() =>
      dateNameFormatter(store.getters["dashboard/getSearchDate"].end)
    );

    // METHOD
    const expandDate = () => {
      dropdown.isOpen = dropdown.isOpen ? false : true;
      return;
      // state.refreshLoading = true;
      // const res = await store.dispatch("subsidiaryCorner/inqCompanyProduct");
      // if (res) {
      //   state.refreshLoading = false;
      // }
    };

    return {
      dropdown,
      dateStart,
      dateEnd,
      expandDate
    };
  },
};
</script>
