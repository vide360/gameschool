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
var script = {"id":"rootPlayer","scripts":{"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"registerKey":TDV.Tour.Script.registerKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"historyGoBack":TDV.Tour.Script.historyGoBack,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setValue":TDV.Tour.Script.setValue,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"translate":TDV.Tour.Script.translate,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"cloneBindings":TDV.Tour.Script.cloneBindings,"init":TDV.Tour.Script.init,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"quizStart":TDV.Tour.Script.quizStart,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"startMeasurement":TDV.Tour.Script.startMeasurement,"setLocale":TDV.Tour.Script.setLocale,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"clone":TDV.Tour.Script.clone,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizFinish":TDV.Tour.Script.quizFinish,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"mixObject":TDV.Tour.Script.mixObject,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"existsKey":TDV.Tour.Script.existsKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"textToSpeech":TDV.Tour.Script.textToSpeech,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumePlayers":TDV.Tour.Script.resumePlayers,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupImage":TDV.Tour.Script.showPopupImage,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"showWindow":TDV.Tour.Script.showWindow,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"createTween":TDV.Tour.Script.createTween,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"shareSocial":TDV.Tour.Script.shareSocial,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isPanorama":TDV.Tour.Script.isPanorama,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"openLink":TDV.Tour.Script.openLink,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getOverlays":TDV.Tour.Script.getOverlays,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaByName":TDV.Tour.Script.getMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getPixels":TDV.Tour.Script.getPixels,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"initAnalytics":TDV.Tour.Script.initAnalytics,"executeJS":TDV.Tour.Script.executeJS,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText},"backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","minHeight":0,"data":{"defaultLocale":"pt","history":{},"locales":{"pt":"locale/pt.txt"},"name":"Player760","textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"volume":1,"rate":1,"pitch":1,"speechOnQuizQuestion":false}},"minWidth":0,"backgroundColorRatios":[0],"children":["this.MainViewer","this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","this.Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD","this.Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A","this.IconButton_16E077CB_1B8C_52F2_41A6_6958CB0E243C"],"vrPolyfillScale":1,"class":"Player","layout":"absolute","width":"100%","height":"100%","propagateClick":false,"hash": "bf622cf77486a6c242ebda7054d397fd8468dc2288657df02a8f8080c6184f70", "definitions": [{"id":"effect_1CBE1283_0550_FAED_4167_34E340FEF3E5","class":"FadeInEffect","duration":500},{"id":"Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","backgroundColor":["#000000"],"minHeight":1,"right":"37.09%","fontColor":"#FFFFFF","minWidth":1,"iconHeight":0,"data":{"name":"Avan\u00e7ar"},"class":"Button","verticalAlign":"middle","layout":"horizontal","pressedFontColor":"#000000","backgroundColorRatios":[0],"rollOverBackgroundColor":["#DB9B4D"],"fontSize":14,"fontWeight":"bold","paddingLeft":0,"bottom":"9.93%","iconWidth":0,"borderColor":"#000000","paddingRight":0,"width":213,"height":71.05,"pressedBackgroundColor":["#DB9B4D"],"backgroundOpacity":0,"pressedBackgroundOpacity":0,"visible":false,"rollOverBackgroundColorRatios":[0],"fontFamily":"Cinzel Bold","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_15301631_1B94_55AE_41B9_C04CED3CB2D5, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); invisibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A)","rollOverShadow":false,"pressedBackgroundColorRatios":[0],"paddingTop":0,"horizontalAlign":"center","rollOverFontColor":"#DB9B4D","paddingBottom":0,"rollOverBackgroundOpacity":0},{"id":"IconButton_16E077CB_1B8C_52F2_41A6_6958CB0E243C","maxWidth":60,"minHeight":1,"right":"3.44%","minWidth":1,"data":{"name":"IconButton12826"},"class":"IconButton","iconURL":"skin/IconButton_16E077CB_1B8C_52F2_41A6_6958CB0E243C.png","verticalAlign":"middle","bottom":"4.22%","width":55,"height":54,"propagateClick":false,"backgroundOpacity":0,"horizontalAlign":"center","maxHeight":60},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","scrollBarColor":"#000000","minHeight":20,"minWidth":20,"data":{"name":"Container geral"},"layout":"absolute","overflow":"scroll","top":"2.44%","height":"90.884%","propagateClick":false,"backgroundOpacity":0,"scrollBarMargin":2,"visible":false,"gap":10,"width":"80.438%","class":"Container","left":"13.77%"},{"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","aaEnabled":true,"viewerArea":"this.MainViewer","buttonCardboardView":"this.IconButton_16E077CB_1B8C_52F2_41A6_6958CB0E243C","arrowKeysAction":"translate","displayPlaybackBar":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation"},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","label":trans('panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5.label'),"hfovMax":130,"hfov":360,"hfovMin":"135%","frames":[{"cube":{"levels":[{"tags":["ondemand","mobilevr2gen"],"height":2048,"rowCount":4,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"rowCount":2,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"rowCount":1,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072},{"height":1536,"rowCount":1,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg"}],"data":{"label":"sl maker"},"vfov":180,"thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg","overlays":["this.overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0"],"class":"Panorama"},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","label":trans('panorama_FE7B43FB_F241_239D_41DA_40137FF084E4.label'),"adjacentPanoramas":[{"yaw":-98.1,"distance":100,"panorama":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","class":"AdjacentPanorama","data":{"overlayID":"overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60"},"enabledInSurfaceSelection":false,"select":"this.overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360,"hfovMin":"135%","frames":[{"cube":{"levels":[{"tags":["ondemand","mobilevr2gen"],"height":2048,"rowCount":4,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"rowCount":2,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"rowCount":1,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072},{"height":1536,"rowCount":1,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg"}],"data":{"label":"01"},"vfov":180,"thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg","overlays":["this.overlay_FCD7171F_F243_6495_41D7_44230B2484C5","this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0","this.overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60"],"class":"Panorama"},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","label":trans('panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8.label'),"adjacentPanoramas":[{"backwardYaw":22.89,"yaw":71.87,"distance":4.79,"panorama":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","class":"AdjacentPanorama","data":{"overlayID":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA"},"select":"this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360,"hfovMin":"135%","frames":[{"cube":{"levels":[{"tags":["ondemand","mobilevr2gen"],"height":2048,"rowCount":4,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"rowCount":2,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"rowCount":1,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072},{"height":1536,"rowCount":1,"url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg"}],"data":{"label":"sl recrea\u00e7\u00e3o01"},"vfov":180,"thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg","overlays":["this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0"],"class":"Panorama"},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","initialPosition":{"yaw":-121.08,"class":"PanoramaCameraPosition","pitch":-19.11},"initialSequence":"this.sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"MainViewer","minHeight":50,"toolTipPaddingBottom":4,"minWidth":100,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"progressBackgroundColorRatios":[0],"playbackBarRight":0,"vrPointerSelectionTime":2000,"data":{"name":"Main Viewer"},"playbackBarBackgroundColorDirection":"vertical","class":"ViewerArea","progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"playbackBarProgressBorderRadius":0,"toolTipFontSize":"1.11vmin","playbackBarProgressBackgroundColor":["#3399FF"],"progressRight":"33%","subtitlesBottom":50,"progressBarBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorRatios":[0],"progressBorderColor":"#000000","subtitlesGap":0,"subtitlesBackgroundColor":"#000000","toolTipShadowColor":"#333138","firstTransitionDuration":0,"toolTipTextShadowColor":"#000000","progressBackgroundColor":["#000000"],"subtitlesTop":0,"height":"100%","toolTipPaddingTop":4,"progressBarBackgroundColor":["#3399FF"],"progressBottom":10,"subtitlesTextShadowHorizontalLength":1,"vrPointerColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressHeight":2,"progressBorderSize":0,"playbackBarBorderColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","progressBarBorderRadius":2,"playbackBarBorderRadius":0,"progressBarBorderSize":0,"playbackBarProgressBorderColor":"#000000","subtitlesFontSize":"3vmin","subtitlesTextShadowVerticalLength":1,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"subtitlesBackgroundOpacity":0.2,"playbackBarHeadShadowBlurRadius":3,"width":"100%","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"subtitlesFontColor":"#FFFFFF","progressBorderRadius":2,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarLeft":0,"toolTipBackgroundColor":"#F6F6F6","surfaceReticleSelectionColor":"#FFFFFF","progressLeft":"33%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"toolTipFontFamily":"Arial","playbackBarHeadHeight":15,"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","toolTipPaddingLeft":6,"playbackBarBackgroundOpacity":1,"top":0,"subtitlesFontFamily":"Arial","playbackBarHeadBackgroundColor":["#111111","#666666"],"propagateClick":false,"playbackBarBottom":5,"toolTipPaddingRight":6,"toolTipFontColor":"#606060","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"left":0},{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","label":trans('panorama_F891C254_F241_1CEB_41E8_6278EE7C091C.label'),"adjacentPanoramas":[{"yaw":-70.14,"distance":100,"panorama":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","class":"AdjacentPanorama","data":{"overlayID":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2"},"enabledInSurfaceSelection":false,"select":"this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2.get('areas').forEach(function(a){ a.trigger('click') })"},{"backwardYaw":71.87,"yaw":22.89,"distance":4.66,"panorama":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","class":"AdjacentPanorama","data":{"overlayID":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97"},"select":"this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"hfov":360,"hfovMin":"135%","frames":[{"cube":{"levels":[{"tags":["ondemand","mobilevr2gen"],"height":2048,"rowCount":4,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"rowCount":2,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"rowCount":1,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072},{"height":1536,"rowCount":1,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg"}],"data":{"label":"sl recra\u00e7\u00e3o02"},"vfov":180,"thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg","overlays":["this.overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0","this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2"],"class":"Panorama"},{"id":"audio_E7CC1336_F241_3C97_41EC_DAD1C0446608","autoplay":true,"class":"MediaAudio","data":{"label":"Gemini Robot - Bird Creek"},"audio":"this.audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB"},{"id":"Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD","minHeight":1,"scaleMode":"fit_inside","minWidth":1,"data":{"name":"logo"},"verticalAlign":"middle","url":trans('Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD.url'),"top":"8.98%","height":"15.238%","propagateClick":false,"backgroundOpacity":0,"init":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 10000, this.effect_1CBE1283_0550_FAED_4167_34E340FEF3E5, 'showEffect', false)}.bind(this); visibleFunc(this.Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A); visibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); visibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A)","horizontalAlign":"center","class":"Image","left":"1.25%","width":"14.163%"},{"id":"effect_10F15283_0571_7AEE_4175_8A30209E46D3","class":"FadeOutEffect","duration":500},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"targetStereographicFactor":0,"easing":"cubic_in_out","targetPitch":0,"class":"TargetRotationalCameraDisplayMovement","duration":3000}],"class":"PanoramaCamera","enterPointingToHorizon":true,"displayOriginPosition":{"yaw":0,"class":"RotationalCameraDisplayPosition","hfov":165,"stereographicFactor":1,"pitch":-90}},{"id":"Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A","minHeight":1,"right":"10.33%","scaleMode":"fit_inside","minWidth":1,"data":{"name":"bem vindos"},"verticalAlign":"middle","url":trans('Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A.url'),"top":"4.63%","height":"90.068%","propagateClick":false,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_15301631_1B94_55AE_41B9_C04CED3CB2D5, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_10F15283_0571_7AEE_4175_8A30209E46D3, 'hideEffect', false)}.bind(this); invisibleFunc(this.Image_094F9A2B_04B3_AA3D_416D_C18B24386B9A)","backgroundOpacity":0,"visible":false,"width":"75.587%","horizontalAlign":"center","class":"Image"},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","media":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","media":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},"this.PanoramaPlayListItem_15301631_1B94_55AE_41B9_C04CED3CB2D5",{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","media":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},"this.PanoramaPlayListItem_15327635_1B94_5596_41B8_973DE2C859F8"]},{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2","class":"FadeOutEffect","duration":500},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","label":trans('panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5.label'),"hfovMax":130,"hfov":360,"hfovMin":"135%","frames":[{"cube":{"levels":[{"tags":["ondemand","mobilevr2gen"],"height":2048,"rowCount":4,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":24,"width":12288},{"tags":"ondemand","height":1024,"rowCount":2,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":12,"width":6144},{"tags":["ondemand","preload"],"height":512,"rowCount":1,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","colCount":6,"width":3072},{"height":1536,"rowCount":1,"url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","colCount":6,"width":9216}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg"}],"data":{"label":"Recep\u00e7\u00e3o"},"vfov":180,"thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg","overlays":["this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0"],"class":"Panorama"},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"initialSequence":"this.sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829","class":"PanoramaCamera","enterPointingToHorizon":true},{"id":"sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","data":{"label":"Poligono"},"useHandCursor":true,"items":[{"distance":50,"hfov":6.02,"pitch":28.9,"yaw":-43.99,"image":{"levels":[{"height":119,"url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_HS_z6xw3wb2.png","class":"ImageResourceLevel","width":101}],"class":"ImageResource"},"vfov":7.09,"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligono"}}],"areas":["this.HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA"],"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"id":"overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","enabled":false,"data":{"label":"verde"},"useHandCursor":true,"items":[{"offsetX":251.92,"data":{"label":"verde"},"width":503.83,"pitch":3.38,"height":548.93,"yaw":-76.83,"class":"FlatHotspotPanoramaOverlayImage","offsetY":274.46,"image":"this.res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852","scaleMode":"fit_inside"}],"areas":["this.FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4"],"maps":[],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay"},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0","distance":50,"hfov":27,"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","class":"TripodCapPanoramaOverlay"},{"id":"overlay_FCD7171F_F243_6495_41D7_44230B2484C5","data":{"label":"Poligono"},"useHandCursor":true,"items":[{"distance":50,"hfov":2.79,"pitch":-2.99,"yaw":-116.03,"image":{"levels":[{"height":64,"url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_HS_thwmnc3n.png","class":"ImageResourceLevel","width":47}],"class":"ImageResource"},"vfov":3.81,"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligono"}}],"areas":["this.HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06"],"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0","distance":50,"hfov":27,"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","class":"TripodCapPanoramaOverlay"},{"id":"overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60","enabled":false,"data":{"label":"AZUL"},"useHandCursor":true,"items":[{"offsetX":203.06,"data":{"label":"AZUL"},"width":406.13,"pitch":0.88,"height":354.33,"yaw":-98.1,"class":"FlatHotspotPanoramaOverlayImage","offsetY":177.17,"image":"this.res_1D38E18B_0551_76FD_4186_C6B3A575EAA2","scaleMode":"fit_inside"}],"areas":["this.FlatHotspotPanoramaOverlayArea_1284DFFA_0557_AA1F_418D_EA28622800B3"],"maps":[],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay"},{"id":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","useHandCursor":true,"items":[{"distance":50,"data":{"label":"Arrow 02b Left"},"hfov":18.54,"pitch":-19.52,"yaw":71.87,"vfov":11.55,"class":"HotspotPanoramaOverlayImage","image":"this.AnimatedImageResource_150405D5_1B94_5696_41A3_97C61D4F1BCF","scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7"],"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02b Left","hasPanoramaAction":true}},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0","distance":50,"hfov":27,"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","class":"TripodCapPanoramaOverlay"},{"id":"sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","data":{"label":"Poligono"},"useHandCursor":true,"items":[{"distance":50,"hfov":3.79,"pitch":10.38,"yaw":-51.2,"image":{"levels":[{"height":57,"url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_HS_lfc1mblw.png","class":"ImageResourceLevel","width":64}],"class":"ImageResource"},"vfov":3.38,"class":"HotspotPanoramaOverlayImage","data":{"label":"Poligono"}}],"areas":["this.HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06"],"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay"},{"id":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","useHandCursor":true,"items":[{"distance":100,"vertices":[{"yaw":16.22,"class":"PanoramaPoint","pitch":-17.3},{"yaw":27.19,"class":"PanoramaPoint","pitch":-17.32},{"yaw":35.73,"class":"PanoramaPoint","pitch":-24.32},{"yaw":11.04,"class":"PanoramaPoint","pitch":-26.48}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Arrow 02"},"image":"this.AnimatedImageResource_1507E5D6_1B94_5692_41B4_7F8BEBFA7111"}],"areas":["this.HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF"],"maps":[],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02","hasPanoramaAction":true}},{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0","distance":50,"hfov":27,"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","class":"TripodCapPanoramaOverlay"},{"id":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2","enabled":false,"data":{"label":"rosa"},"useHandCursor":true,"items":[{"offsetX":136.13,"data":{"label":"rosa"},"width":272.27,"pitch":2.34,"height":446.25,"yaw":-70.14,"class":"FlatHotspotPanoramaOverlayImage","offsetY":223.12,"image":"this.res_E7A2D765_F243_64B5_41DA_4AB1391F68D1","scaleMode":"fit_inside"}],"areas":["this.FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371"],"maps":[],"enabledInCardboard":true,"class":"FlatHotspotPanoramaOverlay"},{"id":"audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB","class":"AudioResource","gain":0.51,"mp3Url":trans('audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB.mp3Url')},{"id":"PanoramaPlayListItem_15301631_1B94_55AE_41B9_C04CED3CB2D5","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","media":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"id":"PanoramaPlayListItem_15327635_1B94_5596_41B8_973DE2C859F8","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","media":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"},{"id":"sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0","distance":50,"hfov":27,"image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","class":"TripodCapPanoramaOverlay"},{"id":"sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829","class":"PanoramaCameraSequence","movements":[{"easing":"cubic_in","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"easing":"cubic_out","yawDelta":18.5,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96}]},{"id":"HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA","mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.setOverlaysVisibility([this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A], 'toggle', 0)","displayTooltipInTouchScreens":true},{"id":"res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852","levels":[{"height":930,"url":"media/res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852_0.png","class":"ImageResourceLevel","width":1008}],"class":"ImageResource"},{"displayTooltipInTouchScreens":true,"id":"FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4","class":"FlatHotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_D254497B_F2C1_6C9D_41C2_46089F58A38C","levels":[{"height":1024,"url":"media/res_D254497B_F2C1_6C9D_41C2_46089F58A38C_0.png","class":"ImageResourceLevel","width":1024}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06","mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.setOverlaysVisibility([this.overlay_12B84FF5_0557_AA15_4176_CC505BDDEA60], true, 0)","displayTooltipInTouchScreens":true},{"id":"res_1D38E18B_0551_76FD_4186_C6B3A575EAA2","levels":[{"height":709,"url":"media/res_1D38E18B_0551_76FD_4186_C6B3A575EAA2_0.png","class":"ImageResourceLevel","width":798}],"class":"ImageResource"},{"id":"FlatHotspotPanoramaOverlayArea_1284DFFA_0557_AA1F_418D_EA28622800B3","mapColor":"any","class":"FlatHotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_15327635_1B94_5596_41B8_973DE2C859F8, -121.0911823910454, -19.1200453126507, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 4)","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_150405D5_1B94_5696_41A3_97C61D4F1BCF","rowCount":6,"levels":[{"height":360,"url":"media/res_E7A02766_F243_64B7_41E7_A235DE3373D9_0.png","class":"ImageResourceLevel","width":400}],"finalFrame":"first","frameCount":24,"class":"AnimatedImageResource","colCount":4,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7","mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)","displayTooltipInTouchScreens":true},{"id":"HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06","mapColor":"image","class":"HotspotPanoramaOverlayArea","click":"this.setOverlaysVisibility([this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2], true, 0)","displayTooltipInTouchScreens":true},{"id":"AnimatedImageResource_1507E5D6_1B94_5692_41B4_7F8BEBFA7111","rowCount":6,"levels":[{"height":480,"url":"media/res_E47C9D07_F240_E475_41D3_616929813FEA_0.png","class":"ImageResourceLevel","width":380}],"finalFrame":"first","frameCount":24,"class":"AnimatedImageResource","colCount":4,"frameDuration":41},{"id":"HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF","mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)","displayTooltipInTouchScreens":true},{"id":"res_E7A2D765_F243_64B5_41DA_4AB1391F68D1","levels":[{"height":892,"url":"media/res_E7A2D765_F243_64B5_41DA_4AB1391F68D1_0.png","class":"ImageResourceLevel","width":481}],"class":"ImageResource"},{"id":"FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371","mapColor":"any","class":"FlatHotspotPanoramaOverlayArea","click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)","displayTooltipInTouchScreens":true}],"scrollBarMargin":2,"watermark":false,"defaultVRPointer":"gaze","gap":10,"start":"this.playAudioList([this.audio_E7CC1336_F241_3C97_41EC_DAD1C0446608], true); this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_16E077CB_1B8C_52F2_41A6_6958CB0E243C], 'cardboardAvailable')","defaultMenu":["fullscreen","mute","rotation"],"left":432.25};
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
//Generated with v2023.1.11, Tue Oct 10 2023