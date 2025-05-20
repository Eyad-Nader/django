from django.shortcuts import render
from .models import Book

def show_books(request):
    return render(request,'books/gad.html')

####
##def show_details(request):
 ##   book = Book.objects.get(title='Caraval')
  ##  return render(request, 'books/bookpage.html', {'book': book})
###
def show_details(request,bookid):
    book = Book.objects.get(id=bookid)

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


def show_html(request):
    books = Book.objects.all()
    
    # هات الفئات الفريدة
    categories = books.values_list('category', flat=True).distinct()

    # جهز كل فئة مع الكتب الخاصة بيها
    books_by_category = []
    for cat in categories:
        books_in_cat = books.filter(category=cat)
        books_by_category.append({
            'category': cat,
            'books': books_in_cat
        })

    # ابعتها للقالب
    return render(request, 'books/html.html', {'books_by_category': books_by_category})