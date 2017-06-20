const key = "sky_vue_first_project";

let store = {
    localStore : window.localStorage ,
    saveObj(obj){        //存储对象
        this.localStore.setItem(key , JSON.stringify(obj));

    } ,
    getObj(){        //获取对象
        return  JSON.parse(this.localStore.getItem(key) || "[]");
    }
}

module.exports = store;
