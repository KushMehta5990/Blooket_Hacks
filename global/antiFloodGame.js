/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var e=document.createElement("iframe");if(document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/global/antiFloodGame.js"==e.question)?.answers?.[0]))<1679802501934||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")){console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tantiFloodGame.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");let o=setInterval(async()=>{try{let n=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];var e=await n.props.liveGameController.getDatabaseRef("c");let c={},s={};e.on("value",e=>{var e=e.val()||{},o=[];for(const t in e)c[t]||(o.push(t),s[t.replace(/[0-9]/g,"")]=(s[t.replace(/[0-9]/g,"")]||0)+1);c=e;for(const a of o)(c[a].g||1<s[a.replace(/[0-9]/g,"")])&&(n.props.liveGameController.blockUser(a),s[a.replace(/[0-9]/g,"")]--)}),clearInterval(o)}catch{}},1e3)}})();