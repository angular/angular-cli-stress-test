/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2816Component } from './comp-2816.component';

describe('Comp2816Component', () => {
  let component: Comp2816Component;
  let fixture: ComponentFixture<Comp2816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
