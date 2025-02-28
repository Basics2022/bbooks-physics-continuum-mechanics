(solid-mechanics:intro:small-displacements-statics)=
# Small displacement - statics

- **Labile - Undetermined.**
- **Isostatic - "determined".**
- **Hyperstatic - "overdetermined".**


(solid-mechanics:intro:small-displacements-statics:elastic-medium)=
## Linear isotropic elastic medium

(solid-mechanics:intro:small-displacements-statics:elastic-medium:constitutive-equation)=
### Constitutive equation
An isotropic elastic medium has no prefereed orientation. The most general linear relation between stress tensor $\symbf{\sigma}$ and strain tensor $\symbf{\varepsilon}$, and temperature difference $\Delta T$ w.r.t. a reference temperature, $\Delta T := T - T_0$,

$$\symbf{\sigma} = \mathbf{D} : \symbf{\varepsilon} - \symbf{\beta} \Delta T \ ,$$

for isotropic media involves the rank-$2$ and rank-$4$ isotropic tensors, see {ref}`rank-2-iso`, and {ref}`rank-4-iso`. Since stress tensor $\symbf{\sigma}$ and strain tensor $\symbf{\varepsilon}$ are symmetric the constitutive law for isotropic elastic media reads

$$\symbf{\sigma} = 2 \mu \symbf{\varepsilon} + \lambda \, \text{tr}(\symbf{\varepsilon}) \mathbb{I} - \beta \Delta T \mathbb{I} \ ,$$ (eq:linear-isotropic-elastic)

being $\mu$, $\lambda$ the Lamé coefficients.

Decomposition of tensor in hydrostatic (proportional to $\mathbb{I}$) and deviatoric (traceless) parts reads

$$\symbf{\sigma} = \left( 2 \mu \symbf{\varepsilon} - \frac{2}{3} \mu \, \text{tr}(\varepsilon) \mathbb{I} \right) + \left( \lambda + \frac{2}{3} \mu \right)\text{tr}(\varepsilon) \mathbb{I} - \beta \Delta T \mathbb{I} $$ (eq:linear-isotropic-elastic:iso-dev)

The expression of strain tensor $\symbf{\varepsilon}$ as a function of stress tensor and temperature difference

$$\symbf{\varepsilon} = $$

 can be easily evaluated, using the relation between the traces of the tensors

```{dropdown} Different expression of constitutive laws, and sets of parameters.

Remembering that $\text{tr}(\mathbb{I}) = 3$ in the 3-dimensional space, evaluating the trace of the relation {eq}`eq:linear-isotropic-elastic` provides the relation between the traces of strain and stress tensors and the temeprature difference

$$\text{tr} (\symbf{\sigma}) = \left( 2 \mu + 3 \lambda \right) \text{tr} (\symbf{\varepsilon}) - 3 \beta \Delta T \ , $$

and thus

$$\text{tr} (\symbf{\varepsilon}) = \frac{1}{ 2 \mu + 3 \lambda} \text{tr} (\symbf{\sigma}) + \frac{3 \beta}{ 2 \mu + 3 \lambda} \Delta T \ . $$

Using the relation between traces, it's possible to find $\symbf{\varepsilon}\left(\symbf{\sigma}, \Delta T \right)$,

$$\begin{aligned}
  \symbf{\varepsilon}
  & = \frac{1}{2 \mu} \symbf{\sigma} - \frac{\lambda}{2\mu} \text{tr}(\symbf{\varepsilon}) \mathbb{I} + \frac{\beta}{2 \mu} \Delta T \mathbb{I} = \\
  & = \frac{1}{2 \mu} \symbf{\sigma} - \frac{\lambda}{2\mu} \left[ \frac{1}{2 \mu + 3 \lambda} \text{tr}(\symbf{\sigma}) + \frac{3 \beta}{2 \mu + 3 \lambda} \Delta T \right] \mathbb{I} + \frac{\beta}{2 \mu} \Delta T \mathbb{I} = \\
  & = \frac{1}{2 \mu} \symbf{\sigma} - \frac{\lambda}{2\mu ( 2 \mu + 3 \lambda)} \text{tr}(\symbf{\sigma}) \mathbb{I} + \frac{1}{2 \mu}\left[ 1 - \frac{3 \lambda}{2 \mu + 3 \lambda} \right] \beta \Delta T \mathbb{I} = \\
  & = \frac{1}{2 \mu} \symbf{\sigma} - \frac{\lambda}{2\mu ( 2 \mu + 3 \lambda)} \text{tr}(\symbf{\sigma}) \mathbb{I} + \frac{1}{2 \mu + 3 \lambda}  \beta \Delta T \mathbb{I} \ .
\end{aligned}$$

**Modulo elastico.** Il modulo elastico $E$ è definito dalla relazione

$$\begin{aligned}
  \frac{1}{E} 
  & = \frac{1}{2 \mu} - \frac{\lambda}{2 \mu (2 \mu + 3 \lambda)} = \\
  & = \frac{1}{2 \mu} \frac{2 (\mu + \lambda)}{2 \mu + 3 \lambda} \ ,
\end{aligned}$$

e quindi

$$E = \frac{\mu (2 \mu + 3 \lambda)}{\mu + \lambda}$$

**Modulo di Poisson.** Il modulo di Poisson $\nu$ è definito dalla relazione

$$\frac{\nu}{E} = \frac{\lambda}{2\mu (2 \mu + 3 \lambda)} \ ,$$

e quindi

$$\nu = \frac{\lambda}{2 (\mu + \lambda)}$$

```

```{dropdown} Thermodynamics
:open:

Helmholtz's free energy is the thermodynamic potential $F$ defined w.r.t. temperature $T$ and generalized displacements $\mathbf{X}_i$ as independet variables. Here **unit-volume** relation (<span style="color:red">Explain why! Link to general continuum mechanics, and equations in reference coordinates</span>). Using difference of temperature $\Delta T = T - T_0$ w.r.t. a reference temperature $T_0$ instead of temperature $T$, differential of Helmhtoltz's free energy per unit volume for a linear elastic medium reads

$$d\mathcal{F}(\varepsilon_{ij}, \Delta T) = - \mathcal{S} d \Delta T + \sigma_{ij} d \varepsilon_{ij} \ ,$$ 

so that

$$
\sigma_{ij} = \left( \frac{\partial \mathcal{F}}{\partial \varepsilon_{ij}} \right)_{\mathcal{S}}
\qquad , \qquad
\mathcal{S} = - \left( \frac{\partial \mathcal{F}}{\partial T} \right)_{\varepsilon_{ij}} \ .
$$

Using the constitutive law {eq}`eq:linear-isotropic-elastic` for a linear isotropic elastic medium, here written in Cartesian coordinates as

$$\sigma_{ij} = 2 \mu \varepsilon_{ij} + \lambda \varepsilon_{kk} \delta_{ij} - \beta \Delta T \delta_{ij} \ ,$$

integration w.r.t. $\varepsilon_{ij}$ gives

$$\begin{aligned}
  \mathcal{F}(\varepsilon_{ij}, \Delta T) 
  & = \frac{1}{2} \left( 2  \mu \varepsilon_{ij} \varepsilon_{ij} + \lambda \varepsilon_{kk} \varepsilon_{ll} \right) - \beta \Delta T \varepsilon_{ll} + \mathcal{F}(0, \Delta T) = \\
  & = \frac{1}{2} \left( 2 \mu \symbf{\varepsilon} : \symbf{\varepsilon} + \lambda \left( \text{tr}(\symbf{\varepsilon}) \right)^2 \right) - \beta \Delta T \text{tr}(\symbf{\varepsilon}) + \mathcal{F}(0, \Delta T) \\
\end{aligned}$$ 

being $\mathcal{F}(0, \Delta T) = F(\Delta T)$ a function of $\Delta T$ appearing from integration in $\varepsilon_{ij}$. If you don't trust this, try do evaluate the partial derivative w.r.t. the components of the strain tensor of the last relation.


**Entropy.** Entropy is the parital derivative w.r.t. $T$ of Helmholtz's free energy and, assuming constant parameters, its expression reads

$$\begin{aligned}
  \mathcal{S}(\varepsilon_{ij}, \Delta T) 
  = - \left( \frac{\partial \mathcal{F}}{\partial T} \right)_{\varepsilon_{ij}} 
  = \beta \varepsilon_{ll} - F'(\Delta T) \ .
\end{aligned}$$

**Heat coefficients.** Heat coefficient at constant strain per unit-volume reads

$$C_{\varepsilon_{ij}} := T \left( \frac{\partial \mathcal{S}}{\partial T} \right)_{\varepsilon_{ij}} = - (T_0 + \Delta T) F''(\Delta T) \ .$$

Assuming that heat coefficient $C_{\varepsilon_{ij}}$ is independent from $T$, integration in $\Delta T$ gives

$$C_{\varepsilon_{ij}} \ln \left( 1 + \frac{\Delta T}{T_0} \right) = - F'(\Delta T) + F'(0) \ ,$$

and thus an expression for $F'(\Delta T)$ 

$$F'(\Delta T) = - C_{\varepsilon_{ij}} \ln \left( 1 + \frac{\Delta T}{T_0} \right) + F'(0) \ ,$$

to be inserted in the expression of entropy

$$\mathcal{S}(\varepsilon_{ij}, \Delta T) = \beta \varepsilon_{ll} + C_{\varepsilon_{ij}} \ln \left( 1 + \frac{\Delta T}{T_0} \right) - F'(0) \ ,$$

and $-F'(0) = \mathcal{S}_0$ can be recognized as the entropy per unit volume in the reference condition with $\varepsilon_{ij} = 0$, $\Delta T = 0$. The differential of the last expression reads

$$d \mathcal{S}
 = \beta d \varepsilon_{ll} + \frac{C_{\varepsilon_{ij}}}{T_0} \frac{1}{1 + \frac{\Delta T}{T_0}} \, d T  
 = \beta d \varepsilon_{ll} + \frac{C_{\varepsilon_{ij}}}{T}\, d T  
$$

or

$$dT = \frac{T}{C_{\varepsilon_{ij}}} d \mathcal{S} - \frac{\beta T}{C_{\varepsilon_{ij}}} \, d \varepsilon_{ll}$$

Furhter integration in $\Delta T$ of

$$F'(\Delta T) = - C_{\varepsilon_{ij}} \ln \left( 1 + \frac{\Delta T}{T_0} \right) - \mathcal{S}_0 \ ,$$

gives and expression of funtion $F(\Delta T)$,

$$F(\Delta T) - F(0) = -C_{\varepsilon_{ij}} \left[ (T_0 + \Delta T) \ln \left( 1 + \frac{\Delta T}{T_0} \right) - \Delta T \right] - \mathcal{S}_0 \Delta T \ ,$$

that can be used int he expression of Helmholtz free energy, as an example, as show later.

**Internal energy.** The relation between the internal energy and Hemlholtz free energy $\mathcal{F} = \mathcal{E} - T \mathcal{S}$ allows to find the expression of the internal energy per unit volume of an elastic linear isotropic media,

$$\begin{aligned}
\mathcal{E} 
& = \mathcal{F} + T \mathcal{S} = \\
& = \mu \varepsilon_{ij} \varepsilon_{ij} + \frac{\lambda}{2} \left(  \varepsilon_{kk} \right)^2 - \beta \Delta T \varepsilon_{kk} + F(0) -C_{\varepsilon_{ij}} \left[ (T_0 + \Delta T) \ln \left( 1 + \frac{\Delta T}{T_0} \right) - \Delta T \right] \\
& \quad  - \mathcal{S}_0 \Delta T + (T_0 + \Delta T) \left( \beta \varepsilon_{ll} + C_{\varepsilon_{ij}} \ln \left( 1 + \frac{\Delta T}{T_0} \right) + \mathcal{S}_0 \right) = \\
& = \mu \varepsilon_{ij} \varepsilon_{ij} + \frac{\lambda}{2} \left(  \varepsilon_{kk} \right)^2 + \beta T_0 \varepsilon_{kk} + C_{\varepsilon_{ij}} \Delta T + F(0) + T_0 \mathcal{S}_0  \ ,
\end{aligned}$$

so that the reference internal energy and reference Helmholtz free energy can be recognized as

$$\mathcal{F}_0 = F(0) \qquad , \qquad \mathcal{E}_0 = \mathcal{F}_0 + T_0 \mathcal{S}_0 \ ,$$

In order to write the differential of the internal energy w.r.t. its natural independent variables $\mathcal{E}(\varepsilon_{ij}, \mathcal{S})$, the temperature difference must be written as a function of strain and entropy. Using relation **todo**, and performing derivatives of the composite funciton $\mathcal{E}(\varepsilon_{ij}, \Delta T(\varepsilon_{ij}, \mathcal{S}))$

$$\begin{aligned}
  d \mathcal{E} 
  & = \left( \frac{\partial \mathcal{E}}{\partial \varepsilon_{ij}} \right)_{\Delta T} d \varepsilon_{ij} + \left( \frac{\partial \mathcal{E}}{\partial \Delta T} \right)_{\varepsilon_{ij}} \left[ \left( \frac{\partial \Delta T}{\partial \varepsilon_{ij}} \right)_{\mathcal{S}} d \varepsilon_{ij} + \left( \frac{\partial \Delta T}{\partial \mathcal{S}} \right)_{\varepsilon_{ij}} d \mathcal{S} \right] = \\
  & = \left( 2 \mu \varepsilon_{ij} + \lambda \varepsilon_{kk} \delta_{ij} + \beta T_0 \delta_{ij} \right) d \varepsilon_{ij} + 
   C_{\varepsilon_{ij}} \left[ -\frac{\beta T}{C_{\varepsilon_{ij}}} \delta_{ij} \, d \varepsilon_{ij} + \frac{T}{C_{\varepsilon_{ij}}} \, d \mathcal{S} \right] = \\
  & = \left( 2 \mu \varepsilon_{ij} + \lambda \varepsilon_{kk} \delta_{ij} - \beta \Delta T \delta_{ij} \right) d \varepsilon_{ij} + T \, d \mathcal{S} \ ,
\end{aligned}$$

i.e. we found what we should have expected, i.e.

$$d \mathcal{E} = \sigma_{ij} \, d \varepsilon_{ij} + T \, d\mathcal{S} \ , $$

and thus

$$\begin{aligned}
\sigma_{ij}
 & = \left( \frac{\partial \mathcal{F}}{\partial \varepsilon_{ij}} \right)_{T}
   = \left( \frac{\partial \mathcal{E}}{\partial \varepsilon_{ij}} \right)_{\mathcal{S}} \\
 T & = \left( \frac{\partial \mathcal{E}}{\partial \mathcal{S}} \right)_{\varepsilon_{ij}}\\
 \mathcal{S} & = - \left( \frac{\partial \mathcal{F}}{\partial T} \right)_{\varepsilon_{ij}}\\
\end{aligned}$$

```

```{dropdown} Isothermal and isentropic elastic coefficients
:open:

Assuming small enough $\Delta T = T - T_0$ so that linear approximation of the relation between entropy, temperature and strain holds,

$$\Delta \mathcal{S} = \beta \, \varepsilon_{ll} + \frac{C_{\varepsilon_{ij}}}{T_0} \Delta T \ ,$$

it's possible to write the stress tensor as a function of strain and entropy

$$\begin{aligned}
  \sigma_{ij} 
  & = 2 \mu \varepsilon_{ij} + \lambda \varepsilon_{ll} \delta_{ij} - \beta \Delta T \delta_{ij} = \\
  & = 2 \mu \varepsilon_{ij} + \lambda \varepsilon_{ll} \delta_{ij} - \beta \left[ \frac{T_0}{C_{\varepsilon_{ij}}} \Delta \mathcal{S} - \frac{T_0}{C_{\varepsilon_{ij}}} \beta \, \varepsilon_{ll}  \right] \delta_{ij} = \\
  & = 2 \mu \varepsilon_{ij} + \left( \lambda + \frac{\beta^2 T_0}{C_{\varepsilon_{ij}}} \right) \varepsilon_{ll} \delta_{ij} - \beta \frac{T_0}{C_{\varepsilon_{ij}}} \Delta \mathcal{S} = \\
  & = 2 \mu_s \varepsilon_{ij} + \lambda_s \varepsilon_{ll} \delta_{ij} - \beta \frac{T_0}{C_{\varepsilon_{ij}}} \Delta \mathcal{S} \ .
\end{aligned}$$

having defined Lamé coefficients in isentropic conditions as functions of the cofficients in isothermal conditions,

$$\begin{aligned}
  \lambda_s & = \lambda + \frac{\beta^2 T_0}{C_{\varepsilon_{ij}}} \\
      \mu_s & = \mu
\end{aligned}$$

**Elastic modulus and Poisson ratio.** Starting from the relations

$$\begin{aligned}
  E & = \frac{\mu (2 \mu + 3 \lambda)}{\mu + \lambda} \\
  \frac{E}{\nu} & = \frac{2 \mu (2 \mu + 3 \lambda)}{\lambda} \\
\end{aligned}$$

$$G E + \lambda E = 2 G^2 + 3 G \lambda$$

$$\lambda = \frac{G (E - 2 G)}{ 3G - E }$$

$$\begin{aligned}
  \nu
  & = \frac{E \lambda}{2G(2G+3 \lambda)} = \\
  & = \frac{\lambda}{2G(2G+3 \lambda)} \frac{G (2G + 3\lambda)}{G + \lambda} = \\
  & = \frac{\lambda}{2(G + \lambda)} = \\ 
  & = \frac{G(E-2G)}{3G - E} \frac{1}{2 \left( G + \frac{G(E-2G)}{3G-E} \right)} = \\
  & = \frac{G}{2G} \frac{E-2G}{3G - E} \frac{3G - E}{3G - E + E - 2G } = \\
  & = \frac{1}{2} \frac{E - 2G}{G} \ .
\end{aligned}$$

so that

$$\nu = \frac{E - 2G}{2G} \qquad , \qquad G = \frac{E}{2(1+\nu)}$$

**Compressibility coefficients.**

<!--
$$\begin{aligned}
  K   & = \frac{2}{3} \mu + \lambda \\
  K_s & = \frac{2}{3} \mu_s + \lambda_s = \frac{2}{3} \mu + \lambda + \frac{\beta^2 T_0}{C_{\varepsilon_{ij}}} = K + \frac{\beta^2 T_0}{C_{\varepsilon_{ij}}}
\end{aligned}$$

$$\begin{aligned}
  E_s 
  & = \frac{G_s (2 G_s + 3 \lambda_s)}{G_s + \lambda_s} = \\
  & = \frac{G   (2 G   + 3 \left( \lambda + A \right) )}{G + \lambda + A} = \\
  & = \frac{G+\lambda}{G+\lambda+A} \left[ \frac{G   (2 G   + 3 \left( \lambda + A \right) )}{G + \lambda}  \right] = \\
\end{aligned}$$
-->

```

```{dropdown} Heat capacity, thermal expansion coefficients, compressibility coefficients
:open:

Thermal expansion coefficient reads

$$\alpha_x := \frac{1}{V} \left( \frac{\partial V}{\partial T}\right)_x$$

with $\dfrac{dV}{V} = d \text{tr}(\symbf{\varepsilon})$ for small displacement and strain regime. At constant strain, $d \sigma_{ij} = 0$,

$$\begin{aligned}
  \alpha_{\sigma} 
  & = \left( \dfrac{\partial \varepsilon_{ll}}{\partial T} \right)_{\sigma} = \\
  & = \frac{3 \beta}{2 \mu + 3 \lambda} = \\
  & = 3 \beta \frac{2 G \nu }{E \lambda} = \\
  & = 3 \beta \frac{\nu }{(1+ \nu) \lambda} = \\
  & = 3 \beta \frac{\nu }{(1+ \nu)} \frac{3G-E}{G(E-2G)} = \\
  & = 3 \beta \frac{\nu }{(1+ \nu)} \frac{3-2(1+\nu)}{G\left(2(1+\nu)  -2 \right)} = \\
  & = 3 \frac{\beta}{2G} \frac{\nu }{(1+ \nu)} \frac{1-2\nu}{\nu} = \\
  & = 3 \frac{\beta}{E} (1 - 2 \nu)  \ .
\end{aligned}$$

and thus

$$\beta = \frac{\alpha_{\sigma} E}{3(1-2\nu)}$$

```








<span style="color:red">Fix admonition reference</span>

```{admonition} Isotropic tensor
:name: isotropic-tensor
:class: dropdown

An isotropic tensor is a tensor whose components do not change after a rotation of the vector basis. **todo** *Examples,...*

```

```{admonition} Rank-$2$ isotropic tensor
:name: rank-2-iso
:class: dropdown

The most general expression of a rank-$2$ isotropic tensor is proportional to the rank-$2$ identity tensor, and can be written in a Cartesina basis using the Kroeneker delta,

$$a \mathbf{I} = a \delta_{ij} \hat{e}_i \otimes \hat{e}_j \ .$$

**todo** *Proof*
```

```{admonition} Rank-$4$ isotropic tensor
:name: rank-4-iso
:class: dropdown

The most general expression of a rank-$4$ isotropic tensor can be written using a Cartesian basis as

$$\mathbf{D} = D_{ijkl} \hat{e}_i \otimes \hat{e}_j \otimes \hat{e}_k \otimes \hat{e}_l \ ,$$

where

$$D_{ijkl} = a \delta_{ij} \delta_{kl} + b \delta_{ik} \delta_{jl} + c \delta_{il}\delta_{jk} \ ,$$

i.e. depends on three possible combinations of rank-2 identity tensor, with 3 scalar parameters, $a$, $b$, $c$. In isotropic relation between symmetric tensors, $A_{ij} = A_{ji}$, $B_{kl} = B_{lk}$ only two parameters are enough since

$$\begin{aligned}
  A_{ij} 
  & = D_{ijkl} B_{kl} = \\
  & = \left( a \delta_{ij} \delta_{kl} + b \delta_{ik} \delta_{jl} + c \delta_{il}\delta_{jk} \right) B_{kl} = \\
  & = a \delta_{ij} B_{ll} + b B_{ij} + c  B_{ji} =  & (1) \\
  & = a \delta_{ij} B_{ll} + (b+c) B_{ij} \ ,
\end{aligned}$$

having used (1) the symmetry of tensor $\mathbf{B}$, $B_{ji} = B_{ij}$.

**References.**
- [Fluid Mechanics, R. Fitzpatrick, University of Texas, Austin](https://farside.ph.utexas.edu/teaching/336L/Fluid/node252.html)
- P.G. Hodge, *On Isotropic Cartesian Tensors*, 1961, The American Mathematical Monthly

```



(solid-mechanics:intro:small-displacements-statics:beam)=
## Beam models

(solid-mechanics:intro:small-displacements-statics:beam-structures)=
## Beam structures

