/**
 * @author: wyw
 * 连接 mongoDB 数据库
 */
const monogoose = require("mongoose");

// 当插入集合与数据时，数据库会自动创建
monogoose.connect(process.env.MONGODB_URL);
