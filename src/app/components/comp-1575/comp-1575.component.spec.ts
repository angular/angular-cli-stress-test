/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1575Component } from './comp-1575.component';

describe('Comp1575Component', () => {
  let component: Comp1575Component;
  let fixture: ComponentFixture<Comp1575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
