import csv
file = open("data.csv", "a")
name = input("الإسم الثلاثي:")
age = input("العمر:")
eemail = input("البريد الإلكتروني:")
wrighter = csv.writer(file)
wrighter.writerow([name, age, eemail])
file.close()
