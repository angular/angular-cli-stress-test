/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3697Component } from './comp-3697.component';

describe('Comp3697Component', () => {
  let component: Comp3697Component;
  let fixture: ComponentFixture<Comp3697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
