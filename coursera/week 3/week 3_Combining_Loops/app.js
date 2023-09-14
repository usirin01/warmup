var grades= [2, 5, , , 9, 8, , 8];
var sum = 0;
var count = 0;//we want to divide really number

if (grades.length > 0)
{
  for (index = 0; index < grades.length; index++)
  {
    if (grades[index] != undefined)//This line is important

    { 
		      sum += grades[index]; 
          count = count + 1;//we want to divide really number
    }
  }
  //Do we really want to divide by the size of the array?
  document.write(sum/count);
}
else
  document.write("Empty Array");
