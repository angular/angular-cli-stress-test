/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp150Component } from './comp-150.component';

describe('Comp150Component', () => {
  let component: Comp150Component;
  let fixture: ComponentFixture<Comp150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
