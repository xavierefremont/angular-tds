/**
 * Created by Xaviere on 03/02/2017.
 */

angular.module("appNote", ["ngCookies"]).controller("NoteController", [ '$cookies', function($cookies) {
    this.messageNote=$cookies.get('msg');
    this.clear = function () {
        this.messageNote="";
    };
    this.save = function () {
        $cookies.put('msg',this.messageNote);
    };
    this.count= function () {
        var nbMsg = 100-this.messageNote.length;
        return nbMsg;
    };
}]);