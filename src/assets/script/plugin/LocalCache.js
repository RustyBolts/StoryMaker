LocalCache={setItem:function(e,t){if("string"!=typeof t)return cc.log(typeof t),void cc.error("LocalCache.setItem key="+e+" Value is not String");cc.log("LocalCache.setItem key="+e),cc.sys.localStorage.setItem(e,t)},getItem:function(e,t){var c=cc.sys.localStorage.getItem(e);return c||this.setItem(e,t),c||t},removeItem:function(e){cc.sys.localStorage.removeItem(e)},getTimestamp:function(){return(new Date).getTime().toString(16)}};