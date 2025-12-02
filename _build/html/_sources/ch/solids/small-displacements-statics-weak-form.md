(solid-mechanics:intro:small-displacements-statics-weak-form)=
# Small displacement - Statics - Weak formulation and "energy" theorems

This section presents different weak formulations in the elastic problem, for both equilibrium conditions and congruence conditions, for different models/structural elements.

**Models.** In this section, weak formulations for different models of elastic structures are explicitly derived:

- [Three-dimensional solid](solid-mechanics:intro:small-displacements-statics-weak-form-3d)
- [General beam model](solid-mechanics:intro:small-displacements-statics-beam-weak-form-general)
- [Simplified beam models](solid-mechanics:intro:small-displacements-statics-beam-weak-form)

**Approaches.** The results shown here can be classified into two different approaches, depending on the independent variables of the methods:
- **displacement approach**: 1) weak form of the equilibrium equations, 2) principle of virtual work, and 3) stationariety of the total potential energy
- **force approach**: 1) weak form of the congruence conditionss, 2) principle of complementary virtual work, and 3) stationariety of the total complementary potential energy.

A *force approach* can be efficiently used to *evaluate hyperstatics* and *point displacements/rotations*, common questions in simple problems/exercises of the introductory courses in structural mechanics, as a result of low-dimensional linear systems that can be solved with a pen-and-paper approach. *Displacement methods* usually require some assumptions about the displacement field, and provides a common general methods for solving the *whole structure*. As an example, *finite element method* can be formulated as a discrete counterpart (usually a projection over a finite-dimensional basis) of the the weak form of equilibrium equations: *FEM* usually results in a *"higher"-dimensional* linear system[^fem-pc] (if compared with those of a force approach), that makes from little to no sense at all to solve *by-hand*, but can be easily built and solved with a computer.

[^fem-pc]: Finite element methods for linear structural problems usually provide a linear problem, $\mathbf{K} \mathbf{u} = \mathbf{f}$, with some useful properties that can be exploited while building and solving the problem: the stiffness matrix $\mathbf{K}$ is usually **sparse** (this properties allows to *save memory*, using sparse matrix format to avoid storing in an inefficient way lots of information &mdash; lots of zero; efficients *algorithms* exist for matrix operations with sparse matrices) and **symmetric** (many *algorithms* work well with symmetric matrices).


**Examples, problems and exercises.** Some [problems about beam structures](solid-mechanics:small-displacements:beams:problems) can be conveniently approached with the contents of this  section.

<!-- :class: tip dropdown -->
```{admonition} Reading guidance
:class: tip dropdown

There is no mandatory or recommended order for addressing these paragraphs. The treatment of the **elastic solid** requires some familiarity with *tensors*. Beam models can be treated as simplified models of the 3-dimensional solid, under assumptions on stress (or strain) fields. The formulation of the **general elastic beam** introduces a vector-based framework applicable to any elastic beam: it may appear obscure or cryptic at first, but it offers a level of generality that greatly simplifies the *numerical implementation* of arbitrary beam models. The **structurally decoupled elastic beam** is a very specific case of this general treatment, yet it enables the construction of *simple models* suitable for solving structural problems by hand, using only paper, pencil, and manageable amounts of algebra. Simple models become even simpler for [slender beams](solid-mechanics:small-displacements:beams:slender) with Bernoulli's kinematic assumption - i.e. if displacement due to axial and shear actions are negligible if compared with bending. This approach helps internalize the core principles by allowing practice on simpler problems without unnecessary algebraic complexity — after all, computers exist for the heavy calculations.

```
