/**
 * Created by Xaviere on 03/02/2017.
 */

angular.module("appNote", ["ngCookies"]).controller("NoteController", [ '$cookies', function($cookies) {
    this.messageNote=$cookies.get('msg');
    this.info="";
    this.clear = function () {
        if(this.messageNote!=""){
            this.messageNote="";
            this.info="";
        }
    };
    this.save = function () {
        $cookies.put('msg',this.messageNote);
        this.info="note sauvegardée";
    };
    this.count= function () {
        var nbMsg = 100-this.messageNote.length;
        return nbMsg;
    };
}]);