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
var script = {"id":"rootPlayer","children":["this.MainViewer","this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","this.Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5","this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","this.Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD"],"backgroundColor":["#FFFFFF"],"start":"this.playAudioList([this.audio_E7CC1336_F241_3C97_41EC_DAD1C0446608], true); this.init()","minHeight":0,"data":{"defaultLocale":"pt","textToSpeechConfig":{"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"rate":1,"pitch":1,"stopBackgroundAudio":false},"locales":{"pt":"locale/pt.txt"},"name":"Player760","history":{}},"minWidth":0,"vrPolyfillScale":1,"defaultVRPointer":"gaze","layout":"absolute","backgroundColorRatios":[0],"width":"100%","height":"100%","watermark":false,"scripts":{"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"registerKey":TDV.Tour.Script.registerKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoForward":TDV.Tour.Script.historyGoForward,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"existsKey":TDV.Tour.Script.existsKey,"getMainViewer":TDV.Tour.Script.getMainViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getKey":TDV.Tour.Script.getKey,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"quizShowScore":TDV.Tour.Script.quizShowScore,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"setValue":TDV.Tour.Script.setValue,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"initQuiz":TDV.Tour.Script.initQuiz,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"translate":TDV.Tour.Script.translate,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizStart":TDV.Tour.Script.quizStart,"init":TDV.Tour.Script.init,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"isPanorama":TDV.Tour.Script.isPanorama,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"downloadFile":TDV.Tour.Script.downloadFile,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"executeJS":TDV.Tour.Script.executeJS,"setLocale":TDV.Tour.Script.setLocale,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizFinish":TDV.Tour.Script.quizFinish,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"mixObject":TDV.Tour.Script.mixObject,"shareSocial":TDV.Tour.Script.shareSocial,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getComponentByName":TDV.Tour.Script.getComponentByName,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"clone":TDV.Tour.Script.clone,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"playAudioList":TDV.Tour.Script.playAudioList,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"showWindow":TDV.Tour.Script.showWindow,"getMediaByName":TDV.Tour.Script.getMediaByName,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"createTween":TDV.Tour.Script.createTween,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlays":TDV.Tour.Script.getOverlays,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"openLink":TDV.Tour.Script.openLink,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPixels":TDV.Tour.Script.getPixels,"triggerOverlay":TDV.Tour.Script.triggerOverlay},"defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"gap":10,"scrollBarColor":"#000000","class":"Player","propagateClick":false,"hash": "effece0e7808b7b5389dd4efd99db68b05a577d7478f688bbd6f5c14eeefa70b", "definitions": [{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A","enterPointingToHorizon":true},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetPitch":0,"easing":"cubic_in_out","targetStereographicFactor":0}],"enterPointingToHorizon":true,"class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"displayOriginPosition":{"hfov":165,"class":"RotationalCameraDisplayPosition","yaw":0,"stereographicFactor":1,"pitch":-90}},{"fontFamily":"Cinzel Bold","id":"Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243","backgroundColor":["#000000"],"minHeight":1,"right":"37.09%","fontSize":14,"minWidth":1,"data":{"name":"Avan\u00e7ar"},"paddingBottom":0,"verticalAlign":"middle","iconWidth":0,"pressedBackgroundColorRatios":[0],"fontWeight":"bold","rollOverBackgroundColorRatios":[0],"pressedBackgroundOpacity":0,"rollOverBackgroundOpacity":0,"pressedBackgroundColor":["#DB9B4D"],"paddingLeft":0,"bottom":"9.93%","backgroundColorRatios":[0],"rollOverBackgroundColor":["#DB9B4D"],"paddingRight":0,"width":213,"height":71.05,"rollOverShadow":false,"backgroundOpacity":0,"borderColor":"#000000","visible":false,"fontColor":"#FFFFFF","horizontalAlign":"center","iconHeight":0,"rollOverFontColor":"#DB9B4D","paddingTop":0,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_D7243E60_F2C1_24AB_41E9_E9D6A032F2B4, 0, 0, NaN || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 2); var invisibleFunc = function(component) { this.setComponentVisibility(component, false, 0, this.effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2, 'hideEffect', false)}.bind(this); invisibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); invisibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A); invisibleFunc(this.Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5)","pressedFontColor":"#000000","class":"Button","layout":"horizontal"},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","label":trans('panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8.label'),"vfov":180,"data":{"label":"sl recrea\u00e7\u00e3o01"},"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","yaw":71.87,"distance":4.79,"backwardYaw":22.89,"data":{"overlayID":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA"},"select":"this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"colCount":24,"tags":["ondemand","mobilevr2gen"],"class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_0/{face}/vr/0.jpg","rowCount":1,"width":9216}],"class":"ImageResource"}}],"overlays":["this.overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0"],"hfovMax":130,"thumbnailUrl":"media/panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_t.jpg","class":"Panorama","hfov":360},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","label":trans('panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5.label'),"vfov":180,"data":{"label":"Recep\u00e7\u00e3o"},"hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"colCount":24,"tags":["ondemand","mobilevr2gen"],"class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_0/{face}/vr/0.jpg","rowCount":1,"width":9216}],"class":"ImageResource"}}],"overlays":["this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0"],"hfovMax":130,"thumbnailUrl":"media/panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_t.jpg","class":"Panorama","hfov":360},{"id":"MainViewer","minHeight":50,"playbackBarBackgroundColor":["#FFFFFF"],"minWidth":100,"playbackBarHeight":10,"toolTipFontSize":"1.11vmin","data":{"name":"Main Viewer"},"playbackBarHeadWidth":6,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"progressRight":"33%","toolTipPaddingLeft":6,"progressBarBackgroundColorDirection":"horizontal","vrPointerSelectionTime":2000,"progressOpacity":0.7,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","progressBackgroundColorRatios":[0],"firstTransitionDuration":0,"subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","playbackBarHeadShadowOpacity":0.7,"toolTipShadowColor":"#333138","width":"100%","progressBarBorderColor":"#000000","height":"100%","progressBarBackgroundColorRatios":[0],"toolTipPaddingTop":4,"playbackBarProgressBorderRadius":0,"progressBorderColor":"#000000","subtitlesBottom":50,"progressBarBackgroundColor":["#3399FF"],"subtitlesBackgroundColor":"#000000","subtitlesTop":0,"subtitlesGap":0,"progressBackgroundColor":["#000000"],"playbackBarProgressBackgroundColorRatios":[0],"progressBottom":10,"playbackBarBorderColor":"#FFFFFF","progressHeight":2,"playbackBarBorderRadius":0,"progressBorderSize":0,"subtitlesTextShadowColor":"#000000","playbackBarProgressBorderColor":"#000000","subtitlesTextShadowOpacity":1,"progressBarBorderRadius":2,"playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderRadius":0,"surfaceReticleColor":"#FFFFFF","progressBarBorderSize":0,"subtitlesBackgroundOpacity":0.2,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"toolTipBackgroundColor":"#F6F6F6","playbackBarLeft":0,"subtitlesFontColor":"#FFFFFF","toolTipBorderColor":"#767676","progressBorderRadius":2,"progressLeft":"33%","playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadow":true,"playbackBarHeadShadowColor":"#000000","playbackBarBorderSize":0,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBorderSize":0,"subtitlesFontFamily":"Arial","subtitlesTextShadowVerticalLength":1,"toolTipFontColor":"#606060","toolTipPaddingRight":6,"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleSelectionColor":"#FFFFFF","class":"ViewerArea","propagateClick":false,"toolTipPaddingBottom":4},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","label":trans('panorama_FE7B43FB_F241_239D_41DA_40137FF084E4.label'),"vfov":180,"data":{"label":"01"},"adjacentPanoramas":[{"class":"AdjacentPanorama","yaw":-89.15,"distance":82.34,"panorama":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","data":{"overlayID":"overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97"},"enabledInSurfaceSelection":false,"select":"this.overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"colCount":24,"tags":["ondemand","mobilevr2gen"],"class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_0/{face}/vr/0.jpg","rowCount":1,"width":9216}],"class":"ImageResource"}}],"overlays":["this.overlay_FCD7171F_F243_6495_41D7_44230B2484C5","this.overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97","this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0"],"hfovMax":130,"thumbnailUrl":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_t.jpg","class":"Panorama","hfov":360},{"duration":500,"id":"effect_E92B9395_F2C1_6394_41D8_7762EDDF5A30","class":"FadeInEffect"},{"id":"Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD","propagateClick":false,"minHeight":1,"data":{"name":"logo"},"scaleMode":"fit_inside","minWidth":1,"verticalAlign":"middle","url":trans('Image_E87151A8_F2C3_1FBB_41B1_ACD562047EFD.url'),"top":"8.98%","init":"var visibleFunc = function(component) { this.setComponentVisibility(component, true, 10000, this.effect_E92B9395_F2C1_6394_41D8_7762EDDF5A30, 'showEffect', false)}.bind(this); visibleFunc(this.Button_EBF0F80E_F2C0_EC77_41B7_89BB7D3A7243); visibleFunc(this.Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A); visibleFunc(this.Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5)","height":"13.878%","width":"13.302%","backgroundOpacity":0,"horizontalAlign":"center","class":"Image","left":"1.25%"},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829","enterPointingToHorizon":true},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"initialSequence":"this.sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8","enterPointingToHorizon":true},{"id":"Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5","propagateClick":false,"minHeight":1,"right":"7.43%","scaleMode":"fit_inside","minWidth":1,"data":{"name":"Bem vindo"},"verticalAlign":"middle","url":trans('Image_E8B4CB09_F2C1_EC7D_41E5_87F49D273AE5.url'),"top":"3.27%","width":"76.135%","height":"89.388%","backgroundOpacity":0,"visible":false,"horizontalAlign":"center","class":"Image"},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","class":"PanoramaCamera","initialPosition":{"class":"PanoramaCameraPosition","yaw":-121.08,"pitch":-19.11},"initialSequence":"this.sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA","enterPointingToHorizon":true},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","label":trans('panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5.label'),"vfov":180,"data":{"label":"sl maker"},"hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"colCount":24,"tags":["ondemand","mobilevr2gen"],"class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_0/{face}/vr/0.jpg","rowCount":1,"width":9216}],"class":"ImageResource"}}],"overlays":["this.overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0"],"hfovMax":130,"thumbnailUrl":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_t.jpg","class":"Panorama","hfov":360},{"id":"MainViewerPanoramaPlayer","aaEnabled":true,"class":"PanoramaPlayer","arrowKeysAction":"translate","displayPlaybackBar":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation"},{"duration":500,"id":"effect_EEBCC336_F2C7_3C97_41DC_4261453A3BB2","class":"FadeOutEffect"},{"id":"audio_E7CC1336_F241_3C97_41EC_DAD1C0446608","class":"MediaAudio","data":{"label":"Gemini Robot - Bird Creek"},"audio":"this.audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB","autoplay":true},{"id":"mainPlayList","class":"PlayList","items":[{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_camera","media":"this.panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_camera","media":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},"this.PanoramaPlayListItem_D7243E60_F2C1_24AB_41E9_E9D6A032F2B4",{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_camera","media":"this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","end":"this.trigger('tourEnded')","camera":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_camera","media":"this.panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 0)"}]},{"id":"Container_E9B21816_F2C1_EC97_41ED_64CC3E43522A","propagateClick":false,"minHeight":20,"data":{"name":"Container geral"},"minWidth":20,"overflow":"scroll","layout":"absolute","top":"2.44%","width":"80.438%","height":"90.884%","backgroundOpacity":0,"visible":false,"scrollBarMargin":2,"gap":10,"scrollBarColor":"#000000","class":"Container","left":"13.77%"},{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C","label":trans('panorama_F891C254_F241_1CEB_41E8_6278EE7C091C.label'),"vfov":180,"data":{"label":"sl recra\u00e7\u00e3o02"},"adjacentPanoramas":[{"class":"AdjacentPanorama","panorama":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","yaw":22.89,"distance":4.66,"backwardYaw":71.87,"data":{"overlayID":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97"},"select":"this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97.get('areas').forEach(function(a){ a.trigger('click') })"},{"class":"AdjacentPanorama","yaw":-70.14,"distance":100,"panorama":"this.panorama_FE7B43FB_F241_239D_41DA_40137FF084E4","data":{"overlayID":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2"},"enabledInSurfaceSelection":false,"select":"this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","frames":[{"thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg","class":"CubicPanoramaFrame","cube":{"levels":[{"height":2048,"colCount":24,"tags":["ondemand","mobilevr2gen"],"class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/0/{row}_{column}.jpg","rowCount":4,"width":12288},{"height":1024,"colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/1/{row}_{column}.jpg","rowCount":2,"width":6144},{"height":512,"colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/2/{row}_{column}.jpg","rowCount":1,"width":3072},{"height":1536,"colCount":6,"class":"TiledImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_0/{face}/vr/0.jpg","rowCount":1,"width":9216}],"class":"ImageResource"}}],"overlays":["this.overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2","this.overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","this.panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0"],"hfovMax":130,"thumbnailUrl":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_t.jpg","class":"Panorama","hfov":360},{"id":"sequence_F8AFFF76_F241_6497_41AA_2A9A34B5947A","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"maps":[],"id":"overlay_E1219560_F27F_64AB_41CB_4DBE4D269BBA","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7"],"useHandCursor":true,"items":[{"distance":50,"vfov":11.55,"pitch":-19.52,"class":"HotspotPanoramaOverlayImage","yaw":71.87,"hfov":18.54,"data":{"label":"Arrow 02b Left"},"image":"this.AnimatedImageResource_D73E1DAA_F2C1_27BF_41E3_66FFA18770F8","scaleMode":"fit_inside"}],"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02b Left","hasPanoramaAction":true}},{"id":"panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"panorama_E8CCC292_F2C7_1C6F_41B6_50AB6E4A48C5_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"maps":[],"id":"overlay_FCD7171F_F243_6495_41D7_44230B2484C5","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06"],"useHandCursor":true,"items":[{"distance":50,"data":{"label":"Poligono"},"pitch":-2.99,"class":"HotspotPanoramaOverlayImage","yaw":-116.03,"image":{"levels":[{"height":64,"class":"ImageResourceLevel","url":"media/panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_HS_thwmnc3n.png","width":47}],"class":"ImageResource"},"hfov":2.79,"vfov":3.81}],"class":"HotspotPanoramaOverlay","data":{"label":"Poligono"}},{"maps":[],"id":"overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97","enabledInCardboard":true,"enabled":false,"areas":["this.FlatHotspotPanoramaOverlayArea_D267D1A1_F2C1_1FAD_41D8_F762C542868F"],"useHandCursor":true,"items":[{"offsetX":179.42,"width":358.84,"pitch":-1.17,"class":"FlatHotspotPanoramaOverlayImage","yaw":-89.15,"offsetY":193.19,"height":386.37,"data":{"label":"AZUL"},"image":"this.res_D0B99A0A_F2C0_EC7F_41CF_934785B07D3C","scaleMode":"fit_inside"}],"class":"FlatHotspotPanoramaOverlay","data":{"label":"AZUL","hasPanoramaAction":true}},{"id":"panorama_FE7B43FB_F241_239D_41DA_40137FF084E4_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"sequence_F8AB0F74_F241_64AB_41BB_65FFF86C6829","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"id":"sequence_F8AFDF76_F241_6497_41DA_208537EC5CB8","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"id":"sequence_F8AF9F76_F241_6497_41D7_8F2850A5C8BA","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_in","yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"easing":"cubic_out","yawDelta":18.5}]},{"maps":[],"id":"overlay_E0AA26EC_F241_25BB_41D9_4238D825760A","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA"],"useHandCursor":true,"items":[{"distance":50,"data":{"label":"Poligono"},"pitch":28.9,"class":"HotspotPanoramaOverlayImage","yaw":-43.99,"image":{"levels":[{"height":119,"class":"ImageResourceLevel","url":"media/panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_HS_z6xw3wb2.png","width":101}],"class":"ImageResource"},"hfov":6.02,"vfov":7.09}],"class":"HotspotPanoramaOverlay","data":{"label":"Poligono"}},{"maps":[],"id":"overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A","enabledInCardboard":true,"enabled":false,"areas":["this.FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4"],"useHandCursor":true,"items":[{"offsetX":251.92,"width":503.83,"pitch":3.38,"class":"FlatHotspotPanoramaOverlayImage","yaw":-76.83,"offsetY":274.46,"height":548.93,"data":{"label":"verde"},"image":"this.res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852","scaleMode":"fit_inside"}],"class":"FlatHotspotPanoramaOverlay","data":{"label":"verde"}},{"id":"panorama_F89003E0_F241_23AB_41BA_F303D4BAA3C5_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB","class":"AudioResource","mp3Url":trans('audiores_E440C1B4_F240_FFAB_41BE_46E3673930AB.mp3Url'),"gain":0.51},{"id":"PanoramaPlayListItem_D7243E60_F2C1_24AB_41E9_E9D6A032F2B4","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8_camera","media":"this.panorama_F89310E0_F241_7DAB_41BF_1A0A6C5639D8","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"maps":[],"id":"overlay_E1179283_F241_1C6D_41E5_BD304A95AA55","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06"],"useHandCursor":true,"items":[{"distance":50,"data":{"label":"Poligono"},"pitch":10.38,"class":"HotspotPanoramaOverlayImage","yaw":-51.2,"image":{"levels":[{"height":57,"class":"ImageResourceLevel","url":"media/panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_HS_lfc1mblw.png","width":64}],"class":"ImageResource"},"hfov":3.79,"vfov":3.38}],"class":"HotspotPanoramaOverlay","data":{"label":"Poligono"}},{"maps":[],"id":"overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2","enabledInCardboard":true,"enabled":false,"areas":["this.FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371"],"useHandCursor":true,"items":[{"offsetX":136.13,"width":272.27,"pitch":2.34,"class":"FlatHotspotPanoramaOverlayImage","yaw":-70.14,"offsetY":223.12,"height":446.25,"data":{"label":"rosa"},"image":"this.res_E7A2D765_F243_64B5_41DA_4AB1391F68D1","scaleMode":"fit_inside"}],"class":"FlatHotspotPanoramaOverlay","data":{"label":"rosa"}},{"maps":[],"id":"overlay_E45FE730_F243_24AB_41CA_61E9D85DDA97","enabledInCardboard":true,"areas":["this.HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF"],"useHandCursor":true,"items":[{"distance":100,"vertices":[{"class":"PanoramaPoint","yaw":16.22,"pitch":-17.3},{"class":"PanoramaPoint","yaw":27.19,"pitch":-17.32},{"class":"PanoramaPoint","yaw":35.73,"pitch":-24.32},{"class":"PanoramaPoint","yaw":11.04,"pitch":-26.48}],"class":"QuadHotspotPanoramaOverlayImage","data":{"label":"Arrow 02"},"image":"this.AnimatedImageResource_D73EADAC_F2C1_27BB_41C2_C086115F4980"}],"class":"HotspotPanoramaOverlay","data":{"label":"Arrow 02","hasPanoramaAction":true}},{"id":"panorama_F891C254_F241_1CEB_41E8_6278EE7C091C_tcap0","distance":50,"class":"TripodCapPanoramaOverlay","image":"this.res_D254497B_F2C1_6C9D_41C2_46089F58A38C","hfov":27},{"id":"HotspotPanoramaOverlayArea_E1E075A1_F27F_67AD_41D0_EF018777DFD7","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 3)"},{"id":"AnimatedImageResource_D73E1DAA_F2C1_27BF_41E3_66FFA18770F8","rowCount":6,"finalFrame":"first","levels":[{"height":360,"class":"ImageResourceLevel","url":"media/res_E7A02766_F243_64B7_41E7_A235DE3373D9_0.png","width":400}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"colCount":4},{"levels":[{"height":1024,"class":"ImageResourceLevel","url":"media/res_D254497B_F2C1_6C9D_41C2_46089F58A38C_0.png","width":1024}],"id":"res_D254497B_F2C1_6C9D_41C2_46089F58A38C","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_FCF4F761_F243_64AD_41C6_7D6B171F7F06","class":"HotspotPanoramaOverlayArea","mapColor":"image","displayTooltipInTouchScreens":true,"click":"this.setOverlaysVisibility([this.overlay_D265419F_F2C1_1F95_41A3_2F19A9AE5B97], true, 0)"},{"id":"FlatHotspotPanoramaOverlayArea_D267D1A1_F2C1_1FAD_41D8_F762C542868F","class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 4)"},{"levels":[{"height":693,"class":"ImageResourceLevel","url":"media/res_D0B99A0A_F2C0_EC7F_41CF_934785B07D3C_0.png","width":718}],"id":"res_D0B99A0A_F2C0_EC7F_41CF_934785B07D3C","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_E0AD66EE_F241_25B7_41B2_AA4A62DD39EA","class":"HotspotPanoramaOverlayArea","mapColor":"image","displayTooltipInTouchScreens":true,"click":"this.setOverlaysVisibility([this.overlay_D3B6F72C_F2C3_24BB_41D7_8B14F8D9E39A], 'toggle', 0)"},{"id":"FlatHotspotPanoramaOverlayArea_D3B4C72D_F2C3_24B5_41EB_EF6FA19F0EB4","class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true},{"levels":[{"height":930,"class":"ImageResourceLevel","url":"media/res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852_0.png","width":1008}],"id":"res_D3016223_F2C3_1CAD_41D2_DF44ECAF2852","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_E1FA82A0_F241_1DAB_41D2_73CD1CB98A06","class":"HotspotPanoramaOverlayArea","mapColor":"image","displayTooltipInTouchScreens":true,"click":"this.setOverlaysVisibility([this.overlay_E6B4A32F_F241_1CB5_41E3_2B31A9373EC2], 'toggle', 0)"},{"id":"FlatHotspotPanoramaOverlayArea_E6B00334_F241_1CAB_41A4_2E9DA5E09371","class":"FlatHotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"levels":[{"height":892,"class":"ImageResourceLevel","url":"media/res_E7A2D765_F243_64B5_41DA_4AB1391F68D1_0.png","width":481}],"id":"res_E7A2D765_F243_64B5_41DA_4AB1391F68D1","class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_E45C9732_F243_24AF_41D4_6FB97EEF75CF","class":"HotspotPanoramaOverlayArea","mapColor":"any","displayTooltipInTouchScreens":true,"click":"this.setPlayListSelectedIndex(this.mainPlayList, 2)"},{"id":"AnimatedImageResource_D73EADAC_F2C1_27BB_41C2_C086115F4980","rowCount":6,"finalFrame":"first","levels":[{"height":480,"class":"ImageResourceLevel","url":"media/res_E47C9D07_F240_E475_41D3_616929813FEA_0.png","width":380}],"class":"AnimatedImageResource","frameCount":24,"frameDuration":41,"colCount":4}]};
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
//Generated with v2023.1.11, Mon Oct 2 2023