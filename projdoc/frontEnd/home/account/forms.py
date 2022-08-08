from django.forms import ModelForm, Textarea
from .models import Post
from django import forms


class PostForm(ModelForm):
    class Meta:
        model = Post
        # fields = '__all__'
        # fields = ['name', 'country', 'industry', 'duration', 'Privacy', 'Advertisment']
        fields = ['Your_Website_Name', 'Your_Website_Url', 'country', 'Policy_Effective_Date', 'industry', 'Privacy', 'Advertisment', 'gdrp_wording']
        widgets = {
            'Your_Website_Name': forms.TextInput(attrs={'class': 'input-wrapper'}),
            # 'company_address': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'Your_Website_Url': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'country': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'Policy_Effective_Date': forms.TextInput(attrs={'class': 'input-wrapper'}),
            'industry': forms.Select(attrs={'class': 'input-wrapper'}),
            'Privacy': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
            'Advertisment': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
            'gdrp_wording': forms.NullBooleanSelect(attrs={'class': 'input-wrapper'}),
         }