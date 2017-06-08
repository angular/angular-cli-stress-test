/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp331Component } from './comp-331.component';

describe('Comp331Component', () => {
  let component: Comp331Component;
  let fixture: ComponentFixture<Comp331Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp331Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp331Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
