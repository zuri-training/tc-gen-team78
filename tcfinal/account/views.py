
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
from django.contrib.auth.forms import PasswordChangeForm
from django.template.loader import render_to_string, get_template
from django.urls import reverse_lazy
from django.views.generic import UpdateView, View
from django.contrib.auth.views import PasswordChangeView
from .utils import render_to_pdf
from io import BytesIO
from xhtml2pdf import pisa

from .forms import PostForm, PasswordChangingForm

from django.http import HttpResponse
from django.template import loader
from django.contrib.auth.decorators import login_required

# Create your views here.
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
            messages.error(request, 'Invalid login credentials')
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

def teamdetails(request):
    
    return render(request, "team_page.html")

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
def newtc(request):
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
            
        return render(request, "posts/newtc.html", {"form": form})
    else:
        return redirect('first')

@login_required(login_url="login")
def template(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all(),
    }
    return render(request, "posts/template.html", context)

def tctemplate(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all(),
    }
    return render(request, "posts/tc_template.html", context)

def pptemplate(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all(),
    }
    return render(request, "posts/pp_template.html", context)

@login_required(login_url="login")
def templated(request, slug_text):
    q = Post.objects.filter(slug = slug_text)
    if q.exists():
        q = q.first()
    else:
        return HttpResponse("Page not found error")

    users = User.objects.all()
    return render(request, "posts/templated.html", {'q':q, 'users':users})

def templatedshare(request, slug_text):
    q = Post.objects.filter(slug = slug_text)
    if q.exists():
        q = q.first()
    else:
        return HttpResponse("Page not found error")

    users = User.objects.all()
    return render(request, "posts/templatedshare.html", {'q':q, 'users':users})


def delete_template(request, slug_text):
    post = Post.objects.filter(slug = slug_text)
    post.delete()
    return render(request, "posts/template.html")

def temp2(request, slug_text):
    q = Post.objects.filter(slug = slug_text)
    users = User.objects.all()
    return render(request, "temp2.html", {'q':q})

def profile(request):
    return render(request, "profile.html")

def faq(request):
    return render(request, "faq.html")

def contact(request):
    return render(request, "contact.html")

def draft(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all(),
    }
    return render(request, "draft.html", context)

def ppdraft(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all(),
    }
    return render(request, "pp_draft.html", context)

def tcdraft(request):
    
    context = {
        'users': User.objects.all(),
        'posts': Post.objects.all(),
    }
    return render(request, "tc_draft.html", context)

class PostUpdateView(UpdateView):
    model = Post
    template_name = 'blog/pp-form-business-info.html'

    fields = ['Your_Website_Name', 'Your_Website_Url', 'country', 'Policy_Effective_Date', 'Address', 'industry', 'Privacy', 'Advertisment', 'gdrp_wording', 'Phone', 'Email']
    success_url = reverse_lazy('draft')
   


class PasswordsChangeView(PasswordChangeView):
    form_class = PasswordChangingForm
    success_url: reverse_lazy('password_change_done')

def password_change_done(request):
    return render(request, 'password_reset/password_change_done.html', {})


def profile(request):
    return render(request, "profile.html")

def render_to_pdf(template_src, context_dict={}):
	template = get_template(template_src)
	html  = template.render(context_dict)
	result = BytesIO()
	pdf = pisa.pisaDocument(BytesIO(html.encode("ISO-8859-1")), result)
	if not pdf.err:
		return HttpResponse(result.getvalue(), content_type='application/pdf')
	return None

class ViewPDF(View):
	def get(self, request, *args, **kwargs):

		pdf = render_to_pdf('posts/templatedshare.html')
		return HttpResponse(pdf, content_type='application/pdf')


#Automaticly downloads to PDF file
class DownloadPDF(View):
	def get(self, request, *args, **kwargs):
		
		pdf = render_to_pdf('posts/templated.html')

		response = HttpResponse(pdf, content_type='application/pdf')
		filename = "Invoice_%s.pdf" %("12341231")
		content = "attachment; filename='%s'" %(filename)
		response['Content-Disposition'] = content
		return response










        
