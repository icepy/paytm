<template>
  <div class="wrapper">
    <div class="banner">
      <image class="banner-image" v-bind:src="imgUrl" v-on:click="onLinkImageUrl"></image>
    </div>
    <div class="apps">
      <div class="apps-title-container">
        <text class="apps-title">Paytm Apps</text>
      </div>
      <div class="apps-container">
        <div class="app-item" v-on:click="onAppItemUrl(0)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://gw.alicdn.com/tps/TB1hcBoOpXXXXbPXXXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Leave</text>
        </div>
        <div class="app-item" v-on:click="onAppItemUrl(1)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://gw.alicdn.com/tps/TB1Y57ZOXXXXXXwaXXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Reimbursement</text>
        </div>
        <div class="app-item" v-on:click="onAppItemUrl(2)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://landray.dingtalkapps.com/alid/app/report/images/ico-png/20.png"></image>
            </div>
          </div>
          <text class="item-text">Daily Report</text>
        </div>
        <div class="app-item" v-on:click="onAppItemUrl(3)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="https://landray.dingtalkapps.com/alid/app/report/images/ico-png/22.png"></image>
            </div>
          </div>
          <text class="item-text">Weekly Report</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

    import dingtalk from 'weex-dingtalk';
    const modal = weex.requireModule('modal');
    const gotoUrl = [
      'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm#custom?corpid=ding40c711eecf67ce54&showmenu=true&dd_progress=false&dd_share=false&TemplateManager=activate&processCode=PROC-A4D02E4D-7197-4A19-998A-8889F2002D71&formUuid=FORM-7FFA675C-DE31-40F6-A328-A544F8179783',
      'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm#custom?corpid=ding40c711eecf67ce54&showmenu=true&dd_progress=false&dd_share=false&TemplateManager=activate&processCode=PROC-64DF3BCF-0A70-494C-B206-5A1530E29977&formUuid=FORM-92AC0A06-BA77-496E-A206-195A5EF908CF',
      'https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?id=15bb4602311bafdf6134799457db1982&skip=0&corpid=ding40c711eecf67ce54&dd_progress=false',
      'https://landray.dingtalkapps.com/alid/app/report/createReport_new.html?id=15bb4605b26767793344e624d78a4a97&skip=0&corpid=ding40c711eecf67ce54&dd_progress=false'
    ];

    function toast(msg){
      modal.toast({
        message: msg,
        duration: 2
      });
    }
    function openUrl(linkUrl){
      dingtalk.ready(function(){
        const dd = dingtalk.apis;
        dd.biz.util.openLink({
          url: linkUrl
        });
      });
    }

    export default {
        name: 'home',
        data: function(){
            return {
              "linkUrl": "https://alimarket.m.taobao.com/markets/dingtalk/cydd?lwfrom=20161118115327653",
              "imgUrl": "https://gw.alicdn.com/tps/TB1o8BqOpXXXXanXVXXXXXXXXXX-750-300.png"
            }
        },
        mounted: function(){
            dingtalk.ready(function(){
                const dd = dingtalk.apis;
                // 设置导航
                dd.biz.navigation.setTitle({
                    title: 'Paytm'
                });
            });
        },
        methods: {
            onLinkImageUrl: function(){
              const linkUrl = this.linkUrl;
              openUrl(linkUrl);
            },
            onAppItemUrl: function(cur){
              const linkUrl = gotoUrl[cur] || '';
              openUrl(linkUrl);
            }
        }
    }
</script>
<style>
  .wrapper {
    background-color: #eee;
    width: 750px;
  }
  .banner{
    width: 750px;
    margin-bottom: 17px;
  }
  .banner-image{
    width: 750px;
    height: 220px;
  }
  .apps-title-container{
    width: 750px;
    height: 45px;
    background-color: #fff;
    border-top-style: solid;
    border-top-width: 1px;
    border-top-color: #eee;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #eee;
  }
  .apps-title{
    font-size: 18px;
    padding-left: 10px;
    line-height: 45px;
  }
  .apps-container{
    width:750px;
    background-color: #fff;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .app-item{
    width: 187.5px;
    border-right-style: solid;
    border-right-color: #eee;
    border-right-width: 1px;
    position: relative;
    border-bottom-color: #eee;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  .item-image-container{
    position: relative;
    margin-left: 56.25px;
    margin-right: 56.25px;
    margin-bottom: 10px;
    margin-top: 30px;
    width: 75px;
    height: 75px;
    overflow: hidden;
    background-color: #f8f8f8;
  }
  .item-image-radius{
    width: 75px;
    height: 75px;
    border-radius: 15px;
  }
  .item-image{
    width: 75px;
    height: 75px;
    border-radius: 15px;
  }
  .item-text{
    text-align: center;
    color: #323334;
    font-size: 24px;
    margin-bottom: 32px;
  }
</style>
