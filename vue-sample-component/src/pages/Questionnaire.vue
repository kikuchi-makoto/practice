<template>
  <div class="l-contents-01">
    <div class="m-label-01">
      アンケート設定
    </div>
    <div class="m-box-01">
      <ul class="m-list-01">
        <li class="m-list-01-item">
          <div class="m-list-01-box">
            <h2>コース1</h2>
            <div>
              <edit-button
                text="編集"
              >
              </edit-button>
              <delete-button
                text="削除"
              >
              </delete-button>
            </div>
          </div>
          <ul class="m-list-02">
            <li class="m-list-02-item">
              <div class="m-list-02-box">
                <h3 class="m-list-02-title">景品名1</h3>
                <div>
                  <edit-button
                    text="編集"
                  >
                  </edit-button>
                  <delete-button
                    text="削除"
                  >
                  </delete-button>
                </div>
                <p>有効</p>
              </div>
            </li>
            <li class="m-list-02-item">
              <div class="m-list-02-box">
                <h3 class="m-list-02-title">景品名2</h3>
                <div>
                  <edit-button
                    text="編集"
                  >
                  </edit-button>
                  <delete-button
                    text="削除"
                  >
                  </delete-button>
                </div>
                <p>無効</p>
              </div>
            </li>
          </ul>
          <add-button
            text="景品追加"
          >
          </add-button>
        </li>
        <li class="m-list-01-item">
          <div class="m-list-01-box">
            <h2>コース2</h2>
            <div>
              <edit-button
                text="編集"
              >
              </edit-button>
              <delete-button
                text="削除"
              >
              </delete-button>
            </div>
          </div>
          <ul class="m-list-02">
            <li class="m-list-02-item">
              <div class="m-list-02-box">
                <h3 class="m-list-02-title">景品名1</h3>
                <div>
                  <edit-button
                    text="編集"
                  >
                  </edit-button>
                  <delete-button
                    text="削除"
                  >
                  </delete-button>
                </div>
                <p>有効</p>
              </div>
            </li>
          </ul>
          <add-button
            text="景品追加"
          >
          </add-button>
        </li>
      </ul>
      <add-button
        text="コース追加"
      >
      </add-button>
    </div>
  </div>
</template>

<script>
import EditButton from '../components/button/Edit';
import DeleteButton from '../components/button/Delete';
import AddButton from '../components/button/Add';

export default {
  components: {
    EditButton,
    DeleteButton,
    AddButton,
  },
};
</script>
