from django.shortcuts import render, redirect
from .models import Uuser

def show_starting(request):
    return render(request,'authentication/starting.html')


def show_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = Uuser.objects.get(email=email, password=password)
            print("User found:", user)

            # Save username and any other info you need
            request.session['username'] = user.username
            request.session['user_email'] = user.email
            request.session['is_admin'] = user.admin

            if user.admin:
                return redirect('mainadmin') 
            else:
                return redirect('books') 
        except Uuser.DoesNotExist:
            print("User not found")
            return render(request, 'authentication/login.html', {
                'error': 'Email or password is incorrect'
            })

    return render(request, 'authentication/login.html')
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = Uuser.objects.get(email=email, password=password)
            print("User found:", user)

            # Save user ID in session
            request.session['user_id'] = user.id
            request.session['user_name'] = user.username  # optional, for display

            if user.admin:
                return redirect('mainadmin') 
            else:
                return redirect('books') 
        except Uuser.DoesNotExist:
            print("User not found")
            return render(request, 'authentication/login.html', {
                'error': 'Email or password is incorrect'
            })

    return render(request, 'authentication/login.html')
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            user = Uuser.objects.get(email=email, password=password)
            print("User found:", user)


            if user.admin:
                return redirect('mainadmin') 
            else:
                return redirect('books') 
        except Uuser.DoesNotExist:
            print("User not found")
            return render(request, 'authentication/login.html', {
                'error': 'البريد الإلكتروني أو كلمة المرور غير صحيحة'
            })
    else:
        print("Not POST")

    return render(request, 'authentication/login.html')

def show_signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        role = request.POST.get('choice')  

        is_admin = True if role == 'admin' else False

        # Create a new user instance
        new_user = Uuser(
            username=first_name + last_name,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            admin=is_admin
        )
        new_user.save()
    else:
        print("not post")
    return render(request, 'authentication/try.html')


def show_reset(request):
    return render(request,'authentication/reset.html')