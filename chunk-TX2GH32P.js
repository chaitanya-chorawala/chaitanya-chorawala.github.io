import{a as o,b as c,c as p,d as l,e as n,f as I,g as T}from"./chunk-FSVOHHJJ.js";import{E as _,M as r}from"./chunk-CAS3RZL2.js";var g="@firebase/analytics-compat",a="0.2.6";var i=class{constructor(e,s){this.app=e,this._delegate=s}logEvent(e,s,C){T(this._delegate,e,s,C)}setCurrentScreen(e,s){p(this._delegate,e,s)}setUserId(e,s){l(this._delegate,e,s)}setUserProperties(e,s){n(this._delegate,e,s)}setAnalyticsCollectionEnabled(e){I(this._delegate,e)}};var d=function(t){return t.ADD_SHIPPING_INFO="add_shipping_info",t.ADD_PAYMENT_INFO="add_payment_info",t.ADD_TO_CART="add_to_cart",t.ADD_TO_WISHLIST="add_to_wishlist",t.BEGIN_CHECKOUT="begin_checkout",t.CHECKOUT_PROGRESS="checkout_progress",t.EXCEPTION="exception",t.GENERATE_LEAD="generate_lead",t.LOGIN="login",t.PAGE_VIEW="page_view",t.PURCHASE="purchase",t.REFUND="refund",t.REMOVE_FROM_CART="remove_from_cart",t.SCREEN_VIEW="screen_view",t.SEARCH="search",t.SELECT_CONTENT="select_content",t.SELECT_ITEM="select_item",t.SELECT_PROMOTION="select_promotion",t.SET_CHECKOUT_OPTION="set_checkout_option",t.SHARE="share",t.SIGN_UP="sign_up",t.TIMING_COMPLETE="timing_complete",t.VIEW_CART="view_cart",t.VIEW_ITEM="view_item",t.VIEW_ITEM_LIST="view_item_list",t.VIEW_PROMOTION="view_promotion",t.VIEW_SEARCH_RESULTS="view_search_results",t}(d||{});var E=t=>{let e=t.getProvider("app-compat").getImmediate(),s=t.getProvider("analytics").getImmediate();return new i(e,s)};function S(){let t={Analytics:i,settings:o,isSupported:c,EventName:d};r.INTERNAL.registerComponent(new _("analytics-compat",E,"PUBLIC").setServiceProps(t).setMultipleInstances(!0))}S();r.registerVersion(g,a);
