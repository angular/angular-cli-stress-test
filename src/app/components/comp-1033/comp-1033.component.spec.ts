/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1033Component } from './comp-1033.component';

describe('Comp1033Component', () => {
  let component: Comp1033Component;
  let fixture: ComponentFixture<Comp1033Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1033Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1033Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
