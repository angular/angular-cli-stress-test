/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3045Component } from './comp-3045.component';

describe('Comp3045Component', () => {
  let component: Comp3045Component;
  let fixture: ComponentFixture<Comp3045Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3045Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3045Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
