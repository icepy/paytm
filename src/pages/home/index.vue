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
              <image class="item-image" src="//gw.alicdn.com/tps/TB1Ez8XOpXXXXa5XpXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Unpaid Leave</text>
        </div>
        <div class="app-item" v-on:click="onAppItemUrl(1)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="//gw.alicdn.com/tps/TB1zXtqOpXXXXa6XXXXXXXXXXXX-102-102.png"></image>
            </div>
          </div>
          <text class="item-text">Casual Leave</text>
        </div>
        <div class="app-item" v-on:click="onAppItemUrl(2)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="//static.dingtalk.com/media/lALOD5pFIMzIzMg_200_200.png"></image>
            </div>
          </div>
          <text class="item-text">Ding Mail</text>
        </div>
        <div class="app-item" v-on:click="onAppItemUrl(3)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="//static.dingtalk.com/media/lALODCPXR8zIzMg_200_200.png"></image>
            </div>
          </div>
          <text class="item-text">Ding Drive</text>
        </div>
        <div class="app-item" v-on:click="onAppItemUrl(4)">
          <div class="item-image-container">
            <div class="item-image-radius">
              <image class="item-image" src="//static.dingtalk.com/media/lALOHTFw58zIzMg_200_200.png"></image>
            </div>
          </div>
          <text class="item-text">Video Conference</text>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

    import dingtalk from 'weex-dingtalk';
    const modal = weex.requireModule('modal');
    const gotoUrl = [
      'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm#custom?corpid=ding9a17ecce32888d4e&showmenu=true&dd_progress=false&dd_share=false&TemplateManager=activate&processCode=PROC-3KYJ33FV-KDBMOB2BMG1YA2UMKY1R1-SYC9TR4J-D1&formUuid=FORM-3KYJ33FV-KDBMOB2BMG1YA2UMKY1R1-SYC9TR4J-C1',
      'https://aflow.dingtalk.com/dingtalk/mobile/homepage.htm#custom?corpid=ding9a17ecce32888d4e&showmenu=true&dd_progress=false&dd_share=false&TemplateManager=activate&processCode=PROC-RIYJB6OV-3BSLRFX2S40QR3PYOA8H2-S5UOPZ3J-8&formUuid=FORM-WIYJNNZV-EASLHWTSSQ4B314AU06Y3-UPCYM34J-04',
    ];

    const apps = [{
        name: 'mail',
        text: 'Ding Mail',
        appid: '-5',
        icon: 'lALOD5pFIMzIzMg'
      },
      {
        name: 'drive',
        text: 'Ding Drive',
        appid: '-3',
        icon: 'lALODCPXR8zIzMg'
      },
      {
        name: 'videoconf',
        text: 'Video Conference',
        appid: '1288',
        icon: 'lALOHTFw58zIzMg'
      }
    ];

    for(let app of apps){
      let url = 'dingtalk://dingtalkclient/action/switchtab?index=2&name=work&scene=1&corpid=ding9a17ecce32888d4e&appid=' + app.appid;
      gotoUrl.push(url);
    }

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
              "imgUrl": "https://gw.alicdn.com/tfs/TB1Qf_eQVXXXXazXXXXXXXXXXXX-1124-453.png"
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
    height: 300px;
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
