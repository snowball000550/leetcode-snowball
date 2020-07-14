// 剑指 Offer 09. 用两个栈实现队列
// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )


var CQueue = function() {
    this.stack = [];// 存储栈
    this.help_stack = []; // 辅助栈
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    let cur = null;
    while(this.stack.length > 0) {
        this.help_stack.push(this.stack.pop());
    }
    this.help_stack.push(value);
    while(this.help_stack.length > 0) {
        this.stack.push(this.help_stack.pop());
    }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    return this.stack.length > 0 ? this.stack.pop() : -1;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */