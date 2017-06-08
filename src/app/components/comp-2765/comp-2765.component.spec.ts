/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2765Component } from './comp-2765.component';

describe('Comp2765Component', () => {
  let component: Comp2765Component;
  let fixture: ComponentFixture<Comp2765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
