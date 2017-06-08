/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1157Component } from './comp-1157.component';

describe('Comp1157Component', () => {
  let component: Comp1157Component;
  let fixture: ComponentFixture<Comp1157Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1157Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
