$(document).ready(()=>{
    var cgpaField = $('#cgpa');

    var unv = $('#unv');
    var unvHtml = `<option value=""> Select University</option>`;
    $.getJSON('universities.json', (jd)=>{
        console.log(jd)
        for(var i=0; i<jd.length; i++){
            unvHtml += 
            `<option value="${jd[i].calc}">${jd[i].name}</option>
            `
        }
        unv.html(unvHtml)
    })
    

    cgpaField.on('keyup',()=>{
        var value = cgpaField.val()
        var unv_fld = $('#unv');
        console.log(value)
        if(!isNaN(value)){
            if(value<=10){
                var perc = value*(unv.val());
                $('#result').html(
                    `<h3 class="alert alert-success" >Percentage : ${perc} %</h3>`
                )
            }else{
                $('#result').html(
                    `<h3 class="alert alert-danger" >
                    CGPA Can't be greater then 10
                    </h3>`
                )
            }
            
        }else{
            $('#result').html(
                `<h3 class="alert alert-danger" >
                ${value} is not a number</h3>`
            )
        }
    })

})