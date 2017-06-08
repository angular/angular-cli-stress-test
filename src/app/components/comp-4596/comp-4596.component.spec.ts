/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4596Component } from './comp-4596.component';

describe('Comp4596Component', () => {
  let component: Comp4596Component;
  let fixture: ComponentFixture<Comp4596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
