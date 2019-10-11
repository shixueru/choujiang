<template>
  <div>
    <Button :text="'按钮'"></Button>
    <router-link to="luckyDraw">luckyDraw</router-link>
    <!-- <luckDraw></luckDraw> -->
    <router-link to="drumpMouse">drumpMouse</router-link>
    <router-link to="globalCompositeOpeartion">globalCompositeOpeartion</router-link>
    <hsl></hsl>
    <router-link to="hitMouse">hitMouse</router-link>
  </div>
</template>

<script>
import Button from '../../components/button';
import hsl from '../background-hsl';

export default {
    name: 'home',
    components: {Button, hsl},
    methods: {

    }
};
</script>
