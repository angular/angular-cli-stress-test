/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1639Component } from './comp-1639.component';

describe('Comp1639Component', () => {
  let component: Comp1639Component;
  let fixture: ComponentFixture<Comp1639Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1639Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1639Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
