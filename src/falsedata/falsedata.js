// 热搜词
export var falseHotWord = [
  {
    'search_word': '辣鸭脖',
    'title': '辣鸭脖'
  },
  {
    'search_word': '韩国炸鸡',
    'title': '韩国炸鸡'
  },
  {
    'search_word': '我是一只鸡',
    'title': '我是一只鸡'
  },
  {
    'search_word': '脆皮鸡',
    'title': '脆皮鸡'
  },
  {
    'search_word': '麦当劳',
    'title': '麦当劳'
  },
  {
    'search_word': '老鸭粉丝',
    'title': '老鸭粉丝'
  },
  {
    'search_word': '牛排',
    'title': '牛排'
  },
  {
    'search_word': '黄焖鸡',
    'title': '黄焖鸡'
  },
  {
    'search_word': '铁板炒饭',
    'title': '铁板炒饭'
  },
  {
    'search_word': '麻辣香锅',
    'title': '麻辣香锅'
  },
  {
    'search_word': '煎饼',
    'title': '煎饼'
  }

];
// 订单信息
export var falseOrder = [
  {
    'restaurant_id': 's10001',
    'img_src': '',
    'store_name': '上沙麦当劳',
    'order_birth_time': '2017-02-17 18:36',
    'order_state': '订单已完成',
    'order_content': {},
    'order_brief_info': '麦香鸡腿堡',
    'order_price': 17.9
  }
];
// 商家简略信息
export var falseBussinessbrief = [
  {
    'shop_name': '上沙麦当劳', // 店名
    'id': 's10001',
    'path': '/s10001',
    'shop_rating': 4.7, // 店评分
    'brand': true, // 是否品牌店
    'on_time': true, // 准时达
    'fengniao': true, // 蜂鸟专送
    'bao': true, // 保
    'piao': true, // 票
    'zhun': true, // 准
    'start_send': 20, // 起送金额
    'send_cost': 5, // 配送费
    'distance': 637, // 距离（米）
    'estimate_time': 30, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '满30减13，满50减23，满80减30，满100减38(不与美食活动同享)（限在线支付）' // 优惠信息
  },
  {
    'shop_name': '正宗川味卤鸡蛋，一块钱三个，味道好得很！', // 店名
    'id': 's10002',
    'path': '/s10002',
    'shop_rating': 4.9, // 店评分
    'brand': false, // 是否品牌店
    'on_time': true, // 准时达
    'fengniao': false, // 蜂鸟专送
    'bao': true, // 保
    'piao': false, // 票
    'zhun': true, // 准
    'start_send': 20, // 起送金额
    'send_cost': 0, // 配送费
    'distance': 347, // 距离（米）
    'estimate_time': 20, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '满20减12，满30减15，满50减20（限在线支付）' // 优惠信息
  },
  {
    'shop_name': '有家蛋糕店（下沙店）', // 店名
    'id': 's10003',
    'path': '/s10003',
    'shop_rating': 4.7, // 店评分
    'brand': false, // 是否品牌店
    'on_time': true, // 准时达
    'fengniao': false, // 蜂鸟专送
    'bao': true, // 保
    'piao': false, // 票
    'zhun': true, // 准
    'start_send': 20, // 起送金额
    'send_cost': 5, // 配送费
    'distance': 637, // 距离（米）
    'estimate_time': 30, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '满30减13，满50减23，满80减30，满100减38(不与美食活动同享)（限在线支付）' // 优惠信息
  },
  {
    'shop_name': '宇宙炸鸡（上沙店）', // 店名
    'id': 's10004',
    'path': '/s10004',
    'shop_rating': 4.3, // 店评分
    'brand': true, // 是否品牌店
    'on_time': false, // 准时达
    'fengniao': false, // 蜂鸟专送
    'bao': true, // 保
    'piao': false, // 票
    'zhun': true, // 准
    'start_send': 20, // 起送金额
    'send_cost': 5, // 配送费
    'distance': 127, // 距离（米）
    'estimate_time': 10, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '满30减13，满50减23，满80减30，满100减38(不与美食活动同享)（限在线支付）' // 优惠信息
  },
  {
    'shop_name': '六化建烧烤（深圳车公庙店）', // 店名
    'id': 's10005',
    'path': '/s10005',
    'shop_rating': 4.3, // 店评分
    'brand': false, // 是否品牌店
    'on_time': false, // 准时达
    'fengniao': false, // 蜂鸟专送
    'bao': true, // 保
    'piao': false, // 票
    'zhun': true, // 准
    'start_send': 20, // 起送金额
    'send_cost': 5, // 配送费
    'distance': 500, // 距离（米）
    'estimate_time': 10, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '满30减13，满50减23，满80减30，满100减38(不与美食活动同享)（限在线支付）' // 优惠信息
  }
];
// 商店信息
export var falseBussinessInfo = {
  's10001': {
    'shop_name': '上沙麦当劳', // 店名
    'id': 's10001',
    'shop_rating': 4.7, // 店评分
    'brand': true, // 是否品牌店
    'on_time': true, // 准时达
    'fengniao': true, // 蜂鸟专送
    'bao': true, // 保
    'piao': true, // 票
    'zhun': true, // 准
    'start_send': 20, // 起送金额
    'send_cost': 5, // 配送费
    'distance': 637, // 距离（米）
    'estimate_time': 31, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '满30减13，满50减23，满80减30，满100减38(不与美食活动同享)（限在线支付）', // 优惠信息
    'evaluate': [ // 评价详情（10条）
      {
        'username': 'wdk',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4.8, // 评分
        'send_time': 30, // 送达时间（分）
        'evaluate_details': '和在店里吃的一样，就是点了锅贴，商家却不给筷子和醋，只能用手抓着吃'
      }
    ],
    'commodity': [ // 商品
      {
        'description': '大家喜欢吃，才叫真好吃。', // 大分类的小tips
        'is_selected': true,
        'name': '热销榜', // 大分类名字
        'type_accumulation': 'c1', // 类型累加
        'foods': [ // 大分类下单项列表
          {
            'name': '吮指原味鸡', // 商品名
            'rating': 4.67, // 评分
            'unit_price': 11, // 单价
            'restaurant_id': 's10001', // 商店id
            'description': '', // 介绍
            'month_sales': 590, // 月销量
            'rating_count': 91, // 评价数
            'tips': '具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁。',
            'item_id': '16569765224',
            'satisfy_count': 8, // 好评数？？
            'satisfy_rate': 95, // 好评率
            'one_food_id': 100001, // id
            'image_path': '8b160883bdbeb19636f0099951b554c4jpeg'
          },
          {
            'name': '香辣鸡腿堡',
            'rating': 5,
            'unit_price': 17, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'item_id': '16569754984',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100002,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          },
          {
            'name': '蟹黄堡',
            'rating': 5,
            'unit_price': 17, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '浓郁汉堡酱，香脆鲜辣多汁。',
            'item_id': '16569754984',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100003,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '美味汉堡',
        'type_accumulation': 'c2',
        'foods': [
          {
            'name': '麦香鸡腿堡',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'item_id': '16569754984',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100004,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          },
          {
            'name': '腿堡',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'item_id': '16569754984',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100005,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类1',
        'type_accumulation': 'c3',
        'foods': [
          {
            'name': '堡1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'item_id': '16569754984',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100006,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          },
          {
            'name': '堡2',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'item_id': '16569754984',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100007,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类3',
        'type_accumulation': 'c4',
        'foods': [
          {
            'name': '堡3',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'item_id': '16569754984',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100008,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      }
    ]

  },
  's10002': {

  },
  's10003': {

  },
  's10004': {

  },
  's10005': {

  }
};
