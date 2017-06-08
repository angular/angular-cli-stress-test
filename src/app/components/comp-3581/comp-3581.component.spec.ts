/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3581Component } from './comp-3581.component';

describe('Comp3581Component', () => {
  let component: Comp3581Component;
  let fixture: ComponentFixture<Comp3581Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3581Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3581Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
