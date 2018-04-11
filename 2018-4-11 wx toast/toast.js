let _compData ={
  '_toast_.isHide':false,
  '_toast_.content':'',
};


let toastPannel = {
  show:function(data){
    let self = this;
    this.setData({

        '_toast_.isHide':true,
        '_toast_.content':data
      
      });

     setTimeout(function(){
        self.setData({
          '_toast_.isHide':false
        });
     },3000)

  }
};

//构造函数，关联当前页方法
function ToastPannel(){
  //拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length-1];

  this._page = curPage;

  Object.assign(curPage,toastPannel);

  //附加到page上
  curPage.toastPannel = this;

  curPage.setData(_compData);

  return this;

}

module.exports = {
  ToastPannel
};
