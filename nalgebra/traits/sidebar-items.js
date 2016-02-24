initSidebarItems({"enum":[["POrdering","Result of a partial ordering."]],"mod":[["geometry","Traits of operations having a well-known or explicit geometric meaning."],["operations","Low level operations on vectors and matrices."],["structure","Traits giving structural informations on linear algebra objects or the space they live in."]],"trait":[["Absolute","Trait of objects having an absolute value. This is useful if the object does not have the same type as its absolute value."],["AbsoluteRotate","Composition of a rotation and an absolute value.The operation is accessible using the `RotationMatrix`, `Absolute`, and `RMul` traits, but doing so is not easy in generic code as it can be a cause of type over-parametrization."],["ApproxEq","Trait for testing approximate equality"],["Axpy","Trait of objects implementing the `y = ax + y` operation."],["BaseFloat","Basic floating-point number numeric trait."],["BaseNum","Basic integral numeric trait."],["Basis","Traits of objects which can form a basis (typically vectors)."],["Bounded","Types that have maximum and minimum value."],["Cast","Traits of objects which can be created from an object of type `T`."],["Col","Trait to access columns of a matrix or vector."],["ColSlice","Trait to access part of a column of a matrix"],["Cov","Trait for computing the covariance of a set of data."],["Cross","Trait of elements having a cross product."],["CrossMatrix","Trait of elements having a cross product operation which can be expressed as a matrix."],["Det","Trait of objects having a determinant. Typically used by square matrices."],["Diag","Trait to get the diagonal of square matrices."],["Dim","Trait of objects having a spacial dimension known at compile time."],["Dot","Traits of objects having a dot product."],["EigenQR","Trait for computing the eigenvector and eigenvalues of a square matrix usin the QR algorithm."],["Eye","Trait for constructing the identity matrix"],["FloatPnt","Trait of points with components implementing the `BaseFloat` trait."],["FloatVec","Trait of vector with components implementing the `BaseFloat` trait."],["FromHomogeneous","Traits of objects which can be build from an homogeneous coordinate form."],["Indexable","This is a workaround of current Rust limitations.It exists because the `I` trait cannot be used to express write access. Thus, this is the same as the `I` trait but without the syntactic sugar and with a method to write to a specific index."],["Inv","Trait of objects having an inverse. Typically used to implement matrix inverse."],["Iterable","This is a workaround of current Rust limitations.Traits of objects which can be iterated through like a vector."],["IterableMut","This is a workaround of current Rust limitations.Traits of mutable objects which can be iterated through like a vector."],["Mat","Trait of matrices.A matrix has rows and columns and are able to multiply them."],["Mean","Trait for computing the covariance of a set of data."],["Norm","Traits of objects having an euclidian norm."],["NumPnt","Trait grouping most common operations on points."],["NumVec","Trait grouping most common operations on vectors."],["Orig","The zero element of a vector space, seen as an element of its embeding affine space."],["Outer","Traits of objects having an outer product."],["POrd","Pointwise ordering operations."],["PntAsVec","Trait that relates a point of an affine space to a vector of the associated vector space."],["Repeat","Trait for constructiong an object repeating a value."],["Rotate","Trait of objects able to rotate other objects.This is typically implemented by matrices which rotate vectors."],["Rotation","Trait of object which can represent a rotation, and to which new rotations can be appended. A rotation is assumed to be an isometry without translation and without reflexion."],["RotationMatrix","Trait of transformation having a rotation extractable as a rotation matrix. This can typically be implemented by quaternions to convert them to a rotation matrix."],["RotationTo","Trait of object that can be rotated to be superimposed with another one of the same nature."],["RotationWithTranslation","Various composition of rotation and translation.Utilities to make rotations with regard to a point different than the origin.  All those operations are the composition of rotations and translations.Those operations are automatically implemented in term of the `Rotation` and `Translation` traits."],["Row","Trait to access rows of a matrix or a vector."],["RowSlice","Trait to access part of a row of a matrix"],["Shape","The shape of an indexable object."],["SquareMat","Trait implemented by square matrices."],["ToHomogeneous","Traits of objects which can be put in homogeneous coordinates form."],["Transform","Trait of objects able to transform other objects.This is typically implemented by matrices which transform vectors."],["Transformation","Trait of object which represent a transformation, and to which new transformations can be appended.A transformation is assumed to be an isometry without reflexion."],["Translate","Trait of objects able to translate other objects. This is typically implemented by vectors to translate points."],["Translation","Trait of object which represent a translation, and to wich new translation can be appended."],["Transpose","Trait of objects which can be transposed."],["UniformSphereSample","Trait of vectors able to sample a unit sphere.The number of sample must be sufficient to approximate a sphere using a support mapping function."]]});