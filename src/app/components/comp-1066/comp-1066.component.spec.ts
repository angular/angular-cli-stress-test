/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1066Component } from './comp-1066.component';

describe('Comp1066Component', () => {
  let component: Comp1066Component;
  let fixture: ComponentFixture<Comp1066Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1066Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1066Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
