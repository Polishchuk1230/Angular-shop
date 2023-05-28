Changes on 29.05.23:
* Added usage of predefined pipes: 'currency' and 'uppercase' in cart-item and cart-list templates.
* Added usage of the 'async' predefined pipe in product-list.component.html (ProductService#getProducts returns Observable<ProductModel[]>)
* Created OrderByPipe (registered in SharedModule, and for DI provided in ProductsModule)
* Added interactive forms for sorting products at product-list.component.html template.

Changes on 28.05.23:
* fix: gen-id.generator.ts uses function* now.

Changes on 22.05.23:
* Added FontResizeDirective (in use: @Input(), ElementRef + Renderer2, @HostListener('click'))
* All the services were injected into FirstComponent
* Added LocalStorageService. (The token was added via InjectionToken<Storage>)
* Added genID - generator. (Registeret in DI via UseFactory, injected into GeneratorService via inject-method)
* Added GeneratorService, GeneratorFactory, generatedString (in DI: useFactory + deps)
* Added ConstantsService registered in DI via useValue
* Added ConfigOptionsService, ConfigModel
* CartService methods addProduct and removeProduct reworked to follow the immutable approach.

Changes on 02.05.23:
* Created modules: CartModule, ProductModule, SharedModule
* FirstComponent is a standalone component now
* CartModel (model) was reworked
* Binding between ProductListComponent and ProductComponents elements was improved.
* Binding between CartListComponent and CartItemComponent elements was improved.
* OnPush change detection strategy was settled for representative components: CartItemComponent, ProductComponent.
* Created HighlightDirective in SharedModule.
* Added functionality: increase/decrease quantity products in the cart; remove all products of some item from the cart.

Changes on 17.04.23:
* Added FirstComponent and used it in AppComponent
* Added ProductModel, ProductService, ProductComponent, ProductListComponent and used it in AppComponent
* Added CartModel, CartService, CartListComponent
Only modular approach was used so far.