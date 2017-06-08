/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4899Component } from './comp-4899.component';

describe('Comp4899Component', () => {
  let component: Comp4899Component;
  let fixture: ComponentFixture<Comp4899Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4899Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4899Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
