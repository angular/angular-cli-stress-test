/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp356Component } from './comp-356.component';

describe('Comp356Component', () => {
  let component: Comp356Component;
  let fixture: ComponentFixture<Comp356Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp356Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp356Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
