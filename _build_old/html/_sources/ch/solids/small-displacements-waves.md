(solid-mechanics:intro:small-displacements-waves)=
# Waves in linear elastic homogeneous isotropic media


## Navier-Cauchy equation: displacement formulation of the momentum equation
Momentum balance equation in differential form for continuous media in the small-displacement regime

$$\rho_0 \, \partial_{tt} \mathbf{s} = \rho_0 \, \mathbf{g} + \nabla \cdot \boldsymbol{\sigma} \ .$$

- Introducing the constitutive equation for linear elastic homogeneous isotropic media,

  $$\boldsymbol{\sigma} = 2 \mu \, \boldsymbol{\varepsilon} + \lambda \, \text{tr} \left( \boldsymbol{\varepsilon} \right) \mathbf{I} \ ,$$

- using the definition of the strain tensor

$$\boldsymbol{\varepsilon} = \dfrac{1}{2} \left[ \nabla \mathbf{s} + \nabla^T \mathbf{s} \right] \ ,$$

- and under the assumption of no volume force $\mathbf{g} = \mathbf{0}$,

the momentum equation becomes

$$\begin{aligned}
  \rho_0 \partial_{tt} \mathbf{s} & = \mu \nabla^2 \mathbf{s} + \left( \mu +\lambda \right) \nabla \nabla \cdot \mathbf{s} \ ,
\end{aligned}$$


## Helmholtz decomposition and sum of waves equation for $p$ and $s$ waves
Displacement field can be written using [Helmholtz decomposition](https://en.wikipedia.org/wiki/Helmholtz_decomposition) as the sum of a potential $\mathbf{s}_p = \nabla \phi$ (s.t. $\nabla \times \nabla \phi = \mathbf{0}$) and a divergence-free $\mathbf{s}_s = \nabla \times \mathbf{a}$ (s.t. $\nabla \cdot \nabla \times \mathbf{a} = \mathbf{0}$) part,

$$\mathbf{s} = \mathbf{s}_p + \mathbf{s}_s = \nabla \phi + \nabla \times \mathbf{a} \ .$$

Introducing the last expression in the momentum equation, using vector identity 

$$\nabla^2 \mathbf{v} = \nabla \nabla \cdot \mathbf{v} - \nabla \times \nabla \times \mathbf{v} \ , $$

the equation can be written as

$$\begin{aligned}
  \mathbf{0} 
  & = \rho_0 \partial_{tt} \nabla \phi - (2 \mu + \lambda) \nabla^2 \nabla \phi + \rho_0 \partial_{tt} \nabla \times \mathbf{a} + \mu \nabla^2 \nabla \times \mathbf{a} = \\
  & = \rho_0 \partial_{tt} \mathbf{s}_p - (2 \mu + \lambda) \nabla^2 \mathbf{s}_p + \rho_0 \partial_{tt} \mathbf{s}_s - \mu \nabla^2 \mathbf{s}_s \ ,
\end{aligned}$$

i.e. as the "sum of two wave equations" for the potential part $\mathbf{s}_p$ and the divergence-free part $\mathbf{s}_s$ of the displacement. Speed of propagation of $p$- and $s$-displacement read

$$c_p = \sqrt{\dfrac{2 \mu + \lambda}{\rho_0}} \qquad , \qquad c_s = \sqrt{\dfrac{\mu}{\rho_0}} \ .$$

## Fourier decomposition: $p$ is longitudinal, $s$ is transverse
Using **Fourier decomposition** of fields as sum of harmonic plane waves,

$$\mathbf{s}(\mathbf{r},t) = \sum_{\mathbf{k},\omega} \mathbf{s}_{\mathbf{k},\omega} e^{i\left( \mathbf{k} \cdot \mathbf{r}- \omega t \right)} \ ,$$

it's immediate to prove that the potential part can be associated to a longitudinal perturbation (i.e. with displacement in the same direction of the wave vector $\mathbf{k}$, representing the direction of propagation of  the perturbation, while the divergence-free part can be associated to a transverse perturnation (i.e. with displacement orthogonal to the wave vector $\mathbf{k}$). Helmholtz's decomposition of the field in Fourier domain reads

$$\begin{aligned}
\mathbf{s}(\mathbf{r},t) 
  & = \sum_{\mathbf{k},\omega} \mathbf{s}_{\mathbf{k},\omega} e^{i\left( \mathbf{k} \cdot \mathbf{r}- \omega t \right)} = \\
  & = \sum_{\mathbf{k},\omega} \left( \mathbf{s}^p_{\mathbf{k},\omega} + \mathbf{s}^s_{\mathbf{k}, \omega} \right) e^{i\left( \mathbf{k} \cdot \mathbf{r}- \omega t \right)} = \\
  & = \sum_{\mathbf{k},\omega} \left( i \, \mathbf{k} \phi_{\mathbf{k},\omega} + i \, \mathbf{k} \times \mathbf{a}_{\mathbf{k}, \omega} \right) e^{i\left( \mathbf{k} \cdot \mathbf{r}- \omega t \right)} = \ .
\end{aligned}$$

For each individual harmonic contribution, the potential part is thus proportional, i.e. aligned, to wave vector $\mathbf{k}$,

$$\mathbf{s}^p_{\mathbf{k},\omega} = i \,\mathbf{k} \phi_{\mathbf{k},\omega}  \ ,$$

while the divergence-free is orthogonal, and thus transverse, w.r.t. the direction of wave propagation,

$$\mathbf{k} \cdot \mathbf{s}^s_{\mathbf{k},\omega} = i \, \mathbf{k} \times  \left( \mathbf{k} \times \mathbf{a}_{\mathbf{k}, \omega} \right) = \mathbf{0} \ .$$



