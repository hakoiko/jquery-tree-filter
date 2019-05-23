# jQuery tree filter
Endless folder tree with quick search.

## this repository is no longer maintained
I don't recommend to use this component in real production. jQuery is too old. there are better ways to making a tree component.

## Usage
Basic Html Structure is UL > LI hierarchy.
```HTML
	<input type text="my-search" />
	<ul id="my-tree">
		<li>
			<div>Asia</div>
			<ul>
				<li>
					<div>Southern-West</div>
					<ul>
						<li><div>India</div></li>
						<li><div>Pakistan</div></li>
						<li><div>Butan</div></li>
					</ul>
				</li>
			</ul>
		</li>
	</ul>
```

And, you need to import javascript files and setup your plug-in
```HTML
	<script src="jquery.js"></script>
	<script src="jquery.treefilter.js"></script>
	<script>
		$(function() {
			//set Tree Interaction
			var tree = new treefilter($("#my-tree"), {
				searcher : $("input#my-search") // set if you need search function.
			});
		});
	</script>
```

## License
MIT License.