/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2469Component } from './comp-2469.component';

describe('Comp2469Component', () => {
  let component: Comp2469Component;
  let fixture: ComponentFixture<Comp2469Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2469Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
