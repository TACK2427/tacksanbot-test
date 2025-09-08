import { ndnDice } from "../commands/utils/dice.mjs"

export default async(message) => {

    if (message.content.match(/めぷ/)) {
        await message.react("<:mepu:1275708338188976178>");
    }
  
    if (message.content.match(/楓葉/)) {
        await message.react("<:kaede:1275714444210601995>");
    }
  
    if (message.content.match(/楓葉|めぷ|すぐる|<@1102482262345404446>|<!@1102482262345404446>|妹紅|もこたん|輝夜/)) {
        await message.reply("# かわいい");
    }
  
    if (message.content.match(/(お金|おかね)(欲しい|ほしい)/)) {
        await message.reply("5000兆円\n       ほしい！！");
    }
  
    if (message.content.match(/るみゃ|るーみあ|ルーミア|(R|r)umia(S7K|s7K|S7k|s7k)|s7k|S7K|<@1101732510578245674>|<@!1101732510578245674>|s7k|S7K|rumia/)) {
        await message.reply("かわちい")
    }
  
    if (message.content.match(/かそかそかそ/)) {
        await message.reply("かそかそかそかそかーそそそ");
    }
  
    if (message.content.match(/るみゃめぷ/)) {
        await message.reply("るみゅめぷてぇてぇ");
    }
  
    if (message.content.match(/おはよう|おはよ|おは/)) {
        await message.reply("おはよ");
    }
    if (message.content.match(/帰宅|ただいま/)) {
        await message.reply("おかえり");
    }
  
    if (message.content.match(/おやすみ/)) {
        await message.reply("おやすみなのだー");
    }
    if (message.content.match(/edge|Edge/)) {
        await message.reply("すまん俺Chrome派");
    }
    if (message.content.match(/暇|ひま/)) {
        await message.reply("暇なのは一緒だね");
    }
  
    if (message.content.match(/ふらんれみりあゆくおやすみおはようedgeゆっくりしていってねrumia帰宅がこおわしごおわ仕事おわバイトおわ学校おわ眠いにゃにゃーんねこさんソ連ﾋﾟﾎﾟ午後ティー午前に飲んだぽてとs24uzf61d100nk!カオスお風呂の温度はお外の温度は分身ちゃんのパク鎌と槌/)) {
        await message.reply("私にその呪文は効かぬ");
    }
  
    if (message.content.match(/^\d+d\d+$/)) {
        await message.reply(ndnDice(message.content));
    }
    

  // ==========================
  // ① 特定の言葉 + 確率で返信する (例: "こんにちは")
  // ==========================
  if (message.content.match(/こんにちは/)) {
    if (Math.random() < 0.5) { // 50%の確率
      await message.reply("やっほー！");
    }
    // 外れた場合は返信しない
  }

  // ==========================
  // ② 特定の言葉 + 確率でメッセージが変わる (例: "ガチャ")
  // ==========================
  if (message.content.match(/ガチャ/)) {
    const rand = Math.random();

    if (rand < 0.1) {        // 10%
      await message.reply("SSR大当たり！！✨");
    } else if (rand < 0.4) { // 30%
      await message.reply("SR まぁまぁ！");
    } else {                 // 60%
      await message.reply("R ハズレ…");
    }
  }

  // ==========================
  // ③ 特定の言葉 + 完全ランダムで返信 (例: "ランダム")
  // ==========================
  if (message.content.match(/ランダム/)) {
    const responses = [
      "にゃーん",
      "わん！",
      "ぴえん🥺",
      "おはよう！",
      "おやすみー",
      "今日もいい天気だね！"
    ];

    const choice = responses[Math.floor(Math.random() * responses.length)];
    await message.reply(choice);
  }

// ここから !ping コマンドの追加
if (message.content === '!ping') {
    const ping = message.client.ws.ping;
    
    let pingMessage;
    if (ping <= 15) {
        pingMessage = "高速だね";
    } else if (ping <= 35) {
        pingMessage = "早いね";
    } else if (ping <= 50) {
        pingMessage = "少し遅いね";
    } else if (ping <= 100) {
        pingMessage = "遅いね";
    } else {
        pingMessage = "とても遅いね";
    }

    const embed = {
        color: 0x0099ff,
        title: 'Pong!',
        description: `現在のPingは**${ping}ms**です\n${pingMessage}`
    };

    await message.reply({ embeds: [embed] });
}

};
