book_name = input("إسم الكتاب:")
path = [input("المرحلة الدراسية:"), input("الصف:"),
        input("الفصل الدراسي"), input("إسم الملف:")]
if path[1] == "الصف الأول":
    file = open("../data/docx books/class1.js", "a")
elif path[1] == "الصف الثاني":
    file = open("../data/docx books/class2.js")
elif path[1] == "الصف الثالث":
    file = open("../data/docx books/class3.js")
elif path[1] == "الصف الرابع":
    file = open("../data/docx books/class4.js")
elif path[1] == "الصف الخامس":
    file = open("../data/docx books/class5.js")
elif path[1] == "الصف السادس":
    file = open("../data/docx books/class6.js")
elif path[1] == "الصف السابع":
    file = open("../data/docx books/class7.js")
elif path[1] == "الصف الثامن":
    file = open("../data/docx books/class8.js")
elif path[1] == "الصف التاسع":
    file = open("../data/docx books/class9.js")
elif path[1] == "الصف العاشر":
    file = open("../data/docx books/class10.js")
elif path[1] == "الصف الحادي عشر":
    file = open("../data/docx books/class11.js")
elif path[1] == "الصف الثاني عشر":
    file = open("../data/docx books/class12.js")
else:
    print("حدث خطء ما")
file.write("addClassContent\(\""+book_name+"\)")
file.close()
