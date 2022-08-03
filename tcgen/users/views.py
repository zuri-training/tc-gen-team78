
from django.shortcuts import render, redirect
from django.contrib import messages
from .forms import UserRegisterForm
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required


# Create your views here.
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account creation for Username : { username} was successful.') 
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'register.html', {'form': form})

# def ulogin(request):
#     username = request.POST.get('username')
#     passsword = request.POST.get('password')
#     if request.method=="POST":
#         if (User.objects.filter(username=username).exists()):
#             user = auth.authenticate(username=username,passsword=passsword)
#         else:
#             user = User.objects.get(email=username)
#             user = auth.authenticate(username=username,passsword=passsword) 
#         if user is not None:
#             auth.login(request.user)
#             return redirect('home')
#         else:
#             messages.warning(request, 'invalid details')
#             return redirect('home')
#     else:
#         return render(request, 'register.html')
            