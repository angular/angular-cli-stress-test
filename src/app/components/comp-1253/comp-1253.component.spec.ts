/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1253Component } from './comp-1253.component';

describe('Comp1253Component', () => {
  let component: Comp1253Component;
  let fixture: ComponentFixture<Comp1253Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1253Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1253Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
