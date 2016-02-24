(function() {var implementors = {};
implementors['itertools'] = ["impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.Flatten.html' title='itertools::Flatten'>Flatten</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>, I::Item: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a></span>","impl&lt;F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.Linspace.html' title='itertools::Linspace'>Linspace</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html' title='core::marker::Copy'>Copy</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Add.html' title='core::ops::Add'>Add</a>&lt;Output=F&gt; + <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Mul.html' title='core::ops::Mul'>Mul</a>&lt;Output=F&gt;, <a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>: <a class='trait' href='itertools/misc/trait.ToFloat.html' title='itertools::misc::ToFloat'>ToFloat</a>&lt;F&gt;</span>","impl&lt;X, T, I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/misc/struct.FlatTuples.html' title='itertools::misc::FlatTuples'>FlatTuples</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a>&lt;Item=<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>(</a>T, X<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.tuple.html'>)</a>&gt;, T: <a class='trait' href='itertools/misc/trait.AppendTuple.html' title='itertools::misc::AppendTuple'>AppendTuple</a>&lt;X&gt;</span>","impl&lt;I, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.PadUsing.html' title='itertools::PadUsing'>PadUsing</a>&lt;I, F&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>(<a class='primitive' href='https://doc.rust-lang.org/nightly/std/primitive.usize.html'>usize</a>) -&gt; I::Item</span>","impl&lt;I&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.RcIter.html' title='itertools::RcIter'>RcIter</a>&lt;I&gt; <span class='where'>where I: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.RepeatN.html' title='itertools::RepeatN'>RepeatN</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a></span>","impl&lt;A, F&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.RepeatCall.html' title='itertools::RepeatCall'>RepeatCall</a>&lt;F&gt; <span class='where'>where F: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.FnMut.html' title='core::ops::FnMut'>FnMut</a>() -&gt; A</span>","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.Stride.html' title='itertools::Stride'>Stride</a>&lt;'a, A&gt;","impl&lt;'a, A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.StrideMut.html' title='itertools::StrideMut'>StrideMut</a>&lt;'a, A&gt;","impl&lt;T, U&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.ZipLongest.html' title='itertools::ZipLongest'>ZipLongest</a>&lt;T, U&gt; <span class='where'>where T: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a>, U: <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.ExactSizeIterator.html' title='core::iter::ExactSizeIterator'>ExactSizeIterator</a></span>","impl&lt;T, U&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='itertools/struct.ZipSlices.html' title='itertools::ZipSlices'>ZipSlices</a>&lt;T, U&gt; <span class='where'>where T: <a class='trait' href='itertools/misc/trait.Slice.html' title='itertools::misc::Slice'>Slice</a>, U: <a class='trait' href='itertools/misc/trait.Slice.html' title='itertools::misc::Slice'>Slice</a></span>",];implementors['libc'] = [];implementors['vec_map'] = ["impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='vec_map/struct.Iter.html' title='vec_map::Iter'>Iter</a>&lt;'a, V&gt;","impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='vec_map/struct.IterMut.html' title='vec_map::IterMut'>IterMut</a>&lt;'a, V&gt;","impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='vec_map/struct.Drain.html' title='vec_map::Drain'>Drain</a>&lt;'a, V&gt;","impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='vec_map/struct.Keys.html' title='vec_map::Keys'>Keys</a>&lt;'a, V&gt;","impl&lt;'a, V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='vec_map/struct.Values.html' title='vec_map::Values'>Values</a>&lt;'a, V&gt;","impl&lt;V&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='vec_map/struct.IntoIter.html' title='vec_map::IntoIter'>IntoIter</a>&lt;V&gt;",];implementors['bit_vec'] = ["impl&lt;'a, B: <a class='trait' href='bit_vec/trait.BitBlock.html' title='bit_vec::BitBlock'>BitBlock</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='bit_vec/struct.Iter.html' title='bit_vec::Iter'>Iter</a>&lt;'a, B&gt;","impl&lt;B: <a class='trait' href='bit_vec/trait.BitBlock.html' title='bit_vec::BitBlock'>BitBlock</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='bit_vec/struct.IntoIter.html' title='bit_vec::IntoIter'>IntoIter</a>&lt;B&gt;","impl&lt;'a, B: <a class='trait' href='bit_vec/trait.BitBlock.html' title='bit_vec::BitBlock'>BitBlock</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='bit_vec/struct.Blocks.html' title='bit_vec::Blocks'>Blocks</a>&lt;'a, B&gt;",];implementors['num'] = ["impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='num/iter/struct.Range.html' title='num::iter::Range'>Range</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='num/integer/trait.Integer.html' title='num::integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/traits/trait.ToPrimitive.html' title='num::traits::ToPrimitive'>ToPrimitive</a></span>","impl&lt;A&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/iter/trait.DoubleEndedIterator.html' title='core::iter::DoubleEndedIterator'>DoubleEndedIterator</a> for <a class='struct' href='num/iter/struct.RangeInclusive.html' title='num::iter::RangeInclusive'>RangeInclusive</a>&lt;A&gt; <span class='where'>where A: <a class='trait' href='https://doc.rust-lang.org/nightly/core/ops/trait.Sub.html' title='core::ops::Sub'>Sub</a>&lt;A, Output=A&gt; + <a class='trait' href='num/integer/trait.Integer.html' title='num::integer::Integer'>Integer</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/cmp/trait.PartialOrd.html' title='core::cmp::PartialOrd'>PartialOrd</a> + <a class='trait' href='https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html' title='core::clone::Clone'>Clone</a> + <a class='trait' href='num/traits/trait.ToPrimitive.html' title='num::traits::ToPrimitive'>ToPrimitive</a></span>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
