// common.js
import '../script/common';

import Vue from 'vue';
import View from '../view/Index.vue';

View.el = '#root';

export default new Vue(View);
