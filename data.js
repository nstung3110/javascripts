//Khai báo
var data = new Array();
//Tạo function nhập dữ liệu
function UI(){
    var name= document.getElementById("fname").value;
    var math= document.getElementById("math").value;
    var physical = document.getElementById("physical").value;
    var chemistry = document.getElementById("chemistry").value;
        //Check lỗi UI
        if(name==""||math==""||physical==""||chemistry==""||isNaN(math)||isNaN(chemistry)||isNaN(physical)||math>10||math<0||physical>10||physical<0||chemistry>10||chemistry<0){
            alert("Nhập sai vui lòng nhập lại !! ");
        }else{
            //Khởi tạo obj
            var testScore = { 
                "Name":name,
                "Math":math,
                "Physical":physical,
                "Chemistry":chemistry
             }
           //Thêm dữ liệu sau khi nhập
            data.push(testScore);
            //Xoá trắng khung text sau khi nhập
            document.getElementById("fname").value="";
            document.getElementById("math").value="";
            document.getElementById("physical").value="";
            document.getElementById("chemistry").value="";
            //Thêm dữ liệu từ data vào bảng (tham khảo w3school)
            var table = document.getElementById("result");
            var row = table.insertRow(data.length);
            var cell_Data = row.insertCell(0);
            var cell_Name = row.insertCell(1);
            var cell_Math = row.insertCell(2);
            var cell_Phy = row.insertCell(3);
            var cell_Chem = row.insertCell(4);
            var cell_Avg = row.insertCell(5);
            cell_Data.innerHTML = data.length;
            cell_Name.innerHTML = name;
            cell_Math.innerHTML = math;
            cell_Phy.innerHTML = physical;
            cell_Chem.innerHTML = chemistry;
            cell_Avg.innerHTML = "?";
            
        }
}
//Tính điểm trung bình và làm tròn
function avgPoint(){
    for(let i=1;i<=data.length;i++){
        let avg=(data[i-1].Math/3+data[i-1].Physical/3+data[i-1].Chemistry/3);
        document.getElementById("result").rows[i].cells[5].innerHTML= Math.floor(avg*100)/100;
       
    }
}
//Tô màu theo điểm trung bình
function choose(){
    for(let i=1;i<=data.length;i++){
        if(document.getElementById("result").rows[i].cells[5].innerHTML!="?"){            
            let avg=(data[i-1].Math/3+data[i-1].Physical/3+data[i-1].Chemistry/3)
            if(avg>=8){
                document.getElementById("result").rows[i].style.color="red";
            }else if(avg<8&&avg>=6.5){
                document.getElementById("result").rows[i].style.color="green";
            }else{
                document.getElementById("result").rows[i].style.color="blue";
            }
        }
    }    
}
//Xếp loại học sinh
function set(){
    for(let i=1;i<=data.length;i++){
        if(document.getElementById("result").rows[i].cells[5].innerHTML!="?")
    {            
            let avg=(data[i-1].Math/3+data[i-1].Physical/3+data[i-1].Chemistry/3)
            if(avg>=8){
                document.getElementById("result").rows[i].cells[5].innerHTML=Math.floor(avg*100)/100+" Xếp Loại Giỏi";
            }else if(avg<8&&avg>=6.5){
                document.getElementById("result").rows[i].cells[5].innerHTML=Math.floor(avg*100)/100+" Xếp Loại Khá";
            }else{
                document.getElementById("result").rows[i].cells[5].innerHTML=Math.floor(avg*100)/100+" Xếp Loại Trung Bình";
            }
        }
    }    
}





