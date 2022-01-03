$(document).ready(()=>{
    var cgpaField = $('#cgpa');
    var university_formula = 10
    

    cgpaField.on('keyup',()=>{
        var value = cgpaField.val()
        console.log(value)
        if(!isNaN(value)){
            if(value<=10){
                var perc = value*university_formula;
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