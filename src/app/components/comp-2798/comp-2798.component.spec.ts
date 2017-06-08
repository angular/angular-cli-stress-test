/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2798Component } from './comp-2798.component';

describe('Comp2798Component', () => {
  let component: Comp2798Component;
  let fixture: ComponentFixture<Comp2798Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2798Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2798Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
