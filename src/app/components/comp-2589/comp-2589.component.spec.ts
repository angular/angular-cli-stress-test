/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2589Component } from './comp-2589.component';

describe('Comp2589Component', () => {
  let component: Comp2589Component;
  let fixture: ComponentFixture<Comp2589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
