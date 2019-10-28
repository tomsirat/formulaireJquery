$(document).ready(function () {

    // $("#reset").click(function(){
    //     console.log(($("#exampleFormControlTextarea1").val().length))        
    // })

    $('.alert').hide()

    $("#formulaire").on("submit", function () {

        if ($("#exampleInputPassword1").val() != $("#exampleInputPassword2").val()) {
            $('.ok3').show()
        }

        if ($("#exampleInputEmail1").val().length < 5) {

        }

        if ($("#exampleInputPassword1").val().length < 5) {
            $('.ok2').show()
        }
        if ($("#exampleInputText").val().length < 5) {
            $('.ok4').show()
        }


        return false

    });

    $('#reset').click(function () {
        $('input').html("")

    })

    function passwordStrength(password) {



        if (password.length < 5) {
            $("#exampleInputPassword1").css("background-color", "red");
            $("#passwordStrenght").html("Une maj ca mange pas de pain");
        }


        if (password.length > 5 && password.match(/[a-z]/) && (password.match(/[A-Z]/))) {
            $("#exampleInputPassword1").css("background-color", "orange");
            $("#passwordStrenght").html("Un chiffre est conseillé");

        }

        if (password.length > 10 && password.match(/[0-9]/)) {
            $("#exampleInputPassword1").css("background-color", "green");
            $("#passwordStrenght").html("GG dude");
        }

    }

    $(document).ready(function () {
        $("#exampleInputPassword1").keyup(function () {
            passwordStrength($(this).val());
        });
    });

    $(".addbtn").click(function () {;
        $(".test").clone(true).appendTo(".row");
    

    })

});



{/* <div class="row">
    <div class="col-3">
        <label for="telephone">Téléphone</label>
    </div>
    <div class="col-3">
        <input type="select" class="form-control">
                            </div>
        <div class="col-3">
            <select class="form-control">
                <option selected>Choose</option>
                <option value="1">Pro</option>
                <option value="2">Perso</option>
                <option value="3">Minitél</option>
            </select>
        </div>
        <div class="col-3"><button class="btn btn-primary addbtn">Add</button></div>
    </div> */}