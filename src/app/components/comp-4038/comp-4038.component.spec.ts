/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4038Component } from './comp-4038.component';

describe('Comp4038Component', () => {
  let component: Comp4038Component;
  let fixture: ComponentFixture<Comp4038Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4038Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4038Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
