<template>
  <q-layout
    view="hHh Lpr lff"
    style="height: 300px; background-color: #F7F7F7"
    class="shadow-2 rounded-borders"
  >
    <q-header elevated class="bg-white q-pt-sm q-pb-xs">
      <q-toolbar>
        <q-toolbar-title class="row q-mx-lg">
          <div class="col text-black">
            <div class="row">
              <q-img
                src="./assets/advotics-logo-optimize.png"
                width="130px"
                height="33px"
                fit="fill"
              />
              <div class="q-pl-xs q-mt-md" style="font-size: 11px">
                powered by
                <q-img
                  class="q-mb-xs"
                  src="./assets/advotics-logo-optimize.png"
                  width="70px"
                  height="18px"
                  fit="fill"
                />
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row justify-end">
              <div class="col-2 text-grey-6 text-right q-pr-md">
                <div class="text-weight-bold" style="font-size: 14px">
                  Username
                </div>
                <div class="" style="font-size: 11px">Company Name</div>
              </div>
              <q-img
                class="col-2"
                src="./assets/Profile.svg"
                width="33px"
                fit="fill"
              />
              <q-btn class="q-ml-sm" flat rounded color="grey-6" icon="logout" />
            </div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above :mini="true" bordered class="bg-white">
      <q-scroll-area class="fit">
        <q-list padding>
          <q-item>
            <q-item-section avatar>
              <q-icon name="sort" style="color: #c5c5c5" size="2rem" />
            </q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <img src="./assets/Dashboardicon.png" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view class="q-pl-lg q-pt-lg q-pr-xl" />
    </q-page-container>
  </q-layout>
</template>

<script>
// import { ref } from "vue";

export default {
  name: "LayoutDefault",

  setup() {
    return {};
  },
};
</script>
