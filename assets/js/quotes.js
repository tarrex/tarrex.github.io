var quote = new Array ();
quote[0]  = 'quotes List';
/****************************************************************************
*                              Quotes are here                              *
*****************************************************************************/
// NOTICE: Do not use "" in your quotes and only allow .jpg portrait image files.
// And if you want to add a new quotes, the format is : quote[num] = 'quote<cite>the author's name</cite>'

quote[1]  = '量子力学的确让人印象深刻。但是我的内心却有一个声音告诉我，它还不是正确的理论。这个理论是说了很多，但它并没有引领我们更接近上帝的秘密。我，无论如何，深信上帝不掷骰子。<cite>爱因斯坦</cite>';
quote[2]  = '人类是唯一如此的动物：他爱护他的邻居就如同爱护他自己一样，但是如果对方的宗教神学有问题，他会割断对方的喉咙。<cite>马克·吐温</cite>';
quote[3]  = '世界正在被厚颜无耻的信念淹没，那信念就是，权力无所不能，正义一无所成。<cite>索尔仁尼琴</cite>';
quote[4]  = '让我们改变一下对构建程序的态度：不要把我们的主要工作想象为教计算机怎么做，相反，让我们集中精力向人们解释我们想让机器做什么。<cite>高德纳</cite>';
quote[5]  = '只有无能的人才会使用磁带备份︰“真正”的男人就会把他们重要的东西上传到FTP上，剩下的就让全世界来做镜像。<cite>林纳斯·托瓦兹</cite>';
quote[6]  = '人类并没有被赋予随时随地感知一切、了解一切的天赋。但是人类如果努力去了解、去感知——通过筛选众多的机会——就一定能找到一个错位的赌注。而且，聪明的人会在世界提供给他这一机遇时下大赌注。当成功概率很高时他们下了大赌注，而其余的时间他们按兵不动，事情就是这么简单。<cite>查理·芒格</cite>';
quote[7]  = '物理学之于数学，就如同性爱之于自慰。<cite>费曼</cite>';
quote[8]  = '但或许这种缺乏实体的现象不只存在于意象和语言当中，也存在于这个世界本身。这种瘟疫侵袭着人们的生活和国族的历史，使得一切的历史变得没有形体、松散、混乱，没有起点，也没有终点。我的不安来自于我在生命中察觉到形象的丧失，而我所能想到的抗衡武器便是一文学观念。<cite>卡尔维诺</cite>';
quote[9]  = '我很多年前就明白了，这个世界上没有什么东西不是一个潜在的地狱的起源；一张脸，一句话，一个指南针，一阵飘来的烟味，如果不尝试遗忘的话，都可能使他发疯。<cite>博尔赫斯</cite>';
quote[10] = '真正的救赎，并不是厮杀后的胜利，而是能在苦难之中找到生的力量和心的安宁。<cite>加缪</cite>';

/*****************************************************************************/

var range = 10;  // NOTICE: The value of range is your quote array length.

function rnd(seed) {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / (233280.0);
};
 
function rand(number) {
    today = new Date();
    seed = today.getTime();
    return Math.ceil(rnd(seed) * number);
};

var id = (rand(range));


//NOTICE: If you want to change some tags, you can change here.
document.write('<div class=\"portrait\"><img src=\"./quotes/'+id+'.jpg\" alt=\"quote\" /></div><div class=\"quote\"><blockquote><p>'+quote[id]+'</p></blockquote></div>'); 