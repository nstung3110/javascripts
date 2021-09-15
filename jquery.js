$(document).ready(function(){
    $("#addData").click(function(){
        //Điều kiện để nhập đúng giá trị
        if($("#fname").val()==""||$("#math").val()==""||$("#physical").val()==""||$("#chemistry").val()==""){
            alert("Vui lòng không để trống !!");
        }else if($("#math").val()<0||$("#math").val()>10||$("#physical").val()<0||$("#physical").val()>10||$("#chemistry").val()<0||$("#chemistry").val()>10){
            alert("Vui lòng nhập điểm đúng giá trị !!");
        }else{
            //gán số thứ tự
            var  customerId =0;
            $("tr").each(function(){
                customerId=customerId+1;
              });
            //Lấy giá trị tại khung text và thêm vào bảng
            $("#result").append("<thead><tr><td>"+(customerId)+"</td>"+"<td>"+$("#fname").val()+"</td>"+"<td>"+$("#math").val()+"</td>"+"<td>"+$("#physical").val()+"</td>"+"<td>"+$("#chemistry").val()+"</td>"+"<td>"+"?"+"</td></tr></thead>");
            //Xoá trắng khung text
            $("input:text").val("");
        }
    });
    
    $("#avgPoint").click(function(){
        //var avgPoint=0;
        $("tr").each(function(){
            //Bỏ qua giá trị của hàng đầu tiên nguồn https://qastack.vn/
            if (!this.rowIndex) return;
            //Tính giá trị của điểm trung bình
            avgPoint=((Number($(this).find("td").eq(2).html())+Number($(this).find("td").eq(3).html())+Number($(this).find("td").eq(4).html()))/3);
            //Lấy giá trị đến 1 số phía sau dấu phẩy
            avgPoint=Math.floor(avgPoint*10)/10;
            //alert(avgPoint);
            //thêm giá trị điểm trung bình vào bảng
            $(this).find("td").eq(5).html(avgPoint);
        });
        
    });
    $("#show").click(function(){
        $("tr").each(function(){
            //Bỏ qua giá trị của hàng đầu tiên nguồn https://qastack.vn/
            if (!this.rowIndex) return;
            avgPoint=((Number($(this).find("td").eq(2).html())+Number($(this).find("td").eq(3).html())+Number($(this).find("td").eq(4).html()))/3);
            //Lấy giá trị đến 1 số phía sau dấu phẩy
            avgPoint=Math.floor(avgPoint*10)/10;
            //Đổi màu chữ cho các xếp loại học sinh
            if($(this).find("td").eq(5).html()>=8){
                $(this).addClass("loai_Gioi");
            }else if($(this).find("td").eq(5).html()<8&&$(this).find("td").eq(5).html()>=6.5){
                $(this).addClass("loai_Kha");
            }else if($(this).find("td").eq(5).html()<=6.5){
                $(this).addClass("loai_TB");
            }
        });
    });
    $("#choose").click(function(){
        $("tr").each(function(){
            //Bỏ qua giá trị của hàng đầu tiên nguồn https://qastack.vn/
            if (!this.rowIndex) return;
            avgPoint=((Number($(this).find("td").eq(2).html())+Number($(this).find("td").eq(3).html())+Number($(this).find("td").eq(4).html()))/3);
            //Lấy giá trị đến 1 số phía sau dấu phẩy
            avgPoint=Math.floor(avgPoint*10)/10;
            //Xếp loại
            if($(this).find("td").eq(5).html()>=8){
                $(this).find("td").eq(5).html(avgPoint+" Xếp loại giỏi");
            }else if($(this).find("td").eq(5).html()<8&&$(this).find("td").eq(5).html()>=6.5){
                $(this).find("td").eq(5).html(avgPoint+" Xếp loại khá");
            }else if($(this).find("td").eq(5).html()<=6.5){
                $(this).find("td").eq(5).html(avgPoint+" Xếp loại trung bình");
            }
        });
    });
});
