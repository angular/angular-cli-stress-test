/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp781Component } from './comp-781.component';

describe('Comp781Component', () => {
  let component: Comp781Component;
  let fixture: ComponentFixture<Comp781Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp781Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp781Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
