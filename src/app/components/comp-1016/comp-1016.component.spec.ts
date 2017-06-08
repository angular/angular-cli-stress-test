/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1016Component } from './comp-1016.component';

describe('Comp1016Component', () => {
  let component: Comp1016Component;
  let fixture: ComponentFixture<Comp1016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
