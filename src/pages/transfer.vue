<template>
    <div>111</div>
</template>

<script>
/* eslint no-undef: "off" */
/* eslint-disable */
export default {
    beforeRouteEnter(to, from, next) {
        console.log('transfer-----------------');
        next({ path: '/home' });
    }
};

</script>
