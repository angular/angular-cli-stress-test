/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp186Component } from './comp-186.component';

describe('Comp186Component', () => {
  let component: Comp186Component;
  let fixture: ComponentFixture<Comp186Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp186Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp186Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
