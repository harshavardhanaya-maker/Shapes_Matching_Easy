const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Audio,
		C3.Behaviors.DragnDrop,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Audio.Acts.Play,
		C3.Plugins.Audio.Cnds.OnEnded,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Behaviors.DragnDrop.Cnds.OnDrop,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.Wait
	];
};
self.C3_JsPropNameTable = [
	{Sprite: 0},
	{Mouse: 0},
	{Sprite5: 0},
	{Audio: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{DragDrop: 0},
	{Sprite6: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Sprite9: 0},
	{Score: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Sprite9: class extends self.ISpriteInstance {}
}