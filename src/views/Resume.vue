<template>
    <div>
        <h3>Education</h3>
        <hr />
        <div class="totalsize">
            <div class="education">
                <div class="school">Auburn University, Auburn, AL</div>
                <div class="date">Sep 2017 - May 2021</div>
            </div>
            <div class="leftmost bigger">
                Bachelor of Science in Computer Science; GPA: 3.18/4.0
            </div>
            <div class="leftmost">- Dean’s List: Fall 2020</div>
            <div class="leftmost eduwidth">
                - Core courses: Principle of Programming Languages, Software
                Modeling and Design, Computer Organization and Assembly Language
                Programming, iOS App Development
            </div>
            <br /><br />
            <div class="totalsize">
                <div class="education">
                    <div class="school">
                        Boston University,Boston,Massachusetts
                    </div>
                    <div class="date">Sep 2020 - May 2022</div>
                </div>
                <div class="leftmost bigger">
                    Bachelor of Computer Science, Computer Sci & Software Engr;
                    GPA:3.73/4.0
                </div>
                <div class="leftmost eduwidth">
                    - Core courses: Data Analys Vis, Database Mgmnt
                </div>
            </div>
        </div>
        <h3>WORK EXPERIENCE</h3>
        <hr />
        <div>
            <div class="totalsize">
                <div class="education">
                    <div class="school">
                        Program Assistant (Remote),
                        <strong>Hangzhou Hikvision Digital Technology</strong>,
                        Hangzhou, China
                    </div>
                    <div class="date">June 2020 - Aug 2020</div>
                </div>
                <div class="leftmost">
                    - Developed with Python an automated test script of deep
                    learning software which automatically tests various
                    algorithm parameters to increase the overall testing
                    efficiency
                </div>
                <div class="leftmost">
                    - Designed and developed the automated algorithm
                    configuration through interface analysis and acquisition of
                    location information and controlled the software interface
                    by accessing the HWND
                </div>
                <div class="leftmost">
                    - Provided the designed algorithm parameters with two
                    alternative models of automated parameter generation and
                    manual parameter designation
                </div>
                <div class="leftmost">
                    - Improved the compatibility of the product by analyzing
                    various versions of deep-learning software and comparing the
                    data consistency of outputs across versions
                </div>
            </div>
            <br />
            <div class="totalsize">
                <div class="education">
                    <div class="school">
                        Trainee,
                        <strong
                            >Hangzhou Runzhou Investment Management Co.</strong
                        >, Ltd, Hangzhou, China
                    </div>
                    <div class="date">Jan 2018 – Feb 2020</div>
                </div>
                <div class="leftmost">
                    - Collected stock financial data from Bloomberg Python API
                    and persisted in MySql database.
                </div>
                <div class="leftmost">
                    - Calculated multi-investment factors from an abundance of
                    stock financial data using Pandas; analyzed and identified
                    correlation between the investment factors and revenues
                </div>
                <div class="leftmost">
                    - Improved the performance of a predicting model by
                    employing AdaBoost.
                </div>
            </div>
        </div>
        <h3>PROJECTS</h3>
        <hr />
        <div class="totalsize">
            <div class="education">
                <div class="school">
                    Programmer and Designer of
                    <strong>TrieAutoComplete Program</strong>, Auburn, AL
                </div>
                <div class="date">Apr 2020 - June 2020</div>
            </div>
            <div class="leftmost">
                - Researched the strategy for TrieAutoComplete and stated the
                algorithm for various data retrieval functions precisely using
                numbered steps that follow the given pseudocode conventions in
                Java
            </div>
            <div class="leftmost">
                - Conducted an approximate efficiency analysis by studying tree
                methods and analyzing tree nodes
            </div>
            <br />
            <div class="education">
                <div class="school">
                    Programmer and Designer of an
                    <strong>iOS-based Health Application</strong>, Auburn, AL
                </div>
                <div class="date">Sep 2019 - Dec 2019</div>
            </div>
            <div class="leftmost">
                - Proposed, designed, and developed an iOS-based application in
                Xcode which allows the users to evaluate their health conditions
                through inputs of personal information including height and
                weight.
            </div>
            <div class="leftmost">
                - Participated and contributed to all phases of the project,
                including ideation, design, programming, defect correction, unit
                testing, code review, and deployment planning.
            </div>
            <br />
            <div class="education">
                <div class="school">
                    Programmer and Designer of an
                    <strong>iOS-based OCR Application</strong>, Hangzhou, China
                </div>
                <div class="date">June 2019 - Aug 2019</div>
            </div>
            <div class="leftmost">
                - Implemented open-source deep-learning-based OCR algorithms for
                text recognition to local images and photos.
            </div>
            <div class="leftmost">
                - Trained the OCR model and improved its performance by
                utilizing different open-source datasets such as ICDAR2015 and
                SynthText
            </div>
            <br />
        </div>
        <h3>SKILLS</h3>
        <hr />
        <div class="leftmost">
            <strong>Programming Languages:</strong> Python, iOS development
            (Objective-C, Swift), Java, C, C++, JavaScript, HTML5
        </div>
        <div class="leftmost">
            <strong>Software:</strong> Xcode, Eclipse, iPhone SDK, Netbeans,
            MySQL, PowerBuilder, Postgres, Oracle
        </div>
        <div class="leftmost">
            <strong>Algorithms:</strong> CNN, DBN, RNN, SVM, Decision tree,
            Naïve Bayes, K-Means, Random Forest
        </div>
        <div class="leftmost"><strong>Operation System:</strong> Linux</div>
    </div>
</template>

<style scoped>
h3 {
    text-align: left;
    width: 800px;
}
.totalsize {
    width: 800px;
    text-align: center;
    margin: auto;
}
.education {
    display: flex;
    margin: auto;
    width: 800px;
}

.school {
    width: 500px;
    text-align: left;
}
.date {
    text-align: right;
}
.leftmost {
    text-align: left;
    width: 700px;
}
.bigger {
    font-weight: 900;
}
.eduwidth {
    width: 550px;
}
</style>
