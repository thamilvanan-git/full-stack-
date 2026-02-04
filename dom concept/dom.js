    <script>
    
            var num1val=document.getElementById("num1")
            var num2val=document.getElementById("num2")
        
        function add(){
        var num1value=Number(num1val.value)
        var num2value=Number(num2val.value)

        var total=num1value+num2value
        result.textContent="RESULT: "+total
        }

        
        var sub1val=document.getElementById("sub1")
        var sub2val=document.getElementById("sub2")
        function subtract(){
        var sub1value=Number(sub1val.value)
        var sub2value=Number(sub2val.value)
        var subresults=sub1value-sub2value
        subresult.textContent="RESULT:"+subresults

    
        }

        var div1val=document.getElementById("div1")
        var div2val=document.getElementById("div2")
        function divider(){
        var div1value=Number(div1val.value)
        var div2value=Number(div2val.value)
        var divresults=div1value/div2value
        divresult.textContent="RESULT:"+divresults
            
        }

        var mul1val=document.getElementById("mul1")
        var mul2val=document.getElementById("mul2")
        function multiple(){
        var mul1value=Number(mul1val.value)
        var mul2value=Number(mul2val.value)
        var mulresults=mul1value*mul2value
        mulresult.textContent="RESULT:"+mulresults
            
        }

    </script>