from django.contrib import messages
from django.shortcuts import redirect, render
from .models import Post

from .forms import PostForm

def new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        name = request.POST['name']
        country = request.POST['country']
        duration = request.POST['duration']
        industry = request.POST['industry']
        if form.is_valid():
            print('I work')
            form.save()
            return redirect("template")
    else:
        form = PostForm()
    return render(request, "posts/new.html", {"form": form})

def template(request):

    # rqts = Post.objects.all()
    rqts = Post.objects.get(pk=8)

    return render(request, "posts/template.html", {"rqts": rqts})
