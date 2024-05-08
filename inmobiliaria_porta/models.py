from django.db import models

# Create your models here.
class empleados(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.TextField()

class vivienda(models.Model):
    id = models.AutoField(primary_key=True)
    fechaInicio = models.DateField()
    fechaTermino = models.DateField()
    empresa = models.CharField(max_length=100)
    agente = models.CharField(max_length=100)
    ocultarDir = models.BooleanField()
    exclusivo = models.CharField(max_length=100)
    titulo = models.CharField(max_length=100)
    cometario = models.CharField(max_length=100)
    tipoVivienda = models.CharField(max_length=100, default='Sin especificar')
    usoActual = models.CharField(max_length=100)
    usoPermitido = models.CharField(max_length=100)
    condicionFisica = models.CharField(max_length=100)
    precioVenta = models.CharField(max_length=100)
    precioRenta = models.CharField(max_length=100)
    precioMinimo = models.CharField(max_length=100)
    precioPromedio = models.CharField(max_length=100)
    precioMaximo = models.CharField(max_length=100)
    comision1 = models.CharField(max_length=100)
    ganancia1 = models.CharField(max_length=100)
    comision2 = models.CharField(max_length=100)
    ganancia2 = models.CharField(max_length=100)
    disponibilidad = models.CharField(max_length=100, default='Sin especificar')
    claseInmueble = models.CharField(max_length=100)
    numeroFrentes = models.IntegerField()
    medidaTerreno = models.CharField(max_length=100)
    m2Terreno = models.CharField(max_length=100)
    construccionN1 = models.CharField(max_length=100)
    construccionN2 = models.CharField(max_length=100)
    construccionN3 = models.CharField(max_length=100)
    gravamen = models.CharField(max_length=100)
    valorGravamen = models.CharField(max_length=100)
    valorSegunAvaluo = models.CharField(max_length=100)
    operacion = models.CharField(max_length=100)
    condicionPago = models.CharField(max_length=100)
    aceptaInfonavit = models.BooleanField()
    aceptaFovisste = models.BooleanField()
    propietario = models.CharField(max_length=100)
    claveCastratal = models.CharField(max_length=100)
    lote = models.CharField(max_length=100)
    manzana = models.CharField(max_length=100)
    cuentaAgua = models.BooleanField()
    autosEst = models.IntegerField()
    autosIndep = models.IntegerField()
    estacionamiento = models.CharField(max_length=100)
    cocheraElectrica = models.CharField(max_length=100)
    patio = models.CharField(max_length=100)
    asador = models.CharField(max_length=100)
    fuentes = models.CharField(max_length=100)
    jacuzzi = models.CharField(max_length=100)
    alberca = models.CharField(max_length=100)
    jardin = models.CharField(max_length=100)
    bodega = models.CharField(max_length=100)
    cisterna = models.CharField(max_length=100)
    tinaco = models.CharField(max_length=100)
    acCentral = models.BooleanField()
    proteccionVentana = models.BooleanField()
    persianaCortina = models.BooleanField()
    hidroneumatico = models.BooleanField()
    amueblado = models.BooleanField()
    piso1 = models.CharField(max_length=100)
    piso2 = models.CharField(max_length=100)
    piso3 = models.CharField(max_length=100)
    alarma = models.BooleanField()
    uriGoogleMaps = models.CharField(max_length=100)
    cocinaIntegral = models.CharField(max_length=100)
    vitropiso = models.CharField(max_length=100)
    closet = models.CharField(max_length=100)
    barda = models.CharField(max_length=100)
    patioEncementado = models.BooleanField()
    equipada = models.CharField(max_length=100)
    pais = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    municipio = models.CharField(max_length=100)
    ciudad = models.CharField(max_length=100)
    colonia = models.CharField(max_length=100)
    codigoPostal = models.CharField(max_length=100)
    calle = models.CharField(max_length=100)
    numExterior = models.CharField(max_length=100)
    numInterior = models.CharField(max_length=100)
    entreCalle1 = models.CharField(max_length=100)
    entreCalle2 = models.CharField(max_length=100)
    nombreComplejo = models.CharField(max_length=100)
    escrituracion = models.CharField(max_length=100)
    avaluo = models.CharField(max_length=100)
    impuestos = models.CharField(max_length=100)
    otros = models.CharField(max_length=100)
    total = models.CharField(max_length=100)
    imagen = models.CharField(max_length=400)

    def __str__(self):
        return self.titulo
