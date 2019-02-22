<template>
  <div class="l-contents-01">
    <label-name
      text="アンケート設定"
      :isRequired=true
    >
    </label-name>
    <configuration></configuration>
  </div>
</template>

<script>
import LabelName from '../components/LabelName';
import Configuration from '../components/questionnaire/configuration/Index';
import db from '../stub';

export default {
  data() {
    return {
      db: db.questionnaire,
    };
  },
  components: {
    LabelName,
    Configuration,
  },
};
</script>
