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
    'order_price': 22.9
  },
  {
    'restaurant_id': 's10001',
    'img_src': '',
    'store_name': '下沙麦当劳',
    'order_birth_time': '2017-02-17 18:43',
    'order_state': '订单已完成',
    'order_content': {},
    'order_brief_info': '七虾堡等2件商品',
    'order_price': 20
  },
  {
    'restaurant_id': 's10001',
    'img_src': '',
    'store_name': '沙嘴麦当劳',
    'order_birth_time': '2017-02-17 18:45',
    'order_state': '订单已完成',
    'order_content': {},
    'order_brief_info': '麦香鸡腿堡等2件商品',
    'order_price': 23
  },
  {
    'restaurant_id': 's10001',
    'img_src': '',
    'store_name': '沙尾麦当劳',
    'order_birth_time': '2017-02-17 18:55',
    'order_state': '订单已完成',
    'order_content': {},
    'order_brief_info': '薯条等3件商品',
    'order_price': 31.9
  },
  {
    'restaurant_id': 's10001',
    'img_src': '',
    'store_name': '沙头麦当劳',
    'order_birth_time': '2017-02-17 17:36',
    'order_state': '订单已完成',
    'order_content': {},
    'order_brief_info': '麦香鸡腿堡',
    'order_price': 22.9
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
    'discount': '新用户有巨额优惠！' // 优惠信息
  },
  {
    'shop_name': '正宗川味卤鸡蛋，味道好得很！', // 店名
    'id': 's10002',
    'path': '/s10002',
    'shop_rating': 3.5,
    'brand': false,
    'on_time': true,
    'fengniao': false,
    'bao': true,
    'piao': false,
    'zhun': true,
    'start_send': 20,
    'send_cost': 0,
    'distance': 347,
    'estimate_time': 20,
    'notice': '新店开张，优惠大酬宾！',
    'discount': '新用户有巨额优惠！'
  },
  {
    'shop_name': '有家蛋糕店（下沙店）',
    'id': 's10003',
    'path': '/s10003',
    'shop_rating': 4.4,
    'brand': false,
    'on_time': true,
    'fengniao': false,
    'bao': true,
    'piao': false,
    'zhun': true,
    'start_send': 80,
    'send_cost': 0,
    'distance': 637,
    'estimate_time': 30,
    'notice': '新店开张，优惠大酬宾！',
    'discount': '新用户有巨额优惠！'
  },
  {
    'shop_name': '宇宙炸鸡（上沙店）',
    'id': 's10004',
    'path': '/s10004',
    'shop_rating': 4.3,
    'brand': true,
    'on_time': false,
    'fengniao': false,
    'bao': true,
    'piao': false,
    'zhun': true,
    'start_send': 20,
    'send_cost': 5,
    'distance': 127,
    'estimate_time': 10,
    'notice': '新店开张，优惠大酬宾！',
    'discount': '新用户有巨额优惠！'
  },
  {
    'shop_name': '胖哥烧烤（车公庙店）',
    'id': 's10005',
    'path': '/s10005',
    'shop_rating': 4.6,
    'brand': false,
    'on_time': false,
    'fengniao': false,
    'bao': true,
    'piao': false,
    'zhun': true,
    'start_send': 20,
    'send_cost': 4,
    'distance': 500,
    'estimate_time': 10,
    'notice': '新店开张，优惠大酬宾！',
    'discount': '新用户有巨额优惠！'
  }
];
// 商店信息
export var falseBussinessInfo = {
  's10001': {
    'shop_name': '上沙麦当劳', // 店名
    'id': 's10001',
    'shop_rating': 4.5, // 店总评分
    'service_code': 4.6, // 服务总评分
    'foods_code': 4.4, // 食物总评分
    'high_or_low': true, // 低于还是高于周边商家
    'h_l_percent': 30, // 低于还是高于周边商家的百分比
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
    'discount': '新用户有巨额优惠！', // 优惠信息
    'evaluate': [ // 评价详情（10条）
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 1, // 评分
        'send_time': 30, // 送达时间（分）
        'evaluate_details': '不怎么好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4.5,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 5,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4.7,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 5,
        'send_time': 30,
        'evaluate_details': '很好吃'
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
        'name': '派',
        'type_accumulation': 'c3',
        'foods': [
          {
            'name': '红豆派',
            'rating': 5,
            'unit_price': 11, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100006,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          },
          {
            'name': '香芋派',
            'rating': 5,
            'unit_price': 11, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
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
        'name': '饮料',
        'type_accumulation': 'c4',
        'foods': [
          {
            'name': '可乐',
            'rating': 5,
            'unit_price': 8, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '小杯可乐',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100008,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类1',
        'type_accumulation': 'c5',
        'foods': [
          {
            'name': '类1-1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类1—1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100009,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类2',
        'type_accumulation': 'c6',
        'foods': [
          {
            'name': '类2-1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类2-1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100010,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类3',
        'type_accumulation': 'c7',
        'foods': [
          {
            'name': '类3-1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类3-1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100011,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类4',
        'type_accumulation': 'c8',
        'foods': [
          {
            'name': '类4-1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类4-1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100012,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类5',
        'type_accumulation': 'c9',
        'foods': [
          {
            'name': '类5-1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类5-1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100013,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类6',
        'type_accumulation': 'c10',
        'foods': [
          {
            'name': '类6-1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类6-1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100014,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      }
    ]
  },
  's10002': {
    'shop_name': '正宗川味卤鸡蛋，味道好得很！', // 店名
    'id': 's10002',
    'shop_rating': 3.5, // 店总评分
    'service_code': 3.6, // 服务总评分
    'foods_code': 3.4, // 食物总评分
    'high_or_low': false, // 低于还是高于周边商家
    'h_l_percent': 100, // 低于还是高于周边商家的百分比
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
    'discount': '新用户有巨额优惠！', // 优惠信息
    'evaluate': [ // 评价详情
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 1, // 评分
        'send_time': 30, // 送达时间（分）
        'evaluate_details': '不怎么好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 1,
        'send_time': 30,
        'evaluate_details': '差'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 3.7,
        'send_time': 30,
        'evaluate_details': '一般'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '好'
      }
    ],
    'commodity': [ // 商品
      {
        'description': '大家最爱吃', // 大分类的小tips
        'is_selected': true,
        'name': '热销榜', // 大分类名字
        'type_accumulation': 'c1', // 类型累加
        'foods': [ // 大分类下单项列表
          {
            'name': '一个卤鸡蛋', // 商品名
            'rating': 3.7, // 评分
            'unit_price': 3, // 单价
            'restaurant_id': 's10002', // 商店id
            'description': '', // 介绍
            'month_sales': 590, // 月销量
            'rating_count': 91, // 评价数
            'tips': '具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁。',
            'satisfy_count': 8, // 好评数？？
            'satisfy_rate': 95, // 好评率
            'one_food_id': 100015, // id
            'image_path': '8b160883bdbeb19636f0099951b554c4jpeg'
          },
          {
            'name': '一打卤鸡蛋',
            'rating': 5,
            'unit_price': 30, // 单价
            'restaurant_id': 's10002',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '正宗川味卤鸡蛋，味道好得很！。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100016,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '饮料',
        'type_accumulation': 'c2',
        'foods': [
          {
            'name': '可乐',
            'rating': 5,
            'unit_price': 5, // 单价
            'restaurant_id': 's10002',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100017,
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
            'name': '类1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10002',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100018,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类2',
        'type_accumulation': 'c4',
        'foods': [
          {
            'name': '类2',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10002',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类2',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100019,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类3',
        'type_accumulation': 'c5',
        'foods': [
          {
            'name': '类3',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类3',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100020,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类4',
        'type_accumulation': 'c6',
        'foods': [
          {
            'name': '类4',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类4',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100021,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类5',
        'type_accumulation': 'c7',
        'foods': [
          {
            'name': '类5',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类5',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100022,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类6',
        'type_accumulation': 'c8',
        'foods': [
          {
            'name': '类6',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类6',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100023,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类7',
        'type_accumulation': 'c9',
        'foods': [
          {
            'name': '类7',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类7',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100024,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类8',
        'type_accumulation': 'c10',
        'foods': [
          {
            'name': '类8',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10001',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类8',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100025,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      }
    ]
  },
  's10003': {
    'shop_name': '有家蛋糕店（下沙店）', // 店名
    'id': 's10003',
    'shop_rating': 4.3, // 店总评分
    'service_code': 4.6, // 服务总评分
    'foods_code': 4.2, // 食物总评分
    'high_or_low': true, // 低于还是高于周边商家
    'h_l_percent': 20, // 低于还是高于周边商家的百分比
    'brand': false, // 是否品牌店
    'on_time': true, // 准时达
    'fengniao': false, // 蜂鸟专送
    'bao': true, // 保
    'piao': false, // 票
    'zhun': true, // 准
    'start_send': 80, // 起送金额
    'send_cost': 0, // 配送费
    'distance': 637, // 距离（米）
    'estimate_time': 30, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '新用户有巨额优惠！', // 优惠信息
    'evaluate': [ // 评价详情
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4.5, // 评分
        'send_time': 30, // 送达时间（分）
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4.5,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4.7,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '很好吃'
      }
    ],
    'commodity': [ // 商品
      {
        'description': '大家最爱吃', // 大分类的小tips
        'is_selected': true,
        'name': '热销榜', // 大分类名字
        'type_accumulation': 'c1', // 类型累加
        'foods': [ // 大分类下单项列表
          {
            'name': '奶油蛋糕', // 商品名
            'rating': 4.7, // 评分
            'unit_price': 88, // 单价
            'restaurant_id': 's10003', // 商店id
            'description': '奶油蛋糕，灰常好吃！', // 介绍
            'month_sales': 59, // 月销量
            'rating_count': 9, // 评价数
            'tips': '奶油蛋糕，灰常好吃！',
            'satisfy_count': 8, // 好评数？？
            'satisfy_rate': 95, // 好评率
            'one_food_id': 100026, // id
            'image_path': '8b160883bdbeb19636f0099951b554c4jpeg'
          },
          {
            'name': '水果蛋糕',
            'rating': 5,
            'unit_price': 90, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 23,
            'rating_count': 6,
            'tips': '正宗川味卤鸡蛋，味道好得很！。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100027,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '饮料',
        'type_accumulation': 'c2',
        'foods': [
          {
            'name': '可乐',
            'rating': 5,
            'unit_price': 5, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100028,
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
            'name': '类1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100029,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类2',
        'type_accumulation': 'c4',
        'foods': [
          {
            'name': '类2',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类2',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100030,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类3',
        'type_accumulation': 'c5',
        'foods': [
          {
            'name': '类3',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类3',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100031,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类4',
        'type_accumulation': 'c6',
        'foods': [
          {
            'name': '类4',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类4',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100032,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类5',
        'type_accumulation': 'c7',
        'foods': [
          {
            'name': '类5',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类5',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100033,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类6',
        'type_accumulation': 'c8',
        'foods': [
          {
            'name': '类6',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类6',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100034,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类7',
        'type_accumulation': 'c9',
        'foods': [
          {
            'name': '类7',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类7',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100035,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类8',
        'type_accumulation': 'c10',
        'foods': [
          {
            'name': '类8',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10003',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类8',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100036,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      }
    ]
  },
  's10004': {
    'shop_name': '宇宙炸鸡（上沙店）', // 店名
    'id': 's10002',
    'shop_rating': 4.3, // 店总评分
    'service_code': 4.3, // 服务总评分
    'foods_code': 4.4, // 食物总评分
    'high_or_low': true, // 低于还是高于周边商家
    'h_l_percent': 10, // 低于还是高于周边商家的百分比
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
    'discount': '新用户有巨额优惠！', // 优惠信息
    'evaluate': [ // 评价详情
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 1, // 评分
        'send_time': 30, // 送达时间（分）
        'evaluate_details': '不怎么好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 3.5,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 3.7,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '很好吃'
      }
    ],
    'commodity': [ // 商品
      {
        'description': '大家最爱吃', // 大分类的小tips
        'is_selected': true,
        'name': '热销榜', // 大分类名字
        'type_accumulation': 'c1', // 类型累加
        'foods': [ // 大分类下单项列表
          {
            'name': '招牌炸鸡', // 商品名
            'rating': 4.7, // 评分
            'unit_price': 23, // 单价
            'restaurant_id': 's10004', // 商店id
            'description': '', // 介绍
            'month_sales': 590, // 月销量
            'rating_count': 91, // 评价数
            'tips': '具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁。',
            'satisfy_count': 8, // 好评数
            'satisfy_rate': 95, // 好评率
            'one_food_id': 100037, // id
            'image_path': '8b160883bdbeb19636f0099951b554c4jpeg'
          },
          {
            'name': '大鸡腿',
            'rating': 5,
            'unit_price': 13, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '正宗川味卤鸡蛋，味道好得很！。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100038,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '饮料',
        'type_accumulation': 'c2',
        'foods': [
          {
            'name': '可乐',
            'rating': 5,
            'unit_price': 5, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100039,
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
            'name': '类1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100040,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类2',
        'type_accumulation': 'c4',
        'foods': [
          {
            'name': '类2',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类2',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100041,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类3',
        'type_accumulation': 'c5',
        'foods': [
          {
            'name': '类3',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类3',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100042,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类4',
        'type_accumulation': 'c6',
        'foods': [
          {
            'name': '类4',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类4',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100043,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类5',
        'type_accumulation': 'c7',
        'foods': [
          {
            'name': '类5',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类5',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100044,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类6',
        'type_accumulation': 'c8',
        'foods': [
          {
            'name': '类6',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类6',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100045,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类7',
        'type_accumulation': 'c9',
        'foods': [
          {
            'name': '类7',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类7',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100046,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类8',
        'type_accumulation': 'c10',
        'foods': [
          {
            'name': '类8',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10004',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类8',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100047,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      }
    ]
  },
  's10005': {
    'shop_name': '胖哥烧烤（车公庙店）', // 店名
    'id': 's10005',
    'shop_rating': 4.6, // 店总评分
    'service_code': 4.6, // 服务总评分
    'foods_code': 4.6, // 食物总评分
    'high_or_low': true, // 低于还是高于周边商家
    'h_l_percent': 30, // 低于还是高于周边商家的百分比
    'brand': false, // 是否品牌店
    'on_time': false, // 准时达
    'fengniao': false, // 蜂鸟专送
    'bao': true, // 保
    'piao': false, // 票
    'zhun': true, // 准
    'start_send': 20, // 起送金额
    'send_cost': 4, // 配送费
    'distance': 500, // 距离（米）
    'estimate_time': 10, // 预计用时（分）
    'notice': '新店开张，优惠大酬宾！', // 店公告
    'discount': '新用户有巨额优惠！', // 优惠信息
    'evaluate': [ // 评价详情
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 1, // 评分
        'send_time': 30, // 送达时间（分）
        'evaluate_details': '不怎么好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 3.5,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 3.7,
        'send_time': 30,
        'evaluate_details': '很好吃'
      },
      {
        'username': 'w******k',
        'userid': 12344,
        'user_img': '8b160883bdbeb19636f0099951b554c4jpeg',
        'time': '2017-2-22',
        'evaluate_code': 4,
        'send_time': 30,
        'evaluate_details': '很好吃'
      }
    ],
    'commodity': [ // 商品
      {
        'description': '大家最爱吃', // 大分类的小tips
        'is_selected': true,
        'name': '热销榜', // 大分类名字
        'type_accumulation': 'c1', // 类型累加
        'foods': [ // 大分类下单项列表
          {
            'name': '羊肉串（10串）', // 商品名
            'rating': 4.7, // 评分
            'unit_price': 30, // 单价
            'restaurant_id': 's10005', // 商店id
            'description': '', // 介绍
            'month_sales': 590, // 月销量
            'rating_count': 91, // 评价数
            'tips': '具有神秘配方浓郁的香料所散发的绝佳风味，鲜嫩多汁。',
            'satisfy_count': 8, // 好评数？？
            'satisfy_rate': 95, // 好评率
            'one_food_id': 10048, // id
            'image_path': '8b160883bdbeb19636f0099951b554c4jpeg'
          },
          {
            'name': '牛肉串（10串）',
            'rating': 5,
            'unit_price': 30, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '牛肉串（10串）',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100049,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '饮料',
        'type_accumulation': 'c2',
        'foods': [
          {
            'name': '可乐',
            'rating': 5,
            'unit_price': 5, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '整块无骨鸡腿肉, 浓郁汉堡酱，香脆鲜辣多汁。',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100050,
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
            'name': '类1',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类1',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100051,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类2',
        'type_accumulation': 'c4',
        'foods': [
          {
            'name': '类2',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类2',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100052,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类3',
        'type_accumulation': 'c5',
        'foods': [
          {
            'name': '类3',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类3',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100053,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类4',
        'type_accumulation': 'c6',
        'foods': [
          {
            'name': '类4',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类4',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100054,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类5',
        'type_accumulation': 'c7',
        'foods': [
          {
            'name': '类5',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类5',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100055,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类6',
        'type_accumulation': 'c8',
        'foods': [
          {
            'name': '类6',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类6',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100056,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类7',
        'type_accumulation': 'c9',
        'foods': [
          {
            'name': '类7',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类7',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100057,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      },
      {
        'description': '',
        'is_selected': false,
        'name': '类8',
        'type_accumulation': 'c10',
        'foods': [
          {
            'name': '类8',
            'rating': 5,
            'unit_price': 18, // 单价
            'restaurant_id': 's10005',
            'description': '',
            'month_sales': 723,
            'rating_count': 65,
            'tips': '类8',
            'satisfy_count': 6,
            'satisfy_rate': 100,
            'one_food_id': 100058,
            'image_path': '58844415a3cd43e9f0738d51ac915c8fjpeg'
          }
        ]
      }
    ]
  }
};
