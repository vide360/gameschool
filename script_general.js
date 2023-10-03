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
var script = {"id":"rootPlayer","backgroundColor":["#FFFFFF"],"start":"this.playAudioList([this.audio_E7CC1336_F241_3C97_41EC_DAD1C0446608], true); this.init()","minHeight":0,"data":{"defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"stopBackgroundAudio":false,"pitch":1},"name":"Player760","history":{}},"hash": "b477f30b707645f6ce7e8fb8663632277225b23dde58180b7da746cff17a90f3", "definitions": [{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","label":trans('panorama_FE7B43FB_F241_239D_41DA_40137FF084E4.label'),"frames":[{"thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"colCount":24,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"01"},"class":"Panorama","overlays":["this.overlay_FCD7171F_F243_6495_41D7_44230B2484C5","this.overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97","this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0"],"adjacentPanoramas":[{"yaw":-89.15,"distance":82.34,"enabledInSurfaceSelection":false,"class":"AdjacentPanorama","data":{"overlayID":"overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97"},"panorama":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","select":"this.overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360,"hfovMin":"135%","thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg"},{"id":"effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2","duration":500,"class":"FadeOutEffect"},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","label":trans('panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5.label'),"frames":[{"thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"colCount":24,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"sl maker"},"class":"Panorama","overlays":["this.overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0"],"hfovMax":130,"hfov":360,"hfovMin":"135%","thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg"},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"enterPointingToHorizon":true,"displayOriginPosition":{"hfov":165,"class":"RotationalCameraDisplayPosition","yaw":0,"stereographicFactor":1,"pitch":-90},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","targetStereographicFactor":0,"targetPitch":0}]},{"initialPosition":{"yaw":-121.08,"class":"PanoramaCameraPosition","pitch":-19.11},"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","class":"PanoramaCamera","initialSequence":"this.sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA","enterPointingToHorizon":true},{"id":"audio_E7CC1336_F241_3C97_41EC_DAD1C0446608","class":"MediaAudio","data":{"label":"Gemini Robot - Bird Creek"},"audio":"this.audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB","autoplay":true},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","label":trans('panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8.label'),"frames":[{"thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"colCount":24,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"sl recrea\u00e7\u00e3o01"},"class":"Panorama","overlays":["this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0"],"adjacentPanoramas":[{"yaw":71.87,"distance":4.79,"select":"this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA"},"panorama":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","backwardYaw":22.89}],"hfovMax":130,"hfov":360,"hfovMin":"135%","thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","class":"PanoramaCamera","initialSequence":"this.sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8","enterPointingToHorizon":true},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","label":trans('panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5.label'),"frames":[{"thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"colCount":24,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"Recep\u00e7\u00e3o"},"class":"Panorama","overlays":["this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0"],"hfovMax":130,"hfov":360,"hfovMin":"135%","thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg"},{"id":"Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","minHeight":20,"data":{"name":"Container geral"},"minWidth":20,"overflow":"scroll","scrollBarMargin":2,"top":"2.44%","width":"80.438%","propagateClick":false,"height":"90.884%","backgroundOpacity":0,"layout":"absolute","visible":false,"class":"Container","gap":10,"left":"13.77%","scrollBarColor":"#000000"},{"pressedBackgroundColorRatios":[0],"id":"Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","minHeight":1,"right":"37.09%","backgroundColor":["#000000"],"minWidth":1,"data":{"name":"Avan\u00e7ar"},"fontSize":14,"verticalAlign":"middle","rollOverBackgroundColor":["#DB9B4D"],"fontWeight":"bold","iconHeight":0,"iconWidth":0,"rollOverFontColor":"#DB9B4D","rollOverBackgroundColorRatios":[0],"layout":"horizontal","pressedBackgroundColor":["#DB9B4D"],"bottom":"9.93%","paddingLeft":0,"borderColor":"#000000","paddingRight":0,"width":213,"height":71.05,"backgroundOpacity":0,"backgroundColorRatios":[0],"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_E680F37E_F590_3F35_41E2_07B92CD756E9, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); invisibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A); invisibleFunc(this.Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5)","rollOverBackgroundOpacity":0,"visible":false,"class":"Button","fontFamily":"Cinzel Bold","rollOverShadow":false,"horizontalAlign":"center","pressedBackgroundOpacity":0,"paddingTop":0,"fontColor":"#FFFFFF","paddingBottom":0,"pressedFontColor":"#000000"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","class":"PanoramaCamera","initialSequence":"this.sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A","enterPointingToHorizon":true},{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","label":trans('panorama_F891C254_F241_1CEB_41E8_6278EE7C091C.label'),"frames":[{"thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"class":"TiledImageResourceLevel","tags":["ondemand","mobilevr2gen"],"colCount":24,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"class":"TiledImageResourceLevel","tags":"ondemand","colCount":12,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"class":"TiledImageResourceLevel","tags":["ondemand","preload"],"colCount":6,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"class":"TiledImageResourceLevel","rowCount":1,"colCount":6,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/vr/0.jpg","width":9216}],"class":"ImageResource"}}],"vfov":180,"data":{"label":"sl recra\u00e7\u00e3o02"},"class":"Panorama","overlays":["this.overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2","this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0"],"adjacentPanoramas":[{"yaw":22.89,"distance":4.66,"select":"this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97"},"panorama":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","backwardYaw":71.87},{"yaw":-70.14,"distance":100,"enabledInSurfaceSelection":false,"class":"AdjacentPanorama","data":{"overlayID":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2"},"panorama":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","select":"this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360,"hfovMin":"135%","thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg"},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","class":"PanoramaCamera","initialSequence":"this.sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829","enterPointingToHorizon":true},{"id":"MainViewer","progressBackgroundColorRatios":[0],"minHeight":50,"toolTipPaddingLeft":6,"minWidth":100,"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"progressOpacity":0.7,"subtitlesGap":0,"progressRight":"33%","progressBarBackgroundColorDirection":"horizontal","subtitlesBottom":50,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadShadowOpacity":0.7,"toolTipFontFamily":"Arial","progressBarBackgroundColorRatios":[0],"progressBorderColor":"#000000","progressBarBorderColor":"#000000","subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","toolTipPaddingTop":4,"firstTransitionDuration":0,"progressBackgroundColor":["#000000"],"progressBottom":10,"toolTipTextShadowColor":"#000000","subtitlesTextShadowColor":"#000000","playbackBarProgressBackgroundColorRatios":[0],"subtitlesTop":0,"width":"100%","progressBorderSize":0,"playbackBarBorderColor":"#FFFFFF","progressHeight":2,"progressBarBorderRadius":2,"surfaceReticleColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesTextShadowVerticalLength":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderRadius":0,"subtitlesBackgroundOpacity":0.2,"progressBorderRadius":2,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowHorizontalLength":1,"subtitlesFontColor":"#FFFFFF","playbackBarLeft":0,"height":"100%","subtitlesBorderColor":"#FFFFFF","progressLeft":"33%","surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarBorderSize":0,"toolTipBorderColor":"#767676","vrPointerSelectionColor":"#FF6600","playbackBarHeadShadow":true,"vrPointerSelectionTime":2000,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"toolTipPaddingRight":6,"subtitlesFontFamily":"Arial","top":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerColor":"#FFFFFF","propagateClick":false,"toolTipFontColor":"#606060","toolTipPaddingBottom":4,"playbackBarBottom":5,"playbackBarBackgroundColor":["#FFFFFF"],"class":"ViewerArea","playbackBarHeight":10,"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"left":0},{"id":"effect_E92B9395_F2C1_6394_41D8_7762EDDF5A30","duration":500,"class":"FadeInEffect"},{"id":"mainPlayList","class":"PlayList","items":[{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","media":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)","camera":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","media":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","class":"PanoramaPlayListItem"},"this.PanoramaPlayListItem_E680F37E_F590_3F35_41E2_07B92CD756E9",{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)","camera":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","media":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","class":"PanoramaPlayListItem"},{"player":"this.MainViewerPanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)","end":"this.trigger('tourEnded')","camera":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","media":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","class":"PanoramaPlayListItem"}]},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","arrowKeysAction":"translate","viewerArea":"this.MainViewer","aaEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"touchControlMode":"drag_rotation"},{"id":"Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD","minHeight":1,"data":{"name":"logo"},"scaleMode":"fit_inside","minWidth":1,"verticalAlign":"middle","url":trans('Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD.url'),"top":"8.98%","init":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 10000, this.effect_E92B9395_F2C1_6394_41D8_7762EDDF5A30, 'showEffect', false)}.bind(this); visibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); visibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A); visibleFunc(this.Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5)","propagateClick":false,"height":"13.878%","backgroundOpacity":0,"width":"13.302%","class":"Image","horizontalAlign":"center","left":"1.25%"},{"id":"Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5","minHeight":1,"right":"7.43%","scaleMode":"fit_inside","minWidth":1,"data":{"name":"Bem vindo"},"verticalAlign":"middle","url":trans('Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5.url'),"top":"3.27%","width":"76.135%","propagateClick":false,"height":"89.388%","backgroundOpacity":0,"visible":false,"class":"Image","horizontalAlign":"center"},{"id":"overlay_FCD7171F_F243_6495_41D7_44230B2484C5","areas":["this.HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":{"levels":[{"height":64,"class":"ImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_HS_thwmnc3n.png","width":47}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","distance":50,"hfov":2.79,"pitch":-2.99,"vfov":3.81,"yaw":-116.03,"data":{"label":"Poligono"}}],"enabledInCardboard":true,"data":{"label":"Poligono"},"maps":[]},{"id":"overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97","areas":["this.FlatHotspotPanoramaOverlayArea_D267D1A1_F2C1_1FAD_41D8_F762C542868F"],"class":"FlatHotspotPanoramaOverlay","enabled":false,"useHandCursor":true,"items":[{"image":"this.res_D0B99A0A_F2C0_EC7F_41CF_934785B07D3C","class":"FlatHotspotPanoramaOverlayImage","offsetX":179.42,"width":358.84,"pitch":-1.17,"height":386.37,"yaw":-89.15,"offsetY":193.19,"data":{"label":"AZUL"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"AZUL","hasPanoramaAction":true},"maps":[]},{"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0","class":"TripodCapPanoramaOverlay","distance":50,"hfov":27},{"id":"overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","areas":["this.HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":{"levels":[{"height":119,"class":"ImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_HS_z6xw3wb2.png","width":101}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","distance":50,"hfov":6.02,"pitch":28.9,"vfov":7.09,"yaw":-43.99,"data":{"label":"Poligono"}}],"enabledInCardboard":true,"data":{"label":"Poligono"},"maps":[]},{"id":"overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","areas":["this.FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4"],"class":"FlatHotspotPanoramaOverlay","enabled":false,"useHandCursor":true,"items":[{"image":"this.res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852","class":"FlatHotspotPanoramaOverlayImage","offsetX":251.92,"width":503.83,"pitch":3.38,"height":548.93,"yaw":-76.83,"offsetY":274.46,"data":{"label":"verde"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"verde"},"maps":[]},{"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0","class":"TripodCapPanoramaOverlay","distance":50,"hfov":27},{"id":"sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB","class":"AudioResource","gain":0.51,"mp3Url":trans('audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB.mp3Url')},{"id":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","areas":["this.HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_E68C02B4_F590_3935_41CE_6FC652E0A537","class":"HotspotPanoramaOverlayImage","distance":50,"data":{"label":"Arrow 02b Left"},"vfov":11.55,"pitch":-19.52,"yaw":71.87,"hfov":18.54,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"Arrow 02b Left","hasPanoramaAction":true},"maps":[]},{"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0","class":"TripodCapPanoramaOverlay","distance":50,"hfov":27},{"id":"sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0","class":"TripodCapPanoramaOverlay","distance":50,"hfov":27},{"id":"sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","areas":["this.HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":{"levels":[{"height":57,"class":"ImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_HS_lfc1mblw.png","width":64}],"class":"ImageResource"},"class":"HotspotPanoramaOverlayImage","distance":50,"hfov":3.79,"pitch":10.38,"vfov":3.38,"yaw":-51.2,"data":{"label":"Poligono"}}],"enabledInCardboard":true,"data":{"label":"Poligono"},"maps":[]},{"id":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2","areas":["this.FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371"],"class":"FlatHotspotPanoramaOverlay","enabled":false,"useHandCursor":true,"items":[{"image":"this.res_E7A2D765_F243_64B5_41DA_4AB1391F68D1","class":"FlatHotspotPanoramaOverlayImage","offsetX":136.13,"width":272.27,"pitch":2.34,"height":446.25,"yaw":-70.14,"offsetY":223.12,"data":{"label":"rosa"},"scaleMode":"fit_inside"}],"enabledInCardboard":true,"data":{"label":"rosa"},"maps":[]},{"id":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","areas":["this.HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.AnimatedImageResource_E68DB2B6_F590_3935_41B2_BB3ACFF3952F","class":"QuadHotspotPanoramaOverlayImage","distance":100,"vertices":[{"yaw":16.22,"class":"PanoramaPoint","pitch":-17.3},{"yaw":27.19,"class":"PanoramaPoint","pitch":-17.32},{"yaw":35.73,"class":"PanoramaPoint","pitch":-24.32},{"yaw":11.04,"class":"PanoramaPoint","pitch":-26.48}],"data":{"label":"Arrow 02"}}],"enabledInCardboard":true,"data":{"label":"Arrow 02","hasPanoramaAction":true},"maps":[]},{"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0","class":"TripodCapPanoramaOverlay","distance":50,"hfov":27},{"id":"sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829","movements":[{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawDelta":18.5},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","yawDelta":323},{"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawDelta":18.5}],"class":"PanoramaCameraSequence"},{"id":"PanoramaPlayListItem_E680F37E_F590_3F35_41E2_07B92CD756E9","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","media":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"mapColor":"image","id":"HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setOverlaysVisibility([this.overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97], true, 0)"},{"mapColor":"any","id":"FlatHotspotPanoramaOverlayArea_D267D1A1_F2C1_1FAD_41D8_F762C542868F","class":"FlatHotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"id":"res_D0B99A0A_F2C0_EC7F_41CF_934785B07D3C","levels":[{"height":693,"class":"ImageResourceLevel","url":"media/res_D0B99A0A_F2C0_EC7F_41CF_934785B07D3C_0.png","width":718}],"class":"ImageResource"},{"id":"res_D254497B_F2C1_6C9D_41C2_46089F58A38C","levels":[{"height":1024,"class":"ImageResourceLevel","url":"media/res_D254497B_F2C1_6C9D_41C2_46089F58A38C_0.png","width":1024}],"class":"ImageResource"},{"mapColor":"image","id":"HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setOverlaysVisibility([this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A], 'toggle', 0)"},{"mapColor":"any","id":"FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4","class":"FlatHotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true},{"id":"res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852","levels":[{"height":930,"class":"ImageResourceLevel","url":"media/res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852_0.png","width":1008}],"class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)"},{"id":"AnimatedImageResource_E68C02B4_F590_3935_41CE_6FC652E0A537","levels":[{"height":360,"class":"ImageResourceLevel","url":"media/res_E7A02766_F243_64B7_41E7_A235DE3373D9_0.png","width":400}],"rowCount":6,"class":"AnimatedImageResource","finalFrame":"first","colCount":4,"frameCount":24,"frameDuration":41},{"mapColor":"image","id":"HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setOverlaysVisibility([this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2], 'toggle', 0)"},{"mapColor":"any","id":"FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371","class":"FlatHotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"res_E7A2D765_F243_64B5_41DA_4AB1391F68D1","levels":[{"height":892,"class":"ImageResourceLevel","url":"media/res_E7A2D765_F243_64B5_41DA_4AB1391F68D1_0.png","width":481}],"class":"ImageResource"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"id":"AnimatedImageResource_E68DB2B6_F590_3935_41B2_BB3ACFF3952F","levels":[{"height":480,"class":"ImageResourceLevel","url":"media/res_E47C9D07_F240_E475_41D3_616929813FEA_0.png","width":380}],"rowCount":6,"class":"AnimatedImageResource","finalFrame":"first","colCount":4,"frameCount":24,"frameDuration":41}],"watermark":false,"minWidth":0,"children":["this.MainViewer","this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","this.Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5","this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","this.Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD"],"layout":"absolute","scrollBarMargin":2,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorRatios":[0],"width":"100%","propagateClick":false,"height":"100%","class":"Player","gap":10,"scripts":{"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"isPanorama":TDV.Tour.Script.isPanorama,"playAudioList":TDV.Tour.Script.playAudioList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMainViewer":TDV.Tour.Script.getMainViewer,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"downloadFile":TDV.Tour.Script.downloadFile,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"resumePlayers":TDV.Tour.Script.resumePlayers,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setValue":TDV.Tour.Script.setValue,"shareSocial":TDV.Tour.Script.shareSocial,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"executeJS":TDV.Tour.Script.executeJS,"textToSpeech":TDV.Tour.Script.textToSpeech,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"init":TDV.Tour.Script.init,"translate":TDV.Tour.Script.translate,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"existsKey":TDV.Tour.Script.existsKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setLocale":TDV.Tour.Script.setLocale,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"mixObject":TDV.Tour.Script.mixObject,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"quizShowScore":TDV.Tour.Script.quizShowScore,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizStart":TDV.Tour.Script.quizStart,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getComponentByName":TDV.Tour.Script.getComponentByName,"historyGoForward":TDV.Tour.Script.historyGoForward,"showPopupImage":TDV.Tour.Script.showPopupImage,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"startMeasurement":TDV.Tour.Script.startMeasurement,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"clone":TDV.Tour.Script.clone,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlays":TDV.Tour.Script.getOverlays,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"createTween":TDV.Tour.Script.createTween,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"setMapLocation":TDV.Tour.Script.setMapLocation,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"initQuiz":TDV.Tour.Script.initQuiz,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openLink":TDV.Tour.Script.openLink,"showWindow":TDV.Tour.Script.showWindow,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaByName":TDV.Tour.Script.getMediaByName,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPixels":TDV.Tour.Script.getPixels,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty},"left":432.25,"defaultVRPointer":"gaze","scrollBarColor":"#000000","vrPolyfillScale":1};
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
//Generated with v2023.1.11, Tue Oct 3 2023