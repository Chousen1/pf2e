import { t as _ } from "./rolldown-runtime.mjs";
var y = {}, b = Symbol(`uninitialized`), x = `http://www.w3.org/1999/xhtml`, S = `http://www.w3.org/2000/svg`, C = `http://www.w3.org/1998/Math/MathML`, w = Array.isArray, E = Array.prototype.indexOf, D = Array.prototype.includes, O = Array.from, k = Object.defineProperty, A = Object.getOwnPropertyDescriptor, j = Object.getOwnPropertyDescriptors, N = Object.prototype, P = Array.prototype, F = Object.getPrototypeOf, I = Object.isExtensible;
function is_function(_) {
	return typeof _ == `function`;
}
var noop = () => {};
function is_promise(_) {
	return typeof _?.then == `function`;
}
function run_all(_) {
	for (var y = 0; y < _.length; y++) _[y]();
}
function deferred() {
	var _, y;
	return {
		promise: new Promise((b, x) => {
			_ = b, y = x;
		}),
		resolve: _,
		reject: y
	};
}
function to_array(_, y) {
	if (Array.isArray(_)) return _;
	if (y === void 0 || !(Symbol.iterator in _)) return Array.from(_);
	let b = [];
	for (let x of _) if (b.push(x), b.length === y) break;
	return b;
}
var L = 1 << 24, R = 1024, z = 2048, B = 4096, ee = 8192, te = 16384, ne = 32768, V = 1 << 25, re = 65536, ie = 1 << 19, ae = 1 << 20, oe = 1 << 25, se = 65536, ce = 1 << 21, le = 1 << 22, ue = 1 << 23, de = Symbol(`$state`), fe = Symbol(`legacy props`), pe = Symbol(``), me = Symbol(`attributes`), he = Symbol(`class`), ge = Symbol(`style`), _e = Symbol(`text`), ve = Symbol(`form reset`), ye = new class StaleReactionError extends Error {
	name = `StaleReactionError`;
	message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), be = !!globalThis.document?.contentType && globalThis.document.contentType.includes(`xml`);
function lifecycle_outside_component(_) {
	throw Error(`https://svelte.dev/e/lifecycle_outside_component`);
}
function async_derived_orphan() {
	throw Error(`https://svelte.dev/e/async_derived_orphan`);
}
function each_key_duplicate(_, y, b) {
	throw Error(`https://svelte.dev/e/each_key_duplicate`);
}
function effect_in_teardown(_) {
	throw Error(`https://svelte.dev/e/effect_in_teardown`);
}
function effect_in_unowned_derived() {
	throw Error(`https://svelte.dev/e/effect_in_unowned_derived`);
}
function effect_orphan(_) {
	throw Error(`https://svelte.dev/e/effect_orphan`);
}
function effect_update_depth_exceeded() {
	throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`);
}
function props_invalid_value(_) {
	throw Error(`https://svelte.dev/e/props_invalid_value`);
}
function state_descriptors_fixed() {
	throw Error(`https://svelte.dev/e/state_descriptors_fixed`);
}
function state_prototype_fixed() {
	throw Error(`https://svelte.dev/e/state_prototype_fixed`);
}
function state_unsafe_mutation() {
	throw Error(`https://svelte.dev/e/state_unsafe_mutation`);
}
function svelte_boundary_reset_onerror() {
	throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`);
}
function derived_inert() {
	console.warn(`https://svelte.dev/e/derived_inert`);
}
function hydration_mismatch(_) {
	console.warn(`https://svelte.dev/e/hydration_mismatch`);
}
function select_multiple_invalid_value() {
	console.warn(`https://svelte.dev/e/select_multiple_invalid_value`);
}
function svelte_boundary_reset_noop() {
	console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`);
}
var xe = !1;
function set_hydrating(_) {
	xe = _;
}
var Se;
function set_hydrate_node(_) {
	if (_ === null) throw hydration_mismatch(), y;
	return Se = _;
}
function hydrate_next() {
	return set_hydrate_node(get_next_sibling(Se));
}
function reset(_) {
	if (xe) {
		if (get_next_sibling(Se) !== null) throw hydration_mismatch(), y;
		Se = _;
	}
}
function next(_ = 1) {
	if (xe) {
		for (var y = _, b = Se; y--;) b = get_next_sibling(b);
		Se = b;
	}
}
function skip_nodes(_ = !0) {
	for (var y = 0, b = Se;;) {
		if (b.nodeType === 8) {
			var x = b.data;
			if (x === `]`) {
				if (y === 0) return b;
				--y;
			} else (x === `[` || x === `[!` || x[0] === `[` && !isNaN(Number(x.slice(1)))) && (y += 1);
		}
		var S = get_next_sibling(b);
		_ && b.remove(), b = S;
	}
}
function read_hydration_instruction(_) {
	if (!_ || _.nodeType !== 8) throw hydration_mismatch(), y;
	return _.data;
}
function equals(_) {
	return _ === this.v;
}
function safe_not_equal(_, y) {
	return _ == _ ? _ !== y || typeof _ == `object` && !!_ || typeof _ == `function` : y == y;
}
function safe_equals(_) {
	return !safe_not_equal(_, this.v);
}
var Ce = [];
function snapshot(_, y = !1, b = !1) {
	return clone$3(_, /* @__PURE__ */ new Map(), ``, Ce, null, b);
}
function clone$3(_, y, b, x, S = null, C = !1) {
	if (typeof _ == `object` && _) {
		var E = y.get(_);
		if (E !== void 0) return E;
		if (_ instanceof Map) return new Map(_);
		if (_ instanceof Set) return new Set(_);
		if (w(_)) {
			var D = Array(_.length);
			y.set(_, D), S !== null && y.set(S, D);
			for (var O = 0; O < _.length; O += 1) {
				var k = _[O];
				O in _ && (D[O] = clone$3(k, y, b, x, null, C));
			}
			return D;
		}
		if (F(_) === N) {
			D = {}, y.set(_, D), S !== null && y.set(S, D);
			for (var A of Object.keys(_)) D[A] = clone$3(_[A], y, b, x, null, C);
			return D;
		}
		if (_ instanceof Date) return structuredClone(_);
		if (typeof _.toJSON == `function` && !C) return clone$3(_.toJSON(), y, b, x, _);
	}
	if (_ instanceof EventTarget) return _;
	try {
		return structuredClone(_);
	} catch {
		return _;
	}
}
var we = null;
function set_component_context(_) {
	we = _;
}
function getContext(_) {
	return get_or_init_context_map(`getContext`).get(_);
}
function setContext(_, y) {
	return get_or_init_context_map(`setContext`).set(_, y), y;
}
function push(_, y = !1, b) {
	we = {
		p: we,
		i: !1,
		c: null,
		e: null,
		s: _,
		x: null,
		r: tt,
		l: null
	};
}
function pop(_) {
	var y = we, b = y.e;
	if (b !== null) {
		y.e = null;
		for (var x of b) create_user_effect(x);
	}
	return _ !== void 0 && (y.x = _), y.i = !0, we = y.p, _ ?? {};
}
function is_runes() {
	return !0;
}
function get_or_init_context_map(_) {
	return we === null && lifecycle_outside_component(_), we.c ??= new Map(get_parent_context(we) || void 0);
}
function get_parent_context(_) {
	let y = _.p;
	for (; y !== null;) {
		let _ = y.c;
		if (_ !== null) return _;
		y = y.p;
	}
	return null;
}
var Te = [];
function run_micro_tasks() {
	var _ = Te;
	Te = [], run_all(_);
}
function queue_micro_task(_) {
	if (Te.length === 0 && !Pe) {
		var y = Te;
		queueMicrotask(() => {
			y === Te && run_micro_tasks();
		});
	}
	Te.push(_);
}
function flush_tasks() {
	for (; Te.length > 0;) run_micro_tasks();
}
function handle_error(_) {
	var y = tt;
	if (y === null) return $e.f |= ue, _;
	if (!(y.f & 32768) && !(y.f & 4)) throw _;
	invoke_error_boundary(_, y);
}
function invoke_error_boundary(_, y) {
	if (!(y !== null && y.f & 16384)) {
		for (; y !== null;) {
			if (y.f & 128) {
				if (!(y.f & 32768)) throw _;
				try {
					y.b.error(_);
					return;
				} catch (y) {
					_ = y;
				}
			}
			y = y.parent;
		}
		throw _;
	}
}
var Ee = ~(z | B | R);
function set_signal_status(_, y) {
	_.f = _.f & Ee | y;
}
function update_derived_status(_) {
	_.f & 512 || _.deps === null ? set_signal_status(_, R) : set_signal_status(_, B);
}
function clear_marked(_) {
	if (_ !== null) for (let y of _) !(y.f & 2) || !(y.f & 65536) || (y.f ^= se, clear_marked(y.deps));
}
function defer_effect(_, y, b) {
	_.f & 2048 ? y.add(_) : _.f & 4096 && b.add(_), clear_marked(_.deps), set_signal_status(_, R);
}
var De = !1;
function capture_store_binding(_) {
	var y = De;
	try {
		return De = !1, [_(), De];
	} finally {
		De = y;
	}
}
function createSubscriber(_) {
	let y = 0, b = source(0), x;
	return () => {
		effect_tracking() && (get(b), render_effect(() => (y === 0 && (x = untrack(() => _(() => increment(b)))), y += 1, () => {
			queue_micro_task(() => {
				--y, y === 0 && (x?.(), x = void 0, increment(b));
			});
		})));
	};
}
var Oe = re | ie;
function boundary(_, y, b, x) {
	new Boundary(_, y, b, x);
}
var Boundary = class {
	parent;
	is_pending = !1;
	transform_error;
	#anchor;
	#hydrate_open = xe ? Se : null;
	#props;
	#children;
	#effect;
	#main_effect = null;
	#pending_effect = null;
	#failed_effect = null;
	#offscreen_fragment = null;
	#local_pending_count = 0;
	#pending_count = 0;
	#pending_count_update_queued = !1;
	#dirty_effects = /* @__PURE__ */ new Set();
	#maybe_dirty_effects = /* @__PURE__ */ new Set();
	#effect_pending = null;
	#effect_pending_subscriber = createSubscriber(() => (this.#effect_pending = source(this.#local_pending_count), () => {
		this.#effect_pending = null;
	}));
	constructor(_, y, b, x) {
		this.#anchor = _, this.#props = y, this.#children = (_) => {
			var y = tt;
			y.b = this, y.f |= 128, b(_);
		}, this.parent = tt.b, this.transform_error = x ?? this.parent?.transform_error ?? ((_) => _), this.#effect = block(() => {
			if (xe) {
				let _ = this.#hydrate_open;
				hydrate_next();
				let y = _.data === `[!`;
				if (_.data.startsWith(`[?`)) {
					let y = JSON.parse(_.data.slice(2));
					this.#hydrate_failed_content(y);
				} else y ? this.#hydrate_pending_content() : this.#hydrate_resolved_content();
			} else this.#render();
		}, Oe), xe && (this.#anchor = Se);
	}
	#hydrate_resolved_content() {
		try {
			this.#main_effect = branch(() => this.#children(this.#anchor));
		} catch (_) {
			this.error(_);
		}
	}
	#hydrate_failed_content(_) {
		let y = this.#props.failed;
		y && (this.#failed_effect = branch(() => {
			y(this.#anchor, () => _, () => () => {});
		}));
	}
	#hydrate_pending_content() {
		let _ = this.#props.pending;
		_ && (this.is_pending = !0, this.#pending_effect = branch(() => _(this.#anchor)), queue_micro_task(() => {
			var _ = this.#offscreen_fragment = document.createDocumentFragment(), y = create_text();
			_.append(y), this.#main_effect = this.#run(() => branch(() => this.#children(y))), this.#pending_count === 0 && (this.#anchor.before(_), this.#offscreen_fragment = null, pause_effect(this.#pending_effect, () => {
				this.#pending_effect = null;
			}), this.#resolve(H));
		}));
	}
	#render() {
		try {
			if (this.is_pending = this.has_pending_snippet(), this.#pending_count = 0, this.#local_pending_count = 0, this.#main_effect = branch(() => {
				this.#children(this.#anchor);
			}), this.#pending_count > 0) {
				var _ = this.#offscreen_fragment = document.createDocumentFragment();
				move_effect(this.#main_effect, _);
				let y = this.#props.pending;
				this.#pending_effect = branch(() => y(this.#anchor));
			} else this.#resolve(H);
		} catch (_) {
			this.error(_);
		}
	}
	#resolve(_) {
		this.is_pending = !1, _.transfer_effects(this.#dirty_effects, this.#maybe_dirty_effects);
	}
	defer_effect(_) {
		defer_effect(_, this.#dirty_effects, this.#maybe_dirty_effects);
	}
	is_rendered() {
		return !this.is_pending && (!this.parent || this.parent.is_rendered());
	}
	has_pending_snippet() {
		return !!this.#props.pending;
	}
	#run(_) {
		var y = tt, b = $e, x = we;
		set_active_effect(this.#effect), set_active_reaction(this.#effect), set_component_context(this.#effect.ctx);
		try {
			return Be.ensure(), _();
		} catch (_) {
			return handle_error(_), null;
		} finally {
			set_active_effect(y), set_active_reaction(b), set_component_context(x);
		}
	}
	#update_pending_count(_, y) {
		if (!this.has_pending_snippet()) {
			this.parent && this.parent.#update_pending_count(_, y);
			return;
		}
		this.#pending_count += _, this.#pending_count === 0 && (this.#resolve(y), this.#pending_effect && pause_effect(this.#pending_effect, () => {
			this.#pending_effect = null;
		}), this.#offscreen_fragment &&= (this.#anchor.before(this.#offscreen_fragment), null));
	}
	update_pending_count(_, y) {
		this.#update_pending_count(_, y), this.#local_pending_count += _, !(!this.#effect_pending || this.#pending_count_update_queued) && (this.#pending_count_update_queued = !0, queue_micro_task(() => {
			this.#pending_count_update_queued = !1, this.#effect_pending && internal_set(this.#effect_pending, this.#local_pending_count);
		}));
	}
	get_effect_pending() {
		return this.#effect_pending_subscriber(), get(this.#effect_pending);
	}
	error(_) {
		if (!this.#props.onerror && !this.#props.failed) throw _;
		H?.is_fork ? (this.#main_effect && H.skip_effect(this.#main_effect), this.#pending_effect && H.skip_effect(this.#pending_effect), this.#failed_effect && H.skip_effect(this.#failed_effect), H.oncommit(() => {
			this.#handle_error(_);
		})) : this.#handle_error(_);
	}
	#handle_error(_) {
		this.#main_effect &&= (destroy_effect(this.#main_effect), null), this.#pending_effect &&= (destroy_effect(this.#pending_effect), null), this.#failed_effect &&= (destroy_effect(this.#failed_effect), null), xe && (set_hydrate_node(this.#hydrate_open), next(), set_hydrate_node(skip_nodes()));
		var y = this.#props.onerror;
		let b = this.#props.failed;
		var x = !1, S = !1;
		let reset = () => {
			if (x) {
				svelte_boundary_reset_noop();
				return;
			}
			x = !0, S && svelte_boundary_reset_onerror(), this.#failed_effect !== null && pause_effect(this.#failed_effect, () => {
				this.#failed_effect = null;
			}), this.#run(() => {
				this.#render();
			});
		}, handle_error_result = (_) => {
			try {
				S = !0, y?.(_, reset), S = !1;
			} catch (_) {
				invoke_error_boundary(_, this.#effect && this.#effect.parent);
			}
			b && (this.#failed_effect = this.#run(() => {
				try {
					return branch(() => {
						var y = tt;
						y.b = this, y.f |= 128, b(this.#anchor, () => _, () => reset);
					});
				} catch (_) {
					return invoke_error_boundary(_, this.#effect.parent), null;
				}
			}));
		};
		queue_micro_task(() => {
			var y;
			try {
				y = this.transform_error(_);
			} catch (_) {
				invoke_error_boundary(_, this.#effect && this.#effect.parent);
				return;
			}
			typeof y == `object` && y && typeof y.then == `function` ? y.then(handle_error_result, (_) => invoke_error_boundary(_, this.#effect && this.#effect.parent)) : handle_error_result(y);
		});
	}
};
function flatten$1(_, y, b, x) {
	let S = is_runes() ? derived : derived_safe_equal;
	var C = _.filter((_) => !_.settled), w = y.map(S);
	if (b.length === 0 && C.length === 0) {
		x(w);
		return;
	}
	var E = tt, D = capture(), O = C.length === 1 ? C[0].promise : C.length > 1 ? Promise.all(C.map((_) => _.promise)) : null;
	function finish(_) {
		if (!(E.f & 16384)) {
			D();
			try {
				x([...w, ..._]);
			} catch (_) {
				invoke_error_boundary(_, E);
			}
			unset_context();
		}
	}
	var k = increment_pending();
	if (b.length === 0) {
		O.then(() => finish([])).finally(k);
		return;
	}
	function run() {
		Promise.all(b.map((_) => async_derived(_))).then(finish).catch((_) => invoke_error_boundary(_, E)).finally(k);
	}
	O ? O.then(() => {
		D(), run(), unset_context();
	}) : run();
}
function capture() {
	var _ = tt, y = $e, b = we, x = H;
	return function restore(S = !0) {
		set_active_effect(_), set_active_reaction(y), set_component_context(b), S && !(_.f & 16384) && (x?.activate(), x?.apply());
	};
}
function unset_context(_ = !0) {
	set_active_effect(null), set_active_reaction(null), set_component_context(null), _ && H?.deactivate();
}
function increment_pending() {
	var _ = tt, y = _.b, b = H, x = !!y?.is_rendered();
	return y?.update_pending_count(1, b), b.increment(x, _), () => {
		y?.update_pending_count(-1, b), b.decrement(x, _);
	};
}
function derived(_) {
	var y = 2 | z;
	return tt !== null && (tt.f |= ie), {
		ctx: we,
		deps: null,
		effects: null,
		equals,
		f: y,
		fn: _,
		reactions: null,
		rv: 0,
		v: b,
		wv: 0,
		parent: tt,
		ac: null
	};
}
var ke = Symbol(`obsolete`);
function async_derived(_, y, x) {
	let S = tt;
	S === null && async_derived_orphan();
	var C = void 0, w = source(b), E = !$e, D = /* @__PURE__ */ new Set();
	return async_effect(() => {
		var y = tt, b = deferred();
		C = b.promise;
		try {
			Promise.resolve(_()).then(b.resolve, (_) => {
				_ !== ye && b.reject(_);
			}).finally(unset_context);
		} catch (_) {
			b.reject(_), unset_context();
		}
		var x = H;
		if (E) {
			if (y.f & 32768) var O = increment_pending();
			if (S.b?.is_rendered()) x.async_deriveds.get(y)?.reject(ke);
			else for (let _ of D.values()) _.reject(ke);
			D.add(b), x.async_deriveds.set(y, b);
		}
		let handler = (_, y = void 0) => {
			O?.(), D.delete(b), y !== ke && (x.activate(), y ? (w.f |= ue, internal_set(w, y)) : (w.f & 8388608 && (w.f ^= ue), internal_set(w, _)), x.deactivate());
		};
		b.promise.then(handler, (_) => handler(null, _ || `unknown`));
	}), teardown(() => {
		for (let _ of D) _.reject(ke);
	}), new Promise((_) => {
		function next(y) {
			function go() {
				y === C ? _(w) : next(C);
			}
			y.then(go, go);
		}
		next(C);
	});
}
function user_derived(_) {
	let y = derived(_);
	return push_reaction_value(y), y;
}
function derived_safe_equal(_) {
	let y = derived(_);
	return y.equals = safe_equals, y;
}
function destroy_derived_effects(_) {
	var y = _.effects;
	if (y !== null) {
		_.effects = null;
		for (var b = 0; b < y.length; b += 1) destroy_effect(y[b]);
	}
}
function execute_derived(_) {
	var y, x = tt, S = _.parent;
	if (!Qe && S !== null && _.v !== b && S.f & 24576) return derived_inert(), _.v;
	set_active_effect(S);
	try {
		_.f &= ~se, destroy_derived_effects(_), y = update_reaction(_);
	} finally {
		set_active_effect(x);
	}
	return y;
}
function update_derived(_) {
	var y = execute_derived(_);
	if (!_.equals(y) && (_.wv = increment_write_version(), (!H?.is_fork || _.deps === null) && (H === null ? _.v = y : (H.capture(_, y, !0), je?.capture(_, y, !0)), _.deps === null))) {
		set_signal_status(_, R);
		return;
	}
	Qe || (Me === null ? update_derived_status(_) : (effect_tracking() || H?.is_fork) && Me.set(_, y));
}
function freeze_derived_effects(_) {
	if (_.effects !== null) for (let y of _.effects) (y.teardown || y.ac) && (y.teardown?.(), y.ac?.abort(ye), y.fn !== null && (y.teardown = noop), y.ac = null, remove_reactions(y, 0), destroy_effect_children(y));
}
function unfreeze_derived_effects(_) {
	if (_.effects !== null) for (let y of _.effects) y.teardown && y.fn !== null && update_effect(y);
}
var Ae = null, H = null, je = null, Me = null, Ne = null, Pe = !1, Fe = !1, Ie = null, Le = null, Re = 0, ze = 1, Be = class Batch {
	id = ze++;
	#started = !1;
	linked = !0;
	#prev = null;
	#next = null;
	async_deriveds = /* @__PURE__ */ new Map();
	current = /* @__PURE__ */ new Map();
	previous = /* @__PURE__ */ new Map();
	#commit_callbacks = /* @__PURE__ */ new Set();
	#discard_callbacks = /* @__PURE__ */ new Set();
	#pending = 0;
	#blocking_pending = /* @__PURE__ */ new Map();
	#deferred = null;
	#roots = [];
	#new_effects = [];
	#dirty_effects = /* @__PURE__ */ new Set();
	#maybe_dirty_effects = /* @__PURE__ */ new Set();
	#skipped_branches = /* @__PURE__ */ new Map();
	#unskipped_branches = /* @__PURE__ */ new Set();
	is_fork = !1;
	#decrement_queued = !1;
	constructor() {
		Ae === null ? Ae = this : (Ae.#next = this, this.#prev = Ae), Ae = this;
	}
	#is_deferred() {
		if (this.is_fork) return !0;
		for (let b of this.#blocking_pending.keys()) {
			for (var _ = b, y = !1; _.parent !== null;) {
				if (this.#skipped_branches.has(_)) {
					y = !0;
					break;
				}
				_ = _.parent;
			}
			if (!y) return !0;
		}
		return !1;
	}
	skip_effect(_) {
		this.#skipped_branches.has(_) || this.#skipped_branches.set(_, {
			d: [],
			m: []
		}), this.#unskipped_branches.delete(_);
	}
	unskip_effect(_, y = (_) => this.schedule(_)) {
		var b = this.#skipped_branches.get(_);
		if (b) {
			this.#skipped_branches.delete(_);
			for (var x of b.d) set_signal_status(x, z), y(x);
			for (x of b.m) set_signal_status(x, B), y(x);
		}
		this.#unskipped_branches.add(_);
	}
	#process() {
		this.#started = !0, Re++ > 1e3 && (this.#unlink(), infinite_loop_guard());
		for (let _ of this.#dirty_effects) this.#maybe_dirty_effects.delete(_), set_signal_status(_, z), this.schedule(_);
		for (let _ of this.#maybe_dirty_effects) set_signal_status(_, B), this.schedule(_);
		let _ = this.#roots;
		this.#roots = [], this.apply();
		var y = Ie = [], b = [], x = Le = [];
		for (let x of _) try {
			this.#traverse(x, y, b);
		} catch (_) {
			throw reset_all(x), this.#is_deferred() || this.discard(), _;
		}
		if (H = null, x.length > 0) {
			var S = Batch.ensure();
			for (let _ of x) S.schedule(_);
		}
		if (Ie = null, Le = null, this.#is_deferred()) {
			this.#defer_effects(b), this.#defer_effects(y);
			for (let [_, y] of this.#skipped_branches) reset_branch(_, y);
			x.length > 0 && H.#process();
			return;
		}
		let C = this.#find_earlier_batch();
		if (C) {
			this.#defer_effects(b), this.#defer_effects(y), C.#merge(this);
			return;
		}
		this.#dirty_effects.clear(), this.#maybe_dirty_effects.clear();
		for (let _ of this.#commit_callbacks) _(this);
		this.#commit_callbacks.clear(), je = this, flush_queued_effects(b), flush_queued_effects(y), je = null, this.#deferred?.resolve();
		var w = H;
		if (this.#pending === 0 && (this.#roots.length === 0 || w !== null) && this.#unlink(), this.#roots.length > 0) if (w !== null) {
			let _ = w;
			_.#roots.push(...this.#roots.filter((y) => !_.#roots.includes(y)));
		} else w = this;
		w !== null && w.#process();
	}
	#traverse(_, y, b) {
		_.f ^= R;
		for (var x = _.first; x !== null;) {
			var S = x.f, C = (S & 96) != 0;
			if (!(C && S & 1024 || S & 8192 || this.#skipped_branches.has(x)) && x.fn !== null) {
				C ? x.f ^= R : S & 4 ? y.push(x) : is_dirty(x) && (S & 16 && this.#maybe_dirty_effects.add(x), update_effect(x));
				var w = x.first;
				if (w !== null) {
					x = w;
					continue;
				}
			}
			for (; x !== null;) {
				var E = x.next;
				if (E !== null) {
					x = E;
					break;
				}
				x = x.parent;
			}
		}
	}
	#find_earlier_batch() {
		for (var _ = this.#prev; _ !== null;) {
			if (!_.is_fork) {
				for (let [y, [, b]] of this.current) if (_.current.has(y) && !b) return _;
			}
			_ = _.#prev;
		}
		return null;
	}
	#merge(_) {
		for (let [y, b] of _.current) !this.previous.has(y) && _.previous.has(y) && this.previous.set(y, _.previous.get(y)), this.current.set(y, b);
		for (let [y, b] of _.async_deriveds) {
			let _ = this.async_deriveds.get(y);
			_ && b.promise.then(_.resolve).catch(_.reject);
		}
		_.async_deriveds.clear(), this.transfer_effects(_.#dirty_effects, _.#maybe_dirty_effects);
		let mark = (_) => {
			var y = _.reactions;
			if (y !== null) for (let _ of y) {
				var b = _.f;
				if (b & 2) mark(_);
				else {
					var x = _;
					b & 4194320 && !this.async_deriveds.has(x) && (this.#maybe_dirty_effects.delete(x), set_signal_status(x, z), this.schedule(x));
				}
			}
		};
		for (let _ of this.current.keys()) mark(_);
		this.oncommit(() => _.discard()), _.#unlink(), H = this, this.#process();
	}
	#defer_effects(_) {
		for (var y = 0; y < _.length; y += 1) defer_effect(_[y], this.#dirty_effects, this.#maybe_dirty_effects);
	}
	capture(_, y, x = !1) {
		_.v !== b && !this.previous.has(_) && this.previous.set(_, _.v), _.f & 8388608 || (this.current.set(_, [y, x]), Me?.set(_, y)), this.is_fork || (_.v = y);
	}
	activate() {
		H = this;
	}
	deactivate() {
		H = null, Me = null;
	}
	flush() {
		try {
			Fe = !0, H = this, this.#process();
		} finally {
			Re = 0, Ne = null, Ie = null, Le = null, Fe = !1, H = null, Me = null, Ue.clear();
		}
	}
	discard() {
		for (let _ of this.#discard_callbacks) _(this);
		this.#discard_callbacks.clear();
		for (let _ of this.async_deriveds.values()) _.reject(ke);
		this.#unlink(), this.#deferred?.resolve();
	}
	register_created_effect(_) {
		this.#new_effects.push(_);
	}
	increment(_, y) {
		if (this.#pending += 1, _) {
			let _ = this.#blocking_pending.get(y) ?? 0;
			this.#blocking_pending.set(y, _ + 1);
		}
	}
	decrement(_, y) {
		if (--this.#pending, _) {
			let _ = this.#blocking_pending.get(y) ?? 0;
			_ === 1 ? this.#blocking_pending.delete(y) : this.#blocking_pending.set(y, _ - 1);
		}
		this.#decrement_queued || (this.#decrement_queued = !0, queue_micro_task(() => {
			this.#decrement_queued = !1, this.linked && this.flush();
		}));
	}
	transfer_effects(_, y) {
		for (let y of _) this.#dirty_effects.add(y);
		for (let _ of y) this.#maybe_dirty_effects.add(_);
		_.clear(), y.clear();
	}
	oncommit(_) {
		this.#commit_callbacks.add(_);
	}
	ondiscard(_) {
		this.#discard_callbacks.add(_);
	}
	settled() {
		return (this.#deferred ??= deferred()).promise;
	}
	static ensure() {
		if (H === null) {
			let _ = H = new Batch();
			!Fe && !Pe && queue_micro_task(() => {
				_.#started || _.flush();
			});
		}
		return H;
	}
	apply() {
		Me = null;
	}
	schedule(_) {
		if (Ne = _, _.b?.is_pending && _.f & 16777228 && !(_.f & 32768)) {
			_.b.defer_effect(_);
			return;
		}
		for (var y = _; y.parent !== null;) {
			y = y.parent;
			var b = y.f;
			if (Ie !== null && y === tt && ($e === null || !($e.f & 2))) return;
			if (b & 96) {
				if (!(b & 1024)) return;
				y.f ^= R;
			}
		}
		this.#roots.push(y);
	}
	#unlink() {
		if (this.linked) {
			var _ = this.#prev, y = this.#next;
			_ === null || (_.#next = y), y === null ? Ae = _ : y.#prev = _, this.linked = !1;
		}
	}
};
function flushSync(_) {
	var y = Pe;
	Pe = !0;
	try {
		var b;
		for (_ && (H !== null && !H.is_fork && H.flush(), b = _());;) {
			if (flush_tasks(), H === null) return b;
			H.flush();
		}
	} finally {
		Pe = y;
	}
}
function infinite_loop_guard() {
	try {
		effect_update_depth_exceeded();
	} catch (_) {
		invoke_error_boundary(_, Ne);
	}
}
var Ve = null;
function flush_queued_effects(_) {
	var y = _.length;
	if (y !== 0) {
		for (var b = 0; b < y;) {
			var x = _[b++];
			if (!(x.f & 24576) && is_dirty(x) && (Ve = /* @__PURE__ */ new Set(), update_effect(x), x.deps === null && x.first === null && x.nodes === null && x.teardown === null && x.ac === null && unlink_effect(x), Ve?.size > 0)) {
				Ue.clear();
				for (let _ of Ve) {
					if (_.f & 24576) continue;
					let y = [_], b = _.parent;
					for (; b !== null;) Ve.has(b) && (Ve.delete(b), y.push(b)), b = b.parent;
					for (let _ = y.length - 1; _ >= 0; _--) {
						let b = y[_];
						b.f & 24576 || update_effect(b);
					}
				}
				Ve.clear();
			}
		}
		Ve = null;
	}
}
function mark_effects(_, y, b, x) {
	if (!b.has(_) && (b.add(_), _.reactions !== null)) for (let S of _.reactions) {
		let _ = S.f;
		_ & 2 ? mark_effects(S, y, b, x) : _ & 4194320 && !(_ & 2048) && depends_on(S, y, x) && (set_signal_status(S, z), schedule_effect(S));
	}
}
function depends_on(_, y, b) {
	let x = b.get(_);
	if (x !== void 0) return x;
	if (_.deps !== null) for (let x of _.deps) {
		if (D.call(y, x)) return !0;
		if (x.f & 2 && depends_on(x, y, b)) return b.set(x, !0), !0;
	}
	return b.set(_, !1), !1;
}
function schedule_effect(_) {
	H.schedule(_);
}
function reset_branch(_, y) {
	if (!(_.f & 32 && _.f & 1024)) {
		_.f & 2048 ? y.d.push(_) : _.f & 4096 && y.m.push(_), set_signal_status(_, R);
		for (var b = _.first; b !== null;) reset_branch(b, y), b = b.next;
	}
}
function reset_all(_) {
	set_signal_status(_, R);
	for (var y = _.first; y !== null;) reset_all(y), y = y.next;
}
var He = /* @__PURE__ */ new Set(), Ue = /* @__PURE__ */ new Map(), We = !1;
function source(_, y) {
	return {
		f: 0,
		v: _,
		reactions: null,
		equals,
		rv: 0,
		wv: 0
	};
}
function state(_, y) {
	let b = source(_, y);
	return push_reaction_value(b), b;
}
function mutable_source(_, y = !1, b = !0) {
	let x = source(_);
	return y || (x.equals = safe_equals), x;
}
function set(_, y, b = !1) {
	return $e !== null && (!et || $e.f & 131072) && is_runes() && $e.f & 4325394 && (nt === null || !nt.has(_)) && state_unsafe_mutation(), internal_set(_, b ? proxy(y) : y, Le);
}
function internal_set(_, y, b = null) {
	if (!_.equals(y)) {
		Ue.set(_, Qe ? y : _.v);
		var x = Be.ensure();
		if (x.capture(_, y), _.f & 2) {
			let y = _;
			_.f & 2048 && execute_derived(y), Me === null && update_derived_status(y);
		}
		_.wv = increment_write_version(), mark_reactions(_, z, b), is_runes() && tt !== null && tt.f & 1024 && !(tt.f & 96) && (it === null ? set_untracked_writes([_]) : it.push(_)), !x.is_fork && He.size > 0 && !We && flush_eager_effects();
	}
	return y;
}
function flush_eager_effects() {
	We = !1;
	for (let _ of He) {
		_.f & 1024 && set_signal_status(_, B);
		let y;
		try {
			y = is_dirty(_);
		} catch {
			y = !0;
		}
		y && update_effect(_);
	}
	He.clear();
}
function increment(_) {
	set(_, _.v + 1);
}
function mark_reactions(_, y, b) {
	var x = _.reactions;
	if (x !== null) for (var S = is_runes(), C = x.length, w = 0; w < C; w++) {
		var E = x[w], D = E.f;
		if (!(!S && E === tt)) {
			var O = (D & z) === 0;
			if (O && set_signal_status(E, y), D & 131072) He.add(E);
			else if (D & 2) {
				var k = E;
				Me?.delete(k), D & 65536 || (D & 512 && (tt === null || !(tt.f & 2097152)) && (E.f |= se), mark_reactions(k, B, b));
			} else if (O) {
				var A = E;
				D & 16 && Ve !== null && Ve.add(A), b === null ? schedule_effect(A) : b.push(A);
			}
		}
	}
}
function proxy(_) {
	if (typeof _ != `object` || !_ || de in _) return _;
	let y = F(_);
	if (y !== N && y !== P) return _;
	var x = /* @__PURE__ */ new Map(), S = w(_), C = state(0), E = null, D = st, with_parent = (_) => {
		if (st === D) return _();
		var y = $e, b = st;
		set_active_reaction(null), set_update_version(D);
		var x = _();
		return set_active_reaction(y), set_update_version(b), x;
	};
	return S && x.set(`length`, state(_.length, E)), new Proxy(_, {
		defineProperty(_, y, b) {
			(!(`value` in b) || b.configurable === !1 || b.enumerable === !1 || b.writable === !1) && state_descriptors_fixed();
			var S = x.get(y);
			return S === void 0 ? with_parent(() => {
				var _ = state(b.value, E);
				return x.set(y, _), _;
			}) : set(S, b.value, !0), !0;
		},
		deleteProperty(_, y) {
			var S = x.get(y);
			if (S === void 0) {
				if (y in _) {
					let _ = with_parent(() => state(b, E));
					x.set(y, _), increment(C);
				}
			} else set(S, b), increment(C);
			return !0;
		},
		get(y, S, C) {
			if (S === de) return _;
			var w = x.get(S), D = S in y;
			if (w === void 0 && (!D || A(y, S)?.writable) && (w = with_parent(() => state(proxy(D ? y[S] : b), E)), x.set(S, w)), w !== void 0) {
				var O = get(w);
				return O === b ? void 0 : O;
			}
			return Reflect.get(y, S, C);
		},
		getOwnPropertyDescriptor(_, y) {
			var S = Reflect.getOwnPropertyDescriptor(_, y);
			if (S && `value` in S) {
				var C = x.get(y);
				C && (S.value = get(C));
			} else if (S === void 0) {
				var w = x.get(y), E = w?.v;
				if (w !== void 0 && E !== b) return {
					enumerable: !0,
					configurable: !0,
					value: E,
					writable: !0
				};
			}
			return S;
		},
		has(_, y) {
			if (y === de) return !0;
			var S = x.get(y), C = S !== void 0 && S.v !== b || Reflect.has(_, y);
			return (S !== void 0 || tt !== null && (!C || A(_, y)?.writable)) && (S === void 0 && (S = with_parent(() => state(C ? proxy(_[y]) : b, E)), x.set(y, S)), get(S) === b) ? !1 : C;
		},
		set(_, y, w, D) {
			var O = x.get(y), k = y in _;
			if (S && y === `length`) for (var j = w; j < O.v; j += 1) {
				var N = x.get(j + ``);
				N === void 0 ? j in _ && (N = with_parent(() => state(b, E)), x.set(j + ``, N)) : set(N, b);
			}
			if (O === void 0) (!k || A(_, y)?.writable) && (O = with_parent(() => state(void 0, E)), set(O, proxy(w)), x.set(y, O));
			else {
				k = O.v !== b;
				var P = with_parent(() => proxy(w));
				set(O, P);
			}
			var F = Reflect.getOwnPropertyDescriptor(_, y);
			if (F?.set && F.set.call(D, w), !k) {
				if (S && typeof y == `string`) {
					var I = x.get(`length`), L = Number(y);
					Number.isInteger(L) && L >= I.v && set(I, L + 1);
				}
				increment(C);
			}
			return !0;
		},
		ownKeys(_) {
			get(C);
			var y = Reflect.ownKeys(_).filter((_) => {
				var y = x.get(_);
				return y === void 0 || y.v !== b;
			});
			for (var [S, w] of x) w.v !== b && !(S in _) && y.push(S);
			return y;
		},
		setPrototypeOf() {
			state_prototype_fixed();
		}
	});
}
function get_proxied_value(_) {
	try {
		if (typeof _ == `object` && _ && de in _) return _[de];
	} catch {}
	return _;
}
function is(_, y) {
	return Object.is(get_proxied_value(_), get_proxied_value(y));
}
var Ge, Ke, qe, Je;
function init_operations() {
	if (Ge === void 0) {
		Ge = window, Ke = /Firefox/.test(navigator.userAgent);
		var _ = Element.prototype, y = Node.prototype, b = Text.prototype;
		qe = A(y, `firstChild`).get, Je = A(y, `nextSibling`).get, I(_) && (_[he] = void 0, _[me] = null, _[ge] = void 0, _.__e = void 0), I(b) && (b[_e] = void 0);
	}
}
function create_text(_ = ``) {
	return document.createTextNode(_);
}
function get_first_child(_) {
	return qe.call(_);
}
function get_next_sibling(_) {
	return Je.call(_);
}
function child(_, y) {
	if (!xe) return get_first_child(_);
	var b = get_first_child(Se);
	if (b === null) b = Se.appendChild(create_text());
	else if (y && b.nodeType !== 3) {
		var x = create_text();
		return b?.before(x), set_hydrate_node(x), x;
	}
	return y && merge_text_nodes(b), set_hydrate_node(b), b;
}
function first_child(_, y = !1) {
	if (!xe) {
		var b = get_first_child(_);
		return b instanceof Comment && b.data === `` ? get_next_sibling(b) : b;
	}
	if (y) {
		if (Se?.nodeType !== 3) {
			var x = create_text();
			return Se?.before(x), set_hydrate_node(x), x;
		}
		merge_text_nodes(Se);
	}
	return Se;
}
function sibling(_, y = 1, b = !1) {
	let x = xe ? Se : _;
	for (var S; y--;) S = x, x = get_next_sibling(x);
	if (!xe) return x;
	if (b) {
		if (x?.nodeType !== 3) {
			var C = create_text();
			return x === null ? S?.after(C) : x.before(C), set_hydrate_node(C), C;
		}
		merge_text_nodes(x);
	}
	return set_hydrate_node(x), x;
}
function clear_text_content(_) {
	_.textContent = ``;
}
function should_defer_append() {
	return !1;
}
function create_element(_, y, b) {
	return y == null || y === `http://www.w3.org/1999/xhtml` ? b ? document.createElement(_, { is: b }) : document.createElement(_) : b ? document.createElementNS(y, _, { is: b }) : document.createElementNS(y, _);
}
function merge_text_nodes(_) {
	if (_.nodeValue.length < 65536) return;
	let y = _.nextSibling;
	for (; y !== null && y.nodeType === 3;) y.remove(), _.nodeValue += y.nodeValue, y = _.nextSibling;
}
function autofocus(_, y) {
	if (y) {
		let y = document.body;
		_.autofocus = !0, queue_micro_task(() => {
			document.activeElement === y && _.focus();
		});
	}
}
var Ye = !1;
function add_form_reset_listener() {
	Ye || (Ye = !0, document.addEventListener(`reset`, (_) => {
		Promise.resolve().then(() => {
			if (!_.defaultPrevented) for (let y of _.target.elements) y[ve]?.();
		});
	}, { capture: !0 }));
}
function without_reactive_context(_) {
	var y = $e, b = tt;
	set_active_reaction(null), set_active_effect(null);
	try {
		return _();
	} finally {
		set_active_reaction(y), set_active_effect(b);
	}
}
function listen_to_event_and_reset_event(_, y, b, x = b) {
	_.addEventListener(y, () => without_reactive_context(b));
	let S = _[ve];
	S ? _[ve] = () => {
		S(), x(!0);
	} : _[ve] = () => x(!0), add_form_reset_listener();
}
function validate_effect(_) {
	tt === null && ($e === null && effect_orphan(_), effect_in_unowned_derived()), Qe && effect_in_teardown(_);
}
function push_effect(_, y) {
	var b = y.last;
	b === null ? y.last = y.first = _ : (b.next = _, _.prev = b, y.last = _);
}
function create_effect(_, y) {
	var b = tt;
	b !== null && b.f & 8192 && (_ |= ee);
	var x = {
		ctx: we,
		deps: null,
		nodes: null,
		f: _ | z | 512,
		first: null,
		fn: y,
		last: null,
		next: null,
		parent: b,
		b: b && b.b,
		prev: null,
		teardown: null,
		wv: 0,
		ac: null
	};
	H?.register_created_effect(x);
	var S = x;
	if (_ & 4) Ie === null ? Be.ensure().schedule(x) : Ie.push(x);
	else if (y !== null) {
		try {
			update_effect(x);
		} catch (_) {
			throw destroy_effect(x), _;
		}
		S.deps === null && S.teardown === null && S.nodes === null && S.first === S.last && !(S.f & 524288) && (S = S.first, _ & 16 && _ & 65536 && S !== null && (S.f |= re));
	}
	if (S !== null && (S.parent = b, b !== null && push_effect(S, b), $e !== null && $e.f & 2 && !(_ & 64))) {
		var C = $e;
		(C.effects ??= []).push(S);
	}
	return x;
}
function effect_tracking() {
	return $e !== null && !et;
}
function teardown(_) {
	let y = create_effect(8, null);
	return set_signal_status(y, R), y.teardown = _, y;
}
function user_effect(_) {
	validate_effect(`$effect`);
	var y = tt.f;
	if (!$e && y & 32 && we !== null && !we.i) {
		var b = we;
		(b.e ??= []).push(_);
	} else return create_user_effect(_);
}
function create_user_effect(_) {
	return create_effect(4 | ae, _);
}
function component_root(_) {
	Be.ensure();
	let y = create_effect(64 | ie, _);
	return (_ = {}) => new Promise((b) => {
		_.outro ? pause_effect(y, () => {
			destroy_effect(y), b(void 0);
		}) : (destroy_effect(y), b(void 0));
	});
}
function effect(_) {
	return create_effect(4, _);
}
function async_effect(_) {
	return create_effect(le | ie, _);
}
function render_effect(_, y = 0) {
	return create_effect(8 | y, _);
}
function template_effect(_, y = [], b = [], x = []) {
	flatten$1(x, y, b, (y) => {
		create_effect(8, () => {
			_(...y.map(get));
		});
	});
}
function block(_, y = 0) {
	return create_effect(16 | y, _);
}
function managed(_, y = 0) {
	return create_effect(L | y, _);
}
function branch(_) {
	return create_effect(32 | ie, _);
}
function execute_effect_teardown(_) {
	var y = _.teardown;
	if (y !== null) {
		let _ = Qe, b = $e;
		set_is_destroying_effect(!0), set_active_reaction(null);
		try {
			y.call(null);
		} finally {
			set_is_destroying_effect(_), set_active_reaction(b);
		}
	}
}
function destroy_effect_children(_, y = !1) {
	var b = _.first;
	for (_.first = _.last = null; b !== null;) {
		let _ = b.ac;
		_ !== null && without_reactive_context(() => {
			_.abort(ye);
		});
		var x = b.next;
		b.f & 64 ? b.parent = null : destroy_effect(b, y), b = x;
	}
}
function destroy_block_effect_children(_) {
	for (var y = _.first; y !== null;) {
		var b = y.next;
		y.f & 32 || destroy_effect(y), y = b;
	}
}
function destroy_effect(_, y = !0) {
	var b = !1;
	(y || _.f & 262144) && _.nodes !== null && _.nodes.end !== null && (remove_effect_dom(_.nodes.start, _.nodes.end), b = !0), _.f |= V, destroy_effect_children(_, y && !b), remove_reactions(_, 0);
	var x = _.nodes && _.nodes.t;
	if (x !== null) for (let _ of x) _.stop();
	execute_effect_teardown(_), _.f ^= V, _.f |= te;
	var S = _.parent;
	S !== null && S.first !== null && unlink_effect(_), _.next = _.prev = _.teardown = _.ctx = _.deps = _.fn = _.nodes = _.ac = _.b = null;
}
function remove_effect_dom(_, y) {
	for (; _ !== null;) {
		var b = _ === y ? null : get_next_sibling(_);
		_.remove(), _ = b;
	}
}
function unlink_effect(_) {
	var y = _.parent, b = _.prev, x = _.next;
	b !== null && (b.next = x), x !== null && (x.prev = b), y !== null && (y.first === _ && (y.first = x), y.last === _ && (y.last = b));
}
function pause_effect(_, y, b = !0) {
	var x = [];
	pause_children(_, x, !0);
	var fn = () => {
		b && destroy_effect(_), y && y();
	}, S = x.length;
	if (S > 0) {
		var check = () => --S || fn();
		for (var C of x) C.out(check);
	} else fn();
}
function pause_children(_, y, b) {
	if (!(_.f & 8192)) {
		_.f ^= ee;
		var x = _.nodes && _.nodes.t;
		if (x !== null) for (let _ of x) (_.is_global || b) && y.push(_);
		for (var S = _.first; S !== null;) {
			var C = S.next;
			if (!(S.f & 64)) {
				var w = (S.f & 65536) != 0 || (S.f & 32) != 0 && (_.f & 16) != 0;
				pause_children(S, y, w ? b : !1);
			}
			S = C;
		}
	}
}
function resume_effect(_) {
	resume_children(_, !0);
}
function resume_children(_, y) {
	if (_.f & 8192) {
		_.f ^= ee, _.f & 1024 || (set_signal_status(_, z), Be.ensure().schedule(_));
		for (var b = _.first; b !== null;) {
			var x = b.next, S = (b.f & 65536) != 0 || (b.f & 32) != 0;
			resume_children(b, S ? y : !1), b = x;
		}
		var C = _.nodes && _.nodes.t;
		if (C !== null) for (let _ of C) (_.is_global || y) && _.in();
	}
}
function move_effect(_, y) {
	if (_.nodes) for (var b = _.nodes.start, x = _.nodes.end; b !== null;) {
		var S = b === x ? null : get_next_sibling(b);
		y.append(b), b = S;
	}
}
var Xe = null, Ze = !1, Qe = !1;
function set_is_destroying_effect(_) {
	Qe = _;
}
var $e = null, et = !1;
function set_active_reaction(_) {
	$e = _;
}
var tt = null;
function set_active_effect(_) {
	tt = _;
}
var nt = null;
function push_reaction_value(_) {
	$e !== null && (nt ??= /* @__PURE__ */ new Set()).add(_);
}
var U = null, rt = 0, it = null;
function set_untracked_writes(_) {
	it = _;
}
var at = 1, ot = 0, st = ot;
function set_update_version(_) {
	st = _;
}
function increment_write_version() {
	return ++at;
}
function is_dirty(_) {
	var y = _.f;
	if (y & 2048) return !0;
	if (y & 2 && (_.f &= ~se), y & 4096) {
		for (var b = _.deps, x = b.length, S = 0; S < x; S++) {
			var C = b[S];
			if (is_dirty(C) && update_derived(C), C.wv > _.wv) return !0;
		}
		y & 512 && Me === null && set_signal_status(_, R);
	}
	return !1;
}
function schedule_possible_effect_self_invalidation(_, y, b = !0) {
	var x = _.reactions;
	if (x !== null && !(nt !== null && nt.has(_))) for (var S = 0; S < x.length; S++) {
		var C = x[S];
		C.f & 2 ? schedule_possible_effect_self_invalidation(C, y, !1) : y === C && (b ? set_signal_status(C, z) : C.f & 1024 && set_signal_status(C, B), schedule_effect(C));
	}
}
function update_reaction(_) {
	var y = U, b = rt, x = it, S = $e, C = nt, w = we, E = et, D = st, O = _.f;
	U = null, rt = 0, it = null, $e = O & 96 ? null : _, nt = null, set_component_context(_.ctx), et = !1, st = ++ot, _.ac !== null && (without_reactive_context(() => {
		_.ac.abort(ye);
	}), _.ac = null);
	try {
		_.f |= ce;
		var k = _.fn, A = k();
		_.f |= ne;
		var j = _.deps, N = H?.is_fork;
		if (U !== null) {
			var P;
			if (N || remove_reactions(_, rt), j !== null && rt > 0) for (j.length = rt + U.length, P = 0; P < U.length; P++) j[rt + P] = U[P];
			else _.deps = j = U;
			if (effect_tracking() && _.f & 512) for (P = rt; P < j.length; P++) (j[P].reactions ??= []).push(_);
		} else !N && j !== null && rt < j.length && (remove_reactions(_, rt), j.length = rt);
		if (is_runes() && it !== null && !et && j !== null && !(_.f & 6146)) for (P = 0; P < it.length; P++) schedule_possible_effect_self_invalidation(it[P], _);
		if (S !== null && S !== _) {
			if (ot++, S.deps !== null) for (let _ = 0; _ < b; _ += 1) S.deps[_].rv = ot;
			if (y !== null) for (let _ of y) _.rv = ot;
			it !== null && (x === null ? x = it : x.push(...it));
		}
		return _.f & 8388608 && (_.f ^= ue), A;
	} catch (_) {
		return handle_error(_);
	} finally {
		_.f ^= ce, U = y, rt = b, it = x, $e = S, nt = C, set_component_context(w), et = E, st = D;
	}
}
function remove_reaction(_, y) {
	let x = y.reactions;
	if (x !== null) {
		var S = E.call(x, _);
		if (S !== -1) {
			var C = x.length - 1;
			C === 0 ? x = y.reactions = null : (x[S] = x[C], x.pop());
		}
	}
	if (x === null && y.f & 2 && (U === null || !D.call(U, y))) {
		var w = y;
		w.f & 512 && (w.f ^= 512, w.f &= ~se), w.v !== b && update_derived_status(w), freeze_derived_effects(w), remove_reactions(w, 0);
	}
}
function remove_reactions(_, y) {
	var b = _.deps;
	if (b !== null) for (var x = y; x < b.length; x++) remove_reaction(_, b[x]);
}
function update_effect(_) {
	var y = _.f;
	if (!(y & 16384)) {
		set_signal_status(_, R);
		var b = tt, x = Ze;
		tt = _, Ze = !0;
		try {
			y & 16777232 ? destroy_block_effect_children(_) : destroy_effect_children(_), execute_effect_teardown(_);
			var S = update_reaction(_);
			_.teardown = typeof S == `function` ? S : null, _.wv = at;
		} finally {
			Ze = x, tt = b;
		}
	}
}
async function tick() {
	await Promise.resolve(), flushSync();
}
function get(_) {
	var y = (_.f & 2) != 0;
	if (Xe?.add(_), $e !== null && !et && !(tt !== null && tt.f & 16384) && (nt === null || !nt.has(_))) {
		var b = $e.deps;
		if ($e.f & 2097152) _.rv < ot && (_.rv = ot, U === null && b !== null && b[rt] === _ ? rt++ : U === null ? U = [_] : U.push(_));
		else {
			$e.deps ??= [], D.call($e.deps, _) || $e.deps.push(_);
			var x = _.reactions;
			x === null ? _.reactions = [$e] : D.call(x, $e) || x.push($e);
		}
	}
	if (Qe && Ue.has(_)) return Ue.get(_);
	if (y) {
		var S = _;
		if (Qe) {
			var C = S.v;
			return (!(S.f & 1024) && S.reactions !== null || depends_on_old_values(S)) && (C = execute_derived(S)), Ue.set(S, C), C;
		}
		var w = (S.f & 512) == 0 && !et && $e !== null && (Ze || ($e.f & 512) != 0), E = (S.f & ne) === 0;
		is_dirty(S) && (w && (S.f |= 512), update_derived(S)), w && !E && (unfreeze_derived_effects(S), reconnect(S));
	}
	if (Me?.has(_)) return Me.get(_);
	if (_.f & 8388608) throw _.v;
	return _.v;
}
function reconnect(_) {
	if (_.f |= 512, _.deps !== null) for (let y of _.deps) (y.reactions ??= []).push(_), y.f & 2 && !(y.f & 512) && (unfreeze_derived_effects(y), reconnect(y));
}
function depends_on_old_values(_) {
	if (_.v === b) return !0;
	if (_.deps === null) return !1;
	for (let y of _.deps) if (Ue.has(y) || y.f & 2 && depends_on_old_values(y)) return !0;
	return !1;
}
function untrack(_) {
	var y = et;
	try {
		return et = !0, _();
	} finally {
		et = y;
	}
}
function deep_read_state(_) {
	if (!(typeof _ != `object` || !_ || _ instanceof EventTarget)) {
		if (de in _) deep_read(_);
		else if (!Array.isArray(_)) for (let y in _) {
			let b = _[y];
			typeof b == `object` && b && de in b && deep_read(b);
		}
	}
}
function deep_read(_, y = /* @__PURE__ */ new Set()) {
	if (typeof _ == `object` && _ && !(_ instanceof EventTarget) && !y.has(_)) {
		y.add(_), _ instanceof Date && _.getTime();
		for (let b in _) try {
			deep_read(_[b], y);
		} catch {}
		let b = F(_);
		if (b !== Object.prototype && b !== Array.prototype && b !== Map.prototype && b !== Set.prototype && b !== Date.prototype) {
			let y = j(b);
			for (let b in y) {
				let x = y[b].get;
				if (x) try {
					x.call(_);
				} catch {}
			}
		}
	}
}
var W = Symbol(`events`), ct = /* @__PURE__ */ new Set(), lt = /* @__PURE__ */ new Set();
function create_event(_, y, b, x = {}) {
	function target_handler(_) {
		if (x.capture || handle_event_propagation.call(y, _), !_.cancelBubble) return without_reactive_context(() => b?.call(this, _));
	}
	return _.startsWith(`pointer`) || _.startsWith(`touch`) || _ === `wheel` ? queue_micro_task(() => {
		y.addEventListener(_, target_handler, x);
	}) : y.addEventListener(_, target_handler, x), target_handler;
}
function event(_, y, b, x, S) {
	var C = {
		capture: x,
		passive: S
	}, w = create_event(_, y, b, C);
	(y === document.body || y === window || y === document || y instanceof HTMLMediaElement) && teardown(() => {
		y.removeEventListener(_, w, C);
	});
}
function delegated(_, y, b) {
	(y[W] ??= {})[_] = b;
}
function delegate(_) {
	for (var y = 0; y < _.length; y++) ct.add(_[y]);
	for (var b of lt) b(_);
}
var ut = null;
function handle_event_propagation(_) {
	var y = this, b = y.ownerDocument, x = _.type, S = _.composedPath?.() || [], C = S[0] || _.target;
	ut = _;
	var w = 0, E = ut === _ && _[W];
	if (E) {
		var D = S.indexOf(E);
		if (D !== -1 && (y === document || y === window)) {
			_[W] = y;
			return;
		}
		var O = S.indexOf(y);
		if (O === -1) return;
		D <= O && (w = D);
	}
	if (C = S[w] || _.target, C !== y) {
		k(_, `currentTarget`, {
			configurable: !0,
			get() {
				return C || b;
			}
		});
		var A = $e, j = tt;
		set_active_reaction(null), set_active_effect(null);
		try {
			for (var N, P = []; C !== null && C !== y;) {
				try {
					var F = C[W]?.[x];
					F != null && (!C.disabled || _.target === C) && F.call(C, _);
				} catch (_) {
					N ? P.push(_) : N = _;
				}
				if (_.cancelBubble) break;
				w++, C = w < S.length ? S[w] : null;
			}
			if (N) {
				for (let _ of P) queueMicrotask(() => {
					throw _;
				});
				throw N;
			}
		} finally {
			_[W] = y, delete _.currentTarget, set_active_reaction(A), set_active_effect(j);
		}
	}
}
var dt = globalThis?.window?.trustedTypes && globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`, { createHTML: (_) => _ });
function create_trusted_html(_) {
	return dt?.createHTML(_) ?? _;
}
function create_fragment_from_html(_) {
	var y = create_element(`template`);
	return y.innerHTML = create_trusted_html(_.replaceAll(`<!>`, `<!---->`)), y.content;
}
function assign_nodes(_, y) {
	var b = tt;
	b.nodes === null && (b.nodes = {
		start: _,
		end: y,
		a: null,
		t: null
	});
}
function from_html(_, y) {
	var b = (y & 1) != 0, x = (y & 2) != 0, S, C = !_.startsWith(`<!>`);
	return () => {
		if (xe) return assign_nodes(Se, null), Se;
		S === void 0 && (S = create_fragment_from_html(C ? _ : `<!>` + _), b || (S = get_first_child(S)));
		var y = x || Ke ? document.importNode(S, !0) : S.cloneNode(!0);
		if (b) {
			var w = get_first_child(y), E = y.lastChild;
			assign_nodes(w, E);
		} else assign_nodes(y, y);
		return y;
	};
}
function from_namespace(_, y, b = `svg`) {
	var x = !_.startsWith(`<!>`), S = (y & 1) != 0, C = `<${b}>${x ? _ : `<!>` + _}</${b}>`, w;
	return () => {
		if (xe) return assign_nodes(Se, null), Se;
		if (!w) {
			var _ = get_first_child(create_fragment_from_html(C));
			if (S) for (w = document.createDocumentFragment(); get_first_child(_);) w.appendChild(get_first_child(_));
			else w = get_first_child(_);
		}
		var y = w.cloneNode(!0);
		if (S) {
			var b = get_first_child(y), x = y.lastChild;
			assign_nodes(b, x);
		} else assign_nodes(y, y);
		return y;
	};
}
function from_svg(_, y) {
	return from_namespace(_, y, `svg`);
}
function text(_ = ``) {
	if (!xe) {
		var y = create_text(_ + ``);
		return assign_nodes(y, y), y;
	}
	var b = Se;
	return b.nodeType === 3 ? merge_text_nodes(b) : (b.before(b = create_text()), set_hydrate_node(b)), assign_nodes(b, b), b;
}
function comment$1() {
	if (xe) return assign_nodes(Se, null), Se;
	var _ = document.createDocumentFragment(), y = document.createComment(``), b = create_text();
	return _.append(y, b), assign_nodes(y, b), _;
}
function append(_, y) {
	if (xe) {
		var b = tt;
		(!(b.f & 32768) || b.nodes.end === null) && (b.nodes.end = Se), hydrate_next();
		return;
	}
	_ !== null && _.before(y);
}
function props_id() {
	if (xe && Se && Se.nodeType === 8 && Se.textContent?.startsWith(`$`)) {
		let _ = Se.textContent.substring(1);
		return hydrate_next(), _;
	}
	return (window.__svelte ??= {}).uid ??= 1, `c${window.__svelte.uid++}`;
}
function is_capture_event(_) {
	return _.endsWith(`capture`) && _ !== `gotpointercapture` && _ !== `lostpointercapture`;
}
var ft = [
	`beforeinput`,
	`click`,
	`change`,
	`dblclick`,
	`contextmenu`,
	`focusin`,
	`focusout`,
	`input`,
	`keydown`,
	`keyup`,
	`mousedown`,
	`mousemove`,
	`mouseout`,
	`mouseover`,
	`mouseup`,
	`pointerdown`,
	`pointermove`,
	`pointerout`,
	`pointerover`,
	`pointerup`,
	`touchend`,
	`touchmove`,
	`touchstart`
];
function can_delegate_event(_) {
	return ft.includes(_);
}
var pt = `allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`), mt = {
	formnovalidate: `formNoValidate`,
	ismap: `isMap`,
	nomodule: `noModule`,
	playsinline: `playsInline`,
	readonly: `readOnly`,
	defaultvalue: `defaultValue`,
	defaultchecked: `defaultChecked`,
	srcobject: `srcObject`,
	novalidate: `noValidate`,
	allowfullscreen: `allowFullscreen`,
	disablepictureinpicture: `disablePictureInPicture`,
	disableremoteplayback: `disableRemotePlayback`
};
function normalize_attribute(_) {
	return _ = _.toLowerCase(), mt[_] ?? _;
}
[...pt];
var ht = [`touchstart`, `touchmove`];
function is_passive_event(_) {
	return ht.includes(_);
}
var gt = !0;
function set_text(_, y) {
	var b = y == null ? `` : typeof y == `object` ? `${y}` : y;
	b !== (_[_e] ??= _.nodeValue) && (_[_e] = b, _.nodeValue = `${b}`);
}
function mount(_, y) {
	return _mount(_, y);
}
var _t = /* @__PURE__ */ new Map();
function _mount(_, { target: b, anchor: x, props: S = {}, events: C, context: w, intro: E = !0, transformError: D }) {
	init_operations();
	var k = void 0, A = component_root(() => {
		var A = x ?? b.appendChild(create_text());
		boundary(A, { pending: () => {} }, (b) => {
			push({});
			var x = we;
			if (w && (x.c = w), C && (S.$$events = C), xe && assign_nodes(b, null), gt = E, k = _(b, S) || {}, gt = !0, xe && (tt.nodes.end = Se, Se === null || Se.nodeType !== 8 || Se.data !== `]`)) throw hydration_mismatch(), y;
			pop();
		}, D);
		var j = /* @__PURE__ */ new Set(), event_handle = (_) => {
			for (var y = 0; y < _.length; y++) {
				var x = _[y];
				if (!j.has(x)) {
					j.add(x);
					var S = is_passive_event(x);
					for (let _ of [b, document]) {
						var C = _t.get(_);
						C === void 0 && (C = /* @__PURE__ */ new Map(), _t.set(_, C));
						var w = C.get(x);
						w === void 0 ? (_.addEventListener(x, handle_event_propagation, { passive: S }), C.set(x, 1)) : C.set(x, w + 1);
					}
				}
			}
		};
		return event_handle(O(ct)), lt.add(event_handle), () => {
			for (var _ of j) for (let x of [b, document]) {
				var y = _t.get(x), S = y.get(_);
				--S == 0 ? (x.removeEventListener(_, handle_event_propagation), y.delete(_), y.size === 0 && _t.delete(x)) : y.set(_, S);
			}
			lt.delete(event_handle), A !== x && A.parentNode?.removeChild(A);
		};
	});
	return G.set(k, A), k;
}
var G = /* @__PURE__ */ new WeakMap();
function unmount(_, y) {
	let b = G.get(_);
	return b ? (G.delete(_), b(y)) : Promise.resolve();
}
var BranchManager = class {
	anchor;
	#batches = /* @__PURE__ */ new Map();
	#onscreen = /* @__PURE__ */ new Map();
	#offscreen = /* @__PURE__ */ new Map();
	#outroing = /* @__PURE__ */ new Set();
	#transition = !0;
	constructor(_, y = !0) {
		this.anchor = _, this.#transition = y;
	}
	#commit = (_) => {
		if (this.#batches.has(_)) {
			var y = this.#batches.get(_), b = this.#onscreen.get(y);
			if (b) resume_effect(b), this.#outroing.delete(y);
			else {
				var x = this.#offscreen.get(y);
				x && (resume_effect(x.effect), this.#onscreen.set(y, x.effect), this.#offscreen.delete(y), x.fragment.lastChild.remove(), this.anchor.before(x.fragment), b = x.effect);
			}
			for (let [y, b] of this.#batches) {
				if (this.#batches.delete(y), y === _) break;
				let x = this.#offscreen.get(b);
				x && (destroy_effect(x.effect), this.#offscreen.delete(b));
			}
			for (let [_, x] of this.#onscreen) {
				if (_ === y || this.#outroing.has(_)) continue;
				let on_destroy = () => {
					if (Array.from(this.#batches.values()).includes(_)) {
						var y = document.createDocumentFragment();
						move_effect(x, y), y.append(create_text()), this.#offscreen.set(_, {
							effect: x,
							fragment: y
						});
					} else destroy_effect(x);
					this.#outroing.delete(_), this.#onscreen.delete(_);
				};
				this.#transition || !b ? (this.#outroing.add(_), pause_effect(x, on_destroy, !1)) : on_destroy();
			}
		}
	};
	#discard = (_) => {
		this.#batches.delete(_);
		let y = Array.from(this.#batches.values());
		for (let [_, b] of this.#offscreen) y.includes(_) || (destroy_effect(b.effect), this.#offscreen.delete(_));
	};
	ensure(_, y) {
		var b = H, x = should_defer_append();
		if (y && !this.#onscreen.has(_) && !this.#offscreen.has(_)) if (x) {
			var S = document.createDocumentFragment(), C = create_text();
			S.append(C), this.#offscreen.set(_, {
				effect: branch(() => y(C)),
				fragment: S
			});
		} else this.#onscreen.set(_, branch(() => y(this.anchor)));
		if (this.#batches.set(b, _), x) {
			for (let [y, x] of this.#onscreen) y === _ ? b.unskip_effect(x) : b.skip_effect(x);
			for (let [y, x] of this.#offscreen) y === _ ? b.unskip_effect(x.effect) : b.skip_effect(x.effect);
			b.oncommit(this.#commit), b.ondiscard(this.#discard);
		} else xe && (this.anchor = Se), this.#commit(b);
	}
};
function snippet(_, y, ...b) {
	var x = new BranchManager(_);
	block(() => {
		let _ = y() ?? null;
		x.ensure(_, _ && ((y) => _(y, ...b)));
	}, re);
}
function onMount(_) {
	we === null && lifecycle_outside_component(`onMount`), user_effect(() => {
		let y = untrack(_);
		if (typeof y == `function`) return y;
	});
}
function onDestroy(_) {
	we === null && lifecycle_outside_component(`onDestroy`), onMount(() => () => untrack(_));
}
var vt = 0, yt = 1, bt = 2;
function await_block(_, y, x, S, C) {
	xe && hydrate_next();
	var w = is_runes(), E = b, D = w ? source(E) : mutable_source(E, !1, !1), O = w ? source(E) : mutable_source(E, !1, !1), k = new BranchManager(_);
	block(() => {
		var b = H, w = y(), E = !1;
		let A = xe && is_promise(w) === (_.data === `[!`);
		if (A && (set_hydrate_node(skip_nodes()), set_hydrating(!1)), is_promise(w)) {
			var j = capture(), N = !1;
			let resolve = (_) => {
				if (!E) {
					N = !0, j(!1), H === b && b.deactivate(), Be.ensure();
					try {
						_();
					} finally {
						unset_context(!1), Pe || flushSync();
					}
				}
			};
			w.then((_) => {
				resolve(() => {
					internal_set(D, _), k.ensure(yt, S && ((_) => S(_, D)));
				});
			}, (_) => {
				resolve(() => {
					if (internal_set(O, _), k.ensure(bt, C && ((_) => C(_, O))), !C) throw O.v;
				});
			}), xe ? k.ensure(vt, x) : queue_micro_task(() => {
				N || resolve(() => {
					k.ensure(vt, x);
				});
			});
		} else internal_set(D, w), k.ensure(yt, S && ((_) => S(_, D)));
		return A && set_hydrating(!0), () => {
			E = !0;
		};
	});
}
function if_block(_, y, b = !1) {
	var x;
	xe && (x = Se, hydrate_next());
	var S = new BranchManager(_), C = b ? re : 0;
	function update_branch(_, y) {
		if (xe) {
			var b = read_hydration_instruction(x);
			if (_ !== parseInt(b.substring(1))) {
				var C = skip_nodes();
				set_hydrate_node(C), S.anchor = C, set_hydrating(!1), S.ensure(_, y), set_hydrating(!0);
				return;
			}
		}
		S.ensure(_, y);
	}
	block(() => {
		var _ = !1;
		y((y, b = 0) => {
			_ = !0, update_branch(b, y);
		}), _ || update_branch(-1, null);
	}, C);
}
function index$1(_, y) {
	return y;
}
function pause_effects(_, y, b) {
	for (var x = [], S = y.length, C, w = y.length, E = 0; E < S; E++) {
		let b = y[E];
		pause_effect(b, () => {
			if (C) {
				if (C.pending.delete(b), C.done.add(b), C.pending.size === 0) {
					var y = _.outrogroups;
					destroy_effects(_, O(C.done)), y.delete(C), y.size === 0 && (_.outrogroups = null);
				}
			} else --w;
		}, !1);
	}
	if (w === 0) {
		var D = x.length === 0 && b !== null;
		if (D) {
			var k = b, A = k.parentNode;
			clear_text_content(A), A.append(k), _.items.clear();
		}
		destroy_effects(_, y, !D);
	} else C = {
		pending: new Set(y),
		done: /* @__PURE__ */ new Set()
	}, (_.outrogroups ??= /* @__PURE__ */ new Set()).add(C);
}
function destroy_effects(_, y, b = !0) {
	var x;
	if (_.pending.size > 0) {
		x = /* @__PURE__ */ new Set();
		for (let y of _.pending.values()) for (let b of y) x.add(_.items.get(b).e);
	}
	for (var S = 0; S < y.length; S++) {
		var C = y[S];
		x?.has(C) ? (C.f |= oe, move_effect(C, document.createDocumentFragment())) : destroy_effect(y[S], b);
	}
}
var xt;
function each(_, y, b, x, S, C = null) {
	var E = _, D = /* @__PURE__ */ new Map();
	if (y & 4) {
		var k = _;
		E = xe ? set_hydrate_node(get_first_child(k)) : k.appendChild(create_text());
	}
	xe && hydrate_next();
	var A = null, j = derived_safe_equal(() => {
		var _ = b();
		return w(_) ? _ : _ == null ? [] : O(_);
	}), N, P = /* @__PURE__ */ new Map(), F = !0;
	function commit(_) {
		I.effect.f & 16384 || (I.pending.delete(_), I.fallback = A, reconcile(I, N, E, y, x), A !== null && (N.length === 0 ? A.f & 33554432 ? (A.f ^= oe, move(A, null, E)) : resume_effect(A) : pause_effect(A, () => {
			A = null;
		})));
	}
	function discard(_) {
		I.pending.delete(_);
	}
	var I = {
		effect: block(() => {
			N = get(j);
			var _ = N.length;
			let w = !1;
			xe && read_hydration_instruction(E) === `[!` != (_ === 0) && (E = skip_nodes(), set_hydrate_node(E), set_hydrating(!1), w = !0);
			for (var O = /* @__PURE__ */ new Set(), k = H, I = should_defer_append(), L = 0; L < _; L += 1) {
				xe && Se.nodeType === 8 && Se.data === `]` && (E = Se, w = !0, set_hydrating(!1));
				var R = N[L], z = x(R, L), B = F ? null : D.get(z);
				B ? (B.v && internal_set(B.v, R), B.i && internal_set(B.i, L), I && k.unskip_effect(B.e)) : (B = create_item(D, F ? E : xt ??= create_text(), R, z, L, S, y, b), F || (B.e.f |= oe), D.set(z, B)), O.add(z);
			}
			if (_ === 0 && C && !A && (F ? A = branch(() => C(E)) : (A = branch(() => C(xt ??= create_text())), A.f |= oe)), _ > O.size && each_key_duplicate(``, ``, ``), xe && _ > 0 && set_hydrate_node(skip_nodes()), !F) if (P.set(k, O), I) {
				for (let [_, y] of D) O.has(_) || k.skip_effect(y.e);
				k.oncommit(commit), k.ondiscard(discard);
			} else commit(k);
			w && set_hydrating(!0), get(j);
		}),
		flags: y,
		items: D,
		pending: P,
		outrogroups: null,
		fallback: A
	};
	F = !1, xe && (E = Se);
}
function skip_to_branch(_) {
	for (; _ !== null && !(_.f & 32);) _ = _.next;
	return _;
}
function reconcile(_, y, b, x, S) {
	var C = (x & 8) != 0, w = y.length, E = _.items, D = skip_to_branch(_.effect.first), k, A = null, j, N = [], P = [], F, I, L, R;
	if (C) for (R = 0; R < w; R += 1) F = y[R], I = S(F, R), L = E.get(I).e, L.f & 33554432 || (L.nodes?.a?.measure(), (j ??= /* @__PURE__ */ new Set()).add(L));
	for (R = 0; R < w; R += 1) {
		if (F = y[R], I = S(F, R), L = E.get(I).e, _.outrogroups !== null) for (let y of _.outrogroups) y.pending.delete(L), y.done.delete(L);
		if (L.f & 8192 && (resume_effect(L), C && (L.nodes?.a?.unfix(), (j ??= /* @__PURE__ */ new Set()).delete(L))), L.f & 33554432) if (L.f ^= oe, L === D) move(L, null, b);
		else {
			var z = A ? A.next : D;
			L === _.effect.last && (_.effect.last = L.prev), L.prev && (L.prev.next = L.next), L.next && (L.next.prev = L.prev), link(_, A, L), link(_, L, z), move(L, z, b), A = L, N = [], P = [], D = skip_to_branch(A.next);
			continue;
		}
		if (L !== D) {
			if (k !== void 0 && k.has(L)) {
				if (N.length < P.length) {
					var B = P[0], ee;
					A = B.prev;
					var te = N[0], ne = N[N.length - 1];
					for (ee = 0; ee < N.length; ee += 1) move(N[ee], B, b);
					for (ee = 0; ee < P.length; ee += 1) k.delete(P[ee]);
					link(_, te.prev, ne.next), link(_, A, te), link(_, ne, B), D = B, A = ne, --R, N = [], P = [];
				} else k.delete(L), move(L, D, b), link(_, L.prev, L.next), link(_, L, A === null ? _.effect.first : A.next), link(_, A, L), A = L;
				continue;
			}
			for (N = [], P = []; D !== null && D !== L;) (k ??= /* @__PURE__ */ new Set()).add(D), P.push(D), D = skip_to_branch(D.next);
			if (D === null) continue;
		}
		L.f & 33554432 || N.push(L), A = L, D = skip_to_branch(L.next);
	}
	if (_.outrogroups !== null) {
		for (let y of _.outrogroups) y.pending.size === 0 && (destroy_effects(_, O(y.done)), _.outrogroups?.delete(y));
		_.outrogroups.size === 0 && (_.outrogroups = null);
	}
	if (D !== null || k !== void 0) {
		var V = [];
		if (k !== void 0) for (L of k) L.f & 8192 || V.push(L);
		for (; D !== null;) !(D.f & 8192) && D !== _.fallback && V.push(D), D = skip_to_branch(D.next);
		var re = V.length;
		if (re > 0) {
			var ie = x & 4 && w === 0 ? b : null;
			if (C) {
				for (R = 0; R < re; R += 1) V[R].nodes?.a?.measure();
				for (R = 0; R < re; R += 1) V[R].nodes?.a?.fix();
			}
			pause_effects(_, V, ie);
		}
	}
	C && queue_micro_task(() => {
		if (j !== void 0) for (L of j) L.nodes?.a?.apply();
	});
}
function create_item(_, y, b, x, S, C, w, E) {
	var D = w & 1 ? w & 16 ? source(b) : mutable_source(b, !1, !1) : null, O = w & 2 ? source(S) : null;
	return {
		v: D,
		i: O,
		e: branch(() => (C(y, D ?? b, O ?? S, E), () => {
			_.delete(x);
		}))
	};
}
function move(_, y, b) {
	if (_.nodes) for (var x = _.nodes.start, S = _.nodes.end, C = y && !(y.f & 33554432) ? y.nodes.start : b; x !== null;) {
		var w = get_next_sibling(x);
		if (C.before(x), x === S) return;
		x = w;
	}
}
function link(_, y, b) {
	y === null ? _.effect.first = b : y.next = b, b === null ? _.effect.last = y : b.prev = y;
}
function html(_, b, x = !1, w = !1, E = !1, D = !1) {
	var O = _, k = ``;
	if (x) {
		var A = _;
		xe && (O = set_hydrate_node(get_first_child(A)));
	}
	template_effect(() => {
		var _ = tt;
		if (k === (k = b() ?? ``)) {
			xe && hydrate_next();
			return;
		}
		if (x && !xe) {
			_.nodes = null, A.innerHTML = k, k !== `` && assign_nodes(get_first_child(A), A.lastChild);
			return;
		}
		if (_.nodes !== null && (remove_effect_dom(_.nodes.start, _.nodes.end), _.nodes = null), k !== ``) {
			if (xe) {
				for (var D = Se.data, j = hydrate_next(), N = j; j !== null && (j.nodeType !== 8 || j.data !== ``);) N = j, j = get_next_sibling(j);
				if (j === null) throw hydration_mismatch(), y;
				assign_nodes(Se, N), O = set_hydrate_node(j);
				return;
			}
			var P = create_element(w ? `svg` : E ? `math` : `template`, w ? S : E ? C : void 0);
			P.innerHTML = k;
			var F = w || E ? P : P.content;
			if (assign_nodes(get_first_child(F), F.lastChild), w || E) for (; get_first_child(F);) O.before(get_first_child(F));
			else O.before(F);
		}
	});
}
var now$1 = () => performance.now(), St = {
	tick: (_) => requestAnimationFrame(_),
	now: () => now$1(),
	tasks: /* @__PURE__ */ new Set()
};
function run_tasks() {
	let _ = St.now();
	St.tasks.forEach((y) => {
		y.c(_) || (St.tasks.delete(y), y.f());
	}), St.tasks.size !== 0 && St.tick(run_tasks);
}
function loop(_) {
	let y;
	return St.tasks.size === 0 && St.tick(run_tasks), {
		promise: new Promise((b) => {
			St.tasks.add(y = {
				c: _,
				f: b
			});
		}),
		abort() {
			St.tasks.delete(y);
		}
	};
}
function dispatch_event(_, y) {
	without_reactive_context(() => {
		_.dispatchEvent(new CustomEvent(y));
	});
}
function css_property_to_camelcase(_) {
	if (_ === `float`) return `cssFloat`;
	if (_ === `offset`) return `cssOffset`;
	if (_.startsWith(`--`)) return _;
	let y = _.split(`-`);
	return y.length === 1 ? y[0] : y[0] + y.slice(1).map((_) => _[0].toUpperCase() + _.slice(1)).join(``);
}
function css_to_keyframe(_) {
	let y = {}, b = _.split(`;`);
	for (let _ of b) {
		let [b, x] = _.split(`:`);
		if (!b || x === void 0) break;
		let S = css_property_to_camelcase(b.trim());
		y[S] = x.trim();
	}
	return y;
}
var linear = (_) => _, Ct = null;
function animation(_, y, b) {
	var x = (Ct ?? tt).nodes, S, C, w, E = null;
	x.a ??= {
		element: _,
		measure() {
			S = this.element.getBoundingClientRect();
		},
		apply() {
			if (w?.abort(), C = this.element.getBoundingClientRect(), S.left !== C.left || S.right !== C.right || S.top !== C.top || S.bottom !== C.bottom) {
				let _ = y()(this.element, {
					from: S,
					to: C
				}, b?.());
				w = animate(this.element, _, void 0, 1, () => {}, () => {
					w?.abort(), w = void 0;
				});
			}
		},
		fix() {
			if (!_.getAnimations().length) {
				var { position: y, width: b, height: x } = getComputedStyle(_);
				if (y !== `absolute` && y !== `fixed`) {
					var C = _.style;
					E = {
						position: C.position,
						width: C.width,
						height: C.height,
						transform: C.transform
					}, C.position = `absolute`, C.width = b, C.height = x;
					var w = _.getBoundingClientRect();
					if (S.left !== w.left || S.top !== w.top) {
						var D = `translate(${S.left - w.left}px, ${S.top - w.top}px)`;
						C.transform = C.transform ? `${C.transform} ${D}` : D;
					}
				}
			}
		},
		unfix() {
			if (E) {
				var y = _.style;
				y.position = E.position, y.width = E.width, y.height = E.height, y.transform = E.transform;
			}
		}
	}, x.a.element = _;
}
function transition(_, y, b, x) {
	var S = (_ & 1) != 0, C = (_ & 2) != 0, w = S && C, E = (_ & 4) != 0, D = w ? `both` : S ? `in` : `out`, O, k = y.inert, A = y.style.overflow, j, N;
	function get_options() {
		return without_reactive_context(() => O ??= b()(y, x?.() ?? {}, { direction: D }));
	}
	var P = {
		is_global: E,
		in() {
			if (y.inert = k, !S) {
				N?.abort(), N?.reset?.();
				return;
			}
			C || j?.abort(), j = animate(y, get_options(), N, 1, () => {
				dispatch_event(y, `introstart`);
			}, () => {
				dispatch_event(y, `introend`), j?.abort(), j = O = void 0, y.style.overflow = A;
			});
		},
		out(_) {
			if (!C) {
				_?.(), O = void 0;
				return;
			}
			y.inert = !0, N = animate(y, get_options(), j, 0, () => {
				dispatch_event(y, `outrostart`);
			}, () => {
				dispatch_event(y, `outroend`), _?.();
			});
		},
		stop: () => {
			j?.abort(), N?.abort();
		}
	}, F = tt;
	if ((F.nodes.t ??= []).push(P), S && gt) {
		var I = E;
		if (!I) {
			for (var L = F.parent; L && L.f & 65536;) for (; (L = L.parent) && !(L.f & 16););
			I = !L || (L.f & 32768) != 0;
		}
		I && effect(() => {
			untrack(() => P.in());
		});
	}
}
function animate(_, y, b, x, S, C) {
	var w = x === 1;
	if (is_function(y)) {
		var E, D = !1;
		return queue_micro_task(() => {
			D || (E = animate(_, y({ direction: w ? `in` : `out` }), b, x, S, C));
		}), {
			abort: () => {
				D = !0, E?.abort();
			},
			deactivate: () => E.deactivate(),
			reset: () => E.reset(),
			t: () => E.t()
		};
	}
	if (b?.deactivate(), !y?.duration && !y?.delay) return S(), C(), {
		abort: noop,
		deactivate: noop,
		reset: noop,
		t: () => x
	};
	let { delay: O = 0, css: k, tick: A, easing: j = linear } = y;
	var N = [];
	if (w && b === void 0 && (A && A(0, 1), k)) {
		var P = css_to_keyframe(k(0, 1));
		N.push(P, P);
	}
	var get_t = () => 1 - x, F = _.animate(N, {
		duration: O,
		fill: `forwards`
	});
	return F.onfinish = () => {
		F.cancel(), S();
		var w = b?.t() ?? 1 - x;
		b?.abort();
		var E = x - w, D = y.duration * Math.abs(E), O = [];
		if (D > 0) {
			var N = !1;
			if (k) for (var P = Math.ceil(D / (1e3 / 60)), I = 0; I <= P; I += 1) {
				var L = w + E * j(I / P), R = css_to_keyframe(k(L, 1 - L));
				O.push(R), N ||= R.overflow === `hidden`;
			}
			N && (_.style.overflow = `hidden`), get_t = () => {
				var _ = F.currentTime;
				return w + E * j(_ / D);
			}, A && loop(() => {
				if (F.playState !== `running`) return !1;
				var _ = get_t();
				return A(_, 1 - _), !0;
			});
		}
		F = _.animate(O, {
			duration: D,
			fill: `forwards`
		}), F.onfinish = () => {
			get_t = () => x, A?.(x, 1 - x), C();
		};
	}, {
		abort: () => {
			F && (F.cancel(), F.effect = null, F.onfinish = noop);
		},
		deactivate: () => {
			C = noop;
		},
		reset: () => {
			x === 0 && A?.(1, 0);
		},
		t: () => get_t()
	};
}
function action(_, y, b) {
	effect(() => {
		var x = untrack(() => y(_, b?.()) || {});
		if (b && x?.update) {
			var S = !1, C = {};
			render_effect(() => {
				var _ = b();
				deep_read_state(_), S && safe_not_equal(C, _) && (C = _, x.update(_));
			}), S = !0;
		}
		if (x?.destroy) return () => x.destroy();
	});
}
function attach(_, y) {
	var b = void 0, x;
	managed(() => {
		b !== (b = y()) && (x &&= (destroy_effect(x), null), b && (x = branch(() => {
			effect(() => b(_));
		})));
	});
}
function r$13(_) {
	var y, b, x = ``;
	if (typeof _ == `string` || typeof _ == `number`) x += _;
	else if (typeof _ == `object`) if (Array.isArray(_)) {
		var S = _.length;
		for (y = 0; y < S; y++) _[y] && (b = r$13(_[y])) && (x && (x += ` `), x += b);
	} else for (b in _) _[b] && (x && (x += ` `), x += b);
	return x;
}
function clsx$1() {
	for (var _, y, b = 0, x = ``, S = arguments.length; b < S; b++) (_ = arguments[b]) && (y = r$13(_)) && (x && (x += ` `), x += y);
	return x;
}
function clsx(_) {
	return typeof _ == `object` ? clsx$1(_) : _ ?? ``;
}
var wt = [...` 	
\r\f\xA0\v﻿`];
function to_class(_, y, b) {
	var x = _ == null ? `` : `` + _;
	if (y && (x = x ? x + ` ` + y : y), b) {
		for (var S of Object.keys(b)) if (b[S]) x = x ? x + ` ` + S : S;
		else if (x.length) for (var C = S.length, w = 0; (w = x.indexOf(S, w)) >= 0;) {
			var E = w + C;
			(w === 0 || wt.includes(x[w - 1])) && (E === x.length || wt.includes(x[E])) ? x = (w === 0 ? `` : x.substring(0, w)) + x.substring(E + 1) : w = E;
		}
	}
	return x === `` ? null : x;
}
function append_styles(_, y = !1) {
	var b = y ? ` !important;` : `;`, x = ``;
	for (var S of Object.keys(_)) {
		var C = _[S];
		C != null && C !== `` && (x += ` ` + S + `: ` + C + b);
	}
	return x;
}
function to_css_name(_) {
	return _[0] !== `-` || _[1] !== `-` ? _.toLowerCase() : _;
}
function to_style(_, y) {
	if (y) {
		var b = ``, x, S;
		if (Array.isArray(y) ? (x = y[0], S = y[1]) : x = y, _) {
			_ = String(_).replaceAll(/\s*\/\*.*?\*\/\s*/g, ``).trim();
			var C = !1, w = 0, E = !1, D = [];
			x && D.push(...Object.keys(x).map(to_css_name)), S && D.push(...Object.keys(S).map(to_css_name));
			var O = 0, k = -1;
			let y = _.length;
			for (var A = 0; A < y; A++) {
				var j = _[A];
				if (E ? j === `/` && _[A - 1] === `*` && (E = !1) : C ? C === j && (C = !1) : j === `/` && _[A + 1] === `*` ? E = !0 : j === `"` || j === `'` ? C = j : j === `(` ? w++ : j === `)` && w--, !E && C === !1 && w === 0) {
					if (j === `:` && k === -1) k = A;
					else if (j === `;` || A === y - 1) {
						if (k !== -1) {
							var N = to_css_name(_.substring(O, k).trim());
							if (!D.includes(N)) {
								j !== `;` && A++;
								var P = _.substring(O, A).trim();
								b += ` ` + P + `;`;
							}
						}
						O = A + 1, k = -1;
					}
				}
			}
		}
		return x && (b += append_styles(x)), S && (b += append_styles(S, !0)), b = b.trim(), b === `` ? null : b;
	}
	return _ == null ? null : String(_);
}
function set_class(_, y, b, x, S, C) {
	var w = _[he];
	if (xe || w !== b || w === void 0) {
		var E = to_class(b, x, C);
		(!xe || E !== _.getAttribute(`class`)) && (E == null ? _.removeAttribute(`class`) : y ? _.className = E : _.setAttribute(`class`, E)), _[he] = b;
	} else if (C && S !== C) for (var D in C) {
		var O = !!C[D];
		(S == null || O !== !!S[D]) && _.classList.toggle(D, O);
	}
	return C;
}
function update_styles(_, y = {}, b, x) {
	for (var S in b) {
		var C = b[S];
		y[S] !== C && (b[S] == null ? _.style.removeProperty(S) : _.style.setProperty(S, C, x));
	}
}
function set_style(_, y, b, x) {
	var S = _[ge];
	if (xe || S !== y) {
		var C = to_style(y, x);
		(!xe || C !== _.getAttribute(`style`)) && (C == null ? _.removeAttribute(`style`) : _.style.cssText = C), _[ge] = y;
	} else x && (Array.isArray(x) ? (update_styles(_, b?.[0], x[0]), update_styles(_, b?.[1], x[1], `important`)) : update_styles(_, b, x));
	return x;
}
function select_option(_, y, b = !1) {
	if (_.multiple) {
		if (y == null) return;
		if (!w(y)) return select_multiple_invalid_value();
		for (var x of _.options) x.selected = y.includes(get_option_value(x));
		return;
	}
	for (x of _.options) if (is(get_option_value(x), y)) {
		x.selected = !0;
		return;
	}
	(!b || y !== void 0) && (_.selectedIndex = -1);
}
function init_select(_) {
	var y = new MutationObserver(() => {
		select_option(_, _.__value);
	});
	y.observe(_, {
		childList: !0,
		subtree: !0,
		attributes: !0,
		attributeFilter: [`value`]
	}), teardown(() => {
		y.disconnect();
	});
}
function bind_select_value(_, y, b = y) {
	var x = /* @__PURE__ */ new WeakSet(), S = !0;
	listen_to_event_and_reset_event(_, `change`, (y) => {
		var S = y ? `[selected]` : `:checked`, C;
		if (_.multiple) C = [].map.call(_.querySelectorAll(S), get_option_value);
		else {
			var w = _.querySelector(S) ?? _.querySelector(`option:not([disabled])`);
			C = w && get_option_value(w);
		}
		b(C), _.__value = C, H !== null && x.add(H);
	}), effect(() => {
		var C = y();
		if (_ === document.activeElement) {
			var w = H;
			if (x.has(w)) return;
		}
		if (select_option(_, C, S), S && C === void 0) {
			var E = _.querySelector(`:checked`);
			E !== null && (C = get_option_value(E), b(C));
		}
		_.__value = C, S = !1;
	}), init_select(_);
}
function get_option_value(_) {
	return `__value` in _ ? _.__value : _.value;
}
var Tt = Symbol(`class`), Et = Symbol(`style`), Dt = Symbol(`is custom element`), Ot = Symbol(`is html`), kt = be ? `link` : `LINK`, At = be ? `input` : `INPUT`, jt = be ? `option` : `OPTION`, Mt = be ? `select` : `SELECT`, Nt = be ? `progress` : `PROGRESS`;
function remove_input_defaults(_) {
	if (xe) {
		var y = !1, remove_defaults = () => {
			if (!y) {
				if (y = !0, _.hasAttribute(`value`)) {
					var b = _.value;
					set_attribute(_, `value`, null), _.value = b;
				}
				if (_.hasAttribute(`checked`)) {
					var x = _.checked;
					set_attribute(_, `checked`, null), _.checked = x;
				}
			}
		};
		_[ve] = remove_defaults, queue_micro_task(remove_defaults), add_form_reset_listener();
	}
}
function set_value(_, y) {
	var b = get_attributes(_);
	b.value === (b.value = y ?? void 0) || _.value === y && (y !== 0 || _.nodeName !== Nt) || (_.value = y ?? ``);
}
function set_checked(_, y) {
	var b = get_attributes(_);
	b.checked !== (b.checked = y ?? void 0) && (_.checked = y);
}
function set_selected(_, y) {
	y ? _.hasAttribute(`selected`) || _.setAttribute(`selected`, ``) : _.removeAttribute(`selected`);
}
function set_attribute(_, y, b, x) {
	var S = get_attributes(_);
	xe && (S[y] = _.getAttribute(y), y === `src` || y === `srcset` || y === `href` && _.nodeName === kt) || S[y] !== (S[y] = b) && (y === `loading` && (_[pe] = b), b == null ? _.removeAttribute(y) : typeof b != `string` && get_setters(_).includes(y) ? _[y] = b : _.setAttribute(y, b));
}
function set_attributes(_, y, x, S, C = !1, w = !1) {
	if (xe && C && _.nodeName === At) {
		var E = _;
		(E.type === `checkbox` ? `defaultChecked` : `defaultValue`) in x || remove_input_defaults(E);
	}
	var D = get_attributes(_), O = D[Dt], k = !D[Ot];
	let A = xe && O;
	A && set_hydrating(!1);
	var j = y || {}, N = _.nodeName === jt;
	for (var P in y) P in x || (x[P] = null);
	x.class ? x.class = clsx(x.class) : (S || x[Tt]) && (x.class = null), x[Et] && (x.style ??= null);
	var F = get_setters(_);
	if (_.nodeName === At && `type` in x && (`value` in x || `__value` in x)) {
		var I = x.type;
		(I !== j.type || I === void 0 && _.hasAttribute(`type`)) && (j.type = I, set_attribute(_, `type`, I, w));
	}
	for (let C in x) {
		let E = x[C];
		if (N && C === `value` && E == null) {
			_.value = _.__value = ``, j[C] = E;
			continue;
		}
		if (C === `class`) {
			set_class(_, _.namespaceURI === `http://www.w3.org/1999/xhtml`, E, S, y?.[Tt], x[Tt]), j[C] = E, j[Tt] = x[Tt];
			continue;
		}
		if (C === `style`) {
			set_style(_, E, y?.[Et], x[Et]), j[C] = E, j[Et] = x[Et];
			continue;
		}
		var L = j[C];
		if (!(E === L && !(E === void 0 && _.hasAttribute(C)))) {
			j[C] = E;
			var R = C[0] + C[1];
			if (R !== `$$`) if (R === `on`) {
				let y = {}, b = `$$` + C, x = C.slice(2);
				var z = can_delegate_event(x);
				if (is_capture_event(x) && (x = x.slice(0, -7), y.capture = !0), !z && L) {
					if (E != null) continue;
					_.removeEventListener(x, j[b], y), j[b] = null;
				}
				if (z) delegated(x, _, E), delegate([x]);
				else if (E != null) {
					function handle(_) {
						j[C].call(this, _);
					}
					j[b] = create_event(x, _, handle, y);
				}
			} else if (C === `style`) set_attribute(_, C, E);
			else if (C === `autofocus`) autofocus(_, !!E);
			else if (!O && (C === `__value` || C === `value` && E != null)) _.value = _.__value = E;
			else if (C === `selected` && N) set_selected(_, E);
			else {
				var B = C;
				k || (B = normalize_attribute(B));
				var ee = B === `defaultValue` || B === `defaultChecked`;
				if (E == null && !O && !ee) if (D[C] = null, B === `value` || B === `checked`) {
					let b = _, x = y === void 0;
					if (B === `value`) {
						let _ = b.defaultValue;
						b.removeAttribute(B), b.defaultValue = _, b.value = b.__value = x ? _ : null;
					} else {
						let _ = b.defaultChecked;
						b.removeAttribute(B), b.defaultChecked = _, b.checked = x ? _ : !1;
					}
				} else _.removeAttribute(C);
				else ee || F.includes(B) && (O || typeof E != `string`) ? (_[B] = E, B in D && (D[B] = b)) : typeof E != `function` && set_attribute(_, B, E, w);
			}
		}
	}
	return A && set_hydrating(!0), j;
}
function attribute_effect(_, y, b = [], x = [], S = [], C, w = !1, E = !1) {
	flatten$1(S, b, x, (b) => {
		var x = void 0, S = {}, D = _.nodeName === Mt, O = !1;
		if (managed(() => {
			var k = y(...b.map(get)), A = set_attributes(_, x, k, C, w, E);
			O && D && `value` in k && select_option(_, k.value);
			for (let _ of Object.getOwnPropertySymbols(S)) k[_] || destroy_effect(S[_]);
			for (let y of Object.getOwnPropertySymbols(k)) {
				var j = k[y];
				y.description === `@attach` && (!x || j !== x[y]) && (S[y] && destroy_effect(S[y]), S[y] = branch(() => attach(_, () => j))), A[y] = j;
			}
			x = A;
		}), D) {
			var k = _;
			effect(() => {
				select_option(k, x.value, !0), init_select(k);
			});
		}
		O = !0;
	});
}
function get_attributes(_) {
	return _[me] ??= {
		[Dt]: _.nodeName.includes(`-`),
		[Ot]: _.namespaceURI === x
	};
}
var Pt = /* @__PURE__ */ new Map();
function get_setters(_) {
	var y = _.getAttribute(`is`) || _.nodeName, b = Pt.get(y);
	if (b) return b;
	Pt.set(y, b = []);
	for (var x, S = _, C = Element.prototype; C !== S;) {
		for (var w in x = j(S), x) x[w].set && w !== `innerHTML` && w !== `textContent` && w !== `innerText` && b.push(w);
		S = F(S);
	}
	return b;
}
function bind_value(_, y, b = y) {
	var x = /* @__PURE__ */ new WeakSet();
	listen_to_event_and_reset_event(_, `input`, async (S) => {
		var C = S ? _.defaultValue : _.value;
		if (C = is_numberlike_input(_) ? to_number(C) : C, b(C), H !== null && x.add(H), await tick(), C !== (C = y())) {
			var w = _.selectionStart, E = _.selectionEnd, D = _.value.length;
			if (_.value = C ?? ``, E !== null) {
				var O = _.value.length;
				w === E && E === D && O > D ? (_.selectionStart = O, _.selectionEnd = O) : (_.selectionStart = w, _.selectionEnd = Math.min(E, O));
			}
		}
	}), (xe && _.defaultValue !== _.value || untrack(y) == null && _.value) && (b(is_numberlike_input(_) ? to_number(_.value) : _.value), H !== null && x.add(H)), render_effect(() => {
		var b = y();
		if (_ === document.activeElement) {
			var S = H;
			if (x.has(S)) return;
		}
		is_numberlike_input(_) && b === to_number(_.value) || _.type === `date` && !b && !_.value || b !== _.value && (_.value = b ?? ``);
	});
}
function is_numberlike_input(_) {
	var y = _.type;
	return y === `number` || y === `range`;
}
function to_number(_) {
	return _ === `` ? null : +_;
}
function is_bound_this(_, y) {
	return _ === y || _?.[de] === y;
}
function bind_this(_ = {}, y, b, x) {
	var S = we.r, C = tt;
	return effect(() => {
		var w, E;
		return render_effect(() => {
			w = E, E = x?.() || [], untrack(() => {
				is_bound_this(b(...E), _) || (y(_, ...E), w && is_bound_this(b(...w), _) && y(null, ...w));
			});
		}), () => {
			let x = C;
			for (; x !== S && x.parent !== null && x.parent.f & 33554432;) x = x.parent;
			let teardown = () => {
				E && is_bound_this(b(...E), _) && y(null, ...E);
			}, w = x.teardown;
			x.teardown = () => {
				teardown(), w?.();
			};
		};
	}), _;
}
var Ft = {
	get(_, y) {
		if (!_.exclude.has(y)) return _.props[y];
	},
	set(_, y) {
		return !1;
	},
	getOwnPropertyDescriptor(_, y) {
		if (!_.exclude.has(y) && y in _.props) return {
			enumerable: !0,
			configurable: !0,
			value: _.props[y]
		};
	},
	has(_, y) {
		return !_.exclude.has(y) && y in _.props;
	},
	ownKeys(_) {
		return Reflect.ownKeys(_.props).filter((y) => !_.exclude.has(y));
	}
};
function rest_props(_, y, b) {
	return new Proxy({
		props: _,
		exclude: y
	}, Ft);
}
var It = {
	get(_, y) {
		let b = _.props.length;
		for (; b--;) {
			let x = _.props[b];
			if (is_function(x) && (x = x()), typeof x == `object` && x && y in x) return x[y];
		}
	},
	set(_, y, b) {
		let x = _.props.length;
		for (; x--;) {
			let S = _.props[x];
			is_function(S) && (S = S());
			let C = A(S, y);
			if (C && C.set) return C.set(b), !0;
		}
		return !1;
	},
	getOwnPropertyDescriptor(_, y) {
		let b = _.props.length;
		for (; b--;) {
			let x = _.props[b];
			if (is_function(x) && (x = x()), typeof x == `object` && x && y in x) {
				let _ = A(x, y);
				return _ && !_.configurable && (_.configurable = !0), _;
			}
		}
	},
	has(_, y) {
		if (y === de || y === fe) return !1;
		for (let b of _.props) if (is_function(b) && (b = b()), b != null && y in b) return !0;
		return !1;
	},
	ownKeys(_) {
		let y = [];
		for (let b of _.props) if (is_function(b) && (b = b()), b) {
			for (let _ in b) y.includes(_) || y.push(_);
			for (let _ of Object.getOwnPropertySymbols(b)) y.includes(_) || y.push(_);
		}
		return y;
	}
};
function spread_props(..._) {
	return new Proxy({ props: _ }, It);
}
function prop(_, y, b, x) {
	var S = !0, C = (b & 8) != 0, w = (b & 16) != 0, E = x, D = !0, O = void 0, get_fallback = () => w && S ? (O ??= derived(x), get(O)) : (D && (D = !1, E = w ? untrack(x) : x), E);
	let k;
	if (C) {
		var j = de in _ || fe in _;
		k = A(_, y)?.set ?? (j && y in _ ? (b) => _[y] = b : void 0);
	}
	var N, P = !1;
	C ? [N, P] = capture_store_binding(() => _[y]) : N = _[y], N === void 0 && x !== void 0 && (N = get_fallback(), k && (S && props_invalid_value(y), k(N)));
	var F = S ? () => {
		var b = _[y];
		return b === void 0 ? get_fallback() : (D = !0, b);
	} : () => {
		var b = _[y];
		return b !== void 0 && (E = void 0), b === void 0 ? E : b;
	};
	if (S && !(b & 4)) return F;
	if (k) {
		var I = _.$$legacy;
		return (function(_, y) {
			return arguments.length > 0 ? ((!S || !y || I || P) && k(y ? F() : _), _) : F();
		});
	}
	var L = !1, R = (b & 1 ? derived : derived_safe_equal)(() => (L = !1, F()));
	C && get(R);
	var z = tt;
	return (function(_, y) {
		if (arguments.length > 0) {
			let b = y ? get(R) : S && C ? proxy(_) : _;
			return set(R, b), L = !0, E !== void 0 && (E = b), _;
		}
		return Qe && L || z.f & 16384 ? R.v : get(R);
	});
}
var Lt = `ENTRIES`, Rt = `KEYS`, zt = `VALUES`, Bt = ``, TreeIterator = class {
	constructor(_, y) {
		let b = _._tree, x = Array.from(b.keys());
		this.set = _, this._type = y, this._path = x.length > 0 ? [{
			node: b,
			keys: x
		}] : [];
	}
	next() {
		let _ = this.dive();
		return this.backtrack(), _;
	}
	dive() {
		if (this._path.length === 0) return {
			done: !0,
			value: void 0
		};
		let { node: _, keys: y } = last$1(this._path);
		if (last$1(y) === Bt) return {
			done: !1,
			value: this.result()
		};
		let b = _.get(last$1(y));
		return this._path.push({
			node: b,
			keys: Array.from(b.keys())
		}), this.dive();
	}
	backtrack() {
		if (this._path.length === 0) return;
		let _ = last$1(this._path).keys;
		_.pop(), !(_.length > 0) && (this._path.pop(), this.backtrack());
	}
	key() {
		return this.set._prefix + this._path.map(({ keys: _ }) => last$1(_)).filter((_) => _ !== Bt).join(``);
	}
	value() {
		return last$1(this._path).node.get(Bt);
	}
	result() {
		switch (this._type) {
			case zt: return this.value();
			case Rt: return this.key();
			default: return [this.key(), this.value()];
		}
	}
	[Symbol.iterator]() {
		return this;
	}
}, last$1 = (_) => _[_.length - 1], fuzzySearch = (_, y, b) => {
	let x = /* @__PURE__ */ new Map();
	if (y === void 0) return x;
	let S = y.length + 1, C = S + b, w = new Uint8Array(C * S).fill(b + 1);
	for (let _ = 0; _ < S; ++_) w[_] = _;
	for (let _ = 1; _ < C; ++_) w[_ * S] = _;
	return recurse(_, y, b, x, w, 1, S, ``), x;
}, recurse = (_, y, b, x, S, C, w, E) => {
	let D = C * w;
	key: for (let O of _.keys()) if (O === Bt) {
		let y = S[D - 1];
		y <= b && x.set(E, [_.get(O), y]);
	} else {
		let D = C;
		for (let _ = 0; _ < O.length; ++_, ++D) {
			let x = O[_], C = w * D, E = C - w, k = S[C], A = Math.max(0, D - b - 1), j = Math.min(w - 1, D + b);
			for (let _ = A; _ < j; ++_) {
				let b = x !== y[_], w = S[E + _] + +b, D = S[E + _ + 1] + 1, O = S[C + _] + 1, A = S[C + _ + 1] = Math.min(w, D, O);
				A < k && (k = A);
			}
			if (k > b) continue key;
		}
		recurse(_.get(O), y, b, x, S, D, w, E + O);
	}
}, Vt = class SearchableMap {
	constructor(_ = /* @__PURE__ */ new Map(), y = ``) {
		this._size = void 0, this._tree = _, this._prefix = y;
	}
	atPrefix(_) {
		if (!_.startsWith(this._prefix)) throw Error(`Mismatched prefix`);
		let [y, b] = trackDown(this._tree, _.slice(this._prefix.length));
		if (y === void 0) {
			let [y, x] = last(b);
			for (let b of y.keys()) if (b !== Bt && b.startsWith(x)) {
				let S = /* @__PURE__ */ new Map();
				return S.set(b.slice(x.length), y.get(b)), new SearchableMap(S, _);
			}
		}
		return new SearchableMap(y, _);
	}
	clear() {
		this._size = void 0, this._tree.clear();
	}
	delete(_) {
		return this._size = void 0, remove$1(this._tree, _);
	}
	entries() {
		return new TreeIterator(this, Lt);
	}
	forEach(_) {
		for (let [y, b] of this) _(y, b, this);
	}
	fuzzyGet(_, y) {
		return fuzzySearch(this._tree, _, y);
	}
	get(_) {
		let y = lookup(this._tree, _);
		return y === void 0 ? void 0 : y.get(Bt);
	}
	has(_) {
		let y = lookup(this._tree, _);
		return y !== void 0 && y.has(Bt);
	}
	keys() {
		return new TreeIterator(this, Rt);
	}
	set(_, y) {
		if (typeof _ != `string`) throw Error(`key must be a string`);
		return this._size = void 0, createPath(this._tree, _).set(Bt, y), this;
	}
	get size() {
		if (this._size) return this._size;
		this._size = 0;
		let _ = this.entries();
		for (; !_.next().done;) this._size += 1;
		return this._size;
	}
	update(_, y) {
		if (typeof _ != `string`) throw Error(`key must be a string`);
		this._size = void 0;
		let b = createPath(this._tree, _);
		return b.set(Bt, y(b.get(Bt))), this;
	}
	fetch(_, y) {
		if (typeof _ != `string`) throw Error(`key must be a string`);
		this._size = void 0;
		let b = createPath(this._tree, _), x = b.get(Bt);
		return x === void 0 && b.set(Bt, x = y()), x;
	}
	values() {
		return new TreeIterator(this, zt);
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	static from(_) {
		let y = new SearchableMap();
		for (let [b, x] of _) y.set(b, x);
		return y;
	}
	static fromObject(_) {
		return SearchableMap.from(Object.entries(_));
	}
}, trackDown = (_, y, b = []) => {
	if (y.length === 0 || _ == null) return [_, b];
	for (let x of _.keys()) if (x !== Bt && y.startsWith(x)) return b.push([_, x]), trackDown(_.get(x), y.slice(x.length), b);
	return b.push([_, y]), trackDown(void 0, ``, b);
}, lookup = (_, y) => {
	if (y.length === 0 || _ == null) return _;
	for (let b of _.keys()) if (b !== Bt && y.startsWith(b)) return lookup(_.get(b), y.slice(b.length));
}, createPath = (_, y) => {
	let b = y.length;
	outer: for (let x = 0; _ && x < b;) {
		for (let S of _.keys()) if (S !== Bt && y[x] === S[0]) {
			let C = Math.min(b - x, S.length), w = 1;
			for (; w < C && y[x + w] === S[w];) ++w;
			let E = _.get(S);
			if (w === S.length) _ = E;
			else {
				let b = /* @__PURE__ */ new Map();
				b.set(S.slice(w), E), _.set(y.slice(x, x + w), b), _.delete(S), _ = b;
			}
			x += w;
			continue outer;
		}
		let S = /* @__PURE__ */ new Map();
		return _.set(y.slice(x), S), S;
	}
	return _;
}, remove$1 = (_, y) => {
	let [b, x] = trackDown(_, y);
	if (b !== void 0) {
		if (b.delete(Bt), b.size === 0) cleanup(x);
		else if (b.size === 1) {
			let [_, y] = b.entries().next().value;
			merge(x, _, y);
		}
	}
}, cleanup = (_) => {
	if (_.length === 0) return;
	let [y, b] = last(_);
	if (y.delete(b), y.size === 0) cleanup(_.slice(0, -1));
	else if (y.size === 1) {
		let [b, x] = y.entries().next().value;
		b !== Bt && merge(_.slice(0, -1), b, x);
	}
}, merge = (_, y, b) => {
	if (_.length === 0) return;
	let [x, S] = last(_);
	x.set(S + y, b), x.delete(S);
}, last = (_) => _[_.length - 1], Ht = `or`, Ut = `and`, Wt = `and_not`, Gt = class MiniSearch {
	constructor(_) {
		if (_?.fields == null) throw Error(`MiniSearch: option "fields" must be provided`);
		let y = _.autoVacuum == null || _.autoVacuum === !0 ? $t : _.autoVacuum;
		this._options = {
			...Jt,
			..._,
			autoVacuum: y,
			searchOptions: {
				...Yt,
				..._.searchOptions || {}
			},
			autoSuggestOptions: {
				...Xt,
				..._.autoSuggestOptions || {}
			}
		}, this._index = new Vt(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldIds = {}, this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._nextId = 0, this._storedFields = /* @__PURE__ */ new Map(), this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = Qt, this.addFields(this._options.fields);
	}
	add(_) {
		let { extractField: y, stringifyField: b, tokenize: x, processTerm: S, fields: C, idField: w } = this._options, E = y(_, w);
		if (E == null) throw Error(`MiniSearch: document does not have ID field "${w}"`);
		if (this._idToShortId.has(E)) throw Error(`MiniSearch: duplicate ID ${E}`);
		let D = this.addDocumentId(E);
		this.saveStoredFields(D, _);
		for (let w of C) {
			let C = y(_, w);
			if (C == null) continue;
			let E = x(b(C, w), w), O = this._fieldIds[w], k = new Set(E).size;
			this.addFieldLength(D, O, this._documentCount - 1, k);
			for (let _ of E) {
				let y = S(_, w);
				if (Array.isArray(y)) for (let _ of y) this.addTerm(O, D, _);
				else y && this.addTerm(O, D, y);
			}
		}
	}
	addAll(_) {
		for (let y of _) this.add(y);
	}
	addAllAsync(_, y = {}) {
		let { chunkSize: b = 10 } = y, x = {
			chunk: [],
			promise: Promise.resolve()
		}, { chunk: S, promise: C } = _.reduce(({ chunk: _, promise: y }, x, S) => (_.push(x), (S + 1) % b === 0 ? {
			chunk: [],
			promise: y.then(() => new Promise((_) => setTimeout(_, 0))).then(() => this.addAll(_))
		} : {
			chunk: _,
			promise: y
		}), x);
		return C.then(() => this.addAll(S));
	}
	remove(_) {
		let { tokenize: y, processTerm: b, extractField: x, stringifyField: S, fields: C, idField: w } = this._options, E = x(_, w);
		if (E == null) throw Error(`MiniSearch: document does not have ID field "${w}"`);
		let D = this._idToShortId.get(E);
		if (D == null) throw Error(`MiniSearch: cannot remove document with ID ${E}: it is not in the index`);
		for (let w of C) {
			let C = x(_, w);
			if (C == null) continue;
			let E = y(S(C, w), w), O = this._fieldIds[w], k = new Set(E).size;
			this.removeFieldLength(D, O, this._documentCount, k);
			for (let _ of E) {
				let y = b(_, w);
				if (Array.isArray(y)) for (let _ of y) this.removeTerm(O, D, _);
				else y && this.removeTerm(O, D, y);
			}
		}
		this._storedFields.delete(D), this._documentIds.delete(D), this._idToShortId.delete(E), this._fieldLength.delete(D), --this._documentCount;
	}
	removeAll(_) {
		if (_) for (let y of _) this.remove(y);
		else if (arguments.length > 0) throw Error(`Expected documents to be present. Omit the argument to remove all documents.`);
		else this._index = new Vt(), this._documentCount = 0, this._documentIds = /* @__PURE__ */ new Map(), this._idToShortId = /* @__PURE__ */ new Map(), this._fieldLength = /* @__PURE__ */ new Map(), this._avgFieldLength = [], this._storedFields = /* @__PURE__ */ new Map(), this._nextId = 0;
	}
	discard(_) {
		let y = this._idToShortId.get(_);
		if (y == null) throw Error(`MiniSearch: cannot discard document with ID ${_}: it is not in the index`);
		this._idToShortId.delete(_), this._documentIds.delete(y), this._storedFields.delete(y), (this._fieldLength.get(y) || []).forEach((_, b) => {
			this.removeFieldLength(y, b, this._documentCount, _);
		}), this._fieldLength.delete(y), --this._documentCount, this._dirtCount += 1, this.maybeAutoVacuum();
	}
	maybeAutoVacuum() {
		if (this._options.autoVacuum === !1) return;
		let { minDirtFactor: _, minDirtCount: y, batchSize: b, batchWait: x } = this._options.autoVacuum;
		this.conditionalVacuum({
			batchSize: b,
			batchWait: x
		}, {
			minDirtCount: y,
			minDirtFactor: _
		});
	}
	discardAll(_) {
		let y = this._options.autoVacuum;
		try {
			this._options.autoVacuum = !1;
			for (let y of _) this.discard(y);
		} finally {
			this._options.autoVacuum = y;
		}
		this.maybeAutoVacuum();
	}
	replace(_) {
		let { idField: y, extractField: b } = this._options, x = b(_, y);
		this.discard(x), this.add(_);
	}
	vacuum(_ = {}) {
		return this.conditionalVacuum(_);
	}
	conditionalVacuum(_, y) {
		return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && y, this._enqueuedVacuum ??= this._currentVacuum.then(() => {
			let y = this._enqueuedVacuumConditions;
			return this._enqueuedVacuumConditions = Qt, this.performVacuuming(_, y);
		}), this._enqueuedVacuum) : this.vacuumConditionsMet(y) === !1 ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(_), this._currentVacuum);
	}
	async performVacuuming(_, y) {
		let b = this._dirtCount;
		if (this.vacuumConditionsMet(y)) {
			let y = _.batchSize || Zt.batchSize, x = _.batchWait || Zt.batchWait, S = 1;
			for (let [_, b] of this._index) {
				for (let [_, y] of b) for (let [x] of y) this._documentIds.has(x) || (y.size <= 1 ? b.delete(_) : y.delete(x));
				this._index.get(_).size === 0 && this._index.delete(_), S % y === 0 && await new Promise((_) => setTimeout(_, x)), S += 1;
			}
			this._dirtCount -= b;
		}
		await null, this._currentVacuum = this._enqueuedVacuum, this._enqueuedVacuum = null;
	}
	vacuumConditionsMet(_) {
		if (_ == null) return !0;
		let { minDirtCount: y, minDirtFactor: b } = _;
		return y ||= $t.minDirtCount, b ||= $t.minDirtFactor, this.dirtCount >= y && this.dirtFactor >= b;
	}
	get isVacuuming() {
		return this._currentVacuum != null;
	}
	get dirtCount() {
		return this._dirtCount;
	}
	get dirtFactor() {
		return this._dirtCount / (1 + this._documentCount + this._dirtCount);
	}
	has(_) {
		return this._idToShortId.has(_);
	}
	getStoredFields(_) {
		let y = this._idToShortId.get(_);
		if (y != null) return this._storedFields.get(y);
	}
	search(_, y = {}) {
		let { searchOptions: b } = this._options, x = {
			...b,
			...y
		}, S = this.executeQuery(_, y), C = [];
		for (let [_, { score: y, terms: b, match: w }] of S) {
			let S = b.length || 1, E = {
				id: this._documentIds.get(_),
				score: y * S,
				terms: Object.keys(w),
				queryTerms: b,
				match: w
			};
			Object.assign(E, this._storedFields.get(_)), (x.filter == null || x.filter(E)) && C.push(E);
		}
		return _ === MiniSearch.wildcard && x.boostDocument == null || C.sort(byScore), C;
	}
	autoSuggest(_, y = {}) {
		y = {
			...this._options.autoSuggestOptions,
			...y
		};
		let b = /* @__PURE__ */ new Map();
		for (let { score: x, terms: S } of this.search(_, y)) {
			let _ = S.join(` `), y = b.get(_);
			y == null ? b.set(_, {
				score: x,
				terms: S,
				count: 1
			}) : (y.score += x, y.count += 1);
		}
		let x = [];
		for (let [_, { score: y, terms: S, count: C }] of b) x.push({
			suggestion: _,
			terms: S,
			score: y / C
		});
		return x.sort(byScore), x;
	}
	get documentCount() {
		return this._documentCount;
	}
	get termCount() {
		return this._index.size;
	}
	static loadJSON(_, y) {
		if (y == null) throw Error(`MiniSearch: loadJSON should be given the same options used when serializing the index`);
		return this.loadJS(JSON.parse(_), y);
	}
	static async loadJSONAsync(_, y) {
		if (y == null) throw Error(`MiniSearch: loadJSON should be given the same options used when serializing the index`);
		return this.loadJSAsync(JSON.parse(_), y);
	}
	static getDefault(_) {
		if (Jt.hasOwnProperty(_)) return getOwnProperty(Jt, _);
		throw Error(`MiniSearch: unknown option "${_}"`);
	}
	static loadJS(_, y) {
		let { index: b, documentIds: x, fieldLength: S, storedFields: C, serializationVersion: w } = _, E = this.instantiateMiniSearch(_, y);
		E._documentIds = objectToNumericMap(x), E._fieldLength = objectToNumericMap(S), E._storedFields = objectToNumericMap(C);
		for (let [_, y] of E._documentIds) E._idToShortId.set(y, _);
		for (let [_, y] of b) {
			let b = /* @__PURE__ */ new Map();
			for (let _ of Object.keys(y)) {
				let x = y[_];
				w === 1 && (x = x.ds), b.set(parseInt(_, 10), objectToNumericMap(x));
			}
			E._index.set(_, b);
		}
		return E;
	}
	static async loadJSAsync(_, y) {
		let { index: b, documentIds: x, fieldLength: S, storedFields: C, serializationVersion: w } = _, E = this.instantiateMiniSearch(_, y);
		E._documentIds = await objectToNumericMapAsync(x), E._fieldLength = await objectToNumericMapAsync(S), E._storedFields = await objectToNumericMapAsync(C);
		for (let [_, y] of E._documentIds) E._idToShortId.set(y, _);
		let D = 0;
		for (let [_, y] of b) {
			let b = /* @__PURE__ */ new Map();
			for (let _ of Object.keys(y)) {
				let x = y[_];
				w === 1 && (x = x.ds), b.set(parseInt(_, 10), await objectToNumericMapAsync(x));
			}
			++D % 1e3 == 0 && await wait(0), E._index.set(_, b);
		}
		return E;
	}
	static instantiateMiniSearch(_, y) {
		let { documentCount: b, nextId: x, fieldIds: S, averageFieldLength: C, dirtCount: w, serializationVersion: E } = _;
		if (E !== 1 && E !== 2) throw Error(`MiniSearch: cannot deserialize an index created with an incompatible version`);
		let D = new MiniSearch(y);
		return D._documentCount = b, D._nextId = x, D._idToShortId = /* @__PURE__ */ new Map(), D._fieldIds = S, D._avgFieldLength = C, D._dirtCount = w || 0, D._index = new Vt(), D;
	}
	executeQuery(_, y = {}) {
		if (_ === MiniSearch.wildcard) return this.executeWildcardQuery(y);
		if (typeof _ != `string`) {
			let b = {
				...y,
				..._,
				queries: void 0
			}, x = _.queries.map((_) => this.executeQuery(_, b));
			return this.combineResults(x, b.combineWith);
		}
		let { tokenize: b, processTerm: x, searchOptions: S } = this._options, C = {
			tokenize: b,
			processTerm: x,
			...S,
			...y
		}, { tokenize: w, processTerm: E } = C, D = w(_).flatMap((_) => E(_)).filter((_) => !!_).map(termToQuerySpec(C)).map((_) => this.executeQuerySpec(_, C));
		return this.combineResults(D, C.combineWith);
	}
	executeQuerySpec(_, y) {
		let b = {
			...this._options.searchOptions,
			...y
		}, x = (b.fields || this._options.fields).reduce((_, y) => ({
			..._,
			[y]: getOwnProperty(b.boost, y) || 1
		}), {}), { boostDocument: S, weights: C, maxFuzzy: w, bm25: E } = b, { fuzzy: D, prefix: O } = {
			...Yt.weights,
			...C
		}, k = this._index.get(_.term), A = this.termResults(_.term, _.term, 1, _.termBoost, k, x, S, E), j, N;
		if (_.prefix && (j = this._index.atPrefix(_.term)), _.fuzzy) {
			let y = _.fuzzy === !0 ? .2 : _.fuzzy, b = y < 1 ? Math.min(w, Math.round(_.term.length * y)) : y;
			b && (N = this._index.fuzzyGet(_.term, b));
		}
		if (j) for (let [y, b] of j) {
			let C = y.length - _.term.length;
			if (!C) continue;
			N?.delete(y);
			let w = O * y.length / (y.length + .3 * C);
			this.termResults(_.term, y, w, _.termBoost, b, x, S, E, A);
		}
		if (N) for (let y of N.keys()) {
			let [b, C] = N.get(y);
			if (!C) continue;
			let w = D * y.length / (y.length + C);
			this.termResults(_.term, y, w, _.termBoost, b, x, S, E, A);
		}
		return A;
	}
	executeWildcardQuery(_) {
		let y = /* @__PURE__ */ new Map(), b = {
			...this._options.searchOptions,
			..._
		};
		for (let [_, x] of this._documentIds) {
			let S = b.boostDocument ? b.boostDocument(x, ``, this._storedFields.get(_)) : 1;
			y.set(_, {
				score: S,
				terms: [],
				match: {}
			});
		}
		return y;
	}
	combineResults(_, y = Ht) {
		if (_.length === 0) return /* @__PURE__ */ new Map();
		let b = Kt[y.toLowerCase()];
		if (!b) throw Error(`Invalid combination operator: ${y}`);
		return _.reduce(b) || /* @__PURE__ */ new Map();
	}
	toJSON() {
		let _ = [];
		for (let [y, b] of this._index) {
			let x = {};
			for (let [_, y] of b) x[_] = Object.fromEntries(y);
			_.push([y, x]);
		}
		return {
			documentCount: this._documentCount,
			nextId: this._nextId,
			documentIds: Object.fromEntries(this._documentIds),
			fieldIds: this._fieldIds,
			fieldLength: Object.fromEntries(this._fieldLength),
			averageFieldLength: this._avgFieldLength,
			storedFields: Object.fromEntries(this._storedFields),
			dirtCount: this._dirtCount,
			index: _,
			serializationVersion: 2
		};
	}
	termResults(_, y, b, x, S, C, w, E, D = /* @__PURE__ */ new Map()) {
		if (S == null) return D;
		for (let O of Object.keys(C)) {
			let k = C[O], A = this._fieldIds[O], j = S.get(A);
			if (j == null) continue;
			let N = j.size, P = this._avgFieldLength[A];
			for (let S of j.keys()) {
				if (!this._documentIds.has(S)) {
					this.removeTerm(A, S, y), --N;
					continue;
				}
				let C = w ? w(this._documentIds.get(S), y, this._storedFields.get(S)) : 1;
				if (!C) continue;
				let F = j.get(S), I = this._fieldLength.get(S)[A], L = calcBM25Score(F, N, this._documentCount, I, P, E), R = b * x * k * C * L, z = D.get(S);
				if (z) {
					z.score += R, assignUniqueTerm(z.terms, _);
					let b = getOwnProperty(z.match, y);
					b ? b.push(O) : z.match[y] = [O];
				} else D.set(S, {
					score: R,
					terms: [_],
					match: { [y]: [O] }
				});
			}
		}
		return D;
	}
	addTerm(_, y, b) {
		let x = this._index.fetch(b, createMap), S = x.get(_);
		if (S == null) S = /* @__PURE__ */ new Map(), S.set(y, 1), x.set(_, S);
		else {
			let _ = S.get(y);
			S.set(y, (_ || 0) + 1);
		}
	}
	removeTerm(_, y, b) {
		if (!this._index.has(b)) {
			this.warnDocumentChanged(y, _, b);
			return;
		}
		let x = this._index.fetch(b, createMap), S = x.get(_);
		S == null || S.get(y) == null ? this.warnDocumentChanged(y, _, b) : S.get(y) <= 1 ? S.size <= 1 ? x.delete(_) : S.delete(y) : S.set(y, S.get(y) - 1), this._index.get(b).size === 0 && this._index.delete(b);
	}
	warnDocumentChanged(_, y, b) {
		for (let x of Object.keys(this._fieldIds)) if (this._fieldIds[x] === y) {
			this._options.logger(`warn`, `MiniSearch: document with ID ${this._documentIds.get(_)} has changed before removal: term "${b}" was not present in field "${x}". Removing a document after it has changed can corrupt the index!`, `version_conflict`);
			return;
		}
	}
	addDocumentId(_) {
		let y = this._nextId;
		return this._idToShortId.set(_, y), this._documentIds.set(y, _), this._documentCount += 1, this._nextId += 1, y;
	}
	addFields(_) {
		for (let y = 0; y < _.length; y++) this._fieldIds[_[y]] = y;
	}
	addFieldLength(_, y, b, x) {
		let S = this._fieldLength.get(_);
		S ?? this._fieldLength.set(_, S = []), S[y] = x;
		let C = (this._avgFieldLength[y] || 0) * b + x;
		this._avgFieldLength[y] = C / (b + 1);
	}
	removeFieldLength(_, y, b, x) {
		if (b === 1) {
			this._avgFieldLength[y] = 0;
			return;
		}
		let S = this._avgFieldLength[y] * b - x;
		this._avgFieldLength[y] = S / (b - 1);
	}
	saveStoredFields(_, y) {
		let { storeFields: b, extractField: x } = this._options;
		if (b == null || b.length === 0) return;
		let S = this._storedFields.get(_);
		S ?? this._storedFields.set(_, S = {});
		for (let _ of b) {
			let b = x(y, _);
			b !== void 0 && (S[_] = b);
		}
	}
};
Gt.wildcard = Symbol(`*`);
var getOwnProperty = (_, y) => Object.prototype.hasOwnProperty.call(_, y) ? _[y] : void 0, Kt = {
	[Ht]: (_, y) => {
		for (let b of y.keys()) {
			let x = _.get(b);
			if (x == null) _.set(b, y.get(b));
			else {
				let { score: _, terms: S, match: C } = y.get(b);
				x.score += _, x.match = Object.assign(x.match, C), assignUniqueTerms(x.terms, S);
			}
		}
		return _;
	},
	[Ut]: (_, y) => {
		let b = /* @__PURE__ */ new Map();
		for (let x of y.keys()) {
			let S = _.get(x);
			if (S == null) continue;
			let { score: C, terms: w, match: E } = y.get(x);
			assignUniqueTerms(S.terms, w), b.set(x, {
				score: S.score + C,
				terms: S.terms,
				match: Object.assign(S.match, E)
			});
		}
		return b;
	},
	[Wt]: (_, y) => {
		for (let b of y.keys()) _.delete(b);
		return _;
	}
}, qt = {
	k: 1.2,
	b: .7,
	d: .5
}, calcBM25Score = (_, y, b, x, S, C) => {
	let { k: w, b: E, d: D } = C;
	return Math.log(1 + (b - y + .5) / (y + .5)) * (D + _ * (w + 1) / (_ + w * (1 - E + E * x / S)));
}, termToQuerySpec = (_) => (y, b, x) => ({
	term: y,
	fuzzy: typeof _.fuzzy == `function` ? _.fuzzy(y, b, x) : _.fuzzy || !1,
	prefix: typeof _.prefix == `function` ? _.prefix(y, b, x) : _.prefix === !0,
	termBoost: typeof _.boostTerm == `function` ? _.boostTerm(y, b, x) : 1
}), Jt = {
	idField: `id`,
	extractField: (_, y) => _[y],
	stringifyField: (_, y) => _.toString(),
	tokenize: (_) => _.split(en),
	processTerm: (_) => _.toLowerCase(),
	fields: void 0,
	searchOptions: void 0,
	storeFields: [],
	logger: (_, y) => {
		typeof (console == null ? void 0 : console[_]) == `function` && console[_](y);
	},
	autoVacuum: !0
}, Yt = {
	combineWith: Ht,
	prefix: !1,
	fuzzy: !1,
	maxFuzzy: 6,
	boost: {},
	weights: {
		fuzzy: .45,
		prefix: .375
	},
	bm25: qt
}, Xt = {
	combineWith: Ut,
	prefix: (_, y, b) => y === b.length - 1
}, Zt = {
	batchSize: 1e3,
	batchWait: 10
}, Qt = {
	minDirtFactor: .1,
	minDirtCount: 20
}, $t = {
	...Zt,
	...Qt
}, assignUniqueTerm = (_, y) => {
	_.includes(y) || _.push(y);
}, assignUniqueTerms = (_, y) => {
	for (let b of y) _.includes(b) || _.push(b);
}, byScore = ({ score: _ }, { score: y }) => y - _, createMap = () => /* @__PURE__ */ new Map(), objectToNumericMap = (_) => {
	let y = /* @__PURE__ */ new Map();
	for (let b of Object.keys(_)) y.set(parseInt(b, 10), _[b]);
	return y;
}, objectToNumericMapAsync = async (_) => {
	let y = /* @__PURE__ */ new Map(), b = 0;
	for (let x of Object.keys(_)) y.set(parseInt(x, 10), _[x]), ++b % 1e3 == 0 && await wait(0);
	return y;
}, wait = (_) => new Promise((y) => setTimeout(y, _)), en = /[\n\r\p{Z}\p{P}]+/u;
function e$9(_, y, b) {
	let r = (b) => _(b, ...y);
	return b === void 0 ? r : Object.assign(r, {
		lazy: b,
		lazyArgs: y
	});
}
function t$28(_, y, b) {
	let x = _.length - y.length;
	if (x === 0) return _(...y);
	if (x === 1) return e$9(_, y, b);
	throw Error(`Wrong number of arguments`);
}
function t$27(..._) {
	return t$28(n$25, _);
}
function n$25(_, y) {
	if (y < 1) throw RangeError(`chunk: A chunk size of '${y.toString()}' would result in an infinite array`);
	if (_.length === 0) return [];
	if (y >= _.length) return [[..._]];
	let b = Math.ceil(_.length / y), x = Array(b);
	if (y === 1) for (let [y, b] of _.entries()) x[y] = [b];
	else for (let S = 0; S < b; S += 1) {
		let b = S * y;
		x[S] = _.slice(b, b + y);
	}
	return x;
}
function t$26(..._) {
	return t$28(n$24, _);
}
function n$24(_, y = [], b = []) {
	if (typeof _ == `function`) return _;
	if (typeof _ != `object` || !_) return structuredClone(_);
	let x = Object.getPrototypeOf(_);
	if (!Array.isArray(_) && x !== null && x !== Object.prototype) return structuredClone(_);
	let S = y.indexOf(_);
	return S === -1 ? (y.push(_), Array.isArray(_) ? i$6(_, y, b) : r$12(_, y, b)) : b[S];
}
function r$12(_, y, b) {
	let x = {};
	b.push(x);
	for (let [S, C] of Object.entries(_)) x[S] = n$24(C, y, b);
	return x;
}
function i$6(_, y, b) {
	let x = [];
	b.push(x);
	for (let [S, C] of _.entries()) x[S] = n$24(C, y, b);
	return x;
}
var tn = {
	done: !1,
	hasNext: !1
}, r$11 = (_) => ({
	hasNext: !0,
	next: _,
	done: !1
});
function t$24(_, ...y) {
	let b = _, x = y.map((_) => `lazy` in _ ? r$10(_) : void 0), S = 0;
	for (; S < y.length;) {
		if (x[S] === void 0 || !i$5(b)) {
			let _ = y[S];
			b = _(b), S += 1;
			continue;
		}
		let _ = [];
		for (let b = S; b < y.length; b++) {
			let y = x[b];
			if (y === void 0 || (_.push(y), y.isSingle)) break;
		}
		let C = [];
		for (let y of b) if (n$23(y, C, _)) break;
		let { isSingle: w } = _.at(-1);
		b = w ? C[0] : C, S += _.length;
	}
	return b;
}
function n$23(_, y, b) {
	if (b.length === 0) return y.push(_), !1;
	let x = _, S = tn, C = !1;
	for (let [_, w] of b.entries()) {
		let { index: E, items: D } = w;
		if (D.push(x), S = w(x, E, D), w.index += 1, S.hasNext) {
			if (S.hasMany ?? !1) {
				for (let x of S.next) if (n$23(x, y, b.slice(_ + 1))) return !0;
				return C;
			}
			x = S.next;
		}
		if (!S.hasNext) break;
		S.done && (C = !0);
	}
	return S.hasNext && y.push(x), C;
}
function r$10(_) {
	let { lazy: y, lazyArgs: b } = _, x = y(...b);
	return Object.assign(x, {
		isSingle: y.single ?? !1,
		index: 0,
		items: []
	});
}
function i$5(_) {
	return typeof _ == `string` || typeof _ == `object` && !!_ && Symbol.iterator in _;
}
function t$23(_, y) {
	let b = y.length - _.length;
	if (b === 1) {
		let [b, ...x] = y;
		return t$24(b, {
			lazy: _,
			lazyArgs: x
		});
	}
	if (b === 0) {
		let b = {
			lazy: _,
			lazyArgs: y
		};
		return Object.assign((_) => t$24(_, b), b);
	}
	throw Error(`Wrong number of arguments`);
}
function r$9(..._) {
	return t$23(i$4, _);
}
function i$4(_) {
	if (_.length === 0) return r$11;
	let y = /* @__PURE__ */ new Map();
	for (let b of _) y.set(b, (y.get(b) ?? 0) + 1);
	return (_) => {
		let b = y.get(_);
		return b === void 0 || b === 0 ? {
			done: !1,
			hasNext: !0,
			next: _
		} : (y.set(_, b - 1), tn);
	};
}
function t$22(..._) {
	return t$28(n$22, _);
}
var n$22 = (_, y) => _.length >= y, nn = {
	asc: (_, y) => _ > y,
	desc: (_, y) => _ < y
};
function t$21(_, y) {
	let [b, ...x] = y;
	if (!i$3(b)) return _(b, r$8(...x));
	let S = r$8(b, ...x);
	return (y) => _(y, S);
}
function r$8(_, y, ...b) {
	let x = typeof _ == `function` ? _ : _[0], S = typeof _ == `function` ? `asc` : _[1], { [S]: C } = nn, w = y === void 0 ? void 0 : r$8(y, ...b);
	return (_, y) => {
		let b = x(_), S = x(y);
		return C(b, S) ? 1 : C(S, b) ? -1 : w?.(_, y) ?? 0;
	};
}
function i$3(_) {
	if (a$1(_)) return !0;
	if (typeof _ != `object` || !Array.isArray(_)) return !1;
	let [y, b, ...x] = _;
	return a$1(y) && typeof b == `string` && b in nn && x.length === 0;
}
var a$1 = (_) => typeof _ == `function` && _.length === 1;
function t$20(..._) {
	return t$28(Object.entries, _);
}
function n$21(..._) {
	return t$28(r$7, _, i$2);
}
var r$7 = (_, y) => _.filter(y), i$2 = (_) => (y, b, x) => _(y, b, x) ? {
	done: !1,
	hasNext: !0,
	next: y
} : tn;
function n$20(..._) {
	return t$21(r$6, _);
}
function r$6(_, y) {
	if (!t$22(_, 2)) return _[0];
	let [b] = _, [, ...x] = _;
	for (let _ of x) y(_, b) < 0 && (b = _);
	return b;
}
function t$19(..._) {
	return t$28(Object.fromEntries, _);
}
function t$18(..._) {
	return t$28(n$19, _);
}
var n$19 = (_, y) => {
	let b = Object.create(null);
	for (let x = 0; x < _.length; x++) {
		let S = _[x], C = y(S, x, _);
		if (C !== void 0) {
			let _ = b[C];
			_ === void 0 ? b[C] = [S] : _.push(S);
		}
	}
	return Object.setPrototypeOf(b, Object.prototype), b;
};
function t$17(..._) {
	return t$28(n$18, _);
}
function n$18(_, y) {
	if (_ === y || Object.is(_, y)) return !0;
	if (typeof _ != `object` || typeof y != `object` || _ === null || y === null || Object.getPrototypeOf(_) !== Object.getPrototypeOf(y)) return !1;
	if (Array.isArray(_)) return r$5(_, y);
	if (_ instanceof Map) return i$1(_, y);
	if (_ instanceof Set) return a(_, y);
	if (_ instanceof Date) return _.getTime() === y.getTime();
	if (_ instanceof RegExp) return _.toString() === y.toString();
	if (Object.keys(_).length !== Object.keys(y).length) return !1;
	for (let [b, x] of Object.entries(_)) if (!(b in y) || !n$18(x, y[b])) return !1;
	return !0;
}
function r$5(_, y) {
	if (_.length !== y.length) return !1;
	for (let [b, x] of _.entries()) if (!n$18(x, y[b])) return !1;
	return !0;
}
function i$1(_, y) {
	if (_.size !== y.size) return !1;
	for (let [b, x] of _.entries()) if (!y.has(b) || !n$18(x, y.get(b))) return !1;
	return !0;
}
function a(_, y) {
	if (_.size !== y.size) return !1;
	let b = [...y];
	for (let y of _) {
		let _ = !1;
		for (let [x, S] of b.entries()) if (n$18(y, S)) {
			_ = !0, b.splice(x, 1);
			break;
		}
		if (!_) return !1;
	}
	return !0;
}
function t$16(..._) {
	return t$28(n$17, _);
}
function n$17(_) {
	let y = {};
	for (let [b, x] of Object.entries(_)) y[x] = b;
	return y;
}
function e$7(_) {
	return _ !== void 0;
}
function e$6(_) {
	return _ === `` || _ === void 0 ? !0 : Array.isArray(_) ? _.length === 0 : Object.keys(_).length === 0;
}
function e$5(_) {
	return _ !== null;
}
function e$4(_) {
	return _ != null;
}
function e$3(_) {
	return _ == null;
}
function e$2(_) {
	return typeof _ == `object` && !!_;
}
function e$1(_) {
	if (typeof _ != `object` || !_) return !1;
	let y = Object.getPrototypeOf(_);
	return y === null || y === Object.prototype;
}
function e(_) {
	return !!_;
}
function t$15(..._) {
	return t$28(Object.keys, _);
}
function t$14(..._) {
	return t$28(n$16, _, r$4);
}
var n$16 = (_, y) => _.map(y), r$4 = (_) => (y, b, x) => ({
	done: !1,
	hasNext: !0,
	next: _(y, b, x)
});
function t$13(..._) {
	return t$28(n$15, _);
}
function n$15(_, y) {
	let b = {};
	for (let [x, S] of Object.entries(_)) {
		let C = y(x, S, _);
		b[C] = S;
	}
	return b;
}
function t$12(..._) {
	return t$28(n$14, _);
}
function n$14(_, y) {
	let b = {};
	for (let [x, S] of _.entries()) {
		let [C, w] = y(S, x, _);
		b[C] = w;
	}
	return b;
}
function t$11(..._) {
	return t$28(n$13, _);
}
function n$13(_, y) {
	let b = {};
	for (let [x, S] of Object.entries(_)) b[x] = y(S, x, _);
	return b;
}
function t$10(..._) {
	return t$28(n$12, _);
}
var n$12 = (_, y) => {
	if (_.length === 0) return NaN;
	let b = 0;
	for (let [x, S] of _.entries()) b += y(S, x, _);
	return b / _.length;
};
function n$11(..._) {
	return t$28(r$3, _);
}
function r$3(_, y) {
	if (!t$22(y, 1)) return { ..._ };
	if (!t$22(y, 2)) {
		let { [y[0]]: b, ...x } = _;
		return x;
	}
	let b = { ..._ };
	for (let _ of y) delete b[_];
	return b;
}
function t$9(..._) {
	return t$28(n$10, _);
}
function n$10(_, y) {
	let b = { ..._ };
	for (let [x, S] of Object.entries(b)) y(S, x, _) && delete b[x];
	return b;
}
function t$8(..._) {
	return t$28(n$9, _);
}
function n$9(_, y) {
	let b = {};
	for (let x of y) x in _ && (b[x] = _[x]);
	return b;
}
function t$7(..._) {
	return t$28(n$8, _);
}
function n$8(_, y) {
	let b = {};
	for (let [x, S] of Object.entries(_)) y(S, x, _) && (b[x] = S);
	return b;
}
function t$6(..._) {
	return t$28(n$7, _);
}
function n$7(_, y) {
	let b = [];
	for (let x = _; x < y; x++) b.push(x);
	return b;
}
function t$5(..._) {
	return t$28(n$6, _);
}
function n$6(_) {
	return [..._].reverse();
}
function t$4(..._) {
	return t$21(n$5, _);
}
var n$5 = (_, y) => [..._].sort(y);
function t$3(..._) {
	return t$28(n$4, _);
}
var n$4 = (_, y) => {
	let b = _.entries(), x = b.next();
	if (`done` in x && x.done) return 0;
	let { value: [, S] } = x, C = y(S, 0, _);
	for (let [x, S] of b) {
		let b = y(S, x, _);
		C += b;
	}
	return C;
};
function n$3(..._) {
	return t$23(r$2, _);
}
function r$2() {
	let _ = /* @__PURE__ */ new Set();
	return (y) => _.has(y) ? tn : (_.add(y), {
		done: !1,
		hasNext: !0,
		next: y
	});
}
function n$2(..._) {
	return t$23(r$1, _);
}
function r$1(_) {
	let y = _, b = /* @__PURE__ */ new Set();
	return (_, x, S) => {
		let C = y(_, x, S);
		return b.has(C) ? tn : (b.add(C), {
			done: !1,
			hasNext: !0,
			next: _
		});
	};
}
function t$2(..._) {
	return t$28(Object.values, _);
}
function t$1(_, y, b) {
	return typeof _ == `function` ? (y, b) => n$1(y, b, _) : typeof y == `function` ? e$9(n$1, [_, y], r) : n$1(_, y, b);
}
function n$1(_, y, b) {
	let x = [_, y];
	return _.length < y.length ? _.map((_, S) => b(_, y[S], S, x)) : y.map((y, S) => b(_[S], y, S, x));
}
var r = (_, y) => (b, x, S) => ({
	next: y(b, _[x], x, [S, _]),
	hasNext: !0,
	done: x >= _.length - 1
});
typeof window < `u` && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(`5`);
var rn = _(((_, y) => {
	(function(b, x) {
		typeof _ == `object` && y !== void 0 ? y.exports = x() : typeof define == `function` && define.amd ? define(x) : (b = typeof globalThis < `u` ? globalThis : b || self).Tagify = x();
	})(_, (function() {
		function t(_, y) {
			var b = Object.keys(_);
			if (Object.getOwnPropertySymbols) {
				var x = Object.getOwnPropertySymbols(_);
				y && (x = x.filter((function(y) {
					return Object.getOwnPropertyDescriptor(_, y).enumerable;
				}))), b.push.apply(b, x);
			}
			return b;
		}
		function e(_) {
			for (var y = 1; y < arguments.length; y++) {
				var b = arguments[y] == null ? {} : arguments[y];
				y % 2 ? t(Object(b), !0).forEach((function(y) {
					i(_, y, b[y]);
				})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(b)) : t(Object(b)).forEach((function(y) {
					Object.defineProperty(_, y, Object.getOwnPropertyDescriptor(b, y));
				}));
			}
			return _;
		}
		function i(_, y, b) {
			return y in _ ? Object.defineProperty(_, y, {
				value: b,
				enumerable: !0,
				configurable: !0,
				writable: !0
			}) : _[y] = b, _;
		}
		let s = (_, y, b, x) => (_ = `` + _, y = `` + y, x && (_ = _.trim(), y = y.trim()), b ? _ == y : _.toLowerCase() == y.toLowerCase()), a = (_, y) => _ && Array.isArray(_) && _.map(((_) => n(_, y)));
		function n(_, y) {
			var b, x = {};
			for (b in _) y.indexOf(b) < 0 && (x[b] = _[b]);
			return x;
		}
		function o(_) {
			var y = document.createElement(`div`);
			return _.replace(/\&#?[0-9a-z]+;/gi, (function(_) {
				return y.innerHTML = _, y.innerText;
			}));
		}
		function r(_) {
			return new DOMParser().parseFromString(_.trim(), `text/html`).body.firstElementChild;
		}
		function l(_, y) {
			for (y ||= `previous`; _ = _[y + `Sibling`];) if (_.nodeType == 3) return _;
		}
		function d(_) {
			return typeof _ == `string` ? _.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`).replace(/"/g, `&quot;`).replace(/`|'/g, `&#039;`) : _;
		}
		function h(_) {
			var y = Object.prototype.toString.call(_).split(` `)[1].slice(0, -1);
			return _ === Object(_) && y != `Array` && y != `Function` && y != `RegExp` && y != `HTMLUnknownElement`;
		}
		function g(_, y, b) {
			function s(_, y) {
				for (var b in y) if (y.hasOwnProperty(b)) {
					if (h(y[b])) {
						h(_[b]) ? s(_[b], y[b]) : _[b] = Object.assign({}, y[b]);
						continue;
					}
					if (Array.isArray(y[b])) {
						_[b] = Object.assign([], y[b]);
						continue;
					}
					_[b] = y[b];
				}
			}
			return _ instanceof Object || (_ = {}), s(_, y), b && s(_, b), _;
		}
		function p() {
			let _ = [], y = {};
			for (let b of arguments) for (let x of b) h(x) ? y[x.value] || (_.push(x), y[x.value] = 1) : _.includes(x) || _.push(x);
			return _;
		}
		function c(_) {
			return String.prototype.normalize ? typeof _ == `string` ? _.normalize(`NFD`).replace(/[\u0300-\u036f]/g, ``) : void 0 : _;
		}
		var u = () => /(?=.*chrome)(?=.*android)/i.test(navigator.userAgent);
		function m() {
			return `10000000-1000-4000-8000-100000000000`.replace(/[018]/g, ((_) => (_ ^ crypto.getRandomValues(/* @__PURE__ */ new Uint8Array(1))[0] & 15 >> _ / 4).toString(16)));
		}
		function v(_) {
			return _ && _.classList && _.classList.contains(this.settings.classNames.tag);
		}
		var _ = {
			delimiters: `,`,
			pattern: null,
			tagTextProp: `value`,
			maxTags: Infinity,
			callbacks: {},
			addTagOnBlur: !0,
			onChangeAfterBlur: !0,
			duplicates: !1,
			whitelist: [],
			blacklist: [],
			enforceWhitelist: !1,
			userInput: !0,
			keepInvalidTags: !1,
			createInvalidTags: !0,
			mixTagsAllowedAfter: /,|\.|\:|\s/,
			mixTagsInterpolator: [`[[`, `]]`],
			backspace: !0,
			skipInvalid: !1,
			pasteAsTags: !0,
			editTags: {
				clicks: 2,
				keepInvalid: !0
			},
			transformTag: () => {},
			trim: !0,
			a11y: { focusableTags: !1 },
			mixMode: { insertAfterTag: `\xA0` },
			autoComplete: {
				enabled: !0,
				rightKey: !1
			},
			classNames: {
				namespace: `tagify`,
				mixMode: `tagify--mix`,
				selectMode: `tagify--select`,
				input: `tagify__input`,
				focus: `tagify--focus`,
				tagNoAnimation: `tagify--noAnim`,
				tagInvalid: `tagify--invalid`,
				tagNotAllowed: `tagify--notAllowed`,
				scopeLoading: `tagify--loading`,
				hasMaxTags: `tagify--hasMaxTags`,
				hasNoTags: `tagify--noTags`,
				empty: `tagify--empty`,
				inputInvalid: `tagify__input--invalid`,
				dropdown: `tagify__dropdown`,
				dropdownWrapper: `tagify__dropdown__wrapper`,
				dropdownHeader: `tagify__dropdown__header`,
				dropdownFooter: `tagify__dropdown__footer`,
				dropdownItem: `tagify__dropdown__item`,
				dropdownItemActive: `tagify__dropdown__item--active`,
				dropdownItemHidden: `tagify__dropdown__item--hidden`,
				dropdownInital: `tagify__dropdown--initial`,
				tag: `tagify__tag`,
				tagText: `tagify__tag-text`,
				tagX: `tagify__tag__removeBtn`,
				tagLoading: `tagify__tag--loading`,
				tagEditing: `tagify__tag--editable`,
				tagFlash: `tagify__tag--flash`,
				tagHide: `tagify__tag--hide`
			},
			dropdown: {
				classname: ``,
				enabled: 2,
				maxItems: 10,
				searchKeys: [`value`, `searchBy`],
				fuzzySearch: !0,
				caseSensitive: !1,
				accentedSearch: !0,
				includeSelectedTags: !1,
				highlightFirst: !1,
				closeOnSelect: !0,
				clearOnSelect: !0,
				position: `all`,
				appendTarget: null
			},
			hooks: {
				beforeRemoveTag: () => Promise.resolve(),
				beforePaste: () => Promise.resolve(),
				suggestionClick: () => Promise.resolve()
			}
		};
		function T() {
			this.dropdown = {};
			for (let _ in this._dropdown) this.dropdown[_] = typeof this._dropdown[_] == `function` ? this._dropdown[_].bind(this) : this._dropdown[_];
			this.dropdown.refs();
		}
		var y = {
			refs() {
				this.DOM.dropdown = this.parseTemplate(`dropdown`, [this.settings]), this.DOM.dropdown.content = this.DOM.dropdown.querySelector(`[data-selector='tagify-suggestions-wrapper']`);
			},
			getHeaderRef() {
				return this.DOM.dropdown.querySelector(`[data-selector='tagify-suggestions-header']`);
			},
			getFooterRef() {
				return this.DOM.dropdown.querySelector(`[data-selector='tagify-suggestions-footer']`);
			},
			getAllSuggestionsRefs() {
				return [...this.DOM.dropdown.content.querySelectorAll(this.settings.classNames.dropdownItemSelector)];
			},
			show(_) {
				var y, b, x, S = this.settings, C = S.mode == `mix` && !S.enforceWhitelist, w = !S.whitelist || !S.whitelist.length, E = S.dropdown.position == `manual`;
				if (_ = _ === void 0 ? this.state.inputText : _, !(w && !C && !S.templates.dropdownItemNoMatch || !1 === S.dropdown.enable || this.state.isLoading || this.settings.readonly)) {
					if (clearTimeout(this.dropdownHide__bindEventsTimeout), this.suggestedListItems = this.dropdown.filterListItems(_), _ && !this.suggestedListItems.length && (this.trigger(`dropdown:noMatch`, _), S.templates.dropdownItemNoMatch && (x = S.templates.dropdownItemNoMatch.call(this, { value: _ }))), !x) {
						if (this.suggestedListItems.length) _ && C && !this.state.editing.scope && !s(this.suggestedListItems[0].value, _) && this.suggestedListItems.unshift({ value: _ });
						else {
							if (!_ || !C || this.state.editing.scope) return this.input.autocomplete.suggest.call(this), void this.dropdown.hide();
							this.suggestedListItems = [{ value: _ }];
						}
						b = `` + (h(y = this.suggestedListItems[0]) ? y.value : y), S.autoComplete && b && b.indexOf(_) == 0 && this.input.autocomplete.suggest.call(this, y);
					}
					this.dropdown.fill(x), S.dropdown.highlightFirst && this.dropdown.highlightOption(this.DOM.dropdown.content.querySelector(S.classNames.dropdownItemSelector)), this.state.dropdown.visible || setTimeout(this.dropdown.events.binding.bind(this)), this.state.dropdown.visible = _ || !0, this.state.dropdown.query = _, this.setStateSelection(), E || setTimeout((() => {
						this.dropdown.position(), this.dropdown.render();
					})), setTimeout((() => {
						this.trigger(`dropdown:show`, this.DOM.dropdown);
					}));
				}
			},
			hide(_) {
				var y = this.DOM, b = y.scope, x = y.dropdown, S = this.settings.dropdown.position == `manual` && !_;
				if (x && document.body.contains(x) && !S) return window.removeEventListener(`resize`, this.dropdown.position), this.dropdown.events.binding.call(this, !1), b.setAttribute(`aria-expanded`, !1), x.parentNode.removeChild(x), setTimeout((() => {
					this.state.dropdown.visible = !1;
				}), 100), this.state.dropdown.query = this.state.ddItemData = this.state.ddItemElm = this.state.selection = null, this.state.tag && this.state.tag.value.length && (this.state.flaggedTags[this.state.tag.baseOffset] = this.state.tag), this.trigger(`dropdown:hide`, x), this;
			},
			toggle(_) {
				this.dropdown[this.state.dropdown.visible && !_ ? `hide` : `show`]();
			},
			render() {
				var _, y, b, x = (_ = this.DOM.dropdown, (b = _.cloneNode(!0)).style.cssText = `position:fixed; top:-9999px; opacity:0`, document.body.appendChild(b), y = b.clientHeight, b.parentNode.removeChild(b), y), S = this.settings;
				return typeof S.dropdown.enabled == `number` && S.dropdown.enabled >= 0 ? (this.DOM.scope.setAttribute(`aria-expanded`, !0), document.body.contains(this.DOM.dropdown) || (this.DOM.dropdown.classList.add(S.classNames.dropdownInital), this.dropdown.position(x), S.dropdown.appendTarget.appendChild(this.DOM.dropdown), setTimeout((() => this.DOM.dropdown.classList.remove(S.classNames.dropdownInital)))), this) : this;
			},
			fill(_) {
				_ = typeof _ == `string` ? _ : this.dropdown.createListHTML(_ || this.suggestedListItems);
				var y, b = this.settings.templates.dropdownContent.call(this, _);
				this.DOM.dropdown.content.innerHTML = (y = b) ? y.replace(/\>[\r\n ]+\</g, `><`).replace(/(<.*?>)|\s+/g, ((_, y) => y || ` `)) : ``;
			},
			fillHeaderFooter() {
				this.settings.templates;
				var _ = this.dropdown.filterListItems(this.state.dropdown.query), y = this.parseTemplate(`dropdownHeader`, [_]), b = this.parseTemplate(`dropdownFooter`, [_]), x = this.dropdown.getHeaderRef(), S = this.dropdown.getFooterRef();
				y && x?.parentNode.replaceChild(y, x), b && S?.parentNode.replaceChild(b, S);
			},
			refilter(_) {
				_ = _ || this.state.dropdown.query || ``, this.suggestedListItems = this.dropdown.filterListItems(_), this.dropdown.fill(), this.suggestedListItems.length || this.dropdown.hide(), this.trigger(`dropdown:updated`, this.DOM.dropdown);
			},
			position(_) {
				var y = this.settings.dropdown;
				if (y.position != `manual`) {
					var b, x, S, C, w, E, D = this.DOM.dropdown, O = y.placeAbove, k = y.appendTarget === document.body, A = k ? window.pageYOffset : y.appendTarget.scrollTop, j = document.fullscreenElement || document.webkitFullscreenElement || document.documentElement, N = j.clientHeight, P = Math.max(j.clientWidth || 0, window.innerWidth || 0) > 480 ? y.position : `all`, F = this.DOM[P == `input` ? `input` : `scope`];
					if (_ ||= D.clientHeight, this.state.dropdown.visible) {
						if (P == `text` ? (S = (b = this.getCaretGlobalPosition()).bottom, x = b.top, C = b.left, w = `auto`) : (E = function(_) {
							for (var y = 0, b = 0; _ && _ != j;) y += _.offsetLeft || 0, b += _.offsetTop || 0, _ = _.parentNode;
							return {
								left: y,
								top: b
							};
						}(y.appendTarget), x = (b = F.getBoundingClientRect()).top - E.top, S = b.bottom - 1 - E.top, C = b.left - E.left, w = b.width + `px`), !k) {
							let _ = function() {
								for (var _ = 0, b = y.appendTarget.parentNode; b;) _ += b.scrollTop || 0, b = b.parentNode;
								return _;
							}();
							x += _, S += _;
						}
						x = Math.floor(x), S = Math.ceil(S), O = O === void 0 ? N - b.bottom < _ : O, D.style.cssText = `left:` + (C + window.pageXOffset) + `px; width:` + w + `;` + (O ? `top: ` + (x + A) + `px` : `top: ` + (S + A) + `px`), D.setAttribute(`placement`, O ? `top` : `bottom`), D.setAttribute(`position`, P);
					}
				}
			},
			events: {
				binding() {
					let _ = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
					var y = this.dropdown.events.callbacks, b = this.listeners.dropdown = this.listeners.dropdown || {
						position: this.dropdown.position.bind(this, null),
						onKeyDown: y.onKeyDown.bind(this),
						onMouseOver: y.onMouseOver.bind(this),
						onMouseLeave: y.onMouseLeave.bind(this),
						onClick: y.onClick.bind(this),
						onScroll: y.onScroll.bind(this)
					}, x = _ ? `addEventListener` : `removeEventListener`;
					this.settings.dropdown.position != `manual` && (document[x](`scroll`, b.position, !0), window[x](`resize`, b.position), window[x](`keydown`, b.onKeyDown)), this.DOM.dropdown[x](`mouseover`, b.onMouseOver), this.DOM.dropdown[x](`mouseleave`, b.onMouseLeave), this.DOM.dropdown[x](`mousedown`, b.onClick), this.DOM.dropdown.content[x](`scroll`, b.onScroll);
				},
				callbacks: {
					onKeyDown(_) {
						if (this.state.hasFocus && !this.state.composing) {
							var y = this.DOM.dropdown.querySelector(this.settings.classNames.dropdownItemActiveSelector), b = this.dropdown.getSuggestionDataByNode(y);
							switch (_.key) {
								case `ArrowDown`:
								case `ArrowUp`:
								case `Down`:
								case `Up`:
									_.preventDefault();
									var x = this.dropdown.getAllSuggestionsRefs(), S = _.key == `ArrowUp` || _.key == `Up`;
									y &&= this.dropdown.getNextOrPrevOption(y, !S), y && y.matches(this.settings.classNames.dropdownItemSelector) || (y = x[S ? x.length - 1 : 0]), b = this.dropdown.getSuggestionDataByNode(y), this.dropdown.highlightOption(y, !0);
									break;
								case `Escape`:
								case `Esc`:
									this.dropdown.hide();
									break;
								case `ArrowRight`: if (this.state.actions.ArrowLeft) return;
								case `Tab`:
									if (this.settings.mode != `mix` && y && !this.settings.autoComplete.rightKey && !this.state.editing) {
										_.preventDefault();
										var C = this.dropdown.getMappedValue(b);
										return this.input.autocomplete.set.call(this, C), !1;
									}
									return !0;
								case `Enter`:
									_.preventDefault(), this.settings.hooks.suggestionClick(_, {
										tagify: this,
										tagData: b,
										suggestionElm: y
									}).then((() => {
										if (y) return this.dropdown.selectOption(y), y = this.dropdown.getNextOrPrevOption(y, !S), void this.dropdown.highlightOption(y);
										this.dropdown.hide(), this.settings.mode != `mix` && this.addTags(this.state.inputText.trim(), !0);
									})).catch(((_) => _));
									break;
								case `Backspace`: {
									if (this.settings.mode == `mix` || this.state.editing.scope) return;
									let _ = this.input.raw.call(this);
									_ != `` && _.charCodeAt(0) != 8203 || (!0 === this.settings.backspace ? this.removeTags() : this.settings.backspace == `edit` && setTimeout(this.editTag.bind(this), 0));
								}
							}
						}
					},
					onMouseOver(_) {
						var y = _.target.closest(this.settings.classNames.dropdownItemSelector);
						y && this.dropdown.highlightOption(y);
					},
					onMouseLeave(_) {
						this.dropdown.highlightOption();
					},
					onClick(_) {
						if (_.button == 0 && _.target != this.DOM.dropdown && _.target != this.DOM.dropdown.content) {
							var y = _.target.closest(this.settings.classNames.dropdownItemSelector), b = this.dropdown.getSuggestionDataByNode(y);
							this.state.actions.selectOption = !0, setTimeout((() => this.state.actions.selectOption = !1), 50), this.settings.hooks.suggestionClick(_, {
								tagify: this,
								tagData: b,
								suggestionElm: y
							}).then((() => {
								y ? this.dropdown.selectOption(y, _) : this.dropdown.hide();
							})).catch(((_) => console.warn(_)));
						}
					},
					onScroll(_) {
						var y = _.target, b = y.scrollTop / (y.scrollHeight - y.parentNode.clientHeight) * 100;
						this.trigger(`dropdown:scroll`, { percentage: Math.round(b) });
					}
				}
			},
			getSuggestionDataByNode(_) {
				var y = _ && _.getAttribute(`value`);
				return this.suggestedListItems.find(((_) => _.value == y)) || null;
			},
			getNextOrPrevOption(_) {
				let y = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
				var b = this.dropdown.getAllSuggestionsRefs(), x = b.findIndex(((y) => y === _));
				return y ? b[x + 1] : b[x - 1];
			},
			highlightOption(_, y) {
				var b, x = this.settings.classNames.dropdownItemActive;
				if (this.state.ddItemElm && (this.state.ddItemElm.classList.remove(x), this.state.ddItemElm.removeAttribute(`aria-selected`)), !_) return this.state.ddItemData = null, this.state.ddItemElm = null, void this.input.autocomplete.suggest.call(this);
				b = this.dropdown.getSuggestionDataByNode(_), this.state.ddItemData = b, this.state.ddItemElm = _, _.classList.add(x), _.setAttribute(`aria-selected`, !0), y && (_.parentNode.scrollTop = _.clientHeight + _.offsetTop - _.parentNode.clientHeight), this.settings.autoComplete && (this.input.autocomplete.suggest.call(this, b), this.dropdown.position());
			},
			selectOption(_, y) {
				var b = this.settings.dropdown, x = b.clearOnSelect, S = b.closeOnSelect;
				if (!_) return this.addTags(this.state.inputText, !0), void (S && this.dropdown.hide());
				y ||= {};
				var C = _.getAttribute(`value`), w = C == `noMatch`, E = this.suggestedListItems.find(((_) => (_.value || _) == C));
				this.trigger(`dropdown:select`, {
					data: E,
					elm: _,
					event: y
				}), C && (E || w) ? (this.state.editing ? this.onEditTagDone(null, g({ __isValid: !0 }, this.normalizeTags([E])[0])) : this[this.settings.mode == `mix` ? `addMixTags` : `addTags`]([E || this.input.raw.call(this)], x), this.DOM.input.parentNode && (setTimeout((() => {
					this.DOM.input.focus(), this.toggleFocusClass(!0), this.setRangeAtStartEnd(!1);
				})), S && setTimeout(this.dropdown.hide.bind(this)), _.addEventListener(`transitionend`, (() => {
					this.dropdown.fillHeaderFooter(), setTimeout((() => _.remove()), 100);
				}), { once: !0 }), _.classList.add(this.settings.classNames.dropdownItemHidden))) : S && setTimeout(this.dropdown.hide.bind(this));
			},
			selectAll(_) {
				this.suggestedListItems.length = 0, this.dropdown.hide(), this.dropdown.filterListItems(``);
				var y = this.dropdown.filterListItems(``);
				return _ || (y = this.state.dropdown.suggestions), this.addTags(y, !0), this;
			},
			filterListItems(_, y) {
				var b, x, S, C, w, E = this.settings, D = E.dropdown, O = (y ||= {}, []), k = [], A = E.whitelist, j = D.maxItems >= 0 ? D.maxItems : Infinity, N = D.searchKeys, P = 0;
				if (!(_ = E.mode == `select` && this.value.length && this.value[0][E.tagTextProp] == _ ? `` : _) || !N.length) return O = D.includeSelectedTags ? A : A.filter(((_) => !this.isTagDuplicate(h(_) ? _.value : _))), this.state.dropdown.suggestions = O, O.slice(0, j);
				function f(_, y) {
					return y.toLowerCase().split(` `).every(((y) => _.includes(y.toLowerCase())));
				}
				for (w = D.caseSensitive ? `` + _ : (`` + _).toLowerCase(); P < A.length; P++) {
					let _, E;
					b = A[P] instanceof Object ? A[P] : { value: A[P] };
					let j = Object.keys(b).some(((_) => N.includes(_))) ? N : [`value`];
					D.fuzzySearch && !y.exact ? (S = j.reduce(((_, y) => _ + ` ` + (b[y] || ``)), ``).toLowerCase().trim(), D.accentedSearch && (S = c(S), w = c(w)), _ = S.indexOf(w) == 0, E = S === w, x = f(S, w)) : (_ = !0, x = j.some(((_) => {
						var x = `` + (b[_] || ``);
						return D.accentedSearch && (x = c(x), w = c(w)), D.caseSensitive || (x = x.toLowerCase()), E = x === w, y.exact ? x === w : x.indexOf(w) == 0;
					}))), C = !D.includeSelectedTags && this.isTagDuplicate(h(b) ? b.value : b), x && !C && (E && _ ? k.push(b) : D.sortby == `startsWith` && _ ? O.unshift(b) : O.push(b));
				}
				return this.state.dropdown.suggestions = k.concat(O), typeof D.sortby == `function` ? D.sortby(k.concat(O), w) : k.concat(O).slice(0, j);
			},
			getMappedValue(_) {
				var y = this.settings.dropdown.mapValueTo;
				return y ? typeof y == `function` ? y(_) : _[y] || _.value : _.value;
			},
			createListHTML(_) {
				return g([], _).map(((_, y) => {
					typeof _ != `string` && typeof _ != `number` || (_ = { value: _ });
					var b = this.dropdown.getMappedValue(_);
					return b = typeof b == `string` ? d(b) : b, this.settings.templates.dropdownItem.apply(this, [e(e({}, _), {}, { mappedValue: b }), this]);
				})).join(``);
			}
		};
		let b = `@yaireo/tagify/`;
		var x, S = {
			empty: `empty`,
			exceed: `number of tags exceeded`,
			pattern: `pattern mismatch`,
			duplicate: `already exists`,
			notAllowed: `not allowed`
		}, C = {
			wrapper: (_, y) => `<tags class="${y.classNames.namespace} ${y.mode ? `${y.classNames[y.mode + `Mode`]}` : ``} ${_.className}"\n                    ${y.readonly ? `readonly` : ``}\n                    ${y.disabled ? `disabled` : ``}\n                    ${y.required ? `required` : ``}\n                    ${y.mode === `select` ? `spellcheck='false'` : ``}\n                    tabIndex="-1">\n            <span ${!y.readonly && y.userInput ? `contenteditable` : ``} tabIndex="0" data-placeholder="${y.placeholder || `&#8203;`}" aria-placeholder="${y.placeholder || ``}"\n                class="${y.classNames.input}"\n                role="textbox"\n                aria-autocomplete="both"\n                aria-multiline="${y.mode == `mix`}"></span>\n                &#8203;\n        </tags>`,
			tag(_, y) {
				let b = y.settings;
				return `<tag title="${_.title || _.value}"\n                    contenteditable='false'\n                    spellcheck='false'\n                    tabIndex="${b.a11y.focusableTags ? 0 : -1}"\n                    class="${b.classNames.tag} ${_.class || ``}"\n                    ${this.getAttributes(_)}>\n            <x title='' class="${b.classNames.tagX}" role='button' aria-label='remove tag'></x>\n            <div>\n                <span class="${b.classNames.tagText}">${_[b.tagTextProp] || _.value}</span>\n            </div>\n        </tag>`;
			},
			dropdown(_) {
				var y = _.dropdown, b = y.position == `manual`, x = `${_.classNames.dropdown}`;
				return `<div class="${b ? `` : x} ${y.classname}" role="listbox" aria-labelledby="dropdown">\n                    <div data-selector='tagify-suggestions-wrapper' class="${_.classNames.dropdownWrapper}"></div>\n                </div>`;
			},
			dropdownContent(_) {
				var y = this.settings, b = this.state.dropdown.suggestions;
				return `\n            ${y.templates.dropdownHeader.call(this, b)}\n            ${_}\n            ${y.templates.dropdownFooter.call(this, b)}\n        `;
			},
			dropdownItem(_) {
				return `<div ${this.getAttributes(_)}\n                    class='${this.settings.classNames.dropdownItem} ${_.class ? _.class : ``}'\n                    tabindex="0"\n                    role="option">${_.mappedValue || _.value}</div>`;
			},
			dropdownHeader(_) {
				return `<header data-selector='tagify-suggestions-header' class="${this.settings.classNames.dropdownHeader}"></header>`;
			},
			dropdownFooter(_) {
				var y = _.length - this.settings.dropdown.maxItems;
				return y > 0 ? `<footer data-selector='tagify-suggestions-footer' class="${this.settings.classNames.dropdownFooter}">\n                ${y} more items. Refine your search.\n            </footer>` : ``;
			},
			dropdownItemNoMatch: null
		}, w = {
			customBinding() {
				this.customEventsList.forEach(((_) => {
					this.on(_, this.settings.callbacks[_]);
				}));
			},
			binding() {
				let _ = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0];
				var y, b = this.events.callbacks, x = _ ? `addEventListener` : `removeEventListener`;
				if (!this.state.mainEvents || !_) {
					for (var S in this.state.mainEvents = _, _ && !this.listeners.main && (this.events.bindGlobal.call(this), this.settings.isJQueryPlugin && jQuery(this.DOM.originalInput).on(`tagify.removeAllTags`, this.removeAllTags.bind(this))), y = this.listeners.main = this.listeners.main || {
						focus: [`input`, b.onFocusBlur.bind(this)],
						keydown: [`input`, b.onKeydown.bind(this)],
						click: [`scope`, b.onClickScope.bind(this)],
						dblclick: [`scope`, b.onDoubleClickScope.bind(this)],
						paste: [`input`, b.onPaste.bind(this)],
						drop: [`input`, b.onDrop.bind(this)],
						compositionstart: [`input`, b.onCompositionStart.bind(this)],
						compositionend: [`input`, b.onCompositionEnd.bind(this)]
					}) this.DOM[y[S][0]][x](S, y[S][1]);
					clearInterval(this.listeners.main.originalInputValueObserverInterval), this.listeners.main.originalInputValueObserverInterval = setInterval(b.observeOriginalInputValue.bind(this), 500);
					var C = this.listeners.main.inputMutationObserver || new MutationObserver(b.onInputDOMChange.bind(this));
					C && C.disconnect(), this.settings.mode == `mix` && C.observe(this.DOM.input, { childList: !0 });
				}
			},
			bindGlobal(_) {
				var y, b = this.events.callbacks, x = _ ? `removeEventListener` : `addEventListener`;
				if (_ || !this.listeners.global) for (y of (this.listeners.global = this.listeners && this.listeners.global || [
					{
						type: this.isIE ? `keydown` : `input`,
						target: this.DOM.input,
						cb: b[this.isIE ? `onInputIE` : `onInput`].bind(this)
					},
					{
						type: `keydown`,
						target: window,
						cb: b.onWindowKeyDown.bind(this)
					},
					{
						type: `blur`,
						target: this.DOM.input,
						cb: b.onFocusBlur.bind(this)
					}
				], this.listeners.global)) y.target[x](y.type, y.cb);
			},
			unbindGlobal() {
				this.events.bindGlobal.call(this, !0);
			},
			callbacks: {
				onFocusBlur(_) {
					var y = this.settings, b = _.target ? this.trim(_.target.textContent) : ``, x = this.value?.[0]?.[y.tagTextProp], S = _.type, C = y.dropdown.enabled >= 0, w = { relatedTarget: _.relatedTarget }, E = this.state.actions.selectOption && (C || !y.dropdown.closeOnSelect), D = this.state.actions.addNew && C, O = _.relatedTarget && v.call(this, _.relatedTarget) && this.DOM.scope.contains(_.relatedTarget);
					if (S == `blur`) {
						if (_.relatedTarget === this.DOM.scope) return this.dropdown.hide(), void this.DOM.input.focus();
						this.postUpdate(), y.onChangeAfterBlur && this.triggerChangeEvent();
					}
					if (!E && !D) if (this.state.hasFocus = S == `focus` && +/* @__PURE__ */ new Date(), this.toggleFocusClass(this.state.hasFocus), y.mode != `mix`) {
						if (S == `focus`) return this.trigger(`focus`, w), void (y.dropdown.enabled !== 0 && y.userInput || this.dropdown.show(this.value.length ? `` : void 0));
						S == `blur` && (this.trigger(`blur`, w), this.loading(!1), y.mode == `select` && (O && (this.removeTags(), b = ``), x === b && (b = ``)), b && !this.state.actions.selectOption && y.addTagOnBlur && this.addTags(b, !0)), this.DOM.input.removeAttribute(`style`), this.dropdown.hide();
					} else S == `focus` ? this.trigger(`focus`, w) : _.type == `blur` && (this.trigger(`blur`, w), this.loading(!1), this.dropdown.hide(), this.state.dropdown.visible = void 0, this.setStateSelection());
				},
				onCompositionStart(_) {
					this.state.composing = !0;
				},
				onCompositionEnd(_) {
					this.state.composing = !1;
				},
				onWindowKeyDown(_) {
					var y, b = document.activeElement;
					if (v.call(this, b) && this.DOM.scope.contains(document.activeElement)) switch (y = b.nextElementSibling, _.key) {
						case `Backspace`:
							this.settings.readonly || (this.removeTags(b), (y || this.DOM.input).focus());
							break;
						case `Enter`: setTimeout(this.editTag.bind(this), 0, b);
					}
				},
				onKeydown(_) {
					var y = this.settings;
					if (!this.state.composing && y.userInput) {
						y.mode == `select` && y.enforceWhitelist && this.value.length && _.key != `Tab` && _.preventDefault();
						var b = this.trim(_.target.textContent);
						if (this.trigger(`keydown`, { event: _ }), y.mode == `mix`) {
							switch (_.key) {
								case `Left`:
								case `ArrowLeft`:
									this.state.actions.ArrowLeft = !0;
									break;
								case `Delete`:
								case `Backspace`:
									if (this.state.editing) return;
									var S, C, w, E = document.getSelection(), D = _.key == `Delete` && E.anchorOffset == (E.anchorNode.length || 0), O = E.anchorNode.previousSibling, k = E.anchorNode.nodeType == 1 || !E.anchorOffset && O && O.nodeType == 1 && E.anchorNode.previousSibling, A = o(this.DOM.input.innerHTML), j = this.getTagElms();
									if (y.backspace == `edit` && k) return S = E.anchorNode.nodeType == 1 ? null : E.anchorNode.previousElementSibling, setTimeout(this.editTag.bind(this), 0, S), void _.preventDefault();
									if (u() && k) return w = l(k), k.hasAttribute(`readonly`) || k.remove(), this.DOM.input.focus(), void setTimeout((() => {
										this.placeCaretAfterNode(w), this.DOM.input.click();
									}));
									if (E.anchorNode.nodeName == `BR`) return;
									if ((D || k) && E.anchorNode.nodeType == 1 ? C = E.anchorOffset == 0 ? D ? j[0] : null : j[Math.min(j.length, E.anchorOffset) - 1] : D ? C = E.anchorNode.nextElementSibling : k && (C = k), E.anchorNode.nodeType == 3 && !E.anchorNode.nodeValue && E.anchorNode.previousElementSibling && _.preventDefault(), (k || D) && !y.backspace || E.type != `Range` && !E.anchorOffset && E.anchorNode == this.DOM.input && _.key != `Delete`) return void _.preventDefault();
									if (E.type != `Range` && C && C.hasAttribute(`readonly`)) return void this.placeCaretAfterNode(l(C));
									clearTimeout(x), x = setTimeout((() => {
										var _ = document.getSelection(), y = o(this.DOM.input.innerHTML), b = !D && _.anchorNode.previousSibling;
										if (y.length >= A.length && b) if (v.call(this, b) && !b.hasAttribute(`readonly`)) {
											if (this.removeTags(b), this.fixFirefoxLastTagNoCaret(), this.DOM.input.children.length == 2 && this.DOM.input.children[1].tagName == `BR`) return this.DOM.input.innerHTML = ``, this.value.length = 0, !0;
										} else b.remove();
										this.value = [].map.call(j, ((_, y) => {
											var b = this.tagData(_);
											if (_.parentNode || b.readonly) return b;
											this.trigger(`remove`, {
												tag: _,
												index: y,
												data: b
											});
										})).filter(((_) => _));
									}), 20);
							}
							return !0;
						}
						switch (_.key) {
							case `Backspace`:
								y.mode == `select` && y.enforceWhitelist && this.value.length ? this.removeTags() : this.state.dropdown.visible && y.dropdown.position != `manual` || _.target.textContent != `` && b.charCodeAt(0) != 8203 || (!0 === y.backspace ? this.removeTags() : y.backspace == `edit` && setTimeout(this.editTag.bind(this), 0));
								break;
							case `Esc`:
							case `Escape`:
								if (this.state.dropdown.visible) return;
								_.target.blur();
								break;
							case `Down`:
							case `ArrowDown`:
								this.state.dropdown.visible || this.dropdown.show();
								break;
							case `ArrowRight`: {
								let _ = this.state.inputSuggestion || this.state.ddItemData;
								if (_ && y.autoComplete.rightKey) return void this.addTags([_], !0);
								break;
							}
							case `Tab`: {
								let x = y.mode == `select`;
								if (!b || x) return !0;
								_.preventDefault();
							}
							case `Enter`:
								if (this.state.dropdown.visible && y.dropdown.position != `manual`) return;
								_.preventDefault(), setTimeout((() => {
									this.state.actions.selectOption || this.addTags(b, !0);
								}));
						}
					}
				},
				onInput(_) {
					this.postUpdate();
					var y = this.settings;
					if (y.mode == `mix`) return this.events.callbacks.onMixTagsInput.call(this, _);
					var b = this.input.normalize.call(this), x = b.length >= y.dropdown.enabled, S = {
						value: b,
						inputElm: this.DOM.input
					}, C = this.validateTag({ value: b });
					y.mode == `select` && this.toggleScopeValidation(C), S.isValid = C, this.state.inputText != b && (this.input.set.call(this, b, !1), b.search(y.delimiters) == -1 ? y.dropdown.enabled >= 0 && this.dropdown[x ? `show` : `hide`](b) : this.addTags(b) && this.input.set.call(this), this.trigger(`input`, S));
				},
				onMixTagsInput(_) {
					var y, b, x, S, C, w, E, D, O = this.settings, k = this.value.length, A = this.getTagElms(), j = document.createDocumentFragment(), N = window.getSelection().getRangeAt(0), P = [].map.call(A, ((_) => this.tagData(_).value));
					if (_.inputType == `deleteContentBackward` && u() && this.events.callbacks.onKeydown.call(this, {
						target: _.target,
						key: `Backspace`
					}), this.value.slice().forEach(((_) => {
						_.readonly && !P.includes(_.value) && j.appendChild(this.createTagElem(_));
					})), j.childNodes.length && (N.insertNode(j), this.setRangeAtStartEnd(!1, j.lastChild)), A.length != k) return this.value = [].map.call(this.getTagElms(), ((_) => this.tagData(_))), void this.update({ withoutChangeEvent: !0 });
					if (this.hasMaxTags()) return !0;
					if (window.getSelection && (w = window.getSelection()).rangeCount > 0 && w.anchorNode.nodeType == 3) {
						if ((N = w.getRangeAt(0).cloneRange()).collapse(!0), N.setStart(w.focusNode, 0), x = (y = N.toString().slice(0, N.endOffset)).split(O.pattern).length - 1, (b = y.match(O.pattern)) && (S = y.slice(y.lastIndexOf(b[b.length - 1]))), S) {
							if (this.state.actions.ArrowLeft = !1, this.state.tag = {
								prefix: S.match(O.pattern)[0],
								value: S.replace(O.pattern, ``)
							}, this.state.tag.baseOffset = w.baseOffset - this.state.tag.value.length, D = this.state.tag.value.match(O.delimiters)) return this.state.tag.value = this.state.tag.value.replace(O.delimiters, ``), this.state.tag.delimiters = D[0], this.addTags(this.state.tag.value, O.dropdown.clearOnSelect), void this.dropdown.hide();
							C = this.state.tag.value.length >= O.dropdown.enabled;
							try {
								E = (E = this.state.flaggedTags[this.state.tag.baseOffset]).prefix == this.state.tag.prefix && E.value[0] == this.state.tag.value[0], this.state.flaggedTags[this.state.tag.baseOffset] && !this.state.tag.value && delete this.state.flaggedTags[this.state.tag.baseOffset];
							} catch {}
							(E || x < this.state.mixMode.matchedPatternCount) && (C = !1);
						} else this.state.flaggedTags = {};
						this.state.mixMode.matchedPatternCount = x;
					}
					setTimeout((() => {
						this.update({ withoutChangeEvent: !0 }), this.trigger(`input`, g({}, this.state.tag, { textContent: this.DOM.input.textContent })), this.state.tag && this.dropdown[C ? `show` : `hide`](this.state.tag.value);
					}), 10);
				},
				onInputIE(_) {
					var y = this;
					setTimeout((function() {
						y.events.callbacks.onInput.call(y, _);
					}));
				},
				observeOriginalInputValue() {
					this.DOM.originalInput.parentNode || this.destroy(), this.DOM.originalInput.value != this.DOM.originalInput.tagifyValue && this.loadOriginalValues();
				},
				onClickScope(_) {
					var y = this.settings, b = _.target.closest(`.` + y.classNames.tag), x = +/* @__PURE__ */ new Date() - this.state.hasFocus;
					if (_.target != this.DOM.scope) {
						if (!_.target.classList.contains(y.classNames.tagX)) return b ? (this.trigger(`click`, {
							tag: b,
							index: this.getNodeIndex(b),
							data: this.tagData(b),
							event: _
						}), void (y.editTags !== 1 && y.editTags.clicks !== 1 || this.events.callbacks.onDoubleClickScope.call(this, _))) : void (_.target == this.DOM.input && (y.mode == `mix` && this.fixFirefoxLastTagNoCaret(), x > 500) ? this.state.dropdown.visible ? this.dropdown.hide() : y.dropdown.enabled === 0 && y.mode != `mix` && this.dropdown.show(this.value.length ? `` : void 0) : y.mode == `select` && !this.state.dropdown.visible && this.dropdown.show());
						this.removeTags(_.target.parentNode);
					} else this.state.hasFocus || this.DOM.input.focus();
				},
				onPaste(_) {
					_.preventDefault();
					var y, b, x = this.settings;
					if (x.mode == `select` && x.enforceWhitelist || !x.userInput) return !1;
					x.readonly || (y = _.clipboardData || window.clipboardData, b = y.getData(`Text`), x.hooks.beforePaste(_, {
						tagify: this,
						pastedText: b,
						clipboardData: y
					}).then(((y) => {
						y === void 0 && (y = b), y && (this.injectAtCaret(y, window.getSelection().getRangeAt(0)), this.settings.mode == `mix` ? this.events.callbacks.onMixTagsInput.call(this, _) : this.settings.pasteAsTags ? this.addTags(this.state.inputText + y, !0) : this.state.inputText = y);
					})).catch(((_) => _)));
				},
				onDrop(_) {
					_.preventDefault();
				},
				onEditTagInput(_, y) {
					var b = _.closest(`.` + this.settings.classNames.tag), x = this.getNodeIndex(b), S = this.tagData(b), C = this.input.normalize.call(this, _), w = {
						[this.settings.tagTextProp]: C,
						__tagId: S.__tagId
					}, E = this.validateTag(w);
					this.editTagChangeDetected(g(S, w)) || !0 !== _.originalIsValid || (E = !0), b.classList.toggle(this.settings.classNames.tagInvalid, !0 !== E), S.__isValid = E, b.title = !0 === E ? S.title || S.value : E, C.length >= this.settings.dropdown.enabled && (this.state.editing && (this.state.editing.value = C), this.dropdown.show(C)), this.trigger(`edit:input`, {
						tag: b,
						index: x,
						data: g({}, this.value[x], { newValue: C }),
						event: y
					});
				},
				onEditTagFocus(_) {
					this.state.editing = {
						scope: _,
						input: _.querySelector(`[contenteditable]`)
					};
				},
				onEditTagBlur(_) {
					if (this.state.hasFocus || this.toggleFocusClass(), this.DOM.scope.contains(_)) {
						var y, b, x = this.settings, S = _.closest(`.` + x.classNames.tag), C = this.input.normalize.call(this, _), w = this.tagData(S), E = w.__originalData, D = this.editTagChangeDetected(w), O = this.validateTag({
							[x.tagTextProp]: C,
							__tagId: w.__tagId
						});
						if (C) if (D) {
							if (y = this.hasMaxTags(), b = g({}, E, {
								[x.tagTextProp]: this.trim(C),
								__isValid: O
							}), x.transformTag.call(this, b, E), !0 !== (O = (!y || !0 === E.__isValid) && this.validateTag(b))) {
								if (this.trigger(`invalid`, {
									data: b,
									tag: S,
									message: O
								}), x.editTags.keepInvalid) return;
								x.keepInvalidTags ? b.__isValid = O : b = E;
							} else x.keepInvalidTags && (delete b.title, delete b[`aria-invalid`], delete b.class);
							this.onEditTagDone(S, b);
						} else this.onEditTagDone(S, E);
						else this.onEditTagDone(S);
					}
				},
				onEditTagkeydown(_, y) {
					if (!this.state.composing) switch (this.trigger(`edit:keydown`, { event: _ }), _.key) {
						case `Esc`:
						case `Escape`: y.parentNode.replaceChild(y.__tagifyTagData.__originalHTML, y), this.state.editing = !1;
						case `Enter`:
						case `Tab`: _.preventDefault(), _.target.blur();
					}
				},
				onDoubleClickScope(_) {
					var y, b, x = _.target.closest(`.` + this.settings.classNames.tag), S = this.tagData(x), C = this.settings;
					x && C.userInput && !1 !== S.editable && (y = x.classList.contains(this.settings.classNames.tagEditing), b = x.hasAttribute(`readonly`), C.mode == `select` || C.readonly || y || b || !this.settings.editTags || this.editTag(x), this.toggleFocusClass(!0), this.trigger(`dblclick`, {
						tag: x,
						index: this.getNodeIndex(x),
						data: this.tagData(x)
					}));
				},
				onInputDOMChange(_) {
					_.forEach(((_) => {
						_.addedNodes.forEach(((_) => {
							if (_.outerHTML == `<div><br></div>`) _.replaceWith(document.createElement(`br`));
							else if (_.nodeType == 1 && _.querySelector(this.settings.classNames.tagSelector)) {
								let y = document.createTextNode(``);
								_.childNodes[0].nodeType == 3 && _.previousSibling.nodeName != `BR` && (y = document.createTextNode(`
`)), _.replaceWith(y, ...[..._.childNodes].slice(0, -1)), this.placeCaretAfterNode(y);
							} else if (v.call(this, _) && (_.previousSibling?.nodeType != 3 || _.previousSibling.textContent || _.previousSibling.remove(), _.previousSibling && _.previousSibling.nodeName == `BR`)) {
								_.previousSibling.replaceWith(`
​`);
								let y = _.nextSibling, b = ``;
								for (; y;) b += y.textContent, y = y.nextSibling;
								b.trim() && this.placeCaretAfterNode(_.previousSibling);
							}
						})), _.removedNodes.forEach(((_) => {
							_ && _.nodeName == `BR` && v.call(this, y) && (this.removeTags(y), this.fixFirefoxLastTagNoCaret());
						}));
					}));
					var y = this.DOM.input.lastChild;
					y && y.nodeValue == `` && y.remove(), y && y.nodeName == `BR` || this.DOM.input.appendChild(document.createElement(`br`));
				}
			}
		};
		function M(_, y) {
			if (!_) {
				console.warn(`Tagify:`, `input element not found`, _);
				let y = new Proxy(this, { get: () => () => y });
				return y;
			}
			if (_.__tagify) return console.warn(`Tagify: `, `input element is already Tagified - Same instance is returned.`, _), _.__tagify;
			var x;
			g(this, function(_) {
				var y = document.createTextNode(``);
				function i(_, b, x) {
					x && b.split(/\s+/g).forEach(((b) => y[_ + `EventListener`].call(y, b, x)));
				}
				return {
					off(_, y) {
						return i(`remove`, _, y), this;
					},
					on(_, y) {
						return y && typeof y == `function` && i(`add`, _, y), this;
					},
					trigger(b, x, S) {
						var C;
						if (S ||= { cloneData: !0 }, b) if (_.settings.isJQueryPlugin) b == `remove` && (b = `removeTag`), jQuery(_.DOM.originalInput).triggerHandler(b, [x]);
						else {
							try {
								var w = typeof x == `object` ? x : { value: x };
								if ((w = S.cloneData ? g({}, w) : w).tagify = this, x.event && (w.event = this.cloneEvent(x.event)), x instanceof Object) for (var E in x) x[E] instanceof HTMLElement && (w[E] = x[E]);
								C = new CustomEvent(b, { detail: w });
							} catch (_) {
								console.warn(_);
							}
							y.dispatchEvent(C);
						}
					}
				};
			}(this)), this.isFirefox = typeof InstallTrigger < `u`, this.isIE = window.document.documentMode, y ||= {}, this.getPersistedData = (x = y.id, (_) => {
				let y, S = `/` + _;
				if (localStorage.getItem(b + x + `/v`, 1) == 1) try {
					y = JSON.parse(localStorage[b + x + S]);
				} catch {}
				return y;
			}), this.setPersistedData = ((_) => _ ? (localStorage.setItem(b + _ + `/v`, 1), (y, x) => {
				let S = `/` + x, C = JSON.stringify(y);
				y && x && (localStorage.setItem(b + _ + S, C), dispatchEvent(new Event(`storage`)));
			}) : () => {})(y.id), this.clearPersistedData = ((_) => (y) => {
				let b = `@yaireo/tagify//` + _ + `/`;
				if (y) localStorage.removeItem(b + y);
				else for (let _ in localStorage) _.includes(b) && localStorage.removeItem(_);
			})(y.id), this.applySettings(_, y), this.state = {
				inputText: ``,
				editing: !1,
				composing: !1,
				actions: {},
				mixMode: {},
				dropdown: {},
				flaggedTags: {}
			}, this.value = [], this.listeners = {}, this.DOM = {}, this.build(_), T.call(this), this.getCSSVars(), this.loadOriginalValues(), this.events.customBinding.call(this), this.events.binding.call(this), _.autofocus && this.DOM.input.focus(), _.__tagify = this;
		}
		return M.prototype = {
			_dropdown: y,
			helpers: {
				sameStr: s,
				removeCollectionProp: a,
				omit: n,
				isObject: h,
				parseHTML: r,
				escapeHTML: d,
				extend: g,
				concatWithoutDups: p,
				getUID: m,
				isNodeTag: v
			},
			customEventsList: [
				`change`,
				`add`,
				`remove`,
				`invalid`,
				`input`,
				`click`,
				`keydown`,
				`focus`,
				`blur`,
				`edit:input`,
				`edit:beforeUpdate`,
				`edit:updated`,
				`edit:start`,
				`edit:keydown`,
				`dropdown:show`,
				`dropdown:hide`,
				`dropdown:select`,
				`dropdown:updated`,
				`dropdown:noMatch`,
				`dropdown:scroll`
			],
			dataProps: [
				`__isValid`,
				`__removed`,
				`__originalData`,
				`__originalHTML`,
				`__tagId`
			],
			trim(_) {
				return this.settings.trim && _ && typeof _ == `string` ? _.trim() : _;
			},
			parseHTML: r,
			templates: C,
			parseTemplate(_, y) {
				return _ = this.settings.templates[_] || _, this.parseHTML(_.apply(this, y));
			},
			set whitelist(_) {
				let y = _ && Array.isArray(_);
				this.settings.whitelist = y ? _ : [], this.setPersistedData(y ? _ : [], `whitelist`);
			},
			get whitelist() {
				return this.settings.whitelist;
			},
			generateClassSelectors(_) {
				for (let y in _) {
					let b = y;
					Object.defineProperty(_, b + `Selector`, { get() {
						return `.` + this[b].split(` `)[0];
					} });
				}
			},
			applySettings(y, b) {
				_.templates = this.templates;
				var x = this.settings = g({}, _, b);
				if (x.disabled = y.hasAttribute(`disabled`), x.readonly = x.readonly || y.hasAttribute(`readonly`), x.placeholder = d(y.getAttribute(`placeholder`) || x.placeholder || ``), x.required = y.hasAttribute(`required`), this.generateClassSelectors(x.classNames), x.dropdown.includeSelectedTags === void 0 && (x.dropdown.includeSelectedTags = x.duplicates), this.isIE && (x.autoComplete = !1), [`whitelist`, `blacklist`].forEach(((_) => {
					var b = y.getAttribute(`data-` + _);
					b && (b = b.split(x.delimiters)) instanceof Array && (x[_] = b);
				})), `autoComplete` in b && !h(b.autoComplete) && (x.autoComplete = _.autoComplete, x.autoComplete.enabled = b.autoComplete), x.mode == `mix` && (x.autoComplete.rightKey = !0, x.delimiters = b.delimiters || null, x.tagTextProp && !x.dropdown.searchKeys.includes(x.tagTextProp) && x.dropdown.searchKeys.push(x.tagTextProp)), y.pattern) try {
					x.pattern = new RegExp(y.pattern);
				} catch {}
				if (x.delimiters) {
					x._delimiters = x.delimiters;
					try {
						x.delimiters = new RegExp(this.settings.delimiters, `g`);
					} catch {}
				}
				x.disabled && (x.userInput = !1), this.TEXTS = e(e({}, S), x.texts || {}), x.mode != `select` && x.userInput || (x.dropdown.enabled = 0), x.dropdown.appendTarget = b.dropdown && b.dropdown.appendTarget ? b.dropdown.appendTarget : document.body;
				let C = this.getPersistedData(`whitelist`);
				Array.isArray(C) && (this.whitelist = Array.isArray(x.whitelist) ? p(x.whitelist, C) : C);
			},
			getAttributes(_) {
				var y, b = this.getCustomAttributes(_), x = ``;
				for (y in b) x += ` ` + y + (_[y] === void 0 ? `` : `="${b[y]}"`);
				return x;
			},
			getCustomAttributes(_) {
				if (!h(_)) return ``;
				var y, b = {};
				for (y in _) y.slice(0, 2) != `__` && y != `class` && _.hasOwnProperty(y) && _[y] !== void 0 && (b[y] = d(_[y]));
				return b;
			},
			setStateSelection() {
				var _ = window.getSelection(), y = {
					anchorOffset: _.anchorOffset,
					anchorNode: _.anchorNode,
					range: _.getRangeAt && _.rangeCount && _.getRangeAt(0)
				};
				return this.state.selection = y, y;
			},
			getCaretGlobalPosition() {
				let _ = document.getSelection();
				if (_.rangeCount) {
					let y = _.getRangeAt(0), b = y.startContainer, x = y.startOffset, S, C;
					if (x > 0) return C = document.createRange(), C.setStart(b, x - 1), C.setEnd(b, x), S = C.getBoundingClientRect(), {
						left: S.right,
						top: S.top,
						bottom: S.bottom
					};
					if (b.getBoundingClientRect) return b.getBoundingClientRect();
				}
				return {
					left: -9999,
					top: -9999
				};
			},
			getCSSVars() {
				var _ = getComputedStyle(this.DOM.scope, null), y;
				this.CSSVars = { tagHideTransition: ((_) => {
					let y = _.value;
					return _.unit == `s` ? 1e3 * y : y;
				})(function(_) {
					if (!_) return {};
					var y = (_ = _.trim().split(` `)[0]).split(/\d+/g).filter(((_) => _)).pop().trim();
					return {
						value: +_.split(y).filter(((_) => _))[0].trim(),
						unit: y
					};
				}((y = `tag-hide-transition`, _.getPropertyValue(`--` + y)))) };
			},
			build(_) {
				var y = this.DOM;
				this.settings.mixMode.integrated ? (y.originalInput = null, y.scope = _, y.input = _) : (y.originalInput = _, y.originalInput_tabIndex = _.tabIndex, y.scope = this.parseTemplate(`wrapper`, [_, this.settings]), y.input = y.scope.querySelector(this.settings.classNames.inputSelector), _.parentNode.insertBefore(y.scope, _), _.tabIndex = -1);
			},
			destroy() {
				this.events.unbindGlobal.call(this), this.DOM.scope.parentNode.removeChild(this.DOM.scope), this.DOM.originalInput.tabIndex = this.DOM.originalInput_tabIndex, delete this.DOM.originalInput.__tagify, this.dropdown.hide(!0), clearTimeout(this.dropdownHide__bindEventsTimeout), clearInterval(this.listeners.main.originalInputValueObserverInterval);
			},
			loadOriginalValues(_) {
				var y, b = this.settings;
				if (this.state.blockChangeEvent = !0, _ === void 0) {
					let y = this.getPersistedData(`value`);
					_ = y && !this.DOM.originalInput.value ? y : b.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value;
				}
				if (this.removeAllTags(), _) if (b.mode == `mix`) this.parseMixTags(this.trim(_)), (y = this.DOM.input.lastChild) && y.tagName == `BR` || this.DOM.input.insertAdjacentHTML(`beforeend`, `<br>`);
				else {
					try {
						JSON.parse(_) instanceof Array && (_ = JSON.parse(_));
					} catch {}
					this.addTags(_, !0).forEach(((_) => _ && _.classList.add(b.classNames.tagNoAnimation)));
				}
				else this.postUpdate();
				this.state.lastOriginalValueReported = b.mixMode.integrated ? `` : this.DOM.originalInput.value, this.state.blockChangeEvent = !1;
			},
			cloneEvent(_) {
				var y = {};
				for (var b in _) b != `path` && (y[b] = _[b]);
				return y;
			},
			loading(_) {
				return this.state.isLoading = _, this.DOM.scope.classList[_ ? `add` : `remove`](this.settings.classNames.scopeLoading), this;
			},
			tagLoading(_, y) {
				return _ && _.classList[y ? `add` : `remove`](this.settings.classNames.tagLoading), this;
			},
			toggleClass(_, y) {
				typeof _ == `string` && this.DOM.scope.classList.toggle(_, y);
			},
			toggleScopeValidation(_) {
				var y = !0 === _ || _ === void 0;
				!this.settings.required && _ && _ === this.TEXTS.empty && (y = !0), this.toggleClass(this.settings.classNames.tagInvalid, !y), this.DOM.scope.title = y ? `` : _;
			},
			toggleFocusClass(_) {
				this.toggleClass(this.settings.classNames.focus, !!_);
			},
			triggerChangeEvent: function() {
				if (!this.settings.mixMode.integrated) {
					var _ = this.DOM.originalInput, y = this.state.lastOriginalValueReported !== _.value, b = new CustomEvent(`change`, { bubbles: !0 });
					y && (this.state.lastOriginalValueReported = _.value, b.simulated = !0, _._valueTracker && _._valueTracker.setValue(Math.random()), _.dispatchEvent(b), this.trigger(`change`, this.state.lastOriginalValueReported), _.value = this.state.lastOriginalValueReported);
				}
			},
			events: w,
			fixFirefoxLastTagNoCaret() {},
			placeCaretAfterNode(_) {
				if (_ && _.parentNode) {
					var y = _, b = window.getSelection(), x = b.getRangeAt(0);
					b.rangeCount && (x.setStartAfter(y || _), x.collapse(!0), b.removeAllRanges(), b.addRange(x));
				}
			},
			insertAfterTag(_, y) {
				if (y ||= this.settings.mixMode.insertAfterTag, _ && _.parentNode && y) return y = typeof y == `string` ? document.createTextNode(y) : y, _.parentNode.insertBefore(y, _.nextSibling), y;
			},
			editTagChangeDetected(_) {
				var y = _.__originalData;
				for (var b in y) if (!this.dataProps.includes(b) && _[b] != y[b]) return !0;
				return !1;
			},
			getTagTextNode(_) {
				return _.querySelector(this.settings.classNames.tagTextSelector);
			},
			setTagTextNode(_, y) {
				this.getTagTextNode(_).innerHTML = d(y);
			},
			editTag(_, y) {
				_ ||= this.getLastTag(), y ||= {}, this.dropdown.hide();
				var b = this.settings, x = this.getTagTextNode(_), S = this.getNodeIndex(_), C = this.tagData(_), w = this.events.callbacks, E = this, D = !0;
				if (x) {
					if (!(C instanceof Object && `editable` in C) || C.editable) return C = this.tagData(_, {
						__originalData: g({}, C),
						__originalHTML: _.cloneNode(!0)
					}), this.tagData(C.__originalHTML, C.__originalData), x.setAttribute(`contenteditable`, !0), _.classList.add(b.classNames.tagEditing), x.addEventListener(`focus`, w.onEditTagFocus.bind(this, _)), x.addEventListener(`blur`, (function() {
						setTimeout((() => w.onEditTagBlur.call(E, E.getTagTextNode(_))));
					})), x.addEventListener(`input`, w.onEditTagInput.bind(this, x)), x.addEventListener(`keydown`, ((y) => w.onEditTagkeydown.call(this, y, _))), x.addEventListener(`compositionstart`, w.onCompositionStart.bind(this)), x.addEventListener(`compositionend`, w.onCompositionEnd.bind(this)), y.skipValidation || (D = this.editTagToggleValidity(_)), x.originalIsValid = D, this.trigger(`edit:start`, {
						tag: _,
						index: S,
						data: C,
						isValid: D
					}), x.focus(), this.setRangeAtStartEnd(!1, x), this;
				} else console.warn(`Cannot find element in Tag template: .`, b.classNames.tagTextSelector);
			},
			editTagToggleValidity(_, y) {
				var b;
				if (y ||= this.tagData(_)) return (b = !(`__isValid` in y) || !0 === y.__isValid) || this.removeTagsFromValue(_), this.update(), _.classList.toggle(this.settings.classNames.tagNotAllowed, !b), y.__isValid;
				console.warn(`tag has no data: `, _, y);
			},
			onEditTagDone(_, y) {
				y ||= {};
				var b = {
					tag: _ ||= this.state.editing.scope,
					index: this.getNodeIndex(_),
					previousData: this.tagData(_),
					data: y
				};
				this.trigger(`edit:beforeUpdate`, b, { cloneData: !1 }), this.state.editing = !1, delete y.__originalData, delete y.__originalHTML, _ && y[this.settings.tagTextProp] ? (_ = this.replaceTag(_, y), this.editTagToggleValidity(_, y), this.settings.a11y.focusableTags ? _.focus() : this.placeCaretAfterNode(_)) : _ && this.removeTags(_), this.trigger(`edit:updated`, b), this.dropdown.hide(), this.settings.keepInvalidTags && this.reCheckInvalidTags();
			},
			replaceTag(_, y) {
				y && y.value || (y = _.__tagifyTagData), y.__isValid && y.__isValid != 1 && g(y, this.getInvalidTagAttrs(y, y.__isValid));
				var b = this.createTagElem(y);
				return _.parentNode.replaceChild(b, _), this.updateValueByDOMTags(), b;
			},
			updateValueByDOMTags() {
				this.value.length = 0, [].forEach.call(this.getTagElms(), ((_) => {
					_.classList.contains(this.settings.classNames.tagNotAllowed.split(` `)[0]) || this.value.push(this.tagData(_));
				})), this.update();
			},
			setRangeAtStartEnd(_, y) {
				_ = typeof _ == `number` ? _ : !!_, y = (y ||= this.DOM.input).lastChild || y;
				var b = document.getSelection();
				try {
					b.rangeCount >= 1 && [`Start`, `End`].forEach(((x) => b.getRangeAt(0)[`set` + x](y, _ || y.length)));
				} catch {}
			},
			injectAtCaret(_, y) {
				return !(y ||= this.state.selection?.range) && _ ? (this.appendMixTags(_), this) : (typeof _ == `string` && (_ = document.createTextNode(_)), y.deleteContents(), y.insertNode(_), this.setRangeAtStartEnd(!1, _), this.updateValueByDOMTags(), this.update(), this);
			},
			input: {
				set() {
					let _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ``, y = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
					var b = this.settings.dropdown.closeOnSelect;
					this.state.inputText = _, y && (this.DOM.input.innerHTML = d(`` + _)), !_ && b && this.dropdown.hide.bind(this), this.input.autocomplete.suggest.call(this), this.input.validate.call(this);
				},
				raw() {
					return this.DOM.input.textContent;
				},
				validate() {
					var _ = !this.state.inputText || !0 === this.validateTag({ value: this.state.inputText });
					return this.DOM.input.classList.toggle(this.settings.classNames.inputInvalid, !_), _;
				},
				normalize(_) {
					var y = _ || this.DOM.input, b = [];
					y.childNodes.forEach(((_) => _.nodeType == 3 && b.push(_.nodeValue))), b = b.join(`
`);
					try {
						b = b.replace(/(?:\r\n|\r|\n)/g, this.settings.delimiters.source.charAt(0));
					} catch {}
					return b = b.replace(/\s/g, ` `), this.trim(b);
				},
				autocomplete: {
					suggest(_) {
						if (this.settings.autoComplete.enabled) {
							typeof (_ ||= {}) == `string` && (_ = { value: _ });
							var y = _.value ? `` + _.value : ``, b = y.substr(0, this.state.inputText.length).toLowerCase(), x = y.substring(this.state.inputText.length);
							y && this.state.inputText && b == this.state.inputText.toLowerCase() ? (this.DOM.input.setAttribute(`data-suggest`, x), this.state.inputSuggestion = _) : (this.DOM.input.removeAttribute(`data-suggest`), delete this.state.inputSuggestion);
						}
					},
					set(_) {
						var y = this.DOM.input.getAttribute(`data-suggest`), b = _ || (y ? this.state.inputText + y : null);
						return !!b && (this.settings.mode == `mix` ? this.replaceTextWithNode(document.createTextNode(this.state.tag.prefix + b)) : (this.input.set.call(this, b), this.setRangeAtStartEnd()), this.input.autocomplete.suggest.call(this), this.dropdown.hide(), !0);
					}
				}
			},
			getTagIdx(_) {
				return this.value.findIndex(((y) => y.__tagId == (_ || {}).__tagId));
			},
			getNodeIndex(_) {
				var y = 0;
				if (_) for (; _ = _.previousElementSibling;) y++;
				return y;
			},
			getTagElms() {
				var _ = [...arguments], y = `.` + [...this.settings.classNames.tag.split(` `), ..._].join(`.`);
				return [].slice.call(this.DOM.scope.querySelectorAll(y));
			},
			getLastTag() {
				var _ = this.DOM.scope.querySelectorAll(`${this.settings.classNames.tagSelector}:not(.${this.settings.classNames.tagHide}):not([readonly])`);
				return _[_.length - 1];
			},
			tagData: (_, y, b) => _ ? (y && (_.__tagifyTagData = b ? y : g({}, _.__tagifyTagData || {}, y)), _.__tagifyTagData) : (console.warn(`tag element doesn't exist`, _, y), y),
			isTagDuplicate(_, y, b) {
				var x = 0;
				if (this.settings.mode == `select`) return !1;
				for (let S of this.value) s(this.trim(`` + _), S.value, y) && b != S.__tagId && x++;
				return x;
			},
			getTagIndexByValue(_) {
				var y = [];
				return this.getTagElms().forEach(((b, x) => {
					s(this.trim(b.textContent), _, this.settings.dropdown.caseSensitive) && y.push(x);
				})), y;
			},
			getTagElmByValue(_) {
				var y = this.getTagIndexByValue(_)[0];
				return this.getTagElms()[y];
			},
			flashTag(_) {
				_ && (_.classList.add(this.settings.classNames.tagFlash), setTimeout((() => {
					_.classList.remove(this.settings.classNames.tagFlash);
				}), 100));
			},
			isTagBlacklisted(_) {
				return _ = this.trim(_.toLowerCase()), this.settings.blacklist.filter(((y) => (`` + y).toLowerCase() == _)).length;
			},
			isTagWhitelisted(_) {
				return !!this.getWhitelistItem(_);
			},
			getWhitelistItem(_, y, b) {
				y ||= `value`;
				var x, S = this.settings;
				return (b ||= S.whitelist).some(((b) => {
					var C = typeof b == `string` ? b : b[y] || b.value;
					if (s(C, _, S.dropdown.caseSensitive, S.trim)) return x = typeof b == `string` ? { value: b } : b, !0;
				})), x || y != `value` || S.tagTextProp == `value` || (x = this.getWhitelistItem(_, S.tagTextProp, b)), x;
			},
			validateTag(_) {
				var y = this.settings, b = `value` in _ ? `value` : y.tagTextProp, x = this.trim(_[b] + ``);
				return (_[b] + ``).trim() ? y.pattern && y.pattern instanceof RegExp && !y.pattern.test(x) ? this.TEXTS.pattern : !y.duplicates && this.isTagDuplicate(x, y.dropdown.caseSensitive, _.__tagId) ? this.TEXTS.duplicate : this.isTagBlacklisted(x) || y.enforceWhitelist && !this.isTagWhitelisted(x) ? this.TEXTS.notAllowed : !y.validate || y.validate(_) : this.TEXTS.empty;
			},
			getInvalidTagAttrs(_, y) {
				return {
					"aria-invalid": !0,
					class: `${_.class || ``} ${this.settings.classNames.tagNotAllowed}`.trim(),
					title: y
				};
			},
			hasMaxTags() {
				return this.value.length >= this.settings.maxTags && this.TEXTS.exceed;
			},
			setReadonly(_, y) {
				var b = this.settings;
				document.activeElement.blur(), b[y || `readonly`] = _, this.DOM.scope[(_ ? `set` : `remove`) + `Attribute`](y || `readonly`, !0), this.setContentEditable(!_);
			},
			setContentEditable(_) {
				this.settings.userInput && (this.DOM.input.contentEditable = _, this.DOM.input.tabIndex = _ ? 0 : -1);
			},
			setDisabled(_) {
				this.setReadonly(_, `disabled`);
			},
			normalizeTags(_) {
				var y = this.settings, b = y.whitelist, x = y.delimiters, S = y.mode, C = y.tagTextProp;
				y.enforceWhitelist;
				var w = [], E = !!b && b[0] instanceof Object, D = Array.isArray(_), O = D && _[0].value, h = (_) => (_ + ``).split(x).filter(((_) => _)).map(((_) => ({
					[C]: this.trim(_),
					value: this.trim(_)
				})));
				if (typeof _ == `number` && (_ = _.toString()), typeof _ == `string`) {
					if (!_.trim()) return [];
					_ = h(_);
				} else D && (_ = [].concat(..._.map(((_) => _.value ? _ : h(_)))));
				return E && !O && (_.forEach(((_) => {
					var y = w.map(((_) => _.value)), b = this.dropdown.filterListItems.call(this, _[C], { exact: !0 });
					this.settings.duplicates || (b = b.filter(((_) => !y.includes(_.value))));
					var x = b.length > 1 ? this.getWhitelistItem(_[C], C, b) : b[0];
					x && x instanceof Object ? w.push(x) : S != `mix` && (_.value ??= _[C], w.push(_));
				})), w.length && (_ = w)), _;
			},
			parseMixTags(_) {
				var y = this.settings, b = y.mixTagsInterpolator, x = y.duplicates, S = y.transformTag, C = y.enforceWhitelist, w = y.maxTags, E = y.tagTextProp, D = [];
				return _ = _.split(b[0]).map(((_, y) => {
					var O, k, A, j = _.split(b[1]), N = j[0], P = D.length == w;
					try {
						if (N == +N) throw Error;
						k = JSON.parse(N);
					} catch {
						k = this.normalizeTags(N)[0] || { value: N };
					}
					if (S.call(this, k), P || !(j.length > 1) || C && !this.isTagWhitelisted(k.value) || !x && this.isTagDuplicate(k.value)) {
						if (_) return y ? b[0] + _ : _;
					} else k[O = k[E] ? E : `value`] = this.trim(k[O]), A = this.createTagElem(k), D.push(k), A.classList.add(this.settings.classNames.tagNoAnimation), j[0] = A.outerHTML, this.value.push(k);
					return j.join(``);
				})).join(``), this.DOM.input.innerHTML = _, this.DOM.input.appendChild(document.createTextNode(``)), this.DOM.input.normalize(), this.getTagElms().forEach(((_, y) => this.tagData(_, D[y]))), this.update({ withoutChangeEvent: !0 }), _;
			},
			replaceTextWithNode(_, y) {
				if (this.state.tag || y) {
					y ||= this.state.tag.prefix + this.state.tag.value;
					var b, x, S = this.state.selection || window.getSelection(), C = S.anchorNode, w = this.state.tag.delimiters ? this.state.tag.delimiters.length : 0;
					return C.splitText(S.anchorOffset - w), (b = C.nodeValue.lastIndexOf(y)) == -1 ? !0 : (x = C.splitText(b), _ && C.parentNode.replaceChild(_, x), !0);
				}
			},
			selectTag(_, y) {
				var b = this.settings;
				if (!b.enforceWhitelist || this.isTagWhitelisted(y.value)) {
					this.input.set.call(this, y[b.tagTextProp] || y.value, !0), this.state.actions.selectOption && setTimeout(this.setRangeAtStartEnd.bind(this));
					var x = this.getLastTag();
					return x ? this.replaceTag(x, y) : this.appendTag(_), this.value[0] = y, this.update(), this.trigger(`add`, {
						tag: _,
						data: y
					}), [_];
				}
			},
			addEmptyTag(_) {
				var y = g({ value: `` }, _ || {}), b = this.createTagElem(y);
				this.tagData(b, y), this.appendTag(b), this.editTag(b, { skipValidation: !0 });
			},
			addTags(_, y, b) {
				var x = [], S = this.settings, C = [], w = document.createDocumentFragment();
				if (b ||= S.skipInvalid, !_ || _.length == 0) return x;
				switch (_ = this.normalizeTags(_), S.mode) {
					case `mix`: return this.addMixTags(_);
					case `select`: y = !1, this.removeAllTags();
				}
				return this.DOM.input.removeAttribute(`style`), _.forEach(((_) => {
					var y, E = {}, D = Object.assign({}, _, { value: _.value + `` });
					if (_ = Object.assign({}, D), S.transformTag.call(this, _), _.__isValid = this.hasMaxTags() || this.validateTag(_), !0 !== _.__isValid) {
						if (b) return;
						if (g(E, this.getInvalidTagAttrs(_, _.__isValid), { __preInvalidData: D }), _.__isValid == this.TEXTS.duplicate && this.flashTag(this.getTagElmByValue(_.value)), !S.createInvalidTags) return void C.push(_.value);
					}
					if (`readonly` in _ && (_.readonly ? E[`aria-readonly`] = !0 : delete _.readonly), y = this.createTagElem(_, E), x.push(y), S.mode == `select`) return this.selectTag(y, _);
					w.appendChild(y), _.__isValid && !0 === _.__isValid ? (this.value.push(_), this.trigger(`add`, {
						tag: y,
						index: this.value.length - 1,
						data: _
					})) : (this.trigger(`invalid`, {
						data: _,
						index: this.value.length,
						tag: y,
						message: _.__isValid
					}), S.keepInvalidTags || setTimeout((() => this.removeTags(y, !0)), 1e3)), this.dropdown.position();
				})), this.appendTag(w), this.update(), _.length && y && (this.input.set.call(this, S.createInvalidTags ? `` : C.join(S._delimiters)), this.setRangeAtStartEnd()), S.dropdown.enabled && this.dropdown.refilter(), x;
			},
			addMixTags(_) {
				if ((_ = this.normalizeTags(_))[0].prefix || this.state.tag) return this.prefixedTextToTag(_[0]);
				typeof _ == `string` && (_ = [{ value: _ }]), this.state.selection;
				var y = document.createDocumentFragment();
				return _.forEach(((_) => {
					var b = this.createTagElem(_);
					y.appendChild(b), this.insertAfterTag(b);
				})), this.appendMixTags(y), y;
			},
			appendMixTags(_) {
				var y = !!this.state.selection;
				y ? this.injectAtCaret(_) : (this.DOM.input.focus(), (y = this.setStateSelection()).range.setStart(this.DOM.input, y.range.endOffset), y.range.setEnd(this.DOM.input, y.range.endOffset), this.DOM.input.appendChild(_), this.updateValueByDOMTags(), this.update());
			},
			prefixedTextToTag(_) {
				var y, b = this.settings, x = this.state.tag.delimiters;
				if (b.transformTag.call(this, _), _.prefix = _.prefix || this.state.tag ? this.state.tag.prefix : (b.pattern.source || b.pattern)[0], y = this.createTagElem(_), this.replaceTextWithNode(y) || this.DOM.input.appendChild(y), setTimeout((() => y.classList.add(this.settings.classNames.tagNoAnimation)), 300), this.value.push(_), this.update(), !x) {
					var S = this.insertAfterTag(y) || y;
					this.placeCaretAfterNode(S);
				}
				return this.state.tag = null, this.trigger(`add`, g({}, { tag: y }, { data: _ })), y;
			},
			appendTag(_) {
				var y = this.DOM, b = y.input;
				b === y.input ? y.scope.insertBefore(_, b) : y.scope.appendChild(_);
			},
			createTagElem(_, y) {
				_.__tagId = m();
				var b, x = g({}, _, e({ value: d(_.value + ``) }, y));
				return function(_) {
					for (var y, b = document.createNodeIterator(_, NodeFilter.SHOW_TEXT, null, !1); y = b.nextNode();) y.textContent.trim() || y.parentNode.removeChild(y);
				}(b = this.parseTemplate(`tag`, [x, this])), this.tagData(b, _), b;
			},
			reCheckInvalidTags() {
				var _ = this.settings;
				this.getTagElms(_.classNames.tagNotAllowed).forEach(((y, b) => {
					var x = this.tagData(y), S = this.hasMaxTags(), C = this.validateTag(x), w = !0 === C && !S;
					if (_.mode == `select` && this.toggleScopeValidation(C), w) return x = x.__preInvalidData ? x.__preInvalidData : { value: x.value }, this.replaceTag(y, x);
					y.title = S || C;
				}));
			},
			removeTags(_, y, b) {
				var x, S = this.settings;
				if (_ = _ && _ instanceof HTMLElement ? [_] : _ instanceof Array ? _ : _ ? [_] : [this.getLastTag()], x = _.reduce(((_, y) => {
					y && typeof y == `string` && (y = this.getTagElmByValue(y));
					var b = this.tagData(y);
					return y && b && !b.readonly && _.push({
						node: y,
						idx: this.getTagIdx(b),
						data: this.tagData(y, { __removed: !0 })
					}), _;
				}), []), b = typeof b == `number` ? b : this.CSSVars.tagHideTransition, S.mode == `select` && (b = 0, this.input.set.call(this)), x.length == 1 && S.mode != `select` && x[0].node.classList.contains(S.classNames.tagNotAllowed) && (y = !0), x.length) return S.hooks.beforeRemoveTag(x, { tagify: this }).then((() => {
					function t(_) {
						_.node.parentNode && (_.node.parentNode.removeChild(_.node), y ? S.keepInvalidTags && this.trigger(`remove`, {
							tag: _.node,
							index: _.idx
						}) : (this.trigger(`remove`, {
							tag: _.node,
							index: _.idx,
							data: _.data
						}), this.dropdown.refilter(), this.dropdown.position(), this.DOM.input.normalize(), S.keepInvalidTags && this.reCheckInvalidTags()));
					}
					b && b > 10 && x.length == 1 ? function(_) {
						_.node.style.width = parseFloat(window.getComputedStyle(_.node).width) + `px`, document.body.clientTop, _.node.classList.add(S.classNames.tagHide), setTimeout(t.bind(this), b, _);
					}.call(this, x[0]) : x.forEach(t.bind(this)), y || (this.removeTagsFromValue(x.map(((_) => _.node))), this.update(), S.mode == `select` && this.setContentEditable(!0));
				})).catch(((_) => {}));
			},
			removeTagsFromDOM() {
				[].slice.call(this.getTagElms()).forEach(((_) => _.parentNode.removeChild(_)));
			},
			removeTagsFromValue(_) {
				(_ = Array.isArray(_) ? _ : [_]).forEach(((_) => {
					var y = this.tagData(_), b = this.getTagIdx(y);
					b > -1 && this.value.splice(b, 1);
				}));
			},
			removeAllTags(_) {
				_ ||= {}, this.value = [], this.settings.mode == `mix` ? this.DOM.input.innerHTML = `` : this.removeTagsFromDOM(), this.dropdown.refilter(), this.dropdown.position(), this.state.dropdown.visible && setTimeout((() => {
					this.DOM.input.focus();
				})), this.settings.mode == `select` && (this.input.set.call(this), this.setContentEditable(!0)), this.update(_);
			},
			postUpdate() {
				var _ = this.settings, y = _.classNames, b = _.mode == `mix` ? _.mixMode.integrated ? this.DOM.input.textContent : this.DOM.originalInput.value.trim() : this.value.length + this.input.raw.call(this).length;
				this.toggleClass(y.hasMaxTags, this.value.length >= _.maxTags), this.toggleClass(y.hasNoTags, !this.value.length), this.toggleClass(y.empty, !b), _.mode == `select` && this.toggleScopeValidation(this.value?.[0]?.__isValid);
			},
			setOriginalInputValue(_) {
				var y = this.DOM.originalInput;
				this.settings.mixMode.integrated || (y.value = _, y.tagifyValue = y.value, this.setPersistedData(_, `value`));
			},
			update(_) {
				var y = this.getInputValue();
				this.setOriginalInputValue(y), this.postUpdate(), this.settings.onChangeAfterBlur && (_ || {}).withoutChangeEvent || this.state.blockChangeEvent || this.triggerChangeEvent();
			},
			getInputValue() {
				var _ = this.getCleanValue();
				return this.settings.mode == `mix` ? this.getMixedTagsAsString(_) : _.length ? this.settings.originalInputValueFormat ? this.settings.originalInputValueFormat(_) : JSON.stringify(_) : ``;
			},
			getCleanValue(_) {
				return a(_ || this.value, this.dataProps);
			},
			getMixedTagsAsString() {
				var _ = ``, y = this, b = this.settings, x = b.originalInputValueFormat || JSON.stringify, S = b.mixTagsInterpolator;
				return function i(b) {
					b.childNodes.forEach(((b) => {
						if (b.nodeType == 1) {
							let C = y.tagData(b);
							if (b.tagName == `BR` && (_ += `\r
`), C && v.call(y, b)) {
								if (C.__removed) return;
								_ += S[0] + x(n(C, y.dataProps)) + S[1];
							} else b.getAttribute(`style`) || [
								`B`,
								`I`,
								`U`
							].includes(b.tagName) ? _ += b.textContent : b.tagName != `DIV` && b.tagName != `P` || (_ += `\r
`, i(b));
						} else _ += b.textContent;
					}));
				}(this.DOM.input), _;
			}
		}, M.prototype.removeTag = M.prototype.removeTags, M;
	}));
}));
function _defineProperty(_, y, b) {
	return (y = _toPropertyKey(y)) in _ ? Object.defineProperty(_, y, {
		value: b,
		enumerable: !0,
		configurable: !0,
		writable: !0
	}) : _[y] = b, _;
}
function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(_) {
		for (var y = 1; y < arguments.length; y++) {
			var b = arguments[y];
			for (var x in b) ({}).hasOwnProperty.call(b, x) && (_[x] = b[x]);
		}
		return _;
	}, _extends.apply(null, arguments);
}
function ownKeys(_, y) {
	var b = Object.keys(_);
	if (Object.getOwnPropertySymbols) {
		var x = Object.getOwnPropertySymbols(_);
		y && (x = x.filter(function(y) {
			return Object.getOwnPropertyDescriptor(_, y).enumerable;
		})), b.push.apply(b, x);
	}
	return b;
}
function _objectSpread2(_) {
	for (var y = 1; y < arguments.length; y++) {
		var b = arguments[y] == null ? {} : arguments[y];
		y % 2 ? ownKeys(Object(b), !0).forEach(function(y) {
			_defineProperty(_, y, b[y]);
		}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(b)) : ownKeys(Object(b)).forEach(function(y) {
			Object.defineProperty(_, y, Object.getOwnPropertyDescriptor(b, y));
		});
	}
	return _;
}
function _objectWithoutProperties(_, y) {
	if (_ == null) return {};
	var b, x, S = _objectWithoutPropertiesLoose(_, y);
	if (Object.getOwnPropertySymbols) {
		var C = Object.getOwnPropertySymbols(_);
		for (x = 0; x < C.length; x++) b = C[x], y.indexOf(b) === -1 && {}.propertyIsEnumerable.call(_, b) && (S[b] = _[b]);
	}
	return S;
}
function _objectWithoutPropertiesLoose(_, y) {
	if (_ == null) return {};
	var b = {};
	for (var x in _) if ({}.hasOwnProperty.call(_, x)) {
		if (y.indexOf(x) !== -1) continue;
		b[x] = _[x];
	}
	return b;
}
function _toPrimitive(_, y) {
	if (typeof _ != `object` || !_) return _;
	var b = _[Symbol.toPrimitive];
	if (b !== void 0) {
		var x = b.call(_, y || `default`);
		if (typeof x != `object`) return x;
		throw TypeError(`@@toPrimitive must return a primitive value.`);
	}
	return (y === `string` ? String : Number)(_);
}
function _toPropertyKey(_) {
	var y = _toPrimitive(_, `string`);
	return typeof y == `symbol` ? y : y + ``;
}
function _typeof(_) {
	"@babel/helpers - typeof";
	return _typeof = typeof Symbol == `function` && typeof Symbol.iterator == `symbol` ? function(_) {
		return typeof _;
	} : function(_) {
		return _ && typeof Symbol == `function` && _.constructor === Symbol && _ !== Symbol.prototype ? `symbol` : typeof _;
	}, _typeof(_);
}
var an = `1.15.7`;
function userAgent(_) {
	if (typeof window < `u` && window.navigator) return !!navigator.userAgent.match(_);
}
var sn = userAgent(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), cn = userAgent(/Edge/i), ln = userAgent(/firefox/i), un = userAgent(/safari/i) && !userAgent(/chrome/i) && !userAgent(/android/i), dn = userAgent(/iP(ad|od|hone)/i), pn = userAgent(/chrome/i) && userAgent(/android/i), mn = {
	capture: !1,
	passive: !1
};
function on(_, y, b) {
	_.addEventListener(y, b, !sn && mn);
}
function off(_, y, b) {
	_.removeEventListener(y, b, !sn && mn);
}
function matches(_, y) {
	if (y) {
		if (y[0] === `>` && (y = y.substring(1)), _) try {
			if (_.matches) return _.matches(y);
			if (_.msMatchesSelector) return _.msMatchesSelector(y);
			if (_.webkitMatchesSelector) return _.webkitMatchesSelector(y);
		} catch {
			return !1;
		}
		return !1;
	}
}
function getParentOrHost(_) {
	return _.host && _ !== document && _.host.nodeType && _.host !== _ ? _.host : _.parentNode;
}
function closest$2(_, y, b, x) {
	if (_) {
		b ||= document;
		do {
			if (y != null && (y[0] === `>` ? _.parentNode === b && matches(_, y) : matches(_, y)) || x && _ === b) return _;
			if (_ === b) break;
		} while (_ = getParentOrHost(_));
	}
	return null;
}
var hn = /\s+/g;
function toggleClass(_, y, b) {
	_ && y && (_.classList ? _.classList[b ? `add` : `remove`](y) : _.className = ((` ` + _.className + ` `).replace(hn, ` `).replace(` ` + y + ` `, ` `) + (b ? ` ` + y : ``)).replace(hn, ` `));
}
function css(_, y, b) {
	var x = _ && _.style;
	if (x) {
		if (b === void 0) return document.defaultView && document.defaultView.getComputedStyle ? b = document.defaultView.getComputedStyle(_, ``) : _.currentStyle && (b = _.currentStyle), y === void 0 ? b : b[y];
		!(y in x) && y.indexOf(`webkit`) === -1 && (y = `-webkit-` + y), x[y] = b + (typeof b == `string` ? `` : `px`);
	}
}
function matrix(_, y) {
	var b = ``;
	if (typeof _ == `string`) b = _;
	else do {
		var x = css(_, `transform`);
		x && x !== `none` && (b = x + ` ` + b);
	} while (!y && (_ = _.parentNode));
	var S = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
	return S && new S(b);
}
function find$1(_, y, b) {
	if (_) {
		var x = _.getElementsByTagName(y), S = 0, C = x.length;
		if (b) for (; S < C; S++) b(x[S], S);
		return x;
	}
	return [];
}
function getWindowScrollingElement() {
	return document.scrollingElement || document.documentElement;
}
function getRect(_, y, b, x, S) {
	if (!(!_.getBoundingClientRect && _ !== window)) {
		var C, w, E, D, O, k, A;
		if (_ !== window && _.parentNode && _ !== getWindowScrollingElement() ? (C = _.getBoundingClientRect(), w = C.top, E = C.left, D = C.bottom, O = C.right, k = C.height, A = C.width) : (w = 0, E = 0, D = window.innerHeight, O = window.innerWidth, k = window.innerHeight, A = window.innerWidth), (y || b) && _ !== window && (S ||= _.parentNode, !sn)) do
			if (S && S.getBoundingClientRect && (css(S, `transform`) !== `none` || b && css(S, `position`) !== `static`)) {
				var j = S.getBoundingClientRect();
				w -= j.top + parseInt(css(S, `border-top-width`)), E -= j.left + parseInt(css(S, `border-left-width`)), D = w + C.height, O = E + C.width;
				break;
			}
		while (S = S.parentNode);
		if (x && _ !== window) {
			var N = matrix(S || _), P = N && N.a, F = N && N.d;
			N && (w /= F, E /= P, A /= P, k /= F, D = w + k, O = E + A);
		}
		return {
			top: w,
			left: E,
			bottom: D,
			right: O,
			width: A,
			height: k
		};
	}
}
function isScrolledPast(_, y, b) {
	for (var x = getParentAutoScrollElement(_, !0), S = getRect(_)[y]; x;) {
		var C = getRect(x)[b], w = void 0;
		if (w = b === `top` || b === `left` ? S >= C : S <= C, !w) return x;
		if (x === getWindowScrollingElement()) break;
		x = getParentAutoScrollElement(x, !1);
	}
	return !1;
}
function getChild(_, y, b, x) {
	for (var S = 0, C = 0, w = _.children; C < w.length;) {
		if (w[C].style.display !== `none` && w[C] !== Sortable.ghost && (x || w[C] !== Sortable.dragged) && closest$2(w[C], b.draggable, _, !1)) {
			if (S === y) return w[C];
			S++;
		}
		C++;
	}
	return null;
}
function lastChild(_, y) {
	for (var b = _.lastElementChild; b && (b === Sortable.ghost || css(b, `display`) === `none` || y && !matches(b, y));) b = b.previousElementSibling;
	return b || null;
}
function index(_, y) {
	var b = 0;
	if (!_ || !_.parentNode) return -1;
	for (; _ = _.previousElementSibling;) _.nodeName.toUpperCase() !== `TEMPLATE` && _ !== Sortable.clone && (!y || matches(_, y)) && b++;
	return b;
}
function getRelativeScrollOffset(_) {
	var y = 0, b = 0, x = getWindowScrollingElement();
	if (_) do {
		var S = matrix(_), C = S.a, w = S.d;
		y += _.scrollLeft * C, b += _.scrollTop * w;
	} while (_ !== x && (_ = _.parentNode));
	return [y, b];
}
function indexOfObject(_, y) {
	for (var b in _) if (_.hasOwnProperty(b)) {
		for (var x in y) if (y.hasOwnProperty(x) && y[x] === _[b][x]) return Number(b);
	}
	return -1;
}
function getParentAutoScrollElement(_, y) {
	if (!_ || !_.getBoundingClientRect) return getWindowScrollingElement();
	var b = _, x = !1;
	do
		if (b.clientWidth < b.scrollWidth || b.clientHeight < b.scrollHeight) {
			var S = css(b);
			if (b.clientWidth < b.scrollWidth && (S.overflowX == `auto` || S.overflowX == `scroll`) || b.clientHeight < b.scrollHeight && (S.overflowY == `auto` || S.overflowY == `scroll`)) {
				if (!b.getBoundingClientRect || b === document.body) return getWindowScrollingElement();
				if (x || y) return b;
				x = !0;
			}
		}
	while (b = b.parentNode);
	return getWindowScrollingElement();
}
function extend$2(_, y) {
	if (_ && y) for (var b in y) y.hasOwnProperty(b) && (_[b] = y[b]);
	return _;
}
function isRectEqual(_, y) {
	return Math.round(_.top) === Math.round(y.top) && Math.round(_.left) === Math.round(y.left) && Math.round(_.height) === Math.round(y.height) && Math.round(_.width) === Math.round(y.width);
}
var gn;
function throttle(_, y) {
	return function() {
		if (!gn) {
			var b = arguments, x = this;
			b.length === 1 ? _.call(x, b[0]) : _.apply(x, b), gn = setTimeout(function() {
				gn = void 0;
			}, y);
		}
	};
}
function cancelThrottle() {
	clearTimeout(gn), gn = void 0;
}
function scrollBy(_, y, b) {
	_.scrollLeft += y, _.scrollTop += b;
}
function clone$2(_) {
	var y = window.Polymer, b = window.jQuery || window.Zepto;
	return y && y.dom ? y.dom(_).cloneNode(!0) : b ? b(_).clone(!0)[0] : _.cloneNode(!0);
}
function getChildContainingRectFromElement(_, y, b) {
	var x = {};
	return Array.from(_.children).forEach(function(S) {
		if (!(!closest$2(S, y.draggable, _, !1) || S.animated || S === b)) {
			var C = getRect(S);
			x.left = Math.min(x.left ?? Infinity, C.left), x.top = Math.min(x.top ?? Infinity, C.top), x.right = Math.max(x.right ?? -Infinity, C.right), x.bottom = Math.max(x.bottom ?? -Infinity, C.bottom);
		}
	}), x.width = x.right - x.left, x.height = x.bottom - x.top, x.x = x.left, x.y = x.top, x;
}
var _n = `Sortable` + (/* @__PURE__ */ new Date()).getTime();
function AnimationStateManager() {
	var _ = [], y;
	return {
		captureAnimationState: function captureAnimationState() {
			_ = [], this.options.animation && [].slice.call(this.el.children).forEach(function(y) {
				if (!(css(y, `display`) === `none` || y === Sortable.ghost)) {
					_.push({
						target: y,
						rect: getRect(y)
					});
					var b = _objectSpread2({}, _[_.length - 1].rect);
					if (y.thisAnimationDuration) {
						var x = matrix(y, !0);
						x && (b.top -= x.f, b.left -= x.e);
					}
					y.fromRect = b;
				}
			});
		},
		addAnimationState: function addAnimationState(y) {
			_.push(y);
		},
		removeAnimationState: function removeAnimationState(y) {
			_.splice(indexOfObject(_, { target: y }), 1);
		},
		animateAll: function animateAll(b) {
			var x = this;
			if (!this.options.animation) {
				clearTimeout(y), typeof b == `function` && b();
				return;
			}
			var S = !1, C = 0;
			_.forEach(function(_) {
				var y = 0, b = _.target, w = b.fromRect, E = getRect(b), D = b.prevFromRect, O = b.prevToRect, k = _.rect, A = matrix(b, !0);
				A && (E.top -= A.f, E.left -= A.e), b.toRect = E, b.thisAnimationDuration && isRectEqual(D, E) && !isRectEqual(w, E) && (k.top - E.top) / (k.left - E.left) === (w.top - E.top) / (w.left - E.left) && (y = calculateRealTime(k, D, O, x.options)), isRectEqual(E, w) || (b.prevFromRect = w, b.prevToRect = E, y ||= x.options.animation, x.animate(b, k, E, y)), y && (S = !0, C = Math.max(C, y), clearTimeout(b.animationResetTimer), b.animationResetTimer = setTimeout(function() {
					b.animationTime = 0, b.prevFromRect = null, b.fromRect = null, b.prevToRect = null, b.thisAnimationDuration = null;
				}, y), b.thisAnimationDuration = y);
			}), clearTimeout(y), S ? y = setTimeout(function() {
				typeof b == `function` && b();
			}, C) : typeof b == `function` && b(), _ = [];
		},
		animate: function animate(_, y, b, x) {
			if (x) {
				css(_, `transition`, ``), css(_, `transform`, ``);
				var S = matrix(this.el), C = S && S.a, w = S && S.d, E = (y.left - b.left) / (C || 1), D = (y.top - b.top) / (w || 1);
				_.animatingX = !!E, _.animatingY = !!D, css(_, `transform`, `translate3d(` + E + `px,` + D + `px,0)`), this.forRepaintDummy = repaint(_), css(_, `transition`, `transform ` + x + `ms` + (this.options.easing ? ` ` + this.options.easing : ``)), css(_, `transform`, `translate3d(0,0,0)`), typeof _.animated == `number` && clearTimeout(_.animated), _.animated = setTimeout(function() {
					css(_, `transition`, ``), css(_, `transform`, ``), _.animated = !1, _.animatingX = !1, _.animatingY = !1;
				}, x);
			}
		}
	};
}
function repaint(_) {
	return _.offsetWidth;
}
function calculateRealTime(_, y, b, x) {
	return Math.sqrt((y.top - _.top) ** 2 + (y.left - _.left) ** 2) / Math.sqrt((y.top - b.top) ** 2 + (y.left - b.left) ** 2) * x.animation;
}
var vn = [], yn = { initializeByDefault: !0 }, bn = {
	mount: function mount(_) {
		for (var y in yn) yn.hasOwnProperty(y) && !(y in _) && (_[y] = yn[y]);
		vn.forEach(function(y) {
			if (y.pluginName === _.pluginName) throw `Sortable: Cannot mount plugin ${_.pluginName} more than once`;
		}), vn.push(_);
	},
	pluginEvent: function pluginEvent(_, y, b) {
		var x = this;
		this.eventCanceled = !1, b.cancel = function() {
			x.eventCanceled = !0;
		};
		var S = _ + `Global`;
		vn.forEach(function(x) {
			y[x.pluginName] && (y[x.pluginName][S] && y[x.pluginName][S](_objectSpread2({ sortable: y }, b)), y.options[x.pluginName] && y[x.pluginName][_] && y[x.pluginName][_](_objectSpread2({ sortable: y }, b)));
		});
	},
	initializePlugins: function initializePlugins(_, y, b, x) {
		for (var S in vn.forEach(function(x) {
			var S = x.pluginName;
			if (!(!_.options[S] && !x.initializeByDefault)) {
				var C = new x(_, y, _.options);
				C.sortable = _, C.options = _.options, _[S] = C, _extends(b, C.defaults);
			}
		}), _.options) if (_.options.hasOwnProperty(S)) {
			var C = this.modifyOption(_, S, _.options[S]);
			C !== void 0 && (_.options[S] = C);
		}
	},
	getEventProperties: function getEventProperties(_, y) {
		var b = {};
		return vn.forEach(function(x) {
			typeof x.eventProperties == `function` && _extends(b, x.eventProperties.call(y[x.pluginName], _));
		}), b;
	},
	modifyOption: function modifyOption(_, y, b) {
		var x;
		return vn.forEach(function(S) {
			_[S.pluginName] && S.optionListeners && typeof S.optionListeners[y] == `function` && (x = S.optionListeners[y].call(_[S.pluginName], b));
		}), x;
	}
};
function dispatchEvent$1(_) {
	var y = _.sortable, b = _.rootEl, x = _.name, S = _.targetEl, C = _.cloneEl, w = _.toEl, E = _.fromEl, D = _.oldIndex, O = _.newIndex, k = _.oldDraggableIndex, A = _.newDraggableIndex, j = _.originalEvent, N = _.putSortable, P = _.extraEventProperties;
	if (y ||= b && b[_n], y) {
		var F, I = y.options, L = `on` + x.charAt(0).toUpperCase() + x.substr(1);
		window.CustomEvent && !sn && !cn ? F = new CustomEvent(x, {
			bubbles: !0,
			cancelable: !0
		}) : (F = document.createEvent(`Event`), F.initEvent(x, !0, !0)), F.to = w || b, F.from = E || b, F.item = S || b, F.clone = C, F.oldIndex = D, F.newIndex = O, F.oldDraggableIndex = k, F.newDraggableIndex = A, F.originalEvent = j, F.pullMode = N ? N.lastPutMode : void 0;
		var R = _objectSpread2(_objectSpread2({}, P), bn.getEventProperties(x, y));
		for (var z in R) F[z] = R[z];
		b && b.dispatchEvent(F), I[L] && I[L].call(y, F);
	}
}
var xn = [`evt`], Sn = function pluginEvent(_, y) {
	var b = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, x = b.evt, S = _objectWithoutProperties(b, xn);
	bn.pluginEvent.bind(Sortable)(_, y, _objectSpread2({
		dragEl: K,
		parentEl: Cn,
		ghostEl: wn,
		rootEl: Tn,
		nextEl: En,
		lastDownEl: Dn,
		cloneEl: On,
		cloneHidden: kn,
		dragStarted: Gn,
		putSortable: Fn,
		activeSortable: Sortable.active,
		originalEvent: x,
		oldIndex: An,
		oldDraggableIndex: Mn,
		newIndex: jn,
		newDraggableIndex: Nn,
		hideGhostForTarget: ur,
		unhideGhostForTarget: dr,
		cloneNowHidden: function cloneNowHidden() {
			kn = !0;
		},
		cloneNowShown: function cloneNowShown() {
			kn = !1;
		},
		dispatchSortableEvent: function dispatchSortableEvent(_) {
			_dispatchEvent({
				sortable: y,
				name: _,
				originalEvent: x
			});
		}
	}, S));
};
function _dispatchEvent(_) {
	dispatchEvent$1(_objectSpread2({
		putSortable: Fn,
		cloneEl: On,
		targetEl: K,
		rootEl: Tn,
		oldIndex: An,
		oldDraggableIndex: Mn,
		newIndex: jn,
		newDraggableIndex: Nn
	}, _));
}
var K, Cn, wn, Tn, En, Dn, On, kn, An, jn, Mn, Nn, Pn, Fn, In = !1, Ln = !1, Rn = [], zn, Bn, Vn, Hn, Un, Wn, Gn, Kn, qn, Jn = !1, Yn = !1, Xn, Zn, Qn = [], $n = !1, er = [], tr = typeof document < `u`, nr = dn, rr = cn || sn ? `cssFloat` : `float`, ir = tr && !pn && !dn && `draggable` in document.createElement(`div`), ar = function() {
	if (tr) {
		if (sn) return !1;
		var _ = document.createElement(`x`);
		return _.style.cssText = `pointer-events:auto`, _.style.pointerEvents === `auto`;
	}
}(), or = function _detectDirection(_, y) {
	var b = css(_), x = parseInt(b.width) - parseInt(b.paddingLeft) - parseInt(b.paddingRight) - parseInt(b.borderLeftWidth) - parseInt(b.borderRightWidth), S = getChild(_, 0, y), C = getChild(_, 1, y), w = S && css(S), E = C && css(C), D = w && parseInt(w.marginLeft) + parseInt(w.marginRight) + getRect(S).width, O = E && parseInt(E.marginLeft) + parseInt(E.marginRight) + getRect(C).width;
	if (b.display === `flex`) return b.flexDirection === `column` || b.flexDirection === `column-reverse` ? `vertical` : `horizontal`;
	if (b.display === `grid`) return b.gridTemplateColumns.split(` `).length <= 1 ? `vertical` : `horizontal`;
	if (S && w.float && w.float !== `none`) {
		var k = w.float === `left` ? `left` : `right`;
		return C && (E.clear === `both` || E.clear === k) ? `vertical` : `horizontal`;
	}
	return S && (w.display === `block` || w.display === `flex` || w.display === `table` || w.display === `grid` || D >= x && b[rr] === `none` || C && b[rr] === `none` && D + O > x) ? `vertical` : `horizontal`;
}, sr = function _dragElInRowColumn(_, y, b) {
	var x = b ? _.left : _.top, S = b ? _.right : _.bottom, C = b ? _.width : _.height, w = b ? y.left : y.top, E = b ? y.right : y.bottom, D = b ? y.width : y.height;
	return x === w || S === E || x + C / 2 === w + D / 2;
}, cr = function _detectNearestEmptySortable(_, y) {
	var b;
	return Rn.some(function(x) {
		var S = x[_n].options.emptyInsertThreshold;
		if (!(!S || lastChild(x))) {
			var C = getRect(x), w = _ >= C.left - S && _ <= C.right + S, E = y >= C.top - S && y <= C.bottom + S;
			if (w && E) return b = x;
		}
	}), b;
}, lr = function _prepareGroup(_) {
	function toFn(_, y) {
		return function(b, x, S, C) {
			var w = b.options.group.name && x.options.group.name && b.options.group.name === x.options.group.name;
			if (_ == null && (y || w)) return !0;
			if (_ == null || _ === !1) return !1;
			if (y && _ === `clone`) return _;
			if (typeof _ == `function`) return toFn(_(b, x, S, C), y)(b, x, S, C);
			var E = (y ? b : x).options.group.name;
			return _ === !0 || typeof _ == `string` && _ === E || _.join && _.indexOf(E) > -1;
		};
	}
	var y = {}, b = _.group;
	(!b || _typeof(b) != `object`) && (b = { name: b }), y.name = b.name, y.checkPull = toFn(b.pull, !0), y.checkPut = toFn(b.put), y.revertClone = b.revertClone, _.group = y;
}, ur = function _hideGhostForTarget() {
	!ar && wn && css(wn, `display`, `none`);
}, dr = function _unhideGhostForTarget() {
	!ar && wn && css(wn, `display`, ``);
};
tr && !pn && document.addEventListener(`click`, function(_) {
	if (Ln) return _.preventDefault(), _.stopPropagation && _.stopPropagation(), _.stopImmediatePropagation && _.stopImmediatePropagation(), Ln = !1, !1;
}, !0);
var fr = function nearestEmptyInsertDetectEvent(_) {
	if (K) {
		_ = _.touches ? _.touches[0] : _;
		var y = cr(_.clientX, _.clientY);
		if (y) {
			var b = {};
			for (var x in _) _.hasOwnProperty(x) && (b[x] = _[x]);
			b.target = b.rootEl = y, b.preventDefault = void 0, b.stopPropagation = void 0, y[_n]._onDragOver(b);
		}
	}
}, pr = function _checkOutsideTargetEl(_) {
	K && K.parentNode[_n]._isOutsideThisEl(_.target);
};
function Sortable(_, y) {
	if (!(_ && _.nodeType && _.nodeType === 1)) throw `Sortable: \`el\` must be an HTMLElement, not ${{}.toString.call(_)}`;
	this.el = _, this.options = y = _extends({}, y), _[_n] = this;
	var b = {
		group: null,
		sort: !0,
		disabled: !1,
		store: null,
		handle: null,
		draggable: /^[uo]l$/i.test(_.nodeName) ? `>li` : `>*`,
		swapThreshold: 1,
		invertSwap: !1,
		invertedSwapThreshold: null,
		removeCloneOnHide: !0,
		direction: function direction() {
			return or(_, this.options);
		},
		ghostClass: `sortable-ghost`,
		chosenClass: `sortable-chosen`,
		dragClass: `sortable-drag`,
		ignore: `a, img`,
		filter: null,
		preventOnFilter: !0,
		animation: 0,
		easing: null,
		setData: function setData(_, y) {
			_.setData(`Text`, y.textContent);
		},
		dropBubble: !1,
		dragoverBubble: !1,
		dataIdAttr: `data-id`,
		delay: 0,
		delayOnTouchOnly: !1,
		touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
		forceFallback: !1,
		fallbackClass: `sortable-fallback`,
		fallbackOnBody: !1,
		fallbackTolerance: 0,
		fallbackOffset: {
			x: 0,
			y: 0
		},
		supportPointer: Sortable.supportPointer !== !1 && `PointerEvent` in window && (!un || dn),
		emptyInsertThreshold: 5
	};
	for (var x in bn.initializePlugins(this, _, b), b) !(x in y) && (y[x] = b[x]);
	for (var S in lr(y), this) S.charAt(0) === `_` && typeof this[S] == `function` && (this[S] = this[S].bind(this));
	this.nativeDraggable = !y.forceFallback && ir, this.nativeDraggable && (this.options.touchStartThreshold = 1), y.supportPointer ? on(_, `pointerdown`, this._onTapStart) : (on(_, `mousedown`, this._onTapStart), on(_, `touchstart`, this._onTapStart)), this.nativeDraggable && (on(_, `dragover`, this), on(_, `dragenter`, this)), Rn.push(this.el), y.store && y.store.get && this.sort(y.store.get(this) || []), _extends(this, AnimationStateManager());
}
Sortable.prototype = {
	constructor: Sortable,
	_isOutsideThisEl: function _isOutsideThisEl(_) {
		!this.el.contains(_) && _ !== this.el && (Kn = null);
	},
	_getDirection: function _getDirection(_, y) {
		return typeof this.options.direction == `function` ? this.options.direction.call(this, _, y, K) : this.options.direction;
	},
	_onTapStart: function _onTapStart(_) {
		if (_.cancelable) {
			var y = this, b = this.el, x = this.options, S = x.preventOnFilter, C = _.type, w = _.touches && _.touches[0] || _.pointerType && _.pointerType === `touch` && _, E = (w || _).target, D = _.target.shadowRoot && (_.path && _.path[0] || _.composedPath && _.composedPath()[0]) || E, O = x.filter;
			if (_saveInputCheckedState(b), !K && !(/mousedown|pointerdown/.test(C) && _.button !== 0 || x.disabled) && !D.isContentEditable && !(!this.nativeDraggable && un && E && E.tagName.toUpperCase() === `SELECT`) && (E = closest$2(E, x.draggable, b, !1), !(E && E.animated) && Dn !== E)) {
				if (An = index(E), Mn = index(E, x.draggable), typeof O == `function`) {
					if (O.call(this, _, E, this)) {
						_dispatchEvent({
							sortable: y,
							rootEl: D,
							name: `filter`,
							targetEl: E,
							toEl: b,
							fromEl: b
						}), Sn(`filter`, y, { evt: _ }), S && _.preventDefault();
						return;
					}
				} else if (O && (O = O.split(`,`).some(function(x) {
					if (x = closest$2(D, x.trim(), b, !1), x) return _dispatchEvent({
						sortable: y,
						rootEl: x,
						name: `filter`,
						targetEl: E,
						fromEl: b,
						toEl: b
					}), Sn(`filter`, y, { evt: _ }), !0;
				}), O)) {
					S && _.preventDefault();
					return;
				}
				x.handle && !closest$2(D, x.handle, b, !1) || this._prepareDragStart(_, w, E);
			}
		}
	},
	_prepareDragStart: function _prepareDragStart(_, y, b) {
		var x = this, S = x.el, C = x.options, w = S.ownerDocument, E;
		if (b && !K && b.parentNode === S) {
			var D = getRect(b);
			if (Tn = S, K = b, Cn = K.parentNode, En = K.nextSibling, Dn = b, Pn = C.group, Sortable.dragged = K, zn = {
				target: K,
				clientX: (y || _).clientX,
				clientY: (y || _).clientY
			}, Un = zn.clientX - D.left, Wn = zn.clientY - D.top, this._lastX = (y || _).clientX, this._lastY = (y || _).clientY, K.style[`will-change`] = `all`, E = function dragStartFn() {
				if (Sn(`delayEnded`, x, { evt: _ }), Sortable.eventCanceled) {
					x._onDrop();
					return;
				}
				x._disableDelayedDragEvents(), !ln && x.nativeDraggable && (K.draggable = !0), x._triggerDragStart(_, y), _dispatchEvent({
					sortable: x,
					name: `choose`,
					originalEvent: _
				}), toggleClass(K, C.chosenClass, !0);
			}, C.ignore.split(`,`).forEach(function(_) {
				find$1(K, _.trim(), _disableDraggable);
			}), on(w, `dragover`, fr), on(w, `mousemove`, fr), on(w, `touchmove`, fr), C.supportPointer ? (on(w, `pointerup`, x._onDrop), !this.nativeDraggable && on(w, `pointercancel`, x._onDrop)) : (on(w, `mouseup`, x._onDrop), on(w, `touchend`, x._onDrop), on(w, `touchcancel`, x._onDrop)), ln && this.nativeDraggable && (this.options.touchStartThreshold = 4, K.draggable = !0), Sn(`delayStart`, this, { evt: _ }), C.delay && (!C.delayOnTouchOnly || y) && (!this.nativeDraggable || !(cn || sn))) {
				if (Sortable.eventCanceled) {
					this._onDrop();
					return;
				}
				C.supportPointer ? (on(w, `pointerup`, x._disableDelayedDrag), on(w, `pointercancel`, x._disableDelayedDrag)) : (on(w, `mouseup`, x._disableDelayedDrag), on(w, `touchend`, x._disableDelayedDrag), on(w, `touchcancel`, x._disableDelayedDrag)), on(w, `mousemove`, x._delayedDragTouchMoveHandler), on(w, `touchmove`, x._delayedDragTouchMoveHandler), C.supportPointer && on(w, `pointermove`, x._delayedDragTouchMoveHandler), x._dragStartTimer = setTimeout(E, C.delay);
			} else E();
		}
	},
	_delayedDragTouchMoveHandler: function _delayedDragTouchMoveHandler(_) {
		var y = _.touches ? _.touches[0] : _;
		Math.max(Math.abs(y.clientX - this._lastX), Math.abs(y.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
	},
	_disableDelayedDrag: function _disableDelayedDrag() {
		K && _disableDraggable(K), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
	},
	_disableDelayedDragEvents: function _disableDelayedDragEvents() {
		var _ = this.el.ownerDocument;
		off(_, `mouseup`, this._disableDelayedDrag), off(_, `touchend`, this._disableDelayedDrag), off(_, `touchcancel`, this._disableDelayedDrag), off(_, `pointerup`, this._disableDelayedDrag), off(_, `pointercancel`, this._disableDelayedDrag), off(_, `mousemove`, this._delayedDragTouchMoveHandler), off(_, `touchmove`, this._delayedDragTouchMoveHandler), off(_, `pointermove`, this._delayedDragTouchMoveHandler);
	},
	_triggerDragStart: function _triggerDragStart(_, y) {
		y ||= _.pointerType == `touch` && _, !this.nativeDraggable || y ? this.options.supportPointer ? on(document, `pointermove`, this._onTouchMove) : y ? on(document, `touchmove`, this._onTouchMove) : on(document, `mousemove`, this._onTouchMove) : (on(K, `dragend`, this), on(Tn, `dragstart`, this._onDragStart));
		try {
			document.selection ? _nextTick(function() {
				document.selection.empty();
			}) : window.getSelection().removeAllRanges();
		} catch {}
	},
	_dragStarted: function _dragStarted(_, y) {
		if (In = !1, Tn && K) {
			Sn(`dragStarted`, this, { evt: y }), this.nativeDraggable && on(document, `dragover`, pr);
			var b = this.options;
			!_ && toggleClass(K, b.dragClass, !1), toggleClass(K, b.ghostClass, !0), Sortable.active = this, _ && this._appendGhost(), _dispatchEvent({
				sortable: this,
				name: `start`,
				originalEvent: y
			});
		} else this._nulling();
	},
	_emulateDragOver: function _emulateDragOver() {
		if (Bn) {
			this._lastX = Bn.clientX, this._lastY = Bn.clientY, ur();
			for (var _ = document.elementFromPoint(Bn.clientX, Bn.clientY), y = _; _ && _.shadowRoot && (_ = _.shadowRoot.elementFromPoint(Bn.clientX, Bn.clientY), _ !== y);) y = _;
			if (K.parentNode[_n]._isOutsideThisEl(_), y) do {
				if (y[_n]) {
					var b = void 0;
					if (b = y[_n]._onDragOver({
						clientX: Bn.clientX,
						clientY: Bn.clientY,
						target: _,
						rootEl: y
					}), b && !this.options.dragoverBubble) break;
				}
				_ = y;
			} while (y = getParentOrHost(y));
			dr();
		}
	},
	_onTouchMove: function _onTouchMove(_) {
		if (zn) {
			var y = this.options, b = y.fallbackTolerance, x = y.fallbackOffset, S = _.touches ? _.touches[0] : _, C = wn && matrix(wn, !0), w = wn && C && C.a, E = wn && C && C.d, D = nr && Zn && getRelativeScrollOffset(Zn), O = (S.clientX - zn.clientX + x.x) / (w || 1) + (D ? D[0] - Qn[0] : 0) / (w || 1), k = (S.clientY - zn.clientY + x.y) / (E || 1) + (D ? D[1] - Qn[1] : 0) / (E || 1);
			if (!Sortable.active && !In) {
				if (b && Math.max(Math.abs(S.clientX - this._lastX), Math.abs(S.clientY - this._lastY)) < b) return;
				this._onDragStart(_, !0);
			}
			if (wn) {
				C ? (C.e += O - (Vn || 0), C.f += k - (Hn || 0)) : C = {
					a: 1,
					b: 0,
					c: 0,
					d: 1,
					e: O,
					f: k
				};
				var A = `matrix(${C.a},${C.b},${C.c},${C.d},${C.e},${C.f})`;
				css(wn, `webkitTransform`, A), css(wn, `mozTransform`, A), css(wn, `msTransform`, A), css(wn, `transform`, A), Vn = O, Hn = k, Bn = S;
			}
			_.cancelable && _.preventDefault();
		}
	},
	_appendGhost: function _appendGhost() {
		if (!wn) {
			var _ = this.options.fallbackOnBody ? document.body : Tn, y = getRect(K, !0, nr, !0, _), b = this.options;
			if (nr) {
				for (Zn = _; css(Zn, `position`) === `static` && css(Zn, `transform`) === `none` && Zn !== document;) Zn = Zn.parentNode;
				Zn !== document.body && Zn !== document.documentElement ? (Zn === document && (Zn = getWindowScrollingElement()), y.top += Zn.scrollTop, y.left += Zn.scrollLeft) : Zn = getWindowScrollingElement(), Qn = getRelativeScrollOffset(Zn);
			}
			wn = K.cloneNode(!0), toggleClass(wn, b.ghostClass, !1), toggleClass(wn, b.fallbackClass, !0), toggleClass(wn, b.dragClass, !0), css(wn, `transition`, ``), css(wn, `transform`, ``), css(wn, `box-sizing`, `border-box`), css(wn, `margin`, 0), css(wn, `top`, y.top), css(wn, `left`, y.left), css(wn, `width`, y.width), css(wn, `height`, y.height), css(wn, `opacity`, `0.8`), css(wn, `position`, nr ? `absolute` : `fixed`), css(wn, `zIndex`, `100000`), css(wn, `pointerEvents`, `none`), Sortable.ghost = wn, _.appendChild(wn), css(wn, `transform-origin`, Un / parseInt(wn.style.width) * 100 + `% ` + Wn / parseInt(wn.style.height) * 100 + `%`);
		}
	},
	_onDragStart: function _onDragStart(_, y) {
		var b = this, x = _.dataTransfer, S = b.options;
		if (Sn(`dragStart`, this, { evt: _ }), Sortable.eventCanceled) {
			this._onDrop();
			return;
		}
		Sn(`setupClone`, this), Sortable.eventCanceled || (On = clone$2(K), On.removeAttribute(`id`), On.draggable = !1, On.style[`will-change`] = ``, this._hideClone(), toggleClass(On, this.options.chosenClass, !1), Sortable.clone = On), b.cloneId = _nextTick(function() {
			Sn(`clone`, b), !Sortable.eventCanceled && (b.options.removeCloneOnHide || Tn.insertBefore(On, K), b._hideClone(), _dispatchEvent({
				sortable: b,
				name: `clone`
			}));
		}), !y && toggleClass(K, S.dragClass, !0), y ? (Ln = !0, b._loopId = setInterval(b._emulateDragOver, 50)) : (off(document, `mouseup`, b._onDrop), off(document, `touchend`, b._onDrop), off(document, `touchcancel`, b._onDrop), x && (x.effectAllowed = `move`, S.setData && S.setData.call(b, x, K)), on(document, `drop`, b), css(K, `transform`, `translateZ(0)`)), In = !0, b._dragStartId = _nextTick(b._dragStarted.bind(b, y, _)), on(document, `selectstart`, b), Gn = !0, window.getSelection().removeAllRanges(), un && css(document.body, `user-select`, `none`);
	},
	_onDragOver: function _onDragOver(_) {
		var y = this.el, b = _.target, x, S, C, w = this.options, E = w.group, D = Sortable.active, O = Pn === E, k = w.sort, A = Fn || D, j, N = this, P = !1;
		if ($n) return;
		function dragOverEvent(w, E) {
			Sn(w, N, _objectSpread2({
				evt: _,
				isOwner: O,
				axis: j ? `vertical` : `horizontal`,
				revert: C,
				dragRect: x,
				targetRect: S,
				canSort: k,
				fromSortable: A,
				target: b,
				completed,
				onMove: function onMove(b, S) {
					return _onMove(Tn, y, K, x, b, getRect(b), _, S);
				},
				changed
			}, E));
		}
		function capture() {
			dragOverEvent(`dragOverAnimationCapture`), N.captureAnimationState(), N !== A && A.captureAnimationState();
		}
		function completed(x) {
			return dragOverEvent(`dragOverCompleted`, { insertion: x }), x && (O ? D._hideClone() : D._showClone(N), N !== A && (toggleClass(K, Fn ? Fn.options.ghostClass : D.options.ghostClass, !1), toggleClass(K, w.ghostClass, !0)), Fn !== N && N !== Sortable.active ? Fn = N : N === Sortable.active && Fn && (Fn = null), A === N && (N._ignoreWhileAnimating = b), N.animateAll(function() {
				dragOverEvent(`dragOverAnimationComplete`), N._ignoreWhileAnimating = null;
			}), N !== A && (A.animateAll(), A._ignoreWhileAnimating = null)), (b === K && !K.animated || b === y && !b.animated) && (Kn = null), !w.dragoverBubble && !_.rootEl && b !== document && (K.parentNode[_n]._isOutsideThisEl(_.target), !x && fr(_)), !w.dragoverBubble && _.stopPropagation && _.stopPropagation(), P = !0;
		}
		function changed() {
			jn = index(K), Nn = index(K, w.draggable), _dispatchEvent({
				sortable: N,
				name: `change`,
				toEl: y,
				newIndex: jn,
				newDraggableIndex: Nn,
				originalEvent: _
			});
		}
		if (_.preventDefault !== void 0 && _.cancelable && _.preventDefault(), b = closest$2(b, w.draggable, y, !0), dragOverEvent(`dragOver`), Sortable.eventCanceled) return P;
		if (K.contains(_.target) || b.animated && b.animatingX && b.animatingY || N._ignoreWhileAnimating === b) return completed(!1);
		if (Ln = !1, D && !w.disabled && (O ? k || (C = Cn !== Tn) : Fn === this || (this.lastPutMode = Pn.checkPull(this, D, K, _)) && E.checkPut(this, D, K, _))) {
			if (j = this._getDirection(_, b) === `vertical`, x = getRect(K), dragOverEvent(`dragOverValid`), Sortable.eventCanceled) return P;
			if (C) return Cn = Tn, capture(), this._hideClone(), dragOverEvent(`revert`), Sortable.eventCanceled || (En ? Tn.insertBefore(K, En) : Tn.appendChild(K)), completed(!0);
			var F = lastChild(y, w.draggable);
			if (!F || _ghostIsLast(_, j, this) && !F.animated) {
				if (F === K) return completed(!1);
				if (F && y === _.target && (b = F), b && (S = getRect(b)), _onMove(Tn, y, K, x, b, S, _, !!b) !== !1) return capture(), F && F.nextSibling ? y.insertBefore(K, F.nextSibling) : y.appendChild(K), Cn = y, changed(), completed(!0);
			} else if (F && _ghostIsFirst(_, j, this)) {
				var I = getChild(y, 0, w, !0);
				if (I === K) return completed(!1);
				if (b = I, S = getRect(b), _onMove(Tn, y, K, x, b, S, _, !1) !== !1) return capture(), y.insertBefore(K, I), Cn = y, changed(), completed(!0);
			} else if (b.parentNode === y) {
				S = getRect(b);
				var L = 0, R, z = K.parentNode !== y, B = !sr(K.animated && K.toRect || x, b.animated && b.toRect || S, j), ee = j ? `top` : `left`, te = isScrolledPast(b, `top`, `top`) || isScrolledPast(K, `top`, `top`), ne = te ? te.scrollTop : void 0;
				Kn !== b && (R = S[ee], Jn = !1, Yn = !B && w.invertSwap || z), L = _getSwapDirection(_, b, S, j, B ? 1 : w.swapThreshold, w.invertedSwapThreshold == null ? w.swapThreshold : w.invertedSwapThreshold, Yn, Kn === b);
				var V;
				if (L !== 0) {
					var re = index(K);
					do
						re -= L, V = Cn.children[re];
					while (V && (css(V, `display`) === `none` || V === wn));
				}
				if (L === 0 || V === b) return completed(!1);
				Kn = b, qn = L;
				var ie = b.nextElementSibling, ae = !1;
				ae = L === 1;
				var oe = _onMove(Tn, y, K, x, b, S, _, ae);
				if (oe !== !1) return (oe === 1 || oe === -1) && (ae = oe === 1), $n = !0, setTimeout(_unsilent, 30), capture(), ae && !ie ? y.appendChild(K) : b.parentNode.insertBefore(K, ae ? ie : b), te && scrollBy(te, 0, ne - te.scrollTop), Cn = K.parentNode, R !== void 0 && !Yn && (Xn = Math.abs(R - getRect(b)[ee])), changed(), completed(!0);
			}
			if (y.contains(K)) return completed(!1);
		}
		return !1;
	},
	_ignoreWhileAnimating: null,
	_offMoveEvents: function _offMoveEvents() {
		off(document, `mousemove`, this._onTouchMove), off(document, `touchmove`, this._onTouchMove), off(document, `pointermove`, this._onTouchMove), off(document, `dragover`, fr), off(document, `mousemove`, fr), off(document, `touchmove`, fr);
	},
	_offUpEvents: function _offUpEvents() {
		var _ = this.el.ownerDocument;
		off(_, `mouseup`, this._onDrop), off(_, `touchend`, this._onDrop), off(_, `pointerup`, this._onDrop), off(_, `pointercancel`, this._onDrop), off(_, `touchcancel`, this._onDrop), off(document, `selectstart`, this);
	},
	_onDrop: function _onDrop(_) {
		var y = this.el, b = this.options;
		if (jn = index(K), Nn = index(K, b.draggable), Sn(`drop`, this, { evt: _ }), Cn = K && K.parentNode, jn = index(K), Nn = index(K, b.draggable), Sortable.eventCanceled) {
			this._nulling();
			return;
		}
		In = !1, Yn = !1, Jn = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), _cancelNextTick(this.cloneId), _cancelNextTick(this._dragStartId), this.nativeDraggable && (off(document, `drop`, this), off(y, `dragstart`, this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), un && css(document.body, `user-select`, ``), css(K, `transform`, ``), _ && (Gn && (_.cancelable && _.preventDefault(), !b.dropBubble && _.stopPropagation()), wn && wn.parentNode && wn.parentNode.removeChild(wn), (Tn === Cn || Fn && Fn.lastPutMode !== `clone`) && On && On.parentNode && On.parentNode.removeChild(On), K && (this.nativeDraggable && off(K, `dragend`, this), _disableDraggable(K), K.style[`will-change`] = ``, Gn && !In && toggleClass(K, Fn ? Fn.options.ghostClass : this.options.ghostClass, !1), toggleClass(K, this.options.chosenClass, !1), _dispatchEvent({
			sortable: this,
			name: `unchoose`,
			toEl: Cn,
			newIndex: null,
			newDraggableIndex: null,
			originalEvent: _
		}), Tn === Cn ? jn !== An && jn >= 0 && (_dispatchEvent({
			sortable: this,
			name: `update`,
			toEl: Cn,
			originalEvent: _
		}), _dispatchEvent({
			sortable: this,
			name: `sort`,
			toEl: Cn,
			originalEvent: _
		})) : (jn >= 0 && (_dispatchEvent({
			rootEl: Cn,
			name: `add`,
			toEl: Cn,
			fromEl: Tn,
			originalEvent: _
		}), _dispatchEvent({
			sortable: this,
			name: `remove`,
			toEl: Cn,
			originalEvent: _
		}), _dispatchEvent({
			rootEl: Cn,
			name: `sort`,
			toEl: Cn,
			fromEl: Tn,
			originalEvent: _
		}), _dispatchEvent({
			sortable: this,
			name: `sort`,
			toEl: Cn,
			originalEvent: _
		})), Fn && Fn.save()), Sortable.active && ((jn == null || jn === -1) && (jn = An, Nn = Mn), _dispatchEvent({
			sortable: this,
			name: `end`,
			toEl: Cn,
			originalEvent: _
		}), this.save()))), this._nulling();
	},
	_nulling: function _nulling() {
		Sn(`nulling`, this), Tn = K = Cn = wn = En = On = Dn = kn = zn = Bn = Gn = jn = Nn = An = Mn = Kn = qn = Fn = Pn = Sortable.dragged = Sortable.ghost = Sortable.clone = Sortable.active = null;
		var _ = this.el;
		er.forEach(function(y) {
			_.contains(y) && (y.checked = !0);
		}), er.length = Vn = Hn = 0;
	},
	handleEvent: function handleEvent(_) {
		switch (_.type) {
			case `drop`:
			case `dragend`:
				this._onDrop(_);
				break;
			case `dragenter`:
			case `dragover`:
				K && (this._onDragOver(_), _globalDragOver(_));
				break;
			case `selectstart`:
				_.preventDefault();
				break;
		}
	},
	toArray: function toArray() {
		for (var _ = [], y, b = this.el.children, x = 0, S = b.length, C = this.options; x < S; x++) y = b[x], closest$2(y, C.draggable, this.el, !1) && _.push(y.getAttribute(C.dataIdAttr) || _generateId(y));
		return _;
	},
	sort: function sort(_, y) {
		var b = {}, x = this.el;
		this.toArray().forEach(function(_, y) {
			var S = x.children[y];
			closest$2(S, this.options.draggable, x, !1) && (b[_] = S);
		}, this), y && this.captureAnimationState(), _.forEach(function(_) {
			b[_] && (x.removeChild(b[_]), x.appendChild(b[_]));
		}), y && this.animateAll();
	},
	save: function save() {
		var _ = this.options.store;
		_ && _.set && _.set(this);
	},
	closest: function closest$1(_, y) {
		return closest$2(_, y || this.options.draggable, this.el, !1);
	},
	option: function option(_, y) {
		var b = this.options;
		if (y === void 0) return b[_];
		var x = bn.modifyOption(this, _, y);
		x === void 0 ? b[_] = y : b[_] = x, _ === `group` && lr(b);
	},
	destroy: function destroy() {
		Sn(`destroy`, this);
		var _ = this.el;
		_[_n] = null, off(_, `mousedown`, this._onTapStart), off(_, `touchstart`, this._onTapStart), off(_, `pointerdown`, this._onTapStart), this.nativeDraggable && (off(_, `dragover`, this), off(_, `dragenter`, this)), Array.prototype.forEach.call(_.querySelectorAll(`[draggable]`), function(_) {
			_.removeAttribute(`draggable`);
		}), this._onDrop(), this._disableDelayedDragEvents(), Rn.splice(Rn.indexOf(this.el), 1), this.el = _ = null;
	},
	_hideClone: function _hideClone() {
		if (!kn) {
			if (Sn(`hideClone`, this), Sortable.eventCanceled) return;
			css(On, `display`, `none`), this.options.removeCloneOnHide && On.parentNode && On.parentNode.removeChild(On), kn = !0;
		}
	},
	_showClone: function _showClone(_) {
		if (_.lastPutMode !== `clone`) {
			this._hideClone();
			return;
		}
		if (kn) {
			if (Sn(`showClone`, this), Sortable.eventCanceled) return;
			K.parentNode == Tn && !this.options.group.revertClone ? Tn.insertBefore(On, K) : En ? Tn.insertBefore(On, En) : Tn.appendChild(On), this.options.group.revertClone && this.animate(K, On), css(On, `display`, ``), kn = !1;
		}
	}
};
function _globalDragOver(_) {
	_.dataTransfer && (_.dataTransfer.dropEffect = `move`), _.cancelable && _.preventDefault();
}
function _onMove(_, y, b, x, S, C, w, E) {
	var D, O = _[_n], k = O.options.onMove, A;
	return window.CustomEvent && !sn && !cn ? D = new CustomEvent(`move`, {
		bubbles: !0,
		cancelable: !0
	}) : (D = document.createEvent(`Event`), D.initEvent(`move`, !0, !0)), D.to = y, D.from = _, D.dragged = b, D.draggedRect = x, D.related = S || y, D.relatedRect = C || getRect(y), D.willInsertAfter = E, D.originalEvent = w, _.dispatchEvent(D), k && (A = k.call(O, D, w)), A;
}
function _disableDraggable(_) {
	_.draggable = !1;
}
function _unsilent() {
	$n = !1;
}
function _ghostIsFirst(_, y, b) {
	var x = getRect(getChild(b.el, 0, b.options, !0)), S = getChildContainingRectFromElement(b.el, b.options, wn), C = 10;
	return y ? _.clientX < S.left - C || _.clientY < x.top && _.clientX < x.right : _.clientY < S.top - C || _.clientY < x.bottom && _.clientX < x.left;
}
function _ghostIsLast(_, y, b) {
	var x = getRect(lastChild(b.el, b.options.draggable)), S = getChildContainingRectFromElement(b.el, b.options, wn), C = 10;
	return y ? _.clientX > S.right + C || _.clientY > x.bottom && _.clientX > x.left : _.clientY > S.bottom + C || _.clientX > x.right && _.clientY > x.top;
}
function _getSwapDirection(_, y, b, x, S, C, w, E) {
	var D = x ? _.clientY : _.clientX, O = x ? b.height : b.width, k = x ? b.top : b.left, A = x ? b.bottom : b.right, j = !1;
	if (!w) {
		if (E && Xn < O * S) {
			if (!Jn && (qn === 1 ? D > k + O * C / 2 : D < A - O * C / 2) && (Jn = !0), Jn) j = !0;
			else if (qn === 1 ? D < k + Xn : D > A - Xn) return -qn;
		} else if (D > k + O * (1 - S) / 2 && D < A - O * (1 - S) / 2) return _getInsertDirection(y);
	}
	return j ||= w, j && (D < k + O * C / 2 || D > A - O * C / 2) ? D > k + O / 2 ? 1 : -1 : 0;
}
function _getInsertDirection(_) {
	return index(K) < index(_) ? 1 : -1;
}
function _generateId(_) {
	for (var y = _.tagName + _.className + _.src + _.href + _.textContent, b = y.length, x = 0; b--;) x += y.charCodeAt(b);
	return x.toString(36);
}
function _saveInputCheckedState(_) {
	er.length = 0;
	for (var y = _.getElementsByTagName(`input`), b = y.length; b--;) {
		var x = y[b];
		x.checked && er.push(x);
	}
}
function _nextTick(_) {
	return setTimeout(_, 0);
}
function _cancelNextTick(_) {
	return clearTimeout(_);
}
tr && on(document, `touchmove`, function(_) {
	(Sortable.active || In) && _.cancelable && _.preventDefault();
}), Sortable.utils = {
	on,
	off,
	css,
	find: find$1,
	is: function is(_, y) {
		return !!closest$2(_, y, _, !1);
	},
	extend: extend$2,
	throttle,
	closest: closest$2,
	toggleClass,
	clone: clone$2,
	index,
	nextTick: _nextTick,
	cancelNextTick: _cancelNextTick,
	detectDirection: or,
	getChild,
	expando: _n
}, Sortable.get = function(_) {
	return _[_n];
}, Sortable.mount = function() {
	var _ = [...arguments];
	_[0].constructor === Array && (_ = _[0]), _.forEach(function(_) {
		if (!_.prototype || !_.prototype.constructor) throw `Sortable: Mounted plugin must be a constructor function, not ${{}.toString.call(_)}`;
		_.utils && (Sortable.utils = _objectSpread2(_objectSpread2({}, Sortable.utils), _.utils)), bn.mount(_);
	});
}, Sortable.create = function(_, y) {
	return new Sortable(_, y);
}, Sortable.version = an;
var mr = [], hr, gr, _r = !1, vr, yr, br, xr;
function AutoScrollPlugin() {
	function AutoScroll() {
		for (var _ in this.defaults = {
			scroll: !0,
			forceAutoScrollFallback: !1,
			scrollSensitivity: 30,
			scrollSpeed: 10,
			bubbleScroll: !0
		}, this) _.charAt(0) === `_` && typeof this[_] == `function` && (this[_] = this[_].bind(this));
	}
	return AutoScroll.prototype = {
		dragStarted: function dragStarted(_) {
			var y = _.originalEvent;
			this.sortable.nativeDraggable ? on(document, `dragover`, this._handleAutoScroll) : this.options.supportPointer ? on(document, `pointermove`, this._handleFallbackAutoScroll) : y.touches ? on(document, `touchmove`, this._handleFallbackAutoScroll) : on(document, `mousemove`, this._handleFallbackAutoScroll);
		},
		dragOverCompleted: function dragOverCompleted(_) {
			var y = _.originalEvent;
			!this.options.dragOverBubble && !y.rootEl && this._handleAutoScroll(y);
		},
		drop: function drop() {
			this.sortable.nativeDraggable ? off(document, `dragover`, this._handleAutoScroll) : (off(document, `pointermove`, this._handleFallbackAutoScroll), off(document, `touchmove`, this._handleFallbackAutoScroll), off(document, `mousemove`, this._handleFallbackAutoScroll)), clearPointerElemChangedInterval(), clearAutoScrolls(), cancelThrottle();
		},
		nulling: function nulling() {
			br = gr = hr = _r = xr = vr = yr = null, mr.length = 0;
		},
		_handleFallbackAutoScroll: function _handleFallbackAutoScroll(_) {
			this._handleAutoScroll(_, !0);
		},
		_handleAutoScroll: function _handleAutoScroll(_, y) {
			var b = this, x = (_.touches ? _.touches[0] : _).clientX, S = (_.touches ? _.touches[0] : _).clientY, C = document.elementFromPoint(x, S);
			if (br = _, y || this.options.forceAutoScrollFallback || cn || sn || un) {
				Sr(_, this.options, C, y);
				var w = getParentAutoScrollElement(C, !0);
				_r && (!xr || x !== vr || S !== yr) && (xr && clearPointerElemChangedInterval(), xr = setInterval(function() {
					var C = getParentAutoScrollElement(document.elementFromPoint(x, S), !0);
					C !== w && (w = C, clearAutoScrolls()), Sr(_, b.options, C, y);
				}, 10), vr = x, yr = S);
			} else {
				if (!this.options.bubbleScroll || getParentAutoScrollElement(C, !0) === getWindowScrollingElement()) {
					clearAutoScrolls();
					return;
				}
				Sr(_, this.options, getParentAutoScrollElement(C, !1), !1);
			}
		}
	}, _extends(AutoScroll, {
		pluginName: `scroll`,
		initializeByDefault: !0
	});
}
function clearAutoScrolls() {
	mr.forEach(function(_) {
		clearInterval(_.pid);
	}), mr = [];
}
function clearPointerElemChangedInterval() {
	clearInterval(xr);
}
var Sr = throttle(function(_, y, b, x) {
	if (y.scroll) {
		var S = (_.touches ? _.touches[0] : _).clientX, C = (_.touches ? _.touches[0] : _).clientY, w = y.scrollSensitivity, E = y.scrollSpeed, D = getWindowScrollingElement(), O = !1, k;
		gr !== b && (gr = b, clearAutoScrolls(), hr = y.scroll, k = y.scrollFn, hr === !0 && (hr = getParentAutoScrollElement(b, !0)));
		var A = 0, j = hr;
		do {
			var N = j, P = getRect(N), F = P.top, I = P.bottom, L = P.left, R = P.right, z = P.width, B = P.height, ee = void 0, te = void 0, ne = N.scrollWidth, V = N.scrollHeight, re = css(N), ie = N.scrollLeft, ae = N.scrollTop;
			N === D ? (ee = z < ne && (re.overflowX === `auto` || re.overflowX === `scroll` || re.overflowX === `visible`), te = B < V && (re.overflowY === `auto` || re.overflowY === `scroll` || re.overflowY === `visible`)) : (ee = z < ne && (re.overflowX === `auto` || re.overflowX === `scroll`), te = B < V && (re.overflowY === `auto` || re.overflowY === `scroll`));
			var oe = ee && (Math.abs(R - S) <= w && ie + z < ne) - (Math.abs(L - S) <= w && !!ie), se = te && (Math.abs(I - C) <= w && ae + B < V) - (Math.abs(F - C) <= w && !!ae);
			if (!mr[A]) for (var ce = 0; ce <= A; ce++) mr[ce] || (mr[ce] = {});
			(mr[A].vx != oe || mr[A].vy != se || mr[A].el !== N) && (mr[A].el = N, mr[A].vx = oe, mr[A].vy = se, clearInterval(mr[A].pid), (oe != 0 || se != 0) && (O = !0, mr[A].pid = setInterval(function() {
				x && this.layer === 0 && Sortable.active._onTouchMove(br);
				var y = mr[this.layer].vy ? mr[this.layer].vy * E : 0, b = mr[this.layer].vx ? mr[this.layer].vx * E : 0;
				typeof k == `function` && k.call(Sortable.dragged.parentNode[_n], b, y, _, br, mr[this.layer].el) !== `continue` || scrollBy(mr[this.layer].el, b, y);
			}.bind({ layer: A }), 24))), A++;
		} while (y.bubbleScroll && j !== D && (j = getParentAutoScrollElement(j, !1)));
		_r = O;
	}
}, 30), Cr = function drop(_) {
	var y = _.originalEvent, b = _.putSortable, x = _.dragEl, S = _.activeSortable, C = _.dispatchSortableEvent, w = _.hideGhostForTarget, E = _.unhideGhostForTarget;
	if (y) {
		var D = b || S;
		w();
		var O = y.changedTouches && y.changedTouches.length ? y.changedTouches[0] : y, k = document.elementFromPoint(O.clientX, O.clientY);
		E(), D && !D.el.contains(k) && (C(`spill`), this.onSpill({
			dragEl: x,
			putSortable: b
		}));
	}
};
function Revert() {}
Revert.prototype = {
	startIndex: null,
	dragStart: function dragStart(_) {
		var y = _.oldDraggableIndex;
		this.startIndex = y;
	},
	onSpill: function onSpill(_) {
		var y = _.dragEl, b = _.putSortable;
		this.sortable.captureAnimationState(), b && b.captureAnimationState();
		var x = getChild(this.sortable.el, this.startIndex, this.options);
		x ? this.sortable.el.insertBefore(y, x) : this.sortable.el.appendChild(y), this.sortable.animateAll(), b && b.animateAll();
	},
	drop: Cr
}, _extends(Revert, { pluginName: `revertOnSpill` });
function Remove() {}
Remove.prototype = {
	onSpill: function onSpill(_) {
		var y = _.dragEl, b = _.putSortable || this.sortable;
		b.captureAnimationState(), y.parentNode && y.parentNode.removeChild(y), b.animateAll();
	},
	drop: Cr
}, _extends(Remove, { pluginName: `removeOnSpill` }), Sortable.mount(new AutoScrollPlugin()), Sortable.mount(Remove, Revert);
var wr = [
	`forEach`,
	`isDisjointFrom`,
	`isSubsetOf`,
	`isSupersetOf`
], Tr = [
	`difference`,
	`intersection`,
	`symmetricDifference`,
	`union`
], Er = !1, Dr = class SvelteSet extends Set {
	#sources = /* @__PURE__ */ new Map();
	#version = state(0);
	#size = state(0);
	#update_version = st || -1;
	constructor(_) {
		if (super(), _) {
			for (var y of _) super.add(y);
			this.#size.v = super.size;
		}
		Er || this.#init();
	}
	#source(_) {
		return st === this.#update_version ? state(_) : source(_);
	}
	#init() {
		Er = !0;
		var _ = SvelteSet.prototype, y = Set.prototype;
		for (let b of wr) _[b] = function(..._) {
			return get(this.#version), y[b].apply(this, _);
		};
		for (let b of Tr) _[b] = function(..._) {
			get(this.#version);
			var x = y[b].apply(this, _);
			return new SvelteSet(x);
		};
	}
	has(_) {
		var y = super.has(_), b = this.#sources, x = b.get(_);
		if (x === void 0) {
			if (!y) return get(this.#version), !1;
			x = this.#source(!0), b.set(_, x);
		}
		return get(x), y;
	}
	add(_) {
		return super.has(_) || (super.add(_), set(this.#size, super.size), increment(this.#version)), this;
	}
	delete(_) {
		var y = super.delete(_), b = this.#sources, x = b.get(_);
		return x !== void 0 && (b.delete(_), set(x, !1)), y && (set(this.#size, super.size), increment(this.#version)), y;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var _ = this.#sources;
			for (var y of _.values()) set(y, !1);
			_.clear(), set(this.#size, 0), increment(this.#version);
		}
	}
	keys() {
		return this.values();
	}
	values() {
		return get(this.#version), super.values();
	}
	entries() {
		return get(this.#version), super.entries();
	}
	[Symbol.iterator]() {
		return this.keys();
	}
	get size() {
		return get(this.#size);
	}
}, SvelteMap = class extends Map {
	#sources = /* @__PURE__ */ new Map();
	#version = state(0);
	#size = state(0);
	#update_version = st || -1;
	constructor(_) {
		if (super(), _) {
			for (var [y, b] of _) super.set(y, b);
			this.#size.v = super.size;
		}
	}
	#source(_) {
		return st === this.#update_version ? state(_) : source(_);
	}
	has(_) {
		var y = this.#sources, b = y.get(_);
		if (b === void 0) if (super.has(_)) b = this.#source(0), y.set(_, b);
		else return get(this.#version), !1;
		return get(b), !0;
	}
	forEach(_, y) {
		this.#read_all(), super.forEach(_, y);
	}
	get(_) {
		var y = this.#sources, b = y.get(_);
		if (b === void 0) if (super.has(_)) b = this.#source(0), y.set(_, b);
		else {
			get(this.#version);
			return;
		}
		return get(b), super.get(_);
	}
	set(_, y) {
		var b = this.#sources, x = b.get(_), S = super.get(_), C = super.set(_, y), w = this.#version;
		if (x === void 0) x = this.#source(0), b.set(_, x), set(this.#size, super.size), increment(w);
		else if (S !== y) {
			increment(x);
			var E = w.reactions === null ? null : new Set(w.reactions);
			(E === null || !x.reactions?.every((_) => E.has(_))) && increment(w);
		}
		return C;
	}
	delete(_) {
		var y = this.#sources, b = y.get(_), x = super.delete(_);
		return b !== void 0 && (y.delete(_), set(b, -1)), x && (set(this.#size, super.size), increment(this.#version)), x;
	}
	clear() {
		if (super.size !== 0) {
			super.clear();
			var _ = this.#sources;
			set(this.#size, 0);
			for (var y of _.values()) set(y, -1);
			increment(this.#version), _.clear();
		}
	}
	#read_all() {
		get(this.#version);
		var _ = this.#sources;
		if (this.#size.v !== _.size) {
			for (var y of super.keys()) if (!_.has(y)) {
				var b = this.#source(0);
				_.set(y, b);
			}
		}
		for ([, b] of this.#sources) get(b);
	}
	keys() {
		return get(this.#version), super.keys();
	}
	values() {
		return this.#read_all(), super.values();
	}
	entries() {
		return this.#read_all(), super.entries();
	}
	[Symbol.iterator]() {
		return this.entries();
	}
	get size() {
		return get(this.#size), super.size;
	}
}, Or;
(function(_) {
	_.Range = `range`, _.Steps = `steps`, _.Positions = `positions`, _.Count = `count`, _.Values = `values`;
})(Or ||= {});
var kr;
(function(_) {
	_[_.None = -1] = `None`, _[_.NoValue = 0] = `NoValue`, _[_.LargeValue = 1] = `LargeValue`, _[_.SmallValue = 2] = `SmallValue`;
})(kr ||= {});
function isValidFormatter(_) {
	return isValidPartialFormatter(_) && typeof _.from == `function`;
}
function isValidPartialFormatter(_) {
	return typeof _ == `object` && typeof _.to == `function`;
}
function removeElement(_) {
	_.parentElement.removeChild(_);
}
function isSet(_) {
	return _ != null;
}
function preventDefault(_) {
	_.preventDefault();
}
function unique(_) {
	return _.filter(function(_) {
		return this[_] ? !1 : this[_] = !0;
	}, {});
}
function closest(_, y) {
	return Math.round(_ / y) * y;
}
function offset$1(_, y) {
	var b = _.getBoundingClientRect(), x = _.ownerDocument, S = x.documentElement, C = getPageOffset(x);
	return /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (C.x = 0), y ? b.top + C.y - S.clientTop : b.left + C.x - S.clientLeft;
}
function isNumeric(_) {
	return typeof _ == `number` && !isNaN(_) && isFinite(_);
}
function addClassFor(_, y, b) {
	b > 0 && (addClass(_, y), setTimeout(function() {
		removeClass(_, y);
	}, b));
}
function limit(_) {
	return Math.max(Math.min(_, 100), 0);
}
function asArray$2(_) {
	return Array.isArray(_) ? _ : [_];
}
function countDecimals(_) {
	_ = String(_);
	var y = _.split(`.`);
	return y.length > 1 ? y[1].length : 0;
}
function addClass(_, y) {
	_.classList && !/\s/.test(y) ? _.classList.add(y) : _.className += ` ` + y;
}
function removeClass(_, y) {
	_.classList && !/\s/.test(y) ? _.classList.remove(y) : _.className = _.className.replace(RegExp(`(^|\\b)` + y.split(` `).join(`|`) + `(\\b|$)`, `gi`), ` `);
}
function hasClass(_, y) {
	return _.classList ? _.classList.contains(y) : RegExp(`\\b` + y + `\\b`).test(_.className);
}
function getPageOffset(_) {
	var y = window.pageXOffset !== void 0, b = (_.compatMode || ``) === `CSS1Compat`;
	return {
		x: y ? window.pageXOffset : b ? _.documentElement.scrollLeft : _.body.scrollLeft,
		y: y ? window.pageYOffset : b ? _.documentElement.scrollTop : _.body.scrollTop
	};
}
function getActions() {
	return window.navigator.pointerEnabled ? {
		start: `pointerdown`,
		move: `pointermove`,
		end: `pointerup`
	} : window.navigator.msPointerEnabled ? {
		start: `MSPointerDown`,
		move: `MSPointerMove`,
		end: `MSPointerUp`
	} : {
		start: `mousedown touchstart`,
		move: `mousemove touchmove`,
		end: `mouseup touchend`
	};
}
function getSupportsPassive() {
	var _ = !1;
	try {
		var y = Object.defineProperty({}, "passive", { get: function() {
			_ = !0;
		} });
		window.addEventListener(`test`, null, y);
	} catch {}
	return _;
}
function getSupportsTouchActionNone() {
	return window.CSS && CSS.supports && CSS.supports(`touch-action`, `none`);
}
function subRangeRatio(_, y) {
	return 100 / (y - _);
}
function fromPercentage(_, y, b) {
	return y * 100 / (_[b + 1] - _[b]);
}
function toPercentage(_, y) {
	return fromPercentage(_, _[0] < 0 ? y + Math.abs(_[0]) : y - _[0], 0);
}
function isPercentage(_, y) {
	return y * (_[1] - _[0]) / 100 + _[0];
}
function getJ(_, y) {
	for (var b = 1; _ >= y[b];) b += 1;
	return b;
}
function toStepping(_, y, b) {
	if (b >= _.slice(-1)[0]) return 100;
	var x = getJ(b, _), S = _[x - 1], C = _[x], w = y[x - 1], E = y[x];
	return w + toPercentage([S, C], b) / subRangeRatio(w, E);
}
function fromStepping(_, y, b) {
	if (b >= 100) return _.slice(-1)[0];
	var x = getJ(b, y), S = _[x - 1], C = _[x], w = y[x - 1], E = y[x];
	return isPercentage([S, C], (b - w) * subRangeRatio(w, E));
}
function getStep(_, y, b, x) {
	if (x === 100) return x;
	var S = getJ(x, _), C = _[S - 1], w = _[S];
	return b ? x - C > (w - C) / 2 ? w : C : y[S - 1] ? _[S - 1] + closest(x - _[S - 1], y[S - 1]) : x;
}
var Ar = function() {
	function Spectrum(_, y, b) {
		this.xPct = [], this.xVal = [], this.xSteps = [], this.xNumSteps = [], this.xHighestCompleteStep = [], this.xSteps = [b || !1], this.xNumSteps = [!1], this.snap = y;
		var x, S = [];
		for (Object.keys(_).forEach(function(y) {
			S.push([asArray$2(_[y]), y]);
		}), S.sort(function(_, y) {
			return _[0][0] - y[0][0];
		}), x = 0; x < S.length; x++) this.handleEntryPoint(S[x][1], S[x][0]);
		for (this.xNumSteps = this.xSteps.slice(0), x = 0; x < this.xNumSteps.length; x++) this.handleStepPoint(x, this.xNumSteps[x]);
	}
	return Spectrum.prototype.getDistance = function(_) {
		for (var y = [], b = 0; b < this.xNumSteps.length - 1; b++) y[b] = fromPercentage(this.xVal, _, b);
		return y;
	}, Spectrum.prototype.getAbsoluteDistance = function(_, y, b) {
		var x = 0;
		if (_ < this.xPct[this.xPct.length - 1]) for (; _ > this.xPct[x + 1];) x++;
		else _ === this.xPct[this.xPct.length - 1] && (x = this.xPct.length - 2);
		!b && _ === this.xPct[x + 1] && x++, y === null && (y = []);
		var S, C = 1, w = y[x], E = 0, D = 0, O = 0, k = 0;
		for (S = b ? (_ - this.xPct[x]) / (this.xPct[x + 1] - this.xPct[x]) : (this.xPct[x + 1] - _) / (this.xPct[x + 1] - this.xPct[x]); w > 0;) E = this.xPct[x + 1 + k] - this.xPct[x + k], y[x + k] * C + 100 - S * 100 > 100 ? (D = E * S, C = (w - 100 * S) / y[x + k], S = 1) : (D = y[x + k] * E / 100 * C, C = 0), b ? (O -= D, this.xPct.length + k >= 1 && k--) : (O += D, this.xPct.length - k >= 1 && k++), w = y[x + k] * C;
		return _ + O;
	}, Spectrum.prototype.toStepping = function(_) {
		return _ = toStepping(this.xVal, this.xPct, _), _;
	}, Spectrum.prototype.fromStepping = function(_) {
		return fromStepping(this.xVal, this.xPct, _);
	}, Spectrum.prototype.getStep = function(_) {
		return _ = getStep(this.xPct, this.xSteps, this.snap, _), _;
	}, Spectrum.prototype.getDefaultStep = function(_, y, b) {
		var x = getJ(_, this.xPct);
		return (_ === 100 || y && _ === this.xPct[x - 1]) && (x = Math.max(x - 1, 1)), (this.xVal[x] - this.xVal[x - 1]) / b;
	}, Spectrum.prototype.getNearbySteps = function(_) {
		var y = getJ(_, this.xPct);
		return {
			stepBefore: {
				startValue: this.xVal[y - 2],
				step: this.xNumSteps[y - 2],
				highestStep: this.xHighestCompleteStep[y - 2]
			},
			thisStep: {
				startValue: this.xVal[y - 1],
				step: this.xNumSteps[y - 1],
				highestStep: this.xHighestCompleteStep[y - 1]
			},
			stepAfter: {
				startValue: this.xVal[y],
				step: this.xNumSteps[y],
				highestStep: this.xHighestCompleteStep[y]
			}
		};
	}, Spectrum.prototype.countStepDecimals = function() {
		var _ = this.xNumSteps.map(countDecimals);
		return Math.max.apply(null, _);
	}, Spectrum.prototype.hasNoSize = function() {
		return this.xVal[0] === this.xVal[this.xVal.length - 1];
	}, Spectrum.prototype.convert = function(_) {
		return this.getStep(this.toStepping(_));
	}, Spectrum.prototype.handleEntryPoint = function(_, y) {
		var b = _ === `min` ? 0 : _ === `max` ? 100 : parseFloat(_);
		if (!isNumeric(b) || !isNumeric(y[0])) throw Error(`noUiSlider: 'range' value isn't numeric.`);
		this.xPct.push(b), this.xVal.push(y[0]);
		var x = Number(y[1]);
		b ? this.xSteps.push(!isNaN(x) && x) : isNaN(x) || (this.xSteps[0] = x), this.xHighestCompleteStep.push(0);
	}, Spectrum.prototype.handleStepPoint = function(_, y) {
		if (y) {
			if (this.xVal[_] === this.xVal[_ + 1]) {
				this.xSteps[_] = this.xHighestCompleteStep[_] = this.xVal[_];
				return;
			}
			this.xSteps[_] = fromPercentage([this.xVal[_], this.xVal[_ + 1]], y, 0) / subRangeRatio(this.xPct[_], this.xPct[_ + 1]);
			var b = (this.xVal[_ + 1] - this.xVal[_]) / this.xNumSteps[_], x = Math.ceil(Number(b.toFixed(3)) - 1), S = this.xVal[_] + this.xNumSteps[_] * x;
			this.xHighestCompleteStep[_] = S;
		}
	}, Spectrum;
}(), jr = {
	to: function(_) {
		return _ === void 0 ? `` : _.toFixed(2);
	},
	from: Number
}, Mr = {
	target: `target`,
	base: `base`,
	origin: `origin`,
	handle: `handle`,
	handleLower: `handle-lower`,
	handleUpper: `handle-upper`,
	touchArea: `touch-area`,
	horizontal: `horizontal`,
	vertical: `vertical`,
	background: `background`,
	connect: `connect`,
	connects: `connects`,
	ltr: `ltr`,
	rtl: `rtl`,
	textDirectionLtr: `txt-dir-ltr`,
	textDirectionRtl: `txt-dir-rtl`,
	draggable: `draggable`,
	drag: `state-drag`,
	tap: `state-tap`,
	active: `active`,
	tooltip: `tooltip`,
	pips: `pips`,
	pipsHorizontal: `pips-horizontal`,
	pipsVertical: `pips-vertical`,
	marker: `marker`,
	markerHorizontal: `marker-horizontal`,
	markerVertical: `marker-vertical`,
	markerNormal: `marker-normal`,
	markerLarge: `marker-large`,
	markerSub: `marker-sub`,
	value: `value`,
	valueHorizontal: `value-horizontal`,
	valueVertical: `value-vertical`,
	valueNormal: `value-normal`,
	valueLarge: `value-large`,
	valueSub: `value-sub`
}, Nr = {
	tooltips: `.__tooltips`,
	aria: `.__aria`
};
function testStep(_, y) {
	if (!isNumeric(y)) throw Error(`noUiSlider: 'step' is not numeric.`);
	_.singleStep = y;
}
function testKeyboardPageMultiplier(_, y) {
	if (!isNumeric(y)) throw Error(`noUiSlider: 'keyboardPageMultiplier' is not numeric.`);
	_.keyboardPageMultiplier = y;
}
function testKeyboardMultiplier(_, y) {
	if (!isNumeric(y)) throw Error(`noUiSlider: 'keyboardMultiplier' is not numeric.`);
	_.keyboardMultiplier = y;
}
function testKeyboardDefaultStep(_, y) {
	if (!isNumeric(y)) throw Error(`noUiSlider: 'keyboardDefaultStep' is not numeric.`);
	_.keyboardDefaultStep = y;
}
function testRange(_, y) {
	if (typeof y != `object` || Array.isArray(y)) throw Error(`noUiSlider: 'range' is not an object.`);
	if (y.min === void 0 || y.max === void 0) throw Error(`noUiSlider: Missing 'min' or 'max' in 'range'.`);
	_.spectrum = new Ar(y, _.snap || !1, _.singleStep);
}
function testStart(_, y) {
	if (y = asArray$2(y), !Array.isArray(y) || !y.length) throw Error(`noUiSlider: 'start' option is incorrect.`);
	_.handles = y.length, _.start = y;
}
function testSnap(_, y) {
	if (typeof y != `boolean`) throw Error(`noUiSlider: 'snap' option must be a boolean.`);
	_.snap = y;
}
function testAnimate(_, y) {
	if (typeof y != `boolean`) throw Error(`noUiSlider: 'animate' option must be a boolean.`);
	_.animate = y;
}
function testAnimationDuration(_, y) {
	if (typeof y != `number`) throw Error(`noUiSlider: 'animationDuration' option must be a number.`);
	_.animationDuration = y;
}
function testConnect(_, y) {
	var b = [!1], x;
	if (y === `lower` ? y = [!0, !1] : y === `upper` && (y = [!1, !0]), y === !0 || y === !1) {
		for (x = 1; x < _.handles; x++) b.push(y);
		b.push(!1);
	} else if (!Array.isArray(y) || !y.length || y.length !== _.handles + 1) throw Error(`noUiSlider: 'connect' option doesn't match handle count.`);
	else b = y;
	_.connect = b;
}
function testOrientation(_, y) {
	switch (y) {
		case `horizontal`:
			_.ort = 0;
			break;
		case `vertical`:
			_.ort = 1;
			break;
		default: throw Error(`noUiSlider: 'orientation' option is invalid.`);
	}
}
function testMargin(_, y) {
	if (!isNumeric(y)) throw Error(`noUiSlider: 'margin' option must be numeric.`);
	y !== 0 && (_.margin = _.spectrum.getDistance(y));
}
function testLimit(_, y) {
	if (!isNumeric(y)) throw Error(`noUiSlider: 'limit' option must be numeric.`);
	if (_.limit = _.spectrum.getDistance(y), !_.limit || _.handles < 2) throw Error(`noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.`);
}
function testPadding(_, y) {
	var b;
	if (!isNumeric(y) && !Array.isArray(y) || Array.isArray(y) && !(y.length === 2 || isNumeric(y[0]) || isNumeric(y[1]))) throw Error(`noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.`);
	if (y !== 0) {
		for (Array.isArray(y) || (y = [y, y]), _.padding = [_.spectrum.getDistance(y[0]), _.spectrum.getDistance(y[1])], b = 0; b < _.spectrum.xNumSteps.length - 1; b++) if (_.padding[0][b] < 0 || _.padding[1][b] < 0) throw Error(`noUiSlider: 'padding' option must be a positive number(s).`);
		var x = y[0] + y[1], S = _.spectrum.xVal[0];
		if (x / (_.spectrum.xVal[_.spectrum.xVal.length - 1] - S) > 1) throw Error(`noUiSlider: 'padding' option must not exceed 100% of the range.`);
	}
}
function testDirection(_, y) {
	switch (y) {
		case `ltr`:
			_.dir = 0;
			break;
		case `rtl`:
			_.dir = 1;
			break;
		default: throw Error(`noUiSlider: 'direction' option was not recognized.`);
	}
}
function testBehaviour(_, y) {
	if (typeof y != `string`) throw Error(`noUiSlider: 'behaviour' must be a string containing options.`);
	var b = y.indexOf(`tap`) >= 0, x = y.indexOf(`drag`) >= 0, S = y.indexOf(`fixed`) >= 0, C = y.indexOf(`snap`) >= 0, w = y.indexOf(`hover`) >= 0, E = y.indexOf(`unconstrained`) >= 0, D = y.indexOf(`invert-connects`) >= 0, O = y.indexOf(`drag-all`) >= 0, k = y.indexOf(`smooth-steps`) >= 0;
	if (S) {
		if (_.handles !== 2) throw Error(`noUiSlider: 'fixed' behaviour must be used with 2 handles`);
		testMargin(_, _.start[1] - _.start[0]);
	}
	if (D && _.handles !== 2) throw Error(`noUiSlider: 'invert-connects' behaviour must be used with 2 handles`);
	if (E && (_.margin || _.limit)) throw Error(`noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit`);
	_.events = {
		tap: b || C,
		drag: x,
		dragAll: O,
		smoothSteps: k,
		fixed: S,
		snap: C,
		hover: w,
		unconstrained: E,
		invertConnects: D
	};
}
function testTooltips(_, y) {
	if (y !== !1) if (y === !0 || isValidPartialFormatter(y)) {
		_.tooltips = [];
		for (var b = 0; b < _.handles; b++) _.tooltips.push(y);
	} else {
		if (y = asArray$2(y), y.length !== _.handles) throw Error(`noUiSlider: must pass a formatter for all handles.`);
		y.forEach(function(_) {
			if (typeof _ != `boolean` && !isValidPartialFormatter(_)) throw Error(`noUiSlider: 'tooltips' must be passed a formatter or 'false'.`);
		}), _.tooltips = y;
	}
}
function testHandleAttributes(_, y) {
	if (y.length !== _.handles) throw Error(`noUiSlider: must pass a attributes for all handles.`);
	_.handleAttributes = y;
}
function testAriaFormat(_, y) {
	if (!isValidPartialFormatter(y)) throw Error(`noUiSlider: 'ariaFormat' requires 'to' method.`);
	_.ariaFormat = y;
}
function testFormat(_, y) {
	if (!isValidFormatter(y)) throw Error(`noUiSlider: 'format' requires 'to' and 'from' methods.`);
	_.format = y;
}
function testKeyboardSupport(_, y) {
	if (typeof y != `boolean`) throw Error(`noUiSlider: 'keyboardSupport' option must be a boolean.`);
	_.keyboardSupport = y;
}
function testDocumentElement(_, y) {
	_.documentElement = y;
}
function testCssPrefix(_, y) {
	if (typeof y != `string` && y !== !1) throw Error("noUiSlider: 'cssPrefix' must be a string or `false`.");
	_.cssPrefix = y;
}
function testCssClasses(_, y) {
	if (typeof y != `object`) throw Error(`noUiSlider: 'cssClasses' must be an object.`);
	typeof _.cssPrefix == `string` ? (_.cssClasses = {}, Object.keys(y).forEach(function(b) {
		_.cssClasses[b] = _.cssPrefix + y[b];
	})) : _.cssClasses = y;
}
function testOptions(_) {
	var y = {
		margin: null,
		limit: null,
		padding: null,
		animate: !0,
		animationDuration: 300,
		ariaFormat: jr,
		format: jr
	}, b = {
		step: {
			r: !1,
			t: testStep
		},
		keyboardPageMultiplier: {
			r: !1,
			t: testKeyboardPageMultiplier
		},
		keyboardMultiplier: {
			r: !1,
			t: testKeyboardMultiplier
		},
		keyboardDefaultStep: {
			r: !1,
			t: testKeyboardDefaultStep
		},
		start: {
			r: !0,
			t: testStart
		},
		connect: {
			r: !0,
			t: testConnect
		},
		direction: {
			r: !0,
			t: testDirection
		},
		snap: {
			r: !1,
			t: testSnap
		},
		animate: {
			r: !1,
			t: testAnimate
		},
		animationDuration: {
			r: !1,
			t: testAnimationDuration
		},
		range: {
			r: !0,
			t: testRange
		},
		orientation: {
			r: !1,
			t: testOrientation
		},
		margin: {
			r: !1,
			t: testMargin
		},
		limit: {
			r: !1,
			t: testLimit
		},
		padding: {
			r: !1,
			t: testPadding
		},
		behaviour: {
			r: !0,
			t: testBehaviour
		},
		ariaFormat: {
			r: !1,
			t: testAriaFormat
		},
		format: {
			r: !1,
			t: testFormat
		},
		tooltips: {
			r: !1,
			t: testTooltips
		},
		keyboardSupport: {
			r: !0,
			t: testKeyboardSupport
		},
		documentElement: {
			r: !1,
			t: testDocumentElement
		},
		cssPrefix: {
			r: !0,
			t: testCssPrefix
		},
		cssClasses: {
			r: !0,
			t: testCssClasses
		},
		handleAttributes: {
			r: !1,
			t: testHandleAttributes
		}
	}, x = {
		connect: !1,
		direction: `ltr`,
		behaviour: `tap`,
		orientation: `horizontal`,
		keyboardSupport: !0,
		cssPrefix: `noUi-`,
		cssClasses: Mr,
		keyboardPageMultiplier: 5,
		keyboardMultiplier: 1,
		keyboardDefaultStep: 10
	};
	_.format && !_.ariaFormat && (_.ariaFormat = _.format), Object.keys(b).forEach(function(S) {
		if (!isSet(_[S]) && x[S] === void 0) {
			if (b[S].r) throw Error(`noUiSlider: '` + S + `' is required.`);
			return;
		}
		b[S].t(y, isSet(_[S]) ? _[S] : x[S]);
	}), y.pips = _.pips;
	var S = document.createElement(`div`), C = S.style.msTransform !== void 0;
	return y.transformRule = S.style.transform === void 0 ? C ? `msTransform` : `webkitTransform` : `transform`, y.style = [[`left`, `top`], [`right`, `bottom`]][y.dir][y.ort], y;
}
function scope(_, y, b) {
	var x = getActions(), S = getSupportsTouchActionNone() && getSupportsPassive(), C = _, w, E, D, O, k, A, j = y.spectrum, N = [], P = [], F = [], I = 0, L = {}, R = !1, z = _.ownerDocument, B = y.documentElement || z.documentElement, ee = z.body, te = z.dir === `rtl` || y.ort === 1 ? 0 : 100;
	function addNodeTo(_, y) {
		var b = z.createElement(`div`);
		return y && addClass(b, y), _.appendChild(b), b;
	}
	function addOrigin(_, b) {
		var x = addNodeTo(_, y.cssClasses.origin), S = addNodeTo(x, y.cssClasses.handle);
		if (addNodeTo(S, y.cssClasses.touchArea), S.setAttribute(`data-handle`, String(b)), y.keyboardSupport && (S.setAttribute(`tabindex`, `0`), S.addEventListener(`keydown`, function(_) {
			return eventKeydown(_, b);
		})), y.handleAttributes !== void 0) {
			var C = y.handleAttributes[b];
			Object.keys(C).forEach(function(_) {
				S.setAttribute(_, C[_]);
			});
		}
		return S.setAttribute(`role`, `slider`), S.setAttribute(`aria-orientation`, y.ort ? `vertical` : `horizontal`), b === 0 ? addClass(S, y.cssClasses.handleLower) : b === y.handles - 1 && addClass(S, y.cssClasses.handleUpper), x.handle = S, x;
	}
	function addConnect(_, b) {
		return b ? addNodeTo(_, y.cssClasses.connect) : !1;
	}
	function addElements(_, b) {
		E = addNodeTo(b, y.cssClasses.connects), D = [], O = [], O.push(addConnect(E, _[0]));
		for (var x = 0; x < y.handles; x++) D.push(addOrigin(b, x)), F[x] = x, O.push(addConnect(E, _[x + 1]));
	}
	function addSlider(_) {
		return addClass(_, y.cssClasses.target), y.dir === 0 ? addClass(_, y.cssClasses.ltr) : addClass(_, y.cssClasses.rtl), y.ort === 0 ? addClass(_, y.cssClasses.horizontal) : addClass(_, y.cssClasses.vertical), getComputedStyle(_).direction === `rtl` ? addClass(_, y.cssClasses.textDirectionRtl) : addClass(_, y.cssClasses.textDirectionLtr), addNodeTo(_, y.cssClasses.base);
	}
	function addTooltip(_, b) {
		return !y.tooltips || !y.tooltips[b] ? !1 : addNodeTo(_.firstChild, y.cssClasses.tooltip);
	}
	function isSliderDisabled() {
		return C.hasAttribute(`disabled`);
	}
	function isHandleDisabled(_) {
		return D[_].hasAttribute(`disabled`);
	}
	function disable(_) {
		_ == null ? (C.setAttribute(`disabled`, ``), D.forEach(function(_) {
			_.handle.removeAttribute(`tabindex`);
		})) : (D[_].setAttribute(`disabled`, ``), D[_].handle.removeAttribute(`tabindex`));
	}
	function enable(_) {
		_ == null ? (C.removeAttribute(`disabled`), D.forEach(function(_) {
			_.removeAttribute(`disabled`), _.handle.setAttribute(`tabindex`, `0`);
		})) : (D[_].removeAttribute(`disabled`), D[_].handle.setAttribute(`tabindex`, `0`));
	}
	function removeTooltips() {
		A &&= (removeEvent(`update` + Nr.tooltips), A.forEach(function(_) {
			_ && removeElement(_);
		}), null);
	}
	function tooltips() {
		removeTooltips(), A = D.map(addTooltip), bindEvent(`update` + Nr.tooltips, function(_, b, x) {
			if (!(!A || !y.tooltips) && A[b] !== !1) {
				var S = _[b];
				y.tooltips[b] !== !0 && (S = y.tooltips[b].to(x[b])), A[b].innerHTML = S;
			}
		});
	}
	function aria() {
		removeEvent(`update` + Nr.aria), bindEvent(`update` + Nr.aria, function(_, b, x, S, C) {
			F.forEach(function(_) {
				var b = D[_], S = checkHandlePosition(P, _, 0, !0, !0, !0), w = checkHandlePosition(P, _, 100, !0, !0, !0), E = C[_], O = String(y.ariaFormat.to(x[_]));
				S = j.fromStepping(S).toFixed(1), w = j.fromStepping(w).toFixed(1), E = j.fromStepping(E).toFixed(1), b.children[0].setAttribute(`aria-valuemin`, S), b.children[0].setAttribute(`aria-valuemax`, w), b.children[0].setAttribute(`aria-valuenow`, E), b.children[0].setAttribute(`aria-valuetext`, O);
			});
		});
	}
	function getGroup(_) {
		if (_.mode === Or.Range || _.mode === Or.Steps) return j.xVal;
		if (_.mode === Or.Count) {
			if (_.values < 2) throw Error(`noUiSlider: 'values' (>= 2) required for mode 'count'.`);
			for (var y = _.values - 1, b = 100 / y, x = []; y--;) x[y] = y * b;
			return x.push(100), mapToRange(x, _.stepped);
		}
		return _.mode === Or.Positions ? mapToRange(_.values, _.stepped) : _.mode === Or.Values ? _.stepped ? _.values.map(function(_) {
			return j.fromStepping(j.getStep(j.toStepping(_)));
		}) : _.values : [];
	}
	function mapToRange(_, y) {
		return _.map(function(_) {
			return j.fromStepping(y ? j.getStep(_) : _);
		});
	}
	function generateSpread(_) {
		function safeIncrement(_, y) {
			return Number((_ + y).toFixed(7));
		}
		var y = getGroup(_), b = {}, x = j.xVal[0], S = j.xVal[j.xVal.length - 1], C = !1, w = !1, E = 0;
		return y = unique(y.slice().sort(function(_, y) {
			return _ - y;
		})), y[0] !== x && (y.unshift(x), C = !0), y[y.length - 1] !== S && (y.push(S), w = !0), y.forEach(function(x, S) {
			var D, O, k, A = x, N = y[S + 1], P, F, I, L, R, z, B, ee = _.mode === Or.Steps;
			for (ee && (D = j.xNumSteps[S]), D ||= N - A, N === void 0 && (N = A), D = Math.max(D, 1e-7), O = A; O <= N; O = safeIncrement(O, D)) {
				for (P = j.toStepping(O), F = P - E, R = F / (_.density || 1), z = Math.round(R), B = F / z, k = 1; k <= z; k += 1) I = E + k * B, b[I.toFixed(5)] = [j.fromStepping(I), 0];
				L = y.indexOf(O) > -1 ? kr.LargeValue : ee ? kr.SmallValue : kr.NoValue, !S && C && O !== N && (L = 0), O === N && w || (b[P.toFixed(5)] = [O, L]), E = P;
			}
		}), b;
	}
	function addMarking(_, b, x) {
		var S, C, w = z.createElement(`div`), E = (S = {}, S[kr.None] = ``, S[kr.NoValue] = y.cssClasses.valueNormal, S[kr.LargeValue] = y.cssClasses.valueLarge, S[kr.SmallValue] = y.cssClasses.valueSub, S), D = (C = {}, C[kr.None] = ``, C[kr.NoValue] = y.cssClasses.markerNormal, C[kr.LargeValue] = y.cssClasses.markerLarge, C[kr.SmallValue] = y.cssClasses.markerSub, C), O = [y.cssClasses.valueHorizontal, y.cssClasses.valueVertical], k = [y.cssClasses.markerHorizontal, y.cssClasses.markerVertical];
		addClass(w, y.cssClasses.pips), addClass(w, y.ort === 0 ? y.cssClasses.pipsHorizontal : y.cssClasses.pipsVertical);
		function getClasses(_, b) {
			var x = b === y.cssClasses.value, S = x ? O : k, C = x ? E : D;
			return b + ` ` + S[y.ort] + ` ` + C[_];
		}
		function addSpread(_, S, C) {
			if (C = b ? b(S, C) : C, C !== kr.None) {
				var E = addNodeTo(w, !1);
				E.className = getClasses(C, y.cssClasses.marker), E.style[y.style] = _ + `%`, C > kr.NoValue && (E = addNodeTo(w, !1), E.className = getClasses(C, y.cssClasses.value), E.setAttribute(`data-value`, String(S)), E.style[y.style] = _ + `%`, E.innerHTML = String(x.to(S)));
			}
		}
		return Object.keys(_).forEach(function(y) {
			addSpread(y, _[y][0], _[y][1]);
		}), w;
	}
	function removePips() {
		k &&= (removeElement(k), null);
	}
	function pips(_) {
		removePips();
		var y = generateSpread(_), b = _.filter, x = _.format || { to: function(_) {
			return String(Math.round(_));
		} };
		return k = C.appendChild(addMarking(y, b, x)), k;
	}
	function baseSize() {
		var _ = w.getBoundingClientRect(), b = `offset` + [`Width`, `Height`][y.ort];
		return y.ort === 0 ? _.width || w[b] : _.height || w[b];
	}
	function attachEvent(_, b, w, E) {
		var method = function(D) {
			var O = fixEvent(D, E.pageOffset, E.target || b);
			if (!O || isSliderDisabled() && !E.doNotReject || hasClass(C, y.cssClasses.tap) && !E.doNotReject || _ === x.start && O.buttons !== void 0 && O.buttons > 1 || E.hover && O.buttons) return !1;
			S || O.preventDefault(), O.calcPoint = O.points[y.ort], w(O, E);
		}, D = [];
		return _.split(` `).forEach(function(_) {
			b.addEventListener(_, method, S ? { passive: !0 } : !1), D.push([_, method]);
		}), D;
	}
	function fixEvent(_, y, b) {
		var x = _.type.indexOf(`touch`) === 0, S = _.type.indexOf(`mouse`) === 0, C = _.type.indexOf(`pointer`) === 0, w = 0, E = 0;
		if (_.type.indexOf(`MSPointer`) === 0 && (C = !0), _.type === `mousedown` && !_.buttons && !_.touches) return !1;
		if (x) {
			var isTouchOnTarget = function(y) {
				var x = y.target;
				return x === b || b.contains(x) || _.composed && _.composedPath().shift() === b;
			};
			if (_.type === `touchstart`) {
				var D = Array.prototype.filter.call(_.touches, isTouchOnTarget);
				if (D.length > 1) return !1;
				w = D[0].pageX, E = D[0].pageY;
			} else {
				var O = Array.prototype.find.call(_.changedTouches, isTouchOnTarget);
				if (!O) return !1;
				w = O.pageX, E = O.pageY;
			}
		}
		return y ||= getPageOffset(z), (S || C) && (w = _.clientX + y.x, E = _.clientY + y.y), _.pageOffset = y, _.points = [w, E], _.cursor = S || C, _;
	}
	function calcPointToPercentage(_) {
		var b = (_ - offset$1(w, y.ort)) * 100 / baseSize();
		return b = limit(b), y.dir ? 100 - b : b;
	}
	function getClosestHandle(_) {
		var y = 100, b = !1;
		return D.forEach(function(x, S) {
			if (!isHandleDisabled(S)) {
				var C = P[S], w = Math.abs(C - _);
				(w < y || w <= y && _ > C || w === 100 && y === 100) && (b = S, y = w);
			}
		}), b;
	}
	function documentLeave(_, y) {
		_.type === `mouseout` && _.target.nodeName === `HTML` && _.relatedTarget === null && eventEnd(_, y);
	}
	function eventMove(_, b) {
		if (navigator.appVersion.indexOf(`MSIE 9`) === -1 && _.buttons === 0 && b.buttonsProperty !== 0) return eventEnd(_, b);
		var x = (y.dir ? -1 : 1) * (_.calcPoint - b.startCalcPoint), S = x * 100 / b.baseSize;
		moveHandles(x > 0, S, b.locations, b.handleNumbers, b.connect);
	}
	function eventEnd(_, b) {
		b.handle && (removeClass(b.handle, y.cssClasses.active), --I), b.listeners.forEach(function(_) {
			B.removeEventListener(_[0], _[1]);
		}), I === 0 && (removeClass(C, y.cssClasses.drag), setZindex(), _.cursor && (ee.style.cursor = ``, ee.removeEventListener(`selectstart`, preventDefault))), y.events.smoothSteps && (b.handleNumbers.forEach(function(_) {
			setHandle(_, P[_], !0, !0, !1, !1);
		}), b.handleNumbers.forEach(function(_) {
			fireEvent(`update`, _);
		})), b.handleNumbers.forEach(function(_) {
			fireEvent(`change`, _), fireEvent(`set`, _), fireEvent(`end`, _);
		});
	}
	function eventStart(_, b) {
		if (!b.handleNumbers.some(isHandleDisabled)) {
			var S;
			b.handleNumbers.length === 1 && (S = D[b.handleNumbers[0]].children[0], I += 1, addClass(S, y.cssClasses.active)), _.stopPropagation();
			var w = [], E = attachEvent(x.move, B, eventMove, {
				target: _.target,
				handle: S,
				connect: b.connect,
				listeners: w,
				startCalcPoint: _.calcPoint,
				baseSize: baseSize(),
				pageOffset: _.pageOffset,
				handleNumbers: b.handleNumbers,
				buttonsProperty: _.buttons,
				locations: P.slice()
			}), O = attachEvent(x.end, B, eventEnd, {
				target: _.target,
				handle: S,
				listeners: w,
				doNotReject: !0,
				handleNumbers: b.handleNumbers
			}), k = attachEvent(`mouseout`, B, documentLeave, {
				target: _.target,
				handle: S,
				listeners: w,
				doNotReject: !0,
				handleNumbers: b.handleNumbers
			});
			w.push.apply(w, E.concat(O, k)), _.cursor && (ee.style.cursor = getComputedStyle(_.target).cursor, D.length > 1 && addClass(C, y.cssClasses.drag), ee.addEventListener(`selectstart`, preventDefault, !1)), b.handleNumbers.forEach(function(_) {
				fireEvent(`start`, _);
			});
		}
	}
	function eventTap(_) {
		_.stopPropagation();
		var b = calcPointToPercentage(_.calcPoint), x = getClosestHandle(b);
		x !== !1 && (y.events.snap || addClassFor(C, y.cssClasses.tap, y.animationDuration), setHandle(x, b, !0, !0), setZindex(), fireEvent(`slide`, x, !0), fireEvent(`update`, x, !0), y.events.snap ? eventStart(_, { handleNumbers: [x] }) : (fireEvent(`change`, x, !0), fireEvent(`set`, x, !0)));
	}
	function eventHover(_) {
		var y = calcPointToPercentage(_.calcPoint), b = j.getStep(y), x = j.fromStepping(b);
		Object.keys(L).forEach(function(_) {
			_.split(`.`)[0] === `hover` && L[_].forEach(function(_) {
				_.call(ne, x);
			});
		});
	}
	function eventKeydown(_, b) {
		if (isSliderDisabled() || isHandleDisabled(b)) return !1;
		var x = [`Left`, `Right`], S = [`Down`, `Up`], C = [`PageDown`, `PageUp`], w = [`Home`, `End`];
		y.dir && !y.ort ? x.reverse() : y.ort && !y.dir && (S.reverse(), C.reverse());
		var E = _.key.replace(`Arrow`, ``), D = E === C[0], O = E === C[1], k = E === S[0] || E === x[0] || D, A = E === S[1] || E === x[1] || O, F = E === w[0], I = E === w[1];
		if (!k && !A && !F && !I) return !0;
		_.preventDefault();
		var L;
		if (A || k) {
			var R = +!k, z = getNextStepsForHandle(b)[R];
			if (z === null) return !1;
			z === !1 && (z = j.getDefaultStep(P[b], k, y.keyboardDefaultStep)), O || D ? z *= y.keyboardPageMultiplier : z *= y.keyboardMultiplier, z = Math.max(z, 1e-7), z = (k ? -1 : 1) * z, L = N[b] + z;
		} else L = I ? y.spectrum.xVal[y.spectrum.xVal.length - 1] : y.spectrum.xVal[0];
		return setHandle(b, j.toStepping(L), !0, !0), fireEvent(`slide`, b), fireEvent(`update`, b), fireEvent(`change`, b), fireEvent(`set`, b), !1;
	}
	function bindSliderEvents(_) {
		_.fixed || D.forEach(function(_, y) {
			attachEvent(x.start, _.children[0], eventStart, { handleNumbers: [y] });
		}), _.tap && attachEvent(x.start, w, eventTap, {}), _.hover && attachEvent(x.move, w, eventHover, { hover: !0 }), _.drag && O.forEach(function(b, S) {
			if (!(b === !1 || S === 0 || S === O.length - 1)) {
				var C = D[S - 1], w = D[S], E = [b], k = [C, w], A = [S - 1, S];
				addClass(b, y.cssClasses.draggable), _.fixed && (E.push(C.children[0]), E.push(w.children[0])), _.dragAll && (k = D, A = F), E.forEach(function(_) {
					attachEvent(x.start, _, eventStart, {
						handles: k,
						handleNumbers: A,
						connect: b
					});
				});
			}
		});
	}
	function bindEvent(_, y) {
		L[_] = L[_] || [], L[_].push(y), _.split(`.`)[0] === `update` && D.forEach(function(_, y) {
			fireEvent(`update`, y);
		});
	}
	function isInternalNamespace(_) {
		return _ === Nr.aria || _ === Nr.tooltips;
	}
	function removeEvent(_) {
		var y = _ && _.split(`.`)[0], b = y ? _.substring(y.length) : _;
		Object.keys(L).forEach(function(_) {
			var x = _.split(`.`)[0], S = _.substring(x.length);
			(!y || y === x) && (!b || b === S) && (!isInternalNamespace(S) || b === S) && delete L[_];
		});
	}
	function fireEvent(_, b, x) {
		Object.keys(L).forEach(function(S) {
			_ === S.split(`.`)[0] && L[S].forEach(function(_) {
				_.call(ne, N.map(y.format.to), b, N.slice(), x || !1, P.slice(), ne);
			});
		});
	}
	function checkHandlePosition(_, b, x, S, C, w, E) {
		var O;
		return D.length > 1 && !y.events.unconstrained && (S && b > 0 && (O = j.getAbsoluteDistance(_[b - 1], y.margin, !1), x = Math.max(x, O)), C && b < D.length - 1 && (O = j.getAbsoluteDistance(_[b + 1], y.margin, !0), x = Math.min(x, O))), D.length > 1 && y.limit && (S && b > 0 && (O = j.getAbsoluteDistance(_[b - 1], y.limit, !1), x = Math.min(x, O)), C && b < D.length - 1 && (O = j.getAbsoluteDistance(_[b + 1], y.limit, !0), x = Math.max(x, O))), y.padding && (b === 0 && (O = j.getAbsoluteDistance(0, y.padding[0], !1), x = Math.max(x, O)), b === D.length - 1 && (O = j.getAbsoluteDistance(100, y.padding[1], !0), x = Math.min(x, O))), E || (x = j.getStep(x)), x = limit(x), x === _[b] && !w ? !1 : x;
	}
	function inRuleOrder(_, b) {
		var x = y.ort;
		return (x ? b : _) + `, ` + (x ? _ : b);
	}
	function moveHandles(_, b, x, S, C) {
		var w = x.slice(), E = S[0], D = y.events.smoothSteps, O = [!_, _], k = [_, !_];
		S = S.slice(), _ && S.reverse(), S.length > 1 ? S.forEach(function(_, y) {
			var x = checkHandlePosition(w, _, w[_] + b, O[y], k[y], !1, D);
			x === !1 ? b = 0 : (b = x - w[_], w[_] = x);
		}) : O = k = [!0];
		var A = !1;
		S.forEach(function(_, y) {
			A = setHandle(_, x[_] + b, O[y], k[y], !1, D) || A;
		}), A && (S.forEach(function(_) {
			fireEvent(`update`, _), fireEvent(`slide`, _);
		}), C != null && fireEvent(`drag`, E));
	}
	function transformDirection(_, b) {
		return y.dir ? 100 - _ - b : _;
	}
	function updateHandlePosition(_, b) {
		P[_] = b, N[_] = j.fromStepping(b);
		var x = `translate(` + inRuleOrder(transformDirection(b, 0) - te + `%`, `0`) + `)`;
		if (D[_].style[y.transformRule] = x, y.events.invertConnects && P.length > 1) {
			var S = P.every(function(_, y, b) {
				return y === 0 || _ >= b[y - 1];
			});
			if (R !== !S) {
				invertConnects();
				return;
			}
		}
		updateConnect(_), updateConnect(_ + 1), R && (updateConnect(_ - 1), updateConnect(_ + 2));
	}
	function setZindex() {
		F.forEach(function(_) {
			var y = P[_] > 50 ? -1 : 1, b = 3 + (D.length + y * _);
			D[_].style.zIndex = String(b);
		});
	}
	function setHandle(_, y, b, x, S, C) {
		return S || (y = checkHandlePosition(P, _, y, b, x, !1, C)), y === !1 ? !1 : (updateHandlePosition(_, y), !0);
	}
	function updateConnect(_) {
		if (O[_]) {
			var b = P.slice();
			R && b.sort(function(_, y) {
				return _ - y;
			});
			var x = 0, S = 100;
			_ !== 0 && (x = b[_ - 1]), _ !== O.length - 1 && (S = b[_]);
			var C = S - x, w = `translate(` + inRuleOrder(transformDirection(x, C) + `%`, `0`) + `)`, E = `scale(` + inRuleOrder(C / 100, `1`) + `)`;
			O[_].style[y.transformRule] = w + ` ` + E;
		}
	}
	function resolveToValue(_, b) {
		return _ === null || _ === !1 || _ === void 0 || (typeof _ == `number` && (_ = String(_)), _ = y.format.from(_), _ !== !1 && (_ = j.toStepping(_)), _ === !1 || isNaN(_)) ? P[b] : _;
	}
	function valueSet(_, b, x) {
		var S = asArray$2(_), w = P[0] === void 0;
		b = b === void 0 || b, y.animate && !w && addClassFor(C, y.cssClasses.tap, y.animationDuration), F.forEach(function(_) {
			setHandle(_, resolveToValue(S[_], _), !0, !1, x);
		});
		var E = F.length === 1 ? 0 : 1;
		if (w && j.hasNoSize() && (x = !0, P[0] = 0, F.length > 1)) {
			var D = 100 / (F.length - 1);
			F.forEach(function(_) {
				P[_] = _ * D;
			});
		}
		for (; E < F.length; ++E) F.forEach(function(_) {
			setHandle(_, P[_], !0, !0, x);
		});
		setZindex(), F.forEach(function(_) {
			fireEvent(`update`, _), S[_] !== null && b && fireEvent(`set`, _);
		});
	}
	function valueReset(_) {
		valueSet(y.start, _);
	}
	function valueSetHandle(_, y, b, x) {
		if (_ = Number(_), !(_ >= 0 && _ < F.length)) throw Error(`noUiSlider: invalid handle number, got: ` + _);
		setHandle(_, resolveToValue(y, _), !0, !0, x), fireEvent(`update`, _), b && fireEvent(`set`, _);
	}
	function valueGet(_) {
		if (_ === void 0 && (_ = !1), _) return N.length === 1 ? N[0] : N.slice(0);
		var b = N.map(y.format.to);
		return b.length === 1 ? b[0] : b;
	}
	function destroy() {
		for (removeEvent(Nr.aria), removeEvent(Nr.tooltips), Object.keys(y.cssClasses).forEach(function(_) {
			removeClass(C, y.cssClasses[_]);
		}); C.firstChild;) C.removeChild(C.firstChild);
		delete C.noUiSlider;
	}
	function getNextStepsForHandle(_) {
		var b = P[_], x = j.getNearbySteps(b), S = N[_], C = x.thisStep.step, w = null;
		if (y.snap) return [S - x.stepBefore.startValue || null, x.stepAfter.startValue - S || null];
		C !== !1 && S + C > x.stepAfter.startValue && (C = x.stepAfter.startValue - S), w = S > x.thisStep.startValue ? x.thisStep.step : x.stepBefore.step !== !1 && S - x.stepBefore.highestStep, b === 100 ? C = null : b === 0 && (w = null);
		var E = j.countStepDecimals();
		return C !== null && C !== !1 && (C = Number(C.toFixed(E))), w !== null && w !== !1 && (w = Number(w.toFixed(E))), [w, C];
	}
	function getNextSteps() {
		return F.map(getNextStepsForHandle);
	}
	function updateOptions(_, x) {
		var S = valueGet(), C = [
			`margin`,
			`limit`,
			`padding`,
			`range`,
			`animate`,
			`snap`,
			`step`,
			`format`,
			`pips`,
			`tooltips`,
			`connect`
		];
		C.forEach(function(y) {
			_[y] !== void 0 && (b[y] = _[y]);
		});
		var w = testOptions(b);
		C.forEach(function(b) {
			_[b] !== void 0 && (y[b] = w[b]);
		}), j = w.spectrum, y.margin = w.margin, y.limit = w.limit, y.padding = w.padding, y.pips ? pips(y.pips) : removePips(), y.tooltips ? tooltips() : removeTooltips(), P = [], valueSet(isSet(_.start) ? _.start : S, x), _.connect && updateConnectOption();
	}
	function updateConnectOption() {
		for (; E.firstChild;) E.removeChild(E.firstChild);
		for (var _ = 0; _ <= y.handles; _++) O[_] = addConnect(E, y.connect[_]), updateConnect(_);
		bindSliderEvents({
			drag: y.events.drag,
			fixed: !0
		});
	}
	function invertConnects() {
		R = !R, testConnect(y, y.connect.map(function(_) {
			return !_;
		})), updateConnectOption();
	}
	function setupSlider() {
		w = addSlider(C), addElements(y.connect, w), bindSliderEvents(y.events), valueSet(y.start), y.pips && pips(y.pips), y.tooltips && tooltips(), aria();
	}
	setupSlider();
	var ne = {
		destroy,
		steps: getNextSteps,
		on: bindEvent,
		off: removeEvent,
		get: valueGet,
		set: valueSet,
		setHandle: valueSetHandle,
		reset: valueReset,
		disable,
		enable,
		__moveHandles: function(_, y, b) {
			moveHandles(_, y, P, b);
		},
		options: b,
		updateOptions,
		target: C,
		removePips,
		removeTooltips,
		getPositions: function() {
			return P.slice();
		},
		getTooltips: function() {
			return A;
		},
		getOrigins: function() {
			return D;
		},
		pips
	};
	return ne;
}
function initialize(_, y) {
	if (!_ || !_.nodeName) throw Error(`noUiSlider: create requires a single element, got: ` + _);
	if (_.noUiSlider) throw Error(`noUiSlider: Slider was already initialized.`);
	var b = scope(_, testOptions(y), y);
	return _.noUiSlider = b, b;
}
var Pr = {
	__spectrum: Ar,
	cssClasses: Mr,
	create: initialize
}, LuxonError = class extends Error {}, InvalidDateTimeError = class extends LuxonError {
	constructor(_) {
		super(`Invalid DateTime: ${_.toMessage()}`);
	}
}, InvalidIntervalError = class extends LuxonError {
	constructor(_) {
		super(`Invalid Interval: ${_.toMessage()}`);
	}
}, InvalidDurationError = class extends LuxonError {
	constructor(_) {
		super(`Invalid Duration: ${_.toMessage()}`);
	}
}, ConflictingSpecificationError = class extends LuxonError {}, InvalidUnitError = class extends LuxonError {
	constructor(_) {
		super(`Invalid unit ${_}`);
	}
}, InvalidArgumentError = class extends LuxonError {}, ZoneIsAbstractError = class extends LuxonError {
	constructor() {
		super(`Zone is an abstract class`);
	}
}, q = `numeric`, Fr = `short`, Ir = `long`, Lr = {
	year: q,
	month: q,
	day: q
}, Rr = {
	year: q,
	month: Fr,
	day: q
}, zr = {
	year: q,
	month: Fr,
	day: q,
	weekday: Fr
}, Br = {
	year: q,
	month: Ir,
	day: q
}, Vr = {
	year: q,
	month: Ir,
	day: q,
	weekday: Ir
}, Hr = {
	hour: q,
	minute: q
}, Ur = {
	hour: q,
	minute: q,
	second: q
}, Wr = {
	hour: q,
	minute: q,
	second: q,
	timeZoneName: Fr
}, Gr = {
	hour: q,
	minute: q,
	second: q,
	timeZoneName: Ir
}, Kr = {
	hour: q,
	minute: q,
	hourCycle: `h23`
}, qr = {
	hour: q,
	minute: q,
	second: q,
	hourCycle: `h23`
}, Jr = {
	hour: q,
	minute: q,
	second: q,
	hourCycle: `h23`,
	timeZoneName: Fr
}, Yr = {
	hour: q,
	minute: q,
	second: q,
	hourCycle: `h23`,
	timeZoneName: Ir
}, Xr = {
	year: q,
	month: q,
	day: q,
	hour: q,
	minute: q
}, Zr = {
	year: q,
	month: q,
	day: q,
	hour: q,
	minute: q,
	second: q
}, Qr = {
	year: q,
	month: Fr,
	day: q,
	hour: q,
	minute: q
}, $r = {
	year: q,
	month: Fr,
	day: q,
	hour: q,
	minute: q,
	second: q
}, ei = {
	year: q,
	month: Fr,
	day: q,
	weekday: Fr,
	hour: q,
	minute: q
}, ti = {
	year: q,
	month: Ir,
	day: q,
	hour: q,
	minute: q,
	timeZoneName: Fr
}, ni = {
	year: q,
	month: Ir,
	day: q,
	hour: q,
	minute: q,
	second: q,
	timeZoneName: Fr
}, ri = {
	year: q,
	month: Ir,
	day: q,
	weekday: Ir,
	hour: q,
	minute: q,
	timeZoneName: Ir
}, ii = {
	year: q,
	month: Ir,
	day: q,
	weekday: Ir,
	hour: q,
	minute: q,
	second: q,
	timeZoneName: Ir
}, Zone = class {
	get type() {
		throw new ZoneIsAbstractError();
	}
	get name() {
		throw new ZoneIsAbstractError();
	}
	get ianaName() {
		return this.name;
	}
	get isUniversal() {
		throw new ZoneIsAbstractError();
	}
	offsetName(_, y) {
		throw new ZoneIsAbstractError();
	}
	formatOffset(_, y) {
		throw new ZoneIsAbstractError();
	}
	offset(_) {
		throw new ZoneIsAbstractError();
	}
	equals(_) {
		throw new ZoneIsAbstractError();
	}
	get isValid() {
		throw new ZoneIsAbstractError();
	}
}, ai = null, oi = class SystemZone extends Zone {
	static get instance() {
		return ai === null && (ai = new SystemZone()), ai;
	}
	get type() {
		return `system`;
	}
	get name() {
		return new Intl.DateTimeFormat().resolvedOptions().timeZone;
	}
	get isUniversal() {
		return !1;
	}
	offsetName(_, { format: y, locale: b }) {
		return parseZoneInfo(_, y, b);
	}
	formatOffset(_, y) {
		return formatOffset(this.offset(_), y);
	}
	offset(_) {
		return -new Date(_).getTimezoneOffset();
	}
	equals(_) {
		return _.type === `system`;
	}
	get isValid() {
		return !0;
	}
}, si = /* @__PURE__ */ new Map();
function makeDTF(_) {
	let y = si.get(_);
	return y === void 0 && (y = new Intl.DateTimeFormat(`en-US`, {
		hour12: !1,
		timeZone: _,
		year: `numeric`,
		month: `2-digit`,
		day: `2-digit`,
		hour: `2-digit`,
		minute: `2-digit`,
		second: `2-digit`,
		era: `short`
	}), si.set(_, y)), y;
}
var ci = {
	year: 0,
	month: 1,
	day: 2,
	era: 3,
	hour: 4,
	minute: 5,
	second: 6
};
function hackyOffset(_, y) {
	let b = _.format(y).replace(/\u200E/g, ``), [, x, S, C, w, E, D, O] = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(b);
	return [
		C,
		x,
		S,
		w,
		E,
		D,
		O
	];
}
function partsOffset(_, y) {
	let b = _.formatToParts(y), x = [];
	for (let _ = 0; _ < b.length; _++) {
		let { type: y, value: S } = b[_], C = ci[y];
		y === `era` ? x[C] = S : isUndefined(C) || (x[C] = parseInt(S, 10));
	}
	return x;
}
var li = /* @__PURE__ */ new Map(), ui = class IANAZone extends Zone {
	static create(_) {
		let y = li.get(_);
		return y === void 0 && li.set(_, y = new IANAZone(_)), y;
	}
	static resetCache() {
		li.clear(), si.clear();
	}
	static isValidSpecifier(_) {
		return this.isValidZone(_);
	}
	static isValidZone(_) {
		if (!_) return !1;
		try {
			return new Intl.DateTimeFormat(`en-US`, { timeZone: _ }).format(), !0;
		} catch {
			return !1;
		}
	}
	constructor(_) {
		super(), this.zoneName = _, this.valid = IANAZone.isValidZone(_);
	}
	get type() {
		return `iana`;
	}
	get name() {
		return this.zoneName;
	}
	get isUniversal() {
		return !1;
	}
	offsetName(_, { format: y, locale: b }) {
		return parseZoneInfo(_, y, b, this.name);
	}
	formatOffset(_, y) {
		return formatOffset(this.offset(_), y);
	}
	offset(_) {
		if (!this.valid) return NaN;
		let y = new Date(_);
		if (isNaN(y)) return NaN;
		let b = makeDTF(this.name), [x, S, C, w, E, D, O] = b.formatToParts ? partsOffset(b, y) : hackyOffset(b, y);
		w === `BC` && (x = -Math.abs(x) + 1);
		let k = objToLocalTS({
			year: x,
			month: S,
			day: C,
			hour: E === 24 ? 0 : E,
			minute: D,
			second: O,
			millisecond: 0
		}), A = +y, j = A % 1e3;
		return A -= j >= 0 ? j : 1e3 + j, (k - A) / (60 * 1e3);
	}
	equals(_) {
		return _.type === `iana` && _.name === this.name;
	}
	get isValid() {
		return this.valid;
	}
}, di = {};
function getCachedLF(_, y = {}) {
	let b = JSON.stringify([_, y]), x = di[b];
	return x || (x = new Intl.ListFormat(_, y), di[b] = x), x;
}
var fi = /* @__PURE__ */ new Map();
function getCachedDTF(_, y = {}) {
	let b = JSON.stringify([_, y]), x = fi.get(b);
	return x === void 0 && (x = new Intl.DateTimeFormat(_, y), fi.set(b, x)), x;
}
var pi = /* @__PURE__ */ new Map();
function getCachedINF(_, y = {}) {
	let b = JSON.stringify([_, y]), x = pi.get(b);
	return x === void 0 && (x = new Intl.NumberFormat(_, y), pi.set(b, x)), x;
}
var mi = /* @__PURE__ */ new Map();
function getCachedRTF(_, y = {}) {
	let { base: b, ...x } = y, S = JSON.stringify([_, x]), C = mi.get(S);
	return C === void 0 && (C = new Intl.RelativeTimeFormat(_, y), mi.set(S, C)), C;
}
var hi = null;
function systemLocale() {
	return hi || (hi = new Intl.DateTimeFormat().resolvedOptions().locale, hi);
}
var gi = /* @__PURE__ */ new Map();
function getCachedIntResolvedOptions(_) {
	let y = gi.get(_);
	return y === void 0 && (y = new Intl.DateTimeFormat(_).resolvedOptions(), gi.set(_, y)), y;
}
var _i = /* @__PURE__ */ new Map();
function getCachedWeekInfo(_) {
	let y = _i.get(_);
	if (!y) {
		let b = new Intl.Locale(_);
		y = `getWeekInfo` in b ? b.getWeekInfo() : b.weekInfo, `minimalDays` in y || (y = {
			...vi,
			...y
		}), _i.set(_, y);
	}
	return y;
}
function parseLocaleString(_) {
	let y = _.indexOf(`-x-`);
	y !== -1 && (_ = _.substring(0, y));
	let b = _.indexOf(`-u-`);
	if (b === -1) return [_];
	{
		let y, x;
		try {
			y = getCachedDTF(_).resolvedOptions(), x = _;
		} catch {
			let S = _.substring(0, b);
			y = getCachedDTF(S).resolvedOptions(), x = S;
		}
		let { numberingSystem: S, calendar: C } = y;
		return [
			x,
			S,
			C
		];
	}
}
function intlConfigString(_, y, b) {
	return b || y ? (_.includes(`-u-`) || (_ += `-u`), b && (_ += `-ca-${b}`), y && (_ += `-nu-${y}`), _) : _;
}
function mapMonths(_) {
	let y = [];
	for (let b = 1; b <= 12; b++) {
		let x = Qa.utc(2009, b, 1);
		y.push(_(x));
	}
	return y;
}
function mapWeekdays(_) {
	let y = [];
	for (let b = 1; b <= 7; b++) {
		let x = Qa.utc(2016, 11, 13 + b);
		y.push(_(x));
	}
	return y;
}
function listStuff(_, y, b, x) {
	let S = _.listingMode();
	return S === `error` ? null : S === `en` ? b(y) : x(y);
}
function supportsFastNumbers(_) {
	return _.numberingSystem && _.numberingSystem !== `latn` ? !1 : _.numberingSystem === `latn` || !_.locale || _.locale.startsWith(`en`) || getCachedIntResolvedOptions(_.locale).numberingSystem === `latn`;
}
var PolyNumberFormatter = class {
	constructor(_, y, b) {
		this.padTo = b.padTo || 0, this.floor = b.floor || !1;
		let { padTo: x, floor: S, ...C } = b;
		if (!y || Object.keys(C).length > 0) {
			let y = {
				useGrouping: !1,
				...b
			};
			b.padTo > 0 && (y.minimumIntegerDigits = b.padTo), this.inf = getCachedINF(_, y);
		}
	}
	format(_) {
		if (this.inf) {
			let y = this.floor ? Math.floor(_) : _;
			return this.inf.format(y);
		} else return padStart(this.floor ? Math.floor(_) : roundTo(_, 3), this.padTo);
	}
}, PolyDateFormatter = class {
	constructor(_, y, b) {
		this.opts = b, this.originalZone = void 0;
		let x;
		if (this.opts.timeZone) this.dt = _;
		else if (_.zone.type === `fixed`) {
			let y = -1 * (_.offset / 60), b = y >= 0 ? `Etc/GMT+${y}` : `Etc/GMT${y}`;
			_.offset !== 0 && ui.create(b).valid ? (x = b, this.dt = _) : (x = `UTC`, this.dt = _.offset === 0 ? _ : _.setZone(`UTC`).plus({ minutes: _.offset }), this.originalZone = _.zone);
		} else _.zone.type === `system` ? this.dt = _ : _.zone.type === `iana` ? (this.dt = _, x = _.zone.name) : (x = `UTC`, this.dt = _.setZone(`UTC`).plus({ minutes: _.offset }), this.originalZone = _.zone);
		let S = { ...this.opts };
		S.timeZone = S.timeZone || x, this.dtf = getCachedDTF(y, S);
	}
	format() {
		return this.originalZone ? this.formatToParts().map(({ value: _ }) => _).join(``) : this.dtf.format(this.dt.toJSDate());
	}
	formatToParts() {
		let _ = this.dtf.formatToParts(this.dt.toJSDate());
		return this.originalZone ? _.map((_) => {
			if (_.type === `timeZoneName`) {
				let y = this.originalZone.offsetName(this.dt.ts, {
					locale: this.dt.locale,
					format: this.opts.timeZoneName
				});
				return {
					..._,
					value: y
				};
			} else return _;
		}) : _;
	}
	resolvedOptions() {
		return this.dtf.resolvedOptions();
	}
}, PolyRelFormatter = class {
	constructor(_, y, b) {
		this.opts = {
			style: `long`,
			...b
		}, !y && hasRelative() && (this.rtf = getCachedRTF(_, b));
	}
	format(_, y) {
		return this.rtf ? this.rtf.format(_, y) : formatRelativeTime(y, _, this.opts.numeric, this.opts.style !== `long`);
	}
	formatToParts(_, y) {
		return this.rtf ? this.rtf.formatToParts(_, y) : [];
	}
}, vi = {
	firstDay: 1,
	minimalDays: 4,
	weekend: [6, 7]
}, yi = class Locale {
	static fromOpts(_) {
		return Locale.create(_.locale, _.numberingSystem, _.outputCalendar, _.weekSettings, _.defaultToEN);
	}
	static create(_, y, b, x, S = !1) {
		let C = _ || Settings.defaultLocale, w = C || (S ? `en-US` : systemLocale()), E = y || Settings.defaultNumberingSystem, D = b || Settings.defaultOutputCalendar, O = validateWeekSettings(x) || Settings.defaultWeekSettings;
		return new Locale(w, E, D, O, C);
	}
	static resetCache() {
		hi = null, fi.clear(), pi.clear(), mi.clear(), gi.clear(), _i.clear();
	}
	static fromObject({ locale: _, numberingSystem: y, outputCalendar: b, weekSettings: x } = {}) {
		return Locale.create(_, y, b, x);
	}
	constructor(_, y, b, x, S) {
		let [C, w, E] = parseLocaleString(_);
		this.locale = C, this.numberingSystem = y || w || null, this.outputCalendar = b || E || null, this.weekSettings = x, this.intl = intlConfigString(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = {
			format: {},
			standalone: {}
		}, this.monthsCache = {
			format: {},
			standalone: {}
		}, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = S, this.fastNumbersCached = null;
	}
	get fastNumbers() {
		return this.fastNumbersCached ??= supportsFastNumbers(this), this.fastNumbersCached;
	}
	listingMode() {
		let _ = this.isEnglish(), y = (this.numberingSystem === null || this.numberingSystem === `latn`) && (this.outputCalendar === null || this.outputCalendar === `gregory`);
		return _ && y ? `en` : `intl`;
	}
	clone(_) {
		return !_ || Object.getOwnPropertyNames(_).length === 0 ? this : Locale.create(_.locale || this.specifiedLocale, _.numberingSystem || this.numberingSystem, _.outputCalendar || this.outputCalendar, validateWeekSettings(_.weekSettings) || this.weekSettings, _.defaultToEN || !1);
	}
	redefaultToEN(_ = {}) {
		return this.clone({
			..._,
			defaultToEN: !0
		});
	}
	redefaultToSystem(_ = {}) {
		return this.clone({
			..._,
			defaultToEN: !1
		});
	}
	months(_, y = !1) {
		return listStuff(this, _, months, () => {
			let b = this.intl === `ja` || this.intl.startsWith(`ja-`);
			y &= !b;
			let x = y ? {
				month: _,
				day: `numeric`
			} : { month: _ }, S = y ? `format` : `standalone`;
			if (!this.monthsCache[S][_]) {
				let y = b ? (_) => this.dtFormatter(_, x).format() : (_) => this.extract(_, x, `month`);
				this.monthsCache[S][_] = mapMonths(y);
			}
			return this.monthsCache[S][_];
		});
	}
	weekdays(_, y = !1) {
		return listStuff(this, _, weekdays, () => {
			let b = y ? {
				weekday: _,
				year: `numeric`,
				month: `long`,
				day: `numeric`
			} : { weekday: _ }, x = y ? `format` : `standalone`;
			return this.weekdaysCache[x][_] || (this.weekdaysCache[x][_] = mapWeekdays((_) => this.extract(_, b, `weekday`))), this.weekdaysCache[x][_];
		});
	}
	meridiems() {
		return listStuff(this, void 0, () => Vi, () => {
			if (!this.meridiemCache) {
				let _ = {
					hour: `numeric`,
					hourCycle: `h12`
				};
				this.meridiemCache = [Qa.utc(2016, 11, 13, 9), Qa.utc(2016, 11, 13, 19)].map((y) => this.extract(y, _, `dayperiod`));
			}
			return this.meridiemCache;
		});
	}
	eras(_) {
		return listStuff(this, _, eras, () => {
			let y = { era: _ };
			return this.eraCache[_] || (this.eraCache[_] = [Qa.utc(-40, 1, 1), Qa.utc(2017, 1, 1)].map((_) => this.extract(_, y, `era`))), this.eraCache[_];
		});
	}
	extract(_, y, b) {
		let x = this.dtFormatter(_, y).formatToParts().find((_) => _.type.toLowerCase() === b);
		return x ? x.value : null;
	}
	numberFormatter(_ = {}) {
		return new PolyNumberFormatter(this.intl, _.forceSimple || this.fastNumbers, _);
	}
	dtFormatter(_, y = {}) {
		return new PolyDateFormatter(_, this.intl, y);
	}
	relFormatter(_ = {}) {
		return new PolyRelFormatter(this.intl, this.isEnglish(), _);
	}
	listFormatter(_ = {}) {
		return getCachedLF(this.intl, _);
	}
	isEnglish() {
		return this.locale === `en` || this.locale.toLowerCase() === `en-us` || getCachedIntResolvedOptions(this.intl).locale.startsWith(`en-us`);
	}
	getWeekSettings() {
		return this.weekSettings ? this.weekSettings : hasLocaleWeekInfo() ? getCachedWeekInfo(this.locale) : vi;
	}
	getStartOfWeek() {
		return this.getWeekSettings().firstDay;
	}
	getMinDaysInFirstWeek() {
		return this.getWeekSettings().minimalDays;
	}
	getWeekendDays() {
		return this.getWeekSettings().weekend;
	}
	equals(_) {
		return this.locale === _.locale && this.numberingSystem === _.numberingSystem && this.outputCalendar === _.outputCalendar;
	}
	toString() {
		return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
	}
}, bi = null, xi = class FixedOffsetZone extends Zone {
	static get utcInstance() {
		return bi === null && (bi = new FixedOffsetZone(0)), bi;
	}
	static instance(_) {
		return _ === 0 ? FixedOffsetZone.utcInstance : new FixedOffsetZone(_);
	}
	static parseSpecifier(_) {
		if (_) {
			let y = _.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
			if (y) return new FixedOffsetZone(signedOffset(y[1], y[2]));
		}
		return null;
	}
	constructor(_) {
		super(), this.fixed = _;
	}
	get type() {
		return `fixed`;
	}
	get name() {
		return this.fixed === 0 ? `UTC` : `UTC${formatOffset(this.fixed, `narrow`)}`;
	}
	get ianaName() {
		return this.fixed === 0 ? `Etc/UTC` : `Etc/GMT${formatOffset(-this.fixed, `narrow`)}`;
	}
	offsetName() {
		return this.name;
	}
	formatOffset(_, y) {
		return formatOffset(this.fixed, y);
	}
	get isUniversal() {
		return !0;
	}
	offset() {
		return this.fixed;
	}
	equals(_) {
		return _.type === `fixed` && _.fixed === this.fixed;
	}
	get isValid() {
		return !0;
	}
}, InvalidZone = class extends Zone {
	constructor(_) {
		super(), this.zoneName = _;
	}
	get type() {
		return `invalid`;
	}
	get name() {
		return this.zoneName;
	}
	get isUniversal() {
		return !1;
	}
	offsetName() {
		return null;
	}
	formatOffset() {
		return ``;
	}
	offset() {
		return NaN;
	}
	equals() {
		return !1;
	}
	get isValid() {
		return !1;
	}
};
function normalizeZone(_, y) {
	if (isUndefined(_) || _ === null) return y;
	if (_ instanceof Zone) return _;
	if (isString(_)) {
		let b = _.toLowerCase();
		return b === "default" ? y : b === `local` || b === `system` ? oi.instance : b === `utc` || b === `gmt` ? xi.utcInstance : xi.parseSpecifier(b) || ui.create(_);
	} else if (isNumber(_)) return xi.instance(_);
	else if (typeof _ == `object` && `offset` in _ && typeof _.offset == `function`) return _;
	else return new InvalidZone(_);
}
var Si = {
	arab: `[٠-٩]`,
	arabext: `[۰-۹]`,
	bali: `[᭐-᭙]`,
	beng: `[০-৯]`,
	deva: `[०-९]`,
	fullwide: `[０-９]`,
	gujr: `[૦-૯]`,
	hanidec: `[〇|一|二|三|四|五|六|七|八|九]`,
	khmr: `[០-៩]`,
	knda: `[೦-೯]`,
	laoo: `[໐-໙]`,
	limb: `[᥆-᥏]`,
	mlym: `[൦-൯]`,
	mong: `[᠐-᠙]`,
	mymr: `[၀-၉]`,
	orya: `[୦-୯]`,
	tamldec: `[௦-௯]`,
	telu: `[౦-౯]`,
	thai: `[๐-๙]`,
	tibt: `[༠-༩]`,
	latn: `\\d`
}, Ci = {
	arab: [1632, 1641],
	arabext: [1776, 1785],
	bali: [6992, 7001],
	beng: [2534, 2543],
	deva: [2406, 2415],
	fullwide: [65296, 65303],
	gujr: [2790, 2799],
	khmr: [6112, 6121],
	knda: [3302, 3311],
	laoo: [3792, 3801],
	limb: [6470, 6479],
	mlym: [3430, 3439],
	mong: [6160, 6169],
	mymr: [4160, 4169],
	orya: [2918, 2927],
	tamldec: [3046, 3055],
	telu: [3174, 3183],
	thai: [3664, 3673],
	tibt: [3872, 3881]
}, wi = Si.hanidec.replace(/[\[|\]]/g, ``).split(``);
function parseDigits(_) {
	let y = parseInt(_, 10);
	if (isNaN(y)) {
		y = ``;
		for (let b = 0; b < _.length; b++) {
			let x = _.charCodeAt(b);
			if (_[b].search(Si.hanidec) !== -1) y += wi.indexOf(_[b]);
			else for (let _ in Ci) {
				let [b, S] = Ci[_];
				x >= b && x <= S && (y += x - b);
			}
		}
		return parseInt(y, 10);
	} else return y;
}
var Ti = /* @__PURE__ */ new Map();
function resetDigitRegexCache() {
	Ti.clear();
}
function digitRegex({ numberingSystem: _ }, y = ``) {
	let b = _ || `latn`, x = Ti.get(b);
	x === void 0 && (x = /* @__PURE__ */ new Map(), Ti.set(b, x));
	let S = x.get(y);
	return S === void 0 && (S = RegExp(`${Si[b]}${y}`), x.set(y, S)), S;
}
var now = () => Date.now(), Ei = `system`, Di = null, Oi = null, ki = null, Ai = 60, ji, Mi = null, Settings = class {
	static get now() {
		return now;
	}
	static set now(_) {
		now = _;
	}
	static set defaultZone(_) {
		Ei = _;
	}
	static get defaultZone() {
		return normalizeZone(Ei, oi.instance);
	}
	static get defaultLocale() {
		return Di;
	}
	static set defaultLocale(_) {
		Di = _;
	}
	static get defaultNumberingSystem() {
		return Oi;
	}
	static set defaultNumberingSystem(_) {
		Oi = _;
	}
	static get defaultOutputCalendar() {
		return ki;
	}
	static set defaultOutputCalendar(_) {
		ki = _;
	}
	static get defaultWeekSettings() {
		return Mi;
	}
	static set defaultWeekSettings(_) {
		Mi = validateWeekSettings(_);
	}
	static get twoDigitCutoffYear() {
		return Ai;
	}
	static set twoDigitCutoffYear(_) {
		Ai = _ % 100;
	}
	static get throwOnInvalid() {
		return ji;
	}
	static set throwOnInvalid(_) {
		ji = _;
	}
	static resetCaches() {
		yi.resetCache(), ui.resetCache(), Qa.resetCache(), resetDigitRegexCache();
	}
}, Invalid = class {
	constructor(_, y) {
		this.reason = _, this.explanation = y;
	}
	toMessage() {
		return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
	}
}, Ni = [
	0,
	31,
	59,
	90,
	120,
	151,
	181,
	212,
	243,
	273,
	304,
	334
], Pi = [
	0,
	31,
	60,
	91,
	121,
	152,
	182,
	213,
	244,
	274,
	305,
	335
];
function unitOutOfRange(_, y) {
	return new Invalid(`unit out of range`, `you specified ${y} (of type ${typeof y}) as a ${_}, which is invalid`);
}
function dayOfWeek(_, y, b) {
	let x = new Date(Date.UTC(_, y - 1, b));
	_ < 100 && _ >= 0 && x.setUTCFullYear(x.getUTCFullYear() - 1900);
	let S = x.getUTCDay();
	return S === 0 ? 7 : S;
}
function computeOrdinal(_, y, b) {
	return b + (isLeapYear(_) ? Pi : Ni)[y - 1];
}
function uncomputeOrdinal(_, y) {
	let b = isLeapYear(_) ? Pi : Ni, x = b.findIndex((_) => _ < y), S = y - b[x];
	return {
		month: x + 1,
		day: S
	};
}
function isoWeekdayToLocal(_, y) {
	return (_ - y + 7) % 7 + 1;
}
function gregorianToWeek(_, y = 4, b = 1) {
	let { year: x, month: S, day: C } = _, w = computeOrdinal(x, S, C), E = isoWeekdayToLocal(dayOfWeek(x, S, C), b), D = Math.floor((w - E + 14 - y) / 7), O;
	return D < 1 ? (O = x - 1, D = weeksInWeekYear(O, y, b)) : D > weeksInWeekYear(x, y, b) ? (O = x + 1, D = 1) : O = x, {
		weekYear: O,
		weekNumber: D,
		weekday: E,
		...timeObject(_)
	};
}
function weekToGregorian(_, y = 4, b = 1) {
	let { weekYear: x, weekNumber: S, weekday: C } = _, w = isoWeekdayToLocal(dayOfWeek(x, 1, y), b), E = daysInYear(x), D = S * 7 + C - w - 7 + y, O;
	D < 1 ? (O = x - 1, D += daysInYear(O)) : D > E ? (O = x + 1, D -= daysInYear(x)) : O = x;
	let { month: k, day: A } = uncomputeOrdinal(O, D);
	return {
		year: O,
		month: k,
		day: A,
		...timeObject(_)
	};
}
function gregorianToOrdinal(_) {
	let { year: y, month: b, day: x } = _;
	return {
		year: y,
		ordinal: computeOrdinal(y, b, x),
		...timeObject(_)
	};
}
function ordinalToGregorian(_) {
	let { year: y, ordinal: b } = _, { month: x, day: S } = uncomputeOrdinal(y, b);
	return {
		year: y,
		month: x,
		day: S,
		...timeObject(_)
	};
}
function usesLocalWeekValues(_, y) {
	if (!isUndefined(_.localWeekday) || !isUndefined(_.localWeekNumber) || !isUndefined(_.localWeekYear)) {
		if (!isUndefined(_.weekday) || !isUndefined(_.weekNumber) || !isUndefined(_.weekYear)) throw new ConflictingSpecificationError(`Cannot mix locale-based week fields with ISO-based week fields`);
		return isUndefined(_.localWeekday) || (_.weekday = _.localWeekday), isUndefined(_.localWeekNumber) || (_.weekNumber = _.localWeekNumber), isUndefined(_.localWeekYear) || (_.weekYear = _.localWeekYear), delete _.localWeekday, delete _.localWeekNumber, delete _.localWeekYear, {
			minDaysInFirstWeek: y.getMinDaysInFirstWeek(),
			startOfWeek: y.getStartOfWeek()
		};
	} else return {
		minDaysInFirstWeek: 4,
		startOfWeek: 1
	};
}
function hasInvalidWeekData(_, y = 4, b = 1) {
	let x = isInteger(_.weekYear), S = integerBetween(_.weekNumber, 1, weeksInWeekYear(_.weekYear, y, b)), C = integerBetween(_.weekday, 1, 7);
	return x ? S ? !C && unitOutOfRange(`weekday`, _.weekday) : unitOutOfRange(`week`, _.weekNumber) : unitOutOfRange(`weekYear`, _.weekYear);
}
function hasInvalidOrdinalData(_) {
	let y = isInteger(_.year), b = integerBetween(_.ordinal, 1, daysInYear(_.year));
	return y ? !b && unitOutOfRange(`ordinal`, _.ordinal) : unitOutOfRange(`year`, _.year);
}
function hasInvalidGregorianData(_) {
	let y = isInteger(_.year), b = integerBetween(_.month, 1, 12), x = integerBetween(_.day, 1, daysInMonth(_.year, _.month));
	return y ? b ? !x && unitOutOfRange(`day`, _.day) : unitOutOfRange(`month`, _.month) : unitOutOfRange(`year`, _.year);
}
function hasInvalidTimeData(_) {
	let { hour: y, minute: b, second: x, millisecond: S } = _, C = integerBetween(y, 0, 23) || y === 24 && b === 0 && x === 0 && S === 0, w = integerBetween(b, 0, 59), E = integerBetween(x, 0, 59), D = integerBetween(S, 0, 999);
	return C ? w ? E ? !D && unitOutOfRange(`millisecond`, S) : unitOutOfRange(`second`, x) : unitOutOfRange(`minute`, b) : unitOutOfRange(`hour`, y);
}
function isUndefined(_) {
	return _ === void 0;
}
function isNumber(_) {
	return typeof _ == `number`;
}
function isInteger(_) {
	return typeof _ == `number` && _ % 1 == 0;
}
function isString(_) {
	return typeof _ == `string`;
}
function isDate(_) {
	return Object.prototype.toString.call(_) === `[object Date]`;
}
function hasRelative() {
	try {
		return typeof Intl < `u` && !!Intl.RelativeTimeFormat;
	} catch {
		return !1;
	}
}
function hasLocaleWeekInfo() {
	try {
		return typeof Intl < `u` && !!Intl.Locale && (`weekInfo` in Intl.Locale.prototype || `getWeekInfo` in Intl.Locale.prototype);
	} catch {
		return !1;
	}
}
function maybeArray(_) {
	return Array.isArray(_) ? _ : [_];
}
function bestBy(_, y, b) {
	if (_.length !== 0) return _.reduce((_, x) => {
		let S = [y(x), x];
		return _ && b(_[0], S[0]) === _[0] ? _ : S;
	}, null)[1];
}
function pick(_, y) {
	return y.reduce((y, b) => (y[b] = _[b], y), {});
}
function hasOwnProperty(_, y) {
	return Object.prototype.hasOwnProperty.call(_, y);
}
function validateWeekSettings(_) {
	if (_ == null) return null;
	if (typeof _ != `object`) throw new InvalidArgumentError(`Week settings must be an object`);
	if (!integerBetween(_.firstDay, 1, 7) || !integerBetween(_.minimalDays, 1, 7) || !Array.isArray(_.weekend) || _.weekend.some((_) => !integerBetween(_, 1, 7))) throw new InvalidArgumentError(`Invalid week settings`);
	return {
		firstDay: _.firstDay,
		minimalDays: _.minimalDays,
		weekend: Array.from(_.weekend)
	};
}
function integerBetween(_, y, b) {
	return isInteger(_) && _ >= y && _ <= b;
}
function floorMod(_, y) {
	return _ - y * Math.floor(_ / y);
}
function padStart(_, y = 2) {
	let b = _ < 0, x;
	return x = b ? `-` + (`` + -_).padStart(y, `0`) : (`` + _).padStart(y, `0`), x;
}
function parseInteger(_) {
	if (!(isUndefined(_) || _ === null || _ === ``)) return parseInt(_, 10);
}
function parseFloating(_) {
	if (!(isUndefined(_) || _ === null || _ === ``)) return parseFloat(_);
}
function parseMillis(_) {
	if (!(isUndefined(_) || _ === null || _ === ``)) {
		let y = parseFloat(`0.` + _) * 1e3;
		return Math.floor(y);
	}
}
function roundTo(_, y, b = `round`) {
	let x = 10 ** y;
	switch (b) {
		case `expand`: return _ > 0 ? Math.ceil(_ * x) / x : Math.floor(_ * x) / x;
		case `trunc`: return Math.trunc(_ * x) / x;
		case `round`: return Math.round(_ * x) / x;
		case `floor`: return Math.floor(_ * x) / x;
		case `ceil`: return Math.ceil(_ * x) / x;
		default: throw RangeError(`Value rounding ${b} is out of range`);
	}
}
function isLeapYear(_) {
	return _ % 4 == 0 && (_ % 100 != 0 || _ % 400 == 0);
}
function daysInYear(_) {
	return isLeapYear(_) ? 366 : 365;
}
function daysInMonth(_, y) {
	let b = floorMod(y - 1, 12) + 1, x = _ + (y - b) / 12;
	return b === 2 ? isLeapYear(x) ? 29 : 28 : [
		31,
		null,
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31
	][b - 1];
}
function objToLocalTS(_) {
	let y = Date.UTC(_.year, _.month - 1, _.day, _.hour, _.minute, _.second, _.millisecond);
	return _.year < 100 && _.year >= 0 && (y = new Date(y), y.setUTCFullYear(_.year, _.month - 1, _.day)), +y;
}
function firstWeekOffset(_, y, b) {
	return -isoWeekdayToLocal(dayOfWeek(_, 1, y), b) + y - 1;
}
function weeksInWeekYear(_, y = 4, b = 1) {
	let x = firstWeekOffset(_, y, b), S = firstWeekOffset(_ + 1, y, b);
	return (daysInYear(_) - x + S) / 7;
}
function untruncateYear(_) {
	return _ > 99 ? _ : _ > Settings.twoDigitCutoffYear ? 1900 + _ : 2e3 + _;
}
function parseZoneInfo(_, y, b, x = null) {
	let S = new Date(_), C = {
		hourCycle: `h23`,
		year: `numeric`,
		month: `2-digit`,
		day: `2-digit`,
		hour: `2-digit`,
		minute: `2-digit`
	};
	x && (C.timeZone = x);
	let w = {
		timeZoneName: y,
		...C
	}, E = new Intl.DateTimeFormat(b, w).formatToParts(S).find((_) => _.type.toLowerCase() === `timezonename`);
	return E ? E.value : null;
}
function signedOffset(_, y) {
	let b = parseInt(_, 10);
	Number.isNaN(b) && (b = 0);
	let x = parseInt(y, 10) || 0, S = b < 0 || Object.is(b, -0) ? -x : x;
	return b * 60 + S;
}
function asNumber(_) {
	let y = Number(_);
	if (typeof _ == `boolean` || _ === `` || !Number.isFinite(y)) throw new InvalidArgumentError(`Invalid unit value ${_}`);
	return y;
}
function normalizeObject(_, y) {
	let b = {};
	for (let x in _) if (hasOwnProperty(_, x)) {
		let S = _[x];
		if (S == null) continue;
		b[y(x)] = asNumber(S);
	}
	return b;
}
function formatOffset(_, y) {
	let b = Math.trunc(Math.abs(_ / 60)), x = Math.trunc(Math.abs(_ % 60)), S = _ >= 0 ? `+` : `-`;
	switch (y) {
		case `short`: return `${S}${padStart(b, 2)}:${padStart(x, 2)}`;
		case `narrow`: return `${S}${b}${x > 0 ? `:${x}` : ``}`;
		case `techie`: return `${S}${padStart(b, 2)}${padStart(x, 2)}`;
		default: throw RangeError(`Value format ${y} is out of range for property format`);
	}
}
function timeObject(_) {
	return pick(_, [
		`hour`,
		`minute`,
		`second`,
		`millisecond`
	]);
}
var Fi = [
	`January`,
	`February`,
	`March`,
	`April`,
	`May`,
	`June`,
	`July`,
	`August`,
	`September`,
	`October`,
	`November`,
	`December`
], Ii = [
	`Jan`,
	`Feb`,
	`Mar`,
	`Apr`,
	`May`,
	`Jun`,
	`Jul`,
	`Aug`,
	`Sep`,
	`Oct`,
	`Nov`,
	`Dec`
], Li = [
	`J`,
	`F`,
	`M`,
	`A`,
	`M`,
	`J`,
	`J`,
	`A`,
	`S`,
	`O`,
	`N`,
	`D`
];
function months(_) {
	switch (_) {
		case `narrow`: return [...Li];
		case `short`: return [...Ii];
		case `long`: return [...Fi];
		case `numeric`: return [
			`1`,
			`2`,
			`3`,
			`4`,
			`5`,
			`6`,
			`7`,
			`8`,
			`9`,
			`10`,
			`11`,
			`12`
		];
		case `2-digit`: return [
			`01`,
			`02`,
			`03`,
			`04`,
			`05`,
			`06`,
			`07`,
			`08`,
			`09`,
			`10`,
			`11`,
			`12`
		];
		default: return null;
	}
}
var Ri = [
	`Monday`,
	`Tuesday`,
	`Wednesday`,
	`Thursday`,
	`Friday`,
	`Saturday`,
	`Sunday`
], zi = [
	`Mon`,
	`Tue`,
	`Wed`,
	`Thu`,
	`Fri`,
	`Sat`,
	`Sun`
], Bi = [
	`M`,
	`T`,
	`W`,
	`T`,
	`F`,
	`S`,
	`S`
];
function weekdays(_) {
	switch (_) {
		case `narrow`: return [...Bi];
		case `short`: return [...zi];
		case `long`: return [...Ri];
		case `numeric`: return [
			`1`,
			`2`,
			`3`,
			`4`,
			`5`,
			`6`,
			`7`
		];
		default: return null;
	}
}
var Vi = [`AM`, `PM`], Hi = [`Before Christ`, `Anno Domini`], Ui = [`BC`, `AD`], Wi = [`B`, `A`];
function eras(_) {
	switch (_) {
		case `narrow`: return [...Wi];
		case `short`: return [...Ui];
		case `long`: return [...Hi];
		default: return null;
	}
}
function meridiemForDateTime(_) {
	return Vi[_.hour < 12 ? 0 : 1];
}
function weekdayForDateTime(_, y) {
	return weekdays(y)[_.weekday - 1];
}
function monthForDateTime(_, y) {
	return months(y)[_.month - 1];
}
function eraForDateTime(_, y) {
	return eras(y)[_.year < 0 ? 0 : 1];
}
function formatRelativeTime(_, y, b = `always`, x = !1) {
	let S = {
		years: [`year`, `yr.`],
		quarters: [`quarter`, `qtr.`],
		months: [`month`, `mo.`],
		weeks: [`week`, `wk.`],
		days: [
			`day`,
			`day`,
			`days`
		],
		hours: [`hour`, `hr.`],
		minutes: [`minute`, `min.`],
		seconds: [`second`, `sec.`]
	}, C = [
		`hours`,
		`minutes`,
		`seconds`
	].indexOf(_) === -1;
	if (b === `auto` && C) {
		let b = _ === `days`;
		switch (y) {
			case 1: return b ? `tomorrow` : `next ${S[_][0]}`;
			case -1: return b ? `yesterday` : `last ${S[_][0]}`;
			case 0: return b ? `today` : `this ${S[_][0]}`;
		}
	}
	let w = Object.is(y, -0) || y < 0, E = Math.abs(y), D = E === 1, O = S[_], k = x ? D ? O[1] : O[2] || O[1] : D ? S[_][0] : _;
	return w ? `${E} ${k} ago` : `in ${E} ${k}`;
}
function stringifyTokens(_, y) {
	let b = ``;
	for (let x of _) x.literal ? b += x.val : b += y(x.val);
	return b;
}
var Gi = {
	D: Lr,
	DD: Rr,
	DDD: Br,
	DDDD: Vr,
	t: Hr,
	tt: Ur,
	ttt: Wr,
	tttt: Gr,
	T: Kr,
	TT: qr,
	TTT: Jr,
	TTTT: Yr,
	f: Xr,
	ff: Qr,
	fff: ti,
	ffff: ri,
	F: Zr,
	FF: $r,
	FFF: ni,
	FFFF: ii
}, Ki = class Formatter {
	static create(_, y = {}) {
		return new Formatter(_, y);
	}
	static parseFormat(_) {
		let y = null, b = ``, x = !1, S = [];
		for (let C = 0; C < _.length; C++) {
			let w = _.charAt(C);
			w === `'` ? ((b.length > 0 || x) && S.push({
				literal: x || /^\s+$/.test(b),
				val: b === `` ? `'` : b
			}), y = null, b = ``, x = !x) : x || w === y ? b += w : (b.length > 0 && S.push({
				literal: /^\s+$/.test(b),
				val: b
			}), b = w, y = w);
		}
		return b.length > 0 && S.push({
			literal: x || /^\s+$/.test(b),
			val: b
		}), S;
	}
	static macroTokenToFormatOpts(_) {
		return Gi[_];
	}
	constructor(_, y) {
		this.opts = y, this.loc = _, this.systemLoc = null;
	}
	formatWithSystemDefault(_, y) {
		return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(_, {
			...this.opts,
			...y
		}).format();
	}
	dtFormatter(_, y = {}) {
		return this.loc.dtFormatter(_, {
			...this.opts,
			...y
		});
	}
	formatDateTime(_, y) {
		return this.dtFormatter(_, y).format();
	}
	formatDateTimeParts(_, y) {
		return this.dtFormatter(_, y).formatToParts();
	}
	formatInterval(_, y) {
		return this.dtFormatter(_.start, y).dtf.formatRange(_.start.toJSDate(), _.end.toJSDate());
	}
	resolvedOptions(_, y) {
		return this.dtFormatter(_, y).resolvedOptions();
	}
	num(_, y = 0, b = void 0) {
		if (this.opts.forceSimple) return padStart(_, y);
		let x = { ...this.opts };
		return y > 0 && (x.padTo = y), b && (x.signDisplay = b), this.loc.numberFormatter(x).format(_);
	}
	formatDateTimeFromString(_, y) {
		let b = this.loc.listingMode() === `en`, x = this.loc.outputCalendar && this.loc.outputCalendar !== `gregory`, string = (y, b) => this.loc.extract(_, y, b), formatOffset = (y) => _.isOffsetFixed && _.offset === 0 && y.allowZ ? `Z` : _.isValid ? _.zone.formatOffset(_.ts, y.format) : ``, meridiem = () => b ? meridiemForDateTime(_) : string({
			hour: `numeric`,
			hourCycle: `h12`
		}, `dayperiod`), month = (y, x) => b ? monthForDateTime(_, y) : string(x ? { month: y } : {
			month: y,
			day: `numeric`
		}, `month`), weekday = (y, x) => b ? weekdayForDateTime(_, y) : string(x ? { weekday: y } : {
			weekday: y,
			month: `long`,
			day: `numeric`
		}, `weekday`), maybeMacro = (y) => {
			let b = Formatter.macroTokenToFormatOpts(y);
			return b ? this.formatWithSystemDefault(_, b) : y;
		}, era = (y) => b ? eraForDateTime(_, y) : string({ era: y }, `era`), tokenToString = (y) => {
			switch (y) {
				case `S`: return this.num(_.millisecond);
				case `u`:
				case `SSS`: return this.num(_.millisecond, 3);
				case `s`: return this.num(_.second);
				case `ss`: return this.num(_.second, 2);
				case `uu`: return this.num(Math.floor(_.millisecond / 10), 2);
				case `uuu`: return this.num(Math.floor(_.millisecond / 100));
				case `m`: return this.num(_.minute);
				case `mm`: return this.num(_.minute, 2);
				case `h`: return this.num(_.hour % 12 == 0 ? 12 : _.hour % 12);
				case `hh`: return this.num(_.hour % 12 == 0 ? 12 : _.hour % 12, 2);
				case `H`: return this.num(_.hour);
				case `HH`: return this.num(_.hour, 2);
				case `Z`: return formatOffset({
					format: `narrow`,
					allowZ: this.opts.allowZ
				});
				case `ZZ`: return formatOffset({
					format: `short`,
					allowZ: this.opts.allowZ
				});
				case `ZZZ`: return formatOffset({
					format: `techie`,
					allowZ: this.opts.allowZ
				});
				case `ZZZZ`: return _.zone.offsetName(_.ts, {
					format: `short`,
					locale: this.loc.locale
				});
				case `ZZZZZ`: return _.zone.offsetName(_.ts, {
					format: `long`,
					locale: this.loc.locale
				});
				case `z`: return _.zoneName;
				case `a`: return meridiem();
				case `d`: return x ? string({ day: `numeric` }, `day`) : this.num(_.day);
				case `dd`: return x ? string({ day: `2-digit` }, `day`) : this.num(_.day, 2);
				case `c`: return this.num(_.weekday);
				case `ccc`: return weekday(`short`, !0);
				case `cccc`: return weekday(`long`, !0);
				case `ccccc`: return weekday(`narrow`, !0);
				case `E`: return this.num(_.weekday);
				case `EEE`: return weekday(`short`, !1);
				case `EEEE`: return weekday(`long`, !1);
				case `EEEEE`: return weekday(`narrow`, !1);
				case `L`: return x ? string({
					month: `numeric`,
					day: `numeric`
				}, `month`) : this.num(_.month);
				case `LL`: return x ? string({
					month: `2-digit`,
					day: `numeric`
				}, `month`) : this.num(_.month, 2);
				case `LLL`: return month(`short`, !0);
				case `LLLL`: return month(`long`, !0);
				case `LLLLL`: return month(`narrow`, !0);
				case `M`: return x ? string({ month: `numeric` }, `month`) : this.num(_.month);
				case `MM`: return x ? string({ month: `2-digit` }, `month`) : this.num(_.month, 2);
				case `MMM`: return month(`short`, !1);
				case `MMMM`: return month(`long`, !1);
				case `MMMMM`: return month(`narrow`, !1);
				case `y`: return x ? string({ year: `numeric` }, `year`) : this.num(_.year);
				case `yy`: return x ? string({ year: `2-digit` }, `year`) : this.num(_.year.toString().slice(-2), 2);
				case `yyyy`: return x ? string({ year: `numeric` }, `year`) : this.num(_.year, 4);
				case `yyyyyy`: return x ? string({ year: `numeric` }, `year`) : this.num(_.year, 6);
				case `G`: return era(`short`);
				case `GG`: return era(`long`);
				case `GGGGG`: return era(`narrow`);
				case `kk`: return this.num(_.weekYear.toString().slice(-2), 2);
				case `kkkk`: return this.num(_.weekYear, 4);
				case `W`: return this.num(_.weekNumber);
				case `WW`: return this.num(_.weekNumber, 2);
				case `n`: return this.num(_.localWeekNumber);
				case `nn`: return this.num(_.localWeekNumber, 2);
				case `ii`: return this.num(_.localWeekYear.toString().slice(-2), 2);
				case `iiii`: return this.num(_.localWeekYear, 4);
				case `o`: return this.num(_.ordinal);
				case `ooo`: return this.num(_.ordinal, 3);
				case `q`: return this.num(_.quarter);
				case `qq`: return this.num(_.quarter, 2);
				case `X`: return this.num(Math.floor(_.ts / 1e3));
				case `x`: return this.num(_.ts);
				default: return maybeMacro(y);
			}
		};
		return stringifyTokens(Formatter.parseFormat(y), tokenToString);
	}
	formatDurationFromString(_, y) {
		let b = this.opts.signMode === `negativeLargestOnly` ? -1 : 1, tokenToField = (_) => {
			switch (_[0]) {
				case `S`: return `milliseconds`;
				case `s`: return `seconds`;
				case `m`: return `minutes`;
				case `h`: return `hours`;
				case `d`: return `days`;
				case `w`: return `weeks`;
				case `M`: return `months`;
				case `y`: return `years`;
				default: return null;
			}
		}, tokenToString = (_, y) => (x) => {
			let S = tokenToField(x);
			if (S) {
				let C = y.isNegativeDuration && S !== y.largestUnit ? b : 1, w;
				return w = this.opts.signMode === `negativeLargestOnly` && S !== y.largestUnit ? `never` : this.opts.signMode === `all` ? `always` : `auto`, this.num(_.get(S) * C, x.length, w);
			} else return x;
		}, x = Formatter.parseFormat(y), S = x.reduce((_, { literal: y, val: b }) => y ? _ : _.concat(b), []), C = _.shiftTo(...S.map(tokenToField).filter((_) => _));
		return stringifyTokens(x, tokenToString(C, {
			isNegativeDuration: C < 0,
			largestUnit: Object.keys(C.values)[0]
		}));
	}
}, qi = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function combineRegexes(..._) {
	let y = _.reduce((_, y) => _ + y.source, ``);
	return RegExp(`^${y}$`);
}
function combineExtractors(..._) {
	return (y) => _.reduce(([_, b, x], S) => {
		let [C, w, E] = S(y, x);
		return [
			{
				..._,
				...C
			},
			w || b,
			E
		];
	}, [
		{},
		null,
		1
	]).slice(0, 2);
}
function parse$1(_, ...y) {
	if (_ == null) return [null, null];
	for (let [b, x] of y) {
		let y = b.exec(_);
		if (y) return x(y);
	}
	return [null, null];
}
function simpleParse(..._) {
	return (y, b) => {
		let x = {}, S;
		for (S = 0; S < _.length; S++) x[_[S]] = parseInteger(y[b + S]);
		return [
			x,
			null,
			b + S
		];
	};
}
var Ji = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, Yi = `(?:${Ji.source}?(?:\\[(${qi.source})\\])?)?`, Xi = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, Zi = RegExp(`${Xi.source}${Yi}`), Qi = RegExp(`(?:[Tt]${Zi.source})?`), $i = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, ea = /(\d{4})-?W(\d\d)(?:-?(\d))?/, ta = /(\d{4})-?(\d{3})/, na = simpleParse(`weekYear`, `weekNumber`, `weekDay`), ra = simpleParse(`year`, `ordinal`), ia = /(\d{4})-(\d\d)-(\d\d)/, aa = RegExp(`${Xi.source} ?(?:${Ji.source}|(${qi.source}))?`), oa = RegExp(`(?: ${aa.source})?`);
function int(_, y, b) {
	let x = _[y];
	return isUndefined(x) ? b : parseInteger(x);
}
function extractISOYmd(_, y) {
	return [
		{
			year: int(_, y),
			month: int(_, y + 1, 1),
			day: int(_, y + 2, 1)
		},
		null,
		y + 3
	];
}
function extractISOTime(_, y) {
	return [
		{
			hours: int(_, y, 0),
			minutes: int(_, y + 1, 0),
			seconds: int(_, y + 2, 0),
			milliseconds: parseMillis(_[y + 3])
		},
		null,
		y + 4
	];
}
function extractISOOffset(_, y) {
	let b = !_[y] && !_[y + 1], x = signedOffset(_[y + 1], _[y + 2]);
	return [
		{},
		b ? null : xi.instance(x),
		y + 3
	];
}
function extractIANAZone(_, y) {
	return [
		{},
		_[y] ? ui.create(_[y]) : null,
		y + 1
	];
}
var sa = RegExp(`^T?${Xi.source}$`), ca = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function extractISODuration(_) {
	let [y, b, x, S, C, w, E, D, O] = _, k = y[0] === `-`, A = D && D[0] === `-`, maybeNegate = (_, y = !1) => _ !== void 0 && (y || _ && k) ? -_ : _;
	return [{
		years: maybeNegate(parseFloating(b)),
		months: maybeNegate(parseFloating(x)),
		weeks: maybeNegate(parseFloating(S)),
		days: maybeNegate(parseFloating(C)),
		hours: maybeNegate(parseFloating(w)),
		minutes: maybeNegate(parseFloating(E)),
		seconds: maybeNegate(parseFloating(D), D === `-0`),
		milliseconds: maybeNegate(parseMillis(O), A)
	}];
}
var la = {
	GMT: 0,
	EDT: -240,
	EST: -300,
	CDT: -300,
	CST: -360,
	MDT: -360,
	MST: -420,
	PDT: -420,
	PST: -480
};
function fromStrings(_, y, b, x, S, C, w) {
	let E = {
		year: y.length === 2 ? untruncateYear(parseInteger(y)) : parseInteger(y),
		month: Ii.indexOf(b) + 1,
		day: parseInteger(x),
		hour: parseInteger(S),
		minute: parseInteger(C)
	};
	return w && (E.second = parseInteger(w)), _ && (E.weekday = _.length > 3 ? Ri.indexOf(_) + 1 : zi.indexOf(_) + 1), E;
}
var ua = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function extractRFC2822(_) {
	let [, y, b, x, S, C, w, E, D, O, k, A] = _, j = fromStrings(y, S, x, b, C, w, E), N;
	return N = D ? la[D] : O ? 0 : signedOffset(k, A), [j, new xi(N)];
}
function preprocessRFC2822(_) {
	return _.replace(/\([^()]*\)|[\n\t]/g, ` `).replace(/(\s\s+)/g, ` `).trim();
}
var da = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, fa = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, pa = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function extractRFC1123Or850(_) {
	let [, y, b, x, S, C, w, E] = _;
	return [fromStrings(y, S, x, b, C, w, E), xi.utcInstance];
}
function extractASCII(_) {
	let [, y, b, x, S, C, w, E] = _;
	return [fromStrings(y, E, b, x, S, C, w), xi.utcInstance];
}
var ma = combineRegexes($i, Qi), ha = combineRegexes(ea, Qi), ga = combineRegexes(ta, Qi), _a = combineRegexes(Zi), va = combineExtractors(extractISOYmd, extractISOTime, extractISOOffset, extractIANAZone), ya = combineExtractors(na, extractISOTime, extractISOOffset, extractIANAZone), ba = combineExtractors(ra, extractISOTime, extractISOOffset, extractIANAZone), xa = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseISODate(_) {
	return parse$1(_, [ma, va], [ha, ya], [ga, ba], [_a, xa]);
}
function parseRFC2822Date(_) {
	return parse$1(preprocessRFC2822(_), [ua, extractRFC2822]);
}
function parseHTTPDate(_) {
	return parse$1(_, [da, extractRFC1123Or850], [fa, extractRFC1123Or850], [pa, extractASCII]);
}
function parseISODuration(_) {
	return parse$1(_, [ca, extractISODuration]);
}
var Sa = combineExtractors(extractISOTime);
function parseISOTimeOnly(_) {
	return parse$1(_, [sa, Sa]);
}
var Ca = combineRegexes(ia, oa), wa = combineRegexes(aa), Ta = combineExtractors(extractISOTime, extractISOOffset, extractIANAZone);
function parseSQL(_) {
	return parse$1(_, [Ca, va], [wa, Ta]);
}
var Ea = `Invalid Duration`, Da = {
	weeks: {
		days: 7,
		hours: 168,
		minutes: 10080,
		seconds: 10080 * 60,
		milliseconds: 10080 * 60 * 1e3
	},
	days: {
		hours: 24,
		minutes: 1440,
		seconds: 1440 * 60,
		milliseconds: 1440 * 60 * 1e3
	},
	hours: {
		minutes: 60,
		seconds: 3600,
		milliseconds: 3600 * 1e3
	},
	minutes: {
		seconds: 60,
		milliseconds: 60 * 1e3
	},
	seconds: { milliseconds: 1e3 }
}, Oa = {
	years: {
		quarters: 4,
		months: 12,
		weeks: 52,
		days: 365,
		hours: 365 * 24,
		minutes: 365 * 24 * 60,
		seconds: 365 * 24 * 60 * 60,
		milliseconds: 365 * 24 * 60 * 60 * 1e3
	},
	quarters: {
		months: 3,
		weeks: 13,
		days: 91,
		hours: 2184,
		minutes: 2184 * 60,
		seconds: 2184 * 60 * 60,
		milliseconds: 2184 * 60 * 60 * 1e3
	},
	months: {
		weeks: 4,
		days: 30,
		hours: 720,
		minutes: 720 * 60,
		seconds: 720 * 60 * 60,
		milliseconds: 720 * 60 * 60 * 1e3
	},
	...Da
}, ka = 146097 / 400, Aa = 146097 / 4800, ja = {
	years: {
		quarters: 4,
		months: 12,
		weeks: ka / 7,
		days: ka,
		hours: ka * 24,
		minutes: ka * 24 * 60,
		seconds: ka * 24 * 60 * 60,
		milliseconds: ka * 24 * 60 * 60 * 1e3
	},
	quarters: {
		months: 3,
		weeks: ka / 28,
		days: ka / 4,
		hours: ka * 24 / 4,
		minutes: ka * 24 * 60 / 4,
		seconds: ka * 24 * 60 * 60 / 4,
		milliseconds: ka * 24 * 60 * 60 * 1e3 / 4
	},
	months: {
		weeks: Aa / 7,
		days: Aa,
		hours: Aa * 24,
		minutes: Aa * 24 * 60,
		seconds: Aa * 24 * 60 * 60,
		milliseconds: Aa * 24 * 60 * 60 * 1e3
	},
	...Da
}, Ma = [
	`years`,
	`quarters`,
	`months`,
	`weeks`,
	`days`,
	`hours`,
	`minutes`,
	`seconds`,
	`milliseconds`
], Na = Ma.slice(0).reverse();
function clone$1(_, y, b = !1) {
	return new Pa({
		values: b ? y.values : {
			..._.values,
			...y.values || {}
		},
		loc: _.loc.clone(y.loc),
		conversionAccuracy: y.conversionAccuracy || _.conversionAccuracy,
		matrix: y.matrix || _.matrix
	});
}
function durationToMillis(_, y) {
	let b = y.milliseconds ?? 0;
	for (let x of Na.slice(1)) y[x] && (b += y[x] * _[x].milliseconds);
	return b;
}
function normalizeValues(_, y) {
	let b = durationToMillis(_, y) < 0 ? -1 : 1;
	Ma.reduceRight((x, S) => {
		if (isUndefined(y[S])) return x;
		if (x) {
			let C = y[x] * b, w = _[S][x], E = Math.floor(C / w);
			y[S] += E * b, y[x] -= E * w * b;
		}
		return S;
	}, null), Ma.reduce((b, x) => {
		if (isUndefined(y[x])) return b;
		if (b) {
			let S = y[b] % 1;
			y[b] -= S, y[x] += S * _[b][x];
		}
		return x;
	}, null);
}
function removeZeroes(_) {
	let y = {};
	for (let [b, x] of Object.entries(_)) x !== 0 && (y[b] = x);
	return y;
}
var Pa = class Duration {
	constructor(_) {
		let y = _.conversionAccuracy === `longterm` || !1, b = y ? ja : Oa;
		_.matrix && (b = _.matrix), this.values = _.values, this.loc = _.loc || yi.create(), this.conversionAccuracy = y ? `longterm` : `casual`, this.invalid = _.invalid || null, this.matrix = b, this.isLuxonDuration = !0;
	}
	static fromMillis(_, y) {
		return Duration.fromObject({ milliseconds: _ }, y);
	}
	static fromObject(_, y = {}) {
		if (typeof _ != `object` || !_) throw new InvalidArgumentError(`Duration.fromObject: argument expected to be an object, got ${_ === null ? `null` : typeof _}`);
		return new Duration({
			values: normalizeObject(_, Duration.normalizeUnit),
			loc: yi.fromObject(y),
			conversionAccuracy: y.conversionAccuracy,
			matrix: y.matrix
		});
	}
	static fromDurationLike(_) {
		if (isNumber(_)) return Duration.fromMillis(_);
		if (Duration.isDuration(_)) return _;
		if (typeof _ == `object`) return Duration.fromObject(_);
		throw new InvalidArgumentError(`Unknown duration argument ${_} of type ${typeof _}`);
	}
	static fromISO(_, y) {
		let [b] = parseISODuration(_);
		return b ? Duration.fromObject(b, y) : Duration.invalid(`unparsable`, `the input "${_}" can't be parsed as ISO 8601`);
	}
	static fromISOTime(_, y) {
		let [b] = parseISOTimeOnly(_);
		return b ? Duration.fromObject(b, y) : Duration.invalid(`unparsable`, `the input "${_}" can't be parsed as ISO 8601`);
	}
	static invalid(_, y = null) {
		if (!_) throw new InvalidArgumentError(`need to specify a reason the Duration is invalid`);
		let b = _ instanceof Invalid ? _ : new Invalid(_, y);
		if (Settings.throwOnInvalid) throw new InvalidDurationError(b);
		return new Duration({ invalid: b });
	}
	static normalizeUnit(_) {
		let y = {
			year: `years`,
			years: `years`,
			quarter: `quarters`,
			quarters: `quarters`,
			month: `months`,
			months: `months`,
			week: `weeks`,
			weeks: `weeks`,
			day: `days`,
			days: `days`,
			hour: `hours`,
			hours: `hours`,
			minute: `minutes`,
			minutes: `minutes`,
			second: `seconds`,
			seconds: `seconds`,
			millisecond: `milliseconds`,
			milliseconds: `milliseconds`
		}[_ && _.toLowerCase()];
		if (!y) throw new InvalidUnitError(_);
		return y;
	}
	static isDuration(_) {
		return _ && _.isLuxonDuration || !1;
	}
	get locale() {
		return this.isValid ? this.loc.locale : null;
	}
	get numberingSystem() {
		return this.isValid ? this.loc.numberingSystem : null;
	}
	toFormat(_, y = {}) {
		let b = {
			...y,
			floor: y.round !== !1 && y.floor !== !1
		};
		return this.isValid ? Ki.create(this.loc, b).formatDurationFromString(this, _) : Ea;
	}
	toHuman(_ = {}) {
		if (!this.isValid) return Ea;
		let y = _.showZeros !== !1, b = Ma.map((b) => {
			let x = this.values[b];
			return isUndefined(x) || x === 0 && !y ? null : this.loc.numberFormatter({
				style: `unit`,
				unitDisplay: `long`,
				..._,
				unit: b.slice(0, -1)
			}).format(x);
		}).filter((_) => _);
		return this.loc.listFormatter({
			type: `conjunction`,
			style: _.listStyle || `narrow`,
			..._
		}).format(b);
	}
	toObject() {
		return this.isValid ? { ...this.values } : {};
	}
	toISO() {
		if (!this.isValid) return null;
		let _ = `P`;
		return this.years !== 0 && (_ += this.years + `Y`), (this.months !== 0 || this.quarters !== 0) && (_ += this.months + this.quarters * 3 + `M`), this.weeks !== 0 && (_ += this.weeks + `W`), this.days !== 0 && (_ += this.days + `D`), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (_ += `T`), this.hours !== 0 && (_ += this.hours + `H`), this.minutes !== 0 && (_ += this.minutes + `M`), (this.seconds !== 0 || this.milliseconds !== 0) && (_ += roundTo(this.seconds + this.milliseconds / 1e3, 3) + `S`), _ === `P` && (_ += `T0S`), _;
	}
	toISOTime(_ = {}) {
		if (!this.isValid) return null;
		let y = this.toMillis();
		return y < 0 || y >= 864e5 ? null : (_ = {
			suppressMilliseconds: !1,
			suppressSeconds: !1,
			includePrefix: !1,
			format: `extended`,
			..._,
			includeOffset: !1
		}, Qa.fromMillis(y, { zone: `UTC` }).toISOTime(_));
	}
	toJSON() {
		return this.toISO();
	}
	toString() {
		return this.toISO();
	}
	[Symbol.for(`nodejs.util.inspect.custom`)]() {
		return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
	}
	toMillis() {
		return this.isValid ? durationToMillis(this.matrix, this.values) : NaN;
	}
	valueOf() {
		return this.toMillis();
	}
	plus(_) {
		if (!this.isValid) return this;
		let y = Duration.fromDurationLike(_), b = {};
		for (let _ of Ma) (hasOwnProperty(y.values, _) || hasOwnProperty(this.values, _)) && (b[_] = y.get(_) + this.get(_));
		return clone$1(this, { values: b }, !0);
	}
	minus(_) {
		if (!this.isValid) return this;
		let y = Duration.fromDurationLike(_);
		return this.plus(y.negate());
	}
	mapUnits(_) {
		if (!this.isValid) return this;
		let y = {};
		for (let b of Object.keys(this.values)) y[b] = asNumber(_(this.values[b], b));
		return clone$1(this, { values: y }, !0);
	}
	get(_) {
		return this[Duration.normalizeUnit(_)];
	}
	set(_) {
		if (!this.isValid) return this;
		let y = {
			...this.values,
			...normalizeObject(_, Duration.normalizeUnit)
		};
		return clone$1(this, { values: y });
	}
	reconfigure({ locale: _, numberingSystem: y, conversionAccuracy: b, matrix: x } = {}) {
		let S = {
			loc: this.loc.clone({
				locale: _,
				numberingSystem: y
			}),
			matrix: x,
			conversionAccuracy: b
		};
		return clone$1(this, S);
	}
	as(_) {
		return this.isValid ? this.shiftTo(_).get(_) : NaN;
	}
	normalize() {
		if (!this.isValid) return this;
		let _ = this.toObject();
		return normalizeValues(this.matrix, _), clone$1(this, { values: _ }, !0);
	}
	rescale() {
		if (!this.isValid) return this;
		let _ = removeZeroes(this.normalize().shiftToAll().toObject());
		return clone$1(this, { values: _ }, !0);
	}
	shiftTo(..._) {
		if (!this.isValid || _.length === 0) return this;
		_ = _.map((_) => Duration.normalizeUnit(_));
		let y = {}, b = {}, x = this.toObject(), S;
		for (let C of Ma) if (_.indexOf(C) >= 0) {
			S = C;
			let _ = 0;
			for (let y in b) _ += this.matrix[y][C] * b[y], b[y] = 0;
			isNumber(x[C]) && (_ += x[C]);
			let w = Math.trunc(_);
			y[C] = w, b[C] = (_ * 1e3 - w * 1e3) / 1e3;
		} else isNumber(x[C]) && (b[C] = x[C]);
		for (let _ in b) b[_] !== 0 && (y[S] += _ === S ? b[_] : b[_] / this.matrix[S][_]);
		return normalizeValues(this.matrix, y), clone$1(this, { values: y }, !0);
	}
	shiftToAll() {
		return this.isValid ? this.shiftTo(`years`, `months`, `weeks`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`) : this;
	}
	negate() {
		if (!this.isValid) return this;
		let _ = {};
		for (let y of Object.keys(this.values)) _[y] = this.values[y] === 0 ? 0 : -this.values[y];
		return clone$1(this, { values: _ }, !0);
	}
	removeZeros() {
		if (!this.isValid) return this;
		let _ = removeZeroes(this.values);
		return clone$1(this, { values: _ }, !0);
	}
	get years() {
		return this.isValid ? this.values.years || 0 : NaN;
	}
	get quarters() {
		return this.isValid ? this.values.quarters || 0 : NaN;
	}
	get months() {
		return this.isValid ? this.values.months || 0 : NaN;
	}
	get weeks() {
		return this.isValid ? this.values.weeks || 0 : NaN;
	}
	get days() {
		return this.isValid ? this.values.days || 0 : NaN;
	}
	get hours() {
		return this.isValid ? this.values.hours || 0 : NaN;
	}
	get minutes() {
		return this.isValid ? this.values.minutes || 0 : NaN;
	}
	get seconds() {
		return this.isValid ? this.values.seconds || 0 : NaN;
	}
	get milliseconds() {
		return this.isValid ? this.values.milliseconds || 0 : NaN;
	}
	get isValid() {
		return this.invalid === null;
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null;
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null;
	}
	equals(_) {
		if (!this.isValid || !_.isValid || !this.loc.equals(_.loc)) return !1;
		function eq(_, y) {
			return _ === void 0 || _ === 0 ? y === void 0 || y === 0 : _ === y;
		}
		for (let y of Ma) if (!eq(this.values[y], _.values[y])) return !1;
		return !0;
	}
}, Fa = `Invalid Interval`;
function validateStartEnd(_, y) {
	return !_ || !_.isValid ? Ia.invalid(`missing or invalid start`) : !y || !y.isValid ? Ia.invalid(`missing or invalid end`) : y < _ ? Ia.invalid(`end before start`, `The end of an interval must be after its start, but you had start=${_.toISO()} and end=${y.toISO()}`) : null;
}
var Ia = class Interval {
	constructor(_) {
		this.s = _.start, this.e = _.end, this.invalid = _.invalid || null, this.isLuxonInterval = !0;
	}
	static invalid(_, y = null) {
		if (!_) throw new InvalidArgumentError(`need to specify a reason the Interval is invalid`);
		let b = _ instanceof Invalid ? _ : new Invalid(_, y);
		if (Settings.throwOnInvalid) throw new InvalidIntervalError(b);
		return new Interval({ invalid: b });
	}
	static fromDateTimes(_, y) {
		let b = friendlyDateTime(_), x = friendlyDateTime(y);
		return validateStartEnd(b, x) ?? new Interval({
			start: b,
			end: x
		});
	}
	static after(_, y) {
		let b = Pa.fromDurationLike(y), x = friendlyDateTime(_);
		return Interval.fromDateTimes(x, x.plus(b));
	}
	static before(_, y) {
		let b = Pa.fromDurationLike(y), x = friendlyDateTime(_);
		return Interval.fromDateTimes(x.minus(b), x);
	}
	static fromISO(_, y) {
		let [b, x] = (_ || ``).split(`/`, 2);
		if (b && x) {
			let _, S;
			try {
				_ = Qa.fromISO(b, y), S = _.isValid;
			} catch {
				S = !1;
			}
			let C, w;
			try {
				C = Qa.fromISO(x, y), w = C.isValid;
			} catch {
				w = !1;
			}
			if (S && w) return Interval.fromDateTimes(_, C);
			if (S) {
				let b = Pa.fromISO(x, y);
				if (b.isValid) return Interval.after(_, b);
			} else if (w) {
				let _ = Pa.fromISO(b, y);
				if (_.isValid) return Interval.before(C, _);
			}
		}
		return Interval.invalid(`unparsable`, `the input "${_}" can't be parsed as ISO 8601`);
	}
	static isInterval(_) {
		return _ && _.isLuxonInterval || !1;
	}
	get start() {
		return this.isValid ? this.s : null;
	}
	get end() {
		return this.isValid ? this.e : null;
	}
	get lastDateTime() {
		return this.isValid && this.e ? this.e.minus(1) : null;
	}
	get isValid() {
		return this.invalidReason === null;
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null;
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null;
	}
	length(_ = `milliseconds`) {
		return this.isValid ? this.toDuration(_).get(_) : NaN;
	}
	count(_ = `milliseconds`, y) {
		if (!this.isValid) return NaN;
		let b = this.start.startOf(_, y), x;
		return x = y?.useLocaleWeeks ? this.end.reconfigure({ locale: b.locale }) : this.end, x = x.startOf(_, y), Math.floor(x.diff(b, _).get(_)) + (x.valueOf() !== this.end.valueOf());
	}
	hasSame(_) {
		return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, _) : !1;
	}
	isEmpty() {
		return this.s.valueOf() === this.e.valueOf();
	}
	isAfter(_) {
		return this.isValid ? this.s > _ : !1;
	}
	isBefore(_) {
		return this.isValid ? this.e <= _ : !1;
	}
	contains(_) {
		return this.isValid ? this.s <= _ && this.e > _ : !1;
	}
	set({ start: _, end: y } = {}) {
		return this.isValid ? Interval.fromDateTimes(_ || this.s, y || this.e) : this;
	}
	splitAt(..._) {
		if (!this.isValid) return [];
		let y = _.map(friendlyDateTime).filter((_) => this.contains(_)).sort((_, y) => _.toMillis() - y.toMillis()), b = [], { s: x } = this, S = 0;
		for (; x < this.e;) {
			let _ = y[S] || this.e, C = +_ > +this.e ? this.e : _;
			b.push(Interval.fromDateTimes(x, C)), x = C, S += 1;
		}
		return b;
	}
	splitBy(_) {
		let y = Pa.fromDurationLike(_);
		if (!this.isValid || !y.isValid || y.as(`milliseconds`) === 0) return [];
		let { s: b } = this, x = 1, S, C = [];
		for (; b < this.e;) {
			let _ = this.start.plus(y.mapUnits((_) => _ * x));
			S = +_ > +this.e ? this.e : _, C.push(Interval.fromDateTimes(b, S)), b = S, x += 1;
		}
		return C;
	}
	divideEqually(_) {
		return this.isValid ? this.splitBy(this.length() / _).slice(0, _) : [];
	}
	overlaps(_) {
		return this.e > _.s && this.s < _.e;
	}
	abutsStart(_) {
		return this.isValid ? +this.e == +_.s : !1;
	}
	abutsEnd(_) {
		return this.isValid ? +_.e == +this.s : !1;
	}
	engulfs(_) {
		return this.isValid ? this.s <= _.s && this.e >= _.e : !1;
	}
	equals(_) {
		return !this.isValid || !_.isValid ? !1 : this.s.equals(_.s) && this.e.equals(_.e);
	}
	intersection(_) {
		if (!this.isValid) return this;
		let y = this.s > _.s ? this.s : _.s, b = this.e < _.e ? this.e : _.e;
		return y >= b ? null : Interval.fromDateTimes(y, b);
	}
	union(_) {
		if (!this.isValid) return this;
		let y = this.s < _.s ? this.s : _.s, b = this.e > _.e ? this.e : _.e;
		return Interval.fromDateTimes(y, b);
	}
	static merge(_) {
		let [y, b] = _.sort((_, y) => _.s - y.s).reduce(([_, y], b) => y ? y.overlaps(b) || y.abutsStart(b) ? [_, y.union(b)] : [_.concat([y]), b] : [_, b], [[], null]);
		return b && y.push(b), y;
	}
	static xor(_) {
		let y = null, b = 0, x = [], S = _.map((_) => [{
			time: _.s,
			type: `s`
		}, {
			time: _.e,
			type: `e`
		}]), C = Array.prototype.concat(...S).sort((_, y) => _.time - y.time);
		for (let _ of C) b += _.type === `s` ? 1 : -1, b === 1 ? y = _.time : (y && +y != +_.time && x.push(Interval.fromDateTimes(y, _.time)), y = null);
		return Interval.merge(x);
	}
	difference(..._) {
		return Interval.xor([this].concat(_)).map((_) => this.intersection(_)).filter((_) => _ && !_.isEmpty());
	}
	toString() {
		return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : Fa;
	}
	[Symbol.for(`nodejs.util.inspect.custom`)]() {
		return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
	}
	toLocaleString(_ = Lr, y = {}) {
		return this.isValid ? Ki.create(this.s.loc.clone(y), _).formatInterval(this) : Fa;
	}
	toISO(_) {
		return this.isValid ? `${this.s.toISO(_)}/${this.e.toISO(_)}` : Fa;
	}
	toISODate() {
		return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : Fa;
	}
	toISOTime(_) {
		return this.isValid ? `${this.s.toISOTime(_)}/${this.e.toISOTime(_)}` : Fa;
	}
	toFormat(_, { separator: y = ` – ` } = {}) {
		return this.isValid ? `${this.s.toFormat(_)}${y}${this.e.toFormat(_)}` : Fa;
	}
	toDuration(_, y) {
		return this.isValid ? this.e.diff(this.s, _, y) : Pa.invalid(this.invalidReason);
	}
	mapEndpoints(_) {
		return Interval.fromDateTimes(_(this.s), _(this.e));
	}
}, Info = class {
	static hasDST(_ = Settings.defaultZone) {
		let y = Qa.now().setZone(_).set({ month: 12 });
		return !_.isUniversal && y.offset !== y.set({ month: 6 }).offset;
	}
	static isValidIANAZone(_) {
		return ui.isValidZone(_);
	}
	static normalizeZone(_) {
		return normalizeZone(_, Settings.defaultZone);
	}
	static getStartOfWeek({ locale: _ = null, locObj: y = null } = {}) {
		return (y || yi.create(_)).getStartOfWeek();
	}
	static getMinimumDaysInFirstWeek({ locale: _ = null, locObj: y = null } = {}) {
		return (y || yi.create(_)).getMinDaysInFirstWeek();
	}
	static getWeekendWeekdays({ locale: _ = null, locObj: y = null } = {}) {
		return (y || yi.create(_)).getWeekendDays().slice();
	}
	static months(_ = `long`, { locale: y = null, numberingSystem: b = null, locObj: x = null, outputCalendar: S = `gregory` } = {}) {
		return (x || yi.create(y, b, S)).months(_);
	}
	static monthsFormat(_ = `long`, { locale: y = null, numberingSystem: b = null, locObj: x = null, outputCalendar: S = `gregory` } = {}) {
		return (x || yi.create(y, b, S)).months(_, !0);
	}
	static weekdays(_ = `long`, { locale: y = null, numberingSystem: b = null, locObj: x = null } = {}) {
		return (x || yi.create(y, b, null)).weekdays(_);
	}
	static weekdaysFormat(_ = `long`, { locale: y = null, numberingSystem: b = null, locObj: x = null } = {}) {
		return (x || yi.create(y, b, null)).weekdays(_, !0);
	}
	static meridiems({ locale: _ = null } = {}) {
		return yi.create(_).meridiems();
	}
	static eras(_ = `short`, { locale: y = null } = {}) {
		return yi.create(y, null, `gregory`).eras(_);
	}
	static features() {
		return {
			relative: hasRelative(),
			localeWeek: hasLocaleWeekInfo()
		};
	}
};
function dayDiff(_, y) {
	let utcDayStart = (_) => _.toUTC(0, { keepLocalTime: !0 }).startOf(`day`).valueOf(), b = utcDayStart(y) - utcDayStart(_);
	return Math.floor(Pa.fromMillis(b).as(`days`));
}
function highOrderDiffs(_, y, b) {
	let x = [
		[`years`, (_, y) => y.year - _.year],
		[`quarters`, (_, y) => y.quarter - _.quarter + (y.year - _.year) * 4],
		[`months`, (_, y) => y.month - _.month + (y.year - _.year) * 12],
		[`weeks`, (_, y) => {
			let b = dayDiff(_, y);
			return (b - b % 7) / 7;
		}],
		[`days`, dayDiff]
	], S = {}, C = _, w, E;
	for (let [D, O] of x) b.indexOf(D) >= 0 && (w = D, S[D] = O(_, y), E = C.plus(S), E > y ? (S[D]--, _ = C.plus(S), _ > y && (E = _, S[D]--, _ = C.plus(S))) : _ = E);
	return [
		_,
		S,
		E,
		w
	];
}
function diff(_, y, b, x) {
	let [S, C, w, E] = highOrderDiffs(_, y, b), D = y - S, O = b.filter((_) => [
		`hours`,
		`minutes`,
		`seconds`,
		`milliseconds`
	].indexOf(_) >= 0);
	O.length === 0 && (w < y && (w = S.plus({ [E]: 1 })), w !== S && (C[E] = (C[E] || 0) + D / (w - S)));
	let k = Pa.fromObject(C, x);
	return O.length > 0 ? Pa.fromMillis(D, x).shiftTo(...O).plus(k) : k;
}
var La = `missing Intl.DateTimeFormat.formatToParts support`;
function intUnit(_, y = (_) => _) {
	return {
		regex: _,
		deser: ([_]) => y(parseDigits(_))
	};
}
var Ra = `[ \xA0]`, za = new RegExp(Ra, `g`);
function fixListRegex(_) {
	return _.replace(/\./g, `\\.?`).replace(za, Ra);
}
function stripInsensitivities(_) {
	return _.replace(/\./g, ``).replace(za, ` `).toLowerCase();
}
function oneOf(_, y) {
	return _ === null ? null : {
		regex: RegExp(_.map(fixListRegex).join(`|`)),
		deser: ([b]) => _.findIndex((_) => stripInsensitivities(b) === stripInsensitivities(_)) + y
	};
}
function offset(_, y) {
	return {
		regex: _,
		deser: ([, _, y]) => signedOffset(_, y),
		groups: y
	};
}
function simple(_) {
	return {
		regex: _,
		deser: ([_]) => _
	};
}
function escapeToken(_) {
	return _.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, `\\$&`);
}
function unitForToken(_, y) {
	let b = digitRegex(y), x = digitRegex(y, `{2}`), S = digitRegex(y, `{3}`), C = digitRegex(y, `{4}`), w = digitRegex(y, `{6}`), E = digitRegex(y, `{1,2}`), D = digitRegex(y, `{1,3}`), O = digitRegex(y, `{1,6}`), k = digitRegex(y, `{1,9}`), A = digitRegex(y, `{2,4}`), j = digitRegex(y, `{4,6}`), literal = (_) => ({
		regex: RegExp(escapeToken(_.val)),
		deser: ([_]) => _,
		literal: !0
	}), unitate = (N) => {
		if (_.literal) return literal(N);
		switch (N.val) {
			case `G`: return oneOf(y.eras(`short`), 0);
			case `GG`: return oneOf(y.eras(`long`), 0);
			case `y`: return intUnit(O);
			case `yy`: return intUnit(A, untruncateYear);
			case `yyyy`: return intUnit(C);
			case `yyyyy`: return intUnit(j);
			case `yyyyyy`: return intUnit(w);
			case `M`: return intUnit(E);
			case `MM`: return intUnit(x);
			case `MMM`: return oneOf(y.months(`short`, !0), 1);
			case `MMMM`: return oneOf(y.months(`long`, !0), 1);
			case `L`: return intUnit(E);
			case `LL`: return intUnit(x);
			case `LLL`: return oneOf(y.months(`short`, !1), 1);
			case `LLLL`: return oneOf(y.months(`long`, !1), 1);
			case `d`: return intUnit(E);
			case `dd`: return intUnit(x);
			case `o`: return intUnit(D);
			case `ooo`: return intUnit(S);
			case `HH`: return intUnit(x);
			case `H`: return intUnit(E);
			case `hh`: return intUnit(x);
			case `h`: return intUnit(E);
			case `mm`: return intUnit(x);
			case `m`: return intUnit(E);
			case `q`: return intUnit(E);
			case `qq`: return intUnit(x);
			case `s`: return intUnit(E);
			case `ss`: return intUnit(x);
			case `S`: return intUnit(D);
			case `SSS`: return intUnit(S);
			case `u`: return simple(k);
			case `uu`: return simple(E);
			case `uuu`: return intUnit(b);
			case `a`: return oneOf(y.meridiems(), 0);
			case `kkkk`: return intUnit(C);
			case `kk`: return intUnit(A, untruncateYear);
			case `W`: return intUnit(E);
			case `WW`: return intUnit(x);
			case `E`:
			case `c`: return intUnit(b);
			case `EEE`: return oneOf(y.weekdays(`short`, !1), 1);
			case `EEEE`: return oneOf(y.weekdays(`long`, !1), 1);
			case `ccc`: return oneOf(y.weekdays(`short`, !0), 1);
			case `cccc`: return oneOf(y.weekdays(`long`, !0), 1);
			case `Z`:
			case `ZZ`: return offset(RegExp(`([+-]${E.source})(?::(${x.source}))?`), 2);
			case `ZZZ`: return offset(RegExp(`([+-]${E.source})(${x.source})?`), 2);
			case `z`: return simple(/[a-z_+-/]{1,256}?/i);
			case ` `: return simple(/[^\S\n\r]/);
			default: return literal(N);
		}
	}, N = unitate(_) || { invalidReason: La };
	return N.token = _, N;
}
var Ba = {
	year: {
		"2-digit": `yy`,
		numeric: `yyyyy`
	},
	month: {
		numeric: `M`,
		"2-digit": `MM`,
		short: `MMM`,
		long: `MMMM`
	},
	day: {
		numeric: `d`,
		"2-digit": `dd`
	},
	weekday: {
		short: `EEE`,
		long: `EEEE`
	},
	dayperiod: `a`,
	dayPeriod: `a`,
	hour12: {
		numeric: `h`,
		"2-digit": `hh`
	},
	hour24: {
		numeric: `H`,
		"2-digit": `HH`
	},
	minute: {
		numeric: `m`,
		"2-digit": `mm`
	},
	second: {
		numeric: `s`,
		"2-digit": `ss`
	},
	timeZoneName: {
		long: `ZZZZZ`,
		short: `ZZZ`
	}
};
function tokenForPart(_, y, b) {
	let { type: x, value: S } = _;
	if (x === `literal`) {
		let _ = /^\s+$/.test(S);
		return {
			literal: !_,
			val: _ ? ` ` : S
		};
	}
	let C = y[x], w = x;
	x === `hour` && (w = y.hour12 == null ? y.hourCycle == null ? b.hour12 ? `hour12` : `hour24` : y.hourCycle === `h11` || y.hourCycle === `h12` ? `hour12` : `hour24` : y.hour12 ? `hour12` : `hour24`);
	let E = Ba[w];
	if (typeof E == `object` && (E = E[C]), E) return {
		literal: !1,
		val: E
	};
}
function buildRegex(_) {
	return [`^${_.map((_) => _.regex).reduce((_, y) => `${_}(${y.source})`, ``)}$`, _];
}
function match(_, y, b) {
	let x = _.match(y);
	if (x) {
		let _ = {}, y = 1;
		for (let S in b) if (hasOwnProperty(b, S)) {
			let C = b[S], w = C.groups ? C.groups + 1 : 1;
			!C.literal && C.token && (_[C.token.val[0]] = C.deser(x.slice(y, y + w))), y += w;
		}
		return [x, _];
	} else return [x, {}];
}
function dateTimeFromMatches(_) {
	let toField = (_) => {
		switch (_) {
			case `S`: return `millisecond`;
			case `s`: return `second`;
			case `m`: return `minute`;
			case `h`:
			case `H`: return `hour`;
			case `d`: return `day`;
			case `o`: return `ordinal`;
			case `L`:
			case `M`: return `month`;
			case `y`: return `year`;
			case `E`:
			case `c`: return `weekday`;
			case `W`: return `weekNumber`;
			case `k`: return `weekYear`;
			case `q`: return `quarter`;
			default: return null;
		}
	}, y = null, b;
	return isUndefined(_.z) || (y = ui.create(_.z)), isUndefined(_.Z) || (y ||= new xi(_.Z), b = _.Z), isUndefined(_.q) || (_.M = (_.q - 1) * 3 + 1), isUndefined(_.h) || (_.h < 12 && _.a === 1 ? _.h += 12 : _.h === 12 && _.a === 0 && (_.h = 0)), _.G === 0 && _.y && (_.y = -_.y), isUndefined(_.u) || (_.S = parseMillis(_.u)), [
		Object.keys(_).reduce((y, b) => {
			let x = toField(b);
			return x && (y[x] = _[b]), y;
		}, {}),
		y,
		b
	];
}
var Va = null;
function getDummyDateTime() {
	return Va ||= Qa.fromMillis(1555555555555), Va;
}
function maybeExpandMacroToken(_, y) {
	if (_.literal) return _;
	let b = formatOptsToTokens(Ki.macroTokenToFormatOpts(_.val), y);
	return b == null || b.includes(void 0) ? _ : b;
}
function expandMacroTokens(_, y) {
	return Array.prototype.concat(..._.map((_) => maybeExpandMacroToken(_, y)));
}
var TokenParser = class {
	constructor(_, y) {
		if (this.locale = _, this.format = y, this.tokens = expandMacroTokens(Ki.parseFormat(y), _), this.units = this.tokens.map((y) => unitForToken(y, _)), this.disqualifyingUnit = this.units.find((_) => _.invalidReason), !this.disqualifyingUnit) {
			let [_, y] = buildRegex(this.units);
			this.regex = RegExp(_, `i`), this.handlers = y;
		}
	}
	explainFromTokens(_) {
		if (this.isValid) {
			let [y, b] = match(_, this.regex, this.handlers), [x, S, C] = b ? dateTimeFromMatches(b) : [
				null,
				null,
				void 0
			];
			if (hasOwnProperty(b, `a`) && hasOwnProperty(b, `H`)) throw new ConflictingSpecificationError(`Can't include meridiem when specifying 24-hour format`);
			return {
				input: _,
				tokens: this.tokens,
				regex: this.regex,
				rawMatches: y,
				matches: b,
				result: x,
				zone: S,
				specificOffset: C
			};
		} else return {
			input: _,
			tokens: this.tokens,
			invalidReason: this.invalidReason
		};
	}
	get isValid() {
		return !this.disqualifyingUnit;
	}
	get invalidReason() {
		return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
	}
};
function explainFromTokens(_, y, b) {
	return new TokenParser(_, b).explainFromTokens(y);
}
function parseFromTokens(_, y, b) {
	let { result: x, zone: S, specificOffset: C, invalidReason: w } = explainFromTokens(_, y, b);
	return [
		x,
		S,
		C,
		w
	];
}
function formatOptsToTokens(_, y) {
	if (!_) return null;
	let b = Ki.create(y, _).dtFormatter(getDummyDateTime()), x = b.formatToParts(), S = b.resolvedOptions();
	return x.map((y) => tokenForPart(y, _, S));
}
var Ha = `Invalid DateTime`, Ua = 864e13;
function unsupportedZone(_) {
	return new Invalid(`unsupported zone`, `the zone "${_.name}" is not supported`);
}
function possiblyCachedWeekData(_) {
	return _.weekData === null && (_.weekData = gregorianToWeek(_.c)), _.weekData;
}
function possiblyCachedLocalWeekData(_) {
	return _.localWeekData === null && (_.localWeekData = gregorianToWeek(_.c, _.loc.getMinDaysInFirstWeek(), _.loc.getStartOfWeek())), _.localWeekData;
}
function clone(_, y) {
	let b = {
		ts: _.ts,
		zone: _.zone,
		c: _.c,
		o: _.o,
		loc: _.loc,
		invalid: _.invalid
	};
	return new Qa({
		...b,
		...y,
		old: b
	});
}
function fixOffset(_, y, b) {
	let x = _ - y * 60 * 1e3, S = b.offset(x);
	if (y === S) return [x, y];
	x -= (S - y) * 60 * 1e3;
	let C = b.offset(x);
	return S === C ? [x, S] : [_ - Math.min(S, C) * 60 * 1e3, Math.max(S, C)];
}
function tsToObj(_, y) {
	_ += y * 60 * 1e3;
	let b = new Date(_);
	return {
		year: b.getUTCFullYear(),
		month: b.getUTCMonth() + 1,
		day: b.getUTCDate(),
		hour: b.getUTCHours(),
		minute: b.getUTCMinutes(),
		second: b.getUTCSeconds(),
		millisecond: b.getUTCMilliseconds()
	};
}
function objToTS(_, y, b) {
	return fixOffset(objToLocalTS(_), y, b);
}
function adjustTime(_, y) {
	let b = _.o, x = _.c.year + Math.trunc(y.years), S = _.c.month + Math.trunc(y.months) + Math.trunc(y.quarters) * 3, C = {
		..._.c,
		year: x,
		month: S,
		day: Math.min(_.c.day, daysInMonth(x, S)) + Math.trunc(y.days) + Math.trunc(y.weeks) * 7
	}, w = Pa.fromObject({
		years: y.years - Math.trunc(y.years),
		quarters: y.quarters - Math.trunc(y.quarters),
		months: y.months - Math.trunc(y.months),
		weeks: y.weeks - Math.trunc(y.weeks),
		days: y.days - Math.trunc(y.days),
		hours: y.hours,
		minutes: y.minutes,
		seconds: y.seconds,
		milliseconds: y.milliseconds
	}).as(`milliseconds`), [E, D] = fixOffset(objToLocalTS(C), b, _.zone);
	return w !== 0 && (E += w, D = _.zone.offset(E)), {
		ts: E,
		o: D
	};
}
function parseDataToDateTime(_, y, b, x, S, C) {
	let { setZone: w, zone: E } = b;
	if (_ && Object.keys(_).length !== 0 || y) {
		let x = y || E, S = Qa.fromObject(_, {
			...b,
			zone: x,
			specificOffset: C
		});
		return w ? S : S.setZone(E);
	} else return Qa.invalid(new Invalid(`unparsable`, `the input "${S}" can't be parsed as ${x}`));
}
function toTechFormat(_, y, b = !0) {
	return _.isValid ? Ki.create(yi.create(`en-US`), {
		allowZ: b,
		forceSimple: !0
	}).formatDateTimeFromString(_, y) : null;
}
function toISODate(_, y, b) {
	let x = _.c.year > 9999 || _.c.year < 0, S = ``;
	if (x && _.c.year >= 0 && (S += `+`), S += padStart(_.c.year, x ? 6 : 4), b === `year`) return S;
	if (y) {
		if (S += `-`, S += padStart(_.c.month), b === `month`) return S;
		S += `-`;
	} else if (S += padStart(_.c.month), b === `month`) return S;
	return S += padStart(_.c.day), S;
}
function toISOTime(_, y, b, x, S, C, w) {
	let E = !b || _.c.millisecond !== 0 || _.c.second !== 0, D = ``;
	switch (w) {
		case `day`:
		case `month`:
		case `year`: break;
		default:
			if (D += padStart(_.c.hour), w === `hour`) break;
			if (y) {
				if (D += `:`, D += padStart(_.c.minute), w === `minute`) break;
				E && (D += `:`, D += padStart(_.c.second));
			} else {
				if (D += padStart(_.c.minute), w === `minute`) break;
				E && (D += padStart(_.c.second));
			}
			if (w === `second`) break;
			E && (!x || _.c.millisecond !== 0) && (D += `.`, D += padStart(_.c.millisecond, 3));
	}
	return S && (_.isOffsetFixed && _.offset === 0 && !C ? D += `Z` : _.o < 0 ? (D += `-`, D += padStart(Math.trunc(-_.o / 60)), D += `:`, D += padStart(Math.trunc(-_.o % 60))) : (D += `+`, D += padStart(Math.trunc(_.o / 60)), D += `:`, D += padStart(Math.trunc(_.o % 60)))), C && (D += `[` + _.zone.ianaName + `]`), D;
}
var Wa = {
	month: 1,
	day: 1,
	hour: 0,
	minute: 0,
	second: 0,
	millisecond: 0
}, Ga = {
	weekNumber: 1,
	weekday: 1,
	hour: 0,
	minute: 0,
	second: 0,
	millisecond: 0
}, Ka = {
	ordinal: 1,
	hour: 0,
	minute: 0,
	second: 0,
	millisecond: 0
}, qa = [
	`year`,
	`month`,
	`day`,
	`hour`,
	`minute`,
	`second`,
	`millisecond`
], Ja = [
	`weekYear`,
	`weekNumber`,
	`weekday`,
	`hour`,
	`minute`,
	`second`,
	`millisecond`
], Ya = [
	`year`,
	`ordinal`,
	`hour`,
	`minute`,
	`second`,
	`millisecond`
];
function normalizeUnit(_) {
	let y = {
		year: `year`,
		years: `year`,
		month: `month`,
		months: `month`,
		day: `day`,
		days: `day`,
		hour: `hour`,
		hours: `hour`,
		minute: `minute`,
		minutes: `minute`,
		quarter: `quarter`,
		quarters: `quarter`,
		second: `second`,
		seconds: `second`,
		millisecond: `millisecond`,
		milliseconds: `millisecond`,
		weekday: `weekday`,
		weekdays: `weekday`,
		weeknumber: `weekNumber`,
		weeksnumber: `weekNumber`,
		weeknumbers: `weekNumber`,
		weekyear: `weekYear`,
		weekyears: `weekYear`,
		ordinal: `ordinal`
	}[_.toLowerCase()];
	if (!y) throw new InvalidUnitError(_);
	return y;
}
function normalizeUnitWithLocalWeeks(_) {
	switch (_.toLowerCase()) {
		case `localweekday`:
		case `localweekdays`: return `localWeekday`;
		case `localweeknumber`:
		case `localweeknumbers`: return `localWeekNumber`;
		case `localweekyear`:
		case `localweekyears`: return `localWeekYear`;
		default: return normalizeUnit(_);
	}
}
function guessOffsetForZone(_) {
	if (Xa === void 0 && (Xa = Settings.now()), _.type !== `iana`) return _.offset(Xa);
	let y = _.name, b = Za.get(y);
	return b === void 0 && (b = _.offset(Xa), Za.set(y, b)), b;
}
function quickDT(_, y) {
	let b = normalizeZone(y.zone, Settings.defaultZone);
	if (!b.isValid) return Qa.invalid(unsupportedZone(b));
	let x = yi.fromObject(y), S, C;
	if (isUndefined(_.year)) S = Settings.now();
	else {
		for (let y of qa) isUndefined(_[y]) && (_[y] = Wa[y]);
		let y = hasInvalidGregorianData(_) || hasInvalidTimeData(_);
		if (y) return Qa.invalid(y);
		let x = guessOffsetForZone(b);
		[S, C] = objToTS(_, x, b);
	}
	return new Qa({
		ts: S,
		zone: b,
		loc: x,
		o: C
	});
}
function diffRelative(_, y, b) {
	let x = isUndefined(b.round) ? !0 : b.round, S = isUndefined(b.rounding) ? `trunc` : b.rounding, format = (_, C) => (_ = roundTo(_, x || b.calendary ? 0 : 2, b.calendary ? `round` : S), y.loc.clone(b).relFormatter(b).format(_, C)), differ = (x) => b.calendary ? y.hasSame(_, x) ? 0 : y.startOf(x).diff(_.startOf(x), x).get(x) : y.diff(_, x).get(x);
	if (b.unit) return format(differ(b.unit), b.unit);
	for (let _ of b.units) {
		let y = differ(_);
		if (Math.abs(y) >= 1) return format(y, _);
	}
	return format(_ > y ? -0 : 0, b.units[b.units.length - 1]);
}
function lastOpts(_) {
	let y = {}, b;
	return _.length > 0 && typeof _[_.length - 1] == `object` ? (y = _[_.length - 1], b = Array.from(_).slice(0, _.length - 1)) : b = Array.from(_), [y, b];
}
var Xa, Za = /* @__PURE__ */ new Map(), Qa = class DateTime {
	constructor(_) {
		let y = _.zone || Settings.defaultZone, b = _.invalid || (Number.isNaN(_.ts) ? new Invalid(`invalid input`) : null) || (y.isValid ? null : unsupportedZone(y));
		this.ts = isUndefined(_.ts) ? Settings.now() : _.ts;
		let x = null, S = null;
		if (!b) if (_.old && _.old.ts === this.ts && _.old.zone.equals(y)) [x, S] = [_.old.c, _.old.o];
		else {
			let C = isNumber(_.o) && !_.old ? _.o : y.offset(this.ts);
			x = tsToObj(this.ts, C), b = Number.isNaN(x.year) ? new Invalid(`invalid input`) : null, x = b ? null : x, S = b ? null : C;
		}
		this._zone = y, this.loc = _.loc || yi.create(), this.invalid = b, this.weekData = null, this.localWeekData = null, this.c = x, this.o = S, this.isLuxonDateTime = !0;
	}
	static now() {
		return new DateTime({});
	}
	static local() {
		let [_, y] = lastOpts(arguments), [b, x, S, C, w, E, D] = y;
		return quickDT({
			year: b,
			month: x,
			day: S,
			hour: C,
			minute: w,
			second: E,
			millisecond: D
		}, _);
	}
	static utc() {
		let [_, y] = lastOpts(arguments), [b, x, S, C, w, E, D] = y;
		return _.zone = xi.utcInstance, quickDT({
			year: b,
			month: x,
			day: S,
			hour: C,
			minute: w,
			second: E,
			millisecond: D
		}, _);
	}
	static fromJSDate(_, y = {}) {
		let b = isDate(_) ? _.valueOf() : NaN;
		if (Number.isNaN(b)) return DateTime.invalid(`invalid input`);
		let x = normalizeZone(y.zone, Settings.defaultZone);
		return x.isValid ? new DateTime({
			ts: b,
			zone: x,
			loc: yi.fromObject(y)
		}) : DateTime.invalid(unsupportedZone(x));
	}
	static fromMillis(_, y = {}) {
		if (!isNumber(_)) throw new InvalidArgumentError(`fromMillis requires a numerical input, but received a ${typeof _} with value ${_}`);
		return _ < -864e13 || _ > Ua ? DateTime.invalid(`Timestamp out of range`) : new DateTime({
			ts: _,
			zone: normalizeZone(y.zone, Settings.defaultZone),
			loc: yi.fromObject(y)
		});
	}
	static fromSeconds(_, y = {}) {
		if (isNumber(_)) return new DateTime({
			ts: _ * 1e3,
			zone: normalizeZone(y.zone, Settings.defaultZone),
			loc: yi.fromObject(y)
		});
		throw new InvalidArgumentError(`fromSeconds requires a numerical input`);
	}
	static fromObject(_, y = {}) {
		_ ||= {};
		let b = normalizeZone(y.zone, Settings.defaultZone);
		if (!b.isValid) return DateTime.invalid(unsupportedZone(b));
		let x = yi.fromObject(y), S = normalizeObject(_, normalizeUnitWithLocalWeeks), { minDaysInFirstWeek: C, startOfWeek: w } = usesLocalWeekValues(S, x), E = Settings.now(), D = isUndefined(y.specificOffset) ? b.offset(E) : y.specificOffset, O = !isUndefined(S.ordinal), k = !isUndefined(S.year), A = !isUndefined(S.month) || !isUndefined(S.day), j = k || A, N = S.weekYear || S.weekNumber;
		if ((j || O) && N) throw new ConflictingSpecificationError(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);
		if (A && O) throw new ConflictingSpecificationError(`Can't mix ordinal dates with month/day`);
		let P = N || S.weekday && !j, F, I, L = tsToObj(E, D);
		P ? (F = Ja, I = Ga, L = gregorianToWeek(L, C, w)) : O ? (F = Ya, I = Ka, L = gregorianToOrdinal(L)) : (F = qa, I = Wa);
		let R = !1;
		for (let _ of F) {
			let y = S[_];
			isUndefined(y) ? R ? S[_] = I[_] : S[_] = L[_] : R = !0;
		}
		let z = (P ? hasInvalidWeekData(S, C, w) : O ? hasInvalidOrdinalData(S) : hasInvalidGregorianData(S)) || hasInvalidTimeData(S);
		if (z) return DateTime.invalid(z);
		let [B, ee] = objToTS(P ? weekToGregorian(S, C, w) : O ? ordinalToGregorian(S) : S, D, b), te = new DateTime({
			ts: B,
			zone: b,
			o: ee,
			loc: x
		});
		return S.weekday && j && _.weekday !== te.weekday ? DateTime.invalid(`mismatched weekday`, `you can't specify both a weekday of ${S.weekday} and a date of ${te.toISO()}`) : te.isValid ? te : DateTime.invalid(te.invalid);
	}
	static fromISO(_, y = {}) {
		let [b, x] = parseISODate(_);
		return parseDataToDateTime(b, x, y, `ISO 8601`, _);
	}
	static fromRFC2822(_, y = {}) {
		let [b, x] = parseRFC2822Date(_);
		return parseDataToDateTime(b, x, y, `RFC 2822`, _);
	}
	static fromHTTP(_, y = {}) {
		let [b, x] = parseHTTPDate(_);
		return parseDataToDateTime(b, x, y, `HTTP`, y);
	}
	static fromFormat(_, y, b = {}) {
		if (isUndefined(_) || isUndefined(y)) throw new InvalidArgumentError(`fromFormat requires an input string and a format`);
		let { locale: x = null, numberingSystem: S = null } = b, [C, w, E, D] = parseFromTokens(yi.fromOpts({
			locale: x,
			numberingSystem: S,
			defaultToEN: !0
		}), _, y);
		return D ? DateTime.invalid(D) : parseDataToDateTime(C, w, b, `format ${y}`, _, E);
	}
	static fromString(_, y, b = {}) {
		return DateTime.fromFormat(_, y, b);
	}
	static fromSQL(_, y = {}) {
		let [b, x] = parseSQL(_);
		return parseDataToDateTime(b, x, y, `SQL`, _);
	}
	static invalid(_, y = null) {
		if (!_) throw new InvalidArgumentError(`need to specify a reason the DateTime is invalid`);
		let b = _ instanceof Invalid ? _ : new Invalid(_, y);
		if (Settings.throwOnInvalid) throw new InvalidDateTimeError(b);
		return new DateTime({ invalid: b });
	}
	static isDateTime(_) {
		return _ && _.isLuxonDateTime || !1;
	}
	static parseFormatForOpts(_, y = {}) {
		let b = formatOptsToTokens(_, yi.fromObject(y));
		return b ? b.map((_) => _ ? _.val : null).join(``) : null;
	}
	static expandFormat(_, y = {}) {
		return expandMacroTokens(Ki.parseFormat(_), yi.fromObject(y)).map((_) => _.val).join(``);
	}
	static resetCache() {
		Xa = void 0, Za.clear();
	}
	get(_) {
		return this[_];
	}
	get isValid() {
		return this.invalid === null;
	}
	get invalidReason() {
		return this.invalid ? this.invalid.reason : null;
	}
	get invalidExplanation() {
		return this.invalid ? this.invalid.explanation : null;
	}
	get locale() {
		return this.isValid ? this.loc.locale : null;
	}
	get numberingSystem() {
		return this.isValid ? this.loc.numberingSystem : null;
	}
	get outputCalendar() {
		return this.isValid ? this.loc.outputCalendar : null;
	}
	get zone() {
		return this._zone;
	}
	get zoneName() {
		return this.isValid ? this.zone.name : null;
	}
	get year() {
		return this.isValid ? this.c.year : NaN;
	}
	get quarter() {
		return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
	}
	get month() {
		return this.isValid ? this.c.month : NaN;
	}
	get day() {
		return this.isValid ? this.c.day : NaN;
	}
	get hour() {
		return this.isValid ? this.c.hour : NaN;
	}
	get minute() {
		return this.isValid ? this.c.minute : NaN;
	}
	get second() {
		return this.isValid ? this.c.second : NaN;
	}
	get millisecond() {
		return this.isValid ? this.c.millisecond : NaN;
	}
	get weekYear() {
		return this.isValid ? possiblyCachedWeekData(this).weekYear : NaN;
	}
	get weekNumber() {
		return this.isValid ? possiblyCachedWeekData(this).weekNumber : NaN;
	}
	get weekday() {
		return this.isValid ? possiblyCachedWeekData(this).weekday : NaN;
	}
	get isWeekend() {
		return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
	}
	get localWeekday() {
		return this.isValid ? possiblyCachedLocalWeekData(this).weekday : NaN;
	}
	get localWeekNumber() {
		return this.isValid ? possiblyCachedLocalWeekData(this).weekNumber : NaN;
	}
	get localWeekYear() {
		return this.isValid ? possiblyCachedLocalWeekData(this).weekYear : NaN;
	}
	get ordinal() {
		return this.isValid ? gregorianToOrdinal(this.c).ordinal : NaN;
	}
	get monthShort() {
		return this.isValid ? Info.months(`short`, { locObj: this.loc })[this.month - 1] : null;
	}
	get monthLong() {
		return this.isValid ? Info.months(`long`, { locObj: this.loc })[this.month - 1] : null;
	}
	get weekdayShort() {
		return this.isValid ? Info.weekdays(`short`, { locObj: this.loc })[this.weekday - 1] : null;
	}
	get weekdayLong() {
		return this.isValid ? Info.weekdays(`long`, { locObj: this.loc })[this.weekday - 1] : null;
	}
	get offset() {
		return this.isValid ? +this.o : NaN;
	}
	get offsetNameShort() {
		return this.isValid ? this.zone.offsetName(this.ts, {
			format: `short`,
			locale: this.locale
		}) : null;
	}
	get offsetNameLong() {
		return this.isValid ? this.zone.offsetName(this.ts, {
			format: `long`,
			locale: this.locale
		}) : null;
	}
	get isOffsetFixed() {
		return this.isValid ? this.zone.isUniversal : null;
	}
	get isInDST() {
		return this.isOffsetFixed ? !1 : this.offset > this.set({
			month: 1,
			day: 1
		}).offset || this.offset > this.set({ month: 5 }).offset;
	}
	getPossibleOffsets() {
		if (!this.isValid || this.isOffsetFixed) return [this];
		let _ = 864e5, y = 6e4, b = objToLocalTS(this.c), x = this.zone.offset(b - _), S = this.zone.offset(b + _), C = this.zone.offset(b - x * y), w = this.zone.offset(b - S * y);
		if (C === w) return [this];
		let E = b - C * y, D = b - w * y, O = tsToObj(E, C), k = tsToObj(D, w);
		return O.hour === k.hour && O.minute === k.minute && O.second === k.second && O.millisecond === k.millisecond ? [clone(this, { ts: E }), clone(this, { ts: D })] : [this];
	}
	get isInLeapYear() {
		return isLeapYear(this.year);
	}
	get daysInMonth() {
		return daysInMonth(this.year, this.month);
	}
	get daysInYear() {
		return this.isValid ? daysInYear(this.year) : NaN;
	}
	get weeksInWeekYear() {
		return this.isValid ? weeksInWeekYear(this.weekYear) : NaN;
	}
	get weeksInLocalWeekYear() {
		return this.isValid ? weeksInWeekYear(this.localWeekYear, this.loc.getMinDaysInFirstWeek(), this.loc.getStartOfWeek()) : NaN;
	}
	resolvedLocaleOptions(_ = {}) {
		let { locale: y, numberingSystem: b, calendar: x } = Ki.create(this.loc.clone(_), _).resolvedOptions(this);
		return {
			locale: y,
			numberingSystem: b,
			outputCalendar: x
		};
	}
	toUTC(_ = 0, y = {}) {
		return this.setZone(xi.instance(_), y);
	}
	toLocal() {
		return this.setZone(Settings.defaultZone);
	}
	setZone(_, { keepLocalTime: y = !1, keepCalendarTime: b = !1 } = {}) {
		if (_ = normalizeZone(_, Settings.defaultZone), _.equals(this.zone)) return this;
		if (_.isValid) {
			let x = this.ts;
			if (y || b) {
				let y = _.offset(this.ts), b = this.toObject();
				[x] = objToTS(b, y, _);
			}
			return clone(this, {
				ts: x,
				zone: _
			});
		} else return DateTime.invalid(unsupportedZone(_));
	}
	reconfigure({ locale: _, numberingSystem: y, outputCalendar: b } = {}) {
		let x = this.loc.clone({
			locale: _,
			numberingSystem: y,
			outputCalendar: b
		});
		return clone(this, { loc: x });
	}
	setLocale(_) {
		return this.reconfigure({ locale: _ });
	}
	set(_) {
		if (!this.isValid) return this;
		let y = normalizeObject(_, normalizeUnitWithLocalWeeks), { minDaysInFirstWeek: b, startOfWeek: x } = usesLocalWeekValues(y, this.loc), S = !isUndefined(y.weekYear) || !isUndefined(y.weekNumber) || !isUndefined(y.weekday), C = !isUndefined(y.ordinal), w = !isUndefined(y.year), E = !isUndefined(y.month) || !isUndefined(y.day), D = w || E, O = y.weekYear || y.weekNumber;
		if ((D || C) && O) throw new ConflictingSpecificationError(`Can't mix weekYear/weekNumber units with year/month/day or ordinals`);
		if (E && C) throw new ConflictingSpecificationError(`Can't mix ordinal dates with month/day`);
		let k;
		S ? k = weekToGregorian({
			...gregorianToWeek(this.c, b, x),
			...y
		}, b, x) : isUndefined(y.ordinal) ? (k = {
			...this.toObject(),
			...y
		}, isUndefined(y.day) && (k.day = Math.min(daysInMonth(k.year, k.month), k.day))) : k = ordinalToGregorian({
			...gregorianToOrdinal(this.c),
			...y
		});
		let [A, j] = objToTS(k, this.o, this.zone);
		return clone(this, {
			ts: A,
			o: j
		});
	}
	plus(_) {
		if (!this.isValid) return this;
		let y = Pa.fromDurationLike(_);
		return clone(this, adjustTime(this, y));
	}
	minus(_) {
		if (!this.isValid) return this;
		let y = Pa.fromDurationLike(_).negate();
		return clone(this, adjustTime(this, y));
	}
	startOf(_, { useLocaleWeeks: y = !1 } = {}) {
		if (!this.isValid) return this;
		let b = {}, x = Pa.normalizeUnit(_);
		switch (x) {
			case `years`: b.month = 1;
			case `quarters`:
			case `months`: b.day = 1;
			case `weeks`:
			case `days`: b.hour = 0;
			case `hours`: b.minute = 0;
			case `minutes`: b.second = 0;
			case `seconds`:
				b.millisecond = 0;
				break;
		}
		if (x === `weeks`) if (y) {
			let _ = this.loc.getStartOfWeek(), { weekday: y } = this;
			y < _ && (b.weekNumber = this.weekNumber - 1), b.weekday = _;
		} else b.weekday = 1;
		return x === `quarters` && (b.month = (Math.ceil(this.month / 3) - 1) * 3 + 1), this.set(b);
	}
	endOf(_, y) {
		return this.isValid ? this.plus({ [_]: 1 }).startOf(_, y).minus(1) : this;
	}
	toFormat(_, y = {}) {
		return this.isValid ? Ki.create(this.loc.redefaultToEN(y)).formatDateTimeFromString(this, _) : Ha;
	}
	toLocaleString(_ = Lr, y = {}) {
		return this.isValid ? Ki.create(this.loc.clone(y), _).formatDateTime(this) : Ha;
	}
	toLocaleParts(_ = {}) {
		return this.isValid ? Ki.create(this.loc.clone(_), _).formatDateTimeParts(this) : [];
	}
	toISO({ format: _ = `extended`, suppressSeconds: y = !1, suppressMilliseconds: b = !1, includeOffset: x = !0, extendedZone: S = !1, precision: C = `milliseconds` } = {}) {
		if (!this.isValid) return null;
		C = normalizeUnit(C);
		let w = _ === `extended`, E = toISODate(this, w, C);
		return qa.indexOf(C) >= 3 && (E += `T`), E += toISOTime(this, w, y, b, x, S, C), E;
	}
	toISODate({ format: _ = `extended`, precision: y = `day` } = {}) {
		return this.isValid ? toISODate(this, _ === `extended`, normalizeUnit(y)) : null;
	}
	toISOWeekDate() {
		return toTechFormat(this, `kkkk-'W'WW-c`);
	}
	toISOTime({ suppressMilliseconds: _ = !1, suppressSeconds: y = !1, includeOffset: b = !0, includePrefix: x = !1, extendedZone: S = !1, format: C = `extended`, precision: w = `milliseconds` } = {}) {
		return this.isValid ? (w = normalizeUnit(w), (x && qa.indexOf(w) >= 3 ? `T` : ``) + toISOTime(this, C === `extended`, y, _, b, S, w)) : null;
	}
	toRFC2822() {
		return toTechFormat(this, `EEE, dd LLL yyyy HH:mm:ss ZZZ`, !1);
	}
	toHTTP() {
		return toTechFormat(this.toUTC(), `EEE, dd LLL yyyy HH:mm:ss 'GMT'`);
	}
	toSQLDate() {
		return this.isValid ? toISODate(this, !0) : null;
	}
	toSQLTime({ includeOffset: _ = !0, includeZone: y = !1, includeOffsetSpace: b = !0 } = {}) {
		let x = `HH:mm:ss.SSS`;
		return (y || _) && (b && (x += ` `), y ? x += `z` : _ && (x += `ZZ`)), toTechFormat(this, x, !0);
	}
	toSQL(_ = {}) {
		return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(_)}` : null;
	}
	toString() {
		return this.isValid ? this.toISO() : Ha;
	}
	[Symbol.for(`nodejs.util.inspect.custom`)]() {
		return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
	}
	valueOf() {
		return this.toMillis();
	}
	toMillis() {
		return this.isValid ? this.ts : NaN;
	}
	toSeconds() {
		return this.isValid ? this.ts / 1e3 : NaN;
	}
	toUnixInteger() {
		return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
	}
	toJSON() {
		return this.toISO();
	}
	toBSON() {
		return this.toJSDate();
	}
	toObject(_ = {}) {
		if (!this.isValid) return {};
		let y = { ...this.c };
		return _.includeConfig && (y.outputCalendar = this.outputCalendar, y.numberingSystem = this.loc.numberingSystem, y.locale = this.loc.locale), y;
	}
	toJSDate() {
		return new Date(this.isValid ? this.ts : NaN);
	}
	diff(_, y = `milliseconds`, b = {}) {
		if (!this.isValid || !_.isValid) return Pa.invalid(`created by diffing an invalid DateTime`);
		let x = {
			locale: this.locale,
			numberingSystem: this.numberingSystem,
			...b
		}, S = maybeArray(y).map(Pa.normalizeUnit), C = _.valueOf() > this.valueOf(), w = diff(C ? this : _, C ? _ : this, S, x);
		return C ? w.negate() : w;
	}
	diffNow(_ = `milliseconds`, y = {}) {
		return this.diff(DateTime.now(), _, y);
	}
	until(_) {
		return this.isValid ? Ia.fromDateTimes(this, _) : this;
	}
	hasSame(_, y, b) {
		if (!this.isValid) return !1;
		let x = _.valueOf(), S = this.setZone(_.zone, { keepLocalTime: !0 });
		return S.startOf(y, b) <= x && x <= S.endOf(y, b);
	}
	equals(_) {
		return this.isValid && _.isValid && this.valueOf() === _.valueOf() && this.zone.equals(_.zone) && this.loc.equals(_.loc);
	}
	toRelative(_ = {}) {
		if (!this.isValid) return null;
		let y = _.base || DateTime.fromObject({}, { zone: this.zone }), b = _.padding ? this < y ? -_.padding : _.padding : 0, x = [
			`years`,
			`months`,
			`days`,
			`hours`,
			`minutes`,
			`seconds`
		], S = _.unit;
		return Array.isArray(_.unit) && (x = _.unit, S = void 0), diffRelative(y, this.plus(b), {
			..._,
			numeric: `always`,
			units: x,
			unit: S
		});
	}
	toRelativeCalendar(_ = {}) {
		return this.isValid ? diffRelative(_.base || DateTime.fromObject({}, { zone: this.zone }), this, {
			..._,
			numeric: `auto`,
			units: [
				`years`,
				`months`,
				`days`
			],
			calendary: !0
		}) : null;
	}
	static min(..._) {
		if (!_.every(DateTime.isDateTime)) throw new InvalidArgumentError(`min requires all arguments be DateTimes`);
		return bestBy(_, (_) => _.valueOf(), Math.min);
	}
	static max(..._) {
		if (!_.every(DateTime.isDateTime)) throw new InvalidArgumentError(`max requires all arguments be DateTimes`);
		return bestBy(_, (_) => _.valueOf(), Math.max);
	}
	static fromFormatExplain(_, y, b = {}) {
		let { locale: x = null, numberingSystem: S = null } = b;
		return explainFromTokens(yi.fromOpts({
			locale: x,
			numberingSystem: S,
			defaultToEN: !0
		}), _, y);
	}
	static fromStringExplain(_, y, b = {}) {
		return DateTime.fromFormatExplain(_, y, b);
	}
	static buildFormatParser(_, y = {}) {
		let { locale: b = null, numberingSystem: x = null } = y;
		return new TokenParser(yi.fromOpts({
			locale: b,
			numberingSystem: x,
			defaultToEN: !0
		}), _);
	}
	static fromFormatParser(_, y, b = {}) {
		if (isUndefined(_) || isUndefined(y)) throw new InvalidArgumentError(`fromFormatParser requires an input string and a format parser`);
		let { locale: x = null, numberingSystem: S = null } = b, C = yi.fromOpts({
			locale: x,
			numberingSystem: S,
			defaultToEN: !0
		});
		if (!C.equals(y.locale)) throw new InvalidArgumentError(`fromFormatParser called with a locale of ${C}, but the format parser was created for ${y.locale}`);
		let { result: w, zone: E, specificOffset: D, invalidReason: O } = y.explainFromTokens(_);
		return O ? DateTime.invalid(O) : parseDataToDateTime(w, E, b, `format ${y.format}`, _, D);
	}
	static get DATE_SHORT() {
		return Lr;
	}
	static get DATE_MED() {
		return Rr;
	}
	static get DATE_MED_WITH_WEEKDAY() {
		return zr;
	}
	static get DATE_FULL() {
		return Br;
	}
	static get DATE_HUGE() {
		return Vr;
	}
	static get TIME_SIMPLE() {
		return Hr;
	}
	static get TIME_WITH_SECONDS() {
		return Ur;
	}
	static get TIME_WITH_SHORT_OFFSET() {
		return Wr;
	}
	static get TIME_WITH_LONG_OFFSET() {
		return Gr;
	}
	static get TIME_24_SIMPLE() {
		return Kr;
	}
	static get TIME_24_WITH_SECONDS() {
		return qr;
	}
	static get TIME_24_WITH_SHORT_OFFSET() {
		return Jr;
	}
	static get TIME_24_WITH_LONG_OFFSET() {
		return Yr;
	}
	static get DATETIME_SHORT() {
		return Xr;
	}
	static get DATETIME_SHORT_WITH_SECONDS() {
		return Zr;
	}
	static get DATETIME_MED() {
		return Qr;
	}
	static get DATETIME_MED_WITH_SECONDS() {
		return $r;
	}
	static get DATETIME_MED_WITH_WEEKDAY() {
		return ei;
	}
	static get DATETIME_FULL() {
		return ti;
	}
	static get DATETIME_FULL_WITH_SECONDS() {
		return ni;
	}
	static get DATETIME_HUGE() {
		return ri;
	}
	static get DATETIME_HUGE_WITH_SECONDS() {
		return ii;
	}
};
function friendlyDateTime(_) {
	if (Qa.isDateTime(_)) return _;
	if (_ && _.valueOf && isNumber(_.valueOf())) return Qa.fromJSDate(_);
	if (_ && typeof _ == `object`) return Qa.fromObject(_);
	throw new InvalidArgumentError(`Unknown datetime argument: ${_}, of type ${typeof _}`);
}
var $a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/i;
function validate(_) {
	return typeof _ == `string` && $a.test(_);
}
function parse(_) {
	if (!validate(_)) throw TypeError(`Invalid UUID`);
	let y;
	return Uint8Array.of((y = parseInt(_.slice(0, 8), 16)) >>> 24, y >>> 16 & 255, y >>> 8 & 255, y & 255, (y = parseInt(_.slice(9, 13), 16)) >>> 8, y & 255, (y = parseInt(_.slice(14, 18), 16)) >>> 8, y & 255, (y = parseInt(_.slice(19, 23), 16)) >>> 8, y & 255, (y = parseInt(_.slice(24, 36), 16)) / 1099511627776 & 255, y / 4294967296 & 255, y >>> 24 & 255, y >>> 16 & 255, y >>> 8 & 255, y & 255);
}
var eo = [];
for (let _ = 0; _ < 256; ++_) eo.push((_ + 256).toString(16).slice(1));
function unsafeStringify(_, y = 0) {
	return (eo[_[y + 0]] + eo[_[y + 1]] + eo[_[y + 2]] + eo[_[y + 3]] + `-` + eo[_[y + 4]] + eo[_[y + 5]] + `-` + eo[_[y + 6]] + eo[_[y + 7]] + `-` + eo[_[y + 8]] + eo[_[y + 9]] + `-` + eo[_[y + 10]] + eo[_[y + 11]] + eo[_[y + 12]] + eo[_[y + 13]] + eo[_[y + 14]] + eo[_[y + 15]]).toLowerCase();
}
function stringToBytes(_) {
	_ = unescape(encodeURIComponent(_));
	let y = new Uint8Array(_.length);
	for (let b = 0; b < _.length; ++b) y[b] = _.charCodeAt(b);
	return y;
}
var to = `6ba7b810-9dad-11d1-80b4-00c04fd430c8`, no = `6ba7b811-9dad-11d1-80b4-00c04fd430c8`;
function v35(_, y, b, x, S, C) {
	let w = typeof b == `string` ? stringToBytes(b) : b, E = typeof x == `string` ? parse(x) : x;
	if (typeof x == `string` && (x = parse(x)), x?.length !== 16) throw TypeError(`Namespace must be array-like (16 iterable integer values, 0-255)`);
	let D = new Uint8Array(16 + w.length);
	if (D.set(E), D.set(w, E.length), D = y(D), D[6] = D[6] & 15 | _, D[8] = D[8] & 63 | 128, S) {
		if (C ??= 0, C < 0 || C + 16 > S.length) throw RangeError(`UUID byte range ${C}:${C + 15} is out of buffer bounds`);
		for (let _ = 0; _ < 16; ++_) S[C + _] = D[_];
		return S;
	}
	return unsafeStringify(D);
}
function f(_, y, b, x) {
	switch (_) {
		case 0: return y & b ^ ~y & x;
		case 1: return y ^ b ^ x;
		case 2: return y & b ^ y & x ^ b & x;
		case 3: return y ^ b ^ x;
	}
}
function ROTL(_, y) {
	return _ << y | _ >>> 32 - y;
}
function sha1(_) {
	let y = [
		1518500249,
		1859775393,
		2400959708,
		3395469782
	], b = [
		1732584193,
		4023233417,
		2562383102,
		271733878,
		3285377520
	], x = new Uint8Array(_.length + 1);
	x.set(_), x[_.length] = 128, _ = x;
	let S = _.length / 4 + 2, C = Math.ceil(S / 16), w = Array(C);
	for (let y = 0; y < C; ++y) {
		let b = /* @__PURE__ */ new Uint32Array(16);
		for (let x = 0; x < 16; ++x) b[x] = _[y * 64 + x * 4] << 24 | _[y * 64 + x * 4 + 1] << 16 | _[y * 64 + x * 4 + 2] << 8 | _[y * 64 + x * 4 + 3];
		w[y] = b;
	}
	w[C - 1][14] = (_.length - 1) * 8 / 2 ** 32, w[C - 1][14] = Math.floor(w[C - 1][14]), w[C - 1][15] = (_.length - 1) * 8 & 4294967295;
	for (let _ = 0; _ < C; ++_) {
		let x = /* @__PURE__ */ new Uint32Array(80);
		for (let y = 0; y < 16; ++y) x[y] = w[_][y];
		for (let _ = 16; _ < 80; ++_) x[_] = ROTL(x[_ - 3] ^ x[_ - 8] ^ x[_ - 14] ^ x[_ - 16], 1);
		let S = b[0], C = b[1], E = b[2], D = b[3], O = b[4];
		for (let _ = 0; _ < 80; ++_) {
			let b = Math.floor(_ / 20), w = ROTL(S, 5) + f(b, C, E, D) + O + y[b] + x[_] >>> 0;
			O = D, D = E, E = ROTL(C, 30) >>> 0, C = S, S = w;
		}
		b[0] = b[0] + S >>> 0, b[1] = b[1] + C >>> 0, b[2] = b[2] + E >>> 0, b[3] = b[3] + D >>> 0, b[4] = b[4] + O >>> 0;
	}
	return Uint8Array.of(b[0] >> 24, b[0] >> 16, b[0] >> 8, b[0], b[1] >> 24, b[1] >> 16, b[1] >> 8, b[1], b[2] >> 24, b[2] >> 16, b[2] >> 8, b[2], b[3] >> 24, b[3] >> 16, b[3] >> 8, b[3], b[4] >> 24, b[4] >> 16, b[4] >> 8, b[4]);
}
function v5(_, y, b, x) {
	return v35(80, sha1, _, y, b, x);
}
v5.DNS = to, v5.URL = no;
var ro = {
	valueField: null,
	labelField: null,
	groupLabelField: `label`,
	groupItemsField: `options`,
	disabledField: `$disabled`,
	placeholder: `Select`,
	valueAsObject: !1,
	searchable: !0,
	clearable: !1,
	highlightFirstItem: !0,
	selectOnTab: !1,
	resetOnBlur: !0,
	resetOnSelect: !0,
	fetchProps: {},
	fetchResetOnBlur: !0,
	fetchDebounceTime: 300,
	multiple: !1,
	closeAfterSelect: `auto`,
	deselectMode: `toggle`,
	max: 0,
	collapseSelection: null,
	keepSelectionInList: `auto`,
	creatable: !1,
	creatablePrefix: `*`,
	keepCreated: !0,
	allowEditing: !1,
	delimiter: `,`,
	fetchCallback: void 0,
	minQuery: 1,
	lazyDropdown: !0,
	virtualList: !1,
	vlItemSize: void 0,
	i18n: {
		aria_label: ``,
		aria_describedby: ``,
		aria_selected: (_) => _.length ? `Option${_.length > 1 ? `s` : ``} ${_.join(`, `)} selected.` : ``,
		aria_listActive: (_, y, b) => `You are currently focused on option ${_[y]}. ${b} result${b > 1 ? `s` : ``} available.`,
		aria_inputFocused: () => `Select is focused, type to refine list, press down to scroll through the list`,
		aria_removeItemLabel: (_, y) => `Remove item`,
		empty: `No options`,
		nomatch: `No matching options`,
		max: (_) => `Maximum items ${_} selected`,
		fetchBefore: `Type to start searching`,
		fetchQuery: (_, y) => `Type at least ${_} character${_ > 1 ? `s` : ``} to start searching`,
		fetchInit: `Fetching data, please wait...`,
		fetchEmpty: `No data related to your search`,
		collapsedSelection: (_) => `${_} selected`,
		createRowLabel: (_) => `Add '${_}'`,
		emptyCreatable: `Add new by typing`
	},
	requestFactory: void 0
};
function debounce(_, y) {
	let b;
	return (...x) => {
		clearTimeout(b), b = setTimeout(() => {
			_.apply(this, x);
		}, y);
	};
}
function requestFactory(_, { url: y, parentValue: b, initial: x }, S) {
	b && (y = y.replace(`[parent]`, encodeURIComponent(b))), _ && (y = y.replace(`[query]`, encodeURIComponent(_))), Array.isArray(x) && x.length === 0 && (x = null), x && (y = y.replace(`[query]`, `init`));
	let C = y[0] === `/` ? new URL(y, window.location.origin) : new URL(y);
	if (x) {
		let _ = Array.isArray(x) ? x : [x];
		C.searchParams.append(`init`, _.join(`,`));
	}
	let w = new AbortController(), E = Object.assign({}, S, { signal: w.signal });
	return {
		request: new Request(C, E),
		controller: w
	};
}
var Sifter = function(_, y) {
	this.items = _, this.settings = y || { diacritics: !0 };
};
Sifter.prototype.tokenize = function(_, y, b) {
	if (_ = trim(String(_ || ``).toLowerCase()), !_ || !_.length) return [];
	var x, S, C, w, E = [], D = _.split(/ +/);
	for (x = 0, S = D.length; x < S; x++) {
		if (C = escape_regex(D[x]), this.settings.diacritics) for (w in io) io.hasOwnProperty(w) && (C = C.replace(new RegExp(w, `g`), io[w]));
		y ? C = `\\b` + C : b && (C = `\\b^` + C), E.push({
			string: D[x],
			regex: new RegExp(C, `i`)
		});
	}
	return E;
}, Sifter.prototype.iterator = function(_, y) {
	(Array.isArray(_) ? Array.prototype.forEach || function(_) {
		for (var y = 0, b = this.length; y < b; y++) _(this[y], y, this);
	} : function(_) {
		for (var y in this) this.hasOwnProperty(y) && _(this[y], y, this);
	}).apply(_, [y]);
}, Sifter.prototype.getScoreFunction = function(_, y) {
	var b = this, x, S, C, w;
	_ = b.prepareSearch(_, y), S = _.tokens, x = _.options.fields, C = S.length, w = _.options.nesting;
	var scoreValue = function(_, y) {
		var b, x;
		return !_ || (_ = String(_ || ``), x = _.search(y.regex), x === -1) ? 0 : (b = y.string.length / _.length, x === 0 && (b += .5), b);
	}, E = (function() {
		var _ = x.length;
		return _ ? _ === 1 ? function(_, y) {
			return scoreValue(getattr(y, x[0], w), _);
		} : function(y, b) {
			for (var S = 0, C = 0; S < _; S++) C += scoreValue(getattr(b, x[S], w), y);
			return C / _;
		} : function() {
			return 0;
		};
	})();
	return C ? C === 1 ? function(_) {
		return E(S[0], _);
	} : _.options.conjunction === `and` ? function(_) {
		for (var y, b = 0, x = 0; b < C; b++) {
			if (y = E(S[b], _), y <= 0) return 0;
			x += y;
		}
		return x / C;
	} : function(_) {
		for (var y = 0, b = 0; y < C; y++) b += E(S[y], _);
		return b / C;
	} : function() {
		return 0;
	};
}, Sifter.prototype.getSortFunction = function(_, y) {
	var b, x, S = this, C, w, E, D, O, get_field, k, A;
	if (_ = S.prepareSearch(_, y), A = !_.query && y.sort_empty || y.sort, get_field = function(_, b) {
		return _ === `$score` ? b.score : getattr(S.items[b.id], _, y.nesting);
	}, w = [], A) for (b = 0, x = A.length; b < x; b++) (_.query || A[b].field !== `$score`) && w.push(A[b]);
	if (_.query) {
		for (k = !0, b = 0, x = w.length; b < x; b++) if (w[b].field === `$score`) {
			k = !1;
			break;
		}
		k && w.unshift({
			field: `$score`,
			direction: `desc`
		});
	} else for (b = 0, x = w.length; b < x; b++) if (w[b].field === `$score`) {
		w.splice(b, 1);
		break;
	}
	for (O = [], b = 0, x = w.length; b < x; b++) O.push(w[b].direction === `desc` ? -1 : 1);
	return E = w.length, E ? E === 1 ? (C = w[0].field, D = O[0], function(_, y) {
		return D * cmp(get_field(C, _), get_field(C, y));
	}) : function(_, y) {
		var b, x, S;
		for (b = 0; b < E; b++) if (S = w[b].field, x = O[b] * cmp(get_field(S, _), get_field(S, y)), x) return x;
		return 0;
	} : null;
}, Sifter.prototype.prepareSearch = function(_, y) {
	if (typeof _ == `object`) return _;
	y = extend$1({}, y);
	var b = y.fields, x = y.sort, S = y.sort_empty;
	return b && !Array.isArray(b) && (y.fields = [b]), x && !Array.isArray(x) && (y.sort = [x]), S && !Array.isArray(S) && (y.sort_empty = [S]), {
		options: y,
		query: String(_ || ``).toLowerCase(),
		tokens: this.tokenize(_, y.wordsOnly, y.startOnly),
		total: 0,
		items: []
	};
}, Sifter.prototype.search = function(_, y) {
	var b = this, x, S = this.prepareSearch(_, y), C, w;
	return y = S.options, _ = S.query, w = y.score || b.getScoreFunction(S), _.length ? b.iterator(b.items, function(_, b) {
		x = w(_), (y.filter === !1 || x > 0) && S.items.push({
			score: x,
			id: b
		});
	}) : b.iterator(b.items, function(_, y) {
		S.items.push({
			score: 1,
			id: y
		});
	}), C = b.getSortFunction(S, y), C && S.items.sort(C), S.total = S.items.length, typeof y.limit == `number` && (S.items = S.items.slice(0, y.limit)), S;
};
var cmp = function(_, y) {
	return typeof _ == `number` && typeof y == `number` ? _ > y ? 1 : _ < y ? -1 : 0 : (_ = ao(String(_ || ``)), y = ao(String(y || ``)), _ > y ? 1 : y > _ ? -1 : 0);
}, extend$1 = function(_, y) {
	var b, x, S, C;
	for (b = 1, x = arguments.length; b < x; b++) if (C = arguments[b], C) for (S in C) C.hasOwnProperty(S) && (_[S] = C[S]);
	return _;
}, getattr = function(_, y, b) {
	if (!(!_ || !y)) {
		if (!b) return _[y];
		for (var x = y.split(`.`); x.length && (_ = _[x.shift()]););
		return _;
	}
}, trim = function(_) {
	return (_ + ``).replace(/^\s+|\s+$|/g, ``);
}, escape_regex = function(_) {
	return (_ + ``).replace(/([.?*+^$[\]\\(){}|-])/g, `\\$1`);
}, io = {
	a: `[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]`,
	b: `[b␢βΒB฿𐌁ᛒ]`,
	c: `[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]`,
	d: `[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]`,
	e: `[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]`,
	f: `[fƑƒḞḟ]`,
	g: `[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]`,
	h: `[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]`,
	i: `[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]`,
	j: `[jȷĴĵɈɉʝɟʲ]`,
	k: `[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]`,
	l: `[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]`,
	n: `[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]`,
	o: `[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]`,
	p: `[pṔṕṖṗⱣᵽƤƥᵱ]`,
	q: `[qꝖꝗʠɊɋꝘꝙq̃]`,
	r: `[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]`,
	s: `[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]`,
	t: `[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]`,
	u: `[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]`,
	v: `[vṼṽṾṿƲʋꝞꝟⱱʋ]`,
	w: `[wẂẃẀẁŴŵẄẅẆẇẈẉ]`,
	x: `[xẌẍẊẋχ]`,
	y: `[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]`,
	z: `[zŹźẐẑŽžŻżẒẓẔẕƵƶ]`
}, ao = (function() {
	var _, y, b, x, S = ``, C = {};
	for (b in io) if (io.hasOwnProperty(b)) for (x = io[b].substring(2, io[b].length - 1), S += x, _ = 0, y = x.length; _ < y; _++) C[x.charAt(_)] = b;
	var w = RegExp(`[` + S + `]`, `g`);
	return function(_) {
		return _.replace(w, function(_) {
			return C[_];
		}).toLowerCase();
	};
})(), oo;
function highlightSearch(_, y, b, x, S) {
	let C = x(_, y, b);
	if (b == `` || _.isSelected || S) return C;
	oo ||= document.createElement(`div`), oo.innerHTML = C;
	let w = ao(b);
	return (w.includes(`|`) ? w.split(`|`).map((_) => _.trim()) : w.split(` `)).filter((_) => _).forEach((_) => {
		highlight(oo, _);
	}), oo.innerHTML;
}
function highlight(_, y) {
	let b = 0;
	if (_.nodeType === 3) {
		let x = ao(_.data), S = x.indexOf(y);
		if (S -= x.substr(0, S).toUpperCase().length - x.substr(0, S).length, S >= 0) {
			let x = document.createElement(`span`);
			x.className = `highlight`;
			let C = _.splitText(S);
			C.splitText(y.length);
			let w = C.cloneNode(!0);
			x.appendChild(w), C.parentNode.replaceChild(x, C), b = 1;
		}
	} else if (_.nodeType === 1 && _.childNodes && !/(script|style)/i.test(_.tagName) && (_.className !== `highlight` || _.tagName !== `SPAN`)) for (var x = 0; x < _.childNodes.length; ++x) x += highlight(_.childNodes[x], y);
	return b;
}
function android$1() {
	return navigator.userAgent.toLowerCase().includes(`android`);
}
function onCreate_helper(_) {
	return (_ || ``).replace(/\t/g, ` `).trim().split(` `).filter((_) => _).join(` `);
}
function escapeHtml(_) {
	return `${_}`.replace(/&/g, `&amp;`).replace(/</g, `&lt;`).replace(/>/g, `&gt;`).replace(/"/g, `&quot;`).replace(/'/g, `&#39;`);
}
function cubicOut(_) {
	let y = _ - 1;
	return y * y * y + 1;
}
function flip(_, { from: y, to: b }, x = {}) {
	var { delay: S = 0, duration = (_) => Math.sqrt(_) * 120, easing: C = cubicOut } = x, w = getComputedStyle(_), E = w.transform === `none` ? `` : w.transform, [D, O] = w.transformOrigin.split(` `).map(parseFloat);
	D /= _.clientWidth, O /= _.clientHeight;
	var k = get_zoom(_), A = _.clientWidth / b.width / k, j = _.clientHeight / b.height / k, N = y.left + y.width * D, P = y.top + y.height * O, F = b.left + b.width * D, I = b.top + b.height * O, L = (N - F) * A, R = (P - I) * j, z = y.width / b.width, B = y.height / b.height;
	return {
		delay: S,
		duration: typeof duration == `function` ? duration(Math.sqrt(L * L + R * R)) : duration,
		easing: C,
		css: (_, y) => `transform: ${E} translate(${y * L}px, ${y * R}px) scale(${_ + y * z}, ${_ + y * B});`
	};
}
function get_zoom(_) {
	if (`currentCSSZoom` in _) return _.currentCSSZoom;
	for (var y = _, b = 1; y !== null;) b *= +getComputedStyle(y).zoom, y = y.parentElement;
	return b;
}
function pixelGetter(_, y) {
	let { groups: { value: b, unit: x } } = window.getComputedStyle(_)[y].match(/(?<value>\d+)(?<unit>[a-zA-Z]+)/), S = parseFloat(b);
	if (x !== `px`) {
		let y = x === `rem` ? document.documentElement : _.parentElement.parentElement;
		S = parseFloat(window.getComputedStyle(y).fontSize.match(/\d+/).shift()) * S;
	}
	return S;
}
function isOutOfViewport(_) {
	let y = _.parentElement.parentElement.getBoundingClientRect(), b = _.getBoundingClientRect(), x = {};
	return x.top = y.top < 0, x.left = y.left < 0, x.bottom = y.bottom + b.height > (window.innerHeight || document.documentElement.clientHeight) && y.top > b.height && (window.innerHeight || document.documentElement.clientHeight) > b.height + 50, x.right = y.right > (window.innerWidth || document.documentElement.clientWidth), x.any = x.top || x.left || x.bottom || x.right, x;
}
function positionDropdown(_, y, b) {
	if (!y || !b) return;
	let x = isOutOfViewport(y);
	x.bottom && !x.top ? y.parentElement.style.bottom = y.parentElement.parentElement.clientHeight + 1 + `px` : (!_ || x.top || y.parentElement.style.bottom !== ``) && (y.parentElement.style.bottom = ``);
}
function scrollIntoView$2({ container: _, scrollContainer: y, virtualList: b, center: x }, S) {
	if (b || !_) return;
	let C = _.querySelector(`[data-pos="${S}"]`);
	if (!C) return;
	let w = C.getBoundingClientRect(), E = y.getBoundingClientRect(), D = C.offsetHeight / 3, O = x ? y.offsetHeight / 2 : 0;
	switch (!0) {
		case C.offsetTop < y.scrollTop:
			y.scrollTop = C.offsetTop - D + O;
			break;
		case C.offsetTop + w.height > y.scrollTop + E.height:
			y.scrollTop = C.offsetTop + w.height - y.offsetHeight + D + O;
			break;
	}
}
function createConfig(_, y, b, x) {
	return {
		optionProps: [],
		optionsWithGroups: !1,
		valueField: _,
		labelField: y,
		optLabel: b,
		optItems: x
	};
}
function initSelection(_, y, b, x) {
	let S = Array.isArray(y) ? y : [y];
	return b && (S = S.map((_) => _[x])), _.reduce((_, y) => (S.includes(y[x]) && (y.$selected = !0, _.push(y)), _), []).sort((_, y) => S.indexOf(_[x]) < S.indexOf(y[x]) ? -1 : 1);
}
function ensureObjectArray(_, y, b) {
	return typeof _[0] == `object` ? JSON.parse(JSON.stringify(_)) : _.map((_) => ({
		[y || `value`]: _,
		[b || `text`]: _
	}));
}
function flatList(_, y) {
	let b = _.reduce((_, b, x) => b[y.optItems] ? b[y.optItems].length === 0 ? _ : (y.optionsWithGroups = !0, _.push({
		label: b[y.optLabel],
		$isGroupHeader: !0
	}), _.push(...b[y.optItems].map((_) => (_.$isGroupItem = !0, _))), _) : (_.push(b), _), []);
	return updateOptionProps(b, y), b;
}
function updateOptionProps(_, y) {
	_.some((_) => _.$isGroupHeader ? !1 : (y.optionProps = getFilterProps(_), !0));
}
function getFilterProps(_) {
	let y = [
		`$disabled`,
		`$isGroupHeader`,
		`$isGroupItem`,
		`$created`,
		`$selected`
	];
	return Object.keys(_).filter((_) => !y.includes(_));
}
function filterList(_, y, b, x, S = {}) {
	if (!S.keepSelectionInList && b && (_ = _.filter((_) => !b.has(_[x.valueField])).filter((_, y, b) => !(_.$isGroupHeader && (b[y + 1] && b[y + 1].$isGroupHeader || b.length <= 1 || b.length - 1 === y)))), S.disabled || !y) return _;
	let C = new Sifter(_);
	(x.optionsWithGroups || S.skipSort) && (C.getSortFunction = () => null);
	let w = `and`;
	y.includes(`|`) && (w = `or`, y = y.split(`|`).map((_) => _.trim()).join(` `));
	let E = C.search(y, {
		fields: S.fields || x.optionProps,
		sort: S.sort || createSifterSortField(x.labelField),
		conjunction: S.conjunction || w,
		nesting: S.nesting || !1,
		wordsOnly: S.wordsOnly || !1,
		startOnly: S.startOnly || !1
	});
	return x.optionsWithGroups ? E.items.reduce((y, x) => {
		let S = _[x.id];
		if (b && S.isSelected) return y;
		let C = y.push(S);
		if (S.$isGroupItem) {
			let b = _.slice(0, x.id), S = null;
			do
				S = b.pop(), S && S.$isGroupHeader && !y.includes(S) && y.splice(C - 1, 0, S);
			while (S && !S.$isGroupHeader);
		}
		return y;
	}, []) : E.items.map((y) => _[y.id]);
}
function createSifterSortField(_) {
	return [{
		field: _,
		direction: `asc`
	}];
}
function fieldInit(_, y, b) {
	let x = _ === `value`, S = x ? `value` : `text`;
	if (y && y.length) {
		let _ = y[0][b] ? y[0][b][0] : y[0];
		if (!_ || typeof _ == `string`) return S;
		let C = +!x, w = x ? [
			`id`,
			`value`,
			`ID`
		] : [
			`name`,
			`title`,
			`label`
		];
		S = Object.keys(_).filter((_) => w.includes(_)).concat([Object.keys(_)[C]]).shift();
	}
	return S;
}
function bindItem(_, y) {
	return _.bound_item = y, { destroy: () => {} };
}
var so = from_html(`<svelecte-list-row><!></svelecte-list-row>`, 2), co = from_html(`<svelecte-list-viewport><svelecte-list-content></svelecte-list-content></svelecte-list-viewport>`, 2);
function VirtualList(_, y) {
	push(y, !0);
	let b = prop(y, `itemHeight`, 3, null);
	function resolveItemSize() {
		return get(A).firstElementChild?.offsetHeight || 0;
	}
	let x = y.itemCount, S = y.scrollToIndex, C = 0, w = state(0), E = state(0), D = state(0), O = state(0), k = state(null), A = state(null), j = state(proxy(b())), N = user_derived(() => `height:${get(O)}px;width:100%`), P = user_derived(() => {
		let _ = [];
		for (let y = get(w); y < get(E); y++) _.push({ index: y });
		return _;
	});
	function updateScrollIndex(_) {
		if (S = _, (_ < 0 || _ > y.itemCount) && (_ = 0), get(w) < _ && _ < get(E) - 1) return;
		let b = _ * get(j), x = b - get(k).clientHeight + get(j), D = y.itemCount * get(j), O = Math.max(x, Math.min(b, C));
		C = Math.max(0, Math.min(D - get(k).clientHeight, O)), get(k).scroll({
			top: C,
			behavior: `auto`
		});
	}
	async function refresh(_) {
		!get(j) && _ && get(E) === 0 && (set(E, 1), await tick(), set(j, resolveItemSize(), !0)), x = _, set(O, Math.min(y.maxHeight, _ * get(j)), !0), set(E, Math.min(_, Math.round(y.maxHeight / get(j))), !0), await tick(), handle_scroll();
	}
	async function handle_scroll() {
		let { scrollTop: _ } = get(k), b = get(w), x = 0, S = 0;
		for (; x < y.itemCount;) {
			if (S + get(j) > _) {
				set(w, x, !0), set(D, S, !0);
				break;
			}
			S += get(j), x += 1;
		}
		for (; x < y.itemCount && (S += get(j), x += 1, !(S > _ + get(O))););
		if (set(E, x, !0), get(w) < b) {
			let y = 0, x = 0;
			for (let _ = get(w); _ < b; _ += 1) {
				let b = _ - get(w);
				get(w) <= b && b < get(E) && (y += get(j), x += get(j));
			}
			let S = x - y;
			get(k).scrollTo(0, _ + S);
		}
	}
	onMount(() => {
		refresh(y.itemCount), get(k)?.addEventListener(`scroll`, handle_scroll, { passive: !0 });
	}), onDestroy(() => {
		get(k)?.removeEventListener(`scroll`, handle_scroll);
	}), user_effect(() => {
		x !== y.itemCount && refresh(y.itemCount);
	}), user_effect(() => {
		S !== y.scrollToIndex && updateScrollIndex(y.scrollToIndex);
	});
	var F = { resolveItemSize }, I = co();
	set_class(I, 1, `svelte-15oxbj1`);
	var L = child(I);
	return set_class(L, 1, `svelte-15oxbj1`), each(L, 21, () => get(P), (_) => _.index, (_, b) => {
		var x = so();
		set_class(x, 1, `svelte-15oxbj1`), snippet(child(x), () => y.children ?? noop, () => get(b).index), reset(x), append(_, x);
	}), reset(L), bind_this(L, (_) => set(A, _), () => get(A)), reset(I), bind_this(I, (_) => set(k, _), () => get(k)), template_effect(() => {
		set_style(I, get(N)), set_style(L, `padding-top: ${get(D) ?? ``}px; height: ${y.itemCount * get(j)}px;`);
	}), append(_, I), pop(F);
}
var snippet_collapsedSelection = (_, y = noop, b = noop) => {
	var x = fo(), S = child(x, !0);
	reset(x), template_effect((_) => set_text(S, _), [() => b().collapsedSelection(y().length)]), append(_, x);
}, snippet_toggleIcon = (_, y = noop) => {
	append(_, _o());
};
ro.requestFactory = requestFactory;
var lo = {
	default(_) {
		return escapeHtml(_[this.label]);
	},
	html(_) {
		return _[this.label];
	}
}, _noop = (_) => ({ destroy: () => {} }), uo = ro, fo = from_html(`<span> </span>`), po = from_html(`<button class="sv-item--btn" tabindex="-1" type="button" data-action="deselect"><svg height="16" width="16" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg></button>`), mo = from_html(`<div class="sv-item--container"><div><div class="sv-item--content"></div></div> <!></div>`), ho = from_svg(`<svg class="indicator-icon svelte-kgu1bj" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path></svg>`), _o = from_svg(`<svg class="indicator-icon svelte-kgu1bj" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path></svg>`), vo = from_html(`<div class="sv-item--content"></div>`), yo = from_html(`<span> </span> <span class="shortcut svelte-kgu1bj"><kbd class="svelte-kgu1bj"> </kbd>+<kbd class="svelte-kgu1bj">Enter</kbd></span>`, 1), bo = from_html(`<span id="aria-selection"> </span> <span id="aria-context"> </span>`, 1), xo = from_html(`<option selected=""> </option>`), So = from_html(`<select size="1" class="sv-hidden-element" tabindex="-1" aria-hidden="true"></select>`), Co = from_html(`<button type="button" data-action="deselect" tabindex="-1"><!></button>`), wo = from_html(`<span class="sv-btn-separator svelte-kgu1bj"></span>`), To = from_html(`<div class="sv-optgroup-header"><b> </b></div>`), Eo = from_html(`<div><!></div>`), Do = from_html(`<div class="is-dropdown-row svelte-kgu1bj"><div><div class="sv-item--content"> </div></div></div>`), Oo = from_html(`<div class="is-dropdown-row svelte-kgu1bj"><button type="button"><!></button></div>`), ko = from_html(`<!> <div tabindex="-1"><div><!> <!></div></div> <!>`, 1), Ao = from_html(`<div role="none"><span aria-live="polite" aria-atomic="false" aria-relevant="additions text" class="a11y-text svelte-kgu1bj"><!></span> <!>  <div><!> <div><!> <span class="sv-input--sizer svelte-kgu1bj"><input type="text" size="1" autocapitalize="none" autocomplete="off" autocorrect="off" spellcheck="false" aria-autocomplete="list" tabindex="0"/></span></div>  <div><!> <!> <button type="button" data-action="toggle" tabindex="-1"><!></button></div> <!></div>  <div><!></div></div>`);
function Svelecte(_, y) {
	push(y, !0);
	let snippet_selection = (_, y = noop, b = noop) => {
		var x = comment$1();
		each(first_child(x), 25, y, (_) => _[get(U)], (_, y) => {
			var x = mo(), S = child(x);
			let C;
			var w = child(S);
			html(w, () => get(zt)(get(y), !0), !0), reset(w), reset(S);
			var E = sibling(S, 2), consequent = (_) => {
				var x = po();
				action(x, (_, y) => b()?.(_, y), () => get(y)), template_effect((_) => set_attribute(x, `aria-label`, _), [() => get(yt).aria_removeItemLabel(get(y), get(rt))]), append(_, x);
			};
			if_block(E, (_) => {
				V() && _(consequent);
			}), reset(x), template_effect(() => C = set_class(S, 1, `sv-item--wrap in-selection`, null, C, { "is-multi": V() })), delegated(`mousedown`, x, (_) => _.preventDefault()), animation(x, () => flip, () => ({ duration: get(Et) })), append(_, x);
		}), append(_, x);
	}, snippet_clearIcon = (_, y = noop, b = noop) => {
		var x = comment$1(), S = first_child(x), consequent_1 = (_) => {
			append(_, ho());
		};
		if_block(S, (_) => {
			get(W).length && _(consequent_1);
		}), append(_, x);
	}, snippet_option = (_, y = noop, b = noop) => {
		var x = vo();
		html(x, () => highlightSearch(y(), !1, b(), get(zt), F()), !0), reset(x), append(_, x);
	}, snippet_createRow = (_, y = noop, b = noop, x = noop) => {
		var S = yo(), C = first_child(S);
		let w;
		var E = child(C, !0);
		reset(C);
		var D = sibling(C, 2), O = child(D), k = child(O, !0);
		reset(O), next(2), reset(D), template_effect((_) => {
			w = set_class(C, 1, `svelte-kgu1bj`, null, w, { "is-loading": y() }), set_text(E, _), set_text(k, get(_t));
		}, [() => x().createRowLabel(b())]), append(_, S);
	}, b = prop(y, `name`, 3, ``), x = prop(y, `inputId`, 7, ``), S = prop(y, `required`, 3, !1), C = prop(y, `disabled`, 7, !1), w = prop(y, `options`, 23, () => []), E = prop(y, `valueField`, 19, () => ro.valueField), D = prop(y, `labelField`, 19, () => ro.labelField), O = prop(y, `groupLabelField`, 19, () => ro.groupLabelField), k = prop(y, `groupItemsField`, 19, () => ro.groupItemsField), A = prop(y, `disabledField`, 19, () => ro.disabledField), j = prop(y, `placeholder`, 19, () => ro.placeholder), N = prop(y, `searchable`, 19, () => ro.searchable), P = prop(y, `clearable`, 19, () => ro.clearable), F = prop(y, `disableHighlight`, 3, !1), I = prop(y, `highlightFirstItem`, 19, () => ro.highlightFirstItem), L = prop(y, `selectOnTab`, 19, () => ro.selectOnTab), R = prop(y, `resetOnBlur`, 19, () => ro.resetOnBlur), z = prop(y, `resetOnSelect`, 19, () => ro.resetOnSelect), B = prop(y, `closeAfterSelect`, 19, () => ro.closeAfterSelect), ee = prop(y, `deselectMode`, 19, () => ro.deselectMode), te = prop(y, `dndzone`, 3, _noop), ne = prop(y, `strictMode`, 3, !0), V = prop(y, `multiple`, 19, () => ro.multiple), re = prop(y, `max`, 19, () => ro.max), ie = prop(y, `collapseSelection`, 19, () => ro.collapseSelection), ae = prop(y, `keepSelectionInList`, 19, () => ro.keepSelectionInList), oe = prop(y, `creatable`, 19, () => ro.creatable), se = prop(y, `creatablePrefix`, 19, () => ro.creatablePrefix), ce = prop(y, `allowEditing`, 19, () => ro.allowEditing), le = prop(y, `keepCreated`, 19, () => ro.keepCreated), ue = prop(y, `delimiter`, 19, () => ro.delimiter), de = prop(y, `fetch`, 3, null), fe = prop(y, `fetchProps`, 19, () => ro.fetchProps), pe = prop(y, `fetchMode`, 3, `auto`), me = prop(y, `fetchCallback`, 19, () => ro.fetchCallback), he = prop(y, `fetchResetOnBlur`, 7, !0), ge = prop(y, `fetchDebounceTime`, 19, () => ro.fetchDebounceTime), _e = prop(y, `minQuery`, 19, () => ro.minQuery), ve = prop(y, `lazyDropdown`, 19, () => ro.lazyDropdown), ye = prop(y, `virtualList`, 19, () => ro.virtualList), be = prop(y, `vlItemSize`, 19, () => ro.vlItemSize), xe = prop(y, `searchProps`, 3, null), Se = prop(y, `class`, 3, `svelecte-control`), Ce = prop(y, `i18n`, 3, null), we = prop(y, `value`, 15), Te = prop(y, `readSelection`, 15), Ee = prop(y, `emitValues`, 3, !1), De = prop(y, `valueAsObject`, 19, () => ro.valueAsObject), Oe = prop(y, `parentValue`, 3, void 0), ke = prop(y, `onChange`, 3, (_) => {}), Ae = prop(y, `onFocus`, 3, (_) => {}), H = prop(y, `onBlur`, 3, (_) => {}), je = prop(y, `onCreateOption`, 3, (_) => {}), Me = prop(y, `onCreateFail`, 3, (_) => {}), Ne = prop(y, `onEnterKey`, 3, (_) => {}), Pe = prop(y, `onFetch`, 3, (_) => {}), Fe = prop(y, `onFetchError`, 3, (_) => {}), Ie = prop(y, `onInvalidValue`, 3, (_) => {}), Le = prop(y, `prepend`, 3, void 0), Re = prop(y, `collapsedSelection`, 3, snippet_collapsedSelection), ze = prop(y, `selection`, 3, snippet_selection), Be = prop(y, `clearIcon`, 3, snippet_clearIcon), Ve = prop(y, `toggleIcon`, 3, snippet_toggleIcon), He = prop(y, `append`, 3, void 0), Ue = prop(y, `listHeader`, 3, void 0), We = prop(y, `option`, 3, snippet_option), Ge = prop(y, `createRow`, 3, snippet_createRow), Ke = prop(y, `positionResolver`, 3, _noop), qe = prop(y, `anchor_element`, 3, void 0), Je = prop(y, `controlClass`, 3, void 0), Ye = prop(y, `dropdownClass`, 3, void 0), Xe = prop(y, `optionClass`, 3, void 0);
	function focus() {
		kt.focus();
	}
	function setSelection(_, y) {
		watch_value_change(_), y && emitChangeEvent();
	}
	function getSelection(_) {
		return compute_selection(!_);
	}
	function refetchWith(_) {
		de() && (fetch_runner({
			init: !0,
			initValue: _,
			storedValue: he()
		}), he(!1));
	}
	let Ze = b() ? `sv-${b()}-select-${`${Math.random()}`.substring(2, 6)}` : null;
	S() && !b() && console.warn(`[Svelecte]: 'required' prop has no effect when 'name' prop is NOT set`), de() && we() && De() && !ne() && (!w() || w() && w().length === 0) && w(Array.isArray(we()) ? we() : [we()]), x() || x(Ze ? Ze.replace(`-select-`, `-input-`) : `svelecte-input-${`${Math.random()}`.substring(2, 12)}`);
	let Qe = state(!1), $e = w(), et, tt, nt = y.optionResolver ? y.optionResolver(w(), /* @__PURE__ */ new Set()) : ensureObjectArray(w(), E(), D()), U = state(proxy(E() || fieldInit(`value`, nt, k()))), rt = state(proxy(D() || fieldInit(`label`, nt, k()))), it = createConfig(get(U), get(rt), O(), k()), at = state(proxy(flatList(nt, it))), ot = state(!1), st = user_derived(() => get(ot) ? [] : get(at));
	nt = void 0;
	let W = state(proxy(we() ? initSelection(get(st), we(), De(), get(U)) : [])), ct = get(W).reduce((_, y) => (_.add(y[get(U)]), _), /* @__PURE__ */ new Set()), lt = get(W).filter((_) => _.$created), ut = state(!1), dt = state(!1), ft = state(!1), pt = state(!1), mt = state(!1), ht = state(proxy(I() ? 0 : -1)), gt = state(!ve()), dropdown_scroller = null, _t = state(void 0), G = state(``), vt = !1, yt = user_derived(() => Object.assign({}, uo.i18n, Ce() || {})), bt = user_derived(() => pe() === `init` || de() && de().includes(`[query]`) === !1), xt = de() && (we() || V() && we() && we().length) ? De() ? ne() === !1 ? snapshot(we()) : null : JSON.parse(JSON.stringify(we())) : null, St = null, Ct = state(ie() !== null), wt = state(!1), Tt = state(!1), Et = state(100), Dt = !1, Ot = !1, kt, At, jt, Mt = state(null), Nt;
	user_effect(() => {
		watch_item_props(E(), D());
	});
	let Pt = user_derived(() => re() !== 0 && get(W).length == re());
	user_effect(() => {
		watch_options(w());
	}), user_effect(() => {
		we() !== void 0 && watch_value_change(we());
	});
	let Ft = null, It = user_derived(() => (get(W).length, get(st).length, !get(G) && de() && !get(bt) && he() ? [] : Ft || (get(Pt) ? [] : filterList(get(st), get(G), resolveExcludedValue(get(G)), it, xe() || {}))));
	user_effect(() => {
		let _ = get(It).length;
		oe() && get(G) && _++, _ <= get(ht) && setDropdownIndex(0, {
			asc: !oe(),
			desc: oe()
		}), watch_listMessage(get(Pt), get(It));
	}), I() && setDropdownIndex(0, { asc: !0 });
	let Lt = user_derived(() => y.createFilter || ((_) => lt.includes(_))), Rt = user_derived(() => y.createHandler || (({ inputValue: _, labelField: y, valueField: b, prefix: x }) => ({
		[b]: _,
		[y]: `${x}${_}`
	}))), zt = user_derived(() => typeof y.renderer == `function` ? y.renderer : (lo[y.renderer] ? lo[y.renderer] : lo.default).bind({ label: get(rt) })), Bt = user_derived(() => N() ? `text` : `none`), Vt = user_derived(() => get(W).length ? `` : j()), Ht = user_derived(() => get(W).length > 0 && V() === !1 ? null : `enter`), Ut = user_derived(() => get(yt).aria_selected(get(W).map((_) => _[get(rt)]))), Wt = user_derived(() => {
		if (get(W).length && get(W).length === re()) return get(yt).max(re());
		let _ = Math.min(get(ht), get(It).length - 1);
		return de() ? get(wt) ? get(yt).fetchInit : get(It).length ? get(ht) === -1 ? get(It)[get(ht)] ? get(yt).aria_listActive(get(It)[_], get(rt), get(It).filter((_) => !_.$isGroupHeader).length) : `N/A.` + get(ht) : get(yt).aria_inputFocused() : _e() > 1 ? get(yt).fetchQuery(_e(), get(G).length) : get(yt).fetchBefore : get(It).length ? get(pt) && get(ht) !== -1 && !isNaN(get(ht)) ? get(yt).aria_listActive(get(It)[_], get(rt), get(It).filter((_) => !_.$isGroupHeader).length) : get(yt).aria_inputFocused() : get(G).length ? get(yt).nomatch : get(yt).empty;
	});
	function watch_item_props(_, y) {
		get(Qe) && (_ && get(U) !== _ && (it.valueField = set(U, _, !0), ct.size > 0 && clearSelection()), y && (it.labelField = set(rt, y, !0)));
	}
	function watch_options(_) {
		if ($e !== _) {
			if (_ = flatList(ensureObjectArray(_, get(U), get(rt)), it), !E()) {
				let y = fieldInit(`value`, _ || null, k());
				!E() && get(U) !== y && (it.valueField = set(U, y, !0), ct.size > 0 && clearSelection());
			}
			if (!D()) {
				let y = fieldInit(`label`, _ || null, k());
				!D() && get(rt) !== y && (it.labelField = y, set(rt, y, !0));
			}
			$e = _, set(at, y.optionResolver ? y.optionResolver(_, ct) : _, !0);
		}
	}
	function equals(_, y) {
		if (V()) {
			if (_ && y?.length === _.length && _.length > 0) return De() ? _.every((_, b) => _[get(U)] === y[b][get(U)]) : _.every((_, b) => _ === y[b]);
		} else if (y && _) return De() ? y[get(U)] === _[get(U)] : y === _;
		return !1;
	}
	function watch_value_change(_, b) {
		if (equals(et, _) && !b?.skipEqualityCheck) return;
		let x = Array.isArray(_) && _.length || V() === !1;
		if (_ !== null && x) {
			if ((V() && !Array.isArray(_) || !V() && Array.isArray(_)) && console.warn(`[Svelecte]: Passed 'value' property should ${V() ? `be` : `NOT be`} an array`), xt && (!Array.isArray(xt) || xt.length)) return;
			let b = Array.isArray(_) ? _ : [_], x = [], S = b.reduce((_, b) => {
				if (De() && (!ne() || oe() && b.$created)) return _.push(Object.fromEntries(Object.entries(b))), _;
				let S = get(st).find((_) => De() ? _[get(U)] == b[get(U)] : _[get(U)] == b);
				return !S && !ne() && (S = y.createHandler ? get(Rt)({
					inputValue: b,
					valueField: get(U),
					labelField: get(rt),
					prefix: se()
				}) : {
					[get(U)]: b,
					[get(rt)]: b
				}), S && (ct.has(S[get(U)]) || _.push(S), x.push(S[get(U)])), _;
			}, []);
			if (get(W).forEach((_) => !x.includes(_[get(U)]) && deselectOption(_)), !(S.every(selectOption) && (V() ? ct.size === b.length : ct.size === 1))) {
				console.warn(`[Svelecte]: provided "value" property is invalid`, _), De() && ne() && de() && console.warn(`[Svelecte]: with 'fetch' and 'valueAsObject' set make sure 'strictMode' is set to false to be to set initial value`), clearSelection(), et = V() ? [] : null, we(et), Te(et), Ie()(_);
				return;
			}
		} else clearSelection();
		et = snapshot(_), V() && !Array.isArray(_) && (et = [], we(et)), Te(compute_selection(!0));
	}
	function compute_selection(_) {
		let y = _ !== !0, b = get(W).map((_) => {
			if (y) return _[get(U)];
			let b = {};
			for (let [y, x] of Object.entries(_)) y[0] !== `$` && (b[y] = x);
			return b;
		});
		return V() ? b : b.length ? b.shift() : null;
	}
	user_effect(() => {
		if (Oe() !== void 0 && tt !== Oe() || Oe() === void 0 && tt !== Oe()) {
			let _ = Oe() !== void 0 && !Oe();
			clearSelection(), we(V() ? [] : null), C(_);
		}
		tt = Oe(), Ot = Oe() !== void 0;
	});
	function updateDropdownState(_) {
		_ && !get(dt) && set(dt, !0);
		let y = get(gt);
		!get(gt) && _ && set(gt, !0), set(pt, _, !0), tick().then(() => {
			if (!y && ye()) return tick();
		}).then(() => {
			Ke() === _noop && positionDropdown(_, get(Mt), !0), _ && (I() && (get(W).length === 0 || V()) && setDropdownIndex(0, { asc: !0 }), !V() && get(W).length && set(ht, get(st).findIndex((_) => _[get(U)] === get(W)[0][get(U)]), !0), scrollIntoView$2({
				container: jt,
				scrollContainer: get(Mt),
				virtualList: ye(),
				center: !1
			}, get(ht))), tick().then(() => set(mt, _, !0));
		}), dropdown_scroller ||= () => Ke() === _noop && positionDropdown(_, get(Mt), !0), document[_ ? `addEventListener` : `removeEventListener`](`scroll`, dropdown_scroller, { passive: !0 });
	}
	function watch_listMessage(_, y) {
		if (!(de() && !get(bt))) {
			if (_) {
				set(qt, get(yt).max(re()), !0);
				return;
			}
			set(qt, y.length !== get(st).length && get(W).length !== get(st).length ? oe() ? get(yt).emptyCreatable : get(yt).nomatch : oe() ? get(yt).emptyCreatable : get(yt).empty, !0);
		}
	}
	function emitChangeEvent() {
		let _ = compute_selection(!0), y = compute_selection(!1);
		et = De() ? _ : y, we(et), Te(_), tick().then(() => {
			ke()(Ee() ? y : _), At && At.dispatchEvent(new Event(`change`));
		});
	}
	function onSelect(_, y) {
		if (y ||= _.detail, !(C() || y[A()] || y.$isGroupHeader)) {
			if (!y || V() && get(Pt)) return !1;
			if (ct.has(y[get(U)])) return !V() && ee() !== `toggle` ? void 0 : onDeselect(y);
			if (typeof y == `string`) {
				if (!oe() || (y = onCreate_helper(y), lt.includes(y) || ct.has(y))) return;
				set(Tt, !0), Promise.resolve().then(() => get(Rt)({
					inputValue: y,
					valueField: get(U),
					labelField: get(rt),
					prefix: se()
				})).then((_) => {
					set(Tt, !1), !de() && lt.push(y), _.$created = !0, le() && (get(at).push(_), _ = get(at)[get(at).length - 1]), je()(_), selectOption(_), onSelectTeardown(), emitChangeEvent();
				}).catch((_) => {
					set(Tt, !1), Me()({
						input: y,
						error: _
					});
				});
				return;
			}
			selectOption(y), onSelectTeardown(), emitChangeEvent();
		}
	}
	function onSelectTeardown() {
		(V() && z() || !V()) && set(G, ``), (B() === !0 || B() === `auto` && !V()) && updateDropdownState(!1), re() && get(W).length == re() && set(ht, 0);
	}
	function selectOption(_) {
		if (_.$selected = !0, V()) get(W).push(_), ct.add(_[get(U)]);
		else {
			let y = get(W).shift();
			y && (y.$selected = !1), set(W, [_], !0), ct.clear(), ct.add(_[get(U)]), tick().then(() => {
				let y = get(st).indexOf(_);
				set(ht, y < 0 ? 0 : y, !0);
			});
		}
		return y.optionResolver && tick().then(() => {
			set(at, y.optionResolver(w(), ct), !0);
		}), !0;
	}
	function onDeselect(_ = null, y) {
		C() || (_ ? (deselectOption(_, y), ae() !== !0 && tick().then(() => scrollIntoView$2({
			scrollContainer: get(Mt),
			container: jt,
			virtualList: ye(),
			center: !1
		}, get(ht)))) : clearSelection(), emitChangeEvent());
	}
	function deselectOption(_, b) {
		if (_.$created) {
			if (!le()) {
				lt.splice(lt.findIndex((y) => y === _[get(U)]), 1);
				let y = get(at).findIndex((y) => y[get(U)] === _[get(U)]);
				y !== -1 && get(at).splice(y, 1), set(at, get(at), !0);
			}
			b && ce() && set(G, _[get(rt)].replace(se(), ``), !0);
		}
		_.$selected = !1;
		let x = _[get(U)];
		if (ct.delete(x), get(W).splice(get(W).findIndex((_) => _[get(U)] == x), 1), y.optionResolver) {
			set(at, y.optionResolver(w(), ct), !0);
			return;
		}
		de() && !get(bt) && he() && set(ot, !0);
	}
	function clearSelection() {
		if (!(ct.size === 0 || !V() && ee() === `none`)) {
			if (ct.clear(), set(W, get(W).reduce((_, y) => (y.$selected = !1, []), []), !0), le() || (lt = []), get(G) && set(G, ``), y.optionResolver) {
				set(at, y.optionResolver(w(), ct), !0);
				return;
			}
			de() && !get(bt) && he() && set(ot, !0);
		}
	}
	function on_create(_) {
		_.preventDefault(), !lt.includes(get(G)) && onSelect(null, get(G));
	}
	function processKeyDown(_) {
		if (oe() && ue().indexOf(_.key) > -1) {
			get(G).length > 0 && onSelect(null, get(G)), _.preventDefault();
			return;
		}
		let y = L() && get(pt) && !_.shiftKey ? `Tab` : `No-tab`, b = St ? _.metaKey : _.ctrlKey, x = [`PageUp`, `PageDown`].includes(_.key), S = !1, C = !1;
		switch (_.key) {
			case `End`:
				if (get(G).length !== 0) return;
				setDropdownIndex(get(It).length, { desc: !0 });
			case `PageDown`: if (x) {
				let [_, y] = get_dropdown_dimensions();
				set(ht, Math.min(Math.ceil((y * get(ht) + _) / y), get(It).length + (oe() && get(G) ? 1 : 0)), !0);
			}
			case `ArrowUp`:
				if (_.preventDefault(), !get(pt)) {
					updateDropdownState(!0);
					return;
				}
				setDropdownIndex(get(ht) - 1, { desc: !0 }), tick().then(() => scrollIntoView$2({
					scrollContainer: get(Mt),
					container: jt,
					virtualList: ye(),
					center: !1
				}, get(ht)));
				break;
			case `Home`:
				if (C = !0, get(G).length !== 0 || get(G).length === 0 && get(It).length === 0) return;
				setDropdownIndex(0, { asc: !0 });
			case `PageUp`: if (x) {
				let [_, y] = get_dropdown_dimensions();
				set(ht, Math.floor((y * get(ht) - _) / y), !0);
			}
			case `ArrowDown`:
				if (_.preventDefault(), !get(pt)) {
					updateDropdownState(!0);
					return;
				}
				let w = get(ht) === null ? -1 : get(ht);
				!C && setDropdownIndex(w + 1, { asc: !0 }), tick().then(() => scrollIntoView$2({
					scrollContainer: get(Mt),
					container: jt,
					virtualList: ye(),
					center: !1
				}, get(ht)));
				break;
			case `Escape`:
				get(pt) && (_.preventDefault(), _.stopPropagation()), get(G) || updateDropdownState(!1), set(G, ``);
				break;
			case y:
			case `Enter`:
				if (!get(pt)) {
					_.key !== y && Ne()(_);
					return;
				}
				let E = b ? null : get(It)[get(ht)];
				if (oe() && !E && get(G)) {
					let _ = get(Lt)(onCreate_helper(get(G)));
					E = !E || b ? onCreate_helper(get(G)) : E, b = _;
				}
				if (!b && E && onSelect(null, E), get(It).length <= get(ht) && setDropdownIndex(get(It).length - 1), !E && get(W).length) {
					updateDropdownState(!1), _.key !== y && Ne()(_);
					return;
				}
				(_.key !== y || _.key === y && L() !== `select-navigate`) && _.preventDefault();
				break;
			case ` `:
				!de() && !get(pt) && (updateDropdownState(!0), _.preventDefault());
				break;
			case `Backspace`:
				if (ie() === `always`) return;
				S = !0;
			case `Delete`: if (get(G) === `` && get(W).length) {
				if (!V() && ee() === `none`) return;
				b ? onDeselect() : onDeselect(get(W)[get(W).length - 1], S), _.preventDefault();
			}
			default: !b && ![`Tab`, `Shift`].includes(_.key) && !get(pt) && !get(wt) && updateDropdownState(!0);
		}
	}
	function on_mouse_down(_) {
		_.preventDefault();
	}
	function on_click(_) {
		if (C()) return;
		let y = _.target.closest(`[data-action]`);
		if (get(dt) || set(dt, !0), y?.dataset.action === "default") return;
		_.preventDefault();
		let b = _.target.closest(`[data-pos]`);
		if (!y && !b) return focusControl(_.target);
		switch (y?.dataset.action || `select`) {
			case `deselect`:
				let _ = y.bound_item;
				if (!_) {
					let b = y.dataset.id;
					_ = get(W).filter((_) => _[get(U)] == b).shift();
				}
				onDeselect(_), _ && !get(ut) && kt.focus();
				break;
			case `select`:
				let x = parseInt(b.dataset.pos);
				onSelect(null, get(It)[x]);
				break;
			case `toggle`:
				updateDropdownState(!get(pt));
				break;
		}
	}
	function on_key_down(_) {
		if (android$1() && !get(Ht) && _.key === `Enter`) return !0;
		vt = [`Enter`, `Escape`].includes(_.key) && get(pt), processKeyDown(_);
	}
	function on_key_up(_) {
		vt && (_.stopImmediatePropagation(), _.preventDefault()), vt = !1;
	}
	function on_input() {
		get(W).length === 1 && V();
	}
	function on_focus() {
		set(ut, !0), updateDropdownState(get(dt)), get(ft) || set(ft, !0), ie() === `blur` && !Dt && setTimeout(() => {
			set(Ct, !1);
		}, 100), Ae()(kt);
	}
	function on_blur() {
		set(ut, !1), updateDropdownState(!1), set(dt, !1), R() ? set(G, ``) : Gt && !get(bt) && Gt.abort(`blur`), ie() === `blur` && !Dt && setTimeout(() => {
			set(Ct, !0);
		}, 100), H()(kt);
	}
	function on_paste(_) {
		if (oe()) {
			_.preventDefault();
			let y = RegExp(`([^` + ue() + `\\n]+)`, `g`), b = _.clipboardData.getData(`text/plain`).replace(/\//g, `/`).replace(/\t/g, ` `), x = b.match(y);
			x.length === 1 && b.indexOf(`,`) === -1 && set(G, x.pop().trim(), !0), x.forEach((_) => onSelect(null, _.trim()));
		}
	}
	function on_dnd_event(_) {
		Dt = _.type === `consider`, set(W, _.detail.items, !0), Dt || (emitChangeEvent(), ie() === `blur` && setTimeout(() => {
			set(Ct, !0);
		}, 200));
	}
	let Gt, Kt;
	user_effect(() => {
		trigger_fetch(get(G));
	}), user_effect(() => {
		watch_fetch_init(de(), Oe());
	});
	let qt = state(proxy(de() ? get(bt) ? get(yt).fetchInit : _e() > 1 ? get(yt).fetchQuery(_e(), 0) : get(yt).fetchBefore : oe() ? get(yt).emptyCreatable : get(yt).empty));
	function watch_fetch_init(_, y) {
		if (!_) {
			Kt = null;
			return;
		}
		(get(bt) || xt) && (set(wt, !0), fetch_runner({ init: !0 })), Kt = debounce(fetch_runner, ge());
	}
	function trigger_fetch(_) {
		if (get(bt) || get(Pt)) {
			set(qt, get(Pt) ? get(yt).max(re()) : get(yt).fetchInit, !0);
			return;
		}
		Kt && (Gt?.abort(), set(wt, !0), get(G).length < _e() && set(wt, !1), !y.optionResolver && he() && (Ft = []), set(mt, _.length >= _e() ? oe() : !0, !0), set(qt, get(Pt) ? get(yt).max(re()) : _e() <= 1 ? get(yt).fetchBefore : get(yt).fetchQuery(_e(), _.length), !0), Kt());
	}
	function fetch_runner(_ = {}) {
		if (Gt?.abort(), _.init !== !0 && !get(G).length || Ot && !Oe()) {
			set(wt, !1), he() && set(at, y.optionResolver ? y.optionResolver(w(), ct) : [], !0);
			return;
		}
		if (get(G) && get(G).length < _e()) {
			set(wt, !1);
			return;
		}
		get(bt) && et && (!V() || et?.length > 0) && (xt = et);
		let b = snapshot(xt || _.initValue), x;
		if (b && (x = De() ? V() ? b.map((_) => _[get(U)]) : b[get(U)] : b), get(bt)) set(qt, get(yt).fetchInit, !0);
		else if (b && y.optionResolver) {
			xt = null, set(qt, _e() > 1 ? get(yt).fetchQuery(_e(), get(G).length) : get(yt).fetchBefore, !0);
			return;
		}
		let S = ro.requestFactory(get(G), {
			parentValue: Oe(),
			url: de(),
			initial: x
		}, typeof fe() == `function` ? fe()() : fe());
		Gt?.abort(), Gt = S.controller, window.fetch(S.request).then((_) => _.json()).then((y) => (!Array.isArray(y) && y?.error && Fe()(y.error), Promise.resolve(me() ? me()(y) : y.data || y.items || y.options || y).then((y) => {
			Array.isArray(y) || (console.warn(`[Svelecte]:Fetch - array expected, invalid property provided:`, y), y = []), set(ot, !1), Ft = null, set(at, flatList(y, it), !0), Pe()(y), b && (xt = null, watch_value_change(b, { skipEqualityCheck: !0 }), `storedValue` in _ && he(_.storedValue));
		}))).catch((_) => {
			if (_ instanceof DOMException && _.name === `AbortError`) return !0;
			Ft = null, set(at, [], !0), Fe()(_), console.warn(`[Svelecte] Fetch Error:`, _);
		}).then((_) => {
			_ !== !0 && (set(qt, get(bt) ? get(yt).empty : b ? _e() > 1 ? get(yt).fetchQuery(_e(), 0) : get(yt).fetchBefore : get(yt).fetchEmpty, !0), Gt = null, set(wt, !1), get(ut) && updateDropdownState(!0), get(pt) && !get(mt) && set(mt, !0));
		});
	}
	function resolveExcludedValue(_) {
		return ae() ? ae() === !0 ? _ ? ct : null : _ || V() ? ct : null : ct;
	}
	function setDropdownIndex(_, y = {}, b = 0) {
		let x = oe() && get(G) ? get(It).length + 1 : get(It).length;
		if (!(b >= 2)) {
			if (_ < 0 && (_ = y.desc ? x - 1 : 0), (get(ht) === null && I() || _ >= x) && (_ = 0), get(It)[_]?.$isGroupHeader) {
				setDropdownIndex(y.asc ? _ + 1 : _ - 1, y, ++b);
				return;
			}
			set(ht, _, !0);
		}
	}
	function focusControl(_) {
		if (!C()) {
			if (!get(ut)) {
				kt.focus();
				return;
			}
			_.tagName === `INPUT` && get(G) || updateDropdownState(!get(pt));
		}
	}
	function get_dropdown_dimensions() {
		return ye() ? [pixelGetter(get(Mt), `maxHeight`) - pixelGetter(get(Mt), `paddingTop`) - pixelGetter(get(Mt), `paddingBottom`), Nt?.resolveItemSize()] : [get(Mt).offsetHeight, jt.firstElementChild.offsetHeight];
	}
	onMount(() => {
		set(Qe, !0), St = navigator.platform.indexOf(`Mac`) === 0 || navigator.platform === `iPhone`, set(_t, St ? `⌘` : `Ctrl`, !0), qe() && (At = document.getElementById(qe()), At.className = `sv-hidden-element`, At.innerHTML = ``, At.tabIndex = -1, At.disabled = C(), At.required = S(), At.multiple = V(), !V() && At.insertAdjacentHTML(`beforeend`, `<option value="" selected>Empty</option>`), ct.forEach((_) => {
			At.insertAdjacentHTML(`beforeend`, `<option value=${_} selected>${_}</option>`);
		})), window.matchMedia(`(prefers-reduced-motion: reduce)`).matches && set(Et, 0);
	});
	var Jt = {
		focus,
		setSelection,
		getSelection,
		refetchWith
	}, Yt = Ao();
	let Xt;
	var Zt = child(Yt), Qt = child(Zt), consequent_2 = (_) => {
		var y = bo(), b = first_child(y), x = child(b, !0);
		reset(b);
		var S = sibling(b, 2), C = child(S, !0);
		reset(S), template_effect(() => {
			set_text(x, get(Ut)), set_text(C, get(Wt));
		}), append(_, y);
	};
	if_block(Qt, (_) => {
		get(ut) && _(consequent_2);
	}), reset(Zt);
	var $t = sibling(Zt, 2), consequent_3 = (_) => {
		var y = So();
		each(y, 21, () => get(W), (_) => _[get(U)], (_, y) => {
			var b = xo(), x = child(b, !0);
			reset(b);
			var S = {};
			template_effect(() => {
				set_text(x, get(y)[get(U)]), S !== (S = get(y)[get(U)]) && (b.value = (b.__value = get(y)[get(U)]) ?? ``);
			}), append(_, b);
		}), reset(y), bind_this(y, (_) => At = _, () => At), template_effect(() => {
			set_attribute(y, `name`, b()), y.required = S(), y.multiple = V(), y.disabled = C(), set_attribute(y, `id`, Ze);
		}), append(_, y);
	};
	if_block($t, (_) => {
		b() && !qe() && _(consequent_3);
	});
	var en = sibling($t, 2), tn = child(en), consequent_4 = (_) => {
		var y = comment$1();
		snippet(first_child(y), Le), append(_, y);
	};
	if_block(tn, (_) => {
		Le() && _(consequent_4);
	});
	var nn = sibling(tn, 2);
	let rn;
	var an = child(nn), consequent_5 = (_) => {
		var y = comment$1();
		snippet(first_child(y), Re, () => get(W), () => get(yt)), append(_, y);
	}, consequent_6 = (_) => {
		var y = comment$1();
		snippet(first_child(y), ze, () => get(W), () => bindItem), append(_, y);
	};
	if_block(an, (_) => {
		get(W).length && V() && get(Ct) ? _(consequent_5) : get(W).length && _(consequent_6, 1);
	});
	var sn = sibling(an, 2), cn = child(sn);
	remove_input_defaults(cn);
	let ln;
	bind_this(cn, (_) => kt = _, () => kt), reset(sn), reset(nn), action(nn, (_, y) => te()?.(_, y), () => ({
		items: get(W),
		flipDurationMs: get(Et),
		type: x(),
		dragDisabled: get(Ct)
	}));
	var un = sibling(nn, 2);
	let dn;
	var pn = child(un), consequent_7 = (_) => {
		var y = Co();
		let b;
		snippet(child(y), Be, () => get(W), () => get(G)), reset(y), template_effect(() => b = set_class(y, 1, `sv-btn-indicator svelte-kgu1bj`, null, b, { "sv-has-selection": get(W).length })), append(_, y);
	};
	if_block(pn, (_) => {
		P() && !C() && _(consequent_7);
	});
	var mn = sibling(pn, 2), consequent_8 = (_) => {
		append(_, wo());
	};
	if_block(mn, (_) => {
		P() && _(consequent_8);
	});
	var hn = sibling(mn, 2);
	let gn;
	snippet(child(hn), Ve, () => get(pt)), reset(hn), reset(un);
	var _n = sibling(un, 2), consequent_9 = (_) => {
		var y = comment$1();
		snippet(first_child(y), He), append(_, y);
	};
	if_block(_n, (_) => {
		He() && _(consequent_9);
	}), reset(en);
	var vn = sibling(en, 2);
	let yn;
	var bn = child(vn), consequent_17 = (_) => {
		var y = ko(), b = first_child(y), consequent_10 = (_) => {
			var y = comment$1();
			snippet(first_child(y), Ue), append(_, y);
		};
		if_block(b, (_) => {
			Ue() && _(consequent_10);
		});
		var x = sibling(b, 2);
		let S;
		var C = child(x);
		let w;
		var E = child(C), consequent_12 = (_) => {
			{
				let children = (_, y = noop) => {
					let b = user_derived(() => get(It)[y()] || {});
					var x = comment$1(), S = first_child(x), consequent_11 = (_) => {
						var y = To(), x = child(y), S = child(x, !0);
						reset(x), reset(y), template_effect(() => set_text(S, get(b).label)), append(_, y);
					}, alternate = (_) => {
						var x = Eo();
						let S;
						snippet(child(x), We, () => get(b), () => get(G)), reset(x), template_effect((_) => {
							set_attribute(x, `data-pos`, y()), S = set_class(x, 1, `sv-item--wrap in-dropdown ${Xe() ?? ``}`, `svelte-kgu1bj`, S, _);
						}, [() => ({
							"sv-dd-item-active": get(ht) === y(),
							"is-selected": get(b).$selected || ct.has(get(b)[get(U)]),
							"is-disabled": get(b)[A()]
						})]), append(_, x);
					};
					if_block(S, (_) => {
						get(b).$isGroupHeader ? _(consequent_11) : _(alternate, -1);
					}), append(_, x);
				}, y = user_derived(() => get_dropdown_dimensions().shift()), b = user_derived(() => get(It).length || 0);
				bind_this(VirtualList(_, {
					get maxHeight() {
						return get(y);
					},
					get itemHeight() {
						return be();
					},
					get itemCount() {
						return get(b);
					},
					get scrollToIndex() {
						return get(ht);
					},
					children,
					$$slots: { default: !0 }
				}), (_) => Nt = _, () => Nt);
			}
		}, consequent_14 = (_) => {
			var y = comment$1();
			each(first_child(y), 17, () => get(It), index$1, (_, y, b) => {
				var x = comment$1(), S = first_child(x), consequent_13 = (_) => {
					var b = To(), x = child(b), S = child(x, !0);
					reset(x), reset(b), template_effect(() => set_text(S, get(y).label)), append(_, b);
				}, alternate_1 = (_) => {
					var x = Eo();
					set_attribute(x, `data-pos`, b);
					let S;
					snippet(child(x), We, () => get(y), () => get(G)), reset(x), template_effect(() => S = set_class(x, 1, `sv-item--wrap in-dropdown ${Xe() ?? ``}`, `svelte-kgu1bj`, S, {
						"sv-dd-item-active": get(ht) === b,
						"is-selected": get(y).$selected,
						"is-disabled": get(y)[A()]
					})), append(_, x);
				};
				if_block(S, (_) => {
					get(y).$isGroupHeader ? _(consequent_13) : _(alternate_1, -1);
				}), append(_, x);
			}), append(_, y);
		};
		if_block(E, (_) => {
			ye() && get(Mt) ? _(consequent_12) : ye() === !1 && _(consequent_14, 1);
		});
		var D = sibling(E, 2), consequent_15 = (_) => {
			var y = Do(), b = child(y), x = child(b), S = child(x, !0);
			reset(x), reset(b), reset(y), template_effect(() => {
				set_class(b, 1, `sv-item--wrap in-dropdown ${Xe() ?? ``}`, `svelte-kgu1bj`), set_text(S, get(qt));
			}), append(_, y);
		};
		if_block(D, (_) => {
			(get(It).length === 0 && (!oe() || !get(G)) || get(Pt)) && _(consequent_15);
		}), reset(C), bind_this(C, (_) => jt = _, () => jt), reset(x), bind_this(x, (_) => set(Mt, _), () => get(Mt));
		var O = sibling(x, 2), consequent_16 = (_) => {
			var y = Oo(), b = child(y);
			let x;
			snippet(child(b), Ge, () => get(Tt), () => get(G), () => get(yt)), reset(b), reset(y), template_effect((_, y) => {
				x = set_class(b, 1, `creatable-row svelte-kgu1bj`, null, x, _), b.disabled = y;
			}, [() => ({
				active: (get(It).length ? get(It).length : 0) === get(ht),
				"is-disabled": get(Lt)(get(G))
			}), () => get(Lt)(get(G))]), delegated(`click`, b, on_create), delegated(`mousedown`, b, (_) => _.preventDefault()), append(_, y);
		};
		if_block(O, (_) => {
			oe() && get(G) && !get(Pt) && _(consequent_16);
		}), template_effect(() => {
			S = set_class(x, 1, `sv-dropdown-scroll svelte-kgu1bj`, null, S, {
				"has-items": get(It).length > 0,
				"is-virtual": ye()
			}), w = set_class(C, 1, `sv-dropdown-content`, null, w, { "max-reached": get(Pt) });
		}), append(_, y);
	};
	return if_block(bn, (_) => {
		get(Qe) && get(gt) && _(consequent_17);
	}), reset(vn), action(vn, (_) => Ke()?.(_)), reset(Yt), template_effect(() => {
		Xt = set_class(Yt, 1, clsx([`svelecte`, Se()]), `svelte-kgu1bj`, Xt, {
			"is-required": S(),
			"is-empty": get(W).length === 0,
			"is-invalid": S() && get(W).length === 0,
			"is-tainted": get(ft),
			"is-valid": !S() || get(W).length > 0,
			"is-focused": get(ut),
			"is-open": get(pt),
			"is-disabled": C()
		}), set_class(en, 1, `sv-control ${Je() ?? ``}`, `svelte-kgu1bj`), rn = set_class(nn, 1, `sv-control--selection svelte-kgu1bj`, null, rn, {
			"is-single": V() === !1,
			"has-items": get(W).length > 0,
			"has-input": get(G).length
		}), set_attribute(sn, `data-value`, get(G) || get(Vt)), ln = set_class(cn, 1, `sv-input--text svelte-kgu1bj`, null, ln, { "keep-value": !R() }), set_attribute(cn, `id`, x()), set_attribute(cn, `placeholder`, get(G) ? `` : get(Vt)), set_attribute(cn, `inputmode`, get(Bt)), cn.readOnly = !N(), set_attribute(cn, `enterkeyhint`, get(Ht)), cn.disabled = C(), set_attribute(cn, `aria-label`, get(yt).aria_label), set_attribute(cn, `aria-describedby`, get(yt).aria_describedby), dn = set_class(un, 1, `sv-buttons svelte-kgu1bj`, null, dn, { "is-loading": get(wt) }), gn = set_class(hn, 1, `sv-btn-indicator svelte-kgu1bj`, null, gn, { "sv-dropdown-opened": get(pt) }), yn = set_class(vn, 1, `sv_dropdown ${Ye() ?? ``} `, `svelte-kgu1bj`, yn, { "is-open": get(mt) });
	}), delegated(`mousedown`, en, on_mouse_down), delegated(`click`, en, on_click), event(`consider`, nn, on_dnd_event), event(`finalize`, nn, on_dnd_event), event(`focus`, cn, on_focus), delegated(`keydown`, cn, on_key_down), delegated(`keyup`, cn, on_key_up), delegated(`input`, cn, on_input), event(`blur`, cn, on_blur), event(`paste`, cn, on_paste), bind_value(cn, () => get(G), (_) => set(G, _)), delegated(`mousedown`, vn, on_mouse_down), delegated(`click`, vn, on_click), append(_, Yt), pop(Jt);
}
delegate([
	`mousedown`,
	`click`,
	`keydown`,
	`keyup`,
	`input`
]);
var jo = Svelecte, Mo = class Text$1 {
	lineAt(_) {
		if (_ < 0 || _ > this.length) throw RangeError(`Invalid position ${_} in document of length ${this.length}`);
		return this.lineInner(_, !1, 1, 0);
	}
	line(_) {
		if (_ < 1 || _ > this.lines) throw RangeError(`Invalid line number ${_} in ${this.lines}-line document`);
		return this.lineInner(_, !0, 1, 0);
	}
	replace(_, y, b) {
		[_, y] = clip(this, _, y);
		let x = [];
		return this.decompose(0, _, x, 2), b.length && b.decompose(0, b.length, x, 3), this.decompose(y, this.length, x, 1), Po.from(x, this.length - (y - _) + b.length);
	}
	append(_) {
		return this.replace(this.length, this.length, _);
	}
	slice(_, y = this.length) {
		[_, y] = clip(this, _, y);
		let b = [];
		return this.decompose(_, y, b, 0), Po.from(b, y - _);
	}
	eq(_) {
		if (_ == this) return !0;
		if (_.length != this.length || _.lines != this.lines) return !1;
		let y = this.scanIdentical(_, 1), b = this.length - this.scanIdentical(_, -1), x = new RawTextCursor(this), S = new RawTextCursor(_);
		for (let _ = y, C = y;;) {
			if (x.next(_), S.next(_), _ = 0, x.lineBreak != S.lineBreak || x.done != S.done || x.value != S.value) return !1;
			if (C += x.value.length, x.done || C >= b) return !0;
		}
	}
	iter(_ = 1) {
		return new RawTextCursor(this, _);
	}
	iterRange(_, y = this.length) {
		return new PartialTextCursor(this, _, y);
	}
	iterLines(_, y) {
		let b;
		if (_ == null) b = this.iter();
		else {
			y ??= this.lines + 1;
			let x = this.line(_).from;
			b = this.iterRange(x, Math.max(x, y == this.lines + 1 ? this.length : y <= 1 ? 0 : this.line(y - 1).to));
		}
		return new LineCursor(b);
	}
	toString() {
		return this.sliceString(0);
	}
	toJSON() {
		let _ = [];
		return this.flatten(_), _;
	}
	constructor() {}
	static of(_) {
		if (_.length == 0) throw RangeError(`A document must have at least one line`);
		return _.length == 1 && !_[0] ? Text$1.empty : _.length <= 32 ? new No(_) : Po.from(No.split(_, []));
	}
}, No = class TextLeaf extends Mo {
	constructor(_, y = textLength(_)) {
		super(), this.text = _, this.length = y;
	}
	get lines() {
		return this.text.length;
	}
	get children() {
		return null;
	}
	lineInner(_, y, b, x) {
		for (let S = 0;; S++) {
			let C = this.text[S], w = x + C.length;
			if ((y ? b : w) >= _) return new Line(x, w, b, C);
			x = w + 1, b++;
		}
	}
	decompose(_, y, b, x) {
		let S = _ <= 0 && y >= this.length ? this : new TextLeaf(sliceText(this.text, _, y), Math.min(y, this.length) - Math.max(0, _));
		if (x & 1) {
			let _ = b.pop(), y = appendText(S.text, _.text.slice(), 0, S.length);
			if (y.length <= 32) b.push(new TextLeaf(y, _.length + S.length));
			else {
				let _ = y.length >> 1;
				b.push(new TextLeaf(y.slice(0, _)), new TextLeaf(y.slice(_)));
			}
		} else b.push(S);
	}
	replace(_, y, b) {
		if (!(b instanceof TextLeaf)) return super.replace(_, y, b);
		[_, y] = clip(this, _, y);
		let x = appendText(this.text, appendText(b.text, sliceText(this.text, 0, _)), y), S = this.length + b.length - (y - _);
		return x.length <= 32 ? new TextLeaf(x, S) : Po.from(TextLeaf.split(x, []), S);
	}
	sliceString(_, y = this.length, b = `
`) {
		[_, y] = clip(this, _, y);
		let x = ``;
		for (let S = 0, C = 0; S <= y && C < this.text.length; C++) {
			let w = this.text[C], E = S + w.length;
			S > _ && C && (x += b), _ < E && y > S && (x += w.slice(Math.max(0, _ - S), y - S)), S = E + 1;
		}
		return x;
	}
	flatten(_) {
		for (let y of this.text) _.push(y);
	}
	scanIdentical() {
		return 0;
	}
	static split(_, y) {
		let b = [], x = -1;
		for (let S of _) b.push(S), x += S.length + 1, b.length == 32 && (y.push(new TextLeaf(b, x)), b = [], x = -1);
		return x > -1 && y.push(new TextLeaf(b, x)), y;
	}
}, Po = class TextNode extends Mo {
	constructor(_, y) {
		super(), this.children = _, this.length = y, this.lines = 0;
		for (let y of _) this.lines += y.lines;
	}
	lineInner(_, y, b, x) {
		for (let S = 0;; S++) {
			let C = this.children[S], w = x + C.length, E = b + C.lines - 1;
			if ((y ? E : w) >= _) return C.lineInner(_, y, b, x);
			x = w + 1, b = E + 1;
		}
	}
	decompose(_, y, b, x) {
		for (let S = 0, C = 0; C <= y && S < this.children.length; S++) {
			let w = this.children[S], E = C + w.length;
			if (_ <= E && y >= C) {
				let S = x & (C <= _ | (E >= y ? 2 : 0));
				C >= _ && E <= y && !S ? b.push(w) : w.decompose(_ - C, y - C, b, S);
			}
			C = E + 1;
		}
	}
	replace(_, y, b) {
		if ([_, y] = clip(this, _, y), b.lines < this.lines) for (let x = 0, S = 0; x < this.children.length; x++) {
			let C = this.children[x], w = S + C.length;
			if (_ >= S && y <= w) {
				let E = C.replace(_ - S, y - S, b), D = this.lines - C.lines + E.lines;
				if (E.lines < D >> 4 && E.lines > D >> 6) {
					let S = this.children.slice();
					return S[x] = E, new TextNode(S, this.length - (y - _) + b.length);
				}
				return super.replace(S, w, E);
			}
			S = w + 1;
		}
		return super.replace(_, y, b);
	}
	sliceString(_, y = this.length, b = `
`) {
		[_, y] = clip(this, _, y);
		let x = ``;
		for (let S = 0, C = 0; S < this.children.length && C <= y; S++) {
			let w = this.children[S], E = C + w.length;
			C > _ && S && (x += b), _ < E && y > C && (x += w.sliceString(_ - C, y - C, b)), C = E + 1;
		}
		return x;
	}
	flatten(_) {
		for (let y of this.children) y.flatten(_);
	}
	scanIdentical(_, y) {
		if (!(_ instanceof TextNode)) return 0;
		let b = 0, [x, S, C, w] = y > 0 ? [
			0,
			0,
			this.children.length,
			_.children.length
		] : [
			this.children.length - 1,
			_.children.length - 1,
			-1,
			-1
		];
		for (;; x += y, S += y) {
			if (x == C || S == w) return b;
			let E = this.children[x], D = _.children[S];
			if (E != D) return b + E.scanIdentical(D, y);
			b += E.length + 1;
		}
	}
	static from(_, y = _.reduce((_, y) => _ + y.length + 1, -1)) {
		let b = 0;
		for (let y of _) b += y.lines;
		if (b < 32) {
			let b = [];
			for (let y of _) y.flatten(b);
			return new No(b, y);
		}
		let x = Math.max(32, b >> 5), S = x << 1, C = x >> 1, w = [], E = 0, D = -1, O = [];
		function add(_) {
			let y;
			if (_.lines > S && _ instanceof TextNode) for (let y of _.children) add(y);
			else _.lines > C && (E > C || !E) ? (flush(), w.push(_)) : _ instanceof No && E && (y = O[O.length - 1]) instanceof No && _.lines + y.lines <= 32 ? (E += _.lines, D += _.length + 1, O[O.length - 1] = new No(y.text.concat(_.text), y.length + 1 + _.length)) : (E + _.lines > x && flush(), E += _.lines, D += _.length + 1, O.push(_));
		}
		function flush() {
			E != 0 && (w.push(O.length == 1 ? O[0] : TextNode.from(O, D)), D = -1, E = O.length = 0);
		}
		for (let y of _) add(y);
		return flush(), w.length == 1 ? w[0] : new TextNode(w, y);
	}
};
Mo.empty = new No([``], 0);
function textLength(_) {
	let y = -1;
	for (let b of _) y += b.length + 1;
	return y;
}
function appendText(_, y, b = 0, x = 1e9) {
	for (let S = 0, C = 0, w = !0; C < _.length && S <= x; C++) {
		let E = _[C], D = S + E.length;
		D >= b && (D > x && (E = E.slice(0, x - S)), S < b && (E = E.slice(b - S)), w ? (y[y.length - 1] += E, w = !1) : y.push(E)), S = D + 1;
	}
	return y;
}
function sliceText(_, y, b) {
	return appendText(_, [``], y, b);
}
var RawTextCursor = class {
	constructor(_, y = 1) {
		this.dir = y, this.done = !1, this.lineBreak = !1, this.value = ``, this.nodes = [_], this.offsets = [y > 0 ? 1 : (_ instanceof No ? _.text.length : _.children.length) << 1];
	}
	nextInner(_, y) {
		for (this.done = this.lineBreak = !1;;) {
			let b = this.nodes.length - 1, x = this.nodes[b], S = this.offsets[b], C = S >> 1, w = x instanceof No ? x.text.length : x.children.length;
			if (C == (y > 0 ? w : 0)) {
				if (b == 0) return this.done = !0, this.value = ``, this;
				y > 0 && this.offsets[b - 1]++, this.nodes.pop(), this.offsets.pop();
			} else if ((S & 1) == (y > 0 ? 0 : 1)) {
				if (this.offsets[b] += y, _ == 0) return this.lineBreak = !0, this.value = `
`, this;
				_--;
			} else if (x instanceof No) {
				let S = x.text[C + (y < 0 ? -1 : 0)];
				if (this.offsets[b] += y, S.length > Math.max(0, _)) return this.value = _ == 0 ? S : y > 0 ? S.slice(_) : S.slice(0, S.length - _), this;
				_ -= S.length;
			} else {
				let S = x.children[C + (y < 0 ? -1 : 0)];
				_ > S.length ? (_ -= S.length, this.offsets[b] += y) : (y < 0 && this.offsets[b]--, this.nodes.push(S), this.offsets.push(y > 0 ? 1 : (S instanceof No ? S.text.length : S.children.length) << 1));
			}
		}
	}
	next(_ = 0) {
		return _ < 0 && (this.nextInner(-_, -this.dir), _ = this.value.length), this.nextInner(_, this.dir);
	}
}, PartialTextCursor = class {
	constructor(_, y, b) {
		this.value = ``, this.done = !1, this.cursor = new RawTextCursor(_, y > b ? -1 : 1), this.pos = y > b ? _.length : 0, this.from = Math.min(y, b), this.to = Math.max(y, b);
	}
	nextInner(_, y) {
		if (y < 0 ? this.pos <= this.from : this.pos >= this.to) return this.value = ``, this.done = !0, this;
		_ += Math.max(0, y < 0 ? this.pos - this.to : this.from - this.pos);
		let b = y < 0 ? this.pos - this.from : this.to - this.pos;
		_ > b && (_ = b), b -= _;
		let { value: x } = this.cursor.next(_);
		return this.pos += (x.length + _) * y, this.value = x.length <= b ? x : y < 0 ? x.slice(x.length - b) : x.slice(0, b), this.done = !this.value, this;
	}
	next(_ = 0) {
		return _ < 0 ? _ = Math.max(_, this.from - this.pos) : _ > 0 && (_ = Math.min(_, this.to - this.pos)), this.nextInner(_, this.cursor.dir);
	}
	get lineBreak() {
		return this.cursor.lineBreak && this.value != ``;
	}
}, LineCursor = class {
	constructor(_) {
		this.inner = _, this.afterBreak = !0, this.value = ``, this.done = !1;
	}
	next(_ = 0) {
		let { done: y, lineBreak: b, value: x } = this.inner.next(_);
		return y && this.afterBreak ? (this.value = ``, this.afterBreak = !1) : y ? (this.done = !0, this.value = ``) : b ? this.afterBreak ? this.value = `` : (this.afterBreak = !0, this.next()) : (this.value = x, this.afterBreak = !1), this;
	}
	get lineBreak() {
		return !1;
	}
};
typeof Symbol < `u` && (Mo.prototype[Symbol.iterator] = function() {
	return this.iter();
}, RawTextCursor.prototype[Symbol.iterator] = PartialTextCursor.prototype[Symbol.iterator] = LineCursor.prototype[Symbol.iterator] = function() {
	return this;
});
var Line = class {
	constructor(_, y, b, x) {
		this.from = _, this.to = y, this.number = b, this.text = x;
	}
	get length() {
		return this.to - this.from;
	}
};
function clip(_, y, b) {
	return y = Math.max(0, Math.min(_.length, y)), [y, Math.max(y, Math.min(_.length, b))];
}
var Fo = `lc,34,7n,7,7b,19,,,,2,,2,,,20,b,1c,l,g,,2t,7,2,6,2,2,,4,z,,u,r,2j,b,1m,9,9,,o,4,,9,,3,,5,17,3,3b,f,,w,1j,,,,4,8,4,,3,7,a,2,t,,1m,,,,2,4,8,,9,,a,2,q,,2,2,1l,,4,2,4,2,2,3,3,,u,2,3,,b,2,1l,,4,5,,2,4,,k,2,m,6,,,1m,,,2,,4,8,,7,3,a,2,u,,1n,,,,c,,9,,14,,3,,1l,3,5,3,,4,7,2,b,2,t,,1m,,2,,2,,3,,5,2,7,2,b,2,s,2,1l,2,,,2,4,8,,9,,a,2,t,,20,,4,,2,3,,,8,,29,,2,7,c,8,2q,,2,9,b,6,22,2,r,,,,,,1j,e,,5,,2,5,b,,10,9,,2u,4,,6,,2,2,2,p,2,4,3,g,4,d,,2,2,6,,f,,jj,3,qa,3,t,3,t,2,u,2,1s,2,,7,8,,2,b,9,,19,3,3b,2,y,,3a,3,4,2,9,,6,3,63,2,2,,1m,,,7,,,,,2,8,6,a,2,,1c,h,1r,4,1c,7,,,5,,14,9,c,2,w,4,2,2,,3,1k,,,2,3,,,3,1m,8,2,2,48,3,,d,,7,4,,6,,3,2,5i,1m,,5,ek,,5f,x,2da,3,3x,,2o,w,fe,6,2x,2,n9w,4,,a,w,2,28,2,7k,,3,,4,,p,2,5,,47,2,q,i,d,,12,8,p,b,1a,3,1c,,2,4,2,2,13,,1v,6,2,2,2,2,c,,8,,1b,,1f,,,3,2,2,5,2,,,16,2,8,,6m,,2,,4,,fn4,,kh,g,g,g,a6,2,gt,,6a,,45,5,1ae,3,,2,5,4,14,3,4,,4l,2,fx,4,ar,2,49,b,4w,,1i,f,1k,3,1d,4,2,2,1x,3,10,5,,8,1q,,c,2,1g,9,a,4,2,,2n,3,2,,,2,6,,4g,,3,8,l,2,1l,2,,,,,m,,e,7,3,5,5f,8,2,3,,,n,,29,,2,6,,,2,,,2,,2,6j,,2,4,6,2,,2,r,2,2d,8,2,,,2,2y,,,,2,6,,,2t,3,2,4,,5,77,9,,2,6t,,a,2,,,4,,40,4,2,2,4,,w,a,14,6,2,4,8,,9,6,2,3,1a,d,,2,ba,7,,6,,,2a,m,2,7,,2,,2,3e,6,3,,,2,,7,,,20,2,3,,,,9n,2,f0b,5,1n,7,t4,,1r,4,29,,f5k,2,43q,,,3,4,5,8,8,2,7,u,4,44,3,1iz,1j,4,1e,8,,e,,m,5,,f,11s,7,,h,2,7,,2,,5,79,7,c5,4,15s,7,31,7,240,5,gx7k,2o,3k,6o`.split(`,`).map((_) => _ ? parseInt(_, 36) : 1);
for (let _ = 1; _ < Fo.length; _++) Fo[_] += Fo[_ - 1];
function isExtendingChar(_) {
	for (let y = 1; y < Fo.length; y += 2) if (Fo[y] > _) return Fo[y - 1] <= _;
	return !1;
}
function isRegionalIndicator(_) {
	return _ >= 127462 && _ <= 127487;
}
var Io = 8205;
function findClusterBreak(_, y, b = !0, x = !0) {
	return (b ? nextClusterBreak : prevClusterBreak)(_, y, x);
}
function nextClusterBreak(_, y, b) {
	if (y == _.length) return y;
	y && surrogateLow(_.charCodeAt(y)) && surrogateHigh(_.charCodeAt(y - 1)) && y--;
	let x = codePointAt(_, y);
	for (y += codePointSize(x); y < _.length;) {
		let S = codePointAt(_, y);
		if (x == Io || S == Io || b && isExtendingChar(S)) y += codePointSize(S), x = S;
		else if (isRegionalIndicator(S)) {
			let b = 0, x = y - 2;
			for (; x >= 0 && isRegionalIndicator(codePointAt(_, x));) b++, x -= 2;
			if (b % 2 == 0) break;
			y += 2;
		} else break;
	}
	return y;
}
function prevClusterBreak(_, y, b) {
	for (; y > 0;) {
		let x = nextClusterBreak(_, y - 2, b);
		if (x < y) return x;
		y--;
	}
	return 0;
}
function surrogateLow(_) {
	return _ >= 56320 && _ < 57344;
}
function surrogateHigh(_) {
	return _ >= 55296 && _ < 56320;
}
function codePointAt(_, y) {
	let b = _.charCodeAt(y);
	if (!surrogateHigh(b) || y + 1 == _.length) return b;
	let x = _.charCodeAt(y + 1);
	return surrogateLow(x) ? (b - 55296 << 10) + (x - 56320) + 65536 : b;
}
function fromCodePoint(_) {
	return _ <= 65535 ? String.fromCharCode(_) : (_ -= 65536, String.fromCharCode((_ >> 10) + 55296, (_ & 1023) + 56320));
}
function codePointSize(_) {
	return _ < 65536 ? 1 : 2;
}
var Lo = /\r\n?|\n/, Ro = (function(_) {
	return _[_.Simple = 0] = `Simple`, _[_.TrackDel = 1] = `TrackDel`, _[_.TrackBefore = 2] = `TrackBefore`, _[_.TrackAfter = 3] = `TrackAfter`, _;
})(Ro ||= {}), zo = class ChangeDesc {
	constructor(_) {
		this.sections = _;
	}
	get length() {
		let _ = 0;
		for (let y = 0; y < this.sections.length; y += 2) _ += this.sections[y];
		return _;
	}
	get newLength() {
		let _ = 0;
		for (let y = 0; y < this.sections.length; y += 2) {
			let b = this.sections[y + 1];
			_ += b < 0 ? this.sections[y] : b;
		}
		return _;
	}
	get empty() {
		return this.sections.length == 0 || this.sections.length == 2 && this.sections[1] < 0;
	}
	iterGaps(_) {
		for (let y = 0, b = 0, x = 0; y < this.sections.length;) {
			let S = this.sections[y++], C = this.sections[y++];
			C < 0 ? (_(b, x, S), x += S) : x += C, b += S;
		}
	}
	iterChangedRanges(_, y = !1) {
		iterChanges(this, _, y);
	}
	get invertedDesc() {
		let _ = [];
		for (let y = 0; y < this.sections.length;) {
			let b = this.sections[y++], x = this.sections[y++];
			x < 0 ? _.push(b, x) : _.push(x, b);
		}
		return new ChangeDesc(_);
	}
	composeDesc(_) {
		return this.empty ? _ : _.empty ? this : composeSets(this, _);
	}
	mapDesc(_, y = !1) {
		return _.empty ? this : mapSet(this, _, y);
	}
	mapPos(_, y = -1, b = Ro.Simple) {
		let x = 0, S = 0;
		for (let C = 0; C < this.sections.length;) {
			let w = this.sections[C++], E = this.sections[C++], D = x + w;
			if (E < 0) {
				if (D > _) return S + (_ - x);
				S += w;
			} else {
				if (b != Ro.Simple && D >= _ && (b == Ro.TrackDel && x < _ && D > _ || b == Ro.TrackBefore && x < _ || b == Ro.TrackAfter && D > _)) return null;
				if (D > _ || D == _ && y < 0 && !w) return _ == x || y < 0 ? S : S + E;
				S += E;
			}
			x = D;
		}
		if (_ > x) throw RangeError(`Position ${_} is out of range for changeset of length ${x}`);
		return S;
	}
	touchesRange(_, y = _) {
		for (let b = 0, x = 0; b < this.sections.length && x <= y;) {
			let S = this.sections[b++], C = this.sections[b++], w = x + S;
			if (C >= 0 && x <= y && w >= _) return x < _ && w > y ? `cover` : !0;
			x = w;
		}
		return !1;
	}
	toString() {
		let _ = ``;
		for (let y = 0; y < this.sections.length;) {
			let b = this.sections[y++], x = this.sections[y++];
			_ += (_ ? ` ` : ``) + b + (x >= 0 ? `:` + x : ``);
		}
		return _;
	}
	toJSON() {
		return this.sections;
	}
	static fromJSON(_) {
		if (!Array.isArray(_) || _.length % 2 || _.some((_) => typeof _ != `number`)) throw RangeError(`Invalid JSON representation of ChangeDesc`);
		return new ChangeDesc(_);
	}
	static create(_) {
		return new ChangeDesc(_);
	}
}, Bo = class ChangeSet extends zo {
	constructor(_, y) {
		super(_), this.inserted = y;
	}
	apply(_) {
		if (this.length != _.length) throw RangeError(`Applying change set to a document with the wrong length`);
		return iterChanges(this, (y, b, x, S, C) => _ = _.replace(x, x + (b - y), C), !1), _;
	}
	mapDesc(_, y = !1) {
		return mapSet(this, _, y, !0);
	}
	invert(_) {
		let y = this.sections.slice(), b = [];
		for (let x = 0, S = 0; x < y.length; x += 2) {
			let C = y[x], w = y[x + 1];
			if (w >= 0) {
				y[x] = w, y[x + 1] = C;
				let E = x >> 1;
				for (; b.length < E;) b.push(Mo.empty);
				b.push(C ? _.slice(S, S + C) : Mo.empty);
			}
			S += C;
		}
		return new ChangeSet(y, b);
	}
	compose(_) {
		return this.empty ? _ : _.empty ? this : composeSets(this, _, !0);
	}
	map(_, y = !1) {
		return _.empty ? this : mapSet(this, _, y, !0);
	}
	iterChanges(_, y = !1) {
		iterChanges(this, _, y);
	}
	get desc() {
		return zo.create(this.sections);
	}
	filter(_) {
		let y = [], b = [], x = [], S = new SectionIter(this);
		done: for (let C = 0, w = 0;;) {
			let E = C == _.length ? 1e9 : _[C++];
			for (; w < E || w == E && S.len == 0;) {
				if (S.done) break done;
				let _ = Math.min(S.len, E - w);
				addSection(x, _, -1);
				let C = S.ins == -1 ? -1 : S.off == 0 ? S.ins : 0;
				addSection(y, _, C), C > 0 && addInsert(b, y, S.text), S.forward(_), w += _;
			}
			let D = _[C++];
			for (; w < D;) {
				if (S.done) break done;
				let _ = Math.min(S.len, D - w);
				addSection(y, _, -1), addSection(x, _, S.ins == -1 ? -1 : S.off == 0 ? S.ins : 0), S.forward(_), w += _;
			}
		}
		return {
			changes: new ChangeSet(y, b),
			filtered: zo.create(x)
		};
	}
	toJSON() {
		let _ = [];
		for (let y = 0; y < this.sections.length; y += 2) {
			let b = this.sections[y], x = this.sections[y + 1];
			x < 0 ? _.push(b) : x == 0 ? _.push([b]) : _.push([b].concat(this.inserted[y >> 1].toJSON()));
		}
		return _;
	}
	static of(_, y, b) {
		let x = [], S = [], C = 0, w = null;
		function flush(_ = !1) {
			if (!_ && !x.length) return;
			C < y && addSection(x, y - C, -1);
			let b = new ChangeSet(x, S);
			w = w ? w.compose(b.map(w)) : b, x = [], S = [], C = 0;
		}
		function process(_) {
			if (Array.isArray(_)) for (let y of _) process(y);
			else if (_ instanceof ChangeSet) {
				if (_.length != y) throw RangeError(`Mismatched change set length (got ${_.length}, expected ${y})`);
				flush(), w = w ? w.compose(_.map(w)) : _;
			} else {
				let { from: w, to: E = w, insert: D } = _;
				if (w > E || w < 0 || E > y) throw RangeError(`Invalid change range ${w} to ${E} (in doc of length ${y})`);
				let O = D ? typeof D == `string` ? Mo.of(D.split(b || Lo)) : D : Mo.empty, k = O.length;
				if (w == E && k == 0) return;
				w < C && flush(), w > C && addSection(x, w - C, -1), addSection(x, E - w, k), addInsert(S, x, O), C = E;
			}
		}
		return process(_), flush(!w), w;
	}
	static empty(_) {
		return new ChangeSet(_ ? [_, -1] : [], []);
	}
	static fromJSON(_) {
		if (!Array.isArray(_)) throw RangeError(`Invalid JSON representation of ChangeSet`);
		let y = [], b = [];
		for (let x = 0; x < _.length; x++) {
			let S = _[x];
			if (typeof S == `number`) y.push(S, -1);
			else if (!Array.isArray(S) || typeof S[0] != `number` || S.some((_, y) => y && typeof _ != `string`)) throw RangeError(`Invalid JSON representation of ChangeSet`);
			else if (S.length == 1) y.push(S[0], 0);
			else {
				for (; b.length < x;) b.push(Mo.empty);
				b[x] = Mo.of(S.slice(1)), y.push(S[0], b[x].length);
			}
		}
		return new ChangeSet(y, b);
	}
	static createSet(_, y) {
		return new ChangeSet(_, y);
	}
};
function addSection(_, y, b, x = !1) {
	if (y == 0 && b <= 0) return;
	let S = _.length - 2;
	S >= 0 && b <= 0 && b == _[S + 1] ? _[S] += y : y == 0 && _[S] == 0 ? _[S + 1] += b : x ? (_[S] += y, _[S + 1] += b) : _.push(y, b);
}
function addInsert(_, y, b) {
	if (b.length == 0) return;
	let x = y.length - 2 >> 1;
	if (x < _.length) _[_.length - 1] = _[_.length - 1].append(b);
	else {
		for (; _.length < x;) _.push(Mo.empty);
		_.push(b);
	}
}
function iterChanges(_, y, b) {
	let x = _.inserted;
	for (let S = 0, C = 0, w = 0; w < _.sections.length;) {
		let E = _.sections[w++], D = _.sections[w++];
		if (D < 0) S += E, C += E;
		else {
			let O = S, k = C, A = Mo.empty;
			for (; O += E, k += D, D && x && (A = A.append(x[w - 2 >> 1])), !(b || w == _.sections.length || _.sections[w + 1] < 0);) E = _.sections[w++], D = _.sections[w++];
			y(S, O, C, k, A), S = O, C = k;
		}
	}
}
function mapSet(_, y, b, x = !1) {
	let S = [], C = x ? [] : null, w = new SectionIter(_), E = new SectionIter(y);
	for (let _ = -1;;) if (w.ins == -1 && E.ins == -1) {
		let _ = Math.min(w.len, E.len);
		addSection(S, _, -1), w.forward(_), E.forward(_);
	} else if (E.ins >= 0 && (w.ins < 0 || _ == w.i || w.off == 0 && (E.len < w.len || E.len == w.len && !b))) {
		let y = E.len;
		for (addSection(S, E.ins, -1); y;) {
			let b = Math.min(w.len, y);
			w.ins >= 0 && _ < w.i && w.len <= b && (addSection(S, 0, w.ins), C && addInsert(C, S, w.text), _ = w.i), w.forward(b), y -= b;
		}
		E.next();
	} else if (w.ins >= 0) {
		let y = 0, b = w.len;
		for (; b;) if (E.ins == -1) {
			let _ = Math.min(b, E.len);
			y += _, b -= _, E.forward(_);
		} else if (E.ins == 0 && E.len < b) b -= E.len, E.next();
		else break;
		addSection(S, y, _ < w.i ? w.ins : 0), C && _ < w.i && addInsert(C, S, w.text), _ = w.i, w.forward(w.len - b);
	} else if (w.done && E.done) return C ? Bo.createSet(S, C) : zo.create(S);
	else throw Error(`Mismatched change set lengths`);
}
function composeSets(_, y, b = !1) {
	let x = [], S = b ? [] : null, C = new SectionIter(_), w = new SectionIter(y);
	for (let _ = !1;;) if (C.done && w.done) return S ? Bo.createSet(x, S) : zo.create(x);
	else if (C.ins == 0) addSection(x, C.len, 0, _), C.next();
	else if (w.len == 0 && !w.done) addSection(x, 0, w.ins, _), S && addInsert(S, x, w.text), w.next();
	else if (C.done || w.done) throw Error(`Mismatched change set lengths`);
	else {
		let y = Math.min(C.len2, w.len), b = x.length;
		if (C.ins == -1) {
			let b = w.ins == -1 ? -1 : w.off ? 0 : w.ins;
			addSection(x, y, b, _), S && b && addInsert(S, x, w.text);
		} else w.ins == -1 ? (addSection(x, C.off ? 0 : C.len, y, _), S && addInsert(S, x, C.textBit(y))) : (addSection(x, C.off ? 0 : C.len, w.off ? 0 : w.ins, _), S && !w.off && addInsert(S, x, w.text));
		_ = (C.ins > y || w.ins >= 0 && w.len > y) && (_ || x.length > b), C.forward2(y), w.forward(y);
	}
}
var SectionIter = class {
	constructor(_) {
		this.set = _, this.i = 0, this.next();
	}
	next() {
		let { sections: _ } = this.set;
		this.i < _.length ? (this.len = _[this.i++], this.ins = _[this.i++]) : (this.len = 0, this.ins = -2), this.off = 0;
	}
	get done() {
		return this.ins == -2;
	}
	get len2() {
		return this.ins < 0 ? this.len : this.ins;
	}
	get text() {
		let { inserted: _ } = this.set, y = this.i - 2 >> 1;
		return y >= _.length ? Mo.empty : _[y];
	}
	textBit(_) {
		let { inserted: y } = this.set, b = this.i - 2 >> 1;
		return b >= y.length && !_ ? Mo.empty : y[b].slice(this.off, _ == null ? void 0 : this.off + _);
	}
	forward(_) {
		_ == this.len ? this.next() : (this.len -= _, this.off += _);
	}
	forward2(_) {
		this.ins == -1 ? this.forward(_) : _ == this.ins ? this.next() : (this.ins -= _, this.off += _);
	}
}, Vo = class SelectionRange {
	constructor(_, y, b) {
		this.from = _, this.to = y, this.flags = b;
	}
	get anchor() {
		return this.flags & 32 ? this.to : this.from;
	}
	get head() {
		return this.flags & 32 ? this.from : this.to;
	}
	get empty() {
		return this.from == this.to;
	}
	get assoc() {
		return this.flags & 8 ? -1 : this.flags & 16 ? 1 : 0;
	}
	get bidiLevel() {
		let _ = this.flags & 7;
		return _ == 7 ? null : _;
	}
	get goalColumn() {
		let _ = this.flags >> 6;
		return _ == 16777215 ? void 0 : _;
	}
	map(_, y = -1) {
		let b, x;
		return this.empty ? b = x = _.mapPos(this.from, y) : (b = _.mapPos(this.from, 1), x = _.mapPos(this.to, -1)), b == this.from && x == this.to ? this : new SelectionRange(b, x, this.flags);
	}
	extend(_, y = _) {
		if (_ <= this.anchor && y >= this.anchor) return J.range(_, y);
		let b = Math.abs(_ - this.anchor) > Math.abs(y - this.anchor) ? _ : y;
		return J.range(this.anchor, b);
	}
	eq(_, y = !1) {
		return this.anchor == _.anchor && this.head == _.head && (!y || !this.empty || this.assoc == _.assoc);
	}
	toJSON() {
		return {
			anchor: this.anchor,
			head: this.head
		};
	}
	static fromJSON(_) {
		if (!_ || typeof _.anchor != `number` || typeof _.head != `number`) throw RangeError(`Invalid JSON representation for SelectionRange`);
		return J.range(_.anchor, _.head);
	}
	static create(_, y, b) {
		return new SelectionRange(_, y, b);
	}
}, J = class EditorSelection {
	constructor(_, y) {
		this.ranges = _, this.mainIndex = y;
	}
	map(_, y = -1) {
		return _.empty ? this : EditorSelection.create(this.ranges.map((b) => b.map(_, y)), this.mainIndex);
	}
	eq(_, y = !1) {
		if (this.ranges.length != _.ranges.length || this.mainIndex != _.mainIndex) return !1;
		for (let b = 0; b < this.ranges.length; b++) if (!this.ranges[b].eq(_.ranges[b], y)) return !1;
		return !0;
	}
	get main() {
		return this.ranges[this.mainIndex];
	}
	asSingle() {
		return this.ranges.length == 1 ? this : new EditorSelection([this.main], 0);
	}
	addRange(_, y = !0) {
		return EditorSelection.create([_].concat(this.ranges), y ? 0 : this.mainIndex + 1);
	}
	replaceRange(_, y = this.mainIndex) {
		let b = this.ranges.slice();
		return b[y] = _, EditorSelection.create(b, this.mainIndex);
	}
	toJSON() {
		return {
			ranges: this.ranges.map((_) => _.toJSON()),
			main: this.mainIndex
		};
	}
	static fromJSON(_) {
		if (!_ || !Array.isArray(_.ranges) || typeof _.main != `number` || _.main >= _.ranges.length) throw RangeError(`Invalid JSON representation for EditorSelection`);
		return new EditorSelection(_.ranges.map((_) => Vo.fromJSON(_)), _.main);
	}
	static single(_, y = _) {
		return new EditorSelection([EditorSelection.range(_, y)], 0);
	}
	static create(_, y = 0) {
		if (_.length == 0) throw RangeError(`A selection needs at least one range`);
		for (let b = 0, x = 0; x < _.length; x++) {
			let S = _[x];
			if (S.empty ? S.from <= b : S.from < b) return EditorSelection.normalized(_.slice(), y);
			b = S.to;
		}
		return new EditorSelection(_, y);
	}
	static cursor(_, y = 0, b, x) {
		return Vo.create(_, _, (y == 0 ? 0 : y < 0 ? 8 : 16) | (b == null ? 7 : Math.min(6, b)) | (x ?? 16777215) << 6);
	}
	static range(_, y, b, x) {
		let S = (b ?? 16777215) << 6 | (x == null ? 7 : Math.min(6, x));
		return y < _ ? Vo.create(y, _, 48 | S) : Vo.create(_, y, (y > _ ? 8 : 0) | S);
	}
	static normalized(_, y = 0) {
		let b = _[y];
		_.sort((_, y) => _.from - y.from), y = _.indexOf(b);
		for (let b = 1; b < _.length; b++) {
			let x = _[b], S = _[b - 1];
			if (x.empty ? x.from <= S.to : x.from < S.to) {
				let C = S.from, w = Math.max(x.to, S.to);
				b <= y && y--, _.splice(--b, 2, x.anchor > x.head ? EditorSelection.range(w, C) : EditorSelection.range(C, w));
			}
		}
		return new EditorSelection(_, y);
	}
};
function checkSelection(_, y) {
	for (let b of _.ranges) if (b.to > y) throw RangeError(`Selection points outside of document`);
}
var Ho = 0, Y = class Facet {
	constructor(_, y, b, x, S) {
		this.combine = _, this.compareInput = y, this.compare = b, this.isStatic = x, this.id = Ho++, this.default = _([]), this.extensions = typeof S == `function` ? S(this) : S;
	}
	get reader() {
		return this;
	}
	static define(_ = {}) {
		return new Facet(_.combine || ((_) => _), _.compareInput || ((_, y) => _ === y), _.compare || (_.combine ? (_, y) => _ === y : sameArray$1), !!_.static, _.enables);
	}
	of(_) {
		return new FacetProvider([], this, 0, _);
	}
	compute(_, y) {
		if (this.isStatic) throw Error(`Can't compute a static facet`);
		return new FacetProvider(_, this, 1, y);
	}
	computeN(_, y) {
		if (this.isStatic) throw Error(`Can't compute a static facet`);
		return new FacetProvider(_, this, 2, y);
	}
	from(_, get) {
		return get ||= (_) => _, this.compute([_], (y) => get(y.field(_)));
	}
};
function sameArray$1(_, y) {
	return _ == y || _.length == y.length && _.every((_, b) => _ === y[b]);
}
var FacetProvider = class {
	constructor(_, y, b, x) {
		this.dependencies = _, this.facet = y, this.type = b, this.value = x, this.id = Ho++;
	}
	dynamicSlot(_) {
		let y = this.value, b = this.facet.compareInput, x = this.id, S = _[x] >> 1, C = this.type == 2, w = !1, E = !1, D = [];
		for (let y of this.dependencies) y == `doc` ? w = !0 : y == `selection` ? E = !0 : (_[y.id] ?? 1) & 1 || D.push(_[y.id]);
		return {
			create(_) {
				return _.values[S] = y(_), 1;
			},
			update(_, x) {
				if (w && x.docChanged || E && (x.docChanged || x.selection) || ensureAll(_, D)) {
					let x = y(_);
					if (C ? !compareArray(x, _.values[S], b) : !b(x, _.values[S])) return _.values[S] = x, 1;
				}
				return 0;
			},
			reconfigure: (_, w) => {
				let E, D = w.config.address[x];
				if (D != null) {
					let x = getAddr(w, D);
					if (this.dependencies.every((y) => y instanceof Y ? w.facet(y) === _.facet(y) : y instanceof Wo ? w.field(y, !1) == _.field(y, !1) : !0) || (C ? compareArray(E = y(_), x, b) : b(E = y(_), x))) return _.values[S] = x, 0;
				} else E = y(_);
				return _.values[S] = E, 1;
			}
		};
	}
};
function compareArray(_, y, b) {
	if (_.length != y.length) return !1;
	for (let x = 0; x < _.length; x++) if (!b(_[x], y[x])) return !1;
	return !0;
}
function ensureAll(_, y) {
	let b = !1;
	for (let x of y) ensureAddr(_, x) & 1 && (b = !0);
	return b;
}
function dynamicFacetSlot(_, y, b) {
	let x = b.map((y) => _[y.id]), S = b.map((_) => _.type), C = x.filter((_) => !(_ & 1)), w = _[y.id] >> 1;
	function get(_) {
		let b = [];
		for (let y = 0; y < x.length; y++) {
			let C = getAddr(_, x[y]);
			if (S[y] == 2) for (let _ of C) b.push(_);
			else b.push(C);
		}
		return y.combine(b);
	}
	return {
		create(_) {
			for (let y of x) ensureAddr(_, y);
			return _.values[w] = get(_), 1;
		},
		update(_, b) {
			if (!ensureAll(_, C)) return 0;
			let x = get(_);
			return y.compare(x, _.values[w]) ? 0 : (_.values[w] = x, 1);
		},
		reconfigure(_, S) {
			let C = ensureAll(_, x), E = S.config.facets[y.id], D = S.facet(y);
			if (E && !C && sameArray$1(b, E)) return _.values[w] = D, 0;
			let O = get(_);
			return y.compare(O, D) ? (_.values[w] = D, 0) : (_.values[w] = O, 1);
		}
	};
}
var Uo = Y.define({ static: !0 }), Wo = class StateField {
	constructor(_, y, b, x, S) {
		this.id = _, this.createF = y, this.updateF = b, this.compareF = x, this.spec = S, this.provides = void 0;
	}
	static define(_) {
		let y = new StateField(Ho++, _.create, _.update, _.compare || ((_, y) => _ === y), _);
		return _.provide && (y.provides = _.provide(y)), y;
	}
	create(_) {
		return (_.facet(Uo).find((_) => _.field == this)?.create || this.createF)(_);
	}
	slot(_) {
		let y = _[this.id] >> 1;
		return {
			create: (_) => (_.values[y] = this.create(_), 1),
			update: (_, b) => {
				let x = _.values[y], S = this.updateF(x, b);
				return this.compareF(x, S) ? 0 : (_.values[y] = S, 1);
			},
			reconfigure: (_, b) => b.config.address[this.id] == null ? (_.values[y] = this.create(_), 1) : (_.values[y] = b.field(this), 0)
		};
	}
	init(_) {
		return [this, Uo.of({
			field: this,
			create: _
		})];
	}
	get extension() {
		return this;
	}
}, Go = {
	lowest: 4,
	low: 3,
	default: 2,
	high: 1,
	highest: 0
};
function prec(_) {
	return (y) => new PrecExtension(y, _);
}
var Ko = {
	highest: prec(Go.highest),
	high: prec(Go.high),
	default: prec(Go.default),
	low: prec(Go.low),
	lowest: prec(Go.lowest)
}, PrecExtension = class {
	constructor(_, y) {
		this.inner = _, this.prec = y;
	}
}, qo = class Compartment {
	of(_) {
		return new CompartmentInstance(this, _);
	}
	reconfigure(_) {
		return Compartment.reconfigure.of({
			compartment: this,
			extension: _
		});
	}
	get(_) {
		return _.config.compartments.get(this);
	}
}, CompartmentInstance = class {
	constructor(_, y) {
		this.compartment = _, this.inner = y;
	}
}, Jo = class Configuration {
	constructor(_, y, b, x, S, C) {
		for (this.base = _, this.compartments = y, this.dynamicSlots = b, this.address = x, this.staticValues = S, this.facets = C, this.statusTemplate = []; this.statusTemplate.length < b.length;) this.statusTemplate.push(0);
	}
	staticFacet(_) {
		let y = this.address[_.id];
		return y == null ? _.default : this.staticValues[y >> 1];
	}
	static resolve(_, y, b) {
		let x = [], S = Object.create(null), C = /* @__PURE__ */ new Map();
		for (let b of flatten(_, y, C)) b instanceof Wo ? x.push(b) : (S[b.facet.id] || (S[b.facet.id] = [])).push(b);
		let w = Object.create(null), E = [], D = [];
		for (let _ of x) w[_.id] = D.length << 1, D.push((y) => _.slot(y));
		let O = b?.config.facets;
		for (let _ in S) {
			let y = S[_], x = y[0].facet, C = O && O[_] || [];
			if (y.every((_) => _.type == 0)) if (w[x.id] = E.length << 1 | 1, sameArray$1(C, y)) E.push(b.facet(x));
			else {
				let _ = x.combine(y.map((_) => _.value));
				E.push(b && x.compare(_, b.facet(x)) ? b.facet(x) : _);
			}
			else {
				for (let _ of y) _.type == 0 ? (w[_.id] = E.length << 1 | 1, E.push(_.value)) : (w[_.id] = D.length << 1, D.push((y) => _.dynamicSlot(y)));
				w[x.id] = D.length << 1, D.push((_) => dynamicFacetSlot(_, x, y));
			}
		}
		let k = D.map((_) => _(w));
		return new Configuration(_, C, k, w, E, S);
	}
};
function flatten(_, y, b) {
	let x = [
		[],
		[],
		[],
		[],
		[]
	], S = /* @__PURE__ */ new Map();
	function inner(_, C) {
		let w = S.get(_);
		if (w != null) {
			if (w <= C) return;
			let y = x[w].indexOf(_);
			y > -1 && x[w].splice(y, 1), _ instanceof CompartmentInstance && b.delete(_.compartment);
		}
		if (S.set(_, C), Array.isArray(_)) for (let y of _) inner(y, C);
		else if (_ instanceof CompartmentInstance) {
			if (b.has(_.compartment)) throw RangeError(`Duplicate use of compartment in extensions`);
			let x = y.get(_.compartment) || _.inner;
			b.set(_.compartment, x), inner(x, C);
		} else if (_ instanceof PrecExtension) inner(_.inner, _.prec);
		else if (_ instanceof Wo) x[C].push(_), _.provides && inner(_.provides, C);
		else if (_ instanceof FacetProvider) x[C].push(_), _.facet.extensions && inner(_.facet.extensions, Go.default);
		else {
			let y = _.extension;
			if (!y) throw Error(`Unrecognized extension value in extension set (${_}). This sometimes happens because multiple instances of @codemirror/state are loaded, breaking instanceof checks.`);
			inner(y, C);
		}
	}
	return inner(_, Go.default), x.reduce((_, y) => _.concat(y));
}
function ensureAddr(_, y) {
	if (y & 1) return 2;
	let b = y >> 1, x = _.status[b];
	if (x == 4) throw Error(`Cyclic dependency between fields and/or facets`);
	if (x & 2) return x;
	_.status[b] = 4;
	let S = _.computeSlot(_, _.config.dynamicSlots[b]);
	return _.status[b] = 2 | S;
}
function getAddr(_, y) {
	return y & 1 ? _.config.staticValues[y >> 1] : _.values[y >> 1];
}
var Yo = Y.define(), Xo = Y.define({
	combine: (_) => _.some((_) => _),
	static: !0
}), Zo = Y.define({
	combine: (_) => _.length ? _[0] : void 0,
	static: !0
}), Qo = Y.define(), $o = Y.define(), es = Y.define(), ts = Y.define({ combine: (_) => _.length ? _[0] : !1 }), Annotation = class {
	constructor(_, y) {
		this.type = _, this.value = y;
	}
	static define() {
		return new AnnotationType();
	}
}, AnnotationType = class {
	of(_) {
		return new Annotation(this, _);
	}
}, StateEffectType = class {
	constructor(_) {
		this.map = _;
	}
	of(_) {
		return new ns(this, _);
	}
}, ns = class StateEffect {
	constructor(_, y) {
		this.type = _, this.value = y;
	}
	map(_) {
		let y = this.type.map(this.value, _);
		return y === void 0 ? void 0 : y == this.value ? this : new StateEffect(this.type, y);
	}
	is(_) {
		return this.type == _;
	}
	static define(_ = {}) {
		return new StateEffectType(_.map || ((_) => _));
	}
	static mapEffects(_, y) {
		if (!_.length) return _;
		let b = [];
		for (let x of _) {
			let _ = x.map(y);
			_ && b.push(_);
		}
		return b;
	}
};
ns.reconfigure = ns.define(), ns.appendConfig = ns.define();
var rs = class Transaction {
	constructor(_, y, b, x, S, C) {
		this.startState = _, this.changes = y, this.selection = b, this.effects = x, this.annotations = S, this.scrollIntoView = C, this._doc = null, this._state = null, b && checkSelection(b, y.newLength), S.some((_) => _.type == Transaction.time) || (this.annotations = S.concat(Transaction.time.of(Date.now())));
	}
	static create(_, y, b, x, S, C) {
		return new Transaction(_, y, b, x, S, C);
	}
	get newDoc() {
		return this._doc ||= this.changes.apply(this.startState.doc);
	}
	get newSelection() {
		return this.selection || this.startState.selection.map(this.changes);
	}
	get state() {
		return this._state || this.startState.applyTransaction(this), this._state;
	}
	annotation(_) {
		for (let y of this.annotations) if (y.type == _) return y.value;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get reconfigured() {
		return this.startState.config != this.state.config;
	}
	isUserEvent(_) {
		let y = this.annotation(Transaction.userEvent);
		return !!(y && (y == _ || y.length > _.length && y.slice(0, _.length) == _ && y[_.length] == `.`));
	}
};
rs.time = Annotation.define(), rs.userEvent = Annotation.define(), rs.addToHistory = Annotation.define(), rs.remote = Annotation.define();
function joinRanges(_, y) {
	let b = [];
	for (let x = 0, S = 0;;) {
		let C, w;
		if (x < _.length && (S == y.length || y[S] >= _[x])) C = _[x++], w = _[x++];
		else if (S < y.length) C = y[S++], w = y[S++];
		else return b;
		!b.length || b[b.length - 1] < C ? b.push(C, w) : b[b.length - 1] < w && (b[b.length - 1] = w);
	}
}
function mergeTransaction(_, y, b) {
	let x, S, C;
	return b ? (x = y.changes, S = Bo.empty(y.changes.length), C = _.changes.compose(y.changes)) : (x = y.changes.map(_.changes), S = _.changes.mapDesc(y.changes, !0), C = _.changes.compose(x)), {
		changes: C,
		selection: y.selection ? y.selection.map(S) : _.selection?.map(x),
		effects: ns.mapEffects(_.effects, x).concat(ns.mapEffects(y.effects, S)),
		annotations: _.annotations.length ? _.annotations.concat(y.annotations) : y.annotations,
		scrollIntoView: _.scrollIntoView || y.scrollIntoView
	};
}
function resolveTransactionInner(_, y, b) {
	let x = y.selection, S = asArray$1(y.annotations);
	return y.userEvent && (S = S.concat(rs.userEvent.of(y.userEvent))), {
		changes: y.changes instanceof Bo ? y.changes : Bo.of(y.changes || [], b, _.facet(Zo)),
		selection: x && (x instanceof J ? x : J.single(x.anchor, x.head)),
		effects: asArray$1(y.effects),
		annotations: S,
		scrollIntoView: !!y.scrollIntoView
	};
}
function resolveTransaction(_, y, b) {
	let x = resolveTransactionInner(_, y.length ? y[0] : {}, _.doc.length);
	y.length && y[0].filter === !1 && (b = !1);
	for (let S = 1; S < y.length; S++) {
		y[S].filter === !1 && (b = !1);
		let C = !!y[S].sequential;
		x = mergeTransaction(x, resolveTransactionInner(_, y[S], C ? x.changes.newLength : _.doc.length), C);
	}
	let S = rs.create(_, x.changes, x.selection, x.effects, x.annotations, x.scrollIntoView);
	return extendTransaction(b ? filterTransaction(S) : S);
}
function filterTransaction(_) {
	let y = _.startState, b = !0;
	for (let x of y.facet(Qo)) {
		let y = x(_);
		if (y === !1) {
			b = !1;
			break;
		}
		Array.isArray(y) && (b = b === !0 ? y : joinRanges(b, y));
	}
	if (b !== !0) {
		let x, S;
		if (b === !1) S = _.changes.invertedDesc, x = Bo.empty(y.doc.length);
		else {
			let y = _.changes.filter(b);
			x = y.changes, S = y.filtered.mapDesc(y.changes).invertedDesc;
		}
		_ = rs.create(y, x, _.selection && _.selection.map(S), ns.mapEffects(_.effects, S), _.annotations, _.scrollIntoView);
	}
	let x = y.facet($o);
	for (let b = x.length - 1; b >= 0; b--) {
		let S = x[b](_);
		_ = S instanceof rs ? S : Array.isArray(S) && S.length == 1 && S[0] instanceof rs ? S[0] : resolveTransaction(y, asArray$1(S), !1);
	}
	return _;
}
function extendTransaction(_) {
	let y = _.startState, b = y.facet(es), x = _;
	for (let S = b.length - 1; S >= 0; S--) {
		let C = b[S](_);
		C && Object.keys(C).length && (x = mergeTransaction(x, resolveTransactionInner(y, C, _.changes.newLength), !0));
	}
	return x == _ ? _ : rs.create(y, _.changes, _.selection, x.effects, x.annotations, x.scrollIntoView);
}
var as = [];
function asArray$1(_) {
	return _ == null ? as : Array.isArray(_) ? _ : [_];
}
var os = (function(_) {
	return _[_.Word = 0] = `Word`, _[_.Space = 1] = `Space`, _[_.Other = 2] = `Other`, _;
})(os ||= {}), ss = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, cs;
try {
	cs = RegExp(`[\\p{Alphabetic}\\p{Number}_]`, `u`);
} catch {}
function hasWordChar(_) {
	if (cs) return cs.test(_);
	for (let y = 0; y < _.length; y++) {
		let b = _[y];
		if (/\w/.test(b) || b > `` && (b.toUpperCase() != b.toLowerCase() || ss.test(b))) return !0;
	}
	return !1;
}
function makeCategorizer(_) {
	return (y) => {
		if (!/\S/.test(y)) return os.Space;
		if (hasWordChar(y)) return os.Word;
		for (let b = 0; b < _.length; b++) if (y.indexOf(_[b]) > -1) return os.Word;
		return os.Other;
	};
}
var ls = class EditorState {
	constructor(_, y, b, x, S, C) {
		this.config = _, this.doc = y, this.selection = b, this.values = x, this.status = _.statusTemplate.slice(), this.computeSlot = S, C && (C._state = this);
		for (let _ = 0; _ < this.config.dynamicSlots.length; _++) ensureAddr(this, _ << 1);
		this.computeSlot = null;
	}
	field(_, y = !0) {
		let b = this.config.address[_.id];
		if (b == null) {
			if (y) throw RangeError(`Field is not present in this state`);
			return;
		}
		return ensureAddr(this, b), getAddr(this, b);
	}
	update(..._) {
		return resolveTransaction(this, _, !0);
	}
	applyTransaction(_) {
		let y = this.config, { base: b, compartments: x } = y;
		for (let S of _.effects) S.is(qo.reconfigure) ? (y &&= (x = /* @__PURE__ */ new Map(), y.compartments.forEach((_, y) => x.set(y, _)), null), x.set(S.value.compartment, S.value.extension)) : S.is(ns.reconfigure) ? (y = null, b = S.value) : S.is(ns.appendConfig) && (y = null, b = asArray$1(b).concat(S.value));
		let S;
		y ? S = _.startState.values.slice() : (y = Jo.resolve(b, x, this), S = new EditorState(y, this.doc, this.selection, y.dynamicSlots.map(() => null), (_, y) => y.reconfigure(_, this), null).values);
		let C = _.startState.facet(Xo) ? _.newSelection : _.newSelection.asSingle();
		new EditorState(y, _.newDoc, C, S, (y, b) => b.update(y, _), _);
	}
	replaceSelection(_) {
		return typeof _ == `string` && (_ = this.toText(_)), this.changeByRange((y) => ({
			changes: {
				from: y.from,
				to: y.to,
				insert: _
			},
			range: J.cursor(y.from + _.length)
		}));
	}
	changeByRange(_) {
		let y = this.selection, b = _(y.ranges[0]), x = this.changes(b.changes), S = [b.range], C = asArray$1(b.effects);
		for (let b = 1; b < y.ranges.length; b++) {
			let w = _(y.ranges[b]), E = this.changes(w.changes), D = E.map(x);
			for (let _ = 0; _ < b; _++) S[_] = S[_].map(D);
			let O = x.mapDesc(E, !0);
			S.push(w.range.map(O)), x = x.compose(D), C = ns.mapEffects(C, D).concat(ns.mapEffects(asArray$1(w.effects), O));
		}
		return {
			changes: x,
			selection: J.create(S, y.mainIndex),
			effects: C
		};
	}
	changes(_ = []) {
		return _ instanceof Bo ? _ : Bo.of(_, this.doc.length, this.facet(EditorState.lineSeparator));
	}
	toText(_) {
		return Mo.of(_.split(this.facet(EditorState.lineSeparator) || Lo));
	}
	sliceDoc(_ = 0, y = this.doc.length) {
		return this.doc.sliceString(_, y, this.lineBreak);
	}
	facet(_) {
		let y = this.config.address[_.id];
		return y == null ? _.default : (ensureAddr(this, y), getAddr(this, y));
	}
	toJSON(_) {
		let y = {
			doc: this.sliceDoc(),
			selection: this.selection.toJSON()
		};
		if (_) for (let b in _) {
			let x = _[b];
			x instanceof Wo && this.config.address[x.id] != null && (y[b] = x.spec.toJSON(this.field(_[b]), this));
		}
		return y;
	}
	static fromJSON(_, y = {}, b) {
		if (!_ || typeof _.doc != `string`) throw RangeError(`Invalid JSON representation for EditorState`);
		let x = [];
		if (b) {
			for (let y in b) if (Object.prototype.hasOwnProperty.call(_, y)) {
				let S = b[y], C = _[y];
				x.push(S.init((_) => S.spec.fromJSON(C, _)));
			}
		}
		return EditorState.create({
			doc: _.doc,
			selection: J.fromJSON(_.selection),
			extensions: y.extensions ? x.concat([y.extensions]) : x
		});
	}
	static create(_ = {}) {
		let y = Jo.resolve(_.extensions || [], /* @__PURE__ */ new Map()), b = _.doc instanceof Mo ? _.doc : Mo.of((_.doc || ``).split(y.staticFacet(EditorState.lineSeparator) || Lo)), x = _.selection ? _.selection instanceof J ? _.selection : J.single(_.selection.anchor, _.selection.head) : J.single(0);
		return checkSelection(x, b.length), y.staticFacet(Xo) || (x = x.asSingle()), new EditorState(y, b, x, y.dynamicSlots.map(() => null), (_, y) => y.create(_), null);
	}
	get tabSize() {
		return this.facet(EditorState.tabSize);
	}
	get lineBreak() {
		return this.facet(EditorState.lineSeparator) || `
`;
	}
	get readOnly() {
		return this.facet(ts);
	}
	phrase(_, ...y) {
		for (let y of this.facet(EditorState.phrases)) if (Object.prototype.hasOwnProperty.call(y, _)) {
			_ = y[_];
			break;
		}
		return y.length && (_ = _.replace(/\$(\$|\d*)/g, (_, b) => {
			if (b == `$`) return `$`;
			let x = +(b || 1);
			return !x || x > y.length ? _ : y[x - 1];
		})), _;
	}
	languageDataAt(_, y, b = -1) {
		let x = [];
		for (let S of this.facet(Yo)) for (let C of S(this, y, b)) Object.prototype.hasOwnProperty.call(C, _) && x.push(C[_]);
		return x;
	}
	charCategorizer(_) {
		return makeCategorizer(this.languageDataAt(`wordChars`, _).join(``));
	}
	wordAt(_) {
		let { text: y, from: b, length: x } = this.doc.lineAt(_), S = this.charCategorizer(_), C = _ - b, w = _ - b;
		for (; C > 0;) {
			let _ = findClusterBreak(y, C, !1);
			if (S(y.slice(_, C)) != os.Word) break;
			C = _;
		}
		for (; w < x;) {
			let _ = findClusterBreak(y, w);
			if (S(y.slice(w, _)) != os.Word) break;
			w = _;
		}
		return C == w ? null : J.range(C + b, w + b);
	}
};
ls.allowMultipleSelections = Xo, ls.tabSize = Y.define({ combine: (_) => _.length ? _[0] : 4 }), ls.lineSeparator = Zo, ls.readOnly = ts, ls.phrases = Y.define({ compare(_, y) {
	let b = Object.keys(_), x = Object.keys(y);
	return b.length == x.length && b.every((b) => _[b] == y[b]);
} }), ls.languageData = Yo, ls.changeFilter = Qo, ls.transactionFilter = $o, ls.transactionExtender = es, qo.reconfigure = ns.define();
function combineConfig(_, y, b = {}) {
	let x = {};
	for (let y of _) for (let _ of Object.keys(y)) {
		let S = y[_], C = x[_];
		if (C === void 0) x[_] = S;
		else if (!(C === S || S === void 0)) if (Object.hasOwnProperty.call(b, _)) x[_] = b[_](C, S);
		else throw Error(`Config merge conflict for field ` + _);
	}
	for (let _ in y) x[_] === void 0 && (x[_] = y[_]);
	return x;
}
var RangeValue = class {
	eq(_) {
		return this == _;
	}
	range(_, y = _) {
		return us.create(_, y, this);
	}
};
RangeValue.prototype.startSide = RangeValue.prototype.endSide = 0, RangeValue.prototype.point = !1, RangeValue.prototype.mapMode = Ro.TrackDel;
var us = class Range$1 {
	constructor(_, y, b) {
		this.from = _, this.to = y, this.value = b;
	}
	static create(_, y, b) {
		return new Range$1(_, y, b);
	}
};
function cmpRange(_, y) {
	return _.from - y.from || _.value.startSide - y.value.startSide;
}
var ds = class Chunk {
	constructor(_, y, b, x) {
		this.from = _, this.to = y, this.value = b, this.maxPoint = x;
	}
	get length() {
		return this.to[this.to.length - 1];
	}
	findIndex(_, y, b, x = 0) {
		let S = b ? this.to : this.from;
		for (let C = x, w = S.length;;) {
			if (C == w) return C;
			let x = C + w >> 1, E = S[x] - _ || (b ? this.value[x].endSide : this.value[x].startSide) - y;
			if (x == C) return E >= 0 ? C : w;
			E >= 0 ? w = x : C = x + 1;
		}
	}
	between(_, y, b, x) {
		for (let S = this.findIndex(y, -1e9, !0), C = this.findIndex(b, 1e9, !1, S); S < C; S++) if (x(this.from[S] + _, this.to[S] + _, this.value[S]) === !1) return !1;
	}
	map(_, y) {
		let b = [], x = [], S = [], C = -1, w = -1;
		for (let E = 0; E < this.value.length; E++) {
			let D = this.value[E], O = this.from[E] + _, k = this.to[E] + _, A, j;
			if (O == k) {
				let _ = y.mapPos(O, D.startSide, D.mapMode);
				if (_ == null || (A = j = _, D.startSide != D.endSide && (j = y.mapPos(O, D.endSide), j < A))) continue;
			} else if (A = y.mapPos(O, D.startSide), j = y.mapPos(k, D.endSide), A > j || A == j && D.startSide > 0 && D.endSide <= 0) continue;
			(j - A || D.endSide - D.startSide) < 0 || (C < 0 && (C = A), D.point && (w = Math.max(w, j - A)), b.push(D), x.push(A - C), S.push(j - C));
		}
		return {
			mapped: b.length ? new Chunk(x, S, b, w) : null,
			pos: C
		};
	}
}, fs = class RangeSet {
	constructor(_, y, b, x) {
		this.chunkPos = _, this.chunk = y, this.nextLayer = b, this.maxPoint = x;
	}
	static create(_, y, b, x) {
		return new RangeSet(_, y, b, x);
	}
	get length() {
		let _ = this.chunk.length - 1;
		return _ < 0 ? 0 : Math.max(this.chunkEnd(_), this.nextLayer.length);
	}
	get size() {
		if (this.isEmpty) return 0;
		let _ = this.nextLayer.size;
		for (let y of this.chunk) _ += y.value.length;
		return _;
	}
	chunkEnd(_) {
		return this.chunkPos[_] + this.chunk[_].length;
	}
	update(_) {
		let { add: y = [], sort: b = !1, filterFrom: x = 0, filterTo: S = this.length } = _, C = _.filter;
		if (y.length == 0 && !C) return this;
		if (b && (y = y.slice().sort(cmpRange)), this.isEmpty) return y.length ? RangeSet.of(y) : this;
		let w = new LayerCursor(this, null, -1).goto(0), E = 0, D = [], O = new ps();
		for (; w.value || E < y.length;) if (E < y.length && (w.from - y[E].from || w.startSide - y[E].value.startSide) >= 0) {
			let _ = y[E++];
			O.addInner(_.from, _.to, _.value) || D.push(_);
		} else w.rangeIndex == 1 && w.chunkIndex < this.chunk.length && (E == y.length || this.chunkEnd(w.chunkIndex) < y[E].from) && (!C || x > this.chunkEnd(w.chunkIndex) || S < this.chunkPos[w.chunkIndex]) && O.addChunk(this.chunkPos[w.chunkIndex], this.chunk[w.chunkIndex]) ? w.nextChunk() : ((!C || x > w.to || S < w.from || C(w.from, w.to, w.value)) && (O.addInner(w.from, w.to, w.value) || D.push(us.create(w.from, w.to, w.value))), w.next());
		return O.finishInner(this.nextLayer.isEmpty && !D.length ? RangeSet.empty : this.nextLayer.update({
			add: D,
			filter: C,
			filterFrom: x,
			filterTo: S
		}));
	}
	map(_) {
		if (_.empty || this.isEmpty) return this;
		let y = [], b = [], x = -1;
		for (let S = 0; S < this.chunk.length; S++) {
			let C = this.chunkPos[S], w = this.chunk[S], E = _.touchesRange(C, C + w.length);
			if (E === !1) x = Math.max(x, w.maxPoint), y.push(w), b.push(_.mapPos(C));
			else if (E === !0) {
				let { mapped: S, pos: E } = w.map(C, _);
				S && (x = Math.max(x, S.maxPoint), y.push(S), b.push(E));
			}
		}
		let S = this.nextLayer.map(_);
		return y.length == 0 ? S : new RangeSet(b, y, S || RangeSet.empty, x);
	}
	between(_, y, b) {
		if (!this.isEmpty) {
			for (let x = 0; x < this.chunk.length; x++) {
				let S = this.chunkPos[x], C = this.chunk[x];
				if (y >= S && _ <= S + C.length && C.between(S, _ - S, y - S, b) === !1) return;
			}
			this.nextLayer.between(_, y, b);
		}
	}
	iter(_ = 0) {
		return ms.from([this]).goto(_);
	}
	get isEmpty() {
		return this.nextLayer == this;
	}
	static iter(_, y = 0) {
		return ms.from(_).goto(y);
	}
	static compare(_, y, b, x, S = -1) {
		let C = _.filter((_) => _.maxPoint > 0 || !_.isEmpty && _.maxPoint >= S), w = y.filter((_) => _.maxPoint > 0 || !_.isEmpty && _.maxPoint >= S), E = findSharedChunks(C, w, b), D = new SpanCursor(C, E, S), O = new SpanCursor(w, E, S);
		b.iterGaps((_, y, b) => compare(D, _, O, y, b, x)), b.empty && b.length == 0 && compare(D, 0, O, 0, 0, x);
	}
	static eq(_, y, b = 0, x) {
		x ??= 999999999;
		let S = _.filter((_) => !_.isEmpty && y.indexOf(_) < 0), C = y.filter((y) => !y.isEmpty && _.indexOf(y) < 0);
		if (S.length != C.length) return !1;
		if (!S.length) return !0;
		let w = findSharedChunks(S, C), E = new SpanCursor(S, w, 0).goto(b), D = new SpanCursor(C, w, 0).goto(b);
		for (;;) {
			if (E.to != D.to || !sameValues(E.active, D.active) || E.point && (!D.point || !E.point.eq(D.point))) return !1;
			if (E.to > x) return !0;
			E.next(), D.next();
		}
	}
	static spans(_, y, b, x, S = -1) {
		let C = new SpanCursor(_, null, S).goto(y), w = y, E = C.openStart;
		for (;;) {
			let _ = Math.min(C.to, b);
			if (C.point) {
				let b = C.activeForPoint(C.to), S = C.pointFrom < y ? b.length + 1 : C.point.startSide < 0 ? b.length : Math.min(b.length, E);
				x.point(w, _, C.point, b, S, C.pointRank), E = Math.min(C.openEnd(_), b.length);
			} else _ > w && (x.span(w, _, C.active, E), E = C.openEnd(_));
			if (C.to > b) return E + (C.point && C.to > b ? 1 : 0);
			w = C.to, C.next();
		}
	}
	static of(_, y = !1) {
		let b = new ps();
		for (let x of _ instanceof us ? [_] : y ? lazySort(_) : _) b.add(x.from, x.to, x.value);
		return b.finish();
	}
	static join(_) {
		if (!_.length) return RangeSet.empty;
		let y = _[_.length - 1];
		for (let b = _.length - 2; b >= 0; b--) for (let x = _[b]; x != RangeSet.empty; x = x.nextLayer) y = new RangeSet(x.chunkPos, x.chunk, y, Math.max(x.maxPoint, y.maxPoint));
		return y;
	}
};
fs.empty = new fs([], [], null, -1);
function lazySort(_) {
	if (_.length > 1) for (let y = _[0], b = 1; b < _.length; b++) {
		let x = _[b];
		if (cmpRange(y, x) > 0) return _.slice().sort(cmpRange);
		y = x;
	}
	return _;
}
fs.empty.nextLayer = fs.empty;
var ps = class RangeSetBuilder {
	finishChunk(_) {
		this.chunks.push(new ds(this.from, this.to, this.value, this.maxPoint)), this.chunkPos.push(this.chunkStart), this.chunkStart = -1, this.setMaxPoint = Math.max(this.setMaxPoint, this.maxPoint), this.maxPoint = -1, _ && (this.from = [], this.to = [], this.value = []);
	}
	constructor() {
		this.chunks = [], this.chunkPos = [], this.chunkStart = -1, this.last = null, this.lastFrom = -1e9, this.lastTo = -1e9, this.from = [], this.to = [], this.value = [], this.maxPoint = -1, this.setMaxPoint = -1, this.nextLayer = null;
	}
	add(_, y, b) {
		this.addInner(_, y, b) || (this.nextLayer ||= new RangeSetBuilder()).add(_, y, b);
	}
	addInner(_, y, b) {
		let x = _ - this.lastTo || b.startSide - this.last.endSide;
		if (x <= 0 && (_ - this.lastFrom || b.startSide - this.last.startSide) < 0) throw Error("Ranges must be added sorted by `from` position and `startSide`");
		return x < 0 ? !1 : (this.from.length == 250 && this.finishChunk(!0), this.chunkStart < 0 && (this.chunkStart = _), this.from.push(_ - this.chunkStart), this.to.push(y - this.chunkStart), this.last = b, this.lastFrom = _, this.lastTo = y, this.value.push(b), b.point && (this.maxPoint = Math.max(this.maxPoint, y - _)), !0);
	}
	addChunk(_, y) {
		if ((_ - this.lastTo || y.value[0].startSide - this.last.endSide) < 0) return !1;
		this.from.length && this.finishChunk(!0), this.setMaxPoint = Math.max(this.setMaxPoint, y.maxPoint), this.chunks.push(y), this.chunkPos.push(_);
		let b = y.value.length - 1;
		return this.last = y.value[b], this.lastFrom = y.from[b] + _, this.lastTo = y.to[b] + _, !0;
	}
	finish() {
		return this.finishInner(fs.empty);
	}
	finishInner(_) {
		if (this.from.length && this.finishChunk(!1), this.chunks.length == 0) return _;
		let y = fs.create(this.chunkPos, this.chunks, this.nextLayer ? this.nextLayer.finishInner(_) : _, this.setMaxPoint);
		return this.from = null, y;
	}
};
function findSharedChunks(_, y, b) {
	let x = /* @__PURE__ */ new Map();
	for (let y of _) for (let _ = 0; _ < y.chunk.length; _++) y.chunk[_].maxPoint <= 0 && x.set(y.chunk[_], y.chunkPos[_]);
	let S = /* @__PURE__ */ new Set();
	for (let _ of y) for (let y = 0; y < _.chunk.length; y++) {
		let C = x.get(_.chunk[y]);
		C != null && (b ? b.mapPos(C) : C) == _.chunkPos[y] && !b?.touchesRange(C, C + _.chunk[y].length) && S.add(_.chunk[y]);
	}
	return S;
}
var LayerCursor = class {
	constructor(_, y, b, x = 0) {
		this.layer = _, this.skip = y, this.minPoint = b, this.rank = x;
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	get endSide() {
		return this.value ? this.value.endSide : 0;
	}
	goto(_, y = -1e9) {
		return this.chunkIndex = this.rangeIndex = 0, this.gotoInner(_, y, !1), this;
	}
	gotoInner(_, y, b) {
		for (; this.chunkIndex < this.layer.chunk.length;) {
			let y = this.layer.chunk[this.chunkIndex];
			if (!(this.skip && this.skip.has(y) || this.layer.chunkEnd(this.chunkIndex) < _ || y.maxPoint < this.minPoint)) break;
			this.chunkIndex++, b = !1;
		}
		if (this.chunkIndex < this.layer.chunk.length) {
			let x = this.layer.chunk[this.chunkIndex].findIndex(_ - this.layer.chunkPos[this.chunkIndex], y, !0);
			(!b || this.rangeIndex < x) && this.setRangeIndex(x);
		}
		this.next();
	}
	forward(_, y) {
		(this.to - _ || this.endSide - y) < 0 && this.gotoInner(_, y, !0);
	}
	next() {
		for (;;) if (this.chunkIndex == this.layer.chunk.length) {
			this.from = this.to = 1e9, this.value = null;
			break;
		} else {
			let _ = this.layer.chunkPos[this.chunkIndex], y = this.layer.chunk[this.chunkIndex], b = _ + y.from[this.rangeIndex];
			if (this.from = b, this.to = _ + y.to[this.rangeIndex], this.value = y.value[this.rangeIndex], this.setRangeIndex(this.rangeIndex + 1), this.minPoint < 0 || this.value.point && this.to - this.from >= this.minPoint) break;
		}
	}
	setRangeIndex(_) {
		if (_ == this.layer.chunk[this.chunkIndex].value.length) {
			if (this.chunkIndex++, this.skip) for (; this.chunkIndex < this.layer.chunk.length && this.skip.has(this.layer.chunk[this.chunkIndex]);) this.chunkIndex++;
			this.rangeIndex = 0;
		} else this.rangeIndex = _;
	}
	nextChunk() {
		this.chunkIndex++, this.rangeIndex = 0, this.next();
	}
	compare(_) {
		return this.from - _.from || this.startSide - _.startSide || this.rank - _.rank || this.to - _.to || this.endSide - _.endSide;
	}
}, ms = class HeapCursor {
	constructor(_) {
		this.heap = _;
	}
	static from(_, y = null, b = -1) {
		let x = [];
		for (let S = 0; S < _.length; S++) for (let C = _[S]; !C.isEmpty; C = C.nextLayer) C.maxPoint >= b && x.push(new LayerCursor(C, y, b, S));
		return x.length == 1 ? x[0] : new HeapCursor(x);
	}
	get startSide() {
		return this.value ? this.value.startSide : 0;
	}
	goto(_, y = -1e9) {
		for (let b of this.heap) b.goto(_, y);
		for (let _ = this.heap.length >> 1; _ >= 0; _--) heapBubble(this.heap, _);
		return this.next(), this;
	}
	forward(_, y) {
		for (let b of this.heap) b.forward(_, y);
		for (let _ = this.heap.length >> 1; _ >= 0; _--) heapBubble(this.heap, _);
		(this.to - _ || this.value.endSide - y) < 0 && this.next();
	}
	next() {
		if (this.heap.length == 0) this.from = this.to = 1e9, this.value = null, this.rank = -1;
		else {
			let _ = this.heap[0];
			this.from = _.from, this.to = _.to, this.value = _.value, this.rank = _.rank, _.value && _.next(), heapBubble(this.heap, 0);
		}
	}
};
function heapBubble(_, y) {
	for (let b = _[y];;) {
		let x = (y << 1) + 1;
		if (x >= _.length) break;
		let S = _[x];
		if (x + 1 < _.length && S.compare(_[x + 1]) >= 0 && (S = _[x + 1], x++), b.compare(S) < 0) break;
		_[x] = b, _[y] = S, y = x;
	}
}
var SpanCursor = class {
	constructor(_, y, b) {
		this.minPoint = b, this.active = [], this.activeTo = [], this.activeRank = [], this.minActive = -1, this.point = null, this.pointFrom = 0, this.pointRank = 0, this.to = -1e9, this.endSide = 0, this.openStart = -1, this.cursor = ms.from(_, y, b);
	}
	goto(_, y = -1e9) {
		return this.cursor.goto(_, y), this.active.length = this.activeTo.length = this.activeRank.length = 0, this.minActive = -1, this.to = _, this.endSide = y, this.openStart = -1, this.next(), this;
	}
	forward(_, y) {
		for (; this.minActive > -1 && (this.activeTo[this.minActive] - _ || this.active[this.minActive].endSide - y) < 0;) this.removeActive(this.minActive);
		this.cursor.forward(_, y);
	}
	removeActive(_) {
		remove(this.active, _), remove(this.activeTo, _), remove(this.activeRank, _), this.minActive = findMinIndex(this.active, this.activeTo);
	}
	addActive(_) {
		let y = 0, { value: b, to: x, rank: S } = this.cursor;
		for (; y < this.activeRank.length && (S - this.activeRank[y] || x - this.activeTo[y]) > 0;) y++;
		insert(this.active, y, b), insert(this.activeTo, y, x), insert(this.activeRank, y, S), _ && insert(_, y, this.cursor.from), this.minActive = findMinIndex(this.active, this.activeTo);
	}
	next() {
		let _ = this.to, y = this.point;
		this.point = null;
		let b = this.openStart < 0 ? [] : null;
		for (;;) {
			let x = this.minActive;
			if (x > -1 && (this.activeTo[x] - this.cursor.from || this.active[x].endSide - this.cursor.startSide) < 0) {
				if (this.activeTo[x] > _) {
					this.to = this.activeTo[x], this.endSide = this.active[x].endSide;
					break;
				}
				this.removeActive(x), b && remove(b, x);
			} else if (!this.cursor.value) {
				this.to = this.endSide = 1e9;
				break;
			} else if (this.cursor.from > _) {
				this.to = this.cursor.from, this.endSide = this.cursor.startSide;
				break;
			} else {
				let _ = this.cursor.value;
				if (!_.point) this.addActive(b), this.cursor.next();
				else if (y && this.cursor.to == this.to && this.cursor.from < this.cursor.to) this.cursor.next();
				else {
					this.point = _, this.pointFrom = this.cursor.from, this.pointRank = this.cursor.rank, this.to = this.cursor.to, this.endSide = _.endSide, this.cursor.next(), this.forward(this.to, this.endSide);
					break;
				}
			}
		}
		if (b) {
			this.openStart = 0;
			for (let y = b.length - 1; y >= 0 && b[y] < _; y--) this.openStart++;
		}
	}
	activeForPoint(_) {
		if (!this.active.length) return this.active;
		let y = [];
		for (let b = this.active.length - 1; b >= 0 && !(this.activeRank[b] < this.pointRank); b--) (this.activeTo[b] > _ || this.activeTo[b] == _ && this.active[b].endSide >= this.point.endSide) && y.push(this.active[b]);
		return y.reverse();
	}
	openEnd(_) {
		let y = 0;
		for (let b = this.activeTo.length - 1; b >= 0 && this.activeTo[b] > _; b--) y++;
		return y;
	}
};
function compare(_, y, b, x, S, C) {
	_.goto(y), b.goto(x);
	let w = x + S, E = x, D = x - y;
	for (;;) {
		let y = _.to + D - b.to || _.endSide - b.endSide, x = y < 0 ? _.to + D : b.to, S = Math.min(x, w);
		if (_.point || b.point ? _.point && b.point && (_.point == b.point || _.point.eq(b.point)) && sameValues(_.activeForPoint(_.to), b.activeForPoint(b.to)) || C.comparePoint(E, S, _.point, b.point) : S > E && !sameValues(_.active, b.active) && C.compareRange(E, S, _.active, b.active), x > w) break;
		E = x, y <= 0 && _.next(), y >= 0 && b.next();
	}
}
function sameValues(_, y) {
	if (_.length != y.length) return !1;
	for (let b = 0; b < _.length; b++) if (_[b] != y[b] && !_[b].eq(y[b])) return !1;
	return !0;
}
function remove(_, y) {
	for (let b = y, x = _.length - 1; b < x; b++) _[b] = _[b + 1];
	_.pop();
}
function insert(_, y, b) {
	for (let b = _.length - 1; b >= y; b--) _[b + 1] = _[b];
	_[y] = b;
}
function findMinIndex(_, y) {
	let b = -1, x = 1e9;
	for (let S = 0; S < y.length; S++) (y[S] - x || _[S].endSide - _[b].endSide) < 0 && (b = S, x = y[S]);
	return b;
}
function countColumn(_, y, b = _.length) {
	let x = 0;
	for (let S = 0; S < b;) _.charCodeAt(S) == 9 ? (x += y - x % y, S++) : (x++, S = findClusterBreak(_, S));
	return x;
}
function findColumn(_, y, b, x) {
	for (let x = 0, S = 0;;) {
		if (S >= y) return x;
		if (x == _.length) break;
		S += _.charCodeAt(x) == 9 ? b - S % b : 1, x = findClusterBreak(_, x);
	}
	return x === !0 ? -1 : _.length;
}
for (var hs = `ͼ`, gs = typeof Symbol > `u` ? `__ͼ` : Symbol.for(hs), _s = typeof Symbol > `u` ? `__styleSet` + Math.floor(Math.random() * 1e8) : Symbol(`styleSet`), vs = typeof globalThis < `u` ? globalThis : typeof window < `u` ? window : {}, StyleModule = class {
	constructor(_, y) {
		this.rules = [];
		let { finish: b } = y || {};
		function splitSelector(_) {
			return /^@/.test(_) ? [_] : _.split(/,\s*/);
		}
		function render(_, y, x, S) {
			let C = [], w = /^@(\w+)\b/.exec(_[0]), E = w && w[1] == `keyframes`;
			if (w && y == null) return x.push(_[0] + `;`);
			for (let b in y) {
				let S = y[b];
				if (/&/.test(b)) render(b.split(/,\s*/).map((y) => _.map((_) => y.replace(/&/, _))).reduce((_, y) => _.concat(y)), S, x);
				else if (S && typeof S == `object`) {
					if (!w) throw RangeError(`The value of a property (` + b + `) should be a primitive value.`);
					render(splitSelector(b), S, C, E);
				} else S != null && C.push(b.replace(/_.*/, ``).replace(/[A-Z]/g, (_) => `-` + _.toLowerCase()) + `: ` + S + `;`);
			}
			(C.length || E) && x.push((b && !w && !S ? _.map(b) : _).join(`, `) + ` {` + C.join(` `) + `}`);
		}
		for (let y in _) render(splitSelector(y), _[y], this.rules);
	}
	getRules() {
		return this.rules.join(`
`);
	}
	static newName() {
		let _ = vs[gs] || 1;
		return vs[gs] = _ + 1, hs + _.toString(36);
	}
	static mount(_, y, b) {
		let x = _[_s], S = b && b.nonce;
		x ? S && x.setNonce(S) : x = new StyleSet(_, S), x.mount(Array.isArray(y) ? y : [y], _);
	}
}, ys = /* @__PURE__ */ new Map(), StyleSet = class {
	constructor(_, y) {
		let b = _.ownerDocument || _, x = b.defaultView;
		if (!_.head && _.adoptedStyleSheets && x.CSSStyleSheet) {
			let y = ys.get(b);
			if (y) return _[_s] = y;
			this.sheet = new x.CSSStyleSheet(), ys.set(b, this);
		} else this.styleTag = b.createElement(`style`), y && this.styleTag.setAttribute(`nonce`, y);
		this.modules = [], _[_s] = this;
	}
	mount(_, y) {
		let b = this.sheet, x = 0, S = 0;
		for (let y = 0; y < _.length; y++) {
			let C = _[y], w = this.modules.indexOf(C);
			if (w < S && w > -1 && (this.modules.splice(w, 1), S--, w = -1), w == -1) {
				if (this.modules.splice(S++, 0, C), b) for (let _ = 0; _ < C.rules.length; _++) b.insertRule(C.rules[_], x++);
			} else {
				for (; S < w;) x += this.modules[S++].rules.length;
				x += C.rules.length, S++;
			}
		}
		if (b) y.adoptedStyleSheets.indexOf(this.sheet) < 0 && (y.adoptedStyleSheets = [this.sheet, ...y.adoptedStyleSheets]);
		else {
			let _ = ``;
			for (let y = 0; y < this.modules.length; y++) _ += this.modules[y].getRules() + `
`;
			this.styleTag.textContent = _;
			let b = y.head || y;
			this.styleTag.parentNode != b && b.insertBefore(this.styleTag, b.firstChild);
		}
	}
	setNonce(_) {
		this.styleTag && this.styleTag.getAttribute(`nonce`) != _ && this.styleTag.setAttribute(`nonce`, _);
	}
}, bs = {
	8: `Backspace`,
	9: `Tab`,
	10: `Enter`,
	12: `NumLock`,
	13: `Enter`,
	16: `Shift`,
	17: `Control`,
	18: `Alt`,
	20: `CapsLock`,
	27: `Escape`,
	32: ` `,
	33: `PageUp`,
	34: `PageDown`,
	35: `End`,
	36: `Home`,
	37: `ArrowLeft`,
	38: `ArrowUp`,
	39: `ArrowRight`,
	40: `ArrowDown`,
	44: `PrintScreen`,
	45: `Insert`,
	46: `Delete`,
	59: `;`,
	61: `=`,
	91: `Meta`,
	92: `Meta`,
	106: `*`,
	107: `+`,
	108: `,`,
	109: `-`,
	110: `.`,
	111: `/`,
	144: `NumLock`,
	145: `ScrollLock`,
	160: `Shift`,
	161: `Shift`,
	162: `Control`,
	163: `Control`,
	164: `Alt`,
	165: `Alt`,
	173: `-`,
	186: `;`,
	187: `=`,
	188: `,`,
	189: `-`,
	190: `.`,
	191: `/`,
	192: "`",
	219: `[`,
	220: `\\`,
	221: `]`,
	222: `'`
}, xs = {
	48: `)`,
	49: `!`,
	50: `@`,
	51: `#`,
	52: `$`,
	53: `%`,
	54: `^`,
	55: `&`,
	56: `*`,
	57: `(`,
	59: `:`,
	61: `+`,
	173: `_`,
	186: `:`,
	187: `+`,
	188: `<`,
	189: `_`,
	190: `>`,
	191: `?`,
	192: `~`,
	219: `{`,
	220: `|`,
	221: `}`,
	222: `"`
}, Ss = typeof navigator < `u` && /Mac/.test(navigator.platform), Cs = typeof navigator < `u` && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), ws = 0; ws < 10; ws++) bs[48 + ws] = bs[96 + ws] = String(ws);
for (var ws = 1; ws <= 24; ws++) bs[ws + 111] = `F` + ws;
for (var ws = 65; ws <= 90; ws++) bs[ws] = String.fromCharCode(ws + 32), xs[ws] = String.fromCharCode(ws);
for (var Ts in bs) xs.hasOwnProperty(Ts) || (xs[Ts] = bs[Ts]);
function keyName(_) {
	var y = !(Ss && _.metaKey && _.shiftKey && !_.ctrlKey && !_.altKey || Cs && _.shiftKey && _.key && _.key.length == 1 || _.key == `Unidentified`) && _.key || (_.shiftKey ? xs : bs)[_.keyCode] || _.key || `Unidentified`;
	return y == `Esc` && (y = `Escape`), y == `Del` && (y = `Delete`), y == `Left` && (y = `ArrowLeft`), y == `Up` && (y = `ArrowUp`), y == `Right` && (y = `ArrowRight`), y == `Down` && (y = `ArrowDown`), y;
}
function getSelection(_) {
	let y;
	return y = _.nodeType == 11 ? _.getSelection ? _ : _.ownerDocument : _, y.getSelection();
}
function contains(_, y) {
	return y ? _ == y || _.contains(y.nodeType == 1 ? y : y.parentNode) : !1;
}
function deepActiveElement(_) {
	let y = _.activeElement;
	for (; y && y.shadowRoot;) y = y.shadowRoot.activeElement;
	return y;
}
function hasSelection(_, y) {
	if (!y.anchorNode) return !1;
	try {
		return contains(_, y.anchorNode);
	} catch {
		return !1;
	}
}
function clientRectsFor(_) {
	return _.nodeType == 3 ? textRange(_, 0, _.nodeValue.length).getClientRects() : _.nodeType == 1 ? _.getClientRects() : [];
}
function isEquivalentPosition(_, y, b, x) {
	return b ? scanFor(_, y, b, x, -1) || scanFor(_, y, b, x, 1) : !1;
}
function domIndex(_) {
	for (var y = 0;; y++) if (_ = _.previousSibling, !_) return y;
}
function isBlockElement(_) {
	return _.nodeType == 1 && /^(DIV|P|LI|UL|OL|BLOCKQUOTE|DD|DT|H\d|SECTION|PRE)$/.test(_.nodeName);
}
function scanFor(_, y, b, x, S) {
	for (;;) {
		if (_ == b && y == x) return !0;
		if (y == (S < 0 ? 0 : maxOffset(_))) {
			if (_.nodeName == `DIV`) return !1;
			let b = _.parentNode;
			if (!b || b.nodeType != 1) return !1;
			y = domIndex(_) + (S < 0 ? 0 : 1), _ = b;
		} else if (_.nodeType == 1) {
			if (_ = _.childNodes[y + (S < 0 ? -1 : 0)], _.nodeType == 1 && _.contentEditable == `false`) return !1;
			y = S < 0 ? maxOffset(_) : 0;
		} else return !1;
	}
}
function maxOffset(_) {
	return _.nodeType == 3 ? _.nodeValue.length : _.childNodes.length;
}
function flattenRect(_, y) {
	let b = y ? _.left : _.right;
	return {
		left: b,
		right: b,
		top: _.top,
		bottom: _.bottom
	};
}
function windowRect(_) {
	let y = _.visualViewport;
	return y ? {
		left: 0,
		right: y.width,
		top: 0,
		bottom: y.height
	} : {
		left: 0,
		right: _.innerWidth,
		top: 0,
		bottom: _.innerHeight
	};
}
function getScale(_, y) {
	let b = y.width / _.offsetWidth, x = y.height / _.offsetHeight;
	return (b > .995 && b < 1.005 || !isFinite(b) || Math.abs(y.width - _.offsetWidth) < 1) && (b = 1), (x > .995 && x < 1.005 || !isFinite(x) || Math.abs(y.height - _.offsetHeight) < 1) && (x = 1), {
		scaleX: b,
		scaleY: x
	};
}
function scrollRectIntoView(_, y, b, x, S, C, w, E) {
	let D = _.ownerDocument, O = D.defaultView || window;
	for (let k = _, A = !1; k && !A;) if (k.nodeType == 1) {
		let _, j = k == D.body, N = 1, P = 1;
		if (j) _ = windowRect(O);
		else {
			if (/^(fixed|sticky)$/.test(getComputedStyle(k).position) && (A = !0), k.scrollHeight <= k.clientHeight && k.scrollWidth <= k.clientWidth) {
				k = k.assignedSlot || k.parentNode;
				continue;
			}
			let y = k.getBoundingClientRect();
			({scaleX: N, scaleY: P} = getScale(k, y)), _ = {
				left: y.left,
				right: y.left + k.clientWidth * N,
				top: y.top,
				bottom: y.top + k.clientHeight * P
			};
		}
		let F = 0, I = 0;
		if (S == `nearest`) y.top < _.top ? (I = -(_.top - y.top + w), b > 0 && y.bottom > _.bottom + I && (I = y.bottom - _.bottom + I + w)) : y.bottom > _.bottom && (I = y.bottom - _.bottom + w, b < 0 && y.top - I < _.top && (I = -(_.top + I - y.top + w)));
		else {
			let x = y.bottom - y.top, C = _.bottom - _.top;
			I = (S == `center` && x <= C ? y.top + x / 2 - C / 2 : S == `start` || S == `center` && b < 0 ? y.top - w : y.bottom - C + w) - _.top;
		}
		if (x == `nearest` ? y.left < _.left ? (F = -(_.left - y.left + C), b > 0 && y.right > _.right + F && (F = y.right - _.right + F + C)) : y.right > _.right && (F = y.right - _.right + C, b < 0 && y.left < _.left + F && (F = -(_.left + F - y.left + C))) : F = (x == `center` ? y.left + (y.right - y.left) / 2 - (_.right - _.left) / 2 : x == `start` == E ? y.left - C : y.right - (_.right - _.left) + C) - _.left, F || I) if (j) O.scrollBy(F, I);
		else {
			let _ = 0, b = 0;
			if (I) {
				let _ = k.scrollTop;
				k.scrollTop += I / P, b = (k.scrollTop - _) * P;
			}
			if (F) {
				let y = k.scrollLeft;
				k.scrollLeft += F / N, _ = (k.scrollLeft - y) * N;
			}
			y = {
				left: y.left - _,
				top: y.top - b,
				right: y.right - _,
				bottom: y.bottom - b
			}, _ && Math.abs(_ - F) < 1 && (x = `nearest`), b && Math.abs(b - I) < 1 && (S = `nearest`);
		}
		if (j) break;
		k = k.assignedSlot || k.parentNode;
	} else if (k.nodeType == 11) k = k.host;
	else break;
}
function scrollableParent(_) {
	let y = _.ownerDocument;
	for (let b = _.parentNode; b && b != y.body;) if (b.nodeType == 1) {
		if (b.scrollHeight > b.clientHeight || b.scrollWidth > b.clientWidth) return b;
		b = b.assignedSlot || b.parentNode;
	} else if (b.nodeType == 11) b = b.host;
	else break;
	return null;
}
var DOMSelectionState = class {
	constructor() {
		this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
	}
	eq(_) {
		return this.anchorNode == _.anchorNode && this.anchorOffset == _.anchorOffset && this.focusNode == _.focusNode && this.focusOffset == _.focusOffset;
	}
	setRange(_) {
		let { anchorNode: y, focusNode: b } = _;
		this.set(y, Math.min(_.anchorOffset, y ? maxOffset(y) : 0), b, Math.min(_.focusOffset, b ? maxOffset(b) : 0));
	}
	set(_, y, b, x) {
		this.anchorNode = _, this.anchorOffset = y, this.focusNode = b, this.focusOffset = x;
	}
}, Es = null;
function focusPreventScroll(_) {
	if (_.setActive) return _.setActive();
	if (Es) return _.focus(Es);
	let y = [];
	for (let b = _; b && (y.push(b, b.scrollTop, b.scrollLeft), b != b.ownerDocument); b = b.parentNode);
	if (_.focus(Es == null ? { get preventScroll() {
		return Es = { preventScroll: !0 }, !0;
	} } : void 0), !Es) {
		Es = !1;
		for (let _ = 0; _ < y.length;) {
			let b = y[_++], x = y[_++], S = y[_++];
			b.scrollTop != x && (b.scrollTop = x), b.scrollLeft != S && (b.scrollLeft = S);
		}
	}
}
var Ds;
function textRange(_, y, b = y) {
	let x = Ds ||= document.createRange();
	return x.setEnd(_, b), x.setStart(_, y), x;
}
function dispatchKey(_, y, b, x) {
	let S = {
		key: y,
		code: y,
		keyCode: b,
		which: b,
		cancelable: !0
	};
	x && ({altKey: S.altKey, ctrlKey: S.ctrlKey, shiftKey: S.shiftKey, metaKey: S.metaKey} = x);
	let C = new KeyboardEvent(`keydown`, S);
	C.synthetic = !0, _.dispatchEvent(C);
	let w = new KeyboardEvent(`keyup`, S);
	return w.synthetic = !0, _.dispatchEvent(w), C.defaultPrevented || w.defaultPrevented;
}
function getRoot(_) {
	for (; _;) {
		if (_ && (_.nodeType == 9 || _.nodeType == 11 && _.host)) return _;
		_ = _.assignedSlot || _.parentNode;
	}
	return null;
}
function clearAttributes(_) {
	for (; _.attributes.length;) _.removeAttributeNode(_.attributes[0]);
}
function atElementStart(_, y) {
	let b = y.focusNode, x = y.focusOffset;
	if (!b || y.anchorNode != b || y.anchorOffset != x) return !1;
	for (x = Math.min(x, maxOffset(b));;) if (x) {
		if (b.nodeType != 1) return !1;
		let _ = b.childNodes[x - 1];
		_.contentEditable == `false` ? x-- : (b = _, x = maxOffset(b));
	} else if (b == _) return !0;
	else x = domIndex(b), b = b.parentNode;
}
function isScrolledToBottom(_) {
	return _.scrollTop > Math.max(1, _.scrollHeight - _.clientHeight - 4);
}
function textNodeBefore(_, y) {
	for (let b = _, x = y;;) if (b.nodeType == 3 && x > 0) return {
		node: b,
		offset: x
	};
	else if (b.nodeType == 1 && x > 0) {
		if (b.contentEditable == `false`) return null;
		b = b.childNodes[x - 1], x = maxOffset(b);
	} else if (b.parentNode && !isBlockElement(b)) x = domIndex(b), b = b.parentNode;
	else return null;
}
function textNodeAfter(_, y) {
	for (let b = _, x = y;;) if (b.nodeType == 3 && x < b.nodeValue.length) return {
		node: b,
		offset: x
	};
	else if (b.nodeType == 1 && x < b.childNodes.length) {
		if (b.contentEditable == `false`) return null;
		b = b.childNodes[x], x = 0;
	} else if (b.parentNode && !isBlockElement(b)) x = domIndex(b) + 1, b = b.parentNode;
	else return null;
}
var Os = class DOMPos {
	constructor(_, y, b = !0) {
		this.node = _, this.offset = y, this.precise = b;
	}
	static before(_, y) {
		return new DOMPos(_.parentNode, domIndex(_), y);
	}
	static after(_, y) {
		return new DOMPos(_.parentNode, domIndex(_) + 1, y);
	}
}, ks = [], As = class ContentView {
	constructor() {
		this.parent = null, this.dom = null, this.flags = 2;
	}
	get overrideDOMText() {
		return null;
	}
	get posAtStart() {
		return this.parent ? this.parent.posBefore(this) : 0;
	}
	get posAtEnd() {
		return this.posAtStart + this.length;
	}
	posBefore(_) {
		let y = this.posAtStart;
		for (let b of this.children) {
			if (b == _) return y;
			y += b.length + b.breakAfter;
		}
		throw RangeError(`Invalid child in posBefore`);
	}
	posAfter(_) {
		return this.posBefore(_) + _.length;
	}
	sync(_, y) {
		if (this.flags & 2) {
			let b = this.dom, x = null, S;
			for (let C of this.children) {
				if (C.flags & 7) {
					if (!C.dom && (S = x ? x.nextSibling : b.firstChild)) {
						let _ = ContentView.get(S);
						(!_ || !_.parent && _.canReuseDOM(C)) && C.reuseDOM(S);
					}
					C.sync(_, y), C.flags &= -8;
				}
				if (S = x ? x.nextSibling : b.firstChild, y && !y.written && y.node == b && S != C.dom && (y.written = !0), C.dom.parentNode == b) for (; S && S != C.dom;) S = rm$1(S);
				else b.insertBefore(C.dom, S);
				x = C.dom;
			}
			for (S = x ? x.nextSibling : b.firstChild, S && y && y.node == b && (y.written = !0); S;) S = rm$1(S);
		} else if (this.flags & 1) for (let b of this.children) b.flags & 7 && (b.sync(_, y), b.flags &= -8);
	}
	reuseDOM(_) {}
	localPosFromDOM(_, y) {
		let b;
		if (_ == this.dom) b = this.dom.childNodes[y];
		else {
			let x = maxOffset(_) == 0 ? 0 : y == 0 ? -1 : 1;
			for (;;) {
				let y = _.parentNode;
				if (y == this.dom) break;
				x == 0 && y.firstChild != y.lastChild && (x = _ == y.firstChild ? -1 : 1), _ = y;
			}
			b = x < 0 ? _ : _.nextSibling;
		}
		if (b == this.dom.firstChild) return 0;
		for (; b && !ContentView.get(b);) b = b.nextSibling;
		if (!b) return this.length;
		for (let _ = 0, y = 0;; _++) {
			let x = this.children[_];
			if (x.dom == b) return y;
			y += x.length + x.breakAfter;
		}
	}
	domBoundsAround(_, y, b = 0) {
		let x = -1, S = -1, C = -1, w = -1;
		for (let E = 0, D = b, O = b; E < this.children.length; E++) {
			let b = this.children[E], k = D + b.length;
			if (D < _ && k > y) return b.domBoundsAround(_, y, D);
			if (k >= _ && x == -1 && (x = E, S = D), D > y && b.dom.parentNode == this.dom) {
				C = E, w = O;
				break;
			}
			O = k, D = k + b.breakAfter;
		}
		return {
			from: S,
			to: w < 0 ? b + this.length : w,
			startDOM: (x ? this.children[x - 1].dom.nextSibling : null) || this.dom.firstChild,
			endDOM: C < this.children.length && C >= 0 ? this.children[C].dom : null
		};
	}
	markDirty(_ = !1) {
		this.flags |= 2, this.markParentsDirty(_);
	}
	markParentsDirty(_) {
		for (let y = this.parent; y; y = y.parent) {
			if (_ && (y.flags |= 2), y.flags & 1) return;
			y.flags |= 1, _ = !1;
		}
	}
	setParent(_) {
		this.parent != _ && (this.parent = _, this.flags & 7 && this.markParentsDirty(!0));
	}
	setDOM(_) {
		this.dom != _ && (this.dom && (this.dom.cmView = null), this.dom = _, _.cmView = this);
	}
	get rootView() {
		for (let _ = this;;) {
			let y = _.parent;
			if (!y) return _;
			_ = y;
		}
	}
	replaceChildren(_, y, b = ks) {
		this.markDirty();
		for (let x = _; x < y; x++) {
			let _ = this.children[x];
			_.parent == this && b.indexOf(_) < 0 && _.destroy();
		}
		this.children.splice(_, y - _, ...b);
		for (let _ = 0; _ < b.length; _++) b[_].setParent(this);
	}
	ignoreMutation(_) {
		return !1;
	}
	ignoreEvent(_) {
		return !1;
	}
	childCursor(_ = this.length) {
		return new ChildCursor(this.children, _, this.children.length);
	}
	childPos(_, y = 1) {
		return this.childCursor().findPos(_, y);
	}
	toString() {
		let _ = this.constructor.name.replace(`View`, ``);
		return _ + (this.children.length ? `(` + this.children.join() + `)` : this.length ? `[` + (_ == `Text` ? this.text : this.length) + `]` : ``) + (this.breakAfter ? `#` : ``);
	}
	static get(_) {
		return _.cmView;
	}
	get isEditable() {
		return !0;
	}
	get isWidget() {
		return !1;
	}
	get isHidden() {
		return !1;
	}
	merge(_, y, b, x, S, C) {
		return !1;
	}
	become(_) {
		return !1;
	}
	canReuseDOM(_) {
		return _.constructor == this.constructor && !((this.flags | _.flags) & 8);
	}
	getSide() {
		return 0;
	}
	destroy() {
		for (let _ of this.children) _.parent == this && _.destroy();
		this.parent = null;
	}
};
As.prototype.breakAfter = 0;
function rm$1(_) {
	let y = _.nextSibling;
	return _.parentNode.removeChild(_), y;
}
var ChildCursor = class {
	constructor(_, y, b) {
		this.children = _, this.pos = y, this.i = b, this.off = 0;
	}
	findPos(_, y = 1) {
		for (;;) {
			if (_ > this.pos || _ == this.pos && (y > 0 || this.i == 0 || this.children[this.i - 1].breakAfter)) return this.off = _ - this.pos, this;
			let b = this.children[--this.i];
			this.pos -= b.length + b.breakAfter;
		}
	}
};
function replaceRange(_, y, b, x, S, C, w, E, D) {
	let { children: O } = _, k = O.length ? O[y] : null, A = C.length ? C[C.length - 1] : null, j = A ? A.breakAfter : w;
	if (!(y == x && k && !w && !j && C.length < 2 && k.merge(b, S, C.length ? A : null, b == 0, E, D))) {
		if (x < O.length) {
			let _ = O[x];
			_ && (S < _.length || _.breakAfter && A?.breakAfter) ? (y == x && (_ = _.split(S), S = 0), !j && A && _.merge(0, S, A, !0, 0, D) ? C[C.length - 1] = _ : ((S || _.children.length && !_.children[0].length) && _.merge(0, S, null, !1, 0, D), C.push(_))) : _?.breakAfter && (A ? A.breakAfter = 1 : w = 1), x++;
		}
		for (k && (k.breakAfter = w, b > 0 && (!w && C.length && k.merge(b, k.length, C[0], !1, E, 0) ? k.breakAfter = C.shift().breakAfter : (b < k.length || k.children.length && k.children[k.children.length - 1].length == 0) && k.merge(b, k.length, null, !1, E, 0), y++)); y < x && C.length;) if (O[x - 1].become(C[C.length - 1])) x--, C.pop(), D = C.length ? 0 : E;
		else if (O[y].become(C[0])) y++, C.shift(), E = C.length ? 0 : D;
		else break;
		!C.length && y && x < O.length && !O[y - 1].breakAfter && O[x].merge(0, 0, O[y - 1], !1, E, D) && y--, (y < x || C.length) && _.replaceChildren(y, x, C);
	}
}
function mergeChildrenInto(_, y, b, x, S, C) {
	let w = _.childCursor(), { i: E, off: D } = w.findPos(b, 1), { i: O, off: k } = w.findPos(y, -1), A = y - b;
	for (let _ of x) A += _.length;
	_.length += A, replaceRange(_, O, k, E, D, x, 0, S, C);
}
var js = typeof navigator < `u` ? navigator : {
	userAgent: ``,
	vendor: ``,
	platform: ``
}, Ms = typeof document < `u` ? document : { documentElement: { style: {} } }, Ns = /Edge\/(\d+)/.exec(js.userAgent), Ps = /MSIE \d/.test(js.userAgent), Fs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(js.userAgent), Is = !!(Ps || Fs || Ns), Ls = !Is && /gecko\/(\d+)/i.test(js.userAgent), Rs = !Is && /Chrome\/(\d+)/.exec(js.userAgent), zs = `webkitFontSmoothing` in Ms.documentElement.style, Bs = !Is && /Apple Computer/.test(js.vendor), Vs = Bs && (/Mobile\/\w+/.test(js.userAgent) || js.maxTouchPoints > 2), X = {
	mac: Vs || /Mac/.test(js.platform),
	windows: /Win/.test(js.platform),
	linux: /Linux|X11/.test(js.platform),
	ie: Is,
	ie_version: Ps ? Ms.documentMode || 6 : Fs ? +Fs[1] : Ns ? +Ns[1] : 0,
	gecko: Ls,
	gecko_version: Ls ? +(/Firefox\/(\d+)/.exec(js.userAgent) || [0, 0])[1] : 0,
	chrome: !!Rs,
	chrome_version: Rs ? +Rs[1] : 0,
	ios: Vs,
	android: /Android\b/.test(js.userAgent),
	webkit: zs,
	safari: Bs,
	webkit_version: zs ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0,
	tabSize: Ms.documentElement.style.tabSize == null ? `-moz-tab-size` : `tab-size`
}, Hs = 256, Us = class TextView extends As {
	constructor(_) {
		super(), this.text = _;
	}
	get length() {
		return this.text.length;
	}
	createDOM(_) {
		this.setDOM(_ || document.createTextNode(this.text));
	}
	sync(_, y) {
		this.dom || this.createDOM(), this.dom.nodeValue != this.text && (y && y.node == this.dom && (y.written = !0), this.dom.nodeValue = this.text);
	}
	reuseDOM(_) {
		_.nodeType == 3 && this.createDOM(_);
	}
	merge(_, y, b) {
		return this.flags & 8 || b && (!(b instanceof TextView) || this.length - (y - _) + b.length > Hs || b.flags & 8) ? !1 : (this.text = this.text.slice(0, _) + (b ? b.text : ``) + this.text.slice(y), this.markDirty(), !0);
	}
	split(_) {
		let y = new TextView(this.text.slice(_));
		return this.text = this.text.slice(0, _), this.markDirty(), y.flags |= this.flags & 8, y;
	}
	localPosFromDOM(_, y) {
		return _ == this.dom ? y : y ? this.text.length : 0;
	}
	domAtPos(_) {
		return new Os(this.dom, _);
	}
	domBoundsAround(_, y, b) {
		return {
			from: b,
			to: b + this.length,
			startDOM: this.dom,
			endDOM: this.dom.nextSibling
		};
	}
	coordsAt(_, y) {
		return textCoords(this.dom, _, y);
	}
}, Ws = class MarkView extends As {
	constructor(_, y = [], b = 0) {
		super(), this.mark = _, this.children = y, this.length = b;
		for (let _ of y) _.setParent(this);
	}
	setAttrs(_) {
		if (clearAttributes(_), this.mark.class && (_.className = this.mark.class), this.mark.attrs) for (let y in this.mark.attrs) _.setAttribute(y, this.mark.attrs[y]);
		return _;
	}
	canReuseDOM(_) {
		return super.canReuseDOM(_) && !((this.flags | _.flags) & 8);
	}
	reuseDOM(_) {
		_.nodeName == this.mark.tagName.toUpperCase() && (this.setDOM(_), this.flags |= 6);
	}
	sync(_, y) {
		this.dom ? this.flags & 4 && this.setAttrs(this.dom) : this.setDOM(this.setAttrs(document.createElement(this.mark.tagName))), super.sync(_, y);
	}
	merge(_, y, b, x, S, C) {
		return b && (!(b instanceof MarkView && b.mark.eq(this.mark)) || _ && S <= 0 || y < this.length && C <= 0) ? !1 : (mergeChildrenInto(this, _, y, b ? b.children.slice() : [], S - 1, C - 1), this.markDirty(), !0);
	}
	split(_) {
		let y = [], b = 0, x = -1, S = 0;
		for (let C of this.children) {
			let w = b + C.length;
			w > _ && y.push(b < _ ? C.split(_ - b) : C), x < 0 && b >= _ && (x = S), b = w, S++;
		}
		let C = this.length - _;
		return this.length = _, x > -1 && (this.children.length = x, this.markDirty()), new MarkView(this.mark, y, C);
	}
	domAtPos(_) {
		return inlineDOMAtPos(this, _);
	}
	coordsAt(_, y) {
		return coordsInChildren(this, _, y);
	}
};
function textCoords(_, y, b) {
	let x = _.nodeValue.length;
	y > x && (y = x);
	let S = y, C = y, w = 0;
	y == 0 && b < 0 || y == x && b >= 0 ? X.chrome || X.gecko || (y ? (S--, w = 1) : C < x && (C++, w = -1)) : b < 0 ? S-- : C < x && C++;
	let E = textRange(_, S, C).getClientRects();
	if (!E.length) return null;
	let D = E[(w ? w < 0 : b >= 0) ? 0 : E.length - 1];
	return X.safari && !w && D.width == 0 && (D = Array.prototype.find.call(E, (_) => _.width) || D), w ? flattenRect(D, w < 0) : D || null;
}
var Gs = class WidgetView extends As {
	static create(_, y, b) {
		return new WidgetView(_, y, b);
	}
	constructor(_, y, b) {
		super(), this.widget = _, this.length = y, this.side = b, this.prevWidget = null;
	}
	split(_) {
		let y = WidgetView.create(this.widget, this.length - _, this.side);
		return this.length -= _, y;
	}
	sync(_) {
		(!this.dom || !this.widget.updateDOM(this.dom, _)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(_)), this.widget.editable || (this.dom.contentEditable = `false`));
	}
	getSide() {
		return this.side;
	}
	merge(_, y, b, x, S, C) {
		return b && (!(b instanceof WidgetView) || !this.widget.compare(b.widget) || _ > 0 && S <= 0 || y < this.length && C <= 0) ? !1 : (this.length = _ + (b ? b.length : 0) + (this.length - y), !0);
	}
	become(_) {
		return _ instanceof WidgetView && _.side == this.side && this.widget.constructor == _.widget.constructor ? (this.widget.compare(_.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = _.widget, this.length = _.length, !0) : !1;
	}
	ignoreMutation() {
		return !0;
	}
	ignoreEvent(_) {
		return this.widget.ignoreEvent(_);
	}
	get overrideDOMText() {
		if (this.length == 0) return Mo.empty;
		let _ = this;
		for (; _.parent;) _ = _.parent;
		let { view: y } = _, b = y && y.state.doc, x = this.posAtStart;
		return b ? b.slice(x, x + this.length) : Mo.empty;
	}
	domAtPos(_) {
		return (this.length ? _ == 0 : this.side > 0) ? Os.before(this.dom) : Os.after(this.dom, _ == this.length);
	}
	domBoundsAround() {
		return null;
	}
	coordsAt(_, y) {
		let b = this.widget.coordsAt(this.dom, _, y);
		if (b) return b;
		let x = this.dom.getClientRects(), S = null;
		if (!x.length) return null;
		let C = this.side ? this.side < 0 : _ > 0;
		for (let y = C ? x.length - 1 : 0; S = x[y], !(_ > 0 ? y == 0 : y == x.length - 1 || S.top < S.bottom); y += C ? -1 : 1);
		return flattenRect(S, !C);
	}
	get isEditable() {
		return !1;
	}
	get isWidget() {
		return !0;
	}
	get isHidden() {
		return this.widget.isHidden;
	}
	destroy() {
		super.destroy(), this.dom && this.widget.destroy(this.dom);
	}
}, Ks = class WidgetBufferView extends As {
	constructor(_) {
		super(), this.side = _;
	}
	get length() {
		return 0;
	}
	merge() {
		return !1;
	}
	become(_) {
		return _ instanceof WidgetBufferView && _.side == this.side;
	}
	split() {
		return new WidgetBufferView(this.side);
	}
	sync() {
		if (!this.dom) {
			let _ = document.createElement(`img`);
			_.className = `cm-widgetBuffer`, _.setAttribute(`aria-hidden`, `true`), this.setDOM(_);
		}
	}
	getSide() {
		return this.side;
	}
	domAtPos(_) {
		return this.side > 0 ? Os.before(this.dom) : Os.after(this.dom);
	}
	localPosFromDOM() {
		return 0;
	}
	domBoundsAround() {
		return null;
	}
	coordsAt(_) {
		return this.dom.getBoundingClientRect();
	}
	get overrideDOMText() {
		return Mo.empty;
	}
	get isHidden() {
		return !0;
	}
};
Us.prototype.children = Gs.prototype.children = Ks.prototype.children = ks;
function inlineDOMAtPos(_, y) {
	let b = _.dom, { children: x } = _, S = 0;
	for (let _ = 0; S < x.length; S++) {
		let C = x[S], w = _ + C.length;
		if (!(w == _ && C.getSide() <= 0)) {
			if (y > _ && y < w && C.dom.parentNode == b) return C.domAtPos(y - _);
			if (y <= _) break;
			_ = w;
		}
	}
	for (let _ = S; _ > 0; _--) {
		let y = x[_ - 1];
		if (y.dom.parentNode == b) return y.domAtPos(y.length);
	}
	for (let _ = S; _ < x.length; _++) {
		let y = x[_];
		if (y.dom.parentNode == b) return y.domAtPos(0);
	}
	return new Os(b, 0);
}
function joinInlineInto(_, y, b) {
	let x, { children: S } = _;
	b > 0 && y instanceof Ws && S.length && (x = S[S.length - 1]) instanceof Ws && x.mark.eq(y.mark) ? joinInlineInto(x, y.children[0], b - 1) : (S.push(y), y.setParent(_)), _.length += y.length;
}
function coordsInChildren(_, y, b) {
	let x = null, S = -1, C = null, w = -1;
	function scan(_, y) {
		for (let E = 0, D = 0; E < _.children.length && D <= y; E++) {
			let O = _.children[E], k = D + O.length;
			k >= y && (O.children.length ? scan(O, y - D) : (!C || C.isHidden && b > 0) && (k > y || D == k && O.getSide() > 0) ? (C = O, w = y - D) : (D < y || D == k && O.getSide() < 0 && !O.isHidden) && (x = O, S = y - D)), D = k;
		}
	}
	scan(_, y);
	let E = (b < 0 ? x : C) || x || C;
	return E ? E.coordsAt(Math.max(0, E == x ? S : w), b) : fallbackRect(_);
}
function fallbackRect(_) {
	let y = _.dom.lastChild;
	if (!y) return _.dom.getBoundingClientRect();
	let b = clientRectsFor(y);
	return b[b.length - 1] || null;
}
function combineAttrs(_, y) {
	for (let b in _) b == `class` && y.class ? y.class += ` ` + _.class : b == `style` && y.style ? y.style += `;` + _.style : y[b] = _[b];
	return y;
}
var qs = Object.create(null);
function attrsEq(_, y, b) {
	if (_ == y) return !0;
	_ ||= qs, y ||= qs;
	let x = Object.keys(_), S = Object.keys(y);
	if (x.length - (b && x.indexOf(b) > -1 ? 1 : 0) != S.length - (b && S.indexOf(b) > -1 ? 1 : 0)) return !1;
	for (let C of x) if (C != b && (S.indexOf(C) == -1 || _[C] !== y[C])) return !1;
	return !0;
}
function updateAttrs(_, y, b) {
	let x = !1;
	if (y) for (let S in y) b && S in b || (x = !0, S == `style` ? _.style.cssText = `` : _.removeAttribute(S));
	if (b) for (let S in b) y && y[S] == b[S] || (x = !0, S == `style` ? _.style.cssText = b[S] : _.setAttribute(S, b[S]));
	return x;
}
function getAttrs(_) {
	let y = Object.create(null);
	for (let b = 0; b < _.attributes.length; b++) {
		let x = _.attributes[b];
		y[x.name] = x.value;
	}
	return y;
}
var Js = class LineView extends As {
	constructor() {
		super(...arguments), this.children = [], this.length = 0, this.prevAttrs = void 0, this.attrs = null, this.breakAfter = 0;
	}
	merge(_, y, b, x, S, C) {
		if (b) {
			if (!(b instanceof LineView)) return !1;
			this.dom || b.transferDOM(this);
		}
		return x && this.setDeco(b ? b.attrs : null), mergeChildrenInto(this, _, y, b ? b.children.slice() : [], S, C), !0;
	}
	split(_) {
		let y = new LineView();
		if (y.breakAfter = this.breakAfter, this.length == 0) return y;
		let { i: b, off: x } = this.childPos(_);
		x && (y.append(this.children[b].split(x), 0), this.children[b].merge(x, this.children[b].length, null, !1, 0, 0), b++);
		for (let _ = b; _ < this.children.length; _++) y.append(this.children[_], 0);
		for (; b > 0 && this.children[b - 1].length == 0;) this.children[--b].destroy();
		return this.children.length = b, this.markDirty(), this.length = _, y;
	}
	transferDOM(_) {
		this.dom &&= (this.markDirty(), _.setDOM(this.dom), _.prevAttrs = this.prevAttrs === void 0 ? this.attrs : this.prevAttrs, this.prevAttrs = void 0, null);
	}
	setDeco(_) {
		attrsEq(this.attrs, _) || (this.dom && (this.prevAttrs = this.attrs, this.markDirty()), this.attrs = _);
	}
	append(_, y) {
		joinInlineInto(this, _, y);
	}
	addLineDeco(_) {
		let y = _.spec.attributes, b = _.spec.class;
		y && (this.attrs = combineAttrs(y, this.attrs || {})), b && (this.attrs = combineAttrs({ class: b }, this.attrs || {}));
	}
	domAtPos(_) {
		return inlineDOMAtPos(this, _);
	}
	reuseDOM(_) {
		_.nodeName == `DIV` && (this.setDOM(_), this.flags |= 6);
	}
	sync(_, y) {
		this.dom ? this.flags & 4 && (clearAttributes(this.dom), this.dom.className = `cm-line`, this.prevAttrs = this.attrs ? null : void 0) : (this.setDOM(document.createElement(`div`)), this.dom.className = `cm-line`, this.prevAttrs = this.attrs ? null : void 0), this.prevAttrs !== void 0 && (updateAttrs(this.dom, this.prevAttrs, this.attrs), this.dom.classList.add(`cm-line`), this.prevAttrs = void 0), super.sync(_, y);
		let b = this.dom.lastChild;
		for (; b && As.get(b) instanceof Ws;) b = b.lastChild;
		if (!b || !this.length || b.nodeName != `BR` && As.get(b)?.isEditable == 0 && (!X.ios || !this.children.some((_) => _ instanceof Us))) {
			let _ = document.createElement(`BR`);
			_.cmIgnore = !0, this.dom.appendChild(_);
		}
	}
	measureTextSize() {
		if (this.children.length == 0 || this.length > 20) return null;
		let _ = 0, y;
		for (let b of this.children) {
			if (!(b instanceof Us) || /[^ -~]/.test(b.text)) return null;
			let x = clientRectsFor(b.dom);
			if (x.length != 1) return null;
			_ += x[0].width, y = x[0].height;
		}
		return _ ? {
			lineHeight: this.dom.getBoundingClientRect().height,
			charWidth: _ / this.length,
			textHeight: y
		} : null;
	}
	coordsAt(_, y) {
		let b = coordsInChildren(this, _, y);
		if (!this.children.length && b && this.parent) {
			let { heightOracle: _ } = this.parent.view.viewState, y = b.bottom - b.top;
			if (Math.abs(y - _.lineHeight) < 2 && _.textHeight < y) {
				let x = (y - _.textHeight) / 2;
				return {
					top: b.top + x,
					bottom: b.bottom - x,
					left: b.left,
					right: b.left
				};
			}
		}
		return b;
	}
	become(_) {
		return !1;
	}
	covers() {
		return !0;
	}
	static find(_, y) {
		for (let b = 0, x = 0; b < _.children.length; b++) {
			let S = _.children[b], C = x + S.length;
			if (C >= y) {
				if (S instanceof LineView) return S;
				if (C > y) break;
			}
			x = C + S.breakAfter;
		}
		return null;
	}
}, Ys = class BlockWidgetView extends As {
	constructor(_, y, b) {
		super(), this.widget = _, this.length = y, this.deco = b, this.breakAfter = 0, this.prevWidget = null;
	}
	merge(_, y, b, x, S, C) {
		return b && (!(b instanceof BlockWidgetView) || !this.widget.compare(b.widget) || _ > 0 && S <= 0 || y < this.length && C <= 0) ? !1 : (this.length = _ + (b ? b.length : 0) + (this.length - y), !0);
	}
	domAtPos(_) {
		return _ == 0 ? Os.before(this.dom) : Os.after(this.dom, _ == this.length);
	}
	split(_) {
		let y = this.length - _;
		this.length = _;
		let b = new BlockWidgetView(this.widget, y, this.deco);
		return b.breakAfter = this.breakAfter, b;
	}
	get children() {
		return ks;
	}
	sync(_) {
		(!this.dom || !this.widget.updateDOM(this.dom, _)) && (this.dom && this.prevWidget && this.prevWidget.destroy(this.dom), this.prevWidget = null, this.setDOM(this.widget.toDOM(_)), this.widget.editable || (this.dom.contentEditable = `false`));
	}
	get overrideDOMText() {
		return this.parent ? this.parent.view.state.doc.slice(this.posAtStart, this.posAtEnd) : Mo.empty;
	}
	domBoundsAround() {
		return null;
	}
	become(_) {
		return _ instanceof BlockWidgetView && _.widget.constructor == this.widget.constructor ? (_.widget.compare(this.widget) || this.markDirty(!0), this.dom && !this.prevWidget && (this.prevWidget = this.widget), this.widget = _.widget, this.length = _.length, this.deco = _.deco, this.breakAfter = _.breakAfter, !0) : !1;
	}
	ignoreMutation() {
		return !0;
	}
	ignoreEvent(_) {
		return this.widget.ignoreEvent(_);
	}
	get isEditable() {
		return !1;
	}
	get isWidget() {
		return !0;
	}
	coordsAt(_, y) {
		return this.widget.coordsAt(this.dom, _, y);
	}
	destroy() {
		super.destroy(), this.dom && this.widget.destroy(this.dom);
	}
	covers(_) {
		let { startSide: y, endSide: b } = this.deco;
		return y == b ? !1 : _ < 0 ? y < 0 : b > 0;
	}
}, WidgetType = class {
	eq(_) {
		return !1;
	}
	updateDOM(_, y) {
		return !1;
	}
	compare(_) {
		return this == _ || this.constructor == _.constructor && this.eq(_);
	}
	get estimatedHeight() {
		return -1;
	}
	get lineBreaks() {
		return 0;
	}
	ignoreEvent(_) {
		return !0;
	}
	coordsAt(_, y, b) {
		return null;
	}
	get isHidden() {
		return !1;
	}
	get editable() {
		return !1;
	}
	destroy(_) {}
}, Xs = (function(_) {
	return _[_.Text = 0] = `Text`, _[_.WidgetBefore = 1] = `WidgetBefore`, _[_.WidgetAfter = 2] = `WidgetAfter`, _[_.WidgetRange = 3] = `WidgetRange`, _;
})(Xs ||= {}), Decoration = class extends RangeValue {
	constructor(_, y, b, x) {
		super(), this.startSide = _, this.endSide = y, this.widget = b, this.spec = x;
	}
	get heightRelevant() {
		return !1;
	}
	static mark(_) {
		return new Zs(_);
	}
	static widget(_) {
		let y = Math.max(-1e4, Math.min(1e4, _.side || 0)), b = !!_.block;
		return y += b && !_.inlineOrder ? y > 0 ? 3e8 : -4e8 : y > 0 ? 1e8 : -1e8, new $s(_, y, y, b, _.widget || null, !1);
	}
	static replace(_) {
		let y = !!_.block, b, x;
		if (_.isBlockGap) b = -5e8, x = 4e8;
		else {
			let { start: S, end: C } = getInclusive(_, y);
			b = (S ? y ? -3e8 : -1 : 5e8) - 1, x = (C ? y ? 2e8 : 1 : -6e8) + 1;
		}
		return new $s(_, b, x, y, _.widget || null, !0);
	}
	static line(_) {
		return new Qs(_);
	}
	static set(_, y = !1) {
		return fs.of(_, y);
	}
	hasHeight() {
		return this.widget ? this.widget.estimatedHeight > -1 : !1;
	}
};
Decoration.none = fs.empty;
var Zs = class MarkDecoration extends Decoration {
	constructor(_) {
		let { start: y, end: b } = getInclusive(_);
		super(y ? -1 : 5e8, b ? 1 : -6e8, null, _), this.tagName = _.tagName || `span`, this.class = _.class || ``, this.attrs = _.attributes || null;
	}
	eq(_) {
		return this == _ || _ instanceof MarkDecoration && this.tagName == _.tagName && (this.class || this.attrs?.class) == (_.class || _.attrs?.class) && attrsEq(this.attrs, _.attrs, `class`);
	}
	range(_, y = _) {
		if (_ >= y) throw RangeError(`Mark decorations may not be empty`);
		return super.range(_, y);
	}
};
Zs.prototype.point = !1;
var Qs = class LineDecoration extends Decoration {
	constructor(_) {
		super(-2e8, -2e8, null, _);
	}
	eq(_) {
		return _ instanceof LineDecoration && this.spec.class == _.spec.class && attrsEq(this.spec.attributes, _.spec.attributes);
	}
	range(_, y = _) {
		if (y != _) throw RangeError(`Line decoration ranges must be zero-length`);
		return super.range(_, y);
	}
};
Qs.prototype.mapMode = Ro.TrackBefore, Qs.prototype.point = !0;
var $s = class PointDecoration extends Decoration {
	constructor(_, y, b, x, S, C) {
		super(y, b, S, _), this.block = x, this.isReplace = C, this.mapMode = x ? y <= 0 ? Ro.TrackBefore : Ro.TrackAfter : Ro.TrackDel;
	}
	get type() {
		return this.startSide == this.endSide ? this.startSide <= 0 ? Xs.WidgetBefore : Xs.WidgetAfter : Xs.WidgetRange;
	}
	get heightRelevant() {
		return this.block || !!this.widget && (this.widget.estimatedHeight >= 5 || this.widget.lineBreaks > 0);
	}
	eq(_) {
		return _ instanceof PointDecoration && widgetsEq(this.widget, _.widget) && this.block == _.block && this.startSide == _.startSide && this.endSide == _.endSide;
	}
	range(_, y = _) {
		if (this.isReplace && (_ > y || _ == y && this.startSide > 0 && this.endSide <= 0)) throw RangeError(`Invalid range for replacement decoration`);
		if (!this.isReplace && y != _) throw RangeError(`Widget decorations can only have zero-length ranges`);
		return super.range(_, y);
	}
};
$s.prototype.point = !0;
function getInclusive(_, y = !1) {
	let { inclusiveStart: b, inclusiveEnd: x } = _;
	return b ??= _.inclusive, x ??= _.inclusive, {
		start: b ?? y,
		end: x ?? y
	};
}
function widgetsEq(_, y) {
	return _ == y || !!(_ && y && _.compare(y));
}
function addRange(_, y, b, x = 0) {
	let S = b.length - 1;
	S >= 0 && b[S] + x >= _ ? b[S] = Math.max(b[S], y) : b.push(_, y);
}
var ec = class ContentBuilder {
	constructor(_, y, b, x) {
		this.doc = _, this.pos = y, this.end = b, this.disallowBlockEffectsFor = x, this.content = [], this.curLine = null, this.breakAtStart = 0, this.pendingBuffer = 0, this.bufferMarks = [], this.atCursorPos = !0, this.openStart = -1, this.openEnd = -1, this.text = ``, this.textOff = 0, this.cursor = _.iter(), this.skip = y;
	}
	posCovered() {
		if (this.content.length == 0) return !this.breakAtStart && this.doc.lineAt(this.pos).from != this.pos;
		let _ = this.content[this.content.length - 1];
		return !(_.breakAfter || _ instanceof Ys && _.deco.endSide < 0);
	}
	getLine() {
		return this.curLine || (this.content.push(this.curLine = new Js()), this.atCursorPos = !0), this.curLine;
	}
	flushBuffer(_ = this.bufferMarks) {
		this.pendingBuffer &&= (this.curLine.append(wrapMarks(new Ks(-1), _), _.length), 0);
	}
	addBlockWidget(_) {
		this.flushBuffer(), this.curLine = null, this.content.push(_);
	}
	finish(_) {
		this.pendingBuffer && _ <= this.bufferMarks.length ? this.flushBuffer() : this.pendingBuffer = 0, !this.posCovered() && !(_ && this.content.length && this.content[this.content.length - 1] instanceof Ys) && this.getLine();
	}
	buildText(_, y, b) {
		for (; _ > 0;) {
			if (this.textOff == this.text.length) {
				let { value: y, lineBreak: b, done: x } = this.cursor.next(this.skip);
				if (this.skip = 0, x) throw Error(`Ran out of text content when drawing inline views`);
				if (b) {
					this.posCovered() || this.getLine(), this.content.length ? this.content[this.content.length - 1].breakAfter = 1 : this.breakAtStart = 1, this.flushBuffer(), this.curLine = null, this.atCursorPos = !0, _--;
					continue;
				} else this.text = y, this.textOff = 0;
			}
			let x = Math.min(this.text.length - this.textOff, _, 512);
			this.flushBuffer(y.slice(y.length - b)), this.getLine().append(wrapMarks(new Us(this.text.slice(this.textOff, this.textOff + x)), y), b), this.atCursorPos = !0, this.textOff += x, _ -= x, b = 0;
		}
	}
	span(_, y, b, x) {
		this.buildText(y - _, b, x), this.pos = y, this.openStart < 0 && (this.openStart = x);
	}
	point(_, y, b, x, S, C) {
		if (this.disallowBlockEffectsFor[C] && b instanceof $s) {
			if (b.block) throw RangeError(`Block decorations may not be specified via plugins`);
			if (y > this.doc.lineAt(this.pos).to) throw RangeError(`Decorations that replace line breaks may not be specified via plugins`);
		}
		let w = y - _;
		if (b instanceof $s) if (b.block) b.startSide > 0 && !this.posCovered() && this.getLine(), this.addBlockWidget(new Ys(b.widget || NullWidget.block, w, b));
		else {
			let C = Gs.create(b.widget || NullWidget.inline, w, w ? 0 : b.startSide), E = this.atCursorPos && !C.isEditable && S <= x.length && (_ < y || b.startSide > 0), D = !C.isEditable && (_ < y || S > x.length || b.startSide <= 0), O = this.getLine();
			this.pendingBuffer == 2 && !E && !C.isEditable && (this.pendingBuffer = 0), this.flushBuffer(x), E && (O.append(wrapMarks(new Ks(1), x), S), S = x.length + Math.max(0, S - x.length)), O.append(wrapMarks(C, x), S), this.atCursorPos = D, this.pendingBuffer = D ? _ < y || S > x.length ? 1 : 2 : 0, this.pendingBuffer && (this.bufferMarks = x.slice());
		}
		else this.doc.lineAt(this.pos).from == this.pos && this.getLine().addLineDeco(b);
		w && (this.textOff + w <= this.text.length ? this.textOff += w : (this.skip += w - (this.text.length - this.textOff), this.text = ``, this.textOff = 0), this.pos = y), this.openStart < 0 && (this.openStart = S);
	}
	static build(_, y, b, x, S) {
		let C = new ContentBuilder(_, y, b, S);
		return C.openEnd = fs.spans(x, y, b, C), C.openStart < 0 && (C.openStart = C.openEnd), C.finish(C.openEnd), C;
	}
};
function wrapMarks(_, y) {
	for (let b of y) _ = new Ws(b, [_], _.length);
	return _;
}
var NullWidget = class extends WidgetType {
	constructor(_) {
		super(), this.tag = _;
	}
	eq(_) {
		return _.tag == this.tag;
	}
	toDOM() {
		return document.createElement(this.tag);
	}
	updateDOM(_) {
		return _.nodeName.toLowerCase() == this.tag;
	}
	get isHidden() {
		return !0;
	}
};
NullWidget.inline = new NullWidget(`span`), NullWidget.block = new NullWidget(`div`);
var tc = (function(_) {
	return _[_.LTR = 0] = `LTR`, _[_.RTL = 1] = `RTL`, _;
})(tc ||= {}), nc = tc.LTR, rc = tc.RTL;
function dec(_) {
	let y = [];
	for (let b = 0; b < _.length; b++) y.push(1 << _[b]);
	return y;
}
var ic = dec(`88888888888888888888888888888888888666888888787833333333337888888000000000000000000000000008888880000000000000000000000000088888888888888888888888888888888888887866668888088888663380888308888800000000000000000000000800000000000000000000000000000008`), ac = dec(`4444448826627288999999999992222222222222222222222222222222222222222222222229999999999999999999994444444444644222822222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222999999949999999229989999223333333333`), oc = Object.create(null), sc = [];
for (let _ of [
	`()`,
	`[]`,
	`{}`
]) {
	let y = _.charCodeAt(0), b = _.charCodeAt(1);
	oc[y] = b, oc[b] = -y;
}
function charType(_) {
	return _ <= 247 ? ic[_] : 1424 <= _ && _ <= 1524 ? 2 : 1536 <= _ && _ <= 1785 ? ac[_ - 1536] : 1774 <= _ && _ <= 2220 ? 4 : 8192 <= _ && _ <= 8204 ? 256 : 64336 <= _ && _ <= 65023 ? 4 : 1;
}
var cc = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac\ufb50-\ufdff]/, BidiSpan = class {
	get dir() {
		return this.level % 2 ? rc : nc;
	}
	constructor(_, y, b) {
		this.from = _, this.to = y, this.level = b;
	}
	side(_, y) {
		return this.dir == y == _ ? this.to : this.from;
	}
	forward(_, y) {
		return _ == (this.dir == y);
	}
	static find(_, y, b, x) {
		let S = -1;
		for (let C = 0; C < _.length; C++) {
			let w = _[C];
			if (w.from <= y && w.to >= y) {
				if (w.level == b) return C;
				(S < 0 || (x == 0 ? _[S].level > w.level : x < 0 ? w.from < y : w.to > y)) && (S = C);
			}
		}
		if (S < 0) throw RangeError(`Index out of range`);
		return S;
	}
};
function isolatesEq(_, y) {
	if (_.length != y.length) return !1;
	for (let b = 0; b < _.length; b++) {
		let x = _[b], S = y[b];
		if (x.from != S.from || x.to != S.to || x.direction != S.direction || !isolatesEq(x.inner, S.inner)) return !1;
	}
	return !0;
}
var lc = [];
function computeCharTypes(_, y, b, x, S) {
	for (let C = 0; C <= x.length; C++) {
		let w = C ? x[C - 1].to : y, E = C < x.length ? x[C].from : b, D = C ? 256 : S;
		for (let y = w, b = D, x = D; y < E; y++) {
			let S = charType(_.charCodeAt(y));
			S == 512 ? S = b : S == 8 && x == 4 && (S = 16), lc[y] = S == 4 ? 2 : S, S & 7 && (x = S), b = S;
		}
		for (let _ = w, y = D, x = D; _ < E; _++) {
			let S = lc[_];
			if (S == 128) _ < E - 1 && y == lc[_ + 1] && y & 24 ? S = lc[_] = y : lc[_] = 256;
			else if (S == 64) {
				let S = _ + 1;
				for (; S < E && lc[S] == 64;) S++;
				let C = _ && y == 8 || S < b && lc[S] == 8 ? x == 1 ? 1 : 8 : 256;
				for (let y = _; y < S; y++) lc[y] = C;
				_ = S - 1;
			} else S == 8 && x == 1 && (lc[_] = 1);
			y = S, S & 7 && (x = S);
		}
	}
}
function processBracketPairs(_, y, b, x, S) {
	let C = S == 1 ? 2 : 1;
	for (let w = 0, E = 0, D = 0; w <= x.length; w++) {
		let O = w ? x[w - 1].to : y, k = w < x.length ? x[w].from : b;
		for (let y = O, b, x, w; y < k; y++) if (x = oc[b = _.charCodeAt(y)]) if (x < 0) {
			for (let _ = E - 3; _ >= 0; _ -= 3) if (sc[_ + 1] == -x) {
				let b = sc[_ + 2], x = b & 2 ? S : b & 4 ? b & 1 ? C : S : 0;
				x && (lc[y] = lc[sc[_]] = x), E = _;
				break;
			}
		} else if (sc.length == 189) break;
		else sc[E++] = y, sc[E++] = b, sc[E++] = D;
		else if ((w = lc[y]) == 2 || w == 1) {
			let _ = w == S;
			D = +!_;
			for (let y = E - 3; y >= 0; y -= 3) {
				let b = sc[y + 2];
				if (b & 2) break;
				if (_) sc[y + 2] |= 2;
				else {
					if (b & 4) break;
					sc[y + 2] |= 4;
				}
			}
		}
	}
}
function processNeutrals(_, y, b, x) {
	for (let S = 0, C = x; S <= b.length; S++) {
		let w = S ? b[S - 1].to : _, E = S < b.length ? b[S].from : y;
		for (let D = w; D < E;) {
			let w = lc[D];
			if (w == 256) {
				let w = D + 1;
				for (;;) if (w == E) {
					if (S == b.length) break;
					w = b[S++].to, E = S < b.length ? b[S].from : y;
				} else if (lc[w] == 256) w++;
				else break;
				let O = C == 1, k = O == ((w < y ? lc[w] : x) == 1) ? O ? 1 : 2 : x;
				for (let y = w, x = S, C = x ? b[x - 1].to : _; y > D;) y == C && (y = b[--x].from, C = x ? b[x - 1].to : _), lc[--y] = k;
				D = w;
			} else C = w, D++;
		}
	}
}
function emitSpans(_, y, b, x, S, C, w) {
	let E = x % 2 ? 2 : 1;
	if (x % 2 == S % 2) for (let D = y, O = 0; D < b;) {
		let y = !0, k = !1;
		if (O == C.length || D < C[O].from) {
			let _ = lc[D];
			_ != E && (y = !1, k = _ == 16);
		}
		let A = !y && E == 1 ? [] : null, j = y ? x : x + 1, N = D;
		run: for (;;) if (O < C.length && N == C[O].from) {
			if (k) break run;
			let P = C[O];
			if (!y) for (let _ = P.to, y = O + 1;;) {
				if (_ == b) break run;
				if (y < C.length && C[y].from == _) _ = C[y++].to;
				else if (lc[_] == E) break run;
				else break;
			}
			O++, A ? A.push(P) : (P.from > D && w.push(new BidiSpan(D, P.from, j)), computeSectionOrder(_, P.direction == nc == !(j % 2) ? x : x + 1, S, P.inner, P.from, P.to, w), D = P.to), N = P.to;
		} else if (N == b || (y ? lc[N] != E : lc[N] == E)) break;
		else N++;
		A ? emitSpans(_, D, N, x + 1, S, A, w) : D < N && w.push(new BidiSpan(D, N, j)), D = N;
	}
	else for (let D = b, O = C.length; D > y;) {
		let b = !0, k = !1;
		if (!O || D > C[O - 1].to) {
			let _ = lc[D - 1];
			_ != E && (b = !1, k = _ == 16);
		}
		let A = !b && E == 1 ? [] : null, j = b ? x : x + 1, N = D;
		run: for (;;) if (O && N == C[O - 1].to) {
			if (k) break run;
			let P = C[--O];
			if (!b) for (let _ = P.from, b = O;;) {
				if (_ == y) break run;
				if (b && C[b - 1].to == _) _ = C[--b].from;
				else if (lc[_ - 1] == E) break run;
				else break;
			}
			A ? A.push(P) : (P.to < D && w.push(new BidiSpan(P.to, D, j)), computeSectionOrder(_, P.direction == nc == !(j % 2) ? x : x + 1, S, P.inner, P.from, P.to, w), D = P.from), N = P.from;
		} else if (N == y || (b ? lc[N - 1] != E : lc[N - 1] == E)) break;
		else N--;
		A ? emitSpans(_, N, D, x + 1, S, A, w) : N < D && w.push(new BidiSpan(N, D, j)), D = N;
	}
}
function computeSectionOrder(_, y, b, x, S, C, w) {
	let E = y % 2 ? 2 : 1;
	computeCharTypes(_, S, C, x, E), processBracketPairs(_, S, C, x, E), processNeutrals(S, C, x, E), emitSpans(_, S, C, y, b, x, w);
}
function computeOrder(_, y, b) {
	if (!_) return [new BidiSpan(0, 0, +(y == rc))];
	if (y == nc && !b.length && !cc.test(_)) return trivialOrder(_.length);
	if (b.length) for (; _.length > lc.length;) lc[lc.length] = 256;
	let x = [], S = y == nc ? 0 : 1;
	return computeSectionOrder(_, S, S, b, 0, _.length, x), x;
}
function trivialOrder(_) {
	return [new BidiSpan(0, _, 0)];
}
var uc = ``;
function moveVisually(_, y, b, x, S) {
	let C = x.head - _.from, w = BidiSpan.find(y, C, x.bidiLevel ?? -1, x.assoc), E = y[w], D = E.side(S, b);
	if (C == D) {
		let _ = w += S ? 1 : -1;
		if (_ < 0 || _ >= y.length) return null;
		E = y[w = _], C = E.side(!S, b), D = E.side(S, b);
	}
	let O = findClusterBreak(_.text, C, E.forward(S, b));
	(O < E.from || O > E.to) && (O = D), uc = _.text.slice(Math.min(C, O), Math.max(C, O));
	let k = w == (S ? y.length - 1 : 0) ? null : y[w + (S ? 1 : -1)];
	return k && O == D && k.level + +!S < E.level ? J.cursor(k.side(!S, b) + _.from, k.forward(S, b) ? 1 : -1, k.level) : J.cursor(O + _.from, E.forward(S, b) ? -1 : 1, E.level);
}
function autoDirection(_, y, b) {
	for (let x = y; x < b; x++) {
		let y = charType(_.charCodeAt(x));
		if (y == 1) return nc;
		if (y == 2 || y == 4) return rc;
	}
	return nc;
}
var dc = Y.define(), fc = Y.define(), pc = Y.define(), mc = Y.define(), hc = Y.define(), gc = Y.define(), _c = Y.define(), vc = Y.define({ combine: (_) => _.some((_) => _) }), yc = Y.define({ combine: (_) => _.some((_) => _) }), bc = Y.define(), xc = class ScrollTarget {
	constructor(_, y = `nearest`, b = `nearest`, x = 5, S = 5, C = !1) {
		this.range = _, this.y = y, this.x = b, this.yMargin = x, this.xMargin = S, this.isSnapshot = C;
	}
	map(_) {
		return _.empty ? this : new ScrollTarget(this.range.map(_), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
	clip(_) {
		return this.range.to <= _.doc.length ? this : new ScrollTarget(J.cursor(_.doc.length), this.y, this.x, this.yMargin, this.xMargin, this.isSnapshot);
	}
}, Sc = ns.define({ map: (_, y) => _.map(y) });
function logException(_, y, b) {
	let x = _.facet(mc);
	x.length ? x[0](y) : window.onerror ? window.onerror(String(y), b, void 0, void 0, y) : b ? console.error(b + `:`, y) : console.error(y);
}
var Cc = Y.define({ combine: (_) => !_.length || _[0] }), wc = 0, Tc = Y.define(), Ec = class ViewPlugin {
	constructor(_, y, b, x, S) {
		this.id = _, this.create = y, this.domEventHandlers = b, this.domEventObservers = x, this.extension = S(this);
	}
	static define(_, y) {
		let { eventHandlers: b, eventObservers: x, provide: S, decorations: C } = y || {};
		return new ViewPlugin(wc++, _, b, x, (_) => {
			let y = [Tc.of(_)];
			return C && y.push(kc.of((y) => {
				let b = y.plugin(_);
				return b ? C(b) : Decoration.none;
			})), S && y.push(S(_)), y;
		});
	}
	static fromClass(_, y) {
		return ViewPlugin.define((y) => new _(y), y);
	}
}, PluginInstance = class {
	constructor(_) {
		this.spec = _, this.mustUpdate = null, this.value = null;
	}
	update(_) {
		if (!this.value) {
			if (this.spec) try {
				this.value = this.spec.create(_);
			} catch (y) {
				logException(_.state, y, `CodeMirror plugin crashed`), this.deactivate();
			}
		} else if (this.mustUpdate) {
			let _ = this.mustUpdate;
			if (this.mustUpdate = null, this.value.update) try {
				this.value.update(_);
			} catch (y) {
				if (logException(_.state, y, `CodeMirror plugin crashed`), this.value.destroy) try {
					this.value.destroy();
				} catch {}
				this.deactivate();
			}
		}
		return this;
	}
	destroy(_) {
		if (this.value?.destroy) try {
			this.value.destroy();
		} catch (y) {
			logException(_.state, y, `CodeMirror plugin crashed`);
		}
	}
	deactivate() {
		this.spec = this.value = null;
	}
}, Dc = Y.define(), Oc = Y.define(), kc = Y.define(), Ac = Y.define(), jc = Y.define(), Mc = Y.define();
function getIsolatedRanges(_, y) {
	let b = _.state.facet(Mc);
	if (!b.length) return b;
	let x = b.map((y) => y instanceof Function ? y(_) : y), S = [];
	return fs.spans(x, y.from, y.to, {
		point() {},
		span(_, b, x, C) {
			let w = _ - y.from, E = b - y.from, D = S;
			for (let _ = x.length - 1; _ >= 0; _--, C--) {
				let b = x[_].spec.bidiIsolate, S;
				if (b ??= autoDirection(y.text, w, E), C > 0 && D.length && (S = D[D.length - 1]).to == w && S.direction == b) S.to = E, D = S.inner;
				else {
					let _ = {
						from: w,
						to: E,
						direction: b,
						inner: []
					};
					D.push(_), D = _.inner;
				}
			}
		}
	}), S;
}
var Nc = Y.define();
function getScrollMargins(_) {
	let y = 0, b = 0, x = 0, S = 0;
	for (let C of _.state.facet(Nc)) {
		let w = C(_);
		w && (w.left != null && (y = Math.max(y, w.left)), w.right != null && (b = Math.max(b, w.right)), w.top != null && (x = Math.max(x, w.top)), w.bottom != null && (S = Math.max(S, w.bottom)));
	}
	return {
		left: y,
		right: b,
		top: x,
		bottom: S
	};
}
var Pc = Y.define(), Fc = class ChangedRange {
	constructor(_, y, b, x) {
		this.fromA = _, this.toA = y, this.fromB = b, this.toB = x;
	}
	join(_) {
		return new ChangedRange(Math.min(this.fromA, _.fromA), Math.max(this.toA, _.toA), Math.min(this.fromB, _.fromB), Math.max(this.toB, _.toB));
	}
	addToSet(_) {
		let y = _.length, b = this;
		for (; y > 0; y--) {
			let x = _[y - 1];
			if (!(x.fromA > b.toA)) {
				if (x.toA < b.fromA) break;
				b = b.join(x), _.splice(y - 1, 1);
			}
		}
		return _.splice(y, 0, b), _;
	}
	static extendWithRanges(_, y) {
		if (y.length == 0) return _;
		let b = [];
		for (let x = 0, S = 0, C = 0, w = 0;; x++) {
			let E = x == _.length ? null : _[x], D = C - w, O = E ? E.fromB : 1e9;
			for (; S < y.length && y[S] < O;) {
				let _ = y[S], x = y[S + 1], C = Math.max(w, _), E = Math.min(O, x);
				if (C <= E && new ChangedRange(C + D, E + D, C, E).addToSet(b), x > O) break;
				S += 2;
			}
			if (!E) return b;
			new ChangedRange(E.fromA, E.toA, E.fromB, E.toB).addToSet(b), C = E.toA, w = E.toB;
		}
	}
}, Ic = class ViewUpdate {
	constructor(_, y, b) {
		this.view = _, this.state = y, this.transactions = b, this.flags = 0, this.startState = _.state, this.changes = Bo.empty(this.startState.doc.length);
		for (let _ of b) this.changes = this.changes.compose(_.changes);
		let x = [];
		this.changes.iterChangedRanges((_, y, b, S) => x.push(new Fc(_, y, b, S))), this.changedRanges = x;
	}
	static create(_, y, b) {
		return new ViewUpdate(_, y, b);
	}
	get viewportChanged() {
		return (this.flags & 4) > 0;
	}
	get heightChanged() {
		return (this.flags & 2) > 0;
	}
	get geometryChanged() {
		return this.docChanged || (this.flags & 10) > 0;
	}
	get focusChanged() {
		return (this.flags & 1) > 0;
	}
	get docChanged() {
		return !this.changes.empty;
	}
	get selectionSet() {
		return this.transactions.some((_) => _.selection);
	}
	get empty() {
		return this.flags == 0 && this.transactions.length == 0;
	}
}, DocView = class extends As {
	get length() {
		return this.view.state.doc.length;
	}
	constructor(_) {
		super(), this.view = _, this.decorations = [], this.dynamicDecorationMap = [], this.domChanged = null, this.hasComposition = null, this.markedForComposition = /* @__PURE__ */ new Set(), this.lastCompositionAfterCursor = !1, this.minWidth = 0, this.minWidthFrom = 0, this.minWidthTo = 0, this.impreciseAnchor = null, this.impreciseHead = null, this.forceSelection = !1, this.lastUpdate = Date.now(), this.setDOM(_.contentDOM), this.children = [new Js()], this.children[0].setParent(this), this.updateDeco(), this.updateInner([new Fc(0, 0, 0, _.state.doc.length)], 0, null);
	}
	update(_) {
		let y = _.changedRanges;
		this.minWidth > 0 && y.length && (y.every(({ fromA: _, toA: y }) => y < this.minWidthFrom || _ > this.minWidthTo) ? (this.minWidthFrom = _.changes.mapPos(this.minWidthFrom, 1), this.minWidthTo = _.changes.mapPos(this.minWidthTo, 1)) : this.minWidth = this.minWidthFrom = this.minWidthTo = 0);
		let b = -1;
		this.view.inputState.composing >= 0 && (this.domChanged?.newSel ? b = this.domChanged.newSel.head : !touchesComposition(_.changes, this.hasComposition) && !_.selectionSet && (b = _.state.selection.main.head));
		let x = b > -1 ? findCompositionRange(this.view, _.changes, b) : null;
		if (this.domChanged = null, this.hasComposition) {
			this.markedForComposition.clear();
			let { from: b, to: x } = this.hasComposition;
			y = new Fc(b, x, _.changes.mapPos(b, -1), _.changes.mapPos(x, 1)).addToSet(y.slice());
		}
		this.hasComposition = x ? {
			from: x.range.fromB,
			to: x.range.toB
		} : null, (X.ie || X.chrome) && !x && _ && _.state.doc.lines != _.startState.doc.lines && (this.forceSelection = !0);
		let S = this.decorations, C = findChangedDeco(S, this.updateDeco(), _.changes);
		return y = Fc.extendWithRanges(y, C), !(this.flags & 7) && y.length == 0 ? !1 : (this.updateInner(y, _.startState.doc.length, x), _.transactions.length && (this.lastUpdate = Date.now()), !0);
	}
	updateInner(_, y, b) {
		this.view.viewState.mustMeasureContent = !0, this.updateChildren(_, y, b);
		let { observer: x } = this.view;
		x.ignore(() => {
			this.dom.style.height = this.view.viewState.contentHeight / this.view.scaleY + `px`, this.dom.style.flexBasis = this.minWidth ? this.minWidth + `px` : ``;
			let _ = X.chrome || X.ios ? {
				node: x.selectionRange.focusNode,
				written: !1
			} : void 0;
			this.sync(this.view, _), this.flags &= -8, _ && (_.written || x.selectionRange.focusNode != _.node) && (this.forceSelection = !0), this.dom.style.height = ``;
		}), this.markedForComposition.forEach((_) => _.flags &= -9);
		let S = [];
		if (this.view.viewport.from || this.view.viewport.to < this.view.state.doc.length) for (let _ of this.children) _ instanceof Ys && _.widget instanceof BlockGapWidget && S.push(_.dom);
		x.updateGaps(S);
	}
	updateChildren(_, y, b) {
		let x = b ? b.range.addToSet(_.slice()) : _, S = this.childCursor(y);
		for (let _ = x.length - 1;; _--) {
			let y = _ >= 0 ? x[_] : null;
			if (!y) break;
			let { fromA: C, toA: w, fromB: E, toB: D } = y, O, k, A, j;
			if (b && b.range.fromB < D && b.range.toB > E) {
				let _ = ec.build(this.view.state.doc, E, b.range.fromB, this.decorations, this.dynamicDecorationMap), y = ec.build(this.view.state.doc, b.range.toB, D, this.decorations, this.dynamicDecorationMap);
				k = _.breakAtStart, A = _.openStart, j = y.openEnd;
				let x = this.compositionView(b);
				y.breakAtStart ? x.breakAfter = 1 : y.content.length && x.merge(x.length, x.length, y.content[0], !1, y.openStart, 0) && (x.breakAfter = y.content[0].breakAfter, y.content.shift()), _.content.length && x.merge(0, 0, _.content[_.content.length - 1], !0, 0, _.openEnd) && _.content.pop(), O = _.content.concat(x).concat(y.content);
			} else ({content: O, breakAtStart: k, openStart: A, openEnd: j} = ec.build(this.view.state.doc, E, D, this.decorations, this.dynamicDecorationMap));
			let { i: N, off: P } = S.findPos(w, 1), { i: F, off: I } = S.findPos(C, -1);
			replaceRange(this, F, I, N, P, O, k, A, j);
		}
		b && this.fixCompositionDOM(b);
	}
	compositionView(_) {
		let y = new Us(_.text.nodeValue);
		y.flags |= 8;
		for (let { deco: b } of _.marks) y = new Ws(b, [y], y.length);
		let b = new Js();
		return b.append(y, 0), b;
	}
	fixCompositionDOM(_) {
		let fix = (_, y) => {
			y.flags |= 8 | !!y.children.some((_) => _.flags & 7), this.markedForComposition.add(y);
			let b = As.get(_);
			b && b != y && (b.dom = null), y.setDOM(_);
		}, y = this.childPos(_.range.fromB, 1), b = this.children[y.i];
		fix(_.line, b);
		for (let x = _.marks.length - 1; x >= -1; x--) y = b.childPos(y.off, 1), b = b.children[y.i], fix(x >= 0 ? _.marks[x].node : _.text, b);
	}
	updateSelection(_ = !1, y = !1) {
		(_ || !this.view.observer.selectionRange.focusNode) && this.view.observer.readSelectionRange();
		let b = this.view.root.activeElement, x = b == this.dom, S = !x && hasSelection(this.dom, this.view.observer.selectionRange) && !(b && this.dom.contains(b));
		if (!(x || y || S)) return;
		let C = this.forceSelection;
		this.forceSelection = !1;
		let w = this.view.state.selection.main, E = this.moveToLine(this.domAtPos(w.anchor)), D = w.empty ? E : this.moveToLine(this.domAtPos(w.head));
		if (X.gecko && w.empty && !this.hasComposition && betweenUneditable(E)) {
			let _ = document.createTextNode(``);
			this.view.observer.ignore(() => E.node.insertBefore(_, E.node.childNodes[E.offset] || null)), E = D = new Os(_, 0), C = !0;
		}
		let O = this.view.observer.selectionRange;
		(C || !O.focusNode || (!isEquivalentPosition(E.node, E.offset, O.anchorNode, O.anchorOffset) || !isEquivalentPosition(D.node, D.offset, O.focusNode, O.focusOffset)) && !this.suppressWidgetCursorChange(O, w)) && (this.view.observer.ignore(() => {
			X.android && X.chrome && this.dom.contains(O.focusNode) && inUneditable(O.focusNode, this.dom) && (this.dom.blur(), this.dom.focus({ preventScroll: !0 }));
			let _ = getSelection(this.view.root);
			if (_) if (w.empty) {
				if (X.gecko) {
					let _ = nextToUneditable(E.node, E.offset);
					if (_ && _ != 3) {
						let y = (_ == 1 ? textNodeBefore : textNodeAfter)(E.node, E.offset);
						y && (E = new Os(y.node, y.offset));
					}
				}
				_.collapse(E.node, E.offset), w.bidiLevel != null && _.caretBidiLevel !== void 0 && (_.caretBidiLevel = w.bidiLevel);
			} else if (_.extend) {
				_.collapse(E.node, E.offset);
				try {
					_.extend(D.node, D.offset);
				} catch {}
			} else {
				let y = document.createRange();
				w.anchor > w.head && ([E, D] = [D, E]), y.setEnd(D.node, D.offset), y.setStart(E.node, E.offset), _.removeAllRanges(), _.addRange(y);
			}
			S && this.view.root.activeElement == this.dom && (this.dom.blur(), b && b.focus());
		}), this.view.observer.setSelectionRange(E, D)), this.impreciseAnchor = E.precise ? null : new Os(O.anchorNode, O.anchorOffset), this.impreciseHead = D.precise ? null : new Os(O.focusNode, O.focusOffset);
	}
	suppressWidgetCursorChange(_, y) {
		return this.hasComposition && y.empty && isEquivalentPosition(_.focusNode, _.focusOffset, _.anchorNode, _.anchorOffset) && this.posFromDOM(_.focusNode, _.focusOffset) == y.head;
	}
	enforceCursorAssoc() {
		if (this.hasComposition) return;
		let { view: _ } = this, y = _.state.selection.main, b = getSelection(_.root), { anchorNode: x, anchorOffset: S } = _.observer.selectionRange;
		if (!b || !y.empty || !y.assoc || !b.modify) return;
		let C = Js.find(this, y.head);
		if (!C) return;
		let w = C.posAtStart;
		if (y.head == w || y.head == w + C.length) return;
		let E = this.coordsAt(y.head, -1), D = this.coordsAt(y.head, 1);
		if (!E || !D || E.bottom > D.top) return;
		let O = this.domAtPos(y.head + y.assoc);
		b.collapse(O.node, O.offset), b.modify(`move`, y.assoc < 0 ? `forward` : `backward`, `lineboundary`), _.observer.readSelectionRange();
		let k = _.observer.selectionRange;
		_.docView.posFromDOM(k.anchorNode, k.anchorOffset) != y.from && b.collapse(x, S);
	}
	moveToLine(_) {
		let y = this.dom, b;
		if (_.node != y) return _;
		for (let x = _.offset; !b && x < y.childNodes.length; x++) {
			let _ = As.get(y.childNodes[x]);
			_ instanceof Js && (b = _.domAtPos(0));
		}
		for (let x = _.offset - 1; !b && x >= 0; x--) {
			let _ = As.get(y.childNodes[x]);
			_ instanceof Js && (b = _.domAtPos(_.length));
		}
		return b ? new Os(b.node, b.offset, !0) : _;
	}
	nearest(_) {
		for (let y = _; y;) {
			let _ = As.get(y);
			if (_ && _.rootView == this) return _;
			y = y.parentNode;
		}
		return null;
	}
	posFromDOM(_, y) {
		let b = this.nearest(_);
		if (!b) throw RangeError(`Trying to find position for a DOM position outside of the document`);
		return b.localPosFromDOM(_, y) + b.posAtStart;
	}
	domAtPos(_) {
		let { i: y, off: b } = this.childCursor().findPos(_, -1);
		for (; y < this.children.length - 1;) {
			let _ = this.children[y];
			if (b < _.length || _ instanceof Js) break;
			y++, b = 0;
		}
		return this.children[y].domAtPos(b);
	}
	coordsAt(_, y) {
		let b = null, x = 0;
		for (let S = this.length, C = this.children.length - 1; C >= 0; C--) {
			let w = this.children[C], E = S - w.breakAfter, D = E - w.length;
			if (E < _) break;
			D <= _ && (D < _ || w.covers(-1)) && (E > _ || w.covers(1)) && (!b || w instanceof Js && !(b instanceof Js && y >= 0)) && (b = w, x = D), S = D;
		}
		return b ? b.coordsAt(_ - x, y) : null;
	}
	coordsForChar(_) {
		let { i: y, off: b } = this.childPos(_, 1), x = this.children[y];
		if (!(x instanceof Js)) return null;
		for (; x.children.length;) {
			let { i: _, off: y } = x.childPos(b, 1);
			for (;; _++) {
				if (_ == x.children.length) return null;
				if ((x = x.children[_]).length) break;
			}
			b = y;
		}
		if (!(x instanceof Us)) return null;
		let S = findClusterBreak(x.text, b);
		if (S == b) return null;
		let C = textRange(x.dom, b, S).getClientRects();
		for (let _ = 0; _ < C.length; _++) {
			let y = C[_];
			if (_ == C.length - 1 || y.top < y.bottom && y.left < y.right) return y;
		}
		return null;
	}
	measureVisibleLineHeights(_) {
		let y = [], { from: b, to: x } = _, S = this.view.contentDOM.clientWidth, C = S > Math.max(this.view.scrollDOM.clientWidth, this.minWidth) + 1, w = -1, E = this.view.textDirection == tc.LTR;
		for (let _ = 0, D = 0; D < this.children.length; D++) {
			let O = this.children[D], k = _ + O.length;
			if (k > x) break;
			if (_ >= b) {
				let b = O.dom.getBoundingClientRect();
				if (y.push(b.height), C) {
					let y = O.dom.lastChild, x = y ? clientRectsFor(y) : [];
					if (x.length) {
						let y = x[x.length - 1], C = E ? y.right - b.left : b.right - y.left;
						C > w && (w = C, this.minWidth = S, this.minWidthFrom = _, this.minWidthTo = k);
					}
				}
			}
			_ = k + O.breakAfter;
		}
		return y;
	}
	textDirectionAt(_) {
		let { i: y } = this.childPos(_, 1);
		return getComputedStyle(this.children[y].dom).direction == `rtl` ? tc.RTL : tc.LTR;
	}
	measureTextSize() {
		for (let _ of this.children) if (_ instanceof Js) {
			let y = _.measureTextSize();
			if (y) return y;
		}
		let _ = document.createElement(`div`), y, b, x;
		return _.className = `cm-line`, _.style.width = `99999px`, _.style.position = `absolute`, _.textContent = `abc def ghi jkl mno pqr stu`, this.view.observer.ignore(() => {
			this.dom.appendChild(_);
			let S = clientRectsFor(_.firstChild)[0];
			y = _.getBoundingClientRect().height, b = S ? S.width / 27 : 7, x = S ? S.height : y, _.remove();
		}), {
			lineHeight: y,
			charWidth: b,
			textHeight: x
		};
	}
	childCursor(_ = this.length) {
		let y = this.children.length;
		return y && (_ -= this.children[--y].length), new ChildCursor(this.children, _, y);
	}
	computeBlockGapDeco() {
		let _ = [], y = this.view.viewState;
		for (let b = 0, x = 0;; x++) {
			let S = x == y.viewports.length ? null : y.viewports[x], C = S ? S.from - 1 : this.length;
			if (C > b) {
				let x = (y.lineBlockAt(C).bottom - y.lineBlockAt(b).top) / this.view.scaleY;
				_.push(Decoration.replace({
					widget: new BlockGapWidget(x),
					block: !0,
					inclusive: !0,
					isBlockGap: !0
				}).range(b, C));
			}
			if (!S) break;
			b = S.to + 1;
		}
		return Decoration.set(_);
	}
	updateDeco() {
		let _ = 0, y = this.view.state.facet(kc).map((y) => (this.dynamicDecorationMap[_++] = typeof y == `function`) ? y(this.view) : y), b = !1, x = this.view.state.facet(Ac).map((_, y) => {
			let x = typeof _ == `function`;
			return x && (b = !0), x ? _(this.view) : _;
		});
		for (x.length && (this.dynamicDecorationMap[_++] = b, y.push(fs.join(x))), this.decorations = [
			...y,
			this.computeBlockGapDeco(),
			this.view.viewState.lineGapDeco
		]; _ < this.decorations.length;) this.dynamicDecorationMap[_++] = !1;
		return this.decorations;
	}
	scrollIntoView(_) {
		if (_.isSnapshot) {
			let y = this.view.viewState.lineBlockAt(_.range.head);
			this.view.scrollDOM.scrollTop = y.top - _.yMargin, this.view.scrollDOM.scrollLeft = _.xMargin;
			return;
		}
		for (let y of this.view.state.facet(bc)) try {
			if (y(this.view, _.range, _)) return !0;
		} catch (_) {
			logException(this.view.state, _, `scroll handler`);
		}
		let { range: y } = _, b = this.coordsAt(y.head, y.empty ? y.assoc : y.head > y.anchor ? -1 : 1), x;
		if (!b) return;
		!y.empty && (x = this.coordsAt(y.anchor, y.anchor > y.head ? -1 : 1)) && (b = {
			left: Math.min(b.left, x.left),
			top: Math.min(b.top, x.top),
			right: Math.max(b.right, x.right),
			bottom: Math.max(b.bottom, x.bottom)
		});
		let S = getScrollMargins(this.view), C = {
			left: b.left - S.left,
			top: b.top - S.top,
			right: b.right + S.right,
			bottom: b.bottom + S.bottom
		}, { offsetWidth: w, offsetHeight: E } = this.view.scrollDOM;
		scrollRectIntoView(this.view.scrollDOM, C, y.head < y.anchor ? -1 : 1, _.x, _.y, Math.max(Math.min(_.xMargin, w), -w), Math.max(Math.min(_.yMargin, E), -E), this.view.textDirection == tc.LTR);
	}
};
function betweenUneditable(_) {
	return _.node.nodeType == 1 && _.node.firstChild && (_.offset == 0 || _.node.childNodes[_.offset - 1].contentEditable == `false`) && (_.offset == _.node.childNodes.length || _.node.childNodes[_.offset].contentEditable == `false`);
}
var BlockGapWidget = class extends WidgetType {
	constructor(_) {
		super(), this.height = _;
	}
	toDOM() {
		let _ = document.createElement(`div`);
		return _.className = `cm-gap`, this.updateDOM(_), _;
	}
	eq(_) {
		return _.height == this.height;
	}
	updateDOM(_) {
		return _.style.height = this.height + `px`, !0;
	}
	get editable() {
		return !0;
	}
	get estimatedHeight() {
		return this.height;
	}
	ignoreEvent() {
		return !1;
	}
};
function findCompositionNode(_, y) {
	let b = _.observer.selectionRange;
	if (!b.focusNode) return null;
	let x = textNodeBefore(b.focusNode, b.focusOffset), S = textNodeAfter(b.focusNode, b.focusOffset), C = x || S;
	if (S && x && S.node != x.node) {
		let y = As.get(S.node);
		if (!y || y instanceof Us && y.text != S.node.nodeValue) C = S;
		else if (_.docView.lastCompositionAfterCursor) {
			let _ = As.get(x.node);
			!_ || _ instanceof Us && _.text != x.node.nodeValue || (C = S);
		}
	}
	if (_.docView.lastCompositionAfterCursor = C != x, !C) return null;
	let w = y - C.offset;
	return {
		from: w,
		to: w + C.node.nodeValue.length,
		node: C.node
	};
}
function findCompositionRange(_, y, b) {
	let x = findCompositionNode(_, b);
	if (!x) return null;
	let { node: S, from: C, to: w } = x, E = S.nodeValue;
	if (/[\n\r]/.test(E) || _.state.doc.sliceString(x.from, x.to) != E) return null;
	let D = y.invertedDesc, O = new Fc(D.mapPos(C), D.mapPos(w), C, w), k = [];
	for (let y = S.parentNode;; y = y.parentNode) {
		let b = As.get(y);
		if (b instanceof Ws) k.push({
			node: y,
			deco: b.mark
		});
		else if (b instanceof Js || y.nodeName == `DIV` && y.parentNode == _.contentDOM) return {
			range: O,
			text: S,
			marks: k,
			line: y
		};
		else if (y != _.contentDOM) k.push({
			node: y,
			deco: new Zs({
				inclusive: !0,
				attributes: getAttrs(y),
				tagName: y.tagName.toLowerCase()
			})
		});
		else return null;
	}
}
function nextToUneditable(_, y) {
	return _.nodeType == 1 ? (y && _.childNodes[y - 1].contentEditable == `false` ? 1 : 0) | (y < _.childNodes.length && _.childNodes[y].contentEditable == `false` ? 2 : 0) : 0;
}
var Lc = class DecorationComparator {
	constructor() {
		this.changes = [];
	}
	compareRange(_, y) {
		addRange(_, y, this.changes);
	}
	comparePoint(_, y) {
		addRange(_, y, this.changes);
	}
};
function findChangedDeco(_, y, b) {
	let x = new Lc();
	return fs.compare(_, y, b, x), x.changes;
}
function inUneditable(_, y) {
	for (let b = _; b && b != y; b = b.assignedSlot || b.parentNode) if (b.nodeType == 1 && b.contentEditable == `false`) return !0;
	return !1;
}
function touchesComposition(_, y) {
	let b = !1;
	return y && _.iterChangedRanges((_, x) => {
		_ < y.to && x > y.from && (b = !0);
	}), b;
}
function groupAt(_, y, b = 1) {
	let x = _.charCategorizer(y), S = _.doc.lineAt(y), C = y - S.from;
	if (S.length == 0) return J.cursor(y);
	C == 0 ? b = 1 : C == S.length && (b = -1);
	let w = C, E = C;
	b < 0 ? w = findClusterBreak(S.text, C, !1) : E = findClusterBreak(S.text, C);
	let D = x(S.text.slice(w, E));
	for (; w > 0;) {
		let _ = findClusterBreak(S.text, w, !1);
		if (x(S.text.slice(_, w)) != D) break;
		w = _;
	}
	for (; E < S.length;) {
		let _ = findClusterBreak(S.text, E);
		if (x(S.text.slice(E, _)) != D) break;
		E = _;
	}
	return J.range(w + S.from, E + S.from);
}
function getdx(_, y) {
	return y.left > _ ? y.left - _ : Math.max(0, _ - y.right);
}
function getdy(_, y) {
	return y.top > _ ? y.top - _ : Math.max(0, _ - y.bottom);
}
function yOverlap(_, y) {
	return _.top < y.bottom - 1 && _.bottom > y.top + 1;
}
function upTop(_, y) {
	return y < _.top ? {
		top: y,
		left: _.left,
		right: _.right,
		bottom: _.bottom
	} : _;
}
function upBot(_, y) {
	return y > _.bottom ? {
		top: _.top,
		left: _.left,
		right: _.right,
		bottom: y
	} : _;
}
function domPosAtCoords(_, y, b) {
	let x, S, C, w, E = !1, D, O, k, A;
	for (let j = _.firstChild; j; j = j.nextSibling) {
		let _ = clientRectsFor(j);
		for (let N = 0; N < _.length; N++) {
			let P = _[N];
			S && yOverlap(S, P) && (P = upTop(upBot(P, S.bottom), S.top));
			let F = getdx(y, P), I = getdy(b, P);
			if (F == 0 && I == 0) return j.nodeType == 3 ? domPosInText(j, y, b) : domPosAtCoords(j, y, b);
			if (!x || w > I || w == I && C > F) {
				x = j, S = P, C = F, w = I;
				let D = I ? b < P.top ? -1 : 1 : F ? y < P.left ? -1 : 1 : 0;
				E = !D || (D > 0 ? N < _.length - 1 : N > 0);
			}
			F == 0 ? b > P.bottom && (!k || k.bottom < P.bottom) ? (D = j, k = P) : b < P.top && (!A || A.top > P.top) && (O = j, A = P) : k && yOverlap(k, P) ? k = upBot(k, P.bottom) : A && yOverlap(A, P) && (A = upTop(A, P.top));
		}
	}
	if (k && k.bottom >= b ? (x = D, S = k) : A && A.top <= b && (x = O, S = A), !x) return {
		node: _,
		offset: 0
	};
	let j = Math.max(S.left, Math.min(S.right, y));
	return x.nodeType == 3 ? domPosInText(x, j, b) : E && x.contentEditable != `false` ? domPosAtCoords(x, j, b) : {
		node: _,
		offset: Array.prototype.indexOf.call(_.childNodes, x) + +(y >= (S.left + S.right) / 2)
	};
}
function domPosInText(_, y, b) {
	let x = _.nodeValue.length, S = -1, C = 1e9, w = 0;
	for (let E = 0; E < x; E++) {
		let x = textRange(_, E, E + 1).getClientRects();
		for (let D = 0; D < x.length; D++) {
			let O = x[D];
			if (O.top == O.bottom) continue;
			w ||= y - O.left;
			let k = (O.top > b ? O.top - b : b - O.bottom) - 1;
			if (O.left - 1 <= y && O.right + 1 >= y && k < C) {
				let b = y >= (O.left + O.right) / 2, x = b;
				if ((X.chrome || X.gecko) && textRange(_, E).getBoundingClientRect().left == O.right && (x = !b), k <= 0) return {
					node: _,
					offset: E + +!!x
				};
				S = E + +!!x, C = k;
			}
		}
	}
	return {
		node: _,
		offset: S > -1 ? S : w > 0 ? _.nodeValue.length : 0
	};
}
function posAtCoords(_, y, b, x = -1) {
	let S = _.contentDOM.getBoundingClientRect(), C = S.top + _.viewState.paddingTop, w, { docHeight: E } = _.viewState, { x: D, y: O } = y, k = O - C;
	if (k < 0) return 0;
	if (k > E) return _.state.doc.length;
	for (let y = _.viewState.heightOracle.textHeight / 2, S = !1; w = _.elementAtHeight(k), w.type != Xs.Text;) for (; k = x > 0 ? w.bottom + y : w.top - y, !(k >= 0 && k <= E);) {
		if (S) return b ? null : 0;
		S = !0, x = -x;
	}
	O = C + k;
	let A = w.from;
	if (A < _.viewport.from) return _.viewport.from == 0 ? 0 : b ? null : posAtCoordsImprecise(_, S, w, D, O);
	if (A > _.viewport.to) return _.viewport.to == _.state.doc.length ? _.state.doc.length : b ? null : posAtCoordsImprecise(_, S, w, D, O);
	let j = _.dom.ownerDocument, N = _.root.elementFromPoint ? _.root : j, P = N.elementFromPoint(D, O);
	P && !_.contentDOM.contains(P) && (P = null), P || (D = Math.max(S.left + 1, Math.min(S.right - 1, D)), P = N.elementFromPoint(D, O), P && !_.contentDOM.contains(P) && (P = null));
	let F, I = -1;
	if (P && _.docView.nearest(P)?.isEditable != 0) {
		if (j.caretPositionFromPoint) {
			let _ = j.caretPositionFromPoint(D, O);
			_ && ({offsetNode: F, offset: I} = _);
		} else if (j.caretRangeFromPoint) {
			let y = j.caretRangeFromPoint(D, O);
			y && ({startContainer: F, startOffset: I} = y, (!_.contentDOM.contains(F) || X.safari && isSuspiciousSafariCaretResult(F, I, D) || X.chrome && isSuspiciousChromeCaretResult(F, I, D)) && (F = void 0));
		}
	}
	if (!F || !_.docView.dom.contains(F)) {
		let y = Js.find(_.docView, A);
		if (!y) return k > w.top + w.height / 2 ? w.to : w.from;
		({node: F, offset: I} = domPosAtCoords(y.dom, D, O));
	}
	let L = _.docView.nearest(F);
	if (!L) return null;
	if (L.isWidget && L.dom?.nodeType == 1) {
		let _ = L.dom.getBoundingClientRect();
		return y.y < _.top || y.y <= _.bottom && y.x <= (_.left + _.right) / 2 ? L.posAtStart : L.posAtEnd;
	} else return L.localPosFromDOM(F, I) + L.posAtStart;
}
function posAtCoordsImprecise(_, y, b, x, S) {
	let C = Math.round((x - y.left) * _.defaultCharacterWidth);
	if (_.lineWrapping && b.height > _.defaultLineHeight * 1.5) {
		let y = _.viewState.heightOracle.textHeight, x = Math.floor((S - b.top - (_.defaultLineHeight - y) * .5) / y);
		C += x * _.viewState.heightOracle.lineLength;
	}
	let w = _.state.sliceDoc(b.from, b.to);
	return b.from + findColumn(w, C, _.state.tabSize);
}
function isSuspiciousSafariCaretResult(_, y, b) {
	let x;
	if (_.nodeType != 3 || y != (x = _.nodeValue.length)) return !1;
	for (let y = _.nextSibling; y; y = y.nextSibling) if (y.nodeType != 1 || y.nodeName != `BR`) return !1;
	return textRange(_, x - 1, x).getBoundingClientRect().left > b;
}
function isSuspiciousChromeCaretResult(_, y, b) {
	if (y != 0) return !1;
	for (let y = _;;) {
		let _ = y.parentNode;
		if (!_ || _.nodeType != 1 || _.firstChild != y) return !1;
		if (_.classList.contains(`cm-line`)) break;
		y = _;
	}
	return b - (_.nodeType == 1 ? _.getBoundingClientRect() : textRange(_, 0, Math.max(_.nodeValue.length, 1)).getBoundingClientRect()).left > 5;
}
function blockAt(_, y) {
	let b = _.lineBlockAt(y);
	if (Array.isArray(b.type)) {
		for (let _ of b.type) if (_.to > y || _.to == y && (_.to == b.to || _.type == Xs.Text)) return _;
	}
	return b;
}
function moveToLineBoundary(_, y, b, x) {
	let S = blockAt(_, y.head), C = !x || S.type != Xs.Text || !(_.lineWrapping || S.widgetLineBreaks) ? null : _.coordsAtPos(y.assoc < 0 && y.head > S.from ? y.head - 1 : y.head);
	if (C) {
		let y = _.dom.getBoundingClientRect(), x = _.textDirectionAt(S.from), w = _.posAtCoords({
			x: b == (x == tc.LTR) ? y.right - 1 : y.left + 1,
			y: (C.top + C.bottom) / 2
		});
		if (w != null) return J.cursor(w, b ? -1 : 1);
	}
	return J.cursor(b ? S.to : S.from, b ? -1 : 1);
}
function moveByChar(_, y, b, x) {
	let S = _.state.doc.lineAt(y.head), C = _.bidiSpans(S), w = _.textDirectionAt(S.from);
	for (let E = y, D = null;;) {
		let y = moveVisually(S, C, w, E, b), O = uc;
		if (!y) {
			if (S.number == (b ? _.state.doc.lines : 1)) return E;
			O = `
`, S = _.state.doc.line(S.number + (b ? 1 : -1)), C = _.bidiSpans(S), y = _.visualLineSide(S, !b);
		}
		if (!D) {
			if (!x) return y;
			D = x(O);
		} else if (!D(O)) return E;
		E = y;
	}
}
function byGroup(_, y, b) {
	let x = _.state.charCategorizer(y), S = x(b);
	return (_) => {
		let y = x(_);
		return S == os.Space && (S = y), S == y;
	};
}
function moveVertically(_, y, b, x) {
	let S = y.head, C = b ? 1 : -1;
	if (S == (b ? _.state.doc.length : 0)) return J.cursor(S, y.assoc);
	let w = y.goalColumn, E, D = _.contentDOM.getBoundingClientRect(), O = _.coordsAtPos(S, y.assoc || -1), k = _.documentTop;
	if (O) w ??= O.left - D.left, E = C < 0 ? O.top : O.bottom;
	else {
		let y = _.viewState.lineBlockAt(S);
		w ??= Math.min(D.right - D.left, _.defaultCharacterWidth * (S - y.from)), E = (C < 0 ? y.top : y.bottom) + k;
	}
	let A = D.left + w, j = x ?? _.viewState.heightOracle.textHeight >> 1;
	for (let y = 0;; y += 10) {
		let b = E + (j + y) * C, x = posAtCoords(_, {
			x: A,
			y: b
		}, !1, C);
		if (b < D.top || b > D.bottom || (C < 0 ? x < S : x > S)) {
			let y = _.docView.coordsForChar(x), S = !y || b < y.top ? -1 : 1;
			return J.cursor(x, S, void 0, w);
		}
	}
}
function skipAtomicRanges(_, y, b) {
	for (;;) {
		let x = 0;
		for (let S of _) S.between(y - 1, y + 1, (_, S, C) => {
			if (y > _ && y < S) {
				let C = x || b || (y - _ < S - y ? -1 : 1);
				y = C < 0 ? _ : S, x = C;
			}
		});
		if (!x) return y;
	}
}
function skipAtoms(_, y, b) {
	let x = skipAtomicRanges(_.state.facet(jc).map((y) => y(_)), b.from, y.head > b.from ? -1 : 1);
	return x == b.from ? b : J.cursor(x, x < b.from ? 1 : -1);
}
var InputState = class {
	setSelectionOrigin(_) {
		this.lastSelectionOrigin = _, this.lastSelectionTime = Date.now();
	}
	constructor(_) {
		this.view = _, this.lastKeyCode = 0, this.lastKeyTime = 0, this.lastTouchTime = 0, this.lastFocusTime = 0, this.lastScrollTop = 0, this.lastScrollLeft = 0, this.pendingIOSKey = void 0, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastEscPress = 0, this.lastContextMenu = 0, this.scrollHandlers = [], this.handlers = Object.create(null), this.composing = -1, this.compositionFirstChange = null, this.compositionEndedAt = 0, this.compositionPendingKey = !1, this.compositionPendingChange = !1, this.mouseSelection = null, this.draggedContent = null, this.handleEvent = this.handleEvent.bind(this), this.notifiedFocused = _.hasFocus, X.safari && _.contentDOM.addEventListener(`input`, () => null), X.gecko && firefoxCopyCutHack(_.contentDOM.ownerDocument);
	}
	handleEvent(_) {
		!eventBelongsToEditor(this.view, _) || this.ignoreDuringComposition(_) || _.type == `keydown` && this.keydown(_) || this.runHandlers(_.type, _);
	}
	runHandlers(_, y) {
		let b = this.handlers[_];
		if (b) {
			for (let _ of b.observers) _(this.view, y);
			for (let _ of b.handlers) {
				if (y.defaultPrevented) break;
				if (_(this.view, y)) {
					y.preventDefault();
					break;
				}
			}
		}
	}
	ensureHandlers(_) {
		let y = computeHandlers(_), b = this.handlers, x = this.view.contentDOM;
		for (let _ in y) if (_ != `scroll`) {
			let S = !y[_].handlers.length, C = b[_];
			C && S != !C.handlers.length && (x.removeEventListener(_, this.handleEvent), C = null), C || x.addEventListener(_, this.handleEvent, { passive: S });
		}
		for (let _ in b) _ != `scroll` && !y[_] && x.removeEventListener(_, this.handleEvent);
		this.handlers = y;
	}
	keydown(_) {
		if (this.lastKeyCode = _.keyCode, this.lastKeyTime = Date.now(), _.keyCode == 9 && Date.now() < this.lastEscPress + 2e3) return !0;
		if (_.keyCode != 27 && Bc.indexOf(_.keyCode) < 0 && (this.view.inputState.lastEscPress = 0), X.android && X.chrome && !_.synthetic && (_.keyCode == 13 || _.keyCode == 8)) return this.view.observer.delayAndroidKey(_.key, _.keyCode), !0;
		let y;
		return X.ios && !_.synthetic && !_.altKey && !_.metaKey && ((y = Rc.find((y) => y.keyCode == _.keyCode)) && !_.ctrlKey || zc.indexOf(_.key) > -1 && _.ctrlKey && !_.shiftKey) ? (this.pendingIOSKey = y || _, setTimeout(() => this.flushIOSKey(), 250), !0) : (_.keyCode != 229 && this.view.observer.forceFlush(), !1);
	}
	flushIOSKey(_) {
		let y = this.pendingIOSKey;
		return !y || y.key == `Enter` && _ && _.from < _.to && /^\S+$/.test(_.insert.toString()) ? !1 : (this.pendingIOSKey = void 0, dispatchKey(this.view.contentDOM, y.key, y.keyCode, y instanceof KeyboardEvent ? y : void 0));
	}
	ignoreDuringComposition(_) {
		return /^key/.test(_.type) ? this.composing > 0 ? !0 : X.safari && !X.ios && this.compositionPendingKey && Date.now() - this.compositionEndedAt < 100 ? (this.compositionPendingKey = !1, !0) : !1 : !1;
	}
	startMouseSelection(_) {
		this.mouseSelection && this.mouseSelection.destroy(), this.mouseSelection = _;
	}
	update(_) {
		this.mouseSelection && this.mouseSelection.update(_), this.draggedContent && _.docChanged && (this.draggedContent = this.draggedContent.map(_.changes)), _.transactions.length && (this.lastKeyCode = this.lastSelectionTime = 0);
	}
	destroy() {
		this.mouseSelection && this.mouseSelection.destroy();
	}
};
function bindHandler(_, y) {
	return (b, x) => {
		try {
			return y.call(_, x, b);
		} catch (_) {
			logException(b.state, _);
		}
	};
}
function computeHandlers(_) {
	let y = Object.create(null);
	function record(_) {
		return y[_] || (y[_] = {
			observers: [],
			handlers: []
		});
	}
	for (let y of _) {
		let _ = y.spec;
		if (_ && _.domEventHandlers) for (let b in _.domEventHandlers) {
			let x = _.domEventHandlers[b];
			x && record(b).handlers.push(bindHandler(y.value, x));
		}
		if (_ && _.domEventObservers) for (let b in _.domEventObservers) {
			let x = _.domEventObservers[b];
			x && record(b).observers.push(bindHandler(y.value, x));
		}
	}
	for (let _ in Hc) record(_).handlers.push(Hc[_]);
	for (let _ in Uc) record(_).observers.push(Uc[_]);
	return y;
}
var Rc = [
	{
		key: `Backspace`,
		keyCode: 8,
		inputType: `deleteContentBackward`
	},
	{
		key: `Enter`,
		keyCode: 13,
		inputType: `insertParagraph`
	},
	{
		key: `Enter`,
		keyCode: 13,
		inputType: `insertLineBreak`
	},
	{
		key: `Delete`,
		keyCode: 46,
		inputType: `deleteContentForward`
	}
], zc = `dthko`, Bc = [
	16,
	17,
	18,
	20,
	91,
	92,
	224,
	225
], Vc = 6;
function dragScrollSpeed(_) {
	return Math.max(0, _) * .7 + 8;
}
function dist(_, y) {
	return Math.max(Math.abs(_.clientX - y.clientX), Math.abs(_.clientY - y.clientY));
}
var MouseSelection = class {
	constructor(_, y, b, x) {
		this.view = _, this.startEvent = y, this.style = b, this.mustSelect = x, this.scrollSpeed = {
			x: 0,
			y: 0
		}, this.scrolling = -1, this.lastEvent = y, this.scrollParent = scrollableParent(_.contentDOM), this.atoms = _.state.facet(jc).map((y) => y(_));
		let S = _.contentDOM.ownerDocument;
		S.addEventListener(`mousemove`, this.move = this.move.bind(this)), S.addEventListener(`mouseup`, this.up = this.up.bind(this)), this.extend = y.shiftKey, this.multiple = _.state.facet(ls.allowMultipleSelections) && addsSelectionRange(_, y), this.dragging = isInPrimarySelection(_, y) && getClickType(y) == 1 ? null : !1;
	}
	start(_) {
		this.dragging === !1 && this.select(_);
	}
	move(_) {
		if (_.buttons == 0) return this.destroy();
		if (this.dragging || this.dragging == null && dist(this.startEvent, _) < 10) return;
		this.select(this.lastEvent = _);
		let y = 0, b = 0, x = this.scrollParent?.getBoundingClientRect() || {
			left: 0,
			top: 0,
			right: this.view.win.innerWidth,
			bottom: this.view.win.innerHeight
		}, S = getScrollMargins(this.view);
		_.clientX - S.left <= x.left + Vc ? y = -dragScrollSpeed(x.left - _.clientX) : _.clientX + S.right >= x.right - Vc && (y = dragScrollSpeed(_.clientX - x.right)), _.clientY - S.top <= x.top + Vc ? b = -dragScrollSpeed(x.top - _.clientY) : _.clientY + S.bottom >= x.bottom - Vc && (b = dragScrollSpeed(_.clientY - x.bottom)), this.setScrollSpeed(y, b);
	}
	up(_) {
		this.dragging ?? this.select(this.lastEvent), this.dragging || _.preventDefault(), this.destroy();
	}
	destroy() {
		this.setScrollSpeed(0, 0);
		let _ = this.view.contentDOM.ownerDocument;
		_.removeEventListener(`mousemove`, this.move), _.removeEventListener(`mouseup`, this.up), this.view.inputState.mouseSelection = this.view.inputState.draggedContent = null;
	}
	setScrollSpeed(_, y) {
		this.scrollSpeed = {
			x: _,
			y
		}, _ || y ? this.scrolling < 0 && (this.scrolling = setInterval(() => this.scroll(), 50)) : this.scrolling > -1 && (clearInterval(this.scrolling), this.scrolling = -1);
	}
	scroll() {
		this.scrollParent ? (this.scrollParent.scrollLeft += this.scrollSpeed.x, this.scrollParent.scrollTop += this.scrollSpeed.y) : this.view.win.scrollBy(this.scrollSpeed.x, this.scrollSpeed.y), this.dragging === !1 && this.select(this.lastEvent);
	}
	skipAtoms(_) {
		let y = null;
		for (let b = 0; b < _.ranges.length; b++) {
			let x = _.ranges[b], S = null;
			if (x.empty) {
				let _ = skipAtomicRanges(this.atoms, x.from, 0);
				_ != x.from && (S = J.cursor(_, -1));
			} else {
				let _ = skipAtomicRanges(this.atoms, x.from, -1), y = skipAtomicRanges(this.atoms, x.to, 1);
				(_ != x.from || y != x.to) && (S = J.range(x.from == x.anchor ? _ : y, x.from == x.head ? _ : y));
			}
			S && (y ||= _.ranges.slice(), y[b] = S);
		}
		return y ? J.create(y, _.mainIndex) : _;
	}
	select(_) {
		let { view: y } = this, b = this.skipAtoms(this.style.get(_, this.extend, this.multiple));
		(this.mustSelect || !b.eq(y.state.selection, this.dragging === !1)) && this.view.dispatch({
			selection: b,
			userEvent: `select.pointer`
		}), this.mustSelect = !1;
	}
	update(_) {
		this.style.update(_) && setTimeout(() => this.select(this.lastEvent), 20);
	}
};
function addsSelectionRange(_, y) {
	let b = _.state.facet(dc);
	return b.length ? b[0](y) : X.mac ? y.metaKey : y.ctrlKey;
}
function dragMovesSelection(_, y) {
	let b = _.state.facet(fc);
	return b.length ? b[0](y) : X.mac ? !y.altKey : !y.ctrlKey;
}
function isInPrimarySelection(_, y) {
	let { main: b } = _.state.selection;
	if (b.empty) return !1;
	let x = getSelection(_.root);
	if (!x || x.rangeCount == 0) return !0;
	let S = x.getRangeAt(0).getClientRects();
	for (let _ = 0; _ < S.length; _++) {
		let b = S[_];
		if (b.left <= y.clientX && b.right >= y.clientX && b.top <= y.clientY && b.bottom >= y.clientY) return !0;
	}
	return !1;
}
function eventBelongsToEditor(_, y) {
	if (!y.bubbles) return !0;
	if (y.defaultPrevented) return !1;
	for (let b = y.target, x; b != _.contentDOM; b = b.parentNode) if (!b || b.nodeType == 11 || (x = As.get(b)) && x.ignoreEvent(y)) return !1;
	return !0;
}
var Hc = Object.create(null), Uc = Object.create(null), Wc = X.ie && X.ie_version < 15 || X.ios && X.webkit_version < 604;
function capturePaste(_) {
	let y = _.dom.parentNode;
	if (!y) return;
	let b = y.appendChild(document.createElement(`textarea`));
	b.style.cssText = `position: fixed; left: -10000px; top: 10px`, b.focus(), setTimeout(() => {
		_.focus(), b.remove(), doPaste(_, b.value);
	}, 50);
}
function doPaste(_, y) {
	let { state: b } = _, x, S = 1, C = b.toText(y), w = C.lines == b.selection.ranges.length;
	if (Yc != null && b.selection.ranges.every((_) => _.empty) && Yc == C.toString()) {
		let _ = -1;
		x = b.changeByRange((x) => {
			let E = b.doc.lineAt(x.from);
			if (E.from == _) return { range: x };
			_ = E.from;
			let D = b.toText((w ? C.line(S++).text : y) + b.lineBreak);
			return {
				changes: {
					from: E.from,
					insert: D
				},
				range: J.cursor(x.from + D.length)
			};
		});
	} else x = w ? b.changeByRange((_) => {
		let y = C.line(S++);
		return {
			changes: {
				from: _.from,
				to: _.to,
				insert: y.text
			},
			range: J.cursor(_.from + y.length)
		};
	}) : b.replaceSelection(C);
	_.dispatch(x, {
		userEvent: `input.paste`,
		scrollIntoView: !0
	});
}
Uc.scroll = (_) => {
	_.inputState.lastScrollTop = _.scrollDOM.scrollTop, _.inputState.lastScrollLeft = _.scrollDOM.scrollLeft;
}, Hc.keydown = (_, y) => (_.inputState.setSelectionOrigin(`select`), y.keyCode == 27 && (_.inputState.lastEscPress = Date.now()), !1), Uc.touchstart = (_, y) => {
	_.inputState.lastTouchTime = Date.now(), _.inputState.setSelectionOrigin(`select.pointer`);
}, Uc.touchmove = (_) => {
	_.inputState.setSelectionOrigin(`select.pointer`);
}, Hc.mousedown = (_, y) => {
	if (_.observer.flush(), _.inputState.lastTouchTime > Date.now() - 2e3) return !1;
	let b = null;
	for (let x of _.state.facet(pc)) if (b = x(_, y), b) break;
	if (!b && y.button == 0 && (b = basicMouseSelection(_, y)), b) {
		let x = !_.hasFocus;
		_.inputState.startMouseSelection(new MouseSelection(_, y, b, x)), x && _.observer.ignore(() => focusPreventScroll(_.contentDOM));
		let S = _.inputState.mouseSelection;
		if (S) return S.start(y), S.dragging === !1;
	}
	return !1;
};
function rangeForClick(_, y, b, x) {
	if (x == 1) return J.cursor(y, b);
	if (x == 2) return groupAt(_.state, y, b);
	{
		let b = Js.find(_.docView, y), x = _.state.doc.lineAt(b ? b.posAtEnd : y), S = b ? b.posAtStart : x.from, C = b ? b.posAtEnd : x.to;
		return C < _.state.doc.length && C == x.to && C++, J.range(S, C);
	}
}
var insideY = (_, y) => _ >= y.top && _ <= y.bottom, inside = (_, y, b) => insideY(y, b) && _ >= b.left && _ <= b.right;
function findPositionSide(_, y, b, x) {
	let S = Js.find(_.docView, y);
	if (!S) return 1;
	let C = y - S.posAtStart;
	if (C == 0) return 1;
	if (C == S.length) return -1;
	let w = S.coordsAt(C, -1);
	if (w && inside(b, x, w)) return -1;
	let E = S.coordsAt(C, 1);
	return E && inside(b, x, E) ? 1 : w && insideY(x, w) ? -1 : 1;
}
function queryPos(_, y) {
	let b = _.posAtCoords({
		x: y.clientX,
		y: y.clientY
	}, !1);
	return {
		pos: b,
		bias: findPositionSide(_, b, y.clientX, y.clientY)
	};
}
var Gc = X.ie && X.ie_version <= 11, Kc = null, qc = 0, Jc = 0;
function getClickType(_) {
	if (!Gc) return _.detail;
	let y = Kc, b = Jc;
	return Kc = _, Jc = Date.now(), qc = !y || b > Date.now() - 400 && Math.abs(y.clientX - _.clientX) < 2 && Math.abs(y.clientY - _.clientY) < 2 ? (qc + 1) % 3 : 1;
}
function basicMouseSelection(_, y) {
	let b = queryPos(_, y), x = getClickType(y), S = _.state.selection;
	return {
		update(_) {
			_.docChanged && (b.pos = _.changes.mapPos(b.pos), S = S.map(_.changes));
		},
		get(y, C, w) {
			let E = queryPos(_, y), D, O = rangeForClick(_, E.pos, E.bias, x);
			if (b.pos != E.pos && !C) {
				let y = rangeForClick(_, b.pos, b.bias, x), S = Math.min(y.from, O.from), C = Math.max(y.to, O.to);
				O = S < O.from ? J.range(S, C) : J.range(C, S);
			}
			return C ? S.replaceRange(S.main.extend(O.from, O.to)) : w && x == 1 && S.ranges.length > 1 && (D = removeRangeAround(S, E.pos)) ? D : w ? S.addRange(O) : J.create([O]);
		}
	};
}
function removeRangeAround(_, y) {
	for (let b = 0; b < _.ranges.length; b++) {
		let { from: x, to: S } = _.ranges[b];
		if (x <= y && S >= y) return J.create(_.ranges.slice(0, b).concat(_.ranges.slice(b + 1)), _.mainIndex == b ? 0 : _.mainIndex - +(_.mainIndex > b));
	}
	return null;
}
Hc.dragstart = (_, y) => {
	let { selection: { main: b } } = _.state;
	if (y.target.draggable) {
		let x = _.docView.nearest(y.target);
		if (x && x.isWidget) {
			let _ = x.posAtStart, y = _ + x.length;
			(_ >= b.to || y <= b.from) && (b = J.range(_, y));
		}
	}
	let { inputState: x } = _;
	return x.mouseSelection && (x.mouseSelection.dragging = !0), x.draggedContent = b, y.dataTransfer && (y.dataTransfer.setData(`Text`, _.state.sliceDoc(b.from, b.to)), y.dataTransfer.effectAllowed = `copyMove`), !1;
}, Hc.dragend = (_) => (_.inputState.draggedContent = null, !1);
function dropText(_, y, b, x) {
	if (!b) return;
	let S = _.posAtCoords({
		x: y.clientX,
		y: y.clientY
	}, !1), { draggedContent: C } = _.inputState, w = x && C && dragMovesSelection(_, y) ? {
		from: C.from,
		to: C.to
	} : null, E = {
		from: S,
		insert: b
	}, D = _.state.changes(w ? [w, E] : E);
	_.focus(), _.dispatch({
		changes: D,
		selection: {
			anchor: D.mapPos(S, -1),
			head: D.mapPos(S, 1)
		},
		userEvent: w ? `move.drop` : `input.drop`
	}), _.inputState.draggedContent = null;
}
Hc.drop = (_, y) => {
	if (!y.dataTransfer) return !1;
	if (_.state.readOnly) return !0;
	let b = y.dataTransfer.files;
	if (b && b.length) {
		let x = Array(b.length), S = 0, finishFile = () => {
			++S == b.length && dropText(_, y, x.filter((_) => _ != null).join(_.state.lineBreak), !1);
		};
		for (let _ = 0; _ < b.length; _++) {
			let y = new FileReader();
			y.onerror = finishFile, y.onload = () => {
				/[\x00-\x08\x0e-\x1f]{2}/.test(y.result) || (x[_] = y.result), finishFile();
			}, y.readAsText(b[_]);
		}
		return !0;
	} else {
		let b = y.dataTransfer.getData(`Text`);
		if (b) return dropText(_, y, b, !0), !0;
	}
	return !1;
}, Hc.paste = (_, y) => {
	if (_.state.readOnly) return !0;
	_.observer.flush();
	let b = Wc ? null : y.clipboardData;
	return b ? (doPaste(_, b.getData(`text/plain`) || b.getData(`text/uri-list`)), !0) : (capturePaste(_), !1);
};
function captureCopy(_, y) {
	let b = _.dom.parentNode;
	if (!b) return;
	let x = b.appendChild(document.createElement(`textarea`));
	x.style.cssText = `position: fixed; left: -10000px; top: 10px`, x.value = y, x.focus(), x.selectionEnd = y.length, x.selectionStart = 0, setTimeout(() => {
		x.remove(), _.focus();
	}, 50);
}
function copiedRange(_) {
	let y = [], b = [], x = !1;
	for (let x of _.selection.ranges) x.empty || (y.push(_.sliceDoc(x.from, x.to)), b.push(x));
	if (!y.length) {
		let S = -1;
		for (let { from: x } of _.selection.ranges) {
			let C = _.doc.lineAt(x);
			C.number > S && (y.push(C.text), b.push({
				from: C.from,
				to: Math.min(_.doc.length, C.to + 1)
			})), S = C.number;
		}
		x = !0;
	}
	return {
		text: y.join(_.lineBreak),
		ranges: b,
		linewise: x
	};
}
var Yc = null;
Hc.copy = Hc.cut = (_, y) => {
	let { text: b, ranges: x, linewise: S } = copiedRange(_.state);
	if (!b && !S) return !1;
	Yc = S ? b : null, y.type == `cut` && !_.state.readOnly && _.dispatch({
		changes: x,
		scrollIntoView: !0,
		userEvent: `delete.cut`
	});
	let C = Wc ? null : y.clipboardData;
	return C ? (C.clearData(), C.setData(`text/plain`, b), !0) : (captureCopy(_, b), !1);
};
var Xc = Annotation.define();
function focusChangeTransaction(_, y) {
	let b = [];
	for (let x of _.facet(_c)) {
		let S = x(_, y);
		S && b.push(S);
	}
	return b ? _.update({
		effects: b,
		annotations: Xc.of(!0)
	}) : null;
}
function updateForFocusChange(_) {
	setTimeout(() => {
		let y = _.hasFocus;
		if (y != _.inputState.notifiedFocused) {
			let b = focusChangeTransaction(_.state, y);
			b ? _.dispatch(b) : _.update([]);
		}
	}, 10);
}
Uc.focus = (_) => {
	_.inputState.lastFocusTime = Date.now(), !_.scrollDOM.scrollTop && (_.inputState.lastScrollTop || _.inputState.lastScrollLeft) && (_.scrollDOM.scrollTop = _.inputState.lastScrollTop, _.scrollDOM.scrollLeft = _.inputState.lastScrollLeft), updateForFocusChange(_);
}, Uc.blur = (_) => {
	_.observer.clearSelectionRange(), updateForFocusChange(_);
}, Uc.compositionstart = Uc.compositionupdate = (_) => {
	_.inputState.compositionFirstChange ?? (_.inputState.compositionFirstChange = !0), _.inputState.composing < 0 && (_.inputState.composing = 0);
}, Uc.compositionend = (_) => {
	_.inputState.composing = -1, _.inputState.compositionEndedAt = Date.now(), _.inputState.compositionPendingKey = !0, _.inputState.compositionPendingChange = _.observer.pendingRecords().length > 0, _.inputState.compositionFirstChange = null, X.chrome && X.android ? _.observer.flushSoon() : _.inputState.compositionPendingChange ? Promise.resolve().then(() => _.observer.flush()) : setTimeout(() => {
		_.inputState.composing < 0 && _.docView.hasComposition && _.update([]);
	}, 50);
}, Uc.contextmenu = (_) => {
	_.inputState.lastContextMenu = Date.now();
}, Hc.beforeinput = (_, y) => {
	let b;
	if (X.chrome && X.android && (b = Rc.find((_) => _.inputType == y.inputType)) && (_.observer.delayAndroidKey(b.key, b.keyCode), b.key == `Backspace` || b.key == `Delete`)) {
		let y = window.visualViewport?.height || 0;
		setTimeout(() => {
			(window.visualViewport?.height || 0) > y + 10 && _.hasFocus && (_.contentDOM.blur(), _.focus());
		}, 100);
	}
	return X.ios && y.inputType == `deleteContentForward` && _.observer.flushSoon(), X.safari && y.inputType == `insertText` && _.inputState.composing >= 0 && setTimeout(() => Uc.compositionend(_, y), 20), !1;
};
var Zc = /* @__PURE__ */ new Set();
function firefoxCopyCutHack(_) {
	Zc.has(_) || (Zc.add(_), _.addEventListener(`copy`, () => {}), _.addEventListener(`cut`, () => {}));
}
var Qc = [
	`pre-wrap`,
	`normal`,
	`pre-line`,
	`break-spaces`
], HeightOracle = class {
	constructor(_) {
		this.lineWrapping = _, this.doc = Mo.empty, this.heightSamples = {}, this.lineHeight = 14, this.charWidth = 7, this.textHeight = 14, this.lineLength = 30, this.heightChanged = !1;
	}
	heightForGap(_, y) {
		let b = this.doc.lineAt(y).number - this.doc.lineAt(_).number + 1;
		return this.lineWrapping && (b += Math.max(0, Math.ceil((y - _ - b * this.lineLength * .5) / this.lineLength))), this.lineHeight * b;
	}
	heightForLine(_) {
		return this.lineWrapping ? (1 + Math.max(0, Math.ceil((_ - this.lineLength) / (this.lineLength - 5)))) * this.lineHeight : this.lineHeight;
	}
	setDoc(_) {
		return this.doc = _, this;
	}
	mustRefreshForWrapping(_) {
		return Qc.indexOf(_) > -1 != this.lineWrapping;
	}
	mustRefreshForHeights(_) {
		let y = !1;
		for (let b = 0; b < _.length; b++) {
			let x = _[b];
			x < 0 ? b++ : this.heightSamples[Math.floor(x * 10)] || (y = !0, this.heightSamples[Math.floor(x * 10)] = !0);
		}
		return y;
	}
	refresh(_, y, b, x, S, C) {
		let w = Qc.indexOf(_) > -1, E = Math.round(y) != Math.round(this.lineHeight) || this.lineWrapping != w;
		if (this.lineWrapping = w, this.lineHeight = y, this.charWidth = b, this.textHeight = x, this.lineLength = S, E) {
			this.heightSamples = {};
			for (let _ = 0; _ < C.length; _++) {
				let y = C[_];
				y < 0 ? _++ : this.heightSamples[Math.floor(y * 10)] = !0;
			}
		}
		return E;
	}
}, MeasuredHeights = class {
	constructor(_, y) {
		this.from = _, this.heights = y, this.index = 0;
	}
	get more() {
		return this.index < this.heights.length;
	}
}, $c = class BlockInfo {
	constructor(_, y, b, x, S) {
		this.from = _, this.length = y, this.top = b, this.height = x, this._content = S;
	}
	get type() {
		return typeof this._content == `number` ? Xs.Text : Array.isArray(this._content) ? this._content : this._content.type;
	}
	get to() {
		return this.from + this.length;
	}
	get bottom() {
		return this.top + this.height;
	}
	get widget() {
		return this._content instanceof $s ? this._content.widget : null;
	}
	get widgetLineBreaks() {
		return typeof this._content == `number` ? this._content : 0;
	}
	join(_) {
		let y = (Array.isArray(this._content) ? this._content : [this]).concat(Array.isArray(_._content) ? _._content : [_]);
		return new BlockInfo(this.from, this.length + _.length, this.top, this.height + _.height, y);
	}
}, el = (function(_) {
	return _[_.ByPos = 0] = `ByPos`, _[_.ByHeight = 1] = `ByHeight`, _[_.ByPosNoHeight = 2] = `ByPosNoHeight`, _;
})(el ||= {}), tl = .001, nl = class HeightMap {
	constructor(_, y, b = 2) {
		this.length = _, this.height = y, this.flags = b;
	}
	get outdated() {
		return (this.flags & 2) > 0;
	}
	set outdated(_) {
		this.flags = (_ ? 2 : 0) | this.flags & -3;
	}
	setHeight(_, y) {
		this.height != y && (Math.abs(this.height - y) > tl && (_.heightChanged = !0), this.height = y);
	}
	replace(_, y, b) {
		return HeightMap.of(b);
	}
	decomposeLeft(_, y) {
		y.push(this);
	}
	decomposeRight(_, y) {
		y.push(this);
	}
	applyChanges(_, y, b, x) {
		let S = this, C = b.doc;
		for (let w = x.length - 1; w >= 0; w--) {
			let { fromA: E, toA: D, fromB: O, toB: k } = x[w], A = S.lineAt(E, el.ByPosNoHeight, b.setDoc(y), 0, 0), j = A.to >= D ? A : S.lineAt(D, el.ByPosNoHeight, b, 0, 0);
			for (k += j.to - D, D = j.to; w > 0 && A.from <= x[w - 1].toA;) E = x[w - 1].fromA, O = x[w - 1].fromB, w--, E < A.from && (A = S.lineAt(E, el.ByPosNoHeight, b, 0, 0));
			O += A.from - E, E = A.from;
			let N = ol.build(b.setDoc(C), _, O, k);
			S = S.replace(E, D, N);
		}
		return S.updateHeight(b, 0);
	}
	static empty() {
		return new rl(0, 0);
	}
	static of(_) {
		if (_.length == 1) return _[0];
		let y = 0, b = _.length, x = 0, S = 0;
		for (;;) if (y == b) if (x > S * 2) {
			let S = _[y - 1];
			S.break ? _.splice(--y, 1, S.left, null, S.right) : _.splice(--y, 1, S.left, S.right), b += 1 + S.break, x -= S.size;
		} else if (S > x * 2) {
			let y = _[b];
			y.break ? _.splice(b, 1, y.left, null, y.right) : _.splice(b, 1, y.left, y.right), b += 2 + y.break, S -= y.size;
		} else break;
		else if (x < S) {
			let b = _[y++];
			b && (x += b.size);
		} else {
			let y = _[--b];
			y && (S += y.size);
		}
		let C = 0;
		return _[y - 1] == null ? (C = 1, y--) : _[y] ?? (C = 1, b++), new HeightMapBranch(HeightMap.of(_.slice(0, y)), C, HeightMap.of(_.slice(b)));
	}
};
nl.prototype.size = 1;
var HeightMapBlock = class extends nl {
	constructor(_, y, b) {
		super(_, y), this.deco = b;
	}
	blockAt(_, y, b, x) {
		return new $c(x, this.length, b, this.height, this.deco || 0);
	}
	lineAt(_, y, b, x, S) {
		return this.blockAt(0, b, x, S);
	}
	forEachLine(_, y, b, x, S, C) {
		_ <= S + this.length && y >= S && C(this.blockAt(0, b, x, S));
	}
	updateHeight(_, y = 0, b = !1, x) {
		return x && x.from <= y && x.more && this.setHeight(_, x.heights[x.index++]), this.outdated = !1, this;
	}
	toString() {
		return `block(${this.length})`;
	}
}, rl = class HeightMapText extends HeightMapBlock {
	constructor(_, y) {
		super(_, y, null), this.collapsed = 0, this.widgetHeight = 0, this.breaks = 0;
	}
	blockAt(_, y, b, x) {
		return new $c(x, this.length, b, this.height, this.breaks);
	}
	replace(_, y, b) {
		let x = b[0];
		return b.length == 1 && (x instanceof HeightMapText || x instanceof il && x.flags & 4) && Math.abs(this.length - x.length) < 10 ? (x instanceof il ? x = new HeightMapText(x.length, this.height) : x.height = this.height, this.outdated || (x.outdated = !1), x) : nl.of(b);
	}
	updateHeight(_, y = 0, b = !1, x) {
		return x && x.from <= y && x.more ? this.setHeight(_, x.heights[x.index++]) : (b || this.outdated) && this.setHeight(_, Math.max(this.widgetHeight, _.heightForLine(this.length - this.collapsed)) + this.breaks * _.lineHeight), this.outdated = !1, this;
	}
	toString() {
		return `line(${this.length}${this.collapsed ? -this.collapsed : ``}${this.widgetHeight ? `:` + this.widgetHeight : ``})`;
	}
}, il = class HeightMapGap extends nl {
	constructor(_) {
		super(_, 0);
	}
	heightMetrics(_, y) {
		let b = _.doc.lineAt(y).number, x = _.doc.lineAt(y + this.length).number, S = x - b + 1, C, w = 0;
		if (_.lineWrapping) {
			let y = Math.min(this.height, _.lineHeight * S);
			C = y / S, this.length > S + 1 && (w = (this.height - y) / (this.length - S - 1));
		} else C = this.height / S;
		return {
			firstLine: b,
			lastLine: x,
			perLine: C,
			perChar: w
		};
	}
	blockAt(_, y, b, x) {
		let { firstLine: S, lastLine: C, perLine: w, perChar: E } = this.heightMetrics(y, x);
		if (y.lineWrapping) {
			let S = x + (_ < y.lineHeight ? 0 : Math.round(Math.max(0, Math.min(1, (_ - b) / this.height)) * this.length)), C = y.doc.lineAt(S), D = w + C.length * E, O = Math.max(b, _ - D / 2);
			return new $c(C.from, C.length, O, D, 0);
		} else {
			let x = Math.max(0, Math.min(C - S, Math.floor((_ - b) / w))), { from: E, length: D } = y.doc.line(S + x);
			return new $c(E, D, b + w * x, w, 0);
		}
	}
	lineAt(_, y, b, x, S) {
		if (y == el.ByHeight) return this.blockAt(_, b, x, S);
		if (y == el.ByPosNoHeight) {
			let { from: y, to: x } = b.doc.lineAt(_);
			return new $c(y, x - y, 0, 0, 0);
		}
		let { firstLine: C, perLine: w, perChar: E } = this.heightMetrics(b, S), D = b.doc.lineAt(_), O = w + D.length * E, k = D.number - C, A = x + w * k + E * (D.from - S - k);
		return new $c(D.from, D.length, Math.max(x, Math.min(A, x + this.height - O)), O, 0);
	}
	forEachLine(_, y, b, x, S, C) {
		_ = Math.max(_, S), y = Math.min(y, S + this.length);
		let { firstLine: w, perLine: E, perChar: D } = this.heightMetrics(b, S);
		for (let O = _, k = x; O <= y;) {
			let y = b.doc.lineAt(O);
			if (O == _) {
				let b = y.number - w;
				k += E * b + D * (_ - S - b);
			}
			let x = E + D * y.length;
			C(new $c(y.from, y.length, k, x, 0)), k += x, O = y.to + 1;
		}
	}
	replace(_, y, b) {
		let x = this.length - y;
		if (x > 0) {
			let _ = b[b.length - 1];
			_ instanceof HeightMapGap ? b[b.length - 1] = new HeightMapGap(_.length + x) : b.push(null, new HeightMapGap(x - 1));
		}
		if (_ > 0) {
			let y = b[0];
			y instanceof HeightMapGap ? b[0] = new HeightMapGap(_ + y.length) : b.unshift(new HeightMapGap(_ - 1), null);
		}
		return nl.of(b);
	}
	decomposeLeft(_, y) {
		y.push(new HeightMapGap(_ - 1), null);
	}
	decomposeRight(_, y) {
		y.push(null, new HeightMapGap(this.length - _ - 1));
	}
	updateHeight(_, y = 0, b = !1, x) {
		let S = y + this.length;
		if (x && x.from <= y + this.length && x.more) {
			let b = [], C = Math.max(y, x.from), w = -1;
			for (x.from > y && b.push(new HeightMapGap(x.from - y - 1).updateHeight(_, y)); C <= S && x.more;) {
				let y = _.doc.lineAt(C).length;
				b.length && b.push(null);
				let S = x.heights[x.index++];
				w == -1 ? w = S : Math.abs(S - w) >= tl && (w = -2);
				let E = new rl(y, S);
				E.outdated = !1, b.push(E), C += y + 1;
			}
			C <= S && b.push(null, new HeightMapGap(S - C).updateHeight(_, C));
			let E = nl.of(b);
			return (w < 0 || Math.abs(E.height - this.height) >= tl || Math.abs(w - this.heightMetrics(_, y).perLine) >= tl) && (_.heightChanged = !0), E;
		} else (b || this.outdated) && (this.setHeight(_, _.heightForGap(y, y + this.length)), this.outdated = !1);
		return this;
	}
	toString() {
		return `gap(${this.length})`;
	}
}, HeightMapBranch = class extends nl {
	constructor(_, y, b) {
		super(_.length + y + b.length, _.height + b.height, y | (_.outdated || b.outdated ? 2 : 0)), this.left = _, this.right = b, this.size = _.size + b.size;
	}
	get break() {
		return this.flags & 1;
	}
	blockAt(_, y, b, x) {
		let S = b + this.left.height;
		return _ < S ? this.left.blockAt(_, y, b, x) : this.right.blockAt(_, y, S, x + this.left.length + this.break);
	}
	lineAt(_, y, b, x, S) {
		let C = x + this.left.height, w = S + this.left.length + this.break, E = y == el.ByHeight ? _ < C : _ < w, D = E ? this.left.lineAt(_, y, b, x, S) : this.right.lineAt(_, y, b, C, w);
		if (this.break || (E ? D.to < w : D.from > w)) return D;
		let O = y == el.ByPosNoHeight ? el.ByPosNoHeight : el.ByPos;
		return E ? D.join(this.right.lineAt(w, O, b, C, w)) : this.left.lineAt(w, O, b, x, S).join(D);
	}
	forEachLine(_, y, b, x, S, C) {
		let w = x + this.left.height, E = S + this.left.length + this.break;
		if (this.break) _ < E && this.left.forEachLine(_, y, b, x, S, C), y >= E && this.right.forEachLine(_, y, b, w, E, C);
		else {
			let D = this.lineAt(E, el.ByPos, b, x, S);
			_ < D.from && this.left.forEachLine(_, D.from - 1, b, x, S, C), D.to >= _ && D.from <= y && C(D), y > D.to && this.right.forEachLine(D.to + 1, y, b, w, E, C);
		}
	}
	replace(_, y, b) {
		let x = this.left.length + this.break;
		if (y < x) return this.balanced(this.left.replace(_, y, b), this.right);
		if (_ > this.left.length) return this.balanced(this.left, this.right.replace(_ - x, y - x, b));
		let S = [];
		_ > 0 && this.decomposeLeft(_, S);
		let C = S.length;
		for (let _ of b) S.push(_);
		if (_ > 0 && mergeGaps(S, C - 1), y < this.length) {
			let _ = S.length;
			this.decomposeRight(y, S), mergeGaps(S, _);
		}
		return nl.of(S);
	}
	decomposeLeft(_, y) {
		let b = this.left.length;
		if (_ <= b) return this.left.decomposeLeft(_, y);
		y.push(this.left), this.break && (b++, _ >= b && y.push(null)), _ > b && this.right.decomposeLeft(_ - b, y);
	}
	decomposeRight(_, y) {
		let b = this.left.length, x = b + this.break;
		if (_ >= x) return this.right.decomposeRight(_ - x, y);
		_ < b && this.left.decomposeRight(_, y), this.break && _ < x && y.push(null), y.push(this.right);
	}
	balanced(_, y) {
		return _.size > 2 * y.size || y.size > 2 * _.size ? nl.of(this.break ? [
			_,
			null,
			y
		] : [_, y]) : (this.left = _, this.right = y, this.height = _.height + y.height, this.outdated = _.outdated || y.outdated, this.size = _.size + y.size, this.length = _.length + this.break + y.length, this);
	}
	updateHeight(_, y = 0, b = !1, x) {
		let { left: S, right: C } = this, w = y + S.length + this.break, E = null;
		return x && x.from <= y + S.length && x.more ? E = S = S.updateHeight(_, y, b, x) : S.updateHeight(_, y, b), x && x.from <= w + C.length && x.more ? E = C = C.updateHeight(_, w, b, x) : C.updateHeight(_, w, b), E ? this.balanced(S, C) : (this.height = this.left.height + this.right.height, this.outdated = !1, this);
	}
	toString() {
		return this.left + (this.break ? ` ` : `-`) + this.right;
	}
};
function mergeGaps(_, y) {
	let b, x;
	_[y] == null && (b = _[y - 1]) instanceof il && (x = _[y + 1]) instanceof il && _.splice(y - 1, 3, new il(b.length + 1 + x.length));
}
var al = 5, ol = class NodeBuilder {
	constructor(_, y) {
		this.pos = _, this.oracle = y, this.nodes = [], this.lineStart = -1, this.lineEnd = -1, this.covering = null, this.writtenTo = _;
	}
	get isCovered() {
		return this.covering && this.nodes[this.nodes.length - 1] == this.covering;
	}
	span(_, y) {
		if (this.lineStart > -1) {
			let _ = Math.min(y, this.lineEnd), b = this.nodes[this.nodes.length - 1];
			b instanceof rl ? b.length += _ - this.pos : (_ > this.pos || !this.isCovered) && this.nodes.push(new rl(_ - this.pos, -1)), this.writtenTo = _, y > _ && (this.nodes.push(null), this.writtenTo++, this.lineStart = -1);
		}
		this.pos = y;
	}
	point(_, y, b) {
		if (_ < y || b.heightRelevant) {
			let x = b.widget ? b.widget.estimatedHeight : 0, S = b.widget ? b.widget.lineBreaks : 0;
			x < 0 && (x = this.oracle.lineHeight);
			let C = y - _;
			b.block ? this.addBlock(new HeightMapBlock(C, x, b)) : (C || S || x >= al) && this.addLineDeco(x, S, C);
		} else y > _ && this.span(_, y);
		this.lineEnd > -1 && this.lineEnd < this.pos && (this.lineEnd = this.oracle.doc.lineAt(this.pos).to);
	}
	enterLine() {
		if (this.lineStart > -1) return;
		let { from: _, to: y } = this.oracle.doc.lineAt(this.pos);
		this.lineStart = _, this.lineEnd = y, this.writtenTo < _ && ((this.writtenTo < _ - 1 || this.nodes[this.nodes.length - 1] == null) && this.nodes.push(this.blankContent(this.writtenTo, _ - 1)), this.nodes.push(null)), this.pos > _ && this.nodes.push(new rl(this.pos - _, -1)), this.writtenTo = this.pos;
	}
	blankContent(_, y) {
		let b = new il(y - _);
		return this.oracle.doc.lineAt(_).to == y && (b.flags |= 4), b;
	}
	ensureLine() {
		this.enterLine();
		let _ = this.nodes.length ? this.nodes[this.nodes.length - 1] : null;
		if (_ instanceof rl) return _;
		let y = new rl(0, -1);
		return this.nodes.push(y), y;
	}
	addBlock(_) {
		this.enterLine();
		let y = _.deco;
		y && y.startSide > 0 && !this.isCovered && this.ensureLine(), this.nodes.push(_), this.writtenTo = this.pos += _.length, y && y.endSide > 0 && (this.covering = _);
	}
	addLineDeco(_, y, b) {
		let x = this.ensureLine();
		x.length += b, x.collapsed += b, x.widgetHeight = Math.max(x.widgetHeight, _), x.breaks += y, this.writtenTo = this.pos += b;
	}
	finish(_) {
		let y = this.nodes.length == 0 ? null : this.nodes[this.nodes.length - 1];
		this.lineStart > -1 && !(y instanceof rl) && !this.isCovered ? this.nodes.push(new rl(0, -1)) : (this.writtenTo < this.pos || y == null) && this.nodes.push(this.blankContent(this.writtenTo, this.pos));
		let b = _;
		for (let _ of this.nodes) _ instanceof rl && _.updateHeight(this.oracle, b), b += _ ? _.length : 1;
		return this.nodes;
	}
	static build(_, y, b, x) {
		let S = new NodeBuilder(b, _);
		return fs.spans(y, b, x, S, 0), S.finish(b);
	}
};
function heightRelevantDecoChanges(_, y, b) {
	let x = new DecorationComparator();
	return fs.compare(_, y, b, x, 0), x.changes;
}
var DecorationComparator = class {
	constructor() {
		this.changes = [];
	}
	compareRange() {}
	comparePoint(_, y, b, x) {
		(_ < y || b && b.heightRelevant || x && x.heightRelevant) && addRange(_, y, this.changes, 5);
	}
};
function visiblePixelRange(_, y) {
	let b = _.getBoundingClientRect(), x = _.ownerDocument, S = x.defaultView || window, C = Math.max(0, b.left), w = Math.min(S.innerWidth, b.right), E = Math.max(0, b.top), D = Math.min(S.innerHeight, b.bottom);
	for (let y = _.parentNode; y && y != x.body;) if (y.nodeType == 1) {
		let b = y, x = window.getComputedStyle(b);
		if ((b.scrollHeight > b.clientHeight || b.scrollWidth > b.clientWidth) && x.overflow != `visible`) {
			let x = b.getBoundingClientRect();
			C = Math.max(C, x.left), w = Math.min(w, x.right), E = Math.max(E, x.top), D = y == _.parentNode ? x.bottom : Math.min(D, x.bottom);
		}
		y = x.position == `absolute` || x.position == `fixed` ? b.offsetParent : b.parentNode;
	} else if (y.nodeType == 11) y = y.host;
	else break;
	return {
		left: C - b.left,
		right: Math.max(C, w) - b.left,
		top: E - (b.top + y),
		bottom: Math.max(E, D) - (b.top + y)
	};
}
function fullPixelRange(_, y) {
	let b = _.getBoundingClientRect();
	return {
		left: 0,
		right: b.right - b.left,
		top: y,
		bottom: b.bottom - (b.top + y)
	};
}
var LineGap = class {
	constructor(_, y, b) {
		this.from = _, this.to = y, this.size = b;
	}
	static same(_, y) {
		if (_.length != y.length) return !1;
		for (let b = 0; b < _.length; b++) {
			let x = _[b], S = y[b];
			if (x.from != S.from || x.to != S.to || x.size != S.size) return !1;
		}
		return !0;
	}
	draw(_, y) {
		return Decoration.replace({ widget: new LineGapWidget(this.size * (y ? _.scaleY : _.scaleX), y) }).range(this.from, this.to);
	}
}, LineGapWidget = class extends WidgetType {
	constructor(_, y) {
		super(), this.size = _, this.vertical = y;
	}
	eq(_) {
		return _.size == this.size && _.vertical == this.vertical;
	}
	toDOM() {
		let _ = document.createElement(`div`);
		return this.vertical ? _.style.height = this.size + `px` : (_.style.width = this.size + `px`, _.style.height = `2px`, _.style.display = `inline-block`), _;
	}
	get estimatedHeight() {
		return this.vertical ? this.size : -1;
	}
}, ViewState = class {
	constructor(_) {
		this.state = _, this.pixelViewport = {
			left: 0,
			right: window.innerWidth,
			top: 0,
			bottom: 0
		}, this.inView = !0, this.paddingTop = 0, this.paddingBottom = 0, this.contentDOMWidth = 0, this.contentDOMHeight = 0, this.editorHeight = 0, this.editorWidth = 0, this.scrollTop = 0, this.scrolledToBottom = !1, this.scaleX = 1, this.scaleY = 1, this.scrollAnchorPos = 0, this.scrollAnchorHeight = -1, this.scaler = sl, this.scrollTarget = null, this.printing = !1, this.mustMeasureContent = !0, this.defaultTextDirection = tc.LTR, this.visibleRanges = [], this.mustEnforceCursorAssoc = !1;
		let y = _.facet(Oc).some((_) => typeof _ != `function` && _.class == `cm-lineWrapping`);
		this.heightOracle = new HeightOracle(y), this.stateDeco = _.facet(kc).filter((_) => typeof _ != `function`), this.heightMap = nl.empty().applyChanges(this.stateDeco, Mo.empty, this.heightOracle.setDoc(_.doc), [new Fc(0, 0, 0, _.doc.length)]), this.viewport = this.getViewport(0, null), this.updateViewportLines(), this.updateForViewport(), this.lineGaps = this.ensureLineGaps([]), this.lineGapDeco = Decoration.set(this.lineGaps.map((_) => _.draw(this, !1))), this.computeVisibleRanges();
	}
	updateForViewport() {
		let _ = [this.viewport], { main: y } = this.state.selection;
		for (let b = 0; b <= 1; b++) {
			let x = b ? y.head : y.anchor;
			if (!_.some(({ from: _, to: y }) => x >= _ && x <= y)) {
				let { from: y, to: b } = this.lineBlockAt(x);
				_.push(new Viewport(y, b));
			}
		}
		this.viewports = _.sort((_, y) => _.from - y.from), this.scaler = this.heightMap.height <= 7e6 ? sl : new BigScaler(this.heightOracle, this.heightMap, this.viewports);
	}
	updateViewportLines() {
		this.viewportLines = [], this.heightMap.forEachLine(this.viewport.from, this.viewport.to, this.heightOracle.setDoc(this.state.doc), 0, 0, (_) => {
			this.viewportLines.push(this.scaler.scale == 1 ? _ : scaleBlock(_, this.scaler));
		});
	}
	update(_, y = null) {
		this.state = _.state;
		let b = this.stateDeco;
		this.stateDeco = this.state.facet(kc).filter((_) => typeof _ != `function`);
		let x = _.changedRanges, S = Fc.extendWithRanges(x, heightRelevantDecoChanges(b, this.stateDeco, _ ? _.changes : Bo.empty(this.state.doc.length))), C = this.heightMap.height, w = this.scrolledToBottom ? null : this.scrollAnchorAt(this.scrollTop);
		this.heightMap = this.heightMap.applyChanges(this.stateDeco, _.startState.doc, this.heightOracle.setDoc(this.state.doc), S), this.heightMap.height != C && (_.flags |= 2), w ? (this.scrollAnchorPos = _.changes.mapPos(w.from, -1), this.scrollAnchorHeight = w.top) : (this.scrollAnchorPos = -1, this.scrollAnchorHeight = this.heightMap.height);
		let E = S.length ? this.mapViewport(this.viewport, _.changes) : this.viewport;
		(y && (y.range.head < E.from || y.range.head > E.to) || !this.viewportIsAppropriate(E)) && (E = this.getViewport(0, y));
		let D = !_.changes.empty || _.flags & 2 || E.from != this.viewport.from || E.to != this.viewport.to;
		this.viewport = E, this.updateForViewport(), D && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(this.mapLineGaps(this.lineGaps, _.changes))), _.flags |= this.computeVisibleRanges(), y && (this.scrollTarget = y), !this.mustEnforceCursorAssoc && _.selectionSet && _.view.lineWrapping && _.state.selection.main.empty && _.state.selection.main.assoc && !_.state.facet(yc) && (this.mustEnforceCursorAssoc = !0);
	}
	measure(_) {
		let y = _.contentDOM, b = window.getComputedStyle(y), x = this.heightOracle, S = b.whiteSpace;
		this.defaultTextDirection = b.direction == `rtl` ? tc.RTL : tc.LTR;
		let C = this.heightOracle.mustRefreshForWrapping(S), w = y.getBoundingClientRect(), E = C || this.mustMeasureContent || this.contentDOMHeight != w.height;
		this.contentDOMHeight = w.height, this.mustMeasureContent = !1;
		let D = 0, O = 0;
		if (w.width && w.height) {
			let { scaleX: _, scaleY: b } = getScale(y, w);
			(_ > .005 && Math.abs(this.scaleX - _) > .005 || b > .005 && Math.abs(this.scaleY - b) > .005) && (this.scaleX = _, this.scaleY = b, D |= 8, C = E = !0);
		}
		let k = (parseInt(b.paddingTop) || 0) * this.scaleY, A = (parseInt(b.paddingBottom) || 0) * this.scaleY;
		(this.paddingTop != k || this.paddingBottom != A) && (this.paddingTop = k, this.paddingBottom = A, D |= 10), this.editorWidth != _.scrollDOM.clientWidth && (x.lineWrapping && (E = !0), this.editorWidth = _.scrollDOM.clientWidth, D |= 8);
		let j = _.scrollDOM.scrollTop * this.scaleY;
		this.scrollTop != j && (this.scrollAnchorHeight = -1, this.scrollTop = j), this.scrolledToBottom = isScrolledToBottom(_.scrollDOM);
		let N = (this.printing ? fullPixelRange : visiblePixelRange)(y, this.paddingTop), P = N.top - this.pixelViewport.top, F = N.bottom - this.pixelViewport.bottom;
		this.pixelViewport = N;
		let I = this.pixelViewport.bottom > this.pixelViewport.top && this.pixelViewport.right > this.pixelViewport.left;
		if (I != this.inView && (this.inView = I, I && (E = !0)), !this.inView && !this.scrollTarget) return 0;
		let L = w.width;
		if ((this.contentDOMWidth != L || this.editorHeight != _.scrollDOM.clientHeight) && (this.contentDOMWidth = w.width, this.editorHeight = _.scrollDOM.clientHeight, D |= 8), E) {
			let y = _.docView.measureVisibleLineHeights(this.viewport);
			if (x.mustRefreshForHeights(y) && (C = !0), C || x.lineWrapping && Math.abs(L - this.contentDOMWidth) > x.charWidth) {
				let { lineHeight: b, charWidth: w, textHeight: E } = _.docView.measureTextSize();
				C = b > 0 && x.refresh(S, b, w, E, L / w, y), C && (_.docView.minWidth = 0, D |= 8);
			}
			P > 0 && F > 0 ? O = Math.max(P, F) : P < 0 && F < 0 && (O = Math.min(P, F)), x.heightChanged = !1;
			for (let b of this.viewports) {
				let S = b.from == this.viewport.from ? y : _.docView.measureVisibleLineHeights(b);
				this.heightMap = (C ? nl.empty().applyChanges(this.stateDeco, Mo.empty, this.heightOracle, [new Fc(0, 0, 0, _.state.doc.length)]) : this.heightMap).updateHeight(x, 0, C, new MeasuredHeights(b.from, S));
			}
			x.heightChanged && (D |= 2);
		}
		let R = !this.viewportIsAppropriate(this.viewport, O) || this.scrollTarget && (this.scrollTarget.range.head < this.viewport.from || this.scrollTarget.range.head > this.viewport.to);
		return R && (this.viewport = this.getViewport(O, this.scrollTarget)), this.updateForViewport(), (D & 2 || R) && this.updateViewportLines(), (this.lineGaps.length || this.viewport.to - this.viewport.from > 4e3) && this.updateLineGaps(this.ensureLineGaps(C ? [] : this.lineGaps, _)), D |= this.computeVisibleRanges(), this.mustEnforceCursorAssoc && (this.mustEnforceCursorAssoc = !1, _.docView.enforceCursorAssoc()), D;
	}
	get visibleTop() {
		return this.scaler.fromDOM(this.pixelViewport.top);
	}
	get visibleBottom() {
		return this.scaler.fromDOM(this.pixelViewport.bottom);
	}
	getViewport(_, y) {
		let b = .5 - Math.max(-.5, Math.min(.5, _ / 1e3 / 2)), x = this.heightMap, S = this.heightOracle, { visibleTop: C, visibleBottom: w } = this, E = new Viewport(x.lineAt(C - b * 1e3, el.ByHeight, S, 0, 0).from, x.lineAt(w + (1 - b) * 1e3, el.ByHeight, S, 0, 0).to);
		if (y) {
			let { head: _ } = y.range;
			if (_ < E.from || _ > E.to) {
				let b = Math.min(this.editorHeight, this.pixelViewport.bottom - this.pixelViewport.top), C = x.lineAt(_, el.ByPos, S, 0, 0), w;
				w = y.y == `center` ? (C.top + C.bottom) / 2 - b / 2 : y.y == `start` || y.y == `nearest` && _ < E.from ? C.top : C.bottom - b, E = new Viewport(x.lineAt(w - 1e3 / 2, el.ByHeight, S, 0, 0).from, x.lineAt(w + b + 1e3 / 2, el.ByHeight, S, 0, 0).to);
			}
		}
		return E;
	}
	mapViewport(_, y) {
		let b = y.mapPos(_.from, -1), x = y.mapPos(_.to, 1);
		return new Viewport(this.heightMap.lineAt(b, el.ByPos, this.heightOracle, 0, 0).from, this.heightMap.lineAt(x, el.ByPos, this.heightOracle, 0, 0).to);
	}
	viewportIsAppropriate({ from: _, to: y }, b = 0) {
		if (!this.inView) return !0;
		let { top: x } = this.heightMap.lineAt(_, el.ByPos, this.heightOracle, 0, 0), { bottom: S } = this.heightMap.lineAt(y, el.ByPos, this.heightOracle, 0, 0), { visibleTop: C, visibleBottom: w } = this;
		return (_ == 0 || x <= C - Math.max(10, Math.min(-b, 250))) && (y == this.state.doc.length || S >= w + Math.max(10, Math.min(b, 250))) && x > C - 2 * 1e3 && S < w + 2 * 1e3;
	}
	mapLineGaps(_, y) {
		if (!_.length || y.empty) return _;
		let b = [];
		for (let x of _) y.touchesRange(x.from, x.to) || b.push(new LineGap(y.mapPos(x.from), y.mapPos(x.to), x.size));
		return b;
	}
	ensureLineGaps(_, y) {
		let b = this.heightOracle.lineWrapping, x = b ? 1e4 : 2e3, S = x >> 1, C = x << 1;
		if (this.defaultTextDirection != tc.LTR && !b) return [];
		let w = [], addGap = (x, C, E, D) => {
			if (C - x < S) return;
			let O = this.state.selection.main, k = [O.from];
			O.empty || k.push(O.to);
			for (let _ of k) if (_ > x && _ < C) {
				addGap(x, _ - 10, E, D), addGap(_ + 10, C, E, D);
				return;
			}
			let A = find(_, (_) => _.from >= E.from && _.to <= E.to && Math.abs(_.from - x) < S && Math.abs(_.to - C) < S && !k.some((y) => _.from < y && _.to > y));
			if (!A) {
				if (C < E.to && y && b && y.visibleRanges.some((_) => _.from <= C && _.to >= C)) {
					let _ = y.moveToLineBoundary(J.cursor(C), !1, !0).head;
					_ > x && (C = _);
				}
				A = new LineGap(x, C, this.gapSize(E, x, C, D));
			}
			w.push(A);
		};
		for (let _ of this.viewportLines) {
			if (_.length < C) continue;
			let y = lineStructure(_.from, _.to, this.stateDeco);
			if (y.total < C) continue;
			let S = this.scrollTarget ? this.scrollTarget.range.head : null, w, E;
			if (b) {
				let b = x / this.heightOracle.lineLength * this.heightOracle.lineHeight, C, D;
				if (S != null) {
					let x = findFraction(y, S), w = ((this.visibleBottom - this.visibleTop) / 2 + b) / _.height;
					C = x - w, D = x + w;
				} else C = (this.visibleTop - _.top - b) / _.height, D = (this.visibleBottom - _.top + b) / _.height;
				w = findPosition(y, C), E = findPosition(y, D);
			} else {
				let _ = y.total * this.heightOracle.charWidth, b = x * this.heightOracle.charWidth, C, D;
				if (S != null) {
					let x = findFraction(y, S), w = ((this.pixelViewport.right - this.pixelViewport.left) / 2 + b) / _;
					C = x - w, D = x + w;
				} else C = (this.pixelViewport.left - b) / _, D = (this.pixelViewport.right + b) / _;
				w = findPosition(y, C), E = findPosition(y, D);
			}
			w > _.from && addGap(_.from, w, _, y), E < _.to && addGap(E, _.to, _, y);
		}
		return w;
	}
	gapSize(_, y, b, x) {
		let S = findFraction(x, b) - findFraction(x, y);
		return this.heightOracle.lineWrapping ? _.height * S : x.total * this.heightOracle.charWidth * S;
	}
	updateLineGaps(_) {
		LineGap.same(_, this.lineGaps) || (this.lineGaps = _, this.lineGapDeco = Decoration.set(_.map((_) => _.draw(this, this.heightOracle.lineWrapping))));
	}
	computeVisibleRanges() {
		let _ = this.stateDeco;
		this.lineGaps.length && (_ = _.concat(this.lineGapDeco));
		let y = [];
		fs.spans(_, this.viewport.from, this.viewport.to, {
			span(_, b) {
				y.push({
					from: _,
					to: b
				});
			},
			point() {}
		}, 20);
		let b = y.length != this.visibleRanges.length || this.visibleRanges.some((_, b) => _.from != y[b].from || _.to != y[b].to);
		return this.visibleRanges = y, b ? 4 : 0;
	}
	lineBlockAt(_) {
		return _ >= this.viewport.from && _ <= this.viewport.to && this.viewportLines.find((y) => y.from <= _ && y.to >= _) || scaleBlock(this.heightMap.lineAt(_, el.ByPos, this.heightOracle, 0, 0), this.scaler);
	}
	lineBlockAtHeight(_) {
		return scaleBlock(this.heightMap.lineAt(this.scaler.fromDOM(_), el.ByHeight, this.heightOracle, 0, 0), this.scaler);
	}
	scrollAnchorAt(_) {
		let y = this.lineBlockAtHeight(_ + 8);
		return y.from >= this.viewport.from || this.viewportLines[0].top - _ > 200 ? y : this.viewportLines[0];
	}
	elementAtHeight(_) {
		return scaleBlock(this.heightMap.blockAt(this.scaler.fromDOM(_), this.heightOracle, 0, 0), this.scaler);
	}
	get docHeight() {
		return this.scaler.toDOM(this.heightMap.height);
	}
	get contentHeight() {
		return this.docHeight + this.paddingTop + this.paddingBottom;
	}
}, Viewport = class {
	constructor(_, y) {
		this.from = _, this.to = y;
	}
};
function lineStructure(_, y, b) {
	let x = [], S = _, C = 0;
	return fs.spans(b, _, y, {
		span() {},
		point(_, y) {
			_ > S && (x.push({
				from: S,
				to: _
			}), C += _ - S), S = y;
		}
	}, 20), S < y && (x.push({
		from: S,
		to: y
	}), C += y - S), {
		total: C,
		ranges: x
	};
}
function findPosition({ total: _, ranges: y }, b) {
	if (b <= 0) return y[0].from;
	if (b >= 1) return y[y.length - 1].to;
	let x = Math.floor(_ * b);
	for (let _ = 0;; _++) {
		let { from: b, to: S } = y[_], C = S - b;
		if (x <= C) return b + x;
		x -= C;
	}
}
function findFraction(_, y) {
	let b = 0;
	for (let { from: x, to: S } of _.ranges) {
		if (y <= S) {
			b += y - x;
			break;
		}
		b += S - x;
	}
	return b / _.total;
}
function find(_, y) {
	for (let b of _) if (y(b)) return b;
}
var sl = {
	toDOM(_) {
		return _;
	},
	fromDOM(_) {
		return _;
	},
	scale: 1
}, BigScaler = class {
	constructor(_, y, b) {
		let x = 0, S = 0, C = 0;
		this.viewports = b.map(({ from: b, to: S }) => {
			let C = y.lineAt(b, el.ByPos, _, 0, 0).top, w = y.lineAt(S, el.ByPos, _, 0, 0).bottom;
			return x += w - C, {
				from: b,
				to: S,
				top: C,
				bottom: w,
				domTop: 0,
				domBottom: 0
			};
		}), this.scale = (7e6 - x) / (y.height - x);
		for (let _ of this.viewports) _.domTop = C + (_.top - S) * this.scale, C = _.domBottom = _.domTop + (_.bottom - _.top), S = _.bottom;
	}
	toDOM(_) {
		for (let y = 0, b = 0, x = 0;; y++) {
			let S = y < this.viewports.length ? this.viewports[y] : null;
			if (!S || _ < S.top) return x + (_ - b) * this.scale;
			if (_ <= S.bottom) return S.domTop + (_ - S.top);
			b = S.bottom, x = S.domBottom;
		}
	}
	fromDOM(_) {
		for (let y = 0, b = 0, x = 0;; y++) {
			let S = y < this.viewports.length ? this.viewports[y] : null;
			if (!S || _ < S.domTop) return b + (_ - x) / this.scale;
			if (_ <= S.domBottom) return S.top + (_ - S.domTop);
			b = S.bottom, x = S.domBottom;
		}
	}
};
function scaleBlock(_, y) {
	if (y.scale == 1) return _;
	let b = y.toDOM(_.top), x = y.toDOM(_.bottom);
	return new $c(_.from, _.length, b, x - b, Array.isArray(_._content) ? _._content.map((_) => scaleBlock(_, y)) : _._content);
}
var cl = Y.define({ combine: (_) => _.join(` `) }), ll = Y.define({ combine: (_) => _.indexOf(!0) > -1 }), ul = StyleModule.newName(), dl = StyleModule.newName(), fl = StyleModule.newName(), pl = {
	"&light": `.` + dl,
	"&dark": `.` + fl
};
function buildTheme(_, y, b) {
	return new StyleModule(y, { finish(y) {
		return /&/.test(y) ? y.replace(/&\w*/, (y) => {
			if (y == `&`) return _;
			if (!b || !b[y]) throw RangeError(`Unsupported selector: ${y}`);
			return b[y];
		}) : _ + ` ` + y;
	} });
}
var ml = buildTheme(`.` + ul, {
	"&": {
		position: `relative !important`,
		boxSizing: `border-box`,
		"&.cm-focused": { outline: `1px dotted #212121` },
		display: `flex !important`,
		flexDirection: `column`
	},
	".cm-scroller": {
		display: `flex !important`,
		alignItems: `flex-start !important`,
		fontFamily: `monospace`,
		lineHeight: 1.4,
		height: `100%`,
		overflowX: `auto`,
		position: `relative`,
		zIndex: 0
	},
	".cm-content": {
		margin: 0,
		flexGrow: 2,
		flexShrink: 0,
		display: `block`,
		whiteSpace: `pre`,
		wordWrap: `normal`,
		boxSizing: `border-box`,
		minHeight: `100%`,
		padding: `4px 0`,
		outline: `none`,
		"&[contenteditable=true]": { WebkitUserModify: `read-write-plaintext-only` }
	},
	".cm-lineWrapping": {
		whiteSpace_fallback: `pre-wrap`,
		whiteSpace: `break-spaces`,
		wordBreak: `break-word`,
		overflowWrap: `anywhere`,
		flexShrink: 1
	},
	"&light .cm-content": { caretColor: `black` },
	"&dark .cm-content": { caretColor: `white` },
	".cm-line": {
		display: `block`,
		padding: `0 2px 0 6px`
	},
	".cm-layer": {
		position: `absolute`,
		left: 0,
		top: 0,
		contain: `size style`,
		"& > *": { position: `absolute` }
	},
	"&light .cm-selectionBackground": { background: `#d9d9d9` },
	"&dark .cm-selectionBackground": { background: `#222` },
	"&light.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: `#d7d4f0` },
	"&dark.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground": { background: `#233` },
	".cm-cursorLayer": { pointerEvents: `none` },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer": { animation: `steps(1) cm-blink 1.2s infinite` },
	"@keyframes cm-blink": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	"@keyframes cm-blink2": {
		"0%": {},
		"50%": { opacity: 0 },
		"100%": {}
	},
	".cm-cursor, .cm-dropCursor": {
		borderLeft: `1.2px solid black`,
		marginLeft: `-0.6px`,
		pointerEvents: `none`
	},
	".cm-cursor": { display: `none` },
	"&dark .cm-cursor": { borderLeftColor: `#444` },
	".cm-dropCursor": { position: `absolute` },
	"&.cm-focused > .cm-scroller > .cm-cursorLayer .cm-cursor": { display: `block` },
	".cm-iso": { unicodeBidi: `isolate` },
	".cm-announced": {
		position: `fixed`,
		top: `-10000px`
	},
	"@media print": { ".cm-announced": { display: `none` } },
	"&light .cm-activeLine": { backgroundColor: `#cceeff44` },
	"&dark .cm-activeLine": { backgroundColor: `#99eeff33` },
	"&light .cm-specialChar": { color: `red` },
	"&dark .cm-specialChar": { color: `#f78` },
	".cm-gutters": {
		flexShrink: 0,
		display: `flex`,
		height: `100%`,
		boxSizing: `border-box`,
		insetInlineStart: 0,
		zIndex: 200
	},
	"&light .cm-gutters": {
		backgroundColor: `#f5f5f5`,
		color: `#6c6c6c`,
		borderRight: `1px solid #ddd`
	},
	"&dark .cm-gutters": {
		backgroundColor: `#333338`,
		color: `#ccc`
	},
	".cm-gutter": {
		display: `flex !important`,
		flexDirection: `column`,
		flexShrink: 0,
		boxSizing: `border-box`,
		minHeight: `100%`,
		overflow: `hidden`
	},
	".cm-gutterElement": { boxSizing: `border-box` },
	".cm-lineNumbers .cm-gutterElement": {
		padding: `0 3px 0 5px`,
		minWidth: `20px`,
		textAlign: `right`,
		whiteSpace: `nowrap`
	},
	"&light .cm-activeLineGutter": { backgroundColor: `#e2f2ff` },
	"&dark .cm-activeLineGutter": { backgroundColor: `#222227` },
	".cm-panels": {
		boxSizing: `border-box`,
		position: `sticky`,
		left: 0,
		right: 0
	},
	"&light .cm-panels": {
		backgroundColor: `#f5f5f5`,
		color: `black`
	},
	"&light .cm-panels-top": { borderBottom: `1px solid #ddd` },
	"&light .cm-panels-bottom": { borderTop: `1px solid #ddd` },
	"&dark .cm-panels": {
		backgroundColor: `#333338`,
		color: `white`
	},
	".cm-tab": {
		display: `inline-block`,
		overflow: `hidden`,
		verticalAlign: `bottom`
	},
	".cm-widgetBuffer": {
		verticalAlign: `text-top`,
		height: `1em`,
		width: 0,
		display: `inline`
	},
	".cm-placeholder": {
		color: `#888`,
		display: `inline-block`,
		verticalAlign: `top`
	},
	".cm-highlightSpace:before": {
		content: `attr(data-display)`,
		position: `absolute`,
		pointerEvents: `none`,
		color: `#888`
	},
	".cm-highlightTab": {
		backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="20"><path stroke="%23888" stroke-width="1" fill="none" d="M1 10H196L190 5M190 15L196 10M197 4L197 16"/></svg>')`,
		backgroundSize: `auto 100%`,
		backgroundPosition: `right 90%`,
		backgroundRepeat: `no-repeat`
	},
	".cm-trailingSpace": { backgroundColor: `#ff332255` },
	".cm-button": {
		verticalAlign: `middle`,
		color: `inherit`,
		fontSize: `70%`,
		padding: `.2em 1em`,
		borderRadius: `1px`
	},
	"&light .cm-button": {
		backgroundImage: `linear-gradient(#eff1f5, #d9d9df)`,
		border: `1px solid #888`,
		"&:active": { backgroundImage: `linear-gradient(#b4b4b4, #d0d3d6)` }
	},
	"&dark .cm-button": {
		backgroundImage: `linear-gradient(#393939, #111)`,
		border: `1px solid #888`,
		"&:active": { backgroundImage: `linear-gradient(#111, #333)` }
	},
	".cm-textfield": {
		verticalAlign: `middle`,
		color: `inherit`,
		fontSize: `70%`,
		border: `1px solid silver`,
		padding: `.2em .5em`
	},
	"&light .cm-textfield": { backgroundColor: `white` },
	"&dark .cm-textfield": {
		border: `1px solid #555`,
		backgroundColor: `inherit`
	}
}, pl), hl = `￿`, DOMReader = class {
	constructor(_, y) {
		this.points = _, this.text = ``, this.lineSeparator = y.facet(ls.lineSeparator);
	}
	append(_) {
		this.text += _;
	}
	lineBreak() {
		this.text += hl;
	}
	readRange(_, y) {
		if (!_) return this;
		let b = _.parentNode;
		for (let x = _;;) {
			this.findPointBefore(b, x);
			let _ = this.text.length;
			this.readNode(x);
			let S = x.nextSibling;
			if (S == y) break;
			let C = As.get(x), w = As.get(S);
			(C && w ? C.breakAfter : (C ? C.breakAfter : isBlockElement(x)) || isBlockElement(S) && (x.nodeName != `BR` || x.cmIgnore) && this.text.length > _) && this.lineBreak(), x = S;
		}
		return this.findPointBefore(b, y), this;
	}
	readTextNode(_) {
		let y = _.nodeValue;
		for (let b of this.points) b.node == _ && (b.pos = this.text.length + Math.min(b.offset, y.length));
		for (let b = 0, x = this.lineSeparator ? null : /\r\n?|\n/g;;) {
			let S = -1, C = 1, w;
			if (this.lineSeparator ? (S = y.indexOf(this.lineSeparator, b), C = this.lineSeparator.length) : (w = x.exec(y)) && (S = w.index, C = w[0].length), this.append(y.slice(b, S < 0 ? y.length : S)), S < 0) break;
			if (this.lineBreak(), C > 1) for (let y of this.points) y.node == _ && y.pos > this.text.length && (y.pos -= C - 1);
			b = S + C;
		}
	}
	readNode(_) {
		if (_.cmIgnore) return;
		let y = As.get(_), b = y && y.overrideDOMText;
		if (b != null) {
			this.findPointInside(_, b.length);
			for (let _ = b.iter(); !_.next().done;) _.lineBreak ? this.lineBreak() : this.append(_.value);
		} else _.nodeType == 3 ? this.readTextNode(_) : _.nodeName == `BR` ? _.nextSibling && this.lineBreak() : _.nodeType == 1 && this.readRange(_.firstChild, null);
	}
	findPointBefore(_, y) {
		for (let b of this.points) b.node == _ && _.childNodes[b.offset] == y && (b.pos = this.text.length);
	}
	findPointInside(_, y) {
		for (let b of this.points) (_.nodeType == 3 ? b.node == _ : _.contains(b.node)) && (b.pos = this.text.length + (isAtEnd(_, b.node, b.offset) ? y : 0));
	}
};
function isAtEnd(_, y, b) {
	for (;;) {
		if (!y || b < maxOffset(y)) return !1;
		if (y == _) return !0;
		b = domIndex(y) + 1, y = y.parentNode;
	}
}
var DOMPoint = class {
	constructor(_, y) {
		this.node = _, this.offset = y, this.pos = -1;
	}
}, DOMChange = class {
	constructor(_, y, b, x) {
		this.typeOver = x, this.bounds = null, this.text = ``;
		let { impreciseHead: S, impreciseAnchor: C } = _.docView;
		if (_.state.readOnly && y > -1) this.newSel = null;
		else if (y > -1 && (this.bounds = _.docView.domBoundsAround(y, b, 0))) {
			let y = S || C ? [] : selectionPoints(_), b = new DOMReader(y, _.state);
			b.readRange(this.bounds.startDOM, this.bounds.endDOM), this.text = b.text, this.newSel = selectionFromPoints(y, this.bounds.from);
		} else {
			let y = _.observer.selectionRange, b = S && S.node == y.focusNode && S.offset == y.focusOffset || !contains(_.contentDOM, y.focusNode) ? _.state.selection.main.head : _.docView.posFromDOM(y.focusNode, y.focusOffset), x = C && C.node == y.anchorNode && C.offset == y.anchorOffset || !contains(_.contentDOM, y.anchorNode) ? _.state.selection.main.anchor : _.docView.posFromDOM(y.anchorNode, y.anchorOffset), w = _.viewport;
			if ((X.ios || X.chrome) && _.state.selection.main.empty && b != x && (w.from > 0 || w.to < _.state.doc.length)) {
				let y = Math.min(b, x), S = Math.max(b, x), C = w.from - y, E = w.to - S;
				(C == 0 || C == 1 || y == 0) && (E == 0 || E == -1 || S == _.state.doc.length) && (b = 0, x = _.state.doc.length);
			}
			this.newSel = J.single(x, b);
		}
	}
};
function applyDOMChange(_, y) {
	let b, { newSel: x } = y, S = _.state.selection.main, C = _.inputState.lastKeyTime > Date.now() - 100 ? _.inputState.lastKeyCode : -1;
	if (y.bounds) {
		let { from: x, to: w } = y.bounds, E = S.from, D = null;
		(C === 8 || X.android && y.text.length < w - x) && (E = S.to, D = `end`);
		let O = findDiff(_.state.doc.sliceString(x, w, hl), y.text, E - x, D);
		O && (X.chrome && C == 13 && O.toB == O.from + 2 && y.text.slice(O.from, O.toB) == `￿￿` && O.toB--, b = {
			from: x + O.from,
			to: x + O.toA,
			insert: Mo.of(y.text.slice(O.from, O.toB).split(hl))
		});
	} else x && (!_.hasFocus && _.state.facet(Cc) || x.main.eq(S)) && (x = null);
	if (!b && !x) return !1;
	if (!b && y.typeOver && !S.empty && x && x.main.empty ? b = {
		from: S.from,
		to: S.to,
		insert: _.state.doc.slice(S.from, S.to)
	} : b && b.from >= S.from && b.to <= S.to && (b.from != S.from || b.to != S.to) && S.to - S.from - (b.to - b.from) <= 4 ? b = {
		from: S.from,
		to: S.to,
		insert: _.state.doc.slice(S.from, b.from).append(b.insert).append(_.state.doc.slice(b.to, S.to))
	} : (X.mac || X.android) && b && b.from == b.to && b.from == S.head - 1 && /^\. ?$/.test(b.insert.toString()) && _.contentDOM.getAttribute(`autocorrect`) == `off` ? (x && b.insert.length == 2 && (x = J.single(x.main.anchor - 1, x.main.head - 1)), b = {
		from: S.from,
		to: S.to,
		insert: Mo.of([` `])
	}) : X.chrome && b && b.from == b.to && b.from == S.head && b.insert.toString() == `
 ` && _.lineWrapping && (x &&= J.single(x.main.anchor - 1, x.main.head - 1), b = {
		from: S.from,
		to: S.to,
		insert: Mo.of([` `])
	}), b) {
		if (X.ios && _.inputState.flushIOSKey(b) || X.android && (b.to == S.to && (b.from == S.from || b.from == S.from - 1 && _.state.sliceDoc(b.from, S.from) == ` `) && b.insert.length == 1 && b.insert.lines == 2 && dispatchKey(_.contentDOM, `Enter`, 13) || (b.from == S.from - 1 && b.to == S.to && b.insert.length == 0 || C == 8 && b.insert.length < b.to - b.from && b.to > S.head) && dispatchKey(_.contentDOM, `Backspace`, 8) || b.from == S.from && b.to == S.to + 1 && b.insert.length == 0 && dispatchKey(_.contentDOM, `Delete`, 46))) return !0;
		let y = b.insert.toString();
		_.inputState.composing >= 0 && _.inputState.composing++;
		let w, defaultInsert = () => w ||= applyDefaultInsert(_, b, x);
		return _.state.facet(gc).some((x) => x(_, b.from, b.to, y, defaultInsert)) || _.dispatch(defaultInsert()), !0;
	} else if (x && !x.main.eq(S)) {
		let y = !1, b = `select`;
		return _.inputState.lastSelectionTime > Date.now() - 50 && (_.inputState.lastSelectionOrigin == `select` && (y = !0), b = _.inputState.lastSelectionOrigin), _.dispatch({
			selection: x,
			scrollIntoView: y,
			userEvent: b
		}), !0;
	} else return !1;
}
function applyDefaultInsert(_, y, b) {
	let x, S = _.state, C = S.selection.main;
	if (y.from >= C.from && y.to <= C.to && y.to - y.from >= (C.to - C.from) / 3 && (!b || b.main.empty && b.main.from == y.from + y.insert.length) && _.inputState.composing < 0) {
		let b = C.from < y.from ? S.sliceDoc(C.from, y.from) : ``, w = C.to > y.to ? S.sliceDoc(y.to, C.to) : ``;
		x = S.replaceSelection(_.state.toText(b + y.insert.sliceString(0, void 0, _.state.lineBreak) + w));
	} else {
		let w = S.changes(y), E = b && b.main.to <= w.newLength ? b.main : void 0;
		if (S.selection.ranges.length > 1 && _.inputState.composing >= 0 && y.to <= C.to && y.to >= C.to - 10) {
			let D = _.state.sliceDoc(y.from, y.to), O, k = b && findCompositionNode(_, b.main.head);
			if (k) {
				let _ = y.insert.length - (y.to - y.from);
				O = {
					from: k.from,
					to: k.to - _
				};
			} else O = _.state.doc.lineAt(C.head);
			let A = C.to - y.to, j = C.to - C.from;
			x = S.changeByRange((b) => {
				if (b.from == C.from && b.to == C.to) return {
					changes: w,
					range: E || b.map(w)
				};
				let x = b.to - A, k = x - D.length;
				if (b.to - b.from != j || _.state.sliceDoc(k, x) != D || b.to >= O.from && b.from <= O.to) return { range: b };
				let N = S.changes({
					from: k,
					to: x,
					insert: y.insert
				}), P = b.to - C.to;
				return {
					changes: N,
					range: E ? J.range(Math.max(0, E.anchor + P), Math.max(0, E.head + P)) : b.map(N)
				};
			});
		} else x = {
			changes: w,
			selection: E && S.selection.replaceRange(E)
		};
	}
	let w = `input.type`;
	return (_.composing || _.inputState.compositionPendingChange && _.inputState.compositionEndedAt > Date.now() - 50) && (_.inputState.compositionPendingChange = !1, w += `.compose`, _.inputState.compositionFirstChange && (w += `.start`, _.inputState.compositionFirstChange = !1)), S.update(x, {
		userEvent: w,
		scrollIntoView: !0
	});
}
function findDiff(_, y, b, x) {
	let S = Math.min(_.length, y.length), C = 0;
	for (; C < S && _.charCodeAt(C) == y.charCodeAt(C);) C++;
	if (C == S && _.length == y.length) return null;
	let w = _.length, E = y.length;
	for (; w > 0 && E > 0 && _.charCodeAt(w - 1) == y.charCodeAt(E - 1);) w--, E--;
	if (x == `end`) {
		let _ = Math.max(0, C - Math.min(w, E));
		b -= w + _ - C;
	}
	if (w < C && _.length < y.length) {
		let _ = b <= C && b >= w ? C - b : 0;
		C -= _, E = C + (E - w), w = C;
	} else if (E < C) {
		let _ = b <= C && b >= E ? C - b : 0;
		C -= _, w = C + (w - E), E = C;
	}
	return {
		from: C,
		toA: w,
		toB: E
	};
}
function selectionPoints(_) {
	let y = [];
	if (_.root.activeElement != _.contentDOM) return y;
	let { anchorNode: b, anchorOffset: x, focusNode: S, focusOffset: C } = _.observer.selectionRange;
	return b && (y.push(new DOMPoint(b, x)), (S != b || C != x) && y.push(new DOMPoint(S, C))), y;
}
function selectionFromPoints(_, y) {
	if (_.length == 0) return null;
	let b = _[0].pos, x = _.length == 2 ? _[1].pos : b;
	return b > -1 && x > -1 ? J.single(b + y, x + y) : null;
}
var gl = {
	childList: !0,
	characterData: !0,
	subtree: !0,
	attributes: !0,
	characterDataOldValue: !0
}, _l = X.ie && X.ie_version <= 11, DOMObserver = class {
	constructor(_) {
		this.view = _, this.active = !1, this.selectionRange = new DOMSelectionState(), this.selectionChanged = !1, this.delayedFlush = -1, this.resizeTimeout = -1, this.queue = [], this.delayedAndroidKey = null, this.flushingAndroidKey = -1, this.lastChange = 0, this.scrollTargets = [], this.intersection = null, this.resizeScroll = null, this.intersecting = !1, this.gapIntersection = null, this.gaps = [], this.printQuery = null, this.parentCheck = -1, this.dom = _.contentDOM, this.observer = new MutationObserver((y) => {
			for (let _ of y) this.queue.push(_);
			(X.ie && X.ie_version <= 11 || X.ios && _.composing) && y.some((_) => _.type == `childList` && _.removedNodes.length || _.type == `characterData` && _.oldValue.length > _.target.nodeValue.length) ? this.flushSoon() : this.flush();
		}), _l && (this.onCharData = (_) => {
			this.queue.push({
				target: _.target,
				type: `characterData`,
				oldValue: _.prevValue
			}), this.flushSoon();
		}), this.onSelectionChange = this.onSelectionChange.bind(this), this.onResize = this.onResize.bind(this), this.onPrint = this.onPrint.bind(this), this.onScroll = this.onScroll.bind(this), window.matchMedia && (this.printQuery = window.matchMedia(`print`)), typeof ResizeObserver == `function` && (this.resizeScroll = new ResizeObserver(() => {
			this.view.docView?.lastUpdate < Date.now() - 75 && this.onResize();
		}), this.resizeScroll.observe(_.scrollDOM)), this.addWindowListeners(this.win = _.win), this.start(), typeof IntersectionObserver == `function` && (this.intersection = new IntersectionObserver((_) => {
			this.parentCheck < 0 && (this.parentCheck = setTimeout(this.listenForScroll.bind(this), 1e3)), _.length > 0 && _[_.length - 1].intersectionRatio > 0 != this.intersecting && (this.intersecting = !this.intersecting, this.intersecting != this.view.inView && this.onScrollChanged(document.createEvent(`Event`)));
		}, { threshold: [0, .001] }), this.intersection.observe(this.dom), this.gapIntersection = new IntersectionObserver((_) => {
			_.length > 0 && _[_.length - 1].intersectionRatio > 0 && this.onScrollChanged(document.createEvent(`Event`));
		}, {})), this.listenForScroll(), this.readSelectionRange();
	}
	onScrollChanged(_) {
		this.view.inputState.runHandlers(`scroll`, _), this.intersecting && this.view.measure();
	}
	onScroll(_) {
		this.intersecting && this.flush(!1), this.onScrollChanged(_);
	}
	onResize() {
		this.resizeTimeout < 0 && (this.resizeTimeout = setTimeout(() => {
			this.resizeTimeout = -1, this.view.requestMeasure();
		}, 50));
	}
	onPrint(_) {
		_.type == `change` && !_.matches || (this.view.viewState.printing = !0, this.view.measure(), setTimeout(() => {
			this.view.viewState.printing = !1, this.view.requestMeasure();
		}, 500));
	}
	updateGaps(_) {
		if (this.gapIntersection && (_.length != this.gaps.length || this.gaps.some((y, b) => y != _[b]))) {
			this.gapIntersection.disconnect();
			for (let y of _) this.gapIntersection.observe(y);
			this.gaps = _;
		}
	}
	onSelectionChange(_) {
		let y = this.selectionChanged;
		if (!this.readSelectionRange() || this.delayedAndroidKey) return;
		let { view: b } = this, x = this.selectionRange;
		if (b.state.facet(Cc) ? b.root.activeElement != this.dom : !hasSelection(b.dom, x)) return;
		let S = x.anchorNode && b.docView.nearest(x.anchorNode);
		if (S && S.ignoreEvent(_)) {
			y || (this.selectionChanged = !1);
			return;
		}
		(X.ie && X.ie_version <= 11 || X.android && X.chrome) && !b.state.selection.main.empty && x.focusNode && isEquivalentPosition(x.focusNode, x.focusOffset, x.anchorNode, x.anchorOffset) ? this.flushSoon() : this.flush(!1);
	}
	readSelectionRange() {
		let { view: _ } = this, y = getSelection(_.root);
		if (!y) return !1;
		let b = X.safari && _.root.nodeType == 11 && deepActiveElement(this.dom.ownerDocument) == this.dom && safariSelectionRangeHack(this.view, y) || y;
		if (!b || this.selectionRange.eq(b)) return !1;
		let x = hasSelection(this.dom, b);
		return x && !this.selectionChanged && _.inputState.lastFocusTime > Date.now() - 200 && _.inputState.lastTouchTime < Date.now() - 300 && atElementStart(this.dom, b) ? (this.view.inputState.lastFocusTime = 0, _.docView.updateSelection(), !1) : (this.selectionRange.setRange(b), x && (this.selectionChanged = !0), !0);
	}
	setSelectionRange(_, y) {
		this.selectionRange.set(_.node, _.offset, y.node, y.offset), this.selectionChanged = !1;
	}
	clearSelectionRange() {
		this.selectionRange.set(null, 0, null, 0);
	}
	listenForScroll() {
		this.parentCheck = -1;
		let _ = 0, y = null;
		for (let b = this.dom; b;) if (b.nodeType == 1) !y && _ < this.scrollTargets.length && this.scrollTargets[_] == b ? _++ : y ||= this.scrollTargets.slice(0, _), y && y.push(b), b = b.assignedSlot || b.parentNode;
		else if (b.nodeType == 11) b = b.host;
		else break;
		if (_ < this.scrollTargets.length && !y && (y = this.scrollTargets.slice(0, _)), y) {
			for (let _ of this.scrollTargets) _.removeEventListener(`scroll`, this.onScroll);
			for (let _ of this.scrollTargets = y) _.addEventListener(`scroll`, this.onScroll);
		}
	}
	ignore(_) {
		if (!this.active) return _();
		try {
			return this.stop(), _();
		} finally {
			this.start(), this.clear();
		}
	}
	start() {
		this.active ||= (this.observer.observe(this.dom, gl), _l && this.dom.addEventListener(`DOMCharacterDataModified`, this.onCharData), !0);
	}
	stop() {
		this.active && (this.active = !1, this.observer.disconnect(), _l && this.dom.removeEventListener(`DOMCharacterDataModified`, this.onCharData));
	}
	clear() {
		this.processRecords(), this.queue.length = 0, this.selectionChanged = !1;
	}
	delayAndroidKey(_, y) {
		if (!this.delayedAndroidKey) {
			let flush = () => {
				let _ = this.delayedAndroidKey;
				_ && (this.clearDelayedAndroidKey(), this.view.inputState.lastKeyCode = _.keyCode, this.view.inputState.lastKeyTime = Date.now(), !this.flush() && _.force && dispatchKey(this.dom, _.key, _.keyCode));
			};
			this.flushingAndroidKey = this.view.win.requestAnimationFrame(flush);
		}
		(!this.delayedAndroidKey || _ == `Enter`) && (this.delayedAndroidKey = {
			key: _,
			keyCode: y,
			force: this.lastChange < Date.now() - 50 || !!this.delayedAndroidKey?.force
		});
	}
	clearDelayedAndroidKey() {
		this.win.cancelAnimationFrame(this.flushingAndroidKey), this.delayedAndroidKey = null, this.flushingAndroidKey = -1;
	}
	flushSoon() {
		this.delayedFlush < 0 && (this.delayedFlush = this.view.win.requestAnimationFrame(() => {
			this.delayedFlush = -1, this.flush();
		}));
	}
	forceFlush() {
		this.delayedFlush >= 0 && (this.view.win.cancelAnimationFrame(this.delayedFlush), this.delayedFlush = -1), this.flush();
	}
	pendingRecords() {
		for (let _ of this.observer.takeRecords()) this.queue.push(_);
		return this.queue;
	}
	processRecords() {
		let _ = this.pendingRecords();
		_.length && (this.queue = []);
		let y = -1, b = -1, x = !1;
		for (let S of _) {
			let _ = this.readMutation(S);
			_ && (_.typeOver && (x = !0), y == -1 ? {from: y, to: b} = _ : (y = Math.min(_.from, y), b = Math.max(_.to, b)));
		}
		return {
			from: y,
			to: b,
			typeOver: x
		};
	}
	readChange() {
		let { from: _, to: y, typeOver: b } = this.processRecords(), x = this.selectionChanged && hasSelection(this.dom, this.selectionRange);
		if (_ < 0 && !x) return null;
		_ > -1 && (this.lastChange = Date.now()), this.view.inputState.lastFocusTime = 0, this.selectionChanged = !1;
		let S = new DOMChange(this.view, _, y, b);
		return this.view.docView.domChanged = { newSel: S.newSel ? S.newSel.main : null }, S;
	}
	flush(_ = !0) {
		if (this.delayedFlush >= 0 || this.delayedAndroidKey) return !1;
		_ && this.readSelectionRange();
		let y = this.readChange();
		if (!y) return this.view.requestMeasure(), !1;
		let b = this.view.state, x = applyDOMChange(this.view, y);
		return this.view.state == b && this.view.update([]), x;
	}
	readMutation(_) {
		let y = this.view.docView.nearest(_.target);
		if (!y || y.ignoreMutation(_)) return null;
		if (y.markDirty(_.type == `attributes`), _.type == `attributes` && (y.flags |= 4), _.type == `childList`) {
			let b = findChild(y, _.previousSibling || _.target.previousSibling, -1), x = findChild(y, _.nextSibling || _.target.nextSibling, 1);
			return {
				from: b ? y.posAfter(b) : y.posAtStart,
				to: x ? y.posBefore(x) : y.posAtEnd,
				typeOver: !1
			};
		} else if (_.type == `characterData`) return {
			from: y.posAtStart,
			to: y.posAtEnd,
			typeOver: _.target.nodeValue == _.oldValue
		};
		else return null;
	}
	setWindow(_) {
		_ != this.win && (this.removeWindowListeners(this.win), this.win = _, this.addWindowListeners(this.win));
	}
	addWindowListeners(_) {
		_.addEventListener(`resize`, this.onResize), this.printQuery ? this.printQuery.addEventListener(`change`, this.onPrint) : _.addEventListener(`beforeprint`, this.onPrint), _.addEventListener(`scroll`, this.onScroll), _.document.addEventListener(`selectionchange`, this.onSelectionChange);
	}
	removeWindowListeners(_) {
		_.removeEventListener(`scroll`, this.onScroll), _.removeEventListener(`resize`, this.onResize), this.printQuery ? this.printQuery.removeEventListener(`change`, this.onPrint) : _.removeEventListener(`beforeprint`, this.onPrint), _.document.removeEventListener(`selectionchange`, this.onSelectionChange);
	}
	destroy() {
		var _, y, b;
		this.stop(), (_ = this.intersection) == null || _.disconnect(), (y = this.gapIntersection) == null || y.disconnect(), (b = this.resizeScroll) == null || b.disconnect();
		for (let _ of this.scrollTargets) _.removeEventListener(`scroll`, this.onScroll);
		this.removeWindowListeners(this.win), clearTimeout(this.parentCheck), clearTimeout(this.resizeTimeout), this.win.cancelAnimationFrame(this.delayedFlush), this.win.cancelAnimationFrame(this.flushingAndroidKey);
	}
};
function findChild(_, y, b) {
	for (; y;) {
		let x = As.get(y);
		if (x && x.parent == _) return x;
		let S = y.parentNode;
		y = S == _.dom ? b > 0 ? y.nextSibling : y.previousSibling : S;
	}
	return null;
}
function buildSelectionRangeFromRange(_, y) {
	let b = y.startContainer, x = y.startOffset, S = y.endContainer, C = y.endOffset, w = _.docView.domAtPos(_.state.selection.main.anchor);
	return isEquivalentPosition(w.node, w.offset, S, C) && ([b, x, S, C] = [
		S,
		C,
		b,
		x
	]), {
		anchorNode: b,
		anchorOffset: x,
		focusNode: S,
		focusOffset: C
	};
}
function safariSelectionRangeHack(_, y) {
	if (y.getComposedRanges) {
		let b = y.getComposedRanges(_.root)[0];
		if (b) return buildSelectionRangeFromRange(_, b);
	}
	let b = null;
	function read(_) {
		_.preventDefault(), _.stopImmediatePropagation(), b = _.getTargetRanges()[0];
	}
	return _.contentDOM.addEventListener(`beforeinput`, read, !0), _.dom.ownerDocument.execCommand(`indent`), _.contentDOM.removeEventListener(`beforeinput`, read, !0), b ? buildSelectionRangeFromRange(_, b) : null;
}
var Z = class EditorView {
	get state() {
		return this.viewState.state;
	}
	get viewport() {
		return this.viewState.viewport;
	}
	get visibleRanges() {
		return this.viewState.visibleRanges;
	}
	get inView() {
		return this.viewState.inView;
	}
	get composing() {
		return this.inputState.composing > 0;
	}
	get compositionStarted() {
		return this.inputState.composing >= 0;
	}
	get root() {
		return this._root;
	}
	get win() {
		return this.dom.ownerDocument.defaultView || window;
	}
	constructor(_ = {}) {
		this.plugins = [], this.pluginMap = /* @__PURE__ */ new Map(), this.editorAttrs = {}, this.contentAttrs = {}, this.bidiCache = [], this.destroyed = !1, this.updateState = 2, this.measureScheduled = -1, this.measureRequests = [], this.contentDOM = document.createElement(`div`), this.scrollDOM = document.createElement(`div`), this.scrollDOM.tabIndex = -1, this.scrollDOM.className = `cm-scroller`, this.scrollDOM.appendChild(this.contentDOM), this.announceDOM = document.createElement(`div`), this.announceDOM.className = `cm-announced`, this.announceDOM.setAttribute(`aria-live`, `polite`), this.dom = document.createElement(`div`), this.dom.appendChild(this.announceDOM), this.dom.appendChild(this.scrollDOM), _.parent && _.parent.appendChild(this.dom);
		let { dispatch: y } = _;
		this.dispatchTransactions = _.dispatchTransactions || y && ((_) => _.forEach((_) => y(_, this))) || ((_) => this.update(_)), this.dispatch = this.dispatch.bind(this), this._root = _.root || getRoot(_.parent) || document, this.viewState = new ViewState(_.state || ls.create(_)), _.scrollTo && _.scrollTo.is(Sc) && (this.viewState.scrollTarget = _.scrollTo.value.clip(this.viewState.state)), this.plugins = this.state.facet(Tc).map((_) => new PluginInstance(_));
		for (let _ of this.plugins) _.update(this);
		this.observer = new DOMObserver(this), this.inputState = new InputState(this), this.inputState.ensureHandlers(this.plugins), this.docView = new DocView(this), this.mountStyles(), this.updateAttrs(), this.updateState = 0, this.requestMeasure();
	}
	dispatch(..._) {
		let y = _.length == 1 && _[0] instanceof rs ? _ : _.length == 1 && Array.isArray(_[0]) ? _[0] : [this.state.update(..._)];
		this.dispatchTransactions(y, this);
	}
	update(_) {
		if (this.updateState != 0) throw Error(`Calls to EditorView.update are not allowed while an update is in progress`);
		let y = !1, b = !1, x, S = this.state;
		for (let y of _) {
			if (y.startState != S) throw RangeError(`Trying to update state with a transaction that doesn't start from the previous state.`);
			S = y.state;
		}
		if (this.destroyed) {
			this.viewState.state = S;
			return;
		}
		let C = this.hasFocus, w = 0, E = null;
		_.some((_) => _.annotation(Xc)) ? (this.inputState.notifiedFocused = C, w = 1) : C != this.inputState.notifiedFocused && (this.inputState.notifiedFocused = C, E = focusChangeTransaction(S, C), E || (w = 1));
		let D = this.observer.delayedAndroidKey, O = null;
		if (D ? (this.observer.clearDelayedAndroidKey(), O = this.observer.readChange(), (O && !this.state.doc.eq(S.doc) || !this.state.selection.eq(S.selection)) && (O = null)) : this.observer.clear(), S.facet(ls.phrases) != this.state.facet(ls.phrases)) return this.setState(S);
		x = Ic.create(this, S, _), x.flags |= w;
		let k = this.viewState.scrollTarget;
		try {
			this.updateState = 2;
			for (let y of _) {
				if (k &&= k.map(y.changes), y.scrollIntoView) {
					let { main: _ } = y.state.selection;
					k = new xc(_.empty ? _ : J.cursor(_.head, _.head > _.anchor ? -1 : 1));
				}
				for (let _ of y.effects) _.is(Sc) && (k = _.value.clip(this.state));
			}
			this.viewState.update(x, k), this.bidiCache = bl.update(this.bidiCache, x.changes), x.empty || (this.updatePlugins(x), this.inputState.update(x)), y = this.docView.update(x), this.state.facet(Pc) != this.styleModules && this.mountStyles(), b = this.updateAttrs(), this.showAnnouncements(_), this.docView.updateSelection(y, _.some((_) => _.isUserEvent(`select.pointer`)));
		} finally {
			this.updateState = 0;
		}
		if (x.startState.facet(cl) != x.state.facet(cl) && (this.viewState.mustMeasureContent = !0), (y || b || k || this.viewState.mustEnforceCursorAssoc || this.viewState.mustMeasureContent) && this.requestMeasure(), y && this.docViewUpdate(), !x.empty) for (let _ of this.state.facet(hc)) try {
			_(x);
		} catch (_) {
			logException(this.state, _, `update listener`);
		}
		(E || O) && Promise.resolve().then(() => {
			E && this.state == E.startState && this.dispatch(E), O && !applyDOMChange(this, O) && D.force && dispatchKey(this.contentDOM, D.key, D.keyCode);
		});
	}
	setState(_) {
		if (this.updateState != 0) throw Error(`Calls to EditorView.setState are not allowed while an update is in progress`);
		if (this.destroyed) {
			this.viewState.state = _;
			return;
		}
		this.updateState = 2;
		let y = this.hasFocus;
		try {
			for (let _ of this.plugins) _.destroy(this);
			this.viewState = new ViewState(_), this.plugins = _.facet(Tc).map((_) => new PluginInstance(_)), this.pluginMap.clear();
			for (let _ of this.plugins) _.update(this);
			this.docView.destroy(), this.docView = new DocView(this), this.inputState.ensureHandlers(this.plugins), this.mountStyles(), this.updateAttrs(), this.bidiCache = [];
		} finally {
			this.updateState = 0;
		}
		y && this.focus(), this.requestMeasure();
	}
	updatePlugins(_) {
		let y = _.startState.facet(Tc), b = _.state.facet(Tc);
		if (y != b) {
			let x = [];
			for (let S of b) {
				let b = y.indexOf(S);
				if (b < 0) x.push(new PluginInstance(S));
				else {
					let y = this.plugins[b];
					y.mustUpdate = _, x.push(y);
				}
			}
			for (let y of this.plugins) y.mustUpdate != _ && y.destroy(this);
			this.plugins = x, this.pluginMap.clear();
		} else for (let y of this.plugins) y.mustUpdate = _;
		for (let _ = 0; _ < this.plugins.length; _++) this.plugins[_].update(this);
		y != b && this.inputState.ensureHandlers(this.plugins);
	}
	docViewUpdate() {
		for (let _ of this.plugins) {
			let y = _.value;
			if (y && y.docViewUpdate) try {
				y.docViewUpdate(this);
			} catch (_) {
				logException(this.state, _, `doc view update listener`);
			}
		}
	}
	measure(_ = !0) {
		if (this.destroyed) return;
		if (this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.observer.delayedAndroidKey) {
			this.measureScheduled = -1, this.requestMeasure();
			return;
		}
		this.measureScheduled = 0, _ && this.observer.forceFlush();
		let y = null, b = this.scrollDOM, x = b.scrollTop * this.scaleY, { scrollAnchorPos: S, scrollAnchorHeight: C } = this.viewState;
		Math.abs(x - this.viewState.scrollTop) > 1 && (C = -1), this.viewState.scrollAnchorHeight = -1;
		try {
			for (let _ = 0;; _++) {
				if (C < 0) if (isScrolledToBottom(b)) S = -1, C = this.viewState.heightMap.height;
				else {
					let _ = this.viewState.scrollAnchorAt(x);
					S = _.from, C = _.top;
				}
				this.updateState = 1;
				let w = this.viewState.measure(this);
				if (!w && !this.measureRequests.length && this.viewState.scrollTarget == null) break;
				if (_ > 5) {
					console.warn(this.measureRequests.length ? `Measure loop restarted more than 5 times` : `Viewport failed to stabilize`);
					break;
				}
				let E = [];
				w & 4 || ([this.measureRequests, E] = [E, this.measureRequests]);
				let D = E.map((_) => {
					try {
						return _.read(this);
					} catch (_) {
						return logException(this.state, _), yl;
					}
				}), O = Ic.create(this, this.state, []), k = !1;
				O.flags |= w, y ? y.flags |= w : y = O, this.updateState = 2, O.empty || (this.updatePlugins(O), this.inputState.update(O), this.updateAttrs(), k = this.docView.update(O), k && this.docViewUpdate());
				for (let _ = 0; _ < E.length; _++) if (D[_] != yl) try {
					let y = E[_];
					y.write && y.write(D[_], this);
				} catch (_) {
					logException(this.state, _);
				}
				if (k && this.docView.updateSelection(!0), !O.viewportChanged && this.measureRequests.length == 0) {
					if (this.viewState.editorHeight) if (this.viewState.scrollTarget) {
						this.docView.scrollIntoView(this.viewState.scrollTarget), this.viewState.scrollTarget = null, C = -1;
						continue;
					} else {
						let _ = (S < 0 ? this.viewState.heightMap.height : this.viewState.lineBlockAt(S).top) - C;
						if (_ > 1 || _ < -1) {
							x += _, b.scrollTop = x / this.scaleY, C = -1;
							continue;
						}
					}
					break;
				}
			}
		} finally {
			this.updateState = 0, this.measureScheduled = -1;
		}
		if (y && !y.empty) for (let _ of this.state.facet(hc)) _(y);
	}
	get themeClasses() {
		return ul + ` ` + (this.state.facet(ll) ? fl : dl) + ` ` + this.state.facet(cl);
	}
	updateAttrs() {
		let _ = attrsFromFacet(this, Dc, { class: `cm-editor` + (this.hasFocus ? ` cm-focused ` : ` `) + this.themeClasses }), y = {
			spellcheck: `false`,
			autocorrect: `off`,
			autocapitalize: `off`,
			translate: `no`,
			contenteditable: this.state.facet(Cc) ? `true` : `false`,
			class: `cm-content`,
			style: `${X.tabSize}: ${this.state.tabSize}`,
			role: `textbox`,
			"aria-multiline": `true`
		};
		this.state.readOnly && (y[`aria-readonly`] = `true`), attrsFromFacet(this, Oc, y);
		let b = this.observer.ignore(() => {
			let b = updateAttrs(this.contentDOM, this.contentAttrs, y), x = updateAttrs(this.dom, this.editorAttrs, _);
			return b || x;
		});
		return this.editorAttrs = _, this.contentAttrs = y, b;
	}
	showAnnouncements(_) {
		let y = !0;
		for (let b of _) for (let _ of b.effects) if (_.is(EditorView.announce)) {
			y && (this.announceDOM.textContent = ``), y = !1;
			let b = this.announceDOM.appendChild(document.createElement(`div`));
			b.textContent = _.value;
		}
	}
	mountStyles() {
		this.styleModules = this.state.facet(Pc);
		let _ = this.state.facet(EditorView.cspNonce);
		StyleModule.mount(this.root, this.styleModules.concat(ml).reverse(), _ ? { nonce: _ } : void 0);
	}
	readMeasured() {
		if (this.updateState == 2) throw Error(`Reading the editor layout isn't allowed during an update`);
		this.updateState == 0 && this.measureScheduled > -1 && this.measure(!1);
	}
	requestMeasure(_) {
		if (this.measureScheduled < 0 && (this.measureScheduled = this.win.requestAnimationFrame(() => this.measure())), _) {
			if (this.measureRequests.indexOf(_) > -1) return;
			if (_.key != null) {
				for (let y = 0; y < this.measureRequests.length; y++) if (this.measureRequests[y].key === _.key) {
					this.measureRequests[y] = _;
					return;
				}
			}
			this.measureRequests.push(_);
		}
	}
	plugin(_) {
		let y = this.pluginMap.get(_);
		return (y === void 0 || y && y.spec != _) && this.pluginMap.set(_, y = this.plugins.find((y) => y.spec == _) || null), y && y.update(this).value;
	}
	get documentTop() {
		return this.contentDOM.getBoundingClientRect().top + this.viewState.paddingTop;
	}
	get documentPadding() {
		return {
			top: this.viewState.paddingTop,
			bottom: this.viewState.paddingBottom
		};
	}
	get scaleX() {
		return this.viewState.scaleX;
	}
	get scaleY() {
		return this.viewState.scaleY;
	}
	elementAtHeight(_) {
		return this.readMeasured(), this.viewState.elementAtHeight(_);
	}
	lineBlockAtHeight(_) {
		return this.readMeasured(), this.viewState.lineBlockAtHeight(_);
	}
	get viewportLineBlocks() {
		return this.viewState.viewportLines;
	}
	lineBlockAt(_) {
		return this.viewState.lineBlockAt(_);
	}
	get contentHeight() {
		return this.viewState.contentHeight;
	}
	moveByChar(_, y, b) {
		return skipAtoms(this, _, moveByChar(this, _, y, b));
	}
	moveByGroup(_, y) {
		return skipAtoms(this, _, moveByChar(this, _, y, (y) => byGroup(this, _.head, y)));
	}
	visualLineSide(_, y) {
		let b = this.bidiSpans(_), x = this.textDirectionAt(_.from), S = b[y ? b.length - 1 : 0];
		return J.cursor(S.side(y, x) + _.from, S.forward(!y, x) ? 1 : -1);
	}
	moveToLineBoundary(_, y, b = !0) {
		return moveToLineBoundary(this, _, y, b);
	}
	moveVertically(_, y, b) {
		return skipAtoms(this, _, moveVertically(this, _, y, b));
	}
	domAtPos(_) {
		return this.docView.domAtPos(_);
	}
	posAtDOM(_, y = 0) {
		return this.docView.posFromDOM(_, y);
	}
	posAtCoords(_, y = !0) {
		return this.readMeasured(), posAtCoords(this, _, y);
	}
	coordsAtPos(_, y = 1) {
		this.readMeasured();
		let b = this.docView.coordsAt(_, y);
		if (!b || b.left == b.right) return b;
		let x = this.state.doc.lineAt(_), S = this.bidiSpans(x), C = S[BidiSpan.find(S, _ - x.from, -1, y)];
		return flattenRect(b, C.dir == tc.LTR == y > 0);
	}
	coordsForChar(_) {
		return this.readMeasured(), this.docView.coordsForChar(_);
	}
	get defaultCharacterWidth() {
		return this.viewState.heightOracle.charWidth;
	}
	get defaultLineHeight() {
		return this.viewState.heightOracle.lineHeight;
	}
	get textDirection() {
		return this.viewState.defaultTextDirection;
	}
	textDirectionAt(_) {
		return !this.state.facet(vc) || _ < this.viewport.from || _ > this.viewport.to ? this.textDirection : (this.readMeasured(), this.docView.textDirectionAt(_));
	}
	get lineWrapping() {
		return this.viewState.heightOracle.lineWrapping;
	}
	bidiSpans(_) {
		if (_.length > vl) return trivialOrder(_.length);
		let y = this.textDirectionAt(_.from), b;
		for (let x of this.bidiCache) if (x.from == _.from && x.dir == y && (x.fresh || isolatesEq(x.isolates, b = getIsolatedRanges(this, _)))) return x.order;
		b ||= getIsolatedRanges(this, _);
		let x = computeOrder(_.text, y, b);
		return this.bidiCache.push(new bl(_.from, _.to, y, b, !0, x)), x;
	}
	get hasFocus() {
		return (this.dom.ownerDocument.hasFocus() || X.safari && this.inputState?.lastContextMenu > Date.now() - 3e4) && this.root.activeElement == this.contentDOM;
	}
	focus() {
		this.observer.ignore(() => {
			focusPreventScroll(this.contentDOM), this.docView.updateSelection();
		});
	}
	setRoot(_) {
		this._root != _ && (this._root = _, this.observer.setWindow((_.nodeType == 9 ? _ : _.ownerDocument).defaultView || window), this.mountStyles());
	}
	destroy() {
		for (let _ of this.plugins) _.destroy(this);
		this.plugins = [], this.inputState.destroy(), this.docView.destroy(), this.dom.remove(), this.observer.destroy(), this.measureScheduled > -1 && this.win.cancelAnimationFrame(this.measureScheduled), this.destroyed = !0;
	}
	static scrollIntoView(_, y = {}) {
		return Sc.of(new xc(typeof _ == `number` ? J.cursor(_) : _, y.y, y.x, y.yMargin, y.xMargin));
	}
	scrollSnapshot() {
		let { scrollTop: _, scrollLeft: y } = this.scrollDOM, b = this.viewState.scrollAnchorAt(_);
		return Sc.of(new xc(J.cursor(b.from), `start`, `start`, b.top - _, y, !0));
	}
	static domEventHandlers(_) {
		return Ec.define(() => ({}), { eventHandlers: _ });
	}
	static domEventObservers(_) {
		return Ec.define(() => ({}), { eventObservers: _ });
	}
	static theme(_, y) {
		let b = StyleModule.newName(), x = [cl.of(b), Pc.of(buildTheme(`.${b}`, _))];
		return y && y.dark && x.push(ll.of(!0)), x;
	}
	static baseTheme(_) {
		return Ko.lowest(Pc.of(buildTheme(`.` + ul, _, pl)));
	}
	static findFromDOM(_) {
		let y = _.querySelector(`.cm-content`);
		return (y && As.get(y) || As.get(_))?.rootView?.view || null;
	}
};
Z.styleModule = Pc, Z.inputHandler = gc, Z.scrollHandler = bc, Z.focusChangeEffect = _c, Z.perLineTextDirection = vc, Z.exceptionSink = mc, Z.updateListener = hc, Z.editable = Cc, Z.mouseSelectionStyle = pc, Z.dragMovesSelection = fc, Z.clickAddsSelectionRange = dc, Z.decorations = kc, Z.outerDecorations = Ac, Z.atomicRanges = jc, Z.bidiIsolatedRanges = Mc, Z.scrollMargins = Nc, Z.darkTheme = ll, Z.cspNonce = Y.define({ combine: (_) => _.length ? _[0] : `` }), Z.contentAttributes = Oc, Z.editorAttributes = Dc, Z.lineWrapping = Z.contentAttributes.of({ class: `cm-lineWrapping` }), Z.announce = ns.define();
var vl = 4096, yl = {}, bl = class CachedOrder {
	constructor(_, y, b, x, S, C) {
		this.from = _, this.to = y, this.dir = b, this.isolates = x, this.fresh = S, this.order = C;
	}
	static update(_, y) {
		if (y.empty && !_.some((_) => _.fresh)) return _;
		let b = [], x = _.length ? _[_.length - 1].dir : tc.LTR;
		for (let S = Math.max(0, _.length - 10); S < _.length; S++) {
			let C = _[S];
			C.dir == x && !y.touchesRange(C.from, C.to) && b.push(new CachedOrder(y.mapPos(C.from, 1), y.mapPos(C.to, -1), C.dir, C.isolates, !1, C.order));
		}
		return b;
	}
};
function attrsFromFacet(_, y, b) {
	for (let x = _.state.facet(y), S = x.length - 1; S >= 0; S--) {
		let y = x[S], C = typeof y == `function` ? y(_) : y;
		C && combineAttrs(C, b);
	}
	return b;
}
var xl = X.mac ? `mac` : X.windows ? `win` : X.linux ? `linux` : `key`;
function normalizeKeyName(_, y) {
	let b = _.split(/-(?!$)/), x = b[b.length - 1];
	x == `Space` && (x = ` `);
	let S, C, w, E;
	for (let _ = 0; _ < b.length - 1; ++_) {
		let x = b[_];
		if (/^(cmd|meta|m)$/i.test(x)) E = !0;
		else if (/^a(lt)?$/i.test(x)) S = !0;
		else if (/^(c|ctrl|control)$/i.test(x)) C = !0;
		else if (/^s(hift)?$/i.test(x)) w = !0;
		else if (/^mod$/i.test(x)) y == `mac` ? E = !0 : C = !0;
		else throw Error(`Unrecognized modifier name: ` + x);
	}
	return S && (x = `Alt-` + x), C && (x = `Ctrl-` + x), E && (x = `Meta-` + x), w && (x = `Shift-` + x), x;
}
function modifiers(_, y, b) {
	return y.altKey && (_ = `Alt-` + _), y.ctrlKey && (_ = `Ctrl-` + _), y.metaKey && (_ = `Meta-` + _), b !== !1 && y.shiftKey && (_ = `Shift-` + _), _;
}
var Sl = Ko.default(Z.domEventHandlers({ keydown(_, y) {
	return runHandlers(getKeymap(y.state), _, y, `editor`);
} })), Cl = Y.define({ enables: Sl }), wl = /* @__PURE__ */ new WeakMap();
function getKeymap(_) {
	let y = _.facet(Cl), b = wl.get(y);
	return b || wl.set(y, b = buildKeymap(y.reduce((_, y) => _.concat(y), []))), b;
}
function runScopeHandlers(_, y, b) {
	return runHandlers(getKeymap(_.state), y, _, b);
}
var Tl = null, El = 4e3;
function buildKeymap(_, y = xl) {
	let b = Object.create(null), x = Object.create(null), checkPrefix = (_, y) => {
		let b = x[_];
		if (b == null) x[_] = y;
		else if (b != y) throw Error(`Key binding ` + _ + ` is used both as a regular binding and as a multi-stroke prefix`);
	}, add = (_, x, S, C, w) => {
		let E = b[_] || (b[_] = Object.create(null)), D = x.split(/ (?!$)/).map((_) => normalizeKeyName(_, y));
		for (let y = 1; y < D.length; y++) {
			let b = D.slice(0, y).join(` `);
			checkPrefix(b, !0), E[b] || (E[b] = {
				preventDefault: !0,
				stopPropagation: !1,
				run: [(y) => {
					let x = Tl = {
						view: y,
						prefix: b,
						scope: _
					};
					return setTimeout(() => {
						Tl == x && (Tl = null);
					}, El), !0;
				}]
			});
		}
		let O = D.join(` `);
		checkPrefix(O, !1);
		let k = E[O] || (E[O] = {
			preventDefault: !1,
			stopPropagation: !1,
			run: (E._any?.run)?.slice() || []
		});
		S && k.run.push(S), C && (k.preventDefault = !0), w && (k.stopPropagation = !0);
	};
	for (let x of _) {
		let _ = x.scope ? x.scope.split(` `) : [`editor`];
		if (x.any) for (let y of _) {
			let _ = b[y] || (b[y] = Object.create(null));
			_._any ||= {
				preventDefault: !1,
				stopPropagation: !1,
				run: []
			};
			for (let y in _) _[y].run.push(x.any);
		}
		let S = x[y] || x.key;
		if (S) for (let y of _) add(y, S, x.run, x.preventDefault, x.stopPropagation), x.shift && add(y, `Shift-` + S, x.shift, x.preventDefault, x.stopPropagation);
	}
	return b;
}
function runHandlers(_, y, b, x) {
	let S = keyName(y), C = codePointSize(codePointAt(S, 0)) == S.length && S != ` `, w = ``, E = !1, D = !1, O = !1;
	Tl && Tl.view == b && Tl.scope == x && (w = Tl.prefix + ` `, Bc.indexOf(y.keyCode) < 0 && (D = !0, Tl = null));
	let k = /* @__PURE__ */ new Set(), runFor = (_) => {
		if (_) {
			for (let x of _.run) if (!k.has(x) && (k.add(x), x(b, y))) return _.stopPropagation && (O = !0), !0;
			_.preventDefault && (_.stopPropagation && (O = !0), D = !0);
		}
		return !1;
	}, A = _[x], j, N;
	return A && (runFor(A[w + modifiers(S, y, !C)]) ? E = !0 : C && (y.altKey || y.metaKey || y.ctrlKey) && !(X.windows && y.ctrlKey && y.altKey) && (j = bs[y.keyCode]) && j != S ? (runFor(A[w + modifiers(j, y, !0)]) || y.shiftKey && (N = xs[y.keyCode]) != S && N != j && runFor(A[w + modifiers(N, y, !1)])) && (E = !0) : C && y.shiftKey && runFor(A[w + modifiers(S, y, !0)]) && (E = !0), !E && runFor(A._any) && (E = !0)), D && (E = !0), E && O && y.stopPropagation(), E;
}
var Dl = class RectangleMarker {
	constructor(_, y, b, x, S) {
		this.className = _, this.left = y, this.top = b, this.width = x, this.height = S;
	}
	draw() {
		let _ = document.createElement(`div`);
		return _.className = this.className, this.adjust(_), _;
	}
	update(_, y) {
		return y.className == this.className ? (this.adjust(_), !0) : !1;
	}
	adjust(_) {
		_.style.left = this.left + `px`, _.style.top = this.top + `px`, this.width != null && (_.style.width = this.width + `px`), _.style.height = this.height + `px`;
	}
	eq(_) {
		return this.left == _.left && this.top == _.top && this.width == _.width && this.height == _.height && this.className == _.className;
	}
	static forRange(_, y, b) {
		if (b.empty) {
			let x = _.coordsAtPos(b.head, b.assoc || 1);
			if (!x) return [];
			let S = getBase(_);
			return [new RectangleMarker(y, x.left - S.left, x.top - S.top, null, x.bottom - x.top)];
		} else return rectanglesForRange(_, y, b);
	}
};
function getBase(_) {
	let y = _.scrollDOM.getBoundingClientRect();
	return {
		left: (_.textDirection == tc.LTR ? y.left : y.right - _.scrollDOM.clientWidth * _.scaleX) - _.scrollDOM.scrollLeft * _.scaleX,
		top: y.top - _.scrollDOM.scrollTop * _.scaleY
	};
}
function wrappedLine(_, y, b) {
	let x = J.cursor(y);
	return {
		from: Math.max(b.from, _.moveToLineBoundary(x, !1, !0).from),
		to: Math.min(b.to, _.moveToLineBoundary(x, !0, !0).from),
		type: Xs.Text
	};
}
function rectanglesForRange(_, y, b) {
	if (b.to <= _.viewport.from || b.from >= _.viewport.to) return [];
	let x = Math.max(b.from, _.viewport.from), S = Math.min(b.to, _.viewport.to), C = _.textDirection == tc.LTR, w = _.contentDOM, E = w.getBoundingClientRect(), D = getBase(_), O = w.querySelector(`.cm-line`), k = O && window.getComputedStyle(O), A = E.left + (k ? parseInt(k.paddingLeft) + Math.min(0, parseInt(k.textIndent)) : 0), j = E.right - (k ? parseInt(k.paddingRight) : 0), N = blockAt(_, x), P = blockAt(_, S), F = N.type == Xs.Text ? N : null, I = P.type == Xs.Text ? P : null;
	if (F && (_.lineWrapping || N.widgetLineBreaks) && (F = wrappedLine(_, x, F)), I && (_.lineWrapping || P.widgetLineBreaks) && (I = wrappedLine(_, S, I)), F && I && F.from == I.from) return pieces(drawForLine(b.from, b.to, F));
	{
		let y = F ? drawForLine(b.from, null, F) : drawForWidget(N, !1), x = I ? drawForLine(null, b.to, I) : drawForWidget(P, !0), S = [];
		return (F || N).to < (I || P).from - (F && I ? 1 : 0) || N.widgetLineBreaks > 1 && y.bottom + _.defaultLineHeight / 2 < x.top ? S.push(piece(A, y.bottom, j, x.top)) : y.bottom < x.top && _.elementAtHeight((y.bottom + x.top) / 2).type == Xs.Text && (y.bottom = x.top = (y.bottom + x.top) / 2), pieces(y).concat(S).concat(pieces(x));
	}
	function piece(_, b, x, S) {
		return new Dl(y, _ - D.left, b - D.top - .01, x - _, S - b + .01);
	}
	function pieces({ top: _, bottom: y, horizontal: b }) {
		let x = [];
		for (let S = 0; S < b.length; S += 2) x.push(piece(b[S], _, b[S + 1], y));
		return x;
	}
	function drawForLine(y, b, x) {
		let S = 1e9, w = -1e9, E = [];
		function addSpan(y, b, D, O, k) {
			let N = _.coordsAtPos(y, y == x.to ? -2 : 2), P = _.coordsAtPos(D, D == x.from ? 2 : -2);
			!N || !P || (S = Math.min(N.top, P.top, S), w = Math.max(N.bottom, P.bottom, w), k == tc.LTR ? E.push(C && b ? A : N.left, C && O ? j : P.right) : E.push(!C && O ? A : P.left, !C && b ? j : N.right));
		}
		let D = y ?? x.from, O = b ?? x.to;
		for (let x of _.visibleRanges) if (x.to > D && x.from < O) for (let S = Math.max(x.from, D), C = Math.min(x.to, O);;) {
			let x = _.state.doc.lineAt(S);
			for (let w of _.bidiSpans(x)) {
				let _ = w.from + x.from, E = w.to + x.from;
				if (_ >= C) break;
				E > S && addSpan(Math.max(_, S), y == null && _ <= D, Math.min(E, C), b == null && E >= O, w.dir);
			}
			if (S = x.to + 1, S >= C) break;
		}
		return E.length == 0 && addSpan(D, y == null, O, b == null, _.textDirection), {
			top: S,
			bottom: w,
			horizontal: E
		};
	}
	function drawForWidget(_, y) {
		let b = E.top + (y ? _.top : _.bottom);
		return {
			top: b,
			bottom: b,
			horizontal: []
		};
	}
}
function sameMarker(_, y) {
	return _.constructor == y.constructor && _.eq(y);
}
var LayerView = class {
	constructor(_, y) {
		this.view = _, this.layer = y, this.drawn = [], this.scaleX = 1, this.scaleY = 1, this.measureReq = {
			read: this.measure.bind(this),
			write: this.draw.bind(this)
		}, this.dom = _.scrollDOM.appendChild(document.createElement(`div`)), this.dom.classList.add(`cm-layer`), y.above && this.dom.classList.add(`cm-layer-above`), y.class && this.dom.classList.add(y.class), this.scale(), this.dom.setAttribute(`aria-hidden`, `true`), this.setOrder(_.state), _.requestMeasure(this.measureReq), y.mount && y.mount(this.dom, _);
	}
	update(_) {
		_.startState.facet(Ol) != _.state.facet(Ol) && this.setOrder(_.state), (this.layer.update(_, this.dom) || _.geometryChanged) && (this.scale(), _.view.requestMeasure(this.measureReq));
	}
	docViewUpdate(_) {
		this.layer.updateOnDocViewUpdate !== !1 && _.requestMeasure(this.measureReq);
	}
	setOrder(_) {
		let y = 0, b = _.facet(Ol);
		for (; y < b.length && b[y] != this.layer;) y++;
		this.dom.style.zIndex = String((this.layer.above ? 150 : -1) - y);
	}
	measure() {
		return this.layer.markers(this.view);
	}
	scale() {
		let { scaleX: _, scaleY: y } = this.view;
		(_ != this.scaleX || y != this.scaleY) && (this.scaleX = _, this.scaleY = y, this.dom.style.transform = `scale(${1 / _}, ${1 / y})`);
	}
	draw(_) {
		if (_.length != this.drawn.length || _.some((_, y) => !sameMarker(_, this.drawn[y]))) {
			let y = this.dom.firstChild, b = 0;
			for (let x of _) x.update && y && x.constructor && this.drawn[b].constructor && x.update(y, this.drawn[b]) ? (y = y.nextSibling, b++) : this.dom.insertBefore(x.draw(), y);
			for (; y;) {
				let _ = y.nextSibling;
				y.remove(), y = _;
			}
			this.drawn = _;
		}
	}
	destroy() {
		this.layer.destroy && this.layer.destroy(this.dom, this.view), this.dom.remove();
	}
}, Ol = Y.define();
function layer(_) {
	return [Ec.define((y) => new LayerView(y, _)), Ol.of(_)];
}
var kl = !X.ios, Al = Y.define({ combine(_) {
	return combineConfig(_, {
		cursorBlinkRate: 1200,
		drawRangeCursor: !0
	}, {
		cursorBlinkRate: (_, y) => Math.min(_, y),
		drawRangeCursor: (_, y) => _ || y
	});
} });
function drawSelection(_ = {}) {
	return [
		Al.of(_),
		jl,
		Ml,
		Pl,
		yc.of(!0)
	];
}
function configChanged(_) {
	return _.startState.facet(Al) != _.state.facet(Al);
}
var jl = layer({
	above: !0,
	markers(_) {
		let { state: y } = _, b = y.facet(Al), x = [];
		for (let S of y.selection.ranges) {
			let C = S == y.selection.main;
			if (S.empty ? !C || kl : b.drawRangeCursor) {
				let y = C ? `cm-cursor cm-cursor-primary` : `cm-cursor cm-cursor-secondary`, b = S.empty ? S : J.cursor(S.head, S.head > S.anchor ? -1 : 1);
				for (let S of Dl.forRange(_, y, b)) x.push(S);
			}
		}
		return x;
	},
	update(_, y) {
		_.transactions.some((_) => _.selection) && (y.style.animationName = y.style.animationName == `cm-blink` ? `cm-blink2` : `cm-blink`);
		let b = configChanged(_);
		return b && setBlinkRate(_.state, y), _.docChanged || _.selectionSet || b;
	},
	mount(_, y) {
		setBlinkRate(y.state, _);
	},
	class: `cm-cursorLayer`
});
function setBlinkRate(_, y) {
	y.style.animationDuration = _.facet(Al).cursorBlinkRate + `ms`;
}
var Ml = layer({
	above: !1,
	markers(_) {
		return _.state.selection.ranges.map((y) => y.empty ? [] : Dl.forRange(_, `cm-selectionBackground`, y)).reduce((_, y) => _.concat(y));
	},
	update(_, y) {
		return _.docChanged || _.selectionSet || _.viewportChanged || configChanged(_);
	},
	class: `cm-selectionLayer`
}), Nl = { ".cm-line": {
	"& ::selection": { backgroundColor: `transparent !important` },
	"&::selection": { backgroundColor: `transparent !important` }
} };
kl && (Nl[`.cm-line`].caretColor = `transparent !important`, Nl[`.cm-content`] = { caretColor: `transparent !important` });
var Pl = Ko.highest(Z.theme(Nl)), Fl = ns.define({ map(_, y) {
	return _ == null ? null : y.mapPos(_);
} }), Il = Wo.define({
	create() {
		return null;
	},
	update(_, y) {
		return _ != null && (_ = y.changes.mapPos(_)), y.effects.reduce((_, y) => y.is(Fl) ? y.value : _, _);
	}
}), Ll = Ec.fromClass(class {
	constructor(_) {
		this.view = _, this.cursor = null, this.measureReq = {
			read: this.readPos.bind(this),
			write: this.drawCursor.bind(this)
		};
	}
	update(_) {
		var y;
		let b = _.state.field(Il);
		b == null ? this.cursor != null && ((y = this.cursor) == null || y.remove(), this.cursor = null) : (this.cursor || (this.cursor = this.view.scrollDOM.appendChild(document.createElement(`div`)), this.cursor.className = `cm-dropCursor`), (_.startState.field(Il) != b || _.docChanged || _.geometryChanged) && this.view.requestMeasure(this.measureReq));
	}
	readPos() {
		let { view: _ } = this, y = _.state.field(Il), b = y != null && _.coordsAtPos(y);
		if (!b) return null;
		let x = _.scrollDOM.getBoundingClientRect();
		return {
			left: b.left - x.left + _.scrollDOM.scrollLeft * _.scaleX,
			top: b.top - x.top + _.scrollDOM.scrollTop * _.scaleY,
			height: b.bottom - b.top
		};
	}
	drawCursor(_) {
		if (this.cursor) {
			let { scaleX: y, scaleY: b } = this.view;
			_ ? (this.cursor.style.left = _.left / y + `px`, this.cursor.style.top = _.top / b + `px`, this.cursor.style.height = _.height / b + `px`) : this.cursor.style.left = `-100000px`;
		}
	}
	destroy() {
		this.cursor && this.cursor.remove();
	}
	setDropPos(_) {
		this.view.state.field(Il) != _ && this.view.dispatch({ effects: Fl.of(_) });
	}
}, { eventObservers: {
	dragover(_) {
		this.setDropPos(this.view.posAtCoords({
			x: _.clientX,
			y: _.clientY
		}));
	},
	dragleave(_) {
		(_.target == this.view.contentDOM || !this.view.contentDOM.contains(_.relatedTarget)) && this.setDropPos(null);
	},
	dragend() {
		this.setDropPos(null);
	},
	drop() {
		this.setDropPos(null);
	}
} });
function dropCursor() {
	return [Il, Ll];
}
function iterMatches(_, y, b, x, S) {
	y.lastIndex = 0;
	for (let C = _.iterRange(b, x), w = b, E; !C.next().done; w += C.value.length) if (!C.lineBreak) for (; E = y.exec(C.value);) S(w + E.index, E);
}
function matchRanges(_, y) {
	let b = _.visibleRanges;
	if (b.length == 1 && b[0].from == _.viewport.from && b[0].to == _.viewport.to) return b;
	let x = [];
	for (let { from: S, to: C } of b) S = Math.max(_.state.doc.lineAt(S).from, S - y), C = Math.min(_.state.doc.lineAt(C).to, C + y), x.length && x[x.length - 1].to >= S ? x[x.length - 1].to = C : x.push({
		from: S,
		to: C
	});
	return x;
}
var MatchDecorator = class {
	constructor(_) {
		let { regexp: y, decoration: b, decorate: x, boundary: S, maxLength: C = 1e3 } = _;
		if (!y.global) throw RangeError(`The regular expression given to MatchDecorator should have its 'g' flag set`);
		if (this.regexp = y, x) this.addMatch = (_, y, b, S) => x(S, b, b + _[0].length, _, y);
		else if (typeof b == `function`) this.addMatch = (_, y, x, S) => {
			let C = b(_, y, x);
			C && S(x, x + _[0].length, C);
		};
		else if (b) this.addMatch = (_, y, x, S) => S(x, x + _[0].length, b);
		else throw RangeError(`Either 'decorate' or 'decoration' should be provided to MatchDecorator`);
		this.boundary = S, this.maxLength = C;
	}
	createDeco(_) {
		let y = new ps(), b = y.add.bind(y);
		for (let { from: y, to: x } of matchRanges(_, this.maxLength)) iterMatches(_.state.doc, this.regexp, y, x, (y, x) => this.addMatch(x, _, y, b));
		return y.finish();
	}
	updateDeco(_, y) {
		let b = 1e9, x = -1;
		return _.docChanged && _.changes.iterChanges((y, S, C, w) => {
			w > _.view.viewport.from && C < _.view.viewport.to && (b = Math.min(C, b), x = Math.max(w, x));
		}), _.viewportChanged || x - b > 1e3 ? this.createDeco(_.view) : x > -1 ? this.updateRange(_.view, y.map(_.changes), b, x) : y;
	}
	updateRange(_, y, b, x) {
		for (let S of _.visibleRanges) {
			let C = Math.max(S.from, b), w = Math.min(S.to, x);
			if (w > C) {
				let b = _.state.doc.lineAt(C), x = b.to < w ? _.state.doc.lineAt(w) : b, E = Math.max(S.from, b.from), D = Math.min(S.to, x.to);
				if (this.boundary) {
					for (; C > b.from; C--) if (this.boundary.test(b.text[C - 1 - b.from])) {
						E = C;
						break;
					}
					for (; w < x.to; w++) if (this.boundary.test(x.text[w - x.from])) {
						D = w;
						break;
					}
				}
				let O = [], k, add = (_, y, b) => O.push(b.range(_, y));
				if (b == x) for (this.regexp.lastIndex = E - b.from; (k = this.regexp.exec(b.text)) && k.index < D - b.from;) this.addMatch(k, _, k.index + b.from, add);
				else iterMatches(_.state.doc, this.regexp, E, D, (y, b) => this.addMatch(b, _, y, add));
				y = y.update({
					filterFrom: E,
					filterTo: D,
					filter: (_, y) => _ < E || y > D,
					add: O
				});
			}
		}
		return y;
	}
}, Rl = /x/.unicode == null ? `g` : `gu`, zl = RegExp(`[\0-\b
--­؜​‎‏\u2028\u2029‭‮⁦⁧⁩﻿￹-￼]`, Rl), Bl = {
	0: `null`,
	7: `bell`,
	8: `backspace`,
	10: `newline`,
	11: `vertical tab`,
	13: `carriage return`,
	27: `escape`,
	8203: `zero width space`,
	8204: `zero width non-joiner`,
	8205: `zero width joiner`,
	8206: `left-to-right mark`,
	8207: `right-to-left mark`,
	8232: `line separator`,
	8237: `left-to-right override`,
	8238: `right-to-left override`,
	8294: `left-to-right isolate`,
	8295: `right-to-left isolate`,
	8297: `pop directional isolate`,
	8233: `paragraph separator`,
	65279: `zero width no-break space`,
	65532: `object replacement`
}, Vl = null;
function supportsTabSize() {
	if (Vl == null && typeof document < `u` && document.body) {
		let _ = document.body.style;
		Vl = (_.tabSize ?? _.MozTabSize) != null;
	}
	return Vl || !1;
}
var Hl = Y.define({ combine(_) {
	let y = combineConfig(_, {
		render: null,
		specialChars: zl,
		addSpecialChars: null
	});
	return (y.replaceTabs = !supportsTabSize()) && (y.specialChars = RegExp(`	|` + y.specialChars.source, Rl)), y.addSpecialChars && (y.specialChars = RegExp(y.specialChars.source + `|` + y.addSpecialChars.source, Rl)), y;
} });
function highlightSpecialChars(_ = {}) {
	return [Hl.of(_), specialCharPlugin()];
}
var Ul = null;
function specialCharPlugin() {
	return Ul ||= Ec.fromClass(class {
		constructor(_) {
			this.view = _, this.decorations = Decoration.none, this.decorationCache = Object.create(null), this.decorator = this.makeDecorator(_.state.facet(Hl)), this.decorations = this.decorator.createDeco(_);
		}
		makeDecorator(_) {
			return new MatchDecorator({
				regexp: _.specialChars,
				decoration: (y, b, x) => {
					let { doc: S } = b.state, C = codePointAt(y[0], 0);
					if (C == 9) {
						let _ = S.lineAt(x), y = b.state.tabSize, C = countColumn(_.text, y, x - _.from);
						return Decoration.replace({ widget: new TabWidget((y - C % y) * this.view.defaultCharacterWidth / this.view.scaleX) });
					}
					return this.decorationCache[C] || (this.decorationCache[C] = Decoration.replace({ widget: new SpecialCharWidget(_, C) }));
				},
				boundary: _.replaceTabs ? void 0 : /[^]/
			});
		}
		update(_) {
			let y = _.state.facet(Hl);
			_.startState.facet(Hl) == y ? this.decorations = this.decorator.updateDeco(_, this.decorations) : (this.decorator = this.makeDecorator(y), this.decorations = this.decorator.createDeco(_.view));
		}
	}, { decorations: (_) => _.decorations });
}
var Wl = `•`;
function placeholder$1(_) {
	return _ >= 32 ? Wl : _ == 10 ? `␤` : String.fromCharCode(9216 + _);
}
var SpecialCharWidget = class extends WidgetType {
	constructor(_, y) {
		super(), this.options = _, this.code = y;
	}
	eq(_) {
		return _.code == this.code;
	}
	toDOM(_) {
		let y = placeholder$1(this.code), b = _.state.phrase(`Control character`) + ` ` + (Bl[this.code] || `0x` + this.code.toString(16)), x = this.options.render && this.options.render(this.code, b, y);
		if (x) return x;
		let S = document.createElement(`span`);
		return S.textContent = y, S.title = b, S.setAttribute(`aria-label`, b), S.className = `cm-specialChar`, S;
	}
	ignoreEvent() {
		return !1;
	}
}, TabWidget = class extends WidgetType {
	constructor(_) {
		super(), this.width = _;
	}
	eq(_) {
		return _.width == this.width;
	}
	toDOM() {
		let _ = document.createElement(`span`);
		return _.textContent = `	`, _.className = `cm-tab`, _.style.width = this.width + `px`, _;
	}
	ignoreEvent() {
		return !1;
	}
};
function highlightActiveLine() {
	return Kl;
}
var Gl = Decoration.line({ class: `cm-activeLine` }), Kl = Ec.fromClass(class {
	constructor(_) {
		this.decorations = this.getDeco(_);
	}
	update(_) {
		(_.docChanged || _.selectionSet) && (this.decorations = this.getDeco(_.view));
	}
	getDeco(_) {
		let y = -1, b = [];
		for (let x of _.state.selection.ranges) {
			let S = _.lineBlockAt(x.head);
			S.from > y && (b.push(Gl.range(S.from)), y = S.from);
		}
		return Decoration.set(b);
	}
}, { decorations: (_) => _.decorations }), ql = 2e3;
function rectangleFor(_, y, b) {
	let x = Math.min(y.line, b.line), S = Math.max(y.line, b.line), C = [];
	if (y.off > ql || b.off > ql || y.col < 0 || b.col < 0) {
		let w = Math.min(y.off, b.off), E = Math.max(y.off, b.off);
		for (let y = x; y <= S; y++) {
			let b = _.doc.line(y);
			b.length <= E && C.push(J.range(b.from + w, b.to + E));
		}
	} else {
		let w = Math.min(y.col, b.col), E = Math.max(y.col, b.col);
		for (let y = x; y <= S; y++) {
			let b = _.doc.line(y), x = findColumn(b.text, w, _.tabSize, !0);
			if (x < 0) C.push(J.cursor(b.to));
			else {
				let y = findColumn(b.text, E, _.tabSize);
				C.push(J.range(b.from + x, b.from + y));
			}
		}
	}
	return C;
}
function absoluteColumn(_, y) {
	let b = _.coordsAtPos(_.viewport.from);
	return b ? Math.round(Math.abs((b.left - y) / _.defaultCharacterWidth)) : -1;
}
function getPos(_, y) {
	let b = _.posAtCoords({
		x: y.clientX,
		y: y.clientY
	}, !1), x = _.state.doc.lineAt(b), S = b - x.from, C = S > ql ? -1 : S == x.length ? absoluteColumn(_, y.clientX) : countColumn(x.text, _.state.tabSize, b - x.from);
	return {
		line: x.number,
		col: C,
		off: S
	};
}
function rectangleSelectionStyle(_, y) {
	let b = getPos(_, y), x = _.state.selection;
	return b ? {
		update(_) {
			if (_.docChanged) {
				let y = _.changes.mapPos(_.startState.doc.line(b.line).from), S = _.state.doc.lineAt(y);
				b = {
					line: S.number,
					col: b.col,
					off: Math.min(b.off, S.length)
				}, x = x.map(_.changes);
			}
		},
		get(y, S, C) {
			let w = getPos(_, y);
			if (!w) return x;
			let E = rectangleFor(_.state, b, w);
			return E.length ? C ? J.create(E.concat(x.ranges)) : J.create(E) : x;
		}
	} : null;
}
function rectangularSelection(_) {
	let y = _?.eventFilter || ((_) => _.altKey && _.button == 0);
	return Z.mouseSelectionStyle.of((_, b) => y(b) ? rectangleSelectionStyle(_, b) : null);
}
var Jl = {
	Alt: [18, (_) => !!_.altKey],
	Control: [17, (_) => !!_.ctrlKey],
	Shift: [16, (_) => !!_.shiftKey],
	Meta: [91, (_) => !!_.metaKey]
}, Yl = { style: `cursor: crosshair` };
function crosshairCursor(_ = {}) {
	let [y, b] = Jl[_.key || `Alt`], x = Ec.fromClass(class {
		constructor(_) {
			this.view = _, this.isDown = !1;
		}
		set(_) {
			this.isDown != _ && (this.isDown = _, this.view.update([]));
		}
	}, { eventObservers: {
		keydown(_) {
			this.set(_.keyCode == y || b(_));
		},
		keyup(_) {
			(_.keyCode == y || !b(_)) && this.set(!1);
		},
		mousemove(_) {
			this.set(b(_));
		}
	} });
	return [x, Z.contentAttributes.of((_) => _.plugin(x)?.isDown ? Yl : null)];
}
var Xl = `-10000px`, TooltipViewManager = class {
	constructor(_, y, b, x) {
		this.facet = y, this.createTooltipView = b, this.removeTooltipView = x, this.input = _.state.facet(y), this.tooltips = this.input.filter((_) => _);
		let S = null;
		this.tooltipViews = this.tooltips.map((_) => S = b(_, S));
	}
	update(_, y) {
		var b;
		let x = _.state.facet(this.facet), S = x.filter((_) => _);
		if (x === this.input) {
			for (let y of this.tooltipViews) y.update && y.update(_);
			return !1;
		}
		let C = [], w = y ? [] : null;
		for (let b = 0; b < S.length; b++) {
			let x = S[b], E = -1;
			if (x) {
				for (let _ = 0; _ < this.tooltips.length; _++) {
					let y = this.tooltips[_];
					y && y.create == x.create && (E = _);
				}
				if (E < 0) C[b] = this.createTooltipView(x, b ? C[b - 1] : null), w && (w[b] = !!x.above);
				else {
					let x = C[b] = this.tooltipViews[E];
					w && (w[b] = y[E]), x.update && x.update(_);
				}
			}
		}
		for (let _ of this.tooltipViews) C.indexOf(_) < 0 && (this.removeTooltipView(_), (b = _.destroy) == null || b.call(_));
		return y && (w.forEach((_, b) => y[b] = _), y.length = w.length), this.input = x, this.tooltips = S, this.tooltipViews = C, !0;
	}
};
function windowSpace(_) {
	let { win: y } = _;
	return {
		top: 0,
		left: 0,
		bottom: y.innerHeight,
		right: y.innerWidth
	};
}
var Zl = Y.define({ combine: (_) => ({
	position: X.ios ? `absolute` : _.find((_) => _.position)?.position || `fixed`,
	parent: _.find((_) => _.parent)?.parent || null,
	tooltipSpace: _.find((_) => _.tooltipSpace)?.tooltipSpace || windowSpace
}) }), Ql = /* @__PURE__ */ new WeakMap(), $l = Ec.fromClass(class {
	constructor(_) {
		this.view = _, this.above = [], this.inView = !0, this.madeAbsolute = !1, this.lastTransaction = 0, this.measureTimeout = -1;
		let y = _.state.facet(Zl);
		this.position = y.position, this.parent = y.parent, this.classes = _.themeClasses, this.createContainer(), this.measureReq = {
			read: this.readMeasure.bind(this),
			write: this.writeMeasure.bind(this),
			key: this
		}, this.resizeObserver = typeof ResizeObserver == `function` ? new ResizeObserver(() => this.measureSoon()) : null, this.manager = new TooltipViewManager(_, nu, (_, y) => this.createTooltip(_, y), (_) => {
			this.resizeObserver && this.resizeObserver.unobserve(_.dom), _.dom.remove();
		}), this.above = this.manager.tooltips.map((_) => !!_.above), this.intersectionObserver = typeof IntersectionObserver == `function` ? new IntersectionObserver((_) => {
			Date.now() > this.lastTransaction - 50 && _.length > 0 && _[_.length - 1].intersectionRatio < 1 && this.measureSoon();
		}, { threshold: [1] }) : null, this.observeIntersection(), _.win.addEventListener(`resize`, this.measureSoon = this.measureSoon.bind(this)), this.maybeMeasure();
	}
	createContainer() {
		this.parent ? (this.container = document.createElement(`div`), this.container.style.position = `relative`, this.container.className = this.view.themeClasses, this.parent.appendChild(this.container)) : this.container = this.view.dom;
	}
	observeIntersection() {
		if (this.intersectionObserver) {
			this.intersectionObserver.disconnect();
			for (let _ of this.manager.tooltipViews) this.intersectionObserver.observe(_.dom);
		}
	}
	measureSoon() {
		this.measureTimeout < 0 && (this.measureTimeout = setTimeout(() => {
			this.measureTimeout = -1, this.maybeMeasure();
		}, 50));
	}
	update(_) {
		_.transactions.length && (this.lastTransaction = Date.now());
		let y = this.manager.update(_, this.above);
		y && this.observeIntersection();
		let b = y || _.geometryChanged, x = _.state.facet(Zl);
		if (x.position != this.position && !this.madeAbsolute) {
			this.position = x.position;
			for (let _ of this.manager.tooltipViews) _.dom.style.position = this.position;
			b = !0;
		}
		if (x.parent != this.parent) {
			this.parent && this.container.remove(), this.parent = x.parent, this.createContainer();
			for (let _ of this.manager.tooltipViews) this.container.appendChild(_.dom);
			b = !0;
		} else this.parent && this.view.themeClasses != this.classes && (this.classes = this.container.className = this.view.themeClasses);
		b && this.maybeMeasure();
	}
	createTooltip(_, y) {
		let b = _.create(this.view), x = y ? y.dom : null;
		if (b.dom.classList.add(`cm-tooltip`), _.arrow && !b.dom.querySelector(`.cm-tooltip > .cm-tooltip-arrow`)) {
			let _ = document.createElement(`div`);
			_.className = `cm-tooltip-arrow`, b.dom.appendChild(_);
		}
		return b.dom.style.position = this.position, b.dom.style.top = Xl, b.dom.style.left = `0px`, this.container.insertBefore(b.dom, x), b.mount && b.mount(this.view), this.resizeObserver && this.resizeObserver.observe(b.dom), b;
	}
	destroy() {
		var _, y, b;
		this.view.win.removeEventListener(`resize`, this.measureSoon);
		for (let y of this.manager.tooltipViews) y.dom.remove(), (_ = y.destroy) == null || _.call(y);
		this.parent && this.container.remove(), (y = this.resizeObserver) == null || y.disconnect(), (b = this.intersectionObserver) == null || b.disconnect(), clearTimeout(this.measureTimeout);
	}
	readMeasure() {
		let _ = this.view.dom.getBoundingClientRect(), y = 1, b = 1, x = !1;
		if (this.position == `fixed` && this.manager.tooltipViews.length) {
			let { dom: _ } = this.manager.tooltipViews[0];
			if (X.gecko) x = _.offsetParent != this.container.ownerDocument.body;
			else if (_.style.top == Xl && _.style.left == `0px`) {
				let y = _.getBoundingClientRect();
				x = Math.abs(y.top + 1e4) > 1 || Math.abs(y.left) > 1;
			}
		}
		if (x || this.position == `absolute`) if (this.parent) {
			let _ = this.parent.getBoundingClientRect();
			_.width && _.height && (y = _.width / this.parent.offsetWidth, b = _.height / this.parent.offsetHeight);
		} else ({scaleX: y, scaleY: b} = this.view.viewState);
		return {
			editor: _,
			parent: this.parent ? this.container.getBoundingClientRect() : _,
			pos: this.manager.tooltips.map((_, y) => {
				let b = this.manager.tooltipViews[y];
				return b.getCoords ? b.getCoords(_.pos) : this.view.coordsAtPos(_.pos);
			}),
			size: this.manager.tooltipViews.map(({ dom: _ }) => _.getBoundingClientRect()),
			space: this.view.state.facet(Zl).tooltipSpace(this.view),
			scaleX: y,
			scaleY: b,
			makeAbsolute: x
		};
	}
	writeMeasure(_) {
		if (_.makeAbsolute) {
			this.madeAbsolute = !0, this.position = `absolute`;
			for (let _ of this.manager.tooltipViews) _.dom.style.position = `absolute`;
		}
		let { editor: y, space: b, scaleX: x, scaleY: S } = _, C = [];
		for (let w = 0; w < this.manager.tooltips.length; w++) {
			let E = this.manager.tooltips[w], D = this.manager.tooltipViews[w], { dom: O } = D, k = _.pos[w], A = _.size[w];
			if (!k || k.bottom <= Math.max(y.top, b.top) || k.top >= Math.min(y.bottom, b.bottom) || k.right < Math.max(y.left, b.left) - .1 || k.left > Math.min(y.right, b.right) + .1) {
				O.style.top = Xl;
				continue;
			}
			let j = E.arrow ? D.dom.querySelector(`.cm-tooltip-arrow`) : null, N = j ? 7 : 0, P = A.right - A.left, F = Ql.get(D) ?? A.bottom - A.top, I = D.offset || tu, L = this.view.textDirection == tc.LTR, R = A.width > b.right - b.left ? L ? b.left : b.right - A.width : L ? Math.min(k.left - (j ? 14 : 0) + I.x, b.right - P) : Math.max(b.left, k.left - P + (j ? 14 : 0) - I.x), z = this.above[w];
			!E.strictSide && (z ? k.top - (A.bottom - A.top) - I.y < b.top : k.bottom + (A.bottom - A.top) + I.y > b.bottom) && z == b.bottom - k.bottom > k.top - b.top && (z = this.above[w] = !z);
			let B = (z ? k.top - b.top : b.bottom - k.bottom) - N;
			if (B < F && D.resize !== !1) {
				if (B < this.view.defaultLineHeight) {
					O.style.top = Xl;
					continue;
				}
				Ql.set(D, F), O.style.height = (F = B) / S + `px`;
			} else O.style.height && (O.style.height = ``);
			let ee = z ? k.top - F - N - I.y : k.bottom + N + I.y, te = R + P;
			if (D.overlap !== !0) for (let _ of C) _.left < te && _.right > R && _.top < ee + F && _.bottom > ee && (ee = z ? _.top - F - 2 - N : _.bottom + N + 2);
			if (this.position == `absolute` ? (O.style.top = (ee - _.parent.top) / S + `px`, O.style.left = (R - _.parent.left) / x + `px`) : (O.style.top = ee / S + `px`, O.style.left = R / x + `px`), j) {
				let _ = k.left + (L ? I.x : -I.x) - (R + 14 - 7);
				j.style.left = _ / x + `px`;
			}
			D.overlap !== !0 && C.push({
				left: R,
				top: ee,
				right: te,
				bottom: ee + F
			}), O.classList.toggle(`cm-tooltip-above`, z), O.classList.toggle(`cm-tooltip-below`, !z), D.positioned && D.positioned(_.space);
		}
	}
	maybeMeasure() {
		if (this.manager.tooltips.length && (this.view.inView && this.view.requestMeasure(this.measureReq), this.inView != this.view.inView && (this.inView = this.view.inView, !this.inView))) for (let _ of this.manager.tooltipViews) _.dom.style.top = Xl;
	}
}, { eventObservers: { scroll() {
	this.maybeMeasure();
} } }), eu = Z.baseTheme({
	".cm-tooltip": {
		zIndex: 100,
		boxSizing: `border-box`
	},
	"&light .cm-tooltip": {
		border: `1px solid #bbb`,
		backgroundColor: `#f5f5f5`
	},
	"&light .cm-tooltip-section:not(:first-child)": { borderTop: `1px solid #bbb` },
	"&dark .cm-tooltip": {
		backgroundColor: `#333338`,
		color: `white`
	},
	".cm-tooltip-arrow": {
		height: `7px`,
		width: `14px`,
		position: `absolute`,
		zIndex: -1,
		overflow: `hidden`,
		"&:before, &:after": {
			content: `''`,
			position: `absolute`,
			width: 0,
			height: 0,
			borderLeft: `7px solid transparent`,
			borderRight: `7px solid transparent`
		},
		".cm-tooltip-above &": {
			bottom: `-7px`,
			"&:before": { borderTop: `7px solid #bbb` },
			"&:after": {
				borderTop: `7px solid #f5f5f5`,
				bottom: `1px`
			}
		},
		".cm-tooltip-below &": {
			top: `-7px`,
			"&:before": { borderBottom: `7px solid #bbb` },
			"&:after": {
				borderBottom: `7px solid #f5f5f5`,
				top: `1px`
			}
		}
	},
	"&dark .cm-tooltip .cm-tooltip-arrow": {
		"&:before": {
			borderTopColor: `#333338`,
			borderBottomColor: `#333338`
		},
		"&:after": {
			borderTopColor: `transparent`,
			borderBottomColor: `transparent`
		}
	}
}), tu = {
	x: 0,
	y: 0
}, nu = Y.define({ enables: [$l, eu] }), ru = Y.define({ combine: (_) => _.reduce((_, y) => _.concat(y), []) }), iu = class HoverTooltipHost {
	static create(_) {
		return new HoverTooltipHost(_);
	}
	constructor(_) {
		this.view = _, this.mounted = !1, this.dom = document.createElement(`div`), this.dom.classList.add(`cm-tooltip-hover`), this.manager = new TooltipViewManager(_, ru, (_, y) => this.createHostedView(_, y), (_) => _.dom.remove());
	}
	createHostedView(_, y) {
		let b = _.create(this.view);
		return b.dom.classList.add(`cm-tooltip-section`), this.dom.insertBefore(b.dom, y ? y.dom.nextSibling : this.dom.firstChild), this.mounted && b.mount && b.mount(this.view), b;
	}
	mount(_) {
		for (let y of this.manager.tooltipViews) y.mount && y.mount(_);
		this.mounted = !0;
	}
	positioned(_) {
		for (let y of this.manager.tooltipViews) y.positioned && y.positioned(_);
	}
	update(_) {
		this.manager.update(_);
	}
	destroy() {
		var _;
		for (let y of this.manager.tooltipViews) (_ = y.destroy) == null || _.call(y);
	}
	passProp(_) {
		let y;
		for (let b of this.manager.tooltipViews) {
			let x = b[_];
			if (x !== void 0) {
				if (y === void 0) y = x;
				else if (y !== x) return;
			}
		}
		return y;
	}
	get offset() {
		return this.passProp(`offset`);
	}
	get getCoords() {
		return this.passProp(`getCoords`);
	}
	get overlap() {
		return this.passProp(`overlap`);
	}
	get resize() {
		return this.passProp(`resize`);
	}
}, au = nu.compute([ru], (_) => {
	let y = _.facet(ru);
	return y.length === 0 ? null : {
		pos: Math.min(...y.map((_) => _.pos)),
		end: Math.max(...y.map((_) => _.end ?? _.pos)),
		create: iu.create,
		above: y[0].above,
		arrow: y.some((_) => _.arrow)
	};
}), HoverPlugin = class {
	constructor(_, y, b, x, S) {
		this.view = _, this.source = y, this.field = b, this.setHover = x, this.hoverTime = S, this.hoverTimeout = -1, this.restartTimeout = -1, this.pending = null, this.lastMove = {
			x: 0,
			y: 0,
			target: _.dom,
			time: 0
		}, this.checkHover = this.checkHover.bind(this), _.dom.addEventListener(`mouseleave`, this.mouseleave = this.mouseleave.bind(this)), _.dom.addEventListener(`mousemove`, this.mousemove = this.mousemove.bind(this));
	}
	update() {
		this.pending && (this.pending = null, clearTimeout(this.restartTimeout), this.restartTimeout = setTimeout(() => this.startHover(), 20));
	}
	get active() {
		return this.view.state.field(this.field);
	}
	checkHover() {
		if (this.hoverTimeout = -1, this.active.length) return;
		let _ = Date.now() - this.lastMove.time;
		_ < this.hoverTime ? this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime - _) : this.startHover();
	}
	startHover() {
		clearTimeout(this.restartTimeout);
		let { view: _, lastMove: y } = this, b = _.docView.nearest(y.target);
		if (!b) return;
		let x, S = 1;
		if (b instanceof Gs) x = b.posAtStart;
		else {
			if (x = _.posAtCoords(y), x == null) return;
			let b = _.coordsAtPos(x);
			if (!b || y.y < b.top || y.y > b.bottom || y.x < b.left - _.defaultCharacterWidth || y.x > b.right + _.defaultCharacterWidth) return;
			let C = _.bidiSpans(_.state.doc.lineAt(x)).find((_) => _.from <= x && _.to >= x), w = C && C.dir == tc.RTL ? -1 : 1;
			S = y.x < b.left ? -w : w;
		}
		let C = this.source(_, x, S);
		if (C?.then) {
			let y = this.pending = { pos: x };
			C.then((b) => {
				this.pending == y && (this.pending = null, b && !(Array.isArray(b) && !b.length) && _.dispatch({ effects: this.setHover.of(Array.isArray(b) ? b : [b]) }));
			}, (y) => logException(_.state, y, `hover tooltip`));
		} else C && !(Array.isArray(C) && !C.length) && _.dispatch({ effects: this.setHover.of(Array.isArray(C) ? C : [C]) });
	}
	get tooltip() {
		let _ = this.view.plugin($l), y = _ ? _.manager.tooltips.findIndex((_) => _.create == iu.create) : -1;
		return y > -1 ? _.manager.tooltipViews[y] : null;
	}
	mousemove(_) {
		this.lastMove = {
			x: _.clientX,
			y: _.clientY,
			target: _.target,
			time: Date.now()
		}, this.hoverTimeout < 0 && (this.hoverTimeout = setTimeout(this.checkHover, this.hoverTime));
		let { active: y, tooltip: b } = this;
		if (y.length && b && !isInTooltip(b.dom, _) || this.pending) {
			let { pos: b } = y[0] || this.pending, x = y[0]?.end ?? b;
			(b == x ? this.view.posAtCoords(this.lastMove) != b : !isOverRange(this.view, b, x, _.clientX, _.clientY)) && (this.view.dispatch({ effects: this.setHover.of([]) }), this.pending = null);
		}
	}
	mouseleave(_) {
		clearTimeout(this.hoverTimeout), this.hoverTimeout = -1;
		let { active: y } = this;
		if (y.length) {
			let { tooltip: y } = this;
			y && y.dom.contains(_.relatedTarget) ? this.watchTooltipLeave(y.dom) : this.view.dispatch({ effects: this.setHover.of([]) });
		}
	}
	watchTooltipLeave(_) {
		let watch = (y) => {
			_.removeEventListener(`mouseleave`, watch), this.active.length && !this.view.dom.contains(y.relatedTarget) && this.view.dispatch({ effects: this.setHover.of([]) });
		};
		_.addEventListener(`mouseleave`, watch);
	}
	destroy() {
		clearTimeout(this.hoverTimeout), this.view.dom.removeEventListener(`mouseleave`, this.mouseleave), this.view.dom.removeEventListener(`mousemove`, this.mousemove);
	}
}, ou = 4;
function isInTooltip(_, y) {
	let b = _.getBoundingClientRect();
	return y.clientX >= b.left - ou && y.clientX <= b.right + ou && y.clientY >= b.top - ou && y.clientY <= b.bottom + ou;
}
function isOverRange(_, y, b, x, S, C) {
	let w = _.scrollDOM.getBoundingClientRect(), E = _.documentTop + _.documentPadding.top + _.contentHeight;
	if (w.left > x || w.right < x || w.top > S || Math.min(w.bottom, E) < S) return !1;
	let D = _.posAtCoords({
		x,
		y: S
	}, !1);
	return D >= y && D <= b;
}
function hoverTooltip(_, y = {}) {
	let b = ns.define(), x = Wo.define({
		create() {
			return [];
		},
		update(_, x) {
			if (_.length && (y.hideOnChange && (x.docChanged || x.selection) ? _ = [] : y.hideOn && (_ = _.filter((_) => !y.hideOn(x, _))), x.docChanged)) {
				let y = [];
				for (let b of _) {
					let _ = x.changes.mapPos(b.pos, -1, Ro.TrackDel);
					if (_ != null) {
						let S = Object.assign(Object.create(null), b);
						S.pos = _, S.end != null && (S.end = x.changes.mapPos(S.end)), y.push(S);
					}
				}
				_ = y;
			}
			for (let y of x.effects) y.is(b) && (_ = y.value), y.is(su) && (_ = []);
			return _;
		},
		provide: (_) => ru.from(_)
	});
	return [
		x,
		Ec.define((S) => new HoverPlugin(S, _, x, b, y.hoverTime || 300)),
		au
	];
}
function getTooltip(_, y) {
	let b = _.plugin($l);
	if (!b) return null;
	let x = b.manager.tooltips.indexOf(y);
	return x < 0 ? null : b.manager.tooltipViews[x];
}
var su = ns.define(), cu = Y.define({ combine(_) {
	let y, b;
	for (let x of _) y ||= x.topContainer, b ||= x.bottomContainer;
	return {
		topContainer: y,
		bottomContainer: b
	};
} });
function getPanel(_, y) {
	let b = _.plugin(lu), x = b ? b.specs.indexOf(y) : -1;
	return x > -1 ? b.panels[x] : null;
}
var lu = Ec.fromClass(class {
	constructor(_) {
		this.input = _.state.facet(uu), this.specs = this.input.filter((_) => _), this.panels = this.specs.map((y) => y(_));
		let y = _.state.facet(cu);
		this.top = new PanelGroup(_, !0, y.topContainer), this.bottom = new PanelGroup(_, !1, y.bottomContainer), this.top.sync(this.panels.filter((_) => _.top)), this.bottom.sync(this.panels.filter((_) => !_.top));
		for (let _ of this.panels) _.dom.classList.add(`cm-panel`), _.mount && _.mount();
	}
	update(_) {
		let y = _.state.facet(cu);
		this.top.container != y.topContainer && (this.top.sync([]), this.top = new PanelGroup(_.view, !0, y.topContainer)), this.bottom.container != y.bottomContainer && (this.bottom.sync([]), this.bottom = new PanelGroup(_.view, !1, y.bottomContainer)), this.top.syncClasses(), this.bottom.syncClasses();
		let b = _.state.facet(uu);
		if (b != this.input) {
			let y = b.filter((_) => _), x = [], S = [], C = [], w = [];
			for (let b of y) {
				let y = this.specs.indexOf(b), E;
				y < 0 ? (E = b(_.view), w.push(E)) : (E = this.panels[y], E.update && E.update(_)), x.push(E), (E.top ? S : C).push(E);
			}
			this.specs = y, this.panels = x, this.top.sync(S), this.bottom.sync(C);
			for (let _ of w) _.dom.classList.add(`cm-panel`), _.mount && _.mount();
		} else for (let y of this.panels) y.update && y.update(_);
	}
	destroy() {
		this.top.sync([]), this.bottom.sync([]);
	}
}, { provide: (_) => Z.scrollMargins.of((y) => {
	let b = y.plugin(_);
	return b && {
		top: b.top.scrollMargin(),
		bottom: b.bottom.scrollMargin()
	};
}) }), PanelGroup = class {
	constructor(_, y, b) {
		this.view = _, this.top = y, this.container = b, this.dom = void 0, this.classes = ``, this.panels = [], this.syncClasses();
	}
	sync(_) {
		for (let y of this.panels) y.destroy && _.indexOf(y) < 0 && y.destroy();
		this.panels = _, this.syncDOM();
	}
	syncDOM() {
		if (this.panels.length == 0) {
			this.dom &&= (this.dom.remove(), void 0);
			return;
		}
		if (!this.dom) {
			this.dom = document.createElement(`div`), this.dom.className = this.top ? `cm-panels cm-panels-top` : `cm-panels cm-panels-bottom`, this.dom.style[this.top ? `top` : `bottom`] = `0`;
			let _ = this.container || this.view.dom;
			_.insertBefore(this.dom, this.top ? _.firstChild : null);
		}
		let _ = this.dom.firstChild;
		for (let y of this.panels) if (y.dom.parentNode == this.dom) {
			for (; _ != y.dom;) _ = rm(_);
			_ = _.nextSibling;
		} else this.dom.insertBefore(y.dom, _);
		for (; _;) _ = rm(_);
	}
	scrollMargin() {
		return !this.dom || this.container ? 0 : Math.max(0, this.top ? this.dom.getBoundingClientRect().bottom - Math.max(0, this.view.scrollDOM.getBoundingClientRect().top) : Math.min(innerHeight, this.view.scrollDOM.getBoundingClientRect().bottom) - this.dom.getBoundingClientRect().top);
	}
	syncClasses() {
		if (!(!this.container || this.classes == this.view.themeClasses)) {
			for (let _ of this.classes.split(` `)) _ && this.container.classList.remove(_);
			for (let _ of (this.classes = this.view.themeClasses).split(` `)) _ && this.container.classList.add(_);
		}
	}
};
function rm(_) {
	let y = _.nextSibling;
	return _.remove(), y;
}
var uu = Y.define({ enables: lu }), GutterMarker = class extends RangeValue {
	compare(_) {
		return this == _ || this.constructor == _.constructor && this.eq(_);
	}
	eq(_) {
		return !1;
	}
	destroy(_) {}
};
GutterMarker.prototype.elementClass = ``, GutterMarker.prototype.toDOM = void 0, GutterMarker.prototype.mapMode = Ro.TrackBefore, GutterMarker.prototype.startSide = GutterMarker.prototype.endSide = -1, GutterMarker.prototype.point = !0;
var du = Y.define(), fu = {
	class: ``,
	renderEmptyElements: !1,
	elementStyle: ``,
	markers: () => fs.empty,
	lineMarker: () => null,
	widgetMarker: () => null,
	lineMarkerChange: null,
	initialSpacer: null,
	updateSpacer: null,
	domEventHandlers: {}
}, pu = Y.define();
function gutter(_) {
	return [gutters(), pu.of(Object.assign(Object.assign({}, fu), _))];
}
var mu = Y.define({ combine: (_) => _.some((_) => _) });
function gutters(_) {
	let y = [hu];
	return _ && _.fixed === !1 && y.push(mu.of(!0)), y;
}
var hu = Ec.fromClass(class {
	constructor(_) {
		this.view = _, this.prevViewport = _.viewport, this.dom = document.createElement(`div`), this.dom.className = `cm-gutters`, this.dom.setAttribute(`aria-hidden`, `true`), this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + `px`, this.gutters = _.state.facet(pu).map((y) => new SingleGutterView(_, y));
		for (let _ of this.gutters) this.dom.appendChild(_.dom);
		this.fixed = !_.state.facet(mu), this.fixed && (this.dom.style.position = `sticky`), this.syncGutters(!1), _.scrollDOM.insertBefore(this.dom, _.contentDOM);
	}
	update(_) {
		if (this.updateGutters(_)) {
			let y = this.prevViewport, b = _.view.viewport, x = Math.min(y.to, b.to) - Math.max(y.from, b.from);
			this.syncGutters(x < (b.to - b.from) * .8);
		}
		_.geometryChanged && (this.dom.style.minHeight = this.view.contentHeight / this.view.scaleY + `px`), this.view.state.facet(mu) != !this.fixed && (this.fixed = !this.fixed, this.dom.style.position = this.fixed ? `sticky` : ``), this.prevViewport = _.view.viewport;
	}
	syncGutters(_) {
		let y = this.dom.nextSibling;
		_ && this.dom.remove();
		let b = fs.iter(this.view.state.facet(du), this.view.viewport.from), x = [], S = this.gutters.map((_) => new UpdateContext(_, this.view.viewport, -this.view.documentPadding.top));
		for (let _ of this.view.viewportLineBlocks) if (x.length && (x = []), Array.isArray(_.type)) {
			let y = !0;
			for (let C of _.type) if (C.type == Xs.Text && y) {
				advanceCursor(b, x, C.from);
				for (let _ of S) _.line(this.view, C, x);
				y = !1;
			} else if (C.widget) for (let _ of S) _.widget(this.view, C);
		} else if (_.type == Xs.Text) {
			advanceCursor(b, x, _.from);
			for (let y of S) y.line(this.view, _, x);
		} else if (_.widget) for (let y of S) y.widget(this.view, _);
		for (let _ of S) _.finish();
		_ && this.view.scrollDOM.insertBefore(this.dom, y);
	}
	updateGutters(_) {
		let y = _.startState.facet(pu), b = _.state.facet(pu), x = _.docChanged || _.heightChanged || _.viewportChanged || !fs.eq(_.startState.facet(du), _.state.facet(du), _.view.viewport.from, _.view.viewport.to);
		if (y == b) for (let y of this.gutters) y.update(_) && (x = !0);
		else {
			x = !0;
			let S = [];
			for (let x of b) {
				let b = y.indexOf(x);
				b < 0 ? S.push(new SingleGutterView(this.view, x)) : (this.gutters[b].update(_), S.push(this.gutters[b]));
			}
			for (let _ of this.gutters) _.dom.remove(), S.indexOf(_) < 0 && _.destroy();
			for (let _ of S) this.dom.appendChild(_.dom);
			this.gutters = S;
		}
		return x;
	}
	destroy() {
		for (let _ of this.gutters) _.destroy();
		this.dom.remove();
	}
}, { provide: (_) => Z.scrollMargins.of((y) => {
	let b = y.plugin(_);
	return !b || b.gutters.length == 0 || !b.fixed ? null : y.textDirection == tc.LTR ? { left: b.dom.offsetWidth * y.scaleX } : { right: b.dom.offsetWidth * y.scaleX };
}) });
function asArray(_) {
	return Array.isArray(_) ? _ : [_];
}
function advanceCursor(_, y, b) {
	for (; _.value && _.from <= b;) _.from == b && y.push(_.value), _.next();
}
var UpdateContext = class {
	constructor(_, y, b) {
		this.gutter = _, this.height = b, this.i = 0, this.cursor = fs.iter(_.markers, y.from);
	}
	addElement(_, y, b) {
		let { gutter: x } = this, S = (y.top - this.height) / _.scaleY, C = y.height / _.scaleY;
		if (this.i == x.elements.length) {
			let y = new GutterElement(_, C, S, b);
			x.elements.push(y), x.dom.appendChild(y.dom);
		} else x.elements[this.i].update(_, C, S, b);
		this.height = y.bottom, this.i++;
	}
	line(_, y, b) {
		let x = [];
		advanceCursor(this.cursor, x, y.from), b.length && (x = x.concat(b));
		let S = this.gutter.config.lineMarker(_, y, x);
		S && x.unshift(S);
		let C = this.gutter;
		x.length == 0 && !C.config.renderEmptyElements || this.addElement(_, y, x);
	}
	widget(_, y) {
		let b = this.gutter.config.widgetMarker(_, y.widget, y);
		b && this.addElement(_, y, [b]);
	}
	finish() {
		let _ = this.gutter;
		for (; _.elements.length > this.i;) {
			let y = _.elements.pop();
			_.dom.removeChild(y.dom), y.destroy();
		}
	}
}, SingleGutterView = class {
	constructor(_, y) {
		this.view = _, this.config = y, this.elements = [], this.spacer = null, this.dom = document.createElement(`div`), this.dom.className = `cm-gutter` + (this.config.class ? ` ` + this.config.class : ``);
		for (let b in y.domEventHandlers) this.dom.addEventListener(b, (x) => {
			let S = x.target, C;
			if (S != this.dom && this.dom.contains(S)) {
				for (; S.parentNode != this.dom;) S = S.parentNode;
				let _ = S.getBoundingClientRect();
				C = (_.top + _.bottom) / 2;
			} else C = x.clientY;
			let w = _.lineBlockAtHeight(C - _.documentTop);
			y.domEventHandlers[b](_, w, x) && x.preventDefault();
		});
		this.markers = asArray(y.markers(_)), y.initialSpacer && (this.spacer = new GutterElement(_, 0, 0, [y.initialSpacer(_)]), this.dom.appendChild(this.spacer.dom), this.spacer.dom.style.cssText += `visibility: hidden; pointer-events: none`);
	}
	update(_) {
		let y = this.markers;
		if (this.markers = asArray(this.config.markers(_.view)), this.spacer && this.config.updateSpacer) {
			let y = this.config.updateSpacer(this.spacer.markers[0], _);
			y != this.spacer.markers[0] && this.spacer.update(_.view, 0, 0, [y]);
		}
		let b = _.view.viewport;
		return !fs.eq(this.markers, y, b.from, b.to) || (this.config.lineMarkerChange ? this.config.lineMarkerChange(_) : !1);
	}
	destroy() {
		for (let _ of this.elements) _.destroy();
	}
}, GutterElement = class {
	constructor(_, y, b, x) {
		this.height = -1, this.above = 0, this.markers = [], this.dom = document.createElement(`div`), this.dom.className = `cm-gutterElement`, this.update(_, y, b, x);
	}
	update(_, y, b, x) {
		this.height != y && (this.height = y, this.dom.style.height = y + `px`), this.above != b && (this.dom.style.marginTop = (this.above = b) ? b + `px` : ``), sameMarkers(this.markers, x) || this.setMarkers(_, x);
	}
	setMarkers(_, y) {
		let b = `cm-gutterElement`, x = this.dom.firstChild;
		for (let S = 0, C = 0;;) {
			let w = C, E = S < y.length ? y[S++] : null, D = !1;
			if (E) {
				let _ = E.elementClass;
				_ && (b += ` ` + _);
				for (let _ = C; _ < this.markers.length; _++) if (this.markers[_].compare(E)) {
					w = _, D = !0;
					break;
				}
			} else w = this.markers.length;
			for (; C < w;) {
				let _ = this.markers[C++];
				if (_.toDOM) {
					_.destroy(x);
					let y = x.nextSibling;
					x.remove(), x = y;
				}
			}
			if (!E) break;
			E.toDOM && (D ? x = x.nextSibling : this.dom.insertBefore(E.toDOM(_), x)), D && C++;
		}
		this.dom.className = b, this.markers = y;
	}
	destroy() {
		this.setMarkers(null, []);
	}
};
function sameMarkers(_, y) {
	if (_.length != y.length) return !1;
	for (let b = 0; b < _.length; b++) if (!_[b].compare(y[b])) return !1;
	return !0;
}
var gu = Y.define(), _u = Y.define({ combine(_) {
	return combineConfig(_, {
		formatNumber: String,
		domEventHandlers: {}
	}, { domEventHandlers(_, y) {
		let b = Object.assign({}, _);
		for (let _ in y) {
			let x = b[_], S = y[_];
			b[_] = x ? (_, y, b) => x(_, y, b) || S(_, y, b) : S;
		}
		return b;
	} });
} }), NumberMarker = class extends GutterMarker {
	constructor(_) {
		super(), this.number = _;
	}
	eq(_) {
		return this.number == _.number;
	}
	toDOM() {
		return document.createTextNode(this.number);
	}
};
function formatNumber(_, y) {
	return _.state.facet(_u).formatNumber(y, _.state);
}
var vu = pu.compute([_u], (_) => ({
	class: `cm-lineNumbers`,
	renderEmptyElements: !1,
	markers(_) {
		return _.state.facet(gu);
	},
	lineMarker(_, y, b) {
		return b.some((_) => _.toDOM) ? null : new NumberMarker(formatNumber(_, _.state.doc.lineAt(y.from).number));
	},
	widgetMarker: () => null,
	lineMarkerChange: (_) => _.startState.facet(_u) != _.state.facet(_u),
	initialSpacer(_) {
		return new NumberMarker(formatNumber(_, maxLineNumber(_.state.doc.lines)));
	},
	updateSpacer(_, y) {
		let b = formatNumber(y.view, maxLineNumber(y.view.state.doc.lines));
		return b == _.number ? _ : new NumberMarker(b);
	},
	domEventHandlers: _.facet(_u).domEventHandlers
}));
function lineNumbers(_ = {}) {
	return [
		_u.of(_),
		gutters(),
		vu
	];
}
function maxLineNumber(_) {
	let y = 9;
	for (; y < _;) y = y * 10 + 9;
	return y;
}
var yu = new class extends GutterMarker {
	constructor() {
		super(...arguments), this.elementClass = `cm-activeLineGutter`;
	}
}(), bu = du.compute([`selection`], (_) => {
	let y = [], b = -1;
	for (let x of _.selection.ranges) {
		let S = _.doc.lineAt(x.head).from;
		S > b && (b = S, y.push(yu.range(S)));
	}
	return fs.of(y);
});
function highlightActiveLineGutter() {
	return bu;
}
var xu = 1024, Su = 0, Range = class {
	constructor(_, y) {
		this.from = _, this.to = y;
	}
}, NodeProp = class {
	constructor(_ = {}) {
		this.id = Su++, this.perNode = !!_.perNode, this.deserialize = _.deserialize || (() => {
			throw Error(`This node type doesn't define a deserialize function`);
		});
	}
	add(_) {
		if (this.perNode) throw RangeError(`Can't add per-node props to node types`);
		return typeof _ != `function` && (_ = wu.match(_)), (y) => {
			let b = _(y);
			return b === void 0 ? null : [this, b];
		};
	}
};
NodeProp.closedBy = new NodeProp({ deserialize: (_) => _.split(` `) }), NodeProp.openedBy = new NodeProp({ deserialize: (_) => _.split(` `) }), NodeProp.group = new NodeProp({ deserialize: (_) => _.split(` `) }), NodeProp.isolate = new NodeProp({ deserialize: (_) => {
	if (_ && _ != `rtl` && _ != `ltr` && _ != `auto`) throw RangeError(`Invalid value for isolate: ` + _);
	return _ || `auto`;
} }), NodeProp.contextHash = new NodeProp({ perNode: !0 }), NodeProp.lookAhead = new NodeProp({ perNode: !0 }), NodeProp.mounted = new NodeProp({ perNode: !0 });
var MountedTree = class {
	constructor(_, y, b) {
		this.tree = _, this.overlay = y, this.parser = b;
	}
	static get(_) {
		return _ && _.props && _.props[NodeProp.mounted.id];
	}
}, Cu = Object.create(null), wu = class NodeType {
	constructor(_, y, b, x = 0) {
		this.name = _, this.props = y, this.id = b, this.flags = x;
	}
	static define(_) {
		let y = _.props && _.props.length ? Object.create(null) : Cu, b = !!_.top | (_.skipped ? 2 : 0) | (_.error ? 4 : 0) | (_.name == null ? 8 : 0), x = new NodeType(_.name || ``, y, _.id, b);
		if (_.props) {
			for (let b of _.props) if (Array.isArray(b) || (b = b(x)), b) {
				if (b[0].perNode) throw RangeError(`Can't store a per-node prop on a node type`);
				y[b[0].id] = b[1];
			}
		}
		return x;
	}
	prop(_) {
		return this.props[_.id];
	}
	get isTop() {
		return (this.flags & 1) > 0;
	}
	get isSkipped() {
		return (this.flags & 2) > 0;
	}
	get isError() {
		return (this.flags & 4) > 0;
	}
	get isAnonymous() {
		return (this.flags & 8) > 0;
	}
	is(_) {
		if (typeof _ == `string`) {
			if (this.name == _) return !0;
			let y = this.prop(NodeProp.group);
			return y ? y.indexOf(_) > -1 : !1;
		}
		return this.id == _;
	}
	static match(_) {
		let y = Object.create(null);
		for (let b in _) for (let x of b.split(` `)) y[x] = _[b];
		return (_) => {
			for (let b = _.prop(NodeProp.group), x = -1; x < (b ? b.length : 0); x++) {
				let S = y[x < 0 ? _.name : b[x]];
				if (S) return S;
			}
		};
	}
};
wu.none = new wu(``, Object.create(null), 0, 8);
var Tu = class NodeSet {
	constructor(_) {
		this.types = _;
		for (let y = 0; y < _.length; y++) if (_[y].id != y) throw RangeError(`Node type ids should correspond to array positions when creating a node set`);
	}
	extend(..._) {
		let y = [];
		for (let b of this.types) {
			let x = null;
			for (let y of _) {
				let _ = y(b);
				_ && (x ||= Object.assign({}, b.props), x[_[0].id] = _[1]);
			}
			y.push(x ? new wu(b.name, x, b.id, b.flags) : b);
		}
		return new NodeSet(y);
	}
}, Eu = /* @__PURE__ */ new WeakMap(), Du = /* @__PURE__ */ new WeakMap(), Ou;
(function(_) {
	_[_.ExcludeBuffers = 1] = `ExcludeBuffers`, _[_.IncludeAnonymous = 2] = `IncludeAnonymous`, _[_.IgnoreMounts = 4] = `IgnoreMounts`, _[_.IgnoreOverlays = 8] = `IgnoreOverlays`;
})(Ou ||= {});
var ku = class Tree {
	constructor(_, y, b, x, S) {
		if (this.type = _, this.children = y, this.positions = b, this.length = x, this.props = null, S && S.length) {
			this.props = Object.create(null);
			for (let [_, y] of S) this.props[typeof _ == `number` ? _ : _.id] = y;
		}
	}
	toString() {
		let _ = MountedTree.get(this);
		if (_ && !_.overlay) return _.tree.toString();
		let y = ``;
		for (let _ of this.children) {
			let b = _.toString();
			b && (y && (y += `,`), y += b);
		}
		return this.type.name ? (/\W/.test(this.type.name) && !this.type.isError ? JSON.stringify(this.type.name) : this.type.name) + (y.length ? `(` + y + `)` : ``) : y;
	}
	cursor(_ = 0) {
		return new TreeCursor(this.topNode, _);
	}
	cursorAt(_, y = 0, b = 0) {
		let x = new TreeCursor(Eu.get(this) || this.topNode);
		return x.moveTo(_, y), Eu.set(this, x._tree), x;
	}
	get topNode() {
		return new Mu(this, 0, 0, null);
	}
	resolve(_, y = 0) {
		let b = resolveNode(Eu.get(this) || this.topNode, _, y, !1);
		return Eu.set(this, b), b;
	}
	resolveInner(_, y = 0) {
		let b = resolveNode(Du.get(this) || this.topNode, _, y, !0);
		return Du.set(this, b), b;
	}
	resolveStack(_, y = 0) {
		return stackIterator(this, _, y);
	}
	iterate(_) {
		let { enter: y, leave: b, from: x = 0, to: S = this.length } = _, C = _.mode || 0, w = (C & Ou.IncludeAnonymous) > 0;
		for (let _ = this.cursor(C | Ou.IncludeAnonymous);;) {
			let C = !1;
			if (_.from <= S && _.to >= x && (!w && _.type.isAnonymous || y(_) !== !1)) {
				if (_.firstChild()) continue;
				C = !0;
			}
			for (; C && b && (w || !_.type.isAnonymous) && b(_), !_.nextSibling();) {
				if (!_.parent()) return;
				C = !0;
			}
		}
	}
	prop(_) {
		return _.perNode ? this.props ? this.props[_.id] : void 0 : this.type.prop(_);
	}
	get propValues() {
		let _ = [];
		if (this.props) for (let y in this.props) _.push([+y, this.props[y]]);
		return _;
	}
	balance(_ = {}) {
		return this.children.length <= 8 ? this : balanceRange(wu.none, this.children, this.positions, 0, this.children.length, 0, this.length, (_, y, b) => new Tree(this.type, _, y, b, this.propValues), _.makeTree || ((_, y, b) => new Tree(wu.none, _, y, b)));
	}
	static build(_) {
		return buildTree(_);
	}
};
ku.empty = new ku(wu.none, [], [], 0);
var Au = class FlatBufferCursor {
	constructor(_, y) {
		this.buffer = _, this.index = y;
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	get pos() {
		return this.index;
	}
	next() {
		this.index -= 4;
	}
	fork() {
		return new FlatBufferCursor(this.buffer, this.index);
	}
}, ju = class TreeBuffer {
	constructor(_, y, b) {
		this.buffer = _, this.length = y, this.set = b;
	}
	get type() {
		return wu.none;
	}
	toString() {
		let _ = [];
		for (let y = 0; y < this.buffer.length;) _.push(this.childString(y)), y = this.buffer[y + 3];
		return _.join(`,`);
	}
	childString(_) {
		let y = this.buffer[_], b = this.buffer[_ + 3], x = this.set.types[y], S = x.name;
		if (/\W/.test(S) && !x.isError && (S = JSON.stringify(S)), _ += 4, b == _) return S;
		let C = [];
		for (; _ < b;) C.push(this.childString(_)), _ = this.buffer[_ + 3];
		return S + `(` + C.join(`,`) + `)`;
	}
	findChild(_, y, b, x, S) {
		let { buffer: C } = this, w = -1;
		for (let E = _; E != y && !(checkSide(S, x, C[E + 1], C[E + 2]) && (w = E, b > 0)); E = C[E + 3]);
		return w;
	}
	slice(_, y, b) {
		let x = this.buffer, S = new Uint16Array(y - _), C = 0;
		for (let w = _, E = 0; w < y;) {
			S[E++] = x[w++], S[E++] = x[w++] - b;
			let y = S[E++] = x[w++] - b;
			S[E++] = x[w++] - _, C = Math.max(C, y);
		}
		return new TreeBuffer(S, C, this.set);
	}
};
function checkSide(_, y, b, x) {
	switch (_) {
		case -2: return b < y;
		case -1: return x >= y && b < y;
		case 0: return b < y && x > y;
		case 1: return b <= y && x > y;
		case 2: return x > y;
		case 4: return !0;
	}
}
function resolveNode(_, y, b, x) {
	for (; _.from == _.to || (b < 1 ? _.from >= y : _.from > y) || (b > -1 ? _.to <= y : _.to < y);) {
		let y = !x && _ instanceof Mu && _.index < 0 ? null : _.parent;
		if (!y) return _;
		_ = y;
	}
	let S = x ? 0 : Ou.IgnoreOverlays;
	if (x) for (let x = _, C = x.parent; C; x = C, C = x.parent) x instanceof Mu && x.index < 0 && C.enter(y, b, S)?.from != x.from && (_ = C);
	for (;;) {
		let x = _.enter(y, b, S);
		if (!x) return _;
		_ = x;
	}
}
var BaseNode = class {
	cursor(_ = 0) {
		return new TreeCursor(this, _);
	}
	getChild(_, y = null, b = null) {
		let x = getChildren(this, _, y, b);
		return x.length ? x[0] : null;
	}
	getChildren(_, y = null, b = null) {
		return getChildren(this, _, y, b);
	}
	resolve(_, y = 0) {
		return resolveNode(this, _, y, !1);
	}
	resolveInner(_, y = 0) {
		return resolveNode(this, _, y, !0);
	}
	matchContext(_) {
		return matchNodeContext(this, _);
	}
	enterUnfinishedNodesBefore(_) {
		let y = this.childBefore(_), b = this;
		for (; y;) {
			let _ = y.lastChild;
			if (!_ || _.to != y.to) break;
			_.type.isError && _.from == _.to ? (b = y, y = _.prevSibling) : y = _;
		}
		return b;
	}
	get node() {
		return this;
	}
	get next() {
		return this.parent;
	}
}, Mu = class TreeNode extends BaseNode {
	constructor(_, y, b, x) {
		super(), this._tree = _, this.from = y, this.index = b, this._parent = x;
	}
	get type() {
		return this._tree.type;
	}
	get name() {
		return this._tree.type.name;
	}
	get to() {
		return this.from + this._tree.length;
	}
	nextChild(_, y, b, x, S = 0) {
		for (let C = this;;) {
			for (let { children: w, positions: E } = C._tree, D = y > 0 ? w.length : -1; _ != D; _ += y) {
				let D = w[_], O = E[_] + C.from;
				if (checkSide(x, b, O, O + D.length)) {
					if (D instanceof ju) {
						if (S & Ou.ExcludeBuffers) continue;
						let w = D.findChild(0, D.buffer.length, y, b - O, x);
						if (w > -1) return new Nu(new BufferContext(C, D, _, O), null, w);
					} else if (S & Ou.IncludeAnonymous || !D.type.isAnonymous || hasChild(D)) {
						let w;
						if (!(S & Ou.IgnoreMounts) && (w = MountedTree.get(D)) && !w.overlay) return new TreeNode(w.tree, O, _, C);
						let E = new TreeNode(D, O, _, C);
						return S & Ou.IncludeAnonymous || !E.type.isAnonymous ? E : E.nextChild(y < 0 ? D.children.length - 1 : 0, y, b, x);
					}
				}
			}
			if (S & Ou.IncludeAnonymous || !C.type.isAnonymous || (_ = C.index >= 0 ? C.index + y : y < 0 ? -1 : C._parent._tree.children.length, C = C._parent, !C)) return null;
		}
	}
	get firstChild() {
		return this.nextChild(0, 1, 0, 4);
	}
	get lastChild() {
		return this.nextChild(this._tree.children.length - 1, -1, 0, 4);
	}
	childAfter(_) {
		return this.nextChild(0, 1, _, 2);
	}
	childBefore(_) {
		return this.nextChild(this._tree.children.length - 1, -1, _, -2);
	}
	enter(_, y, b = 0) {
		let x;
		if (!(b & Ou.IgnoreOverlays) && (x = MountedTree.get(this._tree)) && x.overlay) {
			let b = _ - this.from;
			for (let { from: _, to: S } of x.overlay) if ((y > 0 ? _ <= b : _ < b) && (y < 0 ? S >= b : S > b)) return new TreeNode(x.tree, x.overlay[0].from + this.from, -1, this);
		}
		return this.nextChild(0, 1, _, y, b);
	}
	nextSignificantParent() {
		let _ = this;
		for (; _.type.isAnonymous && _._parent;) _ = _._parent;
		return _;
	}
	get parent() {
		return this._parent ? this._parent.nextSignificantParent() : null;
	}
	get nextSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index + 1, 1, 0, 4) : null;
	}
	get prevSibling() {
		return this._parent && this.index >= 0 ? this._parent.nextChild(this.index - 1, -1, 0, 4) : null;
	}
	get tree() {
		return this._tree;
	}
	toTree() {
		return this._tree;
	}
	toString() {
		return this._tree.toString();
	}
};
function getChildren(_, y, b, x) {
	let S = _.cursor(), C = [];
	if (!S.firstChild()) return C;
	if (b != null) {
		for (let _ = !1; !_;) if (_ = S.type.is(b), !S.nextSibling()) return C;
	}
	for (;;) {
		if (x != null && S.type.is(x)) return C;
		if (S.type.is(y) && C.push(S.node), !S.nextSibling()) return x == null ? C : [];
	}
}
function matchNodeContext(_, y, b = y.length - 1) {
	for (let x = _.parent; b >= 0; x = x.parent) {
		if (!x) return !1;
		if (!x.type.isAnonymous) {
			if (y[b] && y[b] != x.name) return !1;
			b--;
		}
	}
	return !0;
}
var BufferContext = class {
	constructor(_, y, b, x) {
		this.parent = _, this.buffer = y, this.index = b, this.start = x;
	}
}, Nu = class BufferNode extends BaseNode {
	get name() {
		return this.type.name;
	}
	get from() {
		return this.context.start + this.context.buffer.buffer[this.index + 1];
	}
	get to() {
		return this.context.start + this.context.buffer.buffer[this.index + 2];
	}
	constructor(_, y, b) {
		super(), this.context = _, this._parent = y, this.index = b, this.type = _.buffer.set.types[_.buffer.buffer[b]];
	}
	child(_, y, b) {
		let { buffer: x } = this.context, S = x.findChild(this.index + 4, x.buffer[this.index + 3], _, y - this.context.start, b);
		return S < 0 ? null : new BufferNode(this.context, this, S);
	}
	get firstChild() {
		return this.child(1, 0, 4);
	}
	get lastChild() {
		return this.child(-1, 0, 4);
	}
	childAfter(_) {
		return this.child(1, _, 2);
	}
	childBefore(_) {
		return this.child(-1, _, -2);
	}
	enter(_, y, b = 0) {
		if (b & Ou.ExcludeBuffers) return null;
		let { buffer: x } = this.context, S = x.findChild(this.index + 4, x.buffer[this.index + 3], y > 0 ? 1 : -1, _ - this.context.start, y);
		return S < 0 ? null : new BufferNode(this.context, this, S);
	}
	get parent() {
		return this._parent || this.context.parent.nextSignificantParent();
	}
	externalSibling(_) {
		return this._parent ? null : this.context.parent.nextChild(this.context.index + _, _, 0, 4);
	}
	get nextSibling() {
		let { buffer: _ } = this.context, y = _.buffer[this.index + 3];
		return y < (this._parent ? _.buffer[this._parent.index + 3] : _.buffer.length) ? new BufferNode(this.context, this._parent, y) : this.externalSibling(1);
	}
	get prevSibling() {
		let { buffer: _ } = this.context, y = this._parent ? this._parent.index + 4 : 0;
		return this.index == y ? this.externalSibling(-1) : new BufferNode(this.context, this._parent, _.findChild(y, this.index, -1, 0, 4));
	}
	get tree() {
		return null;
	}
	toTree() {
		let _ = [], y = [], { buffer: b } = this.context, x = this.index + 4, S = b.buffer[this.index + 3];
		if (S > x) {
			let C = b.buffer[this.index + 1];
			_.push(b.slice(x, S, C)), y.push(0);
		}
		return new ku(this.type, _, y, this.to - this.from);
	}
	toString() {
		return this.context.buffer.childString(this.index);
	}
};
function iterStack(_) {
	if (!_.length) return null;
	let y = 0, b = _[0];
	for (let x = 1; x < _.length; x++) {
		let S = _[x];
		(S.from > b.from || S.to < b.to) && (b = S, y = x);
	}
	let x = b instanceof Mu && b.index < 0 ? null : b.parent, S = _.slice();
	return x ? S[y] = x : S.splice(y, 1), new StackIterator(S, b);
}
var StackIterator = class {
	constructor(_, y) {
		this.heads = _, this.node = y;
	}
	get next() {
		return iterStack(this.heads);
	}
};
function stackIterator(_, y, b) {
	let x = _.resolveInner(y, b), S = null;
	for (let _ = x instanceof Mu ? x : x.context.parent; _; _ = _.parent) if (_.index < 0) {
		let C = _.parent;
		(S ||= [x]).push(C.resolve(y, b)), _ = C;
	} else {
		let C = MountedTree.get(_.tree);
		if (C && C.overlay && C.overlay[0].from <= y && C.overlay[C.overlay.length - 1].to >= y) {
			let w = new Mu(C.tree, C.overlay[0].from + _.from, -1, _);
			(S ||= [x]).push(resolveNode(w, y, b, !1));
		}
	}
	return S ? iterStack(S) : x;
}
var TreeCursor = class {
	get name() {
		return this.type.name;
	}
	constructor(_, y = 0) {
		if (this.mode = y, this.buffer = null, this.stack = [], this.index = 0, this.bufferNode = null, _ instanceof Mu) this.yieldNode(_);
		else {
			this._tree = _.context.parent, this.buffer = _.context;
			for (let y = _._parent; y; y = y._parent) this.stack.unshift(y.index);
			this.bufferNode = _, this.yieldBuf(_.index);
		}
	}
	yieldNode(_) {
		return _ ? (this._tree = _, this.type = _.type, this.from = _.from, this.to = _.to, !0) : !1;
	}
	yieldBuf(_, y) {
		this.index = _;
		let { start: b, buffer: x } = this.buffer;
		return this.type = y || x.set.types[x.buffer[_]], this.from = b + x.buffer[_ + 1], this.to = b + x.buffer[_ + 2], !0;
	}
	yield(_) {
		return _ ? _ instanceof Mu ? (this.buffer = null, this.yieldNode(_)) : (this.buffer = _.context, this.yieldBuf(_.index, _.type)) : !1;
	}
	toString() {
		return this.buffer ? this.buffer.buffer.childString(this.index) : this._tree.toString();
	}
	enterChild(_, y, b) {
		if (!this.buffer) return this.yield(this._tree.nextChild(_ < 0 ? this._tree._tree.children.length - 1 : 0, _, y, b, this.mode));
		let { buffer: x } = this.buffer, S = x.findChild(this.index + 4, x.buffer[this.index + 3], _, y - this.buffer.start, b);
		return S < 0 ? !1 : (this.stack.push(this.index), this.yieldBuf(S));
	}
	firstChild() {
		return this.enterChild(1, 0, 4);
	}
	lastChild() {
		return this.enterChild(-1, 0, 4);
	}
	childAfter(_) {
		return this.enterChild(1, _, 2);
	}
	childBefore(_) {
		return this.enterChild(-1, _, -2);
	}
	enter(_, y, b = this.mode) {
		return this.buffer ? b & Ou.ExcludeBuffers ? !1 : this.enterChild(1, _, y) : this.yield(this._tree.enter(_, y, b));
	}
	parent() {
		if (!this.buffer) return this.yieldNode(this.mode & Ou.IncludeAnonymous ? this._tree._parent : this._tree.parent);
		if (this.stack.length) return this.yieldBuf(this.stack.pop());
		let _ = this.mode & Ou.IncludeAnonymous ? this.buffer.parent : this.buffer.parent.nextSignificantParent();
		return this.buffer = null, this.yieldNode(_);
	}
	sibling(_) {
		if (!this.buffer) return this._tree._parent ? this.yield(this._tree.index < 0 ? null : this._tree._parent.nextChild(this._tree.index + _, _, 0, 4, this.mode)) : !1;
		let { buffer: y } = this.buffer, b = this.stack.length - 1;
		if (_ < 0) {
			let _ = b < 0 ? 0 : this.stack[b] + 4;
			if (this.index != _) return this.yieldBuf(y.findChild(_, this.index, -1, 0, 4));
		} else {
			let _ = y.buffer[this.index + 3];
			if (_ < (b < 0 ? y.buffer.length : y.buffer[this.stack[b] + 3])) return this.yieldBuf(_);
		}
		return b < 0 && this.yield(this.buffer.parent.nextChild(this.buffer.index + _, _, 0, 4, this.mode));
	}
	nextSibling() {
		return this.sibling(1);
	}
	prevSibling() {
		return this.sibling(-1);
	}
	atLastNode(_) {
		let y, b, { buffer: x } = this;
		if (x) {
			if (_ > 0) {
				if (this.index < x.buffer.buffer.length) return !1;
			} else for (let _ = 0; _ < this.index; _++) if (x.buffer.buffer[_ + 3] < this.index) return !1;
			({index: y, parent: b} = x);
		} else ({index: y, _parent: b} = this._tree);
		for (; b; {index: y, _parent: b} = b) if (y > -1) for (let x = y + _, S = _ < 0 ? -1 : b._tree.children.length; x != S; x += _) {
			let _ = b._tree.children[x];
			if (this.mode & Ou.IncludeAnonymous || _ instanceof ju || !_.type.isAnonymous || hasChild(_)) return !1;
		}
		return !0;
	}
	move(_, y) {
		if (y && this.enterChild(_, 0, 4)) return !0;
		for (;;) {
			if (this.sibling(_)) return !0;
			if (this.atLastNode(_) || !this.parent()) return !1;
		}
	}
	next(_ = !0) {
		return this.move(1, _);
	}
	prev(_ = !0) {
		return this.move(-1, _);
	}
	moveTo(_, y = 0) {
		for (; (this.from == this.to || (y < 1 ? this.from >= _ : this.from > _) || (y > -1 ? this.to <= _ : this.to < _)) && this.parent(););
		for (; this.enterChild(1, _, y););
		return this;
	}
	get node() {
		if (!this.buffer) return this._tree;
		let _ = this.bufferNode, y = null, b = 0;
		if (_ && _.context == this.buffer) scan: for (let x = this.index, S = this.stack.length; S >= 0;) {
			for (let C = _; C; C = C._parent) if (C.index == x) {
				if (x == this.index) return C;
				y = C, b = S + 1;
				break scan;
			}
			x = this.stack[--S];
		}
		for (let _ = b; _ < this.stack.length; _++) y = new Nu(this.buffer, y, this.stack[_]);
		return this.bufferNode = new Nu(this.buffer, y, this.index);
	}
	get tree() {
		return this.buffer ? null : this._tree._tree;
	}
	iterate(_, y) {
		for (let b = 0;;) {
			let x = !1;
			if (this.type.isAnonymous || _(this) !== !1) {
				if (this.firstChild()) {
					b++;
					continue;
				}
				this.type.isAnonymous || (x = !0);
			}
			for (; x && y && y(this), x = this.type.isAnonymous, !this.nextSibling();) {
				if (!b) return;
				this.parent(), b--, x = !0;
			}
		}
	}
	matchContext(_) {
		if (!this.buffer) return matchNodeContext(this.node, _);
		let { buffer: y } = this.buffer, { types: b } = y.set;
		for (let x = _.length - 1, S = this.stack.length - 1; x >= 0; S--) {
			if (S < 0) return matchNodeContext(this.node, _, x);
			let C = b[y.buffer[this.stack[S]]];
			if (!C.isAnonymous) {
				if (_[x] && _[x] != C.name) return !1;
				x--;
			}
		}
		return !0;
	}
};
function hasChild(_) {
	return _.children.some((_) => _ instanceof ju || !_.type.isAnonymous || hasChild(_));
}
function buildTree(_) {
	let { buffer: y, nodeSet: b, maxBufferLength: x = xu, reused: S = [], minRepeatType: C = b.types.length } = _, w = Array.isArray(y) ? new Au(y, y.length) : y, E = b.types, D = 0, O = 0;
	function takeNode(_, y, k, A, j, N) {
		let { id: P, start: F, end: I, size: L } = w, R = O;
		for (; L < 0;) if (w.next(), L == -1) {
			let y = S[P];
			k.push(y), A.push(F - _);
			return;
		} else if (L == -3) {
			D = P;
			return;
		} else if (L == -4) {
			O = P;
			return;
		} else throw RangeError(`Unrecognized record size: ${L}`);
		let z = E[P], B, ee, te = F - _;
		if (I - F <= x && (ee = findBufferSize(w.pos - y, j))) {
			let y = new Uint16Array(ee.size - ee.skip), x = w.pos - ee.size, S = y.length;
			for (; w.pos > x;) S = copyToBuffer(ee.start, y, S);
			B = new ju(y, I - ee.start, b), te = ee.start - _;
		} else {
			let _ = w.pos - L;
			w.next();
			let y = [], b = [], S = P >= C ? P : -1, E = 0, D = I;
			for (; w.pos > _;) S >= 0 && w.id == S && w.size >= 0 ? (w.end <= D - x && (makeRepeatLeaf(y, b, F, E, w.end, D, S, R), E = y.length, D = w.end), w.next()) : N > 2500 ? takeFlatNode(F, _, y, b) : takeNode(F, _, y, b, S, N + 1);
			if (S >= 0 && E > 0 && E < y.length && makeRepeatLeaf(y, b, F, E, F, D, S, R), y.reverse(), b.reverse(), S > -1 && E > 0) {
				let _ = makeBalanced(z);
				B = balanceRange(z, y, b, 0, y.length, 0, I - F, _, _);
			} else B = makeTree(z, y, b, I - F, R - I);
		}
		k.push(B), A.push(te);
	}
	function takeFlatNode(_, y, S, C) {
		let E = [], D = 0, O = -1;
		for (; w.pos > y;) {
			let { id: _, start: y, end: b, size: S } = w;
			if (S > 4) w.next();
			else if (O > -1 && y < O) break;
			else O < 0 && (O = b - x), E.push(_, y, b), D++, w.next();
		}
		if (D) {
			let y = new Uint16Array(D * 4), x = E[E.length - 2];
			for (let _ = E.length - 3, b = 0; _ >= 0; _ -= 3) y[b++] = E[_], y[b++] = E[_ + 1] - x, y[b++] = E[_ + 2] - x, y[b++] = b;
			S.push(new ju(y, E[2] - x, b)), C.push(x - _);
		}
	}
	function makeBalanced(_) {
		return (y, b, x) => {
			let S = 0, C = y.length - 1, w, E;
			if (C >= 0 && (w = y[C]) instanceof ku) {
				if (!C && w.type == _ && w.length == x) return w;
				(E = w.prop(NodeProp.lookAhead)) && (S = b[C] + w.length + E);
			}
			return makeTree(_, y, b, x, S);
		};
	}
	function makeRepeatLeaf(_, y, x, S, C, w, E, D) {
		let O = [], k = [];
		for (; _.length > S;) O.push(_.pop()), k.push(y.pop() + x - C);
		_.push(makeTree(b.types[E], O, k, w - C, D - w)), y.push(C - x);
	}
	function makeTree(_, y, b, x, S = 0, C) {
		if (D) {
			let _ = [NodeProp.contextHash, D];
			C = C ? [_].concat(C) : [_];
		}
		if (S > 25) {
			let _ = [NodeProp.lookAhead, S];
			C = C ? [_].concat(C) : [_];
		}
		return new ku(_, y, b, x, C);
	}
	function findBufferSize(_, y) {
		let b = w.fork(), S = 0, E = 0, D = 0, O = b.end - x, k = {
			size: 0,
			start: 0,
			skip: 0
		};
		scan: for (let x = b.pos - _; b.pos > x;) {
			let _ = b.size;
			if (b.id == y && _ >= 0) {
				k.size = S, k.start = E, k.skip = D, D += 4, S += 4, b.next();
				continue;
			}
			let w = b.pos - _;
			if (_ < 0 || w < x || b.start < O) break;
			let A = b.id >= C ? 4 : 0, j = b.start;
			for (b.next(); b.pos > w;) {
				if (b.size < 0) if (b.size == -3) A += 4;
				else break scan;
				else b.id >= C && (A += 4);
				b.next();
			}
			E = j, S += _, D += A;
		}
		return (y < 0 || S == _) && (k.size = S, k.start = E, k.skip = D), k.size > 4 ? k : void 0;
	}
	function copyToBuffer(_, y, b) {
		let { id: x, start: S, end: E, size: k } = w;
		if (w.next(), k >= 0 && x < C) {
			let C = b;
			if (k > 4) {
				let x = w.pos - (k - 4);
				for (; w.pos > x;) b = copyToBuffer(_, y, b);
			}
			y[--b] = C, y[--b] = E - _, y[--b] = S - _, y[--b] = x;
		} else k == -3 ? D = x : k == -4 && (O = x);
		return b;
	}
	let k = [], A = [];
	for (; w.pos > 0;) takeNode(_.start || 0, _.bufferStart || 0, k, A, -1, 0);
	let j = _.length ?? (k.length ? A[0] + k[0].length : 0);
	return new ku(E[_.topID], k.reverse(), A.reverse(), j);
}
var Pu = /* @__PURE__ */ new WeakMap();
function nodeSize(_, y) {
	if (!_.isAnonymous || y instanceof ju || y.type != _) return 1;
	let b = Pu.get(y);
	if (b == null) {
		b = 1;
		for (let x of y.children) {
			if (x.type != _ || !(x instanceof ku)) {
				b = 1;
				break;
			}
			b += nodeSize(_, x);
		}
		Pu.set(y, b);
	}
	return b;
}
function balanceRange(_, y, b, x, S, C, w, E, D) {
	let O = 0;
	for (let b = x; b < S; b++) O += nodeSize(_, y[b]);
	let k = Math.ceil(O * 1.5 / 8), A = [], j = [];
	function divide(y, b, x, S, w) {
		for (let E = x; E < S;) {
			let x = E, O = b[E], N = nodeSize(_, y[E]);
			for (E++; E < S; E++) {
				let b = nodeSize(_, y[E]);
				if (N + b >= k) break;
				N += b;
			}
			if (E == x + 1) {
				if (N > k) {
					let _ = y[x];
					divide(_.children, _.positions, 0, _.children.length, b[x] + w);
					continue;
				}
				A.push(y[x]);
			} else {
				let S = b[E - 1] + y[E - 1].length - O;
				A.push(balanceRange(_, y, b, x, E, O, S, null, D));
			}
			j.push(O + w - C);
		}
	}
	return divide(y, b, x, S, 0), (E || D)(A, j, w);
}
var Fu = class TreeFragment {
	constructor(_, y, b, x, S = !1, C = !1) {
		this.from = _, this.to = y, this.tree = b, this.offset = x, this.open = !!S | (C ? 2 : 0);
	}
	get openStart() {
		return (this.open & 1) > 0;
	}
	get openEnd() {
		return (this.open & 2) > 0;
	}
	static addTree(_, y = [], b = !1) {
		let x = [new TreeFragment(0, _.length, _, 0, !1, b)];
		for (let b of y) b.to > _.length && x.push(b);
		return x;
	}
	static applyChanges(_, y, b = 128) {
		if (!y.length) return _;
		let x = [], S = 1, C = _.length ? _[0] : null;
		for (let w = 0, E = 0, D = 0;; w++) {
			let O = w < y.length ? y[w] : null, k = O ? O.fromA : 1e9;
			if (k - E >= b) for (; C && C.from < k;) {
				let y = C;
				if (E >= y.from || k <= y.to || D) {
					let _ = Math.max(y.from, E) - D, b = Math.min(y.to, k) - D;
					y = _ >= b ? null : new TreeFragment(_, b, y.tree, y.offset + D, w > 0, !!O);
				}
				if (y && x.push(y), C.to > k) break;
				C = S < _.length ? _[S++] : null;
			}
			if (!O) break;
			E = O.toA, D = O.toA - O.toB;
		}
		return x;
	}
}, Parser = class {
	startParse(_, y, b) {
		return typeof _ == `string` && (_ = new StringInput(_)), b = b ? b.length ? b.map((_) => new Range(_.from, _.to)) : [new Range(0, 0)] : [new Range(0, _.length)], this.createParse(_, y || [], b);
	}
	parse(_, y, b) {
		let x = this.startParse(_, y, b);
		for (;;) {
			let _ = x.advance();
			if (_) return _;
		}
	}
}, StringInput = class {
	constructor(_) {
		this.string = _;
	}
	get length() {
		return this.string.length;
	}
	chunk(_) {
		return this.string.slice(_);
	}
	get lineChunks() {
		return !1;
	}
	read(_, y) {
		return this.string.slice(_, y);
	}
};
new NodeProp({ perNode: !0 });
var Iu = 0, Lu = class Tag {
	constructor(_, y, b) {
		this.set = _, this.base = y, this.modified = b, this.id = Iu++;
	}
	static define(_) {
		if (_?.base) throw Error(`Can not derive from a modified tag`);
		let y = new Tag([], null, []);
		if (y.set.push(y), _) for (let b of _.set) y.set.push(b);
		return y;
	}
	static defineModifier() {
		let _ = new zu();
		return (y) => y.modified.indexOf(_) > -1 ? y : zu.get(y.base || y, y.modified.concat(_).sort((_, y) => _.id - y.id));
	}
}, Ru = 0, zu = class Modifier {
	constructor() {
		this.instances = [], this.id = Ru++;
	}
	static get(_, y) {
		if (!y.length) return _;
		let b = y[0].instances.find((b) => b.base == _ && sameArray(y, b.modified));
		if (b) return b;
		let x = [], S = new Lu(x, _, y);
		for (let _ of y) _.instances.push(S);
		let C = powerSet(y);
		for (let y of _.set) if (!y.modified.length) for (let _ of C) x.push(Modifier.get(y, _));
		return S;
	}
};
function sameArray(_, y) {
	return _.length == y.length && _.every((_, b) => _ == y[b]);
}
function powerSet(_) {
	let y = [[]];
	for (let b = 0; b < _.length; b++) for (let x = 0, S = y.length; x < S; x++) y.push(y[x].concat(_[b]));
	return y.sort((_, y) => y.length - _.length);
}
function styleTags(_) {
	let y = Object.create(null);
	for (let b in _) {
		let x = _[b];
		Array.isArray(x) || (x = [x]);
		for (let _ of b.split(` `)) if (_) {
			let b = [], S = 2, C = _;
			for (let y = 0;;) {
				if (C == `...` && y > 0 && y + 3 == _.length) {
					S = 1;
					break;
				}
				let x = /^"(?:[^"\\]|\\.)*?"|[^\/!]+/.exec(C);
				if (!x) throw RangeError(`Invalid path: ` + _);
				if (b.push(x[0] == `*` ? `` : x[0][0] == `"` ? JSON.parse(x[0]) : x[0]), y += x[0].length, y == _.length) break;
				let w = _[y++];
				if (y == _.length && w == `!`) {
					S = 0;
					break;
				}
				if (w != `/`) throw RangeError(`Invalid path: ` + _);
				C = _.slice(y);
			}
			let w = b.length - 1, E = b[w];
			if (!E) throw RangeError(`Invalid path: ` + _);
			y[E] = new Rule(x, S, w > 0 ? b.slice(0, w) : null).sort(y[E]);
		}
	}
	return Bu.add(y);
}
var Bu = new NodeProp(), Rule = class {
	constructor(_, y, b, x) {
		this.tags = _, this.mode = y, this.context = b, this.next = x;
	}
	get opaque() {
		return this.mode == 0;
	}
	get inherit() {
		return this.mode == 1;
	}
	sort(_) {
		return !_ || _.depth < this.depth ? (this.next = _, this) : (_.next = this.sort(_.next), _);
	}
	get depth() {
		return this.context ? this.context.length : 0;
	}
};
Rule.empty = new Rule([], 2, null);
function tagHighlighter(_, y) {
	let b = Object.create(null);
	for (let y of _) if (!Array.isArray(y.tag)) b[y.tag.id] = y.class;
	else for (let _ of y.tag) b[_.id] = y.class;
	let { scope: x, all: S = null } = y || {};
	return {
		style: (_) => {
			let y = S;
			for (let x of _) for (let _ of x.set) {
				let x = b[_.id];
				if (x) {
					y = y ? y + ` ` + x : x;
					break;
				}
			}
			return y;
		},
		scope: x
	};
}
function highlightTags(_, y) {
	let b = null;
	for (let x of _) {
		let _ = x.style(y);
		_ && (b = b ? b + ` ` + _ : _);
	}
	return b;
}
function highlightTree(_, y, b, x = 0, S = _.length) {
	let C = new HighlightBuilder(x, Array.isArray(y) ? y : [y], b);
	C.highlightRange(_.cursor(), x, S, ``, C.highlighters), C.flush(S);
}
var HighlightBuilder = class {
	constructor(_, y, b) {
		this.at = _, this.highlighters = y, this.span = b, this.class = ``;
	}
	startSpan(_, y) {
		y != this.class && (this.flush(_), _ > this.at && (this.at = _), this.class = y);
	}
	flush(_) {
		_ > this.at && this.class && this.span(this.at, _, this.class);
	}
	highlightRange(_, y, b, x, S) {
		let { type: C, from: w, to: E } = _;
		if (w >= b || E <= y) return;
		C.isTop && (S = this.highlighters.filter((_) => !_.scope || _.scope(C)));
		let D = x, O = getStyleTags(_) || Rule.empty, k = highlightTags(S, O.tags);
		if (k && (D && (D += ` `), D += k, O.mode == 1 && (x += (x ? ` ` : ``) + k)), this.startSpan(Math.max(y, w), D), O.opaque) return;
		let A = _.tree && _.tree.prop(NodeProp.mounted);
		if (A && A.overlay) {
			let C = _.node.enter(A.overlay[0].from + w, 1), O = this.highlighters.filter((_) => !_.scope || _.scope(A.tree.type)), k = _.firstChild();
			for (let j = 0, N = w;; j++) {
				let P = j < A.overlay.length ? A.overlay[j] : null, F = P ? P.from + w : E, I = Math.max(y, N), L = Math.min(b, F);
				if (I < L && k) for (; _.from < L && (this.highlightRange(_, I, L, x, S), this.startSpan(Math.min(L, _.to), D), !(_.to >= F || !_.nextSibling())););
				if (!P || F > b) break;
				N = P.to + w, N > y && (this.highlightRange(C.cursor(), Math.max(y, P.from + w), Math.min(b, N), ``, O), this.startSpan(Math.min(b, N), D));
			}
			k && _.parent();
		} else if (_.firstChild()) {
			A && (x = ``);
			do {
				if (_.to <= y) continue;
				if (_.from >= b) break;
				this.highlightRange(_, y, b, x, S), this.startSpan(Math.min(b, _.to), D);
			} while (_.nextSibling());
			_.parent();
		}
	}
};
function getStyleTags(_) {
	let y = _.type.prop(Bu);
	for (; y && y.context && !_.matchContext(y.context);) y = y.next;
	return y || null;
}
var Q = Lu.define, Vu = Q(), Hu = Q(), Uu = Q(Hu), Wu = Q(Hu), Gu = Q(), Ku = Q(Gu), qu = Q(Gu), Ju = Q(), Yu = Q(Ju), Xu = Q(), Zu = Q(), Qu = Q(), $u = Q(Qu), ed = Q(), $ = {
	comment: Vu,
	lineComment: Q(Vu),
	blockComment: Q(Vu),
	docComment: Q(Vu),
	name: Hu,
	variableName: Q(Hu),
	typeName: Uu,
	tagName: Q(Uu),
	propertyName: Wu,
	attributeName: Q(Wu),
	className: Q(Hu),
	labelName: Q(Hu),
	namespace: Q(Hu),
	macroName: Q(Hu),
	literal: Gu,
	string: Ku,
	docString: Q(Ku),
	character: Q(Ku),
	attributeValue: Q(Ku),
	number: qu,
	integer: Q(qu),
	float: Q(qu),
	bool: Q(Gu),
	regexp: Q(Gu),
	escape: Q(Gu),
	color: Q(Gu),
	url: Q(Gu),
	keyword: Xu,
	self: Q(Xu),
	null: Q(Xu),
	atom: Q(Xu),
	unit: Q(Xu),
	modifier: Q(Xu),
	operatorKeyword: Q(Xu),
	controlKeyword: Q(Xu),
	definitionKeyword: Q(Xu),
	moduleKeyword: Q(Xu),
	operator: Zu,
	derefOperator: Q(Zu),
	arithmeticOperator: Q(Zu),
	logicOperator: Q(Zu),
	bitwiseOperator: Q(Zu),
	compareOperator: Q(Zu),
	updateOperator: Q(Zu),
	definitionOperator: Q(Zu),
	typeOperator: Q(Zu),
	controlOperator: Q(Zu),
	punctuation: Qu,
	separator: Q(Qu),
	bracket: $u,
	angleBracket: Q($u),
	squareBracket: Q($u),
	paren: Q($u),
	brace: Q($u),
	content: Ju,
	heading: Yu,
	heading1: Q(Yu),
	heading2: Q(Yu),
	heading3: Q(Yu),
	heading4: Q(Yu),
	heading5: Q(Yu),
	heading6: Q(Yu),
	contentSeparator: Q(Ju),
	list: Q(Ju),
	quote: Q(Ju),
	emphasis: Q(Ju),
	strong: Q(Ju),
	link: Q(Ju),
	monospace: Q(Ju),
	strikethrough: Q(Ju),
	inserted: Q(),
	deleted: Q(),
	changed: Q(),
	invalid: Q(),
	meta: ed,
	documentMeta: Q(ed),
	annotation: Q(ed),
	processingInstruction: Q(ed),
	definition: Lu.defineModifier(),
	constant: Lu.defineModifier(),
	function: Lu.defineModifier(),
	standard: Lu.defineModifier(),
	local: Lu.defineModifier(),
	special: Lu.defineModifier()
};
tagHighlighter([
	{
		tag: $.link,
		class: `tok-link`
	},
	{
		tag: $.heading,
		class: `tok-heading`
	},
	{
		tag: $.emphasis,
		class: `tok-emphasis`
	},
	{
		tag: $.strong,
		class: `tok-strong`
	},
	{
		tag: $.keyword,
		class: `tok-keyword`
	},
	{
		tag: $.atom,
		class: `tok-atom`
	},
	{
		tag: $.bool,
		class: `tok-bool`
	},
	{
		tag: $.url,
		class: `tok-url`
	},
	{
		tag: $.labelName,
		class: `tok-labelName`
	},
	{
		tag: $.inserted,
		class: `tok-inserted`
	},
	{
		tag: $.deleted,
		class: `tok-deleted`
	},
	{
		tag: $.literal,
		class: `tok-literal`
	},
	{
		tag: $.string,
		class: `tok-string`
	},
	{
		tag: $.number,
		class: `tok-number`
	},
	{
		tag: [
			$.regexp,
			$.escape,
			$.special($.string)
		],
		class: `tok-string2`
	},
	{
		tag: $.variableName,
		class: `tok-variableName`
	},
	{
		tag: $.local($.variableName),
		class: `tok-variableName tok-local`
	},
	{
		tag: $.definition($.variableName),
		class: `tok-variableName tok-definition`
	},
	{
		tag: $.special($.variableName),
		class: `tok-variableName2`
	},
	{
		tag: $.definition($.propertyName),
		class: `tok-propertyName tok-definition`
	},
	{
		tag: $.typeName,
		class: `tok-typeName`
	},
	{
		tag: $.namespace,
		class: `tok-namespace`
	},
	{
		tag: $.className,
		class: `tok-className`
	},
	{
		tag: $.macroName,
		class: `tok-macroName`
	},
	{
		tag: $.propertyName,
		class: `tok-propertyName`
	},
	{
		tag: $.operator,
		class: `tok-operator`
	},
	{
		tag: $.comment,
		class: `tok-comment`
	},
	{
		tag: $.meta,
		class: `tok-meta`
	},
	{
		tag: $.invalid,
		class: `tok-invalid`
	},
	{
		tag: $.punctuation,
		class: `tok-punctuation`
	}
]);
var td = new NodeProp();
function defineLanguageFacet(_) {
	return Y.define({ combine: _ ? (y) => y.concat(_) : void 0 });
}
var nd = new NodeProp(), Language = class {
	constructor(_, y, b = [], x = ``) {
		this.data = _, this.name = x, ls.prototype.hasOwnProperty(`tree`) || Object.defineProperty(ls.prototype, "tree", { get() {
			return syntaxTree(this);
		} }), this.parser = y, this.extension = [ld.of(this), ls.languageData.of((_, y, b) => {
			let x = topNodeAt(_, y, b), S = x.type.prop(td);
			if (!S) return [];
			let C = _.facet(S), w = x.type.prop(nd);
			if (w) {
				let S = x.resolve(y - x.from, b);
				for (let y of w) if (y.test(S, _)) {
					let b = _.facet(y.facet);
					return y.type == `replace` ? b : b.concat(C);
				}
			}
			return C;
		})].concat(b);
	}
	isActiveAt(_, y, b = -1) {
		return topNodeAt(_, y, b).type.prop(td) == this.data;
	}
	findRegions(_) {
		let y = _.facet(ld);
		if (y?.data == this.data) return [{
			from: 0,
			to: _.doc.length
		}];
		if (!y || !y.allowsNesting) return [];
		let b = [], explore = (_, y) => {
			if (_.prop(td) == this.data) {
				b.push({
					from: y,
					to: y + _.length
				});
				return;
			}
			let x = _.prop(NodeProp.mounted);
			if (x) {
				if (x.tree.prop(td) == this.data) {
					if (x.overlay) for (let _ of x.overlay) b.push({
						from: _.from + y,
						to: _.to + y
					});
					else b.push({
						from: y,
						to: y + _.length
					});
					return;
				} else if (x.overlay) {
					let _ = b.length;
					if (explore(x.tree, x.overlay[0].from + y), b.length > _) return;
				}
			}
			for (let b = 0; b < _.children.length; b++) {
				let x = _.children[b];
				x instanceof ku && explore(x, _.positions[b] + y);
			}
		};
		return explore(syntaxTree(_), 0), b;
	}
	get allowsNesting() {
		return !0;
	}
};
Language.setState = ns.define();
function topNodeAt(_, y, b) {
	let x = _.facet(ld), S = syntaxTree(_).topNode;
	if (!x || x.allowsNesting) for (let _ = S; _; _ = _.enter(y, b, Ou.ExcludeBuffers)) _.type.isTop && (S = _);
	return S;
}
var rd = class LRLanguage extends Language {
	constructor(_, y, b) {
		super(_, y, [], b), this.parser = y;
	}
	static define(_) {
		let y = defineLanguageFacet(_.languageData);
		return new LRLanguage(y, _.parser.configure({ props: [td.add((_) => _.isTop ? y : void 0)] }), _.name);
	}
	configure(_, y) {
		return new LRLanguage(this.data, this.parser.configure(_), y || this.name);
	}
	get allowsNesting() {
		return this.parser.hasWrappers();
	}
};
function syntaxTree(_) {
	let y = _.field(Language.state, !1);
	return y ? y.tree : ku.empty;
}
var DocInput = class {
	constructor(_) {
		this.doc = _, this.cursorPos = 0, this.string = ``, this.cursor = _.iter();
	}
	get length() {
		return this.doc.length;
	}
	syncTo(_) {
		return this.string = this.cursor.next(_ - this.cursorPos).value, this.cursorPos = _ + this.string.length, this.cursorPos - this.string.length;
	}
	chunk(_) {
		return this.syncTo(_), this.string;
	}
	get lineChunks() {
		return !0;
	}
	read(_, y) {
		let b = this.cursorPos - this.string.length;
		return _ < b || y >= this.cursorPos ? this.doc.sliceString(_, y) : this.string.slice(_ - b, y - b);
	}
}, id = null, ad = class ParseContext {
	constructor(_, y, b = [], x, S, C, w, E) {
		this.parser = _, this.state = y, this.fragments = b, this.tree = x, this.treeLen = S, this.viewport = C, this.skipped = w, this.scheduleOn = E, this.parse = null, this.tempSkipped = [];
	}
	static create(_, y, b) {
		return new ParseContext(_, y, [], ku.empty, 0, b, [], null);
	}
	startParse() {
		return this.parser.startParse(new DocInput(this.state.doc), this.fragments);
	}
	work(until, _) {
		return _ != null && _ >= this.state.doc.length && (_ = void 0), this.tree != ku.empty && this.isDone(_ ?? this.state.doc.length) ? (this.takeTree(), !0) : this.withContext(() => {
			if (typeof until == `number`) {
				let _ = Date.now() + until;
				until = () => Date.now() > _;
			}
			for (this.parse ||= this.startParse(), _ != null && (this.parse.stoppedAt == null || this.parse.stoppedAt > _) && _ < this.state.doc.length && this.parse.stopAt(_);;) {
				let y = this.parse.advance();
				if (y) if (this.fragments = this.withoutTempSkipped(Fu.addTree(y, this.fragments, this.parse.stoppedAt != null)), this.treeLen = this.parse.stoppedAt ?? this.state.doc.length, this.tree = y, this.parse = null, this.treeLen < (_ ?? this.state.doc.length)) this.parse = this.startParse();
				else return !0;
				if (until()) return !1;
			}
		});
	}
	takeTree() {
		let _, y;
		this.parse && (_ = this.parse.parsedPos) >= this.treeLen && ((this.parse.stoppedAt == null || this.parse.stoppedAt > _) && this.parse.stopAt(_), this.withContext(() => {
			for (; !(y = this.parse.advance()););
		}), this.treeLen = _, this.tree = y, this.fragments = this.withoutTempSkipped(Fu.addTree(this.tree, this.fragments, !0)), this.parse = null);
	}
	withContext(_) {
		let y = id;
		id = this;
		try {
			return _();
		} finally {
			id = y;
		}
	}
	withoutTempSkipped(_) {
		for (let y; y = this.tempSkipped.pop();) _ = cutFragments(_, y.from, y.to);
		return _;
	}
	changes(_, y) {
		let { fragments: b, tree: x, treeLen: S, viewport: C, skipped: w } = this;
		if (this.takeTree(), !_.empty) {
			let y = [];
			if (_.iterChangedRanges((_, b, x, S) => y.push({
				fromA: _,
				toA: b,
				fromB: x,
				toB: S
			})), b = Fu.applyChanges(b, y), x = ku.empty, S = 0, C = {
				from: _.mapPos(C.from, -1),
				to: _.mapPos(C.to, 1)
			}, this.skipped.length) {
				w = [];
				for (let y of this.skipped) {
					let b = _.mapPos(y.from, 1), x = _.mapPos(y.to, -1);
					b < x && w.push({
						from: b,
						to: x
					});
				}
			}
		}
		return new ParseContext(this.parser, y, b, x, S, C, w, this.scheduleOn);
	}
	updateViewport(_) {
		if (this.viewport.from == _.from && this.viewport.to == _.to) return !1;
		this.viewport = _;
		let y = this.skipped.length;
		for (let y = 0; y < this.skipped.length; y++) {
			let { from: b, to: x } = this.skipped[y];
			b < _.to && x > _.from && (this.fragments = cutFragments(this.fragments, b, x), this.skipped.splice(y--, 1));
		}
		return this.skipped.length >= y ? !1 : (this.reset(), !0);
	}
	reset() {
		this.parse &&= (this.takeTree(), null);
	}
	skipUntilInView(_, y) {
		this.skipped.push({
			from: _,
			to: y
		});
	}
	static getSkippingParser(_) {
		return new class extends Parser {
			createParse(y, b, x) {
				let S = x[0].from, C = x[x.length - 1].to;
				return {
					parsedPos: S,
					advance() {
						let y = id;
						if (y) {
							for (let _ of x) y.tempSkipped.push(_);
							_ && (y.scheduleOn = y.scheduleOn ? Promise.all([y.scheduleOn, _]) : _);
						}
						return this.parsedPos = C, new ku(wu.none, [], [], C - S);
					},
					stoppedAt: null,
					stopAt() {}
				};
			}
		}();
	}
	isDone(_) {
		_ = Math.min(_, this.state.doc.length);
		let y = this.fragments;
		return this.treeLen >= _ && y.length && y[0].from == 0 && y[0].to >= _;
	}
	static get() {
		return id;
	}
};
function cutFragments(_, y, b) {
	return Fu.applyChanges(_, [{
		fromA: y,
		toA: b,
		fromB: y,
		toB: b
	}]);
}
var od = class LanguageState {
	constructor(_) {
		this.context = _, this.tree = _.tree;
	}
	apply(_) {
		if (!_.docChanged && this.tree == this.context.tree) return this;
		let y = this.context.changes(_.changes, _.state), b = this.context.treeLen == _.startState.doc.length ? void 0 : Math.max(_.changes.mapPos(this.context.treeLen), y.viewport.to);
		return y.work(20, b) || y.takeTree(), new LanguageState(y);
	}
	static init(_) {
		let y = Math.min(3e3, _.doc.length), b = ad.create(_.facet(ld).parser, _, {
			from: 0,
			to: y
		});
		return b.work(20, y) || b.takeTree(), new LanguageState(b);
	}
};
Language.state = Wo.define({
	create: od.init,
	update(_, y) {
		for (let _ of y.effects) if (_.is(Language.setState)) return _.value;
		return y.startState.facet(ld) == y.state.facet(ld) ? _.apply(y) : od.init(y.state);
	}
});
var requestIdle = (_) => {
	let y = setTimeout(() => _(), 500);
	return () => clearTimeout(y);
};
typeof requestIdleCallback < `u` && (requestIdle = (_) => {
	let y = -1, b = setTimeout(() => {
		y = requestIdleCallback(_, { timeout: 400 });
	}, 100);
	return () => y < 0 ? clearTimeout(b) : cancelIdleCallback(y);
});
var sd = typeof navigator < `u` && navigator.scheduling?.isInputPending ? () => navigator.scheduling.isInputPending() : null, cd = Ec.fromClass(class ParseWorker {
	constructor(_) {
		this.view = _, this.working = null, this.workScheduled = 0, this.chunkEnd = -1, this.chunkBudget = -1, this.work = this.work.bind(this), this.scheduleWork();
	}
	update(_) {
		let y = this.view.state.field(Language.state).context;
		(y.updateViewport(_.view.viewport) || this.view.viewport.to > y.treeLen) && this.scheduleWork(), (_.docChanged || _.selectionSet) && (this.view.hasFocus && (this.chunkBudget += 50), this.scheduleWork()), this.checkAsyncSchedule(y);
	}
	scheduleWork() {
		if (this.working) return;
		let { state: _ } = this.view, y = _.field(Language.state);
		(y.tree != y.context.tree || !y.context.isDone(_.doc.length)) && (this.working = requestIdle(this.work));
	}
	work(_) {
		this.working = null;
		let y = Date.now();
		if (this.chunkEnd < y && (this.chunkEnd < 0 || this.view.hasFocus) && (this.chunkEnd = y + 3e4, this.chunkBudget = 3e3), this.chunkBudget <= 0) return;
		let { state: b, viewport: { to: x } } = this.view, S = b.field(Language.state);
		if (S.tree == S.context.tree && S.context.isDone(x + 1e5)) return;
		let C = Date.now() + Math.min(this.chunkBudget, 100, _ && !sd ? Math.max(25, _.timeRemaining() - 5) : 1e9), w = S.context.treeLen < x && b.doc.length > x + 1e3, E = S.context.work(() => sd && sd() || Date.now() > C, x + (w ? 0 : 1e5));
		this.chunkBudget -= Date.now() - y, (E || this.chunkBudget <= 0) && (S.context.takeTree(), this.view.dispatch({ effects: Language.setState.of(new od(S.context)) })), this.chunkBudget > 0 && !(E && !w) && this.scheduleWork(), this.checkAsyncSchedule(S.context);
	}
	checkAsyncSchedule(_) {
		_.scheduleOn &&= (this.workScheduled++, _.scheduleOn.then(() => this.scheduleWork()).catch((_) => logException(this.view.state, _)).then(() => this.workScheduled--), null);
	}
	destroy() {
		this.working && this.working();
	}
	isWorking() {
		return !!(this.working || this.workScheduled > 0);
	}
}, { eventHandlers: { focus() {
	this.scheduleWork();
} } }), ld = Y.define({
	combine(_) {
		return _.length ? _[0] : null;
	},
	enables: (_) => [
		Language.state,
		cd,
		Z.contentAttributes.compute([_], (y) => {
			let b = y.facet(_);
			return b && b.name ? { "data-language": b.name } : {};
		})
	]
}), LanguageSupport = class {
	constructor(_, y = []) {
		this.language = _, this.support = y, this.extension = [_, y];
	}
}, ud = Y.define(), dd = Y.define({ combine: (_) => {
	if (!_.length) return `  `;
	let y = _[0];
	if (!y || /\S/.test(y) || Array.from(y).some((_) => _ != y[0])) throw Error(`Invalid indent unit: ` + JSON.stringify(_[0]));
	return y;
} });
function getIndentUnit(_) {
	let y = _.facet(dd);
	return y.charCodeAt(0) == 9 ? _.tabSize * y.length : y.length;
}
function indentString(_, y) {
	let b = ``, x = _.tabSize, S = _.facet(dd)[0];
	if (S == `	`) {
		for (; y >= x;) b += `	`, y -= x;
		S = ` `;
	}
	for (let _ = 0; _ < y; _++) b += S;
	return b;
}
function getIndentation(_, y) {
	_ instanceof ls && (_ = new IndentContext(_));
	for (let b of _.state.facet(ud)) {
		let x = b(_, y);
		if (x !== void 0) return x;
	}
	let b = syntaxTree(_.state);
	return b.length >= y ? syntaxIndentation(_, b, y) : null;
}
var IndentContext = class {
	constructor(_, y = {}) {
		this.state = _, this.options = y, this.unit = getIndentUnit(_);
	}
	lineAt(_, y = 1) {
		let b = this.state.doc.lineAt(_), { simulateBreak: x, simulateDoubleBreak: S } = this.options;
		return x != null && x >= b.from && x <= b.to ? S && x == _ ? {
			text: ``,
			from: _
		} : (y < 0 ? x < _ : x <= _) ? {
			text: b.text.slice(x - b.from),
			from: x
		} : {
			text: b.text.slice(0, x - b.from),
			from: b.from
		} : b;
	}
	textAfterPos(_, y = 1) {
		if (this.options.simulateDoubleBreak && _ == this.options.simulateBreak) return ``;
		let { text: b, from: x } = this.lineAt(_, y);
		return b.slice(_ - x, Math.min(b.length, _ + 100 - x));
	}
	column(_, y = 1) {
		let { text: b, from: x } = this.lineAt(_, y), S = this.countColumn(b, _ - x), C = this.options.overrideIndentation ? this.options.overrideIndentation(x) : -1;
		return C > -1 && (S += C - this.countColumn(b, b.search(/\S|$/))), S;
	}
	countColumn(_, y = _.length) {
		return countColumn(_, this.state.tabSize, y);
	}
	lineIndent(_, y = 1) {
		let { text: b, from: x } = this.lineAt(_, y), S = this.options.overrideIndentation;
		if (S) {
			let _ = S(x);
			if (_ > -1) return _;
		}
		return this.countColumn(b, b.search(/\S|$/));
	}
	get simulatedBreak() {
		return this.options.simulateBreak || null;
	}
}, fd = new NodeProp();
function syntaxIndentation(_, y, b) {
	let x = y.resolveStack(b), S = x.node.enterUnfinishedNodesBefore(b);
	if (S != x.node) {
		let _ = [];
		for (let y = S; y != x.node; y = y.parent) _.push(y);
		for (let y = _.length - 1; y >= 0; y--) x = {
			node: _[y],
			next: x
		};
	}
	return indentFor(x, _, b);
}
function indentFor(_, y, b) {
	for (let x = _; x; x = x.next) {
		let _ = indentStrategy(x.node);
		if (_) return _(pd.create(y, b, x));
	}
	return 0;
}
function ignoreClosed(_) {
	return _.pos == _.options.simulateBreak && _.options.simulateDoubleBreak;
}
function indentStrategy(_) {
	let y = _.type.prop(fd);
	if (y) return y;
	let b = _.firstChild, x;
	if (b && (x = b.type.prop(NodeProp.closedBy))) {
		let y = _.lastChild, b = y && x.indexOf(y.name) > -1;
		return (_) => delimitedStrategy(_, !0, 1, void 0, b && !ignoreClosed(_) ? y.from : void 0);
	}
	return _.parent == null ? topIndent : null;
}
function topIndent() {
	return 0;
}
var pd = class TreeIndentContext extends IndentContext {
	constructor(_, y, b) {
		super(_.state, _.options), this.base = _, this.pos = y, this.context = b;
	}
	get node() {
		return this.context.node;
	}
	static create(_, y, b) {
		return new TreeIndentContext(_, y, b);
	}
	get textAfter() {
		return this.textAfterPos(this.pos);
	}
	get baseIndent() {
		return this.baseIndentFor(this.node);
	}
	baseIndentFor(_) {
		let y = this.state.doc.lineAt(_.from);
		for (;;) {
			let b = _.resolve(y.from);
			for (; b.parent && b.parent.from == b.from;) b = b.parent;
			if (isParent(b, _)) break;
			y = this.state.doc.lineAt(b.from);
		}
		return this.lineIndent(y.from);
	}
	continue() {
		return indentFor(this.context.next, this.base, this.pos);
	}
};
function isParent(_, y) {
	for (let b = y; b; b = b.parent) if (_ == b) return !0;
	return !1;
}
function bracketedAligned(_) {
	let y = _.node, b = y.childAfter(y.from), x = y.lastChild;
	if (!b) return null;
	let S = _.options.simulateBreak, C = _.state.doc.lineAt(b.from), w = S == null || S <= C.from ? C.to : Math.min(C.to, S);
	for (let _ = b.to;;) {
		let S = y.childAfter(_);
		if (!S || S == x) return null;
		if (!S.type.isSkipped) return S.from < w ? b : null;
		_ = S.to;
	}
}
function delimitedStrategy(_, y, b, x, S) {
	let C = _.textAfter, w = C.match(/^\s*/)[0].length, E = x && C.slice(w, w + x.length) == x || S == _.pos + w, D = y ? bracketedAligned(_) : null;
	return D ? E ? _.column(D.from) : _.column(D.to) : _.baseIndent + (E ? 0 : _.unit * b);
}
function continuedIndent({ except: _, units: y = 1 } = {}) {
	return (b) => {
		let x = _ && _.test(b.textAfter);
		return b.baseIndent + (x ? 0 : y * b.unit);
	};
}
var md = 200;
function indentOnInput() {
	return ls.transactionFilter.of((_) => {
		if (!_.docChanged || !_.isUserEvent(`input.type`) && !_.isUserEvent(`input.complete`)) return _;
		let y = _.startState.languageDataAt(`indentOnInput`, _.startState.selection.main.head);
		if (!y.length) return _;
		let b = _.newDoc, { head: x } = _.newSelection.main, S = b.lineAt(x);
		if (x > S.from + md) return _;
		let C = b.sliceString(S.from, x);
		if (!y.some((_) => _.test(C))) return _;
		let { state: w } = _, E = -1, D = [];
		for (let { head: _ } of w.selection.ranges) {
			let y = w.doc.lineAt(_);
			if (y.from == E) continue;
			E = y.from;
			let b = getIndentation(w, y.from);
			if (b == null) continue;
			let x = /^\s*/.exec(y.text)[0], S = indentString(w, b);
			x != S && D.push({
				from: y.from,
				to: y.from + x.length,
				insert: S
			});
		}
		return D.length ? [_, {
			changes: D,
			sequential: !0
		}] : _;
	});
}
var hd = Y.define(), gd = new NodeProp();
function foldInside(_) {
	let y = _.firstChild, b = _.lastChild;
	return y && y.to < b.from ? {
		from: y.to,
		to: b.type.isError ? _.to : b.from
	} : null;
}
function syntaxFolding(_, y, b) {
	let x = syntaxTree(_);
	if (x.length < b) return null;
	let S = x.resolveStack(b, 1), C = null;
	for (let w = S; w; w = w.next) {
		let S = w.node;
		if (S.to <= b || S.from > b) continue;
		if (C && S.from < y) break;
		let E = S.type.prop(gd);
		if (E && (S.to < x.length - 50 || x.length == _.doc.length || !isUnfinished(S))) {
			let x = E(S, _);
			x && x.from <= b && x.from >= y && x.to > b && (C = x);
		}
	}
	return C;
}
function isUnfinished(_) {
	let y = _.lastChild;
	return y && y.to == _.to && y.type.isError;
}
function foldable(_, y, b) {
	for (let x of _.facet(hd)) {
		let S = x(_, y, b);
		if (S) return S;
	}
	return syntaxFolding(_, y, b);
}
function mapRange(_, y) {
	let b = y.mapPos(_.from, 1), x = y.mapPos(_.to, -1);
	return b >= x ? void 0 : {
		from: b,
		to: x
	};
}
var _d = ns.define({ map: mapRange }), vd = ns.define({ map: mapRange });
function selectedLines(_) {
	let y = [];
	for (let { head: b } of _.state.selection.ranges) y.some((_) => _.from <= b && _.to >= b) || y.push(_.lineBlockAt(b));
	return y;
}
var yd = Wo.define({
	create() {
		return Decoration.none;
	},
	update(_, y) {
		_ = _.map(y.changes);
		for (let b of y.effects) if (b.is(_d) && !foldExists(_, b.value.from, b.value.to)) {
			let { preparePlaceholder: x } = y.state.facet(Sd), S = x ? Decoration.replace({ widget: new PreparedFoldWidget(x(y.state, b.value)) }) : Cd;
			_ = _.update({ add: [S.range(b.value.from, b.value.to)] });
		} else b.is(vd) && (_ = _.update({
			filter: (_, y) => b.value.from != _ || b.value.to != y,
			filterFrom: b.value.from,
			filterTo: b.value.to
		}));
		if (y.selection) {
			let b = !1, { head: x } = y.selection.main;
			_.between(x, x, (_, y) => {
				_ < x && y > x && (b = !0);
			}), b && (_ = _.update({
				filterFrom: x,
				filterTo: x,
				filter: (_, y) => y <= x || _ >= x
			}));
		}
		return _;
	},
	provide: (_) => Z.decorations.from(_),
	toJSON(_, y) {
		let b = [];
		return _.between(0, y.doc.length, (_, y) => {
			b.push(_, y);
		}), b;
	},
	fromJSON(_) {
		if (!Array.isArray(_) || _.length % 2) throw RangeError(`Invalid JSON for fold state`);
		let y = [];
		for (let b = 0; b < _.length;) {
			let x = _[b++], S = _[b++];
			if (typeof x != `number` || typeof S != `number`) throw RangeError(`Invalid JSON for fold state`);
			y.push(Cd.range(x, S));
		}
		return Decoration.set(y, !0);
	}
});
function findFold(_, y, b) {
	var x;
	let S = null;
	return (x = _.field(yd, !1)) == null || x.between(y, b, (_, y) => {
		(!S || S.from > _) && (S = {
			from: _,
			to: y
		});
	}), S;
}
function foldExists(_, y, b) {
	let x = !1;
	return _.between(y, y, (_, S) => {
		_ == y && S == b && (x = !0);
	}), x;
}
function maybeEnable(_, y) {
	return _.field(yd, !1) ? y : y.concat(ns.appendConfig.of(codeFolding()));
}
var foldCode = (_) => {
	for (let y of selectedLines(_)) {
		let b = foldable(_.state, y.from, y.to);
		if (b) return _.dispatch({ effects: maybeEnable(_.state, [_d.of(b), announceFold(_, b)]) }), !0;
	}
	return !1;
}, unfoldCode = (_) => {
	if (!_.state.field(yd, !1)) return !1;
	let y = [];
	for (let b of selectedLines(_)) {
		let x = findFold(_.state, b.from, b.to);
		x && y.push(vd.of(x), announceFold(_, x, !1));
	}
	return y.length && _.dispatch({ effects: y }), y.length > 0;
};
function announceFold(_, y, b = !0) {
	let x = _.state.doc.lineAt(y.from).number, S = _.state.doc.lineAt(y.to).number;
	return Z.announce.of(`${_.state.phrase(b ? `Folded lines` : `Unfolded lines`)} ${x} ${_.state.phrase(`to`)} ${S}.`);
}
var foldAll = (_) => {
	let { state: y } = _, b = [];
	for (let x = 0; x < y.doc.length;) {
		let S = _.lineBlockAt(x), C = foldable(y, S.from, S.to);
		C && b.push(_d.of(C)), x = (C ? _.lineBlockAt(C.to) : S).to + 1;
	}
	return b.length && _.dispatch({ effects: maybeEnable(_.state, b) }), !!b.length;
}, unfoldAll = (_) => {
	let y = _.state.field(yd, !1);
	if (!y || !y.size) return !1;
	let b = [];
	return y.between(0, _.state.doc.length, (_, y) => {
		b.push(vd.of({
			from: _,
			to: y
		}));
	}), _.dispatch({ effects: b }), !0;
}, bd = [
	{
		key: `Ctrl-Shift-[`,
		mac: `Cmd-Alt-[`,
		run: foldCode
	},
	{
		key: `Ctrl-Shift-]`,
		mac: `Cmd-Alt-]`,
		run: unfoldCode
	},
	{
		key: `Ctrl-Alt-[`,
		run: foldAll
	},
	{
		key: `Ctrl-Alt-]`,
		run: unfoldAll
	}
], xd = {
	placeholderDOM: null,
	preparePlaceholder: null,
	placeholderText: `…`
}, Sd = Y.define({ combine(_) {
	return combineConfig(_, xd);
} });
function codeFolding(_) {
	let y = [yd, Td];
	return _ && y.push(Sd.of(_)), y;
}
function widgetToDOM(_, y) {
	let { state: b } = _, x = b.facet(Sd), onclick = (y) => {
		let b = _.lineBlockAt(_.posAtDOM(y.target)), x = findFold(_.state, b.from, b.to);
		x && _.dispatch({ effects: vd.of(x) }), y.preventDefault();
	};
	if (x.placeholderDOM) return x.placeholderDOM(_, onclick, y);
	let S = document.createElement(`span`);
	return S.textContent = x.placeholderText, S.setAttribute(`aria-label`, b.phrase(`folded code`)), S.title = b.phrase(`unfold`), S.className = `cm-foldPlaceholder`, S.onclick = onclick, S;
}
var Cd = Decoration.replace({ widget: new class extends WidgetType {
	toDOM(_) {
		return widgetToDOM(_, null);
	}
}() }), PreparedFoldWidget = class extends WidgetType {
	constructor(_) {
		super(), this.value = _;
	}
	eq(_) {
		return this.value == _.value;
	}
	toDOM(_) {
		return widgetToDOM(_, this.value);
	}
}, wd = {
	openText: `⌄`,
	closedText: `›`,
	markerDOM: null,
	domEventHandlers: {},
	foldingChanged: () => !1
}, FoldMarker = class extends GutterMarker {
	constructor(_, y) {
		super(), this.config = _, this.open = y;
	}
	eq(_) {
		return this.config == _.config && this.open == _.open;
	}
	toDOM(_) {
		if (this.config.markerDOM) return this.config.markerDOM(this.open);
		let y = document.createElement(`span`);
		return y.textContent = this.open ? this.config.openText : this.config.closedText, y.title = _.state.phrase(this.open ? `Fold line` : `Unfold line`), y;
	}
};
function foldGutter(_ = {}) {
	let y = Object.assign(Object.assign({}, wd), _), b = new FoldMarker(y, !0), x = new FoldMarker(y, !1), S = Ec.fromClass(class {
		constructor(_) {
			this.from = _.viewport.from, this.markers = this.buildMarkers(_);
		}
		update(_) {
			(_.docChanged || _.viewportChanged || _.startState.facet(ld) != _.state.facet(ld) || _.startState.field(yd, !1) != _.state.field(yd, !1) || syntaxTree(_.startState) != syntaxTree(_.state) || y.foldingChanged(_)) && (this.markers = this.buildMarkers(_.view));
		}
		buildMarkers(_) {
			let y = new ps();
			for (let S of _.viewportLineBlocks) {
				let C = findFold(_.state, S.from, S.to) ? x : foldable(_.state, S.from, S.to) ? b : null;
				C && y.add(S.from, S.from, C);
			}
			return y.finish();
		}
	}), { domEventHandlers: C } = y;
	return [
		S,
		gutter({
			class: `cm-foldGutter`,
			markers(_) {
				return _.plugin(S)?.markers || fs.empty;
			},
			initialSpacer() {
				return new FoldMarker(y, !1);
			},
			domEventHandlers: Object.assign(Object.assign({}, C), { click: (_, y, b) => {
				if (C.click && C.click(_, y, b)) return !0;
				let x = findFold(_.state, y.from, y.to);
				if (x) return _.dispatch({ effects: vd.of(x) }), !0;
				let S = foldable(_.state, y.from, y.to);
				return S ? (_.dispatch({ effects: _d.of(S) }), !0) : !1;
			} })
		}),
		codeFolding()
	];
}
var Td = Z.baseTheme({
	".cm-foldPlaceholder": {
		backgroundColor: `#eee`,
		border: `1px solid #ddd`,
		color: `#888`,
		borderRadius: `.2em`,
		margin: `0 1px`,
		padding: `0 1px`,
		cursor: `pointer`
	},
	".cm-foldGutter span": {
		padding: `0 1px`,
		cursor: `pointer`
	}
}), Ed = class HighlightStyle {
	constructor(_, y) {
		this.specs = _;
		let b;
		function def(_) {
			let y = StyleModule.newName();
			return (b ||= Object.create(null))[`.` + y] = _, y;
		}
		let x = typeof y.all == `string` ? y.all : y.all ? def(y.all) : void 0, S = y.scope;
		this.scope = S instanceof Language ? (_) => _.prop(td) == S.data : S ? (_) => _ == S : void 0, this.style = tagHighlighter(_.map((_) => ({
			tag: _.tag,
			class: _.class || def(Object.assign({}, _, { tag: null }))
		})), { all: x }).style, this.module = b ? new StyleModule(b) : null, this.themeType = y.themeType;
	}
	static define(_, y) {
		return new HighlightStyle(_, y || {});
	}
}, Dd = Y.define(), Od = Y.define({ combine(_) {
	return _.length ? [_[0]] : null;
} });
function getHighlighters(_) {
	let y = _.facet(Dd);
	return y.length ? y : _.facet(Od);
}
function syntaxHighlighting(_, y) {
	let b = [kd], x;
	return _ instanceof Ed && (_.module && b.push(Z.styleModule.of(_.module)), x = _.themeType), y?.fallback ? b.push(Od.of(_)) : x ? b.push(Dd.computeN([Z.darkTheme], (y) => y.facet(Z.darkTheme) == (x == `dark`) ? [_] : [])) : b.push(Dd.of(_)), b;
}
var TreeHighlighter = class {
	constructor(_) {
		this.markCache = Object.create(null), this.tree = syntaxTree(_.state), this.decorations = this.buildDeco(_, getHighlighters(_.state)), this.decoratedTo = _.viewport.to;
	}
	update(_) {
		let y = syntaxTree(_.state), b = getHighlighters(_.state), x = b != getHighlighters(_.startState), { viewport: S } = _.view, C = _.changes.mapPos(this.decoratedTo, 1);
		y.length < S.to && !x && y.type == this.tree.type && C >= S.to ? (this.decorations = this.decorations.map(_.changes), this.decoratedTo = C) : (y != this.tree || _.viewportChanged || x) && (this.tree = y, this.decorations = this.buildDeco(_.view, b), this.decoratedTo = S.to);
	}
	buildDeco(_, y) {
		if (!y || !this.tree.length) return Decoration.none;
		let b = new ps();
		for (let { from: x, to: S } of _.visibleRanges) highlightTree(this.tree, y, (_, y, x) => {
			b.add(_, y, this.markCache[x] || (this.markCache[x] = Decoration.mark({ class: x })));
		}, x, S);
		return b.finish();
	}
}, kd = Ko.high(Ec.fromClass(TreeHighlighter, { decorations: (_) => _.decorations })), Ad = Ed.define([
	{
		tag: $.meta,
		color: `#404740`
	},
	{
		tag: $.link,
		textDecoration: `underline`
	},
	{
		tag: $.heading,
		textDecoration: `underline`,
		fontWeight: `bold`
	},
	{
		tag: $.emphasis,
		fontStyle: `italic`
	},
	{
		tag: $.strong,
		fontWeight: `bold`
	},
	{
		tag: $.strikethrough,
		textDecoration: `line-through`
	},
	{
		tag: $.keyword,
		color: `#708`
	},
	{
		tag: [
			$.atom,
			$.bool,
			$.url,
			$.contentSeparator,
			$.labelName
		],
		color: `#219`
	},
	{
		tag: [$.literal, $.inserted],
		color: `#164`
	},
	{
		tag: [$.string, $.deleted],
		color: `#a11`
	},
	{
		tag: [
			$.regexp,
			$.escape,
			$.special($.string)
		],
		color: `#e40`
	},
	{
		tag: $.definition($.variableName),
		color: `#00f`
	},
	{
		tag: $.local($.variableName),
		color: `#30a`
	},
	{
		tag: [$.typeName, $.namespace],
		color: `#085`
	},
	{
		tag: $.className,
		color: `#167`
	},
	{
		tag: [$.special($.variableName), $.macroName],
		color: `#256`
	},
	{
		tag: $.definition($.propertyName),
		color: `#00c`
	},
	{
		tag: $.comment,
		color: `#940`
	},
	{
		tag: $.invalid,
		color: `#f00`
	}
]), jd = Z.baseTheme({
	"&.cm-focused .cm-matchingBracket": { backgroundColor: `#328c8252` },
	"&.cm-focused .cm-nonmatchingBracket": { backgroundColor: `#bb555544` }
}), Md = 1e4, Nd = `()[]{}`, Pd = Y.define({ combine(_) {
	return combineConfig(_, {
		afterCursor: !0,
		brackets: Nd,
		maxScanDistance: Md,
		renderMatch: defaultRenderMatch
	});
} }), Fd = Decoration.mark({ class: `cm-matchingBracket` }), Id = Decoration.mark({ class: `cm-nonmatchingBracket` });
function defaultRenderMatch(_) {
	let y = [], b = _.matched ? Fd : Id;
	return y.push(b.range(_.start.from, _.start.to)), _.end && y.push(b.range(_.end.from, _.end.to)), y;
}
var Ld = [Wo.define({
	create() {
		return Decoration.none;
	},
	update(_, y) {
		if (!y.docChanged && !y.selection) return _;
		let b = [], x = y.state.facet(Pd);
		for (let _ of y.state.selection.ranges) {
			if (!_.empty) continue;
			let S = matchBrackets(y.state, _.head, -1, x) || _.head > 0 && matchBrackets(y.state, _.head - 1, 1, x) || x.afterCursor && (matchBrackets(y.state, _.head, 1, x) || _.head < y.state.doc.length && matchBrackets(y.state, _.head + 1, -1, x));
			S && (b = b.concat(x.renderMatch(S, y.state)));
		}
		return Decoration.set(b, !0);
	},
	provide: (_) => Z.decorations.from(_)
}), jd];
function bracketMatching(_ = {}) {
	return [Pd.of(_), Ld];
}
var Rd = new NodeProp();
function matchingNodes(_, y, b) {
	let x = _.prop(y < 0 ? NodeProp.openedBy : NodeProp.closedBy);
	if (x) return x;
	if (_.name.length == 1) {
		let x = b.indexOf(_.name);
		if (x > -1 && x % 2 == +(y < 0)) return [b[x + y]];
	}
	return null;
}
function findHandle(_) {
	let y = _.type.prop(Rd);
	return y ? y(_.node) : _;
}
function matchBrackets(_, y, b, x = {}) {
	let S = x.maxScanDistance || Md, C = x.brackets || Nd, w = syntaxTree(_), E = w.resolveInner(y, b);
	for (let x = E; x; x = x.parent) {
		let S = matchingNodes(x.type, b, C);
		if (S && x.from < x.to) {
			let w = findHandle(x);
			if (w && (b > 0 ? y >= w.from && y < w.to : y > w.from && y <= w.to)) return matchMarkedBrackets(_, y, b, x, w, S, C);
		}
	}
	return matchPlainBrackets(_, y, b, w, E.type, S, C);
}
function matchMarkedBrackets(_, y, b, x, S, C, w) {
	let E = x.parent, D = {
		from: S.from,
		to: S.to
	}, O = 0, k = E?.cursor();
	if (k && (b < 0 ? k.childBefore(x.from) : k.childAfter(x.to))) do
		if (b < 0 ? k.to <= x.from : k.from >= x.to) {
			if (O == 0 && C.indexOf(k.type.name) > -1 && k.from < k.to) {
				let _ = findHandle(k);
				return {
					start: D,
					end: _ ? {
						from: _.from,
						to: _.to
					} : void 0,
					matched: !0
				};
			} else if (matchingNodes(k.type, b, w)) O++;
			else if (matchingNodes(k.type, -b, w)) {
				if (O == 0) {
					let _ = findHandle(k);
					return {
						start: D,
						end: _ && _.from < _.to ? {
							from: _.from,
							to: _.to
						} : void 0,
						matched: !1
					};
				}
				O--;
			}
		}
	while (b < 0 ? k.prevSibling() : k.nextSibling());
	return {
		start: D,
		matched: !1
	};
}
function matchPlainBrackets(_, y, b, x, S, C, w) {
	let E = b < 0 ? _.sliceDoc(y - 1, y) : _.sliceDoc(y, y + 1), D = w.indexOf(E);
	if (D < 0 || D % 2 == 0 != b > 0) return null;
	let O = {
		from: b < 0 ? y - 1 : y,
		to: b > 0 ? y + 1 : y
	}, k = _.doc.iterRange(y, b > 0 ? _.doc.length : 0), A = 0;
	for (let _ = 0; !k.next().done && _ <= C;) {
		let C = k.value;
		b < 0 && (_ += C.length);
		let E = y + _ * b;
		for (let _ = b > 0 ? 0 : C.length - 1, y = b > 0 ? C.length : -1; _ != y; _ += b) {
			let y = w.indexOf(C[_]);
			if (!(y < 0 || x.resolveInner(E + _, 1).type != S)) if (y % 2 == 0 == b > 0) A++;
			else if (A == 1) return {
				start: O,
				end: {
					from: E + _,
					to: E + _ + 1
				},
				matched: y >> 1 == D >> 1
			};
			else A--;
		}
		b > 0 && (_ += C.length);
	}
	return k.done ? {
		start: O,
		matched: !1
	} : null;
}
var zd = Object.create(null), Bd = [wu.none], Vd = [], Hd = Object.create(null), Ud = Object.create(null);
for (let [_, y] of [
	[`variable`, `variableName`],
	[`variable-2`, `variableName.special`],
	[`string-2`, `string.special`],
	[`def`, `variableName.definition`],
	[`tag`, `tagName`],
	[`attribute`, `attributeName`],
	[`type`, `typeName`],
	[`builtin`, `variableName.standard`],
	[`qualifier`, `modifier`],
	[`error`, `invalid`],
	[`header`, `heading`],
	[`property`, `propertyName`]
]) Ud[_] = createTokenType(zd, y);
function warnForPart(_, y) {
	Vd.indexOf(_) > -1 || (Vd.push(_), console.warn(y));
}
function createTokenType(_, y) {
	let b = [];
	for (let x of y.split(` `)) {
		let y = [];
		for (let b of x.split(`.`)) {
			let x = _[b] || $[b];
			x ? typeof x == `function` ? y.length ? y = y.map(x) : warnForPart(b, `Modifier ${b} used at start of tag`) : y.length ? warnForPart(b, `Tag ${b} used as modifier`) : y = Array.isArray(x) ? x : [x] : warnForPart(b, `Unknown highlighting tag ${b}`);
		}
		for (let _ of y) b.push(_);
	}
	if (!b.length) return 0;
	let x = y.replace(/ /g, `_`), S = x + ` ` + b.map((_) => _.id), C = Hd[S];
	if (C) return C.id;
	let w = Hd[S] = wu.define({
		id: Bd.length,
		name: x,
		props: [styleTags({ [x]: b })]
	});
	return Bd.push(w), w.id;
}
tc.RTL, tc.LTR;
var CompletionContext = class {
	constructor(_, y, b, x) {
		this.state = _, this.pos = y, this.explicit = b, this.view = x, this.abortListeners = [], this.abortOnDocChange = !1;
	}
	tokenBefore(_) {
		let y = syntaxTree(this.state).resolveInner(this.pos, -1);
		for (; y && _.indexOf(y.name) < 0;) y = y.parent;
		return y ? {
			from: y.from,
			to: this.pos,
			text: this.state.sliceDoc(y.from, this.pos),
			type: y.type
		} : null;
	}
	matchBefore(_) {
		let y = this.state.doc.lineAt(this.pos), b = Math.max(y.from, this.pos - 250), x = y.text.slice(b - y.from, this.pos - y.from), S = x.search(ensureAnchor(_, !1));
		return S < 0 ? null : {
			from: b + S,
			to: this.pos,
			text: x.slice(S)
		};
	}
	get aborted() {
		return this.abortListeners == null;
	}
	addEventListener(_, y, b) {
		_ == `abort` && this.abortListeners && (this.abortListeners.push(y), b && b.onDocChange && (this.abortOnDocChange = !0));
	}
};
function toSet(_) {
	let y = Object.keys(_).join(``), b = /\w/.test(y);
	return b && (y = y.replace(/\w/g, ``)), `[${b ? `\\w` : ``}${y.replace(/[^\w\s]/g, `\\$&`)}]`;
}
function prefixMatch(_) {
	let y = Object.create(null), b = Object.create(null);
	for (let { label: x } of _) {
		y[x[0]] = !0;
		for (let _ = 1; _ < x.length; _++) b[x[_]] = !0;
	}
	let x = toSet(y) + toSet(b) + `*$`;
	return [RegExp(`^` + x), new RegExp(x)];
}
function completeFromList(_) {
	let y = _.map((_) => typeof _ == `string` ? { label: _ } : _), [b, x] = y.every((_) => /^\w+$/.test(_.label)) ? [/\w*$/, /\w+$/] : prefixMatch(y);
	return (_) => {
		let S = _.matchBefore(x);
		return S || _.explicit ? {
			from: S ? S.from : _.pos,
			options: y,
			validFor: b
		} : null;
	};
}
var Option = class {
	constructor(_, y, b, x) {
		this.completion = _, this.source = y, this.match = b, this.score = x;
	}
};
function cur(_) {
	return _.selection.main.from;
}
function ensureAnchor(_, y) {
	let { source: b } = _, x = y && b[0] != `^`, S = b[b.length - 1] != `$`;
	return !x && !S ? _ : RegExp(`${x ? `^` : ``}(?:${b})${S ? `$` : ``}`, _.flags ?? (_.ignoreCase ? `i` : ``));
}
var Wd = Annotation.define();
function insertCompletionText(_, y, b, x) {
	let { main: S } = _.selection, C = b - S.from, w = x - S.from;
	return {
		..._.changeByRange((E) => {
			if (E != S && b != x && _.sliceDoc(E.from + C, E.from + w) != _.sliceDoc(b, x)) return { range: E };
			let D = _.toText(y);
			return {
				changes: {
					from: E.from + C,
					to: x == S.from ? E.to : E.from + w,
					insert: D
				},
				range: J.cursor(E.from + C + D.length)
			};
		}),
		scrollIntoView: !0,
		userEvent: `input.complete`
	};
}
var Gd = /* @__PURE__ */ new WeakMap();
function asSource(_) {
	if (!Array.isArray(_)) return _;
	let y = Gd.get(_);
	return y || Gd.set(_, y = completeFromList(_)), y;
}
var Kd = ns.define(), qd = ns.define(), FuzzyMatcher = class {
	constructor(_) {
		this.pattern = _, this.chars = [], this.folded = [], this.any = [], this.precise = [], this.byWord = [], this.score = 0, this.matched = [];
		for (let y = 0; y < _.length;) {
			let b = codePointAt(_, y), x = codePointSize(b);
			this.chars.push(b);
			let S = _.slice(y, y + x), C = S.toUpperCase();
			this.folded.push(codePointAt(C == S ? S.toLowerCase() : C, 0)), y += x;
		}
		this.astral = _.length != this.chars.length;
	}
	ret(_, y) {
		return this.score = _, this.matched = y, this;
	}
	match(_) {
		if (this.pattern.length == 0) return this.ret(-100, []);
		if (_.length < this.pattern.length) return null;
		let { chars: y, folded: b, any: x, precise: S, byWord: C } = this;
		if (y.length == 1) {
			let x = codePointAt(_, 0), S = codePointSize(x), C = S == _.length ? 0 : -100;
			if (x != y[0]) if (x == b[0]) C += -200;
			else return null;
			return this.ret(C, [0, S]);
		}
		let w = _.indexOf(this.pattern);
		if (w == 0) return this.ret(_.length == this.pattern.length ? 0 : -100, [0, this.pattern.length]);
		let E = y.length, D = 0;
		if (w < 0) {
			for (let S = 0, C = Math.min(_.length, 200); S < C && D < E;) {
				let C = codePointAt(_, S);
				(C == y[D] || C == b[D]) && (x[D++] = S), S += codePointSize(C);
			}
			if (D < E) return null;
		}
		let O = 0, k = 0, A = !1, j = 0, N = -1, P = -1, F = /[a-z]/.test(_), I = !0;
		for (let x = 0, D = Math.min(_.length, 200), L = 0; x < D && k < E;) {
			let D = codePointAt(_, x);
			w < 0 && (O < E && D == y[O] && (S[O++] = x), j < E && (D == y[j] || D == b[j] ? (j == 0 && (N = x), P = x + 1, j++) : j = 0));
			let R, z = D < 255 ? D >= 48 && D <= 57 || D >= 97 && D <= 122 ? 2 : +(D >= 65 && D <= 90) : (R = fromCodePoint(D)) == R.toLowerCase() ? R == R.toUpperCase() ? 0 : 2 : 1;
			(!x || z == 1 && F || L == 0 && z != 0) && (y[k] == D || b[k] == D && (A = !0) ? C[k++] = x : C.length && (I = !1)), L = z, x += codePointSize(D);
		}
		return k == E && C[0] == 0 && I ? this.result(-100 + (A ? -200 : 0), C, _) : j == E && N == 0 ? this.ret(-200 - _.length + (P == _.length ? 0 : -100), [0, P]) : w > -1 ? this.ret(-700 - _.length, [w, w + this.pattern.length]) : j == E ? this.ret(-900 - _.length, [N, P]) : k == E ? this.result(-100 + (A ? -200 : 0) + -700 + (I ? 0 : -1100), C, _) : y.length == 2 ? null : this.result((x[0] ? -700 : 0) + -200 + -1100, x, _);
	}
	result(_, y, b) {
		let x = [], S = 0;
		for (let _ of y) {
			let y = _ + (this.astral ? codePointSize(codePointAt(b, _)) : 1);
			S && x[S - 1] == _ ? x[S - 1] = y : (x[S++] = _, x[S++] = y);
		}
		return this.ret(_ - b.length, x);
	}
}, StrictMatcher = class {
	constructor(_) {
		this.pattern = _, this.matched = [], this.score = 0, this.folded = _.toLowerCase();
	}
	match(_) {
		if (_.length < this.pattern.length) return null;
		let y = _.slice(0, this.pattern.length), b = y == this.pattern ? 0 : y.toLowerCase() == this.folded ? -200 : null;
		return b == null ? null : (this.matched = [0, y.length], this.score = b + (_.length == this.pattern.length ? 0 : -100), this);
	}
}, Jd = Y.define({ combine(_) {
	return combineConfig(_, {
		activateOnTyping: !0,
		activateOnCompletion: () => !1,
		activateOnTypingDelay: 100,
		selectOnOpen: !0,
		override: null,
		closeOnBlur: !0,
		maxRenderedOptions: 100,
		defaultKeymap: !0,
		tooltipClass: () => ``,
		optionClass: () => ``,
		aboveCursor: !1,
		icons: !0,
		addToOptions: [],
		positionInfo: defaultPositionInfo,
		filterStrict: !1,
		compareCompletions: (_, y) => (_.sortText || _.label).localeCompare(y.sortText || y.label),
		interactionDelay: 75,
		updateSyncTime: 100
	}, {
		defaultKeymap: (_, y) => _ && y,
		closeOnBlur: (_, y) => _ && y,
		icons: (_, y) => _ && y,
		tooltipClass: (_, y) => (b) => joinClass(_(b), y(b)),
		optionClass: (_, y) => (b) => joinClass(_(b), y(b)),
		addToOptions: (_, y) => _.concat(y),
		filterStrict: (_, y) => _ || y
	});
} });
function joinClass(_, y) {
	return _ ? y ? _ + ` ` + y : _ : y;
}
function defaultPositionInfo(_, y, b, x, S, C) {
	let w = _.textDirection == tc.RTL, E = w, D = !1, O = `top`, k, A, j = y.left - S.left, N = S.right - y.right, P = x.right - x.left, F = x.bottom - x.top;
	if (E && j < Math.min(P, N) ? E = !1 : !E && N < Math.min(P, j) && (E = !0), P <= (E ? j : N)) k = Math.max(S.top, Math.min(b.top, S.bottom - F)) - y.top, A = Math.min(400, E ? j : N);
	else {
		D = !0, A = Math.min(400, (w ? y.right : S.right - y.left) - 30);
		let _ = S.bottom - y.bottom;
		_ >= F || _ > y.top ? k = b.bottom - y.top : (O = `bottom`, k = y.bottom - b.top);
	}
	let I = (y.bottom - y.top) / C.offsetHeight, L = (y.right - y.left) / C.offsetWidth;
	return {
		style: `${O}: ${k / I}px; max-width: ${A / L}px`,
		class: `cm-completionInfo-` + (D ? w ? `left-narrow` : `right-narrow` : E ? `left` : `right`)
	};
}
var Yd = ns.define();
function optionContent(_) {
	let y = _.addToOptions.slice();
	return _.icons && y.push({
		render(_) {
			let y = document.createElement(`div`);
			return y.classList.add(`cm-completionIcon`), _.type && y.classList.add(..._.type.split(/\s+/g).map((_) => `cm-completionIcon-` + _)), y.setAttribute(`aria-hidden`, `true`), y;
		},
		position: 20
	}), y.push({
		render(_, y, b, x) {
			let S = document.createElement(`span`);
			S.className = `cm-completionLabel`;
			let C = _.displayLabel || _.label, w = 0;
			for (let _ = 0; _ < x.length;) {
				let y = x[_++], b = x[_++];
				y > w && S.appendChild(document.createTextNode(C.slice(w, y)));
				let E = S.appendChild(document.createElement(`span`));
				E.appendChild(document.createTextNode(C.slice(y, b))), E.className = `cm-completionMatchedText`, w = b;
			}
			return w < C.length && S.appendChild(document.createTextNode(C.slice(w))), S;
		},
		position: 50
	}, {
		render(_) {
			if (!_.detail) return null;
			let y = document.createElement(`span`);
			return y.className = `cm-completionDetail`, y.textContent = _.detail, y;
		},
		position: 80
	}), y.sort((_, y) => _.position - y.position).map((_) => _.render);
}
function rangeAroundSelected(_, y, b) {
	if (_ <= b) return {
		from: 0,
		to: _
	};
	if (y < 0 && (y = 0), y <= _ >> 1) {
		let _ = Math.floor(y / b);
		return {
			from: _ * b,
			to: (_ + 1) * b
		};
	}
	let x = Math.ceil((_ - y) / b);
	return {
		from: _ - x * b,
		to: _ - (x - 1) * b
	};
}
var CompletionTooltip = class {
	constructor(_, y, b) {
		this.view = _, this.stateField = y, this.applyCompletion = b, this.info = null, this.infoDestroy = null, this.placeInfoReq = {
			read: () => this.measureInfo(),
			write: (_) => this.placeInfo(_),
			key: this
		}, this.space = null, this.currentClass = ``;
		let x = _.state.field(y), { options: S, selected: C } = x.open, w = _.state.facet(Jd);
		this.optionContent = optionContent(w), this.optionClass = w.optionClass, this.tooltipClass = w.tooltipClass, this.range = rangeAroundSelected(S.length, C, w.maxRenderedOptions), this.dom = document.createElement(`div`), this.dom.className = `cm-tooltip-autocomplete`, this.updateTooltipClass(_.state), this.dom.addEventListener(`mousedown`, (b) => {
			let { options: x } = _.state.field(y).open;
			for (let y = b.target, S; y && y != this.dom; y = y.parentNode) if (y.nodeName == `LI` && (S = /-(\d+)$/.exec(y.id)) && +S[1] < x.length) {
				this.applyCompletion(_, x[+S[1]]), b.preventDefault();
				return;
			}
			if (b.target == this.list) {
				let y = this.list.classList.contains(`cm-completionListIncompleteTop`) && b.clientY < this.list.firstChild.getBoundingClientRect().top ? this.range.from - 1 : this.list.classList.contains(`cm-completionListIncompleteBottom`) && b.clientY > this.list.lastChild.getBoundingClientRect().bottom ? this.range.to : null;
				y != null && (_.dispatch({ effects: Yd.of(y) }), b.preventDefault());
			}
		}), this.dom.addEventListener(`focusout`, (y) => {
			let b = _.state.field(this.stateField, !1);
			b && b.tooltip && _.state.facet(Jd).closeOnBlur && y.relatedTarget != _.contentDOM && _.dispatch({ effects: qd.of(null) });
		}), this.showOptions(S, x.id);
	}
	mount() {
		this.updateSel();
	}
	showOptions(_, y) {
		this.list && this.list.remove(), this.list = this.dom.appendChild(this.createListBox(_, y, this.range)), this.list.addEventListener(`scroll`, () => {
			this.info && this.view.requestMeasure(this.placeInfoReq);
		});
	}
	update(_) {
		let y = _.state.field(this.stateField), b = _.startState.field(this.stateField);
		if (this.updateTooltipClass(_.state), y != b) {
			let { options: x, selected: S, disabled: C } = y.open;
			(!b.open || b.open.options != x) && (this.range = rangeAroundSelected(x.length, S, _.state.facet(Jd).maxRenderedOptions), this.showOptions(x, y.id)), this.updateSel(), C != b.open?.disabled && this.dom.classList.toggle(`cm-tooltip-autocomplete-disabled`, !!C);
		}
	}
	updateTooltipClass(_) {
		let y = this.tooltipClass(_);
		if (y != this.currentClass) {
			for (let _ of this.currentClass.split(` `)) _ && this.dom.classList.remove(_);
			for (let _ of y.split(` `)) _ && this.dom.classList.add(_);
			this.currentClass = y;
		}
	}
	positioned(_) {
		this.space = _, this.info && this.view.requestMeasure(this.placeInfoReq);
	}
	updateSel() {
		let _ = this.view.state.field(this.stateField), y = _.open;
		(y.selected > -1 && y.selected < this.range.from || y.selected >= this.range.to) && (this.range = rangeAroundSelected(y.options.length, y.selected, this.view.state.facet(Jd).maxRenderedOptions), this.showOptions(y.options, _.id));
		let b = this.updateSelectedOption(y.selected);
		if (b) {
			this.destroyInfo();
			let { completion: x } = y.options[y.selected], { info: S } = x;
			if (!S) return;
			let C = typeof S == `string` ? document.createTextNode(S) : S(x);
			if (!C) return;
			`then` in C ? C.then((y) => {
				y && this.view.state.field(this.stateField, !1) == _ && this.addInfoPane(y, x);
			}).catch((_) => logException(this.view.state, _, `completion info`)) : (this.addInfoPane(C, x), b.setAttribute(`aria-describedby`, this.info.id));
		}
	}
	addInfoPane(_, y) {
		this.destroyInfo();
		let b = this.info = document.createElement(`div`);
		if (b.className = `cm-tooltip cm-completionInfo`, b.id = `cm-completionInfo-` + Math.floor(Math.random() * 65535).toString(16), _.nodeType != null) b.appendChild(_), this.infoDestroy = null;
		else {
			let { dom: y, destroy: x } = _;
			b.appendChild(y), this.infoDestroy = x || null;
		}
		this.dom.appendChild(b), this.view.requestMeasure(this.placeInfoReq);
	}
	updateSelectedOption(_) {
		let y = null;
		for (let b = this.list.firstChild, x = this.range.from; b; b = b.nextSibling, x++) b.nodeName != `LI` || !b.id ? x-- : x == _ ? b.hasAttribute(`aria-selected`) || (b.setAttribute(`aria-selected`, `true`), y = b) : b.hasAttribute(`aria-selected`) && (b.removeAttribute(`aria-selected`), b.removeAttribute(`aria-describedby`));
		return y && scrollIntoView(this.list, y), y;
	}
	measureInfo() {
		let _ = this.dom.querySelector(`[aria-selected]`);
		if (!_ || !this.info) return null;
		let y = this.dom.getBoundingClientRect(), b = this.info.getBoundingClientRect(), x = _.getBoundingClientRect(), S = this.space;
		if (!S) {
			let _ = this.dom.ownerDocument.documentElement;
			S = {
				left: 0,
				top: 0,
				right: _.clientWidth,
				bottom: _.clientHeight
			};
		}
		return x.top > Math.min(S.bottom, y.bottom) - 10 || x.bottom < Math.max(S.top, y.top) + 10 ? null : this.view.state.facet(Jd).positionInfo(this.view, y, x, b, S, this.dom);
	}
	placeInfo(_) {
		this.info && (_ ? (_.style && (this.info.style.cssText = _.style), this.info.className = `cm-tooltip cm-completionInfo ` + (_.class || ``)) : this.info.style.cssText = `top: -1e6px`);
	}
	createListBox(_, y, b) {
		let x = document.createElement(`ul`);
		x.id = y, x.setAttribute(`role`, `listbox`), x.setAttribute(`aria-expanded`, `true`), x.setAttribute(`aria-label`, this.view.state.phrase(`Completions`)), x.addEventListener(`mousedown`, (_) => {
			_.target == x && _.preventDefault();
		});
		let S = null;
		for (let C = b.from; C < b.to; C++) {
			let { completion: w, match: E } = _[C], { section: D } = w;
			if (D) {
				let _ = typeof D == `string` ? D : D.name;
				if (_ != S && (C > b.from || b.from == 0)) if (S = _, typeof D != `string` && D.header) x.appendChild(D.header(D));
				else {
					let y = x.appendChild(document.createElement(`completion-section`));
					y.textContent = _;
				}
			}
			let O = x.appendChild(document.createElement(`li`));
			O.id = y + `-` + C, O.setAttribute(`role`, `option`);
			let k = this.optionClass(w);
			k && (O.className = k);
			for (let _ of this.optionContent) {
				let y = _(w, this.view.state, this.view, E);
				y && O.appendChild(y);
			}
		}
		return b.from && x.classList.add(`cm-completionListIncompleteTop`), b.to < _.length && x.classList.add(`cm-completionListIncompleteBottom`), x;
	}
	destroyInfo() {
		this.info &&= (this.infoDestroy && this.infoDestroy(), this.info.remove(), null);
	}
	destroy() {
		this.destroyInfo();
	}
};
function completionTooltip(_, y) {
	return (b) => new CompletionTooltip(b, _, y);
}
function scrollIntoView(_, y) {
	let b = _.getBoundingClientRect(), x = y.getBoundingClientRect(), S = b.height / _.offsetHeight;
	x.top < b.top ? _.scrollTop -= (b.top - x.top) / S : x.bottom > b.bottom && (_.scrollTop += (x.bottom - b.bottom) / S);
}
function score(_) {
	return (_.boost || 0) * 100 + (_.apply ? 10 : 0) + (_.info ? 5 : 0) + +!!_.type;
}
function sortOptions(_, y) {
	let b = [], x = null, S = null, addOption = (_) => {
		b.push(_);
		let { section: y } = _.completion;
		if (y) {
			x ||= [];
			let _ = typeof y == `string` ? y : y.name;
			x.some((y) => y.name == _) || x.push(typeof y == `string` ? { name: _ } : y);
		}
	}, C = y.facet(Jd);
	for (let x of _) if (x.hasResult()) {
		let _ = x.result.getMatch;
		if (x.result.filter === !1) for (let y of x.result.options) addOption(new Option(y, x.source, _ ? _(y) : [], 1e9 - b.length));
		else {
			let b = y.sliceDoc(x.from, x.to), w, E = C.filterStrict ? new StrictMatcher(b) : new FuzzyMatcher(b);
			for (let y of x.result.options) if (w = E.match(y.label)) {
				let b = y.displayLabel ? _ ? _(y, w.matched) : [] : w.matched, C = w.score + (y.boost || 0);
				if (addOption(new Option(y, x.source, b, C)), typeof y.section == `object` && y.section.rank === `dynamic`) {
					let { name: _ } = y.section;
					S ||= Object.create(null), S[_] = Math.max(C, S[_] || -1e9);
				}
			}
		}
	}
	if (x) {
		let _ = Object.create(null), y = 0, cmp = (_, y) => (_.rank === `dynamic` && y.rank === `dynamic` ? S[y.name] - S[_.name] : 0) || (typeof _.rank == `number` ? _.rank : 1e9) - (typeof y.rank == `number` ? y.rank : 1e9) || (_.name < y.name ? -1 : 1);
		for (let b of x.sort(cmp)) y -= 1e5, _[b.name] = y;
		for (let y of b) {
			let { section: b } = y.completion;
			b && (y.score += _[typeof b == `string` ? b : b.name]);
		}
	}
	let w = [], E = null, D = C.compareCompletions;
	for (let _ of b.sort((_, y) => y.score - _.score || D(_.completion, y.completion))) {
		let y = _.completion;
		!E || E.label != y.label || E.detail != y.detail || E.type != null && y.type != null && E.type != y.type || E.apply != y.apply || E.boost != y.boost ? w.push(_) : score(_.completion) > score(E) && (w[w.length - 1] = _), E = _.completion;
	}
	return w;
}
var Xd = class CompletionDialog {
	constructor(_, y, b, x, S, C) {
		this.options = _, this.attrs = y, this.tooltip = b, this.timestamp = x, this.selected = S, this.disabled = C;
	}
	setSelected(_, y) {
		return _ == this.selected || _ >= this.options.length ? this : new CompletionDialog(this.options, makeAttrs(y, _), this.tooltip, this.timestamp, _, this.disabled);
	}
	static build(_, y, b, x, S, C) {
		if (x && !C && _.some((_) => _.isPending)) return x.setDisabled();
		let w = sortOptions(_, y);
		if (!w.length) return x && _.some((_) => _.isPending) ? x.setDisabled() : null;
		let E = y.facet(Jd).selectOnOpen ? 0 : -1;
		if (x && x.selected != E && x.selected != -1) {
			let _ = x.options[x.selected].completion;
			for (let y = 0; y < w.length; y++) if (w[y].completion == _) {
				E = y;
				break;
			}
		}
		return new CompletionDialog(w, makeAttrs(b, E), {
			pos: _.reduce((_, y) => y.hasResult() ? Math.min(_, y.from) : _, 1e8),
			create: of,
			above: S.aboveCursor
		}, x ? x.timestamp : Date.now(), E, !1);
	}
	map(_) {
		return new CompletionDialog(this.options, this.attrs, {
			...this.tooltip,
			pos: _.mapPos(this.tooltip.pos)
		}, this.timestamp, this.selected, this.disabled);
	}
	setDisabled() {
		return new CompletionDialog(this.options, this.attrs, this.tooltip, this.timestamp, this.selected, !0);
	}
}, Zd = class CompletionState {
	constructor(_, y, b) {
		this.active = _, this.id = y, this.open = b;
	}
	static start() {
		return new CompletionState(ef, `cm-ac-` + Math.floor(Math.random() * 2e6).toString(36), null);
	}
	update(_) {
		let { state: y } = _, b = y.facet(Jd), x = (b.override || y.languageDataAt(`autocomplete`, cur(y)).map(asSource)).map((y) => (this.active.find((_) => _.source == y) || new tf(y, +!!this.active.some((_) => _.state != 0))).update(_, b));
		x.length == this.active.length && x.every((_, y) => _ == this.active[y]) && (x = this.active);
		let S = this.open, C = _.effects.some((_) => _.is(rf));
		S && _.docChanged && (S = S.map(_.changes)), _.selection || x.some((y) => y.hasResult() && _.changes.touchesRange(y.from, y.to)) || !sameResults(x, this.active) || C ? S = Xd.build(x, y, this.id, S, b, C) : S && S.disabled && !x.some((_) => _.isPending) && (S = null), !S && x.every((_) => !_.isPending) && x.some((_) => _.hasResult()) && (x = x.map((_) => _.hasResult() ? new tf(_.source, 0) : _));
		for (let y of _.effects) y.is(Yd) && (S &&= S.setSelected(y.value, this.id));
		return x == this.active && S == this.open ? this : new CompletionState(x, this.id, S);
	}
	get tooltip() {
		return this.open ? this.open.tooltip : null;
	}
	get attrs() {
		return this.open ? this.open.attrs : this.active.length ? Qd : $d;
	}
};
function sameResults(_, y) {
	if (_ == y) return !0;
	for (let b = 0, x = 0;;) {
		for (; b < _.length && !_[b].hasResult();) b++;
		for (; x < y.length && !y[x].hasResult();) x++;
		let S = b == _.length, C = x == y.length;
		if (S || C) return S == C;
		if (_[b++].result != y[x++].result) return !1;
	}
}
var Qd = { "aria-autocomplete": `list` }, $d = {};
function makeAttrs(_, y) {
	let b = {
		"aria-autocomplete": `list`,
		"aria-haspopup": `listbox`,
		"aria-controls": _
	};
	return y > -1 && (b[`aria-activedescendant`] = _ + `-` + y), b;
}
var ef = [];
function getUpdateType(_, y) {
	if (_.isUserEvent(`input.complete`)) {
		let b = _.annotation(Wd);
		if (b && y.activateOnCompletion(b)) return 12;
	}
	let b = _.isUserEvent(`input.type`);
	return b && y.activateOnTyping ? 5 : b ? 1 : _.isUserEvent(`delete.backward`) ? 2 : _.selection ? 8 : _.docChanged ? 16 : 0;
}
var tf = class ActiveSource {
	constructor(_, y, b = !1) {
		this.source = _, this.state = y, this.explicit = b;
	}
	hasResult() {
		return !1;
	}
	get isPending() {
		return this.state == 1;
	}
	update(_, y) {
		let b = getUpdateType(_, y), x = this;
		(b & 8 || b & 16 && this.touches(_)) && (x = new ActiveSource(x.source, 0)), b & 4 && x.state == 0 && (x = new ActiveSource(this.source, 1)), x = x.updateFor(_, b);
		for (let y of _.effects) if (y.is(Kd)) x = new ActiveSource(x.source, 1, y.value);
		else if (y.is(qd)) x = new ActiveSource(x.source, 0);
		else if (y.is(rf)) for (let _ of y.value) _.source == x.source && (x = _);
		return x;
	}
	updateFor(_, y) {
		return this.map(_.changes);
	}
	map(_) {
		return this;
	}
	touches(_) {
		return _.changes.touchesRange(cur(_.state));
	}
}, nf = class ActiveResult extends tf {
	constructor(_, y, b, x, S, C) {
		super(_, 3, y), this.limit = b, this.result = x, this.from = S, this.to = C;
	}
	hasResult() {
		return !0;
	}
	updateFor(_, y) {
		if (!(y & 3)) return this.map(_.changes);
		let b = this.result;
		b.map && !_.changes.empty && (b = b.map(b, _.changes));
		let x = _.changes.mapPos(this.from), S = _.changes.mapPos(this.to, 1), C = cur(_.state);
		if (C > S || !b || y & 2 && (cur(_.startState) == this.from || C < this.limit)) return new tf(this.source, y & 4 ? 1 : 0);
		let w = _.changes.mapPos(this.limit);
		return checkValid(b.validFor, _.state, x, S) ? new ActiveResult(this.source, this.explicit, w, b, x, S) : b.update && (b = b.update(b, x, S, new CompletionContext(_.state, C, !1))) ? new ActiveResult(this.source, this.explicit, w, b, b.from, b.to ?? cur(_.state)) : new tf(this.source, 1, this.explicit);
	}
	map(_) {
		if (_.empty) return this;
		let y = this.result.map ? this.result.map(this.result, _) : this.result;
		return y ? new ActiveResult(this.source, this.explicit, _.mapPos(this.limit), y, _.mapPos(this.from), _.mapPos(this.to, 1)) : new tf(this.source, 0);
	}
	touches(_) {
		return _.changes.touchesRange(this.from, this.to);
	}
};
function checkValid(_, y, b, x) {
	if (!_) return !1;
	let S = y.sliceDoc(b, x);
	return typeof _ == `function` ? _(S, b, x, y) : ensureAnchor(_, !0).test(S);
}
var rf = ns.define({ map(_, y) {
	return _.map((_) => _.map(y));
} }), af = Wo.define({
	create() {
		return Zd.start();
	},
	update(_, y) {
		return _.update(y);
	},
	provide: (_) => [nu.from(_, (_) => _.tooltip), Z.contentAttributes.from(_, (_) => _.attrs)]
});
function applyCompletion(_, y) {
	let b = y.completion.apply || y.completion.label, x = _.state.field(af).active.find((_) => _.source == y.source);
	return x instanceof nf ? (typeof b == `string` ? _.dispatch({
		...insertCompletionText(_.state, b, x.from, x.to),
		annotations: Wd.of(y.completion)
	}) : b(_, y.completion, x.from, x.to), !0) : !1;
}
var of = completionTooltip(af, applyCompletion);
function moveCompletionSelection(_, y = `option`) {
	return (b) => {
		let x = b.state.field(af, !1);
		if (!x || !x.open || x.open.disabled || Date.now() - x.open.timestamp < b.state.facet(Jd).interactionDelay) return !1;
		let S = 1, C;
		y == `page` && (C = getTooltip(b, x.open.tooltip)) && (S = Math.max(2, Math.floor(C.dom.offsetHeight / C.dom.querySelector(`li`).offsetHeight) - 1));
		let { length: w } = x.open.options, E = x.open.selected > -1 ? x.open.selected + S * (_ ? 1 : -1) : _ ? 0 : w - 1;
		return E < 0 ? E = y == `page` ? 0 : w - 1 : E >= w && (E = y == `page` ? w - 1 : 0), b.dispatch({ effects: Yd.of(E) }), !0;
	};
}
var acceptCompletion = (_) => {
	let y = _.state.field(af, !1);
	return _.state.readOnly || !y || !y.open || y.open.selected < 0 || y.open.disabled || Date.now() - y.open.timestamp < _.state.facet(Jd).interactionDelay ? !1 : applyCompletion(_, y.open.options[y.open.selected]);
}, startCompletion = (_) => _.state.field(af, !1) ? (_.dispatch({ effects: Kd.of(!0) }), !0) : !1, closeCompletion = (_) => {
	let y = _.state.field(af, !1);
	return !y || !y.active.some((_) => _.state != 0) ? !1 : (_.dispatch({ effects: qd.of(null) }), !0);
}, RunningQuery = class {
	constructor(_, y) {
		this.active = _, this.context = y, this.time = Date.now(), this.updates = [], this.done = void 0;
	}
}, sf = 50, cf = 1e3, lf = Ec.fromClass(class {
	constructor(_) {
		this.view = _, this.debounceUpdate = -1, this.running = [], this.debounceAccept = -1, this.pendingStart = !1, this.composing = 0;
		for (let y of _.state.field(af).active) y.isPending && this.startQuery(y);
	}
	update(_) {
		let y = _.state.field(af), b = _.state.facet(Jd);
		if (!_.selectionSet && !_.docChanged && _.startState.field(af) == y) return;
		let x = _.transactions.some((_) => {
			let y = getUpdateType(_, b);
			return y & 8 || (_.selection || _.docChanged) && !(y & 3);
		});
		for (let y = 0; y < this.running.length; y++) {
			let b = this.running[y];
			if (x || b.context.abortOnDocChange && _.docChanged || b.updates.length + _.transactions.length > sf && Date.now() - b.time > cf) {
				for (let _ of b.context.abortListeners) try {
					_();
				} catch (_) {
					logException(this.view.state, _);
				}
				b.context.abortListeners = null, this.running.splice(y--, 1);
			} else b.updates.push(..._.transactions);
		}
		this.debounceUpdate > -1 && clearTimeout(this.debounceUpdate), _.transactions.some((_) => _.effects.some((_) => _.is(Kd))) && (this.pendingStart = !0);
		let S = this.pendingStart ? 50 : b.activateOnTypingDelay;
		if (this.debounceUpdate = y.active.some((_) => _.isPending && !this.running.some((y) => y.active.source == _.source)) ? setTimeout(() => this.startUpdate(), S) : -1, this.composing != 0) for (let y of _.transactions) y.isUserEvent(`input.type`) ? this.composing = 2 : this.composing == 2 && y.selection && (this.composing = 3);
	}
	startUpdate() {
		this.debounceUpdate = -1, this.pendingStart = !1;
		let { state: _ } = this.view, y = _.field(af);
		for (let _ of y.active) _.isPending && !this.running.some((y) => y.active.source == _.source) && this.startQuery(_);
		this.running.length && y.open && y.open.disabled && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Jd).updateSyncTime));
	}
	startQuery(_) {
		let { state: y } = this.view, b = new CompletionContext(y, cur(y), _.explicit, this.view), x = new RunningQuery(_, b);
		this.running.push(x), Promise.resolve(_.source(b)).then((_) => {
			x.context.aborted || (x.done = _ || null, this.scheduleAccept());
		}, (_) => {
			this.view.dispatch({ effects: qd.of(null) }), logException(this.view.state, _);
		});
	}
	scheduleAccept() {
		this.running.every((_) => _.done !== void 0) ? this.accept() : this.debounceAccept < 0 && (this.debounceAccept = setTimeout(() => this.accept(), this.view.state.facet(Jd).updateSyncTime));
	}
	accept() {
		this.debounceAccept > -1 && clearTimeout(this.debounceAccept), this.debounceAccept = -1;
		let _ = [], y = this.view.state.facet(Jd), b = this.view.state.field(af);
		for (let x = 0; x < this.running.length; x++) {
			let S = this.running[x];
			if (S.done === void 0) continue;
			if (this.running.splice(x--, 1), S.done) {
				let b = cur(S.updates.length ? S.updates[0].startState : this.view.state), x = Math.min(b, S.done.from + +!S.active.explicit), C = new nf(S.active.source, S.active.explicit, x, S.done, S.done.from, S.done.to ?? b);
				for (let _ of S.updates) C = C.update(_, y);
				if (C.hasResult()) {
					_.push(C);
					continue;
				}
			}
			let C = b.active.find((_) => _.source == S.active.source);
			if (C && C.isPending) if (S.done == null) {
				let b = new tf(S.active.source, 0);
				for (let _ of S.updates) b = b.update(_, y);
				b.isPending || _.push(b);
			} else this.startQuery(C);
		}
		(_.length || b.open && b.open.disabled) && this.view.dispatch({ effects: rf.of(_) });
	}
}, { eventHandlers: {
	blur(_) {
		let y = this.view.state.field(af, !1);
		if (y && y.tooltip && this.view.state.facet(Jd).closeOnBlur) {
			let b = y.open && getTooltip(this.view, y.open.tooltip);
			(!b || !b.dom.contains(_.relatedTarget)) && setTimeout(() => this.view.dispatch({ effects: qd.of(null) }), 10);
		}
	},
	compositionstart() {
		this.composing = 1;
	},
	compositionend() {
		this.composing == 3 && setTimeout(() => this.view.dispatch({ effects: Kd.of(!1) }), 20), this.composing = 0;
	}
} }), uf = typeof navigator == `object` && /Win/.test(navigator.platform), df = Ko.highest(Z.domEventHandlers({ keydown(_, y) {
	let b = y.state.field(af, !1);
	if (!b || !b.open || b.open.disabled || b.open.selected < 0 || _.key.length > 1 || _.ctrlKey && !(uf && _.altKey) || _.metaKey) return !1;
	let x = b.open.options[b.open.selected], S = b.active.find((_) => _.source == x.source), C = x.completion.commitCharacters || S.result.commitCharacters;
	return C && C.indexOf(_.key) > -1 && applyCompletion(y, x), !1;
} })), ff = Z.baseTheme({
	".cm-tooltip.cm-tooltip-autocomplete": { "& > ul": {
		fontFamily: `monospace`,
		whiteSpace: `nowrap`,
		overflow: `hidden auto`,
		maxWidth_fallback: `700px`,
		maxWidth: `min(700px, 95vw)`,
		minWidth: `250px`,
		maxHeight: `10em`,
		height: `100%`,
		listStyle: `none`,
		margin: 0,
		padding: 0,
		"& > li, & > completion-section": {
			padding: `1px 3px`,
			lineHeight: 1.2
		},
		"& > li": {
			overflowX: `hidden`,
			textOverflow: `ellipsis`,
			cursor: `pointer`
		},
		"& > completion-section": {
			display: `list-item`,
			borderBottom: `1px solid silver`,
			paddingLeft: `0.5em`,
			opacity: .7
		}
	} },
	"&light .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: `#17c`,
		color: `white`
	},
	"&light .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: `#777` },
	"&dark .cm-tooltip-autocomplete ul li[aria-selected]": {
		background: `#347`,
		color: `white`
	},
	"&dark .cm-tooltip-autocomplete-disabled ul li[aria-selected]": { background: `#444` },
	".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
		content: `"···"`,
		opacity: .5,
		display: `block`,
		textAlign: `center`,
		cursor: `pointer`
	},
	".cm-tooltip.cm-completionInfo": {
		position: `absolute`,
		padding: `3px 9px`,
		width: `max-content`,
		maxWidth: `400px`,
		boxSizing: `border-box`,
		whiteSpace: `pre-line`
	},
	".cm-completionInfo.cm-completionInfo-left": { right: `100%` },
	".cm-completionInfo.cm-completionInfo-right": { left: `100%` },
	".cm-completionInfo.cm-completionInfo-left-narrow": { right: `30px` },
	".cm-completionInfo.cm-completionInfo-right-narrow": { left: `30px` },
	"&light .cm-snippetField": { backgroundColor: `#00000022` },
	"&dark .cm-snippetField": { backgroundColor: `#ffffff22` },
	".cm-snippetFieldPosition": {
		verticalAlign: `text-top`,
		width: 0,
		height: `1.15em`,
		display: `inline-block`,
		margin: `0 -0.7px -.7em`,
		borderLeft: `1.4px dotted #888`
	},
	".cm-completionMatchedText": { textDecoration: `underline` },
	".cm-completionDetail": {
		marginLeft: `0.5em`,
		fontStyle: `italic`
	},
	".cm-completionIcon": {
		fontSize: `90%`,
		width: `.8em`,
		display: `inline-block`,
		textAlign: `center`,
		paddingRight: `.6em`,
		opacity: `0.6`,
		boxSizing: `content-box`
	},
	".cm-completionIcon-function, .cm-completionIcon-method": { "&:after": { content: `'ƒ'` } },
	".cm-completionIcon-class": { "&:after": { content: `'○'` } },
	".cm-completionIcon-interface": { "&:after": { content: `'◌'` } },
	".cm-completionIcon-variable": { "&:after": { content: `'𝑥'` } },
	".cm-completionIcon-constant": { "&:after": { content: `'𝐶'` } },
	".cm-completionIcon-type": { "&:after": { content: `'𝑡'` } },
	".cm-completionIcon-enum": { "&:after": { content: `'∪'` } },
	".cm-completionIcon-property": { "&:after": { content: `'□'` } },
	".cm-completionIcon-keyword": { "&:after": { content: `'🔑︎'` } },
	".cm-completionIcon-namespace": { "&:after": { content: `'▢'` } },
	".cm-completionIcon-text": { "&:after": {
		content: `'abc'`,
		fontSize: `50%`,
		verticalAlign: `middle`
	} }
}), pf = {
	brackets: [
		`(`,
		`[`,
		`{`,
		`'`,
		`"`
	],
	before: `)]}:;>`,
	stringPrefixes: []
}, mf = ns.define({ map(_, y) {
	return y.mapPos(_, -1, Ro.TrackAfter) ?? void 0;
} }), hf = new class extends RangeValue {}();
hf.startSide = 1, hf.endSide = -1;
var gf = Wo.define({
	create() {
		return fs.empty;
	},
	update(_, y) {
		if (_ = _.map(y.changes), y.selection) {
			let b = y.state.doc.lineAt(y.selection.main.head);
			_ = _.update({ filter: (_) => _ >= b.from && _ <= b.to });
		}
		for (let b of y.effects) b.is(mf) && (_ = _.update({ add: [hf.range(b.value, b.value + 1)] }));
		return _;
	}
});
function closeBrackets() {
	return [yf, gf];
}
var _f = `()[]{}<>«»»«［］｛｝`;
function closing(_) {
	for (let y = 0; y < 16; y += 2) if (_f.charCodeAt(y) == _) return _f.charAt(y + 1);
	return fromCodePoint(_ < 128 ? _ : _ + 1);
}
function config(_, y) {
	return _.languageDataAt(`closeBrackets`, y)[0] || pf;
}
var vf = typeof navigator == `object` && /Android\b/.test(navigator.userAgent), yf = Z.inputHandler.of((_, y, b, x) => {
	if ((vf ? _.composing : _.compositionStarted) || _.state.readOnly) return !1;
	let S = _.state.selection.main;
	if (x.length > 2 || x.length == 2 && codePointSize(codePointAt(x, 0)) == 1 || y != S.from || b != S.to) return !1;
	let C = insertBracket(_.state, x);
	return C ? (_.dispatch(C), !0) : !1;
}), deleteBracketPair = ({ state: _, dispatch: y }) => {
	if (_.readOnly) return !1;
	let b = config(_, _.selection.main.head).brackets || pf.brackets, x = null, S = _.changeByRange((y) => {
		if (y.empty) {
			let x = prevChar(_.doc, y.head);
			for (let S of b) if (S == x && nextChar(_.doc, y.head) == closing(codePointAt(S, 0))) return {
				changes: {
					from: y.head - S.length,
					to: y.head + S.length
				},
				range: J.cursor(y.head - S.length)
			};
		}
		return { range: x = y };
	});
	return x || y(_.update(S, {
		scrollIntoView: !0,
		userEvent: `delete.backward`
	})), !x;
}, bf = [{
	key: `Backspace`,
	run: deleteBracketPair
}];
function insertBracket(_, y) {
	let b = config(_, _.selection.main.head), x = b.brackets || pf.brackets;
	for (let S of x) {
		let C = closing(codePointAt(S, 0));
		if (y == S) return C == S ? handleSame(_, S, x.indexOf(S + S + S) > -1, b) : handleOpen(_, S, C, b.before || pf.before);
		if (y == C && closedBracketAt(_, _.selection.main.from)) return handleClose(_, S, C);
	}
	return null;
}
function closedBracketAt(_, y) {
	let b = !1;
	return _.field(gf).between(0, _.doc.length, (_) => {
		_ == y && (b = !0);
	}), b;
}
function nextChar(_, y) {
	let b = _.sliceString(y, y + 2);
	return b.slice(0, codePointSize(codePointAt(b, 0)));
}
function prevChar(_, y) {
	let b = _.sliceString(y - 2, y);
	return codePointSize(codePointAt(b, 0)) == b.length ? b : b.slice(1);
}
function handleOpen(_, y, b, x) {
	let S = null, C = _.changeByRange((C) => {
		if (!C.empty) return {
			changes: [{
				insert: y,
				from: C.from
			}, {
				insert: b,
				from: C.to
			}],
			effects: mf.of(C.to + y.length),
			range: J.range(C.anchor + y.length, C.head + y.length)
		};
		let w = nextChar(_.doc, C.head);
		return !w || /\s/.test(w) || x.indexOf(w) > -1 ? {
			changes: {
				insert: y + b,
				from: C.head
			},
			effects: mf.of(C.head + y.length),
			range: J.cursor(C.head + y.length)
		} : { range: S = C };
	});
	return S ? null : _.update(C, {
		scrollIntoView: !0,
		userEvent: `input.type`
	});
}
function handleClose(_, y, b) {
	let x = null, S = _.changeByRange((y) => y.empty && nextChar(_.doc, y.head) == b ? {
		changes: {
			from: y.head,
			to: y.head + b.length,
			insert: b
		},
		range: J.cursor(y.head + b.length)
	} : x = { range: y });
	return x ? null : _.update(S, {
		scrollIntoView: !0,
		userEvent: `input.type`
	});
}
function handleSame(_, y, b, x) {
	let S = x.stringPrefixes || pf.stringPrefixes, C = null, w = _.changeByRange((x) => {
		if (!x.empty) return {
			changes: [{
				insert: y,
				from: x.from
			}, {
				insert: y,
				from: x.to
			}],
			effects: mf.of(x.to + y.length),
			range: J.range(x.anchor + y.length, x.head + y.length)
		};
		let w = x.head, E = nextChar(_.doc, w), D;
		if (E == y) {
			if (nodeStart(_, w)) return {
				changes: {
					insert: y + y,
					from: w
				},
				effects: mf.of(w + y.length),
				range: J.cursor(w + y.length)
			};
			if (closedBracketAt(_, w)) {
				let x = b && _.sliceDoc(w, w + y.length * 3) == y + y + y ? y + y + y : y;
				return {
					changes: {
						from: w,
						to: w + x.length,
						insert: x
					},
					range: J.cursor(w + x.length)
				};
			}
		} else if (b && _.sliceDoc(w - 2 * y.length, w) == y + y && (D = canStartStringAt(_, w - 2 * y.length, S)) > -1 && nodeStart(_, D)) return {
			changes: {
				insert: y + y + y + y,
				from: w
			},
			effects: mf.of(w + y.length),
			range: J.cursor(w + y.length)
		};
		else if (_.charCategorizer(w)(E) != os.Word && canStartStringAt(_, w, S) > -1 && !probablyInString(_, w, y, S)) return {
			changes: {
				insert: y + y,
				from: w
			},
			effects: mf.of(w + y.length),
			range: J.cursor(w + y.length)
		};
		return { range: C = x };
	});
	return C ? null : _.update(w, {
		scrollIntoView: !0,
		userEvent: `input.type`
	});
}
function nodeStart(_, y) {
	let b = syntaxTree(_).resolveInner(y + 1);
	return b.parent && b.from == y;
}
function probablyInString(_, y, b, x) {
	let S = syntaxTree(_).resolveInner(y, -1), C = x.reduce((_, y) => Math.max(_, y.length), 0);
	for (let w = 0; w < 5; w++) {
		let w = _.sliceDoc(S.from, Math.min(S.to, S.from + b.length + C)), E = w.indexOf(b);
		if (!E || E > -1 && x.indexOf(w.slice(0, E)) > -1) {
			let y = S.firstChild;
			for (; y && y.from == S.from && y.to - y.from > b.length + E;) {
				if (_.sliceDoc(y.to - b.length, y.to) == b) return !1;
				y = y.firstChild;
			}
			return !0;
		}
		let D = S.to == y && S.parent;
		if (!D) break;
		S = D;
	}
	return !1;
}
function canStartStringAt(_, y, b) {
	let x = _.charCategorizer(y);
	if (x(_.sliceDoc(y - 1, y)) != os.Word) return y;
	for (let S of b) {
		let b = y - S.length;
		if (_.sliceDoc(b, y) == S && x(_.sliceDoc(b - 1, b)) != os.Word) return b;
	}
	return -1;
}
function autocompletion(_ = {}) {
	return [
		df,
		af,
		Jd.of(_),
		lf,
		Sf,
		ff
	];
}
var xf = [
	{
		key: `Ctrl-Space`,
		run: startCompletion
	},
	{
		mac: "Alt-`",
		run: startCompletion
	},
	{
		mac: `Alt-i`,
		run: startCompletion
	},
	{
		key: `Escape`,
		run: closeCompletion
	},
	{
		key: `ArrowDown`,
		run: moveCompletionSelection(!0)
	},
	{
		key: `ArrowUp`,
		run: moveCompletionSelection(!1)
	},
	{
		key: `PageDown`,
		run: moveCompletionSelection(!0, `page`)
	},
	{
		key: `PageUp`,
		run: moveCompletionSelection(!1, `page`)
	},
	{
		key: `Enter`,
		run: acceptCompletion
	}
], Sf = Ko.highest(Cl.computeN([Jd], (_) => _.facet(Jd).defaultKeymap ? [xf] : [])), toggleComment = (_) => {
	let { state: y } = _, b = y.doc.lineAt(y.selection.main.from), x = getConfig(_.state, b.from);
	return x.line ? Cf(_) : x.block ? Tf(_) : !1;
};
function command(_, y) {
	return ({ state: b, dispatch: x }) => {
		if (b.readOnly) return !1;
		let S = _(y, b);
		return S ? (x(b.update(S)), !0) : !1;
	};
}
var Cf = command(changeLineComment, 0), wf = command(changeBlockComment, 0), Tf = command((_, y) => changeBlockComment(_, y, selectedLineRanges(y)), 0);
function getConfig(_, y) {
	let b = _.languageDataAt(`commentTokens`, y);
	return b.length ? b[0] : {};
}
var Ef = 50;
function findBlockComment(_, { open: y, close: b }, x, S) {
	let C = _.sliceDoc(x - Ef, x), w = _.sliceDoc(S, S + Ef), E = /\s*$/.exec(C)[0].length, D = /^\s*/.exec(w)[0].length, O = C.length - E;
	if (C.slice(O - y.length, O) == y && w.slice(D, D + b.length) == b) return {
		open: {
			pos: x - E,
			margin: E && 1
		},
		close: {
			pos: S + D,
			margin: D && 1
		}
	};
	let k, A;
	S - x <= 2 * Ef ? k = A = _.sliceDoc(x, S) : (k = _.sliceDoc(x, x + Ef), A = _.sliceDoc(S - Ef, S));
	let j = /^\s*/.exec(k)[0].length, N = /\s*$/.exec(A)[0].length, P = A.length - N - b.length;
	return k.slice(j, j + y.length) == y && A.slice(P, P + b.length) == b ? {
		open: {
			pos: x + j + y.length,
			margin: +!!/\s/.test(k.charAt(j + y.length))
		},
		close: {
			pos: S - N - b.length,
			margin: +!!/\s/.test(A.charAt(P - 1))
		}
	} : null;
}
function selectedLineRanges(_) {
	let y = [];
	for (let b of _.selection.ranges) {
		let x = _.doc.lineAt(b.from), S = b.to <= x.to ? x : _.doc.lineAt(b.to), C = y.length - 1;
		C >= 0 && y[C].to > x.from ? y[C].to = S.to : y.push({
			from: x.from + /^\s*/.exec(x.text)[0].length,
			to: S.to
		});
	}
	return y;
}
function changeBlockComment(_, y, b = y.selection.ranges) {
	let x = b.map((_) => getConfig(y, _.from).block);
	if (!x.every((_) => _)) return null;
	let S = b.map((_, b) => findBlockComment(y, x[b], _.from, _.to));
	if (_ != 2 && !S.every((_) => _)) return { changes: y.changes(b.map((_, y) => S[y] ? [] : [{
		from: _.from,
		insert: x[y].open + ` `
	}, {
		from: _.to,
		insert: ` ` + x[y].close
	}])) };
	if (_ != 1 && S.some((_) => _)) {
		let _ = [];
		for (let y = 0, b; y < S.length; y++) if (b = S[y]) {
			let S = x[y], { open: C, close: w } = b;
			_.push({
				from: C.pos - S.open.length,
				to: C.pos + C.margin
			}, {
				from: w.pos - w.margin,
				to: w.pos + S.close.length
			});
		}
		return { changes: _ };
	}
	return null;
}
function changeLineComment(_, y, b = y.selection.ranges) {
	let x = [], S = -1;
	for (let { from: _, to: C } of b) {
		let b = x.length, w = 1e9, E = getConfig(y, _).line;
		if (E) {
			for (let b = _; b <= C;) {
				let D = y.doc.lineAt(b);
				if (D.from > S && (_ == C || C > D.from)) {
					S = D.from;
					let _ = /^\s*/.exec(D.text)[0].length, y = _ == D.length, b = D.text.slice(_, _ + E.length) == E ? _ : -1;
					_ < D.text.length && _ < w && (w = _), x.push({
						line: D,
						comment: b,
						token: E,
						indent: _,
						empty: y,
						single: !1
					});
				}
				b = D.to + 1;
			}
			if (w < 1e9) for (let _ = b; _ < x.length; _++) x[_].indent < x[_].line.text.length && (x[_].indent = w);
			x.length == b + 1 && (x[b].single = !0);
		}
	}
	if (_ != 2 && x.some((_) => _.comment < 0 && (!_.empty || _.single))) {
		let _ = [];
		for (let { line: y, token: b, indent: S, empty: C, single: w } of x) (w || !C) && _.push({
			from: y.from + S,
			insert: b + ` `
		});
		let b = y.changes(_);
		return {
			changes: b,
			selection: y.selection.map(b, 1)
		};
	} else if (_ != 1 && x.some((_) => _.comment >= 0)) {
		let _ = [];
		for (let { line: y, comment: b, token: S } of x) if (b >= 0) {
			let x = y.from + b, C = x + S.length;
			y.text[C - y.from] == ` ` && C++, _.push({
				from: x,
				to: C
			});
		}
		return { changes: _ };
	}
	return null;
}
var Df = Annotation.define(), Of = Annotation.define(), kf = Y.define(), Af = Y.define({ combine(_) {
	return combineConfig(_, {
		minDepth: 100,
		newGroupDelay: 500,
		joinToEvent: (_, y) => y
	}, {
		minDepth: Math.max,
		newGroupDelay: Math.min,
		joinToEvent: (_, y) => (b, x) => _(b, x) || y(b, x)
	});
} }), jf = Wo.define({
	create() {
		return Bf.empty;
	},
	update(_, y) {
		let b = y.state.facet(Af), x = y.annotation(Df);
		if (x) {
			let S = If.fromTransaction(y, x.selection), C = x.side, w = C == 0 ? _.undone : _.done;
			return w = S ? updateBranch(w, w.length, b.minDepth, S) : addSelection(w, y.startState.selection), new Bf(C == 0 ? x.rest : w, C == 0 ? w : x.rest);
		}
		let S = y.annotation(Of);
		if ((S == `full` || S == `before`) && (_ = _.isolate()), y.annotation(rs.addToHistory) === !1) return y.changes.empty ? _ : _.addMapping(y.changes.desc);
		let C = If.fromTransaction(y), w = y.annotation(rs.time), E = y.annotation(rs.userEvent);
		return C ? _ = _.addChanges(C, w, E, b, y) : y.selection && (_ = _.addSelection(y.startState.selection, w, E, b.newGroupDelay)), (S == `full` || S == `after`) && (_ = _.isolate()), _;
	},
	toJSON(_) {
		return {
			done: _.done.map((_) => _.toJSON()),
			undone: _.undone.map((_) => _.toJSON())
		};
	},
	fromJSON(_) {
		return new Bf(_.done.map(If.fromJSON), _.undone.map(If.fromJSON));
	}
});
function history(_ = {}) {
	return [
		jf,
		Af.of(_),
		Z.domEventHandlers({ beforeinput(_, y) {
			let b = _.inputType == `historyUndo` ? Mf : _.inputType == `historyRedo` ? Nf : null;
			return b ? (_.preventDefault(), b(y)) : !1;
		} })
	];
}
function cmd(_, y) {
	return function({ state: b, dispatch: x }) {
		if (!y && b.readOnly) return !1;
		let S = b.field(jf, !1);
		if (!S) return !1;
		let C = S.pop(_, b, y);
		return C ? (x(C), !0) : !1;
	};
}
var Mf = cmd(0, !1), Nf = cmd(1, !1), Pf = cmd(0, !0), Ff = cmd(1, !0), If = class HistEvent {
	constructor(_, y, b, x, S) {
		this.changes = _, this.effects = y, this.mapped = b, this.startSelection = x, this.selectionsAfter = S;
	}
	setSelAfter(_) {
		return new HistEvent(this.changes, this.effects, this.mapped, this.startSelection, _);
	}
	toJSON() {
		return {
			changes: this.changes?.toJSON(),
			mapped: this.mapped?.toJSON(),
			startSelection: this.startSelection?.toJSON(),
			selectionsAfter: this.selectionsAfter.map((_) => _.toJSON())
		};
	}
	static fromJSON(_) {
		return new HistEvent(_.changes && Bo.fromJSON(_.changes), [], _.mapped && zo.fromJSON(_.mapped), _.startSelection && J.fromJSON(_.startSelection), _.selectionsAfter.map(J.fromJSON));
	}
	static fromTransaction(_, y) {
		let b = Lf;
		for (let y of _.startState.facet(kf)) {
			let x = y(_);
			x.length && (b = b.concat(x));
		}
		return !b.length && _.changes.empty ? null : new HistEvent(_.changes.invert(_.startState.doc), b, void 0, y || _.startState.selection, Lf);
	}
	static selection(_) {
		return new HistEvent(void 0, Lf, void 0, void 0, _);
	}
};
function updateBranch(_, y, b, x) {
	let S = y + 1 > b + 20 ? y - b - 1 : 0, C = _.slice(S, y);
	return C.push(x), C;
}
function isAdjacent(_, y) {
	let b = [], x = !1;
	return _.iterChangedRanges((_, y) => b.push(_, y)), y.iterChangedRanges((_, y, S, C) => {
		for (let _ = 0; _ < b.length;) {
			let y = b[_++], w = b[_++];
			C >= y && S <= w && (x = !0);
		}
	}), x;
}
function eqSelectionShape(_, y) {
	return _.ranges.length == y.ranges.length && _.ranges.filter((_, b) => _.empty != y.ranges[b].empty).length === 0;
}
function conc(_, y) {
	return _.length ? y.length ? _.concat(y) : _ : y;
}
var Lf = [], Rf = 200;
function addSelection(_, y) {
	if (_.length) {
		let b = _[_.length - 1], x = b.selectionsAfter.slice(Math.max(0, b.selectionsAfter.length - Rf));
		return x.length && x[x.length - 1].eq(y) ? _ : (x.push(y), updateBranch(_, _.length - 1, 1e9, b.setSelAfter(x)));
	} else return [If.selection([y])];
}
function popSelection(_) {
	let y = _[_.length - 1], b = _.slice();
	return b[_.length - 1] = y.setSelAfter(y.selectionsAfter.slice(0, y.selectionsAfter.length - 1)), b;
}
function addMappingToBranch(_, y) {
	if (!_.length) return _;
	let b = _.length, x = Lf;
	for (; b;) {
		let S = mapEvent(_[b - 1], y, x);
		if (S.changes && !S.changes.empty || S.effects.length) {
			let y = _.slice(0, b);
			return y[b - 1] = S, y;
		} else y = S.mapped, b--, x = S.selectionsAfter;
	}
	return x.length ? [If.selection(x)] : Lf;
}
function mapEvent(_, y, b) {
	let x = conc(_.selectionsAfter.length ? _.selectionsAfter.map((_) => _.map(y)) : Lf, b);
	if (!_.changes) return If.selection(x);
	let S = _.changes.map(y), C = y.mapDesc(_.changes, !0), w = _.mapped ? _.mapped.composeDesc(C) : C;
	return new If(S, ns.mapEffects(_.effects, y), w, _.startSelection.map(C), x);
}
var zf = /^(input\.type|delete)($|\.)/, Bf = class HistoryState {
	constructor(_, y, b = 0, x = void 0) {
		this.done = _, this.undone = y, this.prevTime = b, this.prevUserEvent = x;
	}
	isolate() {
		return this.prevTime ? new HistoryState(this.done, this.undone) : this;
	}
	addChanges(_, y, b, x, S) {
		let C = this.done, w = C[C.length - 1];
		return C = w && w.changes && !w.changes.empty && _.changes && (!b || zf.test(b)) && (!w.selectionsAfter.length && y - this.prevTime < x.newGroupDelay && x.joinToEvent(S, isAdjacent(w.changes, _.changes)) || b == `input.type.compose`) ? updateBranch(C, C.length - 1, x.minDepth, new If(_.changes.compose(w.changes), conc(_.effects, w.effects), w.mapped, w.startSelection, Lf)) : updateBranch(C, C.length, x.minDepth, _), new HistoryState(C, Lf, y, b);
	}
	addSelection(_, y, b, x) {
		let S = this.done.length ? this.done[this.done.length - 1].selectionsAfter : Lf;
		return S.length > 0 && y - this.prevTime < x && b == this.prevUserEvent && b && /^select($|\.)/.test(b) && eqSelectionShape(S[S.length - 1], _) ? this : new HistoryState(addSelection(this.done, _), this.undone, y, b);
	}
	addMapping(_) {
		return new HistoryState(addMappingToBranch(this.done, _), addMappingToBranch(this.undone, _), this.prevTime, this.prevUserEvent);
	}
	pop(_, y, b) {
		let x = _ == 0 ? this.done : this.undone;
		if (x.length == 0) return null;
		let S = x[x.length - 1], C = S.selectionsAfter[0] || y.selection;
		if (b && S.selectionsAfter.length) return y.update({
			selection: S.selectionsAfter[S.selectionsAfter.length - 1],
			annotations: Df.of({
				side: _,
				rest: popSelection(x),
				selection: C
			}),
			userEvent: _ == 0 ? `select.undo` : `select.redo`,
			scrollIntoView: !0
		});
		if (S.changes) {
			let b = x.length == 1 ? Lf : x.slice(0, x.length - 1);
			return S.mapped && (b = addMappingToBranch(b, S.mapped)), y.update({
				changes: S.changes,
				selection: S.startSelection,
				effects: S.effects,
				annotations: Df.of({
					side: _,
					rest: b,
					selection: C
				}),
				filter: !1,
				userEvent: _ == 0 ? `undo` : `redo`,
				scrollIntoView: !0
			});
		} else return null;
	}
};
Bf.empty = new Bf(Lf, Lf);
var Vf = [
	{
		key: `Mod-z`,
		run: Mf,
		preventDefault: !0
	},
	{
		key: `Mod-y`,
		mac: `Mod-Shift-z`,
		run: Nf,
		preventDefault: !0
	},
	{
		linux: `Ctrl-Shift-z`,
		run: Nf,
		preventDefault: !0
	},
	{
		key: `Mod-u`,
		run: Pf,
		preventDefault: !0
	},
	{
		key: `Alt-u`,
		mac: `Mod-Shift-u`,
		run: Ff,
		preventDefault: !0
	}
];
function updateSel(_, y) {
	return J.create(_.ranges.map(y), _.mainIndex);
}
function setSel(_, y) {
	return _.update({
		selection: y,
		scrollIntoView: !0,
		userEvent: `select`
	});
}
function moveSel({ state: _, dispatch: y }, b) {
	let x = updateSel(_.selection, b);
	return x.eq(_.selection, !0) ? !1 : (y(setSel(_, x)), !0);
}
function rangeEnd(_, y) {
	return J.cursor(y ? _.to : _.from);
}
function cursorByChar(_, y) {
	return moveSel(_, (b) => b.empty ? _.moveByChar(b, y) : rangeEnd(b, y));
}
function ltrAtCursor(_) {
	return _.textDirectionAt(_.state.selection.main.head) == tc.LTR;
}
var cursorCharLeft = (_) => cursorByChar(_, !ltrAtCursor(_)), cursorCharRight = (_) => cursorByChar(_, ltrAtCursor(_));
function cursorByGroup(_, y) {
	return moveSel(_, (b) => b.empty ? _.moveByGroup(b, y) : rangeEnd(b, y));
}
var cursorGroupLeft = (_) => cursorByGroup(_, !ltrAtCursor(_)), cursorGroupRight = (_) => cursorByGroup(_, ltrAtCursor(_));
typeof Intl < `u` && Intl.Segmenter;
function interestingNode(_, y, b) {
	if (y.type.prop(b)) return !0;
	let x = y.to - y.from;
	return x && (x > 2 || /[^\s,.;:]/.test(_.sliceDoc(y.from, y.to))) || y.firstChild;
}
function moveBySyntax(_, y, b) {
	let x = syntaxTree(_).resolveInner(y.head), S = b ? NodeProp.closedBy : NodeProp.openedBy;
	for (let C = y.head;;) {
		let y = b ? x.childAfter(C) : x.childBefore(C);
		if (!y) break;
		interestingNode(_, y, S) ? x = y : C = b ? y.to : y.from;
	}
	let C = x.type.prop(S), w, E;
	return E = C && (w = b ? matchBrackets(_, x.from, 1) : matchBrackets(_, x.to, -1)) && w.matched ? b ? w.end.to : w.end.from : b ? x.to : x.from, J.cursor(E, b ? -1 : 1);
}
var cursorSyntaxLeft = (_) => moveSel(_, (y) => moveBySyntax(_.state, y, !ltrAtCursor(_))), cursorSyntaxRight = (_) => moveSel(_, (y) => moveBySyntax(_.state, y, ltrAtCursor(_)));
function cursorByLine(_, y) {
	return moveSel(_, (b) => {
		if (!b.empty) return rangeEnd(b, y);
		let x = _.moveVertically(b, y);
		return x.head == b.head ? _.moveToLineBoundary(b, y) : x;
	});
}
var cursorLineUp = (_) => cursorByLine(_, !1), cursorLineDown = (_) => cursorByLine(_, !0);
function pageInfo(_) {
	let y = _.scrollDOM.clientHeight < _.scrollDOM.scrollHeight - 2, b = 0, x = 0, S;
	if (y) {
		for (let y of _.state.facet(Z.scrollMargins)) {
			let S = y(_);
			S?.top && (b = Math.max(S?.top, b)), S?.bottom && (x = Math.max(S?.bottom, x));
		}
		S = _.scrollDOM.clientHeight - b - x;
	} else S = (_.dom.ownerDocument.defaultView || window).innerHeight;
	return {
		marginTop: b,
		marginBottom: x,
		selfScroll: y,
		height: Math.max(_.defaultLineHeight, S - 5)
	};
}
function cursorByPage(_, y) {
	let b = pageInfo(_), { state: x } = _, S = updateSel(x.selection, (x) => x.empty ? _.moveVertically(x, y, b.height) : rangeEnd(x, y));
	if (S.eq(x.selection)) return !1;
	let C;
	if (b.selfScroll) {
		let y = _.coordsAtPos(x.selection.main.head), w = _.scrollDOM.getBoundingClientRect(), E = w.top + b.marginTop, D = w.bottom - b.marginBottom;
		y && y.top > E && y.bottom < D && (C = Z.scrollIntoView(S.main.head, {
			y: `start`,
			yMargin: y.top - E
		}));
	}
	return _.dispatch(setSel(x, S), { effects: C }), !0;
}
var cursorPageUp = (_) => cursorByPage(_, !1), cursorPageDown = (_) => cursorByPage(_, !0);
function moveByLineBoundary(_, y, b) {
	let x = _.lineBlockAt(y.head), S = _.moveToLineBoundary(y, b);
	if (S.head == y.head && S.head != (b ? x.to : x.from) && (S = _.moveToLineBoundary(y, b, !1)), !b && S.head == x.from && x.length) {
		let b = /^\s*/.exec(_.state.sliceDoc(x.from, Math.min(x.from + 100, x.to)))[0].length;
		b && y.head != x.from + b && (S = J.cursor(x.from + b));
	}
	return S;
}
var cursorLineBoundaryForward = (_) => moveSel(_, (y) => moveByLineBoundary(_, y, !0)), cursorLineBoundaryBackward = (_) => moveSel(_, (y) => moveByLineBoundary(_, y, !1)), cursorLineBoundaryLeft = (_) => moveSel(_, (y) => moveByLineBoundary(_, y, !ltrAtCursor(_))), cursorLineBoundaryRight = (_) => moveSel(_, (y) => moveByLineBoundary(_, y, ltrAtCursor(_))), cursorLineStart = (_) => moveSel(_, (y) => J.cursor(_.lineBlockAt(y.head).from, 1)), cursorLineEnd = (_) => moveSel(_, (y) => J.cursor(_.lineBlockAt(y.head).to, -1));
function toMatchingBracket(_, y, b) {
	let x = !1, S = updateSel(_.selection, (y) => {
		let S = matchBrackets(_, y.head, -1) || matchBrackets(_, y.head, 1) || y.head > 0 && matchBrackets(_, y.head - 1, 1) || y.head < _.doc.length && matchBrackets(_, y.head + 1, -1);
		if (!S || !S.end) return y;
		x = !0;
		let C = S.start.from == y.head ? S.end.to : S.end.from;
		return b ? J.range(y.anchor, C) : J.cursor(C);
	});
	return x ? (y(setSel(_, S)), !0) : !1;
}
var cursorMatchingBracket = ({ state: _, dispatch: y }) => toMatchingBracket(_, y, !1);
function extendSel(_, y) {
	let b = updateSel(_.state.selection, (_) => {
		let b = y(_);
		return J.range(_.anchor, b.head, b.goalColumn, b.bidiLevel || void 0);
	});
	return b.eq(_.state.selection) ? !1 : (_.dispatch(setSel(_.state, b)), !0);
}
function selectByChar(_, y) {
	return extendSel(_, (b) => _.moveByChar(b, y));
}
var selectCharLeft = (_) => selectByChar(_, !ltrAtCursor(_)), selectCharRight = (_) => selectByChar(_, ltrAtCursor(_));
function selectByGroup(_, y) {
	return extendSel(_, (b) => _.moveByGroup(b, y));
}
var selectGroupLeft = (_) => selectByGroup(_, !ltrAtCursor(_)), selectGroupRight = (_) => selectByGroup(_, ltrAtCursor(_)), selectSyntaxLeft = (_) => extendSel(_, (y) => moveBySyntax(_.state, y, !ltrAtCursor(_))), selectSyntaxRight = (_) => extendSel(_, (y) => moveBySyntax(_.state, y, ltrAtCursor(_)));
function selectByLine(_, y) {
	return extendSel(_, (b) => _.moveVertically(b, y));
}
var selectLineUp = (_) => selectByLine(_, !1), selectLineDown = (_) => selectByLine(_, !0);
function selectByPage(_, y) {
	return extendSel(_, (b) => _.moveVertically(b, y, pageInfo(_).height));
}
var selectPageUp = (_) => selectByPage(_, !1), selectPageDown = (_) => selectByPage(_, !0), selectLineBoundaryForward = (_) => extendSel(_, (y) => moveByLineBoundary(_, y, !0)), selectLineBoundaryBackward = (_) => extendSel(_, (y) => moveByLineBoundary(_, y, !1)), selectLineBoundaryLeft = (_) => extendSel(_, (y) => moveByLineBoundary(_, y, !ltrAtCursor(_))), selectLineBoundaryRight = (_) => extendSel(_, (y) => moveByLineBoundary(_, y, ltrAtCursor(_))), selectLineStart = (_) => extendSel(_, (y) => J.cursor(_.lineBlockAt(y.head).from)), selectLineEnd = (_) => extendSel(_, (y) => J.cursor(_.lineBlockAt(y.head).to)), cursorDocStart = ({ state: _, dispatch: y }) => (y(setSel(_, { anchor: 0 })), !0), cursorDocEnd = ({ state: _, dispatch: y }) => (y(setSel(_, { anchor: _.doc.length })), !0), selectDocStart = ({ state: _, dispatch: y }) => (y(setSel(_, {
	anchor: _.selection.main.anchor,
	head: 0
})), !0), selectDocEnd = ({ state: _, dispatch: y }) => (y(setSel(_, {
	anchor: _.selection.main.anchor,
	head: _.doc.length
})), !0), selectAll = ({ state: _, dispatch: y }) => (y(_.update({
	selection: {
		anchor: 0,
		head: _.doc.length
	},
	userEvent: `select`
})), !0), selectLine = ({ state: _, dispatch: y }) => {
	let b = selectedLineBlocks(_).map(({ from: y, to: b }) => J.range(y, Math.min(b + 1, _.doc.length)));
	return y(_.update({
		selection: J.create(b),
		userEvent: `select`
	})), !0;
}, selectParentSyntax = ({ state: _, dispatch: y }) => (y(setSel(_, updateSel(_.selection, (y) => {
	let b = syntaxTree(_).resolveStack(y.from, 1);
	for (let _ = b; _; _ = _.next) {
		let { node: b } = _;
		if ((b.from < y.from && b.to >= y.to || b.to > y.to && b.from <= y.from) && b.parent?.parent) return J.range(b.to, b.from);
	}
	return y;
}))), !0), simplifySelection = ({ state: _, dispatch: y }) => {
	let b = _.selection, x = null;
	return b.ranges.length > 1 ? x = J.create([b.main]) : b.main.empty || (x = J.create([J.cursor(b.main.head)])), x ? (y(setSel(_, x)), !0) : !1;
};
function deleteBy(_, y) {
	if (_.state.readOnly) return !1;
	let b = `delete.selection`, { state: x } = _, S = x.changeByRange((x) => {
		let { from: S, to: C } = x;
		if (S == C) {
			let w = y(x);
			w < S ? (b = `delete.backward`, w = skipAtomic(_, w, !1)) : w > S && (b = `delete.forward`, w = skipAtomic(_, w, !0)), S = Math.min(S, w), C = Math.max(C, w);
		} else S = skipAtomic(_, S, !1), C = skipAtomic(_, C, !0);
		return S == C ? { range: x } : {
			changes: {
				from: S,
				to: C
			},
			range: J.cursor(S, S < x.head ? -1 : 1)
		};
	});
	return S.changes.empty ? !1 : (_.dispatch(x.update(S, {
		scrollIntoView: !0,
		userEvent: b,
		effects: b == `delete.selection` ? Z.announce.of(x.phrase(`Selection deleted`)) : void 0
	})), !0);
}
function skipAtomic(_, y, b) {
	if (_ instanceof Z) for (let x of _.state.facet(Z.atomicRanges).map((y) => y(_))) x.between(y, y, (_, x) => {
		_ < y && x > y && (y = b ? x : _);
	});
	return y;
}
var deleteByChar = (_, y, b) => deleteBy(_, (x) => {
	let S = x.from, { state: C } = _, w = C.doc.lineAt(S), E, D;
	if (b && !y && S > w.from && S < w.from + 200 && !/[^ \t]/.test(E = w.text.slice(0, S - w.from))) {
		if (E[E.length - 1] == `	`) return S - 1;
		let _ = countColumn(E, C.tabSize) % getIndentUnit(C) || getIndentUnit(C);
		for (let y = 0; y < _ && E[E.length - 1 - y] == ` `; y++) S--;
		D = S;
	} else D = findClusterBreak(w.text, S - w.from, y, y) + w.from, D == S && w.number != (y ? C.doc.lines : 1) ? D += y ? 1 : -1 : !y && /[\ufe00-\ufe0f]/.test(w.text.slice(D - w.from, S - w.from)) && (D = findClusterBreak(w.text, D - w.from, !1, !1) + w.from);
	return D;
}), deleteCharBackward = (_) => deleteByChar(_, !1, !0), deleteCharForward = (_) => deleteByChar(_, !0, !1), deleteByGroup = (_, y) => deleteBy(_, (b) => {
	let x = b.head, { state: S } = _, C = S.doc.lineAt(x), w = S.charCategorizer(x);
	for (let _ = null;;) {
		if (x == (y ? C.to : C.from)) {
			x == b.head && C.number != (y ? S.doc.lines : 1) && (x += y ? 1 : -1);
			break;
		}
		let E = findClusterBreak(C.text, x - C.from, y) + C.from, D = C.text.slice(Math.min(x, E) - C.from, Math.max(x, E) - C.from), O = w(D);
		if (_ != null && O != _) break;
		(D != ` ` || x != b.head) && (_ = O), x = E;
	}
	return x;
}), deleteGroupBackward = (_) => deleteByGroup(_, !1), deleteGroupForward = (_) => deleteByGroup(_, !0), deleteToLineEnd = (_) => deleteBy(_, (y) => {
	let b = _.lineBlockAt(y.head).to;
	return y.head < b ? b : Math.min(_.state.doc.length, y.head + 1);
}), deleteLineBoundaryBackward = (_) => deleteBy(_, (y) => {
	let b = _.moveToLineBoundary(y, !1).head;
	return y.head > b ? b : Math.max(0, y.head - 1);
}), deleteLineBoundaryForward = (_) => deleteBy(_, (y) => {
	let b = _.moveToLineBoundary(y, !0).head;
	return y.head < b ? b : Math.min(_.state.doc.length, y.head + 1);
}), splitLine = ({ state: _, dispatch: y }) => {
	if (_.readOnly) return !1;
	let b = _.changeByRange((_) => ({
		changes: {
			from: _.from,
			to: _.to,
			insert: Mo.of([``, ``])
		},
		range: J.cursor(_.from)
	}));
	return y(_.update(b, {
		scrollIntoView: !0,
		userEvent: `input`
	})), !0;
}, transposeChars = ({ state: _, dispatch: y }) => {
	if (_.readOnly) return !1;
	let b = _.changeByRange((y) => {
		if (!y.empty || y.from == 0 || y.from == _.doc.length) return { range: y };
		let b = y.from, x = _.doc.lineAt(b), S = b == x.from ? b - 1 : findClusterBreak(x.text, b - x.from, !1) + x.from, C = b == x.to ? b + 1 : findClusterBreak(x.text, b - x.from, !0) + x.from;
		return {
			changes: {
				from: S,
				to: C,
				insert: _.doc.slice(b, C).append(_.doc.slice(S, b))
			},
			range: J.cursor(C)
		};
	});
	return b.changes.empty ? !1 : (y(_.update(b, {
		scrollIntoView: !0,
		userEvent: `move.character`
	})), !0);
};
function selectedLineBlocks(_) {
	let y = [], b = -1;
	for (let x of _.selection.ranges) {
		let S = _.doc.lineAt(x.from), C = _.doc.lineAt(x.to);
		if (!x.empty && x.to == C.from && (C = _.doc.lineAt(x.to - 1)), b >= S.number) {
			let _ = y[y.length - 1];
			_.to = C.to, _.ranges.push(x);
		} else y.push({
			from: S.from,
			to: C.to,
			ranges: [x]
		});
		b = C.number + 1;
	}
	return y;
}
function moveLine(_, y, b) {
	if (_.readOnly) return !1;
	let x = [], S = [];
	for (let y of selectedLineBlocks(_)) {
		if (b ? y.to == _.doc.length : y.from == 0) continue;
		let C = _.doc.lineAt(b ? y.to + 1 : y.from - 1), w = C.length + 1;
		if (b) {
			x.push({
				from: y.to,
				to: C.to
			}, {
				from: y.from,
				insert: C.text + _.lineBreak
			});
			for (let b of y.ranges) S.push(J.range(Math.min(_.doc.length, b.anchor + w), Math.min(_.doc.length, b.head + w)));
		} else {
			x.push({
				from: C.from,
				to: y.from
			}, {
				from: y.to,
				insert: _.lineBreak + C.text
			});
			for (let _ of y.ranges) S.push(J.range(_.anchor - w, _.head - w));
		}
	}
	return x.length ? (y(_.update({
		changes: x,
		scrollIntoView: !0,
		selection: J.create(S, _.selection.mainIndex),
		userEvent: `move.line`
	})), !0) : !1;
}
var moveLineUp = ({ state: _, dispatch: y }) => moveLine(_, y, !1), moveLineDown = ({ state: _, dispatch: y }) => moveLine(_, y, !0);
function copyLine(_, y, b) {
	if (_.readOnly) return !1;
	let x = [];
	for (let y of selectedLineBlocks(_)) b ? x.push({
		from: y.from,
		insert: _.doc.slice(y.from, y.to) + _.lineBreak
	}) : x.push({
		from: y.to,
		insert: _.lineBreak + _.doc.slice(y.from, y.to)
	});
	return y(_.update({
		changes: x,
		scrollIntoView: !0,
		userEvent: `input.copyline`
	})), !0;
}
var copyLineUp = ({ state: _, dispatch: y }) => copyLine(_, y, !1), copyLineDown = ({ state: _, dispatch: y }) => copyLine(_, y, !0), deleteLine = (_) => {
	if (_.state.readOnly) return !1;
	let { state: y } = _, b = y.changes(selectedLineBlocks(y).map(({ from: _, to: b }) => (_ > 0 ? _-- : b < y.doc.length && b++, {
		from: _,
		to: b
	}))), x = updateSel(y.selection, (y) => {
		let b;
		if (_.lineWrapping) {
			let x = _.lineBlockAt(y.head), S = _.coordsAtPos(y.head, y.assoc || 1);
			S && (b = x.bottom + _.documentTop - S.bottom + _.defaultLineHeight / 2);
		}
		return _.moveVertically(y, !0, b);
	}).map(b);
	return _.dispatch({
		changes: b,
		selection: x,
		scrollIntoView: !0,
		userEvent: `delete.line`
	}), !0;
};
function isBetweenBrackets(_, y) {
	if (/\(\)|\[\]|\{\}/.test(_.sliceDoc(y - 1, y + 1))) return {
		from: y,
		to: y
	};
	let b = syntaxTree(_).resolveInner(y), x = b.childBefore(y), S = b.childAfter(y), C;
	return x && S && x.to <= y && S.from >= y && (C = x.type.prop(NodeProp.closedBy)) && C.indexOf(S.name) > -1 && _.doc.lineAt(x.to).from == _.doc.lineAt(S.from).from && !/\S/.test(_.sliceDoc(x.to, S.from)) ? {
		from: x.to,
		to: S.from
	} : null;
}
var Hf = newlineAndIndent(!1), Uf = newlineAndIndent(!0);
function newlineAndIndent(_) {
	return ({ state: y, dispatch: b }) => {
		if (y.readOnly) return !1;
		let x = y.changeByRange((b) => {
			let { from: x, to: S } = b, C = y.doc.lineAt(x), w = !_ && x == S && isBetweenBrackets(y, x);
			_ && (x = S = (S <= C.to ? C : y.doc.lineAt(S)).to);
			let E = new IndentContext(y, {
				simulateBreak: x,
				simulateDoubleBreak: !!w
			}), D = getIndentation(E, x);
			for (D ??= countColumn(/^\s*/.exec(y.doc.lineAt(x).text)[0], y.tabSize); S < C.to && /\s/.test(C.text[S - C.from]);) S++;
			w ? {from: x, to: S} = w : x > C.from && x < C.from + 100 && !/\S/.test(C.text.slice(0, x)) && (x = C.from);
			let O = [``, indentString(y, D)];
			return w && O.push(indentString(y, E.lineIndent(C.from, -1))), {
				changes: {
					from: x,
					to: S,
					insert: Mo.of(O)
				},
				range: J.cursor(x + 1 + O[1].length)
			};
		});
		return b(y.update(x, {
			scrollIntoView: !0,
			userEvent: `input`
		})), !0;
	};
}
function changeBySelectedLine(_, y) {
	let b = -1;
	return _.changeByRange((x) => {
		let S = [];
		for (let C = x.from; C <= x.to;) {
			let w = _.doc.lineAt(C);
			w.number > b && (x.empty || x.to > w.from) && (y(w, S, x), b = w.number), C = w.to + 1;
		}
		let C = _.changes(S);
		return {
			changes: S,
			range: J.range(C.mapPos(x.anchor, 1), C.mapPos(x.head, 1))
		};
	});
}
var indentSelection = ({ state: _, dispatch: y }) => {
	if (_.readOnly) return !1;
	let b = Object.create(null), x = new IndentContext(_, { overrideIndentation: (_) => b[_] ?? -1 }), S = changeBySelectedLine(_, (y, S, C) => {
		let w = getIndentation(x, y.from);
		if (w == null) return;
		/\S/.test(y.text) || (w = 0);
		let E = /^\s*/.exec(y.text)[0], D = indentString(_, w);
		(E != D || C.from < y.from + E.length) && (b[y.from] = w, S.push({
			from: y.from,
			to: y.from + E.length,
			insert: D
		}));
	});
	return S.changes.empty || y(_.update(S, { userEvent: `indent` })), !0;
}, indentMore = ({ state: _, dispatch: y }) => _.readOnly ? !1 : (y(_.update(changeBySelectedLine(_, (y, b) => {
	b.push({
		from: y.from,
		insert: _.facet(dd)
	});
}), { userEvent: `input.indent` })), !0), indentLess = ({ state: _, dispatch: y }) => _.readOnly ? !1 : (y(_.update(changeBySelectedLine(_, (y, b) => {
	let x = /^\s*/.exec(y.text)[0];
	if (!x) return;
	let S = countColumn(x, _.tabSize), C = 0, w = indentString(_, Math.max(0, S - getIndentUnit(_)));
	for (; C < x.length && C < w.length && x.charCodeAt(C) == w.charCodeAt(C);) C++;
	b.push({
		from: y.from + C,
		to: y.from + x.length,
		insert: w.slice(C)
	});
}), { userEvent: `delete.dedent` })), !0), Wf = [
	{
		key: `Ctrl-b`,
		run: cursorCharLeft,
		shift: selectCharLeft,
		preventDefault: !0
	},
	{
		key: `Ctrl-f`,
		run: cursorCharRight,
		shift: selectCharRight
	},
	{
		key: `Ctrl-p`,
		run: cursorLineUp,
		shift: selectLineUp
	},
	{
		key: `Ctrl-n`,
		run: cursorLineDown,
		shift: selectLineDown
	},
	{
		key: `Ctrl-a`,
		run: cursorLineStart,
		shift: selectLineStart
	},
	{
		key: `Ctrl-e`,
		run: cursorLineEnd,
		shift: selectLineEnd
	},
	{
		key: `Ctrl-d`,
		run: deleteCharForward
	},
	{
		key: `Ctrl-h`,
		run: deleteCharBackward
	},
	{
		key: `Ctrl-k`,
		run: deleteToLineEnd
	},
	{
		key: `Ctrl-Alt-h`,
		run: deleteGroupBackward
	},
	{
		key: `Ctrl-o`,
		run: splitLine
	},
	{
		key: `Ctrl-t`,
		run: transposeChars
	},
	{
		key: `Ctrl-v`,
		run: cursorPageDown
	}
], Gf = [
	{
		key: `ArrowLeft`,
		run: cursorCharLeft,
		shift: selectCharLeft,
		preventDefault: !0
	},
	{
		key: `Mod-ArrowLeft`,
		mac: `Alt-ArrowLeft`,
		run: cursorGroupLeft,
		shift: selectGroupLeft,
		preventDefault: !0
	},
	{
		mac: `Cmd-ArrowLeft`,
		run: cursorLineBoundaryLeft,
		shift: selectLineBoundaryLeft,
		preventDefault: !0
	},
	{
		key: `ArrowRight`,
		run: cursorCharRight,
		shift: selectCharRight,
		preventDefault: !0
	},
	{
		key: `Mod-ArrowRight`,
		mac: `Alt-ArrowRight`,
		run: cursorGroupRight,
		shift: selectGroupRight,
		preventDefault: !0
	},
	{
		mac: `Cmd-ArrowRight`,
		run: cursorLineBoundaryRight,
		shift: selectLineBoundaryRight,
		preventDefault: !0
	},
	{
		key: `ArrowUp`,
		run: cursorLineUp,
		shift: selectLineUp,
		preventDefault: !0
	},
	{
		mac: `Cmd-ArrowUp`,
		run: cursorDocStart,
		shift: selectDocStart
	},
	{
		mac: `Ctrl-ArrowUp`,
		run: cursorPageUp,
		shift: selectPageUp
	},
	{
		key: `ArrowDown`,
		run: cursorLineDown,
		shift: selectLineDown,
		preventDefault: !0
	},
	{
		mac: `Cmd-ArrowDown`,
		run: cursorDocEnd,
		shift: selectDocEnd
	},
	{
		mac: `Ctrl-ArrowDown`,
		run: cursorPageDown,
		shift: selectPageDown
	},
	{
		key: `PageUp`,
		run: cursorPageUp,
		shift: selectPageUp
	},
	{
		key: `PageDown`,
		run: cursorPageDown,
		shift: selectPageDown
	},
	{
		key: `Home`,
		run: cursorLineBoundaryBackward,
		shift: selectLineBoundaryBackward,
		preventDefault: !0
	},
	{
		key: `Mod-Home`,
		run: cursorDocStart,
		shift: selectDocStart
	},
	{
		key: `End`,
		run: cursorLineBoundaryForward,
		shift: selectLineBoundaryForward,
		preventDefault: !0
	},
	{
		key: `Mod-End`,
		run: cursorDocEnd,
		shift: selectDocEnd
	},
	{
		key: `Enter`,
		run: Hf
	},
	{
		key: `Mod-a`,
		run: selectAll
	},
	{
		key: `Backspace`,
		run: deleteCharBackward,
		shift: deleteCharBackward
	},
	{
		key: `Delete`,
		run: deleteCharForward
	},
	{
		key: `Mod-Backspace`,
		mac: `Alt-Backspace`,
		run: deleteGroupBackward
	},
	{
		key: `Mod-Delete`,
		mac: `Alt-Delete`,
		run: deleteGroupForward
	},
	{
		mac: `Mod-Backspace`,
		run: deleteLineBoundaryBackward
	},
	{
		mac: `Mod-Delete`,
		run: deleteLineBoundaryForward
	}
].concat(Wf.map((_) => ({
	mac: _.key,
	run: _.run,
	shift: _.shift
}))), Kf = [
	{
		key: `Alt-ArrowLeft`,
		mac: `Ctrl-ArrowLeft`,
		run: cursorSyntaxLeft,
		shift: selectSyntaxLeft
	},
	{
		key: `Alt-ArrowRight`,
		mac: `Ctrl-ArrowRight`,
		run: cursorSyntaxRight,
		shift: selectSyntaxRight
	},
	{
		key: `Alt-ArrowUp`,
		run: moveLineUp
	},
	{
		key: `Shift-Alt-ArrowUp`,
		run: copyLineUp
	},
	{
		key: `Alt-ArrowDown`,
		run: moveLineDown
	},
	{
		key: `Shift-Alt-ArrowDown`,
		run: copyLineDown
	},
	{
		key: `Escape`,
		run: simplifySelection
	},
	{
		key: `Mod-Enter`,
		run: Uf
	},
	{
		key: `Alt-l`,
		mac: `Ctrl-l`,
		run: selectLine
	},
	{
		key: `Mod-i`,
		run: selectParentSyntax,
		preventDefault: !0
	},
	{
		key: `Mod-[`,
		run: indentLess
	},
	{
		key: `Mod-]`,
		run: indentMore
	},
	{
		key: `Mod-Alt-\\`,
		run: indentSelection
	},
	{
		key: `Shift-Mod-k`,
		run: deleteLine
	},
	{
		key: `Shift-Mod-\\`,
		run: cursorMatchingBracket
	},
	{
		key: `Mod-/`,
		run: toggleComment
	},
	{
		key: `Alt-A`,
		run: wf
	}
].concat(Gf), qf = {
	key: `Tab`,
	run: indentMore,
	shift: indentLess
}, Jf = class Stack {
	constructor(_, y, b, x, S, C, w, E, D, O = 0, k) {
		this.p = _, this.stack = y, this.state = b, this.reducePos = x, this.pos = S, this.score = C, this.buffer = w, this.bufferBase = E, this.curContext = D, this.lookAhead = O, this.parent = k;
	}
	toString() {
		return `[${this.stack.filter((_, y) => y % 3 == 0).concat(this.state)}]@${this.pos}${this.score ? `!` + this.score : ``}`;
	}
	static start(_, y, b = 0) {
		let x = _.parser.context;
		return new Stack(_, [], y, b, b, 0, [], 0, x ? new StackContext(x, x.start) : null, 0, null);
	}
	get context() {
		return this.curContext ? this.curContext.context : null;
	}
	pushState(_, y) {
		this.stack.push(this.state, y, this.bufferBase + this.buffer.length), this.state = _;
	}
	reduce(_) {
		let y = _ >> 19, b = _ & 65535, { parser: x } = this.p, S = x.dynamicPrecedence(b);
		if (S && (this.score += S), y == 0) {
			this.pushState(x.getGoto(this.state, b, !0), this.reducePos), b < x.minRepeatTerm && this.storeNode(b, this.reducePos, this.reducePos, 4, !0), this.reduceContext(b, this.reducePos);
			return;
		}
		let C = this.stack.length - (y - 1) * 3 - (_ & 262144 ? 6 : 0), w = C ? this.stack[C - 2] : this.p.ranges[0].from, E = this.reducePos - w;
		E >= 2e3 && !this.p.parser.nodeSet.types[b]?.isAnonymous && (w == this.p.lastBigReductionStart ? (this.p.bigReductionCount++, this.p.lastBigReductionSize = E) : this.p.lastBigReductionSize < E && (this.p.bigReductionCount = 1, this.p.lastBigReductionStart = w, this.p.lastBigReductionSize = E));
		let D = C ? this.stack[C - 1] : 0, O = this.bufferBase + this.buffer.length - D;
		if (b < x.minRepeatTerm || _ & 131072) {
			let _ = x.stateFlag(this.state, 1) ? this.pos : this.reducePos;
			this.storeNode(b, w, _, O + 4, !0);
		}
		if (_ & 262144) this.state = this.stack[C];
		else {
			let _ = this.stack[C - 3];
			this.state = x.getGoto(_, b, !0);
		}
		for (; this.stack.length > C;) this.stack.pop();
		this.reduceContext(b, w);
	}
	storeNode(_, y, b, x = 4, S = !1) {
		if (_ == 0 && (!this.stack.length || this.stack[this.stack.length - 1] < this.buffer.length + this.bufferBase)) {
			let _ = this, x = this.buffer.length;
			if (x == 0 && _.parent && (x = _.bufferBase - _.parent.bufferBase, _ = _.parent), x > 0 && _.buffer[x - 4] == 0 && _.buffer[x - 1] > -1) {
				if (y == b) return;
				if (_.buffer[x - 2] >= y) {
					_.buffer[x - 2] = b;
					return;
				}
			}
		}
		if (!S || this.pos == b) this.buffer.push(_, y, b, x);
		else {
			let S = this.buffer.length;
			if (S > 0 && this.buffer[S - 4] != 0) for (; S > 0 && this.buffer[S - 2] > b;) this.buffer[S] = this.buffer[S - 4], this.buffer[S + 1] = this.buffer[S - 3], this.buffer[S + 2] = this.buffer[S - 2], this.buffer[S + 3] = this.buffer[S - 1], S -= 4, x > 4 && (x -= 4);
			this.buffer[S] = _, this.buffer[S + 1] = y, this.buffer[S + 2] = b, this.buffer[S + 3] = x;
		}
	}
	shift(_, y, b, x) {
		if (_ & 131072) this.pushState(_ & 65535, this.pos);
		else if (_ & 262144) this.pos = x, this.shiftContext(y, b), y <= this.p.parser.maxNode && this.buffer.push(y, b, x, 4);
		else {
			let S = _, { parser: C } = this.p;
			(x > this.pos || y <= C.maxNode) && (this.pos = x, C.stateFlag(S, 1) || (this.reducePos = x)), this.pushState(S, b), this.shiftContext(y, b), y <= C.maxNode && this.buffer.push(y, b, x, 4);
		}
	}
	apply(_, y, b, x) {
		_ & 65536 ? this.reduce(_) : this.shift(_, y, b, x);
	}
	useNode(_, y) {
		let b = this.p.reused.length - 1;
		(b < 0 || this.p.reused[b] != _) && (this.p.reused.push(_), b++);
		let x = this.pos;
		this.reducePos = this.pos = x + _.length, this.pushState(y, x), this.buffer.push(b, x, this.reducePos, -1), this.curContext && this.updateContext(this.curContext.tracker.reuse(this.curContext.context, _, this, this.p.stream.reset(this.pos - _.length)));
	}
	split() {
		let _ = this, y = _.buffer.length;
		for (; y > 0 && _.buffer[y - 2] > _.reducePos;) y -= 4;
		let b = _.buffer.slice(y), x = _.bufferBase + y;
		for (; _ && x == _.bufferBase;) _ = _.parent;
		return new Stack(this.p, this.stack.slice(), this.state, this.reducePos, this.pos, this.score, b, x, this.curContext, this.lookAhead, _);
	}
	recoverByDelete(_, y) {
		let b = _ <= this.p.parser.maxNode;
		b && this.storeNode(_, this.pos, y, 4), this.storeNode(0, this.pos, y, b ? 8 : 4), this.pos = this.reducePos = y, this.score -= 190;
	}
	canShift(_) {
		for (let y = new SimulatedStack(this);;) {
			let b = this.p.parser.stateSlot(y.state, 4) || this.p.parser.hasAction(y.state, _);
			if (b == 0) return !1;
			if (!(b & 65536)) return !0;
			y.reduce(b);
		}
	}
	recoverByInsert(_) {
		if (this.stack.length >= 300) return [];
		let y = this.p.parser.nextStates(this.state);
		if (y.length > 8 || this.stack.length >= 120) {
			let b = [];
			for (let x = 0, S; x < y.length; x += 2) (S = y[x + 1]) != this.state && this.p.parser.hasAction(S, _) && b.push(y[x], S);
			if (this.stack.length < 120) for (let _ = 0; b.length < 8 && _ < y.length; _ += 2) {
				let x = y[_ + 1];
				b.some((_, y) => y & 1 && _ == x) || b.push(y[_], x);
			}
			y = b;
		}
		let b = [];
		for (let _ = 0; _ < y.length && b.length < 4; _ += 2) {
			let x = y[_ + 1];
			if (x == this.state) continue;
			let S = this.split();
			S.pushState(x, this.pos), S.storeNode(0, S.pos, S.pos, 4, !0), S.shiftContext(y[_], this.pos), S.reducePos = this.pos, S.score -= 200, b.push(S);
		}
		return b;
	}
	forceReduce() {
		let { parser: _ } = this.p, y = _.stateSlot(this.state, 5);
		if (!(y & 65536)) return !1;
		if (!_.validAction(this.state, y)) {
			let b = y >> 19, x = y & 65535, S = this.stack.length - b * 3;
			if (S < 0 || _.getGoto(this.stack[S], x, !1) < 0) {
				let _ = this.findForcedReduction();
				if (_ == null) return !1;
				y = _;
			}
			this.storeNode(0, this.pos, this.pos, 4, !0), this.score -= 100;
		}
		return this.reducePos = this.pos, this.reduce(y), !0;
	}
	findForcedReduction() {
		let { parser: _ } = this.p, y = [], explore = (b, x) => {
			if (!y.includes(b)) return y.push(b), _.allActions(b, (y) => {
				if (!(y & 393216)) if (y & 65536) {
					let b = (y >> 19) - x;
					if (b > 1) {
						let x = y & 65535, S = this.stack.length - b * 3;
						if (S >= 0 && _.getGoto(this.stack[S], x, !1) >= 0) return b << 19 | 65536 | x;
					}
				} else {
					let _ = explore(y, x + 1);
					if (_ != null) return _;
				}
			});
		};
		return explore(this.state, 0);
	}
	forceAll() {
		for (; !this.p.parser.stateFlag(this.state, 2);) if (!this.forceReduce()) {
			this.storeNode(0, this.pos, this.pos, 4, !0);
			break;
		}
		return this;
	}
	get deadEnd() {
		if (this.stack.length != 3) return !1;
		let { parser: _ } = this.p;
		return _.data[_.stateSlot(this.state, 1)] == 65535 && !_.stateSlot(this.state, 4);
	}
	restart() {
		this.storeNode(0, this.pos, this.pos, 4, !0), this.state = this.stack[0], this.stack.length = 0;
	}
	sameState(_) {
		if (this.state != _.state || this.stack.length != _.stack.length) return !1;
		for (let y = 0; y < this.stack.length; y += 3) if (this.stack[y] != _.stack[y]) return !1;
		return !0;
	}
	get parser() {
		return this.p.parser;
	}
	dialectEnabled(_) {
		return this.p.parser.dialect.flags[_];
	}
	shiftContext(_, y) {
		this.curContext && this.updateContext(this.curContext.tracker.shift(this.curContext.context, _, this, this.p.stream.reset(y)));
	}
	reduceContext(_, y) {
		this.curContext && this.updateContext(this.curContext.tracker.reduce(this.curContext.context, _, this, this.p.stream.reset(y)));
	}
	emitContext() {
		let _ = this.buffer.length - 1;
		(_ < 0 || this.buffer[_] != -3) && this.buffer.push(this.curContext.hash, this.pos, this.pos, -3);
	}
	emitLookAhead() {
		let _ = this.buffer.length - 1;
		(_ < 0 || this.buffer[_] != -4) && this.buffer.push(this.lookAhead, this.pos, this.pos, -4);
	}
	updateContext(_) {
		if (_ != this.curContext.context) {
			let y = new StackContext(this.curContext.tracker, _);
			y.hash != this.curContext.hash && this.emitContext(), this.curContext = y;
		}
	}
	setLookAhead(_) {
		_ > this.lookAhead && (this.emitLookAhead(), this.lookAhead = _);
	}
	close() {
		this.curContext && this.curContext.tracker.strict && this.emitContext(), this.lookAhead > 0 && this.emitLookAhead();
	}
}, StackContext = class {
	constructor(_, y) {
		this.tracker = _, this.context = y, this.hash = _.strict ? _.hash(y) : 0;
	}
}, SimulatedStack = class {
	constructor(_) {
		this.start = _, this.state = _.state, this.stack = _.stack, this.base = this.stack.length;
	}
	reduce(_) {
		let y = _ & 65535, b = _ >> 19;
		b == 0 ? (this.stack == this.start.stack && (this.stack = this.stack.slice()), this.stack.push(this.state, 0, 0), this.base += 3) : this.base -= (b - 1) * 3;
		let x = this.start.p.parser.getGoto(this.stack[this.base - 3], y, !0);
		this.state = x;
	}
}, Yf = class StackBufferCursor {
	constructor(_, y, b) {
		this.stack = _, this.pos = y, this.index = b, this.buffer = _.buffer, this.index == 0 && this.maybeNext();
	}
	static create(_, y = _.bufferBase + _.buffer.length) {
		return new StackBufferCursor(_, y, y - _.bufferBase);
	}
	maybeNext() {
		let _ = this.stack.parent;
		_ != null && (this.index = this.stack.bufferBase - _.bufferBase, this.stack = _, this.buffer = _.buffer);
	}
	get id() {
		return this.buffer[this.index - 4];
	}
	get start() {
		return this.buffer[this.index - 3];
	}
	get end() {
		return this.buffer[this.index - 2];
	}
	get size() {
		return this.buffer[this.index - 1];
	}
	next() {
		this.index -= 4, this.pos -= 4, this.index == 0 && this.maybeNext();
	}
	fork() {
		return new StackBufferCursor(this.stack, this.pos, this.index);
	}
};
function decodeArray(_, y = Uint16Array) {
	if (typeof _ != `string`) return _;
	let b = null;
	for (let x = 0, S = 0; x < _.length;) {
		let C = 0;
		for (;;) {
			let y = _.charCodeAt(x++), b = !1;
			if (y == 126) {
				C = 65535;
				break;
			}
			y >= 92 && y--, y >= 34 && y--;
			let S = y - 32;
			if (S >= 46 && (S -= 46, b = !0), C += S, b) break;
			C *= 46;
		}
		b ? b[S++] = C : b = new y(C);
	}
	return b;
}
var CachedToken = class {
	constructor() {
		this.start = -1, this.value = -1, this.end = -1, this.extended = -1, this.lookAhead = 0, this.mask = 0, this.context = 0;
	}
}, Xf = new CachedToken(), InputStream = class {
	constructor(_, y) {
		this.input = _, this.ranges = y, this.chunk = ``, this.chunkOff = 0, this.chunk2 = ``, this.chunk2Pos = 0, this.next = -1, this.token = Xf, this.rangeIndex = 0, this.pos = this.chunkPos = y[0].from, this.range = y[0], this.end = y[y.length - 1].to, this.readNext();
	}
	resolveOffset(_, y) {
		let b = this.range, x = this.rangeIndex, S = this.pos + _;
		for (; S < b.from;) {
			if (!x) return null;
			let _ = this.ranges[--x];
			S -= b.from - _.to, b = _;
		}
		for (; y < 0 ? S > b.to : S >= b.to;) {
			if (x == this.ranges.length - 1) return null;
			let _ = this.ranges[++x];
			S += _.from - b.to, b = _;
		}
		return S;
	}
	clipPos(_) {
		if (_ >= this.range.from && _ < this.range.to) return _;
		for (let y of this.ranges) if (y.to > _) return Math.max(_, y.from);
		return this.end;
	}
	peek(_) {
		let y = this.chunkOff + _, b, x;
		if (y >= 0 && y < this.chunk.length) b = this.pos + _, x = this.chunk.charCodeAt(y);
		else {
			let y = this.resolveOffset(_, 1);
			if (y == null) return -1;
			if (b = y, b >= this.chunk2Pos && b < this.chunk2Pos + this.chunk2.length) x = this.chunk2.charCodeAt(b - this.chunk2Pos);
			else {
				let _ = this.rangeIndex, y = this.range;
				for (; y.to <= b;) y = this.ranges[++_];
				this.chunk2 = this.input.chunk(this.chunk2Pos = b), b + this.chunk2.length > y.to && (this.chunk2 = this.chunk2.slice(0, y.to - b)), x = this.chunk2.charCodeAt(0);
			}
		}
		return b >= this.token.lookAhead && (this.token.lookAhead = b + 1), x;
	}
	acceptToken(_, y = 0) {
		let b = y ? this.resolveOffset(y, -1) : this.pos;
		if (b == null || b < this.token.start) throw RangeError(`Token end out of bounds`);
		this.token.value = _, this.token.end = b;
	}
	acceptTokenTo(_, y) {
		this.token.value = _, this.token.end = y;
	}
	getChunk() {
		if (this.pos >= this.chunk2Pos && this.pos < this.chunk2Pos + this.chunk2.length) {
			let { chunk: _, chunkPos: y } = this;
			this.chunk = this.chunk2, this.chunkPos = this.chunk2Pos, this.chunk2 = _, this.chunk2Pos = y, this.chunkOff = this.pos - this.chunkPos;
		} else {
			this.chunk2 = this.chunk, this.chunk2Pos = this.chunkPos;
			let _ = this.input.chunk(this.pos), y = this.pos + _.length;
			this.chunk = y > this.range.to ? _.slice(0, this.range.to - this.pos) : _, this.chunkPos = this.pos, this.chunkOff = 0;
		}
	}
	readNext() {
		return this.chunkOff >= this.chunk.length && (this.getChunk(), this.chunkOff == this.chunk.length) ? this.next = -1 : this.next = this.chunk.charCodeAt(this.chunkOff);
	}
	advance(_ = 1) {
		for (this.chunkOff += _; this.pos + _ >= this.range.to;) {
			if (this.rangeIndex == this.ranges.length - 1) return this.setDone();
			_ -= this.range.to - this.pos, this.range = this.ranges[++this.rangeIndex], this.pos = this.range.from;
		}
		return this.pos += _, this.pos >= this.token.lookAhead && (this.token.lookAhead = this.pos + 1), this.readNext();
	}
	setDone() {
		return this.pos = this.chunkPos = this.end, this.range = this.ranges[this.rangeIndex = this.ranges.length - 1], this.chunk = ``, this.next = -1;
	}
	reset(_, y) {
		if (y ? (this.token = y, y.start = _, y.lookAhead = _ + 1, y.value = y.extended = -1) : this.token = Xf, this.pos != _) {
			if (this.pos = _, _ == this.end) return this.setDone(), this;
			for (; _ < this.range.from;) this.range = this.ranges[--this.rangeIndex];
			for (; _ >= this.range.to;) this.range = this.ranges[++this.rangeIndex];
			_ >= this.chunkPos && _ < this.chunkPos + this.chunk.length ? this.chunkOff = _ - this.chunkPos : (this.chunk = ``, this.chunkOff = 0), this.readNext();
		}
		return this;
	}
	read(_, y) {
		if (_ >= this.chunkPos && y <= this.chunkPos + this.chunk.length) return this.chunk.slice(_ - this.chunkPos, y - this.chunkPos);
		if (_ >= this.chunk2Pos && y <= this.chunk2Pos + this.chunk2.length) return this.chunk2.slice(_ - this.chunk2Pos, y - this.chunk2Pos);
		if (_ >= this.range.from && y <= this.range.to) return this.input.read(_, y);
		let b = ``;
		for (let x of this.ranges) {
			if (x.from >= y) break;
			x.to > _ && (b += this.input.read(Math.max(x.from, _), Math.min(x.to, y)));
		}
		return b;
	}
}, TokenGroup = class {
	constructor(_, y) {
		this.data = _, this.id = y;
	}
	token(_, y) {
		let { parser: b } = y.p;
		readToken(this.data, _, y, this.id, b.data, b.tokenPrecTable);
	}
};
TokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = !1;
var LocalTokenGroup = class {
	constructor(_, y, b) {
		this.precTable = y, this.elseToken = b, this.data = typeof _ == `string` ? decodeArray(_) : _;
	}
	token(_, y) {
		let b = _.pos, x = 0;
		for (;;) {
			let b = _.next < 0, S = _.resolveOffset(1, 1);
			if (readToken(this.data, _, y, 0, this.data, this.precTable), _.token.value > -1) break;
			if (this.elseToken == null) return;
			if (b || x++, S == null) break;
			_.reset(S, _.token);
		}
		x && (_.reset(b, _.token), _.acceptToken(this.elseToken, x));
	}
};
LocalTokenGroup.prototype.contextual = TokenGroup.prototype.fallback = TokenGroup.prototype.extend = !1;
function readToken(_, y, b, x, S, C) {
	let w = 0, E = 1 << x, { dialect: D } = b.p.parser;
	scan: for (; (E & _[w]) != 0;) {
		let b = _[w + 1];
		for (let x = w + 3; x < b; x += 2) if ((_[x + 1] & E) > 0) {
			let b = _[x];
			if (D.allows(b) && (y.token.value == -1 || y.token.value == b || overrides(b, y.token.value, S, C))) {
				y.acceptToken(b);
				break;
			}
		}
		let x = y.next, O = 0, k = _[w + 2];
		if (y.next < 0 && k > O && _[b + k * 3 - 3] == 65535) {
			w = _[b + k * 3 - 1];
			continue scan;
		}
		for (; O < k;) {
			let S = O + k >> 1, C = b + S + (S << 1), E = _[C], D = _[C + 1] || 65536;
			if (x < E) k = S;
			else if (x >= D) O = S + 1;
			else {
				w = _[C + 2], y.advance();
				continue scan;
			}
		}
		break;
	}
}
function findOffset(_, y, b) {
	for (let x = y, S; (S = _[x]) != 65535; x++) if (S == b) return x - y;
	return -1;
}
function overrides(_, y, b, x) {
	let S = findOffset(b, x, y);
	return S < 0 || findOffset(b, x, _) < S;
}
var Zf = typeof process < `u` && process.env && /\bparse\b/.test(process.env.LOG), Qf = null;
function cutAt(_, y, b) {
	let x = _.cursor(Ou.IncludeAnonymous);
	for (x.moveTo(y);;) if (!(b < 0 ? x.childBefore(y) : x.childAfter(y))) for (;;) {
		if ((b < 0 ? x.to < y : x.from > y) && !x.type.isError) return b < 0 ? Math.max(0, Math.min(x.to - 1, y - 25)) : Math.min(_.length, Math.max(x.from + 1, y + 25));
		if (b < 0 ? x.prevSibling() : x.nextSibling()) break;
		if (!x.parent()) return b < 0 ? 0 : _.length;
	}
}
var FragmentCursor = class {
	constructor(_, y) {
		this.fragments = _, this.nodeSet = y, this.i = 0, this.fragment = null, this.safeFrom = -1, this.safeTo = -1, this.trees = [], this.start = [], this.index = [], this.nextFragment();
	}
	nextFragment() {
		let _ = this.fragment = this.i == this.fragments.length ? null : this.fragments[this.i++];
		if (_) {
			for (this.safeFrom = _.openStart ? cutAt(_.tree, _.from + _.offset, 1) - _.offset : _.from, this.safeTo = _.openEnd ? cutAt(_.tree, _.to + _.offset, -1) - _.offset : _.to; this.trees.length;) this.trees.pop(), this.start.pop(), this.index.pop();
			this.trees.push(_.tree), this.start.push(-_.offset), this.index.push(0), this.nextStart = this.safeFrom;
		} else this.nextStart = 1e9;
	}
	nodeAt(_) {
		if (_ < this.nextStart) return null;
		for (; this.fragment && this.safeTo <= _;) this.nextFragment();
		if (!this.fragment) return null;
		for (;;) {
			let y = this.trees.length - 1;
			if (y < 0) return this.nextFragment(), null;
			let b = this.trees[y], x = this.index[y];
			if (x == b.children.length) {
				this.trees.pop(), this.start.pop(), this.index.pop();
				continue;
			}
			let S = b.children[x], C = this.start[y] + b.positions[x];
			if (C > _) return this.nextStart = C, null;
			if (S instanceof ku) {
				if (C == _) {
					if (C < this.safeFrom) return null;
					let _ = C + S.length;
					if (_ <= this.safeTo) {
						let y = S.prop(NodeProp.lookAhead);
						if (!y || _ + y < this.fragment.to) return S;
					}
				}
				this.index[y]++, C + S.length >= Math.max(this.safeFrom, _) && (this.trees.push(S), this.start.push(C), this.index.push(0));
			} else this.index[y]++, this.nextStart = C + S.length;
		}
	}
}, TokenCache = class {
	constructor(_, y) {
		this.stream = y, this.tokens = [], this.mainToken = null, this.actions = [], this.tokens = _.tokenizers.map((_) => new CachedToken());
	}
	getActions(_) {
		let y = 0, b = null, { parser: x } = _.p, { tokenizers: S } = x, C = x.stateSlot(_.state, 3), w = _.curContext ? _.curContext.hash : 0, E = 0;
		for (let x = 0; x < S.length; x++) {
			if (!(1 << x & C)) continue;
			let D = S[x], O = this.tokens[x];
			if (!(b && !D.fallback) && ((D.contextual || O.start != _.pos || O.mask != C || O.context != w) && (this.updateCachedToken(O, D, _), O.mask = C, O.context = w), O.lookAhead > O.end + 25 && (E = Math.max(O.lookAhead, E)), O.value != 0)) {
				let x = y;
				if (O.extended > -1 && (y = this.addActions(_, O.extended, O.end, y)), y = this.addActions(_, O.value, O.end, y), !D.extend && (b = O, y > x)) break;
			}
		}
		for (; this.actions.length > y;) this.actions.pop();
		return E && _.setLookAhead(E), !b && _.pos == this.stream.end && (b = new CachedToken(), b.value = _.p.parser.eofTerm, b.start = b.end = _.pos, y = this.addActions(_, b.value, b.end, y)), this.mainToken = b, this.actions;
	}
	getMainToken(_) {
		if (this.mainToken) return this.mainToken;
		let y = new CachedToken(), { pos: b, p: x } = _;
		return y.start = b, y.end = Math.min(b + 1, x.stream.end), y.value = b == x.stream.end ? x.parser.eofTerm : 0, y;
	}
	updateCachedToken(_, y, b) {
		let x = this.stream.clipPos(b.pos);
		if (y.token(this.stream.reset(x, _), b), _.value > -1) {
			let { parser: y } = b.p;
			for (let x = 0; x < y.specialized.length; x++) if (y.specialized[x] == _.value) {
				let S = y.specializers[x](this.stream.read(_.start, _.end), b);
				if (S >= 0 && b.p.parser.dialect.allows(S >> 1)) {
					S & 1 ? _.extended = S >> 1 : _.value = S >> 1;
					break;
				}
			}
		} else _.value = 0, _.end = this.stream.clipPos(x + 1);
	}
	putAction(_, y, b, x) {
		for (let y = 0; y < x; y += 3) if (this.actions[y] == _) return x;
		return this.actions[x++] = _, this.actions[x++] = y, this.actions[x++] = b, x;
	}
	addActions(_, y, b, x) {
		let { state: S } = _, { parser: C } = _.p, { data: w } = C;
		for (let _ = 0; _ < 2; _++) for (let E = C.stateSlot(S, _ ? 2 : 1);; E += 3) {
			if (w[E] == 65535) if (w[E + 1] == 1) E = pair(w, E + 2);
			else {
				x == 0 && w[E + 1] == 2 && (x = this.putAction(pair(w, E + 2), y, b, x));
				break;
			}
			w[E] == y && (x = this.putAction(pair(w, E + 1), y, b, x));
		}
		return x;
	}
}, Parse = class {
	constructor(_, y, b, x) {
		this.parser = _, this.input = y, this.ranges = x, this.recovering = 0, this.nextStackID = 9812, this.minStackPos = 0, this.reused = [], this.stoppedAt = null, this.lastBigReductionStart = -1, this.lastBigReductionSize = 0, this.bigReductionCount = 0, this.stream = new InputStream(y, x), this.tokens = new TokenCache(_, this.stream), this.topTerm = _.top[1];
		let { from: S } = x[0];
		this.stacks = [Jf.start(this, _.top[0], S)], this.fragments = b.length && this.stream.end - S > _.bufferLength * 4 ? new FragmentCursor(b, _.nodeSet) : null;
	}
	get parsedPos() {
		return this.minStackPos;
	}
	advance() {
		let _ = this.stacks, y = this.minStackPos, b = this.stacks = [], x, S;
		if (this.bigReductionCount > 300 && _.length == 1) {
			let [y] = _;
			for (; y.forceReduce() && y.stack.length && y.stack[y.stack.length - 2] >= this.lastBigReductionStart;);
			this.bigReductionCount = this.lastBigReductionSize = 0;
		}
		for (let C = 0; C < _.length; C++) {
			let w = _[C];
			for (;;) {
				if (this.tokens.mainToken = null, w.pos > y) b.push(w);
				else if (this.advanceStack(w, b, _)) continue;
				else {
					x || (x = [], S = []), x.push(w);
					let _ = this.tokens.getMainToken(w);
					S.push(_.value, _.end);
				}
				break;
			}
		}
		if (!b.length) {
			let _ = x && findFinished(x);
			if (_) return Zf && console.log(`Finish with ` + this.stackID(_)), this.stackToTree(_);
			if (this.parser.strict) throw Zf && x && console.log(`Stuck with token ` + (this.tokens.mainToken ? this.parser.getName(this.tokens.mainToken.value) : `none`)), SyntaxError(`No parse at ` + y);
			this.recovering ||= 5;
		}
		if (this.recovering && x) {
			let _ = this.stoppedAt != null && x[0].pos > this.stoppedAt ? x[0] : this.runRecovery(x, S, b);
			if (_) return Zf && console.log(`Force-finish ` + this.stackID(_)), this.stackToTree(_.forceAll());
		}
		if (this.recovering) {
			let _ = this.recovering == 1 ? 1 : this.recovering * 3;
			if (b.length > _) for (b.sort((_, y) => y.score - _.score); b.length > _;) b.pop();
			b.some((_) => _.reducePos > y) && this.recovering--;
		} else if (b.length > 1) {
			outer: for (let _ = 0; _ < b.length - 1; _++) {
				let y = b[_];
				for (let x = _ + 1; x < b.length; x++) {
					let S = b[x];
					if (y.sameState(S) || y.buffer.length > 500 && S.buffer.length > 500) if ((y.score - S.score || y.buffer.length - S.buffer.length) > 0) b.splice(x--, 1);
					else {
						b.splice(_--, 1);
						continue outer;
					}
				}
			}
			b.length > 12 && b.splice(12, b.length - 12);
		}
		this.minStackPos = b[0].pos;
		for (let _ = 1; _ < b.length; _++) b[_].pos < this.minStackPos && (this.minStackPos = b[_].pos);
		return null;
	}
	stopAt(_) {
		if (this.stoppedAt != null && this.stoppedAt < _) throw RangeError(`Can't move stoppedAt forward`);
		this.stoppedAt = _;
	}
	advanceStack(_, y, b) {
		let x = _.pos, { parser: S } = this, C = Zf ? this.stackID(_) + ` -> ` : ``;
		if (this.stoppedAt != null && x > this.stoppedAt) return _.forceReduce() ? _ : null;
		if (this.fragments) {
			let y = _.curContext && _.curContext.tracker.strict, b = y ? _.curContext.hash : 0;
			for (let w = this.fragments.nodeAt(x); w;) {
				let x = this.parser.nodeSet.types[w.type.id] == w.type ? S.getGoto(_.state, w.type.id) : -1;
				if (x > -1 && w.length && (!y || (w.prop(NodeProp.contextHash) || 0) == b)) return _.useNode(w, x), Zf && console.log(C + this.stackID(_) + ` (via reuse of ${S.getName(w.type.id)})`), !0;
				if (!(w instanceof ku) || w.children.length == 0 || w.positions[0] > 0) break;
				let E = w.children[0];
				if (E instanceof ku && w.positions[0] == 0) w = E;
				else break;
			}
		}
		let w = S.stateSlot(_.state, 4);
		if (w > 0) return _.reduce(w), Zf && console.log(C + this.stackID(_) + ` (via always-reduce ${S.getName(w & 65535)})`), !0;
		if (_.stack.length >= 8400) for (; _.stack.length > 6e3 && _.forceReduce(););
		let E = this.tokens.getActions(_);
		for (let w = 0; w < E.length;) {
			let D = E[w++], O = E[w++], k = E[w++], A = w == E.length || !b, j = A ? _ : _.split(), N = this.tokens.mainToken;
			if (j.apply(D, O, N ? N.start : j.pos, k), Zf && console.log(C + this.stackID(j) + ` (via ${D & 65536 ? `reduce of ${S.getName(D & 65535)}` : `shift`} for ${S.getName(O)} @ ${x}${j == _ ? `` : `, split`})`), A) return !0;
			j.pos > x ? y.push(j) : b.push(j);
		}
		return !1;
	}
	advanceFully(_, y) {
		let b = _.pos;
		for (;;) {
			if (!this.advanceStack(_, null, null)) return !1;
			if (_.pos > b) return pushStackDedup(_, y), !0;
		}
	}
	runRecovery(_, y, b) {
		let x = null, S = !1;
		for (let C = 0; C < _.length; C++) {
			let w = _[C], E = y[C << 1], D = y[(C << 1) + 1], O = Zf ? this.stackID(w) + ` -> ` : ``;
			if (w.deadEnd && (S || (S = !0, w.restart(), Zf && console.log(O + this.stackID(w) + ` (restarted)`), this.advanceFully(w, b)))) continue;
			let k = w.split(), A = O;
			for (let _ = 0; k.forceReduce() && _ < 10 && (Zf && console.log(A + this.stackID(k) + ` (via force-reduce)`), !this.advanceFully(k, b)); _++) Zf && (A = this.stackID(k) + ` -> `);
			for (let _ of w.recoverByInsert(E)) Zf && console.log(O + this.stackID(_) + ` (via recover-insert)`), this.advanceFully(_, b);
			this.stream.end > w.pos ? (D == w.pos && (D++, E = 0), w.recoverByDelete(E, D), Zf && console.log(O + this.stackID(w) + ` (via recover-delete ${this.parser.getName(E)})`), pushStackDedup(w, b)) : (!x || x.score < w.score) && (x = w);
		}
		return x;
	}
	stackToTree(_) {
		return _.close(), ku.build({
			buffer: Yf.create(_),
			nodeSet: this.parser.nodeSet,
			topID: this.topTerm,
			maxBufferLength: this.parser.bufferLength,
			reused: this.reused,
			start: this.ranges[0].from,
			length: _.pos - this.ranges[0].from,
			minRepeatType: this.parser.minRepeatTerm
		});
	}
	stackID(_) {
		let y = (Qf ||= /* @__PURE__ */ new WeakMap()).get(_);
		return y || Qf.set(_, y = String.fromCodePoint(this.nextStackID++)), y + _;
	}
};
function pushStackDedup(_, y) {
	for (let b = 0; b < y.length; b++) {
		let x = y[b];
		if (x.pos == _.pos && x.sameState(_)) {
			y[b].score < _.score && (y[b] = _);
			return;
		}
	}
	y.push(_);
}
var Dialect = class {
	constructor(_, y, b) {
		this.source = _, this.flags = y, this.disabled = b;
	}
	allows(_) {
		return !this.disabled || this.disabled[_] == 0;
	}
}, $f = class LRParser extends Parser {
	constructor(_) {
		if (super(), this.wrappers = [], _.version != 14) throw RangeError(`Parser version (${_.version}) doesn't match runtime version (14)`);
		let y = _.nodeNames.split(` `);
		this.minRepeatTerm = y.length;
		for (let b = 0; b < _.repeatNodeCount; b++) y.push(``);
		let b = Object.keys(_.topRules).map((y) => _.topRules[y][1]), x = [];
		for (let _ = 0; _ < y.length; _++) x.push([]);
		function setProp(_, y, b) {
			x[_].push([y, y.deserialize(String(b))]);
		}
		if (_.nodeProps) for (let y of _.nodeProps) {
			let _ = y[0];
			typeof _ == `string` && (_ = NodeProp[_]);
			for (let b = 1; b < y.length;) {
				let x = y[b++];
				if (x >= 0) setProp(x, _, y[b++]);
				else {
					let S = y[b + -x];
					for (let C = -x; C > 0; C--) setProp(y[b++], _, S);
					b++;
				}
			}
		}
		this.nodeSet = new Tu(y.map((y, S) => wu.define({
			name: S >= this.minRepeatTerm ? void 0 : y,
			id: S,
			props: x[S],
			top: b.indexOf(S) > -1,
			error: S == 0,
			skipped: _.skippedNodes && _.skippedNodes.indexOf(S) > -1
		}))), _.propSources && (this.nodeSet = this.nodeSet.extend(..._.propSources)), this.strict = !1, this.bufferLength = xu;
		let S = decodeArray(_.tokenData);
		this.context = _.context, this.specializerSpecs = _.specialized || [], this.specialized = new Uint16Array(this.specializerSpecs.length);
		for (let _ = 0; _ < this.specializerSpecs.length; _++) this.specialized[_] = this.specializerSpecs[_].term;
		this.specializers = this.specializerSpecs.map(getSpecializer), this.states = decodeArray(_.states, Uint32Array), this.data = decodeArray(_.stateData), this.goto = decodeArray(_.goto), this.maxTerm = _.maxTerm, this.tokenizers = _.tokenizers.map((_) => typeof _ == `number` ? new TokenGroup(S, _) : _), this.topRules = _.topRules, this.dialects = _.dialects || {}, this.dynamicPrecedences = _.dynamicPrecedences || null, this.tokenPrecTable = _.tokenPrec, this.termNames = _.termNames || null, this.maxNode = this.nodeSet.types.length - 1, this.dialect = this.parseDialect(), this.top = this.topRules[Object.keys(this.topRules)[0]];
	}
	createParse(_, y, b) {
		let x = new Parse(this, _, y, b);
		for (let S of this.wrappers) x = S(x, _, y, b);
		return x;
	}
	getGoto(_, y, b = !1) {
		let x = this.goto;
		if (y >= x[0]) return -1;
		for (let S = x[y + 1];;) {
			let y = x[S++], C = y & 1, w = x[S++];
			if (C && b) return w;
			for (let b = S + (y >> 1); S < b; S++) if (x[S] == _) return w;
			if (C) return -1;
		}
	}
	hasAction(_, y) {
		let b = this.data;
		for (let x = 0; x < 2; x++) for (let S = this.stateSlot(_, x ? 2 : 1), C;; S += 3) {
			if ((C = b[S]) == 65535) if (b[S + 1] == 1) C = b[S = pair(b, S + 2)];
			else if (b[S + 1] == 2) return pair(b, S + 2);
			else break;
			if (C == y || C == 0) return pair(b, S + 1);
		}
		return 0;
	}
	stateSlot(_, y) {
		return this.states[_ * 6 + y];
	}
	stateFlag(_, y) {
		return (this.stateSlot(_, 0) & y) > 0;
	}
	validAction(_, y) {
		return !!this.allActions(_, (_) => _ == y || null);
	}
	allActions(_, y) {
		let b = this.stateSlot(_, 4), x = b ? y(b) : void 0;
		for (let b = this.stateSlot(_, 1); x == null; b += 3) {
			if (this.data[b] == 65535) if (this.data[b + 1] == 1) b = pair(this.data, b + 2);
			else break;
			x = y(pair(this.data, b + 1));
		}
		return x;
	}
	nextStates(_) {
		let y = [];
		for (let b = this.stateSlot(_, 1);; b += 3) {
			if (this.data[b] == 65535) if (this.data[b + 1] == 1) b = pair(this.data, b + 2);
			else break;
			if (!(this.data[b + 2] & 1)) {
				let _ = this.data[b + 1];
				y.some((y, b) => b & 1 && y == _) || y.push(this.data[b], _);
			}
		}
		return y;
	}
	configure(_) {
		let y = Object.assign(Object.create(LRParser.prototype), this);
		if (_.props && (y.nodeSet = this.nodeSet.extend(..._.props)), _.top) {
			let b = this.topRules[_.top];
			if (!b) throw RangeError(`Invalid top rule name ${_.top}`);
			y.top = b;
		}
		return _.tokenizers && (y.tokenizers = this.tokenizers.map((y) => {
			let b = _.tokenizers.find((_) => _.from == y);
			return b ? b.to : y;
		})), _.specializers && (y.specializers = this.specializers.slice(), y.specializerSpecs = this.specializerSpecs.map((b, x) => {
			let S = _.specializers.find((_) => _.from == b.external);
			if (!S) return b;
			let C = Object.assign(Object.assign({}, b), { external: S.to });
			return y.specializers[x] = getSpecializer(C), C;
		})), _.contextTracker && (y.context = _.contextTracker), _.dialect && (y.dialect = this.parseDialect(_.dialect)), _.strict != null && (y.strict = _.strict), _.wrap && (y.wrappers = y.wrappers.concat(_.wrap)), _.bufferLength != null && (y.bufferLength = _.bufferLength), y;
	}
	hasWrappers() {
		return this.wrappers.length > 0;
	}
	getName(_) {
		return this.termNames ? this.termNames[_] : String(_ <= this.maxNode && this.nodeSet.types[_].name || _);
	}
	get eofTerm() {
		return this.maxNode + 1;
	}
	get topNode() {
		return this.nodeSet.types[this.top[1]];
	}
	dynamicPrecedence(_) {
		let y = this.dynamicPrecedences;
		return y == null ? 0 : y[_] || 0;
	}
	parseDialect(_) {
		let y = Object.keys(this.dialects), b = y.map(() => !1);
		if (_) for (let x of _.split(` `)) {
			let _ = y.indexOf(x);
			_ >= 0 && (b[_] = !0);
		}
		let x = null;
		for (let _ = 0; _ < y.length; _++) if (!b[_]) for (let b = this.dialects[y[_]], S; (S = this.data[b++]) != 65535;) (x ||= new Uint8Array(this.maxTerm + 1))[S] = 1;
		return new Dialect(_, b, x);
	}
	static deserialize(_) {
		return new LRParser(_);
	}
};
function pair(_, y) {
	return _[y] | _[y + 1] << 16;
}
function findFinished(_) {
	let y = null;
	for (let b of _) {
		let _ = b.p.stoppedAt;
		(b.pos == b.p.stream.end || _ != null && b.pos > _) && b.p.parser.stateFlag(b.state, 2) && (!y || y.score < b.score) && (y = b);
	}
	return y;
}
function getSpecializer(_) {
	if (_.external) {
		let y = +!!_.extend;
		return (b, x) => _.external(b, x) << 1 | y;
	}
	return _.get;
}
var ep = styleTags({
	String: $.string,
	Number: $.number,
	"True False": $.bool,
	PropertyName: $.propertyName,
	Null: $.null,
	",": $.separator,
	"[ ]": $.squareBracket,
	"{ }": $.brace
}), tp = $f.deserialize({
	version: 14,
	states: `$bOVQPOOOOQO'#Cb'#CbOnQPO'#CeOvQPO'#CjOOQO'#Cp'#CpQOQPOOOOQO'#Cg'#CgO}QPO'#CfO!SQPO'#CrOOQO,59P,59PO![QPO,59PO!aQPO'#CuOOQO,59U,59UO!iQPO,59UOVQPO,59QOqQPO'#CkO!nQPO,59^OOQO1G.k1G.kOVQPO'#ClO!vQPO,59aOOQO1G.p1G.pOOQO1G.l1G.lOOQO,59V,59VOOQO-E6i-E6iOOQO,59W,59WOOQO-E6j-E6j`,
	stateData: `#O~OcOS~OQSORSOSSOTSOWQO]ROePO~OVXOeUO~O[[O~PVOg^O~Oh_OVfX~OVaO~OhbO[iX~O[dO~Oh_OVfa~OhbO[ia~O`,
	goto: "!kjPPPPPPkPPkqwPPk{!RPPP!XP!ePP!hXSOR^bQWQRf_TVQ_Q`WRg`QcZRicQTOQZRQe^RhbRYQR]R",
	nodeNames: `⚠ JsonText True False Null Number String } { Object Property PropertyName ] [ Array`,
	maxTerm: 25,
	nodeProps: [
		[
			`isolate`,
			-2,
			6,
			11,
			``
		],
		[
			`openedBy`,
			7,
			`{`,
			12,
			`[`
		],
		[
			`closedBy`,
			8,
			`}`,
			13,
			`]`
		]
	],
	propSources: [ep],
	skippedNodes: [0],
	repeatNodeCount: 2,
	tokenData: "(|~RaXY!WYZ!W]^!Wpq!Wrs!]|}$u}!O$z!Q!R%T!R![&c![!]&t!}#O&y#P#Q'O#Y#Z'T#b#c'r#h#i(Z#o#p(r#q#r(w~!]Oc~~!`Wpq!]qr!]rs!xs#O!]#O#P!}#P;'S!];'S;=`$o<%lO!]~!}Oe~~#QXrs!]!P!Q!]#O#P!]#U#V!]#Y#Z!]#b#c!]#f#g!]#h#i!]#i#j#m~#pR!Q![#y!c!i#y#T#Z#y~#|R!Q![$V!c!i$V#T#Z$V~$YR!Q![$c!c!i$c#T#Z$c~$fR!Q![!]!c!i!]#T#Z!]~$rP;=`<%l!]~$zOh~~$}Q!Q!R%T!R![&c~%YRT~!O!P%c!g!h%w#X#Y%w~%fP!Q![%i~%nRT~!Q![%i!g!h%w#X#Y%w~%zR{|&T}!O&T!Q![&Z~&WP!Q![&Z~&`PT~!Q![&Z~&hST~!O!P%c!Q![&c!g!h%w#X#Y%w~&yOg~~'OO]~~'TO[~~'WP#T#U'Z~'^P#`#a'a~'dP#g#h'g~'jP#X#Y'm~'rOR~~'uP#i#j'x~'{P#`#a(O~(RP#`#a(U~(ZOS~~(^P#f#g(a~(dP#i#j(g~(jP#X#Y(m~(rOQ~~(wOW~~(|OV~",
	tokenizers: [0],
	topRules: { JsonText: [0, 1] },
	tokenPrec: 0
}), jsonParseLinter = () => (_) => {
	try {
		JSON.parse(_.state.doc.toString());
	} catch (y) {
		if (!(y instanceof SyntaxError)) throw y;
		let b = getErrorPosition(y, _.state.doc);
		return [{
			from: b,
			message: y.message,
			severity: `error`,
			to: b
		}];
	}
	return [];
};
function getErrorPosition(_, y) {
	let b;
	return (b = _.message.match(/at position (\d+)/)) ? Math.min(+b[1], y.length) : (b = _.message.match(/at line (\d+) column (\d+)/)) ? Math.min(y.line(+b[1]).from + +b[2] - 1, y.length) : 0;
}
var np = rd.define({
	name: `json`,
	parser: tp.configure({ props: [fd.add({
		Object: continuedIndent({ except: /^\s*\}/ }),
		Array: continuedIndent({ except: /^\s*\]/ })
	}), gd.add({ "Object Array": foldInside })] }),
	languageData: {
		closeBrackets: { brackets: [
			`[`,
			`{`,
			`"`
		] },
		indentOnInput: /^\s*[\}\]]$/
	}
});
function json() {
	return new LanguageSupport(np);
}
function crelt() {
	var _ = arguments[0];
	typeof _ == `string` && (_ = document.createElement(_));
	var y = 1, b = arguments[1];
	if (b && typeof b == `object` && b.nodeType == null && !Array.isArray(b)) {
		for (var x in b) if (Object.prototype.hasOwnProperty.call(b, x)) {
			var S = b[x];
			typeof S == `string` ? _.setAttribute(x, S) : S != null && (_[x] = S);
		}
		y++;
	}
	for (; y < arguments.length; y++) add(_, arguments[y]);
	return _;
}
function add(_, y) {
	if (typeof y == `string`) _.appendChild(document.createTextNode(y));
	else if (y != null) if (y.nodeType != null) _.appendChild(y);
	else if (Array.isArray(y)) for (var b = 0; b < y.length; b++) add(_, y[b]);
	else throw RangeError(`Unsupported child node: ` + y);
}
var SelectedDiagnostic = class {
	constructor(_, y, b) {
		this.from = _, this.to = y, this.diagnostic = b;
	}
}, rp = class LintState {
	constructor(_, y, b) {
		this.diagnostics = _, this.panel = y, this.selected = b;
	}
	static init(_, y, b) {
		let x = _, S = b.facet(dp).markerFilter;
		S && (x = S(x, b));
		let C = Decoration.set(x.map((_) => _.from == _.to || _.from == _.to - 1 && b.doc.lineAt(_.from).to == _.from ? Decoration.widget({
			widget: new DiagnosticWidget(_),
			diagnostic: _
		}).range(_.from) : Decoration.mark({
			attributes: { class: `cm-lintRange cm-lintRange-` + _.severity + (_.markClass ? ` ` + _.markClass : ``) },
			diagnostic: _,
			inclusive: !0
		}).range(_.from, _.to)), !0);
		return new LintState(C, y, findDiagnostic(C));
	}
};
function findDiagnostic(_, y = null, b = 0) {
	let x = null;
	return _.between(b, 1e9, (_, b, { spec: S }) => {
		if (!(y && S.diagnostic != y)) return x = new SelectedDiagnostic(_, b, S.diagnostic), !1;
	}), x;
}
function hideTooltip(_, y) {
	let b = _.startState.doc.lineAt(y.pos);
	return !!(_.effects.some((_) => _.is(ip)) || _.changes.touchesRange(b.from, b.to));
}
function maybeEnableLint(_, y) {
	return _.field(sp, !1) ? y : y.concat(ns.appendConfig.of(mp));
}
function setDiagnostics(_, y) {
	return { effects: maybeEnableLint(_, [ip.of(y)]) };
}
var ip = ns.define(), ap = ns.define(), op = ns.define(), sp = Wo.define({
	create() {
		return new rp(Decoration.none, null, null);
	},
	update(_, y) {
		if (y.docChanged) {
			let b = _.diagnostics.map(y.changes), x = null;
			if (_.selected) {
				let S = y.changes.mapPos(_.selected.from, 1);
				x = findDiagnostic(b, _.selected.diagnostic, S) || findDiagnostic(b, null, S);
			}
			_ = new rp(b, _.panel, x);
		}
		for (let b of y.effects) b.is(ip) ? _ = rp.init(b.value, _.panel, y.state) : b.is(ap) ? _ = new rp(_.diagnostics, b.value ? fp.open : null, _.selected) : b.is(op) && (_ = new rp(_.diagnostics, _.panel, b.value));
		return _;
	},
	provide: (_) => [uu.from(_, (_) => _.panel), Z.decorations.from(_, (_) => _.diagnostics)]
}), cp = Decoration.mark({
	class: `cm-lintRange cm-lintRange-active`,
	inclusive: !0
});
function lintTooltip(_, y, b) {
	let { diagnostics: x } = _.state.field(sp), S = [], C = 2e8, w = 0;
	x.between(y - +(b < 0), y + +(b > 0), (_, x, { spec: E }) => {
		y >= _ && y <= x && (_ == x || (y > _ || b > 0) && (y < x || b < 0)) && (S.push(E.diagnostic), C = Math.min(_, C), w = Math.max(x, w));
	});
	let E = _.state.facet(dp).tooltipFilter;
	return E && (S = E(S, _.state)), S.length ? {
		pos: C,
		end: w,
		above: _.state.doc.lineAt(C).to < w,
		create() {
			return { dom: diagnosticsTooltip(_, S) };
		}
	} : null;
}
function diagnosticsTooltip(_, y) {
	return crelt(`ul`, { class: `cm-tooltip-lint` }, y.map((y) => renderDiagnostic(_, y, !1)));
}
var openLintPanel = (_) => {
	let y = _.state.field(sp, !1);
	(!y || !y.panel) && _.dispatch({ effects: maybeEnableLint(_.state, [ap.of(!0)]) });
	let b = getPanel(_, fp.open);
	return b && b.dom.querySelector(`.cm-panel-lint ul`).focus(), !0;
}, closeLintPanel = (_) => {
	let y = _.state.field(sp, !1);
	return !y || !y.panel ? !1 : (_.dispatch({ effects: ap.of(!1) }), !0);
}, nextDiagnostic = (_) => {
	let y = _.state.field(sp, !1);
	if (!y) return !1;
	let b = _.state.selection.main, x = y.diagnostics.iter(b.to + 1);
	return !x.value && (x = y.diagnostics.iter(0), !x.value || x.from == b.from && x.to == b.to) ? !1 : (_.dispatch({
		selection: {
			anchor: x.from,
			head: x.to
		},
		scrollIntoView: !0
	}), !0);
}, lp = [{
	key: `Mod-Shift-m`,
	run: openLintPanel,
	preventDefault: !0
}, {
	key: `F8`,
	run: nextDiagnostic
}], up = Ec.fromClass(class {
	constructor(_) {
		this.view = _, this.timeout = -1, this.set = !0;
		let { delay: y } = _.state.facet(dp);
		this.lintTime = Date.now() + y, this.run = this.run.bind(this), this.timeout = setTimeout(this.run, y);
	}
	run() {
		let _ = Date.now();
		if (_ < this.lintTime - 10) this.timeout = setTimeout(this.run, this.lintTime - _);
		else {
			this.set = !1;
			let { state: _ } = this.view, { sources: y } = _.facet(dp);
			y.length && Promise.all(y.map((_) => Promise.resolve(_(this.view)))).then((y) => {
				let b = y.reduce((_, y) => _.concat(y));
				this.view.state.doc == _.doc && this.view.dispatch(setDiagnostics(this.view.state, b));
			}, (_) => {
				logException(this.view.state, _);
			});
		}
	}
	update(_) {
		let y = _.state.facet(dp);
		(_.docChanged || y != _.startState.facet(dp) || y.needsRefresh && y.needsRefresh(_)) && (this.lintTime = Date.now() + y.delay, this.set || (this.set = !0, this.timeout = setTimeout(this.run, y.delay)));
	}
	force() {
		this.set && (this.lintTime = Date.now(), this.run());
	}
	destroy() {
		clearTimeout(this.timeout);
	}
}), dp = Y.define({ combine(_) {
	return Object.assign({ sources: _.map((_) => _.source).filter((_) => _ != null) }, combineConfig(_.map((_) => _.config), {
		delay: 750,
		markerFilter: null,
		tooltipFilter: null,
		needsRefresh: null
	}, { needsRefresh: (_, y) => _ ? y ? (b) => _(b) || y(b) : _ : y }));
} });
function linter(_, y = {}) {
	return [
		dp.of({
			source: _,
			config: y
		}),
		up,
		mp
	];
}
function assignKeys(_) {
	let y = [];
	if (_) actions: for (let { name: b } of _) {
		for (let _ = 0; _ < b.length; _++) {
			let x = b[_];
			if (/[a-zA-Z]/.test(x) && !y.some((_) => _.toLowerCase() == x.toLowerCase())) {
				y.push(x);
				continue actions;
			}
		}
		y.push(``);
	}
	return y;
}
function renderDiagnostic(_, y, b) {
	let x = b ? assignKeys(y.actions) : [];
	return crelt(`li`, { class: `cm-diagnostic cm-diagnostic-` + y.severity }, crelt(`span`, { class: `cm-diagnosticText` }, y.renderMessage ? y.renderMessage() : y.message), y.actions?.map((b, S) => {
		let C = !1, click = (x) => {
			if (x.preventDefault(), C) return;
			C = !0;
			let S = findDiagnostic(_.state.field(sp).diagnostics, y);
			S && b.apply(_, S.from, S.to);
		}, { name: w } = b, E = x[S] ? w.indexOf(x[S]) : -1, D = E < 0 ? w : [
			w.slice(0, E),
			crelt(`u`, w.slice(E, E + 1)),
			w.slice(E + 1)
		];
		return crelt(`button`, {
			type: `button`,
			class: `cm-diagnosticAction`,
			onclick: click,
			onmousedown: click,
			"aria-label": ` Action: ${w}${E < 0 ? `` : ` (access key "${x[S]})"`}.`
		}, D);
	}), y.source && crelt(`div`, { class: `cm-diagnosticSource` }, y.source));
}
var DiagnosticWidget = class extends WidgetType {
	constructor(_) {
		super(), this.diagnostic = _;
	}
	eq(_) {
		return _.diagnostic == this.diagnostic;
	}
	toDOM() {
		return crelt(`span`, { class: `cm-lintPoint cm-lintPoint-` + this.diagnostic.severity });
	}
}, PanelItem = class {
	constructor(_, y) {
		this.diagnostic = y, this.id = `item_` + Math.floor(Math.random() * 4294967295).toString(16), this.dom = renderDiagnostic(_, y, !0), this.dom.id = this.id, this.dom.setAttribute(`role`, `option`);
	}
}, fp = class LintPanel {
	constructor(_) {
		this.view = _, this.items = [];
		let onkeydown = (y) => {
			if (y.keyCode == 27) closeLintPanel(this.view), this.view.focus();
			else if (y.keyCode == 38 || y.keyCode == 33) this.moveSelection((this.selectedIndex - 1 + this.items.length) % this.items.length);
			else if (y.keyCode == 40 || y.keyCode == 34) this.moveSelection((this.selectedIndex + 1) % this.items.length);
			else if (y.keyCode == 36) this.moveSelection(0);
			else if (y.keyCode == 35) this.moveSelection(this.items.length - 1);
			else if (y.keyCode == 13) this.view.focus();
			else if (y.keyCode >= 65 && y.keyCode <= 90 && this.selectedIndex >= 0) {
				let { diagnostic: b } = this.items[this.selectedIndex], x = assignKeys(b.actions);
				for (let S = 0; S < x.length; S++) if (x[S].toUpperCase().charCodeAt(0) == y.keyCode) {
					let y = findDiagnostic(this.view.state.field(sp).diagnostics, b);
					y && b.actions[S].apply(_, y.from, y.to);
				}
			} else return;
			y.preventDefault();
		}, onclick = (_) => {
			for (let y = 0; y < this.items.length; y++) this.items[y].dom.contains(_.target) && this.moveSelection(y);
		};
		this.list = crelt(`ul`, {
			tabIndex: 0,
			role: `listbox`,
			"aria-label": this.view.state.phrase(`Diagnostics`),
			onkeydown,
			onclick
		}), this.dom = crelt(`div`, { class: `cm-panel-lint` }, this.list, crelt(`button`, {
			type: `button`,
			name: `close`,
			"aria-label": this.view.state.phrase(`close`),
			onclick: () => closeLintPanel(this.view)
		}, `×`)), this.update();
	}
	get selectedIndex() {
		let _ = this.view.state.field(sp).selected;
		if (!_) return -1;
		for (let y = 0; y < this.items.length; y++) if (this.items[y].diagnostic == _.diagnostic) return y;
		return -1;
	}
	update() {
		let { diagnostics: _, selected: y } = this.view.state.field(sp), b = 0, x = !1, S = null;
		for (_.between(0, this.view.state.doc.length, (_, C, { spec: w }) => {
			let E = -1, D;
			for (let _ = b; _ < this.items.length; _++) if (this.items[_].diagnostic == w.diagnostic) {
				E = _;
				break;
			}
			E < 0 ? (D = new PanelItem(this.view, w.diagnostic), this.items.splice(b, 0, D), x = !0) : (D = this.items[E], E > b && (this.items.splice(b, E - b), x = !0)), y && D.diagnostic == y.diagnostic ? D.dom.hasAttribute(`aria-selected`) || (D.dom.setAttribute(`aria-selected`, `true`), S = D) : D.dom.hasAttribute(`aria-selected`) && D.dom.removeAttribute(`aria-selected`), b++;
		}); b < this.items.length && !(this.items.length == 1 && this.items[0].diagnostic.from < 0);) x = !0, this.items.pop();
		this.items.length == 0 && (this.items.push(new PanelItem(this.view, {
			from: -1,
			to: -1,
			severity: `info`,
			message: this.view.state.phrase(`No diagnostics`)
		})), x = !0), S ? (this.list.setAttribute(`aria-activedescendant`, S.id), this.view.requestMeasure({
			key: this,
			read: () => ({
				sel: S.dom.getBoundingClientRect(),
				panel: this.list.getBoundingClientRect()
			}),
			write: ({ sel: _, panel: y }) => {
				let b = y.height / this.list.offsetHeight;
				_.top < y.top ? this.list.scrollTop -= (y.top - _.top) / b : _.bottom > y.bottom && (this.list.scrollTop += (_.bottom - y.bottom) / b);
			}
		})) : this.selectedIndex < 0 && this.list.removeAttribute(`aria-activedescendant`), x && this.sync();
	}
	sync() {
		let _ = this.list.firstChild;
		function rm() {
			let y = _;
			_ = y.nextSibling, y.remove();
		}
		for (let y of this.items) if (y.dom.parentNode == this.list) {
			for (; _ != y.dom;) rm();
			_ = y.dom.nextSibling;
		} else this.list.insertBefore(y.dom, _);
		for (; _;) rm();
	}
	moveSelection(_) {
		if (this.selectedIndex < 0) return;
		let y = findDiagnostic(this.view.state.field(sp).diagnostics, this.items[_].diagnostic);
		y && this.view.dispatch({
			selection: {
				anchor: y.from,
				head: y.to
			},
			scrollIntoView: !0,
			effects: op.of(y)
		});
	}
	static open(_) {
		return new LintPanel(_);
	}
};
function svg(_, y = `viewBox="0 0 40 40"`) {
	return `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" ${y}>${encodeURIComponent(_)}</svg>')`;
}
function underline(_) {
	return svg(`<path d="m0 2.5 l2 -1.5 l1 0 l2 1.5 l1 0" stroke="${_}" fill="none" stroke-width=".7"/>`, `width="6" height="3"`);
}
var pp = Z.baseTheme({
	".cm-diagnostic": {
		padding: `3px 6px 3px 8px`,
		marginLeft: `-1px`,
		display: `block`,
		whiteSpace: `pre-wrap`
	},
	".cm-diagnostic-error": { borderLeft: `5px solid #d11` },
	".cm-diagnostic-warning": { borderLeft: `5px solid orange` },
	".cm-diagnostic-info": { borderLeft: `5px solid #999` },
	".cm-diagnostic-hint": { borderLeft: `5px solid #66d` },
	".cm-diagnosticAction": {
		font: `inherit`,
		border: `none`,
		padding: `2px 4px`,
		backgroundColor: `#444`,
		color: `white`,
		borderRadius: `3px`,
		marginLeft: `8px`,
		cursor: `pointer`
	},
	".cm-diagnosticSource": {
		fontSize: `70%`,
		opacity: .7
	},
	".cm-lintRange": {
		backgroundPosition: `left bottom`,
		backgroundRepeat: `repeat-x`,
		paddingBottom: `0.7px`
	},
	".cm-lintRange-error": { backgroundImage: underline(`#d11`) },
	".cm-lintRange-warning": { backgroundImage: underline(`orange`) },
	".cm-lintRange-info": { backgroundImage: underline(`#999`) },
	".cm-lintRange-hint": { backgroundImage: underline(`#66d`) },
	".cm-lintRange-active": { backgroundColor: `#ffdd9980` },
	".cm-tooltip-lint": {
		padding: 0,
		margin: 0
	},
	".cm-lintPoint": {
		position: `relative`,
		"&:after": {
			content: `""`,
			position: `absolute`,
			bottom: 0,
			left: `-2px`,
			borderLeft: `3px solid transparent`,
			borderRight: `3px solid transparent`,
			borderBottom: `4px solid #d11`
		}
	},
	".cm-lintPoint-warning": { "&:after": { borderBottomColor: `orange` } },
	".cm-lintPoint-info": { "&:after": { borderBottomColor: `#999` } },
	".cm-lintPoint-hint": { "&:after": { borderBottomColor: `#66d` } },
	".cm-panel.cm-panel-lint": {
		position: `relative`,
		"& ul": {
			maxHeight: `100px`,
			overflowY: `auto`,
			"& [aria-selected]": {
				backgroundColor: `#ddd`,
				"& u": { textDecoration: `underline` }
			},
			"&:focus [aria-selected]": {
				background_fallback: `#bdf`,
				backgroundColor: `Highlight`,
				color_fallback: `white`,
				color: `HighlightText`
			},
			"& u": { textDecoration: `none` },
			padding: 0,
			margin: 0
		},
		"& [name=close]": {
			position: `absolute`,
			top: `0`,
			right: `2px`,
			background: `inherit`,
			border: `none`,
			font: `inherit`,
			padding: 0,
			margin: 0
		}
	}
}), mp = [
	sp,
	Z.decorations.compute([sp], (_) => {
		let { selected: y, panel: b } = _.field(sp);
		return !y || !b || y.from == y.to ? Decoration.none : Decoration.set([cp.range(y.from, y.to)]);
	}),
	hoverTooltip(lintTooltip, { hideOn: hideTooltip }),
	pp
], hp = typeof String.prototype.normalize == `function` ? (_) => _.normalize(`NFKD`) : (_) => _, SearchCursor = class {
	constructor(_, y, b = 0, x = _.length, S, C) {
		this.test = C, this.value = {
			from: 0,
			to: 0
		}, this.done = !1, this.matches = [], this.buffer = ``, this.bufferPos = 0, this.iter = _.iterRange(b, x), this.bufferStart = b, this.normalize = S ? (_) => S(hp(_)) : hp, this.query = this.normalize(y);
	}
	peek() {
		if (this.bufferPos == this.buffer.length) {
			if (this.bufferStart += this.buffer.length, this.iter.next(), this.iter.done) return -1;
			this.bufferPos = 0, this.buffer = this.iter.value;
		}
		return codePointAt(this.buffer, this.bufferPos);
	}
	next() {
		for (; this.matches.length;) this.matches.pop();
		return this.nextOverlapping();
	}
	nextOverlapping() {
		for (;;) {
			let _ = this.peek();
			if (_ < 0) return this.done = !0, this;
			let y = fromCodePoint(_), b = this.bufferStart + this.bufferPos;
			this.bufferPos += codePointSize(_);
			let x = this.normalize(y);
			for (let _ = 0, S = b;; _++) {
				let C = x.charCodeAt(_), w = this.match(C, S, this.bufferPos + this.bufferStart);
				if (_ == x.length - 1) {
					if (w) return this.value = w, this;
					break;
				}
				S == b && _ < y.length && y.charCodeAt(_) == C && S++;
			}
		}
	}
	match(_, y, b) {
		let x = null;
		for (let y = 0; y < this.matches.length; y += 2) {
			let S = this.matches[y], C = !1;
			this.query.charCodeAt(S) == _ && (S == this.query.length - 1 ? x = {
				from: this.matches[y + 1],
				to: b
			} : (this.matches[y]++, C = !0)), C || (this.matches.splice(y, 2), y -= 2);
		}
		return this.query.charCodeAt(0) == _ && (this.query.length == 1 ? x = {
			from: y,
			to: b
		} : this.matches.push(1, y)), x && this.test && !this.test(x.from, x.to, this.buffer, this.bufferStart) && (x = null), x;
	}
};
typeof Symbol < `u` && (SearchCursor.prototype[Symbol.iterator] = function() {
	return this;
});
var gp = {
	from: -1,
	to: -1,
	match: /.*/.exec(``)
}, _p = `gm` + (/x/.unicode == null ? `` : `u`), RegExpCursor = class {
	constructor(_, y, b, x = 0, S = _.length) {
		if (this.text = _, this.to = S, this.curLine = ``, this.done = !1, this.value = gp, /\\[sWDnr]|\n|\r|\[\^/.test(y)) return new MultilineRegExpCursor(_, y, b, x, S);
		this.re = new RegExp(y, _p + (b?.ignoreCase ? `i` : ``)), this.test = b?.test, this.iter = _.iter();
		let C = _.lineAt(x);
		this.curLineStart = C.from, this.matchPos = toCharEnd(_, x), this.getLine(this.curLineStart);
	}
	getLine(_) {
		this.iter.next(_), this.iter.lineBreak ? this.curLine = `` : (this.curLine = this.iter.value, this.curLineStart + this.curLine.length > this.to && (this.curLine = this.curLine.slice(0, this.to - this.curLineStart)), this.iter.next());
	}
	nextLine() {
		this.curLineStart = this.curLineStart + this.curLine.length + 1, this.curLineStart > this.to ? this.curLine = `` : this.getLine(0);
	}
	next() {
		for (let _ = this.matchPos - this.curLineStart;;) {
			this.re.lastIndex = _;
			let y = this.matchPos <= this.to && this.re.exec(this.curLine);
			if (y) {
				let b = this.curLineStart + y.index, x = b + y[0].length;
				if (this.matchPos = toCharEnd(this.text, x + +(b == x)), b == this.curLineStart + this.curLine.length && this.nextLine(), (b < x || b > this.value.to) && (!this.test || this.test(b, x, y))) return this.value = {
					from: b,
					to: x,
					match: y
				}, this;
				_ = this.matchPos - this.curLineStart;
			} else if (this.curLineStart + this.curLine.length < this.to) this.nextLine(), _ = 0;
			else return this.done = !0, this;
		}
	}
}, vp = /* @__PURE__ */ new WeakMap(), yp = class FlattenedDoc {
	constructor(_, y) {
		this.from = _, this.text = y;
	}
	get to() {
		return this.from + this.text.length;
	}
	static get(_, y, b) {
		let x = vp.get(_);
		if (!x || x.from >= b || x.to <= y) {
			let x = new FlattenedDoc(y, _.sliceString(y, b));
			return vp.set(_, x), x;
		}
		if (x.from == y && x.to == b) return x;
		let { text: S, from: C } = x;
		return C > y && (S = _.sliceString(y, C) + S, C = y), x.to < b && (S += _.sliceString(x.to, b)), vp.set(_, new FlattenedDoc(C, S)), new FlattenedDoc(y, S.slice(y - C, b - C));
	}
}, MultilineRegExpCursor = class {
	constructor(_, y, b, x, S) {
		this.text = _, this.to = S, this.done = !1, this.value = gp, this.matchPos = toCharEnd(_, x), this.re = new RegExp(y, _p + (b?.ignoreCase ? `i` : ``)), this.test = b?.test, this.flat = yp.get(_, x, this.chunkEnd(x + 5e3));
	}
	chunkEnd(_) {
		return _ >= this.to ? this.to : this.text.lineAt(_).to;
	}
	next() {
		for (;;) {
			let _ = this.re.lastIndex = this.matchPos - this.flat.from, y = this.re.exec(this.flat.text);
			if (y && !y[0] && y.index == _ && (this.re.lastIndex = _ + 1, y = this.re.exec(this.flat.text)), y) {
				let _ = this.flat.from + y.index, b = _ + y[0].length;
				if ((this.flat.to >= this.to || y.index + y[0].length <= this.flat.text.length - 10) && (!this.test || this.test(_, b, y))) return this.value = {
					from: _,
					to: b,
					match: y
				}, this.matchPos = toCharEnd(this.text, b + +(_ == b)), this;
			}
			if (this.flat.to == this.to) return this.done = !0, this;
			this.flat = yp.get(this.text, this.flat.from, this.chunkEnd(this.flat.from + this.flat.text.length * 2));
		}
	}
};
typeof Symbol < `u` && (RegExpCursor.prototype[Symbol.iterator] = MultilineRegExpCursor.prototype[Symbol.iterator] = function() {
	return this;
});
function validRegExp(_) {
	try {
		return new RegExp(_, _p), !0;
	} catch {
		return !1;
	}
}
function toCharEnd(_, y) {
	if (y >= _.length) return y;
	let b = _.lineAt(y), x;
	for (; y < b.to && (x = b.text.charCodeAt(y - b.from)) >= 56320 && x < 57344;) y++;
	return y;
}
function createLineDialog(_) {
	let y = crelt(`input`, {
		class: `cm-textfield`,
		name: `line`,
		value: String(_.state.doc.lineAt(_.state.selection.main.head).number)
	}), b = crelt(`form`, {
		class: `cm-gotoLine`,
		onkeydown: (y) => {
			y.keyCode == 27 ? (y.preventDefault(), _.dispatch({ effects: bp.of(!1) }), _.focus()) : y.keyCode == 13 && (y.preventDefault(), go());
		},
		onsubmit: (_) => {
			_.preventDefault(), go();
		}
	}, crelt(`label`, _.state.phrase(`Go to line`), `: `, y), ` `, crelt(`button`, {
		class: `cm-button`,
		type: `submit`
	}, _.state.phrase(`go`)));
	function go() {
		let b = /^([+-])?(\d+)?(:\d+)?(%)?$/.exec(y.value);
		if (!b) return;
		let { state: x } = _, S = x.doc.lineAt(x.selection.main.head), [, C, w, E, D] = b, O = E ? +E.slice(1) : 0, k = w ? +w : S.number;
		if (w && D) {
			let _ = k / 100;
			C && (_ = _ * (C == `-` ? -1 : 1) + S.number / x.doc.lines), k = Math.round(x.doc.lines * _);
		} else w && C && (k = k * (C == `-` ? -1 : 1) + S.number);
		let A = x.doc.line(Math.max(1, Math.min(x.doc.lines, k))), j = J.cursor(A.from + Math.max(0, Math.min(O, A.length)));
		_.dispatch({
			effects: [bp.of(!1), Z.scrollIntoView(j.from, { y: `center` })],
			selection: j
		}), _.focus();
	}
	return { dom: b };
}
var bp = ns.define(), xp = Wo.define({
	create() {
		return !0;
	},
	update(_, y) {
		for (let b of y.effects) b.is(bp) && (_ = b.value);
		return _;
	},
	provide: (_) => uu.from(_, (_) => _ ? createLineDialog : null)
}), gotoLine = (_) => {
	let y = getPanel(_, createLineDialog);
	if (!y) {
		let b = [bp.of(!0)];
		_.state.field(xp, !1) ?? b.push(ns.appendConfig.of([xp, Sp])), _.dispatch({ effects: b }), y = getPanel(_, createLineDialog);
	}
	return y && y.dom.querySelector(`input`).select(), !0;
}, Sp = Z.baseTheme({ ".cm-panel.cm-gotoLine": {
	padding: `2px 6px 4px`,
	"& label": { fontSize: `80%` }
} }), Cp = {
	highlightWordAroundCursor: !1,
	minSelectionLength: 1,
	maxMatches: 100,
	wholeWords: !1
}, wp = Y.define({ combine(_) {
	return combineConfig(_, Cp, {
		highlightWordAroundCursor: (_, y) => _ || y,
		minSelectionLength: Math.min,
		maxMatches: Math.min
	});
} });
function highlightSelectionMatches(_) {
	let y = [Op, Dp];
	return _ && y.push(wp.of(_)), y;
}
var Tp = Decoration.mark({ class: `cm-selectionMatch` }), Ep = Decoration.mark({ class: `cm-selectionMatch cm-selectionMatch-main` });
function insideWordBoundaries(_, y, b, x) {
	return (b == 0 || _(y.sliceDoc(b - 1, b)) != os.Word) && (x == y.doc.length || _(y.sliceDoc(x, x + 1)) != os.Word);
}
function insideWord(_, y, b, x) {
	return _(y.sliceDoc(b, b + 1)) == os.Word && _(y.sliceDoc(x - 1, x)) == os.Word;
}
var Dp = Ec.fromClass(class {
	constructor(_) {
		this.decorations = this.getDeco(_);
	}
	update(_) {
		(_.selectionSet || _.docChanged || _.viewportChanged) && (this.decorations = this.getDeco(_.view));
	}
	getDeco(_) {
		let y = _.state.facet(wp), { state: b } = _, x = b.selection;
		if (x.ranges.length > 1) return Decoration.none;
		let S = x.main, C, w = null;
		if (S.empty) {
			if (!y.highlightWordAroundCursor) return Decoration.none;
			let _ = b.wordAt(S.head);
			if (!_) return Decoration.none;
			w = b.charCategorizer(S.head), C = b.sliceDoc(_.from, _.to);
		} else {
			let _ = S.to - S.from;
			if (_ < y.minSelectionLength || _ > 200) return Decoration.none;
			if (y.wholeWords) {
				if (C = b.sliceDoc(S.from, S.to), w = b.charCategorizer(S.head), !(insideWordBoundaries(w, b, S.from, S.to) && insideWord(w, b, S.from, S.to))) return Decoration.none;
			} else if (C = b.sliceDoc(S.from, S.to), !C) return Decoration.none;
		}
		let E = [];
		for (let x of _.visibleRanges) {
			let _ = new SearchCursor(b.doc, C, x.from, x.to);
			for (; !_.next().done;) {
				let { from: x, to: C } = _.value;
				if ((!w || insideWordBoundaries(w, b, x, C)) && (S.empty && x <= S.from && C >= S.to ? E.push(Ep.range(x, C)) : (x >= S.to || C <= S.from) && E.push(Tp.range(x, C)), E.length > y.maxMatches)) return Decoration.none;
			}
		}
		return Decoration.set(E);
	}
}, { decorations: (_) => _.decorations }), Op = Z.baseTheme({
	".cm-selectionMatch": { backgroundColor: `#99ff7780` },
	".cm-searchMatch .cm-selectionMatch": { backgroundColor: `transparent` }
}), selectWord = ({ state: _, dispatch: y }) => {
	let { selection: b } = _, x = J.create(b.ranges.map((y) => _.wordAt(y.head) || J.cursor(y.head)), b.mainIndex);
	return x.eq(b) ? !1 : (y(_.update({ selection: x })), !0);
};
function findNextOccurrence(_, y) {
	let { main: b, ranges: x } = _.selection, S = _.wordAt(b.head), C = S && S.from == b.from && S.to == b.to;
	for (let b = !1, S = new SearchCursor(_.doc, y, x[x.length - 1].to);;) if (S.next(), S.done) {
		if (b) return null;
		S = new SearchCursor(_.doc, y, 0, Math.max(0, x[x.length - 1].from - 1)), b = !0;
	} else {
		if (b && x.some((_) => _.from == S.value.from)) continue;
		if (C) {
			let y = _.wordAt(S.value.from);
			if (!y || y.from != S.value.from || y.to != S.value.to) continue;
		}
		return S.value;
	}
}
var selectNextOccurrence = ({ state: _, dispatch: y }) => {
	let { ranges: b } = _.selection;
	if (b.some((_) => _.from === _.to)) return selectWord({
		state: _,
		dispatch: y
	});
	let x = _.sliceDoc(b[0].from, b[0].to);
	if (_.selection.ranges.some((y) => _.sliceDoc(y.from, y.to) != x)) return !1;
	let S = findNextOccurrence(_, x);
	return S ? (y(_.update({
		selection: _.selection.addRange(J.range(S.from, S.to), !1),
		effects: Z.scrollIntoView(S.to)
	})), !0) : !1;
}, kp = Y.define({ combine(_) {
	return combineConfig(_, {
		top: !1,
		caseSensitive: !1,
		literal: !1,
		regexp: !1,
		wholeWord: !1,
		createPanel: (_) => new SearchPanel(_),
		scrollToMatch: (_) => Z.scrollIntoView(_)
	});
} }), SearchQuery = class {
	constructor(_) {
		this.search = _.search, this.caseSensitive = !!_.caseSensitive, this.literal = !!_.literal, this.regexp = !!_.regexp, this.replace = _.replace || ``, this.valid = !!this.search && (!this.regexp || validRegExp(this.search)), this.unquoted = this.unquote(this.search), this.wholeWord = !!_.wholeWord;
	}
	unquote(_) {
		return this.literal ? _ : _.replace(/\\([nrt\\])/g, (_, y) => y == `n` ? `
` : y == `r` ? `\r` : y == `t` ? `	` : `\\`);
	}
	eq(_) {
		return this.search == _.search && this.replace == _.replace && this.caseSensitive == _.caseSensitive && this.regexp == _.regexp && this.wholeWord == _.wholeWord;
	}
	create() {
		return this.regexp ? new RegExpQuery(this) : new StringQuery(this);
	}
	getCursor(_, y = 0, b) {
		let x = _.doc ? _ : ls.create({ doc: _ });
		return b ??= x.doc.length, this.regexp ? regexpCursor(this, x, y, b) : stringCursor(this, x, y, b);
	}
}, QueryType = class {
	constructor(_) {
		this.spec = _;
	}
};
function stringCursor(_, y, b, x) {
	return new SearchCursor(y.doc, _.unquoted, b, x, _.caseSensitive ? void 0 : (_) => _.toLowerCase(), _.wholeWord ? stringWordTest(y.doc, y.charCategorizer(y.selection.main.head)) : void 0);
}
function stringWordTest(_, y) {
	return (b, x, S, C) => ((C > b || C + S.length < x) && (C = Math.max(0, b - 2), S = _.sliceString(C, Math.min(_.length, x + 2))), (y(charBefore(S, b - C)) != os.Word || y(charAfter(S, b - C)) != os.Word) && (y(charAfter(S, x - C)) != os.Word || y(charBefore(S, x - C)) != os.Word));
}
var StringQuery = class extends QueryType {
	constructor(_) {
		super(_);
	}
	nextMatch(_, y, b) {
		let x = stringCursor(this.spec, _, b, _.doc.length).nextOverlapping();
		return x.done && (x = stringCursor(this.spec, _, 0, y).nextOverlapping()), x.done ? null : x.value;
	}
	prevMatchInRange(_, y, b) {
		for (let x = b;;) {
			let b = Math.max(y, x - 1e4 - this.spec.unquoted.length), S = stringCursor(this.spec, _, b, x), C = null;
			for (; !S.nextOverlapping().done;) C = S.value;
			if (C) return C;
			if (b == y) return null;
			x -= 1e4;
		}
	}
	prevMatch(_, y, b) {
		return this.prevMatchInRange(_, 0, y) || this.prevMatchInRange(_, b, _.doc.length);
	}
	getReplacement(_) {
		return this.spec.unquote(this.spec.replace);
	}
	matchAll(_, y) {
		let b = stringCursor(this.spec, _, 0, _.doc.length), x = [];
		for (; !b.next().done;) {
			if (x.length >= y) return null;
			x.push(b.value);
		}
		return x;
	}
	highlight(_, y, b, x) {
		let S = stringCursor(this.spec, _, Math.max(0, y - this.spec.unquoted.length), Math.min(b + this.spec.unquoted.length, _.doc.length));
		for (; !S.next().done;) x(S.value.from, S.value.to);
	}
};
function regexpCursor(_, y, b, x) {
	return new RegExpCursor(y.doc, _.search, {
		ignoreCase: !_.caseSensitive,
		test: _.wholeWord ? regexpWordTest(y.charCategorizer(y.selection.main.head)) : void 0
	}, b, x);
}
function charBefore(_, y) {
	return _.slice(findClusterBreak(_, y, !1), y);
}
function charAfter(_, y) {
	return _.slice(y, findClusterBreak(_, y));
}
function regexpWordTest(_) {
	return (y, b, x) => !x[0].length || (_(charBefore(x.input, x.index)) != os.Word || _(charAfter(x.input, x.index)) != os.Word) && (_(charAfter(x.input, x.index + x[0].length)) != os.Word || _(charBefore(x.input, x.index + x[0].length)) != os.Word);
}
var RegExpQuery = class extends QueryType {
	nextMatch(_, y, b) {
		let x = regexpCursor(this.spec, _, b, _.doc.length).next();
		return x.done && (x = regexpCursor(this.spec, _, 0, y).next()), x.done ? null : x.value;
	}
	prevMatchInRange(_, y, b) {
		for (let x = 1;; x++) {
			let S = Math.max(y, b - x * 1e4), C = regexpCursor(this.spec, _, S, b), w = null;
			for (; !C.next().done;) w = C.value;
			if (w && (S == y || w.from > S + 10)) return w;
			if (S == y) return null;
		}
	}
	prevMatch(_, y, b) {
		return this.prevMatchInRange(_, 0, y) || this.prevMatchInRange(_, b, _.doc.length);
	}
	getReplacement(_) {
		return this.spec.unquote(this.spec.replace).replace(/\$([$&\d+])/g, (y, b) => b == `$` ? `$` : b == `&` ? _.match[0] : b != `0` && +b < _.match.length ? _.match[b] : y);
	}
	matchAll(_, y) {
		let b = regexpCursor(this.spec, _, 0, _.doc.length), x = [];
		for (; !b.next().done;) {
			if (x.length >= y) return null;
			x.push(b.value);
		}
		return x;
	}
	highlight(_, y, b, x) {
		let S = regexpCursor(this.spec, _, Math.max(0, y - 250), Math.min(b + 250, _.doc.length));
		for (; !S.next().done;) x(S.value.from, S.value.to);
	}
}, Ap = ns.define(), jp = ns.define(), Mp = Wo.define({
	create(_) {
		return new SearchState(defaultQuery(_).create(), null);
	},
	update(_, y) {
		for (let b of y.effects) b.is(Ap) ? _ = new SearchState(b.value.create(), _.panel) : b.is(jp) && (_ = new SearchState(_.query, b.value ? createSearchPanel : null));
		return _;
	},
	provide: (_) => uu.from(_, (_) => _.panel)
}), SearchState = class {
	constructor(_, y) {
		this.query = _, this.panel = y;
	}
}, Np = Decoration.mark({ class: `cm-searchMatch` }), Pp = Decoration.mark({ class: `cm-searchMatch cm-searchMatch-selected` }), Fp = Ec.fromClass(class {
	constructor(_) {
		this.view = _, this.decorations = this.highlight(_.state.field(Mp));
	}
	update(_) {
		let y = _.state.field(Mp);
		(y != _.startState.field(Mp) || _.docChanged || _.selectionSet || _.viewportChanged) && (this.decorations = this.highlight(y));
	}
	highlight({ query: _, panel: y }) {
		if (!y || !_.spec.valid) return Decoration.none;
		let { view: b } = this, x = new ps();
		for (let y = 0, S = b.visibleRanges, C = S.length; y < C; y++) {
			let { from: w, to: E } = S[y];
			for (; y < C - 1 && E > S[y + 1].from - 500;) E = S[++y].to;
			_.highlight(b.state, w, E, (_, y) => {
				let S = b.state.selection.ranges.some((b) => b.from == _ && b.to == y);
				x.add(_, y, S ? Pp : Np);
			});
		}
		return x.finish();
	}
}, { decorations: (_) => _.decorations });
function searchCommand(_) {
	return (y) => {
		let b = y.state.field(Mp, !1);
		return b && b.query.spec.valid ? _(y, b) : openSearchPanel(y);
	};
}
var Ip = searchCommand((_, { query: y }) => {
	let { to: b } = _.state.selection.main, x = y.nextMatch(_.state, b, b);
	if (!x) return !1;
	let S = J.single(x.from, x.to), C = _.state.facet(kp);
	return _.dispatch({
		selection: S,
		effects: [announceMatch(_, x), C.scrollToMatch(S.main, _)],
		userEvent: `select.search`
	}), selectSearchInput(_), !0;
}), Lp = searchCommand((_, { query: y }) => {
	let { state: b } = _, { from: x } = b.selection.main, S = y.prevMatch(b, x, x);
	if (!S) return !1;
	let C = J.single(S.from, S.to), w = _.state.facet(kp);
	return _.dispatch({
		selection: C,
		effects: [announceMatch(_, S), w.scrollToMatch(C.main, _)],
		userEvent: `select.search`
	}), selectSearchInput(_), !0;
}), Rp = searchCommand((_, { query: y }) => {
	let b = y.matchAll(_.state, 1e3);
	return !b || !b.length ? !1 : (_.dispatch({
		selection: J.create(b.map((_) => J.range(_.from, _.to))),
		userEvent: `select.search.matches`
	}), !0);
}), selectSelectionMatches = ({ state: _, dispatch: y }) => {
	let b = _.selection;
	if (b.ranges.length > 1 || b.main.empty) return !1;
	let { from: x, to: S } = b.main, C = [], w = 0;
	for (let y = new SearchCursor(_.doc, _.sliceDoc(x, S)); !y.next().done;) {
		if (C.length > 1e3) return !1;
		y.value.from == x && (w = C.length), C.push(J.range(y.value.from, y.value.to));
	}
	return y(_.update({
		selection: J.create(C, w),
		userEvent: `select.search.matches`
	})), !0;
}, zp = searchCommand((_, { query: y }) => {
	let { state: b } = _, { from: x, to: S } = b.selection.main;
	if (b.readOnly) return !1;
	let C = y.nextMatch(b, x, x);
	if (!C) return !1;
	let w = [], E, D, O = [];
	if (C.from == x && C.to == S && (D = b.toText(y.getReplacement(C)), w.push({
		from: C.from,
		to: C.to,
		insert: D
	}), C = y.nextMatch(b, C.from, C.to), O.push(Z.announce.of(b.phrase(`replaced match on line $`, b.doc.lineAt(x).number) + `.`))), C) {
		let y = w.length == 0 || w[0].from >= C.to ? 0 : C.to - C.from - D.length;
		E = J.single(C.from - y, C.to - y), O.push(announceMatch(_, C)), O.push(b.facet(kp).scrollToMatch(E.main, _));
	}
	return _.dispatch({
		changes: w,
		selection: E,
		effects: O,
		userEvent: `input.replace`
	}), !0;
}), Bp = searchCommand((_, { query: y }) => {
	if (_.state.readOnly) return !1;
	let b = y.matchAll(_.state, 1e9).map((_) => {
		let { from: b, to: x } = _;
		return {
			from: b,
			to: x,
			insert: y.getReplacement(_)
		};
	});
	if (!b.length) return !1;
	let x = _.state.phrase(`replaced $ matches`, b.length) + `.`;
	return _.dispatch({
		changes: b,
		effects: Z.announce.of(x),
		userEvent: `input.replace.all`
	}), !0;
});
function createSearchPanel(_) {
	return _.state.facet(kp).createPanel(_);
}
function defaultQuery(_, y) {
	let b = _.selection.main, x = b.empty || b.to > b.from + 100 ? `` : _.sliceDoc(b.from, b.to);
	if (y && !x) return y;
	let S = _.facet(kp);
	return new SearchQuery({
		search: y?.literal ?? S.literal ? x : x.replace(/\n/g, `\\n`),
		caseSensitive: y?.caseSensitive ?? S.caseSensitive,
		literal: y?.literal ?? S.literal,
		regexp: y?.regexp ?? S.regexp,
		wholeWord: y?.wholeWord ?? S.wholeWord
	});
}
function getSearchInput(_) {
	let y = getPanel(_, createSearchPanel);
	return y && y.dom.querySelector(`[main-field]`);
}
function selectSearchInput(_) {
	let y = getSearchInput(_);
	y && y == _.root.activeElement && y.select();
}
var openSearchPanel = (_) => {
	let y = _.state.field(Mp, !1);
	if (y && y.panel) {
		let b = getSearchInput(_);
		if (b && b != _.root.activeElement) {
			let x = defaultQuery(_.state, y.query.spec);
			x.valid && _.dispatch({ effects: Ap.of(x) }), b.focus(), b.select();
		}
	} else _.dispatch({ effects: [jp.of(!0), y ? Ap.of(defaultQuery(_.state, y.query.spec)) : ns.appendConfig.of(Gp)] });
	return !0;
}, closeSearchPanel = (_) => {
	let y = _.state.field(Mp, !1);
	if (!y || !y.panel) return !1;
	let b = getPanel(_, createSearchPanel);
	return b && b.dom.contains(_.root.activeElement) && _.focus(), _.dispatch({ effects: jp.of(!1) }), !0;
}, Vp = [
	{
		key: `Mod-f`,
		run: openSearchPanel,
		scope: `editor search-panel`
	},
	{
		key: `F3`,
		run: Ip,
		shift: Lp,
		scope: `editor search-panel`,
		preventDefault: !0
	},
	{
		key: `Mod-g`,
		run: Ip,
		shift: Lp,
		scope: `editor search-panel`,
		preventDefault: !0
	},
	{
		key: `Escape`,
		run: closeSearchPanel,
		scope: `editor search-panel`
	},
	{
		key: `Mod-Shift-l`,
		run: selectSelectionMatches
	},
	{
		key: `Mod-Alt-g`,
		run: gotoLine
	},
	{
		key: `Mod-d`,
		run: selectNextOccurrence,
		preventDefault: !0
	}
], SearchPanel = class {
	constructor(_) {
		this.view = _;
		let y = this.query = _.state.field(Mp).query.spec;
		this.commit = this.commit.bind(this), this.searchField = crelt(`input`, {
			value: y.search,
			placeholder: phrase(_, `Find`),
			"aria-label": phrase(_, `Find`),
			class: `cm-textfield`,
			name: `search`,
			form: ``,
			"main-field": `true`,
			onchange: this.commit,
			onkeyup: this.commit
		}), this.replaceField = crelt(`input`, {
			value: y.replace,
			placeholder: phrase(_, `Replace`),
			"aria-label": phrase(_, `Replace`),
			class: `cm-textfield`,
			name: `replace`,
			form: ``,
			onchange: this.commit,
			onkeyup: this.commit
		}), this.caseField = crelt(`input`, {
			type: `checkbox`,
			name: `case`,
			form: ``,
			checked: y.caseSensitive,
			onchange: this.commit
		}), this.reField = crelt(`input`, {
			type: `checkbox`,
			name: `re`,
			form: ``,
			checked: y.regexp,
			onchange: this.commit
		}), this.wordField = crelt(`input`, {
			type: `checkbox`,
			name: `word`,
			form: ``,
			checked: y.wholeWord,
			onchange: this.commit
		});
		function button(_, y, b) {
			return crelt(`button`, {
				class: `cm-button`,
				name: _,
				onclick: y,
				type: `button`
			}, b);
		}
		this.dom = crelt(`div`, {
			onkeydown: (_) => this.keydown(_),
			class: `cm-search`
		}, [
			this.searchField,
			button(`next`, () => Ip(_), [phrase(_, `next`)]),
			button(`prev`, () => Lp(_), [phrase(_, `previous`)]),
			button(`select`, () => Rp(_), [phrase(_, `all`)]),
			crelt(`label`, null, [this.caseField, phrase(_, `match case`)]),
			crelt(`label`, null, [this.reField, phrase(_, `regexp`)]),
			crelt(`label`, null, [this.wordField, phrase(_, `by word`)]),
			..._.state.readOnly ? [] : [
				crelt(`br`),
				this.replaceField,
				button(`replace`, () => zp(_), [phrase(_, `replace`)]),
				button(`replaceAll`, () => Bp(_), [phrase(_, `replace all`)])
			],
			crelt(`button`, {
				name: `close`,
				onclick: () => closeSearchPanel(_),
				"aria-label": phrase(_, `close`),
				type: `button`
			}, [`×`])
		]);
	}
	commit() {
		let _ = new SearchQuery({
			search: this.searchField.value,
			caseSensitive: this.caseField.checked,
			regexp: this.reField.checked,
			wholeWord: this.wordField.checked,
			replace: this.replaceField.value
		});
		_.eq(this.query) || (this.query = _, this.view.dispatch({ effects: Ap.of(_) }));
	}
	keydown(_) {
		runScopeHandlers(this.view, _, `search-panel`) ? _.preventDefault() : _.keyCode == 13 && _.target == this.searchField ? (_.preventDefault(), (_.shiftKey ? Lp : Ip)(this.view)) : _.keyCode == 13 && _.target == this.replaceField && (_.preventDefault(), zp(this.view));
	}
	update(_) {
		for (let y of _.transactions) for (let _ of y.effects) _.is(Ap) && !_.value.eq(this.query) && this.setQuery(_.value);
	}
	setQuery(_) {
		this.query = _, this.searchField.value = _.search, this.replaceField.value = _.replace, this.caseField.checked = _.caseSensitive, this.reField.checked = _.regexp, this.wordField.checked = _.wholeWord;
	}
	mount() {
		this.searchField.select();
	}
	get pos() {
		return 80;
	}
	get top() {
		return this.view.state.facet(kp).top;
	}
};
function phrase(_, y) {
	return _.state.phrase(y);
}
var Hp = 30, Up = /[\s\.,:;?!]/;
function announceMatch(_, { from: y, to: b }) {
	let x = _.state.doc.lineAt(y), S = _.state.doc.lineAt(b).to, C = Math.max(x.from, y - Hp), w = Math.min(S, b + Hp), E = _.state.sliceDoc(C, w);
	if (C != x.from) {
		for (let _ = 0; _ < Hp; _++) if (!Up.test(E[_ + 1]) && Up.test(E[_])) {
			E = E.slice(_);
			break;
		}
	}
	if (w != S) {
		for (let _ = E.length - 1; _ > E.length - Hp; _--) if (!Up.test(E[_ - 1]) && Up.test(E[_])) {
			E = E.slice(0, _);
			break;
		}
	}
	return Z.announce.of(`${_.state.phrase(`current match`)}. ${E} ${_.state.phrase(`on line`)} ${x.number}.`);
}
var Wp = Z.baseTheme({
	".cm-panel.cm-search": {
		padding: `2px 6px 4px`,
		position: `relative`,
		"& [name=close]": {
			position: `absolute`,
			top: `0`,
			right: `4px`,
			backgroundColor: `inherit`,
			border: `none`,
			font: `inherit`,
			padding: 0,
			margin: 0
		},
		"& input, & button, & label": { margin: `.2em .6em .2em 0` },
		"& input[type=checkbox]": { marginRight: `.2em` },
		"& label": {
			fontSize: `80%`,
			whiteSpace: `pre`
		}
	},
	"&light .cm-searchMatch": { backgroundColor: `#ffff0054` },
	"&dark .cm-searchMatch": { backgroundColor: `#00ffff8a` },
	"&light .cm-searchMatch-selected": { backgroundColor: `#ff6a0054` },
	"&dark .cm-searchMatch-selected": { backgroundColor: `#ff00ff8a` }
}), Gp = [
	Mp,
	Ko.low(Fp),
	Wp
], Kp = [
	lineNumbers(),
	highlightActiveLineGutter(),
	highlightSpecialChars(),
	history(),
	foldGutter(),
	drawSelection(),
	dropCursor(),
	ls.allowMultipleSelections.of(!0),
	indentOnInput(),
	syntaxHighlighting(Ad, { fallback: !0 }),
	bracketMatching(),
	closeBrackets(),
	autocompletion(),
	rectangularSelection(),
	crosshairCursor(),
	highlightActiveLine(),
	highlightSelectionMatches(),
	Cl.of([
		...bf,
		...Kf,
		...Vp,
		...Vf,
		...bd,
		...xf,
		...lp
	])
];
function cubic_out(_) {
	let y = _ - 1;
	return y * y * y + 1;
}
function slide(_, { delay: y = 0, duration: b = 400, easing: x = cubic_out, axis: S = `y` } = {}) {
	let C = getComputedStyle(_), w = +C.opacity, E = S === `y` ? `height` : `width`, D = parseFloat(C[E]), O = S === `y` ? [`top`, `bottom`] : [`left`, `right`], k = O.map((_) => `${_[0].toUpperCase()}${_.slice(1)}`), A = parseFloat(C[`padding${k[0]}`]), j = parseFloat(C[`padding${k[1]}`]), N = parseFloat(C[`margin${k[0]}`]), P = parseFloat(C[`margin${k[1]}`]), F = parseFloat(C[`border${k[0]}Width`]), I = parseFloat(C[`border${k[1]}Width`]);
	return {
		delay: y,
		duration: b,
		easing: x,
		css: (_) => `overflow: hidden;opacity: ${Math.min(_ * 20, 1) * w};${E}: ${_ * D}px;padding-${O[0]}: ${_ * A}px;padding-${O[1]}: ${_ * j}px;margin-${O[0]}: ${_ * N}px;margin-${O[1]}: ${_ * P}px;border-${O[0]}-width: ${_ * F}px;border-${O[1]}-width: ${_ * I}px;min-${E}: 0`
	};
}
export { n$21 as $, set as $t, t$7 as A, await_block as At, e as B, text as Bt, t$2 as C, attach as Ct, t$4 as D, each as Dt, t$3 as E, html as Et, t$11 as F, unmount as Ft, e$5 as G, tick as Gt, e$2 as H, delegated as Ht, t$12 as I, append as It, t$16 as J, user_effect as Jt, e$6 as K, untrack as Kt, t$13 as L, comment$1 as Lt, t$9 as M, snippet as Mt, n$11 as N, mount as Nt, t$5 as O, index$1 as Ot, t$10 as P, set_text as Pt, n$20 as Q, proxy as Qt, t$14 as R, from_html as Rt, t$1 as S, clsx as St, n$3 as T, transition as Tt, e$3 as U, event as Ut, e$1 as V, delegate as Vt, e$4 as W, get as Wt, t$18 as X, first_child as Xt, t$17 as Y, child as Yt, t$19 as Z, sibling as Zt, Pr as _, bind_select_value as _t, jsonParseLinter as a, setContext as an, Gt as at, Sortable as b, set_style as bt, syntaxTree as c, noop as cn, spread_props as ct, jo as d, Et as dt, state as en, t$20 as et, v5 as f, attribute_effect as ft, Or as g, set_value as gt, Ia as h, set_checked as ht, json as i, push as in, t$27 as it, t$8 as j, onMount as jt, t$6 as k, if_block as kt, Z as l, to_array as ln, bind_this as lt, Pa as m, set_attribute as mt, Kp as n, getContext as nn, t$24 as nt, qf as o, next as on, prop as ot, Qa as p, remove_input_defaults as pt, e$7 as q, template_effect as qt, linter as r, pop as rn, t$26 as rt, autocompletion as s, reset as sn, rest_props as st, slide as t, user_derived as tn, r$9 as tt, Cl as u, bind_value as ut, SvelteMap as v, init_select as vt, n$2 as w, action as wt, rn as x, set_class as xt, Dr as y, select_option as yt, t$15 as z, props_id as zt };
