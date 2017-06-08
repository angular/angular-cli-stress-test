/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2575Component } from './comp-2575.component';

describe('Comp2575Component', () => {
  let component: Comp2575Component;
  let fixture: ComponentFixture<Comp2575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
