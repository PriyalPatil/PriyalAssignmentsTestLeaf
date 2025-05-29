
let score = 34;
function gradeCalculation(score) {

    switch (true) {
        case (score >= 90 && score <= 100):
            console.log("Grade A");
            break;
        case (score >= 75 && score < 90):
            console.log("Grade B");
            break;
            case (score >= 50 && score < 75):
            console.log("Grade C");
            break;
            case (score >= 35 && score < 50):
            console.log("Grade D");
            break;
        default:
            console.log("Failed");
            
    }
    
}
gradeCalculation(score);