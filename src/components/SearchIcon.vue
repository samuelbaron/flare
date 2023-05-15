<template>
    <ion-icon :icon="searchOutline" size="large" color="primary"></ion-icon>
  </template>
  
  <script lang="ts">
    import { IonIcon } from '@ionic/vue';
    import { searchOutline } from 'ionicons/icons';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonIcon },
      setup() {
        return { searchOutline };
      },
    });
  </script>