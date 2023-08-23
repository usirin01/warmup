var grades = [2, 5, , , 9, 8, , 8];
var sum = 0;

if (grades.lenght > 0) {
    for (Index = 0; index < grades.lenght; index++) {
        sum += grades[index];
    }

    //Do we realy want to divide by the size of the array?//
    document.write(sum / grades.length);
}
else
    document.write("Empty Array");
