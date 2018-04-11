import{ ToastPannel } from './utils/toast/toast';

App({
  ToastPannel,
})


======================orther wxml=============================
  <import src='../../utils/toast/toast.wxml' />
  <template is='toast' data="{{..._toast_}}" />
  
======================app.wxss=============================  
  /*toast*/
@import "./utils/toast/toast.wxss";

======================orther js=============================

Page({

  /**
   * 页面的初始数据
   */
  data: {
      //toast
      content:'',
  },
  
  onLoad:function(options){
       new app.ToastPannel();
       
       //调用，不限于onlad
       this.setData（{content："....."}）;
       this.show(this.data.content);
  },
  
  
});
