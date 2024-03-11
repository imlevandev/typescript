var mssv: string | number;
 

mssv ='ps27653'
console.log('mssv = ' + mssv);


mssv = 1234566;

console.log("khoa hoc tu nhien",mssv);
// Khai báo biến cccd
let cccd: string[] | number = [];

// Gán giá trị cho cccd
cccd = ["123456789", "987654321"]; // Gán một mảng các chuỗi

cccd = 123456789; // Gán một số


if (typeof cccd === "number") {
    console.log("cccd là một số:", cccd);
} else {
    console.log("cccd là một mảng các chuỗi:", cccd);
}
