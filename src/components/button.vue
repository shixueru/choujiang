
<template>
  <div class="button" :class="[type ? 'button--primary' : '']">
    <i class="button__icon"></i>
    <span class="button__text"> {{ text }} </span>
  </div>
</template>

<style lang="stylus" scoped>
</style>

<script>
export default {
    name: 'button',
    props: {
        type: {
            type: String
        },
        text: {
            type: String
        }
    },
    data () {
        return {}
    },
    components: {}
}
</script>
