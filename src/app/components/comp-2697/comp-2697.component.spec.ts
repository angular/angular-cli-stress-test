/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2697Component } from './comp-2697.component';

describe('Comp2697Component', () => {
  let component: Comp2697Component;
  let fixture: ComponentFixture<Comp2697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
