(solid-mechanics:intro:small-displacements-statics-beam-weak-form-general)=
# Small displacement - Statics - Weak formulation and "Energy" theorems for generic beam structures

In this section, theorems for elastic structures are specialized for beam structures. 

**todo** Beam model used here...

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:strong)=
## Strong formulation of the problem

**Indefinite equilibrium.** External distributed loads are equilibrated by internal actions, resultant of stress field on beam sections.

$$\begin{aligned}
  \mathbf{0} & = \mathbf{F}' + \mathbf{f} \\
  \mathbf{0} & = \mathbf{M}' + \hat{\mathbf{z}} \times \mathbf{F} + \mathbf{m} \\
\end{aligned}$$

**Kinematics.** Displacement

$$\mathbf{s}(x,y,z) = \mathbf{s}_P(z) - \mathbf{r}_P(x,y) \times \boldsymbol\theta(z) + \mathbf{w}(x,y,z)$$

Strain

$$\begin{aligned}
    \varepsilon_{zz} & = s'_{Pz} - x \theta'_{y} + y \theta'_{x} + w_{z/z} \\
    \varepsilon_{xx} & = w_{x/x} \\
    \varepsilon_{yy} & = w_{y/y} \\
  2 \varepsilon_{zx} & = s'_{Px} - \theta_y - y \theta'_z + w_{x/z} + w_{z/x} \\
  2 \varepsilon_{zy} & = s'_{Py} + \theta_x - x \theta'_z + w_{y/z} + w_{z/y} \\
  2 \varepsilon_{xy} & = w_{x/y} + w_{y/x} \\
\end{aligned}$$

$$\begin{aligned}
  \begin{bmatrix} \gamma_{zx} \\ \gamma_{zy} \\ \varepsilon_{z} \end{bmatrix}
  & = \mathbf{s}'_{P} - \mathbf{r}_P \times \boldsymbol\theta' + \hat{\mathbf{z}} \times \boldsymbol\theta + \mathbf{v}_1(w_{i/j}) \\
  \begin{bmatrix} \gamma_{xy} \\ \varepsilon_{xx} \\ \varepsilon_{yy} \end{bmatrix}
  & = \mathbf{v}_2(w_{i/j})
\end{aligned}$$

**Constitutive equations.** Under the assumptions ... (kinematic assumptions, decoupling,...), 

$$\begin{aligned}
  \mathbf{F}(z) & := \int_{A(z)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma = \int_{A(z)} \boldsymbol{\sigma}_z \\
  \mathbf{M}(z) & := \int_{A(z)} \mathbf{r}_P \times \hat{\mathbf{n}} \cdot \boldsymbol\sigma = \int_{A(z)} \mathbf{r}_P \times \boldsymbol\sigma_z =
\end{aligned}$$

$$\begin{aligned}
  \boldsymbol\sigma_z = \begin{bmatrix} \sigma_{zx} \\ \sigma_{zy} \\ \sigma_{zz} \end{bmatrix} 
  & = \mathbf{D}_1 \begin{bmatrix} \gamma_{zx} \\ \gamma_{zy} \\ \varepsilon_{zz} \end{bmatrix} + \mathbf{D}_2 \begin{bmatrix}  \gamma_{xy} \\ \varepsilon_{xx} \\ \varepsilon_{yy} \end{bmatrix} - \boldsymbol{\beta} \Delta T = \\ 
  & = \mathbf{D}_1 \left( \mathbf{s}'_{P} - \mathbf{r}_P \times \boldsymbol\theta' + \hat{\mathbf{z}} \times \boldsymbol\theta + \mathbf{v}_1(w_{i/j}) \right) + \mathbf{D}_2 \mathbf{v}_2(w_{i/j}) - \boldsymbol{\beta} \Delta T
\end{aligned}$$

$$\begin{aligned}
  \mathbf{F} & = \mathbf{K}_{fs} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{f\theta} \boldsymbol\theta' \\
  \mathbf{M} & = \mathbf{K}_{ms} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{m\theta} \boldsymbol\theta' \ ,
\end{aligned}$$

with $\mathbf{K}_{ms} = \mathbf{K}_{f\theta}$.

```{dropdown} Null contribution of warping and transverse strain to internal force and moment

No contribution of warping to internal actions

$$\int_A \mathbf{D}_1 \mathbf{v}_1 = \dots = \mathbf{0} \ .$$

```

**Bernoulli beam.** If Bernoulli kinematic assumption

$$\begin{aligned}
  \left( \mathbb{I} - \hat{\mathbf{z}} \otimes \hat{\mathbf{z}} \right) \cdot \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) = \mathbf{0} \ ,
\end{aligned}$$

holds, ...


(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak)=
## Weak formulations of the problem

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:equilibrium)=
### Weak formulation of equilibrium conditions

$\forall \mathbf{u}(z), \ \mathbf{v}(z)$,

$$\begin{aligned}
  0 
  & = \int_{\ell} \left\{ \mathbf{u} \cdot \left( \mathbf{F}' + \mathbf{f} \right) + \mathbf{v} \cdot \left( \mathbf{M}' + \hat{\mathbf{z}} \times \mathbf{F} + \mathbf{m} \right) \right\} = \\
  & = - \int_{\ell} \left\{ ( \mathbf{u}' + \hat{\mathbf{z}} \times \mathbf{v} ) \cdot \mathbf{F} + \mathbf{v}' \cdot \mathbf{M} \right\} + \int_{\ell} \left\{  \mathbf{u} \cdot \mathbf{f} + \mathbf{v} \cdot \mathbf{m} \right\} + \left. \left[ \mathbf{u} \cdot \mathbf{F} + \mathbf{v} \cdot \mathbf{M} \right] \right|_{\partial \ell} \ ,
\end{aligned}$$

having exploited the properties of the mixed vector product. If $\mathbf{u}$, $\mathbf{v}$ respectively represent a displacement and a rotation field $\mathbf{u} = \widetilde{\mathbf{s}}$, $\mathbf{v} = \widetilde{\boldsymbol\theta}$,

$$\begin{aligned}
  0 
  & = - \int_{\ell} \left\{ ( \widetilde{\mathbf{s}}' + \hat{\mathbf{z}} \times \widetilde{\boldsymbol{\theta}} ) \cdot \mathbf{F} + \widetilde{\boldsymbol{\theta}}' \cdot \mathbf{M} \right\} + \int_{\ell} \left\{  \widetilde{\mathbf{s}} \cdot \mathbf{f} + \widetilde{\boldsymbol\theta} \cdot \mathbf{m} \right\} + \left. \left[ \widetilde{\mathbf{s}} \cdot \mathbf{F} + \widetilde{\boldsymbol{\theta}} \cdot \mathbf{M} \right] \right|_{\partial \ell} \\
\end{aligned}$$

If the constitutive equation is introduced to use the kinematic variables as the independent variables the symmetry of this formulation of the elastic problem naturally arises

$$\begin{aligned}
  0 
  & = - \int_{\ell} \left\{ ( \widetilde{\mathbf{s}}' + \hat{\mathbf{z}} \times \widetilde{\boldsymbol{\theta}} ) \cdot \left[ \mathbf{K}_{fs} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{f\theta} \boldsymbol\theta' \right] + \widetilde{\boldsymbol{\theta}}' \cdot \left[ \mathbf{K}_{ms} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{m\theta} \boldsymbol\theta'  \right] \right\} + \int_{\ell} \left\{  \widetilde{\mathbf{s}} \cdot \mathbf{f} + \widetilde{\boldsymbol\theta} \cdot \mathbf{m} \right\} + \left. \left[ \widetilde{\mathbf{s}} \cdot \mathbf{F} + \widetilde{\boldsymbol{\theta}} \cdot \mathbf{M} \right] \right|_{\partial \ell} \\
\end{aligned}$$


(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:congruence)=
### Weak formulation of congruence conditions

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:pvw)=
### Principle of virtual work

...test functions: variations...the problem can be recast as the principle of stationariety of total potential energy

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:pcvw)=
### Principle of complementary virtual work

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:stationariety-potential)=
### Principle of stationariety of total potential energy

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:stationariety-potential-complementary)=
### Principle of stationariety of total complementary potential energy

