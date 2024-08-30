<template>
  <div>
    <custom-modal ref="modal">
      <template v-slot:title><h2>供應商平台系統</h2></template>
      <template v-slot:content>
        <p>
          1.電子化請購流程，更改單據為一單多物，改善往常每日上百張三聯式單品項單據問題，減少2/3數量並省去單據整理保存問題
        </p>
        <p>
          2.提供廠商交貨平台方便打印單據，在廠內使用行動裝置讀寫條碼進行收貨，改善以往需先至到貨區手抄點貨後再至辦公室逐筆辦單之手續，
          如:往常10筆訂單處理時間為10分多鐘，改善後2分內可處理完成
        </p>
        <p>
          3.透過管理介面掌握進度，如:廠區庫房移轉貨品可能會因檢核時間差導致延誤，透過顏色進度條管理可立即跟催進度
        </p>
      </template>
    </custom-modal>
  </div>
</template>
<script>
import CustomModal from "../CustomModal.vue";
import { Modal } from "bootstrap";
export default {
  components: { CustomModal },
  methods: {
    show() {
      let modal = new Modal(this.$refs.modal.$refs.staticBackdrop);
      modal.show();
    },
  },
};
</script>