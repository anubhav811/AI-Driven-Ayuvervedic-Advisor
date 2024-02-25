// $(document).ready(function () {



// });

// $('#check').on('click', function (e) {


//     var que1 = $('#que1').val();
//     var que2 = $('#que2').val();
//     var que3 = $('#que3').val();
//     var que4 = $('#que4').val();
//     var que5 = $('#que5').val();
//     var que6 = $('#que6').val();
//     var que7 = $('#que7').val();
//     var que8 = $('#que8').val();
//     var que9 = $('#que9').val();
//     var que10 = $('#que10').val();
//     var que11 = $('#que11').val();
//     var que12 = $('#que12').val();
//     var que13 = $('#que13').val();
//     var que14 = $('#que14').val();
//     var que15 = $('#que15').val();
//     var que16 = $('#que16').val();
//     var que17 = $('#que17').val();
//     var que18 = $('#que18').val();
//     var que19 = $('#que19').val();
//     var que20 = $('#que20').val();
//     var que21 = $('#que21').val();
//     var que22 = $('#que22').val();
//     var que23 = $('#que23').val();
//     var que24 = $('#que24').val();
//     var que25 = $('#que25').val();
//     var que26 = $('#que26').val();
//     var que27 = $('#que27').val();
//     var que28 = $('#que28').val();
//     var que29 = $('#que29').val();
//     alert(que29);


//     $.ajax({
//         url: '../add-body-type',
//         data: { que1: que1, que2: que2, que3: que3, que4: que4, que5: que5, que6: que6, que7: que7, que8: que8, que9: que9, que10: que10, que11: que11, que12: que12, que13: que13, que14: que14, que15: que15, que16: que16, que17: que17, que18: que18, que19: que19, que20: que20, que21: que21, que22: que22, que23: que23, que24: que24, que25: que25, que26: que26, que27: que27, que28: que28, que29: que29 },
//         type: 'POST',
//         dataType: 'JSON',
//         success: function (data) {

//         }
//     });
// });

var que_texts = ['Body Built', 'Hairs', 'Skin', 'Complexion', 'Body Weight', 'Nails', 'Size and Color of Teeth', 'Nature of Doing Work', 'Mental Behavior', 'Memory', 'Grasping Power', 'Sleep Pattern', 'Intolerence to Weather Conditions', 'Reactions Under Adverse Situation', 'Mood', 'Eating Habit', 'Hunger', 'Body Temperature', 'Joints', 'Nature', 'Body Energy', 'Eyeball', 'Quality of Voice', 'Dreams', 'Social Relations', 'Wealth', 'Bowel Movements', 'Walking Pace', 'Communication Skills'];
var ans_texts = [
    ['Thin and Lean', 'Medium', 'Heavy, Well Built'],
    ['Dry and Dull, Split-ended, Hairfall', 'Normal, Thin, Premature Greying', 'Oily, Heavy and Long Black'],
    ['Dry, Rough, Thin', 'Soft, Sweating, Acne', 'Smooth, Oily, Thick'],
    ['Dark or Blackish', 'Pink to Red', 'Glowing White'],
    ['Underweight, Difficult to Gain Weight', 'Balanced, Can Easily Lose or Gain Weight', 'Overweight, Difficult to Lose Weight'],
    ['Blackish, Small, Brittle', 'Reddish, Small', 'Pinkish, Big, Smooth'],
    ['Irregularly Formed Teeth, Blackish', 'Medium Sized, Yellowish', 'Balanced, Shinning White'],
    ['Fast Speed, Always in Hurry', 'Medium Speed, Focused, Energetic', 'Slow Speed, Steady with Deep Thinking'],
    ['Fast, Very Responsive, Restless', 'Sharp, Logical, Aggressive', 'Peaceful, Calm, Highly Stable'],
    ['Short-Term Good, Long-Term Bad', 'Both Short-Term and Long-Term Good', 'Short-Term Bad, Long-Term Good'],
    ['Grasps Quickly but not Completely and Forgets Quickly', 'Grasps Quickly, Completely and Retains for Longer Time', 'Grasps Late and Retains for Longer Time'],
    ['Restless, Interrupted and Less Sleep', 'Peaceful, Sound and Optimum Sleep', 'Deep, Calm and More Sleep'],
    ['Cannot Tolerate Winters', 'Cannot Tolerate Summers', 'Cannot Tolerate Rain and Winters'],
    ['Anxiety, Restlessness, Irritability', 'Anger, Aggression', 'Calm, Depressive and Likes Solitude'],
    ['Changes Quickly', 'Changes Slowly', 'Stable and Constant Mood'],
    ['Eats Quickly Without Chewing Properly', 'Eats at a Moderate Speed', 'Eats Slowly'],
    ['Sometimes Good, Sometimes Bad and at Irregular Times', 'Sharp Hunger, at Times, Sometimes Strong Desire to Eat', 'Less Appetite, Can Skip any Meal Easily'],
    ['Less than Normal, Hands and Feet generally Cold', 'More than Normal, Face and Forehead generally Hot', 'Normal, Hands and Feet Slightly Cold'],
    ['Weak and Emerged Joints, Noise on Movement', 'Healthy with Optimal Strength', 'Heavy and Weight Bearing'],
    ['Lacking Courage, Fearful and Jealous', 'Courageous, Fearless and Egoistic', 'Forgiving, Greatful and Not Greedy'],
    ['Gets Tired till Evening and even after Little Work', 'Moderate Energy, Gets Tired After Medium Work', 'Excellent Energy Throughout Day, Not Easily Tired'],
    ['Unsteady, Fast Moving', 'Moving Slowly', 'Steady'],
    ['Rough with Broken Words', 'Fast, Commanding', 'Soft and Deep'],
    ['Sky, Wind, Flying Objects and Confusion', 'Fire, Light, Bright Colors, Violence', 'Water Pools, Gardens and Good Relationships'],
    ['Less Friends, Prefers Solitude', 'Good No. of Friends', 'Love to Socialize,Long Lasting Relationships'],
    ['Spends Without Much Thinking', 'Saves but Spends on Valuable Things', 'Prefers More Savings and Makes Wealth'],
    ['Dry, Hard, Blackish, Less Stool', 'Soft, Yellowish, Loose Motion', 'Heavy, Thick, Sticky Motion'],
    ['Quick, Fast With long Steps', 'Average, Steady', 'Slow with Short Steps'],
    ['Fast, Irrelevant Talk, Speech not Clear', 'Good Speakers with Genuine Argumentative Skills', 'Authoritative, Firm and Little Speech']
];
var total_questions = que_texts.length;
var total_answered = 0;

(function ($) {

    $.fn.shuffle = function () {

        var allElems = this.get(),
            getRandom = function (max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function () {
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
            });

        this.each(function (i) {
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);

    };

})(jQuery);

$(document).ready(function () {
    /* $('.progress-bar').attr('aria-valuemax',total_questions); */
    $('.total_que').text(total_questions);
    var rows_count = (total_questions / 3).toFixed(0);
    var row = '</div><div class="row">';
    var html = '<div class="row">';
    $.each(que_texts, function (key, que) {
        html += '<div class="col-md-4 mb-4">\
				<label for="que'+ (key + 1) + '">' + que + '</label>\
				<select class="custom-select" id="que'+ (key + 1) + '" required>\
					<option value="" class="disabled">Select '+ que + '</option>\
					<option value="'+ ans_texts[key][0] + '" data-for="vata">' + ans_texts[key][0] + '</option>\
					<option value="'+ ans_texts[key][1] + '" data-for="pitta">' + ans_texts[key][1] + '</option>\
					<option value="'+ ans_texts[key][2] + '" data-for="kapha">' + ans_texts[key][2] + '</option>\
				</select>\
			</div>'+ (((key + 1) % 3 == 0) ? row : '')
    });
    $('.que_ans').html(html);
    $('.que_ans select').each(function () {
        $(this).find('option:not(.disabled)').shuffle();
    });
    var answers = [];
    var num_answers = [];

    $('#prakritiAnalysis select').change(function () {
        var answered = 0;
        num_answers['vata'] = num_answers['pitta'] = num_answers['kapha'] = 0;
        $('#prakritiAnalysis select').each(function (key, value) {
            var val = $(this).val();
            if (val != '') {
                answered++;
                if ($(this).find('option[value="' + val + '"]').data('for') == 'vata')
                    num_answers['vata'] += 1;
                else if ($(this).find('option[value="' + val + '"]').data('for') == 'pitta')
                    num_answers['pitta'] += 1;
                else if ($(this).find('option[value="' + val + '"]').data('for') == 'kapha')
                    num_answers['kapha'] += 1;

                answers[key] = $(this).val();
            }
        });
        total_answered = answered;
        /* $('.que_num').html(answered);
        $('.progress .progress-bar').attr('aria-valuenow',answered);
        var progress_bar_width = ((answered/total_questions)*100).toFixed(2);
        var progress_bar_width = progress_bar_width+'%';
        $('.progress .progress-bar').html(progress_bar_width);
        $('.progress .progress-bar').css({'width':progress_bar_width}); */

        //console.log(answers);
        //console.log(num_answers);
    });

    $('body').on('click', 'button#check', function (e) {
        e.preventDefault();
        var validated = validate_questions();
        if (validated && total_answered == total_questions) {
            var body_type_result = calculate_body_type(num_answers);
            // //console.log(body_type_result);
            // $('#bodyTypeEmailModal input#body_type_result').val(JSON.stringify(body_type_result));
            // $('#bodyTypeEmailModal').modal('show');
            // $('#bodyTypeEmailModal .modal-dialog').css('top', '50%');
            // $('#bodyTypeEmailModal #body_type_name').focus();

                        window.location.href = 'result.html?vata=' + body_type_result[0] + '&pitta=' + body_type_result[1] + '&kapha=' + body_type_result[2];

        }
        else {
            $.notify('Please answer all the questions.', 'error');
            $('html, body').animate({
                scrollTop: $('.invalid').offset().top - 150
            }, 800, function () { });
        }
    });

    $('body').on('click', 'button#send_body_type_result', function (e) {
        e.preventDefault();
        grecaptcha.ready(function () {
            grecaptcha.execute('6LfoiMwZAAAAAJNkV1uwAF3VWG-R1wtB33wFrLZH', { action: 'homepage' }).then(function (token) {
                //add token to form
                $('#bodyTypeEmailForm').prepend('<input type="hidden" name="g-recaptcha-response" value="' + token + '">');
                var validated = validate('bodyTypeEmailForm');
                if (validated) {
                    var name = $('#body_type_name').val();
                    var phone = $('#body_type_phone').val();
                    var email = $('#body_type_email').val();
                    var result = $('#body_type_result').val();
                    $.ajax({
                        data: { name: name, phone: phone, email: email, result: result, token: token },
                        dataType: 'JSON',
                        type: 'POST',
                        url: "../send_body_type_email",
                        beforeSend: function () {
                            $('button#send_body_type_result').html('<i class="fas fa-spinner"></i> Calculating Result').attr('disabled', 'true').addClass('btn-disable');
                        },
                        success: function (data) {
                            if (data.sent) {
                                $.notify('Result Sent! Please, Check your e-mail', 'success');
                                $('#bodyTypeEmailForm select').each(function () {
                                    $(this).val('');
                                });
                                $('#bodyTypeEmailModal').modal('hide');
                            }
                            else {
                                $.notify('Result Not Sent! Refresh & Try Again', 'error');
                                console.log(data.error);
                            }
                            $('button#send_body_type_result').html('Get Result').prop('disabled', false).removeClass('btn-disable');
                        },
                        error: function (e) {
                            console.log(e);
                        }
                    });
                }
            });
        });
    });
});

function calculate_body_type(num_answers) {
    var result = [];
    result.push(((num_answers['vata'] / total_questions) * 100).toFixed(2));
    result.push(((num_answers['pitta'] / total_questions) * 100).toFixed(2));
    result.push(((num_answers['kapha'] / total_questions) * 100).toFixed(2));
    return result;
}

function validate(form_id) {
    var check = true;
    $('#' + form_id + ' input').each(function () {
        if ($(this).val() == '') {
            $(this).addClass('invalid');
            $(this).siblings('.invalid-feedback').show();
            $('#' + form_id).addClass('was-validated');
            check = false;
            return false;
        }
        else
            $('#' + form_id).removeClass('was-validated');
    });
    if (check == true)
        return true;
    else
        return false;
}

function validate_questions() {
    var check = true;
    $('#prakritiAnalysis [required]').each(function () {
        if ($(this).val() == '') {
            $(this).addClass('invalid');
            $(this).siblings('.invalid-feedback').show();
            $('#prakritiAnalysis').addClass('was-validated');
            check = false;
            return false;
        }
        else
            $('#prakritiAnalysis').removeClass('was-validated');
    });
    if (check == true)
        return true;
    else
        return false;
}