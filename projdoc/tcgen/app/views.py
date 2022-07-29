from django.http import HttpResponse
from django.shortcuts import render
from .models import test

# Create your views here.

def details(request):

   
   
    return render(request, "details.html")

def add(request):

    cname = request.POST["cname"]
    dt1 = request.POST["dt1"]
    cloc = request.POST["cloc"]
    dt1 = request.POST["dt1"]
    dt2 = request.POST["dt2"]
    dt3 = request.POST["dt3"]
    data = {"cname" : cname, "dt1" : dt1, "dt2" : dt2, "dt3" : dt3, "cloc" : cloc}
   
    
    return render(request, "generate.html", {'data' : data})