(function (e) {
  function t(t) {
    for (
      var o, i, l = t[0], r = t[1], c = t[2], p = 0, u = [];
      p < l.length;
      p++
    )
      (i = l[p]),
        Object.prototype.hasOwnProperty.call(n, i) && n[i] && u.push(n[i][0]),
        (n[i] = 0);
    for (o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    d && d(t);
    while (u.length) u.shift()();
    return s.push.apply(s, c || []), a();
  }
  function a() {
    for (var e, t = 0; t < s.length; t++) {
      for (var a = s[t], o = !0, l = 1; l < a.length; l++) {
        var r = a[l];
        0 !== n[r] && (o = !1);
      }
      o && (s.splice(t--, 1), (e = i((i.s = a[0]))));
    }
    return e;
  }
  var o = {},
    n = { popup: 0 },
    s = [];
  function i(t) {
    if (o[t]) return o[t].exports;
    var a = (o[t] = { i: t, l: !1, exports: {} });
    return e[t].call(a.exports, a, a.exports, i), (a.l = !0), a.exports;
  }
  (i.m = e),
    (i.c = o),
    (i.d = function (e, t, a) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
    }),
    (i.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (i.t = function (e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (
        (i.r(a),
        Object.defineProperty(a, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          i.d(
            a,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return a;
    }),
    (i.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return i.d(t, "a", t), t;
    }),
    (i.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = "/");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    r = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var c = 0; c < l.length; c++) t(l[c]);
  var d = r;
  s.push([3, "chunk-vendors"]), a();
})({
  0: function (e, t) {},
  "0082": function (e, t, a) {
    "use strict";
    function o(e, t) {
      if ("undefined" === typeof t || 0 === t.length) return e;
      if ("undefined" === typeof e || 0 === t.length) return [];
      for (let a = 0; a < t.length; a++) {
        let o = t[a];
        for (let t = 0; t < e.length; t++) {
          let a = e[t];
          if (a === o) {
            e.splice(t, 1), t--;
            break;
          }
        }
      }
      return e;
    }
    a.d(t, "a", function () {
      return o;
    });
  },
  "0196": function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return d;
    });
    const o = /edge\/([\d.]+)|edg\/([\d.]+)/,
      n = /rv:([\d.]+)\) like gecko/,
      s = /msie ([\d.]+)/,
      i = /firefox\/([\d.]+)/,
      l = /chrome\/([\d.]+)/,
      r = /opera.([\d.]+)/,
      c = /version\/([\d.]+).*safari/;
    function d() {
      let e = {};
      e.userAgent = window.navigator.userAgent;
      let t = window.navigator.userAgent.toLowerCase();
      return u(t, o)
        ? p(o, "Edge")
        : u(t, n)
        ? p(n, "IE")
        : u(t, s)
        ? p(s, "IE")
        : u(t, i)
        ? p(i, "Firefox")
        : u(t, l)
        ? p(l, "Chrome")
        : u(t, r)
        ? p(r, "Opera")
        : u(t, c)
        ? p(c, "Safari")
        : ((e.browser = ""), (e.version = "0"), (e.userAgent = t), e);
    }
    function p(e, t) {
      let a,
        o = {},
        n = window.navigator.userAgent;
      return (
        (a = n.toLowerCase().match(e)),
        (o.version = a[0]),
        (o.userAgent = n),
        (o.browser = t),
        o
      );
    }
    function u(e, t) {
      return t.test(e);
    }
  },
  "0233": function (e, t, a) {
    var o = a("b55e");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("7fec1b32", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "0756": function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".more-tools[data-v-42178606]{width:100%;margin:0 auto}.tools-img[data-v-42178606]{position:absolute;top:50%;left:15px;width:25px;height:25px;transform:translateY(-50%)}.more-tools ul li[data-v-42178606]{position:relative;list-style:none}.more-tools ul[data-v-42178606]{overflow:hidden}.tools-link[data-v-42178606]{display:inline-block;width:100%;height:50px;line-height:50px;padding-left:50px;text-decoration:none;border-bottom:1px solid #ccc;color:#444;font-size:16px;font-weight:500}.el-tag[data-v-42178606]{margin:0 5px}",
        "",
      ]),
      (e.exports = t);
  },
  "0a14": function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".imgSize .imgNode{height:200px;width:350px;display:block}",
        "",
      ]),
      (e.exports = t);
  },
  "0a3d": function (e, t, a) {
    "use strict";
    a.r(t);
    var o = a("2b0e"),
      n = function () {
        var e = this,
          t = e._self._c;
        return t(
          "ZbaseCustomPopupDialog",
          { attrs: { functionMap: e.functionMap } },
          [t("App")],
          1
        );
      },
      s = [],
      i = function () {
        var e = this,
          t = e._self._c;
        return t("div", [
          e.isGuide
            ? t("div", { attrs: { id: "guidePage" } }, [
                1 === e.guideStep
                  ? t("div", [
                      t("img", {
                        staticStyle: { width: "100%", height: "100%" },
                        attrs: { alt: "guideStep1", src: "pic/guide_1.png" },
                      }),
                      t(
                        "button",
                        {
                          staticClass: "guideButton",
                          on: {
                            click: function (t) {
                              return e.guideBtnClick(1);
                            },
                          },
                        },
                        [e._v("NEXT STEP")]
                      ),
                    ])
                  : e._e(),
                2 === e.guideStep
                  ? t("div", [
                      t("img", {
                        staticStyle: { width: "100%", height: "100%" },
                        attrs: { alt: "guideStep2", src: "pic/guide_2.png" },
                      }),
                      t(
                        "button",
                        {
                          staticClass: "guideStep2Button",
                          on: {
                            click: function (t) {
                              return e.guideBtnClick(2);
                            },
                          },
                        },
                        [e._v("NEXT STEP")]
                      ),
                    ])
                  : e._e(),
                3 === e.guideStep
                  ? t("div", [
                      t("img", {
                        staticStyle: { width: "100%", height: "100%" },
                        attrs: { alt: "guideStep3", src: "pic/guide_3.png" },
                      }),
                      e.guideShowSend
                        ? t(
                            "button",
                            {
                              staticClass: "guideSendButton",
                              on: {
                                click: function (t) {
                                  return e.guideBtnClick(3);
                                },
                              },
                            },
                            [e._v("Send")]
                          )
                        : e._e(),
                      e.guideShowSend
                        ? e._e()
                        : t(
                            "button",
                            {
                              staticClass: "guideSendButton",
                              staticStyle: { cursor: "not-allowed" },
                            },
                            [e._v("Sending...")]
                          ),
                    ])
                  : e._e(),
              ])
            : e._e(),
          e.isGuide
            ? e._e()
            : t(
                "div",
                {
                  staticStyle: { "background-color": "#F9F9F9" },
                  attrs: { id: "app" },
                },
                [
                  t(
                    "div",
                    { staticClass: "hello" },
                    [
                      t("TopInfo"),
                      t(
                        "el-tabs",
                        {
                          class: e.headTab,
                          attrs: { stretch: "true" },
                          on: { "tab-click": e.handleClick },
                          model: {
                            value: e.activeName,
                            callback: function (t) {
                              e.activeName = t;
                            },
                            expression: "activeName",
                          },
                        },
                        [
                          e.waplus_remove_flag
                            ? e._e()
                            : t(
                                "el-tab-pane",
                                { attrs: { name: "send-messages" } },
                                [
                                  "pt" === e.$i18n.locale
                                    ? t(
                                        "el-tooltip",
                                        {
                                          staticClass: "item",
                                          attrs: {
                                            slot: "label",
                                            effect: "dark",
                                            content: e.sendMessagesText,
                                            placement: "top-start",
                                          },
                                          slot: "label",
                                        },
                                        [
                                          t("div", [
                                            t("span", {
                                              staticStyle: {
                                                color: "white",
                                                "padding-left": "16px",
                                                display: "block",
                                                overflow: "hidden",
                                                "text-overflow": "ellipsis",
                                              },
                                              attrs: { slot: "label" },
                                              domProps: {
                                                textContent: e._s(
                                                  e.sendMessagesText
                                                ),
                                              },
                                              slot: "label",
                                            }),
                                          ]),
                                        ]
                                      )
                                    : t("span", {
                                        staticStyle: {
                                          color: "white",
                                          "padding-left": "16px",
                                        },
                                        attrs: { slot: "label" },
                                        domProps: {
                                          textContent: e._s(e.sendMessagesText),
                                        },
                                        slot: "label",
                                      }),
                                ],
                                1
                              ),
                          t(
                            "el-tab-pane",
                            { attrs: { name: "send-messages-pro" } },
                            [
                              "pt" === e.$i18n.locale
                                ? t(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        slot: "label",
                                        effect: "dark",
                                        content: e.sendMessagesProText,
                                        placement: "top-start",
                                      },
                                      slot: "label",
                                    },
                                    [
                                      t("div", [
                                        t("span", {
                                          staticStyle: {
                                            color: "white",
                                            "padding-left": "16px",
                                            display: "block",
                                            overflow: "hidden",
                                            "text-overflow": "ellipsis",
                                          },
                                          attrs: { slot: "label" },
                                          domProps: {
                                            textContent: e._s(
                                              e.sendMessagesProText
                                            ),
                                          },
                                          slot: "label",
                                        }),
                                      ]),
                                    ]
                                  )
                                : t("span", {
                                    staticStyle: {
                                      color: "white",
                                      "padding-left": "16px",
                                    },
                                    attrs: { slot: "label" },
                                    domProps: {
                                      textContent: e._s(e.sendMessagesProText),
                                    },
                                    slot: "label",
                                  }),
                            ],
                            1
                          ),
                          t(
                            "el-tab-pane",
                            { attrs: { name: "group-tools" } },
                            [
                              "pt" === e.$i18n.locale
                                ? t(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        slot: "label",
                                        effect: "dark",
                                        content: e.exportGroupText,
                                        placement: "top-start",
                                      },
                                      slot: "label",
                                    },
                                    [
                                      t("div", [
                                        t("span", {
                                          staticStyle: {
                                            color: "white",
                                            display: "block",
                                            overflow: "hidden",
                                            "text-overflow": "ellipsis",
                                          },
                                          attrs: { slot: "label" },
                                          domProps: {
                                            textContent: e._s(
                                              e.exportGroupText
                                            ),
                                          },
                                          slot: "label",
                                        }),
                                      ]),
                                    ]
                                  )
                                : t("span", {
                                    staticStyle: { color: "white" },
                                    attrs: { slot: "label" },
                                    domProps: {
                                      textContent: e._s(e.exportGroupText),
                                    },
                                    slot: "label",
                                  }),
                            ],
                            1
                          ),
                          t(
                            "el-tab-pane",
                            { attrs: { name: "statistics" } },
                            [
                              "pt" === e.$i18n.locale
                                ? t(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        slot: "label",
                                        effect: "dark",
                                        content: e.statisticsText,
                                        placement: "top-start",
                                      },
                                      slot: "label",
                                    },
                                    [
                                      t("div", [
                                        t("span", {
                                          staticStyle: {
                                            color: "white",
                                            "padding-right": "16px",
                                            display: "block",
                                            overflow: "hidden",
                                            "text-overflow": "ellipsis",
                                          },
                                          attrs: { slot: "label" },
                                          domProps: {
                                            textContent: e._s(e.statisticsText),
                                          },
                                          slot: "label",
                                        }),
                                      ]),
                                    ]
                                  )
                                : t("span", {
                                    staticStyle: {
                                      color: "white",
                                      "padding-right": "16px",
                                      display: "block",
                                      overflow: "hidden",
                                      "text-overflow": "ellipsis",
                                    },
                                    attrs: { slot: "label" },
                                    domProps: {
                                      textContent: e._s(e.statisticsText),
                                    },
                                    slot: "label",
                                  }),
                            ],
                            1
                          ),
                          t(
                            "el-tab-pane",
                            { attrs: { name: "more-tools" } },
                            [
                              "pt" === e.$i18n.locale
                                ? t(
                                    "el-tooltip",
                                    {
                                      staticClass: "item",
                                      attrs: {
                                        slot: "label",
                                        effect: "dark",
                                        content: e.moreToolsText,
                                        placement: "top-start",
                                      },
                                      slot: "label",
                                    },
                                    [
                                      t("div", [
                                        t("span", {
                                          staticStyle: {
                                            color: "white",
                                            "padding-right": "16px",
                                            display: "block",
                                            overflow: "hidden",
                                            "text-overflow": "ellipsis",
                                          },
                                          attrs: { slot: "label" },
                                          domProps: {
                                            textContent: e._s(e.moreToolsText),
                                          },
                                          slot: "label",
                                        }),
                                      ]),
                                    ]
                                  )
                                : t("span", {
                                    staticStyle: {
                                      color: "white",
                                      "padding-right": "16px",
                                      display: "block",
                                      overflow: "hidden",
                                      "text-overflow": "ellipsis",
                                    },
                                    attrs: { slot: "label" },
                                    domProps: {
                                      textContent: e._s(e.moreToolsText),
                                    },
                                    slot: "label",
                                  }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      t(
                        "div",
                        {
                          staticClass: "tabContainer",
                          class:
                            "send-messages" === e.activeName
                              ? "grey-background-color"
                              : "",
                        },
                        [
                          "send-messages" === e.activeName
                            ? t("SendMessages", { ref: "messageSimple" })
                            : e._e(),
                          "send-messages-pro" === e.activeName
                            ? t("SendMessagesPro", {
                                ref: "messagePro",
                                attrs: {
                                  groupsMap: e.groupsMap,
                                  groupOptions: e.groupOptions,
                                },
                              })
                            : "group-tools" === e.activeName
                            ? t("GroupTools", {
                                attrs: {
                                  chooseWarning: e.chooseWarning,
                                  beRemovedWarning: e.beRemovedWarning,
                                  groupsMap: e.groupsMap,
                                  groupOptions: e.groupOptions,
                                },
                              })
                            : "statistics" === e.activeName
                            ? t("Statistics", {
                                attrs: {
                                  isShowContinueBtn: e.isShowContinueBtn,
                                  disabledSendingFlag: e.disabledSendingFlag,
                                  countAll: e.countAll,
                                  countTotal: e.countTotal,
                                  deduplicated: e.deduplicated,
                                  countFail: e.countFail,
                                  countSuccess: e.countSuccess,
                                  waitSeconds: e.waitSeconds,
                                },
                              })
                            : "more-tools" === e.activeName
                            ? t(
                                "el-card",
                                {
                                  staticStyle: {
                                    margin: "11px 0px 10px",
                                    padding: "0 10px",
                                  },
                                  attrs: {
                                    shadow: "always",
                                    "body-style": { padding: "0px 0px 20px" },
                                  },
                                },
                                [t("moreToolsVue")],
                                1
                              )
                            : e._e(),
                          t(
                            "el-dialog",
                            {
                              attrs: {
                                visible: e.dialogVisible,
                                width: "459px",
                                top: "125px",
                                "modal-append-to-body": !1,
                                "show-close": !0,
                                "close-on-click-modal": !1,
                                "custom-class": "sendConfirmPop",
                                center: "",
                              },
                              on: {
                                "update:visible": function (t) {
                                  e.dialogVisible = t;
                                },
                                open: e.confirmSendDialogOpen,
                                close: e.confirmSendDialogClose,
                              },
                            },
                            [
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    "margin-bottom": "23px",
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    color: "#0f0101",
                                  },
                                },
                                [e._v(e._s(this.$t("suggest_1_t")) + " ")]
                              ),
                              t(
                                "ul",
                                {
                                  staticClass: "sendConfirmUl",
                                  staticStyle: { margin: "23px 0 35px 15px" },
                                },
                                [
                                  t("li", [
                                    t("i", { staticClass: "boldFont" }, [
                                      e._v(e._s(this.$t("suggest_2_t"))),
                                    ]),
                                    t("br"),
                                    t("span", {
                                      domProps: {
                                        innerHTML: e._s(this.$t("suggest_3_t")),
                                      },
                                    }),
                                  ]),
                                  t("li", [
                                    t("i", { staticClass: "boldFont" }, [
                                      e._v(e._s(this.$t("suggest_4_t"))),
                                    ]),
                                    t("br"),
                                    t("span", {
                                      domProps: {
                                        innerHTML: e._s(this.$t("suggest_5_t")),
                                      },
                                    }),
                                  ]),
                                ]
                              ),
                              t("div", [
                                t(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: { click: e.openWaHelpCenter },
                                  },
                                  [e._v(e._s(this.$t("about_t")))]
                                ),
                              ]),
                              t(
                                "div",
                                {
                                  staticClass: "safetyFooter",
                                  attrs: { slot: "footer" },
                                  slot: "footer",
                                },
                                [
                                  t(
                                    "el-button",
                                    {
                                      attrs: { type: "success" },
                                      on: { click: e.confirmSendDialog },
                                    },
                                    [e._v(e._s(this.$t("agree_t")))]
                                  ),
                                  t("br"),
                                  t(
                                    "el-checkbox",
                                    {
                                      staticStyle: { "margin-top": "11px" },
                                      on: { change: e.notShowAgain },
                                      model: {
                                        value: e.notShowAgainModel,
                                        callback: function (t) {
                                          e.notShowAgainModel = t;
                                        },
                                        expression: "notShowAgainModel",
                                      },
                                    },
                                    [e._v(" " + e._s(this.$t("donot_t")) + " ")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                          t(
                            "el-dialog",
                            {
                              staticClass: "concatsPop",
                              attrs: {
                                visible: e.concatsIsNull,
                                width: "459px",
                                top: "220px",
                                "modal-append-to-body": !1,
                                center: "",
                              },
                              on: {
                                "update:visible": function (t) {
                                  e.concatsIsNull = t;
                                },
                              },
                            },
                            [
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    "margin-bottom": "55px",
                                    height: "24px",
                                    "line-height": "24px",
                                  },
                                },
                                [
                                  t("i", {
                                    staticClass: "el-icon-warning",
                                    staticStyle: {
                                      color: "red",
                                      margin: "0 16px",
                                      fontSize: "24px",
                                      "vertical-align": "middle",
                                    },
                                  }),
                                  t("span", { staticStyle: { color: "red" } }, [
                                    e._v(e._s(this.$t("please_enter_at_t"))),
                                  ]),
                                ]
                              ),
                            ]
                          ),
                          t(
                            "el-dialog",
                            {
                              attrs: {
                                visible: e.isShowSafetyWarningFlagValue,
                                width: "459px",
                                top: "120px",
                                "custom-class": "safetyPop",
                                "modal-append-to-body": !1,
                                "show-close": !0,
                                "close-on-click-modal": !1,
                                center: "",
                              },
                              on: {
                                "update:visible": function (t) {
                                  e.isShowSafetyWarningFlagValue = t;
                                },
                                open: e.openSafetyDialog,
                                close: e.closeSafetyDialog,
                              },
                            },
                            [
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    color: "#0f0101",
                                  },
                                  attrs: { slot: "title" },
                                  slot: "title",
                                },
                                [e._v(" " + e._s(this.$t("safety_1_t")) + " ")]
                              ),
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    margin: "-10px 0 0 30px",
                                    height: "25px",
                                    "line-height": "25px",
                                    fontWeight: "bold",
                                    fontStyle: "normal",
                                    color: "#0f0101",
                                  },
                                },
                                [e._v(" " + e._s(this.$t("safety_2_t")) + " ")]
                              ),
                              t("ul", { staticClass: "safetyFirstUl" }, [
                                t("li", [
                                  t("span", [
                                    e._v(e._s(this.$t("safety_3_1_t"))),
                                    t("i", { staticClass: "boldFont" }, [
                                      e._v("≥ 15"),
                                    ]),
                                    e._v(e._s(this.$t("safety_3_2_t"))),
                                  ]),
                                ]),
                                t("li", [
                                  t("span", [
                                    e._v(e._s(this.$t("safety_4_1_t"))),
                                    t("i", { staticClass: "boldFont" }, [
                                      e._v(e._s(this.$t("safety_4_2_t"))),
                                    ]),
                                  ]),
                                ]),
                                t("li", [
                                  t("span", [
                                    t("i", { staticClass: "boldFont" }, [
                                      e._v(e._s(this.$t("safety_5_1_t"))),
                                    ]),
                                    e._v(e._s(this.$t("safety_5_2_t"))),
                                  ]),
                                ]),
                              ]),
                              t("div", [
                                t(
                                  "div",
                                  {
                                    staticStyle: {
                                      margin: "19px 0 0 30px",
                                      height: "25px",
                                      "line-height": "25px",
                                    },
                                  },
                                  [
                                    t("i", { staticClass: "boldFont" }, [
                                      e._v(e._s(this.$t("safety_6_t"))),
                                    ]),
                                  ]
                                ),
                                t("ul", { staticClass: "safetySecondUl" }, [
                                  t("li", [
                                    t("span", [
                                      e._v(e._s(this.$t("safety_7_t"))),
                                      t("i", { staticClass: "boldFont" }, [
                                        e._v("(≤24h)"),
                                      ]),
                                    ]),
                                  ]),
                                  t("li", [
                                    t("span", [
                                      e._v(e._s(this.$t("safety_8_t"))),
                                      t("i", { staticClass: "boldFont" }, [
                                        e._v("(>24h)"),
                                      ]),
                                    ]),
                                  ]),
                                ]),
                              ]),
                              t(
                                "div",
                                {
                                  staticClass: "safetyFooter",
                                  attrs: { slot: "footer" },
                                  slot: "footer",
                                },
                                [
                                  t(
                                    "el-button",
                                    {
                                      attrs: { type: "success" },
                                      on: {
                                        click: e.updateShowSafetyWarningFlag,
                                      },
                                    },
                                    [e._v(e._s(this.$t("agree_t")))]
                                  ),
                                  t("br"),
                                  t(
                                    "el-checkbox",
                                    {
                                      staticStyle: { "margin-top": "11px" },
                                      on: { change: e.againCheckBoxChange },
                                      model: {
                                        value: e.isDontShowSafetyWarning,
                                        callback: function (t) {
                                          e.isDontShowSafetyWarning = t;
                                        },
                                        expression: "isDontShowSafetyWarning",
                                      },
                                    },
                                    [e._v(" " + e._s(this.$t("donot_t")) + " ")]
                                  ),
                                ],
                                1
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      t("CommonBottomHref", {
                        attrs: { sendType: e.activeName, locale: e.locale },
                      }),
                      e.isShowAttractDialog && "ar" !== e.$i18n.locale
                        ? t("AttractDialog", {
                            attrs: {
                              isShowAttractDialog: e.isShowAttractDialog,
                              canClose: !e.zbaseConfig.enforce,
                            },
                            on: {
                              close: e.closeAttractDialog,
                              goToAttractDialogLink: e.goToAttractDialogLink,
                            },
                          })
                        : e._e(),
                      e.isShowAttractDialog && "ar" === e.$i18n.locale
                        ? t("AttractDialogArabic", {
                            attrs: {
                              isShowAttractDialog: e.isShowAttractDialog,
                              canClose: !e.zbaseConfig.enforce,
                            },
                            on: {
                              close: e.closeAttractDialog,
                              goToAttractDialogLink: e.goToAttractDialogLink,
                            },
                          })
                        : e._e(),
                    ],
                    1
                  ),
                ]
              ),
        ]);
      },
      l = [],
      r = a("1146"),
      c = a.n(r),
      d = function () {
        var e = this,
          t = e._self._c;
        return e.waplus_remove_flag
          ? e._e()
          : t("div", { staticClass: "common-bottom-href" }, [
              "pt" === e.locale
                ? t(
                    "p",
                    {
                      staticStyle: {
                        "padding-left": "13px",
                        "background-color": "rgb(249, 249, 249)",
                      },
                    },
                    [
                      t(
                        "a",
                        {
                          staticStyle: { "padding-right": "8px" },
                          attrs: { href: "#" },
                          on: { click: e.faq },
                        },
                        [e._v(" FAQ")]
                      ),
                      t(
                        "a",
                        { attrs: { href: "#" }, on: { click: e.howToUse } },
                        [e._v(" " + e._s(e.$t("how_to_t")))]
                      ),
                      e._v("   "),
                      t(
                        "a",
                        { attrs: { href: "#" }, on: { click: e.leaveReview } },
                        [e._v(" " + e._s(e.$t("leave_a_t")))]
                      ),
                      e._v("   "),
                      t(
                        "a",
                        {
                          staticStyle: {
                            padding: "0px 15px 0px 10px",
                            position: "relative",
                          },
                          attrs: { href: "#" },
                          on: { click: e.whatsapp },
                        },
                        [
                          t("img", {
                            staticStyle: {
                              width: "20px",
                              height: "20px",
                              position: "absolute",
                              top: "0",
                            },
                            attrs: { src: "icons/whatsapp.png" },
                          }),
                        ]
                      ),
                    ]
                  )
                : t("p", { staticStyle: { "padding-left": "13px" } }, [
                    e._v(" " + e._s(e.$t("help_center_t")) + ": "),
                    t(
                      "a",
                      {
                        staticStyle: { "padding-right": "8px" },
                        attrs: { href: "#" },
                        on: { click: e.faq },
                      },
                      [e._v(" FAQ")]
                    ),
                    t(
                      "a",
                      { attrs: { href: "#" }, on: { click: e.howToUse } },
                      [e._v(" " + e._s(e.$t("how_to_t")))]
                    ),
                    e._v("   "),
                    t(
                      "a",
                      { attrs: { href: "#" }, on: { click: e.leaveReview } },
                      [e._v(" " + e._s(e.$t("leave_a_t")))]
                    ),
                    e._v("   " + e._s(e.$t("share_t")) + ": "),
                    t(
                      "a",
                      {
                        staticStyle: {
                          padding: "0px 15px 0px 10px",
                          position: "relative",
                        },
                        attrs: { href: "#" },
                        on: { click: e.whatsapp },
                      },
                      [
                        t("img", {
                          staticStyle: {
                            width: "20px",
                            height: "20px",
                            position: "absolute",
                            top: "0",
                          },
                          attrs: { src: "icons/whatsapp.png" },
                        }),
                      ]
                    ),
                  ]),
            ]);
      },
      p = [],
      u = a("0196"),
      m = a("4e50");
    let g,
      h,
      _,
      f,
      x,
      b = Object(u["a"])().browser;
    "Chrome" === b
      ? ((g =
          "https://chrome.google.com/webstore/detail/waplus-crm-simple-whatsap/jmjcgjmipjiklbnfbdclkdikplgajhgc?utm_source=sender_statistics_" +
          m["b"]),
        (h =
          "https://chrome.google.com/webstore/detail/easy-sender/khfmfdepnleebhonomgihppncahojfig/reviews?utm_source=adv_" +
          m["b"]),
        (_ =
          "https://api.whatsapp.com/send?text=https://chrome.google.com/webstore/detail/easy-sender/khfmfdepnleebhonomgihppncahojfig?utm_source=share_" +
          m["b"]),
        (f =
          "https://wawebsender.com/whatsapp-tools/?utm_source=tools_sender_chrome_" +
          m["b"]),
        (x =
          "https://chrome.google.com/webstore/detail/easy-sender/khfmfdepnleebhonomgihppncahojfig/reviews?utm_source=invite_" +
          m["b"]))
      : "Edge" === b &&
        ((g =
          "https://microsoftedge.microsoft.com/addons/detail/waplus-crm-simple-whats/nhkkbpphaankeiolhcpmaemibkamionn?utm_source=sender_statistics_" +
          m["b"]),
        (h =
          "https://microsoftedge.microsoft.com/addons/detail/easy-sender-for-whatsapp-/cmecfbmdgfccibfgoddinpopochmhgof?utm_source=adv_" +
          m["b"]),
        (_ =
          "https://api.whatsapp.com/send?text=https://microsoftedge.microsoft.com/addons/detail/easy-sender-for-whatsapp-/cmecfbmdgfccibfgoddinpopochmhgof?utm_source=share_" +
          m["b"]),
        (f =
          "https://wawebsender.com/whatsapp-tools/?utm_source=tools_sender_edge_" +
          m["b"]),
        (x =
          "https://microsoftedge.microsoft.com/addons/detail/easy-sender-for-whatsapp-/cmecfbmdgfccibfgoddinpopochmhgof?utm_source=invite_" +
          m["b"]));
    var y = {
        props: {
          sendType: { type: String, default: "" },
          locale: { type: String, default: "" },
        },
        name: "CommonBottomHref",
        data() {
          return { waplus_remove_flag: m["f"] };
        },
        mounted() {},
        methods: {
          whatsapp() {
            this.$sendLog(306201), window.open(_);
          },
          howToUse() {
            this.$sendLog(305201),
              window.open("https://wawebsender.com/sender-help");
          },
          leaveReview() {
            this.$sendLog(305204), window.open(h);
          },
          support() {
            this.$sendLog(305203),
              chrome.tabs.query(
                { active: !0, currentWindow: !0 },
                function (e) {
                  chrome.storage.local.get(["zbaseConfig"], (t) => {
                    var a, o, n, s, i, l;
                    let r =
                      null !==
                        (a =
                          null === (o = t.zbaseConfig) ||
                          void 0 === o ||
                          null === (n = o.data) ||
                          void 0 === n ||
                          null === (s = n.config) ||
                          void 0 === s ||
                          null ===
                            (i = s.find((e) => "servicePhone" === e.name)) ||
                          void 0 === i ||
                          null === (l = i.params) ||
                          void 0 === l
                            ? void 0
                            : l.phone) && void 0 !== a
                        ? a
                        : "+8617891209984";
                    chrome.tabs.sendMessage(e[0].id, { openChat: r });
                  });
                }
              );
          },
          moreTool() {
            this.$sendLog(305205), window.open(f);
          },
          faq() {
            this.$sendLog(305206),
              window.open("https://wawebsender.com/whatsapp-sender#FAQ");
          },
        },
      },
      v = y,
      w = (a("cd21"), a("2877")),
      S = Object(w["a"])(v, d, p, !1, null, "6757faba", null),
      C = S.exports,
      T = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          [
            t(
              "el-row",
              { style: { height: "45px", marginBottom: "-2px" } },
              [
                t("el-col", { attrs: { span: 8 } }, [
                  t(
                    "p",
                    {
                      staticClass: "waplus-title",
                      style: {
                        fontStyle: "normal",
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: "#37B64A",
                        textAlign: "left",
                      },
                    },
                    [e._v(" " + e._s(e.waPlusSenderText))]
                  ),
                ]),
                t(
                  "el-col",
                  {
                    staticStyle: { border: "1px solid transparent" },
                    attrs: { span: 8 },
                  },
                  [
                    e.TopRotation
                      ? t("ZbaseTopAdv", {
                          attrs: { browserType: e.browserType },
                        })
                      : e._e(),
                  ],
                  1
                ),
                t(
                  "el-col",
                  { staticClass: "topText", attrs: { span: 8 } },
                  [
                    t("el-header", {
                      staticClass: "version-phone-font",
                      domProps: { textContent: e._s(e.versionText) },
                    }),
                    t("el-footer", {
                      staticClass: "version-phone-font",
                      domProps: { textContent: e._s(e.numberText) },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      k = [],
      N = a("9224"),
      P = a("0dbd"),
      $ = {
        name: "TopInfo",
        data() {
          return {
            waPlusSenderText: m["e"],
            versionText: "Version: ",
            numberText: "Number: + null",
            browserType: "Chrome",
            waplus_remove_flag: m["f"],
            TopRotation: !0,
          };
        },
        components: { ZbaseTopAdv: P["a"] },
        created: async function () {
          this.browserType = Object(u["a"])()["browser"];
          const e = this;
          (this.versionText += N.version),
            chrome.storage.local.get(["zbaseConfig", "userPhoneNum"], (t) => {
              t.zbaseConfig &&
                t.zbaseConfig.data.config &&
                t.zbaseConfig.data.config.forEach((t) => {
                  "Drainage configuration" === t.name &&
                    t.params &&
                    (e.TopRotation =
                      !t.params.TopRotation || "1" === t.params.TopRotation);
                }),
                t.userPhoneNum && (e.numberText = "Number: +" + t.userPhoneNum);
            });
        },
        methods: {},
      },
      A = $,
      D = (a("33db"), Object(w["a"])(A, T, k, !1, null, "5571cbe5", null)),
      B = D.exports,
      F = function () {
        var e = this,
          t = e._self._c;
        return t("div", [
          e.isShowPermissionTip
            ? t(
                "div",
                {
                  staticClass: "permissionTip",
                  on: { click: e.goLinkPermissionTip },
                },
                [e._v("👑 "), t("span", [e._v(e._s(e.$t("permission_tip")))])]
              )
            : e._e(),
          t(
            "div",
            { staticClass: "whatsAppNumbers send-message-background" },
            [
              t(
                "el-card",
                {
                  staticClass: "box-card whatsapp-numbers",
                  attrs: {
                    shadow: "always",
                    "body-style": { padding: "10px 10px 0 10px" },
                  },
                },
                [
                  t(
                    "div",
                    { staticClass: "text item" },
                    [
                      t(
                        "el-row",
                        { staticStyle: { height: "30px" } },
                        [
                          t("el-col", { attrs: { span: 6 } }, [
                            t("p", {
                              staticClass:
                                "send-message-card-title whatsAppTitle titleText",
                              domProps: {
                                textContent: e._s(e.whatsAppNumbersText),
                              },
                            }),
                          ]),
                        ],
                        1
                      ),
                      t("el-input", {
                        staticClass: "textareaBack",
                        attrs: {
                          slot: "reference",
                          placeholder: this.placeholderNum,
                          size: "medium",
                          clearable: "",
                        },
                        on: {
                          focus: e.handleWhatsAppNumbersFocus,
                          blur: e.handleWhatsAppNumbersBlur,
                          change: e.handleWhatsAppNumbersChange,
                        },
                        slot: "reference",
                        model: {
                          value: e.whatsAppNumbersSimple,
                          callback: function (t) {
                            e.whatsAppNumbersSimple = t;
                          },
                          expression: "whatsAppNumbersSimple",
                        },
                      }),
                      t("div", { staticClass: "remindTitle" }, [
                        "normal" === e.remindTitle
                          ? t("p", { staticClass: "remindText" }, [
                              e._v(e._s(e.$t("country_code_t"))),
                            ])
                          : e._e(),
                        "contentCheck" === e.remindTitle
                          ? t("p", { staticClass: "warnText" }, [
                              t("i", { staticClass: "exclamation" }, [
                                e._v("!"),
                              ]),
                              e._v(
                                " " +
                                  e._s(this.$t("please_enter_please_t")) +
                                  " "
                              ),
                              t(
                                "i",
                                {
                                  staticStyle: {
                                    fontWeight: "bolder",
                                    fontStyle: "normal",
                                  },
                                },
                                [e._v(e._s(this.$t("please_enter_one_t")))]
                              ),
                              e._v(e._s(this.$t("please_enter_number_t"))),
                            ])
                          : e._e(),
                        "formatCheck" === e.remindTitle
                          ? t(
                              "p",
                              { staticClass: "warnText" },
                              [
                                t("i", { staticClass: "exclamation" }, [
                                  e._v("!"),
                                ]),
                                e._v(
                                  " " + e._s(this.checkTheEnteredText) + " "
                                ),
                                t(
                                  "el-tooltip",
                                  { attrs: { placement: "top" } },
                                  [
                                    t(
                                      "div",
                                      {
                                        attrs: { slot: "content" },
                                        slot: "content",
                                      },
                                      [
                                        t("i", {
                                          staticClass: "el-icon-close",
                                          staticStyle: {
                                            color: "rgba(255, 8, 8, 100)",
                                            "margin-right": "3px",
                                          },
                                        }),
                                        t(
                                          "span",
                                          { staticStyle: { color: "#dcdfe6" } },
                                          [e._v(e._s(e.incorrectPhoneNum))]
                                        ),
                                        t("br"),
                                        t("i", {
                                          staticClass: "el-icon-check",
                                          staticStyle: {
                                            color: "rgba(79, 251, 106, 100)",
                                            "margin-right": "3px",
                                          },
                                        }),
                                        t(
                                          "span",
                                          { staticStyle: { color: "#FFFFFF" } },
                                          [e._v("+8613119140503")]
                                        ),
                                      ]
                                    ),
                                    t("i", {
                                      staticClass: "el-icon-question",
                                      staticStyle: {
                                        color: "rgba(255, 5, 5, 100)",
                                      },
                                    }),
                                  ]
                                ),
                              ],
                              1
                            )
                          : e._e(),
                      ]),
                    ],
                    1
                  ),
                ]
              ),
            ],
            1
          ),
          t(
            "div",
            { staticClass: "messageText" },
            [
              t(
                "el-card",
                {
                  staticClass: "box-card message-text",
                  attrs: {
                    shadow: "always",
                    "body-style": { padding: "10px 10px 14px 10px" },
                  },
                },
                [
                  t("p", {
                    staticClass: "send-message-card-title titleText",
                    domProps: { textContent: e._s(e.messageTextText) },
                  }),
                  t(
                    "el-select",
                    {
                      staticClass: "send-message-text-select textSelect",
                      attrs: {
                        placeholder: this.$t("select_template_t"),
                        size: "small",
                        "no-data-text": this.$t("no_data_t"),
                        clearable: "",
                      },
                      on: { change: e.handleMessageTextTemplateChange },
                      model: {
                        value: e.messageTextTemplateSimple,
                        callback: function (t) {
                          e.messageTextTemplateSimple = t;
                        },
                        expression: "messageTextTemplateSimple",
                      },
                    },
                    e._l(e.messageTextTemplateOptions, function (a, o) {
                      return t(
                        "el-option",
                        {
                          key: a.value,
                          attrs: { label: a.label, value: a.value },
                        },
                        [
                          [
                            t(
                              "span",
                              {
                                on: {
                                  click: function (t) {
                                    return e.selectTemplate(a.label);
                                  },
                                },
                              },
                              [e._v(e._s(a.label))]
                            ),
                            t("i", {
                              staticClass: "el-icon-delete",
                              on: {
                                click: function (t) {
                                  return (
                                    t.stopPropagation(),
                                    t.target !== t.currentTarget
                                      ? null
                                      : e.handleEdit(o)
                                  );
                                },
                              },
                            }),
                          ],
                        ],
                        2
                      );
                    }),
                    1
                  ),
                  t("el-button", {
                    staticClass: "send-message-save-template-btn",
                    attrs: { type: "success", size: "small" },
                    domProps: { textContent: e._s(e.saveAsTemplateText) },
                    on: { click: e.saveAsTemplateSimpleClick },
                  }),
                  t("el-input", {
                    staticClass: "textareaBack textareaForbidResize",
                    attrs: {
                      id: "text",
                      type: "textarea",
                      autosize: { minRows: 6, maxRows: 6 },
                    },
                    on: { change: e.handleMessageTextChange },
                    model: {
                      value: e.messageTextSimple,
                      callback: function (t) {
                        e.messageTextSimple = t;
                      },
                      expression: "messageTextSimple",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
          t(
            "div",
            { staticClass: "sendingSettings" },
            [
              t(
                "el-card",
                {
                  staticClass: "box-card sending-setting",
                  attrs: {
                    shadow: "always",
                    "body-style": { padding: "10px 10px 14px 10px" },
                  },
                },
                [
                  t(
                    "el-row",
                    [
                      t("el-col", { attrs: { span: 6 } }, [
                        t("span", {
                          staticClass: "send-message-card-title titleText",
                          domProps: {
                            textContent: e._s(e.sendingSettingsText),
                          },
                        }),
                      ]),
                      t(
                        "el-col",
                        {
                          staticStyle: { margin: "1px auto" },
                          attrs: { span: 16 },
                        },
                        [
                          t("span", {
                            staticClass: "send-message-common-font",
                            domProps: {
                              textContent: e._s(e.sendingSettingsNoticeText),
                            },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  t(
                    "el-row",
                    { staticStyle: { "margin-top": "23px" } },
                    [
                      t(
                        "el-col",
                        {
                          staticStyle: { "margin-top": "7px" },
                          attrs: { span: 6 },
                        },
                        [
                          t("span", {
                            staticClass: "send-message-card-title",
                            staticStyle: { color: "#c5c5c5" },
                            domProps: {
                              textContent: e._s(e.sendingIntervalText),
                            },
                          }),
                        ]
                      ),
                      t(
                        "el-col",
                        { attrs: { span: 13 } },
                        [
                          t("el-input-number", {
                            staticClass: "numSelect",
                            attrs: {
                              precision: 0,
                              size: "small",
                              min: 6,
                              max: 300,
                              label: "描述文字",
                            },
                            on: { change: e.handleMinNumChange },
                            model: {
                              value: e.minNumSimple,
                              callback: function (t) {
                                e.minNumSimple = t;
                              },
                              expression: "minNumSimple",
                            },
                          }),
                          e._v(" ~ "),
                          t("el-input-number", {
                            staticClass: "numSelect",
                            attrs: {
                              precision: 0,
                              size: "small",
                              min: 10,
                              max: 300,
                              label: "描述文字",
                            },
                            on: { change: e.handleMaxNumChange },
                            model: {
                              value: e.maxNumSimple,
                              callback: function (t) {
                                e.maxNumSimple = t;
                              },
                              expression: "maxNumSimple",
                            },
                          }),
                          t("span", {
                            staticClass: "send-message-common-font",
                            staticStyle: {
                              "font-size": "14px",
                              "margin-left": "4px",
                            },
                            domProps: { textContent: e._s(e.secondsText) },
                          }),
                        ],
                        1
                      ),
                      t(
                        "el-col",
                        {
                          staticClass: "common-success-btn",
                          style: { textAlign: "center" },
                          attrs: { span: 5 },
                        },
                        [
                          !0 === e.stopFlagSimple
                            ? t(
                                "el-button",
                                {
                                  attrs: {
                                    type: "success",
                                    plain: "",
                                    size: "small",
                                  },
                                  on: { click: e.sendClick },
                                },
                                [e._v(e._s(e.$t("send_t")) + " ")]
                              )
                            : !1 === e.stopFlagSimple
                            ? t(
                                "el-button",
                                {
                                  staticStyle: { cursor: "no-drop" },
                                  attrs: {
                                    disabled: "",
                                    type: "success",
                                    plain: "",
                                    size: "small",
                                  },
                                },
                                [e._v(e._s(e.$t("sending_t")) + " ")]
                              )
                            : "disabled" === e.stopFlagSimple
                            ? t(
                                "el-button",
                                {
                                  staticClass: "disableBtn",
                                  staticStyle: { cursor: "no-drop" },
                                  attrs: {
                                    disabled: "",
                                    type: "success",
                                    size: "small",
                                  },
                                },
                                [e._v(e._s(e.$t("send_t")) + " ")]
                              )
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      M = [];
    function z(e) {
      let t = document.querySelector(
        ".textareaBack.el-input.el-input--medium.el-input--suffix>.el-input__inner"
      );
      (e.remindTitle = "normal"),
        (t.style.borderColor = "rgb(220, 223, 230)"),
        chrome.storage.local.set({ remindTitle: "normal" });
    }
    function L(e) {
      let t = document.querySelector(
        ".textareaBackPro.el-input.el-input--medium.el-input--suffix>.el-input__inner"
      );
      (e.remindTitlePro = "normal"),
        (t.style.borderColor = "rgb(220, 223, 230)"),
        chrome.storage.local.set({ remindTitlePro: "normal" });
    }
    function E(e, t) {
      let a = document.querySelector(
        ".textareaBack.el-input.el-input--medium.el-input--suffix>.el-input__inner"
      );
      e ||
        ((t.remindTitle = "contentCheck"),
        (a.style.borderColor = "rgba(255, 5, 5, 100)"),
        chrome.storage.local.set({ remindTitle: "contentCheck" }));
    }
    function I(e, t) {
      (t.incorrectPhoneNumArr = []), (t.contentArr = []);
      let a = document.querySelector(
          ".textareaBack.el-input.el-input--medium.el-input--suffix>.el-input__inner"
        ),
        o = e.replace(/，/g, ",");
      (t.contentArr = o.split(",")),
        (t.contentArr = t.contentArr.filter((e) => "" != e)),
        t.contentArr.forEach((e) => {
          let a = e.replace(/[^0-9,+,(), ,-]/, "*"),
            o = a.includes("*");
          o && t.incorrectPhoneNumArr.push(e);
        }),
        t.incorrectPhoneNumArr.length > 0 &&
          ((t.remindTitle = "formatCheck"),
          (t.incorrectPhoneNum = t.incorrectPhoneNumArr[0]),
          (a.style.borderColor = "rgba(255, 5, 5, 100)"),
          chrome.storage.local.set({
            remindTitle: "formatCheck",
            incorrectPhoneNum: t.incorrectPhoneNumArr[0],
          }));
    }
    function V(e, t) {
      (t.incorrectPhoneNumArrPro = []), (t.contentArrPro = []);
      let a = document.querySelector(
          ".textareaBackPro.el-input.el-input--medium.el-input--suffix>.el-input__inner"
        ),
        o = e.replace(/，/g, ",");
      (t.contentArrPro = o.split(",")),
        (t.contentArrPro = t.contentArrPro.filter((e) => "" != e)),
        (t.inputPhoneNum = t.contentArrPro.length),
        chrome.storage.local.set({ inputPhoneNum: t.inputPhoneNum }),
        t.contentArrPro.forEach((e) => {
          let o = e.replace(/[^0-9,+,(), ,-]/, "*"),
            n = o.includes("*");
          n && t.incorrectPhoneNumArrPro.push(e),
            t.incorrectPhoneNumArrPro.length > 0 &&
              ((t.remindTitlePro = "formatCheck"),
              (t.inputPhoneNum = 0),
              (t.incorrectPhoneNumPro = t.incorrectPhoneNumArrPro[0]),
              (a.style.borderColor = "rgba(255, 5, 5, 100)"),
              chrome.storage.local.set({
                remindTitlePro: "formatCheck",
                incorrectPhoneNumPro: t.incorrectPhoneNumArrPro[0],
                inputPhoneNum: 0,
              }));
        });
    }
    var O = {
        name: "SendMessages",
        data() {
          return {
            whatsAppNumbersText: this.$t("whatsapp_numbers_t"),
            whatsAppNumbersSimple: "",
            messageTextText: this.$t("message_text_t"),
            messageTextTemplateSimple: "",
            messageTextTemplateOptions: [],
            saveAsTemplateText: this.$t("save_as_t"),
            messageTextSimple: "",
            sendingSettingsText: this.$t("sending_settings_t"),
            sendingSettingsNoticeText: this.$t("messages_will_t"),
            sendingIntervalText: this.$t("sending_interval_t"),
            minNumSimple: 6,
            maxNumSimple: 10,
            secondsText: this.$t("seconds_t"),
            stopFlagSimple: !0,
            sendMessageSimple: "simple",
            remindTitle: "normal",
            incorrectPhoneNum: "55555",
            safetyChecked: !1,
            simpleChangeNum: 0,
            incorrectPhoneNumArr: [],
            contentArr: [],
            extensionName: m["b"],
            placeholderNum: m["d"],
            waplus_remove_flag: m["f"],
            million_leads_t: "",
            million_leads_link: "",
            checkTheEnteredText: this.$t("check_the_entered_t"),
            isShowPermissionTip: !1,
            PermissionTipLink: "",
          };
        },
        created: async function () {
          const e = this;
          chrome.storage.local.get(["zbaseConfig"], (t) => {
            var a, o, n, s;
            let i =
                null === (a = t.zbaseConfig) ||
                void 0 === a ||
                null === (o = a.data) ||
                void 0 === o ||
                null === (n = o.config) ||
                void 0 === n ||
                null === (s = n.find((e) => "bulkShunt" === e.name)) ||
                void 0 === s
                  ? void 0
                  : s.params.tip,
              l = (i && i[e.$i18n.locale]) || {};
            l.show &&
              -1 !==
                ["ar", "en", "es", "pt-PT", "pt-BR"].indexOf(e.$i18n.locale) &&
              ((e.isShowPermissionTip = !0), (e.PermissionTipLink = l.url));
          }),
            chrome.storage.local.get(
              [
                "whatsAppNumbersSimple",
                "minNumSimple",
                "maxNumSimple",
                "messageTextTemplateSimple",
                "remindTitle",
                "incorrectPhoneNum",
                "simpleChangeNum",
                "messageTextTemplateOptions",
                "messageTextSimple",
                "stopFlagSimple",
                "zbaseConfig",
              ],
              function (t) {
                if (
                  ((e.whatsAppNumbersSimple = t.whatsAppNumbersSimple),
                  (e.minNumSimple = t.minNumSimple || 6),
                  (e.maxNumSimple = t.maxNumSimple || 10),
                  (e.messageTextTemplateSimple = t.messageTextTemplateSimple),
                  (e.remindTitle = t.remindTitle || "normal"),
                  (e.incorrectPhoneNum = t.incorrectPhoneNum || ""),
                  (e.simpleChangeNum = t.simpleChangeNum || 0),
                  "normal" !== e.remindTitle)
                ) {
                  let e = document.querySelector(
                    ".textareaBack.el-input.el-input--medium.el-input--suffix>.el-input__inner"
                  );
                  e.style.borderColor = "rgba(255, 5, 5, 100)";
                }
                (e.messageTextTemplateOptions =
                  t.messageTextTemplateOptions || [
                    {
                      value: e.$t("help_there_t"),
                      label: e.$t("help_there_t"),
                    },
                  ]),
                  void 0 === t.messageTextSimple
                    ? (e.messageTextSimple = e.$t("help_there_t"))
                    : (e.messageTextSimple = t.messageTextSimple),
                  void 0 === t.stopFlagSimple
                    ? (e.stopFlagSimple = !0)
                    : (e.stopFlagSimple = t.stopFlagSimple);
                const a = { stopFlagSimple: e.stopFlagSimple };
                e.$parent.sendDataPopToContent(a);
              }
            );
        },
        methods: {
          goLinkPermissionTip() {
            window.open(this.PermissionTipLink);
          },
          goLinkLeads() {
            window.open(
              this.million_leads_link +
                "?utm_source=sender_promote_" +
                this.extensionName
            );
          },
          handleWhatsAppNumbersFocus() {
            let e = document.querySelector(
              ".textareaBack.el-input.el-input--medium.el-input--suffix>.el-input__inner"
            );
            (this.remindTitle = "normal"),
              (e.style.borderColor = "rgb(220, 223, 230)");
          },
          handleWhatsAppNumbersBlur(e) {},
          handleWhatsAppNumbersChange(e) {
            e
              ? (z(this),
                I(e, this),
                "normal" !== this.remindTitle
                  ? this.$sendLog(301302, {
                      s_content: this.contentArr,
                      s_incorrect_phone_num: this.incorrectPhoneNumArr,
                      s_status: 2,
                    })
                  : this.$sendLog(301303))
              : (E(e, this),
                this.$sendLog(301302, {
                  s_content: [],
                  s_incorrect_phone_num: [],
                  s_status: 1,
                })),
              this.simpleChangeNum++,
              chrome.storage.local.set({
                whatsAppNumbersSimple: e,
                simpleChangeNum: this.simpleChangeNum - 1,
              });
          },
          handleEdit(e) {
            this.messageTextTemplateOptions.splice(e, 1),
              chrome.storage.local.set({
                messageTextTemplateOptions: this.messageTextTemplateOptions,
              });
          },
          handleMessageTextTemplateChange(e) {
            (this.messageTextSimple = e),
              chrome.storage.local.set({
                messageTextSimple: this.messageTextSimple,
                messageTextTemplateSimple: this.messageTextTemplateSimple,
              });
          },
          selectTemplate(e) {
            (this.messageTextSimple = e),
              chrome.storage.local.set({
                messageTextSimple: this.messageTextSimple,
                messageTextTemplateSimple: this.messageTextTemplateSimple,
              });
          },
          saveAsTemplateSimpleClick() {
            if (
              (this.$sendLog(301201),
              this.messageTextSimple.replace(/\s/g, "").length)
            ) {
              let e = {
                  value: this.messageTextSimple,
                  label: this.messageTextSimple,
                },
                t = 0;
              for (let a of this.messageTextTemplateOptions)
                a.value === e.value && (t = 1);
              t
                ? this.$confirm("", this.$t("the_template_t"), {
                    customClass: "emptyContentTemplate",
                    showConfirmButton: !1,
                    showCancelButton: !1,
                    center: !0,
                    type: "warning",
                  })
                : (document
                    .getElementsByClassName("send-message-save-template-btn")[0]
                    .style.setProperty("animation", "none"),
                  document
                    .getElementsByClassName("send-message-save-template-btn")[0]
                    .style.setProperty("-webkit-animation", "none"),
                  setTimeout(function () {
                    document
                      .getElementsByClassName(
                        "send-message-save-template-btn"
                      )[0]
                      .style.setProperty("animation", "mymove 1s"),
                      document
                        .getElementsByClassName(
                          "send-message-save-template-btn"
                        )[0]
                        .style.setProperty("-webkit-animation", "mymove 1s");
                    const e =
                        "@keyframes mymove {50% {background: #37B64B;color: #FFFFFF}}",
                      t =
                        "@-webkit-keyframes mymove {50% {background: #37B64B;color: #FFFFFF}}",
                      a = document.createElement("style");
                    (a.type = "text/css"),
                      (a.innerHTML = e),
                      document
                        .getElementsByClassName(
                          "send-message-save-template-btn"
                        )[0]
                        .appendChild(a),
                      (a.innerHTML = t),
                      document
                        .getElementsByClassName(
                          "send-message-save-template-btn"
                        )[0]
                        .appendChild(a);
                  }, 1),
                  this.messageTextTemplateOptions.push(e));
            }
            chrome.storage.local.set({
              messageTextTemplateOptions: this.messageTextTemplateOptions,
            });
          },
          handleMessageTextChange(e) {
            chrome.storage.local.set({ messageTextSimple: e });
          },
          handleMinNumChange(e) {
            this.$nextTick(() => {
              e >= this.maxNumSimple && (this.minNumSimple = this.maxNumSimple),
                chrome.storage.local.set({ minNumSimple: this.minNumSimple });
            });
          },
          handleMaxNumChange(e) {
            this.$nextTick(() => {
              e <= this.minNumSimple && (this.maxNumSimple = this.minNumSimple),
                chrome.storage.local.set({ maxNumSimple: this.maxNumSimple });
            });
          },
          async sendClick() {
            let e;
            if (
              (this.$parent.firstSendTime ||
                chrome.storage.local.set({
                  firstSendTime: Math.round(new Date() / 1e3),
                }),
              this.$sendLog(301202),
              this.$parent.updateIsShowContinueBtn(!0),
              (e = this.messageTextSimple
                ? this.messageTextSimple.trim()
                : this.messageTextSimple),
              e)
            )
              if (this.whatsAppNumbersSimple) {
                if ("normal" !== this.remindTitle) return !1;
                z(this);
                let e = this.$parent.dailySendNums;
                const { isReachSendLimit: t, showConfirmTitle: a } =
                  this.$checkDailySendNums(e);
                if (t) {
                  let e = "";
                  return (
                    0 === a.indexOf("First time")
                      ? ((e = a.replace(
                          "First time limit has been reached(50 messages)\n\n300 messages are available at ",
                          this.$t("first_time_1_t")
                        )),
                        (e = e.replace(".", this.$t("first_time_2_t"))))
                      : ((e = a.replace(
                          "300 messages are available at ",
                          this.$t("second_time_1_t")
                        )),
                        (e = e.replace(".", this.$t("second_time_2_t")))),
                    void this.$confirm(e, "", {
                      confirmButtonText: "OK",
                      type: "warning",
                      showClose: !1,
                      showCancelButton: !1,
                      customClass: "daily-msg-send-warning",
                    })
                  );
                }
                (this.$parent.sendMessageType = this.sendMessageSimple),
                  this.$sendLog(301304),
                  (this.simpleChangeNum = 0),
                  chrome.storage.local.remove([
                    "simpleChangeNum",
                    "confirmSendData",
                    "confirmSetData",
                  ]),
                  await this.$parent.handleConfirmClick();
                const o = this;
                chrome.storage.local.get(
                  [
                    "isShowSafetyWarningFlagValue",
                    "dialogVisible",
                    "confirmSetData",
                    "confirmSendData",
                  ],
                  (e) => {
                    e.isShowSafetyWarningFlagValue ||
                    void 0 == e.isShowSafetyWarningFlagValue
                      ? (o.$parent.isShowSafetyWarningFlagValue = !0)
                      : ((o.$parent.activeName = "statistics"),
                        !1 === e.dialogVisible
                          ? (e.confirmSetData &&
                              chrome.storage.local.set(e.confirmSetData),
                            "object" === typeof e.confirmSendData &&
                              null !== e.confirmSendData &&
                              o.$parent.sendDataPopToContent(e.confirmSendData))
                          : (o.$parent.dialogVisible = !0));
                  }
                );
              } else E(this.whatsAppNumbersSimple, this);
            else
              this.$confirm("", this.$t("please_enter_a_t"), {
                customClass: "emptyContent",
                showConfirmButton: !1,
                showCancelButton: !1,
                center: !0,
                type: "warning",
              });
          },
        },
      },
      j = O,
      W = (a("d01b"), Object(w["a"])(j, F, M, !1, null, "28c7e490", null)),
      R = W.exports,
      G = function () {
        var e = this,
          t = e._self._c;
        return t("div", [
          e.isShowPermissionTip
            ? t(
                "div",
                {
                  staticClass: "permissionTip",
                  on: { click: e.goLinkPermissionTip },
                },
                [e._v("👑 "), t("span", [e._v(e._s(e.$t("permission_tip")))])]
              )
            : e._e(),
          t(
            "div",
            [
              t(
                "el-card",
                {
                  staticClass: "whatsapp-numbers",
                  attrs: {
                    shadow: "always",
                    "body-style": { padding: "10px 10px 0 10px" },
                  },
                },
                [
                  t(
                    "div",
                    [
                      t(
                        "div",
                        {
                          staticClass: "send-message-card-title whatsAppTitle",
                        },
                        [
                          t("span", {
                            staticClass: "titleText",
                            domProps: {
                              textContent: e._s(e.whatsAppNumbersText),
                            },
                          }),
                          "content" === e.inputPhoneNumFlag
                            ? t(
                                "span",
                                {
                                  class: {
                                    warnNumText: 0 === e.inputPhoneNum,
                                    normalNumText: e.inputPhoneNum,
                                  },
                                },
                                [
                                  t("span", {
                                    staticClass: "numText",
                                    domProps: {
                                      textContent: e._s(e.inputPhoneNum),
                                    },
                                  }),
                                  t(
                                    "span",
                                    { staticStyle: { "margin-right": "4px" } },
                                    [e._v("Numbers")]
                                  ),
                                ]
                              )
                            : e._e(),
                        ]
                      ),
                      t("div", { staticClass: "remindText" }, [
                        t("div", [e._v(e._s(e.$t("country_code_t")))]),
                      ]),
                      t("el-input", {
                        staticClass: "textareaBackPro",
                        attrs: {
                          slot: "reference",
                          placeholder: this.placeholderNum,
                          size: "medium",
                          clearable: "",
                        },
                        on: {
                          change: e.handleWhatsAppNumbersChange,
                          focus: e.handleWhatsAppNumbersFocus,
                          blur: e.handleWhatsAppNumbersBlur,
                        },
                        slot: "reference",
                        model: {
                          value: e.whatsAppNumbers,
                          callback: function (t) {
                            e.whatsAppNumbers = t;
                          },
                          expression: "whatsAppNumbers",
                        },
                      }),
                      t("div", { staticClass: "remindTitle" }, [
                        "contentCheck" === e.remindTitlePro
                          ? t("p", { staticClass: "warnText" }, [
                              t("i", { staticClass: "exclamation" }, [
                                e._v("!"),
                              ]),
                              e._v(
                                " " +
                                  e._s(this.$t("please_enter_please_t")) +
                                  " "
                              ),
                              t(
                                "i",
                                {
                                  staticStyle: {
                                    fontWeight: "bolder",
                                    fontStyle: "normal",
                                  },
                                },
                                [e._v(e._s(this.$t("please_enter_one_t")))]
                              ),
                              e._v(e._s(this.$t("please_enter_number_t"))),
                            ])
                          : e._e(),
                        "formatCheck" === e.remindTitlePro
                          ? t(
                              "p",
                              { staticClass: "warnText" },
                              [
                                t("i", { staticClass: "exclamation" }, [
                                  e._v("!"),
                                ]),
                                e._v(
                                  " " + e._s(this.checkTheEnteredText) + " "
                                ),
                                t(
                                  "el-tooltip",
                                  { attrs: { placement: "top" } },
                                  [
                                    t(
                                      "div",
                                      {
                                        attrs: { slot: "content" },
                                        slot: "content",
                                      },
                                      [
                                        t("i", {
                                          staticClass: "el-icon-close",
                                          staticStyle: {
                                            color: "rgba(255, 8, 8, 100)",
                                            "margin-right": "3px",
                                          },
                                        }),
                                        t(
                                          "span",
                                          { staticStyle: { color: "#dcdfe6" } },
                                          [e._v(e._s(e.incorrectPhoneNumPro))]
                                        ),
                                        t("br"),
                                        t("i", {
                                          staticClass: "el-icon-check",
                                          staticStyle: {
                                            color: "rgba(79, 251, 106, 100)",
                                            "margin-right": "3px",
                                          },
                                        }),
                                        t(
                                          "span",
                                          { staticStyle: { color: "#FFFFFF" } },
                                          [e._v("+8613119140503")]
                                        ),
                                      ]
                                    ),
                                    t("i", {
                                      staticClass: "el-icon-question",
                                      staticStyle: {
                                        color: "rgba(255, 5, 5, 100)",
                                      },
                                    }),
                                  ]
                                ),
                              ],
                              1
                            )
                          : e._e(),
                      ]),
                      t(
                        "div",
                        {
                          staticClass:
                            "send-message-card-title whatsAppTitle excelTitle",
                        },
                        [
                          t("span", {
                            staticClass: "titleText",
                            domProps: {
                              textContent: e._s(e.whatsAppNumbersExcelText),
                            },
                          }),
                          e.uploadExcelValue
                            ? e._e()
                            : t(
                                "span",
                                {
                                  class: {
                                    warnNumText: 0 === e.excelNumbersText,
                                    normalNumText: e.excelNumbersText,
                                  },
                                },
                                [
                                  t("span", {
                                    staticClass: "numText",
                                    domProps: {
                                      textContent: e._s(e.excelNumbersText),
                                    },
                                  }),
                                  t(
                                    "span",
                                    { staticStyle: { "margin-right": "4px" } },
                                    [e._v("Numbers")]
                                  ),
                                  t("el-button", {
                                    style: {
                                      padding: "0",
                                      fontSize: "16px",
                                      color:
                                        0 == e.excelNumbersText
                                          ? "rgba(255, 4, 5, 100)"
                                          : "rgba(54, 183, 74, 100)",
                                    },
                                    attrs: {
                                      type: "text",
                                      icon: "el-icon-delete",
                                    },
                                    on: { click: e.deleteExcelClick },
                                  }),
                                ],
                                1
                              ),
                        ]
                      ),
                      t("div", { staticClass: "remindText" }, [
                        t("div", [
                          t("i", { staticClass: "serialNum" }, [e._v("①")]),
                          e._v(
                            " " + e._s(e.$t("download_excel_template_t")) + "；"
                          ),
                          t("i", { staticClass: "serialNum" }, [e._v("②")]),
                          e._v(" " + e._s(e.$t("fill_it_t")) + "；"),
                          t("i", { staticClass: "serialNum" }, [e._v("③")]),
                          e._v(" " + e._s(e.$t("upload_excel_t")) + "  "),
                          e.waplus_remove_flag
                            ? e._e()
                            : t(
                                "a",
                                {
                                  attrs: { href: "#" },
                                  on: { click: e.howToUse },
                                },
                                [e._v(e._s(e.$t("how_to_use_t")))]
                              ),
                        ]),
                      ]),
                      t(
                        "el-row",
                        { attrs: { gutter: 20 } },
                        [
                          t(
                            "el-col",
                            { attrs: { span: 12 } },
                            [
                              t("el-button", {
                                staticClass: "excelBtn",
                                attrs: { size: "small", type: "success" },
                                domProps: {
                                  textContent: e._s(e.downloadTemplateText),
                                },
                                on: { click: e.downloadTemplateClick },
                              }),
                            ],
                            1
                          ),
                          t(
                            "el-col",
                            { attrs: { span: 12 } },
                            [
                              t(
                                "el-upload",
                                {
                                  staticStyle: { "text-align": "left" },
                                  attrs: {
                                    action: "",
                                    accept:
                                      "application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
                                    "auto-upload": !1,
                                    multiple: !1,
                                    "on-change": e.uploadExcelClick,
                                    limit: 2,
                                    "show-file-list": !1,
                                  },
                                },
                                [
                                  t("el-button", {
                                    staticClass: "excelBtn",
                                    attrs: { size: "small", type: "success" },
                                    domProps: {
                                      textContent: e._s(e.uploadExcelText),
                                    },
                                    on: { click: e.uploadExcelClickLog },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      t("div", { staticClass: "remindTitle" }, [
                        e.uploadExcelValue || 0 !== e.excelNumbersText
                          ? e._e()
                          : t(
                              "p",
                              {
                                staticClass: "warnText",
                                staticStyle: {
                                  "margin-top": "3px",
                                  height: "auto",
                                },
                              },
                              [
                                t("i", { staticClass: "exclamation" }, [
                                  e._v("!"),
                                ]),
                                e._v(" " + e._s(e.$t("please_check_t")) + " "),
                                t(
                                  "el-tooltip",
                                  { attrs: { placement: "top" } },
                                  [
                                    t(
                                      "div",
                                      {
                                        attrs: { slot: "content" },
                                        slot: "content",
                                      },
                                      [
                                        t("span", [
                                          e._v("① download "),
                                          t("i", { staticClass: "hoverFont" }, [
                                            e._v("Excel Template"),
                                          ]),
                                          e._v(";"),
                                        ]),
                                        t("br"),
                                        t("span", [e._v("② fill it;")]),
                                        t("br"),
                                        t("span", [
                                          e._v("③ "),
                                          t("i", { staticClass: "hoverFont" }, [
                                            e._v("Upload Excel"),
                                          ]),
                                          e._v("."),
                                        ]),
                                      ]
                                    ),
                                    t("i", {
                                      staticClass: "el-icon-question",
                                      staticStyle: {
                                        color: "rgba(255, 5, 5, 100)",
                                      },
                                    }),
                                  ]
                                ),
                              ],
                              1
                            ),
                      ]),
                      t("div", { staticClass: "sendToGroup whatsAppTitle" }, [
                        t("span", {
                          staticClass: "titleText",
                          domProps: { textContent: e._s(e.sendToGroupText) },
                        }),
                        "normal" !== e.groupConcats
                          ? t(
                              "span",
                              {
                                class: {
                                  warnNumText: 0 === e.groupMembersNum,
                                  normalNumText: e.groupMembersNum,
                                },
                              },
                              [
                                t("span", {
                                  staticClass: "numText",
                                  domProps: {
                                    textContent: e._s(e.groupMembersNum),
                                  },
                                }),
                                t(
                                  "span",
                                  { staticStyle: { "margin-right": "4px" } },
                                  [e._v("Numbers")]
                                ),
                                t("el-button", {
                                  style: {
                                    padding: "0",
                                    fontSize: "16px",
                                    color:
                                      0 === e.groupMembersNum
                                        ? "rgba(255, 4, 5, 100)"
                                        : "rgba(54, 183, 74, 100)",
                                  },
                                  attrs: {
                                    type: "text",
                                    icon: "el-icon-delete",
                                  },
                                  on: { click: e.deleteGroupClick },
                                }),
                              ],
                              1
                            )
                          : e._e(),
                      ]),
                      t(
                        "el-row",
                        { style: { margin: "4px auto 17px auto" } },
                        [
                          t(
                            "el-col",
                            { attrs: { span: 24 } },
                            [
                              t(
                                "el-select",
                                {
                                  staticClass: "send-message-wan-line-select",
                                  class:
                                    0 === e.groupMembersNum &&
                                    "normal" !== e.groupConcats
                                      ? "textareaBackProWarn"
                                      : "textareaBackPro",
                                  attrs: {
                                    placeholder: this.$t(
                                      "select_joined_send_t"
                                    ),
                                    size: "mini",
                                    "no-data-text": this.$t("no_data_t"),
                                  },
                                  on: {
                                    change: e.handleGroupChange,
                                    "visible-change": e.handleGroupChangeLog,
                                  },
                                  model: {
                                    value: e.groupInfo,
                                    callback: function (t) {
                                      e.groupInfo = t;
                                    },
                                    expression: "groupInfo",
                                  },
                                },
                                e._l(e.groupOptions, function (e) {
                                  return t("el-option", {
                                    key: e.value,
                                    attrs: { label: e.label, value: e.value },
                                  });
                                }),
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      t(
                        "div",
                        {
                          staticClass: "sendToGroup whatsAppTitle",
                          on: { click: e.buttonAttachmentsChange },
                        },
                        [
                          t("span", {
                            staticClass: "titleText",
                            domProps: { textContent: e._s(e.sendToLabelText) },
                          }),
                          t(
                            "span",
                            {
                              staticStyle: {
                                "margin-left": "10px",
                                "font-size": "12px",
                                "background-color": "rgb(250,240,240)",
                                color: "red",
                                padding: "0 10px",
                                "border-radius": "5px",
                                "line-height": "18px",
                                cursor: "pointer",
                              },
                            },
                            [e._v(" " + e._s(e.$t("pay_version")) + " ")]
                          ),
                        ]
                      ),
                      t(
                        "el-row",
                        {
                          style: { margin: "4px auto 17px auto" },
                          on: { click: e.buttonAttachmentsChange },
                        },
                        [
                          t(
                            "el-col",
                            { attrs: { span: 24 } },
                            [
                              t("el-select", {
                                staticClass:
                                  "send-message-wan-line-select textareaBackPro",
                                attrs: {
                                  placeholder: this.$t(
                                    "select_joined_send_label"
                                  ),
                                  size: "mini",
                                  disabled: "",
                                },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      "normal" !== e.groupConcats && 0 === e.groupMembersNum
                        ? t(
                            "div",
                            { staticClass: "remindTitle sendGroupRemind" },
                            [
                              t("div", { staticClass: "warnText" }, [
                                t("i", { staticClass: "exclamation" }, [
                                  e._v("!"),
                                ]),
                                e._v(" You were removed from the group chat."),
                              ]),
                            ]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ]
              ),
              t(
                "div",
                { staticClass: "secondMdule" },
                [
                  t(
                    "el-card",
                    {
                      staticClass: "messageText",
                      attrs: {
                        shadow: "always",
                        "body-style": { padding: "10px 10px 12px 10px" },
                      },
                    },
                    [
                      t("p", {
                        staticClass: "msgText titleText",
                        domProps: { textContent: e._s(e.messageTextText) },
                      }),
                      t(
                        "el-select",
                        {
                          staticClass: "textSelect",
                          staticStyle: {
                            "margin-bottom": "5px",
                            "margin-top": "3px",
                            width: "409px",
                          },
                          attrs: {
                            placeholder: this.$t("select_template_t"),
                            size: "small",
                            "no-data-text": this.$t("no_data_t"),
                            clearable: "",
                          },
                          on: {
                            "visible-change": e.selectedTemplateChange,
                            change: e.handleMessageTextTemplateChange,
                          },
                          model: {
                            value: e.messageTextTemplate,
                            callback: function (t) {
                              e.messageTextTemplate = t;
                            },
                            expression: "messageTextTemplate",
                          },
                        },
                        e._l(e.messageTextTemplateOptions, function (a, o) {
                          return t(
                            "el-option",
                            {
                              key: a.value,
                              attrs: { value: a.value, label: a.label },
                            },
                            [
                              [
                                t(
                                  "span",
                                  {
                                    on: {
                                      click: function (t) {
                                        return e.selectTemplate(a.label);
                                      },
                                    },
                                  },
                                  [e._v(e._s(a.label))]
                                ),
                                t("i", {
                                  staticClass: "el-icon-delete",
                                  on: {
                                    click: function (t) {
                                      return (
                                        t.stopPropagation(),
                                        t.target !== t.currentTarget
                                          ? null
                                          : e.handleEdit(o)
                                      );
                                    },
                                  },
                                }),
                              ],
                            ],
                            2
                          );
                        }),
                        1
                      ),
                      t(
                        "el-button",
                        {
                          staticClass: "saveTemplateBtn",
                          attrs: { type: "success" },
                          domProps: { textContent: e._s(e.saveAsTemplateText) },
                          on: { click: e.saveAsTemplateClick },
                        },
                        [e._v("x ")]
                      ),
                      e.uploadExcelValue ||
                      (!e.uploadExcelValue && e.excelNumbersText <= 0)
                        ? t(
                            "div",
                            {
                              staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                margin: "0 0 3px 5px",
                              },
                            },
                            [
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    color: "#5DAE50",
                                    "font-size": "12px",
                                    "align-self": "baseline",
                                    "margin-top": "8px",
                                    "white-space": "nowrap",
                                  },
                                },
                                [e._v(e._s(e.$t("personalized_t")))]
                              ),
                              t(
                                "el-button",
                                {
                                  staticStyle: {
                                    color: "white",
                                    "background-color": "#5DAE50",
                                    height: "18px",
                                    "line-height": "0",
                                    "font-size": "12px",
                                    padding: "10px 20px",
                                    margin: "5px",
                                  },
                                  attrs: { type: "success" },
                                  on: { click: e.placeholderClick },
                                },
                                [e._v("WhatsApp Number")]
                              ),
                              e.waplus_remove_flag
                                ? e._e()
                                : t(
                                    "a",
                                    {
                                      staticStyle: { "margin-left": "10px" },
                                      attrs: { href: "#" },
                                      on: {
                                        click: e.howToUsePersonalizedFiles,
                                      },
                                    },
                                    [
                                      e._v(
                                        e._s(e.$t("how_to_use_personalized_t"))
                                      ),
                                    ]
                                  ),
                            ],
                            1
                          )
                        : t(
                            "div",
                            {
                              staticStyle: {
                                display: "flex",
                                "align-items": "center",
                                margin: "0 0 3px 5px",
                              },
                            },
                            [
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    color: "#5DAE50",
                                    "font-size": "12px",
                                    "align-self": "baseline",
                                    "margin-top": "8px",
                                    "white-space": "nowrap",
                                  },
                                },
                                [e._v(e._s(e.$t("personalized_t")))]
                              ),
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    display: "flex",
                                    "flex-wrap": "wrap",
                                  },
                                },
                                e._l(e.excelRows, function (a, o) {
                                  return t(
                                    "el-button",
                                    {
                                      key: o,
                                      staticStyle: {
                                        color: "white",
                                        "background-color": "#5DAE50",
                                        height: "18px",
                                        "line-height": "0",
                                        "font-size": "12px",
                                        padding: "10px 20px",
                                        margin: "5px",
                                      },
                                      attrs: { type: "success" },
                                      on: { click: e.placeholderClick },
                                    },
                                    [e._v(e._s(a))]
                                  );
                                }),
                                1
                              ),
                            ]
                          ),
                      t(
                        "div",
                        { staticClass: "textareaContainer" },
                        [
                          t("el-input", {
                            staticClass: "textareaBackPro",
                            attrs: {
                              id: "text",
                              type: "textarea",
                              autosize: { minRows: 5, maxRows: 10 },
                            },
                            on: { change: e.handleMessageTextChange },
                            model: {
                              value: e.messageText,
                              callback: function (t) {
                                e.messageText = t;
                              },
                              expression: "messageText",
                            },
                          }),
                          t(
                            "el-container",
                            [
                              t(
                                "el-aside",
                                {
                                  staticClass: "switchBack",
                                  staticStyle: {
                                    padding: "0 5px 5px 0",
                                    "text-align": "right",
                                  },
                                },
                                [
                                  t("el-button", {
                                    staticClass: "textareaBtn",
                                    attrs: { size: "small", type: "success" },
                                    domProps: {
                                      textContent: e._s(
                                        this.$t("apologize_for_t")
                                      ),
                                    },
                                    on: {
                                      click: e.handleApologizeForBotherClick,
                                    },
                                  }),
                                  t("el-button", {
                                    staticClass: "textareaBtn",
                                    attrs: { size: "small", type: "success" },
                                    domProps: {
                                      textContent: e._s(
                                        this.$t("add_timestamp_t")
                                      ),
                                    },
                                    on: { click: e.handleTimeStampClick },
                                  }),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      t(
                        "el-container",
                        { staticStyle: { height: "35px" } },
                        [
                          t(
                            "el-aside",
                            {
                              staticClass: "switchBack",
                              staticStyle: {
                                "font-style": "normal",
                                "font-size": "large",
                                "font-weight": "normal",
                                color: "#37b64a",
                                "text-align": "left",
                                "background-color": "#ffffff",
                                "line-height": "35px",
                                "padding-left": "5px",
                              },
                              attrs: { width: "43.1%" },
                            },
                            [
                              e.sendSilentSendValue
                                ? t("el-switch", {
                                    staticClass: "switch",
                                    attrs: {
                                      "active-text":
                                        this.$t("send_attachments_t"),
                                      disabled: "",
                                    },
                                    on: { change: e.handleAttachmentsChange },
                                    model: {
                                      value: e.sendAttachmentsValue,
                                      callback: function (t) {
                                        e.sendAttachmentsValue = t;
                                      },
                                      expression: "sendAttachmentsValue",
                                    },
                                  })
                                : t("el-switch", {
                                    staticClass: "switch",
                                    attrs: {
                                      "active-text":
                                        this.$t("send_attachments_t"),
                                    },
                                    on: { change: e.handleAttachmentsChange },
                                    model: {
                                      value: e.sendAttachmentsValue,
                                      callback: function (t) {
                                        e.sendAttachmentsValue = t;
                                      },
                                      expression: "sendAttachmentsValue",
                                    },
                                  }),
                            ],
                            1
                          ),
                          t(
                            "el-main",
                            {
                              staticClass: "radioBack",
                              staticStyle: {
                                "text-align": "left",
                                padding: "0",
                                "background-color": "#ffffff",
                                "line-height": "35px",
                              },
                            },
                            [
                              e.sendAttachmentsValue
                                ? t(
                                    "el-radio-group",
                                    {
                                      attrs: {
                                        size: "small",
                                        "text-color": "rgba(68, 187, 0, 100)",
                                      },
                                      on: { change: e.handleImgDocChange },
                                      model: {
                                        value: e.radio,
                                        callback: function (t) {
                                          e.radio = t;
                                        },
                                        expression: "radio",
                                      },
                                    },
                                    [
                                      t(
                                        "el-radio",
                                        {
                                          attrs: {
                                            label: "Image",
                                            disabled:
                                              "Image" !== this.radio &&
                                              "" !== this.radio &&
                                              "Contact" !== this.radio,
                                          },
                                          nativeOn: {
                                            click: function (t) {
                                              return e.attachmentBtn("img");
                                            },
                                          },
                                        },
                                        [e._v(e._s(e.$t("image_t")) + " ")]
                                      ),
                                      t(
                                        "el-radio",
                                        {
                                          attrs: {
                                            label: "Video",
                                            disabled:
                                              "Video" !== this.radio &&
                                              "" !== this.radio &&
                                              "Contact" !== this.radio,
                                          },
                                          nativeOn: {
                                            click: function (t) {
                                              return e.attachmentBtn("video");
                                            },
                                          },
                                        },
                                        [e._v(e._s(e.$t("video_t")) + " ")]
                                      ),
                                      t(
                                        "el-radio",
                                        {
                                          attrs: {
                                            label: "Document",
                                            disabled:
                                              "Document" !== this.radio &&
                                              "" !== this.radio &&
                                              "Contact" !== this.radio,
                                          },
                                          nativeOn: {
                                            click: function (t) {
                                              return e.attachmentBtn("doc");
                                            },
                                          },
                                        },
                                        [e._v(e._s(e.$t("document_t")) + " ")]
                                      ),
                                      t(
                                        "el-radio",
                                        {
                                          attrs: {
                                            label: "Contact",
                                            disabled:
                                              "Contact" !== this.radio &&
                                              "" !== this.radio,
                                          },
                                          nativeOn: {
                                            click: function (t) {
                                              return e.attachmentBtn("con");
                                            },
                                          },
                                        },
                                        [e._v(e._s(e.$t("contact_t")) + " ")]
                                      ),
                                    ],
                                    1
                                  )
                                : t(
                                    "el-radio-group",
                                    {
                                      attrs: { size: "small", disabled: "" },
                                      on: { change: e.handleImgDocChange },
                                      model: {
                                        value: e.radio,
                                        callback: function (t) {
                                          e.radio = t;
                                        },
                                        expression: "radio",
                                      },
                                    },
                                    [
                                      t(
                                        "el-radio",
                                        { attrs: { label: "Image" } },
                                        [e._v(e._s(e.$t("image_t")))]
                                      ),
                                      t(
                                        "el-radio",
                                        { attrs: { label: "Video" } },
                                        [e._v(e._s(e.$t("video_t")))]
                                      ),
                                      t(
                                        "el-radio",
                                        { attrs: { label: "Document" } },
                                        [e._v(e._s(e.$t("document_t")))]
                                      ),
                                      t(
                                        "el-radio",
                                        { attrs: { label: "Contact" } },
                                        [e._v(e._s(e.$t("contact_t")))]
                                      ),
                                    ],
                                    1
                                  ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      e.attachmentDivHtml && e.radio
                        ? t(
                            "div",
                            { staticStyle: { display: "flex", width: "95%" } },
                            [
                              t("div", { staticStyle: { flex: "42.5" } }),
                              t(
                                "div",
                                {
                                  staticStyle: {
                                    flex: "51",
                                    "background-color": "#F1F1F1",
                                    display: "flex",
                                  },
                                },
                                [
                                  t("div", {
                                    staticStyle: {
                                      flex: "1",
                                      padding: "5px 0 3px 3px",
                                    },
                                    domProps: {
                                      innerHTML: e._s(e.attachmentDivHtml),
                                    },
                                  }),
                                  t("el-button", {
                                    style: {
                                      padding: "0 3px",
                                      fontSize: "16px",
                                      color: "#5DAE50",
                                      backgroundColor: "#DCE8DA",
                                    },
                                    attrs: {
                                      type: "text",
                                      icon: "el-icon-delete",
                                    },
                                    on: { click: e.deleteAttachmentClick },
                                  }),
                                ],
                                1
                              ),
                            ]
                          )
                        : e._e(),
                      e.wowButton
                        ? t(
                            "el-container",
                            { staticStyle: { height: "35px" } },
                            [
                              t(
                                "div",
                                {
                                  staticStyle: { flex: "1", display: "flex" },
                                  on: { click: e.buttonAttachmentsChange },
                                },
                                [
                                  t(
                                    "el-aside",
                                    {
                                      staticClass: "switchBack",
                                      staticStyle: {
                                        "font-style": "normal",
                                        "font-size": "large",
                                        "font-weight": "normal",
                                        color: "#37b64a",
                                        "text-align": "left",
                                        "background-color": "#ffffff",
                                        "line-height": "35px",
                                        "padding-left": "5px",
                                        position: "relative",
                                      },
                                      attrs: { width: "55.1%" },
                                    },
                                    [
                                      t("el-switch", {
                                        staticClass: "switch",
                                        attrs: {
                                          "active-text": this.$t(
                                            "button_attachments_t"
                                          ),
                                        },
                                        on: {
                                          change: e.buttonAttachmentsChange,
                                        },
                                        model: {
                                          value: e.sendButtonValue,
                                          callback: function (t) {
                                            e.sendButtonValue = t;
                                          },
                                          expression: "sendButtonValue",
                                        },
                                      }),
                                      t(
                                        "p",
                                        {
                                          staticStyle: {
                                            "font-size": "12px",
                                            position: "absolute",
                                            right: "0",
                                            top: "11px",
                                            "background-color":
                                              "rgb(250,240,240)",
                                            color: "red",
                                            padding: "0 10px",
                                            "border-radius": "5px",
                                            "line-height": "18px",
                                          },
                                        },
                                        [
                                          e._v(
                                            " " +
                                              e._s(e.$t("pay_version")) +
                                              " "
                                          ),
                                        ]
                                      ),
                                    ],
                                    1
                                  ),
                                  t(
                                    "el-main",
                                    {
                                      staticClass: "radioBack",
                                      staticStyle: {
                                        "text-align": "left",
                                        padding: "0px 0px 0px 10px",
                                        "background-color": "#ffffff",
                                        "line-height": "35px",
                                      },
                                    },
                                    [
                                      t(
                                        "el-radio-group",
                                        {
                                          attrs: {
                                            size: "small",
                                            disabled: "",
                                          },
                                          on: { change: e.buttonMesChange },
                                          model: {
                                            value: e.button_radio,
                                            callback: function (t) {
                                              e.button_radio = t;
                                            },
                                            expression: "button_radio",
                                          },
                                        },
                                        [
                                          t(
                                            "el-radio",
                                            {
                                              staticStyle: {
                                                "margin-right": "22px",
                                              },
                                              attrs: { label: "Text" },
                                            },
                                            [e._v(e._s(e.$t("button_text_t")))]
                                          ),
                                          t(
                                            "el-radio",
                                            {
                                              staticStyle: {
                                                "margin-right": "22px",
                                              },
                                              attrs: { label: "Link" },
                                            },
                                            [e._v(e._s(e.$t("button_link_t")))]
                                          ),
                                          t(
                                            "el-radio",
                                            {
                                              staticStyle: {
                                                "margin-right": "22px",
                                              },
                                              attrs: { label: "Call" },
                                            },
                                            [e._v(e._s(e.$t("button_call_t")))]
                                          ),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ]
                          )
                        : e._e(),
                    ],
                    1
                  ),
                ],
                1
              ),
              t(
                "el-card",
                {
                  staticClass: "sendingSettings",
                  attrs: {
                    "body-style": { padding: "10px", marginTop: "10px" },
                  },
                },
                [
                  t(
                    "el-row",
                    [
                      t("el-col", { attrs: { span: 6 } }, [
                        t("span", {
                          staticClass: "send-message-card-title titleText",
                          domProps: {
                            textContent: e._s(e.sendingSettingsText),
                          },
                        }),
                      ]),
                      t(
                        "el-col",
                        {
                          staticStyle: { margin: "1px auto" },
                          attrs: { span: 16 },
                        },
                        [
                          t("span", {
                            staticClass: "send-message-common-font",
                            domProps: {
                              textContent: e._s(e.sendingSettingsNoticeText),
                            },
                          }),
                        ]
                      ),
                    ],
                    1
                  ),
                  t(
                    "el-row",
                    { staticStyle: { "margin-top": "23px" } },
                    [
                      t(
                        "el-col",
                        {
                          staticStyle: { "margin-top": "7px" },
                          attrs: { span: 6 },
                        },
                        [
                          t("span", {
                            staticClass: "send-message-card-title",
                            staticStyle: { color: "#c5c5c5" },
                            domProps: {
                              textContent: e._s(e.sendingIntervalText),
                            },
                          }),
                        ]
                      ),
                      t(
                        "el-col",
                        { attrs: { span: 13 } },
                        [
                          t("el-input-number", {
                            staticClass: "numSelect",
                            attrs: {
                              size: "small",
                              precision: 0,
                              min: 6,
                              max: 300,
                              label: "描述文字",
                            },
                            on: { change: e.handleMinNumChange },
                            model: {
                              value: e.minNum,
                              callback: function (t) {
                                e.minNum = t;
                              },
                              expression: "minNum",
                            },
                          }),
                          e._v(" ~ "),
                          t("el-input-number", {
                            staticClass: "numSelect",
                            attrs: {
                              size: "small",
                              precision: 0,
                              min: 10,
                              max: 300,
                              label: "描述文字",
                            },
                            on: { change: e.handleMaxNumChange },
                            model: {
                              value: e.maxNum,
                              callback: function (t) {
                                e.maxNum = t;
                              },
                              expression: "maxNum",
                            },
                          }),
                          t("span", {
                            staticClass: "send-message-common-font",
                            staticStyle: {
                              "font-size": "14px",
                              "margin-left": "4px",
                            },
                            domProps: { textContent: e._s(e.secondsText) },
                          }),
                        ],
                        1
                      ),
                      t(
                        "el-col",
                        {
                          staticClass: "common-success-btn",
                          style: { textAlign: "center" },
                          attrs: { span: 5 },
                        },
                        [
                          !0 === e.stopFlag
                            ? t(
                                "el-button",
                                {
                                  attrs: {
                                    type: "success",
                                    plain: "",
                                    size: "small",
                                  },
                                  on: { click: e.sendClick },
                                },
                                [e._v(e._s(e.$t("send_t")) + " ")]
                              )
                            : !1 === e.stopFlag
                            ? t(
                                "el-button",
                                {
                                  staticStyle: { cursor: "no-drop" },
                                  attrs: {
                                    disabled: "",
                                    type: "success",
                                    plain: "",
                                    size: "small",
                                  },
                                },
                                [e._v(" " + e._s(e.$t("sending_t")) + " ")]
                              )
                            : "disabled" === e.stopFlag
                            ? t(
                                "el-button",
                                {
                                  staticClass: "disableBtn",
                                  staticStyle: { cursor: "no-drop" },
                                  attrs: {
                                    disabled: "",
                                    type: "success",
                                    size: "small",
                                  },
                                },
                                [e._v(e._s(e.$t("send_t")) + " ")]
                              )
                            : e._e(),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]);
      },
      U = [],
      q = a("0fb6"),
      H = a("175e"),
      K = (a("2ef0"), a("1115")),
      Z = {
        name: "SendMessagesPro",
        props: ["groupOptions", "groupsMap"],
        data() {
          return {
            wowButton: !0,
            button_radio: "",
            sendButtonValue: !1,
            sendToGroupText: this.$t("send_to_t"),
            sendToLabelText: this.$t("send_to_label"),
            whatsAppNumbersText: this.$t("whatsapp_numbers_t"),
            whatsAppNumbersExcelText: this.$t("whatsapp_numbers_excel_t"),
            uploadExcelValue: !0,
            excelNumbersText: "",
            excelData: [],
            uploadExcelText: this.$t("upload_excel_btn_t"),
            usePlaceholderValue: !1,
            placeholderTemplateValue: "value1",
            downloadTemplateText: this.$t("excel_template_t"),
            whatsAppNumbers: "",
            groupInfo: "",
            messageTextText: this.$t("message_text_t"),
            messageTextTemplate: "",
            messageTextTemplateOptions: [],
            sendMessagePro: "pro",
            messageText: "",
            saveAsTemplateText: this.$t("save_as_t"),
            sendAttachmentsValue: !1,
            radio: "",
            attachmentText:
              'The attachment will be sent to your own account first, then open WA Plus Sender, click the "Send" button.',
            apologizeForBotherValue: !1,
            placeholderTemplateOptions: [
              { value: "value1", label: "WhatsApp Number" },
              { value: "value2", label: "First Name" },
              { value: "value3", label: "Last Name" },
              { value: "value4", label: "Other" },
            ],
            sendingSettingsText: this.$t("sending_settings_t"),
            sendingSettingsNoticeText: this.$t("messages_will_t"),
            sendingIntervalText: this.$t("sending_interval_t"),
            minNum: 6,
            maxNum: 10,
            secondsText: this.$t("seconds_t"),
            stopFlag: !0,
            remindTitlePro: "normal",
            incorrectPhoneNumPro: "",
            inputPhoneNum: 0,
            inputPhoneNumFlag: "normal",
            groupConcats: "normal",
            groupMembersNum: "",
            proChangeNum: 0,
            contentArrPro: [],
            incorrectPhoneNumArrPro: [],
            file: {},
            attachmentDivHtml: "",
            timeStampValue: !1,
            excelRows: [],
            waplus_remove_flag: m["f"],
            placeholderNum: m["d"],
            checkTheEnteredText: this.$t("check_the_entered_t"),
            isShowPermissionTip: !1,
            PermissionTipLink: "",
          };
        },
        methods: {
          goLinkPermissionTip() {
            window.open(this.PermissionTipLink);
          },
          buttonAttachmentsChange(e) {
            window.open(
              "https://chrome.google.com/webstore/detail/wapi-send-personalized-me/nmbjblpeeiobnakglbickhpgbinojbch?utm_source=easy_sender_option"
            );
          },
          howToUse() {
            window.open("https://wawebsender.com/sender-help");
          },
          howToUsePersonalizedFiles() {
            window.open("https://wawebsender.com/sender-help#personalized");
          },
          selectedTemplateChange(e) {
            if (e) {
              let e = document.querySelectorAll(".el-select-dropdown__item"),
                t = document.querySelectorAll(
                  ".el-select-dropdown__item > span"
                );
              e.forEach((e) => {
                e.style.width = "372px";
              }),
                t.forEach((e) => {
                  e.style.width = "352px";
                });
            }
          },
          uploadExcelClick(e, t) {
            t.length > 1 && t.splice(0, 1),
              this.readExcel(e)
                .then((e) => {
                  if (e && e.length > 0)
                    if (e[0] && e[0].sheet && e[0].sheet.length) {
                      let t = Object.values(e[0].rows),
                        a = [];
                      for (let e of t)
                        (e = e.replace(/（/g, "(").replace(/）/g, ")")),
                          "whatsappnumberwithcountrycode" ===
                            e
                              .match(/[^\s]+/g)
                              .join("")
                              .replace("(", "")
                              .replace(")", "")
                              .replace("）", "")
                              .replace("（", "")
                              .toLocaleLowerCase() && (e = "WhatsApp Number"),
                          "Tips" !== e && a.push(e);
                      this.excelRows = a;
                      let o = e[0].sheet;
                      (o = this.dealExcelData(o, a)),
                        (this.excelNumbersText = o.length),
                        (this.uploadExcelValue = !1),
                        chrome.storage.local.set({
                          excelData: o,
                          uploadExcelValue: !1,
                          excelRows: a,
                        }),
                        0 === o.length
                          ? this.$sendLog(302302, { s_status: 2 })
                          : this.$sendLog(302302, { s_status: 1 });
                    } else
                      (this.excelNumbersText = 0),
                        (this.uploadExcelValue = !1),
                        chrome.storage.local.set({
                          excelData: [],
                          uploadExcelValue: !1,
                          excelRows: [],
                        });
                })
                .catch((e) => {
                  console.log(e);
                });
          },
          readExcel(e) {
            return new Promise(function (t, a) {
              const o = new FileReader();
              (o.onload = function (e) {
                const a = e.target.result;
                this.wb = c.a.read(a, { type: "binary" });
                const o = [];
                this.wb.SheetNames.forEach((e) => {
                  o.push({
                    sheetName: e,
                    sheet: c.a.utils.sheet_to_json(this.wb.Sheets[e]),
                    rows: c.a.utils.sheet_to_json(this.wb.Sheets[e], {
                      range: -1,
                    })[0],
                  });
                }),
                  t(o);
              }),
                o.readAsBinaryString(e.raw);
            });
          },
          dealExcelData(e, t) {
            let a = [];
            for (let o = 0; o < e.length; o++) {
              let n = e[o];
              (n = this.checkSpecialCharacters(n, t)),
                n["WhatsApp Number"] && a.push(n);
            }
            return a;
          },
          uploadExcelClickLog() {
            this.$sendLog(302201);
          },
          deleteGroupClick() {
            chrome.storage.local.set({ groupConcats: "normal" }),
              (this.groupConcats = "normal"),
              (this.groupInfo = ""),
              (this.groupMembersNum = ""),
              chrome.storage.local.remove(["groupMembersNum", "groupInfo"]);
          },
          deleteExcelClick() {
            chrome.storage.local.remove("excelData"),
              (this.uploadExcelValue = !0),
              (this.usePlaceholderValue = !1),
              (this.placeholderTemplateValue = "value1"),
              chrome.storage.local.set({ uploadExcelValue: !0 });
          },
          downloadTemplateClick() {
            this.$sendLog(302203);
            const e = document.createElement("a");
            e.setAttribute("download", "WAPlusSenderTemplate.xlsx"),
              e.setAttribute(
                "href",
                "https://scrm-data-us-oss.oss-us-west-1.aliyuncs.com/sender/static_resources/WAPlusSenderTemplate.xlsx"
              ),
              e.click();
          },
          handleWhatsAppNumbersFocus() {
            let e = document.querySelector(
              ".textareaBackPro.el-input.el-input--medium.el-input--suffix>.el-input__inner"
            );
            (this.remindTitlePro = "normal"),
              (this.inputPhoneNumFlag = "noraml"),
              (e.style.borderColor = "rgb(220, 223, 230)");
          },
          handleWhatsAppNumbersBlur(e) {},
          handleWhatsAppNumbersChange(e) {
            e
              ? ((e = e.trim()),
                (this.inputPhoneNumFlag = "content"),
                L(this),
                V(e, this),
                "normal" !== this.remindTitlePro
                  ? this.$sendLog(302308, {
                      s_content: this.contentArrPro,
                      s_incorrect_phone_num: this.incorrectPhoneNumArrPro,
                      s_status: 2,
                    })
                  : this.$sendLog(302309))
              : ((this.inputPhoneNumFlag = "normal"),
                L(this),
                this.$sendLog(302308, {
                  s_content: [],
                  s_incorrect_phone_num: [],
                  s_status: 1,
                }),
                (this.inputPhoneNum = 0),
                chrome.storage.local.set({ inputPhoneNum: 0 })),
              this.proChangeNum++,
              chrome.storage.local.set({
                whatsAppNumbers: this.whatsAppNumbers,
                inputPhoneNumFlag: this.inputPhoneNumFlag,
                proChangeNum: this.proChangeNum - 1,
              });
          },
          handleGroupChange() {
            (this.groupConcats = "content"), this.$parent.messageBoxClose();
            let e = "",
              t = this.groupsMap[this.groupInfo];
            chrome.storage.local.set({ groupInfo: this.groupInfo });
            let a = Object(q["a"])(t);
            a.forEach((t, o) => {
              (e += "+" + t), o < a.length - 1 && (e += ",");
            }),
              0 === e.length
                ? ((this.groupMembersNum = 0),
                  (this.groupConcats = "content"),
                  chrome.storage.local.set({
                    groupMembersNum: 0,
                    groupConcats: "content",
                    groupMembersPhoneList: a,
                  }))
                : ((this.groupMembersNum = a.length),
                  chrome.storage.local.set({
                    groupMembersNum: a.length,
                    groupConcats: "content",
                    groupMembersPhoneList: a,
                  }),
                  Object(H["a"])(e));
          },
          handleGroupChangeLog(e) {
            if (e)
              if ((this.$sendLog(302202), 0 === this.groupOptions.length))
                this.$sendLog(302303, { s_status: 2 });
              else {
                this.$sendLog(302303, { s_status: 1 });
                let e = document.querySelectorAll(".el-select-dropdown__item"),
                  t = document.querySelectorAll(
                    ".el-select-dropdown__item > span"
                  );
                e.forEach((e) => {
                  e.style.width = "100%";
                }),
                  t.forEach((e) => {
                    e.style.width = "100%";
                  });
              }
          },
          handleMessageTextTemplateChange(e) {
            (this.messageText = e),
              chrome.storage.local.set({
                messageText: this.messageText,
                messageTextTemplate: this.messageTextTemplate,
              });
          },
          handleEdit(e) {
            this.messageTextTemplateOptions.splice(e, 1),
              chrome.storage.local.set({
                messageTextTemplateOptions: this.messageTextTemplateOptions,
              });
          },
          selectTemplate(e) {
            (this.messageText = e),
              chrome.storage.local.set({
                messageText: this.messageText,
                messageTextTemplate: this.messageTextTemplate,
              });
          },
          saveAsTemplateClick() {
            if (
              (this.$sendLog(302204),
              this.messageText.replace(/\s/g, "").length)
            ) {
              let e = { value: this.messageText, label: this.messageText },
                t = 0;
              for (let a of this.messageTextTemplateOptions)
                a.value === e.value && (t = 1);
              t
                ? this.$confirm("", this.$t("the_template_t"), {
                    customClass: "emptyContentTemplate",
                    showConfirmButton: !1,
                    showCancelButton: !1,
                    center: !0,
                    type: "warning",
                  })
                : (document
                    .getElementsByClassName("saveTemplateBtn")[0]
                    .style.setProperty("animation", "none"),
                  document
                    .getElementsByClassName("saveTemplateBtn")[0]
                    .style.setProperty("-webkit-animation", "none"),
                  setTimeout(function () {
                    document
                      .getElementsByClassName("saveTemplateBtn")[0]
                      .style.setProperty("animation", "mymove 1s"),
                      document
                        .getElementsByClassName("saveTemplateBtn")[0]
                        .style.setProperty("-webkit-animation", "mymove 1s");
                    const e =
                        "@keyframes mymove {50% {background: #37B64B;color: #FFFFFF}}",
                      t =
                        "@-webkit-keyframes mymove {50% {background: #37B64B;color: #FFFFFF}}",
                      a = document.createElement("style");
                    (a.type = "text/css"),
                      (a.innerHTML = e),
                      document
                        .getElementsByClassName("saveTemplateBtn")[0]
                        .appendChild(a),
                      (a.innerHTML = t),
                      document
                        .getElementsByClassName("saveTemplateBtn")[0]
                        .appendChild(a);
                  }, 1),
                  this.messageTextTemplateOptions.push(e));
            }
            chrome.storage.local.set({
              messageTextTemplateOptions: this.messageTextTemplateOptions,
            });
          },
          handleMessageTextChange(e) {
            chrome.storage.local.set({ messageText: e });
          },
          handleAttachmentsChange(e) {
            e
              ? (this.$sendLog(302304),
                chrome.storage.local.set({
                  sendAttachmentsValue: this.sendAttachmentsValue,
                }))
              : ((this.radio = ""),
                (this.sendAttachmentsValue = !1),
                chrome.storage.local.set({
                  sendAttachmentsValue: this.sendAttachmentsValue,
                  radio: this.radio,
                  attachmentDivHtml: "",
                  allDataImg: [],
                  allDataVideo: [],
                  allDataDocument: [],
                }));
          },
          handleImgDocChange(e) {
            let t = "";
            "Image" === this.radio &&
              (this.$sendLog(302305, { s_status: 1 }),
              (t = "img"),
              Object(K["c"])(this)),
              "Video" === this.radio &&
                (this.$sendLog(302305, { s_status: 2 }),
                (t = "video"),
                Object(K["d"])(this)),
              "Document" === this.radio &&
                (this.$sendLog(302305, { s_status: 3 }),
                (t = "doc"),
                Object(K["b"])(this)),
              "Contact" === this.radio &&
                (this.$sendLog(302305, { s_status: 4 }), (t = "contact")),
              chrome.storage.local.set({
                sendAttachmentsValue: this.sendAttachmentsValue,
                radio: this.radio,
              });
            const a = { sendAttachments: !0, mediaType: t };
            this.$parent.sendDataPopToContent(a);
          },
          attachmentBtn(e) {
            this.radio;
          },
          handleTimeStampClick() {
            this.$sendLog(302312);
            let e = this.$t("sent_at_t");
            this.insert(e),
              chrome.storage.local.set({
                messageText: this.messageText,
                apologizeForBotherValue: this.apologizeForBotherValue,
              });
          },
          handleApologizeForBotherClick() {
            this.$sendLog(302306);
            let e = this.$t("if_it_t");
            this.insert(e),
              chrome.storage.local.set({
                messageText: this.messageText,
                apologizeForBotherValue: this.apologizeForBotherValue,
              });
          },
          handleUsePlaceholderChange(e) {
            if (((this.placeholderTemplateValue = "value1"), e)) {
              this.$sendLog(302307);
              let e = "{{WhatsApp Number}}";
              this.insert(e);
            }
          },
          insert(e) {
            const t = document.getElementById("text");
            if (t.selectionStart || 0 === t.selectionStart) {
              let a = t.selectionStart,
                o = t.selectionEnd,
                n =
                  t.value.substring(0, a) +
                  e +
                  t.value.substring(o, t.value.length);
              (this.messageText = n),
                t.focus(),
                t.setSelectionRange(o + e.length, o + e.length);
            } else this.messageText += "" + e;
            chrome.storage.local.set({ messageText: this.messageText });
          },
          handlePlaceholderTemplateChange(e) {
            "value1" === e && this.insert("{{WhatsApp Number}}"),
              "value2" === e && this.insert("{{First Name}}"),
              "value3" === e && this.insert("{{Last Name}}"),
              "value4" === e && this.insert("{{Other}}");
          },
          handleMinNumChange(e) {
            this.$nextTick(() => {
              e >= this.maxNum && (this.minNum = this.maxNum),
                chrome.storage.local.set({ minNum: this.minNum });
            });
          },
          handleMaxNumChange(e) {
            this.$nextTick(() => {
              e <= this.minNum && (this.maxNum = this.minNum),
                chrome.storage.local.set({ maxNum: this.maxNum });
            });
          },
          async sendClick() {
            let e;
            if (
              (this.$parent.firstSendTime ||
                chrome.storage.local.set({
                  firstSendTime: Math.round(new Date() / 1e3),
                }),
              this.$sendLog(302205),
              this.$parent.updateIsShowContinueBtn(!0),
              (e = this.messageText
                ? this.messageText.trim()
                : this.messageText),
              e)
            )
              if (
                this.inputPhoneNum ||
                this.excelNumbersText ||
                this.groupMembersNum
              ) {
                let e = this.$parent.dailySendNums;
                const { isReachSendLimit: t, showConfirmTitle: a } =
                  this.$checkDailySendNums(e);
                if (t) {
                  let e = "";
                  return (
                    0 === a.indexOf("First time")
                      ? ((e = a.replace(
                          "First time limit has been reached(50 messages)\n\n300 messages are available at ",
                          this.$t("first_time_1_t")
                        )),
                        (e = e.replace(".", this.$t("first_time_2_t"))))
                      : ((e = a.replace(
                          "300 messages are available at ",
                          this.$t("second_time_1_t")
                        )),
                        (e = e.replace(".", this.$t("second_time_2_t")))),
                    void this.$confirm(e, "", {
                      confirmButtonText: "OK",
                      type: "warning",
                      showClose: !1,
                      showCancelButton: !1,
                      customClass: "daily-msg-send-warning",
                    })
                  );
                }
                (this.$parent.sendMessageType = this.sendMessagePro),
                  this.$sendLog(302311),
                  (this.proChangeNum = 0),
                  chrome.storage.local.remove([
                    "proChangeNum",
                    "confirmSendData",
                    "confirmSetData",
                  ]),
                  await this.$parent.handleConfirmClick();
                const o = this;
                chrome.storage.local.get(
                  [
                    "isShowSafetyWarningFlagValue",
                    "dialogVisible",
                    "confirmSetData",
                    "allDataImg",
                    "allDataVideo",
                    "allDataDocument",
                    "confirmSendData",
                  ],
                  (e) => {
                    if (
                      e.isShowSafetyWarningFlagValue ||
                      void 0 == e.isShowSafetyWarningFlagValue
                    )
                      o.$parent.isShowSafetyWarningFlagValue = !0;
                    else if (
                      ((o.$parent.activeName = "statistics"),
                      !1 === e.dialogVisible)
                    ) {
                      if (
                        (e.confirmSetData &&
                          chrome.storage.local.set(e.confirmSetData),
                        "object" === typeof e.confirmSendData &&
                          null !== e.confirmSendData)
                      ) {
                        let t = e.confirmSendData;
                        (t.allDataImg = e.allDataImg ? e.allDataImg : []),
                          (t.allDataVideo = e.allDataVideo
                            ? e.allDataVideo
                            : []),
                          (t.allDataDocument = e.allDataDocument
                            ? e.allDataDocument
                            : []),
                          o.$parent.sendDataPopToContent(e.confirmSendData);
                      }
                    } else o.$parent.dialogVisible = !0;
                  }
                );
              } else this.$parent.concatsIsNull = !0;
            else
              this.$confirm("", this.$t("please_enter_a_t"), {
                customClass: "emptyContent",
                showConfirmButton: !1,
                showCancelButton: !1,
                center: !0,
                type: "warning",
              });
          },
          checkSpecialCharacters(e, t) {
            Object.keys(e).forEach((t, a) => {
              let o = t.replace(/（/g, "(").replace(/）/g, ")");
              "whatsappnumberwithcountrycode" ===
                o
                  .match(/[^\s]+/g)
                  .join("")
                  .replace("(", "")
                  .replace(")", "")
                  .replace("）", "")
                  .replace("（", "")
                  .toLocaleLowerCase() &&
                e[t].toString().match(/.*[0-9]/gm) &&
                ((e["WhatsApp Number"] = e[t]), delete e[t]),
                "Tips" === t && delete e["Tips"];
            });
            for (let a = 0; a < t.length; a++)
              void 0 === e[t[a]] && (e[t[a]] = "");
            return e;
          },
          deleteAttachmentClick() {
            (this.radio = ""),
              (this.attachmentDivHtml = ""),
              chrome.storage.local.set({
                radio: "",
                attachmentDivHtml: "",
                allDataImg: [],
                allDataVideo: [],
                allDataDocument: [],
              });
          },
          placeholderClick(e) {
            let t = "{{" + e.target.innerText + "}}";
            this.insert(t);
          },
        },
        created: async function () {
          const e = this;
          chrome.storage.local.get(["zbaseConfig"], (t) => {
            var a, o, n, s;
            let i =
                null === (a = t.zbaseConfig) ||
                void 0 === a ||
                null === (o = a.data) ||
                void 0 === o ||
                null === (n = o.config) ||
                void 0 === n ||
                null === (s = n.find((e) => "bulkShunt" === e.name)) ||
                void 0 === s
                  ? void 0
                  : s.params.tip,
              l = (i && i[e.$i18n.locale]) || {};
            l.show &&
              -1 !==
                ["ar", "en", "es", "pt-PT", "pt-BR"].indexOf(
                  this.$i18n.locale
                ) &&
              ((e.isShowPermissionTip = !0), (e.PermissionTipLink = l.url));
          }),
            chrome.storage.local.get(
              [
                "zbaseConfig",
                "whatsAppNumbers",
                "messageText",
                "minNum",
                "maxNum",
                "sendAttachmentsValue",
                "radio",
                "remindTitlePro",
                "incorrectPhoneNumPro",
                "inputPhoneNum",
                "inputPhoneNumFlag",
                "groupMembersNum",
                "groupConcats",
                "proChangeNum",
                "attachmentDivHtml",
                "stopFlag",
                "uploadExcelValue",
                "excelData",
                "messageTextTemplateOptions",
                "messageTextTemplate",
                "apologizeForBotherValue",
                "groupOptions",
                "groupsMap",
                "groupInfo",
                "excelRows",
              ],
              (t) => {
                if (
                  (t.zbaseConfig &&
                    t.zbaseConfig.data.config &&
                    t.zbaseConfig.data.config.forEach((t) => {
                      "Drainage configuration" === t.name &&
                        t.params &&
                        (e.wowButton =
                          !t.params.wowButton || "1" === t.params.wowButton);
                    }),
                  (e.whatsAppNumbers = t.whatsAppNumbers),
                  (e.messageText = t.messageText || ""),
                  (e.minNum = t.minNum ? t.minNum : 6),
                  (e.maxNum = t.maxNum ? t.maxNum : 10),
                  (e.sendAttachmentsValue = t.sendAttachmentsValue),
                  (e.radio = t.radio ? t.radio : ""),
                  (e.remindTitlePro = t.remindTitlePro || "normal"),
                  (e.incorrectPhoneNumPro = t.incorrectPhoneNumPro || ""),
                  (e.inputPhoneNum = t.inputPhoneNum || 0),
                  (e.inputPhoneNumFlag = t.inputPhoneNumFlag || "normal"),
                  (e.groupMembersNum = t.groupMembersNum || 0),
                  (e.groupConcats = t.groupConcats || "normal"),
                  (e.proChangeNum = t.proChangeNum || 0),
                  (e.attachmentDivHtml = t.attachmentDivHtml
                    ? t.attachmentDivHtml
                    : ""),
                  "normal" !== e.remindTitlePro)
                ) {
                  let e = document.querySelector(
                    ".textareaBackPro.el-input.el-input--medium.el-input--suffix>.el-input__inner"
                  );
                  e.style.borderColor = "rgba(255, 5, 5, 100)";
                }
                void 0 === t.stopFlag
                  ? (e.stopFlag = !0)
                  : (e.stopFlag = t.stopFlag),
                  void 0 === t.uploadExcelValue
                    ? (e.uploadExcelValue = !0)
                    : (e.uploadExcelValue = t.uploadExcelValue);
                const a = { stopFlag: e.stopFlag };
                e.$parent.sendDataPopToContent(a),
                  (e.excelNumbersText = t.excelData ? t.excelData.length : ""),
                  (e.messageTextTemplateOptions =
                    t.messageTextTemplateOptions || [
                      {
                        value: e.$t("help_there_t"),
                        label: e.$t("help_there_t"),
                      },
                    ]),
                  void 0 === t.messageText
                    ? (e.messageText = e.$t("help_there_t"))
                    : (e.messageText = t.messageText),
                  (e.messageTextTemplate = t.messageTextTemplate),
                  (e.apologizeForBotherValue = t.apologizeForBotherValue),
                  (e.groupOptions =
                    void 0 !== t.groupOptions ? t.groupOptions : []),
                  (e.groupsMap = t.groupsMap || {}),
                  (e.groupInfo = t.groupInfo || ""),
                  (e.excelRows = t.excelRows || []);
              }
            );
        },
      },
      J = Z,
      X =
        (a("ee54"),
        a("9bfe"),
        Object(w["a"])(J, G, U, !1, null, "b247195a", null)),
      Q = X.exports,
      Y = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          [
            e.isShowPermissionTip
              ? t(
                  "div",
                  {
                    staticClass: "permissionTip",
                    on: { click: e.goLinkPermissionTip },
                  },
                  [e._v("👑 "), t("span", [e._v(e._s(e.$t("permission_tip")))])]
                )
              : e._e(),
            t(
              "el-card",
              {
                staticStyle: { margin: "11px 0px 10px", padding: "0 10px" },
                attrs: {
                  shadow: "always",
                  "body-style": { padding: "0px 0px 20px" },
                },
              },
              [
                e.wowButton
                  ? t(
                      "div",
                      {
                        staticStyle: {
                          "font-size": "18px",
                          "line-height": "30px",
                          "margin-top": "20px",
                        },
                      },
                      [
                        e._v(e._s(e.$t("tool_choose_file")) + " "),
                        t(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "12px",
                              "background-color": "rgb(250,240,240)",
                              color: "red",
                              padding: "0 10px",
                              "border-radius": "5px",
                              "line-height": "18px",
                              cursor: "pointer",
                            },
                            on: { click: e.wapiOpen },
                          },
                          [e._v(" " + e._s(e.$t("pay_version")) + " ")]
                        ),
                      ]
                    )
                  : e._e(),
                e.wowButton
                  ? t(
                      "div",
                      { staticClass: "radioBox" },
                      [
                        t(
                          "el-radio-group",
                          {
                            staticStyle: { "padding-left": "10px" },
                            on: { change: e.wapiOpen },
                            model: {
                              value: e.radiosExportType,
                              callback: function (t) {
                                e.radiosExportType = t;
                              },
                              expression: "radiosExportType",
                            },
                          },
                          [
                            t("el-radio", { attrs: { label: "xlsx" } }, [
                              e._v("Excel"),
                            ]),
                            t("el-radio", { attrs: { label: "csv" } }, [
                              e._v("CSV"),
                            ]),
                            t("el-radio", { attrs: { label: "vcf" } }, [
                              e._v("VCard"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
                t(
                  "div",
                  { staticClass: "little-model" },
                  [
                    t("div", { staticClass: "little-title" }, [
                      e._v(e._s(e.$t("tool_export_info"))),
                    ]),
                    t("div"),
                    t(
                      "el-button",
                      {
                        staticStyle: {
                          "background-color": "#37b64a",
                          "border-color": "#37b64a",
                        },
                        attrs: { type: "success", size: "small" },
                        on: { click: e.exportClick },
                      },
                      [e._v(" " + e._s(e.$t("tool_export_now")) + " ")]
                    ),
                  ],
                  1
                ),
                t(
                  "div",
                  [
                    t(
                      "el-select",
                      {
                        staticClass: "groupToolSelected",
                        staticStyle: {
                          width: "534px",
                          padding: "10px 0 10px 10px",
                        },
                        attrs: {
                          placeholder: this.$t("select_joined_export_t"),
                          "no-data-text": this.$t("no_data_t"),
                          "collapse-tags": "",
                        },
                        on: {
                          "visible-change": e.handleGroupChangeLog,
                          change: e.handleGroupChange,
                        },
                        model: {
                          value: e.exportGroupInfo,
                          callback: function (t) {
                            e.exportGroupInfo = t;
                          },
                          expression: "exportGroupInfo",
                        },
                      },
                      e._l(e.groupOptions, function (e) {
                        return t("el-option", {
                          key: e.value,
                          attrs: { label: e.label, value: e.value },
                        });
                      }),
                      1
                    ),
                  ],
                  1
                ),
                t(
                  "div",
                  { staticClass: "switchBack" },
                  [
                    t("el-switch", {
                      staticClass: "switch",
                      staticStyle: { "padding-left": "10px" },
                      attrs: { "active-text": "Exclude Admins" },
                      on: { change: e.handleExcludeGroupAdminsValueChange },
                      model: {
                        value: e.excludeGroupAdminsValue,
                        callback: function (t) {
                          e.excludeGroupAdminsValue = t;
                        },
                        expression: "excludeGroupAdminsValue",
                      },
                    }),
                  ],
                  1
                ),
                e.wowButton
                  ? t(
                      "div",
                      { staticClass: "little-model" },
                      [
                        t("div", { staticClass: "little-title" }, [
                          e._v(" " + e._s(e.$t("tool_export_Label")) + " "),
                          t(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                "background-color": "rgb(250,240,240)",
                                color: "red",
                                padding: "0 10px",
                                "border-radius": "5px",
                                "line-height": "18px",
                                cursor: "pointer",
                              },
                              on: { click: e.wapiOpen },
                            },
                            [e._v(" " + e._s(e.$t("pay_version")) + " ")]
                          ),
                        ]),
                        t("div"),
                        t(
                          "el-button",
                          {
                            staticStyle: {
                              "background-color": "#37b64a",
                              "border-color": "#37b64a",
                            },
                            attrs: { type: "success", size: "small" },
                            on: { click: e.wapiOpen },
                          },
                          [e._v(" " + e._s(e.$t("tool_export_now")) + " ")]
                        ),
                      ],
                      1
                    )
                  : e._e(),
                t(
                  "div",
                  [
                    t("el-select", {
                      staticClass: "groupToolSelected",
                      staticStyle: {
                        width: "534px",
                        padding: "10px 0 10px 10px",
                      },
                      attrs: {
                        disabled: "",
                        placeholder: this.$t("select_joined_send_label"),
                        "collapse-tags": "",
                      },
                    }),
                  ],
                  1
                ),
                e.wowButton
                  ? t(
                      "div",
                      { staticClass: "little-model" },
                      [
                        t("div", { staticClass: "little-title" }, [
                          e._v(" " + e._s(e.$t("tool_export_chat")) + " "),
                          t(
                            "span",
                            {
                              staticStyle: {
                                "font-size": "12px",
                                "background-color": "rgb(250,240,240)",
                                color: "red",
                                padding: "0 10px",
                                "border-radius": "5px",
                                "line-height": "18px",
                                cursor: "pointer",
                              },
                              on: { click: e.wapiOpen },
                            },
                            [e._v(" " + e._s(e.$t("pay_version")) + " ")]
                          ),
                        ]),
                        t("div"),
                        t(
                          "el-button",
                          {
                            staticStyle: {
                              "background-color": "#37b64a",
                              "border-color": "#37b64a",
                            },
                            attrs: { type: "success", size: "small" },
                            on: { click: e.wapiOpen },
                          },
                          [e._v(" " + e._s(e.$t("tool_export_now")) + " ")]
                        ),
                      ],
                      1
                    )
                  : e._e(),
                e.wowButton
                  ? t(
                      "div",
                      { staticClass: "radioBox" },
                      [
                        t(
                          "el-radio-group",
                          {
                            staticStyle: {
                              "align-self": "center",
                              "padding-left": "10px",
                            },
                            on: { change: e.wapiOpen },
                            model: {
                              value: e.radiosChat,
                              callback: function (t) {
                                e.radiosChat = t;
                              },
                              expression: "radiosChat",
                            },
                          },
                          [
                            t(
                              "el-radio",
                              { attrs: { label: "radioChatAll" } },
                              [e._v(e._s(e.$t("tool_export_all")))]
                            ),
                            t(
                              "el-radio",
                              { attrs: { label: "radioChatUnsaved" } },
                              [e._v(e._s(e.$t("tool_export_no_all")))]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ]
            ),
          ],
          1
        );
      },
      ee = [],
      te = {
        name: "GroupTools",
        props: [
          "chooseWarning",
          "beRemovedWarning",
          "groupOptions",
          "groupsMap",
        ],
        data() {
          return {
            radiosExportType: "xlsx",
            exportGroupInfo: "",
            excludeGroupAdminsValue: !0,
            extensionName: m["b"],
            waplus_remove_flag: m["f"],
            radiosChat: "radioChatAll",
            wowButton: !0,
            isShowPermissionTip: !1,
            PermissionTipLink: "",
          };
        },
        created() {
          const e = this;
          chrome.storage.local.get(["zbaseConfig"], (t) => {
            var a, o, n, s;
            let i =
                null === (a = t.zbaseConfig) ||
                void 0 === a ||
                null === (o = a.data) ||
                void 0 === o ||
                null === (n = o.config) ||
                void 0 === n ||
                null === (s = n.find((e) => "bulkShunt" === e.name)) ||
                void 0 === s
                  ? void 0
                  : s.params.tip,
              l = (i && i[e.$i18n.locale]) || {};
            l.show &&
              -1 !==
                ["ar", "en", "es", "pt-PT", "pt-BR"].indexOf(e.$i18n.locale) &&
              ((e.isShowPermissionTip = !0), (e.PermissionTipLink = l.url));
          }),
            chrome.storage.local.get(
              [
                "zbaseConfig",
                "groupOptions",
                "groupsMap",
                "exportGroupInfo",
                "excludeGroupAdminsValue",
              ],
              (t) => {
                t.zbaseConfig &&
                  t.zbaseConfig.data.config &&
                  t.zbaseConfig.data.config.forEach((t) => {
                    "Drainage configuration" === t.name &&
                      t.params &&
                      (e.wowButton =
                        !t.params.wowButton || "1" === t.params.wowButton);
                  }),
                  (e.groupOptions =
                    void 0 !== t.groupOptions ? t.groupOptions : []),
                  (e.groupsMap = t.groupsMap || {}),
                  (e.exportGroupInfo = t.exportGroupInfo || ""),
                  (e.excludeGroupAdminsValue =
                    void 0 === t.excludeGroupAdminsValue ||
                    t.excludeGroupAdminsValue);
              }
            );
        },
        methods: {
          goLinkPermissionTip() {
            window.open(this.PermissionTipLink);
          },
          wapiOpen() {
            window.open(
              "https://chrome.google.com/webstore/detail/wapi-send-personalized-me/nmbjblpeeiobnakglbickhpgbinojbch?utm_source=easy_sender_option"
            );
          },
          handleGroupChange(e) {
            let t = this.groupsMap[this.exportGroupInfo];
            chrome.storage.local.set({ exportGroupInfo: this.exportGroupInfo });
            let a = Object(q["a"])(t);
            this.$parent.messageBoxClose(),
              0 === a.length && console.log("be removed out the group");
          },
          handleGroupChangeLog(e) {
            e && this.$sendLog(303205);
          },
          exportClick() {
            this.$sendLog(303201, {
              s_status:
                "xlxs" === this.radiosExportType
                  ? 1
                  : "csv" === this.radiosExportType
                  ? 2
                  : "vcf" === this.radiosExportType
                  ? 3
                  : "",
            });
            let e = this.excludeGroupAdminsValue ? "excludeAdmins" : "all";
            const t = { exportGroup: e, exportGroupInfo: this.exportGroupInfo };
            this.$parent.sendDataPopToContent(t);
          },
          handleExcludeGroupAdminsValueChange(e) {
            console.log(e),
              this.$sendLog(303202),
              chrome.storage.local.set({
                excludeGroupAdminsValue: this.excludeGroupAdminsValue,
              });
          },
          goLinkTutorial(e) {
            this.$sendLog(303203), window.open(e);
          },
          goLinkContact(e) {
            this.$sendLog(303204), window.open(e);
          },
        },
      },
      ae = te,
      oe = (a("7c60"), Object(w["a"])(ae, Y, ee, !1, null, "b8438c4c", null)),
      ne = oe.exports,
      se = function () {
        var e = this,
          t = e._self._c;
        return t(
          "div",
          { staticClass: "statistics" },
          [
            e.isShowPermissionTip
              ? t(
                  "div",
                  {
                    staticClass: "permissionTip",
                    on: { click: e.goLinkPermissionTip },
                  },
                  [e._v("👑 "), t("span", [e._v(e._s(e.$t("permission_tip")))])]
                )
              : e._e(),
            t(
              "el-card",
              {
                staticStyle: { height: "400px", margin: "9px 0px 7px" },
                attrs: {
                  shadow: "always",
                  "body-style": { padding: "10px 6px 0 10px" },
                },
              },
              [
                t("p", {
                  staticStyle: {
                    "text-align": "left",
                    "font-size": "14px",
                    "font-weight": "bolder",
                  },
                  domProps: { textContent: e._s(e.currentSendingProgressText) },
                }),
                t("el-progress", {
                  staticStyle: {
                    "margin-top": "12px",
                    "font-weight": "bolder",
                  },
                  attrs: {
                    percentage: e.percentage,
                    "stroke-width": 20,
                    color: e.progressColor,
                    format: e.format,
                  },
                }),
                t(
                  "div",
                  [
                    t(
                      "el-row",
                      { staticStyle: { "margin-top": "13px" } },
                      [
                        t("el-col", { attrs: { span: 18 } }, [
                          t("span", {
                            staticStyle: {
                              "font-size": "14px",
                              color: "rgba(16, 16, 16, 100)",
                              "text-align": "left",
                              "font-weight": "bolder",
                            },
                            domProps: {
                              textContent: e._s(
                                e.nextMessageWillBeSentAfterText
                              ),
                            },
                          }),
                        ]),
                        t(
                          "el-col",
                          {
                            staticStyle: { "padding-right": "15px" },
                            attrs: { span: 6 },
                          },
                          [
                            t("span", {
                              staticStyle: {
                                color: "rgba(16, 16, 16, 100)",
                                "font-size": "18px",
                                "font-weight": "bolder",
                                float: "right",
                              },
                              domProps: {
                                textContent: e._s(e.waitSeconds + " s"),
                              },
                            }),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t(
                  "div",
                  [
                    t(
                      "el-row",
                      { staticStyle: { margin: "10px auto 0 auto" } },
                      [
                        t("el-col", { attrs: { span: 24 } }, [
                          t("p", {
                            staticClass: "send-message-common-font",
                            domProps: {
                              textContent: e._s(e.groupIntervalNoticeText),
                            },
                          }),
                        ]),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t("p", {
                  staticStyle: {
                    "text-align": "left",
                    "font-size": "14px",
                    margin: "13px 0 5px 0",
                    "font-weight": "bolder",
                  },
                  domProps: { textContent: e._s(e.sendResultsText) },
                }),
                e.wowButton ? t("CrmHoverCommend") : e._e(),
                t(
                  "el-container",
                  {
                    staticStyle: {
                      height: "40px",
                      "margin-top": "30px",
                      "margin-bottom": "13px",
                    },
                  },
                  [
                    t("el-aside", {
                      staticStyle: {
                        "line-height": "40px",
                        "font-size": "28px",
                        color: "#363F4D",
                        "background-color": "#ffffff",
                        width: "25%",
                        "font-weight": "bolder",
                        "text-align": "center",
                      },
                      domProps: { textContent: e._s(e.countTotal) },
                    }),
                    t("el-aside", {
                      staticStyle: {
                        "line-height": "40px",
                        "font-size": "28px",
                        color: "#F4AD2D",
                        "background-color": "#ffffff",
                        width: "25%",
                        "font-weight": "bolder",
                        "text-align": "center",
                      },
                      domProps: { textContent: e._s(e.deduplicated) },
                    }),
                    t("el-aside", {
                      staticStyle: {
                        "line-height": "40px",
                        "font-size": "28px",
                        color: "#37B54A",
                        "background-color": "#ffffff",
                        width: "25%",
                        "font-weight": "bolder",
                        "text-align": "center",
                      },
                      domProps: { textContent: e._s(e.countSuccess) },
                    }),
                    t("el-aside", {
                      staticStyle: {
                        "line-height": "40px",
                        "font-size": "28px",
                        color: "#FF0505",
                        "background-color": "#ffffff",
                        width: "25%",
                        "font-weight": "bolder",
                        "text-align": "center",
                      },
                      domProps: { textContent: e._s(e.countFail) },
                    }),
                  ],
                  1
                ),
                t(
                  "el-container",
                  {
                    staticStyle: {
                      height: "20px",
                      "margin-top": "0px",
                      "margin-bottom": "21px",
                    },
                  },
                  [
                    t("el-aside", {
                      staticStyle: {
                        "line-height": "20px",
                        "font-size": "14px",
                        "background-color": "#ffffff",
                        width: "25%",
                        "text-align": "center",
                      },
                      domProps: { textContent: e._s(e.totalText) },
                    }),
                    t("el-aside", {
                      staticStyle: {
                        "line-height": "20px",
                        "font-size": "14px",
                        "background-color": "#ffffff",
                        width: "25%",
                        "text-align": "center",
                      },
                      domProps: { textContent: e._s(e.deduplicatedText) },
                    }),
                    t("el-aside", {
                      staticStyle: {
                        "line-height": "20px",
                        "font-size": "14px",
                        "background-color": "#ffffff",
                        width: "25%",
                        "text-align": "center",
                      },
                      domProps: { textContent: e._s(e.sentSuccessfullyText) },
                    }),
                    t(
                      "el-aside",
                      {
                        staticStyle: {
                          "line-height": "20px",
                          "font-size": "14px",
                          "background-color": "#ffffff",
                          width: "25%",
                          "text-align": "center",
                        },
                      },
                      [
                        t(
                          "p",
                          [
                            e._v(e._s(e.failedToSendText) + " "),
                            t("el-tooltip", { attrs: { placement: "top" } }, [
                              t(
                                "div",
                                {
                                  staticClass: "liNodeStyle",
                                  attrs: { slot: "content" },
                                  slot: "content",
                                },
                                [
                                  t(
                                    "span",
                                    { staticStyle: { color: "#FFFFFF" } },
                                    [
                                      t("i", { staticClass: "hoverFont" }, [
                                        e._v(
                                          e._s(e.$t("troubleshooting_t")) +
                                            e._s(e.$t("colon_t"))
                                        ),
                                      ]),
                                    ]
                                  ),
                                  t("br"),
                                  t("ul", [
                                    t("li", [
                                      t("i", { staticClass: "hoverFont" }, [
                                        e._v(e._s(e.$t("no_network_t"))),
                                      ]),
                                      t("br"),
                                      e._v(
                                        " " + e._s(e.$t("please_click_first_t"))
                                      ),
                                      t("i", { staticClass: "hoverFont" }, [
                                        e._v(
                                          e._s(e.$t("please_click_second_t"))
                                        ),
                                      ]),
                                      e._v(e._s(e.$t("period_t")) + " "),
                                    ]),
                                    t("li", [
                                      t("i", { staticClass: "hoverFont" }, [
                                        e._v(e._s(e.$t("wrong_number_t"))),
                                      ]),
                                      t("br"),
                                      e._v(
                                        " " + e._s(e.$t("check_the_first_t"))
                                      ),
                                      t("i", { staticClass: "hoverFont" }, [
                                        e._v(
                                          e._s(e.$t("check_the_second_t")) +
                                            e._s(e.$t("semicolon_t"))
                                        ),
                                      ]),
                                      t("br"),
                                      e._v(
                                        " " + e._s(e.$t("check_if_first_t"))
                                      ),
                                      t("i", { staticClass: "hoverFont" }, [
                                        e._v(e._s(e.$t("check_if_second_t"))),
                                      ]),
                                      e._v(e._s(e.$t("period_t")) + " "),
                                    ]),
                                  ]),
                                ]
                              ),
                              t("i", {
                                staticClass: "el-icon-question",
                                staticStyle: { color: "rgba(0, 0, 0, 1)" },
                              }),
                            ]),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                t(
                  "el-container",
                  { staticClass: "footContainer" },
                  [
                    t(
                      "el-main",
                      {
                        staticStyle: {
                          padding: "0",
                          "text-align": "right",
                          "background-color": "#ffffff",
                        },
                      },
                      [
                        e.isShowContinueBtn
                          ? t(
                              "el-button",
                              {
                                staticStyle: {
                                  padding: "12px 20px",
                                  "margin-right": "20px",
                                  width: "145px",
                                },
                                attrs: { disabled: e.isDisabledContinueBtn },
                                on: { click: e.continueClick },
                              },
                              [e._v(e._s(e.$t("continue_t")) + " ")]
                            )
                          : t(
                              "el-button",
                              {
                                staticStyle: {
                                  padding: "12px 20px",
                                  "margin-right": "20px",
                                  width: "145px",
                                },
                                attrs: { disabled: e.disabledSendingFlag },
                                on: { click: e.sendStopClick },
                              },
                              [e._v(e._s(e.$t("pause_t")) + " ")]
                            ),
                      ],
                      1
                    ),
                    t(
                      "el-main",
                      {
                        staticStyle: {
                          padding: "0",
                          "text-align": "center",
                          "background-color": "#ffffff",
                        },
                      },
                      [
                        t(
                          "el-button",
                          {
                            staticStyle: {
                              padding: "12px 0",
                              "margin-left": "0",
                              width: "145px",
                            },
                            on: { click: e.exportResultsClick },
                          },
                          [e._v(e._s(e.$t("export_results_t")) + " ")]
                        ),
                      ],
                      1
                    ),
                    t(
                      "el-main",
                      {
                        staticStyle: {
                          padding: "0",
                          "text-align": "left",
                          "background-color": "#ffffff",
                        },
                      },
                      [
                        t(
                          "el-button",
                          {
                            staticStyle: {
                              padding: "12px 0",
                              "margin-left": "20px",
                              width: "145px",
                            },
                            on: { click: e.retryFailedClick },
                          },
                          [e._v(e._s(e.$t("retry_failed_t")) + " ")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                t(
                  "p",
                  {
                    staticStyle: {
                      "text-align": "left",
                      "font-size": "14px",
                      "margin-top": "17px",
                      color: "#8E8888",
                      "font-weight": "normal",
                    },
                  },
                  [e._v(" " + e._s(e.$t("when_the_t")) + " ")]
                ),
              ],
              1
            ),
            e.waplus_remove_flag
              ? e._e()
              : t(
                  "div",
                  {
                    staticClass: "inviteComment",
                    on: {
                      mouseenter: function (t) {
                        e.inviteCommentUrl = !1;
                      },
                      mouseleave: function (t) {
                        e.inviteCommentUrl = !0;
                      },
                    },
                  },
                  [
                    e.inviteCommentUrl
                      ? t(
                          "a",
                          {
                            staticStyle: { color: "#0F0101" },
                            attrs: { href: "#" },
                            on: { click: e.openCommentWindow },
                          },
                          [e._v(" 💚 " + e._s(e.$t("rate_for_t")) + " ")]
                        )
                      : t(
                          "a",
                          {
                            staticStyle: { color: "#FF0505" },
                            attrs: { href: "#" },
                            on: { click: e.openCommentWindow },
                          },
                          [e._v(" ❤️ " + e._s(e.$t("rate_for_t")) + " ")]
                        ),
                  ]
                ),
          ],
          1
        );
      },
      ie = [],
      le = a("29de"),
      re = a("0082"),
      ce = function () {
        var e = this,
          t = e._self._c;
        return t("el-row", [
          t("div", { staticClass: "common-href" }, [
            t("p", [
              e.waplus_remove_flag
                ? e._e()
                : t("a", { attrs: { href: "#" }, on: { click: e.openPage } }, [
                    e._v(" " + e._s(e.$t("too_many_t")) + " "),
                  ]),
            ]),
          ]),
        ]);
      },
      de = [],
      pe = a("a555"),
      ue = {
        name: "CrmHoverCommend",
        data() {
          return { waplus_remove_flag: m["f"] };
        },
        methods: {
          openPage() {
            Object(pe["b"])(304201), window.open(g);
          },
        },
      },
      me = ue,
      ge =
        (a("280f"),
        a("7267"),
        Object(w["a"])(me, ce, de, !1, null, "69fda6b8", null)),
      he = ge.exports,
      _e = {
        name: "Statistics",
        props: [
          "disabledSendingFlag",
          "isShowContinueBtn",
          "countAll",
          "countFail",
          "countSuccess",
          "waitSeconds",
          "countTotal",
          "deduplicated",
        ],
        components: { CrmHoverCommend: he },
        data() {
          return {
            wowButton: !0,
            currentSendingProgressText: this.$t("current_sending_t"),
            progressColor: "#35B64A",
            percentage: 0,
            nextMessageWillBeSentAfterText: this.$t("please_do_t"),
            groupIntervalText: "Group Interval",
            groupIntervalNoticeText: this.$t("every_t"),
            sendResultsText: this.$t("send_results_t"),
            totalText: this.$t("total_t"),
            deduplicatedText: this.$t("deduplicated_t"),
            sentSuccessfullyText: this.$t("sent_successfully_t"),
            failedToSendText: this.$t("failed_to_t"),
            loadTimes: 0,
            phoneNumList: [],
            inviteCommentUrl: !0,
            waplus_remove_flag: m["f"],
            isShowPermissionTip: !1,
            PermissionTipLink: "",
          };
        },
        created: async function () {
          const e = this;
          chrome.storage.local.get(["zbaseConfig"], (t) => {
            var a, o, n, s;
            let i =
                null === (a = t.zbaseConfig) ||
                void 0 === a ||
                null === (o = a.data) ||
                void 0 === o ||
                null === (n = o.config) ||
                void 0 === n ||
                null === (s = n.find((e) => "bulkShunt" === e.name)) ||
                void 0 === s
                  ? void 0
                  : s.params.tip,
              l = (i && i[e.$i18n.locale]) || {};
            l.show &&
              -1 !==
                ["ar", "en", "es", "pt-PT", "pt-BR"].indexOf(e.$i18n.locale) &&
              ((e.isShowPermissionTip = !0), (e.PermissionTipLink = l.url));
          }),
            chrome.storage.local.get(
              ["zbaseConfig", "percentage", "loadTimes"],
              (t) => {
                t.zbaseConfig &&
                  t.zbaseConfig.data.config &&
                  t.zbaseConfig.data.config.forEach((t) => {
                    "Drainage configuration" === t.name &&
                      t.params &&
                      (e.wowButton =
                        !t.params.wowButton || "1" === t.params.wowButton);
                  }),
                  (e.percentage = t.percentage),
                  (e.loadTimes = void 0 !== t.loadTimes ? t.loadTimes : 1);
              }
            );
        },
        computed: {
          isDisabledContinueBtn() {
            let e = !0;
            return this.countFail + this.countSuccess < this.countAll
              ? ((e = !1), e)
              : e;
          },
        },
        methods: {
          goLinkPermissionTip() {
            window.open(this.PermissionTipLink);
          },
          openCommentWindow() {
            window.open(x);
          },
          format(e) {
            let t =
              this.countSuccess + this.countFail + "/" + this.deduplicated;
            return (
              (this.percentage =
                ((this.countSuccess + this.countFail) / this.deduplicated) *
                100),
              t
            );
          },
          continueClick() {
            if (
              (this.$sendLog(304203),
              0 !== this.waitSeconds && 1 !== this.loadTimes)
            )
              return;
            if (this.countFail + this.countSuccess === this.countAll) return;
            (this.loadTimes = this.loadTimes + 1),
              chrome.storage.local.set({ loadTimes: this.loadTimes });
            let e = this,
              t = this.$parent.dailySendNums;
            const { isReachSendLimit: a, showConfirmTitle: o } =
              this.$checkDailySendNums(t);
            if (a) {
              let e = "";
              o.indexOf("First time") &&
                ((e = o.replace(
                  "First time limit has been reached(50 messages)\n\n300 messages are available at ",
                  this.$t("first_time_1_t")
                )),
                (e = e.replace(".", "first_time_2_t"))),
                this.$confirm(e, "", {
                  confirmButtonText: "OK",
                  type: "warning",
                  showClose: !1,
                  showCancelButton: !1,
                  customClass: "daily-msg-send-warning",
                });
            }
            this.$parent.updateIsShowContinueBtn(!1),
              this.$parent.updateDisabledSendingFlag(!0),
              chrome.storage.local.get(["continueSendData"], function (a) {
                let o = a.continueSendData;
                if (void 0 !== o) {
                  let { stopFlag: a, stopFlagSimple: n } = Object(le["a"])(
                    o.sendMessageType
                  );
                  chrome.storage.local.set({
                    stopFlag: a,
                    stopFlagSimple: n,
                    waitSeconds: 0,
                  }),
                    e.$parent.sendDataPopToContent({
                      continueSendData: o,
                      dailySendNums: t,
                    });
                }
              });
          },
          sendStopClick() {
            this.$sendLog(304202);
            let e = this;
            (this.loadTimes = this.loadTimes + 1),
              chrome.storage.local.set({ loadTimes: this.loadTimes }),
              this.loadingMsgBox("Pausing, please wait."),
              0 !== this.waitSeconds &&
                setTimeout(() => {
                  e.$msgbox.close();
                }, 1e3 * this.waitSeconds + 500);
            let t,
              a = "";
            "simple" === this.$parent.sendMessageType &&
              ((a =
                this.phoneNumList.length > 0
                  ? this.phoneNumList.join(",")
                  : ""),
              (t = this.uploadExcelValue)),
              "pro" === this.$parent.sendMessageType &&
                (a = this.phoneNumList.join(",")),
              chrome.storage.local.set({ stopFlag: !0, stopFlagSimple: !0 });
            let o = {
              stopFlag: !0,
              stopFlagSimple: !0,
              sendMessageType: this.$parent.sendMessageType,
              sentSilent: this.$parent.sendSilentSendValue,
              phoneNum: a,
              uploadExcel: t,
            };
            this.$parent.sendDataPopToContent(o),
              this.$parent.updateIsShowContinueBtn(
                this.countSuccess + this.countFail !== this.countAll
              );
          },
          loadingMsgBox(e) {
            const t = this.$createElement;
            this.$confirm("", "", {
              customClass: "emptyContent deleteConfirmHeader",
              showConfirmButton: !1,
              showCancelButton: !1,
              showClose: !1,
              closeOnPressEscape: !1,
              closeOnClickModal: !1,
              closeOnHashChange: !1,
              center: !0,
              message: t("div", null, [
                t("div", { style: { height: "24px" } }, [
                  t("div", {
                    attrs: { class: "el-icon-warning loading-green-icon" },
                    style: { width: "24px", height: "24px", fontSize: "24px" },
                  }),
                  t("span", {
                    domProps: { innerHTML: e },
                    style: {
                      color: "rgba(48, 49, 51, 100)}",
                      fontSize: "18px",
                      margin: "auto auto 0 18px",
                    },
                  }),
                ]),
                t("div", {
                  attrs: { class: "el-icon-loading loading-green-icon" },
                  style: { fontSize: "50px", margin: "53px auto 30px auto" },
                }),
              ]),
            });
          },
          exportResultsClick() {
            this.$sendLog(304204);
            let e = this;
            chrome.storage.local.get(
              [
                "phoneNumList",
                "phoneNumSuccessList",
                "phoneNumFailList",
                "repeatList",
              ],
              function (t) {
                let a = [],
                  o = t.phoneNumList ? t.phoneNumList : [],
                  n = t.phoneNumSuccessList ? t.phoneNumSuccessList : [],
                  s = t.phoneNumFailList ? t.phoneNumFailList : [],
                  i = t.repeatList ? t.repeatList : [],
                  l = Object(re["a"])(o, n);
                l = Object(re["a"])(l, i);
                let r = n.length,
                  c = s.length,
                  d = l.length,
                  p = i.length,
                  u = Math.max(r, c, d, p);
                for (let e = 0; e < u; e++) {
                  let t = {
                    "Sent successfully": n[e] ? n[e] : "",
                    "": "",
                    "Failed to send": s[e] ? s[e] : "",
                    " ": "",
                    "Not sent yet": l[e] ? l[e] : "",
                    "  ": "",
                    "Duplicated number": i[e] ? i[e] : "",
                  };
                  a.push(t);
                }
                e.$parent.fnExport(a);
              }
            );
          },
          async retryFailedClick() {
            this.$sendLog(304205);
            let e = this,
              t = this.countAll - this.countSuccess;
            if (t + this.countFail === 0)
              return void this.$confirm(
                "",
                "All messages were sent successfully.",
                {
                  customClass: "emptyContent",
                  showConfirmButton: !1,
                  showCancelButton: !1,
                  center: !0,
                  type: "warning",
                }
              );
            let a = this.$parent.dailySendNums;
            const { isReachSendLimit: o, showConfirmTitle: n } =
              this.$checkDailySendNums(a);
            if (o) {
              let e = "";
              return (
                0 === n.indexOf("First time")
                  ? ((e = n.replace(
                      "First time limit has been reached(50 messages)\n\n300 messages are available at ",
                      this.$t("first_time_1_t")
                    )),
                    (e = e.replace(".", this.$t("first_time_2_t"))))
                  : ((e = n.replace(
                      "300 messages are available at ",
                      this.$t("second_time_1_t")
                    )),
                    (e = e.replace(".", this.$t("second_time_2_t")))),
                void this.$confirm(e, "", {
                  confirmButtonText: "OK",
                  type: "warning",
                  showClose: !1,
                  showCancelButton: !1,
                  customClass: "daily-msg-send-warning",
                })
              );
            }
            "pro" === this.$parent.sendMessageStatisticsType &&
              chrome.storage.local.set({
                retryFailed: !0,
                stopFlag: !1,
                stopFlagSimple: "disabled",
              }),
              "simple" === this.$parent.sendMessageStatisticsType &&
                chrome.storage.local.set({
                  retryFailed: !0,
                  stopFlag: "disabled",
                  stopFlagSimple: !1,
                }),
              await e.$parent.sleep(1, 1, 1e3);
            let s = { reload: !0 };
            this.$parent.sendDataPopToContent(s);
          },
        },
      },
      fe = _e,
      xe = (a("824a"), Object(w["a"])(fe, se, ie, !1, null, "696e426a", null)),
      be = xe.exports,
      ye = function () {
        var e = this,
          t = e._self._c;
        return t(
          "el-dialog",
          {
            attrs: {
              visible: e.isShowAttractDialog,
              width: "459px",
              top: "120px",
              "custom-class": "activeCodeDialog",
              "modal-append-to-body": !1,
              "show-close": !1,
              "close-on-click-modal": e.canClose,
              center: "",
              title: e.$t("attract_dialog_tittle"),
            },
            on: {
              "update:visible": function (t) {
                e.isShowAttractDialog = t;
              },
              close: e.close,
            },
          },
          [
            t("div", { staticClass: "codeInput" }, [
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [e._v(e._s(e.$t("attract_dialog_tip1")))]
                ),
              ]),
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [e._v(e._s(e.$t("attract_dialog_tip2")))]
                ),
              ]),
            ]),
            t(
              "div",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                t(
                  "el-button",
                  { attrs: { type: "success" }, on: { click: e.confirm } },
                  [e._v(e._s(e.$t("attract_dialog_success")))]
                ),
              ],
              1
            ),
          ]
        );
      },
      ve = [],
      we = {
        name: "AttractDialog",
        data() {
          return {
            codeStr: "",
            languageVal: "·",
            tip1: "Your currently activated account is: the display of the user's own mobile phone number.Permissions are bound to your WhatsApp account, please pay attention to the switching of WhatsApp accounts",
            tip2: "Each activation code can only be used once and cannot be reused.Please confirm the account you want to activate~",
          };
        },
        props: ["isShowAttractDialog", "canClose"],
        methods: {
          close: function () {
            (this.languageVal = ""), this.$emit("close");
          },
          confirm: function () {
            this.$emit("goToAttractDialogLink");
          },
        },
      },
      Se = we,
      Ce =
        (a("c21f"),
        a("284a"),
        Object(w["a"])(Se, ye, ve, !1, null, "bb9dceba", null)),
      Te = Ce.exports,
      ke = function () {
        var e = this,
          t = e._self._c;
        return t(
          "el-dialog",
          {
            attrs: {
              visible: e.isShowAttractDialog,
              width: "459px",
              top: "120px",
              "custom-class": "activeCodeDialog",
              "modal-append-to-body": !1,
              "show-close": !1,
              "close-on-click-modal": e.canClose,
              center: "",
              title: "تعلن التطبيق الجديد لكم",
            },
            on: {
              "update:visible": function (t) {
                e.isShowAttractDialog = t;
              },
              close: e.close,
            },
          },
          [
            t("div", { staticClass: "codeInput" }, [
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [
                    e._v(
                      "هذا الإصدار الجديد من التطبيق مع بناء متين ومزايا جديدة لتلبية احتياجاتكم. "
                    ),
                  ]
                ),
              ]),
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [e._v("• واجهة مترجمة تمامًا إلى اللغة العربية")]
                ),
              ]),
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [e._v("• الخصوصية والأمان محسنان")]
                ),
              ]),
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [e._v("• خاصية تقديم المساعدة باللغة العربية 24 ساعة")]
                ),
              ]),
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [e._v(" • العروض والهدايا فقط لمستخدمي التطبيق الجديد")]
                ),
              ]),
              t("div", [
                t(
                  "div",
                  {
                    staticStyle: {
                      "font-size": "12px",
                      "margin-left": "4px",
                      color: "#8E8B8B",
                    },
                  },
                  [
                    e._v(
                      " بدءاً من الآن سوف يتم تحديث التطبيق القديم و ننصح بالترقية إلى الإصدار الجديد لتحسين تجربتك. اضغط هنا لتنزيل التطبيق الجديد الآن! "
                    ),
                  ]
                ),
              ]),
            ]),
            t(
              "div",
              {
                staticClass: "dialog-footer",
                attrs: { slot: "footer" },
                slot: "footer",
              },
              [
                t(
                  "el-button",
                  { attrs: { type: "success" }, on: { click: e.confirm } },
                  [e._v("الحصول على نسخة جديدة")]
                ),
              ],
              1
            ),
          ]
        );
      },
      Ne = [],
      Pe = {
        name: "AttractDialog",
        data() {
          return {
            codeStr: "",
            languageVal: "·",
            tip1: "Your currently activated account is: the display of the user's own mobile phone number.Permissions are bound to your WhatsApp account, please pay attention to the switching of WhatsApp accounts",
            tip2: "Each activation code can only be used once and cannot be reused.Please confirm the account you want to activate~",
          };
        },
        props: ["isShowAttractDialog", "canClose"],
        methods: {
          close: function () {
            (this.languageVal = ""), this.$emit("close");
          },
          confirm: function () {
            this.$emit("goToAttractDialogLink");
          },
        },
      },
      $e = Pe,
      Ae =
        (a("e4e5"),
        a("8c43"),
        Object(w["a"])($e, ke, Ne, !1, null, "221c5249", null)),
      De = Ae.exports,
      Be = function () {
        var e = this,
          t = e._self._c;
        return t("div", { staticClass: "more-tools" }, [
          t(
            "ul",
            e._l(e.moreToolsData, function (a) {
              return t("li", { key: a.id }, [
                t("img", {
                  staticClass: "tools-img",
                  attrs: { src: a.iconUrl, alt: "" },
                }),
                t(
                  "a",
                  {
                    staticClass: "tools-link",
                    attrs: { href: "javascript:;" },
                    on: {
                      click: function (t) {
                        return e.linkToUrl(a.linkUrl);
                      },
                    },
                  },
                  [
                    t("span", [e._v(e._s(a.pluginDescriptor))]),
                    e._l(a.tags, function (a, o) {
                      return t(
                        "el-tag",
                        {
                          key: o,
                          attrs: {
                            type: a.type,
                            effect: "plain",
                            size: "small",
                          },
                        },
                        [e._v(" " + e._s(a.text) + " ")]
                      );
                    }),
                  ],
                  2
                ),
              ]);
            }),
            0
          ),
        ]);
      },
      Fe = [],
      Me = a("889a"),
      ze = {
        data() {
          return { moreToolsData: [] };
        },
        async created() {
          let { zbaseConfig: e } = await chrome.storage.local.get([
            "zbaseConfig",
          ]);
          if ((console.log(e), e)) {
            const t = e.data.config.filter((e) => "moreTools" === e.name);
            t && 0 != t.length && t[0].params
              ? (this.moreToolsData = t[0].params)
              : (this.moreToolsData = Me),
              this.sortData();
          } else (this.moreToolsData = Me), this.sortData();
        },
        methods: {
          sortData() {
            this.moreToolsData.sort((e, t) => (e.id > t.id ? 1 : -1));
          },
          linkToUrl(e) {
            chrome.runtime.sendMessage(
              { type: "url", data: e },
              function () {}
            );
          },
          async getMoreToolsData(e, t) {
            return await new Promise((a) => {
              fetch(e, {
                method: "POST",
                body: t,
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
              }).then((e) => a(e.json()));
            });
          },
        },
      },
      Le = ze,
      Ee = (a("5d82"), Object(w["a"])(Le, Be, Fe, !1, null, "42178606", null)),
      Ie = Ee.exports,
      Ve = {
        name: "App",
        components: {
          CommonBottomHref: C,
          TopInfo: B,
          SendMessages: R,
          SendMessagesPro: Q,
          GroupTools: ne,
          Statistics: be,
          AttractDialog: Te,
          AttractDialogArabic: De,
          moreToolsVue: Ie,
        },
        data() {
          return {
            guideShowSend: !0,
            isGuide: !1,
            guideStep: 1,
            headTab: "pt" === this.$i18n.locale ? "headerTab pt" : "headerTab",
            concatsIsNull: !1,
            isShowSafetyWarningFlagValue: !1,
            isDontShowSafetyWarning: !1,
            file: null,
            sendMessagesText: this.$t("send_messages_t"),
            sendMessagesProText: this.$t("send_messages_pro_t"),
            activeName: m["f"] ? "send-messages-pro" : "send-messages",
            locale: this.$i18n.locale,
            downloadTemplateText: "Excel Template",
            agreeAndContinue: "Agree & Continue",
            sendMessageType: "simple",
            sendMessageStatisticsType: "simple",
            sendSilentSendValue: !1,
            groupOptions: [],
            groupsMap: {},
            chooseWarning: !1,
            beRemovedWarning: !1,
            statisticsText: this.$t("statistics_t"),
            exportGroupText: this.$t("group_tools_t"),
            sleepText: "Help",
            countSuccess: 0,
            countFail: 0,
            countAll: 0,
            countTotal: 0,
            deduplicated: 0,
            waitSeconds: 0,
            firstLoadValue: !1,
            selected: "",
            dropdownMap: {
              "User Guide": "https://wawebsender.com/sender-help",
              "Contact Us":
                "https://api.whatsapp.com/send/?phone=%2B8617891209984&text=Hi+WAPlus+Sender%21+I+have+a+question.",
            },
            dialogVisible: !1,
            dailySendNums: 0,
            phoneNumList: [],
            isShowContinueBtn: !1,
            loadingPage: null,
            disabledSendingFlag: !0,
            firstSendTime: "",
            browserType: "Chrome",
            notShowAgainModel: !1,
            waplus_remove_flag: m["f"],
            isShowAttractDialog: !1,
            zbaseConfig: { enforce: !1, attractDialogLink: "" },
            moreToolsText: this.$t("more_tools_t"),
          };
        },
        methods: {
          closeAttractDialog() {
            this.isShowAttractDialog = !1;
          },
          goToAttractDialogLink() {
            window.open(this.zbaseConfig.attractDialogLink);
          },
          guideBtnClick(e) {
            1 === e
              ? ((this.guideStep = 2), this.$sendLog(306201))
              : 2 === e
              ? ((this.guideStep = 3), this.$sendLog(306202))
              : (this.guideClose(), this.$sendLog(306203));
          },
          guideClose() {
            (this.guideShowSend = !1), this.sendPrivateDomain();
          },
          sendPrivateDomain() {
            chrome.tabs.query({ active: !0, currentWindow: !0 }, function (e) {
              chrome.tabs.sendMessage(e[0].id, { sendPrivateDomain: !0 });
            });
          },
          openWaHelpCenter() {
            window.open(
              "https://faq.whatsapp.com/general/download-and-installation/about-linked-devices"
            );
          },
          confirmSendDialogOpen() {
            chrome.storage.local.set({ sendMessageFlag: !1 });
            let e = this;
            chrome.storage.local.get("confirmSendData", function (t) {
              let a = t["confirmSendData"]["sendMessageType"];
              "simple" === a && e.$sendLog(300206, { s_type: 1 }),
                "pro" === a && e.$sendLog(300206, { s_type: 2 });
            });
          },
          confirmSendDialogClose() {
            let e = this;
            chrome.storage.local.get("confirmSendData", function (t) {
              let a = t["confirmSendData"]["sendMessageType"];
              "simple" === a && e.$sendLog(300207, { s_type: 1 }),
                "pro" === a && e.$sendLog(300207, { s_type: 2 });
            });
          },
          confirmSendDialog() {
            (this.dialogVisible = !1),
              this.notShowAgainModel &&
                chrome.storage.local.set({ dialogVisible: !1 });
            const e = this;
            chrome.storage.local.get(
              [
                "confirmSendData",
                "allDataImg",
                "allDataVideo",
                "allDataDocument",
                "confirmSetData",
              ],
              (t) => {
                if (
                  (t.confirmSetData &&
                    chrome.storage.local.set(t.confirmSetData),
                  "object" === typeof t.confirmSendData &&
                    null !== t.confirmSendData)
                ) {
                  let a = t.confirmSendData;
                  (a.allDataImg = t.allDataImg ? t.allDataImg : []),
                    (a.allDataVideo = t.allDataVideo ? t.allDataVideo : []),
                    (a.allDataDocument = t.allDataDocument
                      ? t.allDataDocument
                      : []);
                  let o = t["confirmSendData"]["sendMessageType"];
                  "simple" === o && e.$sendLog(300208, { s_type: 1 }),
                    "pro" === o && e.$sendLog(300208, { s_type: 2 }),
                    e.sendDataPopToContent(a);
                }
              }
            ),
              chrome.storage.local.set({ sendMessageFlag: !0 });
          },
          handleConfirmClick() {
            this.$nextTick(() => {
              this.sendMessageStatisticsType = this.sendMessageType;
              let e = "",
                t = "",
                a = "",
                o = "",
                n = "",
                s = "",
                i = "",
                l = "",
                r = "",
                c = "";
              const d = this;
              "pro" === this.sendMessageType &&
                ((e = this.$refs.messagePro.messageText),
                (t = this.$refs.messagePro.whatsAppNumbers),
                "Image" === this.$refs.messagePro.radio && (a = "img"),
                "Video" === this.$refs.messagePro.radio && (a = "video"),
                "Document" === this.$refs.messagePro.radio && (a = "doc"),
                "Contact" === this.$refs.messagePro.radio && (a = "contact"),
                (o = this.$refs.messagePro.minNum),
                (n = this.$refs.messagePro.maxNum),
                (s = this.sendSilentSendValue),
                (i = this.$refs.messagePro.uploadExcelValue),
                (c = this.$refs.messagePro.groupConcats),
                (l = !1),
                (r = "disabled")),
                "simple" === this.sendMessageType &&
                  ((e = this.$refs.messageSimple.messageTextSimple),
                  (t = this.$refs.messageSimple.whatsAppNumbersSimple),
                  (o = this.$refs.messageSimple.minNumSimple),
                  (n = this.$refs.messageSimple.maxNumSimple),
                  (l = "disabled"),
                  (r = !1)),
                (this.countAll = 0),
                (this.countTotal = 0),
                (this.deduplicated = 0),
                (this.countSuccess = 0),
                (this.countFail = 0),
                (this.waitSeconds = 0);
              const p = {
                  stopFlag: l,
                  stopFlagSimple: r,
                  sendMessageType: d.sendMessageType,
                  countAll: 0,
                  countTotal: 0,
                  deduplicated: 0,
                  countSuccess: 0,
                  countFail: 0,
                  activeName: "statistics",
                  phoneNumList: [],
                  phoneNumSuccessList: [],
                  phoneNumFailList: [],
                  sendMessageStatisticsType: d.sendMessageStatisticsType,
                  waitSeconds: 0,
                },
                u = {
                  phoneNum: t,
                  content: e,
                  mediaType: a,
                  minNum: o,
                  maxNum: n,
                  sentSilent: s,
                  stopFlag: l,
                  stopFlagSimple: r,
                  uploadExcel: i,
                  groupConcats: c,
                  sendMessageType: this.sendMessageType,
                  dailySendNums: this.dailySendNums,
                };
              chrome.storage.local.set({
                confirmSendData: u,
                confirmSetData: p,
              });
            });
          },
          notShowAgain(e) {
            let t = 1;
            e || (t = 2);
            let a = this;
            chrome.storage.local.get("confirmSendData", function (e) {
              let o = e["confirmSendData"]["sendMessageType"];
              "simple" === o && a.$sendLog(300209, { s_type: 1, s_status: t }),
                "pro" === o && a.$sendLog(300209, { s_type: 2, s_status: t });
            });
          },
          fnExport(e) {
            const t = c.a.utils.json_to_sheet(e);
            t["!cols"] = [
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
              { wch: 20 },
            ];
            const a = c.a.utils.book_new();
            c.a.utils.book_append_sheet(a, t, "sheet1"),
              c.a.writeFile(a, "Send Result.xlsx");
          },
          handleClick(e, t) {
            "send-messages" === this.activeName && this.$sendLog(301101),
              "send-messages-pro" === this.activeName && this.$sendLog(302101),
              "group-tools" === this.activeName && this.$sendLog(303101),
              "statistics" === this.activeName && this.$sendLog(304101),
              "0" === e.index
                ? ((this.sendMessageType = "simple"),
                  chrome.storage.local.set({
                    sendMessageType: this.sendMessageType,
                  }))
                : "1" === e.index &&
                  ((this.sendMessageType = "pro"),
                  chrome.storage.local.set({
                    sendMessageType: this.sendMessageType,
                  })),
              "4" !== e.index &&
                chrome.storage.local.set({ activeName: this.activeName });
          },
          sendDataPopToContent(e) {
            let t = "";
            chrome.storage.local
              .get(["urlStageFlag", "userPhoneNum"])
              .then((e) => {
                e.urlStageFlag &&
                  (chrome.storage.local.remove("urlStageFlag"),
                  chrome.runtime.sendMessage({
                    urlStageFlag: !0,
                    userPhoneNum: t,
                  }));
              }),
              chrome.tabs.query(
                { active: !0, currentWindow: !0 },
                function (t) {
                  chrome.tabs.sendMessage(t[0].id, e);
                }
              );
          },
          updateShowSafetyWarningFlag() {
            (this.isShowSafetyWarningFlagValue = !1),
              (this.activeName = "statistics");
            let e = this;
            chrome.storage.local.get("confirmSendData", function (t) {
              let a = t["confirmSendData"]["sendMessageType"];
              "simple" === a && e.$sendLog(300204, { s_type: 1 }),
                "pro" === a && e.$sendLog(300204, { s_type: 2 });
            }),
              this.isDontShowSafetyWarning
                ? chrome.storage.local.set({ isShowSafetyWarningFlagValue: !1 })
                : chrome.storage.local.set({
                    isShowSafetyWarningFlagValue: !0,
                  }),
              chrome.storage.local.get(
                [
                  "dialogVisible",
                  "confirmSetData",
                  "confirmSendData",
                  "allDataImg",
                  "allDataVideo",
                  "allDataDocument",
                ],
                (e) => {
                  if (!1 !== e.dialogVisible) this.dialogVisible = !0;
                  else if (
                    (e.confirmSetData &&
                      chrome.storage.local.set(e.confirmSetData),
                    "object" === typeof e.confirmSendData &&
                      null !== e.confirmSendData)
                  ) {
                    let t = e.confirmSendData;
                    (t.allDataImg = e.allDataImg ? e.allDataImg : []),
                      (t.allDataVideo = e.allDataVideo ? e.allDataVideo : []),
                      (t.allDataDocument = e.allDataDocument
                        ? e.allDataDocument
                        : []),
                      this.sendDataPopToContent(t);
                  }
                }
              );
          },
          sleep(e, t, a) {
            let o = 0;
            return (
              t >= e && (o = Math.floor(Math.random() * (t - e + 1) + e) * a),
              new Promise((e) => setTimeout(e, o))
            );
          },
          openOrCheckWaTab(e) {
            chrome.tabs.query({ currentWindow: !0 }, function (t) {
              if (t.length > 0) {
                const a = t.filter((e) => e.url);
                let o = a.find(
                  (e) =>
                    e.url.startsWith("http://web.whatsapp.com/") ||
                    e.url.startsWith("https://web.whatsapp.com/")
                );
                "undefined" !== typeof o
                  ? (chrome.tabs.highlight(
                      { tabs: o.index, windowId: o.windowId },
                      function () {
                        chrome.windows.update(o.windowId, { focused: !0 });
                      }
                    ),
                    "reload" === e && chrome.tabs.reload(o.id))
                  : window.open("https://web.whatsapp.com/");
              }
            });
          },
          messageBoxClose() {
            try {
              this.$msgbox.close();
            } catch (e) {}
          },
          updateIsShowContinueBtn(e) {
            (this.isShowContinueBtn = e),
              chrome.storage.local.set({ isShowContinueBtn: e });
          },
          updateDisabledSendingFlag(e) {
            (this.disabledSendingFlag = e),
              chrome.storage.local.set({ disabledSendingFlag: e });
          },
          supportUs(e) {
            chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
              chrome.tabs.sendMessage(t[0].id, { openChat: e });
            });
          },
          openSafetyDialog() {
            let e = this;
            chrome.storage.local.get("confirmSendData", function (t) {
              let a = t["confirmSendData"]["sendMessageType"];
              "simple" === a && e.$sendLog(300202, { s_type: 1 }),
                "pro" === a && e.$sendLog(300202, { s_type: 2 });
            });
          },
          closeSafetyDialog() {
            let e = this;
            chrome.storage.local.get("confirmSendData", function (t) {
              let a = t["confirmSendData"]["sendMessageType"];
              "simple" === a && e.$sendLog(300203, { s_type: 1 }),
                "pro" === a && e.$sendLog(300203, { s_type: 2 });
            });
          },
          againCheckBoxChange(e) {
            let t = 1;
            e || (t = 2);
            let a = this;
            chrome.storage.local.get("confirmSendData", function (e) {
              let o = e["confirmSendData"]["sendMessageType"];
              "simple" === o && a.$sendLog(300205, { s_type: 1, s_status: t }),
                "pro" === o && a.$sendLog(300205, { s_type: 2, s_status: t });
            });
          },
        },
        created: async function () {
          let e = this,
            t = "/js/inject/obfuscate.js",
            a = document.createElement("script");
          a.setAttribute("type", "text/javascript"),
            a.setAttribute("id", "inject"),
            (a.src = chrome.runtime.getURL(t)),
            (a.onload = function () {
              this.parentNode.removeChild(this);
            }),
            document.head.appendChild(a),
            await new Promise((t) => {
              chrome.storage.local.get("BulkSender_isGuide", function (a) {
                !1 === a.BulkSender_isGuide
                  ? (e.isGuide = !1)
                  : (e.isGuide = !0),
                  t("");
              });
            }),
            (this.browserType = Object(u["a"])()["browser"]),
            chrome.tabs.query({ active: !0, currentWindow: !0 }, function (t) {
              let a = t[0].url;
              var o = /^(http|https):\/\/web.whatsapp.com\/[^\s]*/;
              o.test(a) || e.openOrCheckWaTab();
            }),
            chrome.storage.local.get(
              [
                "allDataImg",
                "allDataVideo",
                "allDataDocument",
                "sendMessageFlag",
                "confirmSendData",
                "activeName",
                "firstSendTime",
                "userPhoneNum",
                "installEventFlag",
                "sendSilentSendValue",
                "countAll",
                "countTotal",
                "deduplicated",
                "countSuccess",
                "countFail",
                "waitSeconds",
                "chooseWarning",
                "beRemovedWarning",
                "dialogVisible",
                "dailySendNums",
                "sendMessageType",
                "phoneNumList",
                "disabledSendingFlag",
                "isShowContinueBtn",
              ],
              function (t) {
                if (!1 === t.sendMessageFlag) {
                  let a = t.confirmSendData;
                  (a.allDataImg = t.allDataImg ? t.allDataImg : []),
                    (a.allDataVideo = t.allDataVideo ? t.allDataVideo : []),
                    (a.allDataDocument = t.allDataDocument
                      ? t.allDataDocument
                      : []),
                    e.sendDataPopToContent(a),
                    chrome.storage.local.set({ sendMessageFlag: !0 });
                }
                if (
                  ("send-messages" === e.activeName && e.waplus_remove_flag
                    ? (e.activeName = "send-messages-pro")
                    : e.waplus_remove_flag &&
                      (e.activeName = t.activeName || "send-messages-pro"),
                  (e.firstSendTime = t.firstSendTime || ""),
                  e.$sendLog(300001),
                  "" === t.userPhoneNum)
                )
                  (e.firstLoadValue = !0),
                    e.$alert({}),
                    e
                      .$confirm(
                        "<p>" +
                          e.$t("failed_connect_1_t") +
                          "</p><br><p>" +
                          e.$t("failed_connect_2_1_t") +
                          (m["f"] ? "WA Web Sender" : "Premium Sender") +
                          e.$t("failed_connect_2_2_t") +
                          "</p>",
                        "",
                        {
                          customClass: "firstLoad",
                          showConfirmButton: !0,
                          confirmButtonText: "Reconnect",
                          showClose: !1,
                          showCancelButton: !1,
                          dangerouslyUseHTMLString: !0,
                          type: "warning",
                        }
                      )
                      .then(() => {
                        e.openOrCheckWaTab("reload");
                      });
                else if (
                  (chrome.tabs.query(
                    { active: !0, currentWindow: !0 },
                    function (t) {
                      chrome.tabs.sendMessage(t[0].id, { msgFlag: !0 }, (t) => {
                        t ||
                          (e.$sendLog(300009),
                          e
                            .$confirm(
                              "<p>" +
                                e.$t("failed_connect_1_t") +
                                "</p><br><p>" +
                                e.$t("failed_connect_2_1_t") +
                                (m["f"] ? "WA Web Sender" : "Premium Sender") +
                                e.$t("failed_connect_2_2_t") +
                                "</p>",
                              "",
                              {
                                customClass: "firstLoad",
                                showConfirmButton: !0,
                                confirmButtonText: "Reconnect",
                                showClose: !1,
                                showCancelButton: !1,
                                dangerouslyUseHTMLString: !0,
                                type: "warning",
                              }
                            )
                            .then(() => {
                              e.openOrCheckWaTab("reload");
                            }));
                      });
                    }
                  ),
                  !t.installEventFlag)
                ) {
                  const a = {
                    browserInfo: Object(u["a"])(),
                    platform: window.navigator.platform,
                    language: window.navigator.language,
                    phoneNum: t.userPhoneNum,
                  };
                  chrome.storage.local.set({ installEventFlag: !0, ...a }),
                    e.$sendLog(300005, a);
                }
                e.sendSilentSendValue = t.sendSilentSendValue;
                let a = { addJsSource: !0 };
                if (
                  (e.sendDataPopToContent(a),
                  e.sendDataPopToContent({ queryAllGroups: !0 }),
                  (e.countAll = t.countAll ? t.countAll : 0),
                  (e.countTotal = t.countTotal ? t.countTotal : 0),
                  (e.deduplicated = t.deduplicated ? t.deduplicated : 0),
                  (e.countSuccess = t.countSuccess ? t.countSuccess : 0),
                  (e.countFail = t.countFail ? t.countFail : 0),
                  (e.waitSeconds = t.waitSeconds ? t.waitSeconds : 0),
                  (e.chooseWarning = !!t.chooseWarning && t.chooseWarning),
                  (e.beRemovedWarning =
                    !!t.beRemovedWarning && t.beRemovedWarning),
                  (e.dialogVisible =
                    void 0 !== t.dialogVisible && t.dialogVisible),
                  (e.dailySendNums =
                    void 0 !== t.dailySendNums ? t.dailySendNums : {}),
                  (e.sendMessageType =
                    void 0 !== t.sendMessageType
                      ? t.sendMessageType
                      : "simple"),
                  (e.phoneNumList =
                    void 0 !== t.phoneNumList ? t.phoneNumList : []),
                  (e.disabledSendingFlag =
                    void 0 !== t.disabledSendingFlag && t.disabledSendingFlag),
                  (e.isShowContinueBtn =
                    void 0 !== t.isShowContinueBtn && t.isShowContinueBtn),
                  t.dailySendNums)
                ) {
                  const { isReachSendLimit: a, showConfirmTitle: o } =
                    e.$checkDailySendNums(t.dailySendNums);
                  if (a) {
                    let t = "";
                    0 === o.indexOf("First time")
                      ? ((t = o.replace(
                          "First time limit has been reached(50 messages)\n\n300 messages are available at ",
                          e.$t("first_time_1_t")
                        )),
                        (t = t.replace(".", e.$t("first_time_2_t"))))
                      : ((t = o.replace(
                          "300 messages are available at ",
                          e.$t("second_time_1_t")
                        )),
                        (t = t.replace(".", e.$t("second_time_2_t")))),
                      e.$confirm(t, "", {
                        confirmButtonText: "OK",
                        type: "warning",
                        showClose: !1,
                        showCancelButton: !1,
                        customClass: "daily-msg-send-warning",
                      });
                  }
                }
              }
            ),
            chrome.storage.local.get(["groupsInfo"], function (t) {
              let a = [],
                o = {};
              void 0 !== t.groupsInfo &&
                (t.groupsInfo.forEach((e, t) => {
                  a.push({
                    data: e.data,
                    key: e.key,
                    value: e.key,
                    label: e.label,
                  }),
                    (o[e.key] = e.data);
                }),
                chrome.storage.local.set({ groupOptions: a }),
                chrome.storage.local.set({ groupsMap: o })),
                (e.groupOptions = a),
                (e.groupsMap = o);
            }),
            chrome.storage.local.get(
              ["zbaseConfig", "lastShowAttractDialogTime"],
              (t) => {
                var a, o, n, s;
                if (
                  -1 ===
                  ["ar", "en", "es", "pt-PT", "pt-BR"].indexOf(
                    this.$i18n.locale
                  )
                )
                  return;
                let i =
                  null === (a = t.zbaseConfig) ||
                  void 0 === a ||
                  null === (o = a.data) ||
                  void 0 === o ||
                  null === (n = o.config) ||
                  void 0 === n ||
                  null === (s = n.find((e) => "bulkShunt" === e.name)) ||
                  void 0 === s
                    ? void 0
                    : s.params.dialog;
                i = (i && i[this.$i18n.locale]) || {};
                let l = t.lastShowAttractDialogTime || 0,
                  r = i.interval || 864e5;
                (i.enforce || (i.show && new Date().getTime() - l > r)) &&
                  ((e.isShowAttractDialog = !0),
                  (e.zbaseConfig.attractDialogLink = i.url),
                  (e.zbaseConfig.enforce = i.enforce),
                  chrome.storage.local.set({
                    lastShowAttractDialogTime: new Date().getTime(),
                  }));
              }
            );
        },
        computed: {
          pauseAndSendBtn() {
            return {
              countAll: this.countAll,
              countSuccess: this.countSuccess,
              countFail: this.countFail,
              waitSendNum: this.countAll - this.countSuccess,
            };
          },
          disabledSendingFlagData() {
            return { countAll: this.countAll, waitSeconds: this.waitSeconds };
          },
        },
        watch: {
          isShowSafetyWarningFlagValue: {
            immediate: !0,
            handler(e) {
              if (e) {
                let e = "";
                chrome.storage.local.set({ urlStageFlag: 1 }),
                  chrome.storage.local.get(["phoneNum"], (t) => {
                    (e = t.phoneNum || ""),
                      chrome.runtime.sendMessage({
                        urlStageFlag: !0,
                        userPhoneNum: e,
                      });
                  });
              }
            },
          },
          dialogVisible: {
            immediate: !0,
            handler(e) {
              if (e) {
                let e = "";
                chrome.storage.local.set({ urlStageFlag: 2 }),
                  chrome.storage.local.get(["phoneNum"], (t) => {
                    (e = t.phoneNum || ""),
                      chrome.runtime.sendMessage({
                        urlStageFlag: !0,
                        userPhoneNum: e,
                      });
                  });
              }
            },
          },
          pauseAndSendBtn: {
            handler(e, t) {
              if (e.countAll !== e.countSuccess + e.countFail) {
                if (e.countAll !== e.countSuccess || 0 !== e.countAll)
                  return e.countAll > e.countSuccess
                    ? 0 === t.countAll &&
                      0 === t.countFail &&
                      0 === t.countSuccess &&
                      0 === t.waitSendNum
                      ? void (
                          e.countAll === e.waitSendNum - e.countFail &&
                          this.updateIsShowContinueBtn(!1)
                        )
                      : void this.updateIsShowContinueBtn(!1)
                    : void this.updateIsShowContinueBtn(!0);
                this.updateIsShowContinueBtn(!1);
              } else this.updateIsShowContinueBtn(!0);
            },
            deep: !0,
          },
          disabledSendingFlagData: {
            handler(e, t) {
              0 === t.countAll &&
                0 === t.waitSeconds &&
                e.countAll > 0 &&
                this.updateDisabledSendingFlag(!0);
            },
            immediate: !0,
          },
          waitSeconds: {
            handler(e, t) {
              0 === e &&
                (this.updateDisabledSendingFlag(!0), this.messageBoxClose()),
                0 === t && e > 0 && this.updateDisabledSendingFlag(!1);
            },
            immediate: !0,
          },
        },
        mounted() {
          let e = this;
          chrome.runtime.onMessage.addListener(function (t, a, o) {
            if (
              (t.getProPermission &&
                ((e.isGuide = !1),
                chrome.storage.local.set({ BulkSender_isGuide: !1 })),
              t.stopFlag &&
                (e.$nextTick(() => {
                  e.$refs.messagePro.stopFlag = t.stopFlag;
                }),
                chrome.storage.local.set({ stopFlag: !0 })),
              t.stopFlagSimple &&
                (e.$nextTick(() => {
                  e.$refs.messageSimple.stopFlagSimple = t.stopFlagSimple;
                }),
                chrome.storage.local.set({ stopFlagSimple: t.stopFlagSimple })),
              t.countAll && (e.countAll = t.countAll),
              t.countTotal && (e.countTotal = t.countTotal),
              t.deduplicated && (e.deduplicated = t.deduplicated),
              t.countSuccess && (e.countSuccess = t.countSuccess),
              t.countFail && (e.countFail = t.countFail),
              void 0 !== t.waitSeconds && (e.waitSeconds = t.waitSeconds),
              void 0 !== t.chooseWarning && (e.chooseWarning = t.chooseWarning),
              void 0 !== t.beRemovedWarning &&
                (e.beRemovedWarning = t.beRemovedWarning),
              void 0 !== t.groupsInfo)
            ) {
              let a = [],
                o = {};
              t.groupsInfo.forEach((e, t) => {
                a.push({
                  data: e.data,
                  key: e.key,
                  value: e.key,
                  label: e.label,
                }),
                  (o[e.key] = e.data);
              }),
                (e.groupOptions = a),
                (e.groupsMap = o),
                chrome.storage.local.set({ groupOptions: a }),
                chrome.storage.local.set({ groupsMap: o });
            }
            if (
              (t.reloadPopup &&
                (window.location.reload(), this.updateIsShowContinueBtn(!1)),
              t.isReachSendLimit)
            ) {
              let a = "";
              0 === t.showConfirmTitle.indexOf("First time")
                ? ((a = t.showConfirmTitle.replace(
                    "First time limit has been reached(50 messages)\n\n300 messages are available at ",
                    e.$t("first_time_1_t")
                  )),
                  (a = a.replace(".", e.$t("first_time_2_t"))))
                : ((a = t.showConfirmTitle.replace(
                    "300 messages are available at ",
                    e.$t("second_time_1_t")
                  )),
                  (a = a.replace(".", e.$t("second_time_2_t")))),
                e.$confirm(a, "", {
                  confirmButtonText: "OK",
                  type: "warning",
                  showClose: !1,
                  showCancelButton: !1,
                  customClass: "daily-msg-send-warning",
                });
            }
            return (
              void 0 !== t.incrDailySendNums &&
                (e.dailySendNums = t.incrDailySendNums),
              t.phoneNumList && (e.phoneNumList = t.phoneNumList),
              void 0 !== t.disabledSendingFlag &&
                e.updateDisabledSendingFlag(t.disabledSendingFlag),
              o(),
              !0
            );
          });
        },
      },
      Oe = Ve,
      je =
        (a("1056"),
        a("b5a9"),
        Object(w["a"])(Oe, i, l, !1, null, "7e7ef174", null)),
      We = je.exports,
      Re = {
        name: "Main",
        components: { App: We },
        data() {
          return {
            functionMap: {
              joinGroup: function (e, t) {
                return new Promise((e) => {
                  chrome.tabs.query({ active: !0, currentWindow: !0 }, (a) => {
                    chrome.tabs.sendMessage(
                      a[0].id,
                      {
                        id: "joinGroup",
                        from: "popup",
                        message: { url: t.src },
                      },
                      e
                    );
                  });
                });
              },
            },
          };
        },
      },
      Ge = Re,
      Ue = Object(w["a"])(Ge, n, s, !1, null, null, null),
      qe = Ue.exports,
      He = a("5c96"),
      Ke = a.n(He),
      Ze = (a("0fae"), a("a925")),
      Je = a("c56e"),
      Xe = {
        en: {
          permission_tip: "Click here to experience the new version.",
          attract_dialog_tittle: "Announcement",
          attract_dialog_tip1:
            "This feature has been migrated to the new version of the extension.",
          attract_dialog_tip2: "Click here to experience it.",
          attract_dialog_success: "Discover the new version",
          period_t: ".",
          semicolon_t: ";",
          colon_t: ":",
          help_center_t: "Help Center",
          how_to_t: "How to use",
          leave_a_t: "Leave a Review ",
          support_t: "Support",
          share_t: "Share",
          send_messages_t: "Simple",
          whatsapp_numbers_t: "WhatsApp Numbers",
          country_code_t: m["f"]
            ? "Country code in front, separate using comma, like: +8615829292527,+8614747205581"
            : "Country code in front, separate using comma, like: +8613135587131,+8619197646821",
          message_text_t: "Message Text",
          select_template_t: "Select template",
          save_as_t: "Save as template",
          help_there_t:
            'Hello,there is a WhatsApp bulk message send tool I want to recommend to you. 🚀\n\n1️⃣ If you are interested, please reply "Yes" and I will show you more details.\n2️⃣ If it disturbs you, please reply "No" and I will not send you any more messages.\n',
          sending_settings_t: "Sending Settings",
          messages_will_t: "Messages will be sent randomly from this interval.",
          sending_interval_t: "Sending interval",
          seconds_t: "seconds",
          send_t: "Send",
          sending_t: "sending...",
          send_messages_pro_t: "Pro",
          whatsapp_numbers_excel_t: "WhatsApp Number's Excel",
          download_excel_template_t: "Download Excel Template",
          fill_it_t: "Fill It",
          upload_excel_t: "Upload Excel",
          how_to_use_t: "How to use",
          excel_template_t: "Excel Template",
          upload_excel_btn_t: "Upload Excel",
          send_to_t: "Send to group members 1 by 1",
          send_to_label: "Send to label members 1 by 1",
          no_data_t: "No Data",
          select_joined_send_t: "Select joined group to send message",
          apologize_for_t: "Apologize for bother",
          add_timestamp_t: "Add timestamp at the end",
          if_it_t:
            'If it disturbs you, please reply "No" and I will not send you any more messages.',
          send_attachments_t: "Send attachments",
          image_t: "Image",
          video_t: "Video",
          document_t: "Document",
          contact_t: "Contact",
          use_placeholder_t: "Add placeholder from Excel",
          personalized_t: "Personalized:",
          how_to_use_personalized_t: "How to use personalized fields",
          group_tools_t: "Export",
          export_group_t: "Export group members",
          select_joined_export_t: "Select joined group to export excel",
          select_joined_send_label: "Select the label you have created",
          exclude_group_t: "Exclude group admins",
          download_excel_t: "Download Excel",
          find_more_t: "Find more groups",
          this_feature_t: "This feature can help you find more related groups.",
          under_development_text_t: "Under development now, please see the ",
          under_development_link_t: "tutorial",
          if_you_text_t: "If you have any questions, please ",
          if_you_link_t: "contact us",
          statistics_t: "Statistics",
          more_tools_t: "More",
          current_sending_t: "Current sending progress",
          please_do_t: "Please do not leave, next message will be sent after",
          every_t:
            "Every 80 messages will be divided into one group, and there will be a 3-5min interval between each two groups.",
          send_results_t: "Send results",
          too_many_t:
            "Too many chats to manage? Help you manage more efficiently.",
          total_t: "Total",
          deduplicated_t: "Deduplicated",
          sent_successfully_t: "Sent successfully",
          failed_to_t: "Failed to send",
          troubleshooting_t: "Troubleshooting",
          no_network_t: "No Network",
          please_click_first_t: "please click ",
          please_click_second_t: '"Retry Failed"',
          wrong_number_t: "Wrong number",
          check_the_first_t: "Check the number's ",
          check_the_second_t: "format",
          check_if_first_t: "Check if the number is ",
          check_if_second_t: "real and active",
          pause_t: "Pause",
          continue_t: "Continue",
          export_results_t: "Export results",
          retry_failed_t: "Retry Failed",
          when_the_t:
            'When the message fails to be sent continuously, please click "Retry failed" button.',
          rate_for_t: "Rate for us if you like Premium Sender.",
          please_check_t:
            "Please check the upload Excel and make sure the correct WhatsApp number is filled in the first column.",
          check_the_entered_t: "Checking the number's format you entered. ",
          please_enter_please_t: "Please enter at least",
          please_enter_one_t: "one",
          please_enter_number_t: " number.",
          the_template_t: "The template has been saved.",
          please_enter_a_t: "Please enter a message or upload an attachment.",
          please_enter_at_t: "Please enter at least one number.（ ≥ 1 number）",
          safety_1_t: "Safety Suggestions",
          safety_2_t: "To avoid your account being banned, we suggest:",
          safety_3_1_t: "Account has been registered ",
          safety_3_2_t: " days",
          safety_4_1_t: "Mobile phone and website ",
          safety_4_2_t: "IP are in the same area",
          safety_5_1_t: "Do not ",
          safety_5_2_t: "switch IP frequently",
          safety_6_t: "Messages you could send:",
          safety_7_t: "50 max - the first day ",
          safety_8_t: "300 max - from second day ",
          agree_t: "Agree & Continue",
          donot_t: "Don't show again",
          suggest_1_t: "To avoid sending failed , we suggest:",
          suggest_2_t: "Do not switch the chat window.",
          suggest_3_t: "Stay here while messages are sending automatically.",
          suggest_4_t: "Only enable Premium Sender.",
          suggest_5_t:
            "Same type of extension will cause issue. Please close<br>other WhatsApp extensions, only open Premium Sender.",
          about_t: "About linked devices.",
          uploading_t: "Uploading attachment, please wait.",
          image_limit_t: "There's a 30 images/videos limit for each send.",
          size_limit_t:
            "There's a 16 MB size limit for each image/video you send.",
          choose_t: "Choose a group before export.",
          you_were_t: "You were removed from the group chat.",
          failed_connect_1_t:
            "Failed to connect to your WhatsApp, please refresh the page to reconnect.",
          failed_connect_2_1_t: "Otherwise, ",
          failed_connect_2_2_t: " will not work.",
          sent_at_t: "\nSent At: {{time stamp}}",
          first_time_1_t:
            "First time limit has been reached(50 messages)\n\n300 messages are available at ",
          first_time_2_t: ".",
          second_time_1_t: "300 messages are available at ",
          second_time_2_t: ".",
          button_attachments_t: "Button Message",
          button_text_t: "Text",
          button_link_t: "Link",
          button_call_t: "Call",
          pay_version: "Pay Version Feature",
          tool_choose_file: "Choose File Format:",
          tool_export_info: "Export Info From Group:",
          tool_export_Label: "Export Info From Label:",
          tool_export_now: "Export Now",
          tool_export_chat: "Export Info From ChatList:",
          tool_export_all: "Export All Contacts Info from ChatList",
          tool_export_no_all: "Export Unsaved Contacts Info from ChatList",
        },
        zh: {
          period_t: "。",
          semicolon_t: "；",
          colon_t: "：",
          help_center_t: "帮助中心",
          how_to_t: "使用教程",
          leave_a_t: "求五星好评",
          support_t: "在线客服",
          share_t: "分享",
          send_messages_t: "发送消息",
          whatsapp_numbers_t: "WhatsApp 号码",
          country_code_t: m["f"]
            ? "国家区号+手机号（号码间用逗号分隔），例如：+8615829292527，+8614747205581"
            : "国家区号+手机号（号码间用逗号分隔），例如：+8613135587131，+8619197646821",
          message_text_t: "消息内容",
          select_template_t: "选择消息模版",
          save_as_t: "另存为模版",
          help_there_t:
            "您好，我想给您推荐一个WhatsApp批量消息发送工具。\n1.如果您感兴趣，请回复“是”，我将向您展示更多细节。\n2.如果打扰到您，请回复“否”，我将不再给您发送任何消息。\n",
          sending_settings_t: "发送设置",
          messages_will_t: "消息将按照您设定的时间间隔，依次发送。",
          sending_interval_t: "发送时间间隔",
          seconds_t: "秒",
          send_t: "发送",
          sending_t: "发送中......",
          send_messages_pro_t: "发送消息·升级版",
          whatsapp_numbers_excel_t: "Excel批量发送",
          download_excel_template_t: "下载模版",
          fill_it_t: "按规则填写",
          upload_excel_t: "上传Excel",
          how_to_use_t: "使用教程",
          excel_template_t: "下载模版",
          upload_excel_btn_t: "上传Excel",
          send_to_t: "群成员消息群发",
          send_to_label: "Label成员消息群发",
          no_data_t: "无数据",
          select_joined_send_t: "选择您已加入的群组",
          apologize_for_t: "消息退订",
          add_timestamp_t: "添加发送时刻",
          if_it_t: "如果打扰到您，请回复“否”，我将不再给您发送任何消息。",
          send_attachments_t: "添加附件",
          image_t: "图片",
          video_t: "视频",
          document_t: "文件",
          contact_t: "名片",
          use_placeholder_t: "上传Excel并使用占位符",
          personalized_t: "个性化：",
          how_to_use_personalized_t: "如何编辑个性化消息",
          group_tools_t: "群工具",
          export_group_t: "导出群成员",
          select_joined_export_t: "请选择您已加入的群组",
          select_joined_send_label: "选择您已创建的标签",
          exclude_group_t: "排除群管理员",
          download_excel_t: "导出群成员",
          find_more_t: "寻找更多群组",
          this_feature_t: "这个功能可以帮你找到更多相关的群组",
          under_development_text_t: "正在开发中，请参阅",
          under_development_link_t: "教程",
          if_you_text_t: "如果你有任何问题，请",
          if_you_link_t: "联系我们",
          statistics_t: "数据看板",
          more_tools_t: "更多工具",
          current_sending_t: "当前发送进度",
          please_do_t: "请不要离开，下一条信息即将发出",
          every_t: "每80条信息分为一组，每组时间间隔3-5分钟。",
          send_results_t: "发送结果",
          too_many_t: "聊天太多难以应付？我们帮您高效管理。",
          total_t: "合计",
          deduplicated_t: "去重后",
          sent_successfully_t: "发送成功",
          failed_to_t: "发送失败",
          troubleshooting_t: "问题定位",
          no_network_t: "无网络",
          please_click_first_t: "请点击",
          please_click_second_t: "“失败重试”",
          wrong_number_t: "号码错误",
          check_the_first_t: "检查号码",
          check_the_second_t: "格式",
          check_if_first_t: "检查号码是否",
          check_if_second_t: "存在并活跃",
          pause_t: "暂停",
          continue_t: "继续",
          export_results_t: "导出结果",
          retry_failed_t: "失败重试",
          when_the_t: "当信息发送失败时，请点击“失败重试”按钮。",
          rate_for_t: "如果Premium Sender对您有帮助，求五星好评～",
          please_check_t:
            "请检查已上传的Excel，确保第一列已填入正确的whatsapp号码。",
          check_the_entered_t: "请检查您输入的号码格式。",
          please_enter_please_t: "请输入至少",
          please_enter_one_t: "一个",
          please_enter_number_t: " 号码。",
          the_template_t: "该模板已保存。",
          please_enter_a_t: "请至少输入一条消息或上传一个附件。",
          please_enter_at_t: "请输入至少一个号码。",
          safety_1_t: "安全提示",
          safety_2_t: "为避免您的帐户被禁止，我们建议：",
          safety_3_1_t: "账户已注册",
          safety_3_2_t: "天",
          safety_4_1_t: "手机和网站的",
          safety_4_2_t: "IP在同一个地区",
          safety_5_1_t: "不要",
          safety_5_2_t: "频繁切换IP",
          safety_6_t: "您可以发送的消息数量：",
          safety_7_t: "最高50条 - 第一天 ",
          safety_8_t: "最高300条 - 第二天及以后 ",
          agree_t: "同意并继续",
          donot_t: "不再显示",
          suggest_1_t: "为避免发送失败，我们建议：",
          suggest_2_t: "不要切换聊天窗口。",
          suggest_3_t: "在自动发送消息时不要关闭页面。",
          suggest_4_t: "仅开启 Premium Sender。",
          suggest_5_t:
            "同类型扩展会导致发送故障，请关闭其他扩展，只打开Sender。",
          about_t: "关于 WhatsApp 已连接的设备",
          uploading_t: "正在上传附件，请稍候。",
          image_limit_t: "每次发送的图像/视频的上限为 30 个。",
          size_limit_t: "您发送的每个图像/视频的大小限制为 16 MB。",
          choose_t: "导出前请选择一个组。",
          you_were_t: "您已从群聊中删除。",
          failed_connect_1_t: "连接WhatsApp失败，请刷新页面重试。",
          failed_connect_2_1_t: "否则，",
          failed_connect_2_2_t: "无法正常运行。",
          sent_at_t: "\n发送时刻: {{time stamp}}",
          first_time_1_t: "已达首日发送上限（50条），为了您的账号安全，请于",
          first_time_2_t:
            "后继续使用。\n\n从下一天起，发送额度将提升至300条/日。",
          second_time_1_t: "为了您的账号安全，请于",
          second_time_2_t:
            "后继续使用。\n\n从下一天起，发送额度将提升至300条/日。",
          button_attachments_t: "按钮消息",
          button_text_t: "文本",
          button_link_t: "链接",
          button_call_t: "电话",
          pay_version: "支付版本功能",
          tool_choose_file: "选择文件格式：",
          tool_export_info: "从群组导出信息",
          tool_export_Label: "从Label导出信息：",
          tool_export_now: "立即导出",
          tool_export_chat: "从聊天列表导出信息：",
          tool_export_all: "从聊天列表导出所有联系人信息",
          tool_export_no_all: "从聊天列表导出未保存的联系人信息",
        },
        pt: {
          period_t: ".",
          semicolon_t: ";",
          colon_t: ":",
          help_center_t: "Central de Ajuda",
          how_to_t: "Como Usar",
          leave_a_t: "Deixe uma Avaliação ",
          support_t: "Suporte",
          share_t: "Compartilhar",
          send_messages_t: "Simples",
          whatsapp_numbers_t: "Números de WhatsApp",
          country_code_t: m["f"]
            ? "Código do país na frente, separado por vírgula, como: +8615829292527,+8614747205581"
            : "Código do país na frente, separado por vírgula, como: +8613135587131,+8619197646821",
          message_text_t: "Texto da Mensagem",
          select_template_t: "Selecione o Modelo",
          save_as_t: "Salvar como modelo",
          help_there_t:
            'Oi, tem uma ferramenta de envio de mensagens em massa do WhatsApp que eu quero recomendar a você.\n\n1️⃣ Se você estiver interessado, por favor, responda "Sim" e eu lhe mostrarei mais detalhes.\n2️⃣ Se isso o incomoda, por favor, responda "Não" e eu não lhe enviarei mais mensagens.',
          sending_settings_t: "Configurações de Envio",
          messages_will_t:
            "As mensagens serão enviadas aleatoriamente a partir deste intervalo.",
          sending_interval_t: "Intervalo de envio",
          seconds_t: "segundos",
          send_t: "Enviar",
          sending_t: "Enviando...",
          send_messages_pro_t: "Pró",
          whatsapp_numbers_excel_t: "Excel de Números de WhatsApp",
          download_excel_template_t: "Download do Modelo de Excel",
          fill_it_t: "Preencha",
          upload_excel_t: "Upload do Excel",
          how_to_use_t: "Como usar",
          excel_template_t: "Modelo de excel",
          upload_excel_btn_t: "Upload do Excel",
          send_to_t: "Envie aos membros do grupo 1 por 1",
          send_to_label: "Envie aos membros do Rótulo 1 por 1",
          no_data_t: "Sem Dados",
          select_joined_send_t: "Selecione o grupo para enviar a mensagem",
          apologize_for_t: "Desculpas pelo incômodo",
          add_timestamp_t: "Adicionar horário no final",
          if_it_t:
            'Se isso o incomoda, por favor, responda "Não" e eu não lhe enviarei mais mensagens.',
          send_attachments_t: "Enviar anexos",
          image_t: "Imagem",
          video_t: "Vídeo",
          document_t: "Documento",
          contact_t: "Contato",
          use_placeholder_t: "Adicionar marcador do Excel",
          personalized_t: "Personalizado:",
          how_to_use_personalized_t: "Como utilizar os campos personalizados",
          group_tools_t: "Exportar",
          export_group_t: "Exportar membros do grupo",
          select_joined_export_t: "Selecione o grupo para exportar para Excel",
          select_joined_send_label: "Seleccione la etiqueta que ha creado",
          exclude_group_t: "Excluir os administradores do grupo",
          download_excel_t: "Download do Excel",
          find_more_t: "Encontrar mais grupos",
          this_feature_t:
            "Esta funcionalidade pode ajudar você a encontrar mais grupos relacionados.",
          under_development_text_t:
            "Em desenvolvimento agora, por favor, veja o ",
          under_development_link_t: "tutorial",
          if_you_text_t: "Se você tiver alguma dúvida, por favor, entre em ",
          if_you_link_t: "contato conosco",
          statistics_t: "Estatísticas",
          more_tools_t: "Mais",
          current_sending_t: "Progresso atual do envio",
          please_do_t:
            "Por favor, não saia, a próxima mensagem será enviada após",
          every_t:
            "Cada 80 mensagens serão divididas em um grupo, e haverá um intervalo de 3-5min entre cada dois grupos.",
          send_results_t: "Enviar resultados",
          too_many_t:
            "Conversas demais para administrar? Ajudamos você a administrar de forma mais eficiente.",
          total_t: "Total",
          deduplicated_t: "Desduplicado",
          sent_successfully_t: "Enviado com sucesso",
          failed_to_t: "Falha no envio",
          troubleshooting_t: "Solução de problemas",
          no_network_t: "Sem Rede",
          please_click_first_t: "por favor, clique em ",
          please_click_second_t: '"Nova Tentativa Falhou"',
          wrong_number_t: "Número errado",
          check_the_first_t: "Verifique o formato do ",
          check_the_second_t: "número",
          check_if_first_t: "Verifique se o número de telefone é ",
          check_if_second_t: "real e ativo",
          pause_t: "Pausar",
          continue_t: "Continuar",
          export_results_t: "Exportar resultados",
          retry_failed_t: "Nova Tentativa Falhou",
          when_the_t: "",
          rate_for_t: "Avalie se você gostou do Premium Sender.",
          please_check_t:
            "Por favor, verifique o upload do Excel e verifique se o número de WhatsApp está correto na primeira coluna.",
          check_the_entered_t:
            "Verificando o formato do número que você inseriu. ",
          please_enter_please_t: "Por favor, digite pelo menos",
          please_enter_one_t: "um",
          please_enter_number_t: " número.",
          the_template_t: "O modelo foi salvo.",
          please_enter_a_t:
            "Por favor, digite uma mensagem ou carregue um anexo.",
          please_enter_at_t:
            "Por favor, insira pelo menos um número. (≥ 1 número)",
          safety_1_t: "Sugestões de Segurança",
          safety_2_t: "Para evitar que sua conta seja banida, sugerimos:",
          safety_3_1_t: "A conta foi registrada ",
          safety_3_2_t: " dias",
          safety_4_1_t: "O telefone celular e o site ",
          safety_4_2_t: "IP estão na mesma área",
          safety_5_1_t: "Não ",
          safety_5_2_t: "troque o IP com frequência",
          safety_6_t: "Mensagens que você poderia enviar:",
          safety_7_t: "50 máximo - no primeiro dia ",
          safety_8_t: "300 máximo - a partir do segundo dia ",
          agree_t: "Concordar e Continuar",
          donot_t: "Não mostrar novamente",
          suggest_1_t: 'Para evitar o erro "envio falhou", sugerimos:',
          suggest_2_t: "Não troque a janela da conversa.",
          suggest_3_t:
            "Fique aqui enquanto as mensagens são enviadas<br>automaticamente.",
          suggest_4_t: "Mantenha a mesma rede.",
          suggest_5_t:
            "Certifique-se de que seu celular tenha uma conexão ativa<br>com a Internet.",
          about_t: "Sobre os dispositivos vinculados.",
          uploading_t:
            '<p style="position: absolute;top: -12px;left: 70px">Fazendo upload do anexo,<br>aguarde, por favor.</p>',
          image_limit_t: "Há um limite de 30 imagens/videos para cada envio.",
          size_limit_t:
            "Há um limite de 16 MB de tamanho para cada imagem/vídeo enviado.",
          choose_t: "Escolha um grupo antes de exportar.",
          you_were_t: "Você foi removido da conversa em grupo.",
          failed_connect_1_t:
            "Falha na conexão com seu WhatsApp, por favor, atualize a página para reconectar.",
          failed_connect_2_1_t: "Caso contrário, o ",
          failed_connect_2_2_t: " não funcionará.",
          sent_at_t: "\nEnviar às: {{time stamp}}",
          first_time_1_t:
            "O primeiro limite de tempo foi atingido (50 mensagens)\n\n300 mensagens estarão disponíveis às ",
          first_time_2_t: ".",
          second_time_1_t: "300 mensagens estarão disponíveis às ",
          second_time_2_t: ".",
        },
        es: {
          permission_tip: "Haz clic aquí para experimentar la nueva versión.",
          attract_dialog_tittle: "Anuncio",
          attract_dialog_tip1:
            "Esta característica ha sido migrada a la nueva versión de la extensión.",
          attract_dialog_tip2: "Haz clic aquí para experimentarla.",
          attract_dialog_success: "Descubra a nova versão",
        },
        "pt-PT": {
          permission_tip: "Clique aqui para experimentar a nova versão.",
          attract_dialog_tittle: "Anúncio",
          attract_dialog_tip1:
            "Esta funcionalidade foi migrada para a nova versão da extensão.",
          attract_dialog_tip2: "Clique aqui para experimentá-la.",
          attract_dialog_success: "Descubra a nova versão",
        },
        "pt-BR": {
          permission_tip: "Clique aqui para experimentar a nova versão.",
          attract_dialog_tittle: "Anúncio",
          attract_dialog_tip1:
            "Essa funcionalidade foi migrada para a nova versão da extensão.",
          attract_dialog_tip2: "Clique aqui para experimentá-la.",
          attract_dialog_success: "Descubra a nova versão",
        },
      },
      Qe = a("95b0");
    (o["default"].prototype.$sendLog = pe["b"]),
      (o["default"].prototype.$dealLog = pe["a"]),
      (o["default"].prototype.$checkDailySendNums = Je["checkDailySendNums"]),
      o["default"].use(Ke.a),
      o["default"].use(Ze["a"]),
      o["default"].use(Qe["a"]);
    const Ye = new Ze["a"]({
      locale: window.navigator.language || "en",
      messages: Xe,
    });
    new o["default"]({ i18n: Ye, el: "#app", render: (e) => e(qe) });
  },
  "0b7f": function (e, t, a) {
    var o = a("68d6");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("273b64b8", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "0fb6": function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return n;
    }),
      a.d(t, "b", function () {
        return o;
      });
    a("a689");
    function o(e) {
      if (!e) return "";
      try {
        e = "." + e;
        let t = [
          { country: "Ascension Island", tld: ".ac" },
          { country: "Andorra", tld: ".ad" },
          { country: "United Arab Emirates", tld: ".ae" },
          { country: "Afghanistan", tld: ".af" },
          { country: "Antigua and Barbuda", tld: ".ag" },
          { country: "Anguilla", tld: ".ai" },
          { country: "Albania", tld: ".al" },
          { country: "Armenia", tld: ".am" },
          { country: "Netherlands Antilles", tld: ".an" },
          { country: "Angola", tld: ".ao" },
          { country: "Antarctica", tld: ".aq" },
          { country: "Argentina", tld: ".ar" },
          { country: "American Samoa", tld: ".as" },
          { country: "Austria", tld: ".at" },
          { country: "Australia", tld: ".au" },
          { country: "Aruba", tld: ".aw" },
          { country: "Åland", tld: ".ax" },
          { country: "Azerbaijan", tld: ".az" },
          { country: "Bosnia and Herzegovina", tld: ".ba" },
          { country: "Barbados", tld: ".bb" },
          { country: "Bangladesh", tld: ".bd" },
          { country: "Belgium", tld: ".be" },
          { country: "Burkina Faso", tld: ".bf" },
          { country: "Bulgaria", tld: ".bg" },
          { country: "Bahrain", tld: ".bh" },
          { country: "Burundi", tld: ".bi" },
          { country: "Benin", tld: ".bj" },
          { country: "Bermuda", tld: ".bm" },
          { country: "Brunei", tld: ".bn" },
          { country: "Bolivia", tld: ".bo" },
          { country: "Bonaire", tld: ".bq" },
          { country: "Brazil", tld: ".br" },
          { country: "Bahamas", tld: ".bs" },
          { country: "Bhutan", tld: ".bt" },
          { country: "Bouvet Island", tld: ".bv" },
          { country: "Botswana", tld: ".bw" },
          { country: "Belarus", tld: ".by" },
          { country: "Belize", tld: ".bz" },
          { country: "Brittany", tld: ".bzh" },
          { country: "Canada", tld: ".ca" },
          { country: "Cocos (Keeling) Islands", tld: ".cc" },
          { country: "Democratic Republic of the Congo", tld: ".cd" },
          { country: "Central African Republic", tld: ".cf" },
          { country: "Republic of the Congo", tld: ".cg" },
          { country: "Switzerland  ", tld: ".ch" },
          { country: "Ivory Coast", tld: ".ci" },
          { country: "Cook Islands", tld: ".ck" },
          { country: "Chile", tld: ".cl" },
          { country: "Cameroon", tld: ".cm" },
          { country: "People's Republic of China", tld: ".cn" },
          { country: "Colombia", tld: ".co" },
          { country: "Costa Rica", tld: ".cr" },
          { country: "Cuba", tld: ".cu" },
          { country: "Cape Verde", tld: ".cv" },
          { country: "Curaçao Curaçao, West Indies", tld: ".cw" },
          { country: "Christmas Island", tld: ".cx" },
          { country: "Cyprus", tld: ".cy" },
          { country: "Czech Republic", tld: ".cz" },
          { country: "East Germany", tld: ".dd" },
          { country: "Germany", tld: ".de" },
          { country: "Djibouti", tld: ".dj" },
          { country: "Denmark", tld: ".dk" },
          { country: "Dominica", tld: ".dm" },
          { country: "Dominican Republic", tld: ".do" },
          { country: "Algeria", tld: ".dz" },
          { country: "Ecuador", tld: ".ec" },
          { country: "Estonia", tld: ".ee" },
          { country: "Egypt", tld: ".eg" },
          { country: "Western Sahara", tld: ".eh" },
          { country: "Eritrea", tld: ".er" },
          { country: "Spain", tld: ".es" },
          { country: "Ethiopia", tld: ".et" },
          { country: "European Union", tld: ".eu" },
          { country: "Finland", tld: ".fi" },
          { country: "Fiji", tld: ".fj" },
          { country: "Falkland Islands", tld: ".fk" },
          { country: "Federated States of Micronesia", tld: ".fm" },
          { country: "Faroe Islands Føroyar", tld: ".fo" },
          { country: "France", tld: ".fr" },
          { country: "Gabon", tld: ".ga" },
          { country: "United Kingdom", tld: ".gb" },
          { country: "Grenada", tld: ".gd" },
          { country: "Georgia", tld: ".ge" },
          { country: "French Guiana  ", tld: ".gf" },
          { country: "Guernsey  ", tld: ".gg" },
          { country: "Ghana", tld: ".gh" },
          { country: "Gibraltar", tld: ".gi" },
          { country: "Greenland", tld: ".gl" },
          { country: "The Gambia", tld: ".gm" },
          { country: "Guinea", tld: ".gn" },
          { country: "Guadeloupe", tld: ".gp" },
          { country: "Equatorial Guinea  ", tld: ".gq" },
          { country: "Greece", tld: ".gr" },
          { country: "South Georgia and the South Sandwich Is", tld: ".gsla" },
          { country: "Guatemala", tld: ".gt" },
          { country: "Guam", tld: ".gu" },
          { country: "GuineaBissau", tld: ".gw" },
          { country: "Guyana", tld: ".gy" },
          { country: "Hong Kong", tld: ".hk" },
          { country: "Heard Island and McDonald Islands", tld: ".hm" },
          { country: "Honduras", tld: ".hn" },
          { country: "Croatia", tld: ".hr" },
          { country: "Haiti", tld: ".ht" },
          { country: "Hungary", tld: ".hu" },
          { country: "Indonesia", tld: ".id" },
          { country: "Ireland", tld: ".ie" },
          { country: "Israel", tld: ".il" },
          { country: "Isle of Man", tld: ".im" },
          { country: "India", tld: ".in" },
          { country: "British Indian Ocean Territory", tld: ".io" },
          { country: "Iraq", tld: ".iq" },
          { country: "Iran", tld: ".ir" },
          { country: "Iceland", tld: ".is" },
          { country: "Italy", tld: ".it" },
          { country: "Jersey", tld: ".je" },
          { country: "Jamaica", tld: ".jm" },
          { country: "Jordan", tld: ".jo" },
          { country: "Japan", tld: ".jp" },
          { country: "Kenya", tld: ".ke" },
          { country: "Kyrgyzstan", tld: ".kg" },
          { country: "Cambodia", tld: ".kh" },
          { country: "Kiribati", tld: ".ki" },
          { country: "Comoros Komori", tld: ".km" },
          { country: "Saint Kitts and Nevis", tld: ".kn" },
          { country: "Democratic People's Republic of Korea", tld: ".kp" },
          { country: "Republic of Korea", tld: ".kr" },
          { country: "Kurdistan", tld: ".krd" },
          { country: "Kuwait", tld: ".kw" },
          { country: "Cayman Islands", tld: ".ky" },
          { country: "Kazakhstan", tld: ".kz" },
          { country: "Laos", tld: ".la" },
          { country: "Lebanon", tld: ".lb" },
          { country: "Saint Lucia", tld: ".lc" },
          { country: "Liechtenstein", tld: ".li" },
          { country: "Sri Lanka Lanka", tld: ".lk" },
          { country: "Liberia", tld: ".lr" },
          { country: "Lesotho", tld: ".ls" },
          { country: "Lithuania", tld: ".lt" },
          { country: "Luxembourg", tld: ".lu" },
          { country: "Latvia", tld: ".lv" },
          { country: "Libya", tld: ".ly" },
          { country: "Morocco", tld: ".ma" },
          { country: "Monaco", tld: ".mc" },
          { country: "Moldova", tld: ".md" },
          { country: "Montenegro", tld: ".me" },
          { country: "Madagascar", tld: ".mg" },
          { country: "Marshall Islands", tld: ".mh" },
          { country: "Macedonia", tld: ".mk" },
          { country: "Mali", tld: ".ml" },
          { country: "Myanmar", tld: ".mm" },
          { country: "Mongolia", tld: ".mn" },
          { country: "Macau", tld: ".mo" },
          { country: "Northern Mariana Islands", tld: ".mp" },
          { country: "Martinique", tld: ".mq" },
          { country: "Mauritania", tld: ".mr" },
          { country: "Montserrat", tld: ".ms" },
          { country: "Malta", tld: ".mt" },
          { country: "Mauritius", tld: ".mu" },
          { country: "Maldives", tld: ".mv" },
          { country: "Malawi", tld: ".mw" },
          { country: "Mexico", tld: ".mx" },
          { country: "Malaysia", tld: ".my" },
          { country: "Mozambique", tld: ".mz" },
          { country: "Namibia", tld: ".na" },
          { country: "New Caledonia", tld: ".nc" },
          { country: "Niger", tld: ".ne" },
          { country: "Norfolk Island", tld: ".nf" },
          { country: "Nigeria", tld: ".ng" },
          { country: "Nicaragua", tld: ".ni" },
          { country: "Netherlands  ", tld: ".nl" },
          { country: "Norway", tld: ".no" },
          { country: "Nepal", tld: ".np" },
          { country: "Nauru", tld: ".nr" },
          { country: "Niue", tld: ".nu" },
          { country: "New Zealand", tld: ".nz" },
          { country: "Oman", tld: ".om" },
          { country: "Panama", tld: ".pa" },
          { country: "Peru", tld: ".pe" },
          { country: "French Polynesia  ", tld: ".pf" },
          { country: "Papua New Guinea", tld: ".pg" },
          { country: "Philippines", tld: ".ph" },
          { country: "Pakistan", tld: ".pk" },
          { country: "Poland", tld: ".pl" },
          { country: "SaintPierre and Miquelon", tld: ".pm" },
          { country: "Pitcairn Islands", tld: ".pn" },
          { country: "Puerto Rico", tld: ".pr" },
          { country: "State of Palestine", tld: ".ps" },
          { country: "Portugal", tld: ".pt_BR" },
          { country: "Palau Pelew", tld: ".pw" },
          { country: "Paraguay", tld: ".py" },
          { country: "Qatar", tld: ".qa" },
          { country: "Réunion", tld: ".re" },
          { country: "Romania", tld: ".ro" },
          { country: "Serbia", tld: ".rs" },
          { country: "Russia", tld: ".ru" },
          { country: "Rwanda", tld: ".rw" },
          { country: "Saudi Arabia", tld: ".sa" },
          { country: "Solomon Islands  ", tld: ".sb" },
          { country: "Seychelles", tld: ".sc" },
          { country: "Sudan", tld: ".sd" },
          { country: "Sweden", tld: ".se" },
          { country: "Singapore", tld: ".sg" },
          { country: "Saint Helena", tld: ".sh" },
          { country: "Slovenia", tld: ".si" },
          { country: "Slovakia", tld: ".sk" },
          { country: "Sierra Leone", tld: ".sl" },
          { country: "San Marino", tld: ".sm" },
          { country: "Senegal", tld: ".sn" },
          { country: "Somalia", tld: ".so" },
          { country: "Suriname", tld: ".sr" },
          { country: "South Sudan", tld: ".ss" },
          { country: "São Tomé and Príncipe", tld: ".st" },
          { country: "Soviet Union", tld: ".su" },
          { country: "El Salvador", tld: ".sv" },
          { country: "Sint Maarten", tld: ".sx" },
          { country: "Syria", tld: ".sy" },
          { country: "Swaziland", tld: ".sz" },
          { country: "Turks and Caicos Islands", tld: ".tc" },
          { country: "Chad", tld: ".td" },
          { country: "French Southern and Antarctic Lands", tld: ".tf" },
          { country: "Togo", tld: ".tg" },
          { country: "Thailand", tld: ".th" },
          { country: "Tajikistan", tld: ".tj" },
          { country: "Tokelau", tld: ".tk" },
          { country: "East Timor", tld: ".tl" },
          { country: "Turkmenistan", tld: ".tm" },
          { country: "Tunisia", tld: ".tn" },
          { country: "Tonga", tld: ".to" },
          { country: "East Timor", tld: ".tp" },
          { country: "Turkey", tld: ".tr" },
          { country: "Trinidad and Tobago", tld: ".tt" },
          { country: "Tuvalu", tld: ".tv" },
          { country: "Taiwan", tld: ".tw" },
          { country: "Tanzania", tld: ".tz" },
          { country: "Ukraine  ", tld: ".ua" },
          { country: "Uganda", tld: ".ug" },
          { country: "United Kingdom", tld: ".uk" },
          { country: "United States of America", tld: ".us" },
          { country: "Uruguay", tld: ".uy" },
          { country: "Uzbekistan", tld: ".uz" },
          { country: "Vatican City", tld: ".va" },
          { country: "Saint Vincent and the Grenadines", tld: ".vc" },
          { country: "Venezuela", tld: ".ve" },
          { country: "British Virgin Islands", tld: ".vg" },
          { country: "United States Virgin Islands", tld: ".vi" },
          { country: "Vietnam", tld: ".vn" },
          { country: "Vanuatu", tld: ".vu" },
          { country: "Wallis and Futuna", tld: ".wf" },
          { country: "Samoa", tld: ".ws" },
          { country: "Yemen", tld: ".ye" },
          { country: "Mayotte", tld: ".yt" },
          { country: "SFR Yugoslavia", tld: ".yu" },
          { country: "South Africa", tld: ".za" },
          { country: "Zambia", tld: ".zm" },
          { country: "Zaire", tld: ".zr" },
          { country: "Zimbabwe", tld: ".zw" },
        ];
        for (let a in t)
          if (e.toLowerCase() === t[a].tld.toLowerCase()) return t[a].country;
      } catch (t) {
        return "";
      }
    }
    function n(e) {
      let t = [],
        a = e["participants"];
      for (let o = 0; o < a.length; o++) {
        let e = {};
        (e["phoneNum"] = a[o]["id"]["user"] ? a[o]["id"]["user"] : ""),
          t.push(e["phoneNum"]);
      }
      return t;
    }
  },
  1: function (e, t) {},
  1056: function (e, t, a) {
    "use strict";
    a("e124");
  },
  1115: function (e, t, a) {
    "use strict";
    function o(e) {
      let t = [],
        a = [],
        o = [],
        n = [],
        s = document.createElement("input");
      (s.type = "file"),
        s.setAttribute("multiple", ""),
        s.setAttribute("accept", "image/*"),
        (e.radio = ""),
        chrome.storage.local.set({ radio: e.radio }),
        (s.onchange = (l) => {
          try {
            let l = Array.from(s.files);
            if ((c(e.$t("uploading_t"), e), l.length > 30))
              return void d(e.$t("image_limit_t"), e);
            for (let o = 0; o < l.length; o++) {
              let s = l[o];
              if (s.size > 16777216) return void p(e.$t("size_limit_t"), e);
              i(s).then((e) => {
                const o = e;
                a.push(o), t.push(s), n.push(s.name);
              });
            }
            setTimeout(function () {
              let s = r(n);
              if (s.length > 0) {
                e.attachmentDivHtml = s;
                for (let e = 0; e < t.length; e++)
                  o.push({
                    e: JSON.stringify(a[e]),
                    fileName: t[e].name,
                    caption: "",
                  });
                (e.radio = "Image"),
                  chrome.storage.local.set({
                    allDataImg: o,
                    attachmentDivHtml: s,
                    radio: e.radio,
                  });
              }
              e.$msgbox.close();
            }, 1e3);
          } catch (u) {
            e.$sendLog(302310, { s_status: 1 });
          }
        }),
        s.click();
    }
    function n(e) {
      let t = [],
        a = [],
        o = [],
        n = [],
        s = document.createElement("input");
      (s.type = "file"),
        s.setAttribute("multiple", ""),
        s.setAttribute("accept", "audio/*,video/*"),
        (e.radio = ""),
        chrome.storage.local.set({ radio: e.radio }),
        (s.onchange = (l) => {
          try {
            let l = Array.from(s.files);
            if ((c(e.$t("uploading_t"), e), l.length > 30))
              return void d(e.$t("image_limit_t"), e);
            for (let o = 0; o < l.length; o++) {
              let s = l[o];
              if (s.size > 16777216) return void p(e.$t("size_limit_t"), e);
              i(s).then((e) => {
                const o = e;
                a.push(o), t.push(s), n.push(s.name);
              });
            }
            setTimeout(function () {
              let s = r(n);
              if (s.length > 0) {
                e.attachmentDivHtml = s;
                for (let e = 0; e < t.length; e++)
                  o.push({
                    e: JSON.stringify(a[e]),
                    fileName: t[e].name,
                    caption: "",
                  });
                (e.radio = "Video"),
                  chrome.storage.local.set({
                    allDataVideo: o,
                    attachmentDivHtml: s,
                    radio: e.radio,
                  });
              }
              e.$msgbox.close();
            }, 1e3);
          } catch (u) {
            e.$sendLog(302310, { s_status: 2, ex: u });
          }
        }),
        s.click();
    }
    function s(e) {
      let t = [],
        a = [],
        o = [],
        n = [],
        s = document.createElement("input");
      (s.type = "file"),
        (e.radio = ""),
        chrome.storage.local.set({ radio: e.radio }),
        (s.onchange = (l) => {
          try {
            let l = Array.from(s.files);
            c(e.$t("uploading_t"), e);
            for (let e = 0; e < l.length; e++) {
              let o = l[e];
              i(o).then((e) => {
                const s = e;
                a.push(s), t.push(o), n.push(o.name);
              });
            }
            setTimeout(function () {
              let s = r(n);
              if (s.length > 0) {
                e.attachmentDivHtml = s;
                for (let e = 0; e < t.length; e++)
                  o.push({
                    e: JSON.stringify(a[e]),
                    fileName: t[e].name,
                    caption: "",
                  });
                (e.radio = "Document"),
                  chrome.storage.local.set({
                    allDataDocument: o,
                    attachmentDivHtml: s,
                    radio: e.radio,
                  });
              }
              e.$msgbox.close();
            }, 1e3);
          } catch (d) {
            e.$sendLog(302310, { s_status: 3, ex: d });
          }
        }),
        s.click();
    }
    function i(e) {
      return new Promise((t, a) => {
        const o = new FileReader();
        o.readAsDataURL(e),
          (o.onload = () => t(o.result)),
          (o.onerror = (e) => a(e));
      });
    }
    function l(e, t) {
      var a = e.split(","),
        o = a[0].match(/:(.*?);/)[1],
        n = atob(a[1]),
        s = n.length,
        i = new Uint8Array(s);
      while (s--) i[s] = n.charCodeAt(s);
      return new File([i], t, { type: o });
    }
    function r(e) {
      let t = "";
      for (let a = 0; a < e.length; a++)
        t +=
          '<p style="overflow: hidden;text-overflow: ellipsis;width: 240px;white-space: nowrap;margin-bottom: 2px">' +
          e[a] +
          "</p>";
      return t;
    }
    function c(e, t) {
      const a = t.$createElement;
      t.$confirm("", "", {
        customClass: "emptyContent deleteConfirmHeader",
        showConfirmButton: !1,
        showCancelButton: !1,
        showClose: !1,
        closeOnPressEscape: !1,
        closeOnClickModal: !1,
        closeOnHashChange: !1,
        center: !0,
        message: a("div", null, [
          a("div", { style: { height: "101px" } }, [
            a("div", {
              attrs: { class: "el-icon-loading loading-green-icon" },
              style: {
                fontSize: "50px",
                margin: "26px auto 30px auto",
                position: "absolute",
                left: "9%",
                top: "1%",
              },
            }),
            a("span", {
              domProps: { innerHTML: e },
              style: {
                color: "rgba(48, 49, 51, 100)}",
                fontSize: "18px",
                margin: "auto auto 0 18px",
                position: "absolute",
                left: "5%",
                top: "43%",
                width: "100%",
              },
            }),
          ]),
        ]),
      });
    }
    function d(e, t) {
      t.$confirm("", e, {
        customClass: "emptyContent",
        showConfirmButton: !1,
        showCancelButton: !1,
        center: !0,
        type: "warning",
      });
    }
    function p(e, t) {
      t.$confirm("", e, {
        customClass: "emptyContent",
        showConfirmButton: !1,
        showCancelButton: !1,
        center: !0,
        type: "warning",
      });
    }
    a.d(t, "c", function () {
      return o;
    }),
      a.d(t, "d", function () {
        return n;
      }),
      a.d(t, "b", function () {
        return s;
      }),
      a.d(t, "a", function () {
        return l;
      });
  },
  "12d2": function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".activeCodeDialog .el-dialog__header{padding:20px;background-color:#37b64a}.activeCodeDialog .el-dialog__header .el-dialog__title{font-family:SourceHanSansSC-bold;color:#fff}.activeCodeDialog .el-dialog__body{padding:25px 25px 10px 25px!important}",
        "",
      ]),
      (e.exports = t);
  },
  1362: function (e, t, a) {
    var o = a("bf34");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("6e4a812f", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "175e": function (e, t, a) {
    "use strict";
    function o(e) {
      chrome.storage.local.get(["groupPhoneNumList"], function (t) {
        let a = void 0 !== t.groupPhoneNumList ? t.groupPhoneNumList : [],
          o = e.split(",");
        for (let e = 0; e < o.length; e++)
          (o[e] = o[e].replace("+", "")),
            (o[e] = o[e].replace(" ", "")),
            a.push(o[e]);
        chrome.storage.local.set({ groupPhoneNumList: a });
      });
    }
    function n(e) {
      return new Promise(function (t) {
        let a = !1;
        chrome.storage.local.get(["groupPhoneNumList"], function (t) {
          let o = void 0 !== t.groupPhoneNumList ? t.groupPhoneNumList : [];
          0 === o.length && (a = !1);
          for (let n = 0; n < o.length; n++) e === o[n] && (a = !0);
        }),
          setTimeout(async function () {
            t(a);
          }, 300);
      });
    }
    a.d(t, "a", function () {
      return o;
    }),
      a.d(t, "b", function () {
        return n;
      });
  },
  "1d5d": function (e, t, a) {
    var o = a("9506");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("e872d798", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  2: function (e, t) {},
  2617: function (e, t, a) {
    var o = a("fb0b");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("5f6b271a", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "280f": function (e, t, a) {
    "use strict";
    a("0233");
  },
  "284a": function (e, t, a) {
    "use strict";
    a("5b2f");
  },
  "29de": function (e, t, a) {
    "use strict";
    a.d(t, "a", function () {
      return i;
    });
    const o = "pro",
      n = "simple",
      s = "disabled";
    function i(e) {
      if (e !== o && e !== n) return;
      let t = !1,
        a = !1;
      return (
        e === n && ((t = s), (a = !1)),
        e === o && ((t = !1), (a = s)),
        { stopFlag: t, stopFlagSimple: a }
      );
    }
  },
  "2ceb": function (e, t, a) {
    var o = a("0756");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("f6792a82", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "2d02": function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".active-code[data-v-bb9dceba]{display:inline-block;width:90%}.el-dialog.el-dialog--center.activeCodeDialog>.el-dialog__footer[data-v-bb9dceba]{margin:6px auto 17px;padding-top:0!important}.codeInput[data-v-bb9dceba]{text-align:left;margin-bottom:5px}.codeInput>div[data-v-bb9dceba]{align-items:center;margin-right:25px;padding:10px 0;cursor:pointer}.el-dialog__footer .el-button--success[data-v-bb9dceba],.el-dialog__footer .el-button--success[data-v-bb9dceba]:hover{width:215px;height:32px;border-radius:4px;background-color:#37b64a;font-size:14px;text-align:center;font-family:Roboto;align-items:center;justify-content:center;padding:0}",
        "",
      ]),
      (e.exports = t);
  },
  3: function (e, t, a) {
    e.exports = a("0a3d");
  },
  "33db": function (e, t, a) {
    "use strict";
    a("f208");
  },
  "4e50": function (e, t, a) {
    "use strict";
    a.d(t, "b", function () {
      return o;
    }),
      a.d(t, "c", function () {
        return n;
      }),
      a.d(t, "e", function () {
        return i;
      }),
      a.d(t, "d", function () {
        return l;
      }),
      a.d(t, "f", function () {
        return s;
      }),
      a.d(t, "a", function () {
        return r;
      });
    const o = "premium",
      n = "scrm-premium-sender",
      s = !1,
      i = "Premium Sender",
      l = "+8613135587131,+8619197646821",
      r = 49;
  },
  "5a80": function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".common-bottom-href[data-v-6757faba]{text-align:center;font-size:14px;font-family:SourceHanSansSC-regular;color:#000;height:30px;line-height:30px;margin-top:15px;margin-left:-20px;font-weight:700}.common-bottom-href a[data-v-6757faba]{color:#3a1ec1;font-weight:400}",
        "",
      ]),
      (e.exports = t);
  },
  "5b2f": function (e, t, a) {
    var o = a("905e");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("ea50ee58", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "5d82": function (e, t, a) {
    "use strict";
    a("2ceb");
  },
  "5fb8": function (e, t, a) {
    var o = a("5a80");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("05954c15", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "68d6": function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([e.i, ".titleText{font-weight:bolder}", ""]),
      (e.exports = t);
  },
  7267: function (e, t, a) {
    "use strict";
    a("f7d8");
  },
  "7c60": function (e, t, a) {
    "use strict";
    a("1d5d");
  },
  8108: function (e, t, a) {
    var o = a("2d02");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("7fcc258a", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "824a": function (e, t, a) {
    "use strict";
    a("1362");
  },
  "889a": function (e) {
    e.exports = JSON.parse(
      '[{"id":1000,"iconUrl":"https://lh3.googleusercontent.com/cG2OmAtMyp1THzMAp6mRGmZnF_lYDz_8x6umuBz1aRTReZjC_3XnAX7v9ZwEtwE8ADo6EipMtRsj-dj4p1XwVMgWzls=w128-h128-e365-rj-sc0x00ffffff0","pluginDescriptor":"WA Bulk Message Sender","tags":[{"text":"new","type":"danger"}],"linkUrl":"https://chrome.google.com/webstore/detail/wa-bulk-message-sender/fhkimgpddcmnleeaicdjggpedegolbkb?hl=zh-CN&authuser=0"},{"id":1100,"iconUrl":"https://lh3.googleusercontent.com/8D97XRP79F-8hfPLG3287-t9diuV64wmd0BDLQNyY4CJXAyvUasaqLkY0AxSA76ntIqVwC4BeOr-Z7GbGOF3Ldg4yQ=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"Easy Sender for WhatsApp Web","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/easy-sender-for-whatsapp/khfmfdepnleebhonomgihppncahojfig?hl=zh-CN&authuser=0"},{"id":1200,"iconUrl":"https://lh3.googleusercontent.com/nSFlClwrLjOmgXwd-Zakv9trlNVS4AoeyMpzVePt0ga3C8nMAVSs3HpTXuDMloN2M3vZvtxVJwedohlU7y7ctsU=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"Web Sender","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/web-sender/fngmlbjdnbieamehlidbkaikefhkkian"},{"id":1300,"iconUrl":"https://lh3.googleusercontent.com/VZoixPg9nhcINEoXpoo5135N5moZBItTyC94raGAhD06Dy2u2YE4ODs8vcIELYjHNTMNPP98Nb-nrZBQAs6zlaGe=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"WAPI - Send personalized messages","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/wapi-send-personalized-me/nmbjblpeeiobnakglbickhpgbinojbch"},{"id":1400,"iconUrl":"https://lh3.googleusercontent.com/Irig43XMETRn8vyVuMX9nThjj-7Zv2_Rz1d5B93MsnO1Pmhj4Tf_cuMuKkuC3uxKdm9Ro-y1gLOW6rz8umGRQn_a0Sw=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"WA Web Sender","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/wa-web-sender/fjfnifgmikimkaemhllmmmamkichknle"},{"id":1500,"iconUrl":"https://lh3.googleusercontent.com/sJERVz0Zi4kEIsHPS_4M7D11RUzim-csEtd4hrYCNO3XZ6rtlOy3pQuiJVCBFv_oHKlVJx809Gq0Xe30frvznvaX=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"2 Whats Sender","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/2-whats-sender/iefhbdnbjfimdpldnmmikgnckdfhnpoi"},{"id":1600,"iconUrl":"https://lh3.googleusercontent.com/b7jEvV7AOrLQN2g1vMD5x59CyvJW4GpbWIL-daq_-IZ4_k5LT6KFotW_rk7lFfU4rKGbE8GNbgPymsM9FDLxlcSKIA=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"WAPlus - Group Exporter for WhatsApp","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/whatsapp-group-exporter-g/eelhmnjkbjmlcglpiaegojkoolckdgaj?hl=zh-CN&authuser=0"},{"id":1700,"iconUrl":"https://lh3.googleusercontent.com/lDgBfbU9yC77ngWj-r62apm44QnFr8yuP-XKcg_HJaxVr37stxgoGAXQTLNStdtyV2HsGBn9EWtw_z8gvT58QfpD=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"Contact Saver for WA","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/contact-saver-for-wa/edklgfianniecabmndjcponckjlmoiel"},{"id":1800,"iconUrl":"https://lh3.googleusercontent.com/lDgBfbU9yC77ngWj-r62apm44QnFr8yuP-XKcg_HJaxVr37stxgoGAXQTLNStdtyV2HsGBn9EWtw_z8gvT58QfpD=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"Backup WA Chats","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/backup-wa-chats/bjdhlinfageccmfgaicipbfmjjbmopkc"},{"id":1900,"iconUrl":"https://lh3.googleusercontent.com/leDs424mhZkQKEcRgOhOiQzOkyElTBapRg0sygrq6vGlw34e8NhJXaAS2XOOP6znbtR8wIu8zNL0U7RUcwO80tnM=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"Privacy Extension for WhatsApp Privacy","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/whatsapp-privacy-hide-wha/cgipcgghboamefelooajpiabilddemlh"},{"id":2000,"iconUrl":"https://lh3.googleusercontent.com/Pc-F6e5Gw9FFwPDlxBou0sBxT0SNCZ2H_UoGs0Fe3eEMdwT5fKwH80gvTUMRUDosdRJBXYBB5fpZg9bOdEianfO2qg=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"WhatsApp Group Link Scraper - WA Group Finder","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/find-whatsapp-link-group/lfepbhhhpfohfckldbjoohmplpebdmnd"},{"id":2100,"iconUrl":"https://lh3.googleusercontent.com/-ewnPlthxkpUXKTSqHnO08_oIm7VeEQeoFnjMyADsVImkeoyOdzqaVweSVV__flvdCi569OHUEHlEb0SAXWXk6XURwo=w128-h128-e365-rj-sc0x00ffffff","pluginDescriptor":"WA Group Sender","tags":null,"linkUrl":"https://chrome.google.com/webstore/detail/wa-group-sender/kilbeicibedchlamahiimkjeilnkgmeo"}]'
    );
  },
  "8beb": function (e, t, a) {
    var o = a("d949");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("f54150d0", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  "8c43": function (e, t, a) {
    "use strict";
    a("a977");
  },
  "905e": function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".activeCodeDialog .el-dialog__header{padding:20px;background-color:#37b64a}.activeCodeDialog .el-dialog__header .el-dialog__title{font-family:SourceHanSansSC-bold;color:#fff}.activeCodeDialog .el-dialog__body{padding:25px 25px 10px 25px!important}",
        "",
      ]),
      (e.exports = t);
  },
  9224: function (e) {
    e.exports = JSON.parse(
      '{"name":"easy-sender","version":"1.4.56","private":true,"scripts":{"serve":"vue-cli-service build","build":"vue-cli-service build"},"dependencies":{"awesome-phonenumber":"^2.66.0","cache-loader":"~4.1.0","core-js":"^3.6.5","element-ui":"^2.15.6","jquery":"^3.6.0","js-sls-logger-v3":"^1.0.16","less-loader":"^10.2.0","lodash":"^4.17.21","mockjs":"^1.1.0","universal-analytics":"^0.5.3","vue":"^2.6.11","vue-i18n":"^8.27.1","xlsx":"^0.17.4","zbase-popup-component":"^0.3.3"},"devDependencies":{"@types/webextension-polyfill":"^0.8.2","@vue/cli-plugin-babel":"~4.5.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"~4.5.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-vue":"^6.2.2","stylus":"^0.55.0","stylus-loader":"^3.0.2","vue-cli-plugin-browser-extension":"~0.25.2","vue-template-compiler":"^2.6.11","web-ext-types":"^3.2.1","webextension-polyfill":"^0.8.0","webpack":"~4.46.0"},"eslintConfig":{"root":true,"env":{"node":true,"webextensions":true},"extends":["plugin:vue/essential","eslint:recommended"],"parserOptions":{"parser":"babel-eslint"},"rules":{"no-unused-vars":"off","no-undef":0,"no-empty":0,"no-redeclare":0,"no-unreachable":0,"no-inner-declarations":0,"no-dupe-keys":0,"no-extra-semi":0,"no-debugger":0,"getter-return":0,"no-prototype-builtins":0,"no-async-promise-executor":0,"no-constant-condition":0,"no-useless-escape":0,"quotes":["warn","single","avoid-escape"]}},"browserslist":["> 1%","last 2 versions","not dead"]}'
    );
  },
  9506: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".permissionTip[data-v-b8438c4c]{background-color:#f5cfa2;margin-top:5px;text-align:center}.permissionTip span[data-v-b8438c4c]{line-height:30px;text-decoration:underline;font-weight:700;cursor:pointer}.el-switch.switch.is-checked[data-v-b8438c4c] .el-switch__core:after{margin-left:9px}.el-switch.switch[data-v-b8438c4c] .el-switch__core{width:24px!important;height:14px;border-color:#000;background-color:#fff}.el-switch.switch[data-v-b8438c4c] .el-switch__core:after{width:8px;height:8px;background-color:#000;top:2px;left:2px}.switchBack.el-col.el-col-9[data-v-b8438c4c]{height:30px;line-height:30px;padding-left:15px}.el-select.groupRemoved.el-select--mini[data-v-b8438c4c] .el-input__inner,.el-select.groupToolSelected.el-select--mini[data-v-b8438c4c] .el-input__inner,.el-select.groupUnselected.el-select--mini[data-v-b8438c4c] .el-input__inner{width:313px;height:30px;font-size:14px}.groupToolSelected[data-v-b8438c4c] .el-input.is-focus .el-input__inner,.groupToolSelected[data-v-b8438c4c] .el-input__inner:focus{border-color:#36b64a}.el-select.el-select--mini.groupRemoved[data-v-b8438c4c] .el-input.el-input--mini.el-input--suffix>.el-input__inner,.el-select.el-select--mini.groupUnselected[data-v-b8438c4c] .el-input.el-input--mini.el-input--suffix>.el-input__inner,.groupRemoved[data-v-b8438c4c] .el-input.is-focus .el-input__inner,.groupRemoved[data-v-b8438c4c] .el-input__inner:focus,.groupUnselected[data-v-b8438c4c] .el-input.is-focus .el-input__inner,.groupUnselected[data-v-b8438c4c] .el-input__inner:focus{border-color:#ff0505!important}.el-select-dropdown__item.selected[data-v-b8438c4c]{color:#36b64a;font-weight:500}.el-button.common-success-btn.el-button--success.el-button--medium.is-plain[data-v-b8438c4c],.el-button.common-success-btn.el-button--success.el-button--medium.is-plain[data-v-b8438c4c]:hover{width:167px;height:30px;line-height:0;margin:36px 199px 12px;border-radius:4px;background-color:#36b64a;color:#fff;font-size:14px;text-align:center;font-family:Roboto;border:1px solid #bbb}.switchBack[data-v-b8438c4c] .el-switch.is-checked .el-switch__core{border-color:#4b0;background-color:#4b0}.switchBack[data-v-b8438c4c] .el-switch__label.is-active{color:#36b64a}.switchBack[data-v-b8438c4c] .el-switch.is-checked .el-switch__core{border-color:#37b64a;background-color:#37b64a}.common-href-style[data-v-b8438c4c],.common-href-style[data-v-b8438c4c]:hover{color:#60a9f8}.permissonTip[data-v-b8438c4c]{background-color:#f5cfa2;margin-top:5px;text-align:center}.permissonTip span[data-v-b8438c4c]{line-height:30px;text-decoration:underline;font-weight:700;cursor:pointer}.little-model[data-v-b8438c4c]{display:flex;justify-content:space-between;margin-top:25px}.little-model .el-button[data-v-b8438c4c]{width:120px;height:30px;align-self:center;font-size:14px;border-radius:4px;padding:0 15px;background-color:#37b64a}.little-title[data-v-b8438c4c]{font-size:18px;line-height:30px}.footer[data-v-b8438c4c]{position:absolute;bottom:0;width:100%;height:45px;line-height:45px;background-color:#f4f2f2;font-size:13px}[data-v-b8438c4c] .firstLoad.el-button{left:252px;top:658px;width:160px;height:40px;border-radius:4px;background-color:#36b64a;color:#fff;font-size:14px;text-align:center;border:1px solid #bbb}[data-v-b8438c4c] .el-button.el-button--default.el-button--small.el-button--primary{color:#fff;background-color:#36b64a;border:1px solid #bbb;margin:0 auto}[data-v-b8438c4c] .el-main{width:580px;height:480px;display:flex;flex-direction:column;justify-content:space-evenly}[data-v-b8438c4c] .el-radio-group{width:451px}[data-v-b8438c4c] .el-radio{margin-top:13px;font-size:14px}.radioBox[data-v-b8438c4c] .el-radio__input.is-checked .el-radio__inner{border-color:#37b64a;background:#37b64a}.radioBox[data-v-b8438c4c] .el-radio__input.is-checked+.el-radio__label{color:#37b64a}",
        "",
      ]),
      (e.exports = t);
  },
  "9bfe": function (e, t, a) {
    "use strict";
    a("8beb");
  },
  a555: function (e, t, a) {
    "use strict";
    a.d(t, "b", function () {
      return i;
    }),
      a.d(t, "a", function () {
        return u;
      });
    var o = a("3929"),
      n = a.n(o),
      s = (a("d5e1"), a("4e50"));
    function i(e, t) {
      let a = c(e);
      chrome.runtime.sendMessage({ type: "log", eventType: a, otherParams: t });
    }
    let l = "13",
      r = 13;
    function c(e) {
      try {
        return Number(l + e.toString().slice(2));
      } catch (t) {
        return e;
      }
    }
    const d = {
        host: "us-west-1.log.aliyuncs.com",
        project: "extension-us",
        time: 0.05,
        count: 1,
        logstore: s["c"],
      },
      p = new n.a(d);
    function u(e) {
      let t = e.eventType,
        o = e.otherParams;
      chrome.storage.local.get(
        [
          "browserInfo",
          "platform",
          "installTime",
          "userPhoneNum",
          "firstSendTime",
          "uuid",
          "version",
          "language",
        ],
        function (e) {
          let n = void 0 !== e.browserInfo ? e.browserInfo : "",
            s = n ? n.userAgent : "",
            i = n ? n.browser : "",
            l = void 0 !== e.platform ? e.platform : "",
            c = void 0 !== e.installTime ? e.installTime : "",
            d = e.userPhoneNum,
            u = void 0 !== e.firstSendTime ? e.firstSendTime : "",
            g = void 0 !== e.uuid ? e.uuid : "",
            h = void 0 !== e.version ? e.version : "",
            _ = void 0 !== e.language ? e.language : "",
            f = chrome.runtime.getManifest().version,
            x = {
              event_source: r,
              event_type: t,
              event_time: Math.round(new Date() / 1e3),
              install_time: c,
              s_first_send_time: u,
              platform: l,
              user_agent: s,
              browser_type: i,
              uuid: g,
              version: h,
              version_current: f,
              language: _,
            };
          if (void 0 !== d) {
            let e = a("a689"),
              t = e("+" + d).getRegionCode(),
              o = new e(d.toString(), t),
              n = o.getRegionCode() ? o.getRegionCode() : "",
              s = m(n) ? m(n) : "";
            (x.s_user_phone_num = d),
              (x.s_country_code = s),
              chrome.storage.local.set({ phoneNum: d, countryCode: s });
          } else (x.s_user_phone_num = ""), (x.s_country_code = "");
          if (o) for (let t in o) x[t] = o[t];
          p.send(x);
        }
      );
    }
    function m(e) {
      if (!e) return "";
      try {
        e = "." + e;
        let t = [
          { country: "Ascension Island", tld: ".ac" },
          { country: "Andorra", tld: ".ad" },
          { country: "United Arab Emirates", tld: ".ae" },
          { country: "Afghanistan", tld: ".af" },
          { country: "Antigua and Barbuda", tld: ".ag" },
          { country: "Anguilla", tld: ".ai" },
          { country: "Albania", tld: ".al" },
          { country: "Armenia", tld: ".am" },
          { country: "Netherlands Antilles", tld: ".an" },
          { country: "Angola", tld: ".ao" },
          { country: "Antarctica", tld: ".aq" },
          { country: "Argentina", tld: ".ar" },
          { country: "American Samoa", tld: ".as" },
          { country: "Austria", tld: ".at" },
          { country: "Australia", tld: ".au" },
          { country: "Aruba", tld: ".aw" },
          { country: "Åland", tld: ".ax" },
          { country: "Azerbaijan", tld: ".az" },
          { country: "Bosnia and Herzegovina", tld: ".ba" },
          { country: "Barbados", tld: ".bb" },
          { country: "Bangladesh", tld: ".bd" },
          { country: "Belgium", tld: ".be" },
          { country: "Burkina Faso", tld: ".bf" },
          { country: "Bulgaria", tld: ".bg" },
          { country: "Bahrain", tld: ".bh" },
          { country: "Burundi", tld: ".bi" },
          { country: "Benin", tld: ".bj" },
          { country: "Bermuda", tld: ".bm" },
          { country: "Brunei", tld: ".bn" },
          { country: "Bolivia", tld: ".bo" },
          { country: "Bonaire", tld: ".bq" },
          { country: "Brazil", tld: ".br" },
          { country: "Bahamas", tld: ".bs" },
          { country: "Bhutan", tld: ".bt" },
          { country: "Bouvet Island", tld: ".bv" },
          { country: "Botswana", tld: ".bw" },
          { country: "Belarus", tld: ".by" },
          { country: "Belize", tld: ".bz" },
          { country: "Brittany", tld: ".bzh" },
          { country: "Canada", tld: ".ca" },
          { country: "Cocos (Keeling) Islands", tld: ".cc" },
          { country: "Democratic Republic of the Congo", tld: ".cd" },
          { country: "Central African Republic", tld: ".cf" },
          { country: "Republic of the Congo", tld: ".cg" },
          { country: "Switzerland  ", tld: ".ch" },
          { country: "Ivory Coast", tld: ".ci" },
          { country: "Cook Islands", tld: ".ck" },
          { country: "Chile", tld: ".cl" },
          { country: "Cameroon", tld: ".cm" },
          { country: "China", tld: ".cn" },
          { country: "Colombia", tld: ".co" },
          { country: "Costa Rica", tld: ".cr" },
          { country: "Cuba", tld: ".cu" },
          { country: "Cape Verde", tld: ".cv" },
          { country: "Curaçao Curaçao, West Indies", tld: ".cw" },
          { country: "Christmas Island", tld: ".cx" },
          { country: "Cyprus", tld: ".cy" },
          { country: "Czech Republic", tld: ".cz" },
          { country: "East Germany", tld: ".dd" },
          { country: "Germany", tld: ".de" },
          { country: "Djibouti", tld: ".dj" },
          { country: "Denmark", tld: ".dk" },
          { country: "Dominica", tld: ".dm" },
          { country: "Dominican Republic", tld: ".do" },
          { country: "Algeria", tld: ".dz" },
          { country: "Ecuador", tld: ".ec" },
          { country: "Estonia", tld: ".ee" },
          { country: "Egypt", tld: ".eg" },
          { country: "Western Sahara", tld: ".eh" },
          { country: "Eritrea", tld: ".er" },
          { country: "Spain", tld: ".es" },
          { country: "Ethiopia", tld: ".et" },
          { country: "European Union", tld: ".eu" },
          { country: "Finland", tld: ".fi" },
          { country: "Fiji", tld: ".fj" },
          { country: "Falkland Islands", tld: ".fk" },
          { country: "Federated States of Micronesia", tld: ".fm" },
          { country: "Faroe Islands Føroyar", tld: ".fo" },
          { country: "France", tld: ".fr" },
          { country: "Gabon", tld: ".ga" },
          { country: "United Kingdom", tld: ".gb" },
          { country: "Grenada", tld: ".gd" },
          { country: "Georgia", tld: ".ge" },
          { country: "French Guiana  ", tld: ".gf" },
          { country: "Guernsey  ", tld: ".gg" },
          { country: "Ghana", tld: ".gh" },
          { country: "Gibraltar", tld: ".gi" },
          { country: "Greenland", tld: ".gl" },
          { country: "The Gambia", tld: ".gm" },
          { country: "Guinea", tld: ".gn" },
          { country: "Guadeloupe", tld: ".gp" },
          { country: "Equatorial Guinea  ", tld: ".gq" },
          { country: "Greece", tld: ".gr" },
          { country: "South Georgia and the South Sandwich Is", tld: ".gsla" },
          { country: "Guatemala", tld: ".gt" },
          { country: "Guam", tld: ".gu" },
          { country: "GuineaBissau", tld: ".gw" },
          { country: "Guyana", tld: ".gy" },
          { country: "Hong Kong", tld: ".hk" },
          { country: "Heard Island and McDonald Islands", tld: ".hm" },
          { country: "Honduras", tld: ".hn" },
          { country: "Croatia", tld: ".hr" },
          { country: "Haiti", tld: ".ht" },
          { country: "Hungary", tld: ".hu" },
          { country: "Indonesia", tld: ".id" },
          { country: "Ireland", tld: ".ie" },
          { country: "Israel", tld: ".il" },
          { country: "Isle of Man", tld: ".im" },
          { country: "India", tld: ".in" },
          { country: "British Indian Ocean Territory", tld: ".io" },
          { country: "Iraq", tld: ".iq" },
          { country: "Iran", tld: ".ir" },
          { country: "Iceland", tld: ".is" },
          { country: "Italy", tld: ".it" },
          { country: "Jersey", tld: ".je" },
          { country: "Jamaica", tld: ".jm" },
          { country: "Jordan", tld: ".jo" },
          { country: "Japan", tld: ".jp" },
          { country: "Kenya", tld: ".ke" },
          { country: "Kyrgyzstan", tld: ".kg" },
          { country: "Cambodia", tld: ".kh" },
          { country: "Kiribati", tld: ".ki" },
          { country: "Comoros Komori", tld: ".km" },
          { country: "Saint Kitts and Nevis", tld: ".kn" },
          { country: "Democratic People's Republic of Korea", tld: ".kp" },
          { country: "Republic of Korea", tld: ".kr" },
          { country: "Kurdistan", tld: ".krd" },
          { country: "Kuwait", tld: ".kw" },
          { country: "Cayman Islands", tld: ".ky" },
          { country: "Kazakhstan", tld: ".kz" },
          { country: "Laos", tld: ".la" },
          { country: "Lebanon", tld: ".lb" },
          { country: "Saint Lucia", tld: ".lc" },
          { country: "Liechtenstein", tld: ".li" },
          { country: "Sri Lanka Lanka", tld: ".lk" },
          { country: "Liberia", tld: ".lr" },
          { country: "Lesotho", tld: ".ls" },
          { country: "Lithuania", tld: ".lt" },
          { country: "Luxembourg", tld: ".lu" },
          { country: "Latvia", tld: ".lv" },
          { country: "Libya", tld: ".ly" },
          { country: "Morocco", tld: ".ma" },
          { country: "Monaco", tld: ".mc" },
          { country: "Moldova", tld: ".md" },
          { country: "Montenegro", tld: ".me" },
          { country: "Madagascar", tld: ".mg" },
          { country: "Marshall Islands", tld: ".mh" },
          { country: "Macedonia", tld: ".mk" },
          { country: "Mali", tld: ".ml" },
          { country: "Myanmar", tld: ".mm" },
          { country: "Mongolia", tld: ".mn" },
          { country: "Macau", tld: ".mo" },
          { country: "Northern Mariana Islands", tld: ".mp" },
          { country: "Martinique", tld: ".mq" },
          { country: "Mauritania", tld: ".mr" },
          { country: "Montserrat", tld: ".ms" },
          { country: "Malta", tld: ".mt" },
          { country: "Mauritius", tld: ".mu" },
          { country: "Maldives", tld: ".mv" },
          { country: "Malawi", tld: ".mw" },
          { country: "Mexico", tld: ".mx" },
          { country: "Malaysia", tld: ".my" },
          { country: "Mozambique", tld: ".mz" },
          { country: "Namibia", tld: ".na" },
          { country: "New Caledonia", tld: ".nc" },
          { country: "Niger", tld: ".ne" },
          { country: "Norfolk Island", tld: ".nf" },
          { country: "Nigeria", tld: ".ng" },
          { country: "Nicaragua", tld: ".ni" },
          { country: "Netherlands  ", tld: ".nl" },
          { country: "Norway", tld: ".no" },
          { country: "Nepal", tld: ".np" },
          { country: "Nauru", tld: ".nr" },
          { country: "Niue", tld: ".nu" },
          { country: "New Zealand", tld: ".nz" },
          { country: "Oman", tld: ".om" },
          { country: "Panama", tld: ".pa" },
          { country: "Peru", tld: ".pe" },
          { country: "French Polynesia  ", tld: ".pf" },
          { country: "Papua New Guinea", tld: ".pg" },
          { country: "Philippines", tld: ".ph" },
          { country: "Pakistan", tld: ".pk" },
          { country: "Poland", tld: ".pl" },
          { country: "SaintPierre and Miquelon", tld: ".pm" },
          { country: "Pitcairn Islands", tld: ".pn" },
          { country: "Puerto Rico", tld: ".pr" },
          { country: "State of Palestine", tld: ".ps" },
          { country: "Portugal", tld: ".pt_BR" },
          { country: "Palau Pelew", tld: ".pw" },
          { country: "Paraguay", tld: ".py" },
          { country: "Qatar", tld: ".qa" },
          { country: "Réunion", tld: ".re" },
          { country: "Romania", tld: ".ro" },
          { country: "Serbia", tld: ".rs" },
          { country: "Russia", tld: ".ru" },
          { country: "Rwanda", tld: ".rw" },
          { country: "Saudi Arabia", tld: ".sa" },
          { country: "Solomon Islands  ", tld: ".sb" },
          { country: "Seychelles", tld: ".sc" },
          { country: "Sudan", tld: ".sd" },
          { country: "Sweden", tld: ".se" },
          { country: "Singapore", tld: ".sg" },
          { country: "Saint Helena", tld: ".sh" },
          { country: "Slovenia", tld: ".si" },
          { country: "Slovakia", tld: ".sk" },
          { country: "Sierra Leone", tld: ".sl" },
          { country: "San Marino", tld: ".sm" },
          { country: "Senegal", tld: ".sn" },
          { country: "Somalia", tld: ".so" },
          { country: "Suriname", tld: ".sr" },
          { country: "South Sudan", tld: ".ss" },
          { country: "São Tomé and Príncipe", tld: ".st" },
          { country: "Soviet Union", tld: ".su" },
          { country: "El Salvador", tld: ".sv" },
          { country: "Sint Maarten", tld: ".sx" },
          { country: "Syria", tld: ".sy" },
          { country: "Swaziland", tld: ".sz" },
          { country: "Turks and Caicos Islands", tld: ".tc" },
          { country: "Chad", tld: ".td" },
          { country: "French Southern and Antarctic Lands", tld: ".tf" },
          { country: "Togo", tld: ".tg" },
          { country: "Thailand", tld: ".th" },
          { country: "Tajikistan", tld: ".tj" },
          { country: "Tokelau", tld: ".tk" },
          { country: "East Timor", tld: ".tl" },
          { country: "Turkmenistan", tld: ".tm" },
          { country: "Tunisia", tld: ".tn" },
          { country: "Tonga", tld: ".to" },
          { country: "East Timor", tld: ".tp" },
          { country: "Turkey", tld: ".tr" },
          { country: "Trinidad and Tobago", tld: ".tt" },
          { country: "Tuvalu", tld: ".tv" },
          { country: "Taiwan", tld: ".tw" },
          { country: "Tanzania", tld: ".tz" },
          { country: "Ukraine  ", tld: ".ua" },
          { country: "Uganda", tld: ".ug" },
          { country: "United Kingdom", tld: ".uk" },
          { country: "United States of America", tld: ".us" },
          { country: "Uruguay", tld: ".uy" },
          { country: "Uzbekistan", tld: ".uz" },
          { country: "Vatican City", tld: ".va" },
          { country: "Saint Vincent and the Grenadines", tld: ".vc" },
          { country: "Venezuela", tld: ".ve" },
          { country: "British Virgin Islands", tld: ".vg" },
          { country: "United States Virgin Islands", tld: ".vi" },
          { country: "Vietnam", tld: ".vn" },
          { country: "Vanuatu", tld: ".vu" },
          { country: "Wallis and Futuna", tld: ".wf" },
          { country: "Samoa", tld: ".ws" },
          { country: "Yemen", tld: ".ye" },
          { country: "Mayotte", tld: ".yt" },
          { country: "SFR Yugoslavia", tld: ".yu" },
          { country: "South Africa", tld: ".za" },
          { country: "Zambia", tld: ".zm" },
          { country: "Zaire", tld: ".zr" },
          { country: "Zimbabwe", tld: ".zw" },
        ];
        for (let a in t)
          if (e.toLowerCase() === t[a].tld.toLowerCase()) return t[a].country;
      } catch (t) {
        return "";
      }
    }
  },
  a6c5: function (e, t, a) {
    var o = a("ae5f");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("416bf1b8", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  a977: function (e, t, a) {
    var o = a("12d2");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("2aecb0e4", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  ae5f: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".exclamation{font-size:18px;font-weight:bolder;font-style:normal;vertical-align:middle;color:red;margin-bottom:2px}::-webkit-scrollbar{width:0;height:0}.sendConfirmFooter .el-checkbox__input>.el-checkbox__inner,.sendConfirmFooter .el-checkbox__input>.el-checkbox__inner:hover{border-color:#36b74a}.sendConfirmFooter>.el-checkbox.is-checked .el-checkbox__input.is-checked>.el-checkbox__inner{border-color:#36b74a!important;background-color:#36b74a!important}.sendConfirmFooter>.el-checkbox.is-checked>.el-checkbox__label,.sendConfirmFooter>.el-checkbox>.el-checkbox__label{color:#939191}ul.sendConfirmUl>li>span{height:27px;line-height:27px}ul.sendConfirmUl>li::marker{color:#36b74a;font-size:18px}.el-dialog__headerbtn i{color:#0f0101!important;font-weight:900!important}#countdown{position:absolute;top:-25px;right:-25px}.el-dialog.sendConfirmPop{position:relative}.el-dialog.sendConfirmPop>.el-dialog__body{padding:45px 0 35px 40px}i.boldFont{color:#0f0101}i.boldFont,i.hoverFont{font-size:14px;font-weight:bolder;font-style:normal}i.hoverFont{color:#fff}.safetyFooter .el-checkbox__input>.el-checkbox__inner,.safetyFooter .el-checkbox__input>.el-checkbox__inner:hover{border-color:#36b74a}.safetyFooter>.el-checkbox.is-checked .el-checkbox__input.is-checked>.el-checkbox__inner{border-color:#36b74a!important;background-color:#36b74a!important}.safetyFooter>.el-checkbox.is-checked>.el-checkbox__label,.safetyFooter>.el-checkbox>.el-checkbox__label{color:#939191}.el-dialog.el-dialog--center.safetyPop>.el-dialog__footer{margin:6px auto 17px;padding-top:0!important}.safetyFooter>.el-button.el-button--success,.safetyFooter>.el-button.el-button--success:focus,.safetyFooter>.el-button.el-button--success:hover{background-color:#37b64b!important;color:#fff!important;width:237px;height:35px}ul.safetyFirstUl,ul.safetySecondUl{margin:7px 0 0 45px;list-style-type:disc}ul.safetyFirstUl>li,ul.safetySecondUl>li{height:24px;vertical-align:middle;margin-left:5px}ul.safetyFirstUl>li::marker{color:#000;font-size:18px}ul.safetySecondUl>li::marker{color:red;font-size:18px}.el-dialog__wrapper.concatsPop~.v-modal{width:565px;height:457px;top:89px!important;left:10px!important;opacity:.2!important}*{margin:0;padding:0}.common-loading i.el-icon-loading{color:#37b64a;width:30px;height:30px}.common-loading i.el-icon-loading:before{font-size:30px}.common-loading p.el-loading-text{color:#37b64a}.disableBtn{color:#fff!important;background-color:#b3e19d!important;border-color:#b3e19d!important}.emptyContent{padding-bottom:0!important}.emptyContent .el-message-box__title{padding-left:20px;padding-top:35px}.emptyContent .el-message-box__status.el-icon-warning{color:#c12324;padding-right:30px}.emptyContent .el-message-box__content{padding:20px 15px}.emptyContent .el-icon-close{color:#909399!important}.emptyContent .loading-green-icon{color:#37b64a;padding:0;color:#37b64a!important}.deleteConfirmHeader .el-message-box__header,.deleteConfirmHeader .el-message-box__title{padding-top:0!important}.firstLoad{padding-bottom:0!important}.firstLoad .el-message-box__title{padding-left:20px}.firstLoad .el-message-box__status.el-icon-warning{color:#c12324;padding-right:30px;padding-bottom:63px}.firstLoad .el-message-box__content{padding:20px 15px}.firstLoad .el-icon-close{color:#909399!important}.firstLoad .loading-green-icon{padding:0;color:#37b64a}.firstLoad .el-message-box__btns{text-align:center;padding-bottom:15px}.firstLoad .el-button{left:252px;top:658px;width:160px;height:40px;border-radius:4px;font-size:14px;text-align:center}.firstLoad .el-button,.firstLoad .el-button--primary,.firstLoad .el-button:focus,.firstLoad .el-button:hover{background-color:#36b64a;color:#fff;border:1px solid #bbb}.confirmButton{background-color:#fff!important;color:#35b64a!important;border-color:#35b64a!important}.el-progress-bar__outer{width:450px;margin:0}.el-progress-bar{width:80%!important}.el-progress__text{float:right;margin-right:15px}.el-message .el-icon-warning{display:none}.el-message--warning{padding-left:35px!important}.daily-msg-send-warning{width:459px}.daily-msg-send-warning .el-message-box__content .el-message-box__container .el-message-box__status{top:12px;color:#35b64a}.daily-msg-send-warning>.el-message-box__content>.el-message-box__container>.el-message-box__message>p{white-space:pre-wrap;font-size:16px;text-align:left}.daily-msg-send-warning>.el-message-box__btns{bottom:0;text-align:center}.daily-msg-send-warning>.el-message-box__btns button.el-button--primary{background-color:#35b64a;border-color:#35b64a;width:160px;height:40px;margin:15px auto}.inviteCommentMessageBox .el-message-box__header{padding-top:0!important}.inviteCommentMessageBox .el-message-box__btns{text-align:center!important;padding-top:0!important;padding-bottom:10px!important;margin-top:-10px!important}.inviteCommentMessageBoxConfirm{font-size:14px!important;background-color:#009f79!important;margin-left:7px!important;padding:9px 25px!important}.inviteCommentMessageBoxCancel{font-size:14px!important;margin-right:7px!important;padding:9px 25px!important}.openRecommendCommentMessageBox .el-message-box__header{padding-top:0!important}.openRecommendCommentMessageBox .el-message-box__btns{text-align:center!important;padding-top:25px!important;padding-bottom:10px!important}.openRecommendCommentMessageBoxConfirm{font-size:14px!important;background-color:#009f79!important;margin-left:15px!important;padding:9px 20px!important}.openRecommendCommentMessageBoxCancel{font-size:14px!important;margin-right:15px!important;padding:9px 20px!important}.el-card.is-always-shadow,.el-card.is-hover-shadow:focus,.el-card.is-hover-shadow:hover{box-shadow:0 0 0 0 transparent}.emptyContentTemplate .el-message-box__status.el-icon-warning{padding-right:10px!important}.emptyContentTemplate{padding-bottom:0!important}.emptyContentTemplate .el-message-box__title{padding-left:20px;padding-top:35px}.emptyContentTemplate .el-message-box__status.el-icon-warning{color:#c12324;padding-right:30px}.emptyContentTemplate .el-message-box__content{padding:20px 15px}.emptyContentTemplate .el-icon-close{color:#909399!important}.emptyContentTemplate .loading-green-icon{color:#37b64a;padding:0;color:#37b64a!important}",
        "",
      ]),
      (e.exports = t);
  },
  ae8b: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".permissionTip[data-v-28c7e490]{background-color:#f5cfa2;margin-top:5px;text-align:center}.permissionTip span[data-v-28c7e490]{line-height:30px;text-decoration:underline;font-weight:700;cursor:pointer}[data-v-28c7e490] .el-input__clear.el-icon-circle-close{height:30px;line-height:30px}.textareaBack.el-input.el-input--medium.el-input--suffix[data-v-28c7e490] .el-input__inner{height:30px;font-size:12px}.remindTitle[data-v-28c7e490]{font-size:12px;text-align:left;font-family:SourceHanSansSC-regular}.remindTitle>.remindText[data-v-28c7e490]{height:26px;line-height:26px;color:#a6a2a2}.remindTitle>.warnText[data-v-28c7e490]{height:26px;line-height:26px;color:#ff0505}.el-select-dropdown__item.selected[data-v-28c7e490]{color:#36b64a;font-weight:500}.el-select-dropdown__item[data-v-28c7e490]{position:relative;width:372px;overflow:visible}.el-select-dropdown__item>span[data-v-28c7e490]{display:inline-block;position:absolute;width:352px;left:0;margin-left:20px;overflow:hidden;text-overflow:ellipsis}.el-select-dropdown__item>i[data-v-28c7e490]{position:absolute;right:-24px;height:34px;line-height:34px;z-index:99999}.textSelect[data-v-28c7e490] .el-input.is-focus .el-input__inner,.textSelect[data-v-28c7e490] .el-input__inner:focus{border-color:#36b64a}.send-message-background[data-v-28c7e490]{line-height:20px;color:#101010;font-size:14px}.whatsapp-numbers[data-v-28c7e490]{margin:11px auto;height:95px;width:563px}.send-message-card-title[data-v-28c7e490]{color:#101010;font-size:14px;text-align:left;margin:0 auto 10px 0}.whatsAppTitle[data-v-28c7e490]{width:200px;height:20px;line-height:20px}.common-href-style[data-v-28c7e490],.common-href-style[data-v-28c7e490]:hover{color:#60a9f8}.textareaBack[data-v-28c7e490] .el-textarea__inner{background-color:#e6fdcc}.textareaBack[data-v-28c7e490] .el-input__inner:focus,.textareaBack[data-v-28c7e490] .el-textarea__inner:focus{border:1px solid #36b64a}.textareaForbidResize[data-v-28c7e490] .el-textarea__inner{resize:none!important}.message-text[data-v-28c7e490]{margin:7px auto 9px auto;height:225px;width:563px}.send-message-text-select[data-v-28c7e490] .el-input__inner{height:30px;width:413px;font-size:14px}.el-select.send-message-text-select.textSelect.el-select--small[data-v-28c7e490]{margin-right:6px;margin-bottom:10px}.send-message-save-template-btn[data-v-28c7e490]{height:30px;width:121px;color:#36b64a;background-color:#fff;padding:9px 0}@keyframes mymove-28c7e490{50%{background:#37b64b;color:#fff}}.send-message-common-font[data-v-28c7e490]{font-size:12px;background-color:#fff;color:#c5c5c5}.common-success-btn[data-v-28c7e490] .el-button--success.is-plain,.common-success-btn[data-v-28c7e490] .el-button--success.is-plain:hover{width:110px;height:32px;border-radius:4px;background-color:#36b64a;color:#fff;font-size:14px;text-align:center;font-family:Roboto;border:1px solid #bbb}.common-success-btn[data-v-28c7e490] .el-button--success{width:110px;height:32px;border-radius:4px;font-size:14px;text-align:center}.common-success-btn[data-v-28c7e490] .el-button--info.is-plain{width:110px;height:32px;border-radius:4px;background-color:#84888d;color:#fff;font-size:14px;text-align:center;font-family:Roboto;border:1px solid #bbb}.sending-setting[data-v-28c7e490]{margin:9px auto 0 auto;height:100px;width:563px}[data-v-28c7e490] .numSelect.el-input-number.el-input-number--small .el-input-number__decrease:hover~.el-input.el-input--small>.el-input__inner,[data-v-28c7e490] .numSelect.el-input-number.el-input-number--small .el-input-number__increase:hover~.el-input.el-input--small>.el-input__inner{border:1px solid #67c23a;border-radius:4px}[data-v-28c7e490] .numSelect.el-input-number.el-input-number--small{width:100px}[data-v-28c7e490] .numSelect.el-input-number--small .el-input__inner{padding-left:36px;padding-right:36px}",
        "",
      ]),
      (e.exports = t);
  },
  b55e: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".common-href[data-v-69fda6b8]{text-align:left;font-size:14px;font-family:SourceHanSansSC-regular;color:#101010}.common-href a[data-v-69fda6b8]{color:#60a9f8}",
        "",
      ]),
      (e.exports = t);
  },
  b5a9: function (e, t, a) {
    "use strict";
    a("a6c5");
  },
  bc1c: function (e, t, a) {
    var o = a("ae8b");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("5ef750db", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  bf34: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".permissionTip[data-v-696e426a]{background-color:#f5cfa2;margin-top:5px;text-align:center}.permissionTip span[data-v-696e426a]{line-height:30px;text-decoration:underline;font-weight:700;cursor:pointer}.liNodeStyle li[data-v-696e426a]{margin-left:13px}.liNodeStyle>ul li[data-v-696e426a]::marker{color:red;font-size:14px}.inviteComment>a[data-v-696e426a]{text-decoration:none;font-size:14px}.inviteComment[data-v-696e426a]{padding-top:15px;text-align:center}.send-message-card-title[data-v-696e426a]{color:#101010;font-size:14px;text-align:left;margin:0 auto 10px 0}.send-message-common-font[data-v-696e426a]{font-size:12px;background-color:#fff;color:#c5c5c5}.footContainer[data-v-696e426a] .el-button--success.is-plain{left:947px;top:735px;width:160px;height:40px;border-radius:4px;background-color:#36b64a;color:#fff;font-size:14px;text-align:center;font-family:Roboto;border:1px solid #bbb}.footContainer[data-v-696e426a] .el-button--success{left:947px;top:735px;width:160px;height:40px;border-radius:4px;font-size:14px;text-align:center}.footContainer[data-v-696e426a] .el-button--info.is-plain{left:1121px;top:735px;width:160px;height:40px;border-radius:4px;background-color:#84888d;color:#fff;font-size:14px;text-align:center;font-family:Roboto;border:1px solid #bbb}.footContainer[data-v-696e426a] .el-button--default,.footContainer[data-v-696e426a] .el-button--default:hover{border-color:#67c23a;color:#36b64a}.footContainer[data-v-696e426a] .el-button--default.is-disabled{border-color:#a4da89;color:#a4da89}.el-button[data-v-696e426a]{background-color:#fff;color:#36b64a}.el-card.is-hover-shadow[data-v-696e426a]:focus,.el-card.is-hover-shadow[data-v-696e426a]:hover,.statistics[data-v-696e426a] .el-card.is-always-shadow{box-shadow:0 0 0 #ccc!important}",
        "",
      ]),
      (e.exports = t);
  },
  c21f: function (e, t, a) {
    "use strict";
    a("8108");
  },
  c56e: function (e, t, a) {
    "use strict";
    a.r(t),
      a.d(t, "checkDailySendNums", function () {
        return s;
      }),
      a.d(t, "incrDailySendNums", function () {
        return i;
      }),
      a.d(t, "getIncrDailySendNums", function () {
        return l;
      });
    var o = a("a555");
    function n(e) {
      if (!e || 0 === Object.keys(e).length) return 0;
      let t = 0;
      return (
        Object.keys(e).forEach((e, a) => {
          t = e > t ? e : t;
        }),
        t
      );
    }
    function s(e) {
      let t = !1,
        a = "";
      e || (e = {});
      let s = n(e),
        i = new Date().getTime();
      function l(e) {
        let t = Number(e),
          a = t + 864e5,
          o = new Date(a),
          n = o.getFullYear(),
          s = o.getMonth() + 1,
          i = o.getDate(),
          l = o.getHours(),
          r = o.getMinutes(),
          c = l + ":" + r + " " + s + "/" + i + "/" + n;
        return c;
      }
      if ((i - s >= 864e5 ? (e[i] = 0) : (i = s), i in e)) {
        let n = e[i];
        if (e && 1 === Object.keys(e).length && n >= 50) {
          let e = l(i);
          (t = !0),
            (a = `First time limit has been reached(50 messages)\n\n300 messages are available at ${e}.`),
            Object(o["b"])(300210, { s_status: 1 });
        }
        if (e && Object.keys(e).length > 1 && n >= 300) {
          let e = l(i);
          (t = !0),
            (a = `300 messages are available at ${e}.`),
            Object(o["b"])(300210, { s_status: 2 });
        }
      } else e[i] = 0;
      return (
        chrome.storage.local.set({ dailySendNums: e }),
        { isReachSendLimit: t, showConfirmTitle: a }
      );
    }
    function i() {
      chrome.storage.local.get(["dailySendNums"], function (e) {
        const t = n(e.dailySendNums);
        let a = e.dailySendNums,
          o = a[t];
        (a[t] = ++o), chrome.storage.local.set({ dailySendNums: a });
      });
    }
    function l(e) {
      const t = n(e);
      let a = e[t];
      return (e[t] = ++a), e;
    }
  },
  cd21: function (e, t, a) {
    "use strict";
    a("5fb8");
  },
  d01b: function (e, t, a) {
    "use strict";
    a("bc1c");
  },
  d5e1: function (e, t, a) {
    "use strict";
    function o() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (e) {
          let t = (16 * Math.random()) | 0,
            a = "x" === e ? t : (3 & t) | 8;
          return a.toString(16);
        }
      );
    }
    a.d(t, "a", function () {
      return o;
    });
  },
  d949: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".permissionTip[data-v-b247195a]{background-color:#f5cfa2;margin-top:5px;text-align:center}.permissionTip span[data-v-b247195a]{line-height:30px;text-decoration:underline;font-weight:700;cursor:pointer}.serialNum[data-v-b247195a]{font-style:normal;line-height:15px;height:15px;vertical-align:top}.warnNumText[data-v-b247195a]{color:#ff0405!important}.normalNumText[data-v-b247195a]{color:#36b74a!important}.numText[data-v-b247195a]{display:inline-block;width:35px;height:17px;line-height:17px;font-size:14px;text-align:center;margin:0 4px 0 8px}.el-select.placeHolderSelect.el-select--small[data-v-b247195a] .el-input__inner,.el-select.placeHolderSelect.el-select--small[data-v-b247195a] .el-select.el-input.is-disabled.el-input__inner{height:30px!important;width:282px}.el-select.placeHolderSelect.el-select--small[data-v-b247195a] .el-input.is-focus>.el-input__inner,.el-select.placeHolderSelect.el-select--small[data-v-b247195a] .el-input__inner:focus{border-color:#67c23a}.textareaBackPro.el-textarea[data-v-b247195a] .el-textarea__inner{padding:5px 5px 35px}.textareaContainer[data-v-b247195a],.textareaContainer[data-v-b247195a] .textareaBackPro.el-textarea{position:relative}.textareaContainer[data-v-b247195a] .el-container>.el-aside.switchBack{width:541px!important;font-style:normal;font-size:large;font-weight:400;color:#0f0101;text-align:left;background-color:#e6fdcc;line-height:30px;padding-left:5px;border-radius:4px;margin:0 1px 1px;position:absolute;left:0;bottom:0}.el-switch.switch.is-checked[data-v-b247195a] .el-switch__core:after{margin-left:9px}.el-switch.switch[data-v-b247195a] .el-switch__core{width:24px!important;height:14px;border-color:#000;background-color:#fff}.el-switch.switch[data-v-b247195a] .el-switch__core:after{width:8px;height:8px;background-color:#000;top:2px;left:2px}.msgText[data-v-b247195a]{text-align:left;padding-left:5px;font-size:14px;margin-bottom:3px}.secondMdule[data-v-b247195a]{width:565px;margin:10px auto}.sendingSettings[data-v-b247195a]{width:563px}[data-v-b247195a] .el-input__clear.el-icon-circle-close{height:30px;line-height:30px}.excelBtn[data-v-b247195a]{height:30px;width:263px;color:#36b64a;background-color:#fff;margin-top:5px}.textareaBackPro.el-input.el-input--medium.el-input--suffix[data-v-b247195a] .el-input__inner{height:30px;font-size:12px}.el-select.send-message-wan-line-select.textareaBackPro.el-select--mini[data-v-b247195a] .el-input__inner{width:545px;height:33px}.textareaBackPro[data-v-b247195a] .el-select__caret.el-input__icon.el-icon-arrow-up{line-height:32px}.whatsapp-numbers[data-v-b247195a]{margin:11px auto 0;width:563px}.whatsAppTitle[data-v-b247195a]{height:20px;line-height:20px}.excelTitle.whatsAppTitle[data-v-b247195a],.sendToGroup[data-v-b247195a]{margin-top:12px}.sendToGroup[data-v-b247195a]{font-size:14px}.send-message-card-title[data-v-b247195a]{color:#101010;font-size:14px;text-align:left;margin:0 auto 6px 0}.remindTitle[data-v-b247195a]{margin-bottom:-2px}.remindText[data-v-b247195a],.remindTitle[data-v-b247195a]{font-size:12px;text-align:left;font-family:SourceHanSansSC-regular}.remindText[data-v-b247195a]{font-style:normal;height:19px;color:#a6a2a2}.remindTitle.sendGroupRemind[data-v-b247195a]{margin:-17px 0 9px 0}.remindTitle>.warnText[data-v-b247195a]{height:14px;line-height:16px;color:#ff0505}.el-select-dropdown__item.selected[data-v-b247195a]{color:#36b64a;font-weight:500}.el-select-dropdown__item[data-v-b247195a]{position:relative;overflow:visible}.el-select-dropdown__item>span[data-v-b247195a]{display:inline-block;position:absolute;left:0;margin-left:20px;overflow:hidden;text-overflow:ellipsis}.el-select-dropdown__item>i[data-v-b247195a]{position:absolute;right:-24px;height:34px;line-height:34px;z-index:99999}.el-button.saveTemplateBtn.el-button--success[data-v-b247195a]{width:120px;height:30px;margin-left:11px;font-family:Roboto;font-size:12px;margin-top:-3px;padding:0;line-height:30px;text-align:center;border-radius:4px;color:#36b64a;background-color:#fff}.send-message-wan-line[data-v-b247195a]{text-align:left;margin:6px 0 7px 0;font-size:14px;font-weight:400;float:left;height:20px}.textareaBackPro[data-v-b247195a] .el-textarea__inner{background-color:#e6fdcc}.textareaBackPro[data-v-b247195a] .el-textarea__inner:focus{border:1px solid #36b64a}.textareaBackProWarn.el-select[data-v-b247195a] .el-input.el-input--suffix .el-input__inner,.textareaBackProWarn.el-select[data-v-b247195a] .el-input.el-input--suffix .el-input__inner:focus,.textareaBackProWarn.el-select[data-v-b247195a] .el-input.is-focus .el-input__inner,.textareaBackProWarn.el-select[data-v-b247195a] .el-input.is-focus .el-input__inner:focus{width:545px;height:33px;border-color:#ff0405}.textareaBackPro.el-select[data-v-b247195a] .el-input.is-focus .el-input__inner .textareaBackPro.el-select>>>.el-input.is-focus .el-input__inner:focus{border-color:#36b64a}.textareaBackPro[data-v-b247195a] .el-input__inner:focus{border:1px solid #36b64a}.switchBack[data-v-b247195a] .el-switch__label.is-active{color:#36b64a}.switchBack[data-v-b247195a] .el-switch.is-checked .el-switch__core{border-color:#4b0;background-color:#4b0}.el-switch[data-v-b247195a]{margin-right:10px}.switch[data-v-b247195a] .el-switch__label{font-weight:400}.textSelect[data-v-b247195a] .el-input__inner:focus{border-color:#36b64a}.el-select.textSelect.el-select--small[data-v-b247195a] .el-input__inner{width:412px;height:30px}.textSelect[data-v-b247195a] .el-input.is-focus .el-input__inner{border-color:#36b64a}.radioBack[data-v-b247195a] .el-radio-button__inner{padding:8px 11.5px}.radioBack[data-v-b247195a] .el-radio-button__orig-radio:checked+.el-radio-button__inner{background-color:#fff;border-color:#4b0;box-shadow:-1px 0 0 0 #4b0}.radioBack[data-v-b247195a] .el-radio-button__orig-radio:hover+.el-radio-button__inner{background-color:#fff;border-color:#4b0;color:#4b0;box-shadow:-1px 0 0 0 #4b0}.radioBack[data-v-b247195a] .el-radio{margin-right:10px}.radioBack[data-v-b247195a] .el-radio__label{padding-left:2px;font-size:13px}.radioBack[data-v-b247195a] .el-radio__inner:hover{border-color:#5dae50}.radioBack[data-v-b247195a] .el-radio__input.is-checked+.el-radio__label{color:#5dae50}.radioBack[data-v-b247195a] .el-radio__input.is-checked .el-radio__inner{border-color:#5dae50;background:#5dae50}.send-message-common-font[data-v-b247195a]{font-size:12px;background-color:#fff;color:#c5c5c5}.common-success-btn[data-v-b247195a] .el-button--success.is-plain,.common-success-btn[data-v-b247195a] .el-button--success.is-plain:hover{width:110px;height:32px;border-radius:4px;background-color:#36b64a;color:#fff;font-size:14px;text-align:center;font-family:Roboto;border:1px solid #bbb}.common-success-btn[data-v-b247195a] .el-button--success{width:110px;height:32px;border-radius:4px;font-size:14px;text-align:center}.common-success-btn[data-v-b247195a] .el-button--info.is-plain{width:110px;height:32px;border-radius:4px;background-color:#84888d;color:#fff;font-size:14px;text-align:center;font-family:Roboto;border:1px solid #bbb}[data-v-b247195a] .numSelect.el-input-number.el-input-number--small .el-input-number__decrease:hover~.el-input.el-input--small>.el-input__inner,[data-v-b247195a] .numSelect.el-input-number.el-input-number--small .el-input-number__increase:hover~.el-input.el-input--small>.el-input__inner{border:1px solid #67c23a;border-radius:4px}[data-v-b247195a] .numSelect.el-input-number.el-input-number--small{width:100px}[data-v-b247195a] .numSelect.el-input-number--small .el-input__inner{padding-left:36px;padding-right:36px}.textareaBtn[data-v-b247195a],.textareaBtn[data-v-b247195a]:focus,.textareaBtn[data-v-b247195a]:hover{height:30px;width:auto;color:#37b64a;background-color:inherit;margin-top:5px}.textareaBtn[data-v-b247195a]:active{background:#37b64a;border-color:#37b64a;color:#fff}",
        "",
      ]),
      (e.exports = t);
  },
  e124: function (e, t, a) {
    var o = a("fa03");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("bd13d624", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  e4e5: function (e, t, a) {
    "use strict";
    a("2617");
  },
  ee54: function (e, t, a) {
    "use strict";
    a("0b7f");
  },
  f208: function (e, t, a) {
    var o = a("f3f5");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("3795a925", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  f3f5: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".waplus-title[data-v-5571cbe5]{margin:7px auto 7px 12px}.version-phone-font[data-v-5571cbe5]{text-align:right;font-size:12px;padding:0;height:17.5px!important;color:#606266}",
        "",
      ]),
      (e.exports = t);
  },
  f7d8: function (e, t, a) {
    var o = a("0a14");
    o.__esModule && (o = o.default),
      "string" === typeof o && (o = [[e.i, o, ""]]),
      o.locals && (e.exports = o.locals);
    var n = a("499e").default;
    n("7ece8a08", o, !0, { sourceMap: !1, shadowMode: !1 });
  },
  fa03: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".guideButton[data-v-7e7ef174]{bottom:20px;right:12px;height:30px}.guideButton[data-v-7e7ef174],.guideStep2Button[data-v-7e7ef174]{background-color:#fff;position:absolute;width:99px;border:0;font-weight:700;border-radius:5px;cursor:pointer}.guideStep2Button[data-v-7e7ef174]{bottom:14px;right:26px;height:38px}.guideSendButton[data-v-7e7ef174]{background-color:#1fa855;color:#fff;position:absolute;bottom:62px;right:21px;width:110px;height:35px;border:0;font-weight:700;border-radius:5px;cursor:pointer}#guidePage[data-v-7e7ef174]{width:585px;height:600px}#guidePage div[data-v-7e7ef174]{height:100%}#app[data-v-7e7ef174]{width:585px;height:600px;padding:10px 10px 0;box-sizing:border-box}.tabContainer[data-v-7e7ef174]{width:565px;height:457px;overflow:scroll}.el-footer[data-v-7e7ef174],.el-header[data-v-7e7ef174]{background-color:#881844;color:#333;text-align:center;line-height:30px}.el-aside[data-v-7e7ef174]{background-color:#d3dce6;line-height:40px}.el-aside[data-v-7e7ef174],.el-main[data-v-7e7ef174]{color:#333;text-align:center}.el-main[data-v-7e7ef174]{background-color:#e9eef3;line-height:30px}body>.el-container[data-v-7e7ef174]{margin-bottom:40px}.el-container:nth-child(5) .el-aside[data-v-7e7ef174],.el-container:nth-child(6) .el-aside[data-v-7e7ef174]{line-height:260px}.el-container:nth-child(7) .el-aside[data-v-7e7ef174]{line-height:320px}.headerTab[data-v-7e7ef174]{background-color:#37b64a}.headerTab.el-tabs.el-tabs--top[data-v-7e7ef174]{background-color:#37b64a;color:#fff;height:36px}.headerTab[data-v-7e7ef174] .el-tabs__item{padding:0 16px}.pt[data-v-7e7ef174] .el-tabs__item{overflow:hidden}.headerTab[data-v-7e7ef174] .el-tabs__nav-wrap:after{background-color:#37b64a}.headerTab[data-v-7e7ef174] .el-tabs__nav.is-top{display:flex;display:-webkit-flex;flex-wrap:nowrap;justify-content:space-around;width:100%}.headerTab[data-v-7e7ef174] .el-tabs__item.is-top{height:36px}.headerTab[data-v-7e7ef174] .el-tabs__item.is-active{color:#37b64a;border-bottom:2px solid #fff}.headerTab[data-v-7e7ef174] .el-tabs__active-bar.is-top{height:0}.el-tabs__item:focus.is-active.is-focus[data-v-7e7ef174]:not(:active){box-shadow:none!important}.downloadExcel[data-v-7e7ef174] .el-link.el-link--default{color:#35b64a}.el-button[data-v-7e7ef174],.el-button[data-v-7e7ef174]:focus,.el-button[data-v-7e7ef174]:hover{background-color:#fff;color:#36b64a}.safety-warning[data-v-7e7ef174]{background-color:#c9f8cd;height:380px}.safety-warning-header[data-v-7e7ef174]{padding:37px 49px 0 48px;vertical-align:middle}.safety-warning-header svg[data-v-7e7ef174]{width:40px;height:40px;position:relative;float:left;margin:auto 0;top:50%}.safety-warning-header span[data-v-7e7ef174]{font-size:28px;position:relative;float:left;margin-left:15px;top:5px;font-weight:revert}.safety-warning-main[data-v-7e7ef174]{padding:0 49px 0 48px}.safety-warning-main>span[data-v-7e7ef174]{width:100%;font-size:18px;position:relative;float:left;text-align:left;font-weight:revert;font-family:Roboto}.safety-warning-footer[data-v-7e7ef174]{padding:0 49px 0 48px}.safety-warning-footer .el-checkbox[data-v-7e7ef174]{float:left;font-weight:revert;color:#333}.safety-warning-footer .el-button[data-v-7e7ef174]{float:right}.grey-background-color[data-v-7e7ef174]{background-color:#f9f9f9}.headerTab[data-v-7e7ef174] .el-tabs__nav-wrap{width:100%!important;background-color:#37b64a}",
        "",
      ]),
      (e.exports = t);
  },
  fb0b: function (e, t, a) {
    var o = a("24fb");
    (t = o(!1)),
      t.push([
        e.i,
        ".active-code[data-v-221c5249]{display:inline-block;width:90%}.el-dialog.el-dialog--center.activeCodeDialog>.el-dialog__footer[data-v-221c5249]{margin:6px auto 17px;padding-top:0!important}.codeInput[data-v-221c5249]{text-align:right;margin-bottom:5px}.codeInput>div[data-v-221c5249]{align-items:center;margin-right:25px;padding:10px 0;cursor:pointer}.el-dialog__footer .el-button--success[data-v-221c5249],.el-dialog__footer .el-button--success[data-v-221c5249]:hover{width:215px;height:32px;border-radius:4px;background-color:#37b64a;font-size:14px;text-align:center;font-family:Roboto;align-items:center;justify-content:center;padding:0}",
        "",
      ]),
      (e.exports = t);
  },
});
//# sourceMappingURL=popup.js.map
