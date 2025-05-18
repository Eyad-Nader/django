from django.shortcuts import render

def show_books(request):
    return render(request,'books/gad.html')