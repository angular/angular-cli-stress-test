/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp368Component } from './comp-368.component';

describe('Comp368Component', () => {
  let component: Comp368Component;
  let fixture: ComponentFixture<Comp368Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp368Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp368Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
