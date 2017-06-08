/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4795Component } from './comp-4795.component';

describe('Comp4795Component', () => {
  let component: Comp4795Component;
  let fixture: ComponentFixture<Comp4795Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4795Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4795Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
