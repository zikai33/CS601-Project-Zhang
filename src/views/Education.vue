<template>
    <div>
        <h1>Degrees</h1>
        <div class="Deg">
            <div class="wap">
                <div class="SchoolSize">Boston University</div>
                <div class="dateSize">09/2021 - 05/2022</div>
            </div>
            <div class="major">
                Master of Computer Science, Data Analytics
            </div>
            <div class="major">Metropolitan College(MET)</div>
        </div><br><br>
        <div class="Deg">
            <div class="wap">
                <div class="SchoolSize">Auburn University</div>
                <div class="dateSize">09/2017 - 05/2021</div>
            </div>
            <div class="major">
                Bachelor of Computer Science, Computer Sci & Software Engr.
            </div>
            <div class="major">College of Engineering</div>
        </div>
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
.Deg {
    justify-content: center;
    width: 500px;
    margin: auto;
}
.wap {
    display: flex;
    text-align: left;
    line-height: normal;
}

.SchoolSize {
    font-size: 25px;
    margin-right: 30px;
    justify-content: left;
}
.dateSize {
    font-size: 15px;
    justify-content: right;
    text-align: right;
    margin-left: 110px;
    margin-top: 10px;
}
.major {
    text-align: left;
    height: 20px;
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
