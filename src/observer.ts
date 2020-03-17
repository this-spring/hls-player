/*
 * @Author: xiuquanxu
 * @Company: kaochong
 * @Date: 2020-03-17 23:42:41
 * @LastEditors: xiuquanxu
 * @LastEditTime: 2020-03-17 23:55:45
 */
const EventEmitter = require('events');

class Observer {
  private obser = new EventEmitter();

  on(event: string, cb: any) {
    this.obser.on(event, cb);
  }
}