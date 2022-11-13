//Bài 1
function soduong(a) {
    if (a>0) {
        console.log(a, "Đây là số nguyên dương");
    }
        else {
            console.log(a, "Đây không phải số nguyên dương");
        }
}
//Bài 2
function soam(b) {
    if (b<0) {
        console.log(a, "Đây là số nguyên âm");
    }
        else {
            console.log(a, "Đây không phải số nguyên âm");
        }
}
//Bài 3
function tong2so(c,d) {
    console.log(c+d);
}
//Bài 4
var homnay = new Date();
var ngay = homnay.getDate();
var thang = homnay.getMonth()+1;
var nam = homnay.getFullYear();

homnay = thang+"-"+ngay+"-"+nam;
console.log(homnay);
homnay = thang+"/"+ngay+"/"+nam;
console.log(homnay);
homnay = ngay+"-"+thang+"-"+nam;
console.log(homnay);
homnay = ngay+"/"+thang+"/"+nam;
console.log(homnay);
//Bài 5
//Bài 6
function tongba(a,b) {
    let tongba=a+b
    if(a==b){
        var tongnhanba=tongba*3
        console.log(tongnhanba);
    }
        else{
        console.log(tongba);
    }
}