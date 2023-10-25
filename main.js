
const btn = document.querySelector(".submit-btn");

btn.addEventListener('click', ()=>{
    let paragraph = document.querySelector(".paragraph").value;
    const result = calculateGrade(paragraph);
    document.querySelector(".gradeResult").innerHTML= `${paragraph}<br> 
    <b>The result shows that the text provided is suitable to read for ${result} student.</b>`;
    document.querySelector(".paragraph").value= "";
})

const calculateGrade=(para)=>
{
    
    let letter = count_letters(para);
    let words = count_words(para);
    let sentences = count_sentences(para);
    let L = (letter /  words) * 100;
    let S = (sentences /  words) * 100;
    let grade = Math.floor(0.0588 * L - 0.296 * S - 15.8);

    if (grade <= 16 && grade >= 1)
    {
        return(`Grade ${grade}`)
    }
    else if (grade <= 0)
    {
        return "Before Grade 1";
    }
    else
        {return "Grade 16+";}
 
}

const count_letters = (para)=>
{

    let num_of_letters = 0;
    
    for (let i = 0; i < para.length; i++)
    {
        let c = para[i];
        if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))

            num_of_letters++;
    }

    return num_of_letters;
}

const count_words = (para)=>
{

    let num_of_words = 1;
    
    for (let i = 0; i < para.length; i++)
    {
        let c = para[i];
        if (c == ' ')
        {
            num_of_words++;
        }
    }

    return num_of_words;
}

const count_sentences= (para)=>
{
    let num_of_sentences = 0;
   
    for (let i = 0; i < para.length; i++)
    {
        let c = para[i];
        if (c == '.' || c == '!' || c == '?')
        {
            num_of_sentences++;
        }
    }

    return num_of_sentences;
}