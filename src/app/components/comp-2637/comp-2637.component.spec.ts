/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2637Component } from './comp-2637.component';

describe('Comp2637Component', () => {
  let component: Comp2637Component;
  let fixture: ComponentFixture<Comp2637Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2637Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2637Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
