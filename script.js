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

    $("#exampleInputPassword1").keyup(function () {
        passwordStrength($(this).val());
    });

    $(".addbtn").click(function () {

        var divRow = $('<div class="row">')
        $('.telephone').append(divRow)
        var elmt = [
            $("<label for='telephone'>Téléphone</label>"),
            $("<input type='select' class='form-control'>"),
            $("<select class='form-control'>" +
                '<option selected>Choose</option>' +
                '<option value="1">Pro</option>' +
                '<option value="2">Perso</option>' +
                '<option value="3">Minitél</option>' +
                "</select>")

        ]
        for (i = 0; i < elmt.length; i++) {
            var divCol4 = $('<div class="col-4">')
            divRow.append(divCol4)
            divCol4.append(elmt[i])
        }

    })


    var substringMatcher = function (strs) {
        return function findMatches(q, cb) {
            var matches, substringRegex;

            // an array that will be populated with substring matches
            matches = [];

            // regex used to determine if a string contains the substring `q`
            substrRegex = new RegExp(q, 'i');

            // iterate through the pool of strings and for any string that
            // contains the substring `q`, add it to the `matches` array
            $.each(strs, function (i, str) {
                if (substrRegex.test(str)) {
                    matches.push(str);
                }
            });

            cb(matches);
        };
    };

    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
        'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
        'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
        'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
        'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
        'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
        'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
        'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
        'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];

    $('#the-basics .typeahead').typeahead({
        hint: true,
        highlight: true,
        minLength: 1
    },
        {
            name: 'states',
            source: substringMatcher(states)
        });
});


