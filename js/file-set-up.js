var gradelevel, pageClicked, chosenLevel = "";
var gradeLevels = ['Kinder', 'Grade1', 'Grade2', 'Grade3'];
var indexOfGradeLevel;
var indexOfGrade = 0;
var lastIndexOfGrade;

var Kinder = [
    { "Title": "Number Property", "Description": "This lesson will let children to be more familiarizes about numbers like which from the numbers are bigger or smaller.", "Image": "files/Worksheets/KINDER/images/Kinder_Number Properties/Kinder_Number Properties-1.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Number Properties.pdf" },
    { "Title": "Number Property", "Description": "This lesson will let children to be more familiarizes about numbers like which from the numbers are bigger or smaller.", "Image": "files/Worksheets/KINDER/images/Kinder_Number Properties/Kinder_Number Properties-2.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Number Properties.pdf" },
    { "Title": "Number Property", "Description": "This lesson will let children to be more familiarizes about numbers like which from the numbers are bigger or smaller.", "Image": "files/Worksheets/KINDER/images/Kinder_Number Properties/Kinder_Number Properties-3.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Number Properties.pdf" },

    { "Title": "Geometry", "Description": "This lesson contains sets of shapes. This will let children to be familiarize in counting, in shapes and in color at the same time.", "Image": "files/Worksheets/KINDER/images/Kinder_Geometry/Kinder_Geometry-1.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Geometry.pdf" },
    { "Title": "Geometry", "Description": "This lesson contains sets of shapes. This will let children to be familiarize in counting, in shapes and in color at the same time.", "Image": "files/Worksheets/KINDER/images/Kinder_Geometry/Kinder_Geometry-2.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Geometry.pdf" },
    { "Title": "Geometry", "Description": "This lesson contains sets of shapes. This will let children to be familiarize in counting, in shapes and in color at the same time.", "Image": "files/Worksheets/KINDER/images/Kinder_Geometry/Kinder_Geometry-3.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Geometry.pdf" },
    { "Title": "Geometry", "Description": "This lesson contains sets of shapes. This will let children to be familiarize in counting, in shapes and in color at the same time.", "Image": "files/Worksheets/KINDER/images/Kinder_Geometry/Kinder_Geometry-4.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Geometry.pdf" },
    { "Title": "Geometry", "Description": "This lesson contains sets of shapes. This will let children to be familiarize in counting, in shapes and in color at the same time.", "Image": "files/Worksheets/KINDER/images/Kinder_Geometry/Kinder_Geometry-5.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Geometry.pdf" },
    { "Title": "Geometry", "Description": "This lesson contains sets of shapes. This will let children to be familiarize in counting, in shapes and in color at the same time.", "Image": "files/Worksheets/KINDER/images/Kinder_Geometry/Kinder_Geometry-6.png", "Download": "files/Worksheets/KINDER/pdf/Kinder_Geometry.pdf" },
];

var Grade1 = [
    { "Title": "Addition", "Description": "This lesson contains sets of numbers wherein the students may answer and test their counting skills in terms of adding numbers. ", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Addition/Grade 1_Addition_image(1).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Addition.pdf" },
    { "Title": "Addition", "Description": "This lesson contains sets of numbers wherein the students may answer and test their counting skills in terms of adding numbers. ", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Addition/Grade 1_Addition_image(1).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Addition.pdf" },

    { "Title": "Subtraction 1", "Description": "This lesson contains some problems where the student can try and test themselves to answer all the given sets. This is to test their knowledge when it comes to subtracting sets.", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Subtraction/Grade 1_Subtraction_image(1).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Subtraction.pdf" },
    { "Title": "Subtraction 2", "Description": "This lesson contains some problems where the student can try and test themselves to answer all the given sets. This is to test their knowledge when it comes to subtracting sets.", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Subtraction/Grade 1_Subtraction_image(1).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Subtraction.pdf" },

    { "Title": "Comparing Whole Numbers", "Description": "This lesson contains sets of whole numbers up to thousands so that the students may try and answer each of it by using symbols. ", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Comparing Whole Numbers/Grade 1_Comparing Whole Numbers_image(1).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Comparing Whole Numbers.pdf" },
    { "Title": "Comparing Whole Numbers", "Description": "This lesson contains sets of whole numbers up to thousands so that the students may try and answer each of it by using symbols. ", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Comparing Whole Numbers/Grade 1_Comparing Whole Numbers_image(2).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Comparing Whole Numbers.pdf" },

    { "Title": "Reading and Writing Numbers", "Description": "This is to help students in counting, reading and writing numbers up to 100. Also, to tell the importance of sharing. This lesson contains sets of objects to count.", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Reading and Writing Numbers/Grade 1_Reading and Writing Number_image(1).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Reading and Writing Numbers.pdf" },
    { "Title": "Reading and Writing Numbers", "Description": "This is to help students in counting, reading and writing numbers up to 100. Also, to tell the importance of sharing. This lesson contains sets of objects to count.", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Reading and Writing Numbers/Grade 1_Reading and Writing Number_image(2).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Reading and Writing Numbers.pdf" },
    { "Title": "Reading and Writing Numbers", "Description": "This is to help students in counting, reading and writing numbers up to 100. Also, to tell the importance of sharing. This lesson contains sets of objects to count.", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Reading and Writing Numbers/Grade 1_Reading and Writing Number_image(3).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Reading and Writing Numbers.pdf" },

    { "Title": "Ordering Whole Numbers", "Description": "This lesson contains sets of numbers that can be arranged to least to greatest then greatest to least this is to test the knowledge of the students when it comes to identifying numbers.", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Ordering Whole Numbers/Grade 1_Ordering Whole Numbers_image(1).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Ordering Whole Numbers.pdf" },
    { "Title": "Ordering Whole Numbers", "Description": "This lesson contains sets of numbers that can be arranged to least to greatest then greatest to least this is to test the knowledge of the students when it comes to identifying numbers.", "Image": "files/Worksheets/GRADE 1/images/Grade 1_Ordering Whole Numbers/Grade 1_Ordering Whole Numbers_image(2).png", "Download": "files/Worksheets/GRADE 1/pdf/Grade 1_Ordering Whole Numbers.pdf" },
];

var Grade2 = [
    { "Title": "Adding and Subtracting Numbers", "Description": "This lesson contains sets of numbers for addition and subtraction. This is to keep the kids in mind about adding up numbers and how to less up numbers as well. ", "Image": "files/Worksheets/GRADE 2/images/Grade-2-Addition-and-Subtraction/Grade-2-Addition-and-Subtraction_001.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-Addition-and-Subtraction.pdf" },
    { "Title": "Adding and Subtracting Numbers", "Description": "This lesson contains sets of numbers for addition and subtraction. This is to keep the kids in mind about adding up numbers and how to less up numbers as well. ", "Image": "files/Worksheets/GRADE 2/images/Grade-2-Addition-and-Subtraction/Grade-2-Addition-and-Subtraction_002.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-Addition-and-Subtraction.pdf" },

    { "Title": "All About Numbers and Number Sense", "Description": "This lesson contains identifying of place value in a set of number, naming numbers and writing each and every symbol of it, and writing numbers in Roman Numeral form. This is to enhance their sense in every number.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-Number-sense/Grade-2-Number-sense_001.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-Number-sense.pdf" },
    { "Title": "All About Numbers and Number Sense", "Description": "This lesson contains identifying of place value in a set of number, naming numbers and writing each and every symbol of it, and writing numbers in Roman Numeral form. This is to enhance their sense in every number.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-Number-sense/Grade-2-Number-sense_002.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-Number-sense.pdf" },

    { "Title": "The Ordinals", "Description": "The topic ordinal contains finding the correct symbol for each ordinal number and writing the corresponding words of the given number.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-Ordinal-Numbers/Grade-2-Ordinal-Numbers.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-Ordinal-Numbers.pdf" },

    { "Title": "All About Money", "Description": "This lesson contains adding and subtracting amounts of money, naming each money and knowing the correct symbol of it. This is to enhance the knowledge of the kids regarding money.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-topic-money/Grade-2-topic-money_001.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-topic-money.pdf" },
    { "Title": "All About Money", "Description": "This lesson contains adding and subtracting amounts of money, naming each money and knowing the correct symbol of it. This is to enhance the knowledge of the kids regarding money.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-topic-money/Grade-2-topic-money_002.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-topic-money.pdf" },
    { "Title": "All About Money", "Description": "This lesson contains adding and subtracting amounts of money, naming each money and knowing the correct symbol of it. This is to enhance the knowledge of the kids regarding money.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-topic-money/Grade-2-topic-money_003.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-topic-money.pdf" },
    { "Title": "All About Money", "Description": "This lesson contains adding and subtracting amounts of money, naming each money and knowing the correct symbol of it. This is to enhance the knowledge of the kids regarding money.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-topic-money/Grade-2-topic-money_004.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-topic-money.pdf" },
    { "Title": "All About Money", "Description": "This lesson contains adding and subtracting amounts of money, naming each money and knowing the correct symbol of it. This is to enhance the knowledge of the kids regarding money.", "Image": "files/Worksheets/GRADE 2/images/Grade-2-topic-money/Grade-2-topic-money_005.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade-2-topic-money.pdf" },

    { "Title": "Lines and Curves", "Description": "The Lines and Curves contains identifying an open curve and a closed curve also flat surface and round surface. This is to relate lines and curve in life. ", "Image": "files/Worksheets/GRADE 2/images/Grade2-Lines-and-Curves/Grade2-Lines-and-Curves_001.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade2-Lines-and-Curves.pdf" },
    { "Title": "Lines and Curves", "Description": "The Lines and Curves contains identifying an open curve and a closed curve also flat surface and round surface. This is to relate lines and curve in life. ", "Image": "files/Worksheets/GRADE 2/images/Grade2-Lines-and-Curves/Grade2-Lines-and-Curves_002.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade2-Lines-and-Curves.pdf" },
    { "Title": "Lines and Curves", "Description": "The Lines and Curves contains identifying an open curve and a closed curve also flat surface and round surface. This is to relate lines and curve in life. ", "Image": "files/Worksheets/GRADE 2/images/Grade2-Lines-and-Curves/Grade2-Lines-and-Curves_003.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade2-Lines-and-Curves.pdf" },
    { "Title": "Lines and Curves", "Description": "The Lines and Curves contains identifying an open curve and a closed curve also flat surface and round surface. This is to relate lines and curve in life. ", "Image": "files/Worksheets/GRADE 2/images/Grade2-Lines-and-Curves/Grade2-Lines-and-Curves_004.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade2-Lines-and-Curves.pdf" },
    { "Title": "Lines and Curves", "Description": "The Lines and Curves contains identifying an open curve and a closed curve also flat surface and round surface. This is to relate lines and curve in life. ", "Image": "files/Worksheets/GRADE 2/images/Grade2-Lines-and-Curves/Grade2-Lines-and-Curves_005.png", "Download": "files/Worksheets/GRADE 2/pdf files/Grade2-Lines-and-Curves.pdf" },
];

var Grade3 = [
    { "Title": "Fractions", "Description": "This lesson has sets of fraction problems where it can test their knowledge when it comes to fractions.", "Image": "files/Worksheets/GRADE 3/images/Grade 3_Fractions/Grade 3_Fractions.png", "Download": "files/Worksheets/GRADE 3/pdf/Grade 3_Fractions.pdf" },
    { "Title": "Fractions", "Description": "This lesson has sets of fraction problems where it can test their knowledge when it comes to fractions.", "Image": "files/Worksheets/GRADE 3/images/Grade 3_Fractions/Grade 3_Fractions-2.png", "Download": "files/Worksheets/GRADE 3/pdf/Grade 3_Fractions.pdf" },

    { "Title": "Mixed Operations", "Description": "This lesson contains addition, subtraction, and multiplication problems in one set. This is to test their knowledge in mixing operations in a number problem.", "Image": "files/Worksheets/GRADE 3/images/Grade 3_Mixed Operations/Grade 3_Mixed Operations-1.png", "Download": "files/Worksheets/GRADE 3/pdf/Grade 3_Mixed Operations.pdf" },
    { "Title": "Mixed Operations", "Description": "This lesson contains addition, subtraction, and multiplication problems in one set. This is to test their knowledge in mixing operations in a number problem.", "Image": "files/Worksheets/GRADE 3/images/Grade 3_Mixed Operations/Grade 3_Mixed Operations-2.png", "Download": "files/Worksheets/GRADE 3/pdf/Grade 3_Mixed Operations.pdf" },

    { "Title": "Ordinal Numbers", "Description": "This lesson contains sets of ordinal numbers that can be answered with their right symbols. This is to enhance their knowledge about numbers in words.", "Image": "files/Worksheets/GRADE 3/images/Grade 3_Ordinal Numbers/Grade 3_Ordinal Numbers-1.png", "Download": "files/Worksheets/GRADE 3/pdf/Grade 3_Ordinal Numbers.pdf" },
    { "Title": "Ordinal Numbers", "Description": "This lesson contains sets of ordinal numbers that can be answered with their right symbols. This is to enhance their knowledge about numbers in words.", "Image": "files/Worksheets/GRADE 3/images/Grade 3_Ordinal Numbers/Grade 3_Ordinal Numbers-2.png", "Download": "files/Worksheets/GRADE 3/pdf/Grade 3_Ordinal Numbers.pdf" },
];

var curriculums = [{
        "Description": "The curriculum in Kinder Level is based on the Department of Education that was revised last May 2016 as it is part of the K to 12 changes. The file will consist all the curriculum in different subjects. The curriculum for Mathematics will be found on pages 17 to 21 of 32.",
        "Download": "files/Curriculum/KINDER-CurriculumDescription.docx"
    },
    {
        "Description": "The Grade 1 Level is based on the Department of Education that was revised last August 2016 as it is part of the K to 12 changes. The file will fully consist of Mathematics curriculum from grade 1 to 10  as the DepEd compile from their website. The curriculum for Grade 1 Mathematics will be found on pages 9 to 30 of 257 and the other succeesing pages are for the upper grade level.",
        "Download": "files/Curriculum/Grade1-12_Curriculum2016.pdf"
    },
    {
        "Description": "The Grade 2 Level is based on the Department of Education that was revised last August 2016 as it is part of the K to 12 changes. The file will fully consist of Mathematics curriculum from grade 1 to 10 as the DepEd compile from their website. The curriculum for Grade 1 Mathematics will be found on pages 31 to 66 of 257 and the other succeeding pages are for the upper grade level.",
    },
    {
        "Description": "The Grade 3 Level is based on the Department of Education that was revised last August 2016 as it is part of the K to 12 changes. The file will fully consist of Mathematics curriculum from grade 1 to 10 as the DepEd compile from their website. The curriculum for Grade 3 Mathematics will be found on pages 67 to 96 of 257 and the other succeeding pages are for the upper grade level.",
    },
];

function choosePage() { //gets the html pathname or where html file are you at
    pageClicked = location.pathname;
}

function chooseGrade(choice) { //on Curriculum and Worksheet html gets onClick what grade have been chosen
    gradeLevel = choice;
    hideElementClass('Levels');
    chosenLevel = choice;
    indexOfGradeLevel = gradeLevels.indexOf(chosenLevel);
    setLastIndex(chosenLevel);

    if (pageClicked === '/C:/Users/CZA/Desktop/PriMa/Curriculum.html') { //for curriculum page

        switch (gradeLevel) {
            case 'Kinder':
                showElementClass('curriculum-proper');
                changingPanelContentImageCurriculum('#image-tag-curriculum', "images/currculum/Kinder/KinderText.png",
                    '#button-download-curriculum', "images/currculum/Kinder/DownloadPDFBtn.png"); //changing image of buttons depending on page and gradelevel

                document.getElementById('description-curriculum').innerHTML = curriculums[0].Description; //description of the document
                break;
            case 'Grade1':
                showElementClass('curriculum-proper');
                changingPanelContentImageCurriculum('#image-tag-curriculum', "images/currculum/Grade 1/Grade1Text.png",
                    '#button-download-curriculum', "images/currculum/Grade 1/DownloadPDFBtn.png");

                document.getElementById('description-curriculum').innerHTML = curriculums[1].Description;
                break;
            case "Grade2":
                showElementClass('curriculum-proper');
                changingPanelContentImageCurriculum('#image-tag-curriculum', "images/currculum/Grade2/Grade2Text.png",
                    '#button-download-curriculum', "images/currculum/Grade2/DownloadPDFBtn.png");

                document.getElementById('description-curriculum').innerHTML = curriculums[2].Description;
                break;
            default:
                showElementClass("curriculum-proper");
                changingPanelContentImageCurriculum('#image-tag-curriculum', "images/currculum/Grade 3/Grade3Text.png",
                    '#button-download-curriculum', "images/currculum/Grade 3/DownloadPDFBtn.png");

                document.getElementById('description-curriculum').innerHTML = curriculums[3].Description;
                break;
        }

    } else {

        switch (gradeLevel) {
            case 'Kinder':
                showElementClass('worksheet-proper');
                document.querySelector('#image-preview').setAttribute('src', Kinder[indexOfGrade].Image); //image from dtabase display image of pdf
                document.getElementById('title-worksheet').innerHTML = Kinder[indexOfGrade].Title; //text lesson title
                document.getElementById('worksheet-description').innerHTML = Kinder[indexOfGrade].Description; //text description of worksheet
                document.getElementById('title-worksheet').style.color = "#ab1866";

                changingPanelContentImageWorksheet('#img-tag-worksheet', "images/worksheets/Kinder/KinderText.png",
                    '#file-previous-button', "images/worksheets/Kinder/prevBtn.png",
                    '#image-prev-button', "images/worksheets/Kinder/imgprev.png",
                    '.inbetween-button', "images/worksheets/Kinder/imgBetween.png",
                    '#image-next-button', "images/worksheets/Kinder/imgnext.png",
                    '#worksheet-download-button', "images/worksheets/Kinder/DownloadPDFbtn.png",
                    '#file-next-button', "images/worksheets/Kinder/nextBtn.png");
                break;
            case 'Grade1':
                showElementClass('worksheet-proper');
                document.querySelector('#image-preview').setAttribute('src', Grade1[indexOfGrade].Image);
                document.getElementById('title-worksheet').innerHTML = Grade1[indexOfGrade].Title;
                document.getElementById('worksheet-description').innerHTML = Grade1[indexOfGrade].Description;
                document.getElementById('title-worksheet').style.color = "#e8b100";

                changingPanelContentImageWorksheet('#img-tag-worksheet', "images/worksheets/Grade 1/Grade1Text.png",
                    '#file-previous-button', "images/worksheets/Grade 1/prevBtn.png",
                    '#image-prev-button', "images/worksheets/Grade 1/imgPrevBtn.png",
                    '.inbetween-button', "images/worksheets/Grade 1/imgBetween.png",
                    '#image-next-button', "images/worksheets/Grade 1/imgNextBtn.png",
                    '#worksheet-download-button', "images/worksheets/Grade 1/DownloadPDFbtn.png",
                    '#file-next-button', "images/worksheets/Grade 1/nextBtn.png");

                break;
            case 'Grade2':
                showElementClass('worksheet-proper');
                document.querySelector('#image-preview').setAttribute('src', Grade2[indexOfGrade].Image);
                document.getElementById('title-worksheet').innerHTML = Grade2[indexOfGrade].Title;
                document.getElementById('worksheet-description').innerHTML = Grade2[indexOfGrade].Description;
                document.getElementById('title-worksheet').style.color = "#162b61";

                changingPanelContentImageWorksheet('#img-tag-worksheet', "images/worksheets/Grade2/Grade2Text.png",
                    '#file-previous-button', "images/worksheets/Grade2/prevBtn.png",
                    '#image-prev-button', "images/worksheets/Grade2/imgPrevBtn.png",
                    '.inbetween-button', "images/worksheets/Grade2/imgBetween.png",
                    '#image-next-button', "images/worksheets/Grade2/imgNextBtn.png",
                    '#worksheet-download-button', "images/worksheets/Grade2/DownloadPDFbtn.png",
                    '#file-next-button', "images/worksheets/Grade2/nextBtn.png");
                break;
            default:
                showElementClass('worksheet-proper');
                document.querySelector('#image-preview').setAttribute('src', Grade3[indexOfGrade].Image);
                document.getElementById('title-worksheet').innerHTML = Grade3[indexOfGrade].Title;
                document.getElementById('worksheet-description').innerHTML = Grade3[indexOfGrade].Description;
                document.getElementById('title-worksheet').style.color = "#381e65";

                changingPanelContentImageWorksheet('#img-tag-worksheet', "images/worksheets/Grade 3/Grade3Text.png",
                    '#file-previous-button', "images/worksheets/Grade 3/prevBtn.png",
                    '#image-prev-button', "images/worksheets/Grade 3/imgPrevBtn.png",
                    '.inbetween-button', "images/worksheets/Grade 3/imgBetween.png",
                    '#image-next-button', "images/worksheets/Grade 3/imgNextBtn.png",
                    '#worksheet-download-button', "images/worksheets/Grade 3/DownloadPDFbtn.png",
                    '#file-next-button', "images/worksheets/Grade 3/nextBtn.png");

                break;

        }

    }
}

function showElementClass(Class) { //method to show class that contains elements
    var topnon = document.getElementsByClassName(Class);
    for (i = 0; i < topnon.length; i++) {
        topnon[i].style.display = 'block';
    }
}

function hideElementClass(Class) { //method to hide class that contains elements
    var top = document.getElementsByClassName(Class);
    for (i = 0; i < top.length; i++) {
        top[i].style.display = 'none';
    }
}

function changingPanelContentImageCurriculum(stid1, source1, stid2, source2) { //method for setting of the image src to change 
    document.querySelector(stid1).setAttribute('src', source1);
    document.querySelector(stid2).setAttribute('src', source2);
}

function changingPanelContentImageWorksheet(stid1, source1, stid2, source2, stid3, source3, stid4, source4, stid5, source5, stid6, source6, stid7, source7) { //method for setting of the image src to change 
    document.querySelector(stid1).setAttribute('src', source1);
    document.querySelector(stid2).setAttribute('src', source2);
    document.querySelector(stid3).setAttribute('src', source3);
    document.querySelector(stid4).setAttribute('src', source4);
    document.querySelector(stid5).setAttribute('src', source5);
    document.querySelector(stid6).setAttribute('src', source6);
    document.querySelector(stid7).setAttribute('src', source7);
}


function previousFile() {
    indexOfGradeLevel == 0 ? indexOfGradeLevel = 3 : --indexOfGradeLevel;
    indexOfGrade = 0;
    chooseGrade(gradeLevels[indexOfGradeLevel]);
}

function nextFile() {
    indexOfGradeLevel == 3 ? indexOfGradeLevel = 0 : ++indexOfGradeLevel;
    indexOfGrade = 0;
    chooseGrade(gradeLevels[indexOfGradeLevel]);


}

function previousImage() {
    indexOfGrade == 0 ? indexOfGrade = lastIndexOfGrade - 1 : --indexOfGrade;
    chooseGrade(gradeLevels[indexOfGradeLevel]);
}

function nextImage() {
    indexOfGrade == lastIndexOfGrade - 1 ? indexOfGrade = 0 : ++indexOfGrade;
    chooseGrade(gradeLevels[indexOfGradeLevel]);
}

function downloadPDF() {

    var fileName;
    if (chosenLevel === "Kinder") {
        fileName = Kinder[indexOfGrade].Download;
    } else if (chosenLevel === "Grade1") {
        fileName = Grade1[indexOfGrade].Download;
    } else if (chosenLevel === "Grade2") {
        fileName = Grade2[indexOfGrade].Download;
    } else if (chosenLevel === "Grade3") {
        fileName = Grade3[indexOfGrade].Download;
    }


    let a = document.createElement('a');
    a.href = fileName;
    a.download = fileName.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

}

function setLastIndex(level) {
    if (level === "Kinder") {
        lastIndexOfGrade = Kinder.length;
    } else if (level === "Grade1") {
        lastIndexOfGrade = Grade1.length;
    } else if (level === "Grade2") {
        lastIndexOfGrade = Grade2.length;
    } else if (level === "Grade3") {
        lastIndexOfGrade = Grade3.length;
    }
}

function downloadCurriculumPDF() {
    var fileName;
    if (chosenLevel === "Kinder") {
        fileName = curriculums[0].Download;
    } else {
        fileName = curriculums[1].Download;
    }
    let a = document.createElement('a');
    a.href = fileName;
    a.download = fileName.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

var referencesSource = {
    image: 'Designed by Freepik: <br> http://www.freepik.com <br><br> Pixabay: <br> https://pixabay.com',
    music: 'Music On Games by: <br><br> MeteorEncounter : <br> Axel F by Harold Faltermeyer' +
        '<br><br> The Adventure of Minus the Virus Fighter : <br> Shoot Out by Harold Faltermeyer (7" Single) ' +
        '<br><br> Let\'s Feed Rene The Cat : <br> Ev\'rybody Wants to Be a Cat (Instrumental)',
    content: 'File References: <br><br> Department of Education <br> www.deped.gov.ph/k-to-12/about/k-to-12-basic-education-curriculum' +
        '<br> <br> https://www.mathgames.com <br><br> Excel Math and Beyond. Author, Kathykay B. Nopia. Mind Builders Publishing House Inc.'
}

function setContentImage() {
    document.getElementById('references-sources').style.display = "block";
    document.getElementById('references-sources').style.top = "400px";
    document.getElementById('references-sources').innerHTML = referencesSource.image;
    document.querySelector('#image-box').setAttribute('src', "images/About Us/boxImg.png");
}

function setContentContents() {
    document.getElementById('references-sources').style.display = "block";
    document.getElementById('references-sources').style.top = "250px";
    document.getElementById('references-sources').style.width = "250px";
    document.getElementById('references-sources').innerHTML = referencesSource.content;
    document.querySelector('#content-box').setAttribute('src', "images/About Us/boxCntnt.png");
}

function setContentMusic() {
    document.getElementById('references-sources').style.display = "block";
    document.getElementById('references-sources').style.top = "250px";
    document.getElementById('references-sources').innerHTML = referencesSource.music;
    document.querySelector('#music-box').setAttribute('src', "images/About Us/boxMusic.png");
}

function mouseOut() {
    document.getElementById('references-sources').style.display = "none";
    document.getElementById('references-sources').style.width = "200px";
    document.querySelector('#image-box').setAttribute('src', "images/About Us/boxImgNotOpen.png");
    document.querySelector('#content-box').setAttribute('src', "images/About Us/boxCntntNotOpen.png");
    document.querySelector('#music-box').setAttribute('src', "images/About Us/boxMusicNotOpen.png");
}