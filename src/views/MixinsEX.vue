<template>
    <div></div>
</template>

<script>
import ApiMixin from '../api.js'; //믹스인 파일
export default {
    mixins: [ApiMixin], //사용할 믹스인 파일을 배열로 등록
    data() {
        return {
        productList: []
        };
    },
    async mounted() {
        this.productList = await this.$callAPI("https://1469ebe3-e85a-4505-be5a-233dbb6ee3f4.mock.pstmn.io/list","get");
        console.log(this.productList);
    }
}
</script>