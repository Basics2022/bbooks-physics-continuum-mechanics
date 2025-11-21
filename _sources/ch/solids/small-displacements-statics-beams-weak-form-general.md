(solid-mechanics:intro:small-displacements-statics-beam-weak-form-general)=
# General elastic beam structures

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
  \boldsymbol{\varepsilon}_z & := \begin{bmatrix} \gamma_{zx} \\ \gamma_{zy} \\ \varepsilon_{z} \end{bmatrix}
  = \mathbf{s}'_{P} - \mathbf{r}_P \times \boldsymbol\theta' + \hat{\mathbf{z}} \times \boldsymbol\theta + \mathbf{v}_1(w_{i/j}) \\
  \boldsymbol{\varepsilon}_2 & := \begin{bmatrix} \gamma_{xy} \\ \varepsilon_{xx} \\ \varepsilon_{yy} \end{bmatrix}
  = \mathbf{v}_2(w_{i/j})
\end{aligned}$$

**Constitutive equations.** Under the assumptions ... (kinematic assumptions, decoupling,...), 

$$\begin{aligned}
  \mathbf{F}(z) & := \int_{A(z)} \hat{\mathbf{n}} \cdot \boldsymbol\sigma = \int_{A(z)} \boldsymbol{\sigma}_z \\
  \mathbf{M}(z) & := \int_{A(z)} \mathbf{r}_P \times \hat{\mathbf{n}} \cdot \boldsymbol\sigma = \int_{A(z)} \mathbf{r}_P \times \boldsymbol\sigma_z =
\end{aligned}$$

$$\begin{aligned}
  \boldsymbol\sigma_z := \begin{bmatrix} \sigma_{zx} \\ \sigma_{zy} \\ \sigma_{zz} \end{bmatrix} 
  & = \mathbf{C}_1 \cdot \boldsymbol{\varepsilon}_z + \mathbf{C}_2 \cdot \boldsymbol{\varepsilon}_2 - \mathbf{b} \Delta T = \\
  & = \mathbf{C}_1 \cdot \begin{bmatrix} \gamma_{zx} \\ \gamma_{zy} \\ \varepsilon_{zz} \end{bmatrix} + \mathbf{C}_2 \cdot  \begin{bmatrix}  \gamma_{xy} \\ \varepsilon_{xx} \\ \varepsilon_{yy} \end{bmatrix} - \mathbf{b} \Delta T = \\ 
  & = \mathbf{C}_1 \cdot \left( \mathbf{s}'_{P} - \mathbf{r}_P \times \boldsymbol\theta' + \hat{\mathbf{z}} \times \boldsymbol\theta + \mathbf{v}_1(w_{i/j}) \right) + \mathbf{D}_2 \cdot \mathbf{v}_2(w_{i/j}) - \mathbf{b} \Delta T
\end{aligned}$$

Neglecting (*or evaluating and finding that their contribution is zero*) the contribution of $\boldsymbol{\varepsilon}_2$,

$$\begin{aligned}
  \mathbf{F}
  & = \int_{A} \left\{ \mathbf{C}_1 \boldsymbol\varepsilon_z - \mathbf{b} \Delta T \right\} = \\
  & = \int_{A} \mathbf{C}_1 ( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta ) - \int_A \mathbf{C}_1 \mathbf{r}_{\times} \boldsymbol\theta' - \int_A \mathbf{b} \Delta T = \\
  & = \mathbf{K}_{fs} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{f\theta} \boldsymbol\theta'-\mathbf{b}_f \Delta T \\
  \mathbf{M}
  & = \int_{A} \mathbf{r}_{\times} \left\{ \mathbf{C}_1 \boldsymbol\varepsilon_z - \mathbf{b} \Delta T \right\} = \\
  & = \int_{A} \mathbf{r}_{\times} \mathbf{C}_1 ( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta ) - \int_A \mathbf{r}_{\times} \mathbf{C}_1 \mathbf{r}_{\times} \boldsymbol\theta' - \int_A \mathbf{r}_{\times} \mathbf{b} \Delta T = \\
  & = \mathbf{K}_{ms} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{m\theta} \boldsymbol\theta'- \mathbf{b}_m \Delta T \ ,
\end{aligned}$$

with $\mathbf{K}_{ms} = \mathbf{K}_{f\theta}$, as $\mathbf{C}_1 = \mathbf{C}_1^T$ and $\mathbf{r}_{\times} = - \mathbf{r}_{\times}^{\ T}$.

$$\begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} = \begin{bmatrix} \mathbf{K}_{11} & \mathbf{K}_{12} \\ \mathbf{K}_{21} & \mathbf{K}_{22}  \end{bmatrix} \begin{bmatrix} \mathbf{s}'+\hat{\mathbf{z}} \times \boldsymbol\theta \\ \boldsymbol\theta' \end{bmatrix} - \begin{bmatrix} \mathbf{b}_1 \\ \mathbf{b}_2 \end{bmatrix} \Delta T$$

$$\begin{bmatrix} \mathbf{s}'+\hat{\mathbf{z}} \times \boldsymbol\theta \\ \boldsymbol\theta' \end{bmatrix} = \begin{bmatrix} \mathbf{S}_{11} & \mathbf{S}_{12} \\ \mathbf{S}_{21} & \mathbf{S}_{22} \end{bmatrix} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \begin{bmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \end{bmatrix} \Delta T \ ,$$

with

$$\mathbf{I} = \mathbf{K} \mathbf{S} = \mathbf{S} \mathbf{K} \quad , \quad \mathbf{a} = \mathbf{S} \mathbf{b}$$

$$
  \begin{bmatrix} \mathbf{I}      & \mathbf{0}      \\ \mathbf{0}      & \mathbf{I}      \end{bmatrix} 
= \begin{bmatrix} \mathbf{S}_{11} & \mathbf{S}_{12} \\ \mathbf{S}_{21} & \mathbf{S}_{22} \end{bmatrix}
  \begin{bmatrix} \mathbf{K}_{11} & \mathbf{K}_{12} \\ \mathbf{K}_{21} & \mathbf{K}_{22} \end{bmatrix}
= \begin{bmatrix} \mathbf{S}_{11}\mathbf{K}_{11} + \mathbf{S}_{12} \mathbf{K}_{21} &
                  \mathbf{S}_{11}\mathbf{K}_{12} + \mathbf{S}_{12} \mathbf{K}_{22} \\
                  \mathbf{S}_{21}\mathbf{K}_{11} + \mathbf{S}_{22} \mathbf{K}_{21} &
                  \mathbf{S}_{21}\mathbf{K}_{12} + \mathbf{S}_{22} \mathbf{K}_{22} \end{bmatrix}
$$

Thus, stress as a function of internal actions reads

$$\begin{aligned}
  \boldsymbol\sigma_z
  & = \mathbf{C}_1 \begin{bmatrix} \mathbf{I} & - \mathbf{r}_{\times} \end{bmatrix} \begin{bmatrix} ( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta ) \\ \boldsymbol\theta' \end{bmatrix} - \mathbf{b} \Delta T = \\
  & = \mathbf{C}_1 \begin{bmatrix} \mathbf{I} & - \mathbf{r}_{\times} \end{bmatrix} \left( \begin{bmatrix} \mathbf{S}_{11} & \mathbf{S}_{12} \\ \mathbf{S}_{21} & \mathbf{S}_{22} \end{bmatrix} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \begin{bmatrix} \mathbf{a}_1 \\ \mathbf{a}_2 \end{bmatrix} \Delta T \right) - \mathbf{b} \Delta T  \ .
\end{aligned}$$

Evaluation of the term $\int_{V} \widetilde{\boldsymbol\sigma}_z^T \boldsymbol\varepsilon_z$, with $\widetilde{\Delta T} = 0$

$$\begin{aligned}
  \int_V \widetilde{\boldsymbol\sigma}_z^T \boldsymbol\varepsilon_z 
  & = \int_{\ell} \begin{bmatrix} \widetilde{\mathbf{F}}^T & \widetilde{\mathbf{M}}^T \end{bmatrix} \mathbf{S} \int_{A} \begin{bmatrix} \mathbf{I} \\ \mathbf{r}_{\times} \end{bmatrix} \mathbf{C}_1 \begin{bmatrix} \mathbf{I} & - \mathbf{r}_{\times} \end{bmatrix} \, dA \, \left( \mathbf{S} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \mathbf{a} \Delta T \right) \, d \ell = \\
  & = \int_{\ell} \begin{bmatrix} \widetilde{\mathbf{F}}^T & \widetilde{\mathbf{M}}^T \end{bmatrix} \underbrace{\mathbf{S} \mathbf{K}}_{= \mathbf{I}}  \left( \mathbf{S} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \mathbf{a} \Delta T \right) \, d \ell = \\
  & = \int_{\ell} \begin{bmatrix} \widetilde{\mathbf{F}}^T & \widetilde{\mathbf{M}}^T \end{bmatrix} \left( \mathbf{S} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \mathbf{a} \Delta T \right) \, d \ell = \\
\end{aligned}$$

For an elastic isotropic medium with structural decoupling,

$$\mathbf{S} = \begin{bmatrix}
 \frac{\chi_x}{GA} & \cdot             & \cdot         & \cdot          & \cdot          & \cdot          \\
 \cdot             & \frac{\chi_y}{GA} & \cdot         & \cdot          & \cdot          & \cdot          \\
 \cdot             & \cdot             & \frac{1}{EA}  & \cdot          & \cdot          & \cdot          \\
 \cdot             & \cdot             & \cdot         & \frac{1}{EJ_x} & \cdot          & \cdot          \\
 \cdot             & \cdot             & \cdot         & \cdot          & \frac{1}{EJ_y} & \cdot          \\
 \cdot             & \cdot             & \cdot         & \cdot          & \cdot          & \frac{1}{GJ_z} \\
\end{bmatrix} \ ,$$

s.t.

$$\begin{aligned}
  s'_x - \theta_y & = \frac{\chi_x}{GA  } F_x  \\
  s'_y + \theta_x & = \frac{\chi_y}{GA  } F_y  \\
  s'_z            & = \frac{1     }{EA  } F_z  \\
  \theta'_x       & = \frac{1     }{EJ_x} M_x  \\
  \theta'_y       & = \frac{1     }{EJ_y} M_y  \\
  \theta'_z       & = \frac{1     }{GJ_z} M_z  \\
\end{aligned}$$

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

having exploited the properties of the mixed vector product. 

If $\mathbf{u}$, $\mathbf{v}$ respectively represent a displacement and a rotation field $\mathbf{u} = \widetilde{\mathbf{s}}$, $\mathbf{v} = \widetilde{\boldsymbol\theta}$,

$$\begin{aligned}
  0 
  & = - \int_{\ell} \left\{ ( \widetilde{\mathbf{s}}' + \hat{\mathbf{z}} \times \widetilde{\boldsymbol{\theta}} ) \cdot \mathbf{F} + \widetilde{\boldsymbol{\theta}}' \cdot \mathbf{M} \right\} + \int_{\ell} \left\{  \widetilde{\mathbf{s}} \cdot \mathbf{f} + \widetilde{\boldsymbol\theta} \cdot \mathbf{m} \right\} + \left. \left[ \widetilde{\mathbf{s}} \cdot \mathbf{F} + \widetilde{\boldsymbol{\theta}} \cdot \mathbf{M} \right] \right|_{\partial \ell} \\
\end{aligned}$$

If the constitutive equation is introduced to use the kinematic variables as the independent variables the **symmetry** of this formulation of the elastic problem naturally arises

$$\begin{aligned}
  0 
  = & - \int_{\ell} ( \widetilde{\mathbf{s}}' + \hat{\mathbf{z}} \times \widetilde{\boldsymbol{\theta}} ) \cdot \left[ \mathbf{K}_{fs} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{f\theta} \boldsymbol\theta' - \mathbf{b}_f \Delta T \right] + \\
    & - \int_{\ell} \widetilde{\boldsymbol{\theta}}' \cdot \left[ \mathbf{K}_{ms} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{m\theta} \boldsymbol\theta' - \mathbf{b}_m \Delta T \right] + \\
    & + \int_{\ell} \left\{  \widetilde{\mathbf{s}} \cdot \mathbf{f} + \widetilde{\boldsymbol\theta} \cdot \mathbf{m} \right\} + \left. \left[ \widetilde{\mathbf{s}} \cdot \mathbf{F} + \widetilde{\boldsymbol{\theta}} \cdot \mathbf{M} \right] \right|_{\partial \ell} \ .
\end{aligned}$$

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:congruence)=
### Weak formulation of congruence conditions

$\forall \boldsymbol\Sigma_z$,

$$\begin{aligned}
  0
  & = \int_{V} \boldsymbol\Sigma_z \cdot \left( \boldsymbol\varepsilon_z - \mathbf{s}'_{P} + \mathbf{r}_P \times \boldsymbol\theta' - \hat{\mathbf{z}} \times \boldsymbol\theta - \mathbf{v}_1(w_{i/j})\right) = \\
  & = \int_{V} \boldsymbol\Sigma_z \cdot \boldsymbol\varepsilon_z + \int_{V} \left\{ \boldsymbol{\Sigma}'_z \cdot \mathbf{s}_P + ( \mathbf{r}_P \times \boldsymbol\Sigma'_z + \hat{\mathbf{z}} \times \boldsymbol\Sigma_z ) \cdot \boldsymbol\theta \right\} - \int_{A} \left.\left[ \boldsymbol\Sigma_z \cdot \mathbf{s}_P + ( \mathbf{r}_P \times \boldsymbol\Sigma_z ) \cdot \boldsymbol\theta \right]\right|_{\partial \ell}
\end{aligned}$$

If the test function is an equilibrated stress field $\boldsymbol\Sigma_z = \widetilde{\boldsymbol{\sigma}}_z$,

$$\begin{aligned}
 \int_{A} \boldsymbol\Sigma_z                     & =: \widetilde{\mathbf{F}} \\
 \int_{A} \mathbf{r}_P \times \boldsymbol\Sigma_z & =: \widetilde{\mathbf{M}} \\
\end{aligned}$$

with

$$\begin{aligned}
 \mathbf{0} & = \widetilde{\mathbf{F}}' + \widetilde{\mathbf{f}} \\
 \mathbf{0} & = \widetilde{\mathbf{M}}' + \hat{\mathbf{z}} \times \widetilde{\mathbf{F}} + \widetilde{\mathbf{m}} \\
\end{aligned}$$

thus the weak form of congruence conditions becomes

$$\begin{aligned}
  0 
  & = \int_{V} \widetilde{\boldsymbol{\sigma}}_z \cdot \boldsymbol\varepsilon_z + \int_{\ell} \left\{ \widetilde{\mathbf{F}}' \cdot \mathbf{s}_P + \left( \widetilde{\mathbf{M}}' + \hat{\mathbf{z}} \times \widetilde{\mathbf{F}} \right) \cdot \boldsymbol\theta \right\} - \left[ \widetilde{\mathbf{F}} \cdot \mathbf{s}_P + \widetilde{\mathbf{M}} \cdot \boldsymbol\theta \right]_{\partial \ell} = \\
  & = \int_{V} \widetilde{\boldsymbol{\sigma}}_z \cdot \boldsymbol\varepsilon_z - \int_{\ell} \left\{ \widetilde{\mathbf{f}} \cdot \mathbf{s}_P + \widetilde{\mathbf{m}} \cdot \boldsymbol\theta \right\} - \left[ \widetilde{\mathbf{F}} \cdot \mathbf{s}_P + \widetilde{\mathbf{M}} \cdot \boldsymbol\theta \right]_{\partial \ell} = \\
  & = \dots
\end{aligned}$$

**todo** *discuss useful choices of boundary conditions (along with no distributed loads to set the second integral identically zero), e.g. for the evaluation of hyperstatics*

**todo** *evaluate the first integral in terms of internal actions. See above*

$$\int_V \widetilde{\boldsymbol{\sigma}}_z \cdot \boldsymbol\varepsilon_z = \int_{\ell} \begin{bmatrix} \widetilde{\mathbf{F}} \\ \widetilde{\mathbf{M}} \end{bmatrix}^T \left( \mathbf{S} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \mathbf{a} \Delta T \right)$$

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:pvw)=
### Principle of virtual work

*...test functions: variations...the problem can be recast as the principle of stationariety of total potential energy*

If test function $\mathbf{u}$, $\mathbf{v}$ in the weak form of the equilibrium conditions respectively represent the variation of a congruent displacement and a rotation field $\mathbf{u} = \delta \widetilde{\mathbf{s}}$, $\mathbf{v} = \delta \widetilde{\boldsymbol\theta}$, with $\delta \widetilde{\mathbf{s}}|_{S_D} = \mathbf{0}$ and $\delta \widetilde{\boldsymbol\theta}|_{S_D} = \mathbf{0}$ (**these relations may hold just for the constrained components**)

$$\begin{aligned}
  0 
  & = - \int_{\ell} \left\{ ( \delta\widetilde{\mathbf{s}}' + \hat{\mathbf{z}} \times \delta\widetilde{\boldsymbol{\theta}} ) \cdot \mathbf{F} + \widetilde{\boldsymbol{\theta}}' \cdot \mathbf{M} \right\} + \int_{\ell} \left\{ \delta \widetilde{\mathbf{s}} \cdot \mathbf{f} + \delta \widetilde{\boldsymbol\theta} \cdot \mathbf{m} \right\} + \left. \left[ \delta \widetilde{\mathbf{s}} \cdot \mathbf{F} + \delta \widetilde{\boldsymbol{\theta}} \cdot \mathbf{M} \right] \right|_{\partial \ell / S_D} \\
\end{aligned}$$

*It looks like that this relation doesn't add too much info beyond the weak form of the problem! Is that true?* **Spaces of test and basis functions and the prescription of essential boundary conditions need some words!**

If the constitutive equation is introduced to use the kinematic variables as the independent variables the symmetry of this formulation of the elastic problem naturally arises, as already shown in the weak form of the equilibrium equations.

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:pcvw)=
### Principle of complementary virtual work

If the test function of the weak form of the congruence conditions is chosen to be the variation of an equilibrated stress field, $\boldsymbol\Sigma_z = \delta \boldsymbol\sigma_z$, s.t.

$$\begin{aligned}
  \mathbf{0} & = \delta \widetilde{\mathbf{F}}' \\
  \mathbf{0} & = \delta \widetilde{\mathbf{M}}' + \hat{\mathbf{z}} \times \delta \widetilde{\mathbf{F}} \\
\end{aligned}$$

and $\left.\delta \widetilde{\mathbf{F}}\right|_{S_D} = \mathbf{0}$, $\left.\delta \widetilde{\mathbf{M}}\right|_{S_D} = \mathbf{0}$, where essential boundary conditions are prescribed (some constraints prescribe only some components),

$$\begin{aligned}
  0 
  & = \int_{V} \delta \widetilde{\boldsymbol{\sigma}}_z \cdot \boldsymbol\varepsilon_z - \left[ \widetilde{\delta \mathbf{F}} \cdot \mathbf{s}_P + \delta \widetilde{\mathbf{M}} \cdot \boldsymbol\theta \right]_{\partial \ell / S_N}  = \\
  & = \int_V \begin{bmatrix} \delta \widetilde{\mathbf{F}} \\ \delta \widetilde{\mathbf{M}} \end{bmatrix}^T \left( \mathbf{S} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \mathbf{a} \Delta T \right) - \left[ \widetilde{\delta \mathbf{F}} \cdot \mathbf{s}_P + \delta \widetilde{\mathbf{M}} \cdot \boldsymbol\theta \right]_{\partial \ell / S_N}  = \\
\end{aligned}$$



(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:stationariety-potential)=
### Principle of stationariety of total potential energy

Principle of virtual work can be recast as a principle of stationariety of total potential energy, being $\widetilde{\mathbf{s}} = \mathbf{s}$, $\widetilde{\boldsymbol\theta} = \boldsymbol\theta$,

$$\begin{aligned}
  0
  = & - \int_{\ell} ( \delta \mathbf{s}' + \hat{\mathbf{z}} \times \delta \boldsymbol{\theta} ) \cdot \left[ \mathbf{K}_{fs} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol\theta \right) + \mathbf{K}_{f\theta} \boldsymbol\theta' - \mathbf{b}_f \Delta T \right] + \\
    & - \int_{\ell} \delta \boldsymbol{\theta}' \cdot \left[ \mathbf{K}_{ms} \left( \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol{\theta} \right) + \mathbf{K}_{m\theta} \boldsymbol{\theta}' - \mathbf{b}_m \Delta T \right] + \\
    & + \int_{\ell} \left\{ \delta \mathbf{s} \cdot \mathbf{f} + \delta \boldsymbol{\theta} \cdot \mathbf{m} \right\} + \left. \left[ \delta \mathbf{s} \cdot \mathbf{F} + \delta \boldsymbol{\theta} \cdot \mathbf{M} \right] \right|_{\partial \ell / \partial S_D} = \\ 
  = & \delta \left\{ - \dfrac{1}{2} \int_{\ell} \begin{bmatrix} \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol{\theta} \\ \boldsymbol{\theta}'  \end{bmatrix} \cdot \begin{bmatrix} \mathbf{K}_{fs} & \mathbf{K}_{f\theta} \\ \mathbf{K}_{ms} & \mathbf{K}_{m \theta} \end{bmatrix} \cdot \begin{bmatrix} \mathbf{s}'_P + \hat{\mathbf{z}} \times \boldsymbol{\theta} \\ \boldsymbol{\theta}' \end{bmatrix} \, d \ell - \dfrac{1}{2} \left.\begin{bmatrix} \mathbf{s} \\ \boldsymbol{\theta} \end{bmatrix} \cdot \mathbf{K}_{R} \cdot \begin{bmatrix} \mathbf{s}_P \\ \boldsymbol{\theta} \end{bmatrix}\right|_{S_R} \right. + \\
   & + \left. \int_{\ell} \begin{bmatrix} \mathbf{s}_P \\ \boldsymbol{\theta} \end{bmatrix} \cdot \begin{bmatrix} \mathbf{f} \\ \mathbf{m} \end{bmatrix} \, d \ell + \left. \begin{bmatrix} \mathbf{s}_P \\ \boldsymbol{\theta} \end{bmatrix} \cdot \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} \right|_{S_N}  \right\} \ ,
\end{aligned}$$

with some notation abuse, and prescribed temperature $\Delta T$, s.t. $\delta \Delta T = 0$, and loads.

(solid-mechanics:intro:small-displacements-statics-beam-weak-form:weak:stationariety-potential-complementary)=
### Principle of stationariety of total complementary potential energy

If test functions of the congruence conditions are internal actions of an equilibrated and congruent solution (and thus the only solution of the elastic problem, if well-posed), and thus $\delta \widetilde{\mathbf{F}} = \delta \mathbf{F}$ and $\delta \widetilde{\mathbf{M}} = \delta \mathbf{M}$, the principle of complementary virtual work can be recast as the principle of stationariety of the total complementary potential energy, for given $\mathbf{s}_P$, $\boldsymbol\theta$ on $S_N$,

$$\begin{aligned}
  0 
  & = \delta \left\{ \int_{\ell} \left( \dfrac{1}{2} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}^T \mathbf{S} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix} + \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}^T \mathbf{a} \Delta T \right) \, d \ell - \left. \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}^T \begin{bmatrix} \mathbf{s}_P \\ \boldsymbol{\theta} \end{bmatrix} \right|_{S_N} + \left.\dfrac{1}{2} \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}^T \mathbf{S}_R \begin{bmatrix} \mathbf{F} \\ \mathbf{M} \end{bmatrix}\right|_{S_R} \right\} = \\
  & = \delta \Pi^* \ ,
\end{aligned}$$

if the b.c. on Robin boundaries reads...

