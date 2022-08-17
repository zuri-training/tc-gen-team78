
from base64 import urlsafe_b64decode
import email
from inspect import Parameter
from multiprocessing import context
from django import forms
from django.shortcuts import redirect, render
from django.contrib import messages
from django.contrib.auth.models import User, auth
from .models import Post
from django.views.generic.detail import DetailView
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse
from django.contrib.auth.forms import PasswordResetForm
from django.template.loader import render_to_string
from django.db.models.query_utils import Q
from django.contrib.auth.tokens import default_token_generator
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode

from .forms import PostForm

from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.decorators import login_required

# Create your views here.
def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password1']

        user = auth.authenticate(username=username, password=password)

        if user is not None:
            auth.login(request, user)
            return redirect("userlogged")
        else:
            messages.error(request, 'invalid login credentials')
            return redirect('login')
    else:
        return render(request, 'login.html')

def register(request):
    if request.method == 'POST':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']

        if password1 == password2:
            if User.objects.filter(username=username).exists():
                messages.error(request, 'Username is taken, try another username')
                return redirect ('register')
            elif User.objects.filter(email=email).exists():
                messages.error(request, 'Email already exists, log in!')
                return redirect ('register')
            else:
                user = User.objects.create_user(username=username, password=password1, email=email, first_name=first_name, last_name=last_name)
                user.save();
                messages.success(request, 'Account created')
                return redirect ('login')
        else:
            messages.error(request, 'Password does not match')
            return render(request, 'register.html')
    else:
        return render(request, 'register.html')

def logout(request):
    auth.logout(request)
    return redirect('/')

@login_required(login_url="login")
def userlogged(request):
    
    return render(request, "user-dashboard.html")


def team(request):
    
    return render(request, "team.html")



@login_required(login_url="login")
def new(request):
    if request.user.is_authenticated:
        if request.method == "POST":
            form = PostForm(request.POST)
            # name = request.POST['name']
            # country = request.POST['country']
            # duration = request.POST['duration']
            # industry = request.POST['industry']
            if form.is_valid():
                print('I work')
                instance = form.save(commit=False)
                instance.user = request.user
                instance.save()
                return redirect("/account/template")
        else:
            form = PostForm()
            
        return render(request, "posts/new.html", {"form": form})
    else:
        return redirect('first')

@login_required(login_url="login")
def template(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all()
    }

    # users = User.objects.all()
    

    # return render(request, "posts/template.html")
    return render(request, "posts/template.html", context)

@login_required(login_url="login")
def tcgenerated(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all()
    }

    # users = User.objects.all()
    

    # return render(request, "posts/template.html")
    return render(request, "posts/tcgenerated.html", context)

@login_required(login_url="login")
def temp(request, slug_text):
    
    q = Post.objects.filter(slug = slug_text)
    if q.exists():
        q = q.first()
    else:
        return HttpResponse("Page not found error")

    users = User.objects.all()
    
    # context = {
    #     'users': User.objects.all(),
    #     # 'posts': Post.objects.get(id=  pk_test)
    # }

    # users = User.objects.all()
    

    # return render(request, "posts/template.html")
    return render(request, "posts/temp.html", {'q':q, 'users':users})

@login_required(login_url="login")
def templated(request, slug_text):
    q = Post.objects.filter(slug = slug_text)
    if q.exists():
        q = q.first()
    else:
        return HttpResponse("Page not found error")

    users = User.objects.all()
    
    # context = {
    #     'users': User.objects.all(),
    #     # 'posts': Post.objects.get(id=  pk_test)
    # }

    # users = User.objects.all()
    

    # return render(request, "posts/template.html")
    return render(request, "posts/templated.html", {'q':q, 'users':users})


# class PostDetailView(DetailView):
#     model = Post
#     template_name = 'post_detail.html'

def password_reset_request(request):
    if request.method =='POST':
        password_form = PasswordResetForm(request.POST)
        if password_form.is_valid():
            data = password_form.cleaned_data.get['email']
            user_email = User.objects.filter(Q(email=data))
            if user_email.exists():
                for user in user_email:
                    subject = 'Password Request'
                    email_template_name = 'password_reset/password_reset_subject.txt'
                    parameters = {
                        'email' : user.email,
                        'domain': '127.0.0.1:8080',
                        'site_name': '78tcgen',
                        'uid': urlsafe_base64_encode(force_bytes(user.pk)),
                        'token': default_token_generator.make_token(user),
                        'protocol': 'http',
                    }
                    email = render_to_string(email_template_name, parameters)
                    try:
                        send_mail(subject, email, '', [user.email], fail_silently=False)
                    except:
                        return HttpResponse('invalid Header')
                    return redirect('password_reset_done')
    else:
        password_form = PasswordResetForm()
    context = {
        'password_form': password_form,

    }
    
    return render(request, 'password_reset/password_reset_form.html', context)

def profile(request):
    return render(request, "profile.html")







        
