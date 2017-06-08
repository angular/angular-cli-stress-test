/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1068Component } from './comp-1068.component';

describe('Comp1068Component', () => {
  let component: Comp1068Component;
  let fixture: ComponentFixture<Comp1068Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1068Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1068Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
