<template>
  <div id="popup">
    <div id="toolbar">
      <ul>
        <li @click="show_contents(main)" class="main_btn"
          v-bind:class="{ 'clicked':main_show, 'notclicked':!main_show }">
        </li>
        <li @click="show_contents(notice)" class="notice_btn"
          v-bind:class="{ 'clicked':notice_show, 'notclicked':!notice_show }">
        </li>
      </ul>
    </div>
    <div id="contents">
      <div id="main" v-if="main_show">
        <div class="slide"><slide-view></slide-view></div>
        <div class="scroll"><scroll-view></scroll-view></div>
      </div>
      <div id="notice" v-else>
        <div class="title">
          <notice-view></notice-view>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import ScrollView from './ScrollView.vue';
import SlideView from './SlideView.vue';
import NoticeView from './NoticeView.vue';

export default {
  name: "popup",
  data: () => {
    return {
      main : 'main',
      notice : 'notice',
      main_show: true,
      notice_show: false,
      clicked: true,
    }
  },
  components: {
    ScrollView,
    SlideView,
    NoticeView,
  },
  methods: {
    show_contents: function(name) {
      console.log(name);

      if(name == 'main') {
        this.notice_show = false;
        this.main_show = true;

      } else if(name == 'notice') {
        this.notice_show = true;
        this.main_show = false;
      }
    }
  }
}
</script>

<style>

@font-face {
  font-family: 'CookieRunOTF';
  src: url('../../assets/CookieRun Bold.otf');
}

#popup {
  font-family: CookieRunOTF;
  margin: 0 auto;
  width: 750px;
  height: 400px;
  border: 2px solid black;
  background-color: #C3CAD7;
}

#contents .scroll {
  padding: 23px;
}

#toolbar li {
  list-style: none;
  width: 80px;
  height: 80px;
}

#toolbar .main_btn.clicked {
  background-image: url("../../assets/main_clicked.png");
  background-size: 80px;
  width: 80px;
}

#toolbar .main_btn.notclicked {
  background-image: url("../../assets/main.png");
  background-size: 80px;
  width: 80px;
}

#toolbar .notice_btn.clicked {
  background-image: url("../../assets/notice_clicked.png");
  background-size: 80px;
  width: 80px;
}

#toolbar .notice_btn.notclicked {
  background-image: url("../../assets/notice.png");
  background-size: 80px;
  width: 80px;
}

#toolbar ul {
  background-color: #383F55;
  float: left;
  margin: 0;
  padding: 0;
  width: 80px;
  height: 400px;
}

.slide {
  float: left;
  width: 370px;
  height: 400px;
  background-color: #afbcd4;
}

.scroll {
  float: left;
  width: 200px;
  height: 310px;
  background-color: #afbcd4;
  margin: 20px 0px 0px 23px;
}

#notice {
  float: left;
}

.clicked {
  background-color: #8D97BA;
}

.notclicked {
  background-color: #383F55;
}

li img {
  image: url("../../assets/main_clicked.png");
}

</style>