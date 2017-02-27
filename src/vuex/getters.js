export default {
  // 得到是否登录
  getLogin: (state) => state.isLogin,
  // 得到假用户名
  getuname: (state) => state.username,
  // 得到假密码
  getpwd: (state) => state.password,
  // 得到是否加载中
  getloading: (state) => state.isLoading,
  // 得到当前所在页标签
  getwhichpage: (state) => state.whichPage,
  // 得到热搜词
  getFalseHotWord: (state) => state.falseHotWord,
  // 得到已完成订单
  getFalseOrder: (state) => state.falseOrder,
  // 得到商家简略信息
  getFalseBussinessbrief: (state) => state.falseBussinessbrief,
  // 得到商家详细数据
  getFalseBussinessInfo: (state) => state.falseBussinessInfo
};
