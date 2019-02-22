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
        eventName="addCourse"
        @addCourse="addCourse"
      >
      </add-button>
    </div>
    <div v-else>
      {{nonQuestionnaire}}
    </div>
  </div>
</template>

<script>
import CourseList from './CourseList';
import AddButton from '../../button/Add';
import { nonQuestionnaire } from '../../../defines';

export default {
  props: {
    dataList: Array,
  },
  computed: {
    hasQuestionnaire() {
      return this.dataList.length !== 0;
    },
    nonQuestionnaire() {
      return nonQuestionnaire;
    },
  },
  methods: {
    addCourse() {
      console.log('click コース追加');
    },
  },
  components: {
    CourseList,
    AddButton,
  },
};
</script>
