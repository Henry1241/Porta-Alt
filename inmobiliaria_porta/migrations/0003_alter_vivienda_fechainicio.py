# Generated by Django 5.0.4 on 2024-05-08 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('inmobiliaria_porta', '0002_rename_viviendas_vivienda'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vivienda',
            name='fechaInicio',
            field=models.DateField(),
        ),
    ]