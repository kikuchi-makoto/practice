<template>
  <div class="m-box-01">
    <div v-if="hasQuestionnaire">
      <ul class="m-list-01">
        <course-list
          v-for="(questionnaire, index) in dataList" :key="index"
          :questionnaire="questionnaire"
        >
        </course-list>
      </ul>
      <add-button
        text="コース追加"
      >
      </add-button>
    </div>
    <div v-else>
      表示するアンケートがございません。
    </div>
  </div>
</template>

<script>
import CourseList from './CourseList';
import AddButton from '../../button/Add';

export default {
  props: {
    dataList: Array,
  },
  computed: {
    hasQuestionnaire() {
      return this.dataList.length !== 0;
    },
  },
  components: {
    CourseList,
    AddButton,
  },
};
</script>
