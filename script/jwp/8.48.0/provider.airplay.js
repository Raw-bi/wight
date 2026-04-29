/*!
   JW Player version 8.48.0
   Copyright (c) 2026, JW Player, All Rights Reserved
   This source code and its use and distribution is subject to the terms
   and conditions of the applicable license agreement.
   https://www.jwplayer.com/tos/
   This product includes portions of other software. For the full text of licenses, see
   https://mississippi.river.to/wight/script/jwp/8.48.0/notice.txt
*/
"use strict";(self.webpackChunkjwplayer=self.webpackChunkjwplayer||[]).push([["157"],{6705(e,t,a){a.d(t,{default:()=>l});var i=a(4794);function l(e,t){var a=null,l=this,c=function(){t.set("castState",{available:t.get("castAvailable"),active:t.get("castActive")})},n=function(e){e&&e.forEach(function(e){e.file=(0,i.getAbsolutePath)(e.file)})},s=function(e){e&&(e.image=(0,i.getAbsolutePath)(e.image),n(e.allSources),n(e.sources))},r=function(){a.removeEventListener("webkitplaybacktargetavailabilitychanged",l.updateAvailability),a.removeEventListener("webkitcurrentplaybacktargetiswirelesschanged",l.updateActive)},u=function(){a.addEventListener("webkitplaybacktargetavailabilitychanged",l.updateAvailability),a.addEventListener("webkitcurrentplaybacktargetiswirelesschanged",l.updateActive)};l.updateAvailability=function(e){t.set("castAvailable","available"===e.availability),c()},l.updateActive=function(){var i=!1;a&&(i=!!a.webkitCurrentPlaybackTargetIsWireless),t.off("change:playlistItem",s),i&&(e.instreamDestroy(),s(t.get("playlistItem")),t.on("change:playlistItem",s)),t.set("airplayActive",i),t.set("castActive",i),c()},l.airplayToggle=function(){a&&a.webkitShowPlaybackTargetPicker()},t.change("itemReady",function(){a=null,t.getVideo()&&(a=t.getVideo().video),a&&(a.removeAttribute("disableRemotePlayback"),r(),u()),l.updateAvailability({}),l.updateActive()})}}}]);