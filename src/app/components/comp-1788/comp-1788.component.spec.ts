/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1788Component } from './comp-1788.component';

describe('Comp1788Component', () => {
  let component: Comp1788Component;
  let fixture: ComponentFixture<Comp1788Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1788Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1788Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
