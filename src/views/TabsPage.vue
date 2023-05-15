<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/insights">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Insights</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/play">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Play</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/portfolio">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Portfolio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/account">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Account</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
