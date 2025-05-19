from django.shortcuts import render
from .models import Book

def show_books(request):
    return render(request,'books/gad.html')

####
##def show_details(request):
 ##   book = Book.objects.get(title='Caraval')
  ##  return render(request, 'books/bookpage.html', {'book': book})
###
def show_details(request):
    book = Book.objects.get(title='Caraval')

    # Get username from session
    username = request.session.get('username')
    if username:
        print("Logged-in user:", username)
    else:
        print("No user logged in")

    return render(request, 'books/bookpage.html', {
        'book': book,
        'username': username  # Pass to template if needed
    })



def some_view(request):
    username = request.session.get('username')
    if username:
        print("Logged-in user:", username)
    else:
        print("No user logged in")
