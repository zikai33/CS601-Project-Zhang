<template>
    <div class="outer">
        <h1>Degrees</h1>
        <div class="Deg">
            <div class="wap">
                <div class="SchoolSize">Boston University</div>
                <div class="dateSize">09/2021 - 05/2022</div>
            </div>
            <div class="major">
                <b>Degree</b>: Master of Science (MET)
            </div>
            <div class="major"><b>Major</b>: Computer Science</div>
            <div class="major"><b>Concentration</b>: Data Analytics</div>
        </div>
        <div class="Deg">
            <div class="wap">
                <div class="SchoolSize">Auburn University</div>
                <div class="dateSize">09/2017 - 05/2021</div>
            </div>
            <div class="major">
                <b>Degree</b>: Bachelor of Science Computer Science
            </div>
            <div class="major"><b>Major</b>: Computer Science and Computer Engineering</div>
        </div>
        <hr>
        <h1>Courses</h1>
        <table>
            <tr>
                <td>School</td>
                <td>Subject</td>
                <td>Title</td>
                <td>Grade</td>
            </tr>
            <tr>
                <td>Boston University</td>
                <td>MET CS544</td>
                <td>Found Analytics</td>
                <td>A-</td>
            </tr>
            <tr>
                <td>Boston University</td>
                <td>MET CS566</td>
                <td>Analys of Algrt</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Boston University</td>
                <td>MET CS575</td>
                <td>Oprtng Systems</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Boston University</td>
                <td>MET CS555</td>
                <td>Data Analys Vis</td>
                <td>B</td>
            </tr>
            <tr>
                <td>Boston University</td>
                <td>MET CS579</td>
                <td>Database Mgmnt</td>
                <td>A-</td>
            </tr>
            <tr>
                <td>Boston University</td>
                <td>MET CS662</td>
                <td>Comp Lang Theor</td>
                <td>A</td>
            </tr>

            <tr>
                <td>Auburn University</td>
                <td>COMP	4320</td>
                <td>	Intro To Computer Networks</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Auburn University</td>
                <td>COMP	5970</td>
                <td>Special Topics: iOS App Development</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Auburn University</td>
                <td>COMP	3270</td>
                <td>Introduction To Algorithms</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Auburn University</td>
                <td>COMP	4200</td>
                <td>Formal Languages</td>
                <td>A</td>
            </tr>
            <tr>
                <td>Auburn University</td>
                <td>COMP5970</td>
                <td>Special Topics: Game Design for Social Change</td>
                <td>A</td>
            </tr>
            
        </table>
    </div>
</template>

<style scoped>
.outer {
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.Deg {

}
.wap {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.SchoolSize {
    font-size: 1.6rem;
}

.major {
    text-align: left;
    height: 20px;
}

span {
    font-weight: 600;
}

td {
    text-align: center;
    height: 50px;
    width: 200px;
}

table {
    text-align: center;
    justify-content: center;
}
body {
    text-align: center;
}
table {
    margin: auto;
}
</style>
