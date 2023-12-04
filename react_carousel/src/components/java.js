

export function scrollToTop() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 800);
    
}



// export function dostuff() {
//     let i=0;
//     let original="";
//     setTimeout(() => {
//         document.getElementById("number1").click();
//     }, 800);
//     const id_hidden=["pineapple_pg1","mango_pg1","orange_pg1","watermelon_pg1","carrot_pg1","guava_pg1","pumpkin_pg1","radish_pg1","maggi_pg1","chips_pg1","bread_pg1","water_pg1"]
//     const id_page1=["apple","banana","cucumber","apricot","chestnut","grapes"]
//     const id_page2=["pineapple","mango","orange","watermelon","carrot","guava"]
//     const id_page3=["pumpkin","radish","maggi","chips","bread","water"]

//     const ids=["apple","banana","cucumber","apricot","chestnut","grapes","pineapple","mango","orange","watermelon","carrot","guava","pumpkin","radish","maggi","chips","bread","water"]

//     for (i=0;i<ids.length;i++)
//     {
//         document.getElementById(ids[i]).style.display = "flex";
//     }
//     for (i=0;i<id_hidden.length;i++)
//     {   

//         document.getElementById(id_hidden[i]).style.display = "none";
//     }

//     let input =document.getElementById('searchbar').value;
//     input=input.toLowerCase();
//     console.log(input);

//     if(input=="")
//     {

//     }
//     else
//     {
//     for (i=0;i<ids.length;i++)
//     {
//         if (!ids[i].includes(input)) {
//             document.getElementById(ids[i]).style.display = "none";
//         }
//         else {
                           
//         }

//     }
//     for (i=0;i<id_hidden.length;i++)
//     {   original=id_hidden[i].slice(0,-4);
//         if (original.includes(input)) {
//             console.log(id_hidden[i]);
//             document.getElementById(id_hidden[i]).style.display = "flex";
//         }
//     }
// }
    
// }

    export function dostuffpg1() {
        let i=0;
        let original="";
        
        const id_page1=["apple","banana","cucumber","donut"]   
        const id_page1_hidden=["elephant1","fanta1","grapes1","house1","igloo1","jackal1","knight1","laundry1"]
        const id_page2=["elephant","fanta","grapes","house"]
        const id_page2_hidden=["apple2","banana2","cucumber2","donut2","igloo2","jackal2","knight2","laundry2"]
        const id_page3=["igloo","jackal","knight","laundry"]
        const id_page3_hidden=["apple3","banana3","cucumber3","donut3","elephant3","fanta3","grapes3","house3"]

        const ids=["apple","banana","cucumber","donut","elephant1","fanta1","grapes1","house1","igloo1","jackal1","knight1","laundry1","elephant","fanta","grapes","house","apple2","banana2","cucumber2","donut2","igloo2","jackal2","knight2","laundry2","igloo","jackal","knight","laundry","apple3","banana3","cucumber3","donut3","elephant3","fanta3","grapes3","house3"]

        //restoring 
        for (i=0;i<id_page1.length;i++)
        {
            document.getElementById(id_page1[i]).style.display = "flex";
        }
        for (i=0;i<id_page2.length;i++)
        {
            document.getElementById(id_page2[i]).style.display = "flex";
        }
        for (i=0;i<id_page3.length;i++)
        {
            document.getElementById(id_page3[i]).style.display = "flex";
        }

        for (i=0;i<id_page1_hidden.length;i++)
        {
            document.getElementById(id_page1_hidden[i]).style.display = "none";
        }
        for (i=0;i<id_page2_hidden.length;i++)
        {
            try{
            document.getElementById(id_page2_hidden[i]).style.display = "none";
            }
            catch{}
        }
        for (i=0;i<id_page3_hidden.length;i++)
        {
            try{
            document.getElementById(id_page3_hidden[i]).style.display = "none";
            }
            catch{}
        }

        var input =document.getElementById("searchbar1").value;
        input=input.toLowerCase();
        console.log(input);
    
        if(input=="")
        {
            
        }
        else
        {
        for (i=0;i<ids.length;i++)
        {
            try{
            if (!ids[i].includes(input)) {
                document.getElementById(ids[i]).style.display = "none";
            }
            else {
                document.getElementById(ids[i]).style.display = "flex";
            }
            }
            catch{

            }
        }
        }
        
    }

export function dostuffpg2() {
    let i=0;
    let original="";
    
    const id_page1=["apple","banana","cucumber","donut"]   
    const id_page1_hidden=["elephant1","fanta1","grapes1","house1","igloo1","jackal1","knight1","laundry1"]
    const id_page2=["elephant","fanta","grapes","house"]
    const id_page2_hidden=["apple2","banana2","cucumber2","donut2","igloo2","jackal2","knight2","laundry2"]
    const id_page3=["igloo","jackal","knight","laundry"]
    const id_page3_hidden=["apple3","banana3","cucumber3","donut3","elephant3","fanta3","grapes3","house3"]

    const ids=["apple","banana","cucumber","donut","elephant1","fanta1","grapes1","house1","igloo1","jackal1","knight1","laundry1","elephant","fanta","grapes","house","apple2","banana2","cucumber2","donut2","igloo2","jackal2","knight2","laundry2","igloo","jackal","knight","laundry","apple3","banana3","cucumber3","donut3","elephant3","fanta3","grapes3","house3"]

    //restoring 
    for (i=0;i<id_page1.length;i++)
    {
        document.getElementById(id_page1[i]).style.display = "flex";
    }
    for (i=0;i<id_page2.length;i++)
    {
        document.getElementById(id_page2[i]).style.display = "flex";
    }
    for (i=0;i<id_page3.length;i++)
    {
        document.getElementById(id_page3[i]).style.display = "flex";
    }

    for (i=0;i<id_page1_hidden.length;i++)
    {
        document.getElementById(id_page1_hidden[i]).style.display = "none";
    }
    for (i=0;i<id_page2_hidden.length;i++)
    {
        try{
        document.getElementById(id_page2_hidden[i]).style.display = "none";
        }
        catch{}
    }
    for (i=0;i<id_page3_hidden.length;i++)
    {
        try{
        document.getElementById(id_page3_hidden[i]).style.display = "none";
        }
        catch{}
    }

    var input2 =document.getElementById("searchbar2").value;
    input2=input2.toLowerCase();
    console.log(input2);
 
    if(input2=="")
    {
        
    }
    else
    {
    for (i=0;i<ids.length;i++)
    {
        try{
        if (!ids[i].includes(input2)) {
            document.getElementById(ids[i]).style.display = "none";
        }
        else {
            document.getElementById(ids[i]).style.display = "flex";
        }
        }
        catch{

        }
    }
    }
    
}

export function dostuffpg3() {
    let i=0;
    let original="";
    
    const id_page1=["apple","banana","cucumber","donut"]   
    const id_page1_hidden=["elephant1","fanta1","grapes1","house1","igloo1","jackal1","knight1","laundry1"]
    const id_page2=["elephant","fanta","grapes","house"]
    const id_page2_hidden=["apple2","banana2","cucumber2","donut2","igloo2","jackal2","knight2","laundry2"]
    const id_page3=["igloo","jackal","knight","laundry"]
    const id_page3_hidden=["apple3","banana3","cucumber3","donut3","elephant3","fanta3","grapes3","house3"]

    const ids=["apple","banana","cucumber","donut","elephant1","fanta1","grapes1","house1","igloo1","jackal1","knight1","laundry1","elephant","fanta","grapes","house","apple2","banana2","cucumber2","donut2","igloo2","jackal2","knight2","laundry2","igloo","jackal","knight","laundry","apple3","banana3","cucumber3","donut3","elephant3","fanta3","grapes3","house3"]

    //restoring 
    for (i=0;i<id_page1.length;i++)
    {
        document.getElementById(id_page1[i]).style.display = "flex";
    }
    for (i=0;i<id_page2.length;i++)
    {
        document.getElementById(id_page2[i]).style.display = "flex";
    }
    for (i=0;i<id_page3.length;i++)
    {
        document.getElementById(id_page3[i]).style.display = "flex";
    }

    for (i=0;i<id_page1_hidden.length;i++)
    {
        document.getElementById(id_page1_hidden[i]).style.display = "none";
    }
    for (i=0;i<id_page2_hidden.length;i++)
    {
        try{
        document.getElementById(id_page2_hidden[i]).style.display = "none";
        }
        catch{}
    }
    for (i=0;i<id_page3_hidden.length;i++)
    {
        try{
        document.getElementById(id_page3_hidden[i]).style.display = "none";
        }
        catch{}
    }

    var input3 =document.getElementById("searchbar3").value;
    input3=input3.toLowerCase();
    console.log(input3);
 
    if(input3=="")
    {
        
    }
    else
    {
    for (i=0;i<ids.length;i++)
    {
        try{
        if (!ids[i].includes(input3)) {
            document.getElementById(ids[i]).style.display = "none";
        }
        else {
            document.getElementById(ids[i]).style.display = "flex";
        }
        }
        catch{

        }
    }
    }
    
}




