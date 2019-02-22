<template>
  <div class="l-contents-01">
    <label-name
      text="アンケート設定"
      :isRequired=true
    >
    </label-name>
    <questionnaire
      :dataList ="db"
    >
    </questionnaire>
  </div>
</template>

<script>
import LabelName from '../components/LabelName';
import Questionnaire from '../components/questionnaire/Index';
import db from '../stub';

export default {
  data() {
    return {
      db: db.questionnaire,
    };
  },
  components: {
    LabelName,
    Questionnaire,
  },
};
</script>
