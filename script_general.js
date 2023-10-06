(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"backgroundColor":["#FFFFFF"],"left":432.25,"start":"this.playAudioList([this.audio_E7CC1336_F241_3C97_41EC_DAD1C0446608], true); this.init()","data":{"defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"rate":1,"speechOnTooltip":false,"volume":1,"pitch":1},"history":{},"name":"Player760"},"class":"Player","id":"rootPlayer","vrPolyfillScale":1,"hash": "7ff7329ccf2511eaa932e3e0205a7f70ca1c0debf251cfbc4dbf79c173060508", "definitions": [{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A"},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":-121.08,"pitch":-19.11},"initialSequence":"this.sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA"},{"id":"effect_1CBE1283_0550_FAED_4167_34E340FEF3E5","class":"FadeInEffect","duration":500},{"paddingBottom":0,"backgroundColor":["#000000"],"right":"37.09%","fontSize":14,"class":"Button","data":{"name":"Avan\u00e7ar"},"verticalAlign":"middle","paddingLeft":0,"id":"Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","paddingRight":0,"fontWeight":"bold","horizontalAlign":"center","iconWidth":0,"rollOverFontColor":"#DB9B4D","pressedBackgroundOpacity":0,"bottom":"9.93%","pressedBackgroundColor":["#DB9B4D"],"width":213,"layout":"horizontal","borderColor":"#000000","height":71.05,"backgroundOpacity":0,"minWidth":1,"minHeight":1,"visible":false,"pressedBackgroundColorRatios":[0],"fontColor":"#FFFFFF","rollOverBackgroundOpacity":0,"rollOverBackgroundColor":["#DB9B4D"],"pressedFontColor":"#000000","fontFamily":"Cinzel Bold","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1F45A094_0553_76EB_4192_041ADEA597B1, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); invisibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A)","rollOverShadow":false,"backgroundColorRatios":[0],"rollOverBackgroundColorRatios":[0],"iconHeight":0,"paddingTop":0},{"id":"effect_10F15283_0571_7AEE_4175_8A30209E46D3","class":"FadeOutEffect","duration":500},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","media":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","media":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},"this.PanoramaPlayListItem_1F45A094_0553_76EB_4192_041ADEA597B1",{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","media":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},"this.PanoramaPlayListItem_1F5A6095_0553_7615_417E_014F4E7FF5D8"]},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829"},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","displayOriginPosition":{"class":"RotationalCameraDisplayPosition","yaw":0,"stereographicFactor":1,"pitch":-90,"hfov":165},"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"targetStereographicFactor":0,"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","targetPitch":0,"duration":3000}]},{"right":"10.33%","scaleMode":"fit_inside","class":"Image","data":{"name":"bem vindos"},"verticalAlign":"middle","url":trans('Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A.url'),"id":"Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A","horizontalAlign":"center","top":"4.63%","width":"75.587%","propagateClick":false,"height":"90.068%","backgroundOpacity":0,"minWidth":1,"minHeight":1,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1F45A094_0553_76EB_4192_041ADEA597B1, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_10F15283_0571_7AEE_4175_8A30209E46D3, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A)","visible":false},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/0/{row}_{column}.jpg","width":12288,"tags":["ondemand","mobilevr2gen"],"rowCount":4},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/1/{row}_{column}.jpg","width":6144,"tags":"ondemand","rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/2/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"],"rowCount":1},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/vr/0.jpg","width":9216,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg"}],"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","label":trans('panorama_FE7B43FB_F241_239D_41DA_40137FF084E4.label'),"data":{"label":"01"},"class":"Panorama","thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg","hfov":360,"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":-98.1,"distance":100,"enabledInSurfaceSelection":false,"data":{"overlayID":"overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60"},"panorama":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","select":"this.overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60.get('areas').forEach(function(a){ a.trigger('click') })"}],"vfov":180,"overlays":["this.overlay_FCD7171F_F243_6495_41D7_44230B2484C5","this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0","this.overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60"],"hfovMax":130,"hfovMin":"135%"},{"id":"audio_E7CC1336_F241_3C97_41EC_DAD1C0446608","class":"MediaAudio","data":{"label":"Gemini Robot - Bird Creek"},"autoplay":true,"audio":"this.audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/0/{row}_{column}.jpg","width":12288,"tags":["ondemand","mobilevr2gen"],"rowCount":4},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/1/{row}_{column}.jpg","width":6144,"tags":"ondemand","rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/2/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"],"rowCount":1},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/vr/0.jpg","width":9216,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg"}],"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","label":trans('panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5.label'),"data":{"label":"sl maker"},"class":"Panorama","thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg","hfov":360,"vfov":180,"overlays":["this.overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0"],"hfovMax":130,"hfovMin":"135%"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/0/{row}_{column}.jpg","width":12288,"tags":["ondemand","mobilevr2gen"],"rowCount":4},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/1/{row}_{column}.jpg","width":6144,"tags":"ondemand","rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/2/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"],"rowCount":1},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/vr/0.jpg","width":9216,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg"}],"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","label":trans('panorama_F891C254_F241_1CEB_41E8_6278EE7C091C.label'),"data":{"label":"sl recra\u00e7\u00e3o02"},"class":"Panorama","thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg","hfov":360,"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":-70.14,"distance":100,"enabledInSurfaceSelection":false,"data":{"overlayID":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2"},"panorama":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","select":"this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","yaw":22.89,"distance":4.66,"data":{"overlayID":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97"},"panorama":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","backwardYaw":71.87,"select":"this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97.get('areas').forEach(function(a){ a.trigger('click') })"}],"vfov":180,"overlays":["this.overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0","this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2"],"hfovMax":130,"hfovMin":"135%"},{"gap":10,"data":{"name":"Container geral"},"overflow":"scroll","class":"Container","id":"Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","scrollBarMargin":2,"top":"2.44%","width":"80.438%","propagateClick":false,"height":"90.884%","backgroundOpacity":0,"minWidth":20,"minHeight":20,"visible":false,"scrollBarColor":"#000000","layout":"absolute","left":"13.77%"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/0/{row}_{column}.jpg","width":12288,"tags":["ondemand","mobilevr2gen"],"rowCount":4},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/1/{row}_{column}.jpg","width":6144,"tags":"ondemand","rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/2/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"],"rowCount":1},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/vr/0.jpg","width":9216,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg"}],"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","label":trans('panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8.label'),"data":{"label":"sl recrea\u00e7\u00e3o01"},"class":"Panorama","thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg","hfov":360,"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":71.87,"distance":4.79,"data":{"overlayID":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA"},"panorama":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","backwardYaw":22.89,"select":"this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA.get('areas').forEach(function(a){ a.trigger('click') })"}],"vfov":180,"overlays":["this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0"],"hfovMax":130,"hfovMin":"135%"},{"frames":[{"cube":{"class":"ImageResource","levels":[{"height":2048,"colCount":24,"class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/0/{row}_{column}.jpg","width":12288,"tags":["ondemand","mobilevr2gen"],"rowCount":4},{"height":1024,"colCount":12,"class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/1/{row}_{column}.jpg","width":6144,"tags":"ondemand","rowCount":2},{"height":512,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/2/{row}_{column}.jpg","width":3072,"tags":["ondemand","preload"],"rowCount":1},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/vr/0.jpg","width":9216,"rowCount":1}]},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg"}],"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","label":trans('panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5.label'),"data":{"label":"Recep\u00e7\u00e3o"},"class":"Panorama","thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg","hfov":360,"vfov":180,"overlays":["this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0"],"hfovMax":130,"hfovMin":"135%"},{"subtitlesTextShadowVerticalLength":1,"id":"MainViewer","playbackBarRight":0,"progressBackgroundColorRatios":[0],"progressRight":"33%","progressOpacity":0.7,"progressBarBackgroundColorDirection":"horizontal","subtitlesBottom":50,"toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColor":["#3399FF"],"progressBarBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundColor":"#000000","progressBorderColor":"#000000","firstTransitionDuration":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderRadius":0,"toolTipTextShadowColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","data":{"name":"Main Viewer"},"toolTipPaddingTop":4,"width":"100%","progressBackgroundColor":["#000000"],"progressBottom":10,"height":"100%","toolTipShadowColor":"#333138","subtitlesGap":0,"progressHeight":2,"subtitlesTop":0,"playbackBarProgressBackgroundColorRatios":[0],"progressBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":2,"playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarProgressBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"subtitlesFontSize":"3vmin","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","progressBorderRadius":2,"subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"surfaceReticleSelectionColor":"#FFFFFF","class":"ViewerArea","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadBorderSize":0,"playbackBarHeadHeight":15,"playbackBarHeadShadow":true,"playbackBarBackgroundOpacity":1,"toolTipBorderColor":"#767676","playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","toolTipPaddingLeft":6,"vrPointerSelectionColor":"#FF6600","top":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarBottom":5,"propagateClick":false,"minHeight":50,"vrPointerColor":"#FFFFFF","minWidth":100,"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"toolTipPaddingRight":6,"playbackBarProgressBorderSize":0,"playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","toolTipPaddingBottom":4,"left":0},{"data":{"name":"logo"},"scaleMode":"fit_inside","class":"Image","verticalAlign":"middle","url":trans('Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD.url'),"id":"Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD","horizontalAlign":"center","top":"8.98%","init":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 10000, this.effect_1CBE1283_0550_FAED_4167_34E340FEF3E5, 'showEffect', false)}.bind(this); visibleFunc(this.Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A); visibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); visibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A)","propagateClick":false,"height":"13.878%","width":"13.302%","backgroundOpacity":0,"minWidth":1,"minHeight":1,"left":"1.25%"},{"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"class":"PanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate"},{"id":"effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2","class":"FadeOutEffect","duration":500},{"id":"sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"PanoramaPlayListItem_1F45A094_0553_76EB_4192_041ADEA597B1","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","media":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"id":"PanoramaPlayListItem_1F5A6095_0553_7615_417E_014F4E7FF5D8","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","media":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"},{"id":"sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in"},{"yawDelta":323,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out"}]},{"id":"overlay_FCD7171F_F243_6495_41D7_44230B2484C5","maps":[],"useHandCursor":true,"items":[{"distance":50,"pitch":-2.99,"vfov":3.81,"class":"HotspotPanoramaOverlayImage","yaw":-116.03,"data":{"label":"Poligono"},"image":{"class":"ImageResource","levels":[{"height":64,"class":"ImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_HS_thwmnc3n.png","width":47}]},"hfov":2.79}],"areas":["this.HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Poligono"}},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60","enabled":false,"maps":[],"useHandCursor":true,"items":[{"offsetX":203.06,"scaleMode":"fit_inside","offsetY":177.17,"width":406.13,"pitch":0.88,"class":"FlatHotspotPanoramaOverlayImage","yaw":-98.1,"data":{"label":"AZUL"},"height":354.33,"image":"this.res_1D38E18B_0551_76FD_4186_C6B3A575EAA2"}],"areas":["this.FlatHotspotPanoramaOverlayArea_1284DFFA_0557_AA1F_418D_EA28622800B3"],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay","data":{"label":"AZUL"}},{"id":"audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB","class":"AudioResource","mp3Url":trans('audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB.mp3Url'),"gain":0.51},{"id":"overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","maps":[],"useHandCursor":true,"items":[{"distance":50,"pitch":28.9,"vfov":7.09,"class":"HotspotPanoramaOverlayImage","yaw":-43.99,"data":{"label":"Poligono"},"image":{"class":"ImageResource","levels":[{"height":119,"class":"ImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_HS_z6xw3wb2.png","width":101}]},"hfov":6.02}],"areas":["this.HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Poligono"}},{"id":"overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","enabled":false,"maps":[],"useHandCursor":true,"items":[{"offsetX":251.92,"scaleMode":"fit_inside","offsetY":274.46,"width":503.83,"pitch":3.38,"class":"FlatHotspotPanoramaOverlayImage","yaw":-76.83,"data":{"label":"verde"},"height":548.93,"image":"this.res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852"}],"areas":["this.FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4"],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay","data":{"label":"verde"}},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","maps":[],"useHandCursor":true,"items":[{"distance":50,"pitch":10.38,"vfov":3.38,"class":"HotspotPanoramaOverlayImage","yaw":-51.2,"data":{"label":"Poligono"},"image":{"class":"ImageResource","levels":[{"height":57,"class":"ImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_HS_lfc1mblw.png","width":64}]},"hfov":3.79}],"areas":["this.HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Poligono"}},{"id":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","maps":[],"useHandCursor":true,"items":[{"distance":100,"vertices":[{"class":"PanoramaPoint","yaw":16.22,"pitch":-17.3},{"class":"PanoramaPoint","yaw":27.19,"pitch":-17.32},{"class":"PanoramaPoint","yaw":35.73,"pitch":-24.32},{"class":"PanoramaPoint","yaw":11.04,"pitch":-26.48}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Arrow 02"},"image":"this.AnimatedImageResource_1F466FD2_0553_6A6F_4191_EADB1EC346F3"}],"areas":["this.HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02","hasPanoramaAction":true}},{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2","enabled":false,"maps":[],"useHandCursor":true,"items":[{"offsetX":136.13,"scaleMode":"fit_inside","offsetY":223.12,"width":272.27,"pitch":2.34,"class":"FlatHotspotPanoramaOverlayImage","yaw":-70.14,"data":{"label":"rosa"},"height":446.25,"image":"this.res_E7A2D765_F243_64B5_41DA_4AB1391F68D1"}],"areas":["this.FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371"],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay","data":{"label":"rosa"}},{"id":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","maps":[],"useHandCursor":true,"items":[{"distance":50,"hfov":18.54,"scaleMode":"fit_inside","vfov":11.55,"class":"HotspotPanoramaOverlayImage","yaw":71.87,"data":{"label":"Arrow 02b Left"},"image":"this.AnimatedImageResource_1F460FD1_0553_6A6D_4180_122DB6C3E285","pitch":-19.52}],"areas":["this.HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02b Left","hasPanoramaAction":true}},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06","class":"HotspotPanoramaOverlayArea","mapColor":"image","click":"this.setOverlaysVisibility([this.overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60], true, 0)"},{"id":"res_D254497B_F2C1_6C9D_41C2_46089F58A38C","class":"ImageResource","levels":[{"height":1024,"class":"ImageResourceLevel","url":"media/res_D254497B_F2C1_6C9D_41C2_46089F58A38C_0.png","width":1024}]},{"id":"res_1D38E18B_0551_76FD_4186_C6B3A575EAA2","class":"ImageResource","levels":[{"height":709,"class":"ImageResourceLevel","url":"media/res_1D38E18B_0551_76FD_4186_C6B3A575EAA2_0.png","width":798}]},{"displayTooltipInTouchScreens":true,"id":"FlatHotspotPanoramaOverlayArea_1284DFFA_0557_AA1F_418D_EA28622800B3","class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_1F5A6095_0553_7615_417E_014F4E7FF5D8, -121.0911823910454, -19.1200453126507, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA","class":"HotspotPanoramaOverlayArea","mapColor":"image","click":"this.setOverlaysVisibility([this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A], 'toggle', 0)"},{"id":"res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852","class":"ImageResource","levels":[{"height":930,"class":"ImageResourceLevel","url":"media/res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852_0.png","width":1008}]},{"displayTooltipInTouchScreens":true,"id":"FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4","class":"FlatHotspotPanoramaOverlayArea","mapColor":"any"},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06","class":"HotspotPanoramaOverlayArea","mapColor":"image","click":"this.setOverlaysVisibility([this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2], true, 0)"},{"id":"AnimatedImageResource_1F466FD2_0553_6A6F_4191_EADB1EC346F3","frameDuration":41,"finalFrame":"first","rowCount":6,"levels":[{"height":480,"class":"ImageResourceLevel","url":"media/res_E47C9D07_F240_E475_41D3_616929813FEA_0.png","width":380}],"class":"AnimatedImageResource","colCount":4,"frameCount":24},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"id":"res_E7A2D765_F243_64B5_41DA_4AB1391F68D1","class":"ImageResource","levels":[{"height":892,"class":"ImageResourceLevel","url":"media/res_E7A2D765_F243_64B5_41DA_4AB1391F68D1_0.png","width":481}]},{"displayTooltipInTouchScreens":true,"id":"FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371","class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"AnimatedImageResource_1F460FD1_0553_6A6D_4180_122DB6C3E285","frameDuration":41,"finalFrame":"first","rowCount":6,"levels":[{"height":360,"class":"ImageResourceLevel","url":"media/res_E7A02766_F243_64B7_41E7_A235DE3373D9_0.png","width":400}],"class":"AnimatedImageResource","colCount":4,"frameCount":24},{"displayTooltipInTouchScreens":true,"id":"HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7","class":"HotspotPanoramaOverlayArea","mapColor":"any","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)"}],"scrollBarMargin":2,"defaultVRPointer":"gaze","width":"100%","propagateClick":false,"height":"100%","minHeight":0,"minWidth":0,"layout":"absolute","scripts":{"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPixels":TDV.Tour.Script.getPixels,"existsKey":TDV.Tour.Script.existsKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getMainViewer":TDV.Tour.Script.getMainViewer,"unregisterKey":TDV.Tour.Script.unregisterKey,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"shareSocial":TDV.Tour.Script.shareSocial,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"registerKey":TDV.Tour.Script.registerKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getKey":TDV.Tour.Script.getKey,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"startMeasurement":TDV.Tour.Script.startMeasurement,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"init":TDV.Tour.Script.init,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"translate":TDV.Tour.Script.translate,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"downloadFile":TDV.Tour.Script.downloadFile,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setLocale":TDV.Tour.Script.setLocale,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"mixObject":TDV.Tour.Script.mixObject,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"cloneBindings":TDV.Tour.Script.cloneBindings,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"clone":TDV.Tour.Script.clone,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"createTween":TDV.Tour.Script.createTween,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getComponentByName":TDV.Tour.Script.getComponentByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"historyGoBack":TDV.Tour.Script.historyGoBack,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowScore":TDV.Tour.Script.quizShowScore,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isPanorama":TDV.Tour.Script.isPanorama,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"initAnalytics":TDV.Tour.Script.initAnalytics,"showWindow":TDV.Tour.Script.showWindow,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumePlayers":TDV.Tour.Script.resumePlayers,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"quizStart":TDV.Tour.Script.quizStart,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"openLink":TDV.Tour.Script.openLink,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"executeJS":TDV.Tour.Script.executeJS,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeech":TDV.Tour.Script.textToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"getOverlays":TDV.Tour.Script.getOverlays,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setValue":TDV.Tour.Script.setValue,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour},"scrollBarColor":"#000000","watermark":false,"gap":10,"children":["this.MainViewer","this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","this.Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD","this.Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A"],"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.1.11.js.map
})();
//Generated with v2023.1.11, Fri Oct 6 2023