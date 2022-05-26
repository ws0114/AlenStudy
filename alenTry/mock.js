// import Mock from 'mockjs';
import Mock from '/node_modules/mockjs';
// const Mock=require('mockjs');
// const fs=require('fs');
// 使用Random这个api
// Mock.define("mockjs");
var random = Mock.Random;

var arr = [];
for(let i = 0;i < 100;i++){
    // 随机56个民族
    let national = random.pick(["汉族","蒙古族","回族","藏族","维吾尔族","苗族","彝族","壮族","布依族","朝鲜族","满族","侗族","瑶族","白族","土家族","哈尼族","哈萨克族","傣族","黎族","僳僳族","佤族","畲族","高山族","拉祜族","水族","东乡族","纳西族","景颇族","柯尔克孜族","土族","达斡尔族","仫佬族","羌族","布朗族","撒拉族","毛南族","仡佬族","锡伯族","阿昌族","普米族","塔吉克族","怒族","乌孜别克族","俄罗斯族","鄂温克族","德昂族","保安族","裕固族","京族","塔塔尔族","独龙族","鄂伦春族","赫哲族","门巴族","珞巴族","基诺族"]);
    // 随机中文名字
    let name = random.cname();
    // 随机一种颜色作为前景色
    let c1 = random.color();
    // 随机一种颜色作为背景色
    let c2 = random.color();
    // 随机一个图片
    let avatar = random.image( "100x100", c1 , c2 , name);
    // 是否是团员
    let member = random.pick(["是","否"]);
    // 随机年龄的取值范围
    let age = random.integer(18,28);
    // 随机省份
    let province = random.province();
    // 随机出身份证号码
    let idcare = random.id();
    // 随机出性别
    let sex = random.pick(["男","女"]);
    // 随机出受教育程度
    let education = random.pick(["初中","高中","大专","本科","研究生"]);
    // 数据放入数组arr
    arr.push({
        "id" : i,
        name,
        age,
        province,
        idcare,
        sex,
        education,
        national,
        avatar,
        member

    })
};
console.log(arr);
// 文件写入
// fs.writeFile("./db.json",JSON.stringify({"students":arr}),function(){
//     console.log("一百条信息录入成功！");
// });
//还可以加入
// member团员
// blood 血型
// constellation星座
//学号等等