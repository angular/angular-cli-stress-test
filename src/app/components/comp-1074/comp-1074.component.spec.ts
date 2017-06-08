/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1074Component } from './comp-1074.component';

describe('Comp1074Component', () => {
  let component: Comp1074Component;
  let fixture: ComponentFixture<Comp1074Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1074Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1074Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
