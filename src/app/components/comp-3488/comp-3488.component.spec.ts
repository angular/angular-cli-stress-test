/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3488Component } from './comp-3488.component';

describe('Comp3488Component', () => {
  let component: Comp3488Component;
  let fixture: ComponentFixture<Comp3488Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3488Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3488Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
