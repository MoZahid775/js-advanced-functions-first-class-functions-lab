// Code your solution in this file!
  function returnFirstTwoDrivers(array){
const newArray = [];
 newArray[0] = array[0]
 newArray[1] = array[1]

 return newArray;
  }

  function returnLastTwoDrivers(array){
    const lastTwodrivers = array.slice(array.length-2)
     
     return lastTwodrivers
      }

  const selectingDrivers = []

      selectingDrivers.push(returnFirstTwoDrivers, returnLastTwoDrivers)

  
      function createFareMultiplier(Multiplier)  {
         const calcFare = (fare) => fare*Multiplier
         return calcFare

      }

   function fareDoubler(fare) {
          
    return createFareMultiplier(2)(fare);

                 
      }

      function fareTripler(fare) {

    return createFareMultiplier(3)(fare)

      }

    function selectDifferentDrivers(array, x) {


          return x(array);
        }

