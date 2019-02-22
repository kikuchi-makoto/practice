<template>
  <div class="m-box-01">
    <ul class="m-list-01">
      <course-list></course-list>
    </ul>
    <add-button
      text="コース追加"
    >
    </add-button>
  </div>
</template>

<script>
import CourseList from './CourseList';
import AddButton from '../../button/Add';

export default {
  components: {
    CourseList,
    AddButton,
  },
};
</script>
