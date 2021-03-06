﻿// **********************************************************************
// Parsed By TarsParser(1.1.0), Generated By tars2node(20190109)
// TarsParser Maintained By <TARS> and tars2node Maintained By <superzheng>
// Generated from "NodeJsComm.tars" by Server Mode
// **********************************************************************

/* eslint-disable */

"use strict";

var assert    = require("assert");
var TarsStream = require("@tars/stream");
var TarsError  = require("@tars/rpc").error;

var _hasOwnProperty = Object.prototype.hasOwnProperty;

var TRom = TRom || {};
module.exports.TRom = TRom;

TRom.User_t = function() {
    this.id = 0;
    this.score = 0;
    this.name = "";
    this._classname = "TRom.User_t";
};
TRom.User_t._classname = "TRom.User_t";
TRom.User_t._write = function (os, tag, value) { os.writeStruct(tag, value); };
TRom.User_t._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
TRom.User_t._readFrom = function (is) {
    var tmp = new TRom.User_t;
    tmp.id = is.readInt32(0, false, 0);
    tmp.score = is.readInt32(1, false, 0);
    tmp.name = is.readString(2, false, "");
    return tmp;
};
TRom.User_t.prototype._writeTo = function (os) {
    os.writeInt32(0, this.id);
    os.writeInt32(1, this.score);
    os.writeString(2, this.name);
};
TRom.User_t.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
TRom.User_t.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
TRom.User_t.prototype.toObject = function() { 
    return {
        "id" : this.id,
        "score" : this.score,
        "name" : this.name
    };
};
TRom.User_t.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "id") && (this.id = json.id);
    _hasOwnProperty.call(json, "score") && (this.score = json.score);
    _hasOwnProperty.call(json, "name") && (this.name = json.name);
    return this;
};
TRom.User_t.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
TRom.User_t.new = function () {
    return new TRom.User_t();
};
TRom.User_t.create = function (is) {
    return TRom.User_t._readFrom(is);
};

TRom.Result_t = function() {
    this.id = 0;
    this.iLevel = 0;
    this._classname = "TRom.Result_t";
};
TRom.Result_t._classname = "TRom.Result_t";
TRom.Result_t._write = function (os, tag, value) { os.writeStruct(tag, value); };
TRom.Result_t._read  = function (is, tag, def) { return is.readStruct(tag, true, def); };
TRom.Result_t._readFrom = function (is) {
    var tmp = new TRom.Result_t;
    tmp.id = is.readInt32(0, false, 0);
    tmp.iLevel = is.readInt32(1, false, 0);
    return tmp;
};
TRom.Result_t.prototype._writeTo = function (os) {
    os.writeInt32(0, this.id);
    os.writeInt32(1, this.iLevel);
};
TRom.Result_t.prototype._equal = function () {
    assert.fail("this structure not define key operation");
};
TRom.Result_t.prototype._genKey = function () {
    if (!this._proto_struct_name_) {
        this._proto_struct_name_ = "STRUCT" + Math.random();
    }
    return this._proto_struct_name_;
};
TRom.Result_t.prototype.toObject = function() { 
    return {
        "id" : this.id,
        "iLevel" : this.iLevel
    };
};
TRom.Result_t.prototype.readFromObject = function(json) { 
    _hasOwnProperty.call(json, "id") && (this.id = json.id);
    _hasOwnProperty.call(json, "iLevel") && (this.iLevel = json.iLevel);
    return this;
};
TRom.Result_t.prototype.toBinBuffer = function () {
    var os = new TarsStream.TarsOutputStream();
    this._writeTo(os);
    return os.getBinBuffer();
};
TRom.Result_t.new = function () {
    return new TRom.Result_t();
};
TRom.Result_t.create = function (is) {
    return TRom.Result_t._readFrom(is);
};

TRom.NodeJsCommImp = function () { 
    this._name   = undefined;
    this._worker = undefined;
};

TRom.NodeJsCommImp.prototype.initialize = function () {};

TRom.NodeJsCommImp.prototype.onDispatch = function (current, funcName, binBuffer) { 
    if ("__" + funcName in this) {
        return this["__" + funcName](current, binBuffer);
    } else {
        return TarsError.SERVER.FUNC_NOT_FOUND;
    }
};

var __TRom_NodeJsComm$tars_ping$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeJsCommImp.prototype.__tars_ping = function (current) {
    __TRom_NodeJsComm$tars_ping$RE.call(current, 0);

    return TarsError.SUCCESS;
};

TRom.NodeJsCommImp.prototype.test = function () {
    assert.fail("test function not implemented");
};

var __TRom_NodeJsComm$test$RE = function (_ret) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeJsCommImp.prototype.__test = function (current) {
    current.sendResponse = __TRom_NodeJsComm$test$RE;

    this.test(current);

    return TarsError.SUCCESS;
};

TRom.NodeJsCommImp.prototype.getall = function () {
    assert.fail("getall function not implemented");
};

var __TRom_NodeJsComm$getall$RE = function (_ret, stResult) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);
        tup.writeStruct("stResult", stResult);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);
        os.writeStruct(2, stResult);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeJsCommImp.prototype.__getall = function (current, binBuffer) {
    var stUser = null;
    var stResult = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        stUser = tup.readStruct("stUser", TRom.User_t);
        stResult = tup.readStruct("stResult", TRom.Result_t, new TRom.Result_t);
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        stUser = is.readStruct(1, true, TRom.User_t);
        stResult = is.readStruct(2, false, TRom.Result_t);
    }

    current.sendResponse = __TRom_NodeJsComm$getall$RE;

    this.getall(current, stUser, stResult);

    return TarsError.SUCCESS;
};

TRom.NodeJsCommImp.prototype.getUsrName = function () {
    assert.fail("getUsrName function not implemented");
};

var __TRom_NodeJsComm$getUsrName$RE = function (_ret, sValue1, sValue2) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);
        tup.writeString("sValue1", sValue1);
        tup.writeString("sValue2", sValue2);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);
        os.writeString(2, sValue1);
        os.writeString(3, sValue2);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeJsCommImp.prototype.__getUsrName = function (current, binBuffer) {
    var sUsrName = null;
    var sValue1 = null;
    var sValue2 = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        sUsrName = tup.readString("sUsrName");
        sValue1 = tup.readString("sValue1", "");
        sValue2 = tup.readString("sValue2", "");
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        sUsrName = is.readString(1, true, "");
        sValue1 = is.readString(2, false, "");
        sValue2 = is.readString(3, false, "");
    }

    current.sendResponse = __TRom_NodeJsComm$getUsrName$RE;

    this.getUsrName(current, sUsrName, sValue1, sValue2);

    return TarsError.SUCCESS;
};

TRom.NodeJsCommImp.prototype.secRequest = function () {
    assert.fail("secRequest function not implemented");
};

var __TRom_NodeJsComm$secRequest$RE = function (_ret, binResponse) {
    if (this.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || this.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = this.getRequestVersion();
        tup.writeInt32("", _ret);
        tup.writeBytes("binResponse", binResponse);

        this.doResponse(tup.encode());
    } else {
        var os = new TarsStream.TarsOutputStream();
        os.writeInt32(0, _ret);
        os.writeBytes(2, binResponse);

        this.doResponse(os.getBinBuffer());
    }
};

TRom.NodeJsCommImp.prototype.__secRequest = function (current, binBuffer) {
    var binRequest = null;
    var binResponse = null;

    if (current.getRequestVersion() === TarsStream.Tup.TUP_SIMPLE || current.getRequestVersion() === TarsStream.Tup.TUP_COMPLEX) {
        var tup = new TarsStream.UniAttribute();
        tup.tupVersion = current.getRequestVersion();
        tup.decode(binBuffer);
        binRequest = tup.readBytes("binRequest");
        binResponse = tup.readBytes("binResponse", new TarsStream.BinBuffer);
    } else {
        var is = new TarsStream.TarsInputStream(binBuffer);
        binRequest = is.readBytes(1, true, TarsStream.BinBuffer);
        binResponse = is.readBytes(2, false, TarsStream.BinBuffer);
    }

    current.sendResponse = __TRom_NodeJsComm$secRequest$RE;

    this.secRequest(current, binRequest, binResponse);

    return TarsError.SUCCESS;
};





