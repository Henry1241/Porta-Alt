from django import forms
from .models import *
class ViviendaForm(forms.Form):
    fechaInicio = forms.DateField(label='Fecha Inicio', widget=forms.DateInput(attrs={'type': 'date'}))
    fechaTermino = forms.DateField(label='Fecha Fin', widget=forms.DateInput(attrs={'type': 'date'}))
    titulo = forms.CharField(label='Título', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el título de la propiedad'}))
    cometario = forms.CharField(label='Comentario', widget=forms.Textarea(attrs={'maxlength': 800, 'placeholder': 'Escribe un comentario sobre la propiedad'}))
    tipoVivienda = forms.ChoiceField(label='Tipo de vivienda', choices=[('Departamento', 'Departamento'), ('Vivienda', 'Vivienda')])

    usoActual = forms.CharField(label='Uso Actual', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el uso actual de la propiedad'}))
    usoPermitido = forms.CharField(label='Uso Permitido', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el uso permitido de la propiedad'}))
    condicionFisica = forms.CharField(label='Condición Física', widget=forms.Textarea(attrs={'maxlength': 800, 'placeholder': 'Describe la condición física de la propiedad'}))
    claseInmueble = forms.CharField(label='Clase de Inmueble', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la clase de inmueble de la propiedad'}))
    numeroFrentes = forms.IntegerField(label='Número de Frentes', widget=forms.NumberInput(attrs={'min': 0}))
    medidaTerreno = forms.CharField(label='Medida del Terreno', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la medida de la propiedad'}))
    m2Terreno = forms.CharField(label='M2 del Terreno', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe los m2 de la propiedad'}))
    construccionN1 = forms.CharField(label='Construcción N1', max_length=100, widget=forms.TextInput(attrs={'placeholder': '8'}))
    construccionN2 = forms.CharField(label='Construcción N2', max_length=100, widget=forms.TextInput(attrs={'placeholder': '8'}))
    construccionN3 = forms.CharField(label='Construcción N3', max_length=100, widget=forms.TextInput(attrs={'placeholder': '8'}))
    gravamen = forms.CharField(label='Gravamen', max_length=100, widget=forms.TextInput(attrs={'placeholder': '8'}))
    valorGravamen = forms.CharField(label='Valor de Gravamen', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el valor del gravamen'}))
    valorAvaluo = forms.CharField(label='Valor según Avalúo', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el valor según avalúo'}))
    operacion = forms.CharField(label='Operación', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la operación'}))
    condicionPago = forms.CharField(label='Condición de Pago', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la condición de pago'}))
    escrituracion = forms.CharField(label='Escrituración', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la escrituración'}))
    avaluo = forms.CharField(label='Avalúo', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el avalúo de la propiedad'}))
    impuestos = forms.CharField(label='Impuestos', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe los impuestos de la propiedad'}))
    otros = forms.CharField(label='Otros', widget=forms.Textarea(attrs={'maxlength': 400, 'placeholder': 'Escribe otros detalles de la propiedad'}))
    total = forms.CharField(label='Total', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el total de la propiedad'}))

    precioVenta = forms.CharField(label='Precio de Venta', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el precio de venta de la propiedad'}))
    precioRenta = forms.CharField(label='Precio de Renta', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el precio de renta de la propiedad'}))
    precioMinimo = forms.CharField(label='Precio Mínimo', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el precio mínimo de la propiedad'}))
    precioPromedio = forms.CharField(label='Precio Promedio', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el precio promedio de la propiedad'}))
    precioMaximo = forms.CharField(label='Precio Máximo', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el precio máximo de la propiedad'}))
    comision1 = forms.CharField(label='Comisión1', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la comisión de la propiedad'}))
    ganancia1 = forms.CharField(label='Ganancia1', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la ganancia de la propiedad'}))
    comision2 = forms.CharField(label='Comisión2', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la comisión de la propiedad'}))
    ganancia2 = forms.CharField(label='Ganancia2', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe la ganancia de la propiedad'}))

    tipoDisponibilidad = forms.ChoiceField(label='Tipo de Disponibilidad', choices=[('Disponibilidad', 'Disponibilidad'), ('Exclusividad', 'Exclusividad')])

    empresa = forms.CharField(label='Empresa', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la empresa'}))
    agente = forms.CharField(label='Agente', max_length=50, widget=forms.TextInput(attrs={'placeholder': 'Escribe el agente'}))
    propietario = forms.CharField(label='Propietario', max_length=100, widget=forms.TextInput(attrs={'placeholder': 'Escribe el propietario'}))
    claveCastratal = forms.CharField(label='Clave Catastral', max_length=30, widget=forms.TextInput(attrs={'placeholder': 'Escribe la clave catastral'}))
    lote = forms.CharField(label='Lote', max_length=30, widget=forms.TextInput(attrs={'placeholder': 'Escribe el lote'}))
    manzana = forms.CharField(label='Manzana', max_length=30, widget=forms.TextInput(attrs={'placeholder': 'Escribe la manzana'}))
    cuentaAgua = forms.BooleanField(label='Cuenta de Agua', required=False)
    ocultarDir = forms.BooleanField(label='Ocultar Dirección', required=False)
    aceptaInfonavid = forms.BooleanField(label='Acepta Infonavit', required=False)
    aceptaFovisste = forms.BooleanField(label='Acepta Fovisste', required=False)

    propietario = forms.CharField(label='Propietario', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe al propietario'}))
    claveCastratal = forms.CharField(label='ClaveCastratal', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la clave castratal'}))
    lote = forms.CharField(label='Lote', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el lote'}))
    manzana = forms.CharField(label='Manzana', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la manzana'}))
    cuentaAgua = forms.BooleanField(label='Cuenta con Agua', required=False)
    autosEst = forms.IntegerField(label='Autos Estacionados', widget=forms.NumberInput(attrs={'min': 0}))
    autosIndep = forms.IntegerField(label='Autos Independientes', widget=forms.NumberInput(attrs={'min': 0}))
    estacionamiento = forms.CharField(label='Estacionamiento', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el estacionamiento'}))
    cocheraElectrica = forms.CharField(label='Cochera Electrica', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la cochera electrica'}))
    patio = forms.CharField(label='Patio', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el patio'}))
    asador = forms.CharField(label='Asador', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el asador'}))
    fuentes = forms.CharField(label='Fuentes', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la fuente'}))
    jacuzzi = forms.CharField(label='Jacuzzi', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el jacuzzi'}))
    alberca = forms.CharField(label='Alberca', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la alberca'}))
    jardin = forms.CharField(label='Jardin', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el jardin'}))
    bodega = forms.CharField(label='Bodega', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la bodega'}))
    cisterna = forms.CharField(label='Cisterna', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la cisterna'}))
    tinaco = forms.CharField(label='Tinaco', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el tinaco'}))
    acCentral = forms.BooleanField(label='Aire central', required=False)
    proteccionVentana = forms.BooleanField(label='Proteccion ventana', required=False)
    persianaCortina = forms.BooleanField(label='Persiana cortina', required=False)
    hidroneumatico = forms.BooleanField(label='Hidroneumatico', required=False)
    amueblado = forms.BooleanField(label='Amueblado', required=False)
    piso1 = forms.CharField(label='Piso1', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el piso'}))
    piso2 = forms.CharField(label='Piso2', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el piso'}))
    piso3 = forms.CharField(label='Piso3', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el piso'}))
    alarma = forms.BooleanField(label='Alarma', required=False)
    uriGoogleMaps = forms.CharField(label='Urigooglemaps', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe '}))
    cocinaIntegral = forms.CharField(label='Cocina Integral', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la cocina integral'}))
    vitropiso = forms.CharField(label='Vitropis', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el vitropiso'}))
    closet = forms.CharField(label='Closet', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el closet'}))
    barda = forms.CharField(label='barda', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la barda'}))
    patioEncementado = forms.BooleanField(label='Patio encementado', required=False)
    equipada = forms.CharField(label='Equipada', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la equipada'}))
    pais = forms.CharField(label='Pais', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el pais'}))
    estado = forms.CharField(label='Estado', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el estado'}))
    municipio = forms.CharField(label='Municipio', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el municipio'}))
    ciudad = forms.CharField(label='Ciudad', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la ciudad'}))
    colonia = forms.CharField(label='Colonia', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la colonia'}))
    codigoPostal = forms.CharField(label='Codigo postal', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el codigo postal'}))
    calle = forms.CharField(label='Calle', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la calle'}))
    numExterior = forms.CharField(label='Num exterior', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el numero exterior'}))
    numInterior = forms.CharField(label='Num interior', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el numero interior'}))
    entreCalle1 = forms.CharField(label='Entre calle1', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la entre calle'}))
    entreCalle2 = forms.CharField(label='Entre callle2', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la entre calle'}))
    nombreComplejo = forms.CharField(label='Nombre complejo', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el numero del complejo'}))
    escrituracion = forms.CharField(label='Escrituracion', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe la escrituracion'}))
    avaluo = forms.CharField(label='Avaluo', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el avaluo'}))
    impuestos = forms.CharField(label='Impuestos', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe los impuestos'}))
    otros = forms.CharField(label='Otros', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe '}))
    total = forms.CharField(label='Total', max_length=60, widget=forms.TextInput(attrs={'placeholder': 'Escribe el total'}))
    imagen = forms.ImageField(label='Imagen')
    class Meta:
        model = vivienda
        fields = ['fechaInicio', 'fechaTermino', 'empresa', 'agente', 'ocultarDir', 'exclusivo',
                'titulo', 'comentario', 'tipoVivienda', 'usoActual', 'usoPermitido', 'condicionFisica',
                'precioVenta', 'precioRenta', 'precioMinimo', 'precioPromedio', 'precioMaximo',
                'comision1', 'ganancia1', 'comision2', 'ganancia2', 'disponibilidad', 'claseInmueble',
                'numeroFrentes', 'medidaTerreno', 'm2Terreno', 'construccionN1', 'construccionN2',
                'construccionN3', 'gravamen', 'valorGravamen', 'valorSegunAvaluo', 'operacion',
                'condicionPago', 'aceptaInfonavit', 'aceptaFovisste', 'propietario', 'claveCatastral',
                'lote', 'manzana', 'cuentaAgua', 'autosEst', 'autosIndep', 'estacionamiento',
                'cocheraElectrica', 'patio', 'asador', 'fuentes', 'jacuzzi', 'alberca', 'jardin',
                'bodega', 'cisterna', 'tinaco', 'acCentral', 'proteccionVentana', 'persianaCortina',
                'hidroneumatico', 'amueblado', 'piso1', 'piso2', 'piso3', 'alarma', 'uriGoogleMaps',
                'cocinaIntegral', 'vitropiso', 'closet', 'barda', 'patioEncementado', 'equipada',
                'pais', 'estado', 'municipio', 'ciudad', 'colonia', 'codigoPostal', 'calle',
                'numExterior', 'numInterior', 'entreCalle1', 'entreCalle2', 'nombreComplejo',
                'escrituracion', 'avaluo', 'impuestos', 'otros', 'total', 'imagen']