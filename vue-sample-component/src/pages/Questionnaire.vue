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

export default {
  components: {
    LabelName,
    Configuration,
  },
};
</script>
