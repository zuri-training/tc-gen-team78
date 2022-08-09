from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import usercd

Opt_choice = [
    ('Y', 'Yes'),
    ('N', 'Nes'),
]

class UserCompanyForm(forms.ModelForm):
    # email = forms.EmailField()
    # #cname = forms.TextInput(max_length=100)
    cname = forms.CharField(widget=forms.TextInput)
    q1 = forms.CharField(label='does your comp have a privacy term',
                         widget=forms.RadioSelect(choices=Opt_choice))
    
    class Meta:
        model = usercd
        fields = ['email', 'cname']
       