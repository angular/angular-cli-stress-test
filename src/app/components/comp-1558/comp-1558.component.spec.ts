/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1558Component } from './comp-1558.component';

describe('Comp1558Component', () => {
  let component: Comp1558Component;
  let fixture: ComponentFixture<Comp1558Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1558Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1558Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
