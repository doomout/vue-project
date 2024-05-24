<template>
    <div>
     <table>
       <thead>
         <tr>
           <th>제품명</th>
           <th>가격</th>
           <th>카테고리</th>
           <th>배송료</th>
         </tr>
       </thead>
       <tbody>
         <tr :key="i" v-for="(product,i) in productList">
           <td>{{product.product_name}}</td>
           <td>{{product.price}}</td>
           <td>{{product.category}}</td>
           <td>{{product.delivery_price}}</td>
         </tr>
       </tbody>
     </table>
    </div>
</template>
<script>
import axios from 'axios'; // axios 임포트
export default {
    data() {
      return {
         productList: [] // 제품 리스트 배열 초기화
      };
    },
    created() {
      this.getList(); // 컴포넌트 생성 시 getList 메서드 호출
    },
    methods: {
        async getList() {
            try {
                //const response = await axios.get(`https://1469ebe3-e85a-4505-be5a-233dbb6ee3f4.mock.pstmn.io/list?_=${new Date().getTime()}`);
                //this.productList = response.data; // 응답 데이터를 productList에 할당
                //this.productList = await this.$api("https://1469ebe3-e85a-4505-be5a-233dbb6ee3f4.mock.pstmn.io/list","get"); //Mock Servers URL
                const response = await axios.get("https://1469ebe3-e85a-4505-be5a-233dbb6ee3f4.mock.pstmn.io/list", {
                    headers: {
                        'Cache-Control': 'no-cache'
                    }
                });
                this.productList = response.data;
            } catch (error) {
                console.error("API 요청 중 오류 발생:", error); // 오류 발생 시 콘솔에 로그 출력
            }
            
        }
    }
}
</script>
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
    
td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
</style>