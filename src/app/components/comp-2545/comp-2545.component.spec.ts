/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2545Component } from './comp-2545.component';

describe('Comp2545Component', () => {
  let component: Comp2545Component;
  let fixture: ComponentFixture<Comp2545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
